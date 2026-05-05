---
title: Data types
description: "Common types, enums and conventions used throughout the MyParcel API — strings, money, dates, countries, carriers."
---

## Identifiers
Shipments, orders and webhooks use signed 64-bit integer IDs. Tokens and secrets use prefixed opaque strings (`mp_client_*`, `rft_*`).

## Money
All monetary values are integers in **cents (EUR)** unless the field name explicitly includes a currency (e.g. `amount_usd`).

```
{ "insurance": 25000 /* = €250.00 */ }
```

## Dates & times
All timestamps are RFC 3339 in UTC with a trailing `Z`.

```
{ "created_at": "2026-04-20T08:12:34Z" }
```

## Country & language codes
- Countries: ISO 3166-1 alpha-2 (`NL`, `BE`, `DE`, `FR`, …).
- Languages: ISO 639-1 (`nl`, `en`, `de`, `fr`, …).

## Carrier codes
- `postnl` — PostNL
- `dhl` — DHL Parcel
- `dhlforyou` — DHL For You
- `dpd` — DPD
- `ups` — UPS
- `bpost` — bpost
- `instabox` — Instabox

## Error format
Every 4xx/5xx response has the same shape, so you can handle errors uniformly.

```
{
  "error": {
    "code": "shipment_not_cancellable",
    "message": "Shipment 8472402 is already handed_over.",
    "request_id": "req_01HW7K…"
  }
}
```
