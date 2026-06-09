---
title: Ordini
description: "Un ordine è un ordine da sales channel all'interno del fulfilment MyParcel. Questa guida spiega l'oggetto Order, le righe d'ordine e gli endpoint dell'Order API che importano, interrogano e preparano gli ordini per la spedizione."
---

## Panoramica
Un **ordine** rappresenta un ordine da sales channel all'interno del flusso di fulfilment di MyParcel. Mentre una [spedizione](./shipments.md) è il collo che viaggia verso il destinatario, un ordine è il record commerciale — prodotti, quantità, dati cliente e di fatturazione — che importi e poi prepari per la spedizione.

L'Order API è su `order.api.myparcel.nl`. Il [riferimento Order API](../../api/order.md) è la fonte di verità per gli schemi di richiesta e risposta.

## L'oggetto Order
Campi principali:

- **id** / **shortId** — identificatori.
- **status** — lo stato di elaborazione dell'ordine.
- **orderedAt** — quando l'ordine è stato effettuato.
- **price** — il totale dell'ordine.
- **billingDetails** — indirizzo e dati di fatturazione.
- **customerReference** / **externalReferences** — il tuo riferimento e quelli del sales channel.
- **lines** — le righe d'ordine (vedi sotto).
- **notes** — note libere sull'ordine.
- **packages** — i package preparati per la spedizione.
- **shipping** — i dati di spedizione.
- **assignedUserId** — l'utente a cui è assegnato l'ordine.

## Righe d'ordine
Ogni voce in `lines` ha **id**, **product**, **quantity**, **price** ed **externalReference**.

## Lavorare con gli ordini
L'Order API è command-style — ogni azione ha il proprio endpoint:

| Endpoint | Scopo |
| --- | --- |
| `POST /import` | Importa un ordine scoperto da un sales channel. |
| `GET /orders` | Interroga e filtra gli ordini. |
| `POST /add-note` / `POST /edit-note` | Aggiungi o modifica una nota su un ordine. |
| `POST /assign-to-user` | Assegna gli ordini a un utente. |
| `POST /cancel` | Annulla gli ordini. |
| `POST /add-packages` | Aggiungi package agli ordini. |
| `POST /create-from-shippable-packages` | Crea un ordine da package spedibili. |
| `POST /prepare-packages-for-shipment` | Prepara i package di un ordine per la spedizione. |
| `POST /unprepare-packages-for-shipment` | Annulla il passo di preparazione. |

Vedi il [riferimento Order API](../../api/order.md) per i body delle richieste.

## Dall'ordine alla spedizione
Preparare i package per la spedizione trasforma i package di un ordine in spedizioni che puoi etichettare e tracciare con l'API MyParcel — vedi la [guida Spedizioni](./shipments.md).

## Autenticazione
L'Order API si autentica tramite l'header `Authorization` — una API key o un JWT bearer token, con accesso basato su ruoli. Vedi [Autenticazione](./authentication.md) per il modello generale e il [riferimento Order API](../../api/order.md) per lo schema esatto e i ruoli.
