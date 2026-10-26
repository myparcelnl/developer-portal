---
title: JavaScript SDK
description: "Promise-based TypeScript client for Node.js and the browser. You create an SDK instance with only the endpoints you need, and send your API key as a header."
---

## Install
```
npm install @myparcel-dev/sdk
pnpm add @myparcel-dev/sdk
yarn add @myparcel-dev/sdk
```

## Usage
Create an SDK with a client and the endpoints you want to call. Private endpoints, such as creating shipments, require an `Authorization` header with your base64-encoded API key, so use them on your server only.

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

The SDK wraps the body in the API's `data.shipments` envelope and sets the vendor `Content-Type` for you. `carrier: 1` is PostNL and `package_type: 1` is a parcel, see [Data types](data-types.md).

## Public endpoints
Endpoints that need no API key, such as delivery options, pickup locations and carriers, are safe to call from a browser. Use `createPublicSdk` for those:

```
import { createPublicSdk, FetchClient, GetCarriers } from '@myparcel-dev/sdk';

const sdk = createPublicSdk(new FetchClient(), [new GetCarriers()]);

const carriers = await sdk.getCarriers();
```

## Types
The package ships its own TypeScript types for every endpoint's parameters and response. Carrier, package type and delivery type IDs are available as constants in `@myparcel-dev/constants`, for example `CarrierId.PostNl` and `PackageTypeId.Package`.

## Source
[github.com/myparcelnl/js-sdk ↗](https://github.com/myparcelnl/js-sdk)
