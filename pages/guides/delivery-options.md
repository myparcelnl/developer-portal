---
title: Delivery options
description: "Integrate the MyParcel Delivery Options widget (v7) in your checkout: install it, set up a capabilities proxy, mount the widget and listen for the customer's selection. Includes the full configuration reference and the v6 → v7 upgrade guide."
---

::: note
This is the documentation for the stable version of the Delivery Options (v7).
:::

[[toc]]

## Introduction

The MyParcel delivery options is a Vue application that allows you to show your customers a multi-carrier widget with different arrival times and shipment options during checkout. The delivery options are based on the customer's address and the carriers you have configured. The widget will show the available delivery options, their prices, and the estimated delivery date. The customer can then select their preferred delivery option, which you can use to update the shipping costs in your checkout.

Behind the scenes, the delivery options relies on the [delivery options API](/api/myparcel.html#get-delivery-options) and the [capabilities API](/api/myparcel.html#post-shipments-capabilities) to retrieve the available delivery options and carrier capabilities.

## Quickstart

There are four steps to get the delivery options running in your checkout: install the package, set up a capabilities proxy, mount the widget, and listen for the customer's selection.

### Step 1: Install the package

Choose either the CDN (recommended for most setups — minor and patch updates with bugfixes are included automatically) or your package manager.

**CDN, with Vue 3 from the CDN:**

```html
<script src="https://cdn.jsdelivr.net/npm/vue@3.5"></script>
<script src="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/myparcel.lib.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@myparcel/delivery-options@7/dist/style.css" />
```

If the page already loads a different version of Vue, use the bundle that ships with its own Vue to avoid conflicts:

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

### Step 2: Set up a capabilities proxy

v7 fetches the available carriers, package types, delivery types, and shipment options at runtime from a backend you control. You'll point the widget at this backend in step 3.

The widget POSTs a JSON `CapabilitiesRequest` to your backend URL. Your backend needs to forward it unchanged to `POST https://api.myparcel.nl/shipments/capabilities` (injecting your API key into the request) and return the response to the widget as-is. The widget caches the response per address and filters client-side, so it only refetches when relevant inputs change.

In practice the widget only populates `recipient` (from the current address) and, when supplied, `packageType`. Your proxy should forward whatever it receives without modification.

**Minimal Node.js / Express proxy:**

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

For local development you can skip the proxy by setting `config.apiKey` directly. The widget will base64-encode it and call the capabilities endpoint itself, while logging a warning whenever `apiKey` is present.

::: warning
NEVER use `apiKey` in production. It exposes your API key in the frontend, which is a major security risk. Always use a backend proxy in production.
If your API key is compromised, immediately revoke it in the MyParcel dashboard and generate a new one.
:::

See the [capabilities API reference](/api/myparcel.html#post-shipments-capabilities) for the full request and response shape, and the [migration guide] in the repository for a longer walkthrough.

### Step 3: Mount the widget

This is the smallest possible configuration: a full address, the platform, the URL of the capabilities proxy from step 2, and at least one carrier in `carrierSettings`. All delivery types and options are enabled by default.

::: tip
For all available configuration options, see the [configuration reference](#full-configuration-reference).
:::

If you're using Vue 3, use the `MyParcelDeliveryOptions` component:

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

In plain JavaScript, add a wrapper `<div>` and dispatch a `myparcel_update_delivery_options` event with the same configuration:

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

### Step 4: Listen for the customer's selection

Whenever the customer changes a selection, the widget dispatches a `myparcel_updated_delivery_options` event on `document`. Use the payload to update the shipping cost in your checkout.

```js
document.addEventListener('myparcel_updated_delivery_options', (event) => {
  console.log(event.detail);
});
```

If the widget hits an API exception (for example an unparseable street), it dispatches a `myparcel_error_delivery_options` event instead. See [events](#events) for the full payload of both events.

## Configuration

Almost all settings can be set globally or per carrier. If you set a setting globally, it will be used for all carriers unless you override it for a specific carrier. How you should pass the configuration to the delivery options depends on whether you're using the Vue component or plain JavaScript — see [step 3 of the Quickstart](#step-3-mount-the-widget) for both shapes.

::: tip
For the most comprehensive information, you can check out our [Sandbox]. Here you can see (and try) all the possible configuration options and see the result in real-time.
:::

### Delivery types

There are different types of delivery types, corresponding to the options offered by different carriers. Note that not every type may be supported by every carrier. You don't need to worry about this: the widget will only show the delivery types that are both supported by the carrier and enabled in your configuration. You can configure them as follows (`allow*Delivery` keys can be set globally or per carrier):

```json
{
  "allowStandardDelivery": false,
  "allowMorningDelivery": true,
  "allowEveningDelivery": true,
  "allowSameDayDelivery": false
}
```

This configuration will show only morning and evening delivery options. For a full list of supported delivery types, refer to the API definition for the [delivery options API](/api/myparcel.html#get-delivery-options).

::: note
The umbrella `allowDeliveryOptions` flag from v6 no longer exists. To hide home delivery entirely for a carrier, set every `allow*Delivery` key for that carrier to `false`. To hide a carrier completely, also set `allowPickupLocations` to `false` (or better yet, just don't include the carrier in `carrierSettings` at all).
:::

### Cutoff times and drop off days

Drop off days are the days on which you can drop off your parcels at the carrier. This is used to calculate the next available delivery dates.

**As an array of weekday numbers**

```json lines
{
  "cutoffTime": "16:00",
  "cutoffTimeSameDay": "9:30",
  "dropOffDays": [1, 2, 3, 4, 5]
}
```

In this example, every drop off day uses the `cutoffTime` and the `cutoffTimeSameDay` from the root of the configuration, so `16:00` and `9:30` respectively.

**As an array of objects and/or numbers**

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

In this example the drop-off days are as follows:

| Day       | Cutoff time     | Same day cutoff time |
| --------- | --------------- | -------------------- |
| Monday    | 15:00 (default) | 9:30 (default)       |
| Tuesday   | 16:00           | 10:00                |
| Wednesday | 15:00 (default) | 9:30 (default)       |
| Friday    | 14:00           | 9:30 (default)       |

::: note
v7 no longer accepts `dropOffDays` as a comma- or semicolon-separated string. Pass an array of weekday numbers (0 = Sunday, 6 = Saturday) and/or `{weekday, cutoffTime?, cutoffTimeSameDay?}` objects. The per-entry key is `weekday` (not `day`) and the same-day cutoff is `cutoffTimeSameDay` (not `sameDayCutoffTime`).
:::

### Full configuration reference

These are all the possible configuration options. The `strings` object is used for translations. The `config` object is used for all other settings.

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

The widget communicates with your page through three custom events dispatched on `document`.

### `myparcel_update_delivery_options` (incoming)

Dispatch this to (re)render the widget with a new configuration. The plain-JavaScript snippet in [step 3](#step-3-mount-the-widget) uses it for the initial mount. Vue 3 users don't need to dispatch it — the component picks up changes to its `configuration` prop automatically.

### `myparcel_updated_delivery_options` (outgoing)

Dispatched whenever the customer changes a selection. `event.detail` contains the resolved selection:

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

When the customer picks a pickup option, `isPickup` is `true`, `deliveryType` is `"pickup"`, and an additional `pickupLocation` object is included.

### `myparcel_error_delivery_options` (outgoing)

Dispatched whenever the widget catches an API exception. `event.detail.exception` contains the most recent exception:

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

## Upgrading

### v6 to v7

v7 removes the statically embedded platform configurations (MyParcel NL / SendMyParcel BE) in favour of fetching carrier capabilities at runtime from a backend [proxy](#step-2-set-up-a-capabilities-proxy) that you control. This is the headline breaking change and requires changes to your integration.

#### New features

- Carriers, package types, delivery types and shipment options are now driven by the live capabilities API instead of a hard-coded list, so newly enabled carriers and options appear in the widget without a release.
- If a carrier is supported, but for whatever reason it cannot return any delivery options (e.g. due to address validation failure), it will still appear in the widget as a selectable option without any date/time options.
- New `compactView` config option (since v7.1) to render carriers as a collapsible compact list.
- New `popUpMap` config option (since v7.3) to show pickup locations in a modal instead of inline.
- New `excludeParcelLockers` config option to hide locker-type pickup locations.
- New `apiKey` config option for local development (development only — logs a warning).

#### Breaking changes

- `proxyCapabilities` is required. Without it the widget cannot determine which carriers or options to show.
- The `allowDeliveryOptions` carrier setting was removed. To disable home delivery for a carrier, set every `allow*Delivery` key on that carrier to `false`. To disable a carrier entirely, also set `allowPickupLocations` to `false` (or omit the carrier from `carrierSettings`).
- `showDeliveryDate` was removed as a config key. The date selector is now derived automatically: it shows when the package type supports delivery moments and `deliveryDaysWindow` is greater than `1`. To hide the date selector, set `deliveryDaysWindow: 1` — each carrier will then expose a single "standard delivery" option without a date picker.
- `dropOffDays` no longer accepts a plain string (`"1,2,3"` / `"1;2;3"`); it must be an array of weekday numbers and/or `DropOffEntry` objects.
- API errors no longer prevent carriers from appearing. In v6, an unparseable street or missing postcode could hide all carriers; in v7 anything offered by capabilities is shown.
- The `DeprecatedConfigOptions` group is no longer accepted: `allowShowDeliveryDate`, `fridayCutoffTime` and `saturdayCutoffTime` are silently ignored. Remove them from your config.

#### Removed exports

The following were removed from `@myparcel/delivery-options`:

- `PlatformConfiguration` type — no direct replacement; the capabilities response drives platform behaviour.
- `PlatformName` enum — not replaced. `platform` is still a required config field; pass the platform string that matches your API key.
- `usePlatform()`, `useCurrentPlatform()`, `getDefaultConfigForPlatform()` — no direct replacement.

#### Notable internal changes

- Vue peer dependency bumped to `^3.5`.
- `allowExpressDelivery`, `priceExpressDelivery`, `allowPriorityDelivery` and `pricePriorityDelivery` are now first-class carrier settings (they existed in v6 but were not officially documented).
- The pickup map can now lazy-load additional locations via `pickupMapAllowLoadMore`.

See the [migration guide] for a step-by-step walkthrough and a sample proxy implementation.

### v5 to v6

The app was rewritten from scratch to be able to upgrade all underlying technologies and to improve the performance and stability. The existing behavior will mostly continue to work, so you can upgrade to v6 without huge changes. However, there are some breaking changes and deprecations, so please read the following list carefully.

#### New features

- It's now possible to set separate cutoff times per day and per carrier.
- Package type `package_small` is now supported.
- You can now pass custom cutoff times per day (and optionally per carrier).
- It's now possible to disable standard delivery but keep showing morning and/or evening delivery.

#### Other improvements

- A beautiful new design.
- Vastly improved performance and stability.
- The app can now be used as a Vue component in any Vue 3 app.
- TypeScript support.
- Many more exported methods, constants, types and interfaces.

#### Breaking changes

- It's no longer possible to set `showDeliveryDate` per carrier. This is now a global setting only.
- The CSS is no longer bundled, so you must manually include `dist/style.css`. This does not apply if you're using the Vue component.
- The `unselect_delivery_options` event has been removed. If you need this feature, please [let us know].

#### Deprecated

- `cutoffTime` is deprecated, use `dropOffDays` instead
- Rather than relying on `allowDeliveryOptions` only, use `allowStandardDelivery` as well.

::: note
The existing behavior will continue to work throughout v6 but will be removed/changed in the next major version.
:::

#### Notable internal changes

- The app is now fully written in TypeScript.
- Upgraded from Vue 2 to Vue 3.
- Upgraded from Vue CLI to Vite.
- Upgraded from Jest to Vitest.

[Sandbox]: https://myparcelnl.github.io/delivery-options/
[let us know]: https://github.com/myparcelnl/delivery-options/issues
[migration guide]: https://github.com/myparcelnl/delivery-options/blob/main/docs/migrating-v6-to-v7.md
