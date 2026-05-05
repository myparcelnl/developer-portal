---
title: Delivery options
description: "Let customers pick exactly how their parcel should arrive — home, pickup point, evening, signed-for — at checkout. The delivery-options widget returns a selection you pass straight into /shipments."
---

## Widget
Drop the MyParcel delivery-options widget into your checkout. It calls the API, fetches the valid options for the postal code, and returns the customer's choice.

```
<script src="https://widget.myparcel.nl/v1/delivery-options.js"></script>
<div id="mp-delivery-options" data-postal-code="1012AB" data-country="NL"></div>
```

## Available options
- `delivery_type` — standard, morning, evening, pickup.
- `package_type` — package, mailbox (brievenbuspost), letter, digital_stamp.
- `signature` — require the recipient to sign on delivery.
- `only_recipient` — deliver only to the addressee, not to neighbours.
- `insurance` — amount in cents; caps differ per carrier.
- `age_check` — verify recipient is 18+ on delivery.

## Pickup points
When `delivery_type` is `pickup`, the selection contains the pickup location. Pass it through to `/shipments` and MyParcel will route the parcel accordingly.

::: tip
Not every option is available for every carrier. The widget hides unsupported combinations automatically.
:::
