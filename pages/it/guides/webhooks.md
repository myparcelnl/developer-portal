---
title: Webhook
description: "Registra un endpoint HTTPS e MyParcel gli invierà una POST ogni volta che una spedizione cambia stato o un'etichetta è pronta, senza bisogno di polling."
---

## Sottoscrizione
```
POST https://api.myparcel.nl/webhook_subscriptions
Content-Type: application/json;charset=utf-8
Authorization: bearer <API key codificata in base64>

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

L'URL deve usare HTTPS. Uno shop ha una sola iscrizione per hook, quindi iscriversi di nuovo allo stesso hook sostituisce l'URL esistente. MyParcel chiama l'URL in minuscolo, quindi usa un URL in minuscolo.

[Vedi `POST /webhook_subscriptions` →](../../api/myparcel.md#post-webhook-subscriptions)

## Hook
- `shipment_status_change`: lo [stato](shipments.md#ciclo-di-vita) di una spedizione è cambiato. Non viene inviato per lo stato `1`.
- `shipment_label_created`: un'etichetta richiesta in modo asincrono è pronta. Il payload contiene un link al PDF.
- `order_status_change`: lo stato di un ordine è cambiato.

## Cosa ricevi
MyParcel invia una POST con un body JSON contenente gli eventi in `data.hooks`, e indica l'hook nell'header `X-MyParcel-Hook`:

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

## Proteggere il tuo endpoint
MyParcel non documenta una firma sulle richieste webhook. Rendi l'URL difficile da indovinare, ad esempio con un token casuale nel percorso, e ignora le richieste verso qualsiasi altro percorso. I plugin MyParcel fanno esattamente questo.
