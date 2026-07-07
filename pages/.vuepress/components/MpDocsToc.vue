<script setup lang="ts">
import { computed } from 'vue';
import { usePageData } from 'vuepress/client';

const page = usePageData();
const headers = computed(() => {
  const tree = page.value.headers ?? [];
  // Flatten depth-2 + depth-3 headers
  const out: { level: number; title: string; slug: string }[] = [];
  for (const h of tree) {
    if (h.level === 2) {
      out.push({ level: 2, title: h.title, slug: h.slug });
      for (const c of h.children ?? []) {
        if (c.level === 3) out.push({ level: 3, title: c.title, slug: c.slug });
      }
    }
  }
  return out;
});
</script>

<template>
  <aside v-if="headers.length" class="mp-docs-toc">
    <div class="mp-docs-toc__label" data-i18n="On this page">On this page</div>
    <ul>
      <li v-for="h in headers" :key="h.slug" :class="{ 'is-sub': h.level === 3 }">
        <a :href="`#${h.slug}`">{{ h.title }}</a>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.mp-docs-toc li.is-sub a {
  padding-left: 1.5em;
  font-size: 0.85em;
  opacity: 0.85;
}
</style>
