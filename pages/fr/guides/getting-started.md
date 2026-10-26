---
title: Démarrer avec MyParcel
description: "Commencez à expédier depuis votre plateforme en quelques minutes. Créez un compte, copiez votre clé API et envoyez votre première expédition avec un seul appel HTTP."
---

## Aperçu
La Shipment API sur [`api.myparcel.nl`](../../api/myparcel.md) couvre les expéditions, les étiquettes, les options de livraison, le suivi et les webhooks. Les commandes, les adresses et l'impression ont [leurs propres API](requests.md#url-de-base).

La référence API de ce portail est générée à partir des specs OpenAPI publiées.

## Étape 1 · Obtenir votre clé API
Après votre inscription, ouvrez **Paramètres de la boutique → Intégration** dans le [backoffice MyParcel](https://backoffice.myparcel.nl) et copiez la clé API.

Conservez la clé sur votre serveur. Ne l'envoyez jamais vers un navigateur.

## Étape 2 · Authentifier vos requêtes
Encodez la clé en base64 et envoyez-la dans l'en-tête `Authorization` de chaque requête :

```
Authorization: bearer <clé API encodée en base64>
```

Voir [Authentification](authentication.md) pour des exemples en shell et en PHP.

## Étape 3 · Créer votre première expédition
Une fois l'en-tête en place, appelez la Shipment API pour créer une expédition. La réponse contient l'ID de la nouvelle expédition, qui vous sert à récupérer l'étiquette.

```
// POST https://api.myparcel.nl/shipments
// Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
// Authorization: bearer <clé API encodée en base64>
{
  "data": {
    "shipments": [
      {
        "carrier": 1,
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

Téléchargez ensuite l'étiquette en PDF avec `GET /shipment_labels/{id}`. Voir [Expéditions](shipments.md) pour la réponse et les options d'étiquette.

## Étapes suivantes
Choisissez le parcours qui correspond à votre intégration :

- [Authentification](authentication.md) : envoyer la clé, et ce que signifie un `401`.
- [Options de livraison](../platforms/delivery-options.md) : points de retrait, livraison en soirée, remise contre signature.
- [Webhooks](webhooks.md) : soyez notifié dès qu'une expédition change de statut ou qu'une étiquette est prête.
- [PHP SDK](../../guides/php-sdk-v12.md) / [JavaScript SDK](javascript-sdk.md) : évitez le HTTP brut et utilisez nos bibliothèques.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) ou un autre plugin e-commerce : installez, configurez, terminé.
