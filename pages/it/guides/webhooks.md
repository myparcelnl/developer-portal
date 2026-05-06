---
title: Webhook
description: "Sottoscrivi un endpoint HTTPS e MyParcel ti invierà eventi in POST ogni volta che una spedizione cambia stato — nessun polling richiesto."
---

## Sottoscrizione
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

## Eventi
- `shipment.created`
- `shipment.printed`
- `shipment.handed_over`
- `shipment.delivered`
- `shipment.returned`
- `shipment.delayed`

## Firma delle richieste
Ogni POST webhook contiene un header `X-MyParcel-Signature` — un HMAC-SHA256 del body raw calcolato con il tuo webhook secret. Verifica sempre questo header prima di fidarti del payload.

```
// Esempio Node.js
const crypto = require('crypto');
const expected = crypto
  .createHmac('sha256', secret)
  .update(rawBody)
  .digest('hex');
```

## Retry
MyParcel ritenta le consegne fallite (risposta non-2xx o timeout > 5s) con backoff esponenziale per un massimo di 24 ore. Dopo questo periodo, l'evento viene scartato e segnalato nella dashboard Analytics.
