// Makes the portal readable for AI agents and LLM crawlers, see https://llmstxt.org.
//
// After every build this plugin writes three things next to the HTML:
//   - `<page>.md`      the Markdown source of every page that has content,
//                      served at the page URL with `.html` replaced by `.md`.
//   - `llms.txt`       an index of the English pages, grouped like the sidebar,
//                      with the translated pages listed under "Optional".
//   - `llms-full.txt`  the English guides, SDK pages and platform manuals in
//                      one file. The API reference stays out: it is large and
//                      every API has its own `.md` file. Only the `/api/`
//                      overview has none, because it renders from data.
//
// Every page also gets a `<link rel="alternate" type="text/markdown">` that
// points to its `.md` file.

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import type { App, Page, Plugin } from 'vuepress';
import { docsSidebar } from '../sidebar';

const SITE_URL = 'https://developer.myparcel.com';

const SUMMARY =
  'MyParcel is a parcel shipping platform for Dutch and Belgian merchants. This portal documents the MyParcel API, the PHP and JavaScript SDKs, and the plugins that connect webshops to MyParcel.';

const LANGUAGES: Record<string, string> = {
  '/nl/': 'Nederlands',
  '/it/': 'Italiano',
  '/fr/': 'Français',
};

const isApiPage = (page: Page): boolean => page.path.startsWith('/api/');

const mdPath = (htmlPath: string): string => htmlPath.replace(/\.html$/, '.md');

const mdUrl = (page: Page): string => SITE_URL + mdPath(page.path);

const localePrefix = (page: Page): string => Object.keys(LANGUAGES).find((p) => page.path.startsWith(p)) ?? '/';

const isEnglish = (page: Page): boolean => localePrefix(page) === '/';

/** The Markdown source without its front matter. */
const body = (page: Page): string => page.content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '').trim();

const hasContent = (page: Page): boolean => page.path.endsWith('.html') && page.path !== '/404.html' && body(page) !== '';

const title = (page: Page): string => String(page.frontmatter.title ?? page.title);

const description = (page: Page): string => String(page.frontmatter.description ?? '').trim();

