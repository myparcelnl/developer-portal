<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { usePageData, usePageFrontmatter } from 'vuepress/client';
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
import MpApiOverviewSidebar from '../components/MpApiOverviewSidebar.vue';
import { apiMeta } from '../api-meta';

// Path → API slug. /api/myparcel.html → 'myparcel'.
const page = usePageData();
const fm = usePageFrontmatter<Record<string, any>>();

const slug = computed(() => {
  const m = page.value.path.match(/^\/api\/([a-z0-9-]+)\.html$/);
  return m ? m[1] : '';
});

const pascal = (s: string) =>
  s.split('-').map(p => p[0].toUpperCase() + p.slice(1)).join('');

// Lazy-load body and sidebar components per API path so we don't bundle
// every API onto every page.
const bodies = import.meta.glob('../api-bodies/*Body.vue');
const sidebars = import.meta.glob('../api-bodies/*Sidebar.vue');

const Body = computed(() => {
  const name = `../api-bodies/${pascal(slug.value)}Body.vue`;
  return bodies[name]
    ? defineAsyncComponent(bodies[name] as () => Promise<any>)
    : null;
});

const Sidebar = computed(() => {
  const name = `../api-bodies/${pascal(slug.value)}Sidebar.vue`;
  return sidebars[name]
    ? defineAsyncComponent(sidebars[name] as () => Promise<any>)
    : null;
});

const meta = computed(() => apiMeta[page.value.path] ?? fm.value.api ?? {});
</script>

<template>
  <MpHeader />

  <div class="mp-ref-layout">
    <component :is="Sidebar" v-if="Sidebar" />
    <MpApiOverviewSidebar v-else />

    <main class="mp-ref-content">
      <nav class="mp-breadcrumb" aria-label="Breadcrumb">
        <a href="/beta-developer-portal/" class="mp-breadcrumb__link">Home</a>
        <span class="mp-breadcrumb__sep">/</span>
        <a href="/beta-developer-portal/api/" class="mp-breadcrumb__link">API Reference</a>
        <span class="mp-breadcrumb__sep">/</span>
        <span class="mp-breadcrumb__current">{{ page.title }}</span>
      </nav>

      <header class="mp-ref-hub">
        <div class="mp-ref-hub__eyebrow">API REFERENCE</div>
        <h1 class="mp-ref-hub__title">{{ page.title }}</h1>
        <p v-if="fm.description" class="mp-ref-hub__lead">{{ fm.description }}</p>
        <div v-if="meta.host || meta.version || meta.endpoints" class="mp-ref-hub__meta">
          <span v-if="meta.host"><code>{{ meta.host }}</code></span>
          <span v-if="meta.version">{{ meta.version }}</span>
          <span v-if="meta.endpoints">{{ meta.endpoints }} endpoints</span>
          <span class="mp-freshness">
            <span class="mp-freshness__dot"></span>
            <span>Synced from the live OpenAPI spec</span>
          </span>
        </div>
      </header>

      <Suspense>
        <component :is="Body" v-if="Body" />
        <template #fallback>
          <div class="mp-endpoint-skeleton" v-for="n in 4" :key="n">
            <div class="mp-endpoint-skeleton__header">
              <span class="mp-endpoint-skeleton__method"></span>
              <span class="mp-endpoint-skeleton__path"></span>
              <span class="mp-endpoint-skeleton__summary"></span>
            </div>
          </div>
        </template>
      </Suspense>
    </main>

    <aside class="mp-code-rail" id="mp-code-rail">
      <!-- Drag-handle injected here by useApiRail (sibling of the content) -->
      <div class="mp-code-rail__content" id="mp-code-rail-content">
        <div class="mp-code-rail__empty">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
          <div>
            <strong data-i18n="Pick an endpoint to see request &amp; response samples.">Pick an endpoint to see request &amp; response samples.</strong>
          </div>
          <div class="mp-code-rail__hint">
            <span data-i18n="Authenticate every request with a bearer token:">Authenticate every request with a bearer token:</span>
            <pre v-if="meta.host">curl -X GET 'https://{{ meta.host }}/' \
  -H 'Authorization: bearer &lt;token&gt;' \
  -H 'User-Agent: my-integration/1.0'</pre>
          </div>
          <div class="mp-code-rail__hint">
            <span data-i18n="Tip:">Tip:</span>
            <span data-i18n="press">press</span>
            <kbd>/</kbd>
            <span data-i18n="to filter endpoints in the sidebar.">to filter endpoints in the sidebar.</span>
          </div>
        </div>
      </div>
    </aside>
  </div>

  <MpFooter />
</template>
