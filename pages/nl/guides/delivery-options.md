---
title: Bezorgopties
description: "Integreer de MyParcel Delivery Options-widget (v7) in je checkout: installeren, een capabilities-proxy opzetten, de widget mounten en luisteren naar de keuze van de klant. Inclusief de volledige configuratie-referentie en de v6 → v7-upgradegids."
---

::: note
Dit is de documentatie voor de stabiele versie van Delivery Options (v7).
:::

[[toc]]

## Inleiding

De MyParcel delivery options is een Vue-applicatie waarmee je je klanten tijdens de checkout een multi-carrier-widget toont met verschillende aankomsttijden en verzendopties. De bezorgopties zijn gebaseerd op het adres van de klant en de vervoerders die je hebt geconfigureerd. De widget toont de beschikbare bezorgopties, hun prijzen en de verwachte bezorgdatum. De klant kiest vervolgens de gewenste bezorgoptie, die je kunt gebruiken om de verzendkosten in je checkout bij te werken.

Achter de schermen leunt de delivery options op de [delivery options API](/api/myparcel.html#get-delivery-options) en de [capabilities API](/api/myparcel.html#post-shipments-capabilities) om de beschikbare bezorgopties en carrier-capabilities op te halen.

## Snelstart

Er zijn vier stappen om de delivery options in je checkout te laten werken: het package installeren, een capabilities-proxy opzetten, de widget mounten en luisteren naar de keuze van de klant.

### Stap 1: Installeer het package

Kies de CDN (aanbevolen voor de meeste setups — minor- en patch-updates met bugfixes worden automatisch meegenomen) of je package manager.

**CDN, met Vue 3 vanaf de CDN:**

```html
<script src="https://cdn.jsdelivr.net/npm/vue@3.5"></script>
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/myparcel.lib.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/style.css" />
```

Laadt de pagina al een andere versie van Vue, gebruik dan de bundle die zijn eigen Vue meelevert om conflicten te voorkomen:

```html
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/myparcel.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/style.css" />
```

**Package manager:**

```bash
npm install @myparcel/delivery-options
```

```js
import '@myparcel/delivery-options/dist/myparcel.js';
import '@myparcel/delivery-options/dist/style.css';
```

### Stap 2: Zet een capabilities-proxy op

v7 haalt de beschikbare vervoerders, pakkettypes, bezorgtypes en verzendopties tijdens runtime op uit een backend die jij beheert. In stap 3 wijs je de widget naar deze backend.

De widget POST't een JSON-`CapabilitiesRequest` naar jouw backend-URL. Je backend stuurt die ongewijzigd door naar `POST https://api.myparcel.nl/shipments/capabilities` (en injecteert daarbij je API key) en geeft de response onveranderd terug aan de widget. De widget cachet de response per adres en filtert client-side, dus hij haalt alleen opnieuw op wanneer relevante invoer verandert.

In de praktijk vult de widget alleen `recipient` (uit het huidige adres) en, indien meegegeven, `packageType`. Je proxy moet doorsturen wat hij ontvangt, zonder aanpassingen.

**Minimale Node.js / Express-proxy:**

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

Voor lokale ontwikkeling kun je de proxy overslaan door `config.apiKey` direct te zetten. De widget codeert hem dan in base64 en roept het capabilities-endpoint zelf aan, met een waarschuwing in de log zolang `apiKey` aanwezig is.

::: warning
Gebruik `apiKey` NOOIT in productie. Het stelt je API key bloot in de frontend, een groot beveiligingsrisico. Gebruik in productie altijd een backend-proxy.
Is je API key gelekt, trek hem dan direct in via het MyParcel-dashboard en genereer een nieuwe.
:::

Zie de [capabilities API-referentie](/api/myparcel.html#post-shipments-capabilities) voor de volledige request- en response-vorm, en de [migration guide] in de repository voor een uitgebreidere uitleg.

### Stap 3: Mount de widget

Dit is de kleinst mogelijke configuratie: een volledig adres, het platform, de URL van de capabilities-proxy uit stap 2, en minstens één vervoerder in `carrierSettings`. Alle bezorgtypes en opties staan standaard aan.

::: tip
Voor alle beschikbare configuratie-opties, zie de [configuratie-referentie](#full-configuration-reference).
:::

Gebruik je Vue 3, gebruik dan het `MyParcelDeliveryOptions`-component:

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

In platte JavaScript voeg je een wrapper-`<div>` toe en dispatch je een `myparcel_update_delivery_options`-event met dezelfde configuratie:

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

### Stap 4: Luister naar de keuze van de klant

Elke keer dat de klant een keuze wijzigt, dispatcht de widget een `myparcel_updated_delivery_options`-event op `document`. Gebruik de payload om de verzendkosten in je checkout bij te werken.

```js
document.addEventListener('myparcel_updated_delivery_options', (event) => {
  console.log(event.detail);
});
```

Loopt de widget tegen een API-exception aan (bijvoorbeeld een onleesbare straat), dan dispatcht hij in plaats daarvan een `myparcel_error_delivery_options`-event. Zie [events](#events) voor de volledige payload van beide events.

## Configuratie

Bijna alle instellingen kun je globaal of per vervoerder zetten. Zet je een instelling globaal, dan geldt die voor alle vervoerders, tenzij je hem voor een specifieke vervoerder overschrijft. Hoe je de configuratie meegeeft hangt af van of je het Vue-component of platte JavaScript gebruikt — zie [stap 3 van de Snelstart](#step-3-mount-the-widget) voor beide vormen.

::: tip
Voor de meest uitgebreide informatie kun je onze [Sandbox] bekijken. Daar zie (en probeer) je alle mogelijke configuratie-opties en zie je het resultaat in real-time.
:::

### Bezorgtypes

Er zijn verschillende soorten bezorgtypes, die overeenkomen met de opties van verschillende vervoerders. Niet elk type wordt door elke vervoerder ondersteund. Daar hoef je je geen zorgen over te maken: de widget toont alleen de bezorgtypes die zowel door de vervoerder worden ondersteund als in jouw configuratie zijn ingeschakeld. Je configureert ze als volgt (`allow*Delivery`-keys kun je globaal of per vervoerder zetten):

```json
{
  "allowStandardDelivery": false,
  "allowMorningDelivery": true,
  "allowEveningDelivery": true,
  "allowSameDayDelivery": false
}
```

Deze configuratie toont alleen ochtend- en avondbezorging. Voor een volledige lijst met ondersteunde bezorgtypes, zie de API-definitie van de [delivery options API](/api/myparcel.html#get-delivery-options).

::: note
De overkoepelende `allowDeliveryOptions`-vlag uit v6 bestaat niet meer. Wil je thuisbezorging voor een vervoerder volledig verbergen, zet dan elke `allow*Delivery`-key voor die vervoerder op `false`. Wil je een vervoerder helemaal verbergen, zet dan ook `allowPickupLocations` op `false` (of beter: neem de vervoerder helemaal niet op in `carrierSettings`).
:::

### Cutoff-tijden en drop-off-dagen

Drop-off-dagen zijn de dagen waarop je je pakketten bij de vervoerder kunt afgeven. Dit wordt gebruikt om de eerstvolgende beschikbare bezorgdata te berekenen.

**Als een array van weekdagnummers**

```json lines
{
  "cutoffTime": "16:00",
  "cutoffTimeSameDay": "9:30",
  "dropOffDays": [1, 2, 3, 4, 5]
}
```

In dit voorbeeld gebruikt elke drop-off-dag de `cutoffTime` en de `cutoffTimeSameDay` uit de root van de configuratie, dus respectievelijk `16:00` en `9:30`.

**Als een array van objecten en/of nummers**

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

In dit voorbeeld zijn de drop-off-dagen als volgt:

| Dag       | Cutoff-tijd     | Cutoff-tijd zelfde dag |
| --------- | --------------- | ---------------------- |
| Maandag   | 15:00 (default) | 9:30 (default)         |
| Dinsdag   | 16:00           | 10:00                  |
| Woensdag  | 15:00 (default) | 9:30 (default)         |
| Vrijdag   | 14:00           | 9:30 (default)         |

::: note
v7 accepteert `dropOffDays` niet meer als komma- of puntkomma-gescheiden string. Geef een array van weekdagnummers (0 = zondag, 6 = zaterdag) en/of `{weekday, cutoffTime?, cutoffTimeSameDay?}`-objecten. De key per entry is `weekday` (niet `day`) en de same-day-cutoff is `cutoffTimeSameDay` (niet `sameDayCutoffTime`).
:::

### Volledige configuratie-referentie

Dit zijn alle mogelijke configuratie-opties. Het `strings`-object is voor vertalingen. Het `config`-object is voor alle overige instellingen.

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

## Events

De widget communiceert met je pagina via drie custom events die op `document` worden gedispatcht.

### `myparcel_update_delivery_options` (inkomend)

Dispatch dit om de widget (opnieuw) te renderen met een nieuwe configuratie. Het platte-JavaScript-fragment in [stap 3](#step-3-mount-the-widget) gebruikt het voor de initiële mount. Vue 3-gebruikers hoeven het niet te dispatchen — het component pikt wijzigingen aan zijn `configuration`-prop automatisch op.

### `myparcel_updated_delivery_options` (uitgaand)

Wordt gedispatcht wanneer de klant een keuze wijzigt. `event.detail` bevat de opgeloste keuze:

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

Kiest de klant een afhaaloptie, dan is `isPickup` `true`, is `deliveryType` `"pickup"` en wordt een extra `pickupLocation`-object meegestuurd.

### `myparcel_error_delivery_options` (uitgaand)

Wordt gedispatcht wanneer de widget een API-exception opvangt. `event.detail.exception` bevat de meest recente exception:

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

## Upgraden

### v6 naar v7

v7 verwijdert de statisch ingebouwde platformconfiguraties (MyParcel NL / SendMyParcel BE) ten gunste van het tijdens runtime ophalen van carrier-capabilities uit een backend-[proxy](#step-2-set-up-a-capabilities-proxy) die jij beheert. Dit is de belangrijkste breaking change en vraagt aanpassingen aan je integratie.

#### Nieuwe features

- Vervoerders, pakkettypes, bezorgtypes en verzendopties worden nu gedreven door de live capabilities API in plaats van een hard-coded lijst, zodat nieuw ingeschakelde vervoerders en opties zonder release in de widget verschijnen.
- Wordt een vervoerder ondersteund maar kan hij om wat voor reden dan ook geen bezorgopties teruggeven (bijv. door een mislukte adresvalidatie), dan verschijnt hij nog steeds als selecteerbare optie in de widget, zonder datum/tijd-opties.
- Nieuwe `compactView`-optie (sinds v7.1) om vervoerders als een inklapbare, compacte lijst te tonen.
- Nieuwe `popUpMap`-optie (sinds v7.3) om afhaalpunten in een modal te tonen in plaats van inline.
- Nieuwe `excludeParcelLockers`-optie om afhaalpunten van het type locker te verbergen.
- Nieuwe `apiKey`-optie voor lokale ontwikkeling (alleen development — logt een waarschuwing).

#### Breaking changes

- `proxyCapabilities` is verplicht. Zonder kan de widget niet bepalen welke vervoerders of opties getoond moeten worden.
- De `allowDeliveryOptions`-carrier-instelling is verwijderd. Wil je thuisbezorging voor een vervoerder uitschakelen, zet dan elke `allow*Delivery`-key op die vervoerder op `false`. Wil je een vervoerder helemaal uitschakelen, zet dan ook `allowPickupLocations` op `false` (of laat de vervoerder weg uit `carrierSettings`).
- `showDeliveryDate` is als config-key verwijderd. De datumkiezer wordt nu automatisch afgeleid: hij verschijnt wanneer het pakkettype bezorgmomenten ondersteunt en `deliveryDaysWindow` groter is dan `1`. Wil je de datumkiezer verbergen, zet dan `deliveryDaysWindow: 1` — elke vervoerder toont dan één "standaard bezorging"-optie zonder datumkiezer.
- `dropOffDays` accepteert geen platte string meer (`"1,2,3"` / `"1;2;3"`); het moet een array van weekdagnummers en/of `DropOffEntry`-objecten zijn.
- API-fouten voorkomen niet langer dat vervoerders verschijnen. In v6 kon een onleesbare straat of ontbrekende postcode alle vervoerders verbergen; in v7 wordt alles getoond wat capabilities aanbiedt.
- De `DeprecatedConfigOptions`-groep wordt niet meer geaccepteerd: `allowShowDeliveryDate`, `fridayCutoffTime` en `saturdayCutoffTime` worden stilzwijgend genegeerd. Verwijder ze uit je config.

#### Verwijderde exports

Het volgende is verwijderd uit `@myparcel/delivery-options`:

- `PlatformConfiguration`-type — geen directe vervanger; de capabilities-response stuurt het platformgedrag.
- `PlatformName`-enum — niet vervangen. `platform` is nog steeds een verplicht config-veld; geef de platform-string mee die bij je API key past.
- `usePlatform()`, `useCurrentPlatform()`, `getDefaultConfigForPlatform()` — geen directe vervanger.

#### Noemenswaardige interne wijzigingen

- Vue peer-dependency verhoogd naar `^3.5`.
- `allowExpressDelivery`, `priceExpressDelivery`, `allowPriorityDelivery` en `pricePriorityDelivery` zijn nu eersteklas carrier-instellingen (ze bestonden in v6 maar waren niet officieel gedocumenteerd).
- De afhaalpunt-kaart kan nu extra locaties lazy-loaden via `pickupMapAllowLoadMore`.

Zie de [migration guide] voor een stap-voor-stap-uitleg en een voorbeeld-proxy-implementatie.

### v5 naar v6

De app is van de grond af herschreven om alle onderliggende technologieën te kunnen upgraden en de performance en stabiliteit te verbeteren. Het bestaande gedrag blijft grotendeels werken, dus je kunt upgraden naar v6 zonder grote wijzigingen. Er zijn echter een paar breaking changes en deprecations, dus lees de volgende lijst zorgvuldig.

#### Nieuwe features

- Het is nu mogelijk om aparte cutoff-tijden per dag en per vervoerder in te stellen.
- Pakkettype `package_small` wordt nu ondersteund.
- Je kunt nu eigen cutoff-tijden per dag (en optioneel per vervoerder) meegeven.
- Het is nu mogelijk om standaardbezorging uit te schakelen maar ochtend- en/of avondbezorging te blijven tonen.

#### Overige verbeteringen

- Een prachtig nieuw design.
- Sterk verbeterde performance en stabiliteit.
- De app is nu te gebruiken als Vue-component in elke Vue 3-app.
- TypeScript-ondersteuning.
- Veel meer geëxporteerde methoden, constanten, types en interfaces.

#### Breaking changes

- Het is niet meer mogelijk om `showDeliveryDate` per vervoerder te zetten. Dit is nu alleen een globale instelling.
- De CSS wordt niet meer gebundeld, dus je moet `dist/style.css` handmatig includen. Dit geldt niet als je het Vue-component gebruikt.
- Het `unselect_delivery_options`-event is verwijderd. Heb je deze functie nodig, [laat het ons weten].

#### Deprecated

- `cutoffTime` is deprecated, gebruik in plaats daarvan `dropOffDays`.
- Vertrouw niet alleen op `allowDeliveryOptions`, maar gebruik ook `allowStandardDelivery`.

::: note
Het bestaande gedrag blijft gedurende v6 werken, maar wordt in de volgende major-versie verwijderd/gewijzigd.
:::

#### Noemenswaardige interne wijzigingen

- De app is nu volledig in TypeScript geschreven.
- Geüpgraded van Vue 2 naar Vue 3.
- Geüpgraded van Vue CLI naar Vite.
- Geüpgraded van Jest naar Vitest.

[Sandbox]: https://myparcelnl.github.io/delivery-options/
[laat het ons weten]: https://github.com/myparcelnl/delivery-options/issues
[migration guide]: https://github.com/myparcelnl/delivery-options/blob/main/docs/migrating-v6-to-v7.md
