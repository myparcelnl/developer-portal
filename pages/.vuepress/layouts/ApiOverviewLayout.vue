<script setup lang="ts">
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
import MpApiOverviewSidebar from '../components/MpApiOverviewSidebar.vue';
import MpDownloadSpecs from '../components/MpDownloadSpecs.vue';
import { apiList } from '../api-meta';

// Same descriptions (and translation keys) as before; Shipment API first.
const descriptions: Record<string, string> = {
  'myparcel': 'The core shipping API: shipments, delivery options, drop-off/pickup locations, track & trace, notifications and webhooks.',
  'order': 'Orders, packages, picklists, packing slips and assignment flows.',
  'rule': 'Configure order rule groups to automate fulfilment decisions per shop.',
  'address': 'Look up and validate addresses against postal data.',
  'printing': 'Direct printing: manage printers, printer groups and sync status.',
  'product': 'Product catalog: create, update, query products and manage inventory.',
  'purchase-order': 'Manage purchase orders: creation, receipts, inventory intake.',
};
const apis = [...apiList].sort((a, b) => (a.slug === 'myparcel' ? -1 : b.slug === 'myparcel' ? 1 : 0));
</script>

<template>
  <MpHeader />

  <div class="mp-ref-layout">
    <MpApiOverviewSidebar />

    <main id="mp-main" tabindex="-1" class="mp-ref-content">
<nav class="mp-breadcrumb" aria-label="Breadcrumb">
        <a href="/" class="mp-breadcrumb__link" data-i18n="Home">Home</a>
        <span class="mp-breadcrumb__sep">/</span>
        <span class="mp-breadcrumb__current" data-i18n="API Reference">API Reference</span>
      </nav>

      <header class="mp-ref-hub">
        <h1 class="mp-ref-hub__title" data-i18n="API Overview">API Overview</h1>
        <p class="mp-ref-hub__lead" data-i18n="Every MyParcel API, in one place. Pick a service to browse its endpoints, schemas and code samples, all auto-generated from the live OpenAPI specs.">
          Every MyParcel API, in one place. Pick a service to browse its endpoints, schemas and code samples, all auto-generated from the live OpenAPI specs.
        </p>
        <div class="mp-ref-hub__meta">
          <span>{{ apiList.length }} <span data-i18n="APIs">APIs</span></span>
          <span data-i18n="Auto-generated from OpenAPI">Auto-generated from OpenAPI</span>
        </div>
        <div class="mp-ref-hub__actions">
          <MpDownloadSpecs />
        </div>
      </header>

      <section class="mp-ref-section">
        <div class="mp-ref-section__head">
          <h2 class="mp-ref-section__title" data-i18n="Available APIs">Available APIs</h2>
          <p class="mp-ref-section__sub" data-i18n="Click a card to open its reference: endpoints, parameters and code samples.">Click a card to open its reference: endpoints, parameters and code samples.</p>
        </div>

        <div class="mp-apis mp-apis--ref">
          <a v-for="a in apis" :key="a.slug" class="mp-api" :href="`/api/${a.slug}.html`">
            <span class="mp-api__name">{{ a.name }}</span>
            <code class="mp-api__host">{{ a.host }}</code>
            <span class="mp-api__desc" :data-i18n="descriptions[a.slug]">{{ descriptions[a.slug] }}</span>
            <span class="mp-api__meta">{{ a.endpoints }} <span data-i18n="endpoints">endpoints</span></span>
          </a>
        </div>
      </section>
    </main>
  </div>

  <MpFooter />
</template>
