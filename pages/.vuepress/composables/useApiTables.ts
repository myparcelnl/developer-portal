// Polish the parameters / responses tables in API endpoint articles.
//
//   - Replace empty cells with an em-dash so the layout doesn't have visual holes.
//   - Detect Responses tables (first column header == "Status") and turn the
//     status code into a colored chip — 2XX green, 3XX blue, 4XX orange, 5XX red.
//   - Detect required parameters (description starts with "Required") and add
//     a marker dot.
//
// Idempotent + safe to re-run after async body components mount.

const PROCESSED_FLAG = 'paramsCleaned';

function statusClass(code: string): string {
  const trimmed = code.trim().toUpperCase();
  if (/^[12]\d\d$/.test(trimmed) || /^2X+$/.test(trimmed) || trimmed === '1XX') return 'mp-status--ok';
  if (/^3\d\d$/.test(trimmed) || /^3X+$/.test(trimmed)) return 'mp-status--info';
  if (/^4\d\d$/.test(trimmed) || /^4X+$/.test(trimmed)) return 'mp-status--warn';
  if (/^5\d\d$/.test(trimmed) || /^5X+$/.test(trimmed)) return 'mp-status--err';
  return '';
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string),
  );
}

// Convert phrases like:
//   "Possible values: A, B, C"
//   "One of: foo, bar, baz."
//   "Allowed: x | y | z"
// inside a description cell into a list of chip pills.
function chipifyDescription(td: HTMLTableCellElement) {
  const desc = td.querySelector<HTMLElement>('.mp-params__desc');
  if (!desc || desc.dataset.chipsified === '1') return;
  const html = desc.innerHTML;
  const re = /(Possible values|One of|Allowed values|Allowed|Values)\s*[:\-]\s*([^.\n]+)/i;
  const m = re.exec(desc.textContent ?? '');
  if (!m) return;
  const values = m[2]
    .split(/\s*(?:,|\||\bor\b)\s*/)
    .map((s) => s.replace(/^["'`]|["'`]$/g, '').trim())
    .filter((s) => s.length > 0 && s.length < 40);
  if (values.length < 2) return;

  const chips = values
    .map((v) => `<code class="mp-params__enum">${escapeHtml(v)}</code>`)
    .join(' ');
  // Replace the matched substring with the chip row.
  const replaced = html.replace(re, `${m[1]}: <span class="mp-params__enums">${chips}</span>`);
  desc.innerHTML = replaced;
  desc.dataset.chipsified = '1';
}

function tidyTable(table: HTMLTableElement) {
  // Detect "Responses" tables by the first <th> being "Status"
  const firstTh = table.querySelector<HTMLTableCellElement>('thead th');
  const isResponses = firstTh
    ? (firstTh.textContent ?? '').trim().toLowerCase() === 'status'
    : false;

  table.querySelectorAll<HTMLTableRowElement>('tbody tr').forEach((tr) => {
    const cells = tr.querySelectorAll<HTMLTableCellElement>('td');
    cells.forEach((td, i) => {
      const inner = (td.textContent ?? '').trim();

      // Empty cell → em-dash
      if (inner === '') {
        td.classList.add('is-empty');
        td.textContent = '—';
        return;
      }
      const onlySpan = td.querySelector(':scope > span:only-child');
      if (onlySpan && (onlySpan.textContent ?? '').trim() === '') {
        td.classList.add('is-empty');
        onlySpan.textContent = '—';
        return;
      }

      // Wrap the status code in a colored chip on Responses tables
      if (isResponses && i === 0) {
        const nameSpan = td.querySelector<HTMLElement>('.mp-params__name');
        if (nameSpan && !nameSpan.dataset.statusified) {
          nameSpan.dataset.statusified = '1';
          const cls = statusClass(nameSpan.textContent ?? '');
          if (cls) {
            nameSpan.classList.add('mp-status', cls);
          }
        }
      }

      // Chipify enum-like values in the description cell
      if (td.classList.contains('mp-params__desc') || td.querySelector('.mp-params__desc')) {
        chipifyDescription(td);
      }
    });
  });
}

export function tidyParamsTables() {
  if (typeof document === 'undefined') return;
  document.querySelectorAll<HTMLTableElement>('table.mp-params').forEach((tbl) => {
    if ((tbl.dataset[PROCESSED_FLAG] as string) === '1') return;
    tbl.dataset[PROCESSED_FLAG] = '1';
    tidyTable(tbl);
  });
}
