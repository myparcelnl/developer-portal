---
title: Options de livraison
description: "Guide d'intégration technique du widget @myparcel/delivery-options (v6). Intégrez-le dans votre checkout, capturez l'événement de sélection et transmettez la payload à /shipments."
---

<div class="mp-do-cta">
  <div class="mp-do-cta__copy">
    <span class="mp-do-cta__eyebrow">Sandbox</span>
    <strong class="mp-do-cta__title">Essayez le widget sans rien installer</strong>
    <span class="mp-do-cta__hint">Modifiez n'importe quelle clé de config en temps réel et voyez l'UI et la payload de l'événement réagir instantanément.</span>
  </div>
  <a class="mp-btn mp-btn--primary mp-do-cta__btn" href="https://myparcelnl.github.io/delivery-options/" target="_blank" rel="noopener">
    Ouvrir la sandbox
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

::: tip En bref
Le widget Delivery Options affiche dans votre checkout quels moments de livraison et points de retrait sont disponibles pour l'adresse saisie. Lors de la sélection, votre frontend reçoit un `CustomEvent` avec carrier, date, delivery type, package type et shipment options, que vous transmettez 1-pour-1 à `POST /shipments`. Vue 3 sous le capot, mais fonctionne aussi en standalone via des balises `<script>`. Source : [github.com/myparcelnl/delivery-options ↗](https://github.com/myparcelnl/delivery-options).
:::

