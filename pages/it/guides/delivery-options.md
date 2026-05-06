---
title: Delivery options
description: "Guida tecnica all'integrazione del widget @myparcel/delivery-options (v6). Inseriscilo nel tuo checkout, intercetta l'evento di selezione e passa il payload a /shipments."
---

<div class="mp-do-cta">
  <div class="mp-do-cta__copy">
    <span class="mp-do-cta__eyebrow">Sandbox</span>
    <strong class="mp-do-cta__title">Prova il widget senza installare nulla</strong>
    <span class="mp-do-cta__hint">Modifica ogni config-key in tempo reale e vedi subito cosa cambia nella UI e nel payload dell'evento.</span>
  </div>
  <a class="mp-btn mp-btn--primary mp-do-cta__btn" href="https://myparcelnl.github.io/delivery-options/" target="_blank" rel="noopener">
    Apri la sandbox
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

::: tip In sintesi
Il widget Delivery Options mostra nel tuo checkout quali momenti di consegna e pickup point sono disponibili per l'indirizzo inserito. Alla selezione, il tuo frontend riceve un `CustomEvent` con carrier, data, delivery type, package type e shipment options — che passi 1-a-1 a `POST /shipments`. Sotto il cofano usa Vue 3, ma funziona anche in modalità standalone con tag `<script>`. Sorgente: [github.com/myparcelnl/delivery-options ↗](https://github.com/myparcelnl/delivery-options).
:::

