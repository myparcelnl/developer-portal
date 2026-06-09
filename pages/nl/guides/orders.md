---
title: Orders
description: "Een order is een sales-channel-order binnen MyParcel-fulfilment. Deze guide legt het Order-object, orderregels en de Order API-endpoints uit die orders importeren, opvragen en klaarzetten voor verzending."
---

## Overzicht
Een **order** vertegenwoordigt een sales-channel-order binnen de fulfilment-flow van MyParcel. Waar een [zending](./shipments.md) het pakket is dat naar de ontvanger gaat, is een order het commerciële record — producten, aantallen, klant- en factuurgegevens — dat je importeert en daarna klaarzet voor verzending.

De Order API draait op `order.api.myparcel.nl`. De [Order API-referentie](../../api/order.md) is de bron van waarheid voor request- en response-schema's.

## Het Order-object
Belangrijkste velden:

- **id** / **shortId** — identifiers.
- **status** — de verwerkingsstatus van de order.
- **orderedAt** — wanneer de order geplaatst is.
- **price** — het ordertotaal.
- **billingDetails** — factuuradres en -gegevens.
- **customerReference** / **externalReferences** — je eigen referentie en die van het sales channel.
- **lines** — de orderregels (zie hieronder).
- **notes** — vrije notities op de order.
- **packages** — packages die klaargezet zijn voor verzending.
- **shipping** — verzendgegevens.
- **assignedUserId** — de gebruiker aan wie de order is toegewezen.

## Orderregels
Elke entry in `lines` heeft **id**, **product**, **quantity**, **price** en **externalReference**.

## Werken met orders
De Order API is command-style — elke actie heeft een eigen endpoint:

| Endpoint | Doel |
| --- | --- |
| `POST /import` | Een order importeren die ontdekt is vanuit een sales channel. |
| `GET /orders` | Orders opvragen en filteren. |
| `POST /add-note` / `POST /edit-note` | Een notitie op een order toevoegen of bewerken. |
| `POST /assign-to-user` | Orders aan een gebruiker toewijzen. |
| `POST /cancel` | Orders annuleren. |
| `POST /add-packages` | Packages aan orders toevoegen. |
| `POST /create-from-shippable-packages` | Een order maken vanuit verzendbare packages. |
| `POST /prepare-packages-for-shipment` | De packages van een order klaarzetten voor verzending. |
| `POST /unprepare-packages-for-shipment` | De klaarzet-stap terugdraaien. |

Zie de [Order API-referentie](../../api/order.md) voor de request-bodies.

## Van order naar zending
Het klaarzetten van packages voor verzending maakt van de packages van een order zendingen die je kunt labelen en volgen met de Shipment API — zie de [Zendingen-guide](./shipments.md).

## Authenticatie
De Order API authenticeert via de `Authorization`-header — een API key of een JWT bearer token, met rol-gebaseerde toegang. Zie [Authenticatie](./authentication.md) voor het algemene model en de [Order API-referentie](../../api/order.md) voor het exacte schema en de rollen.
