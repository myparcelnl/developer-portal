# MyParcel Developer Portal

**Live home page:** [https://richardperdaan.github.io/beta-developer-portal/](https://richardperdaan.github.io/beta-developer-portal/)

VuePress 2 source for the MyParcel developer portal. Guides, SDKs, plugin
manuals and an auto-generated API reference for every developer integrating
MyParcel.

## Local development

```bash
npm install
npm run docs:dev    # http://localhost:8080
```

`npm run docs:build` produces a static site in `pages/.vuepress/dist/`.

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
