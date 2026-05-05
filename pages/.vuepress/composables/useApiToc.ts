// Build an inline "Jump to:" TOC at the top of each API page from the
// .mp-section-label elements ("OVERVIEW", "SHIPMENTS", "WEBHOOKS", …).
// The labels in the original HTML aren't anchored, so we slugify each label
// and assign an id, then render a chip-row that smooth-scrolls to it.

const TOC_ID = 'mp-api-toc';

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';
}

export function buildApiToc() {
  if (typeof document === 'undefined') return;
  const main = document.querySelector('.mp-ref-content');
  if (!main) return;

  const labels = main.querySelectorAll<HTMLElement>(
    'main.mp-ref-content > .mp-section-label, main.mp-ref-content > section .mp-section-label, main.mp-ref-content .mp-ref-section .mp-section-label',
  );
  if (labels.length < 2) {
    document.getElementById(TOC_ID)?.remove();
    return;
  }

  // Ensure each label has a stable anchor id.
  const items: { text: string; id: string }[] = [];
  labels.forEach((label) => {
    const text = (label.textContent ?? '').trim();
    if (!text) return;
    if (!label.id) label.id = `section-${slugify(text)}`;
    items.push({ text, id: label.id });
  });
  if (items.length === 0) return;

  let toc = document.getElementById(TOC_ID);
  if (!toc) {
    toc = document.createElement('nav');
    toc.id = TOC_ID;
    toc.className = 'mp-api-toc';
    toc.setAttribute('aria-label', 'Sections');
    // Insert right after the hub-header
    const hub = main.querySelector('.mp-ref-hub');
    if (hub && hub.parentNode) {
      hub.parentNode.insertBefore(toc, hub.nextSibling);
    } else {
      main.prepend(toc);
    }
  }

  toc.innerHTML =
    '<span class="mp-api-toc__label">Jump to</span>' +
    items
      .map(
        (i) =>
          `<a class="mp-api-toc__chip" href="#${i.id}">${i.text.toLowerCase()}</a>`,
      )
      .join('');

  // Smooth-scroll on click (anchor jump otherwise jumps abruptly under sticky nav)
  toc.querySelectorAll<HTMLAnchorElement>('a').forEach((a) => {
    if (a.dataset.tocBound === '1') return;
    a.dataset.tocBound = '1';
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = 70;
      const top =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
    });
  });
}
