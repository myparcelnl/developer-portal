// Hub-header metadata per API reference page.
// Populated from the listings on the api-reference page.

export interface ApiMeta {
  host: string;
  version: string;
  endpoints: string;
}

export const apiMeta: Record<string, ApiMeta> = {
  '/api/myparcel.html':       { host: 'api.myparcel.nl',                version: 'v2026-04-16', endpoints: '29' },
  '/api/order.html':          { host: 'order.api.myparcel.nl',          version: 'v1',          endpoints: '14' },
  '/api/rule.html':           { host: 'rule.api.myparcel.nl',           version: 'v1',          endpoints: '4' },
  '/api/address.html':        { host: 'address.api.myparcel.nl',        version: 'v1',          endpoints: '2' },
  '/api/printing.html':       { host: 'printing.api.myparcel.nl',       version: 'v1',          endpoints: '11' },
  '/api/product.html':        { host: 'product.api.myparcel.nl',        version: 'v1',          endpoints: '4' },
  '/api/delegation.html':     { host: 'delegation.api.myparcel.nl',     version: 'v1',          endpoints: '2' },
  '/api/purchase-order.html': { host: 'purchase-order.api.myparcel.nl', version: 'v1',          endpoints: '12' },
  '/api/event.html':          { host: 'event.api.myparcel.nl',          version: 'soon',        endpoints: '—' },
};
