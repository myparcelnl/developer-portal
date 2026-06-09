---
title: Drop-off points
description: "Zoek afgeefpunten en afhaallocaties op via de API — waar jij pakketten aan de vervoerder afgeeft, en waar ontvangers ze ophalen."
---

## Overzicht
Er zijn twee verwante locatie-lookups:

- **Drop-off points** (`GET /drop_off_points`) — locaties waar jij, de afzender, pakketten aan een vervoerder afgeeft.
- **Pickup locations** (`GET /pickup_locations`) — locaties waar de ontvanger een pakket ophaalt (bij het pickup-[bezorgtype](./data-types.md#delivery_type)).

Beide geven locaties terug, geordend op afstand vanaf een postcode of coördinaten. In een checkout roep je deze meestal niet rechtstreeks aan — de [Delivery options-widget](./delivery-options.md) doet dat voor je. Roep ze zelf aan als je een eigen UI bouwt.

## Drop-off points
```
GET https://api.myparcel.nl/drop_off_points
```

Query-parameters:

- **postal_code** — verplicht, tenzij je op coördinaten zoekt.
- **cc** — landcode.
- **carrier_id** — filter op [vervoerder](./data-types.md#carrier).
- **distance** — zoekstraal in kilometers.
- **latitude** & **longitude** — samen te gebruiken als alternatief voor `postal_code`.

Stuur een `User-Agent`-header die je integratie identificeert (zie [Requests](./requests.md)).

De response is een array van locaties, elk met `location_code`, `location_name`, adresvelden, `latitude`/`longitude`, `distance` (in meters), `available_days`, `cut_off_time`, `carrier_id` en `opening_hours`. Zie de [API-referentie](../../api/myparcel.md) voor het volledige schema.

## Pickup locations
```
GET https://api.myparcel.nl/pickup_locations
```

Geeft locaties terug waar de ontvanger zijn pakket kan ophalen. Gebruik dit als je het pickup-bezorgtype buiten de widget aanbiedt. Geef de gekozen locatie mee in het `pickup`-object van de zending — zie [Zendingen · Pickup](./shipments.md#pickup).

## In de checkout
Gebruik je de [Delivery options-widget](./delivery-options.md), dan zijn de afhaallocatie-lookup en de lijst-/kaartweergave ingebouwd — je frontend ontvangt de gekozen `pickupLocation` in het selectie-event. Gebruik deze endpoints alleen rechtstreeks voor maatwerk-integraties.
