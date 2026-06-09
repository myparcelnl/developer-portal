<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRouter, useRoutes } from 'vuepress/client';
import { isReferenceProsePath } from '../sidebar';

interface Match {
  path: string;
  title: string;
  category: string;
  order: number;
  score: number;
}

interface MatchGroup {
  category: string;
  items: Match[];
}

const router = useRouter();
const routes = useRoutes();

const query = ref('');
const open = ref(false);
const focusedIdx = ref(0);
const inputEl = ref<HTMLInputElement | null>(null);

function categorize(path: string): { category: string; order: number } {
  if (path === '/') return { category: 'Home', order: 0 };
  if (path === '/api/') return { category: 'API Reference', order: 1 };
  if (/-api\.html$/.test(path)) return { category: 'API Reference', order: 2 };
  if (isReferenceProsePath(path)) return { category: 'API Reference', order: 2 };
  if (path.startsWith('/platforms/')) return { category: 'Platform integrations', order: 4 };
  if (path.startsWith('/guides/')) return { category: 'Documentation', order: 3 };
  if (path === '/about.html' || path === '/contact.html') return { category: 'Portal', order: 5 };
  return { category: 'Other', order: 6 };
}

const allEntries = computed<Match[]>(() =>
  Object.entries(routes.value)
    .filter(([path]) => path !== '/404.html' && path !== '/search.html')
    .map(([path, route]) => {
      const { category, order } = categorize(path);
      return {
        path,
        title: (route.meta as { title?: string }).title ?? path,
        category,
        order,
        score: 0,
      };
    }),
);

const matches = computed<Match[]>(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) {
    // Empty query → show a small curated sample, grouped by category
    return allEntries.value
      .slice()
      .sort((a, b) => a.order - b.order)
      .slice(0, 12);
  }
  const results: Match[] = [];
  for (const entry of allEntries.value) {
    const t = entry.title.toLowerCase();
    const p = entry.path.toLowerCase();
    let score = 0;
    if (t === q) score = 100;
    else if (t.startsWith(q)) score = 80;
    else if (t.includes(q)) score = 60;
    else if (p.includes(q)) score = 30;
    if (score > 0) results.push({ ...entry, score });
  }
  return results.sort((a, b) => b.score - a.score).slice(0, 16);
});

const groupedMatches = computed<MatchGroup[]>(() => {
  const groups = new Map<string, Match[]>();
  const order = new Map<string, number>();
  for (const m of matches.value) {
    if (!groups.has(m.category)) {
      groups.set(m.category, []);
      order.set(m.category, m.order);
    }
    groups.get(m.category)!.push(m);
  }
  return Array.from(groups.entries())
    .sort(([a], [b]) => (order.get(a) ?? 99) - (order.get(b) ?? 99))
    .map(([category, items]) => ({ category, items }));
});

watch(matches, () => {
  focusedIdx.value = 0;
});

function flatIndex(group: number, item: number): number {
  let idx = 0;
  for (let i = 0; i < group; i++) idx += groupedMatches.value[i].items.length;
  return idx + item;
}

function openModal() {
  open.value = true;
  nextTick(() => inputEl.value?.focus());
}

function closeModal() {
  open.value = false;
  query.value = '';
}

function go(path: string) {
  closeModal();
  router.push(path);
}

function onKeydown(e: KeyboardEvent) {
  if (!open.value) return;
  if (e.key === 'Escape') {
    e.preventDefault();
    closeModal();
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    focusedIdx.value = Math.min(focusedIdx.value + 1, matches.value.length - 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    focusedIdx.value = Math.max(focusedIdx.value - 1, 0);
  } else if (e.key === 'Enter' && matches.value[focusedIdx.value]) {
    e.preventDefault();
    go(matches.value[focusedIdx.value].path);
  }
}

function onGlobalKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    open.value ? closeModal() : openModal();
  } else if (e.key === '/' && !open.value) {
    const tag = (e.target as HTMLElement | null)?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    e.preventDefault();
    openModal();
  }
}

onMounted(() => {
  window.addEventListener('keydown', onGlobalKeydown);
});
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onGlobalKeydown);
});
</script>

<template>
  <div class="mp-nav__search" @click="openModal">
    <span class="mp-nav__search-icon">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="7"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
    </span>
    <input
      type="search"
      placeholder="Search API reference…"
      readonly
      @focus="openModal"
      aria-label="Open search"
    />
    <kbd class="mp-nav__search-kbd" aria-hidden="true">⌘K</kbd>
  </div>

  <ClientOnly>
  <Teleport to="body">
    <div v-if="open" class="mp-cmdk__overlay" @click.self="closeModal" @keydown="onKeydown">
      <div class="mp-cmdk" role="dialog" aria-label="Search">
        <div class="mp-cmdk__head">
          <span class="mp-cmdk__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="7"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </span>
          <input
            ref="inputEl"
            type="search"
            class="mp-cmdk__input"
            v-model="query"
            placeholder="Search docs and APIs…"
            @keydown="onKeydown"
          />
          <button type="button" class="mp-cmdk__close" @click="closeModal" aria-label="Close">Esc</button>
        </div>

        <div v-if="matches.length" class="mp-cmdk__results">
          <div class="mp-cmdk__hint">
            <span v-if="!query">Suggested pages</span>
            <span v-else>{{ matches.length }} {{ matches.length === 1 ? 'result' : 'results' }} for <strong>"{{ query }}"</strong></span>
          </div>
          <div
            v-for="(group, gi) in groupedMatches"
            :key="group.category"
            class="mp-cmdk__group"
          >
            <div class="mp-cmdk__group-label">{{ group.category }}</div>
            <ul role="listbox">
              <li
                v-for="(m, i) in group.items"
                :key="m.path"
                role="option"
                :class="{ 'is-active': flatIndex(gi, i) === focusedIdx }"
                @mousedown.prevent="go(m.path)"
                @mouseenter="focusedIdx = flatIndex(gi, i)"
              >
                <span class="mp-cmdk__icon-wrap">
                  <svg v-if="group.category === 'API Reference'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  <svg v-else-if="group.category === 'Documentation'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                  <svg v-else-if="group.category === 'Platform integrations'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </span>
                <span class="mp-cmdk__main">
                  <span class="mp-cmdk__title">{{ m.title }}</span>
                  <span class="mp-cmdk__path">{{ m.path }}</span>
                </span>
                <svg class="mp-cmdk__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="mp-cmdk__empty">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
          <p>No results for <strong>"{{ query }}"</strong></p>
          <span>Try a different keyword or browse the documentation.</span>
        </div>

        <div class="mp-cmdk__foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  </Teleport>
  </ClientOnly>
