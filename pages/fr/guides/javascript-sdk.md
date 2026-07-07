---
title: JavaScript SDK
description: "Client TypeScript entièrement typé, basé sur les promesses. Fonctionne avec Node.js 18+ et les frameworks rendus côté serveur (Next.js, Nuxt, Remix, SvelteKit)."
---

## Installation
```
npm install @myparcelnl/sdk
pnpm add @myparcelnl/sdk
yarn add @myparcelnl/sdk
```

## Utilisation
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
Les types TypeScript complets sont générés à partir de la spécification OpenAPI au moment du build, la même source de vérité que cette documentation.

## Source
[github.com/myparcelnl/js-sdk ↗](https://github.com/myparcelnl/js-sdk)
