import { defineClientConfig } from 'vuepress/client';
import Layout from './layouts/Layout.vue';
import HomeLayout from './layouts/HomeLayout.vue';
import ApiLayout from './layouts/ApiLayout.vue';
import ApiOverviewLayout from './layouts/ApiOverviewLayout.vue';
import AboutLayout from './layouts/AboutLayout.vue';
import ContactLayout from './layouts/ContactLayout.vue';
import { applyTranslationsTo } from './composables/useI18n';
import { initApiPage } from './composables/useApiInteractions';
import { initMobileSidebars } from './composables/useMobileSidebar';
import { initApiSidebar } from './composables/useApiSidebar';
import { tidyParamsTables } from './composables/useApiTables';
import { buildApiToc } from './composables/useApiToc';
import { attachCopyButtons } from './composables/useCodeCopy';
import { attachEndpointAnchors } from './composables/useApiAnchors';
import { attachDocsAnchors } from './composables/useDocsAnchors';
import { refreshApiKeyboard } from './composables/useApiKeyboard';
import { initApiRail } from './composables/useApiRail';

function refreshClientBehaviors() {
  if (typeof window === 'undefined') return;
  initApiPage();
  initMobileSidebars();
  initApiSidebar();
  tidyParamsTables();
  buildApiToc();
  attachCopyButtons();
  attachEndpointAnchors();
  attachDocsAnchors();
  initApiRail();
  refreshApiKeyboard();
  applyTranslationsTo();
}

export default defineClientConfig({
  layouts: {
    Layout,
    HomeLayout,
    ApiLayout,
    ApiOverviewLayout,
    AboutLayout,
    ContactLayout,
  },
  enhance({ router }) {
    if (typeof window === 'undefined') return;
    router.afterEach(() => {
      // Wait for the new view to render before walking the DOM.
      setTimeout(refreshClientBehaviors, 30);
    });
  },
  setup() {
    if (typeof window !== 'undefined') {
      setTimeout(refreshClientBehaviors, 30);
    }
  },
});
