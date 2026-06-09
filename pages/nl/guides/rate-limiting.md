---
title: Rate limiting
description: "De MyParcel API beperkt hoe vaak je elk endpoint mag aanroepen. Leer hoe het sliding window werkt, wat een 429 betekent en hoe je binnen de limieten blijft."
---

## Overzicht
De MyParcel API hanteert een **rate limit per combinatie van methode + endpoint**, via een **sliding window**. Overschrijd je een limiet, dan krijg je `429 Too Many Requests` en wordt het verzoek genegeerd.

Elke combinatie heeft een eigen teller. `GET /shipments/{ids}` en `POST /shipments` worden bijvoorbeeld los van elkaar gelimiteerd — de een opmaken raakt de ander niet.

## Hoe het sliding window werkt
- Elk verzoek telt mee voor de limiet van die exacte methode + endpoint.
- Zodra de limiet bereikt is, geven verdere calls `429` tot het venster verder schuift.
- **Mislukte `429`-calls tellen óók mee.** Direct opnieuw proberen houdt de teller vol en verlengt de blokkade — bouw in plaats daarvan een pauze in.
- Een combinatie komt doorgaans na ongeveer **5 minuten** weer vrij.

::: warning Niet opnieuw proberen in een strakke loop
Wacht na een `429` voordat je het opnieuw probeert. Het endpoint blijven aanroepen reset de klok en houdt je langer geblokkeerd.
:::

## Uitgewerkt voorbeeld
Je vuurt **100 GET-verzoeken in 15 seconden** af op een endpoint met een limiet van **100 calls / 5 minuten**. Je raakt de limiet vrijwel meteen en blijft ongeveer **4 minuten 45 seconden** geblokkeerd — tot het venster voorbij je piek schuift. `POST`-calls op hetzelfde pad blijven ongemoeid, want die hebben hun eigen limiet.

## Huidige limieten
Dit zijn indicatieve limieten voor veelgebruikte endpoints. Exacte waarden kunnen wijzigen.

| Methode | Endpoint | Limiet |
| --- | --- | --- |
| `GET` | `/` | 30 / 5 min |
| `GET` | `/delivery_options` | 60 / 1 min |
| `GET` | `/drop_off_points` | 300 / 5 min |
| `POST` | `/shipments` | 500 / 5 min |
| `GET` | `/shipments/{ids}` | 1000 / 5 min |
| `POST` | `/webhook_subscriptions` | 30 / 5 min |

::: tip Deze cijfers zijn indicatief
Rate limits maken geen deel uit van de OpenAPI-spec en kunnen in de loop van de tijd veranderen. Beschouw de tabel als richtlijn, vang `429` defensief af in je code, en neem contact op met MyParcel als je hogere limieten nodig hebt.
:::

## Binnen de limieten blijven
- **Poll niet op status.** Gebruik [webhooks](./webhooks.md) om updates te ontvangen in plaats van herhaaldelijk `GET` aan te roepen.
- **Bundel waar het kan.** Veel endpoints accepteren meerdere ID's in één call — haal meerdere zendingen tegelijk op in plaats van één per verzoek.
- **Bouw back-off in bij `429`.** Pauzeer (enkele minuten) voor je het opnieuw probeert, en spreid pieken in verkeer.

Zie [Requests](./requests.md) voor de algemene verzoek-conventies.
