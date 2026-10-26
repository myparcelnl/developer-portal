---
title: Authenticatie
description: "Elke request naar de MyParcel API authenticeer je met de API-key van je shop, base64-gecodeerd, in de Authorization-header."
---

## Je API-key ophalen
Log in op [backoffice.myparcel.nl](https://backoffice.myparcel.nl) en open **Shopinstellingen → Integratie**. Kopieer de API-key, of genereer er een als die er nog niet is.

Houd de key op je server. Wie hem heeft, kan namens je shop zendingen aanmaken en gegevens lezen, dus stuur hem nooit naar een browser en commit hem nooit in een repository.

## Meesturen met elke request
Codeer de key in base64 en stuur hem in de `Authorization`-header met het `bearer`-schema:

```
GET https://api.myparcel.nl/shipments
Accept: application/json;charset=utf-8
Authorization: bearer <base64-gecodeerde API-key>
```

Gebruik in een shell `printf` in plaats van `echo`, zodat er geen newline in de gecodeerde key belandt:

```
curl https://api.myparcel.nl/shipments \
  -H "Accept: application/json;charset=utf-8" \
  -H "Authorization: bearer $(printf '%s' "$MYPARCEL_API_KEY" | base64)"
```

In PHP:

```php
$headers = [
    'Authorization' => 'bearer ' . base64_encode($apiKey),
];
```

De [PHP SDK v10](php-sdk.md) stuurt dezelfde gecodeerde key mee met het `basic`-schema. De voorbeelden in deze documentatie gebruiken `bearer`, net als de huidige MyParcel-plugins.

## Als een request wordt geweigerd
Een `401 Unauthorized` betekent dat de key ontbreekt, niet in base64 is gecodeerd of niet meer geldig is. Controleer dat je de key zelf codeert, zonder spaties of afsluitende newline. Is de key in de backoffice vervangen, kopieer dan de nieuwe.

## Met een SDK
De [PHP SDK v12](../../guides/php-sdk-v12.md) neemt de API-key als constructor-argument, of leest hem uit de omgevingsvariabele `API_KEY`, en bouwt de header voor je.

Publiceer je een integratie die andere merchants installeren? Gebruik dan [MyParcel Connect](../../guides/php-sdk-v12.md#myparcel-connect), zodat de merchant zijn shop zelf autoriseert en jij nooit zijn API-key in handen krijgt.
