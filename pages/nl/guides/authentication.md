---
title: Authenticatie
description: "MyParcel gebruikt OAuth 2.0 client credentials. Server-side integraties wisselen een client_id en client_secret in voor een kortlevende bearer token."
---

## Bearer token ophalen
POST je credentials naar `/oauth/token`. De response bevat een `access_token` (1u TTL) en een `refresh_token`.

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

## Token gebruiken
Stuur de bearer token mee in de `Authorization`-header bij elke request naar `api.myparcel.nl`.

```
GET https://api.myparcel.nl/shipments
Authorization: bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9…
```

## Scopes
Scopes beperken wat een token kan. Vraag alleen wat je nodig hebt — smallere tokens beperken de schade als ze lekken.

- `shipments.read` — zendingen ophalen en doorzoeken.
- `shipments.write` — zendingen aanmaken, bijwerken, annuleren.
- `orders.read` / `orders.write` — orders beheren.
- `webhooks.write` — webhook-endpoints aanmaken en beheren.

## Tokens vernieuwen
Wissel het `refresh_token` in voor een nieuw paar voordat de `access_token` verloopt — zonder credentials opnieuw aan te bieden.

```
POST https://api.myparcel.nl/oauth/token/refresh
{ "refresh_token": "rft_51d5fd…" }
```

## Tokens intrekken
Trek een gelekte of ongebruikte token direct in. Ingetrokken tokens worden bij volgende requests met `401` afgewezen.

Stuur `DELETE /oauth/token` met de token in de `Authorization`-header.
