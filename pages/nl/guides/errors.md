---
title: Fouten
description: "Hoe MyParcel fouten rapporteert: het error-object, de codebereiken per categorie en een catalogus van veelvoorkomende foutcodes. Handel fouten af op code, niet op de boodschaptekst."
---

## Overzicht
Elke `4xx`- en `5xx`-response bevat een gestructureerde fout zodat je deze programmatisch kunt afhandelen. Vertak op de **code**, niet op de boodschaptekst — boodschappen kunnen wijzigen, codes niet.

## Het error-object
Fouten komen terug in een `errors`-array, elk met een `code` en een `message`:

```json
{
  "errors": [
    { "code": 3505, "message": "Invalid postal code" }
  ],
  "message": "[3505] Invalid postal code"
}
```

De [API-referentie](../../api/myparcel.md) bevat het gezaghebbende error-schema per endpoint.

## Codebereiken
Codes zijn gegroepeerd per categorie, elk bereik dekt één onderwerp:

| Bereik | Categorie |
| --- | --- |
| 3000–3001 | Authenticatie |
| 3100–3107 | Request-headers |
| 3200–3223 | Query-parameters |
| 3500–3520 | Adresvalidatie |
| 3700–3768 | Zending-operaties |
| 4000–4001 | Bezorging / locaties |
| 5000 | Datumvalidatie |
| 10001–10003 | Webhooks |

## Veelvoorkomende foutcodes
| Code | Betekenis | Wat te doen |
| --- | --- | --- |
| `3000` | Toegang geweigerd | Controleer je [API key](./authentication.md) en de rechten. |
| `3103` | Ongeldige authorization-header | Base64-codeer de key en gebruik het `bearer`/`basic`-schema. |
| `3201` | Ongeldige query-parameter: `size` | Corrigeer de query-parameter. |
| `3505` | Ongeldige postcode | Corrigeer de postcode van de ontvanger. |
| `3704` | Ongeldige physical properties (lengte, breedte, hoogte, gewicht) | Geef geldige afmetingen/gewicht op. |
| `3717` | Kan zending niet bijwerken | De zending kan in de huidige status niet meer gewijzigd worden. |
| `3728` | Niet-ondersteunde vervoerder | Gebruik een [vervoerder](./data-types.md#carrier) die voor je account/platform is ingeschakeld. |
| `3751` | E-mail en telefoon ontbreken bij ontvanger | Voeg een e-mail of telefoon toe — vereist voor deze vervoerder/bestemming. |
| `4000` | Geen dichtstbijzijnde locaties gevonden | Verruim de zoekopdracht of check de postcode van de afhaal-/afgeefpunt-zoekopdracht. |
| `5000` | Ongeldige datum | Gebruik het formaat `YYYY-MM-DD HH:MM:SS` en een geldige bezorgdatum. |
| `10002` | Ongeldige webhook-url | Gebruik een lowercase HTTPS-URL — zie [Webhooks](./webhooks.md). |

Dit is een representatieve set. De volledige, actuele lijst met codes staat per endpoint in de [API-referentie](../../api/myparcel.md).

## Fouten afhandelen
- **`401`** — authenticatie mislukt. Zie [Authenticatie](./authentication.md).
- **`422`** — de data is geldige JSON maar faalt op validatie; lees de `errors[]`-codes en corrigeer de betreffende velden.
- **`429`** — je raakte een rate limit; bouw back-off in en probeer het later.
- **`5xx`** — een probleem aan de kant van MyParcel; probeer het na een korte pauze opnieuw.

Zie [Responses](./responses.md) voor de volledige lijst met statuscodes.
