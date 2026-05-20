---
title: Magento 2
description: "Da zero al pacco spedito su Magento 2 — installa il plugin via Composer, collega il tuo account MyParcel, scegli un profilo shop e oggi stesso spedisci la tua prima etichetta. Con avvio rapido, profili shop, riferimento impostazioni, workflow quotidiano e una tabella diagnostica."
---

::: tip In breve
Il plugin MyParcel collega il tuo shop Magento 2 a MyParcel. I clienti scelgono al checkout un momento di consegna o un pickup point, tu stampi le etichette dall'admin Magento e il Track & Trace va automaticamente al cliente. Pensato per proprietari e gestori di shop — nessuna conoscenza da developer necessaria dopo l'installazione iniziale via Composer.
:::

## Avvio rapido — il primo pacco in 15 minuti
Sufficiente per spedire oggi stesso il tuo primo ordine reale. Per configurazioni più approfondite vedi [Cosa stai cercando?](#cosa-stai-cercando) qui sotto.

1. **Account.** Non hai ancora un account MyParcel? Creane uno su [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Copia API key.** Accedi a [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Impostazioni shop → Integrazione* → copia l'API key.
3. **Installa il plugin.** Fai eseguire al tuo developer o al tuo hosting `composer require myparcelnl/magento && bin/magento setup:upgrade && bin/magento setup:di:compile && bin/magento cache:flush`.
4. **Collega il plugin.** Apri **Stores → Configuration → MyParcel → Settings**, incolla la tua API key in *API key*, clicca **Save Config** e poi **Import MyParcel Backoffice settings**.
5. **Prima etichetta.** Apri *Sales → Orders* → scegli un ordine pagato → **Print MyParcel Label** → controlla tipo di pacco/opzioni → **Create**.

::: tip Hai finito quando vedi questo
- Sotto *Stores → Configuration → MyParcel*: hai una API key valida salvata
- I tab vettore appaiono dopo *Import MyParcel Backoffice settings*
- Un ordine di test puoi esportarlo via **Print MyParcel Label**
:::

## Cosa stai cercando?
| Cosa vuoi fare? | Vai a |
| --- | --- |
| Configurazione iniziale | [Avvio rapido](#avvio-rapido-il-primo-pacco-in-15-minuti) |
| Impostazioni consigliate per il tuo tipo di shop | [4 · Qual è il tuo profilo shop?](#4-qual-e-il-tuo-profilo-shop) |
| Impostazioni generali del plugin | [5 · Impostazioni · General](#5-impostazioni-general) |
| Opzioni specifiche per vettore | [6 · Impostazioni · Vettori](#6-impostazioni-vettori) |
| Un'impostazione diversa per prodotto | [7 · Impostazioni prodotto](#7-impostazioni-prodotto) |
| Cosa vede un cliente al checkout | [8 · L'esperienza di checkout](#8-l-esperienza-di-checkout) |
| Elaborazione bulk per 50+ ordini/giorno | [9 · Uso quotidiano](#9-uso-quotidiano) |
| Qualcosa non funziona | [10 · Qualcosa non funziona — diagnostica](#10-qualcosa-non-funziona-diagnostica) |
| Risposta a una domanda frequente | [11 · FAQ](#11-faq) |

## 1 · Preparare il tuo account MyParcel
Prima di iniziare in Magento, sistema quattro cose nel tuo backoffice MyParcel:

1. **Indirizzo di fatturazione e reso** — *Impostazioni shop → Generale*. Appare su tutte le etichette.
2. **Attivare i vettori** — *Impostazioni shop → Vettori*. Solo i vettori spuntati appariranno poi nel plugin.
3. **Generare API key** — *Impostazioni shop → Integrazione*.
4. **Importa informazioni ordine** (opzionale) — attiva se vuoi usare la [Modalità ordine](#api-settings).

## 2 · Installare il plugin
Il plugin Magento si installa via Composer. Fai eseguire al tuo developer o al tuo hosting i seguenti comandi sul server:

```bash
composer require myparcelnl/magento
bin/magento setup:upgrade
bin/magento setup:di:compile
bin/magento cache:flush
```

::: details Hyvä-checkout?
Installa anche il modulo di compatibilità oltre a quanto sopra:

```bash
composer require hyva-themes/magento2-hyva-checkout-myparcelnl
bin/magento setup:upgrade
```
:::

::: warning Il vecchio modulo PakjeGemak è ancora attivo?
Disattivalo prima di iniziare con questo plugin. Due plugin MyParcel insieme generano etichette duplicate.
:::

Dopo l'installazione trovi il plugin sotto **Stores → Configuration → MyParcel**.

## 3 · Collegare il plugin (API key)
Apri **Stores → Configuration → MyParcel → Settings** e incolla la tua API key in alto nel campo *API key*. Clicca poi su **Save Config**.

1. Accedi al backoffice MyParcel.
2. Vai a *Impostazioni shop → Integrazione*.
3. Copia l'API key (di solito 40 caratteri).
4. Incollala in Magento e salva.

Con il pulsante **Import MyParcel Backoffice settings** recuperi le tue impostazioni di contratto e vettore in un click. I tab vettore appaiono solo dopo questo import.

![Impostazioni MyParcel con campo API key e pulsante Import MyParcel Backoffice settings.](../../platforms/images/magento2/01-api-settings.svg) Dopo una key valida appaiono i tab vettore.

::: warning Non funziona?
Cause più comuni: non hai cliccato *Save Config* · spazio copiato prima/dopo la key · key di un altro shop · cache non svuotata (`bin/magento cache:flush`).
:::

### Cosa fa il plugin nell'admin Magento?
| Dove? | Cosa puoi fare? |
| --- | --- |
| **Stores → Configuration → MyParcel** | Tutte le impostazioni — *Version and support* e *Settings* (un tab per vettore). |
| **Sales → Orders → \[ordine\] → Print MyParcel Label** | Crea etichetta per un ordine specifico, incluso modificare tipo di pacco e opzioni per ordine. |
| **Catalog → Products → \[prodotto\] → MyParcel Options** | Impostazioni specifiche del prodotto (dropoff-delay, age check, mailbox-fit, HS code, ecc.) che sovrascrivono i default globali. |

## 4 · Qual è il tuo profilo shop?
Tre profili tipici con impostazioni consigliate. Scegline uno, applica le impostazioni, poi affina con [5 · Impostazioni · General](#5-impostazioni-general).

### Piccolo — pochi ordini al giorno, solo NL
| Impostazione | Consigliato | Perché |
| --- | --- | --- |
| Mode (Print settings) | *Concept* | Ti tiene sotto controllo mentre impari |
| Drop-off delay | 1 | Gli ordini vengono elaborati il giorno dopo |
| Paper type | A4 | Nessuna stampante etichette necessaria |
| Number of days | 7 | Il cliente può scegliere una settimana avanti |
| PostNL — *Delivery enabled* | Yes | Vettore standard NL |
| Insure orders from (€) | 250 | Pacchi sopra €250 assicurati automaticamente |

### Shop attivo — 50+ ordini/giorno
| Impostazione | Consigliato | Perché |
| --- | --- | --- |
| Mode (Print settings) | *Direct* | Più veloce — etichette subito definitive |
| Paper type | A6 (stampante etichette Zebra/Brother) | Stampa più veloce |
| Drop-off delay | 0 (o 1 in alta stagione) | Giorni lavorativi tra ordine e consegna |
| Bulk *Create & print MyParcel track(s)* | On | Elabora 50+ ordini in un click |
| PostNL + DHL For You | Entrambi attivi | Ampia copertura |
| Automate signature on receipt — From price | 250 | Sopra €250 firma obbligatoria |

### Solo cassetta postale — caffè, cartoline, cosmetici
| Impostazione | Consigliato | Perché |
| --- | --- | --- |
| Mailbox settings — *Automate mailbox* | Yes | Spedisci automaticamente come pacco da cassetta postale con misure/peso adatti |
| Mailbox weight | 2000 g (max) | Peso soglia per pacco da cassetta postale |
| Per prodotto *Fit in mailbox* | Realistico (es. 5) | Numero di pezzi per pacco da cassetta postale |
| Pickup active | No | Per cassetta postale niente scelta di ritiro |
| Insure orders | No | Non disponibile per pacco da cassetta postale |

::: tip Altri scenari?
Per gioielli costosi, internazionale o requisiti speciali — vedi [11 · FAQ](#11-faq) o i profili shop estesi nel [manuale WooCommerce](./woocommerce.html#4-qual-e-il-tuo-profilo-shop) (applicabili a tutte le piattaforme).
:::

## 5 · Impostazioni · General
Il tab generale gestisce il collegamento, le regole dei costi di spedizione, i giorni di consegna, le impostazioni di stampa e l'aspetto del blocco MyParcel al checkout.

![Tab General settings con sezioni API, Delivery costs, Date settings, Print settings e Delivery methods.](../../platforms/images/magento2/02-general-settings.svg)

### API settings
- **API key** — collega il tuo shop a MyParcel. Senza una key valida le opzioni di consegna non funzionano.
- **Import MyParcel Backoffice settings** — recupera le tue impostazioni attuali di contratto e vettore da MyParcel.

### Delivery costs
Definisce quale prezzo di spedizione i clienti vedono al checkout. Ogni regola consiste di un *Rule name*, un *Price* e una o più condizioni (peso, tipo di pacco, paese). Es. *"Pacco da cassetta postale entro Paesi Bassi < 12 kg"* con prezzo €4,97.

- **Show or hide JSON textarea** — vista avanzata per chi vuole modificare le regole come JSON.
- **Use Free Shipping** — rispetta le regole di spedizione gratuita di Magento.

### Date settings
- **Number of days** — quanti giorni in avanti i clienti possono scegliere un giorno di consegna. Predefinito 7.
- **Drop-off delay** — giorni lavorativi tra ordine e consegna al vettore. Imposta su 1 se elabori gli ordini solo il giorno successivo.

### Print settings
- **Mode** — *Concept* (prima nel backoffice MyParcel) o *Direct* (subito definitivo).
- **Paper type** — *A4* (stampante standard) o *A6* (stampante etichette).
- **Label description** — testo sull'etichetta, con variabili come `%order_nr%`.
- **Country of origin** — paese di origine per spedizioni internazionali. Predefinito NL.
- **Create Concept** — etichette prima come concept così puoi ancora modificare.
- **Return in the box** — aggiunge automaticamente un'etichetta di reso.
- **I use the following weight type** — *gram* o *kilogram* (stessa unità che in Magento).

### Empty package weight
Ogni tipo di pacco ha un peso a vuoto; MyParcel lo aggiunge al peso del prodotto.

| Tipo di pacco | Peso a vuoto tipico |
| --- | --- |
| Package (scatola marrone) | 200 – 400 g |
| Small package | 100 – 200 g |
| Mailbox (pacco da cassetta postale) | 50 – 100 g |
| Digital stamp | 10 – 30 g |

### Delivery methods
- **Show details in summary** — mostra l'opzione di consegna scelta nel riepilogo ordine del cliente.
- **Preferred pickup locations view** — *Lista* o *Mappa* come predefinito.
- **Switching the view is allowed** — lascia ai clienti la scelta di passare.
- **Price shown in delivery options** — mostra il prezzo aggiuntivo per opzione di consegna.
- **Exclude parcel lockers** — nascondi automatici.

## 6 · Impostazioni · Vettori
Per ogni vettore un proprio tab. Quali tab sono visibili dipende da cosa c'è nel tuo contratto MyParcel.

![Tab: General settings, PostNL, DHL For You, DHL Europlus, DHL Parcel Connect, DPD, UPS Standard, GLS, Trunkrs.](../../platforms/images/magento2/03-carrier-tabs.svg)

::: tip Tutti i vettori strutturati allo stesso modo
Qui sotto illustro **PostNL** come esempio — gli altri vettori seguono la stessa struttura, con le proprie opzioni specifiche.
:::

### PostNL settings

#### Titoli di consegna
I testi che il tuo cliente vede al checkout. Standard di default a meno che tu voglia formulazioni proprie.

- **Delivery title** — intestazione sopra il blocco PostNL. Predefinito: *Consegna a casa o al lavoro*.
- **Standard / Signature on receipt / Receipt code / Home address only / Priority / Morning / Evening / Mailbox / Digital stamp / Pickup title** — testo per opzione di consegna.

#### Drop-off days & Cut-off times
- **Drop-off days** — spunta i giorni in cui consegni a PostNL.
- **Cut-off time** (per giorno) — fino a che ora un ordine va lo stesso giorno. Predefinito 15:30.

#### Default shipping options
Applica opzioni automaticamente sopra un prezzo soglia.

- **Automate 'Signature on receipt'** + From price.
- **Automate 'Collect package'** + From price.
- **Automate 'Home address only'** + From price.
- **Automate 'Larger than 100 × 70 × 58 cm'** + From price.
- **Automate 'Age check 18+'**.

#### Assicurazione
- **Insure orders from (€)** — soglia oltre la quale assicurazione automatica.
- **Insure orders up to (NL)** / **(BE)** / **(EU)** / **(ROW)** — massimi per regione.
- **Insure orders for percentage** — assicura una % del valore ordine.

::: details Momenti di consegna + opzioni di spedizione — tutti i campi
**Digital stamp settings**
- **Automate digital stamp** — spedisci automaticamente come francobollo digitale per prodotti leggeri e piatti.
- **Default weight** — peso predefinito per spedizioni di francobollo digitale.

**Mailbox settings**
- **Automate mailbox** — spedisci automaticamente come pacco da cassetta postale se peso e dimensioni sono adeguati.
- **Mailbox weight** — peso massimo (predefinito 2000 g).
- **Priority delivery (Prio 24 ore)** + **Priority delivery fee**.
- **International mailbox** — pacchi da cassetta postale all'estero.

**Small Package settings**
- **Automate Small Package** + **Small Package weight**.

**Momenti di consegna**
- **Morning delivery active** + fee.
- **Evening delivery active** + fee.
- **Pickup active** + fee.

**Delivery settings**
- **Delivery enabled** — toggle master PostNL.
- **Signature on receipt** + fee.
- **Home address only** + fee.
- **Saturday delivery** + fee.
:::

### Altri vettori — differenze in breve
| Vettore | Particolarità |
| --- | --- |
| **DHL For You** | Pacchi da cassetta postale supportati. Ritiro presso DHL service point. Niente consegna mattutina/serale. |
| **DHL Europlus** | Spedizioni business EU. Assicurazione per regione (Local/BE/EU/ROW). |
| **DHL Parcel Connect** | Spedizioni consumer in Europa. Pickup possibile. |
| **DPD** | Pacco NL + pacco da cassetta postale (da v4.15). Ritiro presso DPD ParcelShop. |
| **UPS Standard** | Internazionale business. Meno opzioni, finestra di consegna 3 giorni standard. |
| **GLS** | NL/BE. Signature, Only recipient, Saturday delivery. Ritiro presso punto GLS. |
| **Trunkrs** | Vettore veloce NL. Receipt code, Fresh food, Frozen, Priority delivery. |

## 7 · Impostazioni prodotto
Su ogni prodotto appare una sezione **MyParcel Options** sulla pagina di edit. Sovrascrive i default globali da [§6](#6-impostazioni-vettori) per prodotto — utile per prodotti con requisiti particolari.

![Sezione MyParcel Options su pagina edit prodotto con Dropoff-delay, Age check 18+, Fit in digital stamp, HS code, Fit in mailbox, Disable delivery options, Exclude parcel lockers.](../../platforms/images/magento2/10-product-myparcel-options.svg)

- **Dropoff-delay** — giorni lavorativi extra per preparare questo prodotto. Per made-to-order o dropship.
- **Age check 18+** — controllo identità obbligatorio. Per alcol, tabacco, coltelli. Non insieme a consegna mattutina/serale.
- **Fit in digital stamp** — questo prodotto può andare come francobollo digitale?
- **HS code** — codice doganale per spedizioni mondiali. Cerca su [tarief.douane.nl](https://tarief.douane.nl).
- **Fit in mailbox** — quanti pezzi stanno in un pacco da cassetta postale? `0` = automatico su peso, `-1` = non sta nella cassetta postale.
- **Disable delivery options** — nasconde il blocco opzioni di consegna MyParcel se questo prodotto è nel carrello. Per prodotti digitali o gift card.
- **Exclude parcel lockers** — nasconde gli automatici come pickup point per questo prodotto.

## 8 · L'esperienza di checkout
Appena il cliente compila un indirizzo di consegna appare il blocco MyParcel con le opzioni di consegna. Quali opzioni ci sono dipende da: i vettori attivi, i prodotti nel carrello e gli override specifici del prodotto da [§7](#7-impostazioni-prodotto).

![Blocco MyParcel nel checkout Magento con opzioni di consegna per vettore, pickup point e prezzi extra.](../../platforms/images/magento2/20-checkout-delivery-options.svg)

### Opzioni di consegna
- **Consegna standard** — consegna durante orari d'ufficio.
- **Consegna mattutina** — PostNL consegna al mattino (prezzo extra).
- **Consegna serale** — tra le 18:00 e le 22:00 (prezzo extra).
- **Consegna sabato** — visibile solo se attivata per vettore.
- **Firma alla ricezione** — il corriere fa firmare il cliente.
- **Non consegnare ai vicini** — solo al destinatario.
- **Controllo identità 18+** — appare automaticamente se un prodotto lo richiede.
- **Ritiro presso una location PostNL** — lista o mappa; automatici dipendono da *Exclude parcel lockers*.
- **Pacco da cassetta postale** — se il carrello rientra nelle misure.
- **Francobollo digitale** — per spedizioni piatte e leggere.
- **Prio 24 ore** — consegna prioritaria (solo se attivata).

## 9 · Uso quotidiano

### Workflow 1 — per ordine
1. Vai a *Sales → Orders* e apri un ordine.
2. Clicca **Print MyParcel Label**.
3. Eventualmente regola tipo di pacco, assicurazione o opzioni di consegna per questo ordine.
4. Clicca **Create**. L'etichetta viene creata nel backoffice MyParcel.

### Workflow 2 — bulk (10+ ordini/giorno)
1. Vai a *Sales → Orders*.
2. Seleziona più ordini con i checkbox.
3. Sotto *Actions* → **Create & print MyParcel track(s)**.

### Track & Trace nell'email di conferma
Sotto *Stores → Configuration → Sales → Sales Emails → MyParcel Track* metti il link di tracking nell'email di spedizione. Vedi [FAQ](#11-faq) per conflitti con template email.

::: tip Momento di addebito
Vieni addebitato solo quando una spedizione viene effettivamente consegnata al vettore. I francobolli digitali sono l'eccezione — vengono addebitati subito all'esportazione.
:::

## 10 · Qualcosa non funziona — diagnostica
Qualcosa non funziona come previsto? Scorri questa tabella dall'alto in basso — tre problemi su quattro si risolvono entro 5 minuti.

| Sintomo | Cosa controllare |
| --- | --- |
| **Nessuna opzione di consegna al checkout** | (1) API key salvata correttamente? (2) Almeno un vettore su *Delivery enabled = Yes*? (3) Indirizzo di consegna entro *Ship to Specific Countries*? (4) `bin/magento cache:flush` |
| **Cannot select MyParcel dopo un altro shipping method** | Aggiorna alla v5.5.2 o superiore; questo è migliorato nelle release recenti. Se persiste: supporto MyParcel. |
| **"This address can not be split"** | Plugin postcode-checker in uso? Configuralo in modo che via e numero civico restino come campi separati. |
| **"API key invalid"** | Spazio nella key? Key dello shop giusto? Ricopia dal backoffice MyParcel *Impostazioni shop → Integrazione* e incolla. Svuota la cache. |
| **"Can't get setting with path" nei log** | Vettore in logging ma non attivo — messaggio innocuo. Verrà risolto in release più recenti. |
| **I metodi di spedizione restano in caricamento** | Altro shipping method attivo con *Show Method if Not Applicable = Yes*? Disattiva quell'opzione. |
| **Le etichette non corrispondono alle impostazioni** | Clicca *Import MyParcel Backoffice settings* di nuovo. Dopo upgrade: svuota cache. |
| **Hyvä-checkout — opzioni di consegna non appaiono** | Modulo di compatibilità installato? `composer require hyva-themes/magento2-hyva-checkout-myparcelnl` |

## 11 · FAQ

### Come cambio il tipo di pacco per un singolo ordine specifico?
Apri l'ordine, clicca *Print MyParcel Label* e modifica nel popup il tipo di pacco prima di creare l'etichetta.

### Posso usare più vettori contemporaneamente?
Sì, se sono nel tuo contratto MyParcel. Attiva ogni vettore nel proprio tab. I clienti vedranno più blocchi di consegna al checkout.

### Non voglio offrire automatici — è possibile?
Vai a *General settings → Delivery methods → Exclude parcel lockers*. Per prodotto puoi regolarlo anche tramite *Exclude parcel lockers* sulla pagina di edit prodotto.

### Il plugin funziona con checkout di terze parti?
Ufficialmente supportati: checkout Magento standard e Hyvä-checkout (con il modulo `hyva-themes/magento2-hyva-checkout-myparcelnl`). Altri checkout potrebbero non funzionare al 100% — testa sempre prima di andare live.

### Come torno a una versione precedente?
Composer: `composer require myparcelnl/magento:5.4.0` seguito da `bin/magento setup:upgrade` e `cache:flush`. Segnala il bug su [github.com/myparcelnl/magento/issues](https://github.com/myparcelnl/magento/issues).

### I miei clienti non ricevono opzioni di consegna se compilano prima il CAP
Issue noto con alcuni plugin postcode-checker. Configura il checker in modo che via e numero civico restino come campi separati.

### Come cambio il mio indirizzo mittente sull'etichetta?
L'indirizzo mittente proviene dal tuo backoffice MyParcel (*Impostazioni shop → Generale*), non da Magento.

### Il plugin costa?
No. Paghi solo per le spedizioni alla tua tariffa MyParcel.

## Risorse e supporto
- [github.com/myparcelnl/magento ↗](https://github.com/myparcelnl/magento) — codice sorgente, release, issue.
- [developer.myparcel.nl — Magento 2 ↗](https://developer.myparcel.nl/nl/documentatie/13.magento2.html) — manuale ufficiale di installazione e configurazione.
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl) — account, API key, fatturazione.
- [Contatta il supporto MyParcel](../../contact.md) — **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).
