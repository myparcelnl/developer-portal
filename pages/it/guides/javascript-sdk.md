---
title: JavaScript SDK
description: "Client TypeScript basato su Promise per Node.js e il browser. Crei un'istanza dell'SDK con solo gli endpoint che ti servono e invii la tua API key come header."
---

## Installazione
```
npm install @myparcel-dev/sdk
pnpm add @myparcel-dev/sdk
yarn add @myparcel-dev/sdk
```

## Utilizzo
Crea un SDK con un client e gli endpoint che vuoi chiamare. Gli endpoint privati, come la creazione di spedizioni, richiedono un header `Authorization` con la tua API key codificata in base64, quindi usali solo sul tuo server.

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

L'SDK racchiude il body nell'envelope `data.shipments` dell'API e imposta per te il `Content-Type` vendor. `carrier: 1` è PostNL e `package_type: 1` è un pacco, vedi [Tipi di dato](data-types.md).

## Endpoint pubblici
Gli endpoint che non richiedono una API key, come opzioni di consegna, punti di ritiro e vettori, si possono chiamare in sicurezza da un browser. Per questi usa `createPublicSdk`:

```
import { createPublicSdk, FetchClient, GetCarriers } from '@myparcel-dev/sdk';

const sdk = createPublicSdk(new FetchClient(), [new GetCarriers()]);

const carriers = await sdk.getCarriers();
```

## Tipi
Il package include i propri tipi TypeScript per i parametri e la risposta di ogni endpoint. Gli ID di vettori, tipi di pacco e tipi di consegna sono disponibili come costanti in `@myparcel-dev/constants`, ad esempio `CarrierId.PostNl` e `PackageTypeId.Package`.

## Sorgente
[github.com/myparcelnl/js-sdk ↗](https://github.com/myparcelnl/js-sdk)
