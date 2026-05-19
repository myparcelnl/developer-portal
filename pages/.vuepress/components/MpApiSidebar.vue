<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { usePageData } from 'vuepress/client';

interface Endpoint {
  slug: string;
  method: string;
  path: string;
  summary: string;
}

const page = usePageData();

const endpoints = computed<Endpoint[]>(() => {
  const out: Endpoint[] = [];
  for (const h2 of page.value.headers ?? []) {
    if (h2.level === 2) {
      // children are h3 headers — endpoints
      for (const h3 of h2.children ?? []) {
        if (h3.level !== 3) continue;
        const t = h3.title.trim();
        // Markdown looked like: "GET /shipments"
        const match = t.match(/^(GET|POST|PUT|PATCH|DELETE|DEL)\s+(\S.*)$/i);
        if (match) {
          out.push({
            slug: h3.slug,
            method: match[1].toUpperCase().replace(/^DELETE$/, 'DEL'),
            path: match[2],
            summary: t,
          });
        } else {
          out.push({ slug: h3.slug, method: '', path: t, summary: t });
        }
      }
    }
  }
  return out;
});

const activeSlug = ref('');

function onScroll() {
  const headers = endpoints.value
    .map((e) => document.getElementById(e.slug))
    .filter((el): el is HTMLElement => !!el);
  const top = window.scrollY + 120;
  let current = headers[0]?.id ?? '';
  for (const h of headers) {
    if (h.offsetTop <= top) current = h.id;
    else break;
  }
  activeSlug.value = current;
}

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});

function methodClass(m: string) {
  return `mp-method mp-method--${m.toLowerCase().replace('del', 'delete')}`;
}
</script>

<template>
  <aside class="mp-sidebar">
    <a href="/" class="mp-sidebar__back">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      <span>Back to portal</span>
    </a>

    <div class="mp-sidebar__group-label">Endpoints</div>

    <a
      v-for="ep in endpoints"
      :key="ep.slug"
      :href="`#${ep.slug}`"
      class="mp-sidebar__item"
      :class="{ 'mp-sidebar__item--active': ep.slug === activeSlug }"
    >
      <span v-if="ep.method" :class="methodClass(ep.method)">{{ ep.method }}</span>
      <span>{{ ep.path }}</span>
    </a>
  </aside>
</template>
