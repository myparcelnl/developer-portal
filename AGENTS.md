# CLAUDE.md

Working notes for this repository. Read `README.md` first for setup and the
directory map; this file covers the conventions that are not obvious from the
code and the traps that have already cost time.

## Build and verify

```bash
npm run docs:dev      # http://localhost:8080
npm run docs:build    # static site into pages/.vuepress/dist/
```

Always run `docs:build` before opening a PR. It catches broken asset paths and
Vue template errors that `docs:dev` happily serves.

Never start the dev server with a bare shell command in an agent session; use
the preview tooling so the process is managed.

## Layout routing

There is no per-page `layout:` front matter except on the home page. Instead
`pages/.vuepress/layouts/Layout.vue` inspects the current route and delegates:

| Route | Layout |
| --- | --- |
| `/` (or `home: true`) | `HomeLayout` |
| `/api/` | `ApiOverviewLayout` |
| `/api/*.html` | `ApiLayout` |
| `/about.html` | `AboutLayout` |
| `/contact.html` | `ContactLayout` |
| `/integrations.html` | `IntegrationsLayout` |
| `/guides/*`, `/platforms/*` | three-column docs frame |
| anything else | `mp-standalone` |

Adding a page with its own layout means three edits: the markdown file (front
matter only), a `computed` route test plus a branch in `Layout.vue`, and a
registration in `client.ts`.

## Translations

Copy is authored in English and translated at runtime by walking the DOM, see
`pages/.vuepress/composables/useI18n.ts`. The English string is both the
rendered default and the lookup key:

```html
<span data-i18n="All markets">All markets</span>
```

Also supported: `data-i18n-title` for tooltips and `data-i18n-placeholder` for
inputs. Translations live in `pages/.vuepress/translations/{nl,it,fr}.json`.
A missing key falls back to the English original, so a forgotten translation
degrades quietly rather than showing a key.

Consequences worth knowing:

- **Never let a translated string change its own key.** Rewording English copy
  means updating the key in all three JSON files, or the translation silently
  stops applying.
- **Avoid `v-if` on translated content that toggles at runtime.** The walker
  runs on route change, not on every render, so a freshly created subtree stays
  English. Use `v-show` for anything a user can toggle, which is why the
  integrations cards are all mounted and filtered with `v-show`.
- Keep the JSON files formatted by hand. They use blank lines as section
  separators; rewriting them with a JSON serialiser wipes those and produces a
  diff that touches the whole file.

Some pages are translated as real files under `pages/{nl,it,fr}/` instead. Which
paths have translated copies is declared in `pages/.vuepress/sidebar.ts`
(`LOCALIZED_PATHS_BY_LANG`) and mirrored in the pre-paint redirect script in
`config.ts`. **Those two lists must stay in sync**, or a visitor gets
redirected to a page that does not exist.

## Styling

All CSS lives in `pages/.vuepress/styles/developer-portal.css` and
`index.scss`. Layouts and components carry no `<style>` blocks; follow that.

- Use the `--mp-*` design tokens, never raw hex, except for third-party brand
  colours.
- Dark mode is a single mechanism: `[data-theme="dark"]` on `<html>`, set by
  `useTheme.ts`. Every dark rule in the stylesheet is scoped that way.
- Light is the default. `config.ts` seeds `localStorage` before first paint so
  the page does not flash dark.

## Assets

Images live in `pages/images/` and `pages/platforms/images/`, and are resolved
by Vite. Two rules follow from that:

- A **literal** path in a template (`src="/images/integrations/foo.svg"`) is
  rewritten to a hashed asset at build time. A **dynamic** path is not, and the
  file will 404 in production while working fine in dev. For dynamic paths use
  `import.meta.glob('../../images/…/*', { eager: true, query: '?url', import: 'default' })`,
  as `IntegrationsLayout.vue` does.
- Do not move `pages/images/` into `.vuepress/public/`. Vite resolves
  root-absolute image URLs against the source directory in dev, so the
  literal references in `HomeLayout.vue` break even though the build succeeds.

Optimise before committing: downscale raster logos to roughly 400px on the long
edge, and check for SVGs that are really a base64 PNG in a wrapper.

## The integrations catalogue

`pages/integrations.md` is front matter only; everything is data plus one
layout.

- **Data:** `pages/.vuepress/integrations.ts`, one flat list of typed groups.
  Adding or moving an integration is a change to this file alone.
- `markets` drives the market filter. Every integration works in NL and BE, so
  `ALL_MARKETS` in practice means "also available in Italy" or "market
  agnostic". There is deliberately no per-card market label: the filter is the
  market UI.
- `byMyParcel` renders the MyParcel mark on the logo tile
  (`pages/images/myparcel-mark.svg`, extracted from the brand wordmark). It is
  not a text badge.
- `logoBg` exists because a dozen vendor logos are white artwork that vanishes
  on the default white tile. The colours are the ones the previous portal used.
  When adding an integration, check the logo against a white tile.
- `connection` marks the rare case where there is no plug-in at all and the
  MyParcel Backoffice offers a sales channel instead. The Backoffice currently
  offers six channel types: bol, Shopify, WooCommerce, Lightspeed, PrestaShop
  and CS-Cart.

## House style for prose

- No em-dashes. Use commas, or restructure the sentence.
- Write for a shop owner or an integrator, not for the team that built it.
- Plugin manuals follow a fixed shape: a `::: tip In short` block, a
  quickstart, a "Looking for…" table, numbered settings chapters and a
  diagnostics table. Copy an existing manual rather than inventing a structure.

## Facts to look up rather than guess

Screenshots of the MyParcel Backoffice under `pages/platforms/images/` are
primary sources; several claims in the docs are verifiable from them. When
documenting behaviour, check the screenshot or the plugin repository under
`github.com/myparcelnl` before asserting it.
