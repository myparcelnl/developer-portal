---
title: Shipments
description: "A shipment represents one parcel travelling from your sender address to a recipient. This guide explains the shipment object, options, labels, tracking and the rates and capabilities endpoints."
---

## Overview
A shipment represents one parcel travelling from your sender address to a recipient. You create shipments with the Shipment API; creating one registers it with the carrier and lets you fetch a label and a Track & Trace.

This guide explains the concepts and the most-used fields. For the complete request and response schema, the [API reference](../api/myparcel.md) is the source of truth.

## Lifecycle
A shipment starts as a **concept**, is **registered** with the carrier, gets **handed over**, and finally is **delivered** (or **returned**). You can [cancel](#cancelling) a shipment only while it is still a concept — once it is registered with the carrier, cancel it via a return instead. Follow the live status with [Track & Trace](#track-trace).

## The shipment object
The Shipment API wraps data in a `data.shipments` array. The key fields when creating a shipment:

- **carrier** — the carrier ID (e.g. `1` = PostNL). See [Data types · carrier](./data-types.md#carrier).
- **reference_identifier** — your own reference (e.g. an order number). Optional but recommended.
- **recipient** — the destination address (see below).
- **sender** — the return address. Taken from your account if omitted.
- **options** — how to ship the parcel (see [Options](#options)).
- **physical_properties** — weight and dimensions.
- **customs_declaration** — required for shipments outside the EU.
- **pickup** — the chosen pickup location, when `delivery_type` is pickup.

## Recipient & sender
Both use the same address fields. The important ones:

- **cc** — country code (ISO 3166-1 alpha-2), required.
- **person** — recipient name (max 40 characters), required.
- **company**, **email**, **phone** — phone is required for international and some carriers.
- **street**, **number**, **number_suffix**, **postal_code**, **city**, **region**.
- **box_number** — Belgium only.
- **eori_number** / **vat_number** — for customs.

## Options
The `options` object controls how the parcel ships. Common options:

| Option | Meaning |
| --- | --- |
| `package_type` | Required. Parcel, mailbox, letter, etc. — see [Data types](./data-types.md#package_type). |
| `delivery_type` | Standard, morning, evening or pickup — see [Data types](./data-types.md#delivery_type). |
| `delivery_date` | Delivery date (`YYYY-MM-DD HH:MM:SS`); required for morning/evening. |
| `signature` | Recipient signs for the parcel. |
| `only_recipient` | Hand over to the addressee only (no neighbours). |
| `insurance` | Insure the parcel — an amount (cents) and currency. |
| `return` | Return to sender if it can't be delivered. |
| `large_format` | For oversized or heavy parcels. |
| `age_check` | Recipient must be 18 or older. |
| `label_description` | Custom text printed on the label. |

Booleans use `1`/`0`. Which options a carrier supports differs per carrier — use [Capabilities](#capabilities) to check.

## Physical properties
`physical_properties` holds `weight` (grams), `width`, `height`, `length`. **Weight is required** for shipments outside the EU and for some package types. A realistic weight keeps the shipping price accurate.

## Customs declaration
For shipments outside the EU, add a `customs_declaration`:

- **contents** — the [package contents](./data-types.md#package_contents) type.
- **invoice** — required for commercial goods, samples and returns.
- **weight** — total customs weight in grams.
- **items** — one entry per product, each with `description`, `amount`, `item_value`, `classification` (HS code) and `country` of origin.

## Pickup
When `delivery_type` is pickup, the customer picks a location. Look up locations via the delivery-options endpoints (see the [Delivery options guide](./delivery-options.md)) and pass the chosen location in the `pickup` object (`location_code`, `retail_network_id`, address fields).

## Create a shipment
```
POST https://api.myparcel.nl/shipments
Content-Type: application/json;charset=utf-8
Authorization: bearer BASE64_ENCODED_API_KEY

{
  "data": {
    "shipments": [
      {
        "carrier": 1,
        "reference_identifier": "ORDER-2026-01042",
        "recipient": {
          "cc": "NL",
          "person": "J. de Vries",
          "street": "Hoofdstraat",
          "number": "42",
          "postal_code": "1012AB",
          "city": "Amsterdam"
        },
        "options": {
          "package_type": 1,
          "signature": 1
        },
        "physical_properties": { "weight": 1500 }
      }
    ]
  }
}
```

The response returns the new shipment `id`. See [`POST /shipments` in the reference](../api/myparcel.md) for the full schema.

::: tip Multi-collo
To ship several parcels to the same address on the same day as one shipment, add a `secondary_shipments` array. See the reference for the exact shape.
:::

## Labels
Retrieve labels with `GET /shipment_labels/{ids}` (semicolon-separate multiple IDs). The `Accept` header decides the format:

- `application/pdf` — the label as a PDF (default).
- `application/json` — a download link instead of binary.

Use `format` (`A4` or `A6`) and `positions` to control placement on the sheet. For large batches (25+ labels) request a link rather than inline binary — the file becomes available shortly after.

## Track & trace
Fetch tracking with `GET /tracktraces/{ids}`. The response contains the status history and delivery moments. Rather than polling this endpoint, subscribe to [webhooks](./webhooks.md) to be notified of status changes.

## Cancelling
Cancel a shipment with `DELETE /shipments/{ids}`. Only shipments that are still a **concept** can be cancelled; a successful cancel returns `204 No Content`. Once a shipment is registered or handed over, create a return instead.

## Returns
Create a return with `POST /return_shipments`. Returns can be **related** to an original shipment or **unrelated** (standalone), selected via the request media type (`application/vnd.return_shipment+json` or `application/vnd.unrelated_return_shipment+json`). See the [API reference](../api/myparcel.md).

## Shipment rates
`POST /shipments/rates` returns the price of a shipment before you create it. Use it to show shipping costs or to compare options. See the [API reference](../api/myparcel.md) for the request body.

## Capabilities
Carriers differ in what they support (package types, delivery types, options). Discover this dynamically instead of hard-coding it:

- `POST /shipments/capabilities` — the capabilities of a carrier for your platform.
- `POST /shipments/capabilities/contract-definitions` — the options tied to a specific contract.

Use capabilities to build a checkout or admin UI that only offers what the selected carrier actually supports.
