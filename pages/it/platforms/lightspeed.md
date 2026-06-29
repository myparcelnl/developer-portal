---
title: Lightspeed
description: "Da zero a un pacco spedito su Lightspeed — aggiungi l'app, collega il tuo account MyParcel con una API key, attiva i tuoi corrieri e collega i tuoi metodi di spedizione così le opzioni di consegna compaiono al checkout. Con avvio rapido, riferimento impostazioni, checkout, flusso quotidiano e una tabella diagnostica."
---

::: tip In breve
L'app MyParcel collega il tuo negozio Lightspeed a MyParcel. Attivi i tuoi corrieri, imposti le opzioni di consegna che vuoi offrire e le colleghi ai tuoi metodi di spedizione Lightspeed. Le opzioni di consegna compaiono poi al checkout e i tuoi ordini sono pronti per essere spediti tramite MyParcel. Nessun codice — tutto dalla pagina delle impostazioni dell'app.
:::

## Avvio rapido — il tuo primo pacco in 15 minuti
Quanto basta per spedire oggi il tuo primo ordine reale. Per una configurazione più approfondita, vedi [Stai cercando…](#stai-cercando) qui sotto.

1. **Account.** Non hai ancora un account MyParcel? Creane uno su [myparcel.com/register](https://www.myparcel.com/register).
2. **Copia la API key.** Accedi a [backoffice.myparcel.com](https://backoffice.myparcel.com) → *Impostazioni negozio → Integrazioni* → copia la API key.
3. **Aggiungi l'app.** Nel back office di Lightspeed apri l'**App Store**, cerca *MyParcel* e installa l'app.
4. **Collega l'app.** Apri le impostazioni dell'app MyParcel, incolla la chiave nel campo **Chiave API MyParcel** e clicca **Convalida**.
5. **Attiva un corriere.** Attiva un corriere (es. InPost o Poste Italiane), abilita almeno un tipo di consegna e aggiungi un pattern sotto **Mappatura titoli**. Clicca **Salva impostazioni**.

::: tip Hai finito quando vedi questo
- Il messaggio verde **La chiave API è valida** compare sotto il campo della chiave
- Almeno un corriere è attivo con un tipo di consegna abilitato
- La **Mappatura titoli** del corriere corrisponde ai nomi dei tuoi metodi di spedizione Lightspeed
:::

## Stai cercando…
| Cosa vuoi fare? | Vai a |
| --- | --- |
| Prima configurazione | [Avvio rapido](#avvio-rapido-il-tuo-primo-pacco-in-15-minuti) |
| Collegare il tuo account | [3 · Collegare l'app](#3-collegare-lapp-api-key) |
| Collegare dal backoffice invece che dall'app | [Canale di vendita tramite il Backoffice MyParcel](#canale-di-vendita-tramite-il-backoffice-myparcel-alternativa) |
| Scegliere la lingua dell'app o quando vengono inviati gli ordini | [4 · Impostazioni · Generale](#4-impostazioni-generale) |
| Scegliere come si sincronizzano gli ordini (Push o Pull) | [5 · Impostazioni · Modalità di sincronizzazione](#5-impostazioni-modalit-di-sincronizzazione) |
| Aggiornare corrieri e opzioni | [6 · Impostazioni · Aggiornare la capacità](#6-impostazioni-aggiornare-la-capacit) |
| Attivare un corriere e collegare i metodi di spedizione | [7 · Impostazioni · Corrieri](#7-impostazioni-corrieri) |
| Un'impostazione diversa per prodotto | [8 · Impostazioni prodotto](#8-impostazioni-prodotto) |
| Cosa vede il cliente al checkout | [9 · L'esperienza di checkout](#9-lesperienza-di-checkout) |
| Gestire gli ordini ogni giorno | [10 · Uso quotidiano](#10-uso-quotidiano) |
| Qualcosa non funziona | [11 · Qualcosa non funziona — diagnostica](#11-qualcosa-non-funziona-diagnostica) |
| Risposta a una domanda frequente | [12 · FAQ](#12-faq) |

## 1 · Preparare il tuo account MyParcel
Prima di iniziare in Lightspeed, sistema tre cose nel tuo backoffice MyParcel:

1. **Indirizzo di fatturazione e di reso** — *Impostazioni negozio → Generale*. Compare su ogni etichetta.
2. **Attivare i corrieri** — *Impostazioni negozio → Corrieri*. Solo i corrieri abilitati compaiono poi nell'app.
3. **Generare una API key** — *Impostazioni negozio → Integrazioni*.

Ti servono anche i tuoi **metodi di spedizione** impostati in Lightspeed. L'app si collega a questi metodi tramite il nome (vedi [§7](#7-impostazioni-corrieri)).

## 2 · Installare l'app
1. Apri l'**App Store** nel back office di Lightspeed e cerca *MyParcel*.
2. Installa l'app e consenti il collegamento con il tuo negozio.
3. Apri l'app per raggiungere la pagina delle impostazioni. Da quel momento si aggiorna automaticamente.

## Canale di vendita tramite il Backoffice MyParcel (alternativa)
Oltre all'app dell'App Store, puoi collegare Lightspeed direttamente dal tuo backoffice MyParcel come **canale di vendita** (Sales channel). MyParcel comunica allora direttamente con il tuo negozio Lightspeed tramite la sua API e importa i tuoi ordini, senza che l'app gestisca il passaggio. Scegli questa via se preferisci gestire il collegamento da MyParcel.

::: tip Quale metodo uso?
- Con l'**app dell'App Store** (vedi [Installare l'app](#2-installare-lapp)) aggiungi le opzioni di consegna al checkout di Lightspeed e inoltri gli ordini da Lightspeed.
- Con un **canale di vendita** (questa sezione) MyParcel preleva i tuoi ordini direttamente da Lightspeed. Questo metodo non aggiunge opzioni di consegna al checkout.
:::

### Creare il canale di vendita
1. Accedi a [backoffice.myparcel.com](https://backoffice.myparcel.com) e vai su **Shop settings → Sales Channels** (Impostazioni negozio → Canali di vendita).
2. Clicca in alto a destra su **Add sales channel** (Aggiungi canale di vendita).

![La panoramica Sales Channels nel backoffice MyParcel, con il pulsante Add sales channel in alto a destra.](../../platforms/images/lightspeed/backoffice-sales-channels.png)

3. Inserisci un **Name** (Nome) che ti aiuti a riconoscere il canale (es. *Il mio negozio Lightspeed*).
4. In **Type of sales channel** (Tipo di canale di vendita) scegli **Lightspeed**. (Shopify, WooCommerce e PrestaShop sono le altre opzioni.)
5. In **Webshop URL** scegli la regione che corrisponde al tuo negozio Lightspeed:
   - **https://api.webshopapp.com/en/ (EU)** — per i negozi Lightspeed (eCom) europei.
   - **https://api.shoplightspeed.com/en/ (US)** — per i negozi Lightspeed statunitensi.
6. Clicca **Save** (Salva). Il canale viene creato e compare con l'etichetta **Missing data** (Dati mancanti) — significa solo che manca ancora il passaggio di autenticazione.

![Aggiungere un canale di vendita Lightspeed: scegli il tipo e la regione Webshop URL corrispondente, poi clicca Save.](../../platforms/images/lightspeed/backoffice-add-channel.png)

### Autenticare il canale (key e secret Lightspeed)
Un canale di vendita ha bisogno del permesso di leggere i tuoi ordini Lightspeed. Per Lightspeed ciò avviene con una **Consumer key** e una **Consumer secret** del tuo account Lightspeed.

1. Apri il canale e clicca **Set credentials** (Imposta credenziali).
2. Nella finestra **Replace key and secret** (Sostituisci key e secret) incolla la tua **Consumer key** e la tua **Consumer secret** di Lightspeed.
3. Clicca **Connect** (Connetti).

![La finestra "Replace key and secret" chiede la Consumer key e la Consumer secret di Lightspeed.](../../platforms/images/lightspeed/backoffice-credentials.png)

Una volta connesso, l'etichetta **Missing data** scompare, il canale mostra **Connected** (Connesso) e MyParcel inizia a sincronizzare i tuoi ordini Lightspeed.

::: tip Dove trovo la key e la secret?
Generi la Consumer key e la secret nel tuo **back office Lightspeed**, nelle impostazioni API/sviluppatore. Se non le trovi, chiedi al supporto Lightspeed di attivare l'accesso API per il tuo account. Trattale come una password — non condividerle.
:::

::: warning La connessione non riesce?
Cause più comuni: uno spazio extra incollato con la key o la secret · la regione **Webshop URL** sbagliata (EU vs US) · una key/secret che appartiene a un altro negozio Lightspeed o è scaduta.
:::

## 3 · Collegare l'app (API key)
Le impostazioni si trovano su un'unica pagina. In alto trovi l'ID del tuo negozio e il blocco **Chiave API MyParcel**.

![MyParcel per Lightspeed — Chiave API e Impostazioni generali. Il campo della chiave API collega il tuo negozio a MyParcel.](../../platforms/images/lightspeed/api-general.png) La chiave API è nascosta in questa schermata.

1. Incolla la chiave dal tuo backoffice MyParcel nel campo **Chiave API MyParcel**.
2. Clicca **Convalida**.
3. Una chiave valida mostra il messaggio verde **La chiave API è valida**.

::: warning Non funziona?
Cause più comuni: uno spazio copiato prima/dopo la chiave · una chiave di un altro negozio · una chiave di un ambiente diverso (live vs sandbox) rispetto al tuo account MyParcel.
:::

## 4 · Impostazioni · Generale
Il blocco **Impostazioni generali** imposta la lingua dell'app e il momento in cui un ordine viene inviato a MyParcel.

![Impostazioni generali: lingua e il momento in cui un ordine viene inoltrato a MyParcel.](../../platforms/images/lightspeed/api-general.png)

- **Lingua** — La lingua dell'app. Scegli tra *English*, *Italiano*, *Nederlands* o *Français*. Impostala sulla lingua in cui vuoi lavorare.
- **Momento di inoltro** — Quando un ordine viene inviato a MyParcel. Scegli *Quando la spedizione viene creata con stato "Spedito"* o *...con stato "Non spedito"*. Scegli il punto del tuo processo in cui deve essere creata l'etichetta.
- **Salva impostazioni** — Clicca per memorizzare le tue scelte.

## 5 · Impostazioni · Modalità di sincronizzazione
In **Modalità di sincronizzazione** scegli come si muovono gli ordini tra Lightspeed e MyParcel.

![Modalità di sincronizzazione (Push / Pull) e il pulsante Aggiorna capacità.](../../platforms/images/lightspeed/sync-capacity.png)

- **Push** — L'app elabora i tuoi ordini e invia le spedizioni a MyParcel automaticamente. Scegli questa se vuoi che l'app faccia il lavoro per te.
- **Pull** — MyParcel recupera gli ordini direttamente da Lightspeed. L'app fornisce allora solo l'integrazione del checkout. Scegli questa se gestisci l'importazione degli ordini da MyParcel.

Clicca **Salva impostazioni** dopo la tua scelta.

## 6 · Impostazioni · Aggiornare la capacità
- **Aggiorna capacità** — Recupera gli ultimi corrieri e opzioni di consegna da MyParcel. Clicca qui ogni volta che hai appena modificato qualcosa nel tuo account MyParcel e non lo vedi ancora nell'app. La riga **Ultimo aggiornamento** mostra quando è avvenuto l'ultima volta.

## 7 · Impostazioni · Corrieri
Sotto le impostazioni generali, ogni corriere ha il proprio blocco. Usa l'interruttore in alto in un blocco per attivare o disattivare il corriere. Quali corrieri compaiono dipende da ciò che è abilitato nel tuo account MyParcel — nel negozio di esempio sono **InPost** e **Poste Italiane**.

Per ogni corriere imposti le stesse cose: quali tipi di consegna offri, il nome e il prezzo che vede il cliente, l'orario limite, i giorni di consegna e il collegamento ai tuoi metodi di spedizione Lightspeed.

### InPost
![Impostazioni InPost: tipi di consegna, orario limite, giorni di consegna e mappatura titoli.](../../platforms/images/lightspeed/inpost.png)

- **Tipi di consegna** — I modi in cui questo corriere consegna. Per ogni tipo lo attivi o disattivi, inserisci il nome che vede il cliente e imposti il prezzo.
  - **Consegna standard** — Consegna a domicilio in un normale giorno lavorativo (nell'esempio € 8).
  - **Punto di ritiro** — Il cliente ritira il pacco in un punto di ritiro vicino (nell'esempio € 5).
- **Orario limite** — L'orario entro cui un ordine viene ancora elaborato in giornata (nell'esempio 18:00). Gli ordini successivi passano al giorno di consegna seguente.
- **Giorni di consegna** — Seleziona i giorni in cui questo corriere consegna (nell'esempio lun, mar, mer, ven).
- **Mappatura titoli metodo di spedizione** — Collega i tuoi metodi di spedizione Lightspeed a questo corriere. Aggiungi un pattern che compare nel nome del tuo metodo di spedizione Lightspeed, così l'app sa quale metodo appartiene a quale corriere. Digita un pattern e clicca **Aggiungi**.
- **Salva impostazioni** — Memorizza le modifiche per questo corriere.

### Poste Italiane
![Impostazioni Poste Italiane: tipi di consegna, opzioni extra, orario limite, giorni di consegna e mappatura titoli.](../../platforms/images/lightspeed/poste-italiane.png)

Poste Italiane ha lo stesso layout di InPost, con un blocco in più: **Opzioni**.

- **Tipi di consegna** — *Consegna standard* (nell'esempio € 4,00) e *Punto di ritiro* (nell'esempio € 4).
- **Opzioni** — Possibilità extra offerte da questo corriere.
  - **Raccolta programmata** — Il corriere ritira i tuoi pacchi a un orario concordato. Attivala se fai ritirare i pacchi invece di consegnarli tu stesso.
  - **Consegna prioritaria** — Una consegna più rapida. Attivala per offrire ai tuoi clienti un'opzione prioritaria.
- **Orario limite** e **Giorni di consegna** — Come per InPost.
- **Mappatura titoli metodo di spedizione** — Aggiungi uno o più pattern (es. `poste`, `poste italiane`) che corrispondono ai nomi dei tuoi metodi di spedizione Lightspeed per questo corriere.

::: warning Non dimenticare di salvare
Ogni blocco corriere ha il proprio pulsante **Salva impostazioni**. Salva il blocco che hai appena modificato.
:::

## 8 · Impostazioni prodotto
L'app MyParcel **non** aggiunge campi alla pagina prodotto di Lightspeed. Tutto il comportamento di spedizione si gestisce dalle impostazioni dell'app (vedi [§7](#7-impostazioni-corrieri)).

## 9 · L'esperienza di checkout
Cosa vede il tuo cliente una volta inserito l'indirizzo di consegna. Le opzioni dipendono dai corrieri e dai tipi di consegna che hai attivato in [§7](#7-impostazioni-corrieri). Il nome e il prezzo che vede il cliente sono quelli che hai impostato per ogni tipo di consegna.

<!-- screenshot: ../../platforms/images/lightspeed/checkout-delivery.png — aggiungi una schermata del checkout dopo aver effettuato un ordine di prova nello storefront -->

In base alle impostazioni di esempio, un cliente può incontrare:

- **Consegna standard** (*Consegna standard*) — La scelta predefinita. Il pacco viene consegnato all'indirizzo del cliente in un normale giorno di consegna.
- **Punto di ritiro** (*Punto di ritiro*) — Il cliente ritira il pacco in un punto di ritiro vicino invece di riceverlo a casa.

*I prezzi (come € 8 o € 4) sono esempi — dipendono dalle tue impostazioni e dal tuo contratto con il corriere.*

## 10 · Uso quotidiano
Come gestisci gli ordini dipende dalla modalità di sincronizzazione scelta in [§5](#5-impostazioni-modalit-di-sincronizzazione):

- **Push** — Gli ordini vengono inviati a MyParcel automaticamente al momento impostato in **Momento di inoltro** ([§4](#4-impostazioni-generale)). Crei poi le etichette e spedisci dal tuo backoffice MyParcel.
- **Pull** — MyParcel recupera gli ordini da Lightspeed da solo. Lavori interamente dal tuo backoffice MyParcel per creare etichette e spedire.

::: tip Quando ti viene addebitato
Ti viene addebitato solo quando una spedizione viene effettivamente consegnata al corriere.
:::

## 11 · Qualcosa non funziona — diagnostica
Scorri questa tabella dall'alto in basso — la maggior parte dei problemi si risolve in 5 minuti.

| Sintomo | Cosa controllare |
| --- | --- |
| **La API key non viene accettata** | Reincolla la chiave dal backoffice (*Integrazioni*) senza spazi extra e clicca **Convalida**. |
| **Nessuna opzione di consegna al checkout** | Il corriere è attivo con almeno un tipo di consegna abilitato ([§7](#7-impostazioni-corrieri))? La **Mappatura titoli** corrisponde ai nomi dei tuoi metodi di spedizione Lightspeed? Poi clicca **Aggiorna capacità**. |
| **Un nuovo corriere o opzione non compare** | Clicca **Aggiorna capacità** così l'app recupera gli ultimi dati dal tuo account MyParcel. |
| **Gli ordini vengono collegati al corriere sbagliato** | Modifica la **Mappatura titoli metodo di spedizione**. Rendi i pattern unici per corriere e falli corrispondere esattamente ai nomi dei tuoi metodi di spedizione Lightspeed. |
| **Gli ordini non arrivano a MyParcel** | Controlla la modalità di sincronizzazione ([§5](#5-impostazioni-modalit-di-sincronizzazione)) e il **Momento di inoltro** ([§4](#4-impostazioni-generale)). In modalità Push l'ordine viene inviato allo stato scelto. |

## 12 · FAQ

### L'app costa?
No. Paghi solo le spedizioni tramite MyParcel.

### Dove trovo la mia API key?
Nel tuo backoffice MyParcel sotto *Impostazioni negozio → Integrazioni*.

### Quali corrieri posso usare?
I corrieri abilitati nel tuo account MyParcel — per esempio InPost e Poste Italiane in Italia.

### Qual è la differenza tra Push e Pull?
In **Push** l'app invia i tuoi ordini a MyParcel automaticamente. In **Pull** MyParcel recupera gli ordini da solo e l'app fornisce solo le opzioni di consegna al checkout. Vedi [§5](#5-impostazioni-modalit-di-sincronizzazione).

### Perché i miei clienti non vedono opzioni di consegna al checkout?
Assicurati che il corriere sia attivo con un tipo di consegna abilitato e che la **Mappatura titoli** corrisponda ai nomi dei tuoi metodi di spedizione Lightspeed. Poi clicca **Aggiorna capacità**. Vedi [§7](#7-impostazioni-corrieri).

### Come cambio l'indirizzo del mittente sull'etichetta?
Si imposta nel tuo backoffice MyParcel (*Impostazioni negozio → Generale*), non nell'app. Le modifiche si applicano subito.

## Risorse e supporto
- [github.com/myparcelnl/lightspeed ↗](https://github.com/myparcelnl/lightspeed) — manuale & issue.
- [backoffice.myparcel.com ↗](https://backoffice.myparcel.com) — account, API key, fatturazione.
