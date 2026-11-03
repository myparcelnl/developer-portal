---
title: Tipi di dato
description: "Tipi, enum e convenzioni comuni usati in tutta la Shipment API: ID, prezzi, date, paesi, vettori e tipi di pacco."
---

## Identificatori
Spedizioni e iscrizioni webhook hanno ID interi. Gli ordini usano UUID, come `db610547-7434-4f6d-9e13-178b686a94d6`.

## Prezzi
Un prezzo è un oggetto con un importo in **centesimi** e una valuta. È supportato solo `EUR`.

```
{ "insurance": { "amount": 25000, "currency": "EUR" } }  // €250,00
```

## Booleani
Le opzioni di spedizione sono booleani interi: `1` per attivo, `0` per disattivo.

```
{ "options": { "signature": 1, "only_recipient": 0 } }
```

## Date e orari
- Date: `YYYY-MM-DD`, ad esempio `2026-04-20`.
- Timestamp: `YYYY-MM-DD HH:MM:SS`, ad esempio `2026-04-20 08:12:34`.

## Codici paese
I paesi sono codici ISO 3166-1 alpha-2 (`NL`, `BE`, `DE`, `FR`, …) nel campo `cc`.

## ID dei vettori
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

Gli ID da `5` a `8` (Instabox, DHL Cheap Cargo, bol e il vecchio UPS) sono deprecati. I vettori che puoi usare dipendono dalla tua piattaforma e dai tuoi contratti.

## Tipi di pacco
- `1`: pacco
- `2`: pacco per cassetta postale
- `3`: lettera
- `4`: francobollo digitale
- `5`: pallet
- `6`: pacco piccolo
- `7`: busta

## Formato degli errori
Una risposta di errore contiene un messaggio, un ID di richiesta e un elenco di errori con codici numerici:

```
{
  "message": "…",
  "request_id": "…",
  "errors": [
    { "code": 3501, "message": "Invalid address" }
  ]
}
```

Gestisci gli errori in base al `code`, non al testo del messaggio.
