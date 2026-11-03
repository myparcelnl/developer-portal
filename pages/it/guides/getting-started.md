---
title: Per iniziare con MyParcel
description: "Inizia a spedire dalla tua piattaforma in pochi minuti. Crea un account, copia la tua API key e invia la tua prima spedizione con una sola chiamata HTTP."
---

## Panoramica
La Shipment API su [`api.myparcel.nl`](../../api/myparcel.md) copre spedizioni, etichette, opzioni di consegna, track & trace e webhook. Ordini, indirizzi e stampa hanno [API proprie](requests.md#base-url).

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
Con l'header impostato, chiama la Shipment API per creare una spedizione. La risposta contiene l'ID della nuova spedizione, che usi per scaricare l'etichetta.

```
// POST https://api.myparcel.nl/shipments
// Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
// Authorization: bearer <API key codificata in base64>
{
  "data": {
    "shipments": [
      {
        "carrier": 1,
        "recipient": {
          "cc": "NL",
          "person": "J. de Vries",
          "street": "Antareslaan",
          "number": "31",
          "postal_code": "2132JE",
          "city": "Hoofddorp"
        },
        "options": {
          "package_type": 1,
          "signature": 1
        }
      }
    ]
  }
}
```

Poi scarica l'etichetta in PDF con `GET /shipment_labels/{id}`. Vedi [Spedizioni](shipments.md) per la risposta e le opzioni dell'etichetta.

## Prossimi passi
Scegli il percorso che corrisponde alla tua integrazione:

- [Autenticazione](authentication.md): come inviare la key e cosa significa un `401`.
- [Opzioni di consegna](../../platforms/delivery-options.md): pickup point, consegna serale, firma.
- [Webhook](webhooks.md): ricevi notifiche quando una spedizione cambia stato o un'etichetta è pronta.
- [PHP SDK](../../guides/php-sdk-v12.md) / [JavaScript SDK](javascript-sdk.md): salta l'HTTP grezzo e usa le nostre librerie.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) o un altro plugin e-commerce: installa, configura, fatto.
