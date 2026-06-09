---
title: Aan de slag met MyParcel
description: "Begin binnen enkele minuten met verzenden vanuit je platform. Maak een account aan, haal een API-token op en stuur je eerste zending met één HTTP-call."
---

## Overzicht
MyParcel biedt één HTTP API op [`api.myparcel.nl`](../../api/myparcel.md). Die dekt authenticatie, zendingen, orders, vervoerders, delivery options en webhooks.

De referentie wordt hier automatisch gegenereerd uit de OpenAPI-spec — die loopt dus nooit uit de pas met het live platform.

## Stap 1 · Credentials ophalen
Na aanmelden genereer je een `client_id` en `client_secret` in de MyParcel-backoffice onder **Instellingen → API-toegang**.

Houd het secret op je server. Stuur het nooit naar de browser.

## Stap 2 · Inwisselen voor een token
Wissel je credentials in voor een bearer token. De token is 1 uur geldig.

```
// POST https://api.myparcel.nl/oauth/token
{
  "grant_type": "client_credentials",
  "client_id": "mp_client_AB12CD34",
  "client_secret": "…",
  "scope": "shipments.read shipments.write"
}
```

## Stap 3 · Maak je eerste zending
Met de token in handen roep je de Shipment API aan om een zending te maken. Labels en tracking-URL's krijg je direct terug.

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

## Testomgeving
Test je integratie voordat je live gaat:

- **Delivery options-widget** — probeer elke configuratie in de [sandbox](https://myparcelnl.github.io/delivery-options/).
- **API** — gebruik een apart testaccount en de bijbehorende API key, zodat je kunt bouwen en testen zonder echte zendingen te raken. Vraag MyParcel om testtoegang als je nog geen testaccount hebt.

## Platforms
MyParcel draait meerdere platforms. Stel in je verzoeken het platform in waar je account bij hoort:

- `myparcel` — MyParcel (Nederland)
- `belgie` — SendMyParcel (België)

Er bestaat ook een numerieke platform-identifier (`1` MyParcel, `2` Flespakket, `3` SendMyParcel / België). Zie [Datatypes · platform](data-types.md#platform).

## Volgende stappen
Pak het pad dat bij jouw integratie past:

- [Authenticatie in detail](authentication.md) — scopes, refresh tokens, intrekken.
- [Delivery options](delivery-options.md) — afhaalpunten, avondbezorging, handtekening.
- [Webhooks](webhooks.md) — krijg een melding zodra een zending is overgedragen of bezorgd.
- [PHP SDK](php-sdk.md) / [JavaScript SDK](javascript-sdk.md) — sla de raw HTTP over en gebruik onze libraries.
- [WooCommerce](../platforms/woocommerce.md), [Magento 2](../platforms/magento2.md), [PrestaShop](../platforms/prestashop.md) of een andere e-commerce-plugin — installeren, instellen, klaar.
