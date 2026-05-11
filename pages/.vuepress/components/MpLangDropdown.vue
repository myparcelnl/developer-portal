<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { usePageData } from 'vuepress/client';
import { lang, setLang, type Lang } from '../composables/useI18n';
import { detectLang, localizeCurrentPath } from '../sidebar';

const page = usePageData();

const flags: Record<Lang, string> = {
  en: `<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6"/>
    <path d="M0 0 L60 30" stroke="#C8102E" stroke-width="2" stroke-dasharray="30,30"/>
    <path d="M60 0 L0 30" stroke="#C8102E" stroke-width="2" stroke-dasharray="30,30"/>
    <rect x="25" width="10" height="30" fill="#fff"/>
    <rect y="10" width="60" height="10" fill="#fff"/>
    <rect x="27" width="6" height="30" fill="#C8102E"/>
    <rect y="12" width="60" height="6" fill="#C8102E"/>
  </svg>`,
  nl: `<svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="9" height="2" y="0" fill="#AE1C28"/>
    <rect width="9" height="2" y="2" fill="#FFFFFF"/>
    <rect width="9" height="2" y="4" fill="#21468B"/>
  </svg>`,
  it: `<svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="3" height="6" x="0" fill="#009246"/>
    <rect width="3" height="6" x="3" fill="#FFFFFF"/>
    <rect width="3" height="6" x="6" fill="#CE2B37"/>
  </svg>`,
};

const labels: Record<Lang, string> = {
  en: 'English',
  nl: 'Nederlands',
  it: 'Italiano',
};

const langs: Lang[] = ['en', 'nl', 'it'];

const open = ref(false);
const root = ref<HTMLElement | null>(null);

onMounted(() => {
  document.addEventListener('click', onDocClick);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick);
});

function onDocClick(e: MouseEvent) {
  if (!root.value) return;
  if (!root.value.contains(e.target as Node)) open.value = false;
}

// Fallback landing when the current page has no localized version — sends the
// user into the chosen locale via the canonical getting-started guide.
const LOCALE_LANDING = '/guides/getting-started.html';

function pick(l: Lang) {
  setLang(l);
  open.value = false;
  if (typeof window === 'undefined') return;
  const here = window.location.pathname;
  let next = localizeCurrentPath(here, l);
  if (next === here) {
    // Slug wasn't in LOCALIZED_PATHS — rebuild target with /<lang>/ landing.
    const baseMatch = here.match(/^(\/[^/]+)/);
    const base = baseMatch ? baseMatch[1] : '';
    next = base + (l === 'en' ? '' : `/${l}`) + LOCALE_LANDING;
  }
  if (next !== here) window.location.href = next;
}

// The flag always reflects the URL's locale so users never see a mismatch
// between the visible page language and the dropdown. We only mutate
// lang.value directly here (not via setLang) to avoid clobbering the user's
// stored preference — that preference is what the pre-paint redirect uses
// to route them to a localized URL on subsequent visits.
watch(
  () => page.value.path,
  (p) => {
    const detected = detectLang(p);
    if (detected !== lang.value) lang.value = detected;
  },
  { immediate: true },
);

const currentFlag = computed(() => flags[lang.value]);
</script>

<template>
  <div ref="root" class="mp-lang-dropdown" :class="{ 'is-open': open }">
    <button
      type="button"
      class="mp-lang-dropdown__toggle"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-label="`Language: ${labels[lang]}`"
      @click="open = !open"
    >
      <span class="mp-flag mp-lang-dropdown__flag-slot" v-html="currentFlag"></span>
      <svg class="mp-lang-dropdown__caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </button>
    <ul v-show="open" class="mp-lang-dropdown__menu" role="listbox" aria-label="Language">
      <li v-for="l in langs" :key="l" role="none">
        <button
          type="button"
          role="option"
          class="mp-lang-btn"
          :class="{ 'mp-lang-btn--active': l === lang }"
          :aria-selected="l === lang"
          @click="pick(l)"
        >
          <span class="mp-flag" v-html="flags[l]"></span>
          <span>{{ labels[l] }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.mp-lang-dropdown__menu {
  display: block;
}
</style>
