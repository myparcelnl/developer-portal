---
title: Responses
description: "Wat de MyParcel API teruggeeft: standaard JSON, PDF en CSV voor labels en exports, de response-envelope en de HTTP-statuscodes die je kunt verwachten."
---

## Overzicht
De meeste endpoints geven JSON terug. Er zijn enkele uitzonderingen:

- **Labels en facturen** komen terug als **PDF**.
- **Sommige exports** komen terug als **CSV**.
- Een **`DELETE`** geeft `204 No Content` zonder body.
- Langlopend werk (zoals het aanmaken van zendingen of een CSV-export) kan **`202 Accepted`** teruggeven terwijl het verwerkt wordt.

## De response-envelope
Geslaagde JSON-responses verpakken het resultaat in een top-level `data`-object, gekeyd op de resource:

```json
{
  "data": {
    "shipments": [
      { "id": 100000001 }
    ]
  }
}
```

De exacte velden per resource staan in de [API-referentie](../../api/myparcel.md) — gebruik die als bron van waarheid in plaats van structuren met de hand over te nemen.

## HTTP-statuscodes
| Code | Betekenis |
| --- | --- |
| `200 OK` | Geslaagd verzoek met een response-body. |
| `202 Accepted` | Aangenomen voor asynchrone verwerking (bijv. zendingen, CSV). |
| `204 No Content` | Geslaagd zonder body — meestal na een `DELETE`. |
| `304 Not Modified` | De resource is niet gewijzigd sinds je gecachte versie. |
| `400 Bad Request` | Het verzoek is misvormd. |
| `401 Unauthorized` | Ontbrekende of onjuiste API key. Zie [Authenticatie](./authentication.md). |
| `402 Payment Required` | Betaling vereist; de response kan een factuur bevatten. |
| `403 Forbidden` | Je key is niet geautoriseerd voor deze actie. |
| `404 Not Found` | De resource bestaat niet. |
| `405 Method Not Allowed` | Die HTTP-methode wordt niet ondersteund op dit endpoint. |
| `406 Not Acceptable` | Het gevraagde responseformaat wordt niet ondersteund. |
| `409 Conflict` | Het verzoek botst met de huidige staat van de resource. |
| `415 Unsupported Media Type` | Het `Content-Type` wordt niet ondersteund. |
| `422 Unprocessable Entity` | Geldige JSON, maar de validatie faalt. |
| `5xx` | Een probleem aan de kant van MyParcel — probeer het later opnieuw. |

## Fouten
Een `4xx`-response bevat een foutbody met een leesbare boodschap en een of meer foutcodes. Gebruik die codes om fouten programmatisch af te handelen, in plaats van de boodschaptekst te parsen.

::: tip Foutcodes lezen
De volledige, leesbare catalogus van foutcodes komt in de **Errors**-guide. Tot die er is, staan de foutresponses per endpoint in de [API-referentie](../../api/myparcel.md).
:::
