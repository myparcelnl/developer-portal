---
title: Types de données
description: "Types, enums et conventions courants utilisés dans toute la Shipment API : chaînes, montants, dates, pays, transporteurs."
---

## Identifiants
Les expéditions, commandes et webhooks utilisent des ID entiers signés sur 64 bits. Les tokens et secrets sont des chaînes opaques avec préfixe (`mp_client_*`, `rft_*`).

## Montants
Toutes les valeurs monétaires sont des entiers exprimés en **centimes (EUR)**, sauf si le nom du champ inclut explicitement une devise (par ex. `amount_usd`).

```
{ "insurance": 25000 /* = €250.00 */ }
```

## Dates et heures
Tous les timestamps sont au format RFC 3339 en UTC avec un `Z` final.

```
{ "created_at": "2026-04-20T08:12:34Z" }
```

## Codes de pays et de langue
- Pays : ISO 3166-1 alpha-2 (`NL`, `BE`, `DE`, `FR`, …).
- Langues : ISO 639-1 (`nl`, `en`, `de`, `fr`, …).

## Codes transporteur
- `postnl`, PostNL
- `dhl`, DHL Parcel
- `dhlforyou`, DHL For You
- `dpd`, DPD
- `ups`, UPS
- `bpost`, bpost
- `instabox`, Instabox

## Format d'erreur
Chaque réponse 4xx/5xx a la même structure, ce qui vous permet de traiter les erreurs de manière uniforme.

```
{
  "error": {
    "code": "shipment_not_cancellable",
    "message": "Shipment 8472402 is already handed_over.",
    "request_id": "req_01HW7K…"
  }
}
```
