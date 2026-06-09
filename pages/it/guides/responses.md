---
title: Responses
description: "Cosa restituisce la API MyParcel: JSON per impostazione predefinita, PDF e CSV per etichette ed esportazioni, l'envelope di risposta e i codici di stato HTTP che puoi aspettarti."
---

## Panoramica
La maggior parte degli endpoint restituisce JSON. Ci sono alcune eccezioni:

- **Etichette e fatture** arrivano come **PDF**.
- **Alcune esportazioni** arrivano come **CSV**.
- Un **`DELETE`** restituisce `204 No Content` senza body.
- Le operazioni lunghe (come creare spedizioni o un'esportazione CSV) possono restituire **`202 Accepted`** mentre vengono elaborate.

## L'envelope di risposta
Le risposte JSON andate a buon fine racchiudono il risultato in un oggetto `data` di primo livello, indicizzato per risorsa:

```json
{
  "data": {
    "shipments": [
      { "id": 100000001 }
    ]
  }
}
```

I campi esatti per risorsa sono documentati nel [riferimento API](../../api/myparcel.md) — usalo come fonte di verità invece di copiare le strutture a mano.

## Codici di stato HTTP
| Codice | Significato |
| --- | --- |
| `200 OK` | Richiesta riuscita con un body di risposta. |
| `202 Accepted` | Accettata per elaborazione asincrona (es. spedizioni, CSV). |
| `204 No Content` | Riuscita senza body — di solito dopo un `DELETE`. |
| `304 Not Modified` | La risorsa non è cambiata rispetto alla tua copia in cache. |
| `400 Bad Request` | La richiesta è malformata. |
| `401 Unauthorized` | API key mancante o errata. Vedi [Autenticazione](./authentication.md). |
| `402 Payment Required` | È necessario un pagamento; la risposta può includere una fattura. |
| `403 Forbidden` | La tua key non è autorizzata per questa azione. |
| `404 Not Found` | La risorsa non esiste. |
| `405 Method Not Allowed` | Quel metodo HTTP non è supportato su questo endpoint. |
| `406 Not Acceptable` | Il formato di risposta richiesto non è supportato. |
| `409 Conflict` | La richiesta è in conflitto con lo stato attuale della risorsa. |
| `415 Unsupported Media Type` | Il `Content-Type` non è supportato. |
| `422 Unprocessable Entity` | JSON valido, ma la validazione fallisce. |
| `5xx` | Un problema lato MyParcel — riprova più tardi. |

## Errori
Una risposta `4xx` contiene un body di errore con un messaggio leggibile e uno o più codici di errore. Usa quei codici per gestire i fallimenti in modo programmatico, invece di analizzare il testo del messaggio.

::: tip Leggere i codici di errore
Il catalogo completo e leggibile dei codici di errore arriverà nella guida **Errors**. Fino ad allora, le risposte di errore per endpoint sono nel [riferimento API](../../api/myparcel.md).
:::
