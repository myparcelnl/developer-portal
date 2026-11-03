---
title: Aan de slag met MyParcel
description: "Begin binnen enkele minuten met verzenden vanuit je platform. Maak een account aan, kopieer je API-key en stuur je eerste zending met één HTTP-call."
---

## Overzicht
De Shipment API op [`api.myparcel.nl`](../../api/myparcel.md) dekt zendingen, labels, delivery options, track & trace en webhooks. Orders, adressen en printen hebben [eigen API's](requests.md#base-url).

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
Met de header op zijn plek roep je de Shipment API aan om een zending te maken. De response bevat het ID van de nieuwe zending, waarmee je het label ophaalt.

```
// POST https://api.myparcel.nl/shipments
// Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
// Authorization: bearer <base64-gecodeerde API-key>
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

Download daarna het label als PDF met `GET /shipment_labels/{id}`. Zie [Zendingen](shipments.md) voor de response en de labelopties.

## Volgende stappen
Pak het pad dat bij jouw integratie past:

- [Authenticatie](authentication.md): de key meesturen, en wat een `401` betekent.
- [Delivery options](../../platforms/delivery-options.md): afhaalpunten, avondbezorging, handtekening.
- [Webhooks](webhooks.md): krijg een melding zodra een zending van status verandert of een label klaar is.
- [PHP SDK](../../guides/php-sdk-v12.md) / [JavaScript SDK](javascript-sdk.md): sla de raw HTTP over en gebruik onze libraries.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) of een andere e-commerce-plugin: installeren, instellen, klaar.
