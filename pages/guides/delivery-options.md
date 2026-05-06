---
title: Delivery options
description: "Technical integration guide for the @myparcel/delivery-options widget (v6). Drop it into your checkout, catch the selection event and pass the payload through to /shipments."
---

<div class="mp-do-cta">
  <div class="mp-do-cta__copy">
    <span class="mp-do-cta__eyebrow">Sandbox</span>
    <strong class="mp-do-cta__title">Try the widget without installing anything</strong>
    <span class="mp-do-cta__hint">Tweak any config key in real time and watch the UI and event payload react instantly.</span>
  </div>
  <a class="mp-btn mp-btn--primary mp-do-cta__btn" href="https://myparcelnl.github.io/delivery-options/" target="_blank" rel="noopener">
    Open the sandbox
    <span aria-hidden="true">→</span>
  </a>
</div>

<style>
.mp-do-cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--mp-space-4) var(--mp-space-5);
  margin: var(--mp-space-5) 0 var(--mp-space-6);
  padding: var(--mp-space-5) var(--mp-space-6);
  background:
    radial-gradient(circle at 12% 0%, rgba(255, 140, 0, 0.16), transparent 55%),
    linear-gradient(135deg, var(--mp-monstera, #0F5C47) 0%, var(--mp-deep, #002621) 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--mp-radius-lg, 14px);
  box-shadow: 0 6px 18px -8px rgba(0, 38, 33, 0.45);
  color: #f3fbf7;
  position: relative;
  overflow: hidden;
}
.mp-do-cta__copy {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 1 320px;
}
.mp-do-cta__eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ffb37a;
}
.mp-do-cta__title {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
}
.mp-do-cta__hint {
  font-size: 14px;
  line-height: 1.5;
  color: rgba(243, 251, 247, 0.78);
  max-width: 56ch;
}
.mp-docs-content a.mp-do-cta__btn,
.mp-docs-content a.mp-do-cta__btn:hover,
.mp-docs-content a.mp-do-cta__btn:visited,
.mp-docs-content a.mp-do-cta__btn:focus,
.mp-docs-content__body a.mp-do-cta__btn,
.mp-docs-content__body a.mp-do-cta__btn:hover {
  color: #ffffff;
  text-decoration: none;
  border-bottom: none;
  font-size: 15px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px -2px rgba(255, 140, 0, 0.45);
}
.mp-do-cta__btn span { transition: transform 0.18s ease; display: inline-block; }
.mp-do-cta__btn:hover span { transform: translateX(3px); }
</style>

