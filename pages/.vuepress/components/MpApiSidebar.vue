<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { usePageData } from 'vuepress/client';
import { apiList, type ApiMeta } from '../api-meta';
import {
  parseOperations,
  groupOperations,
  type OpenApiDoc,
  type OperationGroup,
} from '../composables/useOpenApi';
import { getSpec } from '../composables/useSpecCache';

interface ApiSection {
  meta: ApiMeta;
  version: string;
  groups: OperationGroup[];
  error: string | null;
  loaded: boolean;
}

const page = usePageData();
const currentSlug = computed(() => {
  const m = page.value.path.match(/^\/api\/([a-z0-9-]+)\.html$/);
  return m ? m[1] : '';
});

const sections = ref<ApiSection[]>(apiList.map(meta => ({
  meta,
  version: meta.version.replace(/^v/, ''),
  groups: [],
  error: null,
  loaded: false,
})));

// Truncate endpoint summaries so the sidebar stays one-line-per-item.
// Matches the existing prerendered HTML (which used …) at ~30 chars.
function truncate(s: string, n = 30): string {
  if (!s) return '';
  return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s;
}

// "DEL" short label for the delete method, matching the existing markup.
function methodLabel(m: string): string {
  return m === 'delete' ? 'DEL' : m.toUpperCase();
}

function isActive(slug: string): boolean {
  return slug === currentSlug.value;
}

function hrefFor(slug: string, anchor: string): string {
  // Active section: bare fragment so same-page clicks are handled in-DOM.
  return isActive(slug) ? `#${anchor}` : `/api/${slug}.html#${anchor}`;
}

async function loadOne(idx: number) {
  const sec = sections.value[idx];
  if (!sec.meta.specUrl) return;
  try {
    const spec: OpenApiDoc = await getSpec(sec.meta.specUrl);
    const overrides = sec.meta.groupOverrides ?? [];
    const ops = parseOperations(spec, overrides);
    sec.groups = groupOperations(ops, overrides);
    if (spec.info?.version) sec.version = spec.info.version;
    sec.loaded = true;
  } catch (e: any) {
    sec.error = e?.message ?? String(e);
    sec.loaded = true;
  }
}

onMounted(() => {
  sections.value.forEach((_, i) => loadOne(i));
});

watch(currentSlug, () => { /* reactive bindings handle active/open state */ });
</script>

<template>
  <aside class="mp-sidebar">
    <a href="/" class="mp-sidebar__back">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      <span data-i18n="Back to portal">Back to portal</span>
    </a>

    <details
      v-for="sec in sections"
      :key="sec.meta.slug"
      class="mp-sidebar__api"
      :open="isActive(sec.meta.slug)"
    >
      <summary
        :class="['mp-sidebar__api-summary', isActive(sec.meta.slug) && 'mp-sidebar__api-summary--active']"
      >
        <span>{{ sec.meta.name }}</span>
        <span class="mp-sidebar__api-summary-version">{{ sec.version }}</span>
        <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </summary>

      <template v-if="sec.loaded && !sec.error">
        <template v-for="group in sec.groups" :key="group.key">
          <div class="mp-sidebar__group-label">{{ group.labelSidebar }}</div>
          <a
            v-for="op in group.ops"
            :key="op.anchor"
            class="mp-sidebar__item"
            :href="hrefFor(sec.meta.slug, op.anchor)"
          >
            <span :class="['mp-method', `mp-method--${op.method}`]">{{ methodLabel(op.method) }}</span>
            <span>{{ truncate(op.summary) }}</span>
          </a>
        </template>
      </template>

      <div v-else-if="sec.error" class="mp-sidebar__group-label" style="color:#c64a2c;">
        {{ sec.error }}
      </div>
    </details>
  </aside>
</template>
