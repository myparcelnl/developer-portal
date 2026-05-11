<script setup lang="ts">
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
</script>

<template>
  <MpHeader />

  <section class="mp-hero">
    <!-- Decorative mint-on-mint curves, kept subtle -->
    <svg class="mp-hero__bg" viewBox="0 0 1200 600" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="mp-hero-blob-a" cx="85%" cy="15%" r="45%">
          <stop offset="0%"  stop-color="#ffffff" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="mp-hero-blob-b" cx="10%" cy="90%" r="45%">
          <stop offset="0%"  stop-color="#D9E8E2" stop-opacity="1"/>
          <stop offset="100%" stop-color="#D9E8E2" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="600" fill="url(#mp-hero-blob-a)"/>
      <rect width="1200" height="600" fill="url(#mp-hero-blob-b)"/>
      <!-- Soft curved path, Monstera at low opacity -->
      <path d="M -50 450 C 200 380, 450 520, 700 420 S 1100 350, 1300 400"
            stroke="#0F7859" stroke-width="2" stroke-opacity="0.12" fill="none"/>
      <path d="M -50 500 C 250 430, 500 560, 780 460 S 1200 400, 1300 440"
            stroke="#0F7859" stroke-width="2" stroke-opacity="0.08" fill="none"/>
    </svg>

    <div class="mp-hero__inner">
      <div class="mp-hero__copy">
        <div class="mp-hero__tag">
          <span class="mp-hero__tag-dot"></span>
          <span data-i18n="DEVELOPER PORTAL · v1">DEVELOPER PORTAL · v1</span>
        </div>
        <h1 class="mp-hero__title" data-i18n="Ship smarter. Build faster.">Ship smarter. Build faster.</h1>
        <p class="mp-hero__sub" data-i18n="Everything developers need to integrate MyParcel — guides, SDKs, plugins and auto-generated API reference. Built for webshops shipping 100 or 100,000+ parcels per month.">
          Everything developers need to integrate MyParcel — guides, SDKs,
          plugins and auto-generated API reference. Built for webshops
          shipping 100 or 100,000+ parcels per month.
        </p>
        <div class="mp-hero__cta">
          <a href="/developer-portal/guides/getting-started.html" class="mp-btn mp-btn--primary">
            <span data-i18n="Get started">Get started</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="/developer-portal/api/" class="mp-btn mp-btn--tertiary">
            <span data-i18n="Browse the API">Browse the API</span>
          </a>
        </div>
      </div>

      <!-- Decorative parcel illustration (tech-flavoured, MyParcel green) -->
      <div class="mp-hero__art" aria-hidden="true">
        <svg viewBox="0 0 320 280" width="320" height="280">
          <!-- Back parcel -->
          <g transform="translate(30 60)">
            <rect width="180" height="140" rx="8" fill="#E6F1EE" stroke="#0F7859" stroke-width="2"/>
            <path d="M0 40 L180 40 M90 0 L90 140" stroke="#0F7859" stroke-width="2" stroke-dasharray="4 4" opacity="0.35"/>
            <rect x="14" y="14" width="60" height="8" rx="2" fill="#0F7859" opacity="0.4"/>
            <rect x="14" y="28" width="40" height="6" rx="2" fill="#0F7859" opacity="0.25"/>
          </g>
          <!-- Front parcel (tilted) -->
          <g transform="translate(90 120) rotate(-6)">
            <rect width="200" height="140" rx="10" fill="#ffffff" stroke="#0F5C47" stroke-width="2"/>
            <path d="M0 44 L200 44 M100 0 L100 140" stroke="#0F5C47" stroke-width="2" opacity="0.25"/>
            <!-- Orange "priority" sticker (brand accent) -->
            <circle cx="30" cy="22" r="12" fill="#FF8C00"/>
            <path d="M25 22l4 4 7-8" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Address lines -->
            <rect x="16" y="62"  width="140" height="6" rx="3" fill="#0F5C47" opacity="0.75"/>
            <rect x="16" y="78"  width="110" height="6" rx="3" fill="#0F5C47" opacity="0.5"/>
            <rect x="16" y="94"  width="130" height="6" rx="3" fill="#0F5C47" opacity="0.5"/>
            <rect x="16" y="116" width="60"  height="6" rx="3" fill="#0F5C47" opacity="0.3"/>
            <!-- Barcode -->
            <g transform="translate(150 90)" opacity="0.85">
              <rect x="0"  y="0" width="2" height="28" fill="#0F5C47"/>
              <rect x="4"  y="0" width="1" height="28" fill="#0F5C47"/>
              <rect x="7"  y="0" width="3" height="28" fill="#0F5C47"/>
              <rect x="12" y="0" width="1" height="28" fill="#0F5C47"/>
              <rect x="15" y="0" width="2" height="28" fill="#0F5C47"/>
              <rect x="19" y="0" width="1" height="28" fill="#0F5C47"/>
              <rect x="22" y="0" width="3" height="28" fill="#0F5C47"/>
              <rect x="27" y="0" width="2" height="28" fill="#0F5C47"/>
              <rect x="31" y="0" width="1" height="28" fill="#0F5C47"/>
              <rect x="34" y="0" width="2" height="28" fill="#0F5C47"/>
            </g>
          </g>
          <!-- Little floating dots -->
          <circle cx="290" cy="40"  r="4" fill="#FF8C00"/>
          <circle cx="20"  cy="230" r="3" fill="#0F7859"/>
          <circle cx="295" cy="255" r="5" fill="#0F5C47" opacity="0.4"/>
        </svg>
      </div>
    </div>
  </section>

  <!-- ============================================================
       STATS BAND
  ============================================================ -->
  <section class="mp-stats">
    <div class="mp-stats__inner">
      <div class="mp-stat">
        <div class="mp-stat__value">20+</div>
        <div class="mp-stat__label" data-i18n="carriers">carriers</div>
      </div>
      <div class="mp-stat">
        <div class="mp-stat__value">15,000+</div>
        <div class="mp-stat__label" data-i18n="webshops">webshops</div>
      </div>
      <div class="mp-stat">
        <div class="mp-stat__value">99.99%</div>
        <div class="mp-stat__label" data-i18n="API uptime">API uptime</div>
      </div>
      <div class="mp-stat">
        <div class="mp-stat__value">&lt;24h</div>
        <div class="mp-stat__label" data-i18n="docs freshness">docs freshness</div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       START PATHS (Docs + API Reference)
  ============================================================ -->
  <section class="mp-api-section">
    <div class="mp-section-label" data-i18n="START HERE">START HERE</div>
    <div class="mp-api-grid">

      <a href="/developer-portal/guides/getting-started.html" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
          </div>
          <span class="mp-api-card__badge" data-i18n="Guide">Guide</span>
        </div>
        <div class="mp-api-card__name" data-i18n="Documentation">Documentation</div>
        <div class="mp-api-card__url" data-i18n="Guides, SDKs and platform integrations">Guides, SDKs and platform integrations</div>
        <p class="mp-api-card__desc" data-i18n="Step-by-step guides for authentication, shipments, delivery options and webhooks. SDKs for PHP and JavaScript. Plugins for WooCommerce, Shopify, Magento and more.">
          Step-by-step guides for authentication, shipments, delivery
          options and webhooks. SDKs for PHP and JavaScript. Plugins
          for WooCommerce, Shopify, Magento and more.
        </p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness">
            <span class="mp-freshness__dot"></span>
            <span data-i18n="9 guides">9 guides · 2 SDKs · 12 platforms</span>
          </span>
          <div class="mp-api-card__cta">
            <span data-i18n="Open documentation">Open documentation</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </a>

      <a href="/developer-portal/api/" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <span class="mp-api-card__badge" data-i18n="Reference">Reference</span>
        </div>
        <div class="mp-api-card__name" data-i18n="API Reference">API Reference</div>
        <div class="mp-api-card__url" data-i18n="Auto-generated from OpenAPI">Auto-generated from OpenAPI</div>
        <p class="mp-api-card__desc" data-i18n="Every endpoint, every parameter, every schema — generated directly from the OpenAPI spec of the MyParcel API. Never out of date.">
          Every endpoint, every parameter, every schema — generated
          directly from the OpenAPI spec of the MyParcel API.
          Never out of date.
        </p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness">
            <span class="mp-freshness__dot"></span>
            <span data-i18n="Updated 2h ago">2 APIs · Updated 2h ago</span>
          </span>
          <div class="mp-api-card__cta">
            <span data-i18n="Open reference">Open reference</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </a>

    </div>
  </section>

  <!-- ============================================================
       API CARDS (deeper entry points per spec)
  ============================================================ -->
  <section class="mp-api-section">
    <div class="mp-section-label" data-i18n="AVAILABLE APIS">AVAILABLE APIS</div>
    <div class="mp-api-grid">

      <a href="/developer-portal/api/myparcel.html" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <path d="M3.3 7 12 12l8.7-5M12 22V12"/>
            </svg>
          </div>
          <span class="mp-api-card__badge">v2</span>
        </div>
        <div class="mp-api-card__name">MyParcel API</div>
        <div class="mp-api-card__url">api.myparcel.nl</div>
        <p class="mp-api-card__desc">Shipments, delivery options, drop-off/pickup locations, track &amp; trace, notifications and webhooks — the core shipping API.</p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness"><span class="mp-freshness__dot"></span><span>29 endpoints</span></span>
          <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
        </div>
      </a>

      <a href="/developer-portal/api/order.html" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          <span class="mp-api-card__badge">v1</span>
        </div>
        <div class="mp-api-card__name">Order API</div>
        <div class="mp-api-card__url">order.api.myparcel.nl</div>
        <p class="mp-api-card__desc">Orders, packages, picklists, packing slips and assignment flows.</p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness"><span class="mp-freshness__dot"></span><span>14 endpoints</span></span>
          <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
        </div>
      </a>

      <a href="/developer-portal/api/iam.html" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <span class="mp-api-card__badge">v1</span>
        </div>
        <div class="mp-api-card__name">IAM API</div>
        <div class="mp-api-card__url">iam.api.myparcel.nl</div>
        <p class="mp-api-card__desc">Identity: find out who the current token belongs to and what it can.</p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness"><span class="mp-freshness__dot"></span><span>1 endpoint</span></span>
          <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
        </div>
      </a>

      <a href="/developer-portal/api/rule.html" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h10M4 18h6"/></svg>
          </div>
          <span class="mp-api-card__badge">v1</span>
        </div>
        <div class="mp-api-card__name">Rule API</div>
        <div class="mp-api-card__url">rule.api.myparcel.nl</div>
        <p class="mp-api-card__desc">Configure order rule groups to automate fulfilment decisions per shop.</p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness"><span class="mp-freshness__dot"></span><span>4 endpoints</span></span>
          <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
        </div>
      </a>

      <a href="/developer-portal/api/address.html" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <span class="mp-api-card__badge">v1</span>
        </div>
        <div class="mp-api-card__name">Address API</div>
        <div class="mp-api-card__url">address.api.myparcel.nl</div>
        <p class="mp-api-card__desc">Look up and validate addresses against postal data.</p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness"><span class="mp-freshness__dot"></span><span>2 endpoints</span></span>
          <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
        </div>
      </a>

      <a href="/developer-portal/api/printing.html" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          </div>
          <span class="mp-api-card__badge">v1</span>
        </div>
        <div class="mp-api-card__name">Printing API</div>
        <div class="mp-api-card__url">printing.api.myparcel.nl</div>
        <p class="mp-api-card__desc">Direct printing — manage printers, printer groups and sync status.</p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness"><span class="mp-freshness__dot"></span><span>11 endpoints</span></span>
          <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
        </div>
      </a>

      <a href="/developer-portal/api/product.html" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7" y2="7"/></svg>
          </div>
          <span class="mp-api-card__badge">v1</span>
        </div>
        <div class="mp-api-card__name">Product API</div>
        <div class="mp-api-card__url">product.api.myparcel.nl</div>
        <p class="mp-api-card__desc">Product catalog: create, update, query products and manage inventory.</p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness"><span class="mp-freshness__dot"></span><span>4 endpoints</span></span>
          <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
        </div>
      </a>

      <a href="/developer-portal/api/delegation.html" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <span class="mp-api-card__badge">v1</span>
        </div>
        <div class="mp-api-card__name">Delegation API</div>
        <div class="mp-api-card__url">delegation.api.myparcel.nl</div>
        <p class="mp-api-card__desc">Delegate access so one account can act on behalf of another.</p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness"><span class="mp-freshness__dot"></span><span>2 endpoints</span></span>
          <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
        </div>
      </a>

      <a href="/developer-portal/api/purchase-order.html" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h12v18H3V9l6-6zM9 3v6H3"/></svg>
          </div>
          <span class="mp-api-card__badge">v1</span>
        </div>
        <div class="mp-api-card__name">Purchase Order API</div>
        <div class="mp-api-card__url">purchase-order.api.myparcel.nl</div>
        <p class="mp-api-card__desc">Manage purchase orders — creation, receipts, inventory intake.</p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness"><span class="mp-freshness__dot"></span><span>12 endpoints</span></span>
          <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
        </div>
      </a>

      <a href="/developer-portal/api/event.html" class="mp-api-card">
        <div class="mp-api-card__top">
          <div class="mp-api-card__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F7859" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <span class="mp-api-card__badge">soon</span>
        </div>
        <div class="mp-api-card__name">Event API</div>
        <div class="mp-api-card__url">event.api.myparcel.nl</div>
        <p class="mp-api-card__desc">Platform event bus — subscribe to shipment, order and webhook events.</p>
        <div class="mp-api-card__meta">
          <span class="mp-freshness"><span class="mp-freshness__dot"></span><span>Coming soon</span></span>
          <div class="mp-api-card__cta"><span data-i18n="Open reference">Open reference</span>→</div>
        </div>
      </a>

    </div>
  </section>

  <!-- ============================================================
       CARRIERS — ship with every major carrier
  ============================================================ -->
  <section class="mp-api-section mp-section-band--mint">
    <div class="mp-section-label" data-i18n="SHIP WITH">SHIP WITH</div>
    <div class="mp-logo-grid">
      <a class="mp-brand-logo mp-brand-logo--img" href="https://www.postnl.nl" target="_blank" rel="noopener" aria-label="PostNL">
        <img class="mp-brand-logo__mark" src="https://assets.myparcel.nl/skin/general-images/carrier-logos/svg/postnl.svg" alt="PostNL" loading="lazy" />
      </a>

      <a class="mp-brand-logo mp-brand-logo--img" href="https://www.dhlparcel.nl" target="_blank" rel="noopener" aria-label="DHL">
        <img class="mp-brand-logo__mark" src="https://assets.myparcel.nl/skin/general-images/carrier-logos/svg/dhl.svg" alt="DHL" loading="lazy" />
      </a>

      <a class="mp-brand-logo mp-brand-logo--img" href="https://www.dpd.com/nl" target="_blank" rel="noopener" aria-label="DPD">
        <img class="mp-brand-logo__mark" src="https://assets.myparcel.nl/skin/general-images/carrier-logos/svg/dpd.svg" alt="DPD" loading="lazy" />
      </a>

      <a class="mp-brand-logo mp-brand-logo--img" href="https://www.ups.com/nl" target="_blank" rel="noopener" aria-label="UPS">
        <img class="mp-brand-logo__mark" src="https://assets.myparcel.nl/skin/general-images/carrier-logos/svg/ups.svg" alt="UPS" loading="lazy" />
      </a>

      <a class="mp-brand-logo mp-brand-logo--img" href="https://www.bpost.be" target="_blank" rel="noopener" aria-label="bpost">
        <img class="mp-brand-logo__mark" src="https://assets.myparcel.nl/skin/general-images/carrier-logos/svg/bpost.svg" alt="bpost" loading="lazy" />
      </a>

      <a class="mp-brand-logo mp-brand-logo--img" href="https://www.gls-pakket.nl" target="_blank" rel="noopener" aria-label="GLS">
        <img class="mp-brand-logo__mark" src="https://assets.myparcel.nl/skin/general-images/carrier-logos/svg/gls.svg" alt="GLS" loading="lazy" />
      </a>

      <a class="mp-brand-logo mp-brand-logo--img" href="https://www.trunkrs.nl" target="_blank" rel="noopener" aria-label="Trunkrs">
        <img class="mp-brand-logo__mark" src="https://assets.myparcel.nl/skin/general-images/carrier-logos/svg/trunkrs.svg" alt="Trunkrs" loading="lazy" />
      </a>

      <a class="mp-brand-logo mp-brand-logo--img" href="https://www.cheapcargo.com" target="_blank" rel="noopener" aria-label="CheapCargo">
        <img class="mp-brand-logo__mark" src="https://assets.myparcel.nl/skin/general-images/carrier-logos/svg/cheapcargo.svg" alt="CheapCargo" loading="lazy" />
      </a>
    </div>
  </section>

  <!-- ============================================================
       INTEGRATIONS — e-commerce platforms
  ============================================================ -->
  <section class="mp-api-section">
    <div class="mp-section-label" data-i18n="PLATFORM INTEGRATIONS">PLATFORM INTEGRATIONS</div>
    <div class="mp-platform-grid">
      <a class="mp-platform" href="/developer-portal/platforms/woocommerce.html">
        <img class="mp-platform__img" src="/images/integrations/woocommerce.svg" alt="" width="48" height="48" loading="lazy">
        <span class="mp-platform__name">WooCommerce</span>
      </a>
      <a class="mp-platform" href="/developer-portal/platforms/magento2.html">
        <img class="mp-platform__img" src="/images/integrations/magento.svg" alt="" width="48" height="48" loading="lazy">
        <span class="mp-platform__name">Magento 2</span>
      </a>
      <a class="mp-platform" href="/developer-portal/platforms/prestashop.html">
        <img class="mp-platform__img" src="/images/integrations/prestashop.svg" alt="" width="48" height="48" loading="lazy">
        <span class="mp-platform__name">PrestaShop</span>
      </a>
      <a class="mp-platform" href="/developer-portal/platforms/amazon.html">
        <img class="mp-platform__img" src="/images/integrations/amazon.svg" alt="" width="48" height="48" loading="lazy">
        <span class="mp-platform__name">Amazon</span>
      </a>
    </div>
  </section>

  <MpFooter />
</template>
