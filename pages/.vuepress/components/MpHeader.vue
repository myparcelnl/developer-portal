<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { usePageData, useRouter } from 'vuepress/client';
import MpSearch from './MpSearch.vue';
import MpLangDropdown from './MpLangDropdown.vue';
import { useTheme } from '../composables/useTheme';
import { detectLang, toSlugPath, BASE } from '../sidebar';

const { theme, toggleTheme, syncFromDom } = useTheme();

const page = usePageData();
const router = useRouter();
const path = computed(() => page.value.path);

// Slug-stripped path so /guides/foo and /nl/guides/foo behave identically.
const slug = computed(() => toSlugPath(path.value));
const lang = computed(() => detectLang(path.value));
const localePrefix = computed(() => (lang.value === 'en' ? '' : `/${lang.value}`));
const docsHomeHref = computed(() => `${BASE}${localePrefix.value}/guides/getting-started.html`);

function isActive(prefix: string, exact = false): boolean {
  if (exact) return slug.value === prefix;
  return slug.value === prefix || slug.value.startsWith(prefix);
}

const isHome = computed(() => isActive('/', true));
const isGuides = computed(() => isActive('/guides/') || isActive('/platforms/'));
const isApi = computed(() => isActive('/api/'));
const isAbout = computed(() => isActive('/about.html', true));
const isContact = computed(() => isActive('/contact.html', true));

const apiLinks = [
  { name: 'API Overview', href: '/api/', sub: 'All APIs' },
  { name: 'MyParcel API', href: '/api/myparcel.html', sub: 'api.myparcel.nl' },
  { name: 'Order API', href: '/api/order.html', sub: 'order.api.myparcel.nl' },
  { name: 'Rule API', href: '/api/rule.html', sub: 'rule.api.myparcel.nl' },
  { name: 'Address API', href: '/api/address.html', sub: 'address.api.myparcel.nl' },
  { name: 'Printing API', href: '/api/printing.html', sub: 'printing.api.myparcel.nl' },
  { name: 'Product API', href: '/api/product.html', sub: 'product.api.myparcel.nl' },
  { name: 'Delegation API', href: '/api/delegation.html', sub: 'delegation.api.myparcel.nl' },
  { name: 'Purchase Order API', href: '/api/purchase-order.html', sub: 'purchase-order.api.myparcel.nl' },
  { name: 'Event API', href: '/api/event.html', sub: 'event.api.myparcel.nl' },
];

const platformLinks = [
  { name: 'WooCommerce', href: '/platforms/woocommerce.html' },
  { name: 'Magento 2', href: '/platforms/magento2.html' },
  { name: 'PrestaShop', href: '/platforms/prestashop.html' },
];
const isPlatforms = computed(() => isActive('/platforms/'));

const apiOpen = ref(false);
const mobileOpen = ref(false);
const mobileApiOpen = ref(false);
const mobilePlatformsOpen = ref(false);

const BETA_DISMISS_KEY = 'mp-beta-banner-dismissed';
const bannerVisible = ref(false);
function dismissBanner() {
  bannerVisible.value = false;
  try { localStorage.setItem(BETA_DISMISS_KEY, '1'); } catch {}
}

function closeMobile() {
  mobileOpen.value = false;
}
function toggleMobile() {
  mobileOpen.value = !mobileOpen.value;
}
function onEsc(e: KeyboardEvent) {
  if (e.key === 'Escape') closeMobile();
}

// Lock body scroll while drawer is open
watch(mobileOpen, (open) => {
  if (typeof document === 'undefined') return;
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close drawer whenever the route changes (e.g. user clicks a link inside it)
let unwatchRoute: (() => void) | null = null;
onMounted(() => {
  document.addEventListener('keydown', onEsc);
  unwatchRoute = router.afterEach(() => closeMobile());
  syncFromDom();
  try { bannerVisible.value = localStorage.getItem(BETA_DISMISS_KEY) !== '1'; } catch { bannerVisible.value = true; }
});
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onEsc);
  if (unwatchRoute) unwatchRoute();
  document.body.style.overflow = '';
});
</script>

