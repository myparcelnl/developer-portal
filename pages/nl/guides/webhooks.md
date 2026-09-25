---
title: Webhooks
description: "Abonneer een HTTPS-endpoint en MyParcel POST't een event naar je toe zodra een zending of order verandert — geen polling. Plus notification groups voor meldingen aan de ontvanger."
---

## Overzicht
Met webhooks laat MyParcel je server weten wanneer er iets verandert, zodat je niet hoeft te pollen. Je abonneert per eventtype een HTTPS-URL; MyParcel POST't elk event vervolgens naar die URL.

Daarnaast bepalen **notification groups** de berichten die MyParcel naar de *ontvanger* stuurt (zoals bezorgmails). Beide komen hieronder aan bod.

## Events
| `hook` | Vuurt wanneer |
| --- | --- |
| `shipment_status_change` | De status van een zending verandert (behalve de initiële conceptstatus). |
| `shipment_label_created` | Een asynchroon gegenereerd label klaar is. |
| `order_status_change` | De status van een order verandert. |

## Abonneren
`POST /webhook_subscriptions` met een `hook` en een HTTPS-`url`:

```
POST https://api.myparcel.nl/webhook_subscriptions
Authorization: bearer BASE64_ENCODED_API_KEY
Content-Type: application/json;charset=utf-8

{
  "data": {
    "webhook_subscriptions": [
      { "hook": "shipment_status_change", "url": "https://example.com/webhooks/myparcel" }
    ]
  }
}
```

- De `url` moet HTTPS en lowercase zijn.
- Je kunt per hook-type één abonnement per shop hebben — hetzelfde hook nogmaals abonneren overschrijft de vorige URL.

## Een callback ontvangen
MyParcel POST't het event naar je URL. De body verpakt events in een `data.hooks`-array, en twee headers identificeren en authenticeren de call:

- **`X-MyParcel-Hook`** — het eventtype.
- **`X-MyParcel-Authorization`** — je base64-gecodeerde API key. Verifieer dat die klopt voordat je de payload vertrouwt.

Antwoord snel met een `2xx`. Doe het zware werk asynchroon en maak je handler **idempotent** — hetzelfde event kan meer dan eens binnenkomen.

### `shipment_status_change`-payload
`shipment_id`, `status`, `barcode`, `shipment_reference_identifier`, `order_id`, `account_id`, `shop_id`.

### `shipment_label_created`-payload
`status` (`success` / `failed`), `shipment_ids`, `printer_identifier`, `pdf` (label-URL), `reason` (bij mislukken).

## Abonnementen opvragen & verwijderen
- `GET /webhook_subscriptions/{id}` — je abonnementen opvragen.
- `DELETE /webhook_subscriptions/{ids}` — één of meer verwijderen (gescheiden door puntkomma); geeft `204 No Content`.

## Notification groups
Notification groups bepalen de berichten die naar de **ontvanger** van een zending gaan (bijvoorbeeld een "je pakket is onderweg"-mail). Elke groep bevat notification **templates** die je kunt inschakelen, uitschakelen of testen.

| Endpoint | Doel |
| --- | --- |
| `GET` / `POST /notification_groups` | Notification groups opvragen of aanmaken. |
| `DELETE /notification_groups/{ids}` | Een groep verwijderen. |
| `GET` / `POST /notification_groups/{id}/notification_templates` | Templates opvragen of toevoegen. |
| `PUT .../notification_templates/{id}` | Een template bijwerken. |
| `.../enable`, `.../disable`, `.../test` | Een template inschakelen, uitschakelen of een test versturen. |

Zie de [API-referentie](../../api/myparcel.md) voor de volledige schema's.

## Tips
- Verkies webhooks boven het pollen van `GET /tracktraces` of `GET /shipments` — lichter en voorkomt rate limits.
- Verifieer altijd de `X-MyParcel-Authorization`-header.
- Houd je endpoint snel en idempotent.
