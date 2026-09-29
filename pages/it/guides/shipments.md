---
title: Spedizioni
description: "Una spedizione rappresenta un singolo collo che viaggia dal tuo indirizzo mittente a un destinatario. Questa guida spiega l'oggetto spedizione, le opzioni, le etichette, il tracking e gli endpoint rates e capabilities."
---

## Panoramica
Una spedizione rappresenta un singolo collo che viaggia dal tuo indirizzo mittente a un destinatario. Crei le spedizioni con l'API MyParcel; creandone una la registri presso il vettore e puoi recuperare un'etichetta e un Track & Trace.

Questa guida spiega i concetti e i campi più usati. Per lo schema completo di richiesta e risposta, il [riferimento API](../../api/myparcel.md) è la fonte di verità.

## Ciclo di vita
Una spedizione inizia come **bozza**, viene **registrata** presso il vettore, viene **consegnata al vettore** e infine **recapitata** (o **resa**). Puoi [annullare](#annullamento) una spedizione solo finché è ancora una bozza — una volta registrata, crea invece un reso. Segui lo stato live con [Track & Trace](#track-trace).

## L'oggetto spedizione
L'API MyParcel racchiude i dati in un array `data.shipments`. I campi principali alla creazione:

- **carrier** — l'ID del vettore (es. `1` = PostNL). Vedi [Tipi di dato · carrier](./data-types.md#carrier).
- **reference_identifier** — il tuo riferimento (es. un numero d'ordine). Opzionale ma consigliato.
- **recipient** — l'indirizzo di destinazione (vedi sotto).
- **sender** — l'indirizzo di reso. Preso dal tuo account se omesso.
- **options** — come spedire il collo (vedi [Opzioni](#opzioni)).
- **physical_properties** — peso e dimensioni.
- **customs_declaration** — obbligatorio per le spedizioni fuori dall'UE.
- **pickup** — il punto di ritiro scelto, quando `delivery_type` è pickup.

## Recipient & sender
Entrambi usano gli stessi campi indirizzo. I principali:

- **cc** — codice paese (ISO 3166-1 alpha-2), obbligatorio.
- **person** — nome destinatario (max 40 caratteri), obbligatorio.
- **company**, **email**, **phone** — phone è obbligatorio per l'internazionale e alcuni vettori.
- **street**, **number**, **number_suffix**, **postal_code**, **city**, **region**.
- **box_number** — solo Belgio.
- **eori_number** / **vat_number** — per la dogana.

## Opzioni
L'oggetto `options` controlla come viene spedito il collo. Opzioni comuni:

| Opzione | Significato |
| --- | --- |
| `package_type` | Obbligatorio. Pacco, cassetta postale, lettera, ecc. — vedi [Tipi di dato](./data-types.md#package_type). |
| `delivery_type` | Standard, mattino, sera o pickup — vedi [Tipi di dato](./data-types.md#delivery_type). |
| `delivery_date` | Data di consegna (`YYYY-MM-DD HH:MM:SS`); obbligatoria per mattino/sera. |
| `signature` | Il destinatario firma per il collo. |
| `only_recipient` | Consegna solo all'intestatario (niente vicini). |
| `insurance` | Assicura il collo — un importo (centesimi) e una valuta. |
| `return` | Reso al mittente se non recapitabile. |
| `large_format` | Per colli grandi o pesanti. |
| `age_check` | Il destinatario deve avere almeno 18 anni. |
| `label_description` | Testo personalizzato sull'etichetta. |

I booleani usano `1`/`0`. Quali opzioni supporta un vettore varia per vettore — usa [Capabilities](#capabilities) per verificarlo.

## Physical properties
`physical_properties` contiene `weight` (grammi), `width`, `height`, `length`. **Il peso è obbligatorio** per le spedizioni fuori dall'UE e per alcuni tipi di pacco. Un peso realistico mantiene corretto il prezzo di spedizione.

## Customs declaration
Per le spedizioni fuori dall'UE aggiungi una `customs_declaration`:

- **contents** — il tipo di [contenuto del pacco](./data-types.md#package_contents).
- **invoice** — obbligatoria per commercial goods, samples e resi.
- **weight** — peso doganale totale in grammi.
- **items** — una voce per prodotto, ciascuna con `description`, `amount`, `item_value`, `classification` (codice HS) e `country` di origine.

## Pickup
Quando `delivery_type` è pickup, il cliente sceglie una località. Cerca le località tramite gli endpoint delle delivery options (vedi la [guida Delivery options](./delivery-options.md)) e passa la località scelta nell'oggetto `pickup` (`location_code`, `retail_network_id`, campi indirizzo).

## Creare una spedizione
```
POST https://api.myparcel.nl/shipments
Content-Type: application/json;charset=utf-8
Authorization: bearer BASE64_ENCODED_API_KEY

{
  "data": {
    "shipments": [
      {
        "carrier": 1,
        "reference_identifier": "ORDER-2026-01042",
        "recipient": {
          "cc": "NL",
          "person": "J. de Vries",
          "street": "Hoofdstraat",
          "number": "42",
          "postal_code": "1012AB",
          "city": "Amsterdam"
        },
        "options": {
          "package_type": 1,
          "signature": 1
        },
        "physical_properties": { "weight": 1500 }
      }
    ]
  }
}
```

La risposta restituisce l'`id` della nuova spedizione. Vedi [`POST /shipments` nel riferimento](../../api/myparcel.md) per lo schema completo.

::: tip Multicollo
Per spedire più colli allo stesso indirizzo nello stesso giorno come un'unica spedizione, aggiungi un array `secondary_shipments`. Vedi il riferimento per la forma esatta.
:::

## Etichette
Recupera le etichette con `GET /shipment_labels/{ids}` (separa più ID con un punto e virgola). L'header `Accept` decide il formato:

- `application/pdf` — l'etichetta come PDF (predefinito).
- `application/json` — un link di download invece del binario.

Usa `format` (`A4` o `A6`) e `positions` per controllare la posizione sul foglio. Per lotti grandi (25+ etichette) richiedi un link invece del binario inline — il file diventa disponibile poco dopo.

## Track & trace
Recupera il tracking con `GET /tracktraces/{ids}`. La risposta contiene la cronologia degli stati e i momenti di consegna. Non fare polling su questo endpoint: iscriviti ai [webhook](./webhooks.md) per ricevere i cambi di stato.

## Annullamento
Annulla una spedizione con `DELETE /shipments/{ids}`. Solo le spedizioni ancora in stato di **bozza** possono essere annullate; un annullamento riuscito restituisce `204 No Content`. Se una spedizione è già registrata o consegnata al vettore, crea invece un reso.

## Resi
Crea un reso con `POST /return_shipments`. I resi possono essere **collegati** a una spedizione originale o **non collegati** (standalone), scelti tramite il media type della richiesta (`application/vnd.return_shipment+json` o `application/vnd.unrelated_return_shipment+json`). Vedi il [riferimento API](../../api/myparcel.md).

## Shipment rates
`POST /shipments/rates` restituisce il prezzo di una spedizione prima di crearla. Usalo per mostrare i costi di spedizione o confrontare le opzioni. Vedi il [riferimento API](../../api/myparcel.md) per il body della richiesta.

## Capabilities
I vettori differiscono in ciò che supportano (tipi di pacco, tipi di consegna, opzioni). Scoprilo dinamicamente invece di scriverlo nel codice:

- `POST /shipments/capabilities` — le capabilities di un vettore per il tuo platform.
- `POST /shipments/capabilities/contract-definitions` — le opzioni legate a un contratto specifico.

Usa le capabilities per costruire un checkout o un'interfaccia admin che offra solo ciò che il vettore selezionato supporta davvero.
