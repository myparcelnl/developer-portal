import { fetchOpenApi, type OpenApiDoc } from './useOpenApi';

// Dedup concurrent fetches for the same spec URL; both MpApiSpec (body) and
// MpApiSidebar / ApiLayout (meta) request the current API's spec and we
// don't want two round-trips.
const cache = new Map<string, Promise<OpenApiDoc>>();

export function getSpec(url: string): Promise<OpenApiDoc> {
  let p = cache.get(url);
  if (!p) {
    p = fetchOpenApi(url).catch(err => {
      // Failed fetch: drop the rejected promise so retries can re-attempt.
      cache.delete(url);
      throw err;
    });
    cache.set(url, p);
  }
  return p;
}
