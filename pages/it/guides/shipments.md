---
title: Spedizioni
description: "Una spedizione rappresenta un singolo collo che viaggia dal tuo indirizzo mittente a un destinatario. Creando una spedizione si genera anche l'etichetta e l'URL di tracking."
---

## Ciclo di vita
Una spedizione attraversa questi stati:

- `pending` — creata, etichetta non ancora stampata.
- `printed` — etichetta generata e pronta per essere consegnata.
- `handed_over` — scansionata nella rete del carrier.
- `delivered` — ricevuta dal destinatario o presso un pickup point.
- `returned` — restituita al mittente.

## Creare una spedizione
Invia una POST a `/shipments` con un carrier, un destinatario e le opzioni.

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

## Etichette
Ogni spedizione creata espone un `label_url` che punta a un PDF. Le etichette sono A6 di default e possono essere raggruppate in fogli A4 tramite `/labels/print`.

## Annullamento
Le spedizioni possono essere annullate finché si trovano nello stato `pending` o `printed`. Una volta in `handed_over`, l'annullamento non è più possibile — emetti invece un reso.

[Vedi `DELETE /shipments/{id}` →](../../api/myparcel.md#cancel-shipment)
