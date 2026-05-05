---
title: Shipments
description: "A shipment represents one parcel travelling from your sender address to a recipient. Creating a shipment also generates the label and tracking URL."
---

## Lifecycle
A shipment moves through these statuses:

- `pending` — created, label not yet printed.
- `printed` — label generated and ready to be handed over.
- `handed_over` — scanned into the carrier network.
- `delivered` — received by the recipient or a pickup point.
- `returned` — returned to sender.

## Create a shipment
Send a POST to `/shipments` with a carrier, recipient and options.

```
POST /shipments
{
  "carrier": "postnl",
  "reference": "ORDER-2026-01042",
  "recipient": {
    "name": "J. de Vries",
    "street": "Antwoordnummer 42",
    "postal_code": "1012AB",
    "city": "Amsterdam",
    "country": "NL"
  },
  "options": {
    "package_type": "package",
    "signature": true
  }
}
```

## Labels
Every created shipment exposes a `label_url` pointing to a PDF. Labels are A6 by default and can be batched into A4 sheets via `/labels/print`.

## Cancelling
Shipments can be cancelled while they are `pending` or `printed`. Once `handed_over`, cancellation is no longer possible — issue a return instead.

[See `DELETE /shipments/{id}` →](../api/myparcel.md#cancel-shipment)
