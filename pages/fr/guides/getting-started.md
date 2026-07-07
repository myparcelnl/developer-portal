---
title: Démarrer avec MyParcel
description: "Commencez à expédier depuis votre plateforme en quelques minutes. Créez un compte, obtenez un token d'API et envoyez votre première expédition avec un seul appel HTTP."
---

## Aperçu
MyParcel expose une seule API HTTP sur [`api.myparcel.nl`](../../api/myparcel.md). Elle couvre l'authentification, les expéditions, les commandes, les transporteurs, les options de livraison et les webhooks.

La référence est documentée automatiquement ici à partir de la spécification OpenAPI, elle ne se désynchronise donc jamais de la plateforme déployée.

## Étape 1 · Obtenir des identifiants
Après votre inscription, générez un `client_id` et un `client_secret` dans le backoffice MyParcel sous **Paramètres → Accès API**.

Conservez le secret sur votre serveur. Ne l'envoyez jamais vers un navigateur.

## Étape 2 · Échanger contre un token
Échangez vos identifiants contre un bearer token. Le token est valide pendant 1 heure.

```
// POST https://api.myparcel.nl/oauth/token
{
  "grant_type": "client_credentials",
  "client_id": "mp_client_AB12CD34",
  "client_secret": "…",
  "scope": "shipments.read shipments.write"
}
```

## Étape 3 · Créer votre première expédition
Une fois le token en main, appelez la Shipment API pour créer une expédition. Les étiquettes et les URL de suivi sont renvoyées immédiatement.

```
// POST https://api.myparcel.nl/shipments
// Authorization: bearer …
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

- [Authentification en détail](authentication.md) : scopes, refresh tokens, révocation.
- [Options de livraison](delivery-options.md) : points de retrait, livraison en soirée, remise contre signature.
- [Webhooks](webhooks.md) : soyez notifié dès qu'une expédition est remise ou livrée.
- [PHP SDK](php-sdk.md) / [JavaScript SDK](javascript-sdk.md) : évitez le HTTP brut et utilisez nos bibliothèques.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) ou un autre plugin e-commerce : installez, configurez, terminé.