## Que cherchez-vous ?
| Objectif | Section |
| --- | --- |
| Installer via CDN ou npm | [1 · Install](#1-install) |
| Intégration Vue 3 ou vanilla JS | [3 · Initialisation](#3-initialisation) |
| Capturer la sélection et les erreurs | [4 · Events](#4-events) |
| Quels carriers / options existent | [5 · Carriers et options](#5-carriers-et-options) |
| Référence de configuration | [6 · Référence de configuration](#6-rfrence-de-configuration) |
| Heures de cutoff et jours de drop-off | [7 · Jours de drop-off et cutoff](#7-jours-de-drop-off-et-cutoff) |
| Points de retrait (liste/carte) | [8 · Pickup points](#8-pickup-points) |
| Sélection vers `/shipments` | [9 · Traiter la sélection](#9-traiter-la-slection) |
| Migrer de v5 vers v6 | [10 · Migrer v5 → v6](#10-migrer-v5-v6) |

::: warning Statut de cette page
L'ancienne version sur [developer.myparcel.nl/documentation/60.delivery-options.html ↗](https://developer.myparcel.nl/documentation/60.delivery-options.html) est obsolète. Cette page est écrite pour [@myparcel/delivery-options v6.26.1](https://github.com/myparcelnl/delivery-options/releases/tag/v6.26.1).
:::

## 1 · Install

### Option A, CDN (le plus rapide, sans étape de build)
Deux variantes : soit vous chargez Vue vous-même, soit vous utilisez le bundle qui inclut déjà Vue.

```html
<!-- Variant 1: load Vue yourself -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.4"></script>
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/myparcel.lib.js"></script>
<link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/style.css" />

<!-- Variant 2: bundle including Vue -->
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/myparcel.js"></script>
<link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@6/dist/style.css" />
```

::: tip Quelle variante choisir ?
Votre boutique inclut-elle déjà Vue 3 dans son bundle ? Prenez `myparcel.lib.js` (une seule instance Vue, bundle plus léger). Pas de Vue dans votre stack ? Prenez `myparcel.js`, il vous suffit alors de charger la feuille de style à côté.
:::

### Option B, npm
```bash
npm install @myparcel/delivery-options
```

```js
import '@myparcel/delivery-options/dist/myparcel.js';
import '@myparcel/delivery-options/dist/style.css';
```

Pour les projets Vue 3 qui importent directement le composant, utilisez l'export `/lib` (voir [§3 · Vue 3](#composant-vue-3)).

### Requirements
| | Version |
| --- | --- |
| Navigateurs | Evergreen (2 dernières versions de Chrome, Firefox, Safari, Edge) |
| Vue (uniquement avec `myparcel.lib.js`) | `^3.4` |
| Node (build) | `^18 \|\| ^20` |
| Stylesheet | `dist/style.css`, **doit** être chargée séparément, sinon le widget s'affiche sans style |

## 2 · Architecture en un coup d'œil
```
┌──────────────┐    update event        ┌──────────────┐
│  votre       │ ─────────────────────► │  Delivery    │
│  checkout    │   (CustomEvent)        │  Options     │
└──────────────┘                        │  widget      │
       ▲       ◄───────────────────────  │  (Vue 3)     │
       │       updated/error event       └──────────────┘
       │                                        │
       └────────► POST /shipments  ◄────────────┘
                  (selection payload)
```

Trois points d'intégration :

1. **Init**, vous donnez au widget une `configuration` (adresse + carrier settings) via une prop ou via `dispatchEvent('myparcel_update_delivery_options', { detail: config })`.
2. **Sélection**, le widget s'affiche dans `<div id="myparcel-delivery-options">`, l'utilisateur choisit une option, vous capturez `myparcel_updated_delivery_options`.
3. **Submit**, lors de la soumission du checkout, vous prenez la dernière payload et la transmettez à `/shipments` (API REST ou via le [PHP SDK](php-sdk.md) / [JS SDK](javascript-sdk.md)).

## 3 · Initialisation

### Composant Vue 3
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

Modifier `configuration.value` provoque un re-render du widget, pratique lorsque l'adresse n'est connue que plus tard dans le flux de checkout.

### JavaScript pur / non-Vue
Point de montage HTML :
```html
<div id="myparcel-delivery-options"></div>
```

Initialisation via un `CustomEvent` :
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
Une init unique fonctionne aussi via `window.MyParcelConfig = configuration` *avant* le chargement du script du widget. Pour des mises à jour dynamiques, restez sur la voie du `CustomEvent`.
:::

## 4 · Events

### Entrant, mettre à jour la config
| Event | Detail | Quand |
| --- | --- | --- |
| `myparcel_update_delivery_options` | `InputDeliveryOptionsConfiguration` | Initialisation ou re-render lors d'un changement d'adresse. |

### Sortant, sélection et erreurs
| Event | Detail | Quand |
| --- | --- | --- |
| `myparcel_updated_delivery_options` | Payload de sélection (voir ci-dessous) | Chaque fois que l'utilisateur fait ou modifie un choix. |
| `myparcel_error_delivery_options` | `{ exception: { code, label, status, title, message } }` | Erreur de validation renvoyée par l'API (par ex. code postal invalide). |

#### Payload de sélection
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

Pour `isPickup: true`, la payload contient également un objet `pickupLocation` avec `locationCode`, `retailNetworkId`, `street`, `number`, `postalCode`, `city`, `cc`, `latitude`, `longitude` et `openingHours`.

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

#### Codes d'erreur (sélection)
| Code | Status | Signification |
| --- | --- | --- |
| `3501` | `422` | Street cannot be parsed, le code postal est valide mais le parsing de l'adresse échoue. |
| `3505` | `422` | Postal code does not exist. |
| `3506` | `422` | Code postal en dehors de la zone de service du carrier. |
| `3508` | `422` | Aucune option livrable pour cette date/ce jour. |

L'ensemble complet se trouve dans [`src/types/events.types.ts` ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/src/types/events.types.ts) et la validation runtime dans [`src/config/validateConfiguration.ts` ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/src/config/validateConfiguration.ts).

## 5 · Carriers et options
`carrierSettings` accepte un bloc distinct par carrier. Un `{}` vide signifie : utiliser les valeurs par défaut du compte dans le backoffice MyParcel.

| Key | Carrier | Marchés |
| --- | --- | --- |
| `postnl` | PostNL | NL, BE |
| `dhlforyou` | DHL For You | NL |
| `dhlparcelconnect` | DHL Parcel Connect | EU |
| `dhleuroplus` | DHL Europlus | EU |
| `dpd` | DPD | NL, BE, EU |
| `gls` | GLS | NL, BE, EU |
| `bpost` | bpost | BE |
| `ups` | UPS Standard / Express Saver | EU/Monde |
| `trunkrs` | Trunkrs | NL (depuis v6.22) |

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

Par carrier, seules les options prises en charge par le carrier et par votre contrat de boutique sont affichées. Le widget masque de lui-même les combinaisons indisponibles.

## 6 · Référence de configuration
Voici comment `configuration` est organisée :

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

### `config` de premier niveau
| Key | Type | Default | Quand |
| --- | --- | --- | --- |
| `platform` | `'myparcel' \| 'sendmyparcel'` |, | **Obligatoire.** `myparcel` pour les boutiques NL, `sendmyparcel` pour les boutiques BE. |
| `locale` | `string` | valeur par défaut de la plateforme | Langue de l'UI, par ex. `nl-NL`, `fr-BE`. |
| `carrierSettings` | `object` |, | **Obligatoire**, au moins une clé de carrier. |
| `currency` | `string` | valeur par défaut de la plateforme | Affichage de la devise pour les surcharges. |

### Paramètres d'affichage
| Key | Type | Default | Objectif |
| --- | --- | --- | --- |
| `showPrices` | `boolean` | `true` | Afficher les surcharges à côté des options. |
| `showPriceSurcharge` | `boolean` | `true` | Afficher l'écart de prix par rapport à l'option standard. |
| `showDeliveryDate` | `boolean` | `true` | Afficher « demain / jeudi 12 mars ». *Deprecated depuis v6.26.0.* |
| `pickupShowDistance` | `boolean` | `true` | Distance depuis l'adresse pour les points de retrait. |
| `allowPickupLocationsViewSelection` | `boolean` | `true` | Bouton de bascule entre la vue liste et la vue carte. |
| `pickupLocationsDefaultView` | `'list' \| 'map'` | `'list'` | Vue initiale. |
| `pickupLocationsMapTileLayerData` | `object` | OSM par défaut | Serveur de tiles personnalisé pour la carte (Mapbox/MapTiler). |

### Options de livraison (à définir par `carrierSettings.<carrier>` pour un contrôle plus fin)
| Key | Type | Objectif |
| --- | --- | --- |
| `allowDeliveryOptions` | `boolean` | Interrupteur principal pour la livraison à domicile. |
| `allowStandardDelivery` | `boolean` | Standard. |
| `priceStandardDelivery` | `number` | Cents. |
| `allowMorningDelivery` | `boolean` | Livraison le matin. |
| `priceMorningDelivery` | `number` | Cents. |
| `allowEveningDelivery` | `boolean` | Livraison le soir. |
| `priceEveningDelivery` | `number` | Cents. |
| `allowSameDayDelivery` | `boolean` | Same-day (nécessite `cutoffTimeSameDay`). |
| `priceSameDayDelivery` | `number` | Cents. |
| `allowMondayDelivery` | `boolean` | Livraison le lundi. |
| `priceMondayDelivery` | `number` | Cents. |
| `allowSaturdayDelivery` | `boolean` | Livraison le samedi. |
| `priceSaturdayDelivery` | `number` | Cents. |

### Shipment options (par envoi, en plus de l'option de livraison)
| Key | Type | Objectif |
| --- | --- | --- |
| `allowSignature` | `boolean` | Signature à la réception. |
| `priceSignature` | `number` | Cents. |
| `allowOnlyRecipient` | `boolean` | Livrer uniquement au destinataire. |
| `priceOnlyRecipient` | `number` | Cents. |
| `allowPriorityDelivery` | `boolean` | Priority delivery (PostNL mailbox depuis v6.24, NL-only depuis v6.26.1). |

### Pickup
| Key | Type | Objectif |
| --- | --- | --- |
| `allowPickupLocations` | `boolean` | Afficher l'onglet pickup. |
| `pricePickup` | `number` | Cents. |
| `excludeParcelLockers` | `boolean` | Masquer les lockers (depuis v6.21). |

### Types de colis
| Key | Type | Objectif |
| --- | --- | --- |
| `packageType` | `'package' \| 'mailbox' \| 'digital_stamp' \| 'package_small'` | Type présélectionné. |
| `pricePackageTypeMailbox` | `number` | Cents. |
| `pricePackageTypeDigitalStamp` | `number` | Cents. |
| `pricePackageTypePackageSmall` | `number` | Cents. |

### Définition complète des types
La source de référence pour toutes les clés : [`@myparcel-dev/do-shared` ↗](https://github.com/myparcelnl/delivery-options/tree/main/libs/shared), exportée sous `InputDeliveryOptionsConfiguration` et `DeliveryOptionsConfiguration`.

## 7 · Jours de drop-off et cutoff
Détermine quand une commande part encore le jour même chez le carrier. Cela influence les dates de livraison que le widget affiche.

### Simple, un seul cutoff pour tous les jours de drop-off
```ts
{
  cutoffTime: '16:00',
  sameDayCutoffTime: '09:30',
  dropOffDays: '1,2,3,4,5',     // Mon–Fri; also valid: [1,2,3,4,5] or '1;2;3;4;5'
  dropOffDelay: 0,              // days between order and drop-off
  deliveryDaysWindow: 7,        // how many days ahead are shown
}
```

### Un cutoff distinct par jour
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

`closedDays` (v6.19.0+) bloque des dates de calendrier spécifiques sans que vous ayez à retravailler `dropOffDays`.

::: warning `cutoffTime` sans `dropOffDays` est deprecated
Depuis la v6, vous devez définir `dropOffDays`, sinon le widget suppose des jours ouvrés Lun–Ven et vous obtenez des libellés « demain » incorrects autour des jours fériés.
:::

## 8 · Pickup points
Par défaut, vous obtenez une vue liste ; les utilisateurs peuvent passer à une carte lorsque `allowPickupLocationsViewSelection: true`.

### Tiles de carte personnalisés (Mapbox / MapTiler)
```ts
pickupLocationsMapTileLayerData: {
  url: 'https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=YOUR_KEY',
  attribution: '© MapTiler © OpenStreetMap contributors',
  minZoom: 1,
  maxZoom: 18,
}
```

Sans cette clé, le widget se rabat sur les tiles OpenStreetMap.

### Payload de sélection pour un pickup
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

## 9 · Traiter la sélection
La payload de l'événement se mappe 1-pour-1 sur l'objet `options` de [`POST /shipments`](shipments.md) :

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

Faites la persistance côté serveur, pas seulement dans `localStorage` : `localStorage` ne survit pas à un changement d'onglet ni à un cycle de rafraîchissement, et le choix appartient à la commande, pas au navigateur.

::: tip Valider côté serveur
Ne faites jamais confiance au seul widget, répétez la validation côté serveur. Un utilisateur peut manipuler la payload via les DevTools. Les SDK PHP/JS le font automatiquement via leurs validateurs de consignment.
:::

## 10 · Migrer v5 → v6
Principales ruptures (l'histoire complète : [§Upgrading sur l'ancienne page ↗](https://developer.myparcel.nl/documentation/60.delivery-options.html#upgrading)) :

| Quoi | v5 | v6 |
| --- | --- | --- |
| Stylesheet | Auto-injectée | Inclure **manuellement** `dist/style.css` |
| `showDeliveryDate` | Par carrier | Globale, plus par carrier (et *deprecated* depuis v6.26.0) |
| Événement `unselect_delivery_options` | Existait | Supprimé |
| `cutoffTime` sans `dropOffDays` | Acceptable | Deprecated, utilisez `dropOffDays` |
| Vue 2 | Par défaut | Vue 3 requis (voir `myparcel.lib.js` pour le « bring-your-own ») |

### Versions depuis v6.18 (changelog rapide)
| Version | Quoi |
| --- | --- |
| **v6.26.1** (2026-02-23) | Priority delivery NL uniquement. |
| **v6.26.0** (2026-02-10) | `showDeliveryDate` deprecated. |
| **v6.25.0** (2026-01-27) | Livraison le soir pour DHL For You. |
| **v6.24.0** (2026-01-27) | Priority delivery pour PostNL mailbox. |
| **v6.22.0** (2025-11-11) | Trunkrs comme carrier. |
| **v6.21.0** (2025-10-27) | `excludeParcelLockers` ajouté. |
| **v6.20.0** (2025-10-10) | Config de plateforme personnalisée via `config.platform`. |
| **v6.19.0** (2025-10-09) | `closedDays` pour les fermetures de boutique. |
| **v6.18.0** (2025-08-14) | Mise en cache des requêtes carrier. |

Changelog complet : [apps/delivery-options/CHANGELOG.md ↗](https://github.com/myparcelnl/delivery-options/blob/main/apps/delivery-options/CHANGELOG.md).

## 11 · Sandbox et debugging
- **Sandbox**, [myparcelnl.github.io/delivery-options ↗](https://myparcelnl.github.io/delivery-options/), bac à sable interactif. Modifiez n'importe quelle clé, voyez l'UI et la payload de l'événement réagir instantanément.
- **GitHub releases**, [github.com/myparcelnl/delivery-options/releases ↗](https://github.com/myparcelnl/delivery-options/releases), versions, breaking changes, URLs jsdelivr.
- **DevTools**, écoutez dans la console : `document.addEventListener('myparcel_updated_delivery_options', e => console.log(e.detail))`. Utile pour déboguer la raison pour laquelle un choix n'arrive pas.
- **Issue tracker**, [github.com/myparcelnl/delivery-options/issues ↗](https://github.com/myparcelnl/delivery-options/issues), ouvrez un issue avec un comportement que vous pouvez reproduire dans la sandbox.

## 12 · Combiner avec les SDK
L'événement du widget vous donne la sélection ; les SDK construisent les consignments à partir de celle-ci :

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

Voir le [PHP SDK](php-sdk.md) et le [JavaScript SDK](javascript-sdk.md) pour le flux complet d'expédition.
