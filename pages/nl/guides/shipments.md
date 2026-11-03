---
title: Zendingen
description: "Een zending vertegenwoordigt één pakket onderweg van je afzendadres naar een ontvanger. Je maakt hem aan met één request en haalt daarna het label op als PDF."
---

## Levenscyclus
Elke zending heeft een numerieke `status`. De belangrijkste groepen zijn:

- `1` pending, concept: aangemaakt, nog geen label.
- `2` pending, geregistreerd: het label is aangemaakt.
- `3` tot en met `6` onderweg: overgedragen aan de vervoerder, sortering, distributie, douane.
- `7` tot en met `11` bezorgd: bij de ontvanger, klaar om af te halen, afgehaald, of het retour-equivalent daarvan.
- `12` en `14` geprint: een brief of digitale postzegel.
- `30` tot en met `38` inactief: dezelfde fasen voor zendingen die niet meer actief zijn.

Abonneer je op de `shipment_status_change`-[webhook](webhooks.md) om wijzigingen te horen in plaats van te pollen.

## Een zending aanmaken
Doe een POST naar `/shipments` met het vendor-contenttype. De body verpakt een array van zendingen in een `data`-object, zodat je er meerdere in één call kunt aanmaken.

```
POST https://api.myparcel.nl/shipments
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
Authorization: bearer <base64-gecodeerde API-key>

{
  "data": {
    "shipments": [
      {
        "carrier": 1,
        "reference_identifier": "ORDER-2026-01042",
        "recipient": {
          "cc": "NL",
          "person": "J. de Vries",
          "street": "Antareslaan",
          "number": "31",
          "postal_code": "2132JE",
          "city": "Hoofddorp"
        },
        "options": {
          "package_type": 1,
          "signature": 1
        }
      }
    ]
  }
}
```

`carrier`, `recipient` en `options.package_type` zijn verplicht. Vervoerders en pakkettypes zijn numerieke ID's, en opties zoals `signature` krijgen `0` of `1`. Zie [Datatypes](data-types.md).

De response bevat de ID's van de nieuwe zendingen, in de volgorde waarin je ze stuurde:

```
{
  "data": {
    "ids": [
      { "id": 123456, "reference_identifier": "ORDER-2026-01042" }
    ]
  }
}
```

## Labels
Haal labels op met `GET /shipment_labels/{ids}`. Scheid meerdere ID's met `;` om ze in één PDF te krijgen. De parameter `format` kiest `A4` of `A6`, en op A4 bepaalt `positions` waar de eerste labels komen (`1` tot en met `4`).

Vraag bij grote batches het label asynchroon op met `Accept: application/vnd.shipment_label_link+json`. Je krijgt dan een link die de PDF teruggeeft zodra hij klaar is, of je luistert naar de `shipment_label_created`-[webhook](webhooks.md).

[Zie `GET /shipment_labels/{ids}` →](../../api/myparcel.md#get-shipment-labels-idss)

## Verwijderen
Je kunt een zending alleen verwijderen zolang hij een concept is, dus voordat er een label is aangemaakt. Verwijderen is zelden nodig: zendingen die nooit aan de vervoerder worden overgedragen, worden niet gefactureerd.

[Zie `DELETE /shipments/{ids}` →](../../api/myparcel.md#delete-shipments-idss)
