import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';
import { getDirname, path } from 'vuepress/utils';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  lang: 'en-US',
  title: 'MyParcel Developer Portal',
  description: 'Guides, SDKs, plugins and auto-generated API reference for MyParcel.',
  base: '/beta-developer-portal/',

  bundler: viteBundler(),
  clientConfigFile: path.resolve(__dirname, './client.ts'),

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
  }),
});