## Cosa stai cercando?
| Obiettivo | Sezione |
| --- | --- |
| Installare via CDN o npm | [1 · Installazione](#_1-installazione) |
| Integrazione Vue 3 o vanilla JS | [3 · Inizializzazione](#_3-inizializzazione) |
| Intercettare selezione ed errori | [4 · Eventi](#_4-eventi) |
| Quali carrier / opzioni esistono | [5 · Carrier e opzioni](#_5-carrier-e-opzioni) |
| Riferimento di configurazione | [6 · Riferimento di configurazione](#_6-riferimento-di-configurazione) |
| Cutoff time e giorni di drop-off | [7 · Giorni di drop-off e cutoff](#_7-giorni-di-drop-off-e-cutoff) |
| Pickup point (lista/mappa) | [8 · Pickup point](#_8-pickup-point) |
| Selezione verso `/shipments` | [9 · Elaborare la selezione](#_9-elaborare-la-selezione) |
| Migrare da v5 a v6 | [10 · Migrazione v5 → v6](#_10-migrazione-v5-v6) |

::: warning Stato di questa pagina
La vecchia versione su [developer.myparcel.nl/documentation/60.delivery-options.html ↗](https://developer.myparcel.nl/documentation/60.delivery-options.html) è obsoleta. Questa pagina è scritta per [@myparcel/delivery-options v6.26.1](https://github.com/myparcelnl/delivery-options/releases/tag/v6.26.1).
:::

## 1 · Installazione

### Opzione A — CDN (più rapida, senza build step)
Due varianti: o carichi Vue da solo, oppure usi il bundle che include già Vue.

```html
<!-- Variante 1: Vue caricato separatamente -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.4"></script>
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/myparcel.lib.js"></script>
<link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/style.css" />

<!-- Variante 2: bundle con Vue incluso -->
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/myparcel.js"></script>
<link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/style.css" />
```

::: tip Quale variante scegliere?
Il tuo shop ha già Vue 3 nel suo bundle? Usa `myparcel.lib.js` (singola istanza Vue, bundle più piccolo). Niente Vue nel tuo stack? Usa `myparcel.js` — devi solo affiancare il foglio di stile.
:::

### Opzione B — npm
```bash
npm install @myparcel/delivery-options
```

```js
import '@myparcel/delivery-options/dist/myparcel.js';
import '@myparcel/delivery-options/dist/style.css';
```

Per progetti Vue 3 con import diretto del componente, usa l'export `/lib` (vedi [§3 · Vue 3](#vue-3-component)).

### Requisiti
| | Versione |
| --- | --- |
| Browser | Evergreen (ultime 2 versioni di Chrome, Firefox, Safari, Edge) |
| Vue (solo con `myparcel.lib.js`) | `^3.4` |
| Node (build) | `^18 \|\| ^20` |
| Foglio di stile | `dist/style.css` — **deve** essere caricato a parte, altrimenti il widget rimane senza stile |

## 2 · Architettura a colpo d'occhio
```
┌──────────────┐    update event        ┌──────────────┐
│  il tuo      │ ─────────────────────► │  Delivery     │
│  checkout    │   (CustomEvent)        │  Options      │
└──────────────┘                        │  widget       │
       ▲       ◄───────────────────────  │  (Vue 3)      │
       │       updated/error event       └──────────────┘
       │                                        │
       └────────► POST /shipments  ◄────────────┘
                  (payload selezione)
```

Tre punti di integrazione:

1. **Init** — passi al widget una `configuration` (indirizzo + carrier-settings) tramite una prop o tramite `dispatchEvent('myparcel_update_delivery_options', { detail: config })`.
2. **Selezione** — il widget si renderizza in `<div id="myparcel-delivery-options">`, l'utente sceglie, tu intercetti `myparcel_updated_delivery_options`.
3. **Submit** — al submit del checkout prendi l'ultimo payload e lo passi a `/shipments` (REST API o tramite [PHP SDK](php-sdk.md) / [JS SDK](javascript-sdk.md)).

## 3 · Inizializzazione

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

Modificando `configuration.value` il widget si re-renderizza — utile se conosci l'indirizzo solo più avanti nel flusso del checkout.

### Plain JavaScript / non-Vue
Mountpoint HTML:
```html
<div id="myparcel-delivery-options"></div>
```

Inizializzazione tramite un `CustomEvent`:
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
L'init one-shot è possibile anche tramite `window.MyParcelConfig = configuration` *prima* di caricare lo script del widget. Per gli aggiornamenti dinamici resta sulla via del `CustomEvent`.
:::

## 4 · Eventi

### In ingresso — aggiornare la config
| Evento | Detail | Quando |
| --- | --- | --- |
| `myparcel_update_delivery_options` | `InputDeliveryOptionsConfiguration` | Inizializzazione o re-render al cambio di indirizzo. |

### In uscita — selezione ed errori
| Evento | Detail | Quando |
| --- | --- | --- |
| `myparcel_updated_delivery_options` | Payload della selezione (vedi sotto) | Ogni volta che l'utente fa o modifica una scelta. |
| `myparcel_error_delivery_options` | `{ exception: { code, label, status, title, message } }` | Errore di validazione dall'API (es. CAP non valido). |

#### Payload della selezione
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

Quando `isPickup: true` è presente anche un oggetto `pickupLocation` con `locationCode`, `retailNetworkId`, `street`, `number`, `postalCode`, `city`, `cc`, `latitude`, `longitude` e `openingHours`.

#### Listener
```js
document.addEventListener('myparcel_updated_delivery_options', (event) => {
  // salva nello state — es. Vuex/Pinia/Redux/sessionStorage
  window.__lastDeliveryChoice = event.detail;
});

document.addEventListener('myparcel_error_delivery_options', (event) => {
  // mostra un messaggio di errore pulito al cliente; logga su Sentry/Datadog
  console.error(event.detail.exception);
});
```

#### Codici di errore (estratto)
| Code | Status | Significato |
| --- | --- | --- |
| `3501` | `422` | Street cannot be parsed — CAP valido ma il parsing dell'indirizzo fallisce. |
| `3505` | `422` | Postal code does not exist. |
| `3506` | `422` | Postal code outside service area del carrier. |
| `3508` | `422` | Nessuna opzione di consegna per questa data/giorno. |

L'elenco completo è in [`src/types/events.types.ts` ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/src/types/events.types.ts) e la validazione runtime in [`src/config/validateConfiguration.ts` ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/src/config/validateConfiguration.ts).

## 5 · Carrier e opzioni
`carrierSettings` accetta per ogni carrier un blocco dedicato. Un `{}` vuoto significa: usa i default dell'account dal backoffice MyParcel.

| Key | Carrier | Mercati |
| --- | --- | --- |
| `postnl` | PostNL | NL, BE |
| `dhlforyou` | DHL For You | NL |
| `dhlparcelconnect` | DHL Parcel Connect | EU |
| `dhleuroplus` | DHL Europlus | EU |
| `dpd` | DPD | NL, BE, EU |
| `gls` | GLS | NL, BE, EU |
| `bpost` | bpost | BE |
| `ups` | UPS Standard / Express Saver | EU/Mondo |
| `trunkrs` | Trunkrs | NL (dalla v6.22) |

```ts
config: {
  platform: 'myparcel',
  carrierSettings: {
    postnl: {
      allowMorningDelivery: true,
      allowEveningDelivery: true,
      priceMorningDelivery: 195,   // centesimi
      priceEveningDelivery: 195,
      allowPickupLocations: true,
    },
    dhlforyou: {
      allowEveningDelivery: true,  // dalla v6.25
    },
  },
},
```

Per ogni carrier vengono mostrate solo le opzioni supportate sia dal carrier sia dal tuo contratto shop. Il widget nasconde da sé le combinazioni non disponibili.

## 6 · Riferimento di configurazione
Ecco come organizzare `configuration`:

```ts
type InputDeliveryOptionsConfiguration = {
  address?: AddressInput;
  config: {
    platform: 'myparcel' | 'sendmyparcel';
    locale?: string;            // es. 'nl-NL', 'nl-BE', 'fr-BE'
    carrierSettings: Record<string, CarrierSetting>;
    // ...display & feature flags qui sotto
  };
  strings?: Partial<Record<StringsKey, string>>;
};
```

### `config` di alto livello
| Key | Tipo | Default | Quando |
| --- | --- | --- | --- |
| `platform` | `'myparcel' \| 'sendmyparcel'` | — | **Obbligatorio.** `myparcel` per shop NL, `sendmyparcel` per shop BE. |
| `locale` | `string` | platform-default | Lingua UI, es. `nl-NL`, `fr-BE`. |
| `carrierSettings` | `object` | — | **Obbligatorio** — almeno una carrier key. |
| `currency` | `string` | platform-default | Visualizzazione della valuta nei surcharge. |

### Impostazioni di display
| Key | Tipo | Default | Scopo |
| --- | --- | --- | --- |
| `showPrices` | `boolean` | `true` | Mostra i surcharge accanto alle opzioni. |
| `showPriceSurcharge` | `boolean` | `true` | Mostra la differenza di prezzo rispetto allo standard. |
| `showDeliveryDate` | `boolean` | `true` | Mostra "domani / giovedì 12 mar". *Deprecato dalla v6.26.0.* |
| `pickupShowDistance` | `boolean` | `true` | Distanza dall'indirizzo per i pickup point. |
| `allowPickupLocationsViewSelection` | `boolean` | `true` | Pulsante per passare tra vista lista e mappa. |
| `pickupLocationsDefaultView` | `'list' \| 'map'` | `'list'` | Vista iniziale. |
| `pickupLocationsMapTileLayerData` | `object` | OSM-default | Tile-server custom per la mappa (Mapbox/MapTiler). |

### Momenti di consegna (impostabili anche per `carrierSettings.<carrier>` per un controllo più fine)
| Key | Tipo | Scopo |
| --- | --- | --- |
| `allowDeliveryOptions` | `boolean` | Master-switch per la home delivery. |
| `allowStandardDelivery` | `boolean` | Standard. |
| `priceStandardDelivery` | `number` | Centesimi. |
| `allowMorningDelivery` | `boolean` | Consegna mattutina. |
| `priceMorningDelivery` | `number` | Centesimi. |
| `allowEveningDelivery` | `boolean` | Consegna serale. |
| `priceEveningDelivery` | `number` | Centesimi. |
| `allowSameDayDelivery` | `boolean` | Same-day (richiede `cutoffTimeSameDay`). |
| `priceSameDayDelivery` | `number` | Centesimi. |
| `allowMondayDelivery` | `boolean` | Consegna il lunedì. |
| `priceMondayDelivery` | `number` | Centesimi. |
| `allowSaturdayDelivery` | `boolean` | Consegna il sabato. |
| `priceSaturdayDelivery` | `number` | Centesimi. |

### Shipment options (per spedizione, sopra al momento di consegna)
| Key | Tipo | Scopo |
| --- | --- | --- |
| `allowSignature` | `boolean` | Firma alla consegna. |
| `priceSignature` | `number` | Centesimi. |
| `allowOnlyRecipient` | `boolean` | Solo al destinatario. |
| `priceOnlyRecipient` | `number` | Centesimi. |
| `allowPriorityDelivery` | `boolean` | Priority delivery (PostNL mailbox dalla v6.24, NL-only dalla v6.26.1). |

### Pickup
| Key | Tipo | Scopo |
| --- | --- | --- |
| `allowPickupLocations` | `boolean` | Mostra il tab pickup. |
| `pricePickup` | `number` | Centesimi. |
| `excludeParcelLockers` | `boolean` | Nascondi i locker (dalla v6.21). |

### Package type
| Key | Tipo | Scopo |
| --- | --- | --- |
| `packageType` | `'package' \| 'mailbox' \| 'digital_stamp' \| 'package_small'` | Tipo pre-selezionato. |
| `pricePackageTypeMailbox` | `number` | Centesimi. |
| `pricePackageTypeDigitalStamp` | `number` | Centesimi. |
| `pricePackageTypePackageSmall` | `number` | Centesimi. |

### Definizione completa del tipo
Sorgente autoritativa per tutte le key: [`@myparcel-dev/do-shared` ↗](https://github.com/myparcelnl/delivery-options/tree/main/libs/shared) — esportata come `InputDeliveryOptionsConfiguration` e `DeliveryOptionsConfiguration`.

## 7 · Giorni di drop-off e cutoff
Determina quando ancora consegni un ordine al carrier nello stesso giorno. Influenza quali date di consegna vengono mostrate dal widget.

### Semplice — un unico cutoff per tutti i giorni di drop-off
```ts
{
  cutoffTime: '16:00',
  sameDayCutoffTime: '09:30',
  dropOffDays: '1,2,3,4,5',     // lun-ven; accettabili anche [1,2,3,4,5] o '1;2;3;4;5'
  dropOffDelay: 0,              // giorni tra ordine e drop-off
  deliveryDaysWindow: 7,        // quanti giorni in avanti mostrare
}
```

### Cutoff personalizzato per ogni giorno
```ts
{
  cutoffTime: '15:00',          // fallback
  sameDayCutoffTime: '09:30',
  dropOffDays: [
    1,                                // lunedì — fallback cutoff
    { day: 2, cutoffTime: '16:00', sameDayCutoffTime: '10:00' },
    { day: 3 },
    { day: 5, cutoffTime: '14:00' },
  ],
  closedDays: ['2026-12-25', '2026-12-26'],  // chiusura shop (dalla v6.19)
}
```

`closedDays` (v6.19.0+) blocca date di calendario specifiche senza dover modificare `dropOffDays`.

::: warning `cutoffTime` senza `dropOffDays` è deprecato
Dalla v6 devi definire `dropOffDays` — altrimenti il widget assume i giorni feriali lun-ven e produce label "domani" sbagliate intorno alle festività.
:::

## 8 · Pickup point
Di default ottieni una vista a lista; gli utenti possono passare alla mappa se `allowPickupLocationsViewSelection: true`.

### Tile della mappa personalizzati (Mapbox / MapTiler)
```ts
pickupLocationsMapTileLayerData: {
  url: 'https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=YOUR_KEY',
  attribution: '© MapTiler © OpenStreetMap contributors',
  minZoom: 1,
  maxZoom: 18,
}
```

Senza questa key il widget ricade sui tile di OpenStreetMap.

### Payload della selezione per pickup
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

## 9 · Elaborare la selezione
Il payload dell'evento si mappa 1-a-1 sull'oggetto `options` di [`POST /shipments`](shipments.md):

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

Persisti la selezione lato server, non solo in `localStorage` — `localStorage` non sopravvive a un cambio di tab o a un ciclo di refresh, e la scelta deve essere legata all'ordine, non al browser.

::: tip Validazione lato server
Non fidarti mai solo del widget — ripeti la validazione lato server. Un utente può manipolare il payload dai DevTools. I PHP/JS SDK lo fanno automaticamente tramite i loro consignment validator.
:::

## 10 · Migrazione v5 → v6
Principali break (storia completa: [§Upgrading sulla vecchia pagina ↗](https://developer.myparcel.nl/documentation/60.delivery-options.html#upgrading)):

| Cosa | v5 | v6 |
| --- | --- | --- |
| Foglio di stile | Auto-injected | **Manuale** — includere `dist/style.css` |
| `showDeliveryDate` | Per carrier | Globale — non più per carrier (e *deprecato* dalla v6.26.0) |
| Evento `unselect_delivery_options` | Esisteva | Rimosso |
| `cutoffTime` senza `dropOffDays` | Accettabile | Deprecato — usa `dropOffDays` |
| Vue 2 | Default | Vue 3 obbligatorio (vedi `myparcel.lib.js` per il "bring-your-own") |

### Versioni dalla v6.18 (changelog rapido)
| Versione | Cosa |
| --- | --- |
| **v6.26.1** (2026-02-23) | Priority delivery solo per NL. |
| **v6.26.0** (2026-02-10) | `showDeliveryDate` deprecato. |
| **v6.25.0** (2026-01-27) | Consegna serale per DHL For You. |
| **v6.24.0** (2026-01-27) | Priority delivery per PostNL mailbox. |
| **v6.22.0** (2025-11-11) | Trunkrs come carrier. |
| **v6.21.0** (2025-10-27) | Aggiunto `excludeParcelLockers`. |
| **v6.20.0** (2025-10-10) | Configurazione platform custom via `config.platform`. |
| **v6.19.0** (2025-10-09) | `closedDays` per la chiusura dello shop. |
| **v6.18.0** (2025-08-14) | Caching delle richieste carrier. |

Changelog completo: [apps/delivery-options/CHANGELOG.md ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/CHANGELOG.md).

## 11 · Sandbox e debugging
- **Sandbox** — [myparcelnl.github.io/delivery-options ↗](https://myparcelnl.github.io/delivery-options/) — playground interattivo. Modifica ogni key, vedi subito UI e payload dell'evento.
- **GitHub releases** — [github.com/myparcelnl/delivery-options/releases ↗](https://github.com/myparcelnl/delivery-options/releases) — versioni, breaking change, URL jsdelivr.
- **DevTools** — ascolta in console: `document.addEventListener('myparcel_updated_delivery_options', e => console.log(e.detail))`. Aiuta a debuggare il motivo per cui una scelta non arriva.
- **Issue tracker** — [github.com/myparcelnl/delivery-options/issues ↗](https://github.com/myparcelnl/delivery-options/issues) — apri issue per comportamenti riproducibili nella sandbox.

## 12 · Combinare con gli SDK
L'evento del widget ti dà la selezione; gli SDK ne costruiscono i consignment:

```php
// PHP — tramite myparcelnl/sdk
use MyParcelNL\Sdk\Factory\DeliveryOptionsAdapterFactory;

$adapter = DeliveryOptionsAdapterFactory::create($_POST['delivery_choice']);
$consignment->setDeliveryDate($adapter->getDate())
            ->setDeliveryType($adapter->getDeliveryTypeId())
            ->setPackageType($adapter->getPackageTypeId());
```

```ts
// TypeScript — tramite @myparcelnl/sdk (JS SDK)
import { MyParcel } from '@myparcelnl/sdk';

const mp = new MyParcel({ /* ... */ });
const shipment = await mp.shipments.create({
  carrier:      choice.carrier,
  delivery_date: choice.date,
  recipient:    customerAddress,
  options:      { ...choice.shipmentOptions, package_type: choice.packageType },
});
```

Vedi [PHP SDK](php-sdk.md) e [JavaScript SDK](javascript-sdk.md) per il flusso completo del consignment.
