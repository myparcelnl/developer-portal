// Hub-header metadata per API reference page.
// host/specUrl are static; version and endpoint count are pulled from the
// live spec at runtime — the values here are only build-time fallbacks
// shown before the first network round-trip resolves.

import type { GroupOverride } from './composables/useOpenApi';

export interface ApiMeta {
  slug: string;
  name: string;
  host: string;
  specUrl: string;
  version: string;
  endpoints: string;
  // Optional hand-curated grouping for APIs where the spec's tags alone don't
  // give the structure the portal previously hand-grouped under.
  groupOverrides?: GroupOverride[];
}

const M = (
  slug: string,
  name: string,
  host: string,
  version: string,
  endpoints: string,
  groupOverrides?: GroupOverride[],
): ApiMeta => ({
  slug, name, host, specUrl: `https://${host}/openapi.yaml`, version, endpoints, groupOverrides,
});

// Restores the human-grouped MyParcel API sidebar from before the live-spec
// switch. Order here drives section order in both body and sidebar.
// Order matters: first match wins. Path-specific overrides come before the
// catch-all tag-based 'shipments' so e.g. /delivery_options (which carries
// tag=shipment in the spec) is routed to its own section.
const MYPARCEL_GROUPS: GroupOverride[] = [
  { key: 'overview',         label: 'Overview',         pathExact: ['/'] },
  { key: 'delivery-options', label: 'Delivery options', pathPrefixes: ['/delivery_options', '/drop_off_points', '/pickup_locations'] },
  { key: 'tracktrace',       label: 'Track & trace',    pathPrefixes: ['/tracktraces'] },
  { key: 'returns',          label: 'Returns',          pathPrefixes: ['/return_shipments'] },
  { key: 'shipments',        label: 'Shipments',        pathPrefixes: ['/shipments', '/shipment_labels'], tags: ['shipment'] },
  { key: 'notifications',    label: 'Notifications',    tags: ['notification'] },
  { key: 'webhooks',         label: 'Webhooks',         tags: ['webhook'] },
];

// Path → meta lookup used by ApiLayout.
// IAM was removed from the portal on main (commit 7fa2421); event.api.myparcel.nl
// publishes no openapi.yaml yet, so it has no specUrl entry here.
export const apiMeta: Record<string, ApiMeta> = {
  '/api/myparcel.html':       M('myparcel',       'MyParcel API',       'api.myparcel.nl',                'v2026-04-16', '29', MYPARCEL_GROUPS),
  '/api/order.html':          M('order',          'Order API',          'order.api.myparcel.nl',          'v1',          '14'),
  '/api/rule.html':           M('rule',           'Rule API',           'rule.api.myparcel.nl',           'v1',          '4'),
  '/api/address.html':        M('address',        'Address API',        'address.api.myparcel.nl',        'v1',          '2'),
  '/api/printing.html':       M('printing',       'Printing API',       'printing.api.myparcel.nl',       'v1',          '11'),
  '/api/product.html':        M('product',        'Product API',        'product.api.myparcel.nl',        'v1',          '4'),
  '/api/delegation.html':     M('delegation',     'Delegation API',     'delegation.api.myparcel.nl',     'v1',          '2'),
  '/api/purchase-order.html': M('purchase-order', 'Purchase Order API', 'purchase-order.api.myparcel.nl', 'v1',          '12'),
};

// Used by MpApiSidebar to render the full list, in display order.
export const apiList: ApiMeta[] = [
  apiMeta['/api/myparcel.html'],
  apiMeta['/api/rule.html'],
  apiMeta['/api/address.html'],
  apiMeta['/api/printing.html'],
  apiMeta['/api/product.html'],
  apiMeta['/api/order.html'],
  apiMeta['/api/delegation.html'],
  apiMeta['/api/purchase-order.html'],
];

export const apiBySlug: Record<string, ApiMeta> = Object.fromEntries(
  apiList.map(a => [a.slug, a]),
);
