---
title: Tipi di dato
description: "Tipi comuni, enum e convenzioni utilizzati in tutta l'API MyParcel — stringhe, valori monetari, date, paesi, vettori."
---

## Identificatori
Spedizioni, ordini e webhook utilizzano ID interi signed a 64-bit. Token e secret usano stringhe opache con prefisso (`mp_client_*`, `rft_*`).

## Valori monetari
Tutti i valori monetari sono interi in **centesimi (EUR)** salvo quando il nome del campo include esplicitamente una valuta (es. `amount_usd`).

```
{ "insurance": 25000 /* = €250,00 */ }
```

## Date e orari
Tutti i timestamp sono RFC 3339 in UTC con suffisso `Z`.

```
{ "created_at": "2026-04-20T08:12:34Z" }
```

## Codici paese e lingua
- Paesi: ISO 3166-1 alpha-2 (`NL`, `BE`, `DE`, `FR`, …).
- Lingue: ISO 639-1 (`nl`, `en`, `de`, `fr`, …).

## Codici dei carrier
- `postnl` — PostNL
- `dhl` — DHL Parcel
- `dhlforyou` — DHL For You
- `dpd` — DPD
- `ups` — UPS
- `bpost` — bpost
- `instabox` — Instabox

## Formato degli errori
Ogni risposta 4xx/5xx ha la stessa struttura, così puoi gestire gli errori in modo uniforme.

```
{
  "error": {
    "code": "shipment_not_cancellable",
    "message": "Shipment 8472402 is already handed_over.",
    "request_id": "req_01HW7K…"
  }
}
```
