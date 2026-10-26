---
title: Autenticazione
description: "Ogni richiesta all'API MyParcel si autentica con l'API key del tuo shop, codificata in base64, nell'header Authorization."
---

## Ottieni la tua API key
Accedi a [backoffice.myparcel.nl](https://backoffice.myparcel.nl) e apri **Impostazioni shop → Integrazione**. Copia l'API key, oppure generane una se non esiste ancora.

Conserva la key sul tuo server. Chi la possiede può creare spedizioni e leggere dati per conto del tuo shop, quindi non inviarla mai a un browser e non includerla mai in un repository.

## Inviala con ogni richiesta
Codifica la key in base64 e inviala nell'header `Authorization` con lo schema `bearer`:

```
GET https://api.myparcel.nl/shipments
Accept: application/json;charset=utf-8
Authorization: bearer <API key codificata in base64>
```

In una shell usa `printf` invece di `echo`, così nessun a capo finisce nella key codificata:

```
curl https://api.myparcel.nl/shipments \
  -H "Accept: application/json;charset=utf-8" \
  -H "Authorization: bearer $(printf '%s' "$MYPARCEL_API_KEY" | base64)"
```

In PHP:

```php
$headers = [
    'Authorization' => 'bearer ' . base64_encode($apiKey),
];
```

Il [PHP SDK v10](php-sdk.md) invia la stessa key codificata con lo schema `basic`. Gli esempi di questa documentazione usano `bearer`, come fanno gli attuali plugin MyParcel.

## Quando una richiesta viene rifiutata
Una risposta `401 Unauthorized` significa che la key manca, non è codificata in base64 o non è più valida. Verifica di codificare la key stessa, senza spazi né a capo finale. Se la key è stata sostituita nel backoffice, copia quella nuova.

## Con un SDK
Il [PHP SDK v12](../../guides/php-sdk-v12.md) accetta l'API key come argomento del costruttore, oppure la legge dalla variabile d'ambiente `API_KEY`, e crea l'header per te.

Pubblichi un'integrazione che altri merchant installano? Usa invece [MyParcel Connect](../../guides/php-sdk-v12.md#myparcel-connect), così il merchant autorizza il proprio shop e tu non gestisci mai la sua API key.
