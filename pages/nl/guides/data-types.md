---
title: Datatypes
description: "Veelgebruikte types, enums en conventies in de MyParcel API — strings, bedragen, datums, landen, vervoerders."
---

## Identifiers
Zendingen, orders en webhooks gebruiken signed 64-bit integer ID's. Tokens en secrets zijn opaque strings met prefix (`mp_client_*`, `rft_*`).

## Bedragen
Alle geldbedragen zijn integers in **cent (EUR)**, tenzij de veldnaam expliciet een valuta bevat (bv. `amount_usd`).

```
{ "insurance": 25000 /* = €250,00 */ }
```

## Datum en tijd
Alle timestamps zijn RFC 3339 in UTC met een sluitende `Z`.

```
{ "created_at": "2026-04-20T08:12:34Z" }
```

## Land- en taalcodes
- Landen: ISO 3166-1 alpha-2 (`NL`, `BE`, `DE`, `FR`, …).
- Talen: ISO 639-1 (`nl`, `en`, `de`, `fr`, …).

## Carrier-codes
- `postnl` — PostNL
- `dhl` — DHL Parcel
- `dhlforyou` — DHL For You
- `dpd` — DPD
- `ups` — UPS
- `bpost` — bpost
- `instabox` — Instabox

## Errorformaat
Elke 4xx/5xx-response heeft dezelfde vorm, zodat je errors uniform kunt afhandelen.

```
{
  "error": {
    "code": "shipment_not_cancellable",
    "message": "Shipment 8472402 is already handed_over.",
    "request_id": "req_01HW7K…"
  }
}
```
