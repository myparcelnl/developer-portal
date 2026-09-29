---
title: Data types
description: "Common value types and enums used across the MyParcel APIs — identifiers, money, dates, platform, carriers, package and delivery types."
---

## How to read this page
These value types appear across the MyParcel APIs. For the exact schema of any field, the [API reference](../api/myparcel.md) is the source of truth — this guide gathers the common enums and conventions in one place.

## Identifiers
Shipments, orders, drop-off points and webhook subscriptions are identified by **integer IDs** (large numbers such as `100000001`).

## Money
Monetary values are integers in **cents (EUR)** unless the field name says otherwise.

```
{ "insurance": 25000 /* = €250.00 */ }
```

## Dates & times
Date-time fields are returned as strings; check the field in the [API reference](../api/myparcel.md) for its exact format. A few helper types use fixed formats:

- **weekday** — as a string (`monday` … `sunday`) or a digit (`0` = Sunday … `6` = Saturday).
- **month** — as a two-digit string (`01` … `12`).

## Country & language codes
- Countries: ISO 3166-1 alpha-2 (`NL`, `BE`, `DE`, `FR`, …).
- Languages: ISO 639-1 (`nl`, `en`, `de`, `fr`, …).

## platform
Identifies which MyParcel platform an account or request belongs to:

| Value | Platform |
| --- | --- |
| `myparcel` | MyParcel (Netherlands) |
| `belgie` | SendMyParcel (Belgium) |

Some endpoints also use a numeric platform identifier (`1` = MyParcel, `2` = Flespakket, `3` = SendMyParcel / België). See the `platform` parameter in the [API reference](../api/myparcel.md).

## carrier
Carriers are referenced by a numeric ID. Which carriers you can use depends on your account and platform.

| ID | Carrier | Notes |
| --- | --- | --- |
| 1 | PostNL | |
| 2 | bpost | SendMyParcel.be only |
| 3 | CheapCargo / pallets | |
| 4 | DPD | |
| 9 | DHL For You | |
| 10 | DHL Parcel Connect | |
| 11 | DHL Europlus | |
| 12 | UPS Standard | MyParcel.nl only |
| 13 | UPS Express Saver | MyParcel.nl only |
| 14 | GLS | MyParcel.nl only |
| 15 | BRT | |
| 16 | Trunkrs | |
| 17 | InPost | |
| 18 | PosteItaliane | |

IDs `5`–`8` are deprecated (Instabox, DHL CheapCargo, BOL, UPS) and should not be used. Treat this table as a guideline and confirm the current list in the [API reference](../api/myparcel.md).

## package_type
| ID | Type | Notes |
| --- | --- | --- |
| 1 | package | Regular parcel. |
| 2 | mailbox package | Fits through a mailbox slot. |
| 3 | letter | |
| 4 | digital stamp | |
| 5 | pallet | |
| 6 | small package | |
| 7 | envelope | DHL For You only |

## delivery_type
| ID | Type |
| --- | --- |
| 1 | morning |
| 2 | standard |
| 3 | evening |
| 4 | pickup |

## package_contents
Used for customs on shipments outside the EU.

| ID | Contents |
| --- | --- |
| 1 | commercial goods |
| 2 | commercial samples |
| 3 | documents |
| 4 | gifts |
| 5 | return shipment |

## label_position
Position of the first label on an A4 sheet.

| ID | Position |
| --- | --- |
| 1 | top-left |
| 2 | top-right |
| 3 | bottom-left |
| 4 | bottom-right |

## Other value types
- **order_status** — `open`, `partially_processed`, `processed`, `cancelled`.
- **paper_size** — `a4` or `a6`.
- **sort_order** — `ASC` or `DESC`.

## Errors
Error responses share a common shape with a code and message. See [Responses](./responses.md) for status codes; the readable error-code catalogue will live in the Errors guide.
