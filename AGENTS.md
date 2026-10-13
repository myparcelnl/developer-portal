# developer.myparcel.com

MyParcel has two developer portals: this one, and [myparcelnl/developer](https://github.com/myparcelnl/developer) (developer.myparcel.nl). When you change content that both have, such as an SDK page or a plugin manual, check the other one too.

## Agent skills

Use these skills when they are available:

| Task                                   | Skill                                               |
| -------------------------------------- | --------------------------------------------------- |
| Create or change a `.md` file          | `ai-basekit:documentation`                          |
| Write prose                            | `external-integrations-basekit:writing-style`       |
| Open a pull request or a stack of them | `external-integrations-basekit:github-pull-request` |

If one is missing, tell the user once. MyParcel employees install them with:

```
/plugin marketplace add mypadev/ai-plugins
/plugin install ai-basekit@myparcel-claude-code-marketplace
/plugin install external-integrations-basekit@myparcel-claude-code-marketplace
```

Without the skills, follow [Writing](#writing) and [Pull requests](#pull-requests).

## Build and verify

`docs:build` catches broken asset paths and Vue template errors that `docs:dev`
serves without complaint. Never start the dev server with a bare shell command
in an agent session; use the preview tooling so the process is managed.

## Localized pages

Some pages have a copy under `pages/nl/`, `pages/fr/` or `pages/it/`, at the
same path as the English page. Agents often change only the English page.

- When you change an English page, check for copies with
  `ls pages/{nl,fr,it}/<path>` and make the same change in each, in the same
  pull request.
- From a translated page, link to an English-only page with a relative path,
  for example `../../guides/php-sdk-v11.md`.
- `LOCALIZED_PATHS_BY_LANG` in `pages/.vuepress/sidebar.ts` and the pre-paint
  redirect script in `config.ts` list the translated paths. **Keep the two lists
  in sync**, or a visitor gets redirected to a page that does not exist.

## Translations of UI text

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

Page content is translated as files instead, see [Localized pages](#localized-pages).

## Layout routing

There is no per-page `layout:` front matter except on the home page. Instead
`pages/.vuepress/layouts/Layout.vue` inspects the current route and delegates:

| Route                       | Layout                  |
| --------------------------- | ----------------------- |
| `/` (or `home: true`)       | `HomeLayout`            |
| `/api/`                     | `ApiOverviewLayout`     |
| `/api/*.html`               | `ApiLayout`             |
| `/about.html`               | `AboutLayout`           |
| `/contact.html`             | `ContactLayout`         |
| `/integrations.html`        | `IntegrationsLayout`    |
| `/guides/*`, `/platforms/*` | three-column docs frame |
| anything else               | `mp-standalone`         |

Adding a page with its own layout means three edits: the markdown file (front
matter only), a `computed` route test plus a branch in `Layout.vue`, and a
registration in `client.ts`.

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

## Writing

- Simplified Technical English (ASD-STE100): one idea per sentence, active voice, present tense, "you" for the reader. No em dashes.
- Use the names the product, the API and the code use. Never invent a term, an identifier or a code example.
- Use obvious placeholders such as `<api-key>`, never a value that looks real.
- When you change a heading or move a page, update the navigation and every link to it.
- Write for a shop owner or an integrator, not for the team that built it.
- Plugin manuals follow a fixed shape: a `::: tip In short` block, a
  quickstart, a "Looking for…" table, numbered settings chapters and a
  diagnostics table. Copy an existing manual rather than inventing a structure.

## Facts to look up rather than guess

Screenshots of the MyParcel Backoffice under `pages/platforms/images/` are
primary sources; several claims in the docs are verifiable from them. When
documenting behaviour, check the screenshot or the plugin repository under
`github.com/myparcelnl` before asserting it.

## Pull requests

1. Branch from `main`. Run the build before you open the pull request.
2. Title: a conventional commit, for example `docs(php-sdk): mark the php sdk guide as v10`.
3. Body, in this order:
   - One sentence on what the pull request does.
   - The changes, one line each. Not a list of files.
   - References: `Fixes INT-1234` or `Refs INT-1234` for the Jira ticket (MyParcel employees), `Fixes #123` only for a GitHub issue the pull request closes.
   - The AI disclaimer, when an AI agent wrote any of it. It says that an AI agent wrote it, which sections a person wrote by hand, and whether a person reviewed the output:
     ```
     > [!NOTE]
     > An AI agent wrote this pull request. A person wrote the "Installation" section by hand. A person reviewed the changes.
     ```
     Without a review, write "No person has reviewed the changes yet."
4. Split large work into a stack of small pull requests with [`gh stack`](https://gh.io/stacks).

Never put a credential or customer data in a pull request, a commit or a page.
