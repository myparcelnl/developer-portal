---
title: OpenCart 3
description: "Collega il tuo negozio OpenCart 3 a MyParcel con l'estensione MyParcel NL. Tratta l'installazione del modulo, del metodo di spedizione e dell'order total, l'inserimento della chiave API, le impostazioni di esportazione predefinite, le opzioni di consegna PostNL al checkout, l'esportazione degli ordini e la stampa delle etichette dall'elenco ordini, le etichette di reso e una tabella di diagnostica."
---

::: tip In breve
L'estensione **MyParcel NL** collega il tuo negozio OpenCart 3 a MyParcel. Esporti gli ordini e stampi le etichette PostNL direttamente dall'elenco ordini di OpenCart, i tuoi clienti possono scegliere al checkout un momento di consegna o un punto di ritiro PostNL e il codice Track & Trace può essere aggiunto all'email dell'ordine. L'estensione ha tre parti: un **Modulo** con tutte le impostazioni, un **Metodo di spedizione** per il checkout e un **Order Total** che aggiunge all'ordine il supplemento delle opzioni di consegna.
:::

::: warning Estensione legacy
Questa guida descrive la versione **1.1.17**, sviluppata per OpenCart 3.0.x e testata su OpenCart 3.0.2.0 con PHP fino alla 8.2. L'estensione supporta **solo PostNL**. Il nuovo sviluppo di MyParcel riguarda l'[estensione per OpenCart 4](./opencart.md): se stai aprendo un nuovo negozio, parti da OpenCart 4.
:::

