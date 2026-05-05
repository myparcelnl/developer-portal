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
import { docsSidebar } from '../sidebar';

const page = usePageData();
const fm = usePageFrontmatter<Record<string, any>>();

// Pages under /guides/ get the three-column docs frame.
// Single API references (*-api.html, but not /api/) get the
// dedicated ApiLayout. /api/, /about.html and /contact.html
// have their own dedicated layouts. Everything else uses the standalone frame.
const isDocs = computed(
  () =>
    page.value.path.startsWith('/guides/') ||
    page.value.path.startsWith('/platforms/'),
);
const isHome = computed(() => fm.value.home === true || page.value.path === '/');
const isApi = computed(() => {
  const p = page.value.path;
  return p.startsWith('/api/') && p !== '/api/';
});
const isApiOverview = computed(() => page.value.path === '/api/');
const isAbout = computed(() => page.value.path === '/about.html');
const isContact = computed(() => page.value.path === '/contact.html');

const breadcrumbTrail = computed(() => {
  const trail: { text: string; link?: string }[] = [
    { text: 'Home', link: '/beta-developer-portal/' },
  ];
  if (isDocs.value) {
    trail.push({ text: 'Documentation', link: '/beta-developer-portal/guides/getting-started.html' });
  } else if (page.value.path.endsWith('-api.html') || page.value.path === '/api/') {
    trail.push({ text: 'API Reference', link: '/beta-developer-portal/api/' });
  }
  trail.push({ text: page.value.title });
  return trail;
});

// Find prev/next inside the docs sidebar for the pager.
const flatDocs = docsSidebar.flatMap((g) => g.items);
const BASE = '/beta-developer-portal';
const currentIdx = computed(() =>
  flatDocs.findIndex((i) => i.link === BASE + page.value.path),
);
const prev = computed(() =>
  currentIdx.value > 0 ? flatDocs[currentIdx.value - 1] : null,
);
const next = computed(() =>
  currentIdx.value >= 0 && currentIdx.value < flatDocs.length - 1
    ? flatDocs[currentIdx.value + 1]
    : null,
);
</script>

<template>
  <HomeLayout v-if="isHome" />
  <ApiOverviewLayout v-else-if="isApiOverview" />
  <ApiLayout v-else-if="isApi" />
  <AboutLayout v-else-if="isAbout" />
  <ContactLayout v-else-if="isContact" />
  <template v-else>
    <MpHeader />

    <div v-if="isDocs" class="mp-docs-layout">
      <MpDocsSidebar :groups="docsSidebar" />

      <main class="mp-docs-content">
        <MpBreadcrumb :trail="breadcrumbTrail" />
        <h1 class="mp-docs-content__title">{{ page.title }}</h1>
        <p v-if="fm.description" class="mp-docs-content__lede">{{ fm.description }}</p>

        <div class="mp-docs-content__body">
          <Content />
        </div>

        <nav v-if="prev || next" class="mp-docs-pager">
          <a v-if="prev" :href="prev.link" class="mp-docs-pager__link mp-docs-pager__link--prev">
            <span class="mp-docs-pager__label">Previous</span>
            <span class="mp-docs-pager__title">← {{ prev.text }}</span>
          </a>
          <span v-else></span>
          <a v-if="next" :href="next.link" class="mp-docs-pager__link mp-docs-pager__link--next">
            <span class="mp-docs-pager__label">Next</span>
            <span class="mp-docs-pager__title">{{ next.text }} →</span>
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
