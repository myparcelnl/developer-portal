---
title: Webhooks
description: "Subscribe an HTTPS endpoint and MyParcel will POST to it whenever a shipment changes status or a label is ready, no polling required."
---

## Subscribe
```
POST https://api.myparcel.nl/webhook_subscriptions
Content-Type: application/json;charset=utf-8
Authorization: bearer <base64-encoded API key>

{
  "data": {
    "webhook_subscriptions": [
      {
        "hook": "shipment_status_change",
        "url": "https://example.com/webhooks/myparcel"
      }
    ]
  }
}
```

The URL must use HTTPS. A shop has one subscription per hook, so subscribing to the same hook again replaces the existing URL. MyParcel calls the URL in lowercase, so use a lowercase URL.

[See `POST /webhook_subscriptions` →](../api/myparcel.md#post-webhook-subscriptions)

## Hooks
- `shipment_status_change`: the [status](shipments.md#lifecycle) of a shipment changed. Not sent for status `1`.
- `shipment_label_created`: a label requested asynchronously is ready. The payload contains a link to the PDF.
- `order_status_change`: the status of an order changed.

## What you receive
MyParcel POSTs a JSON body with the events in `data.hooks`, and names the hook in the `X-MyParcel-Hook` header:

```
{
  "data": {
    "hooks": [
      {
        "shipment_id": 123456,
        "account_id": 7003,
        "shop_id": 1897,
        "status": 2,
        "barcode": "3SMYPA749883621",
        "shipment_reference_identifier": "ORDER-2026-01042"
      }
    ]
  }
}
```

## Securing your endpoint
MyParcel does not document a signature on webhook requests. Make the URL hard to guess, for example with a random token in the path, and ignore requests to any other path. The MyParcel plugins do exactly that.
