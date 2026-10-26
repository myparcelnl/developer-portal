---
title: Shipments
description: "A shipment represents one parcel travelling from your sender address to a recipient. You create it with one request, then fetch its label as a PDF."
---

## Lifecycle
Every shipment has a numeric `status`. The main groups are:

- `1` pending, concept: created, no label yet.
- `2` pending, registered: the label has been created.
- `3` to `6` en route: handed to the carrier, sorting, distribution, customs.
- `7` to `11` delivered: at the recipient, ready for pickup, picked up, or the return equivalents.
- `12` and `14` printed: a letter or digital stamp.
- `30` to `38` inactive: the same stages for shipments that are no longer active.

Subscribe to the `shipment_status_change` [webhook](webhooks.md) to hear about changes instead of polling.

## Create a shipment
Send a POST to `/shipments` with the vendor content type. The body wraps an array of shipments in a `data` object, so you can create several in one call.

```
POST https://api.myparcel.nl/shipments
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
Authorization: bearer <base64-encoded API key>

{
  "data": {
    "shipments": [
      {
        "carrier": 1,
        "reference_identifier": "ORDER-2026-01042",
        "recipient": {
          "cc": "NL",
          "person": "J. de Vries",
          "street": "Antareslaan",
          "number": "31",
          "postal_code": "2132JE",
          "city": "Hoofddorp"
        },
        "options": {
          "package_type": 1,
          "signature": 1
        }
      }
    ]
  }
}
```

`carrier`, `recipient` and `options.package_type` are required. Carriers and package types are numeric IDs, and options such as `signature` take `0` or `1`. See [Data types](data-types.md).

The response lists the new shipment IDs, in the order you sent them:

```
{
  "data": {
    "ids": [
      { "id": 123456, "reference_identifier": "ORDER-2026-01042" }
    ]
  }
}
```

## Labels
Fetch labels with `GET /shipment_labels/{ids}`. Separate several IDs with `;` to get them in one PDF. The `format` parameter picks `A4` or `A6`, and on A4 `positions` sets where the first labels go (`1` to `4`).

For large batches, request the label asynchronously with `Accept: application/vnd.shipment_label_link+json`. You get a link that returns the PDF once it is ready, or you can listen for the `shipment_label_created` [webhook](webhooks.md).

[See `GET /shipment_labels/{ids}` →](../api/myparcel.md#get-shipment-labels-idss)

## Deleting
You can delete a shipment only while it is a concept, before a label is created. Deleting is rarely needed: shipments that are never handed to the carrier are not billed.

[See `DELETE /shipments/{ids}` →](../api/myparcel.md#delete-shipments-idss)
