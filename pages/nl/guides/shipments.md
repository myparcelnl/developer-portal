---
title: Zendingen
description: "Een zending vertegenwoordigt één pakket onderweg van je afzendadres naar een ontvanger. Deze guide legt het zendingobject, de opties, labels, tracking en de rates- en capabilities-endpoints uit."
---

## Overzicht
Een zending vertegenwoordigt één pakket onderweg van je afzendadres naar een ontvanger. Je maakt zendingen aan met de Shipment API; bij het aanmaken wordt de zending bij de vervoerder geregistreerd en kun je een label en een Track & Trace ophalen.

Deze guide legt de concepten en de meestgebruikte velden uit. Voor het volledige request- en response-schema is de [API-referentie](../../api/myparcel.md) de bron van waarheid.

## Levenscyclus
Een zending begint als **concept**, wordt **geregistreerd** bij de vervoerder, wordt **overgedragen** en is uiteindelijk **bezorgd** (of **retour**). Je kunt een zending alleen [annuleren](#annuleren) zolang die nog een concept is — is hij eenmaal geregistreerd, maak dan een retour aan. Volg de live status met [Track & Trace](#track-trace).

## Het zendingobject
De Shipment API verpakt data in een `data.shipments`-array. De belangrijkste velden bij het aanmaken:

- **carrier** — het carrier-ID (bijv. `1` = PostNL). Zie [Datatypes · carrier](./data-types.md#carrier).
- **reference_identifier** — je eigen referentie (bijv. een ordernummer). Optioneel maar aanbevolen.
- **recipient** — het bezorgadres (zie hieronder).
- **sender** — het retouradres. Wordt uit je account genomen als je het weglaat.
- **options** — hoe het pakket verstuurd wordt (zie [Opties](#opties)).
- **physical_properties** — gewicht en afmetingen.
- **customs_declaration** — verplicht voor zendingen buiten de EU.
- **pickup** — de gekozen afhaallocatie, als `delivery_type` pickup is.

## Recipient & sender
Beide gebruiken dezelfde adresvelden. De belangrijkste:

- **cc** — landcode (ISO 3166-1 alpha-2), verplicht.
- **person** — naam ontvanger (max 40 tekens), verplicht.
- **company**, **email**, **phone** — phone is verplicht voor internationaal en sommige vervoerders.
- **street**, **number**, **number_suffix**, **postal_code**, **city**, **region**.
- **box_number** — alleen België.
- **eori_number** / **vat_number** — voor de douane.

## Opties
Het `options`-object bepaalt hoe het pakket verstuurd wordt. Veelgebruikte opties:

| Optie | Betekenis |
| --- | --- |
| `package_type` | Verplicht. Pakket, brievenbus, brief, enz. — zie [Datatypes](./data-types.md#package_type). |
| `delivery_type` | Standaard, ochtend, avond of pickup — zie [Datatypes](./data-types.md#delivery_type). |
| `delivery_date` | Bezorgdatum (`YYYY-MM-DD HH:MM:SS`); verplicht bij ochtend/avond. |
| `signature` | Ontvanger tekent voor het pakket. |
| `only_recipient` | Alleen aan de geadresseerde overhandigen (geen buren). |
| `insurance` | Verzeker het pakket — een bedrag (centen) en valuta. |
| `return` | Retour naar afzender als bezorgen niet lukt. |
| `large_format` | Voor grote of zware pakketten. |
| `age_check` | Ontvanger moet 18 jaar of ouder zijn. |
| `label_description` | Eigen tekst op het label. |

Booleans gebruiken `1`/`0`. Welke opties een vervoerder ondersteunt verschilt per vervoerder — gebruik [Capabilities](#capabilities) om dit te checken.

## Physical properties
`physical_properties` bevat `weight` (gram), `width`, `height`, `length`. **Gewicht is verplicht** voor zendingen buiten de EU en voor sommige pakkettypes. Een realistisch gewicht houdt de verzendprijs kloppend.

## Customs declaration
Voor zendingen buiten de EU voeg je een `customs_declaration` toe:

- **contents** — het type [pakketinhoud](./data-types.md#package_contents).
- **invoice** — verplicht voor commercial goods, samples en retouren.
- **weight** — totaal douanegewicht in gram.
- **items** — één entry per product, elk met `description`, `amount`, `item_value`, `classification` (HS-code) en `country` van herkomst.

## Pickup
Als `delivery_type` pickup is, kiest de klant een locatie. Zoek locaties op via de delivery-options-endpoints (zie de [Delivery options-guide](./delivery-options.md)) en geef de gekozen locatie mee in het `pickup`-object (`location_code`, `retail_network_id`, adresvelden).

## Een zending aanmaken
```
POST https://api.myparcel.nl/shipments
Content-Type: application/json;charset=utf-8
Authorization: bearer BASE64_ENCODED_API_KEY

{
  "data": {
    "shipments": [
      {
        "carrier": 1,
        "reference_identifier": "ORDER-2026-01042",
        "recipient": {
          "cc": "NL",
          "person": "J. de Vries",
          "street": "Hoofdstraat",
          "number": "42",
          "postal_code": "1012AB",
          "city": "Amsterdam"
        },
        "options": {
          "package_type": 1,
          "signature": 1
        },
        "physical_properties": { "weight": 1500 }
      }
    ]
  }
}
```

De response geeft het nieuwe zending-`id` terug. Zie [`POST /shipments` in de referentie](../../api/myparcel.md) voor het volledige schema.

::: tip Multicollo
Wil je meerdere pakketten naar hetzelfde adres op dezelfde dag als één zending versturen, voeg dan een `secondary_shipments`-array toe. Zie de referentie voor de exacte vorm.
:::

## Labels
Haal labels op met `GET /shipment_labels/{ids}` (scheid meerdere ID's met een puntkomma). De `Accept`-header bepaalt het formaat:

- `application/pdf` — het label als PDF (standaard).
- `application/json` — een downloadlink in plaats van binair.

Gebruik `format` (`A4` of `A6`) en `positions` om de plaatsing op het vel te bepalen. Vraag voor grote batches (25+ labels) een link aan in plaats van inline binair — het bestand komt kort daarna beschikbaar.

## Track & trace
Haal tracking op met `GET /tracktraces/{ids}`. De response bevat de statushistorie en bezorgmomenten. Poll dit endpoint niet, maar abonneer je op [webhooks](./webhooks.md) om statuswijzigingen te ontvangen.

## Annuleren
Annuleer een zending met `DELETE /shipments/{ids}`. Alleen zendingen die nog een **concept** zijn kunnen geannuleerd worden; een geslaagde annulering geeft `204 No Content`. Is een zending al geregistreerd of overgedragen, maak dan een retour aan.

## Retouren
Maak een retour aan met `POST /return_shipments`. Retouren kunnen **gekoppeld** zijn aan een originele zending of **ongekoppeld** (standalone), gekozen via het request-mediatype (`application/vnd.return_shipment+json` of `application/vnd.unrelated_return_shipment+json`). Zie de [API-referentie](../../api/myparcel.md).

## Shipment rates
`POST /shipments/rates` geeft de prijs van een zending terug vóór je hem aanmaakt. Gebruik dit om verzendkosten te tonen of opties te vergelijken. Zie de [API-referentie](../../api/myparcel.md) voor de request-body.

## Capabilities
Vervoerders verschillen in wat ze ondersteunen (pakkettypes, bezorgtypes, opties). Ontdek dit dynamisch in plaats van het hard te coderen:

- `POST /shipments/capabilities` — de capabilities van een vervoerder voor jouw platform.
- `POST /shipments/capabilities/contract-definitions` — de opties die bij een specifiek contract horen.

Gebruik capabilities om een checkout of admin-UI te bouwen die alleen toont wat de gekozen vervoerder daadwerkelijk ondersteunt.
