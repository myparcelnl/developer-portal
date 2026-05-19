---
title: Zendingen
description: "Een zending vertegenwoordigt één pakket onderweg van je afzendadres naar een ontvanger. Bij het aanmaken van een zending worden direct het label en de tracking-URL gegenereerd."
---

## Levenscyclus
Een zending doorloopt deze statussen:

- `pending` — aangemaakt, label nog niet geprint.
- `printed` — label gegenereerd en klaar voor overdracht.
- `handed_over` — gescand in het netwerk van de vervoerder.
- `delivered` — ontvangen door de ontvanger of een afhaalpunt.
- `returned` — retour gegaan naar de afzender.

## Een zending aanmaken
Doe een POST naar `/shipments` met een carrier, recipient en options.

```
POST /shipments
{
  "carrier": "postnl",
  "reference": "ORDER-2026-01042",
  "recipient": {
    "name": "J. de Vries",
    "street": "Antwoordnummer 42",
    "postal_code": "1012AB",
    "city": "Amsterdam",
    "country": "NL"
  },
  "options": {
    "package_type": "package",
    "signature": true
  }
}
```

## Labels
Elke aangemaakte zending bevat een `label_url` die naar een PDF wijst. Labels zijn standaard A6 en kunnen via `/labels/print` worden gebatcht naar A4-vellen.

## Annuleren
Zendingen kun je annuleren zolang ze `pending` of `printed` zijn. Zodra ze `handed_over` zijn, kan annuleren niet meer — maak in dat geval een retour aan.

[Zie `DELETE /shipments/{id}` →](../../api/myparcel.md#cancel-shipment)
