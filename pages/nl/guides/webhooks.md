---
title: Webhooks
description: "Abonneer een HTTPS-endpoint en MyParcel POST't events naar je toe zodra een zending van status verandert — geen polling nodig."
---

## Abonneren
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
Elke webhook-POST bevat een `X-MyParcel-Signature`-header — een HMAC-SHA256 van de raw body met je webhook-secret. Verifieer deze header altijd voordat je de payload vertrouwt.

```
// Node.js example
const crypto = require('crypto');
const expected = crypto
  .createHmac('sha256', secret)
  .update(rawBody)
  .digest('hex');
```

## Retries
MyParcel probeert mislukte deliveries (non-2xx response of timeout > 5s) opnieuw met exponential backoff tot maximaal 24 uur. Daarna wordt het event gedropt en zichtbaar in het Analytics-dashboard.
