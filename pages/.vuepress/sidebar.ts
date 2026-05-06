// Shared sidebar definition for the docs three-column layout.
// Mirrors the original portal's mp-docs-sidebar groups.
//
// Sidebar items use slug-only links (no /beta-developer-portal/ prefix).
// At render time, callers pass through `localizeSidebar(groups, lang)` which
// injects both the VuePress base and the optional locale prefix (/nl/ or /it/).
// This way one canonical structure serves all three locales.

export type Lang = 'en' | 'nl' | 'it';

export interface SidebarItem {
  /** Display text — translated by the data-i18n system at runtime. */
  text: string;
  /** Slug-only link, e.g. `/guides/php-sdk.html`. NEVER includes the base prefix. */
  link: string;
}

export interface SidebarGroup {
  label: string;
  items: SidebarItem[];
}

export const docsSidebar: SidebarGroup[] = [
  {
    label: 'Documentation',
    items: [
      { text: 'Getting started', link: '/guides/getting-started.html' },
      { text: 'Authentication', link: '/guides/authentication.html' },
      { text: 'Shipments', link: '/guides/shipments.html' },
      { text: 'Delivery options', link: '/guides/delivery-options.html' },
      { text: 'Webhooks', link: '/guides/webhooks.html' },
      { text: 'Data types', link: '/guides/data-types.html' },
    ],
  },
  {
    label: 'SDKs',
    items: [
      { text: 'PHP SDK', link: '/guides/php-sdk.html' },
      { text: 'JavaScript SDK', link: '/guides/javascript-sdk.html' },
    ],
  },
  {
    label: 'Platform integrations',
    items: [
      { text: 'WooCommerce', link: '/platforms/woocommerce.html' },
      { text: 'Magento 2', link: '/platforms/magento2.html' },
      { text: 'Shopify', link: '/platforms/coming-soon.html?p=Shopify' },
      { text: 'PrestaShop', link: '/platforms/prestashop.html' },
      { text: 'Shopware', link: '/platforms/coming-soon.html?p=Shopware' },
      { text: 'Lightspeed', link: '/platforms/coming-soon.html?p=Lightspeed' },
      { text: 'Ecwid', link: '/platforms/coming-soon.html?p=Ecwid' },
      { text: 'Bol.', link: '/platforms/coming-soon.html?p=Bol.' },
      { text: 'Wix', link: '/platforms/coming-soon.html?p=Wix' },
      { text: 'Amazon', link: '/platforms/amazon.html' },
      { text: 'Etsy', link: '/platforms/coming-soon.html?p=Etsy' },
      { text: 'Chrome extension', link: '/platforms/coming-soon.html?p=Chrome+extension' },
    ],
  },
  {
    label: 'Reference',
    items: [
      { text: 'MyParcel API', link: '/api/myparcel.html' },
      { text: 'Order API', link: '/api/order.html' },
      { text: 'IAM API', link: '/api/iam.html' },
      { text: 'Rule API', link: '/api/rule.html' },
      { text: 'Address API', link: '/api/address.html' },
      { text: 'Printing API', link: '/api/printing.html' },
      { text: 'Product API', link: '/api/product.html' },
    ],
  },
];

export const BASE = '/beta-developer-portal';

/**
 * Set of paths that have translated copies. When the user is browsing in
 * NL/IT, only these paths get the locale prefix injected. Everything else
 * (API references, platform manuals, coming-soon stubs) stays at the root
 * locale path because we don't translate those today.
 */
const LOCALIZED_PATHS = new Set<string>([
  '/guides/getting-started.html',
  '/guides/authentication.html',
  '/guides/shipments.html',
  '/guides/delivery-options.html',
  '/guides/webhooks.html',
  '/guides/data-types.html',
  '/guides/php-sdk.html',
  '/guides/javascript-sdk.html',
  '/platforms/woocommerce.html',
  '/platforms/magento2.html',
  '/platforms/prestashop.html',
]);

export function isLocalizedPath(slugPath: string): boolean {
  // Strip query strings before lookup (some links carry ?p=Foo).
  const noQuery = slugPath.split('?')[0];
  return LOCALIZED_PATHS.has(noQuery);
}

/** Inject the VuePress base + optional locale prefix into every link. */
export function localizeSidebar(groups: SidebarGroup[], lang: Lang): SidebarGroup[] {
  const localePrefix = lang === 'en' ? '' : `/${lang}`;
  return groups.map((g) => ({
    label: g.label,
    items: g.items.map((i) => ({
      text: i.text,
      link: BASE + (isLocalizedPath(i.link) ? localePrefix : '') + i.link,
    })),
  }));
}

/** Strip BASE + any locale prefix off a router path so it matches a slug. */
export function toSlugPath(routerPath: string): string {
  let p = routerPath;
  if (p.startsWith(BASE)) p = p.slice(BASE.length);
  const m = p.match(/^\/(nl|it)(\/.*)?$/);
  if (m) p = m[2] ?? '/';
  return p || '/';
}

/** Detect locale from the current router path. */
export function detectLang(routerPath: string): Lang {
  const stripped = routerPath.startsWith(BASE) ? routerPath.slice(BASE.length) : routerPath;
  if (stripped.startsWith('/nl/') || stripped === '/nl') return 'nl';
  if (stripped.startsWith('/it/') || stripped === '/it') return 'it';
  return 'en';
}

/** Build the URL for the same logical page in a different locale. */
export function localizeCurrentPath(routerPath: string, targetLang: Lang): string {
  const slug = toSlugPath(routerPath);
  const localePrefix = targetLang === 'en' ? '' : `/${targetLang}`;
  return BASE + (isLocalizedPath(slug) ? localePrefix : '') + slug;
}
