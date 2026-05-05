<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { usePageData, useRouter } from 'vuepress/client';
import MpSearch from './MpSearch.vue';
import MpLangDropdown from './MpLangDropdown.vue';

const page = usePageData();
const router = useRouter();
const path = computed(() => page.value.path);

function isActive(prefix: string, exact = false): boolean {
  if (exact) return path.value === prefix;
  return path.value === prefix || path.value.startsWith(prefix);
}

const isHome = computed(() => isActive('/', true));
const isGuides = computed(() => isActive('/guides/') || isActive('/platforms/'));
const isApi = computed(() => isActive('/api/'));
const isAbout = computed(() => isActive('/about.html', true));
const isContact = computed(() => isActive('/contact.html', true));

const apiLinks = [
  { name: 'API Overview', href: '/beta-developer-portal/api/', sub: 'All APIs' },
  { name: 'MyParcel API', href: '/beta-developer-portal/api/myparcel.html', sub: 'api.myparcel.nl' },
  { name: 'Order API', href: '/beta-developer-portal/api/order.html', sub: 'order.api.myparcel.nl' },
  { name: 'IAM API', href: '/beta-developer-portal/api/iam.html', sub: 'iam.api.myparcel.nl' },
  { name: 'Rule API', href: '/beta-developer-portal/api/rule.html', sub: 'rule.api.myparcel.nl' },
  { name: 'Address API', href: '/beta-developer-portal/api/address.html', sub: 'address.api.myparcel.nl' },
  { name: 'Printing API', href: '/beta-developer-portal/api/printing.html', sub: 'printing.api.myparcel.nl' },
  { name: 'Product API', href: '/beta-developer-portal/api/product.html', sub: 'product.api.myparcel.nl' },
  { name: 'Delegation API', href: '/beta-developer-portal/api/delegation.html', sub: 'delegation.api.myparcel.nl' },
  { name: 'Purchase Order API', href: '/beta-developer-portal/api/purchase-order.html', sub: 'purchase-order.api.myparcel.nl' },
  { name: 'Event API', href: '/beta-developer-portal/api/event.html', sub: 'event.api.myparcel.nl' },
];

const platformLinks = [
  { name: 'WooCommerce', href: '/beta-developer-portal/platforms/woocommerce.html' },
  { name: 'Magento 2', href: '/beta-developer-portal/platforms/magento2.html' },
  { name: 'Shopify', href: '/beta-developer-portal/platforms/coming-soon.html?p=Shopify' },
  { name: 'PrestaShop', href: '/beta-developer-portal/platforms/coming-soon.html?p=PrestaShop' },
  { name: 'Shopware', href: '/beta-developer-portal/platforms/coming-soon.html?p=Shopware' },
  { name: 'Lightspeed', href: '/beta-developer-portal/platforms/coming-soon.html?p=Lightspeed' },
  { name: 'Ecwid', href: '/beta-developer-portal/platforms/coming-soon.html?p=Ecwid' },
  { name: 'Bol.', href: '/beta-developer-portal/platforms/coming-soon.html?p=Bol.' },
  { name: 'Wix', href: '/beta-developer-portal/platforms/coming-soon.html?p=Wix' },
  { name: 'Amazon', href: '/beta-developer-portal/platforms/coming-soon.html?p=Amazon' },
  { name: 'Etsy', href: '/beta-developer-portal/platforms/coming-soon.html?p=Etsy' },
  { name: 'Chrome extension', href: '/beta-developer-portal/platforms/coming-soon.html?p=Chrome+extension' },
];
const isPlatforms = computed(() => isActive('/platforms/'));

const apiOpen = ref(false);
const mobileOpen = ref(false);
const mobileApiOpen = ref(false);
const mobilePlatformsOpen = ref(false);

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
});
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onEsc);
  if (unwatchRoute) unwatchRoute();
  document.body.style.overflow = '';
});
</script>

<template>
  <nav class="mp-nav">
    <a href="/beta-developer-portal/" class="mp-nav__logo">
      <img class="mp-nav__logo-img" src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" width="128" height="20" />
      <span class="mp-nav__logo-sub">Developers</span>
    </a>

    <MpSearch />

    <div class="mp-nav__spacer"></div>

    <div class="mp-nav__links">
      <a href="/beta-developer-portal/" class="mp-nav__link" :class="{ 'is-active': isHome }">Home</a>
      <a href="/beta-developer-portal/guides/getting-started.html" class="mp-nav__link" :class="{ 'is-active': isGuides }">Documentation</a>
      <div
        class="mp-nav__item"
        :class="{ 'is-open': apiOpen, 'is-active': isApi }"
        @mouseenter="apiOpen = true"
        @mouseleave="apiOpen = false"
      >
        <a href="/beta-developer-portal/api/" class="mp-nav__link" :class="{ 'is-active': isApi }">API Reference</a>
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
      <a href="/beta-developer-portal/about.html" class="mp-nav__link" :class="{ 'is-active': isAbout }">About</a>
      <a href="/beta-developer-portal/contact.html" class="mp-nav__link" :class="{ 'is-active': isContact }">Contact</a>
    </div>

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
          <a href="/beta-developer-portal/" class="mp-mobile-drawer__logo" @click="closeMobile">
            <img src="https://www.myparcel.com/images/logo.svg" alt="MyParcel" width="112" height="18" />
            <span>Developers</span>
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
          <a href="/beta-developer-portal/" class="mp-mobile-drawer__link" :class="{ 'is-active': isHome }">Home</a>
          <a href="/beta-developer-portal/guides/getting-started.html" class="mp-mobile-drawer__link" :class="{ 'is-active': isGuides }">Documentation</a>

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

          <a href="/beta-developer-portal/about.html" class="mp-mobile-drawer__link" :class="{ 'is-active': isAbout }">About</a>
          <a href="/beta-developer-portal/contact.html" class="mp-mobile-drawer__link" :class="{ 'is-active': isContact }">Contact</a>
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
.mp-mobile-drawer__logo span {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--mp-fresh);
  background: var(--mp-mint);
  padding: 2px 8px;
  border-radius: 999px;
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
