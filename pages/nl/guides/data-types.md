---
title: Datatypes
description: "Veelgebruikte types, enums en conventies in de Shipment API: ID's, prijzen, datums, landen, vervoerders en pakkettypes."
---

## Identifiers
Zendingen en webhook-abonnementen hebben integer-ID's. Orders gebruiken UUID's, zoals `db610547-7434-4f6d-9e13-178b686a94d6`.

## Prijzen
Een prijs is een object met een bedrag in **centen** en een valuta. Alleen `EUR` wordt ondersteund.

```
{ "insurance": { "amount": 25000, "currency": "EUR" } }  // €250,00
```

## Booleans
Zendingopties zijn integer-booleans: `1` voor aan, `0` voor uit.

```
{ "options": { "signature": 1, "only_recipient": 0 } }
```

## Datum en tijd
- Datums: `YYYY-MM-DD`, bijvoorbeeld `2026-04-20`.
- Timestamps: `YYYY-MM-DD HH:MM:SS`, bijvoorbeeld `2026-04-20 08:12:34`.

## Landcodes
Landen zijn ISO 3166-1 alpha-2-codes (`NL`, `BE`, `DE`, `FR`, …) in het veld `cc`.

## Vervoerder-ID's
- `1`: PostNL
- `2`: bpost
- `3`: Cheap Cargo
- `4`: DPD
- `9`: DHL For You
- `10`: DHL Parcel Connect
- `11`: DHL Europlus
- `12`: UPS Standard
- `13`: UPS Express Saver
- `14`: GLS
- `15`: BRT
- `16`: Trunkrs
- `17`: InPost
- `18`: Poste Italiane

ID's `5` tot en met `8` (Instabox, DHL Cheap Cargo, bol en de oude UPS) zijn verouderd. Welke vervoerders je kunt gebruiken, hangt af van je platform en contracten.

## Pakkettypes
- `1`: pakket
- `2`: brievenbuspakje
- `3`: brief
- `4`: digitale postzegel
- `5`: pallet
- `6`: klein pakket
- `7`: envelop

## Errorformaat
Een error-response bevat een melding, een request-ID en een lijst errors met numerieke codes:

```
{
  "message": "…",
  "request_id": "…",
  "errors": [
    { "code": 3501, "message": "Invalid address" }
  ]
}
```

Handel errors af op de `code`, niet op de tekst van de melding.
