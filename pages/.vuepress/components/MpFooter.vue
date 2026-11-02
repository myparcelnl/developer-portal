<template>
  <footer class="mp-footer">
    <div class="mp-footer__inner">
      <div class="mp-footer__col">
        <div class="mp-footer__brand">
          <img class="mp-footer__logo" src="/images/myparcel-logo.svg" alt="MyParcel" width="128" height="20" />
          <span class="mp-footer__brand-sub">Developers</span>
        </div>
        <p class="mp-footer__tagline" data-i18n="API reference generated from the published OpenAPI specs.">API reference generated from the published OpenAPI specs.</p>
        <!-- Same certification mark as the footer on myparcel.nl. -->
        <img
          class="mp-footer__cert"
          src="/images/dnv-iso-27001.png"
          alt="DNV certified management system, ISO/IEC 27001"
          data-i18n-title="ISO/IEC 27001 certified by DNV"
          title="ISO/IEC 27001 certified by DNV"
          width="80"
          height="76"
          loading="lazy"
        />
      </div>
      <div class="mp-footer__col">
        <div class="mp-footer__label" data-i18n="Product">Product</div>
        <a href="/api/" data-i18n="API Reference">API Reference</a>
        <a href="/guides/getting-started.html" data-i18n="Documentation">Documentation</a>
        <a href="/integrations.html" data-i18n="Integrations">Integrations</a>
      </div>
      <div class="mp-footer__col">
        <div class="mp-footer__label" data-i18n="Resources">Resources</div>
        <a href="https://github.com/myparcelnl" target="_blank" rel="noopener">GitHub</a>
        <a href="https://status.myparcel.nl" target="_blank" rel="noopener" data-i18n="Status page">Status page</a>
        <a href="https://myparcel-dev.slack.com" target="_blank" rel="noopener">Slack</a>
      </div>
      <div class="mp-footer__col">
        <div class="mp-footer__label" data-i18n="Support">Support</div>
        <a href="/contact.html" data-i18n="Contact">Contact</a>
      </div>
    </div>
    <div class="mp-footer__legal">
      <span>© {{ year }} MyParcel</span>
      <span>developer.myparcel.com · v1</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
