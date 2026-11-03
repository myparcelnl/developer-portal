---
title: Webhooks
description: "Abonnez un endpoint HTTPS et MyParcel lui enverra un POST dès qu'une expédition change de statut ou qu'une étiquette est prête, sans polling."
---

## S'abonner
```
POST https://api.myparcel.nl/webhook_subscriptions
Content-Type: application/json;charset=utf-8
Authorization: bearer <clé API encodée en base64>

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

L'URL doit utiliser HTTPS. Une boutique a un seul abonnement par hook : s'abonner à nouveau au même hook remplace l'URL existante. MyParcel appelle l'URL en minuscules, utilisez donc une URL en minuscules.

[Voir `POST /webhook_subscriptions` →](../../api/myparcel.md#post-webhook-subscriptions)

## Hooks
- `shipment_status_change` : le [statut](shipments.md#cycle-de-vie) d'une expédition a changé. Non envoyé pour le statut `1`.
- `shipment_label_created` : une étiquette demandée de manière asynchrone est prête. Le payload contient un lien vers le PDF.
- `order_status_change` : le statut d'une commande a changé.

## Ce que vous recevez
MyParcel envoie un POST avec un corps JSON contenant les événements dans `data.hooks`, et indique le hook dans l'en-tête `X-MyParcel-Hook` :

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

## Sécuriser votre endpoint
MyParcel ne documente pas de signature sur les requêtes webhook. Rendez l'URL difficile à deviner, par exemple avec un jeton aléatoire dans le chemin, et ignorez les requêtes vers tout autre chemin. Les plugins MyParcel font exactement cela.
