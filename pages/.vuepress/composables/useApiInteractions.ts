// Re-implements the original portal.js interactivity for API reference pages:
//   - Endpoint accordion (click header with [data-toggle] to expand/collapse)
//   - Sticky code rail mirrors the active endpoint's request/response
//   - Code-tab language switcher with persistent sessionStorage choice
//   - Language dropdown within .mp-code-langswitch
//   - Click-outside to close dropdowns

let preferredLang = 'curl';

if (typeof window !== 'undefined') {
  try {
    // ?lang=php takes precedence over the session-stored choice so docs links
    // can deep-link a specific tab.
    const fromQuery = new URLSearchParams(window.location.search).get('lang');
    if (fromQuery) {
      preferredLang = fromQuery;
      sessionStorage.setItem('mp-code-lang', fromQuery);
    } else {
      preferredLang = sessionStorage.getItem('mp-code-lang') || 'curl';
    }
  } catch {}
}

function activateLang(group: Element, lang: string) {
  const tabs = group.querySelectorAll<HTMLElement>('.mp-code-tab');
  const panels = group.querySelectorAll<HTMLElement>('.mp-code-panel');
  let matched = false;
  let activeLabel = '';

  tabs.forEach((tab) => {
    const isMatch = tab.getAttribute('data-lang') === lang;
    tab.classList.toggle('mp-code-tab--active', isMatch);
    tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    if (isMatch) {
      matched = true;
      activeLabel = (tab.textContent ?? '').trim();
    }
  });
  panels.forEach((panel) => {
    const isMatch = panel.getAttribute('data-lang') === lang;
    if (isMatch) {
      // Soft cross-fade between language panels — quickly retrigger CSS animation.
      panel.classList.remove('mp-code-panel--active');
      requestAnimationFrame(() => panel.classList.add('mp-code-panel--active'));
    } else {
      panel.classList.remove('mp-code-panel--active');
    }
  });

  if (!matched && tabs.length) {
    const first = tabs[0].getAttribute('data-lang');
    if (first) activateLang(group, first);
    return;
  }
  if (activeLabel) {
    group.querySelectorAll<HTMLElement>('.mp-code-langswitch__current').forEach((el) => {
      el.textContent = activeLabel;
    });
  }
}

function closeAllLangSwitches(except: Element | null = null) {
  document.querySelectorAll('.mp-code-langswitch--open').forEach((el) => {
    if (el !== except) {
      el.classList.remove('mp-code-langswitch--open');
      const t = el.querySelector('.mp-code-langswitch__toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    }
  });
}

function initCodeTabs(scope: ParentNode = document) {
  scope.querySelectorAll<HTMLElement>('[data-code-tabs]').forEach((group) => {
    if (group.dataset.tabsInited === '1') {
      activateLang(group, preferredLang);
      return;
    }
    group.dataset.tabsInited = '1';
    activateLang(group, preferredLang);

    const switchEl = group.querySelector<HTMLElement>('.mp-code-langswitch');
    const toggle = group.querySelector<HTMLElement>('.mp-code-langswitch__toggle');
    if (toggle && switchEl) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const willOpen = !switchEl.classList.contains('mp-code-langswitch--open');
        closeAllLangSwitches(switchEl);
        switchEl.classList.toggle('mp-code-langswitch--open', willOpen);
        toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    }

    group.querySelectorAll<HTMLElement>('.mp-code-tab').forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = tab.getAttribute('data-lang');
        if (!lang) return;
        try { sessionStorage.setItem('mp-code-lang', lang); } catch {}
        preferredLang = lang;
        document.querySelectorAll<HTMLElement>('[data-code-tabs]').forEach((g) => {
          activateLang(g, lang);
        });
        closeAllLangSwitches();
      });
    });
  });
}

// ---- Sticky code rail -----------------------------------------------------

let emptyContentHTML = '';

function getRailContent(): HTMLElement | null {
  return document.getElementById('mp-code-rail-content');
}

function captureEmptyContent() {
  const c = getRailContent();
  if (!c) return;
  if (!emptyContentHTML) emptyContentHTML = c.innerHTML;
}

export function updateRail(endpoint: Element | null) {
  const content = getRailContent();
  if (!content) return;
  captureEmptyContent();

  if (!endpoint) {
    content.innerHTML = emptyContentHTML;
    return;
  }
  const code = endpoint.querySelector('.mp-endpoint__code');
  if (!code) {
    content.innerHTML = emptyContentHTML;
    return;
  }
  const clone = code.cloneNode(true) as HTMLElement;
  // Reset tab-init markers so listeners re-bind on the cloned subtree.
  clone.querySelectorAll<HTMLElement>('[data-code-tabs]').forEach((g) => {
    delete g.dataset.tabsInited;
  });
  content.innerHTML = '';
  content.appendChild(clone);
  initCodeTabs(content);
  import('./useCodeCopy').then((m) => m.attachCopyButtons());
}

function syncHashWithEndpoint(endpoint: Element | null) {
  if (typeof window === 'undefined') return;
  const newHash = endpoint && endpoint.id ? `#${endpoint.id}` : '';
  const url = new URL(window.location.href);
  if (url.hash === newHash) return;
  url.hash = newHash;
  // Use replaceState so the back button doesn't accumulate one entry per click.
  history.replaceState(null, '', url.toString());
}

