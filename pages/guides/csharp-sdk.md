---
title: C#/.NET SDK
description: "Community C#/.NET wrapper for the MyParcel API: install from NuGet, create a client with your API key and work with shipments, labels, track & trace and webhooks."
---

::: warning Community SDK
This is a **community-maintained** library — [janssenr/MyParcelApi.Net](https://github.com/janssenr/MyParcelApi.Net) — not an official MyParcel SDK. It may lag behind the current API. Check the [API reference](../api/myparcel.md) and the repository before relying on it in production.
:::

## Install
Install the [`MyParcelApi`](https://www.nuget.org/packages/MyParcelApi) NuGet package:

```
Install-Package MyParcelApi
```

## Create a client
```csharp
var client = new MyParcelApiClient("YOUR_API_KEY");
```

Get an API key from your MyParcel Backoffice — see [Authentication](./authentication.md).

## Create a shipment
```csharp
var shipments = new[]
{
    new Shipment
    {
        Recipient = new Address
        {
            Country = "NL", City = "Hoofddorp", Street = "Siriusdreef",
            Number = "66", PostalCode = "2132WT", Person = "Mr. Parcel"
        },
        Options = new ShipmentOptions
        {
            PackageType = PackageType.Package, Signature = true
        },
        Carrier = Carrier.PostNl
    }
};

var ids = await client.AddShipment(shipments);
```

## What it covers
- **Shipments** — `AddShipment`, `GetShipment`, `DeleteShipment` (concept only).
- **Returns** — `AddReturnShipment`, `AddUnrelatedReturnShipment`, `GenerateUnrelatedReturnShipment`.
- **Labels** — `GetShipmentLabel`, `GetShipmentLabelDownloadLink` (format `A4`/`A6`, positions).
- **Track & trace** — `TrackShipment`.
- **Delivery options** — `GetDeliveryOptions`.
- **Webhooks** — `AddSubscription`, `GetSubscription`, `DeleteSubscription`.

## Notes
- The library wraps the same Shipment API documented in the [reference](../api/myparcel.md). Concepts like [carriers](./data-types.md#carrier), package types and webhooks map 1-to-1 with the [Shipments](./shipments.md) and [Webhooks](./webhooks.md) guides.
- For issues or contributions, use the [GitHub repository](https://github.com/janssenr/MyParcelApi.Net).
