// Shared sidebar definition for the docs three-column layout.
// Mirrors the original portal's mp-docs-sidebar groups.
//
// Sidebar items use slug-only links (no / prefix).
// At render time, callers pass through `localizeSidebar(groups, lang)` which
// injects both the VuePress base and the optional locale prefix (/nl/, /it/ or /fr/).
// This way one canonical structure serves all three locales.

export type Lang = 'en' | 'nl' | 'it' | 'fr';

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
      { text: 'Requests', link: '/guides/requests.html' },
      { text: 'Responses', link: '/guides/responses.html' },
      { text: 'Character encoding', link: '/guides/character-encoding.html' },
      { text: 'Webhooks', link: '/guides/webhooks.html' },
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
      { text: 'PrestaShop', link: '/platforms/prestashop.html' },
      { text: 'Shopify', link: '/platforms/shopify.html' },
      { text: 'Lightspeed', link: '/platforms/lightspeed.html' },
      { text: 'CS-Cart', link: '/platforms/cscart.html' },
      { text: 'OpenCart 4', link: '/platforms/opencart.html' },
    ],
  },
    {
    label: 'Frontend integrations',
    items: [
      { text: 'Delivery Options', link: '/platforms/delivery-options.html' },
    ],
  },
  {
    label: 'Reference',
    items: [
      { text: 'Shipments', link: '/guides/shipments.html' },
      { text: 'Shipment API', link: '/api/myparcel.html' },
      { text: 'Order API', link: '/api/order.html' },
      { text: 'Rule API', link: '/api/rule.html' },
      { text: 'Address API', link: '/api/address.html' },
      { text: 'Printing API', link: '/api/printing.html' },
      { text: 'Product API', link: '/api/product.html' },
      { text: 'Data types', link: '/guides/data-types.html' },
    ],
  },
];

export const BASE = '';

/**
 * Paths that have translated copies, per locale. When the user browses in a
 * non-English locale, only these paths get the locale prefix injected.
 * Everything else (API references, untranslated manuals) stays at the root
 * locale path. Coverage differs per locale, so this is a per-lang map rather
 * than one shared set — French additionally covers the Delivery Options
 * frontend integration page.
 */
const GUIDE_PATHS = [
  '/guides/getting-started.html',
  '/guides/authentication.html',
  '/guides/requests.html',
  '/guides/responses.html',
  '/guides/character-encoding.html',
  '/guides/shipments.html',
  '/guides/webhooks.html',
  '/guides/data-types.html',
  '/guides/php-sdk.html',
  '/guides/javascript-sdk.html',
];

const CORE_PLATFORM_PATHS = [
  '/platforms/woocommerce.html',
  '/platforms/magento2.html',
  '/platforms/prestashop.html',
  '/platforms/shopify.html',
  '/platforms/lightspeed.html',
  '/platforms/cscart.html',
  '/platforms/opencart.html',
];

const LOCALIZED_PATHS_BY_LANG: Record<Exclude<Lang, 'en'>, Set<string>> = {
  nl: new Set([...GUIDE_PATHS, ...CORE_PLATFORM_PATHS]),
  it: new Set([...GUIDE_PATHS, ...CORE_PLATFORM_PATHS]),
  fr: new Set([...GUIDE_PATHS, ...CORE_PLATFORM_PATHS, '/platforms/delivery-options.html']),
};

export function isLocalizedPath(slugPath: string, lang: Lang): boolean {
  if (lang === 'en') return false;
  // Strip query strings before lookup (some links carry ?p=Foo).
  const noQuery = slugPath.split('?')[0];
  return LOCALIZED_PATHS_BY_LANG[lang].has(noQuery);
}

/**
 * Prose pages that physically live under /guides/ but belong to the
 * Reference section in the sidebar. Used by the breadcrumb and search so
 * they're categorised as "API Reference" instead of "Documentation".
 */
const REFERENCE_PROSE_PATHS = new Set<string>([
  '/guides/shipments.html',
  '/guides/data-types.html',
]);

export function isReferenceProsePath(slugPath: string): boolean {
  const noQuery = slugPath.split('?')[0];
  return REFERENCE_PROSE_PATHS.has(noQuery);
}

/** Inject the VuePress base + optional locale prefix into every link. */
export function localizeSidebar(groups: SidebarGroup[], lang: Lang): SidebarGroup[] {
  const localePrefix = lang === 'en' ? '' : `/${lang}`;
  return groups.map((g) => ({
    label: g.label,
    items: g.items.map((i) => ({
      text: i.text,
      link: BASE + (isLocalizedPath(i.link, lang) ? localePrefix : '') + i.link,
    })),
  }));
}

/** Strip BASE + any locale prefix off a router path so it matches a slug. */
export function toSlugPath(routerPath: string): string {
  let p = routerPath;
  if (p.startsWith(BASE)) p = p.slice(BASE.length);
  const m = p.match(/^\/(nl|it|fr)(\/.*)?$/);
  if (m) p = m[2] ?? '/';
  return p || '/';
}

/** Detect locale from the current router path. */
export function detectLang(routerPath: string): Lang {
  const stripped = routerPath.startsWith(BASE) ? routerPath.slice(BASE.length) : routerPath;
  if (stripped.startsWith('/nl/') || stripped === '/nl') return 'nl';
  if (stripped.startsWith('/it/') || stripped === '/it') return 'it';
  if (stripped.startsWith('/fr/') || stripped === '/fr') return 'fr';
  return 'en';
}

/** Build the URL for the same logical page in a different locale. */
export function localizeCurrentPath(routerPath: string, targetLang: Lang): string {
  const slug = toSlugPath(routerPath);
  const localePrefix = targetLang === 'en' ? '' : `/${targetLang}`;
  return BASE + (isLocalizedPath(slug, targetLang) ? localePrefix : '') + slug;
}
