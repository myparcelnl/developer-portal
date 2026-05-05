// Keyboard shortcuts on API reference pages:
//   /  → focus the sidebar filter (or open Cmd+K modal if no sidebar)
//   j  → open the next endpoint
//   k  → open the previous endpoint
//   o  → toggle the currently active endpoint
//   c  → copy active endpoint's request snippet
//   ?  → toggle the help-popover

const HELP_HTML = `
  <div class="mp-shortcuts">
    <div class="mp-shortcuts__title">Keyboard shortcuts</div>
    <ul>
      <li><kbd>/</kbd> Focus filter</li>
      <li><kbd>j</kbd> Next endpoint</li>
      <li><kbd>k</kbd> Previous endpoint</li>
      <li><kbd>o</kbd> Toggle current</li>
      <li><kbd>c</kbd> Copy active code</li>
      <li><kbd>esc</kbd> Close</li>
    </ul>
  </div>
`;

const HINT_HTML = `
  <button type="button" class="mp-shortcuts-hint" aria-label="Show keyboard shortcuts">
    <kbd>?</kbd>
    <span>shortcuts</span>
  </button>
`;

let installed = false;
let helpOpen = false;
let helpEl: HTMLElement | null = null;

function isOnApiPage(): boolean {
  return /^\/api\/[a-z0-9-]+\.html$/.test(location.pathname);
}

function isTextInput(el: EventTarget | null): boolean {
  const t = el as HTMLElement | null;
  if (!t) return false;
  if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA') return true;
  if ((t as HTMLElement).isContentEditable) return true;
  return false;
}

function endpoints(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>('.mp-endpoint[id]'));
}
function activeEndpoint(): HTMLElement | null {
  return document.querySelector<HTMLElement>('.mp-endpoint--open');
}

function clickHeader(article: HTMLElement) {
  const header = article.querySelector<HTMLElement>('.mp-endpoint__header');
  header?.click();
  // Smooth scroll the just-opened endpoint into view
  const offset = 70;
  const top = article.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

function nextEndpoint(direction: 1 | -1) {
  const list = endpoints();
  if (list.length === 0) return;
  const current = activeEndpoint();
  let idx = current ? list.indexOf(current) : -1;
  idx = (idx + direction + list.length) % list.length;
  if (idx < 0) idx = list.length - 1;
  if (current && current !== list[idx]) current.classList.remove('mp-endpoint--open');
  clickHeader(list[idx]);
}

function copyActiveSnippet() {
  const ep = activeEndpoint() ?? endpoints()[0];
  if (!ep) return;
  const activePanel = ep.querySelector<HTMLElement>('.mp-code-panel--active pre');
  const code = activePanel?.querySelector('code');
  const text = (code?.textContent ?? activePanel?.textContent ?? '').trim();
  if (!text) return;
  navigator.clipboard.writeText(text).catch(() => {});
  flash('Copied snippet');
}

function flash(text: string) {
  const el = document.createElement('div');
  el.className = 'mp-flash';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => {
    el.classList.add('is-leaving');
    setTimeout(() => el.remove(), 300);
  }, 1200);
}

function showHint() {
  if (document.querySelector('.mp-shortcuts-hint')) return;
  if (!isOnApiPage()) return;
  const wrap = document.createElement('div');
  wrap.innerHTML = HINT_HTML;
  const btn = wrap.firstElementChild as HTMLElement;
  btn.addEventListener('click', toggleHelp);
  document.body.appendChild(btn);
}
function removeHint() {
  document.querySelectorAll('.mp-shortcuts-hint').forEach((el) => el.remove());
}

function toggleHelp() {
  helpOpen = !helpOpen;
  if (helpOpen) {
    if (!helpEl) {
      const wrap = document.createElement('div');
      wrap.innerHTML = HELP_HTML;
      helpEl = wrap.firstElementChild as HTMLElement;
      document.body.appendChild(helpEl);
    }
    helpEl.classList.add('is-open');
  } else if (helpEl) {
    helpEl.classList.remove('is-open');
  }
}

function focusFilter() {
  const input = document.querySelector<HTMLInputElement>(
    '.mp-sidebar-filter input',
  );
  if (input) {
    input.focus();
    input.select();
  } else {
    // No sidebar (e.g. /guides/) → fall through to global search.
    const trigger = document.querySelector<HTMLElement>('.mp-nav__search');
    trigger?.click();
  }
}

function onKeydown(e: KeyboardEvent) {
  if (!isOnApiPage()) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (isTextInput(e.target)) return;

  switch (e.key) {
    case '/':
      e.preventDefault();
      focusFilter();
      return;
    case 'j':
      e.preventDefault();
      nextEndpoint(1);
      return;
    case 'k':
      e.preventDefault();
      nextEndpoint(-1);
      return;
    case 'o': {
      e.preventDefault();
      const ep = activeEndpoint() ?? endpoints()[0];
      if (ep) clickHeader(ep);
      return;
    }
    case 'c':
      e.preventDefault();
      copyActiveSnippet();
      return;
    case '?':
      e.preventDefault();
      toggleHelp();
      return;
    case 'Escape':
      if (helpOpen) {
        e.preventDefault();
        toggleHelp();
      }
      return;
  }
}

export function refreshApiKeyboard() {
  if (typeof window === 'undefined') return;
  if (!installed) {
    installed = true;
    window.addEventListener('keydown', onKeydown);
  }
  if (isOnApiPage()) {
    showHint();
  } else {
    removeHint();
    if (helpOpen) toggleHelp();
  }
}
