---
title: Getting started with MyParcel
description: "Start shipping from your platform in minutes. Create an account, copy your API key and send your first shipment with a single HTTP call."
---

## Overview
The Shipment API at [`api.myparcel.nl`](../api/myparcel.md) covers shipments, labels, delivery options, track & trace and webhooks. Orders, addresses and printing have [APIs of their own](requests.md#base-url).

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
With the header in place, call the Shipment API to create a shipment. The response contains the ID of the new shipment, which you use to fetch the label.

```
// POST https://api.myparcel.nl/shipments
// Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
// Authorization: bearer <base64-encoded API key>
{
  "data": {
    "shipments": [
      {
        "carrier": 1,
        "recipient": {
          "cc": "NL",
          "person": "J. de Vries",
          "street": "Antareslaan",
          "number": "31",
          "postal_code": "2132JE",
          "city": "Hoofddorp"
        },
        "options": {
          "package_type": 1,
          "signature": 1
        }
      }
    ]
  }
}
```

Then download the label as a PDF with `GET /shipment_labels/{id}`. See [Shipments](shipments.md) for the response and the label options.

## Next steps
Pick whichever path matches your integration:

- [Authentication](authentication.md): sending the key, and what a `401` means.
- [Delivery options](../platforms/delivery-options.md): pickup points, evening delivery, signed-for.
- [Webhooks](webhooks.md): get notified when a shipment changes status or a label is ready.
- [PHP SDK](php-sdk-v12.md) / [JavaScript SDK](javascript-sdk.md): skip the raw HTTP and use our libraries.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) or another e-commerce plugin: install, configure, done.
