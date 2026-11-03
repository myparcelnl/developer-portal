---
title: JavaScript SDK
description: "Client TypeScript basé sur des Promises pour Node.js et le navigateur. Vous créez une instance du SDK avec uniquement les endpoints dont vous avez besoin, et envoyez votre clé API en en-tête."
---

## Installation
```
npm install @myparcel-dev/sdk
pnpm add @myparcel-dev/sdk
yarn add @myparcel-dev/sdk
```

## Utilisation
Créez un SDK avec un client et les endpoints que vous voulez appeler. Les endpoints privés, comme la création d'expéditions, exigent un en-tête `Authorization` avec votre clé API encodée en base64 : utilisez-les donc uniquement sur votre serveur.

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

Le SDK place le corps dans l'enveloppe `data.shipments` de l'API et définit pour vous le `Content-Type` vendor. `carrier: 1` correspond à PostNL et `package_type: 1` à un colis, voir [Types de données](data-types.md).

## Endpoints publics
Les endpoints qui ne nécessitent pas de clé API, comme les options de livraison, les points de retrait et les transporteurs, peuvent être appelés sans risque depuis un navigateur. Utilisez `createPublicSdk` pour ceux-ci :

```
import { createPublicSdk, FetchClient, GetCarriers } from '@myparcel-dev/sdk';

const sdk = createPublicSdk(new FetchClient(), [new GetCarriers()]);

const carriers = await sdk.getCarriers();
```

## Types
Le package fournit ses propres types TypeScript pour les paramètres et la réponse de chaque endpoint. Les ID des transporteurs, des types de colis et des types de livraison sont disponibles sous forme de constantes dans `@myparcel-dev/constants`, par exemple `CarrierId.PostNl` et `PackageTypeId.Package`.

## Source
[github.com/myparcelnl/js-sdk ↗](https://github.com/myparcelnl/js-sdk)
