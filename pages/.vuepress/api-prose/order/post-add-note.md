## When to use this endpoint

`POST /add-note` attaches a free-form text note to one or more orders. Typical
flows where this is useful:

- **Warehouse hand-off**: the picker leaves a note like *"customer requested
  extra fragile packaging"* that the packer sees on the order detail page.
- **Customer-service trail**: an inbound call about a delayed shipment leaves
  a note on the order so the next agent has context without reading the
  ticketing system.
- **Operational audit**: any non-status change (carrier swap, manual hold)
  can be left as a note for the next person who opens the order.

Notes are **append-only and immutable** — there is no `PATCH /notes/{id}`.
Use `POST /edit-note` to replace a note's text by id.

## Preconditions

- The order must be in `status=OPEN`. Once it transitions to `SHIPPED` or
  `CANCELLED`, the API responds with `400 Invalid request syntax`.
- Each order can hold up to **100 notes**. The 101st call for the same order
  rejects with the same `400` regardless of the note size.

## Batching

You can send up to 50 notes in one request — each item in the array is
processed independently. The response array preserves request order, so a
mixed success/failure response looks like:

```
[
  { "status": 200, "ids": ["..."] },
  { "status": 400, "title": "Order is no longer OPEN" }
]
```

Treat the response as a per-item result, **not** as an all-or-nothing
transaction.
