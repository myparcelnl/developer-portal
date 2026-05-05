---
title: Authentication
description: "MyParcel uses OAuth 2.0 client credentials. Server-side integrations exchange a client_id and client_secret for a short-lived bearer token."
---

## Obtain a bearer token
POST your credentials to `/oauth/token`. The response contains an `access_token` (1h TTL) and a `refresh_token`.

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

## Use the token
Send the bearer token in the `Authorization` header on every request to `api.myparcel.nl`.

```
GET https://api.myparcel.nl/shipments
Authorization: bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9…
```

## Scopes
Scopes limit what a token can do. Request only what you need — narrower tokens reduce blast radius if they leak.

- `shipments.read` — list and fetch shipments.
- `shipments.write` — create, update, cancel shipments.
- `orders.read` / `orders.write` — manage orders.
- `webhooks.write` — subscribe and manage webhook endpoints.

## Refreshing tokens
Before the `access_token` expires, exchange the `refresh_token` for a new pair without re-presenting credentials.

```
POST https://api.myparcel.nl/oauth/token/refresh
{ "refresh_token": "rft_51d5fd…" }
```

## Revoking tokens
Revoke a leaked or unused token immediately. Revoked tokens are rejected with `401` on subsequent requests.

Issue `DELETE /oauth/token` with the token as the `Authorization` header.
