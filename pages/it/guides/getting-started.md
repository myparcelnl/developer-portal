---
title: Per iniziare con MyParcel
description: "Inizia a spedire dalla tua piattaforma in pochi minuti. Crea un account, copia la tua API key e invia la tua prima spedizione con una sola chiamata HTTP."
---

## Panoramica
MyParcel espone una singola API HTTP su [`api.myparcel.nl`](../../api/myparcel.md). Copre autenticazione, spedizioni, ordini, vettori, opzioni di consegna e webhook.

Il riferimento API di questo portale è generato dalle specifiche OpenAPI pubblicate.

## Passo 1 · Ottieni la tua API key
Dopo la registrazione, apri **Impostazioni shop → Integrazione** nel [backoffice MyParcel](https://backoffice.myparcel.nl) e copia l'API key.

Mantieni la key sul tuo server. Non inviarla mai al browser.

## Passo 2 · Autentica le tue richieste
Codifica la key in base64 e inviala nell'header `Authorization` di ogni richiesta:

```
Authorization: bearer <API key codificata in base64>
```

Vedi [Autenticazione](authentication.md) per esempi in shell e PHP.

## Passo 3 · Crea la tua prima spedizione
Con l'header impostato, chiama l'API MyParcel per creare una spedizione. Etichette e URL di tracking vengono restituiti immediatamente.

```
// POST https://api.myparcel.nl/shipments
// Authorization: bearer <API key codificata in base64>
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

- [Autenticazione](authentication.md): come inviare la key e cosa significa un `401`.
- [Opzioni di consegna](../../platforms/delivery-options.md: pickup point, consegna serale, firma.
- [Webhook](webhooks.md: ricevi notifiche quando una spedizione viene consegnata al carrier o recapitata.
- [PHP SDK](../../guides/php-sdk-v12.md) / [JavaScript SDK](javascript-sdk.md: salta l'HTTP grezzo e usa le nostre librerie.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) o un altro plugin e-commerce: installa, configura, fatto.
