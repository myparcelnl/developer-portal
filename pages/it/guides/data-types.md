---
title: Tipi di dato
description: "Tipi di valore ed enum comuni nelle API MyParcel — identificatori, valori monetari, date, platform, vettori, tipi di pacco e di consegna."
---

## Come leggere questa pagina
Questi tipi di valore compaiono in tutte le API MyParcel. Per lo schema esatto di un campo, il [riferimento API](../../api/myparcel.md) è la fonte di verità — questa guida raccoglie gli enum e le convenzioni comuni in un unico posto.

## Identificatori
Spedizioni, ordini, punti di ritiro e sottoscrizioni webhook sono identificati da **ID interi** (numeri grandi come `100000001`).

## Valori monetari
I valori monetari sono interi in **centesimi (EUR)**, salvo quando il nome del campo indica diversamente.

```
{ "insurance": 25000 /* = € 250,00 */ }
```

## Date e orari
I campi data-ora sono restituiti come stringhe; controlla il campo nel [riferimento API](../../api/myparcel.md) per il formato esatto. Alcuni tipi di supporto usano un formato fisso:

- **weekday** — come stringa (`monday` … `sunday`) o cifra (`0` = domenica … `6` = sabato).
- **month** — come stringa di due cifre (`01` … `12`).

## Codici paese e lingua
- Paesi: ISO 3166-1 alpha-2 (`NL`, `BE`, `DE`, `FR`, …).
- Lingue: ISO 639-1 (`nl`, `en`, `de`, `fr`, …).

## platform
Indica a quale platform MyParcel appartiene un account o una richiesta:

| Valore | Platform |
| --- | --- |
| `myparcel` | MyParcel (Paesi Bassi) |
| `belgie` | SendMyParcel (Belgio) |

Alcuni endpoint usano anche un identificatore numerico di platform (`1` = MyParcel, `2` = Flespakket, `3` = SendMyParcel / Belgio). Vedi il parametro `platform` nel [riferimento API](../../api/myparcel.md).

## carrier
I vettori sono indicati con un ID numerico. Quali vettori puoi usare dipende dal tuo account e dal platform.

| ID | Vettore | Note |
| --- | --- | --- |
| 1 | PostNL | |
| 2 | bpost | solo SendMyParcel.be |
| 3 | CheapCargo / pallet | |
| 4 | DPD | |
| 9 | DHL For You | |
| 10 | DHL Parcel Connect | |
| 11 | DHL Europlus | |
| 12 | UPS Standard | solo MyParcel.nl |
| 13 | UPS Express Saver | solo MyParcel.nl |
| 14 | GLS | solo MyParcel.nl |
| 15 | BRT | |
| 16 | Trunkrs | |
| 17 | InPost | |
| 18 | PosteItaliane | |

Gli ID `5`–`8` sono deprecati (Instabox, DHL CheapCargo, BOL, UPS) e non vanno usati. Considera questa tabella come una linea guida e conferma l'elenco attuale nel [riferimento API](../../api/myparcel.md).

## package_type
| ID | Tipo | Note |
| --- | --- | --- |
| 1 | package | Pacco normale. |
| 2 | mailbox package | Entra nella buca delle lettere. |
| 3 | letter | |
| 4 | digital stamp | |
| 5 | pallet | |
| 6 | small package | |
| 7 | envelope | solo DHL For You |

## delivery_type
| ID | Tipo |
| --- | --- |
| 1 | morning |
| 2 | standard |
| 3 | evening |
| 4 | pickup |

## package_contents
Usato per la dogana nelle spedizioni fuori dall'UE.

| ID | Contenuto |
| --- | --- |
| 1 | commercial goods |
| 2 | commercial samples |
| 3 | documents |
| 4 | gifts |
| 5 | return shipment |

## label_position
Posizione della prima etichetta su un foglio A4.

| ID | Posizione |
| --- | --- |
| 1 | in alto a sinistra |
| 2 | in alto a destra |
| 3 | in basso a sinistra |
| 4 | in basso a destra |

## Altri tipi di valore
- **order_status** — `open`, `partially_processed`, `processed`, `cancelled`.
- **paper_size** — `a4` o `a6`.
- **sort_order** — `ASC` o `DESC`.

## Errori
Le risposte di errore condividono una struttura comune con un codice e un messaggio. Vedi [Responses](./responses.md) per i codici di stato; il catalogo leggibile dei codici di errore arriverà nella guida Errors.
