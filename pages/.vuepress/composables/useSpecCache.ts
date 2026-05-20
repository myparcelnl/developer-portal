import { fetchOpenApi, type OpenApiDoc } from './useOpenApi';

// Dedup concurrent fetches for the same spec URL; both MpApiSpec (body) and
// MpApiSidebar / ApiLayout (meta) request the current API's spec and we
// don't want two round-trips.
//
// Realtime refresh: refreshSpec() bypasses the cache and re-fetches the
// document. ETag-based revalidation means an unchanged spec is a 304 with
// no body, so a poll-on-focus + 5-min interval is cheap. Subscribers are
// notified through subscribe() so MpApiSpec / MpApiSidebar / ApiLayout
// reactively swap to the new spec without their own polling.

const cache = new Map<string, Promise<OpenApiDoc>>();
const etags = new Map<string, string>();
const lastBodyHash = new Map<string, string>();
type Listener = (url: string, spec: OpenApiDoc) => void;
const listeners = new Set<Listener>();

// Cheap, deterministic content hash so we can suppress no-op listener fires
// when the upstream sends the same YAML body without an ETag header.
function hashString(s: string): string {
  let h1 = 0x811c9dc5;
  let h2 = 0x1505;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619) >>> 0;
    h2 = ((h2 << 5) + h2 + c) >>> 0;
  }
  return h1.toString(16) + ':' + h2.toString(16);
}

async function fetchWithEtag(url: string): Promise<{ spec: OpenApiDoc; changed: boolean } | 'not-modified'> {
  const headers: Record<string, string> = {};
  const prev = etags.get(url);
  if (prev) headers['If-None-Match'] = prev;
  const res = await fetch(url, { credentials: 'omit', mode: 'cors', headers });
  if (res.status === 304) return 'not-modified';
  if (!res.ok) throw new Error(`Failed to fetch ${url}: HTTP ${res.status}`);
  const tag = res.headers.get('etag');
  if (tag) etags.set(url, tag);
  const text = await res.text();
  // Content-hash fallback so re-fetching against a server that doesn't honour
  // If-None-Match still avoids re-renders when the body is unchanged.
  const hash = hashString(text);
  const changed = lastBodyHash.get(url) !== hash;
  lastBodyHash.set(url, hash);
  const { default: yaml } = await import('js-yaml');
  const spec = yaml.load(text) as OpenApiDoc;
  return { spec, changed };
}

export function getSpec(url: string): Promise<OpenApiDoc> {
  let p = cache.get(url);
  if (!p) {
    // Route the first load through fetchWithEtag too so we seed the ETag /
    // content-hash maps. Subsequent refreshSpec() calls then know whether
    // anything actually changed.
    p = fetchWithEtag(url).then(result => {
      if (result === 'not-modified') return fetchOpenApi(url);
      return result.spec;
    }).catch(err => {
      cache.delete(url);
      throw err;
    });
    cache.set(url, p);
  }
  return p;
}

/**
 * Re-fetch the spec, bypassing the in-memory cache. Uses If-None-Match so
 * a 304 from the upstream means we return the cached value and fire no
 * listeners. On a real change, listeners receive the fresh spec.
 *
 * Returns true if the spec changed, false otherwise.
 */
export async function refreshSpec(url: string): Promise<boolean> {
  try {
    const result = await fetchWithEtag(url);
    if (result === 'not-modified') return false;
    if (!result.changed) {
      // Server doesn't honour If-None-Match but the body is byte-identical to
      // the last load — don't bother re-rendering anything.
      return false;
    }
    cache.set(url, Promise.resolve(result.spec));
    for (const l of listeners) l(url, result.spec);
    return true;
  } catch {
    return false;
  }
}

/** Subscribe to spec updates. Returns an unsubscribe function. */
export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

// --- Auto-refresh -----------------------------------------------------------
// One global instance per browser tab. Triggers refreshSpec() for every URL
// in the cache when:
//   - the tab regains visibility (user came back to this tab), and
//   - every 5 minutes while the tab is visible.
//
// Refresh requests use If-None-Match so an unchanged spec is a 304 and costs
// only the round-trip; only specs that actually changed propagate through the
// listener and cause a re-render.

let installed = false;
let pollHandle: number | null = null;
const POLL_INTERVAL_MS = 5 * 60 * 1000;

function refreshAll() {
  for (const url of cache.keys()) {
    refreshSpec(url);
  }
}

function startPoll() {
  if (pollHandle !== null) return;
  pollHandle = window.setInterval(() => {
    if (document.visibilityState === 'visible') refreshAll();
  }, POLL_INTERVAL_MS);
}

function stopPoll() {
  if (pollHandle === null) return;
  window.clearInterval(pollHandle);
  pollHandle = null;
}

export function installAutoRefresh() {
  if (installed || typeof window === 'undefined') return;
  installed = true;

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      refreshAll();
      startPoll();
    } else {
      stopPoll();
    }
  });

  // Kick off immediately so a long-living tab keeps itself fresh from the
  // moment the portal loads.
  if (document.visibilityState === 'visible') startPoll();
}
