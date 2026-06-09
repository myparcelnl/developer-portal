---
title: Errori
description: "Come MyParcel segnala gli errori: l'oggetto error, gli intervalli di codici per categoria e un catalogo dei codici di errore comuni. Gestisci gli errori in base al codice, non al testo del messaggio."
---

## Panoramica
Ogni risposta `4xx` e `5xx` contiene un errore strutturato così puoi gestirlo in modo programmatico. Ramifica sul **codice**, non sul testo del messaggio — i messaggi possono cambiare, i codici no.

## L'oggetto error
Gli errori tornano in un array `errors`, ciascuno con un `code` e un `message`:

```json
{
  "errors": [
    { "code": 3505, "message": "Invalid postal code" }
  ],
  "message": "[3505] Invalid postal code"
}
```

Il [riferimento API](../../api/myparcel.md) contiene lo schema d'errore autorevole per endpoint.

## Intervalli dei codici
I codici sono raggruppati per categoria, ogni intervallo copre un ambito:

| Intervallo | Categoria |
| --- | --- |
| 3000–3001 | Autenticazione |
| 3100–3107 | Header della richiesta |
| 3200–3223 | Parametri query |
| 3500–3520 | Validazione indirizzo |
| 3700–3768 | Operazioni spedizione |
| 4000–4001 | Consegna / località |
| 5000 | Validazione data |
| 10001–10003 | Webhook |

## Codici di errore comuni
| Codice | Significato | Cosa fare |
| --- | --- | --- |
| `3000` | Accesso negato | Controlla la tua [API key](./authentication.md) e i permessi. |
| `3103` | Header authorization non valido | Codifica la key in base64 e usa lo schema `bearer`/`basic`. |
| `3201` | Parametro query non valido: `size` | Correggi il parametro query. |
| `3505` | Codice postale non valido | Correggi il codice postale del destinatario. |
| `3704` | Physical properties non valide (lunghezza, larghezza, altezza, peso) | Fornisci dimensioni/peso validi. |
| `3717` | Impossibile aggiornare la spedizione | La spedizione non è più modificabile nel suo stato attuale. |
| `3728` | Vettore non supportato | Usa un [vettore](./data-types.md#carrier) abilitato per il tuo account/platform. |
| `3751` | Email e telefono mancanti nel destinatario | Aggiungi un'email o un telefono — obbligatorio per questo vettore/destinazione. |
| `4000` | Nessuna località più vicina trovata | Allarga la ricerca o controlla il codice postale usato per la ricerca dei punti. |
| `5000` | Data non valida | Usa il formato `YYYY-MM-DD HH:MM:SS` e una data di consegna valida. |
| `10002` | URL webhook non valido | Usa un URL HTTPS in minuscolo — vedi [Webhook](./webhooks.md). |

Questa è una selezione rappresentativa. L'elenco completo e attuale dei codici è pubblicato per endpoint nel [riferimento API](../../api/myparcel.md).

## Gestire gli errori
- **`401`** — autenticazione fallita. Vedi [Autenticazione](./authentication.md).
- **`422`** — i dati sono JSON valido ma falliscono la validazione; leggi i codici in `errors[]` e correggi i campi interessati.
- **`429`** — hai raggiunto un rate limit; applica un back-off e riprova più tardi.
- **`5xx`** — un problema lato MyParcel; riprova dopo una breve pausa.

Vedi [Responses](./responses.md) per l'elenco completo dei codici di stato.
