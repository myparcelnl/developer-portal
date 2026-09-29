---
title: Webhooks
description: "Subscribe an HTTPS endpoint and MyParcel posts an event to you when a shipment or order changes — no polling. Plus notification groups for recipient notifications."
---

## Overview
Webhooks let MyParcel notify your server when something changes, so you don't have to poll. You subscribe an HTTPS URL per event type; MyParcel then POSTs each event to that URL.

Separately, **notification groups** configure the messages MyParcel sends to the *recipient* (such as delivery emails). Both are covered below.

## Events
| `hook` | Fires when |
| --- | --- |
| `shipment_status_change` | A shipment's status changes (except the initial concept status). |
| `shipment_label_created` | An asynchronously generated label is ready. |
| `order_status_change` | An order's status changes. |

## Subscribe
`POST /webhook_subscriptions` with a `hook` and an HTTPS `url`:

```
POST https://api.myparcel.nl/webhook_subscriptions
Authorization: bearer BASE64_ENCODED_API_KEY
Content-Type: application/json;charset=utf-8

{
  "data": {
    "webhook_subscriptions": [
      { "hook": "shipment_status_change", "url": "https://example.com/webhooks/myparcel" }
    ]
  }
}
```

- The `url` must be HTTPS and lowercase.
- You can have one subscription per hook type per shop — subscribing the same hook again overwrites the previous URL.

## Receiving a callback
MyParcel POSTs the event to your URL. The body wraps events in a `data.hooks` array, and two headers identify and authenticate the call:

- **`X-MyParcel-Hook`** — the event type.
- **`X-MyParcel-Authorization`** — your base64-encoded API key. Verify it matches before trusting the payload.

Respond quickly with a `2xx`. Do the heavy work asynchronously and make your handler **idempotent** — the same event may arrive more than once.

### `shipment_status_change` payload
`shipment_id`, `status`, `barcode`, `shipment_reference_identifier`, `order_id`, `account_id`, `shop_id`.

### `shipment_label_created` payload
`status` (`success` / `failed`), `shipment_ids`, `printer_identifier`, `pdf` (label URL), `reason` (on failure).

## List & delete subscriptions
- `GET /webhook_subscriptions/{id}` — list your subscriptions.
- `DELETE /webhook_subscriptions/{ids}` — remove one or more (semicolon-separated); returns `204 No Content`.

## Notification groups
Notification groups control the messages sent to the **recipient** of a shipment (for example a "your parcel is on its way" email). Each group holds notification **templates** that you can enable, disable or test.

| Endpoint | Purpose |
| --- | --- |
| `GET` / `POST /notification_groups` | List or create notification groups. |
| `DELETE /notification_groups/{ids}` | Remove a group. |
| `GET` / `POST /notification_groups/{id}/notification_templates` | List or add templates. |
| `PUT .../notification_templates/{id}` | Update a template. |
| `.../enable`, `.../disable`, `.../test` | Enable, disable or send a test of a template. |

See the [API reference](../api/myparcel.md) for the full schemas.

## Tips
- Prefer webhooks over polling `GET /tracktraces` or `GET /shipments` — it's lighter and avoids hitting rate limits.
- Always verify the `X-MyParcel-Authorization` header.
- Keep your endpoint fast and idempotent.
