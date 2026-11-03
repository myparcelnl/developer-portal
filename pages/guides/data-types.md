---
title: Data types
description: "Common types, enums and conventions used throughout the Shipment API: IDs, prices, dates, countries, carriers and package types."
---

## Identifiers
Shipments and webhook subscriptions have integer IDs. Orders use UUIDs, such as `db610547-7434-4f6d-9e13-178b686a94d6`.

## Prices
A price is an object with an amount in **cents** and a currency. Only `EUR` is supported.

```
{ "insurance": { "amount": 25000, "currency": "EUR" } }  // €250.00
```

## Booleans
Shipment options are integer booleans: `1` for on, `0` for off.

```
{ "options": { "signature": 1, "only_recipient": 0 } }
```

## Dates & times
- Dates: `YYYY-MM-DD`, for example `2026-04-20`.
- Timestamps: `YYYY-MM-DD HH:MM:SS`, for example `2026-04-20 08:12:34`.

## Country codes
Countries are ISO 3166-1 alpha-2 codes (`NL`, `BE`, `DE`, `FR`, …) in the field `cc`.

## Carrier IDs
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

IDs `5` to `8` (Instabox, DHL Cheap Cargo, bol and the old UPS) are deprecated. Which carriers you can use depends on your platform and contracts.

## Package types
- `1`: package
- `2`: mailbox package
- `3`: letter
- `4`: digital stamp
- `5`: pallet
- `6`: small package
- `7`: envelope

## Error format
An error response carries a message, a request ID and a list of errors with numeric codes:

```
{
  "message": "…",
  "request_id": "…",
  "errors": [
    { "code": 3501, "message": "Invalid address" }
  ]
}
```

Handle errors on the `code`, not on the message text.
