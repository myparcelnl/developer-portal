<script setup lang="ts">
import { computed } from 'vue';
import { Content, usePageData, usePageFrontmatter } from 'vuepress/client';
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
import MpDocsSidebar from '../components/MpDocsSidebar.vue';
import MpDocsToc from '../components/MpDocsToc.vue';
import MpBreadcrumb from '../components/MpBreadcrumb.vue';
import HomeLayout from './HomeLayout.vue';
import ApiLayout from './ApiLayout.vue';
import ApiOverviewLayout from './ApiOverviewLayout.vue';
import AboutLayout from './AboutLayout.vue';
import ContactLayout from './ContactLayout.vue';
import IntegrationsLayout from './IntegrationsLayout.vue';
import { docsSidebar, localizeSidebar, detectLang, toSlugPath, isReferenceProsePath, BASE } from '../sidebar';

const page = usePageData();
const fm = usePageFrontmatter<Record<string, any>>();

// Active locale, derived from the current router path. The lang dropdown
// navigates the URL; we never read it from localStorage here.
const lang = computed(() => detectLang(page.value.path));

// Slug-only path (BASE + locale prefix stripped) — used for layout routing
// so /guides/foo.html, /nl/guides/foo.html and /it/guides/foo.html all behave
// identically.
const slugPath = computed(() => toSlugPath(page.value.path));

// Pages under /guides/ get the three-column docs frame.
// Single API references (*-api.html, but not /api/) get the
// dedicated ApiLayout. /api/, /about.html and /contact.html
// have their own dedicated layouts. Everything else uses the standalone frame.
const isDocs = computed(
  () =>
    slugPath.value.startsWith('/guides/') ||
    slugPath.value.startsWith('/platforms/'),
);
const isHome = computed(() => fm.value.home === true || page.value.path === '/');
const isApi = computed(() => {
  const p = slugPath.value;
  return p.startsWith('/api/') && p !== '/api/';
});
const isApiOverview = computed(() => slugPath.value === '/api/');
const isAbout = computed(() => slugPath.value === '/about.html');
const isContact = computed(() => slugPath.value === '/contact.html');
const isIntegrations = computed(() => slugPath.value === '/integrations.html');

const localizedSidebar = computed(() => localizeSidebar(docsSidebar, lang.value));

const breadcrumbTrail = computed(() => {
  const localePrefix = lang.value === 'en' ? '' : `/${lang.value}`;
  const trail: { text: string; link?: string }[] = [
    { text: 'Home', link: `${BASE}${localePrefix || '/'}` },
  ];
  if (isReferenceProsePath(slugPath.value)) {
    trail.push({ text: 'API Reference', link: `${BASE}/api/` });
  } else if (isDocs.value) {
    trail.push({
      text: 'Documentation',
      link: `${BASE}${localePrefix}/guides/getting-started.html`,
    });
  } else if (slugPath.value.endsWith('-api.html') || slugPath.value === '/api/') {
    trail.push({ text: 'API Reference', link: `${BASE}/api/` });
  }
  trail.push({ text: page.value.title });
  return trail;
});

// Find prev/next inside the localized docs sidebar for the pager.
const flatDocs = computed(() => localizedSidebar.value.flatMap((g) => g.items));
const currentIdx = computed(() =>
  flatDocs.value.findIndex((i) => i.link === BASE + page.value.path),
);
const prev = computed(() =>
  currentIdx.value > 0 ? flatDocs.value[currentIdx.value - 1] : null,
);
const next = computed(() =>
  currentIdx.value >= 0 && currentIdx.value < flatDocs.value.length - 1
    ? flatDocs.value[currentIdx.value + 1]
    : null,
);
</script>

<template>
  <HomeLayout v-if="isHome" />
  <ApiOverviewLayout v-else-if="isApiOverview" />
  <ApiLayout v-else-if="isApi" />
  <AboutLayout v-else-if="isAbout" />
  <ContactLayout v-else-if="isContact" />
  <IntegrationsLayout v-else-if="isIntegrations" />
  <template v-else>
    <MpHeader />

    <div v-if="isDocs" class="mp-docs-layout">
      <MpDocsSidebar :groups="localizedSidebar" />

      <main class="mp-docs-content">
        <MpBreadcrumb :trail="breadcrumbTrail" />
        <h1 class="mp-docs-content__title">{{ page.title }}</h1>
        <p v-if="fm.description" class="mp-docs-content__lede">{{ fm.description }}</p>

        <div class="mp-docs-content__body">
          <Content />
        </div>

        <nav v-if="prev || next" class="mp-docs-pager">
          <a v-if="prev" :href="prev.link" class="mp-docs-pager__link mp-docs-pager__link--prev">
            <span class="mp-docs-pager__label" data-i18n="Previous">Previous</span>
            <span class="mp-docs-pager__title">← <span :data-i18n="prev.text">{{ prev.text }}</span></span>
          </a>
          <span v-else></span>
          <a v-if="next" :href="next.link" class="mp-docs-pager__link mp-docs-pager__link--next">
            <span class="mp-docs-pager__label" data-i18n="Next">Next</span>
            <span class="mp-docs-pager__title"><span :data-i18n="next.text">{{ next.text }}</span> →</span>
          </a>
          <span v-else></span>
        </nav>
      </main>

      <MpDocsToc />
    </div>

    <main v-else class="mp-standalone">
      <MpBreadcrumb :trail="breadcrumbTrail" />
      <h1 class="mp-docs-content__title">{{ page.title }}</h1>
      <p v-if="fm.description" class="mp-docs-content__lede">{{ fm.description }}</p>
      <div class="mp-docs-content">
        <Content />
      </div>
    </main>

    <MpFooter />
  </template>
</template>
