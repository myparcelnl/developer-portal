---
title: Options de livraison
---

::: note
Ceci est la documentation de la version stable des Options de livraison (v7).
:::

[[toc]]

## Introduction

Les options de livraison MyParcel constituent une application Vue qui vous permet d'afficher à vos clients un widget multi-transporteurs présentant différents délais d'acheminement et options d'expédition pendant le passage en caisse. Les options de livraison reposent sur l'adresse du client et sur les transporteurs que vous avez configurés. Le widget affiche les options de livraison disponibles, leurs prix et la date de livraison estimée. Le client peut ensuite sélectionner l'option de livraison qu'il préfère, ce qui vous permet de mettre à jour les frais d'expédition lors du passage en caisse.

En coulisses, les options de livraison s'appuient sur l'[API des options de livraison](/api/myparcel.html#get-delivery-options) et sur l'[API des capacités](/api/myparcel.html#post-shipments-capabilities) pour récupérer les options de livraison disponibles et les capacités des transporteurs.

## Démarrage rapide

Quatre étapes permettent de faire fonctionner les options de livraison dans votre caisse : installer le paquet, mettre en place un proxy de capacités, monter le widget et écouter la sélection du client.

### Étape 1 : Installer le paquet

Choisissez soit le CDN (recommandé pour la plupart des configurations, les mises à jour mineures et correctives incluant des corrections de bugs sont incluses automatiquement), soit votre gestionnaire de paquets.

**CDN, avec Vue 3 depuis le CDN :**

```html
<script src="https://cdn.jsdelivr.net/npm/vue@3.5"></script>
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/myparcel.lib.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/style.css" />
```

Si la page charge déjà une version différente de Vue, utilisez le bundle qui embarque sa propre version de Vue afin d'éviter les conflits :

```html
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/myparcel.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/style.css" />
```

**Gestionnaire de paquets :**

```bash
npm install @myparcel/delivery-options
```

```js
import '@myparcel/delivery-options/dist/myparcel.js';
import '@myparcel/delivery-options/dist/style.css';
```

### Étape 2 : Mettre en place un proxy de capacités

La v7 récupère les transporteurs, types de colis, types de livraison et options d'expédition disponibles à l'exécution depuis un backend que vous contrôlez. Vous pointerez le widget vers ce backend à l'étape 3.

Le widget envoie via POST un `CapabilitiesRequest` au format JSON à l'URL de votre backend. Votre backend doit le transmettre tel quel à `POST https://api.myparcel.nl/shipments/capabilities` (en injectant votre clé d'API dans la requête) et renvoyer la réponse au widget sans modification. Le widget met en cache la réponse par adresse et filtre côté client, il ne recharge donc les données que lorsque les entrées pertinentes changent.

