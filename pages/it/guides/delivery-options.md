---
title: Opzioni di consegna
description: "Integra il widget MyParcel Delivery Options (v7) nel tuo checkout: installazione, configurazione di un proxy capabilities, mount del widget e ascolto della selezione del cliente. Include il riferimento di configurazione completo e la guida all'upgrade v6 → v7."
---

::: note
Questa è la documentazione della versione stabile di Delivery Options (v7).
:::

[[toc]]

## Introduzione

MyParcel delivery options è un'applicazione Vue che ti permette di mostrare ai tuoi clienti, durante il checkout, un widget multi-vettore con diversi orari di arrivo e opzioni di spedizione. Le opzioni di consegna si basano sull'indirizzo del cliente e sui vettori che hai configurato. Il widget mostra le opzioni di consegna disponibili, i loro prezzi e la data di consegna stimata. Il cliente sceglie poi l'opzione preferita, che puoi usare per aggiornare i costi di spedizione nel tuo checkout.

Dietro le quinte, le delivery options si appoggiano sulla [delivery options API](/api/myparcel.html#get-delivery-options) e sulla [capabilities API](/api/myparcel.html#post-shipments-capabilities) per recuperare le opzioni di consegna disponibili e le capabilities dei vettori.

## Avvio rapido

Servono quattro passi per far funzionare le delivery options nel tuo checkout: installare il package, configurare un proxy capabilities, montare il widget e ascoltare la selezione del cliente.

### Passo 1: Installa il package

Scegli la CDN (consigliata per la maggior parte dei setup — gli aggiornamenti minor e patch con bugfix sono inclusi automaticamente) oppure il tuo package manager.

**CDN, con Vue 3 dalla CDN:**

```html
<script src="https://cdn.jsdelivr.net/npm/vue@3.5"></script>
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/myparcel.lib.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/style.css" />
```

Se la pagina carica già una versione diversa di Vue, usa il bundle che include la propria Vue per evitare conflitti:

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

### Passo 2: Configura un proxy capabilities

v7 recupera a runtime i vettori, i tipi di pacco, i tipi di consegna e le opzioni di spedizione disponibili da un backend che controlli tu. Nel passo 3 punterai il widget a questo backend.

Il widget invia in POST un `CapabilitiesRequest` JSON al tuo URL backend. Il tuo backend deve inoltrarlo invariato a `POST https://api.myparcel.nl/shipments/capabilities` (iniettando la tua API key nella richiesta) e restituire la risposta al widget così com'è. Il widget mette in cache la risposta per indirizzo e filtra lato client, quindi recupera di nuovo solo quando cambiano gli input rilevanti.

In pratica il widget popola solo `recipient` (dall'indirizzo corrente) e, se fornito, `packageType`. Il tuo proxy deve inoltrare ciò che riceve, senza modifiche.

**Proxy Node.js / Express minimo:**

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

Per lo sviluppo locale puoi saltare il proxy impostando direttamente `config.apiKey`. Il widget la codificherà in base64 e chiamerà l'endpoint capabilities da solo, registrando un avviso finché `apiKey` è presente.

::: warning
Non usare MAI `apiKey` in produzione. Espone la tua API key nel frontend, un grave rischio di sicurezza. In produzione usa sempre un proxy backend.
Se la tua API key viene compromessa, revocala subito nel dashboard MyParcel e generane una nuova.
:::

Vedi il [riferimento della capabilities API](/api/myparcel.html#post-shipments-capabilities) per la forma completa di richiesta e risposta, e la [migration guide] nel repository per una spiegazione più estesa.

### Passo 3: Monta il widget

Questa è la configurazione minima possibile: un indirizzo completo, il platform, l'URL del proxy capabilities del passo 2 e almeno un vettore in `carrierSettings`. Tutti i tipi di consegna e le opzioni sono abilitati di default.

::: tip
Per tutte le opzioni di configurazione disponibili, vedi il [riferimento di configurazione](#full-configuration-reference).
:::

Se usi Vue 3, usa il componente `MyParcelDeliveryOptions`:

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

In JavaScript puro, aggiungi un `<div>` wrapper e dispatcha un evento `myparcel_update_delivery_options` con la stessa configurazione:

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

### Passo 4: Ascolta la selezione del cliente

Ogni volta che il cliente cambia una selezione, il widget dispatcha un evento `myparcel_updated_delivery_options` su `document`. Usa il payload per aggiornare il costo di spedizione nel tuo checkout.

```js
document.addEventListener('myparcel_updated_delivery_options', (event) => {
  console.log(event.detail);
});
```

Se il widget incontra un'eccezione API (ad esempio una via non interpretabile), dispatcha invece un evento `myparcel_error_delivery_options`. Vedi [eventi](#events) per il payload completo di entrambi gli eventi.

## Configurazione

Quasi tutte le impostazioni possono essere definite globalmente o per vettore. Se imposti un valore globalmente, viene usato per tutti i vettori, a meno che tu non lo sovrascriva per un vettore specifico. Come passare la configurazione dipende dal fatto che tu usi il componente Vue o JavaScript puro — vedi [il passo 3 dell'Avvio rapido](#step-3-mount-the-widget) per entrambe le forme.

::: tip
Per le informazioni più complete puoi consultare il nostro [Sandbox]. Lì puoi vedere (e provare) tutte le possibili opzioni di configurazione e vedere il risultato in tempo reale.
:::

### Tipi di consegna

Esistono diversi tipi di consegna, corrispondenti alle opzioni offerte dai vari vettori. Non ogni tipo è supportato da ogni vettore. Non devi preoccupartene: il widget mostra solo i tipi di consegna che sono sia supportati dal vettore sia abilitati nella tua configurazione. Li configuri così (le chiavi `allow*Delivery` possono essere globali o per vettore):

```json
{
  "allowStandardDelivery": false,
  "allowMorningDelivery": true,
  "allowEveningDelivery": true,
  "allowSameDayDelivery": false
}
```

Questa configurazione mostra solo la consegna mattutina e serale. Per l'elenco completo dei tipi di consegna supportati, consulta la definizione della [delivery options API](/api/myparcel.html#get-delivery-options).

::: note
Il flag generale `allowDeliveryOptions` di v6 non esiste più. Per nascondere del tutto la consegna a domicilio per un vettore, imposta ogni chiave `allow*Delivery` di quel vettore su `false`. Per nascondere completamente un vettore, imposta anche `allowPickupLocations` su `false` (o meglio ancora, non includere affatto il vettore in `carrierSettings`).
:::

### Orari di cutoff e giorni di drop-off

I giorni di drop-off sono i giorni in cui puoi consegnare i tuoi pacchi al vettore. Servono a calcolare le prossime date di consegna disponibili.

**Come array di numeri di giorno della settimana**

```json lines
{
  "cutoffTime": "16:00",
  "cutoffTimeSameDay": "9:30",
  "dropOffDays": [1, 2, 3, 4, 5]
}
```

In questo esempio ogni giorno di drop-off usa il `cutoffTime` e il `cutoffTimeSameDay` dalla root della configurazione, quindi rispettivamente `16:00` e `9:30`.

**Come array di oggetti e/o numeri**

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

In questo esempio i giorni di drop-off sono i seguenti:

| Giorno    | Orario cutoff   | Orario cutoff stesso giorno |
| --------- | --------------- | --------------------------- |
| Lunedì    | 15:00 (default) | 9:30 (default)              |
| Martedì   | 16:00           | 10:00                       |
| Mercoledì | 15:00 (default) | 9:30 (default)              |
| Venerdì   | 14:00           | 9:30 (default)              |

::: note
v7 non accetta più `dropOffDays` come stringa separata da virgole o punti e virgola. Passa un array di numeri di giorno della settimana (0 = domenica, 6 = sabato) e/o oggetti `{weekday, cutoffTime?, cutoffTimeSameDay?}`. La chiave per voce è `weekday` (non `day`) e il cutoff dello stesso giorno è `cutoffTimeSameDay` (non `sameDayCutoffTime`).
:::

### Riferimento di configurazione completo

Queste sono tutte le possibili opzioni di configurazione. L'oggetto `strings` è per le traduzioni. L'oggetto `config` è per tutte le altre impostazioni.

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

## Eventi

Il widget comunica con la tua pagina tramite tre eventi custom dispatchati su `document`.

### `myparcel_update_delivery_options` (in entrata)

Dispatcha questo per (ri)renderizzare il widget con una nuova configurazione. Lo snippet JavaScript puro nel [passo 3](#step-3-mount-the-widget) lo usa per il mount iniziale. Gli utenti Vue 3 non devono dispatcharlo — il componente recepisce automaticamente le modifiche alla sua prop `configuration`.

### `myparcel_updated_delivery_options` (in uscita)

Dispatchato ogni volta che il cliente cambia una selezione. `event.detail` contiene la selezione risolta:

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

Quando il cliente sceglie un'opzione di ritiro, `isPickup` è `true`, `deliveryType` è `"pickup"` e viene incluso un oggetto `pickupLocation` aggiuntivo.

### `myparcel_error_delivery_options` (in uscita)

Dispatchato ogni volta che il widget cattura un'eccezione API. `event.detail.exception` contiene l'eccezione più recente:

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

## Upgrade

### da v6 a v7

v7 rimuove le configurazioni di platform incorporate staticamente (MyParcel NL / SendMyParcel BE) a favore del recupero a runtime delle capabilities dei vettori da un [proxy](#step-2-set-up-a-capabilities-proxy) backend che controlli tu. Questa è la principale breaking change e richiede modifiche alla tua integrazione.

#### Nuove funzionalità

- Vettori, tipi di pacco, tipi di consegna e opzioni di spedizione sono ora guidati dalla capabilities API live invece che da un elenco hard-coded, così i vettori e le opzioni appena abilitati compaiono nel widget senza una release.
- Se un vettore è supportato ma per qualsiasi motivo non può restituire opzioni di consegna (es. per un fallimento della validazione dell'indirizzo), compare comunque nel widget come opzione selezionabile, senza opzioni di data/ora.
- Nuova opzione `compactView` (da v7.1) per mostrare i vettori come elenco compatto e comprimibile.
- Nuova opzione `popUpMap` (da v7.3) per mostrare i punti di ritiro in un modal invece che inline.
- Nuova opzione `excludeParcelLockers` per nascondere i punti di ritiro di tipo locker.
- Nuova opzione `apiKey` per lo sviluppo locale (solo development — registra un avviso).

#### Breaking changes

- `proxyCapabilities` è obbligatorio. Senza, il widget non può determinare quali vettori o opzioni mostrare.
- L'impostazione vettore `allowDeliveryOptions` è stata rimossa. Per disattivare la consegna a domicilio per un vettore, imposta ogni chiave `allow*Delivery` di quel vettore su `false`. Per disattivare del tutto un vettore, imposta anche `allowPickupLocations` su `false` (oppure ometti il vettore da `carrierSettings`).
- `showDeliveryDate` è stata rimossa come chiave di config. Il selettore di data è ora derivato automaticamente: compare quando il tipo di pacco supporta i momenti di consegna e `deliveryDaysWindow` è maggiore di `1`. Per nascondere il selettore di data, imposta `deliveryDaysWindow: 1` — ogni vettore esporrà allora un'unica opzione "standard delivery" senza selettore di data.
- `dropOffDays` non accetta più una stringa semplice (`"1,2,3"` / `"1;2;3"`); deve essere un array di numeri di giorno della settimana e/o oggetti `DropOffEntry`.
- Gli errori API non impediscono più la comparsa dei vettori. In v6 una via non interpretabile o un codice postale mancante potevano nascondere tutti i vettori; in v7 viene mostrato tutto ciò che offre capabilities.
- Il gruppo `DeprecatedConfigOptions` non è più accettato: `allowShowDeliveryDate`, `fridayCutoffTime` e `saturdayCutoffTime` vengono ignorati silenziosamente. Rimuovili dalla tua config.

#### Export rimossi

I seguenti sono stati rimossi da `@myparcel/delivery-options`:

- tipo `PlatformConfiguration` — nessun sostituto diretto; la risposta capabilities guida il comportamento del platform.
- enum `PlatformName` — non sostituito. `platform` è ancora un campo di config obbligatorio; passa la stringa del platform corrispondente alla tua API key.
- `usePlatform()`, `useCurrentPlatform()`, `getDefaultConfigForPlatform()` — nessun sostituto diretto.

#### Modifiche interne degne di nota

- Peer dependency Vue portata a `^3.5`.
- `allowExpressDelivery`, `priceExpressDelivery`, `allowPriorityDelivery` e `pricePriorityDelivery` sono ora impostazioni vettore di prima classe (esistevano in v6 ma non erano ufficialmente documentate).
- La mappa dei punti di ritiro può ora caricare in lazy-load ulteriori località tramite `pickupMapAllowLoadMore`.

Vedi la [migration guide] per una spiegazione passo-passo e un'implementazione di proxy di esempio.

### da v5 a v6

L'app è stata riscritta da zero per poter aggiornare tutte le tecnologie sottostanti e migliorare performance e stabilità. Il comportamento esistente continuerà per lo più a funzionare, quindi puoi aggiornare a v6 senza grandi modifiche. Tuttavia ci sono alcune breaking changes e deprecazioni, quindi leggi attentamente l'elenco seguente.

#### Nuove funzionalità

- Ora è possibile impostare orari di cutoff separati per giorno e per vettore.
- Il tipo di pacco `package_small` è ora supportato.
- Ora puoi passare orari di cutoff personalizzati per giorno (e opzionalmente per vettore).
- Ora è possibile disattivare la consegna standard mantenendo la consegna mattutina e/o serale.

#### Altri miglioramenti

- Un nuovo, bel design.
- Performance e stabilità nettamente migliorate.
- L'app può ora essere usata come componente Vue in qualsiasi app Vue 3.
- Supporto TypeScript.
- Molti più metodi, costanti, tipi e interfacce esportati.

#### Breaking changes

- Non è più possibile impostare `showDeliveryDate` per vettore. Ora è solo un'impostazione globale.
- Il CSS non è più incluso nel bundle, quindi devi includere manualmente `dist/style.css`. Non vale se usi il componente Vue.
- L'evento `unselect_delivery_options` è stato rimosso. Se ti serve questa funzione, [faccelo sapere].

#### Deprecato

- `cutoffTime` è deprecato, usa invece `dropOffDays`.
- Non affidarti solo a `allowDeliveryOptions`, usa anche `allowStandardDelivery`.

::: note
Il comportamento esistente continuerà a funzionare per tutta la v6, ma verrà rimosso/modificato nella prossima versione major.
:::

#### Modifiche interne degne di nota

- L'app è ora interamente scritta in TypeScript.
- Aggiornata da Vue 2 a Vue 3.
- Aggiornata da Vue CLI a Vite.
- Aggiornata da Jest a Vitest.

[Sandbox]: https://myparcelnl.github.io/delivery-options/
[faccelo sapere]: https://github.com/myparcelnl/delivery-options/issues
[migration guide]: https://github.com/myparcelnl/delivery-options/blob/main/docs/migrating-v6-to-v7.md
