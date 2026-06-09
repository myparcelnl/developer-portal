---
title: Authenticatie
description: "Authenticeer elk MyParcel API-verzoek met een base64-gecodeerde API key uit je Backoffice, meegestuurd in de Authorization-header."
---

## Je API key
Elk verzoek wordt geauthenticeerd met een **API key** die je genereert in de MyParcel-backoffice, onder de integratie-instellingen van je shop. De key identificeert je account en draagt de bijbehorende rechten.

::: warning Houd je key geheim
Bewaar de key op je server. Iedereen die hem heeft kan verzenden — en factureren — op jouw account. Toon hem nooit in een browser, mobiele app of publieke repository.
:::

## Codeer de key
Codeer je API key in base64 voordat je hem verstuurt. Bijvoorbeeld: de key `abc123` wordt:

```
echo -n 'abc123' | base64
# YWJjMTIz
```

De meeste talen hebben een ingebouwde base64-functie — handmatig coderen is niet nodig.

## Stuur hem in de Authorization-header
Stuur de gecodeerde key mee in de `Authorization`-header bij elk verzoek, met het `bearer`-schema:

```
GET https://api.myparcel.nl/shipments
Authorization: bearer BASE64_ENCODED_API_KEY
```

De API accepteert ook het `basic`-schema met dezelfde base64-gecodeerde key:

```
Authorization: basic BASE64_ENCODED_API_KEY
```

Beide schema's staan in de [API-referentie](../../api/myparcel.md).

## Je key beheren
- **Invalideren door te regenereren.** Wil je een key intrekken, genereer dan een nieuwe in de Backoffice — de oude key werkt direct niet meer.
- **Eén key, één account.** Elke key hoort bij één MyParcel-account en draagt de rechten van dat account.
- Een **`401 Unauthorized`**-response betekent dat de key ontbreekt, onjuist is of niet meer geldig. Zie [Responses](./responses.md) voor de statuscodes.
