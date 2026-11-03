---
title: Webhooks
description: "Abonneer een HTTPS-endpoint en MyParcel POST't ernaar zodra een zending van status verandert of een label klaar is, geen polling nodig."
---

## Abonneren
```
POST https://api.myparcel.nl/webhook_subscriptions
Content-Type: application/json;charset=utf-8
Authorization: bearer <base64-gecodeerde API-key>

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

De URL moet HTTPS gebruiken. Een shop heeft één abonnement per hook, dus opnieuw abonneren op dezelfde hook vervangt de bestaande URL. MyParcel roept de URL in kleine letters aan, dus gebruik een URL in kleine letters.

[Zie `POST /webhook_subscriptions` →](../../api/myparcel.md#post-webhook-subscriptions)

## Hooks
- `shipment_status_change`: de [status](shipments.md#levenscyclus) van een zending is veranderd. Wordt niet verstuurd voor status `1`.
- `shipment_label_created`: een asynchroon aangevraagd label is klaar. De payload bevat een link naar de PDF.
- `order_status_change`: de status van een order is veranderd.

## Wat je ontvangt
MyParcel POST't een JSON-body met de events in `data.hooks`, en noemt de hook in de header `X-MyParcel-Hook`:

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

## Je endpoint beveiligen
MyParcel documenteert geen handtekening op webhook-requests. Maak de URL moeilijk te raden, bijvoorbeeld met een willekeurig token in het pad, en negeer requests naar elk ander pad. De MyParcel-plugins doen precies dat.
