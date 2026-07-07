---
title: Webhooks
description: "Abonnez un endpoint HTTPS et MyParcel vous enverra les événements en POST dès qu'une expédition change d'état, sans polling."
---

## S'abonner
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

## Événements
- `shipment.created`
- `shipment.printed`
- `shipment.handed_over`
- `shipment.delivered`
- `shipment.returned`
- `shipment.delayed`

## Signature des requêtes
Chaque POST de webhook comporte un en-tête `X-MyParcel-Signature`, un HMAC-SHA256 du corps brut calculé avec votre secret de webhook. Vérifiez toujours cet en-tête avant de faire confiance au payload.

```
// Node.js example
const crypto = require('crypto');
const expected = crypto
  .createHmac('sha256', secret)
  .update(rawBody)
  .digest('hex');
```

## Nouvelles tentatives
MyParcel retente les livraisons échouées (réponse non-2xx ou timeout > 5s) avec un backoff exponentiel pendant 24 heures au maximum. Passé ce délai, l'événement est abandonné et signalé dans le tableau de bord Analytics.
