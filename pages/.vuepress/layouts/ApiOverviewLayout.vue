<script setup lang="ts">
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
import MpApiOverviewSidebar from '../components/MpApiOverviewSidebar.vue';
import MpDownloadSpecs from '../components/MpDownloadSpecs.vue';
</script>

<template>
  <MpHeader />

  <div class="mp-ref-layout">
    <MpApiOverviewSidebar />

    <main class="mp-ref-content">
<nav class="mp-breadcrumb" aria-label="Breadcrumb">
        <a href="/" class="mp-breadcrumb__link" data-i18n="Home">Home</a>
        <span class="mp-breadcrumb__sep">/</span>
        <span class="mp-breadcrumb__current" data-i18n="API Reference">API Reference</span>
      </nav>

      <header class="mp-ref-hub">
        <div class="mp-ref-hub__eyebrow" data-i18n="API REFERENCE">API REFERENCE</div>
        <h1 class="mp-ref-hub__title" data-i18n="API Overview">API Overview</h1>
        <p class="mp-ref-hub__lead" data-i18n="Every MyParcel API, in one place. Pick a service to browse its endpoints, schemas and code samples — all auto-generated from the live OpenAPI specs.">
          Every MyParcel API, in one place. Pick a service to browse its
          endpoints, schemas and code samples — all auto-generated from the
          live OpenAPI specs.
        </p>
        <div class="mp-ref-hub__meta">
          <span data-i18n="10 APIs">10 APIs</span>
          <span data-i18n="Auto-generated from OpenAPI">Auto-generated from OpenAPI</span>
          <span class="mp-freshness"><span class="mp-freshness__dot"></span><span data-i18n="Updated 2h ago">Updated 2h ago</span></span>
        </div>
        <div class="mp-ref-hub__actions">
          <MpDownloadSpecs />
        </div>
      </header>

      <section class="mp-ref-section">
        <div class="mp-ref-section__head">
          <h2 class="mp-ref-section__title" data-i18n="Available APIs">Available APIs</h2>
          <p class="mp-ref-section__sub" data-i18n="Click a card to open its reference — endpoints, parameters and code samples.">Click a card to open its reference — endpoints, parameters and code samples.</p>
        </div>

        <div class="mp-api-grid" style="max-width:none;">

          <a href="/api/myparcel.html" class="mp-api-card">
            <div class="mp-api-card__top">
              <div class="mp-api-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <path d="M3.3 7 12 12l8.7-5M12 22V12"/>
                </svg>
              </div>
              <span class="mp-api-card__badge">v2</span>
            </div>
            <div class="mp-api-card__name">Shipment API</div>
            <div class="mp-api-card__url">api.myparcel.nl</div>
            <p class="mp-api-card__desc" data-i18n="Shipments, delivery options, drop-off/pickup locations, track & trace, notifications and webhooks — the core shipping API.">Shipments, delivery options, drop-off/pickup locations, track &amp; trace, notifications and webhooks — the core shipping API.</p>
            <div class="mp-api-card__meta">
              <span class="mp-freshness"><span class="mp-freshness__dot"></span><span data-i18n="29 endpoints">29 endpoints</span></span>
              <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
            </div>
          </a>

          <a href="/api/order.html" class="mp-api-card">
            <div class="mp-api-card__top">
              <div class="mp-api-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </div>
              <span class="mp-api-card__badge">v1</span>
            </div>
            <div class="mp-api-card__name">Order API</div>
            <div class="mp-api-card__url">order.api.myparcel.nl</div>
            <p class="mp-api-card__desc" data-i18n="Orders, packages, picklists, packing slips and assignment flows.">Orders, packages, picklists, packing slips and assignment flows.</p>
            <div class="mp-api-card__meta">
              <span class="mp-freshness"><span class="mp-freshness__dot"></span><span data-i18n="14 endpoints">14 endpoints</span></span>
              <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
            </div>
          </a>

          <a href="/api/rule.html" class="mp-api-card">
            <div class="mp-api-card__top">
              <div class="mp-api-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h10M4 18h6"/></svg>
              </div>
              <span class="mp-api-card__badge">v1</span>
            </div>
            <div class="mp-api-card__name">Rule API</div>
            <div class="mp-api-card__url">rule.api.myparcel.nl</div>
            <p class="mp-api-card__desc" data-i18n="Configure order rule groups to automate fulfilment decisions per shop.">Configure order rule groups to automate fulfilment decisions per shop.</p>
            <div class="mp-api-card__meta">
              <span class="mp-freshness"><span class="mp-freshness__dot"></span><span data-i18n="4 endpoints">4 endpoints</span></span>
              <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
            </div>
          </a>

          <a href="/api/address.html" class="mp-api-card">
            <div class="mp-api-card__top">
              <div class="mp-api-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span class="mp-api-card__badge">v1</span>
            </div>
            <div class="mp-api-card__name">Address API</div>
            <div class="mp-api-card__url">address.api.myparcel.nl</div>
            <p class="mp-api-card__desc" data-i18n="Look up and validate addresses against postal data.">Look up and validate addresses against postal data.</p>
            <div class="mp-api-card__meta">
              <span class="mp-freshness"><span class="mp-freshness__dot"></span><span data-i18n="2 endpoints">2 endpoints</span></span>
              <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
            </div>
          </a>

          <a href="/api/printing.html" class="mp-api-card">
            <div class="mp-api-card__top">
              <div class="mp-api-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              </div>
              <span class="mp-api-card__badge">v1</span>
            </div>
            <div class="mp-api-card__name">Printing API</div>
            <div class="mp-api-card__url">printing.api.myparcel.nl</div>
            <p class="mp-api-card__desc" data-i18n="Direct printing — manage printers, printer groups and sync status.">Direct printing — manage printers, printer groups and sync status.</p>
            <div class="mp-api-card__meta">
              <span class="mp-freshness"><span class="mp-freshness__dot"></span><span data-i18n="11 endpoints">11 endpoints</span></span>
              <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
            </div>
          </a>

          <a href="/api/product.html" class="mp-api-card">
            <div class="mp-api-card__top">
              <div class="mp-api-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7" y2="7"/></svg>
              </div>
              <span class="mp-api-card__badge">v1</span>
            </div>
            <div class="mp-api-card__name">Product API</div>
            <div class="mp-api-card__url">product.api.myparcel.nl</div>
            <p class="mp-api-card__desc" data-i18n="Product catalog: create, update, query products and manage inventory.">Product catalog: create, update, query products and manage inventory.</p>
            <div class="mp-api-card__meta">
              <span class="mp-freshness"><span class="mp-freshness__dot"></span><span data-i18n="4 endpoints">4 endpoints</span></span>
              <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
            </div>
          </a>

          <a href="/api/purchase-order.html" class="mp-api-card">
            <div class="mp-api-card__top">
              <div class="mp-api-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h12v18H3V9l6-6zM9 3v6H3"/></svg>
              </div>
              <span class="mp-api-card__badge">v1</span>
            </div>
            <div class="mp-api-card__name">Purchase Order API</div>
            <div class="mp-api-card__url">purchase-order.api.myparcel.nl</div>
            <p class="mp-api-card__desc" data-i18n="Manage purchase orders — creation, receipts, inventory intake.">Manage purchase orders — creation, receipts, inventory intake.</p>
            <div class="mp-api-card__meta">
              <span class="mp-freshness"><span class="mp-freshness__dot"></span><span data-i18n="12 endpoints">12 endpoints</span></span>
              <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
            </div>
          </a>

          <a href="/api/event.html" class="mp-api-card">
            <div class="mp-api-card__top">
              <div class="mp-api-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <span class="mp-api-card__badge">soon</span>
            </div>
            <div class="mp-api-card__name">Event API</div>
            <div class="mp-api-card__url">event.api.myparcel.nl</div>
            <p class="mp-api-card__desc" data-i18n="Platform event bus — subscribe to shipment, order and webhook events.">Platform event bus — subscribe to shipment, order and webhook events.</p>
            <div class="mp-api-card__meta">
              <span class="mp-freshness"><span class="mp-freshness__dot"></span><span data-i18n="Coming soon">Coming soon</span></span>
              <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
            </div>
          </a>

        </div>
      </section>
    </main>
  </div>

  <MpFooter />
</template>