## Avvio rapido, la tua prima etichetta in 20 minuti
Quanto basta per spedire il tuo primo ordine oggi. Per i dettagli, vedi [Cosa stai cercando?](#cosa-stai-cercando) qui sotto.

1. **Account.** Non hai ancora un account MyParcel? Creane uno su [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Copia la chiave API.** Accedi a [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Shop settings → Integration* → copia la chiave API.
3. **Installa l'estensione.** Scarica il file `.ocmod.zip` dall'[ultima release](https://github.com/myparcelnl/opencart3/releases/latest), caricalo in **Extensions → Installer** e fai clic su **Refresh** in **Extensions → Modifications**.
4. **Attiva le tre parti.** In **Extensions → Extensions** installa **Myparcel NL** (tipo *Modules*), **MyParcel Shipping** (tipo *Shipping*) e **MyParcel Total** (tipo *Order Total*).
5. **Incolla la chiave.** Apri **System → MyParcel**, incolla la chiave in **API** nella scheda **General** e salva.
6. **Stampa un'etichetta.** In **Sales → Orders** fai clic su **Export to MyParcel** accanto a un ordine, poi su **Print MyParcel label**.

::: tip Hai finito quando vedi questo
- Il PDF dell'etichetta viene scaricato o si apre in una nuova scheda
- L'ordine mostra un codice Track & Trace e uno stato come *pending - registered*
- La spedizione compare nel tuo back office MyParcel
:::

## Cosa stai cercando?
| Cosa vuoi fare? | Vai a |
| --- | --- |
| Capire le tre parti | [1 · Come funziona l'estensione](#1-come-funziona-lestensione) |
| Installare l'estensione | [2 · Installazione](#2-installazione) |
| Inserire la chiave API e le impostazioni generali | [3 · Impostazioni · General](#3-impostazioni-general) |
| Scegliere tipi di collo e opzioni predefinite | [4 · Impostazioni · Default export settings](#4-impostazioni-default-export-settings) |
| Offrire momenti di consegna e punti di ritiro | [5 · Impostazioni · Checkout](#5-impostazioni-checkout) |
| Impostare i codici HS per la dogana | [6 · Impostazioni prodotto](#6-impostazioni-prodotto) |
| Vedere cosa vedono i tuoi clienti | [7 · L'esperienza al checkout](#7-lesperienza-al-checkout) |
| Esportare ordini e stampare etichette | [8 · Uso quotidiano](#8-uso-quotidiano) |
| Qualcosa non funziona | [9 · Qualcosa non funziona, diagnostica](#9-qualcosa-non-funziona-diagnostica) |
| Risposta a una domanda frequente | [10 · FAQ](#10-faq) |

## 1 · Come funziona l'estensione
L'estensione è composta da tre parti. Per avere tutte le funzioni ti servono tutte e tre.

| Parte | Dove | Cosa fa |
| --- | --- | --- |
| **Myparcel NL** | *Extensions → Extensions → Modules* | Tutte le impostazioni e le azioni MyParcel nell'elenco ordini. Raggiungibile anche da **System → MyParcel**. |
| **MyParcel Shipping** | *Extensions → Extensions → Shipping* | Il metodo di spedizione che il cliente sceglie al checkout. Le opzioni di consegna MyParcel compaiono al suo interno. |
| **MyParcel Total** | *Extensions → Extensions → Order Total* | Aggiunge al totale dell'ordine il supplemento dell'opzione di consegna scelta, ad esempio la consegna serale. |

Dall'elenco ordini invii un ordine a MyParcel (*esportazione*) e l'estensione scarica l'etichetta PostNL. Il codice Track & Trace viene salvato sull'ordine e può essere aggiunto all'email per il cliente.

## 2 · Installazione
1. **Fai un backup** del negozio, oppure prova prima l'estensione su una copia.
2. Scarica `myparcel_opencart_3.0.2.0_v1.1.17.ocmod.zip` dalle [release di MyParcel per OpenCart 3](https://github.com/myparcelnl/opencart3/releases/latest).
3. Vai su **Extensions → Installer**, fai clic su **Upload** e scegli il file zip.
4. Vai su **Extensions → Modifications** e fai clic su **Refresh** (il pulsante blu in alto a destra). Senza questo passaggio l'estensione non funziona.
5. Vai su **Extensions → Extensions** e installa le tre parti con il pulsante verde **+**:
   - scegli *Modules* e installa **Myparcel NL**;
   - scegli *Shipping* e installa **MyParcel Shipping**;
   - scegli *Order Total* e installa **MyParcel Total**.

![L'elenco delle estensioni di spedizione con MyParcel Shipping, il pulsante di modifica e il pulsante verde di installazione.](../../platforms/images/opencart3/08-extensions-shipping.png)

Poi fai clic sulla matita accanto a **MyParcel Shipping** e controlla le impostazioni:

![Le impostazioni di MyParcel Shipping: titolo, costo, classe fiscale, stato e ordine.](../../platforms/images/opencart3/14-shipping-method.png)

| Impostazione | Cosa fa |
| --- | --- |
| **Title** | Il nome del metodo di spedizione al checkout. |
| **Cost** | Il costo di spedizione di base. I supplementi delle opzioni di consegna si aggiungono a questo. |
| **Tax Class** | La classe fiscale per il costo di spedizione. |
| **Status** | Imposta **Enabled** per mostrare il metodo al checkout. |
| **Sort Order** | La posizione tra gli altri metodi di spedizione. |

Infine controlla che **MyParcel Total** sia attivo in *Order Total*. L'ordine di visualizzazione decide dove compare il supplemento nei totali.

![L'elenco delle estensioni Order Total con MyParcel Total.](../../platforms/images/opencart3/09-extensions-order-total.png)

::: warning Shipping non è la pagina delle impostazioni
La matita accanto a **MyParcel Shipping** mostra solo i campi qui sopra. Tutte le altre impostazioni sono nel modulo: **System → MyParcel**, oppure la matita accanto a **Myparcel NL** in *Modules*.
:::

## 3 · Impostazioni · General
Apri **System → MyParcel**. La pagina delle impostazioni ha tre schede: **General**, **Default Export Settings** e **Checkout**. Dopo ogni modifica fai clic sul pulsante blu di salvataggio in alto a destra.

![La scheda General con la chiave API, la cartella admin, la visualizzazione dell'etichetta e il formato carta.](../../platforms/images/opencart3/01-general-api.png)

| Impostazione | Cosa fa | Consigliato |
| --- | --- | --- |
| **API** | La tua chiave API MyParcel, da [backoffice.myparcel.nl](https://backoffice.myparcel.nl) sotto *Shop settings → Integration*. | Incollala senza spazi. |
| **Admin folder** | Il nome della cartella admin di OpenCart. Modificalo solo se hai rinominato la cartella. | `admin` |
| **Label display** | **Download PDF** salva l'etichetta, **Open de PDF in a new tab** la apre nel browser. | A tua scelta. |
| **Paper format** | **A4** per una stampante normale, **A6** per una stampante di etichette. Con A4 scegli la posizione sul foglio al momento della stampa. | A6 con una stampante di etichette. |

![Il resto della scheda General: Track & Trace, elaborazione, stato dell'ordine, campi dell'indirizzo e il log.](../../platforms/images/opencart3/02-general-settings.png)

| Impostazione | Cosa fa | Quando attivarla |
| --- | --- | --- |
| **Track&trace in email** | Aggiunge il codice Track & Trace all'email dell'ordine per il cliente. | Se vuoi che sia OpenCart a inviare il codice. In quel caso disattiva l'email Track & Trace nel back office MyParcel, altrimenti il cliente riceve due email. |
| **Track&trace in My Account** | Mostra il codice e un link sull'ordine nell'account del cliente. | Consigliato. |
| **Process shipments directly** | Registra la spedizione presso PostNL appena la esporti, così l'etichetta e il codice Track & Trace sono subito pronti. Se è disattivata, la spedizione resta in bozza nel back office MyParcel. | Se stampi le etichette direttamente da OpenCart. |
| **Order status automation** | Dopo un'esportazione riuscita imposta l'ordine su uno stato a tua scelta. | Se la usi insieme a *Track&trace in email*, attiva anche *Process shipments directly*, altrimenti l'email parte senza codice. |
| **Keep old shipments** | Mantiene sull'ordine i link Track & Trace delle spedizioni precedenti quando lo esporti di nuovo. | Se a volte spedisci un ordine in più parti. |
| **Use addition address as number suffix** | Come vengono letti via, numero civico e suffisso dai campi dell'indirizzo: entrambi i campi come indirizzo completo, campo 1 come via e campo 2 come numero civico, oppure un terzo campo per il suffisso. | Adattala al modo in cui il tuo checkout chiede l'indirizzo. |
| **Log API communication** | Scrive il traffico con MyParcel in un file di log, che scarichi con **Download log file**. | Solo mentre risolvi un problema. |

## 4 · Impostazioni · Default export settings
Queste impostazioni sono i valori predefiniti per ogni spedizione che esporti. Puoi modificarli per singolo ordine prima dell'esportazione, vedi [§8](#8-uso-quotidiano).

![I tipi di collo con i metodi di spedizione collegati, il codice HS, il paese di origine e le impostazioni per email e telefono del cliente.](../../platforms/images/opencart3/03-export-package-types.png)

### Tipi di collo
In **Package Types** colleghi i metodi di spedizione di OpenCart a un tipo di collo MyParcel. Gli ordini con **MyParcel Shipping** sono sempre un **Parcel** (pacco). Per ogni altro tipo scegli uno o più metodi di spedizione, ad esempio *Flat Rate*:

| Tipo di collo | Quando usarlo |
| --- | --- |
| **Mailbox package** (Pacco per cassetta postale) | Articoli piccoli e piatti che passano dalla cassetta delle lettere. |
| **Unpaid letter** (Etichetta non affrancata) | Un'etichetta senza affrancatura. |
| **Digital Stamp** (Francobollo digitale) | Lettere con francobollo digitale. Scegli la classe di peso in **Default Weight**. |

### Dogana e dati di contatto
- **Default HS code** e **The country of origin**. Usati per le spedizioni fuori dall'UE quando un prodotto non ha valori propri, vedi [§6](#6-impostazioni-prodotto).
- **Connect customer email**. Invia con la spedizione l'indirizzo email del cliente, così MyParcel può inviare l'email Track & Trace. Attivi o disattivi questa email nel back office MyParcel.
- **Connect customer phone**. Invia il numero di telefono, così il corriere può contattare il cliente. Aiuta molto per le spedizioni all'estero.

### Opzioni di spedizione
![Le opzioni di spedizione predefinite: formato extra large, solo indirizzo di casa, firma, verifica dell'età, reso se assente, assicurazione e la descrizione dell'etichetta.](../../platforms/images/opencart3/04-export-options.png)

Ogni opzione viene aggiunta a ogni pacco che esporti. Le opzioni possono avere un costo aggiuntivo, controlla le tue tariffe MyParcel. I prezzi indicati accanto alle voci nell'estensione provengono da un vecchio listino.

| Impostazione | Cosa fa |
| --- | --- |
| **Extra large size** (Formato extra large) | Per pacchi più grandi del formato standard. |
| **Home address only** (Solo indirizzo di casa) | Il pacco viene consegnato solo all'indirizzo del destinatario, mai ai vicini. |
| **Signature on delivery** (Firma alla consegna) | Il destinatario firma per il pacco. |
| **Age check** (Verifica dell'età) | Il corriere verifica che il destinatario abbia almeno 18 anni. |
| **Return if no answer** (Reso se assente) | Se non c'è nessuno in casa, il pacco torna a te invece di andare a un punto di ritiro. |
| **Insured shipment** (Spedizione assicurata) | Assicura il valore d'acquisto. Un pacco assicurato ha sempre anche solo indirizzo di casa e firma alla consegna. |
| **Label description** (Descrizione etichetta) | Testo stampato in alto a sinistra sull'etichetta. Usa `[ORDER_NR]` per stampare il numero d'ordine, così puoi cercarlo nel back office MyParcel. |

## 5 · Impostazioni · Checkout
La scheda **Checkout** decide quali opzioni di consegna PostNL possono scegliere i tuoi clienti. Spunta **Enable MyParcel delivery options** per vedere tutte le impostazioni.

![La scheda Checkout con le opzioni di consegna attive: due colonne di prezzo in base al subtotale e le opzioni con un prezzo per colonna.](../../platforms/images/opencart3/05-checkout-options.png)

### Opzioni di consegna e supplementi
Spunta ogni opzione che vuoi offrire. Un'opzione spuntata riceve due campi prezzo, uno per ogni colonna **Subtotal**. Le due righe *Subtotal* stabiliscono l'intervallo di importo dell'ordine per ciascuna colonna: puoi ad esempio far pagare la consegna serale sugli ordini piccoli e offrirla gratis da 50 €.

| Opzione | Cosa ottiene il cliente |
| --- | --- |
| **Standard delivery** (Consegna standard) | Consegna durante il giorno. |
| **Morning delivery** (Consegna mattutina) | Consegna al mattino. |
| **Evening delivery** (Consegna serale) | Consegna di sera. |
| **Signature on delivery** (Firma alla consegna) | Il cliente può chiedere una firma alla consegna. |
| **Home address only** (Solo indirizzo di casa) | Il cliente può scegliere la consegna solo all'indirizzo di casa. |
| **PostNL pickup** (Ritiro PostNL) | Ritiro presso un punto PostNL vicino. |
| **Early PostNL pickup** (Ritiro PostNL anticipato) | Ritiro presso un punto PostNL dalle prime ore del mattino. |
| **Belgium pickup** (Ritiro in Belgio) | Opzioni di consegna per i clienti in Belgio, con una tariffa per la consegna standard e una per il ritiro. |

Con **Mailbox options** il cliente può scegliere al checkout un pacco per cassetta postale. Imposti un titolo, un prezzo e il peso massimo.

### Parametri di elaborazione
![Giorni di consegna al corriere, orario limite, tempo di elaborazione, finestra dei giorni di consegna e le impostazioni di visualizzazione.](../../platforms/images/opencart3/06-checkout-processing.png)

| Impostazione | Cosa fa |
| --- | --- |
| **Dropoff days** (Giorni di consegna al corriere) | I giorni in cui consegni i pacchi a PostNL. Vuoto significa da lunedì a venerdì. |
| **Cut-off time** (Orario limite) | L'ora in cui smetti di elaborare gli ordini per la giornata, nel formato `hh:mm`. Vuoto significa 15:30. Spunta **Weekdays** per impostare un orario diverso per ogni giorno. |
| **Dropoff delay** (Tempo di elaborazione) | Il numero di giorni, da 0 a 14, che ti servono prima che un ordine passi a PostNL. |
| **Delivery days window** (Finestra dei giorni di consegna) | Il numero di giorni di cui il cliente può posticipare la consegna. **Obbligatorio** appena le opzioni di consegna sono attive, altrimenti il salvataggio non riesce. |

Le impostazioni sotto **Only apply for Xtension Best Checkout** (formato della distanza, arrotondamento, testo mostrato con prezzo 0 e formato dell'ora) valgono solo con l'estensione Xtensions Best Checkout.

### Personalizzazioni
![Colore di base, colore di evidenziazione, stile personalizzato e Google Fonts.](../../platforms/images/opencart3/07-checkout-customizations.png)

**Base color** e **Highlight color** impostano i colori delle opzioni di consegna, **Custom style** accetta il tuo CSS e **Automatically load Google fonts** carica i caratteri usati dalle opzioni di consegna.

## 6 · Impostazioni prodotto
L'estensione aggiunge a ogni prodotto una scheda **My parcel** con due campi per le spedizioni fuori dall'UE.

![La scheda My parcel di un prodotto, con HS Code e Country Code.](../../platforms/images/opencart3/10-product-myparcel.png)

- **HS Code**. Il codice doganale del prodotto.
- **Country Code**. Il paese di origine, ad esempio `NL`.

Se i campi sono vuoti valgono i valori predefiniti del [§4](#dogana-e-dati-di-contatto).

## 7 · L'esperienza al checkout
Con le opzioni di consegna attive, il cliente vede le opzioni PostNL in *Delivery Method* al checkout, all'interno di **MyParcel Shipping**. Le opzioni sono mostrate in olandese.

![Il checkout con il giorno di consegna, le fasce orarie per la consegna a domicilio e l'opzione firma alla consegna.](../../platforms/images/opencart3/15-checkout-delivery.png)

In *Thuis of op het werk bezorgd* (Consegna a casa o al lavoro) il cliente sceglie un giorno e una fascia oraria, più le opzioni extra che hai attivato, come la firma alla consegna.

![Il checkout con un punto di ritiro PostNL scelto, l'orario di apertura e l'indirizzo.](../../platforms/images/opencart3/16-checkout-pickup.png)

In *Ophalen bij een PostNL locatie* (Ritiro presso un punto PostNL) il cliente sceglie un punto di ritiro. La matita apre l'elenco dei punti vicini.

La scelta viene salvata sull'ordine e ripresa quando lo esporti.

## 8 · Uso quotidiano
L'estensione aggiunge le azioni MyParcel in **Sales → Orders**.

![L'elenco ordini con i pulsanti batch in alto e la colonna MyParcel con le icone per esportazione, etichetta e reso.](../../platforms/images/opencart3/11-orders-list.png)

### Un ordine
1. Nella colonna **Ship To** fai clic sul tipo di collo, ad esempio **Parcel**, per controllare o modificare la spedizione.
2. Nella colonna **MyParcel** fai clic su **Export to MyParcel**.
3. Fai clic su **Print MyParcel label** per scaricare o aprire l'etichetta.

![La finestra della spedizione con tipo di spedizione, numero di etichette, le opzioni e un ID personalizzato.](../../platforms/images/opencart3/12-order-shipment-popup.png)

Nella finestra della spedizione modifichi, solo per questo ordine, lo **Shipment type**, il **Number of labels** (più pacchi per un ordine), le opzioni di spedizione e un **Custom ID** stampato in alto a sinistra sull'etichetta. Fai clic su **Save**.

### Più ordini insieme
Seleziona gli ordini e usa i pulsanti in cima all'elenco ordini:

- **Export Batch** invia a MyParcel gli ordini selezionati.
- **Print Batch** stampa le etichette degli ordini già esportati.
- **Export Print Batch** fa entrambe le cose in una volta.

### Etichette di reso
L'icona **Email return label** invia al cliente un'email con un link per stampare un'etichetta di reso.

### Sull'ordine
La pagina dell'ordine mostra le stesse azioni MyParcel, il codice Track & Trace con lo stato della spedizione e l'indirizzo di spedizione con il tipo di collo scelto.

![I dettagli dell'ordine con le azioni MyParcel, il codice Track & Trace con lo stato e l'indirizzo di spedizione.](../../platforms/images/opencart3/13-order-detail.png)

Paghi una spedizione solo quando viene effettivamente consegnata a PostNL.

## 9 · Qualcosa non funziona, diagnostica
Scorri questa tabella dall'alto verso il basso, la maggior parte dei problemi si risolve in pochi minuti.

| Sintomo | Cosa controllare |
| --- | --- |
| **Il modulo non compare in Modules** | Hai fatto clic su **Refresh** in *Extensions → Modifications* ([§2](#2-installazione))? Controlla la versione di PHP: l'estensione è testata fino a PHP 8.2. |
| **Vedo solo Title e Cost** | Hai aperto il metodo di spedizione. Le impostazioni sono in **System → MyParcel** ([§2](#2-installazione)). |
| **Il salvataggio fallisce con "Delivery day windows cannot be empty"** | Compila **Delivery days window** nella scheda *Checkout* ([§5](#parametri-di-elaborazione)). |
| **Nessuna opzione di consegna al checkout** | **Enable MyParcel delivery options** è spuntato e almeno un'opzione è attiva ([§5](#5-impostazioni-checkout))? **MyParcel Shipping** e **MyParcel Total** sono installati e attivi ([§2](#2-installazione))? Il cliente ha inserito un indirizzo olandese o belga? |
| **Il supplemento manca nel totale** | **MyParcel Total** è installato e attivo in *Order Total*? |
| **L'esportazione fallisce o dà un errore** | La chiave **API** è corretta, senza spazi ([§3](#3-impostazioni-general))? Attiva **Log API communication**, riprova e scarica il file di log per il supporto MyParcel. |
| **Il numero civico finisce nel campo sbagliato** | Adatta **Use addition address as number suffix** al tuo checkout ([§3](#3-impostazioni-general)). |
| **Il cliente riceve due email Track & Trace** | Disattiva **Track&trace in email** in OpenCart oppure l'email Track & Trace nel back office MyParcel. |
| **Export Print Batch non mostra le etichette** | Usa prima **Export Batch** e poi **Print Batch**. |

## 10 · FAQ

### Conviene ancora usare questa estensione?
Funziona per i negozi che restano su OpenCart 3. Il nuovo sviluppo di MyParcel riguarda l'[estensione per OpenCart 4](./opencart.md), che supporta anche più corrieri.

### Quali corrieri posso usare?
Solo PostNL.

### Dove trovo la mia chiave API?
In [backoffice.myparcel.nl](https://backoffice.myparcel.nl) sotto *Shop settings → Integration*.

### Posso spedire più pacchi per un solo ordine?
Sì. Imposta il **Number of labels** nella finestra della spedizione prima di esportare ([§8](#un-ordine)).

### L'estensione funziona con il mio checkout a pagina singola o con il tema Journal?
L'estensione supporta il checkout standard di OpenCart e alcuni altri, come Journal e Xtensions Best Checkout. Prova il checkout su una copia del negozio prima di andare online.

### Quando mi viene addebitato?
MyParcel fattura una spedizione solo quando viene effettivamente consegnata a PostNL.

## Risorse e supporto
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), account, chiave API, corrieri e fatturazione.
- [Release di MyParcel per OpenCart 3 ↗](https://github.com/myparcelnl/opencart3/releases), per scaricare l'estensione.
- [Contatta il supporto MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Questa guida descrive l'estensione MyParcel NL 1.1.17 per OpenCart 3 così come funziona a ottobre 2026.
