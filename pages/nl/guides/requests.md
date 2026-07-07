---
title: Requests
description: "Hoe je de MyParcel API aanroept: base-URL, HTTP-methodes, headers, de User-Agent-conventie en content-types. De OpenAPI-referentie blijft de bron van waarheid per endpoint."
---

## Overzicht
De MyParcel-API's zijn REST-gebaseerd en spreken JSON over HTTPS. Je maakt en leest objecten met standaard HTTP-methodes, en elk endpoint staat in de automatisch gegenereerde [API-referentie](../../api/myparcel.md) — die referentie is altijd de bron van waarheid voor paden, parameters en schema's.

## Base-URL
De Shipment API draait op `https://api.myparcel.nl`. De andere MyParcel-API's hebben elk hun eigen host:

| API | Base-URL |
| --- | --- |
| Shipment | `https://api.myparcel.nl` |
| Order | `https://order.api.myparcel.nl` |
| Rule | `https://rule.api.myparcel.nl` |
| Address | `https://address.api.myparcel.nl` |
| Printing | `https://printing.api.myparcel.nl` |
| Product | `https://product.api.myparcel.nl` |

Al het verkeer loopt over HTTPS. Gewone HTTP wordt niet ondersteund.

## Authenticatie
Authenticeer elk verzoek met je base64-gecodeerde API key. Zie de [Authenticatie-guide](./authentication.md) voor de exacte header.

## HTTP-methodes
De API volgt standaard REST-semantiek.

| Methode | Gebruik | Opmerkingen |
| --- | --- | --- |
| `GET` | Een object of lijst lezen | Idempotent. Kan JSON, PDF, CSV of XML teruggeven, afhankelijk van het endpoint. |
| `POST` | Een object aanmaken of data versturen | — |
| `PUT` | Een object aanmaken of volledig vervangen | — |
| `DELETE` | Een object verwijderen | Geeft `204 No Content` tenzij anders vermeld. |

Niet elke methode is op elk endpoint beschikbaar. Controleer in de [API-referentie](../../api/myparcel.md) welke methodes een pad ondersteunt.

## Headers
- **`Content-Type`** — gebruik `application/json;charset=utf-8` voor JSON-bodies. Zie [Character encoding](./character-encoding.md).
- **`Accept`** — zet het formaat dat je terug verwacht (bijv. `application/json`). Sommige endpoints gebruiken een vendor-mediatype zoals `application/vnd.shipment+json`; de [API-referentie](../../api/myparcel.md) noemt het exacte type per endpoint.
- **`Authorization`** — je API key (zie [Authenticatie](./authentication.md)).
- **`User-Agent`** — identificeert je integratie (zie hieronder).

## De User-Agent-conventie
Stuur een `User-Agent`-header die je integratie identificeert. Zo kan MyParcel-support problemen herleiden tot de juiste plugin of backend.

```
User-Agent: MyParcel-<integratie>/<versie> <cms>/<versie> <backend>/<versie>
```

Voorbeeld:

```
User-Agent: MyParcel-MyFirstCMS/1.0.0 MyFirstCMS/3.0.0 PHP/8.1.0
```

::: tip Bouw je een publieke integratie?
Neem contact op met MyParcel zodat je integratie herkend wordt in de User-Agent.
:::

## Responseformaten
De meeste endpoints geven JSON terug. Sommige geven binair of tekst terug — labels en facturen komen als **PDF**, en sommige exports als **CSV**. Zie [Responses](./responses.md) voor statuscodes en de response-envelope.

## Rate limiting
De API hanteert per endpoint een rate limit via een sliding window. Overschrijd je een limiet, dan krijg je `429 Too Many Requests`. Wacht enkele minuten voor je opnieuw probeert, in plaats van het endpoint te blijven aanroepen. Loop je regelmatig tegen de limieten aan, neem dan contact op met MyParcel voor opties zoals webhooks.

## Voorbeeldverzoek
```
GET https://api.myparcel.nl/
Accept: application/json;charset=utf-8
Authorization: bearer <base64-gecodeerde API key>
User-Agent: MyParcel-MyFirstCMS/1.0.0 MyFirstCMS/3.0.0 PHP/8.1.0
```