function scrollSidebarItemIntoView(slug: string) {
  const item = document.querySelector<HTMLElement>(
    `.mp-sidebar__item[href$="#${slug}"]`,
  );
  if (!item) return;
  const sidebar = item.closest('.mp-sidebar') as HTMLElement | null;
  if (!sidebar) return;
  // Auto-open the parent <details> so the active item is reachable.
  const details = item.closest('details.mp-sidebar__api') as HTMLDetailsElement | null;
  if (details && !details.open) details.open = true;

  const itemRect = item.getBoundingClientRect();
  const barRect = sidebar.getBoundingClientRect();
  if (itemRect.top < barRect.top || itemRect.bottom > barRect.bottom) {
    item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

function ensureMobileCodeToggle(endpoint: Element) {
  const code = endpoint.querySelector<HTMLElement>('.mp-endpoint__code');
  if (!code) return;
  if (code.querySelector(':scope > .mp-endpoint__code-toggle')) return;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'mp-endpoint__code-toggle';
  btn.innerHTML = `
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
    <span>Show request &amp; response</span>
  `;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = code.classList.toggle('is-mobile-open');
    btn.querySelector('span')!.textContent = open
      ? 'Hide request & response'
      : 'Show request & response';
  });
  code.prepend(btn);
}

function initEndpointToggle() {
  document.querySelectorAll<HTMLElement>('[data-toggle]').forEach((header) => {
    if (header.dataset.toggleInited === '1') return;
    header.dataset.toggleInited = '1';
    header.addEventListener('click', () => {
      const endpoint = header.closest('.mp-endpoint');
      if (!endpoint) return;
      const wasOpen = endpoint.classList.contains('mp-endpoint--open');
      document.querySelectorAll('.mp-endpoint.mp-endpoint--open').forEach((el) => {
        if (el !== endpoint) el.classList.remove('mp-endpoint--open');
      });
      endpoint.classList.toggle('mp-endpoint--open', !wasOpen);
      if (!wasOpen) ensureMobileCodeToggle(endpoint);
      updateRail(!wasOpen ? endpoint : null);
      syncHashWithEndpoint(!wasOpen ? endpoint : null);
      if (!wasOpen && endpoint.id) scrollSidebarItemIntoView(endpoint.id);
    });
  });
}

function openEndpointFromHash() {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;
  try {
    const target = document.querySelector(hash);
    if (target && target.classList && target.classList.contains('mp-endpoint')) {
      target.classList.add('mp-endpoint--open');
      updateRail(target);
    }
  } catch { /* invalid selector */ }
}

function smoothScrollToHash(hash: string) {
  if (!hash || hash.length < 2) return;
  try {
    const target = document.querySelector(hash);
    if (!target) return;
    const offset = 70;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  } catch { /* invalid selector */ }
}

let installed = false;
function ensureGlobalListeners() {
  if (installed) return;
  installed = true;
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    if (!target?.closest?.('.mp-code-langswitch')) {
      closeAllLangSwitches();
    }
  });

  // Smooth-scroll all in-page anchor jumps that target an endpoint.
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]');
    if (!a) return;
    const href = (a as HTMLAnchorElement).getAttribute('href') || '';
    if (href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    if (
      target.classList.contains('mp-endpoint') ||
      target.classList.contains('mp-section-label')
    ) {
      e.preventDefault();
      smoothScrollToHash(href);
      history.replaceState(null, '', href);
      // Auto-open the targeted endpoint
      if (target.classList.contains('mp-endpoint')) {
        document
          .querySelectorAll('.mp-endpoint.mp-endpoint--open')
          .forEach((el) => {
            if (el !== target) el.classList.remove('mp-endpoint--open');
          });
        target.classList.add('mp-endpoint--open');
        updateRail(target);
      }
    }
  });

  // Hashchange (browser back/forward, manual edit) — also smooth-scroll.
  window.addEventListener('hashchange', () => {
    smoothScrollToHash(window.location.hash);
  });

  // Async components (per-API bodies + sidebars) mount after navigation.
  // Re-run init whenever uninitialised nodes appear so accordion, tabs and
  // mobile-sidebar toggles work regardless of chunk-load timing.
  const observer = new MutationObserver(() => {
    const hasNewToggle = document.querySelector(
      '[data-toggle]:not([data-toggle-inited="1"])',
    );
    const hasNewCodeTab = document.querySelector(
      '[data-code-tabs]:not([data-tabs-inited="1"])',
    );
    const hasNewSidebar = document.querySelector(
      '.mp-sidebar:not([data-mobile-inited="1"]), .mp-docs-sidebar:not([data-mobile-inited="1"])',
    );
    if (hasNewToggle || hasNewCodeTab) {
      emptyContentHTML = '';
      initCodeTabs();
      initEndpointToggle();
      openEndpointFromHash();
      // Tables/scroll-spy also need re-init when new endpoint articles appear.
      Promise.all([
        import('./useApiTables'),
        import('./useApiSidebar'),
        import('./useApiToc'),
        import('./useCodeCopy'),
        import('./useApiAnchors'),
      ]).then(([t, s, toc, c, a]) => {
        t.tidyParamsTables();
        s.initApiSidebar();
        toc.buildApiToc();
        c.attachCopyButtons();
        a.attachEndpointAnchors();
      });
    }
    if (hasNewSidebar) {
      // Lazy-import to avoid a circular module dependency at top-level.
      import('./useMobileSidebar').then((m) => m.initMobileSidebars());
      import('./useApiSidebar').then((m) => m.initApiSidebar());
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

export function initApiPage() {
  if (typeof document === 'undefined') return;
  ensureGlobalListeners();
  emptyContentHTML = '';
  initCodeTabs();
  initEndpointToggle();
  openEndpointFromHash();
}
