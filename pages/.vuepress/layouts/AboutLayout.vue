<script setup lang="ts">
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
</script>

<template>
  <MpHeader />

  <main id="mp-main" tabindex="-1" class="mp-page mp-about">
    <!-- ============================================================
         HERO, as on Contact
    ============================================================ -->
    <section class="mp-phero">
      <div class="mp-phero__inner">
        <nav class="mp-breadcrumb">
          <a href="/" class="mp-breadcrumb__link" data-i18n="Home">Home</a>
          <span class="mp-breadcrumb__sep">/</span>
          <span class="mp-breadcrumb__current" data-i18n="About">About</span>
        </nav>
        <h1 class="mp-phero__title" data-i18n="About MyParcel">About MyParcel</h1>
        <p class="mp-phero__lede" data-i18n="MyParcel helps 15,000+ Dutch and Belgian merchants ship parcels across 20+ carriers, from solo sellers to scale-ups. This developer portal is our home for every integrator building on top of the MyParcel platform.">
          MyParcel helps 15,000+ Dutch and Belgian merchants ship parcels across 20+ carriers, from solo sellers to scale-ups. This
          developer portal is our home for every integrator building on
          top of the MyParcel platform.
        </p>
      </div>
    </section>

    <!-- ============================================================
         KEY FIGURES: white cards over the hero
    ============================================================ -->
    <dl class="mp-about__facts">
      <div class="mp-about__fact"><dt>15,000+</dt><dd data-i18n="merchants in the Netherlands and Belgium">merchants in the Netherlands and Belgium</dd></div>
      <div class="mp-about__fact"><dt>20+</dt><dd data-i18n="carriers behind one account">carriers behind one account</dd></div>
      <div class="mp-about__fact"><dt>1</dt><dd data-i18n="API and one set of labels">API and one set of labels</dd></div>
    </dl>

    <!-- ============================================================
         WHAT WE DO
    ============================================================ -->
    <section id="what" class="mp-about__sec mp-about__sec--split">
      <h2 class="mp-about__h2" data-i18n="What we do">What we do</h2>
      <p class="mp-about__text" data-i18n="MyParcel aggregates shipping contracts with PostNL, DHL, DPD, UPS and others into one account, one API and one set of labels. Merchants pick a plan, plug in our API (or install a plugin) and ship at scale without signing 20 carrier contracts.">
        MyParcel aggregates shipping contracts with PostNL, DHL, DPD,
        UPS and others into one account, one API and one set of
        labels. Merchants pick a plan, plug in our API (or install a
        plugin) and ship at scale without signing 20 carrier contracts.
      </p>
    </section>

    <!-- ============================================================
         PRINCIPLES
    ============================================================ -->
    <section id="principles" class="mp-about__sec">
      <h2 class="mp-about__h2" data-i18n="Our principles">Our principles</h2>
      <ul class="mp-about__cards mp-about__cards--3">
        <li class="mp-about__card">
          <strong data-i18n="Docs match reality.">Docs match reality.</strong>
          <span data-i18n="The API reference is auto-generated from the published OpenAPI specs.">The API reference is auto-generated from the published OpenAPI specs.</span>
        </li>
        <li class="mp-about__card">
          <strong data-i18n="Public by default.">Public by default.</strong>
          <span data-i18n="No login wall on the documentation. Only live shipments need credentials.">No login wall on the documentation. Only live shipments need credentials.</span>
        </li>
        <li class="mp-about__card">
          <strong data-i18n="Boring where it counts.">Boring where it counts.</strong>
          <span data-i18n="HTTP, OpenAPI, JSON. No custom protocols, no surprises.">HTTP, OpenAPI, JSON. No custom protocols, no surprises.</span>
        </li>
      </ul>
    </section>

    <!-- ============================================================
         TEAMS
    ============================================================ -->
    <section id="teams" class="mp-about__sec">
      <h2 class="mp-about__h2" data-i18n="The teams behind this portal">The teams behind this portal</h2>
      <ul class="mp-about__cards mp-about__cards--2">
        <li class="mp-about__card"><strong>External Integrations (INT)</strong><span class="mp-about__cap" data-i18n="owns this portal and the integrations library.">owns this portal and the integrations library.</span></li>
        <li class="mp-about__card"><strong>Shipment &amp; Billing</strong><span class="mp-about__cap" data-i18n="owns the core Shipment API and OpenAPI spec.">owns the core Shipment API and OpenAPI spec.</span></li>
        <li class="mp-about__card"><strong>Cloud Engineering</strong><span class="mp-about__cap" data-i18n="hosts developer.myparcel.com and every service behind it.">hosts developer.myparcel.com and every service behind it.</span></li>
        <li class="mp-about__card"><strong>Customer &amp; New Products</strong><span class="mp-about__cap" data-i18n="runs account-management and billing.">runs account-management and billing.</span></li>
      </ul>
    </section>

    <!-- ============================================================
         OPEN SOURCE + LOGO in Mint panels
    ============================================================ -->
    <section id="open-source" class="mp-about__sec">
      <div class="mp-about__panel">
        <div>
          <h2 class="mp-about__h2" data-i18n="Open source">Open source</h2>
          <p class="mp-about__text" data-i18n="Most of our SDKs and plugins are open source and accept contributions. So is this portal.">Most of our SDKs and plugins are open source and accept contributions. So is this portal.</p>
        </div>
        <div class="mp-about__links">
          <a class="mp-btn mp-btn--secondary" href="https://github.com/myparcelnl" target="_blank" rel="noopener">github.com/myparcelnl</a>
          <a class="mp-arrow-link" href="https://github.com/myparcelnl/developer-portal" target="_blank" rel="noopener">myparcelnl/developer-portal</a>
        </div>
      </div>
    </section>

    <section id="brand" class="mp-about__sec">
      <div class="mp-about__panel mp-about__panel--logo">
        <div>
          <h2 class="mp-about__h2" data-i18n="Our logo">Our logo</h2>
          <p class="mp-about__text" data-i18n="Three approved variants. Keep at least 50% of the icon width as clear space around it. Don't rotate, recolor, add effects or place it inside a container.">
            Three approved variants. Keep at least 50% of the icon width as
            clear space around it. Don't rotate, recolor, add effects or
            place it inside a container.
          </p>
        </div>
        <div class="mp-logos">
          <figure class="mp-logo mp-logo--mint">
            <img src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" height="28" />
            <figcaption>Fresh on Mint</figcaption>
          </figure>
          <figure class="mp-logo mp-logo--white">
            <img src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" height="28" />
            <figcaption>Deep on white</figcaption>
          </figure>
          <figure class="mp-logo mp-logo--deep">
            <img src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" height="28" />
            <figcaption>White on dark</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- ============================================================
         NEXT
    ============================================================ -->
    <section id="next" class="mp-about__sec mp-about__sec--last">
      <h2 class="mp-about__h2" data-i18n="Get started">Get started</h2>
      <div class="mp-about__links">
        <a class="mp-btn mp-btn--primary" href="/guides/getting-started.html" data-i18n="Read the getting-started guide">Read the getting-started guide</a>
        <a class="mp-arrow-link" href="/contact.html"><span data-i18n="Get in touch">Get in touch</span></a>
      </div>
    </section>
  </main>

  <MpFooter />
</template>
