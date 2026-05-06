---
title: JavaScript SDK
description: "Promise-based, volledig getypeerde TypeScript-client. Werkt in Node.js 18+ en in server-rendered frameworks (Next.js, Nuxt, Remix, SvelteKit)."
---

## Installeren
```
npm install @myparcelnl/sdk
pnpm add @myparcelnl/sdk
yarn add @myparcelnl/sdk
```

## Gebruik
```
import { MyParcel } from '@myparcelnl/sdk';

const mp = new MyParcel({
  clientId:     process.env.MP_CLIENT_ID,
  clientSecret: process.env.MP_CLIENT_SECRET,
  scopes:       ['shipments.read', 'shipments.write'],
});

const shipment = await mp.shipments.create({
  carrier: 'postnl',
  recipient: {
    name:        'J. de Vries',
    street:      'Antwoordnummer 42',
    postalCode:  '1012AB',
    city:        'Amsterdam',
    country:     'NL',
  },
});

console.log(shipment.labelUrl);
```

## Types
Volledige TypeScript-types worden bij build-time gegenereerd uit de OpenAPI-spec — dezelfde source of truth als deze documentatie.

## Bron
[github.com/myparcelnl/js-sdk ↗](https://github.com/myparcelnl/js-sdk)
