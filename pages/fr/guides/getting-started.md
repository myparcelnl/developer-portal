---
title: Démarrer avec MyParcel
description: "Commencez à expédier depuis votre plateforme en quelques minutes. Créez un compte, copiez votre clé API et envoyez votre première expédition avec un seul appel HTTP."
---

## Aperçu
MyParcel expose une seule API HTTP sur [`api.myparcel.nl`](../../api/myparcel.md). Elle couvre l'authentification, les expéditions, les commandes, les transporteurs, les options de livraison et les webhooks.

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
Une fois l'en-tête en place, appelez la Shipment API pour créer une expédition. Les étiquettes et les URL de suivi sont renvoyées immédiatement.

```
// POST https://api.myparcel.nl/shipments
// Authorization: bearer <clé API encodée en base64>
{
  "carrier": "postnl",
  "recipient": {
    "name": "J. de Vries",
    "street": "Antwoordnummer 42",
    "postal_code": "1012AB",
    "city": "Amsterdam",
    "country": "NL"
  },
  "options": {
    "package_type": "package",
    "signature": true
  }
}
```

## Étapes suivantes
Choisissez le parcours qui correspond à votre intégration :

- [Authentification](authentication.md) : envoyer la clé, et ce que signifie un `401`.
- [Options de livraison](../platforms/delivery-options.md) : points de retrait, livraison en soirée, remise contre signature.
- [Webhooks](webhooks.md) : soyez notifié dès qu'une expédition est remise ou livrée.
- [PHP SDK](../../guides/php-sdk-v12.md) / [JavaScript SDK](javascript-sdk.md) : évitez le HTTP brut et utilisez nos bibliothèques.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) ou un autre plugin e-commerce : installez, configurez, terminé.
