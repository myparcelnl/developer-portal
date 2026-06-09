---
title: Aan de slag met MyParcel
description: "Begin binnen enkele minuten met verzenden vanuit je platform. Maak een account aan, haal een API-token op en stuur je eerste zending met één HTTP-call."
---

## Overzicht
MyParcel biedt één HTTP API op [`api.myparcel.nl`](../../api/myparcel.md). Die dekt authenticatie, zendingen, orders, vervoerders, delivery options en webhooks.

De referentie wordt hier automatisch gegenereerd uit de OpenAPI-spec — die loopt dus nooit uit de pas met het live platform.

## Stap 1 · Je API key ophalen
Na aanmelden genereer je een **API key** in de MyParcel-backoffice, onder de integratie-instellingen van je shop.

Houd de key op je server. Stuur hem nooit naar de browser.

## Stap 2 · Authenticeren
Codeer je API key in base64 en stuur hem mee in de `Authorization`-header bij elk verzoek. Zie [Authenticatie](authentication.md) voor details.

```
// codeer je API key in base64
echo -n 'your-api-key' | base64

// stuur hem mee bij elk verzoek
Authorization: bearer BASE64_ENCODED_API_KEY
```

## Stap 3 · Maak je eerste zending
Met de header op zijn plaats roep je de Shipment API aan om een zending te maken. Labels en tracking-URL's krijg je direct terug.

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

## Volgende stappen
Pak het pad dat bij jouw integratie past:

- [Authenticatie in detail](authentication.md) — API keys en de Authorization-header.
- [Delivery options](delivery-options.md) — afhaalpunten, avondbezorging, handtekening.
- [Webhooks](webhooks.md) — krijg een melding zodra een zending is overgedragen of bezorgd.
- [PHP SDK](php-sdk.md) / [JavaScript SDK](javascript-sdk.md) — sla de raw HTTP over en gebruik onze libraries.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) of een andere e-commerce-plugin — installeren, instellen, klaar.