En pratique, le widget ne renseigne que `recipient` (à partir de l'adresse actuelle) et, lorsqu'il est fourni, `packageType`. Votre proxy doit transmettre ce qu'il reçoit sans modification.

**Proxy minimal Node.js / Express :**

```js
app.post('/myparcel/capabilities', async (req, res) => {
  const response = await fetch('https://api.myparcel.nl/shipments/capabilities', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8;version=2.0',
      Authorization: `Bearer ${Buffer.from(process.env.MYPARCEL_API_KEY).toString('base64')}`,
    },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  res.status(response.status).json(data);
});
```

Pour le développement local, vous pouvez vous passer du proxy en définissant directement `config.apiKey`. Le widget l'encodera en base64 et appellera lui-même l'endpoint des capacités, tout en journalisant un avertissement chaque fois que `apiKey` est présent.

::: warning
N'utilisez JAMAIS `apiKey` en production. Cela expose votre clé d'API dans le frontend, ce qui constitue un risque de sécurité majeur. Utilisez toujours un proxy backend en production.
Si votre clé d'API est compromise, révoquez-la immédiatement dans le tableau de bord MyParcel et générez-en une nouvelle.
:::

Consultez la [référence de l'API des capacités](/api/myparcel.html#post-shipments-capabilities) pour connaître la structure complète de la requête et de la réponse, ainsi que le [migration guide] dans le dépôt pour une présentation plus détaillée.

### Étape 3 : Monter le widget

Voici la configuration la plus minimale possible : une adresse complète, la plateforme, l'URL du proxy de capacités de l'étape 2 et au moins un transporteur dans `carrierSettings`. Tous les types et options de livraison sont activés par défaut.

::: tip
Pour connaître toutes les options de configuration disponibles, consultez la [référence de configuration](#rfrence-de-configuration-complte).
:::

Si vous utilisez Vue 3, utilisez le composant `MyParcelDeliveryOptions` :

```vue
<script setup lang="ts">
import {ref, type Ref} from 'vue';
import {
  MyParcelDeliveryOptions,
  type InputDeliveryOptionsConfiguration,
} from '@myparcel/delivery-options/lib';

const configuration: Ref<InputDeliveryOptionsConfiguration> = ref({
  address: {
    cc: 'NL',
    postalCode: '2132JE',
    street: 'Antareslaan 31',
    city: 'Hoofddorp',
  },
  config: {
    platform: 'myparcel',
    proxyCapabilities: 'https://your-backend.example/myparcel/capabilities',
    carrierSettings: {
      postnl: {},
    },
  },
});
</script>

<style>
@import '@myparcel/delivery-options/style.css';
</style>

<template>
  <MyParcelDeliveryOptions :configuration="configuration" />
</template>
```

En JavaScript pur, ajoutez un `<div>` conteneur et déclenchez un événement `myparcel_update_delivery_options` avec la même configuration :

```html
<div id="myparcel-delivery-options"></div>
```

```js
document.dispatchEvent(
  new CustomEvent('myparcel_update_delivery_options', {
    detail: {
      // Default selector — change to any CSS selector that matches a single element.
      selector: '#myparcel-delivery-options',
      address: {
        cc: 'NL',
        postalCode: '2132JE',
        street: 'Antareslaan 31',
        city: 'Hoofddorp',
      },
      config: {
        platform: 'myparcel',
        proxyCapabilities: 'https://your-backend.example/myparcel/capabilities',
        carrierSettings: {
          postnl: {},
        },
      },
    },
  }),
);
```

### Étape 4 : Écouter la sélection du client

Chaque fois que le client modifie une sélection, le widget déclenche un événement `myparcel_updated_delivery_options` sur `document`. Utilisez la charge utile pour mettre à jour les frais d'expédition lors du passage en caisse.

```js
document.addEventListener('myparcel_updated_delivery_options', (event) => {
  console.log(event.detail);
});
```

Si le widget rencontre une exception d'API (par exemple une rue impossible à analyser), il déclenche à la place un événement `myparcel_error_delivery_options`. Consultez [événements](#vnements) pour la charge utile complète des deux événements.

## Configuration

La quasi-totalité des paramètres peut être définie globalement ou par transporteur. Si vous définissez un paramètre globalement, il sera utilisé pour tous les transporteurs, sauf si vous le surchargez pour un transporteur spécifique. La façon de transmettre la configuration aux options de livraison dépend de l'utilisation du composant Vue ou du JavaScript pur, voir l'[étape 3 du Démarrage rapide](#tape-3-monter-le-widget) pour les deux structures.

::: tip
Pour les informations les plus complètes, vous pouvez consulter notre [Sandbox]. Vous pouvez y voir (et essayer) toutes les options de configuration possibles et en observer le résultat en temps réel.
:::

### Types de livraison

Il existe différents types de livraison, correspondant aux options proposées par les différents transporteurs. Notez que tous les types ne sont pas forcément pris en charge par tous les transporteurs. Vous n'avez pas à vous en soucier : le widget n'affichera que les types de livraison à la fois pris en charge par le transporteur et activés dans votre configuration. Vous pouvez les configurer comme suit (les clés `allow*Delivery` peuvent être définies globalement ou par transporteur) :

```json
{
  "allowStandardDelivery": false,
  "allowMorningDelivery": true,
  "allowEveningDelivery": true,
  "allowSameDayDelivery": false
}
```

Cette configuration n'affichera que les options de livraison le matin et le soir. Pour la liste complète des types de livraison pris en charge, reportez-vous à la définition de l'[API des options de livraison](/api/myparcel.html#get-delivery-options).

::: note
Le drapeau générique `allowDeliveryOptions` de la v6 n'existe plus. Pour masquer entièrement la livraison à domicile pour un transporteur, définissez toutes les clés `allow*Delivery` de ce transporteur sur `false`. Pour masquer complètement un transporteur, définissez également `allowPickupLocations` sur `false` (ou mieux encore, n'incluez tout simplement pas le transporteur dans `carrierSettings`).
:::

### Heures limites et jours de dépôt

Les jours de dépôt sont les jours où vous pouvez déposer vos colis chez le transporteur. Ils servent à calculer les prochaines dates de livraison disponibles.

**Sous forme de tableau de numéros de jours de la semaine**

```json lines
{
  "cutoffTime": "16:00",
  "cutoffTimeSameDay": "9:30",
  "dropOffDays": [1, 2, 3, 4, 5]
}
```

Dans cet exemple, chaque jour de dépôt utilise le `cutoffTime` et le `cutoffTimeSameDay` de la racine de la configuration, soit respectivement `16:00` et `9:30`.

**Sous forme de tableau d'objets et/ou de nombres**

```json
{
  "cutoffTime": "15:00",
  "cutoffTimeSameDay": "9:30",
  "dropOffDays": [
    1,
    {
      "weekday": 2,
      "cutoffTime": "16:00",
      "cutoffTimeSameDay": "10:00"
    },
    {
      "weekday": 3
    },
    {
      "weekday": 5,
      "cutoffTime": "14:00"
    }
  ]
}
```

Dans cet exemple, les jours de dépôt sont les suivants :

| Jour     | Heure limite     | Heure limite le jour même |
| -------- | ---------------- | ------------------------- |
| Lundi    | 15:00 (défaut)   | 9:30 (défaut)             |
| Mardi    | 16:00            | 10:00                     |
| Mercredi | 15:00 (défaut)   | 9:30 (défaut)             |
| Vendredi | 14:00            | 9:30 (défaut)             |

::: note
La v7 n'accepte plus `dropOffDays` sous forme de chaîne séparée par des virgules ou des points-virgules. Transmettez un tableau de numéros de jours de la semaine (0 = dimanche, 6 = samedi) et/ou d'objets `{weekday, cutoffTime?, cutoffTimeSameDay?}`. La clé par entrée est `weekday` (et non `day`) et l'heure limite le jour même est `cutoffTimeSameDay` (et non `sameDayCutoffTime`).
:::

### Référence de configuration complète

Voici toutes les options de configuration possibles. L'objet `strings` est utilisé pour les traductions. L'objet `config` est utilisé pour tous les autres paramètres.

```json lines
{
  // string, CSS selector for the element where the delivery options will be rendered. Optional, defaults to "#myparcel-delivery-options".
  "selector": "#myparcel-delivery-options",
  "address": {
    // string, ISO 3166-1 alpha-2 country code
    "cc": "NL",
    // number | string (spaces are allowed)
    "postalCode": "2132JE",
    // string, full address line including the house number
    "street": "Antareslaan 31",
    // string, required for some carriers. We recommend always passing it.
    "city": "Hoofddorp"
  },
  "config": {
    // REQUIRED. "myparcel" | "sendmyparcel"
    "platform": "myparcel",

    // REQUIRED. URL of your backend capabilities proxy. The widget POSTs a
    // CapabilitiesRequest here and uses the response to decide which carriers,
    // package types, delivery types and shipment options to show.
    // See Quickstart step 2.
    "proxyCapabilities": "https://your-backend.example/myparcel/capabilities",

    // string, base URL of the MyParcel API. Defaults to "https://api.myparcel.nl".
    "apiBaseUrl": "https://api.myparcel.nl",

    // string. Development-only shortcut: when set, the widget calls the capabilities
    // endpoint directly with this key instead of going through the proxy. The
    // widget will log a warning. Do NOT use this in production.
    "apiKey": "",

    // string, ISO 639-1 language code. Defaults to the browser language.
    "locale": "",

    // string, ISO 4217 currency code. Defaults to "EUR".
    "currency": "EUR",

    // boolean
    "pickupShowDistance": true,
    // boolean
    "showPriceSurcharge": false,
    // boolean
    "showPrices": true,
    // boolean, render a zero price as the translated word for "free"
    "showPriceZeroAsFree": false,

    // boolean, render carriers as a compact collapsible list instead of full cards. Since v7.1.
    "compactView": false,

    // boolean, hide pickup locations of type "locker"
    "excludeParcelLockers": false,

    // boolean
    "allowPickupLocationsViewSelection": true,

    // boolean, show pickup locations in a modal/pop-up instead of inline. Since v7.3.
    "popUpMap": false,

    // boolean, show a "load more" button on the pickup map.
    "pickupMapAllowLoadMore": true,

    // "list" | "map", defaults to "map".
    "pickupLocationsDefaultView": "map",

    // Object (or JSON-encoded string) containing map tile layer data for Leaflet/OSM.
    // Defaults to OpenStreetMap France's tile layer.
    "pickupLocationsMapTileLayerData": {
      "url": "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      "attribution": "© OpenStreetMap contributors",
      "maxZoom": 19
    },

    // Date[]. Closed days (e.g. national holidays). These dates are skipped when
    // calculating drop-off and delivery dates.
    "closedDays": [],

    // REQUIRED. Object with carrier identifier as keys, containing carrier-specific settings.
    // Carriers that are not in the capabilities response are filtered out.
    // Example:
    // "carrierSettings": {
    //   "postnl": {
    //     "allowStandardDelivery": true,
    //     "priceStandardDelivery": 5.99
    //   }
    // }
    "carrierSettings": {},

    /*
     * NOTE: The following settings can be overridden per carrier. See enum `CarrierSetting`.
     */

    /*
     * Home Delivery
     */

    // Standard delivery. (e.g. 10:00 - 18:00)
    "allowStandardDelivery": true,
    "priceStandardDelivery": 0,

    // Morning delivery. (e.g. 08:00 - 12:00)
    "allowMorningDelivery": true,
    "priceMorningDelivery": 0,

    // Evening delivery. (e.g. 18:00 - 22:00)
    "allowEveningDelivery": true,
    "priceEveningDelivery": 0,

    // Same-day delivery.
    "allowSameDayDelivery": true,
    "priceSameDayDelivery": 0,

    // Monday delivery. Requires Sunday as a drop-off day. For myparcel + postnl only.
    "allowMondayDelivery": true,
    "priceMondayDelivery": 0,

    // Saturday delivery. Requires Friday as a drop-off day. For sendmyparcel + bpost only.
    "allowSaturdayDelivery": false,
    "priceSaturdayDelivery": 0,

    // Express delivery, where supported by the carrier (DHL Express / UPS Express Saver, etc.).
    "allowExpressDelivery": false,
    "priceExpressDelivery": 0,

    // Priority delivery, where supported by the carrier.
    "allowPriorityDelivery": false,
    "pricePriorityDelivery": 0,

    /*
     * Shipment options
     */

    // Allow customer to choose the "only recipient" shipment option.
    "allowOnlyRecipient": false,
    "priceOnlyRecipient": 0,

    // Allow customer to choose the signature shipment option.
    "allowSignature": false,
    "priceSignature": 0,

    /*
     * Pickup Locations
     */

    "allowPickupLocations": true,
    "pricePickup": 0,

    /*
     * Drop-off / cutoff
     */

    // Cutoff time. Must be a string in the format "HH:mm".
    "cutoffTime": "16:00",

    // Cutoff time when same-day delivery is enabled and possible. Must be a string in the format "HH:mm".
    "cutoffTimeSameDay": "09:30",

    // Number of days in the future to show delivery options for.
    // Set to 1 to hide the date selector entirely (carriers fall back to a single "standard delivery" option without a date picker).
    "deliveryDaysWindow": 7,

    // See "Cutoff times and drop off days". Array of weekday numbers (0=Sun ... 6=Sat)
    // and/or { "weekday": <number>, "cutoffTime"?: "HH:mm", "cutoffTimeSameDay"?: "HH:mm" } objects.
    // Plain strings like "1,2,3" are no longer accepted in v7.
    "dropOffDays": [{"weekday": 1}, {"weekday": 2, "cutoffTime": "16:00"}],

    // Number of days to delay the drop-off day.
    "dropOffDelay": 0,

    /*
     * Package types
     */

    // Package type. "package" | "mailbox" | "digital_stamp" | "package_small".
    // See PackageTypeName enum from @myparcel/constants.
    "packageType": "package", // Default, uses prices from home delivery settings.
    "pricePackageTypeDigitalStamp": 0,
    "pricePackageTypeMailbox": 0,
    "pricePackageTypePackageSmall": 0
  },
  "strings": {} // Translations
}
```

## Événements

Le widget communique avec votre page via trois événements personnalisés déclenchés sur `document`.

### `myparcel_update_delivery_options` (entrant)

Déclenchez cet événement pour (re)générer le widget avec une nouvelle configuration. L'extrait en JavaScript pur de l'[étape 3](#tape-3-monter-le-widget) l'utilise pour le montage initial. Les utilisateurs de Vue 3 n'ont pas besoin de le déclencher, le composant détecte automatiquement les changements de sa prop `configuration`.

### `myparcel_updated_delivery_options` (sortant)

Déclenché chaque fois que le client modifie une sélection. `event.detail` contient la sélection résolue :

```json lines
{
  "carrier": "postnl",
  "date": "2024-04-10 00:00:00.000000",
  "deliveryType": "morning",
  "isPickup": false,
  "packageType": "package",
  "shipmentOptions": {
    "signature": true,
    "onlyRecipient": true
  }
}
```

Lorsque le client choisit une option de point de retrait, `isPickup` vaut `true`, `deliveryType` vaut `"pickup"` et un objet `pickupLocation` supplémentaire est inclus.

### `myparcel_error_delivery_options` (sortant)

Déclenché chaque fois que le widget intercepte une exception d'API. `event.detail.exception` contient l'exception la plus récente :

```json lines
{
  "exception": {
    "code": 3501,
    "label": "error3501",
    "status": 422,
    "title": "Street cannot be parsed",
    "message": "Street cannot be parsed"
  }
}
```

## Mise à niveau

### v6 vers v7

La v7 supprime les configurations de plateforme intégrées de façon statique (MyParcel NL / SendMyParcel BE) au profit de la récupération des capacités des transporteurs à l'exécution depuis un [proxy](#tape-2-mettre-en-place-un-proxy-de-capacits) backend que vous contrôlez. Il s'agit du changement de rupture majeur et il nécessite des modifications de votre intégration.

#### Nouvelles fonctionnalités

- Les transporteurs, types de colis, types de livraison et options d'expédition sont désormais pilotés par l'API des capacités en direct plutôt que par une liste codée en dur, de sorte que les transporteurs et options nouvellement activés apparaissent dans le widget sans nouvelle version.
- Si un transporteur est pris en charge mais, pour une raison quelconque, ne peut renvoyer aucune option de livraison (par exemple en raison d'un échec de validation d'adresse), il apparaîtra tout de même dans le widget comme une option sélectionnable, sans aucune option de date/heure.
- Nouvelle option de configuration `compactView` (depuis la v7.1) pour afficher les transporteurs sous forme de liste compacte repliable.
- Nouvelle option de configuration `popUpMap` (depuis la v7.3) pour afficher les points de retrait dans une fenêtre modale plutôt qu'en ligne.
- Nouvelle option de configuration `excludeParcelLockers` pour masquer les points de retrait de type consigne automatique.
- Nouvelle option de configuration `apiKey` pour le développement local (développement uniquement, journalise un avertissement).

#### Changements de rupture

- `proxyCapabilities` est obligatoire. Sans lui, le widget ne peut pas déterminer quels transporteurs ou options afficher.
- Le paramètre de transporteur `allowDeliveryOptions` a été supprimé. Pour désactiver la livraison à domicile pour un transporteur, définissez toutes les clés `allow*Delivery` de ce transporteur sur `false`. Pour désactiver entièrement un transporteur, définissez également `allowPickupLocations` sur `false` (ou omettez le transporteur de `carrierSettings`).
- `showDeliveryDate` a été supprimé en tant que clé de configuration. Le sélecteur de date est désormais déduit automatiquement : il s'affiche lorsque le type de colis prend en charge les moments de livraison et que `deliveryDaysWindow` est supérieur à `1`. Pour masquer le sélecteur de date, définissez `deliveryDaysWindow: 1`, chaque transporteur exposera alors une seule option de « livraison standard » sans sélecteur de date.
- `dropOffDays` n'accepte plus une simple chaîne (`"1,2,3"` / `"1;2;3"`) ; il doit s'agir d'un tableau de numéros de jours de la semaine et/ou d'objets `DropOffEntry`.
- Les erreurs d'API n'empêchent plus l'apparition des transporteurs. En v6, une rue impossible à analyser ou un code postal manquant pouvait masquer tous les transporteurs ; en v7, tout ce qui est proposé par les capacités est affiché.
- Le groupe `DeprecatedConfigOptions` n'est plus accepté : `allowShowDeliveryDate`, `fridayCutoffTime` et `saturdayCutoffTime` sont ignorés silencieusement. Retirez-les de votre configuration.

#### Exports supprimés

Les éléments suivants ont été supprimés de `@myparcel/delivery-options` :

- Le type `PlatformConfiguration`, aucun remplacement direct ; la réponse des capacités pilote le comportement de la plateforme.
- L'énumération `PlatformName`, non remplacée. `platform` reste un champ de configuration obligatoire ; transmettez la chaîne de plateforme qui correspond à votre clé d'API.
- `usePlatform()`, `useCurrentPlatform()`, `getDefaultConfigForPlatform()`, aucun remplacement direct.

#### Changements internes notables

- La dépendance de pair Vue a été portée à `^3.5`.
- `allowExpressDelivery`, `priceExpressDelivery`, `allowPriorityDelivery` et `pricePriorityDelivery` sont désormais des paramètres de transporteur à part entière (ils existaient en v6 mais n'étaient pas officiellement documentés).
- La carte des points de retrait peut désormais charger des emplacements supplémentaires de façon différée via `pickupMapAllowLoadMore`.

Consultez le [migration guide] pour une présentation pas à pas et un exemple d'implémentation de proxy.

### v5 vers v6

L'application a été réécrite de zéro afin de pouvoir mettre à niveau toutes les technologies sous-jacentes et d'améliorer les performances et la stabilité. Le comportement existant continuera pour l'essentiel de fonctionner, vous pouvez donc passer à la v6 sans changements majeurs. Il existe toutefois quelques changements de rupture et dépréciations, veuillez donc lire attentivement la liste suivante.

#### Nouvelles fonctionnalités

- Il est désormais possible de définir des heures limites distinctes par jour et par transporteur.
- Le type de colis `package_small` est désormais pris en charge.
- Vous pouvez désormais transmettre des heures limites personnalisées par jour (et éventuellement par transporteur).
- Il est désormais possible de désactiver la livraison standard tout en continuant d'afficher la livraison le matin et/ou le soir.

#### Autres améliorations

- Un magnifique nouveau design.
- Des performances et une stabilité nettement améliorées.
- L'application peut désormais être utilisée comme composant Vue dans n'importe quelle application Vue 3.
- Prise en charge de TypeScript.
- De nombreuses méthodes, constantes, types et interfaces exportés supplémentaires.

#### Changements de rupture

- Il n'est plus possible de définir `showDeliveryDate` par transporteur. Il s'agit désormais uniquement d'un paramètre global.
- Le CSS n'est plus intégré au bundle, vous devez donc inclure manuellement `dist/style.css`. Cela ne s'applique pas si vous utilisez le composant Vue.
- L'événement `unselect_delivery_options` a été supprimé. Si vous avez besoin de cette fonctionnalité, [faites-le nous savoir][let us know].

#### Déprécié

- `cutoffTime` est déprécié, utilisez plutôt `dropOffDays`
- Plutôt que de vous appuyer uniquement sur `allowDeliveryOptions`, utilisez également `allowStandardDelivery`.

::: note
Le comportement existant continuera de fonctionner tout au long de la v6 mais sera supprimé/modifié dans la prochaine version majeure.
:::

#### Changements internes notables

- L'application est désormais entièrement écrite en TypeScript.
- Passage de Vue 2 à Vue 3.
- Passage de Vue CLI à Vite.
- Passage de Jest à Vitest.

[Sandbox]: https://myparcelnl.github.io/delivery-options/
[let us know]: https://github.com/myparcelnl/delivery-options/issues
[migration guide]: https://github.com/myparcelnl/delivery-options/blob/main/docs/migrating-v6-to-v7.md
