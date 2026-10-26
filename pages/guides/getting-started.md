---
title: Getting started with MyParcel
description: "Start shipping from your platform in minutes. Create an account, copy your API key and send your first shipment with a single HTTP call."
---

## Overview
MyParcel exposes a single HTTP API at [`api.myparcel.nl`](../api/myparcel.md). It covers authentication, shipments, orders, carriers, delivery options and webhooks.

The API reference on this portal is generated from the published OpenAPI specs.

## Step 1 · Get your API key
After signing up, open **Shop settings → Integration** in the [MyParcel backoffice](https://backoffice.myparcel.nl) and copy the API key.

Keep the key on your server. Never ship it to a browser.

## Step 2 · Authenticate your requests
Base64-encode the key and send it in the `Authorization` header of every request:

```
Authorization: bearer <base64-encoded API key>
```

See [Authentication](authentication.md) for shell and PHP examples.

## Step 3 · Create your first shipment
With the header in place, call the Shipment API to create a shipment. Labels and tracking URLs are returned immediately.

```
// POST https://api.myparcel.nl/shipments
// Authorization: bearer <base64-encoded API key>
{
  "carrier": "postnl",
  "recipient": {
    "name": "J. de Vries",
    "street": "Antwoordnummer 42",
    "postal_code": "1012AB",
    "city": "Amsterdam",
    "country": "NL"
  },
  "options": {
    "package_type": "package",
    "signature": true
  }
}
```

## Next steps
Pick whichever path matches your integration:

- [Authentication](authentication.md): sending the key, and what a `401` means.
- [Delivery options](../platforms/delivery-options.md): pickup points, evening delivery, signed-for.
- [Webhooks](webhooks.md): get notified when a shipment is handed over or delivered.
- [PHP SDK](php-sdk-v12.md) / [JavaScript SDK](javascript-sdk.md): skip the raw HTTP and use our libraries.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) or another e-commerce plugin: install, configure, done.
