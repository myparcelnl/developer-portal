---
title: Delivery options
description: "Technische integratiehandleiding voor de @myparcel/delivery-options widget (v6). Drop hem in je checkout, vang het selectie-event af en geef de payload door aan /shipments."
---

<div class="mp-do-cta">
  <div class="mp-do-cta__copy">
    <span class="mp-do-cta__eyebrow">Sandbox</span>
    <strong class="mp-do-cta__title">Probeer de widget zonder iets te installeren</strong>
    <span class="mp-do-cta__hint">Pas elke config-key real-time aan en zie meteen wat er met de UI én de event-payload gebeurt.</span>
  </div>
  <a class="mp-btn mp-btn--primary mp-do-cta__btn" href="https://myparcelnl.github.io/delivery-options/" target="_blank" rel="noopener">
    Open de sandbox
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

::: tip In het kort
De Delivery Options widget toont in je checkout welke bezorgmomenten en afhaalpunten beschikbaar zijn voor het ingevoerde adres. Bij selectie krijgt je frontend een `CustomEvent` met carrier, datum, delivery type, package type en shipment options — die geef je 1-op-1 door aan `POST /shipments`. Vue 3 onder de motorkap, maar werkt ook standalone via `<script>`-tags. Bron: [github.com/myparcelnl/delivery-options ↗](https://github.com/myparcelnl/delivery-options).
:::

## Wat zoek je?
| Doel | Sectie |
| --- | --- |
| Installeren via CDN of npm | [1 · Install](#_1-install) |
| Vue 3 of vanilla JS integratie | [3 · Initialiseren](#_3-initialiseren) |
| Selectie en errors afvangen | [4 · Events](#_4-events) |
| Welke carriers / opties bestaan | [5 · Carriers en opties](#_5-carriers-en-opties) |
| Configuratie-reference | [6 · Configuratie-reference](#_6-configuratie-reference) |
| Cutoff-tijden en drop-off dagen | [7 · Drop-off dagen en cutoff](#_7-drop-off-dagen-en-cutoff) |
| Pickup points (lijst/kaart) | [8 · Pickup points](#_8-pickup-points) |
| Selectie naar `/shipments` | [9 · Selectie verwerken](#_9-selectie-verwerken) |
| Migreren van v5 naar v6 | [10 · Migreren v5 → v6](#_10-migreren-v5-v6) |

::: warning Status van deze pagina
De oude variant op [developer.myparcel.nl/documentation/60.delivery-options.html ↗](https://developer.myparcel.nl/documentation/60.delivery-options.html) is verouderd. Deze pagina is geschreven tegen [@myparcel/delivery-options v6.26.1](https://github.com/myparcelnl/delivery-options/releases/tag/v6.26.1).
:::

## 1 · Install

### Optie A — CDN (snelst, geen build-step)
Twee varianten: óf je laadt Vue zelf, óf je gebruikt de bundle waarin Vue al meekomt.

```html
<!-- Variant 1: Vue zelf laden -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.4"></script>
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/myparcel.lib.js"></script>
<link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/style.css" />

<!-- Variant 2: bundle inclusief Vue -->
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/myparcel.js"></script>
<link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/style.css" />
```

::: tip Welke variant kies ik?
Heeft je shop al Vue 3 in zijn bundle? Pak `myparcel.lib.js` (single Vue-instance, kleinere bundle). Geen Vue in je stack? Pak `myparcel.js` — dan hoef je alleen de stylesheet ernaast te zetten.
:::

### Optie B — npm
```bash
npm install @myparcel/delivery-options
```

```js
import '@myparcel/delivery-options/dist/myparcel.js';
import '@myparcel/delivery-options/dist/style.css';
```

Voor Vue 3-projecten met directe componentimport gebruik je de `/lib`-export (zie [§3 · Vue 3](#vue-3-component)).

### Requirements
| | Versie |
| --- | --- |
| Browsers | Evergreen (laatste 2 versies van Chrome, Firefox, Safari, Edge) |
| Vue (alleen bij `myparcel.lib.js`) | `^3.4` |
| Node (build) | `^18 \|\| ^20` |
| Stylesheet | `dist/style.css` — móét apart geladen worden, anders is de widget ongestyled |

## 2 · Architectuur in één oogopslag
```
┌──────────────┐    update event        ┌──────────────┐
│  jouw         │ ─────────────────────► │  Delivery     │
│  checkout    │   (CustomEvent)        │  Options      │
└──────────────┘                        │  widget       │
       ▲       ◄───────────────────────  │  (Vue 3)      │
       │       updated/error event       └──────────────┘
       │                                        │
       └────────► POST /shipments  ◄────────────┘
                  (selectie payload)
```

Drie integratiepunten:

1. **Init** — je geeft de widget een `configuration` (adres + carrier-settings) via een prop óf via `dispatchEvent('myparcel_update_delivery_options', { detail: config })`.
2. **Selectie** — de widget rendert in `<div id="myparcel-delivery-options">`, de gebruiker kiest, jij vangt `myparcel_updated_delivery_options` af.
3. **Submit** — bij checkout-submit pak je de laatste payload en plak je hem in `/shipments` (REST API of via [PHP SDK](php-sdk.md) / [JS SDK](javascript-sdk.md)).

## 3 · Initialiseren

### Vue 3-component
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

Wijziging van `configuration.value` re-rendert de widget — handig als je adres pas later in de checkout-flow weet.

### Plain JavaScript / non-Vue
HTML-mountpoint:
```html
<div id="myparcel-delivery-options"></div>
```

Initialiseren via een `CustomEvent`:
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
Eén-shot init kan ook via `window.MyParcelConfig = configuration` *vóór* het laden van de widget-script. Voor dynamische updates blijf je bij de `CustomEvent`-route.
:::

## 4 · Events

### Inkomend — config bijwerken
| Event | Detail | Wanneer |
| --- | --- | --- |
| `myparcel_update_delivery_options` | `InputDeliveryOptionsConfiguration` | Initialisatie of re-render bij adreswijziging. |

### Uitgaand — selectie en errors
| Event | Detail | Wanneer |
| --- | --- | --- |
| `myparcel_updated_delivery_options` | Selectie-payload (zie hieronder) | Telkens als de gebruiker een keuze maakt of wijzigt. |
| `myparcel_error_delivery_options` | `{ exception: { code, label, status, title, message } }` | Validatiefout uit de API (bv. ongeldige postcode). |

#### Selectie-payload
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

Voor `isPickup: true` zit er ook een `pickupLocation`-object bij met `locationCode`, `retailNetworkId`, `street`, `number`, `postalCode`, `city`, `cc`, `latitude`, `longitude` en `openingHours`.

#### Listener
```js
document.addEventListener('myparcel_updated_delivery_options', (event) => {
  // bewaar in state — bijv. Vuex/Pinia/Redux/sessionStorage
  window.__lastDeliveryChoice = event.detail;
});

document.addEventListener('myparcel_error_delivery_options', (event) => {
  // toon nette error-tekst aan klant; log naar Sentry/Datadog
  console.error(event.detail.exception);
});
```

#### Error-codes (selectie)
| Code | Status | Betekenis |
| --- | --- | --- |
| `3501` | `422` | Street cannot be parsed — postcode geldig maar adres-parsing faalt. |
| `3505` | `422` | Postal code does not exist. |
| `3506` | `422` | Postal code outside service area van de carrier. |
| `3508` | `422` | Geen leverbare opties voor deze datum/dag. |

Volledige set staat in [`src/types/events.types.ts` ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/src/types/events.types.ts) en de runtime-validatie in [`src/config/validateConfiguration.ts` ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/src/config/validateConfiguration.ts).

## 5 · Carriers en opties
`carrierSettings` accepteert per carrier een eigen blok. Lege `{}` betekent: gebruik de account-defaults uit de MyParcel backoffice.

| Key | Carrier | Markten |
| --- | --- | --- |
| `postnl` | PostNL | NL, BE |
| `dhlforyou` | DHL For You | NL |
| `dhlparcelconnect` | DHL Parcel Connect | EU |
| `dhleuroplus` | DHL Europlus | EU |
| `dpd` | DPD | NL, BE, EU |
| `gls` | GLS | NL, BE, EU |
| `bpost` | bpost | BE |
| `ups` | UPS Standard / Express Saver | EU/Wereld |
| `trunkrs` | Trunkrs | NL (sinds v6.22) |

```ts
config: {
  platform: 'myparcel',
  carrierSettings: {
    postnl: {
      allowMorningDelivery: true,
      allowEveningDelivery: true,
      priceMorningDelivery: 195,   // cent
      priceEveningDelivery: 195,
      allowPickupLocations: true,
    },
    dhlforyou: {
      allowEveningDelivery: true,  // sinds v6.25
    },
  },
},
```

Per carrier worden alleen de opties getoond die de carrier én jouw shop-contract ondersteunen. De widget verbergt onbeschikbare combinaties zelf.

## 6 · Configuratie-reference
Zo organiseer je `configuration`:

```ts
type InputDeliveryOptionsConfiguration = {
  address?: AddressInput;
  config: {
    platform: 'myparcel' | 'sendmyparcel';
    locale?: string;            // bv. 'nl-NL', 'nl-BE', 'fr-BE'
    carrierSettings: Record<string, CarrierSetting>;
    // ...display & feature flags hieronder
  };
  strings?: Partial<Record<StringsKey, string>>;
};
```

### Top-level `config`
| Key | Type | Default | Wanneer |
| --- | --- | --- | --- |
| `platform` | `'myparcel' \| 'sendmyparcel'` | — | **Verplicht.** `myparcel` voor NL-shops, `sendmyparcel` voor BE-shops. |
| `locale` | `string` | platform-default | UI-taal, bv. `nl-NL`, `fr-BE`. |
| `carrierSettings` | `object` | — | **Verplicht** — minimaal één carrier-key. |
| `currency` | `string` | platform-default | Muntweergave bij surcharges. |

### Display-instellingen
| Key | Type | Default | Doel |
| --- | --- | --- | --- |
| `showPrices` | `boolean` | `true` | Toon surcharges naast opties. |
| `showPriceSurcharge` | `boolean` | `true` | Toon prijsverschil t.o.v. standaard. |
| `showDeliveryDate` | `boolean` | `true` | Toon "morgen / donderdag 12 mrt". *Deprecated sinds v6.26.0.* |
| `pickupShowDistance` | `boolean` | `true` | Afstand t.o.v. adres bij pickup-points. |
| `allowPickupLocationsViewSelection` | `boolean` | `true` | Knop tussen lijst- en kaartweergave. |
| `pickupLocationsDefaultView` | `'list' \| 'map'` | `'list'` | Initiële weergave. |
| `pickupLocationsMapTileLayerData` | `object` | OSM-default | Custom tile-server voor de kaart (Mapbox/MapTiler). |

### Bezorgmomenten (zet evt. per `carrierSettings.<carrier>` voor finer-grained controle)
| Key | Type | Doel |
| --- | --- | --- |
| `allowDeliveryOptions` | `boolean` | Master-switch voor home-delivery. |
| `allowStandardDelivery` | `boolean` | Standaard. |
| `priceStandardDelivery` | `number` | Cent. |
| `allowMorningDelivery` | `boolean` | Ochtendlevering. |
| `priceMorningDelivery` | `number` | Cent. |
| `allowEveningDelivery` | `boolean` | Avondlevering. |
| `priceEveningDelivery` | `number` | Cent. |
| `allowSameDayDelivery` | `boolean` | Same-day (vereist `cutoffTimeSameDay`). |
| `priceSameDayDelivery` | `number` | Cent. |
| `allowMondayDelivery` | `boolean` | Maandag-bezorging. |
| `priceMondayDelivery` | `number` | Cent. |
| `allowSaturdayDelivery` | `boolean` | Zaterdag-bezorging. |
| `priceSaturdayDelivery` | `number` | Cent. |

### Shipment-opties (per zending bovenop het bezorgmoment)
| Key | Type | Doel |
| --- | --- | --- |
| `allowSignature` | `boolean` | Tekenen voor ontvangst. |
| `priceSignature` | `number` | Cent. |
| `allowOnlyRecipient` | `boolean` | Alleen aan geadresseerde. |
| `priceOnlyRecipient` | `number` | Cent. |
| `allowPriorityDelivery` | `boolean` | Priority delivery (PostNL mailbox sinds v6.24, NL-only sinds v6.26.1). |

### Pickup
| Key | Type | Doel |
| --- | --- | --- |
| `allowPickupLocations` | `boolean` | Pickup-tab tonen. |
| `pricePickup` | `number` | Cent. |
| `excludeParcelLockers` | `boolean` | Lockers verbergen (sinds v6.21). |

### Pakket-types
| Key | Type | Doel |
| --- | --- | --- |
| `packageType` | `'package' \| 'mailbox' \| 'digital_stamp' \| 'package_small'` | Vooraf gekozen type. |
| `pricePackageTypeMailbox` | `number` | Cent. |
| `pricePackageTypeDigitalStamp` | `number` | Cent. |
| `pricePackageTypePackageSmall` | `number` | Cent. |

### Volledige type-definitie
Authoritative bron voor alle keys: [`@myparcel-dev/do-shared` ↗](https://github.com/myparcelnl/delivery-options/tree/main/libs/shared) — geëxporteerd als `InputDeliveryOptionsConfiguration` en `DeliveryOptionsConfiguration`.

## 7 · Drop-off dagen en cutoff
Bepaalt wanneer je een order nog dezelfde dag overdraagt aan de carrier. Beïnvloedt welke bezorgdatums de widget toont.

### Eenvoudig — één cutoff voor alle drop-off dagen
```ts
{
  cutoffTime: '16:00',
  sameDayCutoffTime: '09:30',
  dropOffDays: '1,2,3,4,5',     // ma-vr; ook acceptabel: [1,2,3,4,5] of '1;2;3;4;5'
  dropOffDelay: 0,              // dagen tussen bestellen en drop-off
  deliveryDaysWindow: 7,        // hoeveel dagen vooruit toonbaar
}
```

### Per dag een eigen cutoff
```ts
{
  cutoffTime: '15:00',          // fallback
  sameDayCutoffTime: '09:30',
  dropOffDays: [
    1,                                // maandag — fallback cutoff
    { day: 2, cutoffTime: '16:00', sameDayCutoffTime: '10:00' },
    { day: 3 },
    { day: 5, cutoffTime: '14:00' },
  ],
  closedDays: ['2026-12-25', '2026-12-26'],  // shop-sluiting (sinds v6.19)
}
```

`closedDays` (v6.19.0+) blokkeert specifieke kalenderdata zonder dat je `dropOffDays` hoeft te herzien.

::: warning `cutoffTime` zonder `dropOffDays` is deprecated
Sinds v6 moet je `dropOffDays` definiëren — anders gokt de widget op werkdagen ma-vr en krijg je verkeerde "morgen"-labels rondom feestdagen.
:::

## 8 · Pickup points
Standaard krijg je een lijst-weergave; gebruikers kunnen wisselen naar een kaart als `allowPickupLocationsViewSelection: true`.

### Eigen kaart-tiles (Mapbox / MapTiler)
```ts
pickupLocationsMapTileLayerData: {
  url: 'https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=YOUR_KEY',
  attribution: '© MapTiler © OpenStreetMap contributors',
  minZoom: 1,
  maxZoom: 18,
}
```

Zonder deze key valt de widget terug op OpenStreetMap-tiles.

### Selectie-payload bij pickup
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

## 9 · Selectie verwerken
De event-payload mapt 1-op-1 op het `options`-object van [`POST /shipments`](shipments.md):

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

Doe het persisteren server-side, niet alleen in `localStorage` — `localStorage` overleeft geen tab-wissel of refresh-cyclus en de keuze moet bij de order horen, niet bij de browser.

::: tip Validatie aan de server-kant
Vertrouw nooit op de widget alleen — herhaal de validatie server-side. Een gebruiker kan via DevTools de payload manipuleren. De PHP/JS SDK doen dit automatisch via hun consignment-validators.
:::

## 10 · Migreren v5 → v6
Belangrijkste breaks (volledig verhaal: [§Upgrading op de oude pagina ↗](https://developer.myparcel.nl/documentation/60.delivery-options.html#upgrading)):

| Wat | v5 | v6 |
| --- | --- | --- |
| Stylesheet | Auto-injected | **Handmatig** `dist/style.css` includen |
| `showDeliveryDate` | Per carrier | Globaal — niet meer per carrier (en *deprecated* sinds v6.26.0) |
| `unselect_delivery_options`-event | Bestond | Verwijderd |
| `cutoffTime` zonder `dropOffDays` | Acceptabel | Deprecated — gebruik `dropOffDays` |
| Vue 2 | Default | Vue 3 verplicht (zie `myparcel.lib.js` voor "bring-your-own") |

### Versies sinds v6.18 (snelle changelog)
| Versie | Wat |
| --- | --- |
| **v6.26.1** (2026-02-23) | Priority delivery alleen voor NL. |
| **v6.26.0** (2026-02-10) | `showDeliveryDate` deprecated. |
| **v6.25.0** (2026-01-27) | Avondbezorging voor DHL For You. |
| **v6.24.0** (2026-01-27) | Priority delivery voor PostNL mailbox. |
| **v6.22.0** (2025-11-11) | Trunkrs als carrier. |
| **v6.21.0** (2025-10-27) | `excludeParcelLockers` toegevoegd. |
| **v6.20.0** (2025-10-10) | Custom platform-config via `config.platform`. |
| **v6.19.0** (2025-10-09) | `closedDays` voor shop-sluiting. |
| **v6.18.0** (2025-08-14) | Carrier-request caching. |

Volledige changelog: [apps/delivery-options/CHANGELOG.md ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/CHANGELOG.md).

## 11 · Sandbox en debugging
- **Sandbox** — [myparcelnl.github.io/delivery-options ↗](https://myparcelnl.github.io/delivery-options/) — interactieve playground. Wijzig elke key, zie de UI én de event-payload direct.
- **GitHub releases** — [github.com/myparcelnl/delivery-options/releases ↗](https://github.com/myparcelnl/delivery-options/releases) — versies, breaking changes, jsdelivr-URLs.
- **DevTools** — luister in console: `document.addEventListener('myparcel_updated_delivery_options', e => console.log(e.detail))`. Helpt bij het debuggen van waarom een keuze niet binnenkomt.
- **Issue tracker** — [github.com/myparcelnl/delivery-options/issues ↗](https://github.com/myparcelnl/delivery-options/issues) — open issues bij gedrag dat je in de sandbox kunt reproduceren.

## 12 · Combineren met de SDK's
Het widget-event geeft je de selectie; de SDK's bouwen daar consignments op:

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

Zie [PHP SDK](php-sdk.md) en [JavaScript SDK](javascript-sdk.md) voor de volledige consignment-flow.
