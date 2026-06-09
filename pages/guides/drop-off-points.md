---
title: Drop-off points
description: "Look up drop-off points and pickup locations via the API — where you hand parcels to the carrier, and where recipients collect them."
---

## Overview
There are two related location lookups:

- **Drop-off points** (`GET /drop_off_points`) — locations where you, the sender, hand parcels to a carrier.
- **Pickup locations** (`GET /pickup_locations`) — locations where the recipient collects a parcel (used with the pickup [delivery type](./data-types.md#delivery_type)).

Both return locations ordered by distance from a postal code or a set of coordinates. In a checkout you normally don't call these directly — the [Delivery options widget](./delivery-options.md) does it for you. Call them yourself when you build a custom UI.

## Drop-off points
```
GET https://api.myparcel.nl/drop_off_points
```

Query parameters:

- **postal_code** — required, unless you search by coordinates.
- **cc** — country code.
- **carrier_id** — filter by [carrier](./data-types.md#carrier).
- **distance** — search radius in kilometres.
- **latitude** & **longitude** — use together as an alternative to `postal_code`.

Send a `User-Agent` header that identifies your integration (see [Requests](./requests.md)).

The response is an array of locations, each with `location_code`, `location_name`, address fields, `latitude`/`longitude`, `distance` (in metres), `available_days`, `cut_off_time`, `carrier_id` and `opening_hours`. See the [API reference](../api/myparcel.md) for the full schema.

## Pickup locations
```
GET https://api.myparcel.nl/pickup_locations
```

Returns locations where the recipient can collect their parcel. Use it when you offer the pickup delivery type outside the widget. Pass the chosen location into the shipment's `pickup` object — see [Shipments · Pickup](./shipments.md#pickup).

## In the checkout
If you use the [Delivery options widget](./delivery-options.md), the pickup-location lookup and the list/map UI are built in — your frontend receives the chosen `pickupLocation` in the selection event. Use these endpoints directly only for custom integrations.
