// Add a "Copy" button to every <pre class="mp-code-block"> on API pages.
// Idempotent — safe to re-run after async chunks mount or after the rail
// rebuilds its inner code panel.

const ICON = `
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
`;
const CHECK = `
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
`;

function attach(pre: HTMLElement) {
  if (pre.dataset.copyInited === '1') return;
  pre.dataset.copyInited = '1';

  // Wrap the <pre> in a relative wrapper so the button can absolute-position.
  if (!pre.classList.contains('mp-code-block--has-copy')) {
    pre.classList.add('mp-code-block--has-copy');
  }

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'mp-code-copy';
  btn.setAttribute('aria-label', 'Copy code');
  btn.title = 'Copy';
  btn.innerHTML = ICON;
  btn.addEventListener('click', async (e) => {
    e.stopPropagation();
    const code = pre.querySelector('code');
    const text = (code?.textContent ?? pre.textContent ?? '').trim();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback selection-based copy for old browsers
      const range = document.createRange();
      range.selectNodeContents(pre);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      try { document.execCommand('copy'); } catch {}
      sel?.removeAllRanges();
    }
    btn.classList.add('is-copied');
    btn.innerHTML = CHECK;
    setTimeout(() => {
      btn.classList.remove('is-copied');
      btn.innerHTML = ICON;
    }, 1400);
  });
  pre.appendChild(btn);
}

export function attachCopyButtons() {
  if (typeof document === 'undefined') return;
  document
    .querySelectorAll<HTMLElement>('pre.mp-code-block')
    .forEach(attach);
}
