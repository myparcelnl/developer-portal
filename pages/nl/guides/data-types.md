---
title: Datatypes
description: "Veelgebruikte waardetypes en enums in de MyParcel-API's — identifiers, geld, datums, platform, vervoerders, pakket- en bezorgtypes."
---

## Hoe je deze pagina leest
Deze waardetypes komen in alle MyParcel-API's terug. Voor het exacte schema van een veld is de [API-referentie](../../api/myparcel.md) de bron van waarheid — deze guide verzamelt de veelvoorkomende enums en conventies op één plek.

## Identifiers
Zendingen, orders, afhaalpunten en webhook-subscriptions worden geïdentificeerd met **integer-ID's** (grote getallen zoals `100000001`).

## Geld
Geldbedragen zijn integers in **centen (EUR)**, tenzij de veldnaam anders aangeeft.

```
{ "insurance": 25000 /* = € 250,00 */ }
```

## Datums & tijden
Datum-tijdvelden worden als string teruggegeven; check het veld in de [API-referentie](../../api/myparcel.md) voor het exacte formaat. Een paar hulptypes hebben een vast formaat:

- **weekday** — als string (`monday` … `sunday`) of cijfer (`0` = zondag … `6` = zaterdag).
- **month** — als tweecijferige string (`01` … `12`).

## Land- & taalcodes
- Landen: ISO 3166-1 alpha-2 (`NL`, `BE`, `DE`, `FR`, …).
- Talen: ISO 639-1 (`nl`, `en`, `de`, `fr`, …).

## platform
Geeft aan bij welk MyParcel-platform een account of verzoek hoort:

| Waarde | Platform |
| --- | --- |
| `myparcel` | MyParcel (Nederland) |
| `belgie` | SendMyParcel (België) |

Sommige endpoints gebruiken ook een numerieke platform-identifier (`1` = MyParcel, `2` = Flespakket, `3` = SendMyParcel / België). Zie de `platform`-parameter in de [API-referentie](../../api/myparcel.md).

## carrier
Vervoerders worden aangeduid met een numeriek ID. Welke vervoerders je kunt gebruiken hangt af van je account en platform.

| ID | Vervoerder | Opmerkingen |
| --- | --- | --- |
| 1 | PostNL | |
| 2 | bpost | alleen SendMyParcel.be |
| 3 | CheapCargo / pallets | |
| 4 | DPD | |
| 9 | DHL For You | |
| 10 | DHL Parcel Connect | |
| 11 | DHL Europlus | |
| 12 | UPS Standard | alleen MyParcel.nl |
| 13 | UPS Express Saver | alleen MyParcel.nl |
| 14 | GLS | alleen MyParcel.nl |
| 15 | BRT | |
| 16 | Trunkrs | |
| 17 | InPost | |
| 18 | PosteItaliane | |

ID's `5`–`8` zijn verouderd (Instabox, DHL CheapCargo, BOL, UPS) en moet je niet gebruiken. Beschouw deze tabel als richtlijn en bevestig de actuele lijst in de [API-referentie](../../api/myparcel.md).

## package_type
| ID | Type | Opmerkingen |
| --- | --- | --- |
| 1 | package | Gewoon pakket. |
| 2 | mailbox package | Past door de brievenbus. |
| 3 | letter | |
| 4 | digital stamp | |
| 5 | pallet | |
| 6 | small package | |
| 7 | envelope | alleen DHL For You |

## delivery_type
| ID | Type |
| --- | --- |
| 1 | morning |
| 2 | standard |
| 3 | evening |
| 4 | pickup |

## package_contents
Gebruikt voor de douane bij zendingen buiten de EU.

| ID | Inhoud |
| --- | --- |
| 1 | commercial goods |
| 2 | commercial samples |
| 3 | documents |
| 4 | gifts |
| 5 | return shipment |

## label_position
Positie van het eerste label op een A4-vel.

| ID | Positie |
| --- | --- |
| 1 | linksboven |
| 2 | rechtsboven |
| 3 | linksonder |
| 4 | rechtsonder |

## Overige waardetypes
- **order_status** — `open`, `partially_processed`, `processed`, `cancelled`.
- **paper_size** — `a4` of `a6`.
- **sort_order** — `ASC` of `DESC`.

## Fouten
Foutresponses delen een vaste vorm met een code en boodschap. Zie [Responses](./responses.md) voor de statuscodes; de leesbare foutcode-catalogus komt in de Errors-guide.
