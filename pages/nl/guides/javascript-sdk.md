---
title: JavaScript SDK
description: "Promise-based TypeScript-client voor Node.js en de browser. Je maakt een SDK-instantie met alleen de endpoints die je nodig hebt, en stuurt je API-key mee als header."
---

## Installeren
```
npm install @myparcel-dev/sdk
pnpm add @myparcel-dev/sdk
yarn add @myparcel-dev/sdk
```

## Gebruik
Maak een SDK met een client en de endpoints die je wilt aanroepen. Private endpoints, zoals het aanmaken van zendingen, vereisen een `Authorization`-header met je base64-gecodeerde API-key. Gebruik ze dus alleen op je server.

```
import { createPrivateSdk, FetchClient, PostShipments } from '@myparcel-dev/sdk';

const sdk = createPrivateSdk(
  new FetchClient({
    headers: {
      Authorization: 'bearer ' + Buffer.from(process.env.MYPARCEL_API_KEY).toString('base64'),
    },
  }),
  [new PostShipments()],
);

const ids = await sdk.postShipments({
  body: [
    {
      carrier: 1,
      options: {
        package_type: 1,
      },
      recipient: {
        cc: 'NL',
        person: 'J. de Vries',
        street: 'Antareslaan',
        number: '31',
        postal_code: '2132JE',
        city: 'Hoofddorp',
      },
    },
  ],
});

console.log(ids); // [{ id: 123456, reference_identifier: '' }]
```

De SDK verpakt de body in de `data.shipments`-envelope van de API en zet de vendor-`Content-Type` voor je. `carrier: 1` is PostNL en `package_type: 1` is een pakket, zie [Datatypes](data-types.md).

## Publieke endpoints
Endpoints waarvoor geen API-key nodig is, zoals delivery options, afhaallocaties en vervoerders, kun je veilig vanuit de browser aanroepen. Gebruik daarvoor `createPublicSdk`:

```
import { createPublicSdk, FetchClient, GetCarriers } from '@myparcel-dev/sdk';

const sdk = createPublicSdk(new FetchClient(), [new GetCarriers()]);

const carriers = await sdk.getCarriers();
```

## Types
Het package levert eigen TypeScript-types voor de parameters en de response van elk endpoint. ID's van vervoerders, pakkettypes en bezorgtypes zijn als constanten beschikbaar in `@myparcel-dev/constants`, bijvoorbeeld `CarrierId.PostNl` en `PackageTypeId.Package`.

## Bron
[github.com/myparcelnl/js-sdk ↗](https://github.com/myparcelnl/js-sdk)