// One pass over the Markdown. The first three alternatives match text that must
// stay as it is, so the link rule never sees it:
//   - a fenced code block, indented or not, with ``` or ~~~
//   - an inline code span
//   - an image: Vite emits images under a hashed path, so no URL built here
//     would point to the file
// The last alternative is the end of a link: `](href)` or `](href "title")`.
const PRESERVE_OR_LINK =
  /(^[ \t]*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^[ \t]*\2[ \t]*$)|(`[^`\n]*`)|(!\[[^\]]*\]\([^)]*\))|\]\(([^)\s]+)((?:\s+(?:"[^"]*"|'[^']*'))?)\)/gm;

/** Turn relative links between pages into absolute URLs, so a page still works outside its folder. Code and images are left alone. */
function absolutizeLinks(markdown: string, page: Page): string {
  const base = mdUrl(page);

  return markdown.replace(PRESERVE_OR_LINK, (match, _fence, _fenceMarker, _code, _image, href?: string, title = '') => {
    if (href === undefined || /^([a-z][a-z0-9+.-]*:|#|\/\/)/i.test(href)) return match;

    return `](${new URL(href.replace(/\.html(#|$)/, '.md$1'), base).href}${title})`;
  });
}

function renderMarkdown(page: Page): string {
  const lines = [`# ${title(page)}`, ''];

  if (description(page)) lines.push(`> ${description(page)}`, '');

  lines.push(`Source: ${SITE_URL}${page.path}`, '', absolutizeLinks(body(page), page), '');

  return lines.join('\n');
}

function renderEntry(page: Page, label = title(page)): string {
  return `- [${label}](${mdUrl(page)})${description(page) ? `: ${description(page)}` : ''}`;
}

function renderIndex(pages: Page[]): string {
  const byPath = new Map(pages.map((p) => [p.path, p]));
  const english = pages.filter(isEnglish);
  const listed = new Set<string>();

  const lines = ['# MyParcel Developer Portal', '', `> ${SUMMARY}`, ''];

  lines.push(
    'Every page below is Markdown, except the overview pages. The API reference pages are generated from the live OpenAPI specs, for example https://api.myparcel.nl/openapi.yaml.',
    '',
  );

  for (const group of docsSidebar) {
    const entries = group.items
      .map((item) => byPath.get(item.link))
      .filter((p): p is Page => p !== undefined && hasContent(p));

    if (!entries.length) continue;

    lines.push(`## ${group.label}`, '', ...entries.map((p) => renderEntry(p)), '');
    entries.forEach((p) => listed.add(p.path));
  }

  // Pages with content that the sidebar does not list.
  const rest = english.filter((p) => hasContent(p) && !listed.has(p.path));

  if (rest.length) lines.push('## More', '', ...rest.map((p) => renderEntry(p)), '');

  // Pages without Markdown content render from data, so link the HTML page.
  const dynamic = english.filter(
    (p) => !hasContent(p) && description(p) && !p.frontmatter.home && ['/about.html', '/integrations.html'].includes(p.path),
  );

  if (dynamic.length) {
    lines.push('## Overview pages', '', ...dynamic.map((p) => `- [${title(p)}](${SITE_URL}${p.path}): ${description(p)}`), '');
  }

  const translated = pages.filter((p) => !isEnglish(p) && hasContent(p));

  if (translated.length) {
    lines.push('## Optional', '', 'Translations of the pages above.', '');

    for (const [prefix, name] of Object.entries(LANGUAGES)) {
      const entries = translated.filter((p) => localePrefix(p) === prefix);

      if (entries.length) lines.push(`### ${name}`, '', ...entries.map((p) => renderEntry(p)), '');
    }
  }

  lines.push('## Full text', '', `- [llms-full.txt](${SITE_URL}/llms-full.txt): the guides, SDK pages and platform manuals in one file, without the API reference.`, '');

  return lines.join('\n');
}

function renderFull(pages: Page[]): string {
  const included = pages.filter((p) => isEnglish(p) && hasContent(p) && !isApiPage(p));

  return [
    '# MyParcel Developer Portal',
    '',
    `> ${SUMMARY}`,
    '',
    ...included.flatMap((p) => [renderMarkdown(p), '---', '']),
  ].join('\n');
}

/** Every generated file, keyed by its path in the site root. */
function renderFiles(app: App): Map<string, string> {
  const pages = app.pages.filter((p) => p.filePathRelative !== null);
  const files = new Map<string, string>([
    ['/llms.txt', renderIndex(pages)],
    ['/llms-full.txt', renderFull(pages)],
  ]);

  pages.filter(hasContent).forEach((p) => files.set(mdPath(p.path), renderMarkdown(p)));

  return files;
}

export const aiVisibilityPlugin = (): Plugin => ({
  name: 'mp-ai-visibility',

  extendsPage: (page) => {
    if (!hasContent(page)) return;

    page.frontmatter.head ??= [];
    page.frontmatter.head.push(['link', { rel: 'alternate', type: 'text/markdown', href: mdPath(page.path) }]);
  },

  // `onGenerated` only runs for a build. In dev the router would send
  // `/llms.txt` to `/llms.txt.html`, so serve the same files from memory.
  extendsBundlerOptions: (options, app) => {
    if (!app.env.isDev) return;

    const viteOptions = ((options as { viteOptions?: Record<string, unknown> }).viteOptions ??= {});

    viteOptions.plugins = [
      ...((viteOptions.plugins as unknown[]) ?? []),
      {
        name: 'mp-ai-visibility-dev',
        configureServer(server: { middlewares: { use: (fn: (req: any, res: any, next: () => void) => void) => void } }) {
          server.middlewares.use((req, res, next) => {
            // Vite imports the page sources as modules from the same URLs,
            // always with a query such as `?import`. Leave those alone.
            if (!req.url || req.url.includes('?')) return next();

            const content = renderFiles(app).get(decodeURIComponent(req.url));

            if (content === undefined) return next();

            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(content);
          });
        },
      },
    ];
  },

  onGenerated: async (app) => {
    await Promise.all(
      [...renderFiles(app)].map(async ([file, content]) => {
        const target = app.dir.dest(file.replace(/^\//, ''));

        await mkdir(dirname(target), { recursive: true });
        await writeFile(target, content);
      }),
    );
  },
});
