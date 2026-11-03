---
title: Expéditions
description: "Une expédition représente un colis en route de votre adresse d'expéditeur vers un destinataire. Vous la créez avec une seule requête, puis récupérez son étiquette en PDF."
---

## Cycle de vie
Chaque expédition a un `status` numérique. Les principaux groupes sont :

- `1` pending, brouillon : créée, pas encore d'étiquette.
- `2` pending, enregistrée : l'étiquette a été créée.
- `3` à `6` en route : remise au transporteur, tri, distribution, douane.
- `7` à `11` livrée : chez le destinataire, prête à être retirée, retirée, ou les équivalents pour les retours.
- `12` et `14` imprimée : une lettre ou un timbre numérique.
- `30` à `38` inactive : les mêmes étapes pour les expéditions qui ne sont plus actives.

Abonnez-vous au [webhook](webhooks.md) `shipment_status_change` pour être informé des changements au lieu d'interroger l'API.

## Créer une expédition
Envoyez un POST vers `/shipments` avec le content type vendor. Le corps place un tableau d'expéditions dans un objet `data`, ce qui permet d'en créer plusieurs en un seul appel.

```
POST https://api.myparcel.nl/shipments
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
Authorization: bearer <clé API encodée en base64>

{
  "data": {
    "shipments": [
      {
        "carrier": 1,
        "reference_identifier": "ORDER-2026-01042",
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

`carrier`, `recipient` et `options.package_type` sont obligatoires. Les transporteurs et les types de colis sont des ID numériques, et les options comme `signature` prennent `0` ou `1`. Voir [Types de données](data-types.md).

La réponse liste les ID des nouvelles expéditions, dans l'ordre où vous les avez envoyées :

```
{
  "data": {
    "ids": [
      { "id": 123456, "reference_identifier": "ORDER-2026-01042" }
    ]
  }
}
```

## Étiquettes
Récupérez les étiquettes avec `GET /shipment_labels/{ids}`. Séparez plusieurs ID par `;` pour les obtenir dans un seul PDF. Le paramètre `format` choisit `A4` ou `A6`, et en A4 `positions` indique où placer les premières étiquettes (`1` à `4`).

Pour de gros lots, demandez l'étiquette de manière asynchrone avec `Accept: application/vnd.shipment_label_link+json`. Vous recevez un lien qui renvoie le PDF dès qu'il est prêt, ou vous pouvez écouter le [webhook](webhooks.md) `shipment_label_created`.

[Voir `GET /shipment_labels/{ids}` →](../../api/myparcel.md#get-shipment-labels-idss)

## Suppression
Vous ne pouvez supprimer une expédition que tant qu'elle est un brouillon, avant la création d'une étiquette. La suppression est rarement nécessaire : les expéditions jamais remises au transporteur ne sont pas facturées.

[Voir `DELETE /shipments/{ids}` →](../../api/myparcel.md#delete-shipments-idss)
