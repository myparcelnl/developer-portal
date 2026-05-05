<template>
  <footer class="mp-footer">
    <div class="mp-footer__inner">
      <div class="mp-footer__col">
        <div class="mp-footer__brand">
          <img class="mp-footer__logo" src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" width="128" height="20" />
          <span class="mp-footer__brand-sub">Developers</span>
        </div>
        <p class="mp-footer__tagline">Docs generated from OpenAPI. Never out of date.</p>
      </div>
      <div class="mp-footer__col">
        <div class="mp-footer__label">Product</div>
        <a href="/beta-developer-portal/api/">API Reference</a>
        <a href="/beta-developer-portal/guides/getting-started.html">Documentation</a>
        <a href="/beta-developer-portal/platforms/woocommerce.html">Integrations</a>
      </div>
      <div class="mp-footer__col">
        <div class="mp-footer__label">Resources</div>
        <a href="https://github.com/myparcelnl" target="_blank" rel="noopener">GitHub</a>
        <a href="https://status.myparcel.nl" target="_blank" rel="noopener">Status page</a>
        <a href="https://myparcel-dev.slack.com" target="_blank" rel="noopener">Slack</a>
      </div>
      <div class="mp-footer__col">
        <div class="mp-footer__label">Support</div>
        <a href="/beta-developer-portal/contact.html">Contact</a>
        <a href="/beta-developer-portal/analytics.html">Analytics (INT)</a>
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
