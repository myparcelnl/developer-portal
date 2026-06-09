---
title: C#/.NET SDK
description: "Community C#/.NET-wrapper voor de MyParcel API: installeer via NuGet, maak een client met je API key en werk met zendingen, labels, track & trace en webhooks."
---

::: warning Community-SDK
Dit is een **community-onderhouden** library — [janssenr/MyParcelApi.Net](https://github.com/janssenr/MyParcelApi.Net) — geen officiële MyParcel-SDK. Hij kan achterlopen op de huidige API. Controleer de [API-referentie](../../api/myparcel.md) en de repository voordat je hierop bouwt in productie.
:::

## Installeren
Installeer het [`MyParcelApi`](https://www.nuget.org/packages/MyParcelApi)-NuGet-package:

```
Install-Package MyParcelApi
```

## Een client maken
```csharp
var client = new MyParcelApiClient("YOUR_API_KEY");
```

Een API key haal je uit je MyParcel-backoffice — zie [Authenticatie](./authentication.md).

## Een zending aanmaken
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

## Wat het dekt
- **Zendingen** — `AddShipment`, `GetShipment`, `DeleteShipment` (alleen concept).
- **Retouren** — `AddReturnShipment`, `AddUnrelatedReturnShipment`, `GenerateUnrelatedReturnShipment`.
- **Labels** — `GetShipmentLabel`, `GetShipmentLabelDownloadLink` (formaat `A4`/`A6`, posities).
- **Track & trace** — `TrackShipment`.
- **Delivery options** — `GetDeliveryOptions`.
- **Webhooks** — `AddSubscription`, `GetSubscription`, `DeleteSubscription`.

## Opmerkingen
- De library is een wrapper om dezelfde Shipment API uit de [referentie](../../api/myparcel.md). Concepten als [vervoerders](./data-types.md#carrier), pakkettypes en webhooks komen 1-op-1 overeen met de [Zendingen](./shipments.md)- en [Webhooks](./webhooks.md)-guides.
- Voor issues of bijdragen: gebruik de [GitHub-repository](https://github.com/janssenr/MyParcelApi.Net).
