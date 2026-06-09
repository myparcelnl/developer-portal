import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';
import { getDirname, path } from 'vuepress/utils';
import { Logger } from '@vuepress/helper';

const __dirname = getDirname(import.meta.url);

// Several theme-bundled plugins (back-to-top, copy-code, markdown-hint, git)
// emit "<lang> is missing it's i18n config" whenever a declared locale has no
// built-in translation. We declare /it/ as it-IT and supply the runtime
// strings via themePlugins.*.locales below, but the upstream helper warns
// before that override is applied. Filter that one specific message so the
// build log isn't polluted with false-positive noise.
const _origWarn = Logger.prototype.warn;
Logger.prototype.warn = function (msg: string = '', ...args: unknown[]) {
  if (typeof msg === 'string' && msg.includes("missing it's i18n config")) return;
  return _origWarn.call(this, msg, ...args);
};

// Custom slugify — VuePress's default keeps Unicode middots (·) and em-dashes
// (—) verbatim and prefixes a `_` to ids that start with a digit. That makes
// the auto-generated heading IDs ugly and breaks our hand-written anchor
// links like `#5-settings-bestellingen`. This produces clean ASCII slugs:
//   "5 · Settings · Bestellingen"  ->  "5-settings-bestellingen"
//   "Snelstart — in 15 minuten"   ->  "snelstart-in-15-minuten"
//   "Wat zoek je?"                ->  "wat-zoek-je"
const slugify = (str: string): string =>
  str
    .toLowerCase()
    // Replace separator characters with spaces so the next step collapses them
    .replace(/[·—–]/g, ' ')
    // Strip anything that's not a letter, digit, space or dash
    .replace(/[^a-z0-9\s-]/g, '')
    // Collapse whitespace runs into a single dash
    .replace(/\s+/g, '-')
    // Collapse runs of dashes into one
    .replace(/-+/g, '-')
    // Trim leading/trailing dashes
    .replace(/^-+|-+$/g, '');

export default defineUserConfig({
  lang: 'en-US',
  title: 'MyParcel Developer Portal',
  description: 'Guides, SDKs, plugins and auto-generated API reference for MyParcel.',
  base: '/',

  // Locale roots — content under these path prefixes uses the locale's lang.
  // The actual translated markdown lives under pages/nl/ and pages/it/.
  locales: {
    '/': {
      lang: 'en-US',
      title: 'MyParcel Developer Portal',
      description: 'Guides, SDKs, plugins and auto-generated API reference for MyParcel.',
    },
    '/nl/': {
      lang: 'nl-NL',
      title: 'MyParcel Developer Portal',
      description: 'Handleidingen, SDK\'s, plugins en auto-gegenereerde API-referentie voor MyParcel.',
    },
    '/it/': {
      lang: 'it-IT',
      title: 'MyParcel Developer Portal',
      description: 'Guide, SDK, plugin e riferimento API auto-generato per MyParcel.',
    },
  },

  bundler: viteBundler(),
  clientConfigFile: path.resolve(__dirname, './client.ts'),

  markdown: {
    anchor: { slugify },
    toc: { slugify },
  },


  // The default theme still ships the navbar/sidebar/etc. but we hide them
  // from CSS and override its `Layout` slot with our own component.
  theme: defaultTheme({
    logo: 'https://www.myparcel.com/images/logo.svg',
    repo: 'myparcelnl/developer',
    docsDir: 'markdown',

    // Disable default theme's chrome — our layout draws everything.
    navbar: false,
    sidebar: false,
    editLink: false,
    lastUpdated: false,
    contributors: false,

    // The theme-bundled plugins ship en-US and nl-NL strings but no it-IT,
    // which triggers "missing it's i18n config" warnings during build. Fill
    // in the Italian translations here so the locale resolves cleanly.
    themePlugins: {
      backToTop: {
        locales: { '/it/': { backToTop: 'Torna su' } },
      },
      copyCode: {
        locales: { '/it/': { copy: 'Copia codice', copied: 'Copiato' } },
      },
      git: {
        locales: {
          '/it/': {
            contributors: 'Collaboratori',
            changelog: 'Registro modifiche',
            timeOn: 'il',
            viewChangelog: 'Visualizza intero registro',
            latestUpdateAt: 'Ultimo aggiornamento',
          },
        },
      },
      hint: {
        locales: {
          '/it/': {
            important: 'Importante',
            info: 'Informazioni',
            note: 'Nota',
            tip: 'Suggerimento',
            warning: 'Avviso',
            caution: 'Attenzione',
            details: 'Dettagli',
          },
        },
      },
    },
  }),

  // The default theme injects a pre-paint script that defaults to dark when
  // localStorage is empty and the OS prefers dark. We always want light by
  // default, so seed the storage and reset data-theme before first paint.
  head: [
    [
      'script',
      {},
      `(function(){try{if(!localStorage.getItem('vuepress-color-scheme')){localStorage.setItem('vuepress-color-scheme','light');document.documentElement.dataset.theme='light';}}catch(e){}})();`,
    ],
    // Pre-paint locale redirect: if the user picked NL/IT and lands on the
    // English version of a translated page, send them to the localized URL
    // before render to avoid a flash of English content. Mirrors the
    // LOCALIZED_PATHS set in sidebar.ts — keep them in sync.
    [
      'script',
      {},
      `(function(){try{var l=localStorage.getItem('mp-lang');if(l!=='nl'&&l!=='it')return;var b='';var p=window.location.pathname;if(p.indexOf(b)!==0)return;var r=p.slice(b.length)||'/';if(r.indexOf('/nl/')===0||r==='/nl'||r.indexOf('/it/')===0||r==='/it')return;var s={'/guides/getting-started.html':1,'/guides/authentication.html':1,'/guides/requests.html':1,'/guides/responses.html':1,'/guides/errors.html':1,'/guides/character-encoding.html':1,'/guides/shipments.html':1,'/guides/delivery-options.html':1,'/guides/webhooks.html':1,'/guides/data-types.html':1,'/guides/php-sdk.html':1,'/guides/javascript-sdk.html':1,'/platforms/woocommerce.html':1,'/platforms/magento2.html':1,'/platforms/prestashop.html':1,'/platforms/shopify.html':1};if(s[r])window.location.replace(b+'/'+l+r+window.location.search+window.location.hash);}catch(e){}})();`,
    ],
  ],
});