<template>
  <ClientOnly>
    <Transition name="mp-beta-banner">
      <div v-if="bannerVisible" class="mp-beta-banner" role="status">
        <div class="mp-beta-banner__inner">
          <span class="mp-beta-banner__pill" data-i18n="Beta">Beta</span>
          <span class="mp-beta-banner__msg">
            <span data-i18n="This developer portal is in beta — content and APIs may change while we polish things up.">This developer portal is in beta — content and APIs may change while we polish things up.</span>
            <a href="/contact.html" class="mp-beta-banner__link" data-i18n="Share feedback →">Share feedback →</a>
          </span>
        </div>
        <button
          type="button"
          class="mp-beta-banner__close"
          aria-label="Dismiss beta notice"
          @click="dismissBanner"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </Transition>
  </ClientOnly>

  <nav class="mp-nav">
    <a href="/" class="mp-nav__logo">
      <img class="mp-nav__logo-img" src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" width="128" height="20" />
      <span class="mp-nav__logo-stack">
        <span class="mp-nav__logo-sub">Developers</span>
        <span class="mp-nav__logo-beta" data-i18n="Beta">Beta</span>
      </span>
    </a>

    <MpSearch />

    <div class="mp-nav__spacer"></div>

    <div class="mp-nav__links">
      <a href="/" class="mp-nav__link" :class="{ 'is-active': isHome }">Home</a>
      <a :href="docsHomeHref" class="mp-nav__link" :class="{ 'is-active': isGuides }">Documentation</a>
      <div
        class="mp-nav__item"
        :class="{ 'is-open': apiOpen, 'is-active': isApi }"
        @mouseenter="apiOpen = true"
        @mouseleave="apiOpen = false"
      >
        <a href="/api/" class="mp-nav__link" :class="{ 'is-active': isApi }">API Reference</a>
        <svg class="mp-nav__caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
        <ul class="mp-nav__submenu" role="menu">
          <li v-for="link in apiLinks" :key="link.href" role="none">
            <a role="menuitem" class="mp-nav__submenu-link" :href="link.href">
              {{ link.name }}<small>{{ link.sub }}</small>
            </a>
          </li>
        </ul>
      </div>
      <a href="/about.html" class="mp-nav__link" :class="{ 'is-active': isAbout }">About</a>
      <a href="/contact.html" class="mp-nav__link" :class="{ 'is-active': isContact }">Contact</a>
    </div>

    <ClientOnly>
      <button
        type="button"
        class="mp-theme-toggle"
        :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
        :title="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
        @click="toggleTheme"
      >
        <svg v-if="theme === 'dark'" class="mp-theme-toggle__sun" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
        <svg v-else class="mp-theme-toggle__moon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>
    </ClientOnly>

    <MpLangDropdown />

    <button
      type="button"
      class="mp-nav__hamburger"
      :class="{ 'is-open': mobileOpen }"
      :aria-expanded="mobileOpen"
      aria-controls="mp-mobile-drawer"
      aria-label="Open menu"
      @click="toggleMobile"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>

  <ClientOnly>
  <Teleport to="body">
    <Transition name="mp-mobile-drawer">
      <div
        v-if="mobileOpen"
        class="mp-mobile-drawer__scrim"
        @click="closeMobile"
      ></div>
    </Transition>
    <Transition name="mp-mobile-drawer-panel">
      <aside
        v-if="mobileOpen"
        id="mp-mobile-drawer"
        class="mp-mobile-drawer"
        role="dialog"
        aria-label="Site navigation"
      >
        <header class="mp-mobile-drawer__head">
          <a href="/" class="mp-mobile-drawer__logo" @click="closeMobile">
            <img src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" width="112" height="18" />
            <span class="mp-mobile-drawer__logo-stack">
              <span class="mp-mobile-drawer__logo-sub">Developers</span>
              <span class="mp-mobile-drawer__logo-beta" data-i18n="Beta">Beta</span>
            </span>
          </a>
          <button
            type="button"
            class="mp-mobile-drawer__close"
            aria-label="Close menu"
            @click="closeMobile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </header>

        <nav class="mp-mobile-drawer__nav">
          <a href="/" class="mp-mobile-drawer__link" :class="{ 'is-active': isHome }">Home</a>
          <a :href="docsHomeHref" class="mp-mobile-drawer__link" :class="{ 'is-active': isGuides }">Documentation</a>

          <div class="mp-mobile-drawer__group">
            <button
              type="button"
              class="mp-mobile-drawer__link mp-mobile-drawer__link--toggle"
              :class="{ 'is-open': mobileApiOpen, 'is-active': isApi }"
              :aria-expanded="mobileApiOpen"
              @click="mobileApiOpen = !mobileApiOpen"
            >
              API Reference
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div v-show="mobileApiOpen" class="mp-mobile-drawer__sub">
              <a
                v-for="link in apiLinks"
                :key="link.href"
                :href="link.href"
                class="mp-mobile-drawer__sublink"
              >
                <span>{{ link.name }}</span>
                <small>{{ link.sub }}</small>
              </a>
            </div>
          </div>

          <div class="mp-mobile-drawer__group">
            <button
              type="button"
              class="mp-mobile-drawer__link mp-mobile-drawer__link--toggle"
              :class="{ 'is-open': mobilePlatformsOpen, 'is-active': isPlatforms }"
              :aria-expanded="mobilePlatformsOpen"
              @click="mobilePlatformsOpen = !mobilePlatformsOpen"
            >
              Plugins &amp; integrations
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div v-show="mobilePlatformsOpen" class="mp-mobile-drawer__sub">
              <a
                v-for="link in platformLinks"
                :key="link.href"
                :href="link.href"
                class="mp-mobile-drawer__sublink"
              >
                <span>{{ link.name }}</span>
              </a>
            </div>
          </div>

          <a href="/about.html" class="mp-mobile-drawer__link" :class="{ 'is-active': isAbout }">About</a>
          <a href="/contact.html" class="mp-mobile-drawer__link" :class="{ 'is-active': isContact }">Contact</a>
        </nav>

        <footer class="mp-mobile-drawer__foot">
          <div class="mp-mobile-drawer__foot-label">Language</div>
          <MpLangDropdown />
        </footer>
      </aside>
    </Transition>
  </Teleport>
  </ClientOnly>
