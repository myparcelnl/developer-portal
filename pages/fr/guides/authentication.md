---
title: Authentification
description: "Chaque requête vers l'API MyParcel s'authentifie avec la clé API de votre boutique, encodée en base64, dans l'en-tête Authorization."
---

## Obtenir votre clé API
Connectez-vous à [backoffice.myparcel.nl](https://backoffice.myparcel.nl) et ouvrez **Paramètres de la boutique → Intégration**. Copiez la clé API, ou générez-en une s'il n'y en a pas encore.

Gardez la clé sur votre serveur. Quiconque la possède peut créer des expéditions et lire des données au nom de votre boutique : ne l'envoyez jamais vers un navigateur et ne la commitez jamais dans un dépôt.

## L'envoyer avec chaque requête
Encodez la clé en base64 et envoyez-la dans l'en-tête `Authorization` avec le schéma `bearer` :

```
GET https://api.myparcel.nl/shipments
Accept: application/json;charset=utf-8
Authorization: bearer <clé API encodée en base64>
```

Dans un shell, utilisez `printf` plutôt que `echo`, pour qu'aucun retour à la ligne ne se retrouve dans la clé encodée :

```
curl https://api.myparcel.nl/shipments \
  -H "Accept: application/json;charset=utf-8" \
  -H "Authorization: bearer $(printf '%s' "$MYPARCEL_API_KEY" | base64)"
```

En PHP :

```php
$headers = [
    'Authorization' => 'bearer ' . base64_encode($apiKey),
];
```

Le [PHP SDK v10](php-sdk.md) envoie la même clé encodée avec le schéma `basic`. Les exemples de cette documentation utilisent `bearer`, comme les plugins MyParcel actuels.

## Quand une requête est refusée
Une réponse `401 Unauthorized` signifie que la clé est absente, n'est pas encodée en base64 ou n'est plus valide. Vérifiez que vous encodez bien la clé elle-même, sans espace ni retour à la ligne final. Si la clé a été remplacée dans le backoffice, copiez la nouvelle.

## Avec un SDK
Le [PHP SDK v12](../../guides/php-sdk-v12.md) prend la clé API comme argument du constructeur, ou la lit dans la variable d'environnement `API_KEY`, et construit l'en-tête pour vous.

Vous publiez une intégration que d'autres marchands installent ? Utilisez plutôt [MyParcel Connect](../../guides/php-sdk-v12.md#myparcel-connect), pour que le marchand autorise lui-même sa boutique et que vous ne manipuliez jamais sa clé API.
