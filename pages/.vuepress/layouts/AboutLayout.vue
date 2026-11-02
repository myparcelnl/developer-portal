<script setup lang="ts">
import MpHeader from '../components/MpHeader.vue';
import MpFooter from '../components/MpFooter.vue';
</script>

<template>
  <MpHeader />

  <main id="mp-main" tabindex="-1" class="mp-page mp-about">
    <!-- ============================================================
         INTRO: the statement on white, the facts on Deep Green
    ============================================================ -->
    <section class="mp-about__intro">
      <div class="mp-about__lead">
        <nav class="mp-breadcrumb">
          <a href="/" class="mp-breadcrumb__link" data-i18n="Home">Home</a>
          <span class="mp-breadcrumb__sep">/</span>
          <span class="mp-breadcrumb__current" data-i18n="About">About</span>
        </nav>
        <h1 class="mp-about__title" data-i18n="About MyParcel">About MyParcel</h1>
        <p class="mp-about__lede" data-i18n="MyParcel helps 15,000+ Dutch and Belgian merchants ship parcels across 20+ carriers, from solo sellers to scale-ups. This developer portal is our home for every integrator building on top of the MyParcel platform.">
          MyParcel helps 15,000+ Dutch and Belgian merchants ship parcels across 20+ carriers, from solo sellers to scale-ups. This
          developer portal is our home for every integrator building on
          top of the MyParcel platform.
        </p>
      </div>
      <dl class="mp-about__facts">
        <div><dt>15,000+</dt><dd data-i18n="merchants in the Netherlands and Belgium">merchants in the Netherlands and Belgium</dd></div>
        <div><dt>20+</dt><dd data-i18n="carriers behind one account">carriers behind one account</dd></div>
        <div><dt>1</dt><dd data-i18n="API and one set of labels">API and one set of labels</dd></div>
      </dl>
    </section>

    <!-- ============================================================
         WHAT WE DO
    ============================================================ -->
    <section id="what" class="mp-about__row">
      <h2 class="mp-about__h2" data-i18n="What we do">What we do</h2>
      <div class="mp-about__body">
        <p class="mp-about__big" data-i18n="MyParcel aggregates shipping contracts with PostNL, DHL, DPD, UPS and others into one account, one API and one set of labels. Merchants pick a plan, plug in our API (or install a plugin) and ship at scale without signing 20 carrier contracts.">
          MyParcel aggregates shipping contracts with PostNL, DHL, DPD,
          UPS and others into one account, one API and one set of
          labels. Merchants pick a plan, plug in our API (or install a
          plugin) and ship at scale without signing 20 carrier contracts.
        </p>
      </div>
    </section>

    <!-- ============================================================
         PRINCIPLES: statements, not cards
    ============================================================ -->
    <section id="principles" class="mp-about__row">
      <h2 class="mp-about__h2" data-i18n="Our principles">Our principles</h2>
      <ul class="mp-about__principles">
        <li>
          <strong data-i18n="Docs match reality.">Docs match reality.</strong>
          <span data-i18n="The API reference is auto-generated from the published OpenAPI specs.">The API reference is auto-generated from the published OpenAPI specs.</span>
        </li>
        <li>
          <strong data-i18n="Public by default.">Public by default.</strong>
          <span data-i18n="No login wall on the documentation. Only live shipments need credentials.">No login wall on the documentation. Only live shipments need credentials.</span>
        </li>
        <li>
          <strong data-i18n="Boring where it counts.">Boring where it counts.</strong>
          <span data-i18n="HTTP, OpenAPI, JSON. No custom protocols, no surprises.">HTTP, OpenAPI, JSON. No custom protocols, no surprises.</span>
        </li>
      </ul>
    </section>

    <!-- ============================================================
         TEAMS
    ============================================================ -->
    <section id="teams" class="mp-about__row">
      <h2 class="mp-about__h2" data-i18n="The teams behind this portal">The teams behind this portal</h2>
      <dl class="mp-about__teams">
        <div><dt>External Integrations (INT)</dt><dd data-i18n="owns this portal and the integrations library.">owns this portal and the integrations library.</dd></div>
        <div><dt>Shipment &amp; Billing</dt><dd data-i18n="owns the core Shipment API and OpenAPI spec.">owns the core Shipment API and OpenAPI spec.</dd></div>
        <div><dt>Cloud Engineering</dt><dd data-i18n="hosts developer.myparcel.com and every service behind it.">hosts developer.myparcel.com and every service behind it.</dd></div>
        <div><dt>Customer &amp; New Products</dt><dd data-i18n="runs account-management and billing.">runs account-management and billing.</dd></div>
      </dl>
    </section>

    <!-- ============================================================
         OPEN SOURCE on Deep Green
    ============================================================ -->
    <section id="open-source" class="mp-about__band">
      <div class="mp-about__band-inner">
        <h2 class="mp-about__h2" data-i18n="Open source">Open source</h2>
        <div>
          <p class="mp-about__big" data-i18n="Most of our SDKs and plugins are open source and accept contributions. So is this portal.">Most of our SDKs and plugins are open source and accept contributions. So is this portal.</p>
          <div class="mp-about__band-links">
            <a class="mp-btn mp-btn--primary" href="https://github.com/myparcelnl" target="_blank" rel="noopener">github.com/myparcelnl</a>
            <a class="mp-about__band-link" href="https://github.com/myparcelnl/developer-portal" target="_blank" rel="noopener">myparcelnl/developer-portal</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         LOGO
    ============================================================ -->
    <section id="brand" class="mp-about__row">
      <div>
        <h2 class="mp-about__h2" data-i18n="Our logo">Our logo</h2>
        <p class="mp-about__note" data-i18n="Three approved variants. Keep at least 50% of the icon width as clear space around it. Don't rotate, recolor, add effects or place it inside a container.">
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
    </section>

    <!-- ============================================================
         NEXT
    ============================================================ -->
    <section id="next" class="mp-about__row mp-about__row--last">
      <h2 class="mp-about__h2" data-i18n="Get started">Get started</h2>
      <div class="mp-about__next">
        <a class="mp-arrow-link" href="/guides/getting-started.html"><span data-i18n="Read the getting-started guide">Read the getting-started guide</span></a>
        <a class="mp-arrow-link" href="/contact.html"><span data-i18n="Get in touch">Get in touch</span></a>
      </div>
    </section>
  </main>

  <MpFooter />
</template>