::: tip In short
The Delivery Options widget shows your checkout which delivery options and pickup points are available for the entered address. On selection your frontend receives a `CustomEvent` with carrier, date, delivery type, package type and shipment options — pass it through 1-to-1 to `POST /shipments`. Vue 3 under the hood, but it also works standalone via `<script>` tags. Source: [github.com/myparcelnl/delivery-options ↗](https://github.com/myparcelnl/delivery-options).
:::

## Looking for…
| Goal | Section |
| --- | --- |
| Install via CDN or npm | [1 · Install](#_1-install) |
| Vue 3 or vanilla JS integration | [3 · Initialise](#_3-initialise) |
| Catch selection and errors | [4 · Events](#_4-events) |
| Available carriers / options | [5 · Carriers and options](#_5-carriers-and-options) |
| Configuration reference | [6 · Configuration reference](#_6-configuration-reference) |
| Cutoff times and drop-off days | [7 · Drop-off days and cutoff](#_7-drop-off-days-and-cutoff) |
| Pickup points (list/map) | [8 · Pickup points](#_8-pickup-points) |
| Send the selection to `/shipments` | [9 · Handling the selection](#_9-handling-the-selection) |
| Migrate from v5 to v6 | [10 · Migrate v5 → v6](#_10-migrate-v5-v6) |

::: warning Status of this page
The old version at [developer.myparcel.nl/documentation/60.delivery-options.html ↗](https://developer.myparcel.nl/documentation/60.delivery-options.html) is outdated. This page is written against [@myparcel/delivery-options v6.26.1](https://github.com/myparcelnl/delivery-options/releases/tag/v6.26.1).
:::

## 1 · Install

### Option A — CDN (fastest, no build step)
Two variants: either you load Vue yourself, or you use the bundle that includes Vue.

```html
<!-- Variant 1: load Vue yourself -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.4"></script>
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/myparcel.lib.js"></script>
<link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/style.css" />

<!-- Variant 2: bundle including Vue -->
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/myparcel.js"></script>
<link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/style.css" />
```

::: tip Which variant should I pick?
Does your shop already bundle Vue 3? Use `myparcel.lib.js` (single Vue instance, smaller bundle). No Vue in your stack? Use `myparcel.js` — then you only need to load the stylesheet alongside it.
:::

### Option B — npm
```bash
npm install @myparcel/delivery-options
```

```js
import '@myparcel/delivery-options/dist/myparcel.js';
import '@myparcel/delivery-options/dist/style.css';
```

For Vue 3 projects that import the component directly, use the `/lib` export (see [§3 · Vue 3](#vue-3-component)).

### Requirements
| | Version |
| --- | --- |
| Browsers | Evergreen (latest 2 versions of Chrome, Firefox, Safari, Edge) |
| Vue (only with `myparcel.lib.js`) | `^3.4` |
| Node (build) | `^18 \|\| ^20` |
| Stylesheet | `dist/style.css` — **must** be loaded separately, otherwise the widget renders unstyled |

## 2 · Architecture at a glance
```
┌──────────────┐    update event        ┌──────────────┐
│  your        │ ─────────────────────► │  Delivery    │
│  checkout    │   (CustomEvent)        │  Options     │
└──────────────┘                        │  widget      │
       ▲       ◄───────────────────────  │  (Vue 3)     │
       │       updated/error event       └──────────────┘
       │                                        │
       └────────► POST /shipments  ◄────────────┘
                  (selection payload)
```

Three integration points:

1. **Init** — give the widget a `configuration` (address + carrier settings) via a prop or via `dispatchEvent('myparcel_update_delivery_options', { detail: config })`.
2. **Selection** — the widget renders inside `<div id="myparcel-delivery-options">`, the user picks an option, you catch `myparcel_updated_delivery_options`.
3. **Submit** — on checkout submit you take the latest payload and forward it to `/shipments` (REST API or via the [PHP SDK](php-sdk.md) / [JS SDK](javascript-sdk.md)).

## 3 · Initialise

### Vue 3 component
```ts
import { ref, type Ref } from 'vue';
import {
  MyParcelDeliveryOptions,
  type InputDeliveryOptionsConfiguration,
} from '@myparcel/delivery-options/lib';

const configuration: Ref<InputDeliveryOptionsConfiguration> = ref({
  address: {
    cc: 'NL',
    postalCode: '2132JE',
    number: '31',
    street: 'Antareslaan 31',
    city: 'Hoofddorp',
  },
  config: {
    platform: 'myparcel',
    carrierSettings: {
      postnl: {},
    },
  },
});
```

```vue
<template>
  <MyParcelDeliveryOptions :configuration="configuration" />
</template>

<style>
@import '@myparcel/delivery-options/style.css';
</style>
```

Mutating `configuration.value` re-renders the widget — useful when the address only becomes known later in the checkout flow.

### Plain JavaScript / non-Vue
HTML mount point:
```html
<div id="myparcel-delivery-options"></div>
```

Initialise via a `CustomEvent`:
```js
const configuration = {
  selector: '#myparcel-delivery-options',
  address: {
    cc: 'NL',
    postalCode: '2132JE',
    number: '31',
    street: 'Antareslaan 31',
    city: 'Hoofddorp',
  },
  config: {
    platform: 'myparcel',
    carrierSettings: {
      postnl: {},
    },
  },
};

document.dispatchEvent(
  new CustomEvent('myparcel_update_delivery_options', { detail: configuration }),
);
```

::: tip `window.MyParcelConfig`
A one-shot init also works via `window.MyParcelConfig = configuration` *before* the widget script loads. For dynamic updates, stick to the `CustomEvent` route.
:::

## 4 · Events

### Inbound — update config
| Event | Detail | When |
| --- | --- | --- |
| `myparcel_update_delivery_options` | `InputDeliveryOptionsConfiguration` | Initialisation or re-render on address change. |

### Outbound — selection and errors
| Event | Detail | When |
| --- | --- | --- |
| `myparcel_updated_delivery_options` | Selection payload (see below) | Every time the user makes or changes a choice. |
| `myparcel_error_delivery_options` | `{ exception: { code, label, status, title, message } }` | Validation error from the API (e.g. invalid postal code). |

#### Selection payload
```json
{
  "carrier": "postnl",
  "date": "2026-04-10 00:00:00.000000",
  "deliveryType": "morning",
  "isPickup": false,
  "packageType": "package",
  "shipmentOptions": {
    "signature": true,
    "onlyRecipient": true
  }
}
```

For `isPickup: true` the payload also contains a `pickupLocation` object with `locationCode`, `retailNetworkId`, `street`, `number`, `postalCode`, `city`, `cc`, `latitude`, `longitude` and `openingHours`.

#### Listener
```js
document.addEventListener('myparcel_updated_delivery_options', (event) => {
  // persist in state — e.g. Vuex/Pinia/Redux/sessionStorage
  window.__lastDeliveryChoice = event.detail;
});

document.addEventListener('myparcel_error_delivery_options', (event) => {
  // show a friendly error to the customer; log to Sentry/Datadog
  console.error(event.detail.exception);
});
```

#### Error codes (selection)
| Code | Status | Meaning |
| --- | --- | --- |
| `3501` | `422` | Street cannot be parsed — postal code is valid but address parsing fails. |
| `3505` | `422` | Postal code does not exist. |
| `3506` | `422` | Postal code outside the carrier's service area. |
| `3508` | `422` | No deliverable options for this date/day. |

The full set lives in [`src/types/events.types.ts` ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/src/types/events.types.ts) and the runtime validation in [`src/config/validateConfiguration.ts` ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/src/config/validateConfiguration.ts).

## 5 · Carriers and options
`carrierSettings` accepts a separate block per carrier. An empty `{}` means: use the account defaults from the MyParcel backoffice.

| Key | Carrier | Markets |
| --- | --- | --- |
| `postnl` | PostNL | NL, BE |
| `dhlforyou` | DHL For You | NL |
| `dhlparcelconnect` | DHL Parcel Connect | EU |
| `dhleuroplus` | DHL Europlus | EU |
| `dpd` | DPD | NL, BE, EU |
| `gls` | GLS | NL, BE, EU |
| `bpost` | bpost | BE |
| `ups` | UPS Standard / Express Saver | EU/Worldwide |
| `trunkrs` | Trunkrs | NL (since v6.22) |

```ts
config: {
  platform: 'myparcel',
  carrierSettings: {
    postnl: {
      allowMorningDelivery: true,
      allowEveningDelivery: true,
      priceMorningDelivery: 195,   // cents
      priceEveningDelivery: 195,
      allowPickupLocations: true,
    },
    dhlforyou: {
      allowEveningDelivery: true,  // since v6.25
    },
  },
},
```

Per carrier, only the options that the carrier and your shop contract support are shown. The widget hides unavailable combinations on its own.

## 6 · Configuration reference
This is how `configuration` is organised:

```ts
type InputDeliveryOptionsConfiguration = {
  address?: AddressInput;
  config: {
    platform: 'myparcel' | 'sendmyparcel';
    locale?: string;            // e.g. 'nl-NL', 'nl-BE', 'fr-BE'
    carrierSettings: Record<string, CarrierSetting>;
    // ...display & feature flags below
  };
  strings?: Partial<Record<StringsKey, string>>;
};
```

### Top-level `config`
| Key | Type | Default | When |
| --- | --- | --- | --- |
| `platform` | `'myparcel' \| 'sendmyparcel'` | — | **Required.** `myparcel` for NL shops, `sendmyparcel` for BE shops. |
| `locale` | `string` | platform default | UI language, e.g. `nl-NL`, `fr-BE`. |
| `carrierSettings` | `object` | — | **Required** — at least one carrier key. |
| `currency` | `string` | platform default | Currency display for surcharges. |

### Display settings
| Key | Type | Default | Purpose |
| --- | --- | --- | --- |
| `showPrices` | `boolean` | `true` | Show surcharges next to options. |
| `showPriceSurcharge` | `boolean` | `true` | Show the price difference vs. the standard option. |
| `showDeliveryDate` | `boolean` | `true` | Show "tomorrow / Thursday 12 Mar". *Deprecated since v6.26.0.* |
| `pickupShowDistance` | `boolean` | `true` | Distance from the address for pickup points. |
| `allowPickupLocationsViewSelection` | `boolean` | `true` | Toggle button between list and map view. |
| `pickupLocationsDefaultView` | `'list' \| 'map'` | `'list'` | Initial view. |
| `pickupLocationsMapTileLayerData` | `object` | OSM default | Custom tile server for the map (Mapbox/MapTiler). |

### Delivery options (set per `carrierSettings.<carrier>` for finer-grained control)
| Key | Type | Purpose |
| --- | --- | --- |
| `allowDeliveryOptions` | `boolean` | Master switch for home delivery. |
| `allowStandardDelivery` | `boolean` | Standard. |
| `priceStandardDelivery` | `number` | Cents. |
| `allowMorningDelivery` | `boolean` | Morning delivery. |
| `priceMorningDelivery` | `number` | Cents. |
| `allowEveningDelivery` | `boolean` | Evening delivery. |
| `priceEveningDelivery` | `number` | Cents. |
| `allowSameDayDelivery` | `boolean` | Same-day (requires `cutoffTimeSameDay`). |
| `priceSameDayDelivery` | `number` | Cents. |
| `allowMondayDelivery` | `boolean` | Monday delivery. |
| `priceMondayDelivery` | `number` | Cents. |
| `allowSaturdayDelivery` | `boolean` | Saturday delivery. |
| `priceSaturdayDelivery` | `number` | Cents. |

### Shipment options (per shipment, on top of the delivery option)
| Key | Type | Purpose |
| --- | --- | --- |
| `allowSignature` | `boolean` | Signature on receipt. |
| `priceSignature` | `number` | Cents. |
| `allowOnlyRecipient` | `boolean` | Deliver only to the addressee. |
| `priceOnlyRecipient` | `number` | Cents. |
| `allowPriorityDelivery` | `boolean` | Priority delivery (PostNL mailbox since v6.24, NL-only since v6.26.1). |

### Pickup
| Key | Type | Purpose |
| --- | --- | --- |
| `allowPickupLocations` | `boolean` | Show the pickup tab. |
| `pricePickup` | `number` | Cents. |
| `excludeParcelLockers` | `boolean` | Hide lockers (since v6.21). |

### Package types
| Key | Type | Purpose |
| --- | --- | --- |
| `packageType` | `'package' \| 'mailbox' \| 'digital_stamp' \| 'package_small'` | Pre-selected type. |
| `pricePackageTypeMailbox` | `number` | Cents. |
| `pricePackageTypeDigitalStamp` | `number` | Cents. |
| `pricePackageTypePackageSmall` | `number` | Cents. |

### Full type definition
The authoritative source for all keys: [`@myparcel-dev/do-shared` ↗](https://github.com/myparcelnl/delivery-options/tree/main/libs/shared) — exported as `InputDeliveryOptionsConfiguration` and `DeliveryOptionsConfiguration`.

## 7 · Drop-off days and cutoff
Determines when an order still goes to the carrier the same day. This affects which delivery dates the widget shows.

### Simple — one cutoff for all drop-off days
```ts
{
  cutoffTime: '16:00',
  sameDayCutoffTime: '09:30',
  dropOffDays: '1,2,3,4,5',     // Mon–Fri; also valid: [1,2,3,4,5] or '1;2;3;4;5'
  dropOffDelay: 0,              // days between order and drop-off
  deliveryDaysWindow: 7,        // how many days ahead are shown
}
```

### A separate cutoff per day
```ts
{
  cutoffTime: '15:00',          // fallback
  sameDayCutoffTime: '09:30',
  dropOffDays: [
    1,                                // Monday — uses the fallback cutoff
    { day: 2, cutoffTime: '16:00', sameDayCutoffTime: '10:00' },
    { day: 3 },
    { day: 5, cutoffTime: '14:00' },
  ],
  closedDays: ['2026-12-25', '2026-12-26'],  // shop closure (since v6.19)
}
```

`closedDays` (v6.19.0+) blocks specific calendar dates without you having to rework `dropOffDays`.

::: warning `cutoffTime` without `dropOffDays` is deprecated
Since v6 you must define `dropOffDays` — otherwise the widget guesses Mon–Fri working days and you get incorrect "tomorrow" labels around public holidays.
:::

## 8 · Pickup points
By default you get a list view; users can switch to a map when `allowPickupLocationsViewSelection: true`.

### Custom map tiles (Mapbox / MapTiler)
```ts
pickupLocationsMapTileLayerData: {
  url: 'https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=YOUR_KEY',
  attribution: '© MapTiler © OpenStreetMap contributors',
  minZoom: 1,
  maxZoom: 18,
}
```

Without this key the widget falls back to OpenStreetMap tiles.

### Selection payload for pickup
```json
{
  "carrier": "postnl",
  "date": "2026-04-12 00:00:00.000000",
  "deliveryType": "pickup",
  "isPickup": true,
  "packageType": "package",
  "pickupLocation": {
    "locationCode": "169177",
    "retailNetworkId": "PNPNL-01",
    "locationName": "Albert Heijn",
    "street": "Hoofdstraat",
    "number": "1",
    "postalCode": "1012AB",
    "city": "Amsterdam",
    "cc": "NL",
    "latitude": 52.3702,
    "longitude": 4.8952,
    "openingHours": { "monday": [{ "from": "08:00", "to": "20:00" }] }
  },
  "shipmentOptions": {}
}
```

## 9 · Handling the selection
The event payload maps 1-to-1 onto the `options` object of [`POST /shipments`](shipments.md):

```js
document.addEventListener('myparcel_updated_delivery_options', async (event) => {
  const choice = event.detail;

  await fetch('/api/checkout/delivery-choice', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      carrier:      choice.carrier,
      delivery_date: choice.date,
      delivery_type: choice.deliveryType,
      package_type:  choice.packageType,
      pickup:        choice.pickupLocation ?? null,
      options:       choice.shipmentOptions,
    }),
  });
});
```

Persist server-side, not just in `localStorage` — `localStorage` doesn't survive a tab change or refresh cycle, and the choice belongs to the order, not the browser.

::: tip Validate server-side
Never trust the widget alone — repeat the validation server-side. A user can manipulate the payload via DevTools. The PHP/JS SDKs do this automatically through their consignment validators.
:::

## 10 · Migrate v5 → v6
Main breaking changes (full story: [§Upgrading on the old page ↗](https://developer.myparcel.nl/documentation/60.delivery-options.html#upgrading)):

| What | v5 | v6 |
| --- | --- | --- |
| Stylesheet | Auto-injected | **Manually** include `dist/style.css` |
| `showDeliveryDate` | Per carrier | Global — no longer per carrier (and *deprecated* since v6.26.0) |
| `unselect_delivery_options` event | Existed | Removed |
| `cutoffTime` without `dropOffDays` | Acceptable | Deprecated — use `dropOffDays` |
| Vue 2 | Default | Vue 3 required (see `myparcel.lib.js` for "bring-your-own") |

### Versions since v6.18 (quick changelog)
| Version | What |
| --- | --- |
| **v6.26.1** (2026-02-23) | Priority delivery NL-only. |
| **v6.26.0** (2026-02-10) | `showDeliveryDate` deprecated. |
| **v6.25.0** (2026-01-27) | Evening delivery for DHL For You. |
| **v6.24.0** (2026-01-27) | Priority delivery for PostNL mailbox. |
| **v6.22.0** (2025-11-11) | Trunkrs as a carrier. |
| **v6.21.0** (2025-10-27) | `excludeParcelLockers` added. |
| **v6.20.0** (2025-10-10) | Custom platform config via `config.platform`. |
| **v6.19.0** (2025-10-09) | `closedDays` for shop closures. |
| **v6.18.0** (2025-08-14) | Carrier-request caching. |

Full changelog: [apps/delivery-options/CHANGELOG.md ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/CHANGELOG.md).

## 11 · Sandbox and debugging
- **Sandbox** — [myparcelnl.github.io/delivery-options ↗](https://myparcelnl.github.io/delivery-options/) — interactive playground. Change any key, see the UI and event payload react instantly.
- **GitHub releases** — [github.com/myparcelnl/delivery-options/releases ↗](https://github.com/myparcelnl/delivery-options/releases) — versions, breaking changes, jsdelivr URLs.
- **DevTools** — listen in the console: `document.addEventListener('myparcel_updated_delivery_options', e => console.log(e.detail))`. Helpful when debugging why a choice doesn't come through.
- **Issue tracker** — [github.com/myparcelnl/delivery-options/issues ↗](https://github.com/myparcelnl/delivery-options/issues) — open an issue with behaviour you can reproduce in the sandbox.

## 12 · Combining with the SDKs
The widget event hands you the selection; the SDKs build consignments from it:

```php
// PHP — via myparcelnl/sdk
use MyParcelNL\Sdk\Factory\DeliveryOptionsAdapterFactory;

$adapter = DeliveryOptionsAdapterFactory::create($_POST['delivery_choice']);
$consignment->setDeliveryDate($adapter->getDate())
            ->setDeliveryType($adapter->getDeliveryTypeId())
            ->setPackageType($adapter->getPackageTypeId());
```

```ts
// TypeScript — via @myparcelnl/sdk (JS SDK)
import { MyParcel } from '@myparcelnl/sdk';

const mp = new MyParcel({ /* ... */ });
const shipment = await mp.shipments.create({
  carrier:      choice.carrier,
  delivery_date: choice.date,
  recipient:    customerAddress,
  options:      { ...choice.shipmentOptions, package_type: choice.packageType },
});
```

See the [PHP SDK](php-sdk.md) and [JavaScript SDK](javascript-sdk.md) for the full consignment flow.
