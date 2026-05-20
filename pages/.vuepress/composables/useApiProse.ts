// Sidecar content loaders for prose + scenarios.
//
// Per-endpoint prose lives at:
//   pages/.vuepress/api-prose/<slug>/<anchor>.md
//   (e.g. order/post-add-note.md)
//
// Per-API overview prose lives at:
//   pages/.vuepress/api-prose/<slug>/_overview.md
//
// Per-endpoint scenarios live at:
//   pages/.vuepress/api-prose/<slug>/<anchor>.scenarios.yaml
//
// Both are optional. Specs without sidecars render as before.

import yaml from 'js-yaml';

// Markdown sidecars — Vite resolves these at build time via glob import.
// `?raw` returns the file contents as a string instead of a parsed Vue/MD
// component, which we then run through a minimal markdown formatter.
const proseFiles = import.meta.glob('../api-prose/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const scenarioFiles = import.meta.glob('../api-prose/**/*.scenarios.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function lookup<T>(files: Record<string, T>, slug: string, anchor: string): T | null {
  const key = Object.keys(files).find(p => p.endsWith(`/api-prose/${slug}/${anchor}.md`)
    || p.endsWith(`/api-prose/${slug}/${anchor}.scenarios.yaml`));
  return key ? files[key] : null;
}

export function loadProse(slug: string, anchor: string): string | null {
  return lookup(proseFiles, slug, anchor);
}

export function loadOverviewProse(slug: string): string | null {
  const key = Object.keys(proseFiles).find(p => p.endsWith(`/api-prose/${slug}/_overview.md`));
  return key ? proseFiles[key] : null;
}

export interface Scenario {
  title: string;
  description?: string;
  request?: Record<string, any>;
  response?: Record<string, any>;
  responseStatus?: number;
}

export function loadScenarios(slug: string, anchor: string): Scenario[] {
  const raw = lookup(scenarioFiles, slug, anchor);
  if (!raw) return [];
  try {
    const parsed = yaml.load(raw) as { scenarios?: Scenario[] };
    return Array.isArray(parsed?.scenarios) ? parsed.scenarios : [];
  } catch {
    return [];
  }
}

// Tiny CommonMark-ish renderer: headings, paragraphs, bold/italic, inline
// code, code blocks (fenced), unordered lists, links. Enough to keep prose
// sidecars expressive without pulling in a full markdown engine.
export function renderMarkdown(src: string): string {
  if (!src) return '';
  const escaped = src
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const lines = escaped.split('\n');
  const out: string[] = [];
  let inList = false;
  let inCode = false;
  let codeLang = '';
  let para: string[] = [];

  function flushPara() {
    if (para.length) {
      let s = para.join(' ').trim();
      s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      s = s.replace(/(^|[^*])\*([^*]+)\*([^*]|$)/g, '$1<em>$2</em>$3');
      s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
      s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
      out.push(`<p>${s}</p>`);
      para = [];
    }
  }
  function flushList() {
    if (inList) { out.push('</ul>'); inList = false; }
  }

  for (const line of lines) {
    if (line.startsWith('```')) {
      flushPara();
      flushList();
      if (inCode) {
        out.push('</code></pre>');
        inCode = false; codeLang = '';
      } else {
        inCode = true;
        codeLang = line.slice(3).trim();
        out.push(`<pre class="mp-code-block" data-lang="${codeLang}"><code class="language-${codeLang}">`);
      }
      continue;
    }
    if (inCode) { out.push(line + '\n'); continue; }

    if (/^#{1,3}\s/.test(line)) {
      flushPara();
      flushList();
      const level = (line.match(/^#+/)?.[0].length) || 1;
      const text = line.replace(/^#+\s/, '');
      out.push(`<h${level + 2}>${text}</h${level + 2}>`); // map h1→h3 so it doesn't compete with the page title
      continue;
    }
    if (/^- /.test(line)) {
      flushPara();
      if (!inList) { out.push('<ul>'); inList = true; }
      let item = line.slice(2);
      item = item.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      item = item.replace(/`([^`]+)`/g, '<code>$1</code>');
      item = item.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
      out.push(`<li>${item}</li>`);
      continue;
    }
    if (line.trim() === '') {
      flushPara();
      flushList();
      continue;
    }
    para.push(line);
  }
  flushPara();
  flushList();
  if (inCode) out.push('</code></pre>');
  return out.join('\n');
}
