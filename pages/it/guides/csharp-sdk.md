---
title: SDK C#/.NET
description: "Wrapper C#/.NET della community per l'API MyParcel: installa da NuGet, crea un client con la tua API key e lavora con spedizioni, etichette, track & trace e webhook."
---

::: warning SDK della community
Questa è una libreria **mantenuta dalla community** — [janssenr/MyParcelApi.Net](https://github.com/janssenr/MyParcelApi.Net) — non una SDK ufficiale MyParcel. Potrebbe essere indietro rispetto all'API attuale. Controlla il [riferimento API](../../api/myparcel.md) e il repository prima di usarla in produzione.
:::

## Installazione
Installa il pacchetto NuGet [`MyParcelApi`](https://www.nuget.org/packages/MyParcelApi):

```
Install-Package MyParcelApi
```

## Creare un client
```csharp
var client = new MyParcelApiClient("YOUR_API_KEY");
```

Ottieni una API key dal tuo Backoffice MyParcel — vedi [Autenticazione](./authentication.md).

## Creare una spedizione
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

## Cosa copre
- **Spedizioni** — `AddShipment`, `GetShipment`, `DeleteShipment` (solo bozza).
- **Resi** — `AddReturnShipment`, `AddUnrelatedReturnShipment`, `GenerateUnrelatedReturnShipment`.
- **Etichette** — `GetShipmentLabel`, `GetShipmentLabelDownloadLink` (formato `A4`/`A6`, posizioni).
- **Track & trace** — `TrackShipment`.
- **Delivery options** — `GetDeliveryOptions`.
- **Webhook** — `AddSubscription`, `GetSubscription`, `DeleteSubscription`.

## Note
- La libreria è un wrapper sulla stessa API MyParcel del [riferimento](../../api/myparcel.md). Concetti come [vettori](./data-types.md#carrier), tipi di pacco e webhook corrispondono 1-a-1 con le guide [Spedizioni](./shipments.md) e [Webhook](./webhooks.md).
- Per problemi o contributi, usa il [repository GitHub](https://github.com/janssenr/MyParcelApi.Net).
