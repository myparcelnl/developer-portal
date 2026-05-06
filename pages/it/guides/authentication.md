---
title: Autenticazione
description: "MyParcel utilizza OAuth 2.0 con client credentials. Le integrazioni server-side scambiano un client_id e un client_secret per ottenere un bearer token di breve durata."
---

## Ottenere un bearer token
Invia in POST le tue credenziali a `/oauth/token`. La risposta contiene un `access_token` (TTL di 1 ora) e un `refresh_token`.

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

## Usare il token
Invia il bearer token nell'header `Authorization` ad ogni richiesta verso `api.myparcel.nl`.

```
GET https://api.myparcel.nl/shipments
Authorization: bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9…
```

## Scope
Gli scope limitano cosa può fare un token. Richiedi solo ciò che ti serve — token più ristretti riducono il blast radius in caso di leak.

- `shipments.read` — elenca e recupera spedizioni.
- `shipments.write` — crea, aggiorna, annulla spedizioni.
- `orders.read` / `orders.write` — gestisci ordini.
- `webhooks.write` — sottoscrivi e gestisci endpoint webhook.

## Refresh dei token
Prima che l'`access_token` scada, scambia il `refresh_token` per ottenere una nuova coppia senza ri-presentare le credenziali.

```
POST https://api.myparcel.nl/oauth/token/refresh
{ "refresh_token": "rft_51d5fd…" }
```

## Revoca dei token
Revoca immediatamente un token leakato o non utilizzato. I token revocati vengono rifiutati con `401` nelle richieste successive.

Esegui `DELETE /oauth/token` con il token nell'header `Authorization`.
