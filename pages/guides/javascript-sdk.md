---
title: JavaScript SDK
description: "Promise-based, fully typed TypeScript client. Works in Node.js 18+ and in server-rendered frameworks (Next.js, Nuxt, Remix, SvelteKit)."
---

## Install
```
npm install @myparcelnl/sdk
pnpm add @myparcelnl/sdk
yarn add @myparcelnl/sdk
```

## Usage
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
Full TypeScript types are generated from the OpenAPI spec at build time — same source of truth as this documentation.

## Source
[github.com/myparcelnl/js-sdk ↗](https://github.com/myparcelnl/js-sdk)