</template>

<style scoped>
/* ---- Hamburger button (only visible on mobile) ----------------------- */
.mp-nav__hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid var(--mp-border);
  border-radius: var(--mp-radius-md);
  cursor: pointer;
  padding: 0;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
}
.mp-nav__hamburger span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--mp-text);
  border-radius: 1px;
  transition: transform 0.18s, opacity 0.18s;
}
.mp-nav__hamburger.is-open span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.mp-nav__hamburger.is-open span:nth-child(2) {
  opacity: 0;
}
.mp-nav__hamburger.is-open span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 768px) {
  .mp-nav__hamburger { display: inline-flex; }
}

/* ---- Drawer (off-canvas) ----------------------------------------------- */
.mp-mobile-drawer__scrim {
  position: fixed;
  inset: 0;
  background: rgb(0 38 33 / 50%);
  z-index: 998;
  backdrop-filter: blur(2px);
}
.mp-mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(360px, 90vw);
  background: var(--mp-bg);
  z-index: 999;
  display: flex;
  flex-direction: column;
  box-shadow: -16px 0 48px rgb(0 38 33 / 24%);
  overflow-y: auto;
}

.mp-mobile-drawer__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--mp-border-soft);
  position: sticky;
  top: 0;
  background: var(--mp-bg);
  z-index: 1;
}
.mp-mobile-drawer__logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
}
.mp-mobile-drawer__logo > span {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--mp-fresh);
  background: var(--mp-mint);
  padding: 2px 8px;
  border-radius: 999px;
}
.mp-mobile-drawer__logo-stack {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  line-height: 1;
  background: transparent !important;
  padding: 0 !important;
  border-radius: 0 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  color: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
}
.mp-mobile-drawer__logo-sub {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--mp-fresh);
  background: var(--mp-mint);
  padding: 2px 8px;
  border-radius: 999px;
}
.mp-mobile-drawer__logo-beta {
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--mp-fresh);
  background: var(--mp-mint);
  border: 1px solid rgb(15 120 89 / 18%);
  padding: 0 5px;
  border-radius: 999px;
  line-height: 1.6;
}

/* ---- Beta announcement banner ----------------------------------------- */
.mp-beta-banner {
  position: relative;
  background: var(--mp-mint);
  border-bottom: 1px solid var(--mp-border-soft);
  color: var(--mp-fresh);
  font-size: 13px;
  line-height: 1.4;
}
.mp-beta-banner__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 48px 8px 16px;
}
.mp-beta-banner__pill {
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #fff;
  background: var(--mp-fresh);
  padding: 2px 8px;
  border-radius: 999px;
  line-height: 1.5;
}
.mp-beta-banner__msg {
  flex: 1;
  min-width: 0;
}
.mp-beta-banner__link {
  color: var(--mp-fresh);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
  margin-left: 6px;
  white-space: nowrap;
}
.mp-beta-banner__link:hover { text-decoration: none; }
.mp-beta-banner__close {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: var(--mp-radius-sm, 6px);
  color: var(--mp-fresh);
  cursor: pointer;
  opacity: 0.7;
}
.mp-beta-banner__close:hover {
  opacity: 1;
  background: rgb(15 120 89 / 8%);
}
[data-theme="dark"] .mp-beta-banner {
  background: rgb(15 120 89 / 14%);
  color: #b8e6d6;
  border-bottom-color: rgb(255 255 255 / 6%);
}
[data-theme="dark"] .mp-beta-banner__pill {
  background: #b8e6d6;
  color: #073a2b;
}
[data-theme="dark"] .mp-beta-banner__link,
[data-theme="dark"] .mp-beta-banner__close {
  color: #b8e6d6;
}

