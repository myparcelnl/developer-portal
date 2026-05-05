<script setup lang="ts">
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
</script>

<template>
  <MpHeader />

  <main class="mp-standalone">
<nav class="mp-breadcrumb">
      <a href="/" class="mp-breadcrumb__link" data-i18n="Home">Home</a>
      <span class="mp-breadcrumb__sep">/</span>
      <span class="mp-breadcrumb__current" data-i18n="About">About</span>
    </nav>

    <h1 class="mp-docs-content__title" data-i18n="About MyParcel">About MyParcel</h1>
    <p class="mp-docs-content__lede" data-i18n="MyParcel helps 15,000+ Dutch and Belgian merchants ship parcels across 20+ carriers — from solo sellers to scale-ups. This developer portal is our home for every integrator building on top of the MyParcel platform.">
      MyParcel helps 15,000+ Dutch and Belgian merchants ship parcels
      across 20+ carriers — from solo sellers to scale-ups. This
      developer portal is our home for every integrator building on
      top of the MyParcel platform.
    </p>

    <div class="mp-docs-content">
      <h2 id="brand" data-i18n="Our logo">Our logo</h2>
      <p data-i18n="Three approved variants. Keep at least 50% of the icon width as clear space around it. Don't rotate, recolor, add effects or place it inside a container.">
        Three approved variants. Keep at least 50% of the icon width as
        clear space around it. Don't rotate, recolor, add effects or
        place it inside a container.
      </p>

      <div class="mp-logo-variants">
        <div class="mp-logo-variant mp-logo-variant--fresh">
          <span class="mp-logo-variant__label">Fresh on Mint</span>
          <img src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" height="28" />
        </div>

        <div class="mp-logo-variant mp-logo-variant--deep">
          <span class="mp-logo-variant__label">Deep on white</span>
          <img src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" height="28" />
        </div>

        <div class="mp-logo-variant mp-logo-variant--white">
          <span class="mp-logo-variant__label">White on dark</span>
          <img src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" height="28" style="filter: brightness(0) invert(1);" />
        </div>
      </div>

      <h2 id="what" data-i18n="What we do">What we do</h2>
      <p data-i18n="MyParcel aggregates shipping contracts with PostNL, DHL, DPD, UPS and others into one account, one API and one set of labels. Merchants pick a plan, plug in our API (or install a plugin) and ship at scale without signing 20 carrier contracts.">
        MyParcel aggregates shipping contracts with PostNL, DHL, DPD,
        UPS and others into one account, one API and one set of
        labels. Merchants pick a plan, plug in our API (or install a
        plugin) and ship at scale without signing 20 carrier contracts.
      </p>

      <h2 id="teams" data-i18n="The teams behind this portal">The teams behind this portal</h2>
      <ul>
        <li><strong>External Integrations (INT)</strong> — <span data-i18n="owns this portal and the integrations library.">owns this portal and the integrations library.</span></li>
        <li><strong>Shipment &amp; Billing</strong> — <span data-i18n="owns the core MyParcel API and OpenAPI spec.">owns the core MyParcel API and OpenAPI spec.</span></li>
        <li><strong>Cloud Engineering</strong> — <span data-i18n="hosts developer.myparcel.com and every service behind it.">hosts <code>developer.myparcel.com</code> and every service behind it.</span></li>
        <li><strong>Customer &amp; New Products</strong> — <span data-i18n="runs account-management and billing.">runs account-management and billing.</span></li>
      </ul>

      <h2 id="open-source" data-i18n="Open source">Open source</h2>
      <p data-i18n="Most of our SDKs and plugins are open source and accept contributions. The portal itself lives at github.com/myparcelnl/developer.">
        Most of our SDKs and plugins are open source and accept
        contributions. The portal itself lives at
        <a href="https://github.com/myparcelnl/developer" target="_blank" rel="noopener">github.com/myparcelnl/developer</a>.
      </p>

      <h2 id="principles" data-i18n="Our principles">Our principles</h2>
      <ul>
        <li><strong data-i18n="Docs match reality.">Docs match reality.</strong> <span data-i18n="The API reference is auto-generated from the published OpenAPI specs.">The API reference is auto-generated from the published OpenAPI specs.</span></li>
        <li><strong data-i18n="Public by default.">Public by default.</strong> <span data-i18n="No login wall on the documentation — only live shipments need credentials.">No login wall on the documentation — only live shipments need credentials.</span></li>
        <li><strong data-i18n="Boring where it counts.">Boring where it counts.</strong> <span data-i18n="HTTP, OpenAPI, JSON. No custom protocols, no surprises.">HTTP, OpenAPI, JSON. No custom protocols, no surprises.</span></li>
      </ul>

      <h2 id="next" data-i18n="Get started">Get started</h2>
      <p>
        → <a href="/guides/getting-started.html" data-i18n="Read the getting-started guide">Read the getting-started guide</a>.<br/>
        → <a href="/contact.html" data-i18n="Or get in touch">Or get in touch</a>.
      </p>
    </div>
  </main>

  <MpFooter />
</template>
