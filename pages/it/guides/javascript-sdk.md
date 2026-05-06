---
title: JavaScript SDK
description: "Client TypeScript completamente tipizzato e basato su Promise. Funziona in Node.js 18+ e in framework con server-side rendering (Next.js, Nuxt, Remix, SvelteKit)."
---

## Installazione
```
npm install @myparcelnl/sdk
pnpm add @myparcelnl/sdk
yarn add @myparcelnl/sdk
```

## Utilizzo
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

## Tipi
I tipi TypeScript completi sono generati dalla specifica OpenAPI a build time — la stessa fonte di verità di questa documentazione.

## Sorgente
[github.com/myparcelnl/js-sdk ↗](https://github.com/myparcelnl/js-sdk)
