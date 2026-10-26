<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { onContentUpdated } from 'vuepress/client';

interface TocItem {
  level: 2 | 3;
  title: string;
  slug: string;
}

// VuePress 2 rc no longer ships `page.headers` in the page data, so the
// outline is read from the rendered headings instead. The aside stays
// mounted (hidden when empty) so the runtime translator reaches its label.
const headers = ref<TocItem[]>([]);
const active = ref('');
let headingEls: HTMLElement[] = [];
let raf: number | null = null;

function collect() {
  const body = document.querySelector('.mp-docs-content__body');
  headingEls = body ? Array.from(body.querySelectorAll<HTMLElement>('h2[id], h3[id]')) : [];
  headers.value = headingEls.map((el) => ({
    level: el.tagName === 'H2' ? 2 : 3,
    slug: el.id,
    title: (el.textContent ?? '').trim(),
  }));
  updateActive();
}

// Active = the last heading that has scrolled past the sticky navbar.
function updateActive() {
  raf = null;
  const offset = 120;
  let current = headingEls[0]?.id ?? '';
  for (const el of headingEls) {
    if (el.getBoundingClientRect().top - offset > 0) break;
    current = el.id;
  }
  active.value = current;
}

function onScroll() {
  if (raf === null) raf = requestAnimationFrame(updateActive);
}

onContentUpdated(collect);
onMounted(() => {
  collect();
  window.addEventListener('scroll', onScroll, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  if (raf !== null) cancelAnimationFrame(raf);
});
</script>

<template>
  <aside class="mp-docs-toc" :class="{ 'mp-docs-toc--empty': !headers.length }" aria-labelledby="mp-docs-toc-label">
    <div id="mp-docs-toc-label" class="mp-docs-toc__label" data-i18n="On this page">On this page</div>
    <ul>
      <li v-for="h in headers" :key="h.slug" :class="{ 'is-sub': h.level === 3 }">
        <a
          :href="`#${h.slug}`"
          :class="{ 'is-active': h.slug === active }"
          :aria-current="h.slug === active ? 'location' : undefined"
        >{{ h.title }}</a>
      </li>
    </ul>
  </aside>
</template>
