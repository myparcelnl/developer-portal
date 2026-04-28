/* ============================================================
   MyParcel Developer Portal — shared chrome (header + footer)
   ============================================================
   Defines two custom elements — <mp-header> and <mp-footer> —
   so every page can include the nav and footer with a single
   tag instead of duplicating the markup. Link paths adapt to
   the page's location depth automatically.

   Usage:
     <mp-header></mp-header>
     ... page content ...
     <mp-footer></mp-footer>
     <script src="{path}/js/chrome.js"></script>
     <script src="{path}/js/portal.js"></script>
   Load chrome.js BEFORE portal.js so the nav is in the DOM
   when portal.js attaches its event handlers.
   ============================================================ */

(function () {
  "use strict";

  /* Compact SVG flags (GB / NL / IT) — used in the language dropdown. */
  var FLAG_SVG = {
    en:
      '<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
      + '<rect width="60" height="30" fill="#012169"/>'
      + '<path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6"/>'
      + '<path d="M0 0 L60 30" stroke="#C8102E" stroke-width="2" stroke-dasharray="30,30"/>'
      + '<path d="M60 0 L0 30" stroke="#C8102E" stroke-width="2" stroke-dasharray="30,30"/>'
      + '<rect x="25" width="10" height="30" fill="#fff"/>'
      + '<rect y="10" width="60" height="10" fill="#fff"/>'
      + '<rect x="27" width="6" height="30" fill="#C8102E"/>'
      + '<rect y="12" width="60" height="6" fill="#C8102E"/>'
      + '</svg>',
    nl:
      '<svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
      + '<rect width="9" height="2" y="0" fill="#AE1C28"/>'
      + '<rect width="9" height="2" y="2" fill="#FFFFFF"/>'
      + '<rect width="9" height="2" y="4" fill="#21468B"/>'
      + '</svg>',
    it:
      '<svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
      + '<rect width="3" height="6" x="0" fill="#009246"/>'
      + '<rect width="3" height="6" x="3" fill="#FFFFFF"/>'
      + '<rect width="3" height="6" x="6" fill="#CE2B37"/>'
      + '</svg>'
  };

  // Expose so portal.js can read flags on language change.
  window.MP_FLAG_SVG = FLAG_SVG;

  function toRoot() {
    var p = window.location.pathname;
    if (/\/pages\/docs\/platforms\//.test(p)) return "../../../";
    if (/\/pages\/docs\//.test(p))            return "../../";
    if (/\/pages\//.test(p))                  return "../";
    return "";
  }

  var headerHTML = function (r) {
    return ''
      + '<nav class="mp-nav">'
      + '  <a href="' + r + 'index.html" class="mp-nav__logo">'
      + '    <img class="mp-nav__logo-img" src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" width="128" height="20" />'
      + '    <span class="mp-nav__logo-sub" data-i18n="developers">Developers</span>'
      + '  </a>'
      + '  <div class="mp-nav__search">'
      + '    <span class="mp-nav__search-icon">'
      + '      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">'
      + '        <circle cx="11" cy="11" r="7"/>'
      + '        <path d="m21 21-4.3-4.3"/>'
      + '      </svg>'
      + '    </span>'
      + '    <input type="search" id="mp-search-input" placeholder="Search API reference…" data-i18n-placeholder="Search API reference…" />'
      + '    <kbd class="mp-nav__search-kbd" aria-hidden="true">⌘K</kbd>'
      + '  </div>'
      + '  <div class="mp-nav__spacer"></div>'
      + '  <div class="mp-nav__links">'
      + '    <a href="' + r + 'index.html" class="mp-nav__link" data-i18n="Home">Home</a>'
      + '    <a href="' + r + 'pages/docs/getting-started.html" class="mp-nav__link" data-i18n="Documentation">Documentation</a>'
      + '    <div class="mp-nav__item">'
      + '      <a href="' + r + 'pages/api-reference.html" class="mp-nav__link" data-i18n="API Reference">API Reference</a>'
      + '      <svg class="mp-nav__caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>'
      + '      <ul class="mp-nav__submenu" role="menu">'
      + '        <li role="none"><a role="menuitem" class="mp-nav__submenu-link" href="' + r + 'pages/api-reference.html"><span data-i18n="API Overview">API Overview</span><small data-i18n="All APIs">All APIs</small></a></li>'
      + '        <li role="none"><a role="menuitem" class="mp-nav__submenu-link" href="' + r + 'pages/myparcel-api.html">MyParcel API<small>api.myparcel.nl</small></a></li>'
      + '        <li role="none"><a role="menuitem" class="mp-nav__submenu-link" href="' + r + 'pages/order-api.html">Order API<small>order.api.myparcel.nl</small></a></li>'
      + '        <li role="none"><a role="menuitem" class="mp-nav__submenu-link" href="' + r + 'pages/iam-api.html">IAM API<small>iam.api.myparcel.nl</small></a></li>'
      + '        <li role="none"><a role="menuitem" class="mp-nav__submenu-link" href="' + r + 'pages/rule-api.html">Rule API<small>rule.api.myparcel.nl</small></a></li>'
      + '        <li role="none"><a role="menuitem" class="mp-nav__submenu-link" href="' + r + 'pages/address-api.html">Address API<small>address.api.myparcel.nl</small></a></li>'
      + '        <li role="none"><a role="menuitem" class="mp-nav__submenu-link" href="' + r + 'pages/printing-api.html">Printing API<small>printing.api.myparcel.nl</small></a></li>'
      + '        <li role="none"><a role="menuitem" class="mp-nav__submenu-link" href="' + r + 'pages/product-api.html">Product API<small>product.api.myparcel.nl</small></a></li>'
      + '        <li role="none"><a role="menuitem" class="mp-nav__submenu-link" href="' + r + 'pages/delegation-api.html">Delegation API<small>delegation.api.myparcel.nl</small></a></li>'
      + '        <li role="none"><a role="menuitem" class="mp-nav__submenu-link" href="' + r + 'pages/purchase-order-api.html">Purchase Order API<small>purchase-order.api.myparcel.nl</small></a></li>'
      + '        <li role="none"><a role="menuitem" class="mp-nav__submenu-link" href="' + r + 'pages/event-api.html">Event API<small>event.api.myparcel.nl</small></a></li>'
      + '      </ul>'
      + '    </div>'
      + '    <a href="' + r + 'pages/about.html" class="mp-nav__link" data-i18n="About">About</a>'
      + '    <a href="' + r + 'pages/contact.html" class="mp-nav__link" data-i18n="Contact">Contact</a>'
      + '  </div>'
      + '  <button type="button" class="mp-theme-toggle" aria-label="Toggle theme" title="Toggle theme">'
      + '    <svg class="mp-theme-toggle__moon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      + '    <svg class="mp-theme-toggle__sun" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>'
      + '  </button>'
      + '  <div class="mp-lang-dropdown">'
      + '    <button type="button" class="mp-lang-dropdown__toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="Language">'
      + '      <span class="mp-flag mp-lang-dropdown__flag-slot" aria-hidden="true">' + FLAG_SVG.en + '</span>'
      + '      <svg class="mp-lang-dropdown__caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>'
      + '    </button>'
      + '    <ul class="mp-lang-dropdown__menu" role="listbox" aria-label="Language">'
      + '      <li role="none"><button type="button" role="option" class="mp-lang-btn mp-lang-btn--active" data-lang="en"><span class="mp-flag" aria-hidden="true">' + FLAG_SVG.en + '</span><span>English</span></button></li>'
      + '      <li role="none"><button type="button" role="option" class="mp-lang-btn" data-lang="nl"><span class="mp-flag" aria-hidden="true">' + FLAG_SVG.nl + '</span><span>Nederlands</span></button></li>'
      + '      <li role="none"><button type="button" role="option" class="mp-lang-btn" data-lang="it"><span class="mp-flag" aria-hidden="true">' + FLAG_SVG.it + '</span><span>Italiano</span></button></li>'
      + '    </ul>'
      + '  </div>'
      + '</nav>';
  };

  var footerHTML = function (r) {
    return ''
      + '<footer class="mp-footer">'
      + '  <div class="mp-footer__inner">'
      + '    <div class="mp-footer__col">'
      + '      <div class="mp-footer__brand">'
      + '        <img class="mp-footer__logo" src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" width="128" height="20" />'
      + '        <span class="mp-footer__brand-sub" data-i18n="Developers">Developers</span>'
      + '      </div>'
      + '      <p class="mp-footer__tagline" data-i18n="Docs generated from OpenAPI. Never out of date.">Docs generated from OpenAPI. Never out of date.</p>'
      + '    </div>'
      + '    <div class="mp-footer__col">'
      + '      <div class="mp-footer__label" data-i18n="Product">Product</div>'
      + '      <a href="' + r + 'pages/api-reference.html" data-i18n="API Reference">API Reference</a>'
      + '      <a href="' + r + 'pages/docs/getting-started.html" data-i18n="Documentation">Documentation</a>'
      + '      <a href="' + r + 'pages/docs/platforms/woocommerce.html" data-i18n="Integrations">Integrations</a>'
      + '    </div>'
      + '    <div class="mp-footer__col">'
      + '      <div class="mp-footer__label" data-i18n="Resources">Resources</div>'
      + '      <a href="https://github.com/myparcelnl" target="_blank" rel="noopener">GitHub</a>'
      + '      <a href="https://status.myparcel.nl" target="_blank" rel="noopener" data-i18n="Status page">Status page</a>'
      + '      <a href="https://myparcel-dev.slack.com" target="_blank" rel="noopener">Slack</a>'
      + '    </div>'
      + '    <div class="mp-footer__col">'
      + '      <div class="mp-footer__label" data-i18n="Support">Support</div>'
      + '      <a href="' + r + 'pages/contact.html" data-i18n="Contact">Contact</a>'
      + '      <a href="' + r + 'pages/analytics.html" data-i18n="Analytics (INT)">Analytics (INT)</a>'
      + '    </div>'
      + '  </div>'
      + '  <div class="mp-footer__legal">'
      + '    <span>© 2026 MyParcel</span>'
      + '    <span data-i18n="developer.myparcel.com · v1">developer.myparcel.com · v1</span>'
      + '  </div>'
      + '</footer>';
  };

  function defineEl(name, render) {
    if (customElements.get(name)) return;
    customElements.define(name, class extends HTMLElement {
      connectedCallback() {
        if (this.dataset.rendered === "1") return;
        this.innerHTML = render(toRoot());
        this.dataset.rendered = "1";
      }
    });
  }

  defineEl("mp-header", headerHTML);
  defineEl("mp-footer", footerHTML);
})();
