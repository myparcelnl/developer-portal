---
title: Per iniziare con MyParcel
description: "Inizia a spedire dalla tua piattaforma in pochi minuti. Crea un account, ottieni un token API e invia la tua prima spedizione con una sola chiamata HTTP."
---

## Panoramica
MyParcel espone una singola API HTTP su [`api.myparcel.nl`](../../api/myparcel.md). Copre autenticazione, spedizioni, ordini, vettori, opzioni di consegna e webhook.

Il riferimento qui è auto-documentato dalla specifica OpenAPI — quindi non si discosta mai dalla piattaforma in produzione.

## Passo 1 · Ottieni la tua API key
Dopo la registrazione, genera una **API key** nel Backoffice MyParcel, nelle impostazioni di integrazione del tuo negozio.

Mantieni la key sul tuo server. Non inviarla mai al browser.

## Passo 2 · Autenticati
Codifica la tua API key in base64 e inviala nell'header `Authorization` ad ogni richiesta. Vedi [Autenticazione](authentication.md) per i dettagli.

```
// codifica la tua API key in base64
echo -n 'your-api-key' | base64

// poi inviala ad ogni richiesta
Authorization: bearer BASE64_ENCODED_API_KEY
```

## Passo 3 · Crea la tua prima spedizione
Con l'header al suo posto, chiama l'API MyParcel per creare una spedizione. Etichette e URL di tracking vengono restituiti immediatamente.

```
// POST https://api.myparcel.nl/shipments
// Authorization: bearer BASE64_ENCODED_API_KEY
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

- [Autenticazione approfondita](authentication.md) — API key e l'header Authorization.
- [Opzioni di consegna](delivery-options.md) — pickup point, consegna serale, firma.
- [Webhook](webhooks.md) — ricevi notifiche quando una spedizione viene consegnata al carrier o recapitata.
- [PHP SDK](php-sdk.md) / [JavaScript SDK](javascript-sdk.md) — salta l'HTTP grezzo e usa le nostre librerie.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) o un altro plugin e-commerce — installa, configura, fatto.
