---
title: Drop-off points
description: "Cerca punti di consegna e punti di ritiro tramite l'API — dove consegni i colli al vettore e dove i destinatari li ritirano."
---

## Panoramica
Esistono due lookup di località correlate:

- **Drop-off points** (`GET /drop_off_points`) — località dove tu, il mittente, consegni i colli a un vettore.
- **Pickup locations** (`GET /pickup_locations`) — località dove il destinatario ritira un collo (con il [tipo di consegna](./data-types.md#delivery_type) pickup).

Entrambe restituiscono località ordinate per distanza da un codice postale o da coordinate. In un checkout di solito non le chiami direttamente — lo fa il [widget Delivery options](./delivery-options.md). Chiamale tu quando costruisci un'interfaccia personalizzata.

## Drop-off points
```
GET https://api.myparcel.nl/drop_off_points
```

Parametri query:

- **postal_code** — obbligatorio, salvo che tu cerchi per coordinate.
- **cc** — codice paese.
- **carrier_id** — filtra per [vettore](./data-types.md#carrier).
- **distance** — raggio di ricerca in chilometri.
- **latitude** & **longitude** — da usare insieme come alternativa a `postal_code`.

Invia un header `User-Agent` che identifichi la tua integrazione (vedi [Requests](./requests.md)).

La risposta è un array di località, ciascuna con `location_code`, `location_name`, campi indirizzo, `latitude`/`longitude`, `distance` (in metri), `available_days`, `cut_off_time`, `carrier_id` e `opening_hours`. Vedi il [riferimento API](../../api/myparcel.md) per lo schema completo.

## Pickup locations
```
GET https://api.myparcel.nl/pickup_locations
```

Restituisce le località dove il destinatario può ritirare il collo. Usalo quando offri il tipo di consegna pickup fuori dal widget. Passa la località scelta nell'oggetto `pickup` della spedizione — vedi [Spedizioni · Pickup](./shipments.md#pickup).

## Nel checkout
Se usi il [widget Delivery options](./delivery-options.md), il lookup dei punti di ritiro e l'interfaccia lista/mappa sono integrati — il tuo frontend riceve la `pickupLocation` scelta nell'evento di selezione. Usa questi endpoint direttamente solo per integrazioni personalizzate.
