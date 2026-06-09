---
title: Autenticazione
description: "Autentica ogni richiesta della API MyParcel con una API key codificata in base64 dal tuo Backoffice, inviata nell'header Authorization."
---

## La tua API key
Ogni richiesta è autenticata con una **API key** che generi nel Backoffice MyParcel, nelle impostazioni di integrazione del tuo negozio. La key identifica il tuo account e ne porta i permessi.

::: warning Tieni segreta la tua key
Conserva la key sul tuo server. Chiunque la possieda può spedire — e fatturare — sul tuo account. Non esporla mai in un browser, un'app mobile o un repository pubblico.
:::

## Codifica la key
Codifica la tua API key in base64 prima di inviarla. Ad esempio, la key `abc123` diventa:

```
echo -n 'abc123' | base64
# YWJjMTIz
```

La maggior parte dei linguaggi ha una funzione base64 integrata — non serve codificare a mano.

## Inviala nell'header Authorization
Invia la key codificata nell'header `Authorization` ad ogni richiesta, con lo schema `bearer`:

```
GET https://api.myparcel.nl/shipments
Authorization: bearer BASE64_ENCODED_API_KEY
```

La API accetta anche lo schema `basic` con la stessa key codificata in base64:

```
Authorization: basic BASE64_ENCODED_API_KEY
```

Entrambi gli schemi sono documentati nel [riferimento API](../../api/myparcel.md).

## Gestire la tua key
- **Invalidala rigenerandola.** Per revocare una key, generane una nuova nel Backoffice — la vecchia smette di funzionare immediatamente.
- **Una key, un account.** Ogni key appartiene a un singolo account MyParcel e ne porta i permessi.
- Una risposta **`401 Unauthorized`** significa che la key manca, è errata o non è più valida. Vedi [Responses](./responses.md) per i codici di stato.
