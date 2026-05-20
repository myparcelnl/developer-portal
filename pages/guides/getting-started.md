---
title: Getting started with MyParcel
description: "Start shipping from your platform in minutes. Create an account, obtain an API token and send your first shipment with a single HTTP call."
---

## Overview
MyParcel exposes a single HTTP API at [`api.myparcel.nl`](../api/myparcel.md). It covers authentication, shipments, orders, carriers, delivery options and webhooks.

The reference is auto-documented here from the OpenAPI spec — so it never drifts from the deployed platform.

## Step 1 · Get credentials
After signing up, generate a `client_id` and `client_secret` in the MyParcel backoffice under **Settings → API access**.

Keep the secret on your server. Never ship it to a browser.

## Step 2 · Exchange for a token
Exchange your credentials for a bearer token. The token is valid for 1 hour.

```
// POST https://api.myparcel.nl/oauth/token
{
  "grant_type": "client_credentials",
  "client_id": "mp_client_AB12CD34",
  "client_secret": "…",
  "scope": "shipments.read shipments.write"
}
```

## Step 3 · Create your first shipment
With the token in hand, call the MyParcel API to create a shipment. Labels and tracking URLs are returned immediately.

```
// POST https://api.myparcel.nl/shipments
// Authorization: bearer …
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

- [Authentication in depth](authentication.md) — scopes, refresh tokens, revocation.
- [Delivery options](delivery-options.md) — pickup points, evening delivery, signed-for.
- [Webhooks](webhooks.md) — get notified when a shipment is handed over or delivered.
- [PHP SDK](php-sdk.md) / [JavaScript SDK](javascript-sdk.md) — skip the raw HTTP and use our libraries.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) or another e-commerce plugin — install, configure, done.