</template>

<style scoped>
/* Trigger uses the original .mp-nav__search styles from developer-portal.css.
   We just make the readonly input non-text-cursor and the whole row clickable. */
.mp-nav__search { cursor: pointer; }
.mp-nav__search input { cursor: pointer; }

.mp-cmdk__overlay {
  position: fixed;
  inset: 0;
  background: rgb(0 38 33 / 55%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: mp-search-fade 0.15s ease-out;
}
@keyframes mp-search-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
.mp-cmdk {
  background: var(--mp-bg, #fff);
  border-radius: 16px;
  box-shadow: 0 32px 80px rgb(0 38 33 / 40%);
  width: min(640px, 100%);
  max-height: min(640px, calc(100vh - 48px));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--mp-border, #e1e6e4);
  animation: mp-search-pop 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes mp-search-pop {
  from { transform: translateY(8px) scale(0.98); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
}
.mp-cmdk__head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--mp-border-soft, #ecefed);
  background: var(--mp-bg, #fff);
}
.mp-cmdk__icon {
  color: var(--mp-fresh, #0F7859);
  display: inline-flex;
  flex-shrink: 0;
}
.mp-cmdk__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 16px;
  color: var(--mp-text, #002621);
}
.mp-cmdk__input::placeholder {
  color: var(--mp-text-faint, #8fa6a0);
}
.mp-cmdk__close {
  border: 1px solid var(--mp-border, #e1e6e4);
  background: var(--mp-bg-subtle, #f7faf9);
  color: var(--mp-text-muted, #5e7973);
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 0.04em;
}
.mp-cmdk__results {
  flex: 1;
  overflow-y: auto;
  padding: 6px;
}
.mp-cmdk__hint {
  padding: 10px 14px 6px;
  font-size: 11px;
  font-weight: 600;
  color: var(--mp-text-muted, #5e7973);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.mp-cmdk__hint strong {
  color: var(--mp-fresh, #0F7859);
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0;
}
.mp-cmdk__group {
  margin-bottom: 4px;
}
.mp-cmdk__group-label {
  padding: 10px 14px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mp-text-muted, #5e7973);
}
.mp-cmdk__group ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.mp-cmdk__group li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.08s, transform 0.08s;
}
.mp-cmdk__group li.is-active {
  background: var(--mp-mint, #E6F1EE);
}
.mp-cmdk__group li.is-active .mp-cmdk__arrow {
  opacity: 1;
  transform: translateX(0);
}
.mp-cmdk__icon-wrap {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--mp-bg-subtle, #f7faf9);
  border: 1px solid var(--mp-border-soft, #ecefed);
  border-radius: 8px;
  color: var(--mp-fresh, #0F7859);
}
.mp-cmdk__group li.is-active .mp-cmdk__icon-wrap {
  background: #fff;
  border-color: var(--mp-fresh, #0F7859);
}
.mp-cmdk__main {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}
.mp-cmdk__title {
  color: var(--mp-deep, #002621);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mp-cmdk__path {
  color: var(--mp-text-muted, #5e7973);
  font-family: var(--mp-mono, ui-monospace, monospace);
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mp-cmdk__arrow {
  color: var(--mp-fresh, #0F7859);
  flex-shrink: 0;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.1s, transform 0.1s;
}
.mp-cmdk__empty {
  padding: 48px 24px;
  color: var(--mp-text-muted, #5e7973);
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.mp-cmdk__empty svg {
  color: var(--mp-text-faint, #8fa6a0);
}
.mp-cmdk__empty p {
  margin: 0;
  color: var(--mp-deep, #002621);
  font-size: 15px;
}
.mp-cmdk__empty strong {
  color: var(--mp-fresh, #0F7859);
}
.mp-cmdk__empty span {
  font-size: 13px;
}
.mp-cmdk__foot {
  display: flex;
  gap: 14px;
  padding: 10px 16px;
  border-top: 1px solid var(--mp-border-soft, #ecefed);
  font-size: 11px;
  color: var(--mp-text-muted, #5e7973);
  background: var(--mp-bg-subtle, #f7faf9);
}
.mp-cmdk__foot kbd {
  display: inline-block;
  margin-right: 4px;
  padding: 2px 6px;
  background: #fff;
  border: 1px solid var(--mp-border, #e1e6e4);
  border-radius: 4px;
  font-family: var(--mp-mono, ui-monospace, monospace);
  font-size: 10px;
  font-weight: 600;
}
</style>
