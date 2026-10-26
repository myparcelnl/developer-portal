---
title: Spedizioni
description: "Una spedizione rappresenta un singolo collo che viaggia dal tuo indirizzo mittente a un destinatario. La crei con una richiesta e poi scarichi l'etichetta in PDF."
---

## Ciclo di vita
Ogni spedizione ha uno `status` numerico. I gruppi principali sono:

- `1` pending, bozza: creata, ancora senza etichetta.
- `2` pending, registrata: l'etichetta è stata creata.
- da `3` a `6` in viaggio: consegnata al vettore, smistamento, distribuzione, dogana.
- da `7` a `11` consegnata: al destinatario, pronta per il ritiro, ritirata, o gli equivalenti per i resi.
- `12` e `14` stampata: una lettera o un francobollo digitale.
- da `30` a `38` inattiva: le stesse fasi per spedizioni non più attive.

Iscriviti al [webhook](webhooks.md) `shipment_status_change` per ricevere le modifiche invece di fare polling.

## Creare una spedizione
Invia una POST a `/shipments` con il content type vendor. Il body racchiude un array di spedizioni in un oggetto `data`, così puoi crearne più di una in una sola chiamata.

```
POST https://api.myparcel.nl/shipments
Content-Type: application/vnd.shipment+json;version=1.1;charset=utf-8
Authorization: bearer <API key codificata in base64>

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

`carrier`, `recipient` e `options.package_type` sono obbligatori. Vettori e tipi di pacco sono ID numerici, e opzioni come `signature` accettano `0` o `1`. Vedi [Tipi di dato](data-types.md).

La risposta elenca gli ID delle nuove spedizioni, nell'ordine in cui le hai inviate:

```
{
  "data": {
    "ids": [
      { "id": 123456, "reference_identifier": "ORDER-2026-01042" }
    ]
  }
}
```

## Etichette
Scarica le etichette con `GET /shipment_labels/{ids}`. Separa più ID con `;` per ottenerle in un unico PDF. Il parametro `format` sceglie `A4` o `A6`, e su A4 `positions` indica dove vanno le prime etichette (da `1` a `4`).

Per lotti grandi, richiedi l'etichetta in modo asincrono con `Accept: application/vnd.shipment_label_link+json`. Ricevi un link che restituisce il PDF quando è pronto, oppure puoi ascoltare il [webhook](webhooks.md) `shipment_label_created`.

[Vedi `GET /shipment_labels/{ids}` →](../../api/myparcel.md#get-shipment-labels-idss)

## Eliminazione
Puoi eliminare una spedizione solo finché è una bozza, prima che venga creata un'etichetta. Eliminare raramente serve: le spedizioni mai consegnate al vettore non vengono fatturate.

[Vedi `DELETE /shipments/{ids}` →](../../api/myparcel.md#delete-shipments-idss)
