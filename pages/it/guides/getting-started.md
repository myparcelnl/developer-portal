---
title: Per iniziare con MyParcel
description: "Inizia a spedire dalla tua piattaforma in pochi minuti. Crea un account, ottieni un token API e invia la tua prima spedizione con una sola chiamata HTTP."
---

## Panoramica
MyParcel espone una singola API HTTP su [`api.myparcel.nl`](../api/myparcel.md). Copre autenticazione, spedizioni, ordini, vettori, opzioni di consegna e webhook.

Il riferimento qui è auto-documentato dalla specifica OpenAPI — quindi non si discosta mai dalla piattaforma in produzione.

## Passo 1 · Ottieni le credenziali
Dopo la registrazione, genera un `client_id` e un `client_secret` nel backoffice MyParcel sotto **Impostazioni → Accesso API**.

Mantieni il secret sul tuo server. Non inviarlo mai al browser.

## Passo 2 · Scambialo per un token
Scambia le tue credenziali per un bearer token. Il token è valido per 1 ora.

```
// POST https://api.myparcel.nl/oauth/token
{
  "grant_type": "client_credentials",
  "client_id": "mp_client_AB12CD34",
  "client_secret": "…",
  "scope": "shipments.read shipments.write"
}
```

## Passo 3 · Crea la tua prima spedizione
Con il token in mano, chiama l'API MyParcel per creare una spedizione. Etichette e URL di tracking vengono restituiti immediatamente.

```
// POST https://api.myparcel.nl/shipments
// Authorization: bearer …
{
  "carrier": "postnl",
  "recipient": {
    "name": "J. de Vries",
    "street": "Antwoordnummer 42",
    "postal_code": "1012AB",
    "city": "Amsterdam",
    "country": "NL"
  },
  "options": {
    "package_type": "package",
    "signature": true
  }
}
```

## Prossimi passi
Scegli il percorso che corrisponde alla tua integrazione:

- [Autenticazione approfondita](authentication.md) — scope, refresh token, revoca.
- [Opzioni di consegna](delivery-options.md) — pickup point, consegna serale, firma.
- [Webhook](webhooks.md) — ricevi notifiche quando una spedizione viene consegnata al carrier o recapitata.
- [PHP SDK](php-sdk.md) / [JavaScript SDK](javascript-sdk.md) — salta l'HTTP grezzo e usa le nostre librerie.
- [WooCommerce](../platforms/woocommerce.md), [Shopify](../platforms/coming-soon.md?p=Shopify) o un altro plugin e-commerce — installa, configura, fatto.
