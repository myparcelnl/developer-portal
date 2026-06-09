---
title: Getting started with MyParcel
description: "Start shipping from your platform in minutes. Create an account, obtain an API token and send your first shipment with a single HTTP call."
---

## Overview
MyParcel exposes a single HTTP API at [`api.myparcel.nl`](../api/myparcel.md). It covers authentication, shipments, orders, carriers, delivery options and webhooks.

The reference is auto-documented here from the OpenAPI spec — so it never drifts from the deployed platform.

## Step 1 · Get your API key
After signing up, generate an **API key** in the MyParcel Backoffice, under your shop's integration settings.

Keep the key on your server. Never ship it to a browser.

## Step 2 · Authenticate
Base64-encode your API key and send it in the `Authorization` header on every request. See [Authentication](authentication.md) for details.

```
// base64-encode your API key
echo -n 'your-api-key' | base64

// then send it on every request
Authorization: bearer BASE64_ENCODED_API_KEY
```

## Step 3 · Create your first shipment
With the header in place, call the Shipment API to create a shipment. Labels and tracking URLs are returned immediately.

```
// POST https://api.myparcel.nl/shipments
// Authorization: bearer BASE64_ENCODED_API_KEY
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

- [Authentication in depth](authentication.md) — API keys and the Authorization header.
- [Delivery options](delivery-options.md) — pickup points, evening delivery, signed-for.
- [Webhooks](webhooks.md) — get notified when a shipment is handed over or delivered.
- [PHP SDK](php-sdk.md) / [JavaScript SDK](javascript-sdk.md) — skip the raw HTTP and use our libraries.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) or another e-commerce plugin — install, configure, done.
