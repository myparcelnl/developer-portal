---
title: Expéditions
description: "Une expédition représente un colis en route de votre adresse d'expéditeur vers un destinataire. La création d'une expédition génère aussi l'étiquette et l'URL de suivi."
---

## Cycle de vie
Une expédition passe par ces statuts :

- `pending` : créée, étiquette pas encore imprimée.
- `printed` : étiquette générée et prête à être remise.
- `handed_over` : scannée dans le réseau du transporteur.
- `delivered` : reçue par le destinataire ou un point de retrait.
- `returned` : retournée à l'expéditeur.

## Créer une expédition
Envoyez un POST vers `/shipments` avec un carrier, un recipient et des options.

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

## Étiquettes
Chaque expédition créée expose une `label_url` pointant vers un PDF. Les étiquettes sont au format A6 par défaut et peuvent être regroupées sur des feuilles A4 via `/labels/print`.

## Annulation
Les expéditions peuvent être annulées tant qu'elles sont `pending` ou `printed`. Une fois `handed_over`, l'annulation n'est plus possible, créez un retour à la place.

[Voir `DELETE /shipments/{id}` →](../../api/myparcel.md#cancel-shipment)
