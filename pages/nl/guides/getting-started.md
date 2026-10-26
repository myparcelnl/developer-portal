---
title: Aan de slag met MyParcel
description: "Begin binnen enkele minuten met verzenden vanuit je platform. Maak een account aan, kopieer je API-key en stuur je eerste zending met één HTTP-call."
---

## Overzicht
MyParcel biedt één HTTP API op [`api.myparcel.nl`](../../api/myparcel.md). Die dekt authenticatie, zendingen, orders, vervoerders, delivery options en webhooks.

De API-referentie op deze portal wordt gegenereerd uit de gepubliceerde OpenAPI-specs.

## Stap 1 · Je API-key ophalen
Open na aanmelden **Shopinstellingen → Integratie** in de [MyParcel-backoffice](https://backoffice.myparcel.nl) en kopieer de API-key.

Houd de key op je server. Stuur hem nooit naar de browser.

## Stap 2 · Je requests authenticeren
Codeer de key in base64 en stuur hem in de `Authorization`-header van elke request:

```
Authorization: bearer <base64-gecodeerde API-key>
```

Zie [Authenticatie](authentication.md) voor voorbeelden in shell en PHP.

## Stap 3 · Maak je eerste zending
Met de header op zijn plek roep je de Shipment API aan om een zending te maken. Labels en tracking-URL's krijg je direct terug.

```
// POST https://api.myparcel.nl/shipments
// Authorization: bearer <base64-gecodeerde API-key>
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

## Volgende stappen
Pak het pad dat bij jouw integratie past:

- [Authenticatie](authentication.md): de key meesturen, en wat een `401` betekent.
- [Delivery options](../../platforms/delivery-options.md: afhaalpunten, avondbezorging, handtekening.
- [Webhooks](webhooks.md: krijg een melding zodra een zending is overgedragen of bezorgd.
- [PHP SDK](../../guides/php-sdk-v12.md) / [JavaScript SDK](javascript-sdk.md: sla de raw HTTP over en gebruik onze libraries.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) of een andere e-commerce-plugin: installeren, instellen, klaar.
