# MyParcel Developer Portal

**Live home page:** [https://developer.myparcel.com/](https://developer.myparcel.com/)

VuePress 2 source for the MyParcel developer portal. Guides, SDKs, plugin
manuals and an auto-generated API reference for every developer integrating
MyParcel.

## Local development

Prerequisites:

- Node.js 24, version 24.21 or later
- pnpm 12, version 12.11 or later

Volta must not be installed: its `yarn` ignores `packageManager` and `devEngines`.

```bash
pnpm install
pnpm docs:dev    # http://localhost:8080
```

`pnpm docs:build` produces a static site in `pages/.vuepress/dist/`.

## Project layout

```
pages/
├── .vuepress/        VuePress config, layouts, components, styles
├── api/              API references (one per service)
├── guides/           Developer documentation (auth, shipments, …)
├── platforms/        Plugin manuals (WooCommerce, Magento, …)
├── images/           Home-page brand assets
├── README.md         Home page (front-matter only — rendered by HomeLayout)
├── about.md          About
└── contact.md        Contact
```
