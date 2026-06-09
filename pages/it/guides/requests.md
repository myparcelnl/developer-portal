---
title: Requests
description: "Come chiamare la API MyParcel: base URL, metodi HTTP, header, la convenzione User-Agent e i content-type. Il riferimento OpenAPI resta la fonte di verità per ogni endpoint."
---

## Panoramica
Le API MyParcel sono basate su REST e parlano JSON su HTTPS. Crei e leggi oggetti con i metodi HTTP standard, e ogni endpoint è documentato nel [riferimento API](../../api/myparcel.md) generato automaticamente — quel riferimento è sempre la fonte di verità per percorsi, parametri e schemi.

## Base URL
La Shipment API è su `https://api.myparcel.nl`. Le altre API MyParcel hanno ciascuna il proprio host:

| API | Base URL |
| --- | --- |
| Shipment | `https://api.myparcel.nl` |
| Order | `https://order.api.myparcel.nl` |
| Rule | `https://rule.api.myparcel.nl` |
| Address | `https://address.api.myparcel.nl` |
| Printing | `https://printing.api.myparcel.nl` |
| Product | `https://product.api.myparcel.nl` |

Tutto il traffico passa via HTTPS. L'HTTP semplice non è supportato.

## Autenticazione
Autentica ogni richiesta con la tua API key codificata in base64. Vedi la [guida Autenticazione](./authentication.md) per l'header esatto.

## Metodi HTTP
La API segue la semantica REST standard.

| Metodo | Uso | Note |
| --- | --- | --- |
| `GET` | Leggere un oggetto o una lista | Idempotente. Può restituire JSON, PDF, CSV o XML a seconda dell'endpoint. |
| `POST` | Creare un oggetto o inviare dati | — |
| `PUT` | Creare o sostituire completamente un oggetto | — |
| `DELETE` | Rimuovere un oggetto | Restituisce `204 No Content` salvo diversa indicazione. |

Non tutti i metodi sono disponibili su tutti gli endpoint. Controlla nel [riferimento API](../../api/myparcel.md) quali metodi supporta ogni percorso.

## Header
- **`Content-Type`** — usa `application/json;charset=utf-8` per i body JSON. Vedi [Character encoding](./character-encoding.md).
- **`Accept`** — imposta il formato che ti aspetti (es. `application/json`). Alcuni endpoint usano un media type vendor come `application/vnd.shipment+json`; il [riferimento API](../../api/myparcel.md) indica il tipo esatto per endpoint.
- **`Authorization`** — la tua API key (vedi [Autenticazione](./authentication.md)).
- **`User-Agent`** — identifica la tua integrazione (vedi sotto).

## La convenzione User-Agent
Invia un header `User-Agent` che identifichi la tua integrazione. Aiuta il supporto MyParcel a ricondurre i problemi al plugin o al backend giusto.

```
User-Agent: MyParcel-<integrazione>/<versione> <cms>/<versione> <backend>/<versione>
```

Esempio:

```
User-Agent: MyParcel-MyFirstCMS/1.0.0 MyFirstCMS/3.0.0 PHP/8.1.0
```

::: tip Stai costruendo un'integrazione pubblica?
Contatta MyParcel affinché la tua integrazione venga riconosciuta nell'User-Agent.
:::

## Formati di risposta
La maggior parte degli endpoint restituisce JSON. Alcuni restituiscono binario o testo — etichette e fatture arrivano come **PDF**, e alcune esportazioni come **CSV**. Vedi [Responses](./responses.md) per i codici di stato e l'envelope di risposta.

## Rate limiting
La API applica un rate limit per endpoint tramite una sliding window. Se superi un limite ricevi `429 Too Many Requests`. Attendi qualche minuto prima di riprovare, invece di martellare l'endpoint. Se raggiungi spesso i limiti, contatta MyParcel per opzioni come i webhook.

## Richiesta di esempio
```
GET https://api.myparcel.nl/
Accept: application/json;charset=utf-8
Authorization: bearer <API key codificata in base64>
User-Agent: MyParcel-MyFirstCMS/1.0.0 MyFirstCMS/3.0.0 PHP/8.1.0
```
