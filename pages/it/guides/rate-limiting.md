---
title: Rate limiting
description: "La API MyParcel limita la frequenza con cui puoi chiamare ogni endpoint. Scopri come funziona la sliding window, cosa significa un 429 e come restare entro i limiti."
---

## Panoramica
La API MyParcel applica un **rate limit per combinazione di metodo + endpoint**, tramite una **sliding window**. Se superi un limite ricevi `429 Too Many Requests` e la richiesta viene ignorata.

Ogni combinazione ha il proprio contatore. `GET /shipments/{ids}` e `POST /shipments`, ad esempio, sono limitati in modo indipendente — esaurirne uno non influisce sull'altro.

## Come funziona la sliding window
- Ogni richiesta conta verso il limite di quella esatta combinazione metodo + endpoint.
- Raggiunto il limite, le ulteriori chiamate restituiscono `429` finché la finestra non avanza.
- **Anche le chiamate `429` fallite contano.** Riprovare subito mantiene pieno il contatore ed estende il blocco — inserisci invece una pausa.
- Una combinazione di solito si libera di nuovo dopo circa **5 minuti**.

::: warning Non riprovare in un loop serrato
Dopo un `429`, attendi prima di riprovare. Continuare a chiamare l'endpoint azzera il timer e ti tiene bloccato più a lungo.
:::

## Esempio pratico
Invii **100 richieste GET in 15 secondi** a un endpoint con limite **100 chiamate / 5 minuti**. Raggiungi il limite quasi subito e resti bloccato per circa **4 minuti e 45 secondi** — finché la finestra non supera il tuo picco. Le chiamate `POST` sullo stesso percorso non sono interessate, perché hanno il proprio limite.

## Limiti attuali
Questi sono limiti indicativi per endpoint comuni. I valori esatti possono cambiare.

| Metodo | Endpoint | Limite |
| --- | --- | --- |
| `GET` | `/` | 30 / 5 min |
| `GET` | `/delivery_options` | 60 / 1 min |
| `GET` | `/drop_off_points` | 300 / 5 min |
| `POST` | `/shipments` | 500 / 5 min |
| `GET` | `/shipments/{ids}` | 1000 / 5 min |
| `POST` | `/webhook_subscriptions` | 30 / 5 min |

::: tip Queste cifre sono indicative
I rate limit non fanno parte della spec OpenAPI e possono cambiare nel tempo. Considera la tabella come una linea guida, gestisci i `429` in modo difensivo nel codice e contatta MyParcel se ti servono limiti più alti.
:::

## Restare entro i limiti
- **Non fare polling sullo stato.** Usa i [webhook](./webhooks.md) per ricevere aggiornamenti invece di chiamare ripetutamente `GET`.
- **Raggruppa quando puoi.** Molti endpoint accettano più ID in una chiamata — recupera più spedizioni insieme invece di una per richiesta.
- **Applica un back-off sul `429`.** Fai una pausa (qualche minuto) prima di riprovare e distribuisci i picchi di traffico.

Vedi [Requests](./requests.md) per le convenzioni generali delle richieste.