@media (max-width: 640px) {
  .mp-beta-banner { font-size: 12px; }
  .mp-beta-banner__inner { padding: 7px 40px 7px 12px; gap: 8px; }
  .mp-beta-banner__pill { font-size: 9px; padding: 1px 6px; letter-spacing: 0.12em; }
  .mp-beta-banner__close { right: 4px; }
}

.mp-beta-banner-enter-from,
.mp-beta-banner-leave-to {
  opacity: 0;
  max-height: 0;
}
.mp-beta-banner-enter-to,
.mp-beta-banner-leave-from {
  opacity: 1;
  max-height: 80px;
}
.mp-beta-banner-enter-active,
.mp-beta-banner-leave-active {
  overflow: hidden;
  transition: opacity 0.18s ease, max-height 0.22s ease;
}
.mp-mobile-drawer__close {
  width: 36px;
  height: 36px;
  border: 1px solid var(--mp-border);
  border-radius: var(--mp-radius-md);
  background: var(--mp-bg-subtle);
  color: var(--mp-text-muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.mp-mobile-drawer__nav {
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 2px;
}

.mp-mobile-drawer__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 14px;
  border: none;
  background: transparent;
  font: inherit;
  font-weight: 600;
  font-size: 15px;
  color: var(--mp-text);
  text-decoration: none;
  border-radius: var(--mp-radius-md);
  cursor: pointer;
}
.mp-mobile-drawer__link:hover {
  background: var(--mp-bg-subtle);
}
.mp-mobile-drawer__link.is-active {
  background: var(--mp-mint);
  color: var(--mp-fresh);
}
.mp-mobile-drawer__link--toggle svg {
  transition: transform 0.18s;
  color: var(--mp-text-muted);
}
.mp-mobile-drawer__link--toggle.is-open svg {
  transform: rotate(180deg);
}

.mp-mobile-drawer__sub {
  margin: 4px 0 8px 12px;
  padding: 4px 0 4px 8px;
  border-left: 2px solid var(--mp-border-soft);
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.mp-mobile-drawer__sublink {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 9px 12px;
  border-radius: var(--mp-radius-md);
  text-decoration: none;
  font-size: 14px;
  color: var(--mp-text-body);
}
.mp-mobile-drawer__sublink:hover {
  background: var(--mp-bg-subtle);
}
.mp-mobile-drawer__sublink small {
  font-family: var(--mp-mono);
  font-size: 11px;
  color: var(--mp-text-muted);
}

/* Drawer transitions */
.mp-mobile-drawer-enter-from,
.mp-mobile-drawer-leave-to { opacity: 0; }
.mp-mobile-drawer-enter-active,
.mp-mobile-drawer-leave-active { transition: opacity 0.18s; }

.mp-mobile-drawer-panel-enter-from,
.mp-mobile-drawer-panel-leave-to {
  transform: translateX(100%);
}
.mp-mobile-drawer-panel-enter-active,
.mp-mobile-drawer-panel-leave-active {
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ---- Drawer footer (language switcher) -------------------------------- */
.mp-mobile-drawer__foot {
  margin-top: auto;
  padding: 14px 16px 18px;
  border-top: 1px solid var(--mp-border-soft);
  background: var(--mp-bg-subtle);
}
.mp-mobile-drawer__foot-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--mp-text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

/* ---- Mobile-only tweaks for the navbar itself ------------------------- */
@media (max-width: 768px) {
  /* The standard nav links + lang-dropdown move into the drawer instead */
  .mp-nav__links { display: none !important; }
  .mp-nav :deep(.mp-lang-dropdown) { display: none !important; }
  .mp-nav__spacer { display: none; }
  .mp-nav { gap: 8px; padding: 0 12px; }
}
</style>
