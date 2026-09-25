---
title: Webhook
description: "Sottoscrivi un endpoint HTTPS e MyParcel ti invia un evento in POST quando una spedizione o un ordine cambia — nessun polling. Più le notification group per le notifiche al destinatario."
---

## Panoramica
I webhook permettono a MyParcel di avvisare il tuo server quando qualcosa cambia, così non devi fare polling. Sottoscrivi un URL HTTPS per ogni tipo di evento; MyParcel invia poi ogni evento in POST a quell'URL.

Separatamente, le **notification group** configurano i messaggi che MyParcel invia al *destinatario* (come le email di consegna). Entrambi sono trattati qui sotto.

## Eventi
| `hook` | Si attiva quando |
| --- | --- |
| `shipment_status_change` | Lo stato di una spedizione cambia (tranne lo stato iniziale di bozza). |
| `shipment_label_created` | Un'etichetta generata in modo asincrono è pronta. |
| `order_status_change` | Lo stato di un ordine cambia. |

## Sottoscrizione
`POST /webhook_subscriptions` con un `hook` e un `url` HTTPS:

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

- L'`url` deve essere HTTPS e in minuscolo.
- Puoi avere una sottoscrizione per tipo di hook per negozio — sottoscrivere di nuovo lo stesso hook sovrascrive l'URL precedente.

## Ricevere una callback
MyParcel invia l'evento in POST al tuo URL. Il body racchiude gli eventi in un array `data.hooks`, e due header identificano e autenticano la chiamata:

- **`X-MyParcel-Hook`** — il tipo di evento.
- **`X-MyParcel-Authorization`** — la tua API key codificata in base64. Verifica che corrisponda prima di fidarti del payload.

Rispondi rapidamente con un `2xx`. Esegui il lavoro pesante in modo asincrono e rendi il tuo handler **idempotente** — lo stesso evento può arrivare più di una volta.

### Payload `shipment_status_change`
`shipment_id`, `status`, `barcode`, `shipment_reference_identifier`, `order_id`, `account_id`, `shop_id`.

### Payload `shipment_label_created`
`status` (`success` / `failed`), `shipment_ids`, `printer_identifier`, `pdf` (URL dell'etichetta), `reason` (in caso di errore).

## Elencare ed eliminare le sottoscrizioni
- `GET /webhook_subscriptions/{id}` — elenca le tue sottoscrizioni.
- `DELETE /webhook_subscriptions/{ids}` — rimuovine una o più (separate da punto e virgola); restituisce `204 No Content`.

## Notification group
Le notification group controllano i messaggi inviati al **destinatario** di una spedizione (ad esempio un'email "il tuo pacco è in arrivo"). Ogni gruppo contiene **template** di notifica che puoi abilitare, disabilitare o testare.

| Endpoint | Scopo |
| --- | --- |
| `GET` / `POST /notification_groups` | Elenca o crea notification group. |
| `DELETE /notification_groups/{ids}` | Rimuovi un gruppo. |
| `GET` / `POST /notification_groups/{id}/notification_templates` | Elenca o aggiungi template. |
| `PUT .../notification_templates/{id}` | Aggiorna un template. |
| `.../enable`, `.../disable`, `.../test` | Abilita, disabilita o invia un test di un template. |

Vedi il [riferimento API](../../api/myparcel.md) per gli schemi completi.

## Suggerimenti
- Preferisci i webhook al polling di `GET /tracktraces` o `GET /shipments` — più leggero ed evita i rate limit.
- Verifica sempre l'header `X-MyParcel-Authorization`.
- Mantieni il tuo endpoint veloce e idempotente.
