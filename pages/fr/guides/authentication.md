---
title: Authentification
description: "MyParcel utilise OAuth 2.0 client credentials. Les intégrations côté serveur échangent un client_id et un client_secret contre un bearer token à courte durée de vie."
---

## Obtenir un bearer token
Envoyez vos identifiants en POST vers `/oauth/token`. La réponse contient un `access_token` (TTL de 1 h) et un `refresh_token`.

```
curl -X POST https://api.myparcel.nl/oauth/token \
  -H "Content-Type: application/json" \
  -d @body.json

// body.json
{
  "grant_type": "client_credentials",
  "client_id": "mp_client_AB12CD34",
  "client_secret": "•••",
  "scope": "shipments.read shipments.write"
}
```

## Utiliser le token
Envoyez le bearer token dans l'en-tête `Authorization` à chaque requête vers `api.myparcel.nl`.

```
GET https://api.myparcel.nl/shipments
Authorization: bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9…
```

## Scopes
Les scopes limitent ce qu'un token peut faire. Ne demandez que ce dont vous avez besoin : des tokens plus restreints réduisent l'impact en cas de fuite.

- `shipments.read` : lister et récupérer des expéditions.
- `shipments.write` : créer, mettre à jour, annuler des expéditions.
- `orders.read` / `orders.write` : gérer les commandes.
- `webhooks.write` : s'abonner aux endpoints de webhook et les gérer.

## Rafraîchir les tokens
Avant l'expiration de l'`access_token`, échangez le `refresh_token` contre une nouvelle paire sans avoir à représenter vos identifiants.

```
POST https://api.myparcel.nl/oauth/token/refresh
{ "refresh_token": "rft_51d5fd…" }
```

## Révoquer les tokens
Révoquez immédiatement un token qui a fuité ou qui n'est plus utilisé. Les tokens révoqués sont rejetés avec un `401` lors des requêtes suivantes.

Envoyez `DELETE /oauth/token` avec le token dans l'en-tête `Authorization`.
