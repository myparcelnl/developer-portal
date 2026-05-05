---
title: Webhooks
description: "Subscribe an HTTPS endpoint and MyParcel will POST events to you whenever a shipment changes state — no polling required."
---

## Subscribe
```
POST /webhooks
{
  "url": "https://example.com/webhooks/myparcel",
  "events": [
    "shipment.handed_over",
    "shipment.delivered",
    "shipment.delayed"
  ]
}
```

## Events
- `shipment.created`
- `shipment.printed`
- `shipment.handed_over`
- `shipment.delivered`
- `shipment.returned`
- `shipment.delayed`

## Request signing
Every webhook POST carries an `X-MyParcel-Signature` header — an HMAC-SHA256 of the raw body using your webhook secret. Always verify this header before trusting the payload.

```
// Node.js example
const crypto = require('crypto');
const expected = crypto
  .createHmac('sha256', secret)
  .update(rawBody)
  .digest('hex');
```

## Retries
MyParcel retries failed deliveries (non-2xx response or timeout > 5s) with exponential backoff for up to 24 hours. After that, the event is dropped and surfaced in the Analytics dashboard.
