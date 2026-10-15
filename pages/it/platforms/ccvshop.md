---
title: CCV Shop
description: "Collega il tuo webshop CCV Shop a MyParcel con le app MyParcel del CCV Shop App Store. Include l'installazione di MyParcel Verzendservice e MyParcel Bezorgopties, l'inserimento della chiave API, le impostazioni di spedizione predefinite, le opzioni di consegna che i tuoi clienti vedono al checkout, la registrazione degli ordini e la stampa delle etichette una alla volta o in blocco, e una tabella diagnostica."
---

::: tip In breve
CCV Shop si collega a MyParcel tramite app nel **CCV Shop App Store**. **MyParcel Verzendservice** registra i tuoi ordini presso MyParcel e stampa le etichette direttamente dalla gestione ordini di CCV Shop, e il codice Track & Trace viene aggiunto all'ordine per te. Aggiungi anche **MyParcel Bezorgopties** per mostrare giorni di consegna, fasce orarie e punti di ritiro al checkout. CCV Shop sviluppa e gestisce queste app, quindi le domande sulle app stesse vanno rivolte al supporto di CCV Shop.
:::

## Avvio rapido, la tua prima etichetta in 15 minuti
Abbastanza per spedire il tuo primo ordine oggi stesso. Per i dettagli, vedi [Cosa stai cercando?](#cosa-stai-cercando) più sotto.

1. **Account.** Non hai ancora un account MyParcel? Creane uno su [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Copia la chiave API.** Accedi a [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Shop settings → Integration* → copia la chiave API.
3. **Installa l'app.** Nel back office di CCV Shop vai su **App Store**, apri **MyParcel Verzendservice** e installala. Spedisci dal Belgio? Installa invece **MyParcel België Verzendservice**.
4. **Incolla la chiave.** Vai su *Startpunt → Mijn webshop → Instellingen → Verzendkosten & logistiek → MyParcel verzendservice*, incolla la chiave in **MyParcel API key**, scegli il **Soort zending** (Tipo di collo) predefinito e clicca su **Opslaan** (Salva).
5. **Stampa un'etichetta.** Apri un ordine, vai alla scheda **Koppelingen** (Integrazioni) e clicca su **Meld de order aan bij MyParcel en download etiket** (Registra l'ordine presso MyParcel e scarica l'etichetta).

::: tip Hai finito quando vedi questo
- L'etichetta viene scaricata non appena registri l'ordine
- L'ordine ha un codice Track & Trace sotto *Verzending* (Spedizione) nella scheda *Orderoverzicht* (Panoramica ordine)
- La tabella *Historie* (Cronologia) nella scheda *Koppelingen* mostra l'azione senza errori
:::

## Cosa stai cercando?
| Cosa vuoi fare? | Vai a |
| --- | --- |
| Capire quale app fa cosa | [1 · Come funziona il collegamento](#1-come-funziona-il-collegamento) |
| Installare le app | [2 · Installare le app](#2-installare-le-app) |
| Collegare il tuo account | [3 · Collegare il tuo account MyParcel](#3-collegare-il-tuo-account-myparcel) |
| Impostare il tipo di collo, le opzioni e l'assicurazione predefiniti | [4 · Impostazioni di spedizione predefinite](#4-impostazioni-di-spedizione-predefinite) |
| Offrire giorni di consegna, fasce orarie e punti di ritiro | [5 · Opzioni di consegna al checkout](#5-opzioni-di-consegna-al-checkout) |
| Controllare cosa vedono i tuoi clienti | [7 · L'esperienza al checkout](#7-lesperienza-al-checkout) |
| Stampare etichette per uno o più ordini | [8 · Uso quotidiano](#8-uso-quotidiano) |
| Qualcosa non funziona | [9 · Qualcosa non funziona, diagnostica](#9-qualcosa-non-funziona-diagnostica) |
| Risposta a una domanda frequente | [10 · FAQ](#10-faq) |

## 1 · Come funziona il collegamento
CCV Shop offre tre app MyParcel nel suo App Store, tutte nella categoria *Verzendingen* (Spedizioni):

| App | Cosa fa |
| --- | --- |
| **MyParcel Verzendservice** | Registra gli ordini presso MyParcel NL e scarica le etichette all'interno della gestione ordini di CCV Shop. |
| **MyParcel België Verzendservice** | Lo stesso, per un account MyParcel BE. |
| **MyParcel Bezorgopties** | Un'estensione che mostra giorni di consegna, fasce orarie e punti di ritiro al checkout. Richiede una delle due app qui sopra. |

Non devi accedere a MyParcel per creare un'etichetta: registri l'ordine da CCV Shop, l'etichetta viene scaricata subito e il codice Track & Trace viene scritto nell'ordine, così puoi inviarlo al tuo cliente con un aggiornamento di stato.

::: warning Sviluppate da CCV Shop
CCV Shop sviluppa e supporta queste app. Per domande sulle app o sul back office di CCV Shop, contatta il supporto di CCV Shop. Per il tuo account MyParcel, i contratti e i corrieri, contatta MyParcel.
:::

## 2 · Installare le app
1. Nel back office di CCV Shop, apri **App Store** nel menu a sinistra.
2. Cerca *MyParcel* oppure apri la categoria **Verzendingen**.
3. Installa **MyParcel Verzendservice**, oppure **MyParcel België Verzendservice** per un account MyParcel BE.
4. Vuoi opzioni di consegna al checkout? Installa anche **MyParcel Bezorgopties**. Si installa solo quando una delle due app di spedizione è già presente.

Le app installate sono elencate sotto **App Store → Geïnstalleerde CCV Shop apps** (App CCV Shop installate).

## 3 · Collegare il tuo account MyParcel
Tutte le impostazioni di entrambe le app si trovano su un'unica pagina: *Startpunt → Mijn webshop → Instellingen → Verzendkosten & logistiek → MyParcel verzendservice*. Con l'app belga, la pagina si chiama *MyParcel België verzendservice*.

![La parte superiore della pagina delle impostazioni MyParcel in CCV Shop, con il campo MyParcel API key e il tipo di collo predefinito.](../../platforms/images/ccv/01-settings-account.png)

1. Copia la tua chiave API da [backoffice.myparcel.nl](https://backoffice.myparcel.nl) sotto *Shop settings → Integration*.
2. Incollala in **MyParcel API key**. Fai attenzione agli spazi prima o dopo la chiave.
3. Clicca su **Opslaan** (Salva) in basso a destra. Anche **Toepassen** (Applica) salva.

::: warning Una chiave, un negozio
La chiave collega questo CCV Shop a un negozio del tuo account MyParcel. Tutte le etichette e le fatture finiscono in quel negozio.
:::

## 4 · Impostazioni di spedizione predefinite
Queste impostazioni sono i valori predefiniti per ogni ordine che registri. Puoi modificarle per singolo ordine nella scheda *Koppelingen* prima di registrarlo, vedi [§8](#8-uso-quotidiano).

### Tipo di collo e opzioni extra
**Soort zending** (Tipo di collo) è il tipo di collo con cui parte ogni nuova spedizione.

| Opzione | Quando usarla |
| --- | --- |
| **Pakket** (Pacco) | La scelta standard per la maggior parte degli ordini. |
| **Pakket extra groot** (Pacco extra grande) | Pacchi più grandi della misura standard. |
| **Klein pakket** (Pacco piccolo) | Pacchi piccoli, consulta le tue tariffe MyParcel per i limiti di misura. |
| **Brievenbuspakje** (Pacco per cassetta postale) | Articoli piccoli e piatti che passano dalla cassetta delle lettere. |
| **Ongefrankeerd label** (Etichetta non affrancata) | Un'etichetta senza affrancatura. |

![Gli interruttori per firma alla consegna, reso se assente e solo indirizzo di casa.](../../platforms/images/ccv/02-settings-shipment-options.png)

Ogni interruttore qui sotto aggiunge un'opzione a ogni pacco. Le opzioni possono avere un costo aggiuntivo, controlla le tue tariffe MyParcel.

| Impostazione | Cosa fa | Quando attivarla |
| --- | --- | --- |
| **Handtekening voor ontvangst** (Firma alla consegna) | Il destinatario firma per il pacco. | Ordini di valore, o quando ti serve una prova di consegna. |
| **Retour bij geen gehoor** (Reso se assente) | Se non c'è nessuno in casa, il pacco torna a te invece di andare a un punto di ritiro. | Ordini che devono arrivare solo al destinatario. |
| **Alléén huisadres** (Solo indirizzo di casa) | Il pacco viene consegnato solo all'indirizzo del destinatario, mai ai vicini. Disattivala se un vicino può accettare il pacco. | Ordini da consegnare all'indirizzo stesso. |

Queste opzioni valgono per i pacchi. Per un pacco per cassetta postale o un'etichetta non affrancata sono nascoste nella schermata dell'ordine.

### Assicurazione e formato etichetta
![Le impostazioni di assicurazione e formato etichetta.](../../platforms/images/ccv/03-settings-insurance-label.png)

- **Verzekerd verzenden** (Spedizione assicurata). Scegli **Nee** (No), un importo fisso da *Verzekerd tot 100 euro* fino a *Verzekerd tot 5.000 euro*, oppure **Gehele order bedrag** (Importo totale dell'ordine). Con un importo fisso, viene scelto per te l'importo assicurato più vantaggioso. L'importo riguarda il prezzo d'acquisto della merce.
- **Label formaat** (Formato etichetta). **A6** per una stampante di etichette, **A4** per una stampante normale. Con A4 scegli per ogni ordine in quale punto del foglio stampare l'etichetta.

::: warning Controlla l'importo assicurato
L'app non può garantire l'importo assicurato. Controllalo su ogni etichetta che crei, soprattutto quando assicuri l'importo totale dell'ordine.
:::

### Verifica dell'età
![L'interruttore per la verifica dell'età, seguito dall'inizio della sezione delle opzioni di consegna con i corrieri.](../../platforms/images/ccv/04-settings-age-carriers.png)

**Leeftijdscheck 18+** (Verifica dell'età 18+) fa verificare al corriere l'età del destinatario alla consegna. Attivala se vendi alcolici, tabacco o altri prodotti soggetti a limiti di età. La verifica dell'età non può essere combinata con la consegna mattutina o serale e comprende sempre la firma alla consegna e la consegna solo all'indirizzo di casa.

## 5 · Opzioni di consegna al checkout
Le impostazioni sotto la barra informativa blu appartengono all'app **MyParcel Bezorgopties**. Decidono cosa possono scegliere i tuoi clienti al checkout. Senza quell'app, queste impostazioni non hanno effetto.

### Corrieri
Sotto **Vervoerders** (Corrieri), seleziona i corrieri di cui vuoi mostrare le opzioni di consegna: **PostNL**, **DHL For You**, **DPD**, **UPS**, **DHL Parcel Connect** e **DHL Europlus**. Seleziona solo i corrieri attivi sul tuo account MyParcel. Non vuoi mostrare alcuna opzione di consegna? Lascia tutti i corrieri deselezionati.

UPS è supportato con UPS Standard, non con UPS Express Saver. DHL Europlus non offre punti di ritiro.

### Tempo di elaborazione e orario limite
![Il tempo di elaborazione e l'ultimo momento per ordinare.](../../platforms/images/ccv/05-settings-processing-cutoff.png)

- **Verwerkingstijd** (Tempo di elaborazione). Il numero di giorni, da 0 a 14, che ti servono prima che un ordine venga consegnato al corriere. Usalo quando devi ancora lavorare sui prodotti, per esempio stampare una t-shirt.
- **Laatste bestelmogelijkheid** (Ultimo momento per ordinare). L'ora entro cui un cliente può ordinare per ricevere il pacco nel giorno di consegna mostrato.

### Giorni di consegna al corriere e consegna in giornata
![I giorni di consegna al corriere e l'impostazione della consegna in giornata per DHL For You.](../../platforms/images/ccv/06-settings-dropoff-sameday.png)

- **Inleverdagen** (Giorni di consegna al corriere). Seleziona i giorni in cui consegni i pacchi al corriere. I giorni di consegna che vedono i tuoi clienti vengono calcolati a partire da questi giorni. Se non selezioni alcun giorno, il checkout offre solo la consegna standard senza data.
- **Zelfde dag levering** (Consegna in giornata). Solo per DHL For You, e visibile solo quando DHL For You è selezionato. Funziona solo con un tempo di elaborazione di 0 giorni e un orario limite non oltre le 09:30.

### Consegna mattutina e serale
![Consegna mattutina e serale, ciascuna con un interruttore e un campo per il supplemento.](../../platforms/images/ccv/07-settings-morning-evening.png)

| Impostazione | Cosa ottiene il tuo cliente |
| --- | --- |
| **Ochtendlevering** (Consegna mattutina) | Consegna prima delle 12:00 invece che durante tutta la giornata, dal lunedì al venerdì. Solo PostNL. |
| **Avondlevering** (Consegna serale) | Consegna tra le 18:00 e le 22:00, dal lunedì al venerdì. Solo PostNL. |

Quando attivi un'opzione, compare un campo **Meer- of minderprijs** (Supplemento o sconto). L'importo viene aggiunto alle spese di spedizione che il cliente paga per quell'opzione, oppure sottratto se preceduto dal segno meno. Lascialo a 0,00 per offrire l'opzione senza costi aggiuntivi.

### Consegna il lunedì e solo all'indirizzo di casa
![La consegna il lunedì e l'opzione solo indirizzo di casa per i clienti.](../../platforms/images/ccv/08-settings-monday-homeonly.png)

- **Maandaglevering** (Consegna il lunedì). Consegna di lunedì, solo PostNL. Viene mostrata solo quando il sabato è selezionato sotto *Inleverdagen* e l'orario limite non va oltre le 15:00.
- **Alleen leveren aan huisadres** (Consegna solo all'indirizzo di casa). Permette al tuo cliente di scegliere la consegna solo all'indirizzo di casa. Solo PostNL e DHL For You.

### Firma e punti di ritiro
![La firma alla consegna e il ritiro presso un punto, come opzioni per i tuoi clienti.](../../platforms/images/ccv/09-settings-signature-pickup.png)

- **Handtekening voor ontvangst** (Firma alla consegna). Permette al tuo cliente di chiedere una firma alla consegna. Solo PostNL e DHL For You.
- **Afhalen op locatie** (Ritiro presso un punto). Mostra i punti di ritiro dei corrieri selezionati, così il tuo cliente può ritirare il pacco in un negozio o in un armadietto per pacchi nelle vicinanze.

Ognuna di queste opzioni ha il proprio campo **Meer- of minderprijs** una volta attivata.

::: tip Non sono le stesse impostazioni predefinite del §4
Le opzioni del §4 sono quelle che *tu* aggiungi a ogni spedizione. Le opzioni qui sono quelle che il tuo *cliente* può scegliere al checkout. La scelta del cliente viene riportata nell'ordine.
:::

Clicca su **Opslaan** (Salva) quando hai finito.

## 6 · Impostazioni prodotto
Queste app non aggiungono opzioni a livello di prodotto. Tutto il comportamento di spedizione si gestisce dalla pagina delle impostazioni e, per singolo ordine, dalla scheda *Koppelingen*.

## 7 · L'esperienza al checkout
Con **MyParcel Bezorgopties** installata, i tuoi clienti scelgono **MyParcel** sotto *Afleveropties* (Opzioni di consegna) al checkout. Non appena hanno inserito codice postale e numero civico, compaiono le opzioni di consegna.

<p><img src="../../platforms/images/ccv/10-checkout-delivery.png" alt="Il checkout con la scheda Consegna aperta: due giorni di consegna, le fasce orarie di PostNL e DHL For You e le opzioni per la firma e la consegna solo all&#x27;indirizzo di casa." width="376"></p>

Sotto **Bezorgen** (Consegna) il tuo cliente sceglie:

- **Un giorno di consegna.** Usa le frecce per vedere i giorni successivi.
- **Un corriere e una fascia oraria.** Per ogni corriere selezionato, le fasce orarie disponibili per quel giorno. Una fascia mattutina compare quando la consegna mattutina è attiva.
- **Opzioni extra.** Le opzioni che hai attivato nel [§5](#5-opzioni-di-consegna-al-checkout), come *Handtekening voor ontvangst* e *Alleen bezorgen aan huisadres*.

<p><img src="../../platforms/images/ccv/11-checkout-pickup.png" alt="La scheda Ritiro, con un elenco di punti di ritiro per corriere, la loro distanza e gli orari di apertura." width="376"></p>

Sotto **Afhalen** (Ritiro) il tuo cliente sceglie un punto di ritiro da un **Lijst** (Elenco) o su una **Kaart** (Mappa), ordinati per distanza e raggruppati per corriere, con gli orari di apertura. Il ritiro riporta l'etichetta *Milieuvriendelijk* (Ecologico).

<p><img src="../../platforms/images/ccv/12-checkout-summary.png" alt="Il checkout dopo la scelta: data, ora e corriere di consegna richiesti, con un pulsante per modificarli." width="378"></p>

Dopo la scelta, il checkout mostra un riepilogo con data, ora e corriere di consegna richiesti. **Wijzig afleveroptie** (Modifica opzione di consegna) riapre le scelte.

Nella gestione ordini, la data di consegna scelta compare come nota sotto *Verzending* (Spedizione) nell'ordine, ed è preselezionata come **Bezorgdatum** (Data di consegna) quando registri l'ordine.

## 8 · Uso quotidiano
Puoi registrare un ordine alla volta dall'ordine stesso, oppure molti insieme dall'elenco ordini.

### Un solo ordine
1. Vai su **Mijn orders → Orderbeheer** (I miei ordini → Gestione ordini) e apri l'ordine.
2. Apri la scheda **Koppelingen** (Integrazioni). Trovi la sezione *Order exporteren naar MyParcel* (Esporta ordine verso MyParcel).
3. Controlla i dati. Sono compilati con i tuoi valori predefiniti del [§4](#4-impostazioni-di-spedizione-predefinite) e con la scelta del cliente al checkout. Puoi modificarli solo per questo ordine.
4. Clicca su **Meld de order aan bij MyParcel en download etiket** e conferma con **Order exporteren** (Esporta ordine).

![La sezione Esporta ordine verso MyParcel di un ordine, con tipo di collo, opzioni, assicurazione, formato etichetta, verifica dell'età, corriere e data di consegna per questo ordine.](../../platforms/images/ccv/15-order-export.png)

| Campo | Cosa significa per questo ordine |
| --- | --- |
| **Soort zending** | Tipo di collo. Le opzioni del pacco e l'assicurazione compaiono solo per i pacchi. |
| **Handtekening voor ontvangst**, **Retour bij geen gehoor**, **Alléén huisadres** | *Ja* (Sì) o *Nee* (No) per ogni opzione. |
| **Verzekerd verzenden** | L'importo assicurato per questo pacco. |
| **Label formaat** | A6 o A4. Con A4, **Label afdruk locatie** (Posizione di stampa dell'etichetta) ti permette di scegliere la posizione sul foglio: *Links boven*, *Rechts boven*, *Links onder* o *Rechts onder* (in alto a sinistra, in alto a destra, in basso a sinistra, in basso a destra). |
| **Leeftijdscheck 18+** | Verifica dell'età per questo pacco. |
| **Vervoerders** | Il corriere per questa spedizione. |
| **Bezorgdatum** | La data di consegna, preselezionata in base alla scelta del cliente al checkout. |

L'etichetta viene scaricata subito in PDF e un messaggio verde *Succes* (Successo) conferma che l'ordine è stato inviato. Il codice Track & Trace viene aggiunto all'ordine, sotto *Verzending* (Spedizione) nella scheda *Orderoverzicht* (Panoramica ordine), con un link per seguire il pacco.

![Un ordine registrato: il messaggio di successo, un avviso sulla nuova registrazione e i pulsanti per scaricare l'etichetta o registrare di nuovo l'ordine.](../../platforms/images/ccv/16-order-registered.png)

Una volta registrato un ordine, la sezione mostra due pulsanti:

- **Download etiket voor verzending** (Scarica l'etichetta per la spedizione) scarica di nuovo la stessa etichetta, per esempio quando la stampante si è inceppata.
- **Meld de order opnieuw aan en download een nieuw etiket** (Registra di nuovo l'ordine e scarica una nuova etichetta) crea una nuova spedizione, per esempio dopo che hai cambiato il tipo di collo.

La tabella *Historie* (Cronologia) sotto le sezioni registra ogni azione con data e ora, l'azione, l'integrazione e il risultato.

![La tabella Cronologia con una registrazione riuscita e un tentativo precedente non riuscito.](../../platforms/images/ccv/17-order-history.png)

::: warning Registrare di nuovo un ordine
Registrare di nuovo un ordine crea una **seconda** spedizione in MyParcel, la prima non viene rimossa. CCV Shop ti avvisa di questo sullo schermo. Elimina la vecchia spedizione nel tuo backoffice MyParcel per mantenere ordinata la panoramica. Ti serve solo di nuovo la stessa etichetta? Usa invece **Download etiket voor verzending**.
:::

### Molti ordini insieme
1. In **Orderbeheer**, seleziona gli ordini che vuoi spedire.
2. Apri **Groepsactie selecteren** (Seleziona azione di gruppo) e scegli **MyParcel etiketten** (Etichette MyParcel) sotto *Verzendservice*. Con un account MyParcel BE, scegli **MyParcel België etiketten**.

![Il menu delle azioni di gruppo nella gestione ordini, con MyParcel etiketten e MyParcel België etiketten sotto Verzendservice.](../../platforms/images/ccv/13-orders-group-action.png)

3. Nella finestra che si apre, scegli il corriere sotto **Vervoerders** e, per i fogli A4, la **Label afdruk locatie**.
4. Clicca su **Toepassen** (Applica) per registrare gli ordini selezionati e scaricarne le etichette.

![La finestra MyParcel etiketten con il corriere e la posizione di stampa dell'etichetta.](../../platforms/images/ccv/14-orders-bulk-popup.png)

Ogni ordine del gruppo usa le tue impostazioni predefinite del [§4](#4-impostazioni-di-spedizione-predefinite). Un ordine richiede qualcosa di diverso? Registralo da solo.

## 9 · Qualcosa non funziona, diagnostica
Scorri questa tabella dall'alto verso il basso, la maggior parte dei problemi si risolve in pochi minuti.

| Sintomo | Cosa controllare |
| --- | --- |
| **"Er is een fout opgetreden bij het verzenden van de order naar MyParcel"** e *Fout opgetreden* nella cronologia | La **MyParcel API key** è corretta, senza spazi? Copiala di nuovo dal backoffice e salva ([§3](#3-collegare-il-tuo-account-myparcel)). Il corriere scelto è attivo sul tuo account MyParcel? |
| **Nessuna opzione di consegna al checkout** | **MyParcel Bezorgopties** è installata e almeno un corriere è selezionato sotto *Vervoerders* ([§5](#5-opzioni-di-consegna-al-checkout))? Il cliente ha inserito codice postale e numero civico? Il cliente ha scelto *MyParcel* sotto *Afleveropties*? |
| **Solo consegna standard, senza giorni né fasce orarie** | Seleziona i tuoi giorni di consegna al corriere sotto *Inleverdagen* ([§5](#5-opzioni-di-consegna-al-checkout)). |
| **La consegna mattutina, serale o il lunedì non compare** | Sono solo per PostNL. La consegna il lunedì richiede anche il sabato come giorno di consegna al corriere e un orario limite entro le 15:00. |
| **La consegna in giornata non compare** | Solo DHL For You, con un tempo di elaborazione di 0 giorni e un orario limite entro le 09:30. |
| **Mancano le opzioni o i punti di ritiro di un corriere** | Il corriere è selezionato e attivo sul tuo account MyParcel? DHL Europlus non ha punti di ritiro. |
| **Due spedizioni in MyParcel per un solo ordine** | L'ordine è stato registrato due volte. Elimina quella che non ti serve nel backoffice MyParcel ([§8](#8-uso-quotidiano)). |
| **Importo assicurato errato sull'etichetta** | Controlla **Verzekerd verzenden** per ogni ordine prima di registrarlo e controlla poi l'etichetta ([§4](#assicurazione-e-formato-etichetta)). |

## 10 · FAQ

### Chi contatto per una domanda?
Per le app e il back office di CCV Shop: il supporto di CCV Shop. Per il tuo account MyParcel, il contratto, i corrieri e le fatture: MyParcel ([Risorse e supporto](#risorse-e-supporto)).

### Dove trovo la mia chiave API?
In [backoffice.myparcel.nl](https://backoffice.myparcel.nl) sotto *Shop settings → Integration*.

### Mi serve MyParcel Bezorgopties?
Solo se vuoi che i tuoi clienti scelgano un giorno di consegna, una fascia oraria o un punto di ritiro. Per stampare le etichette basta MyParcel Verzendservice.

### Quali corrieri posso usare?
Per le etichette, i corrieri elencati sotto *Vervoerders* nell'ordine: PostNL, DHL For You, DPD, UPS, DHL Parcel Connect e DHL Europlus. Solo i corrieri attivi sul tuo account MyParcel accettano spedizioni.

### Posso usare la verifica dell'età con la consegna serale o mattutina?
No. La verifica dell'età comprende sempre la firma alla consegna e la consegna solo all'indirizzo di casa, e non può essere combinata con la consegna mattutina o serale.

### Spedisco dal Belgio, quale app uso?
**MyParcel België Verzendservice**, insieme a un account MyParcel BE. MyParcel Bezorgopties funziona sia con l'app olandese sia con quella belga.

### Posso impostare le opzioni di spedizione per prodotto?
No. Imposta i valori predefiniti nella pagina delle impostazioni e modifica un singolo ordine nella sua scheda *Koppelingen*.

### Quando mi viene addebitato?
MyParcel addebita una spedizione solo quando viene effettivamente consegnata al corriere.

## Risorse e supporto
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), account, chiave API, corrieri e fatturazione.
- [CCV Shop ↗](https://www.ccvshop.nl/), supporto per le app e il back office di CCV Shop: **+31 (0)88 990 7700** · [support@ccvshop.nl](mailto:support@ccvshop.nl).
- [Contatta il supporto MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Questa guida descrive le app MyParcel per CCV Shop così come funzionano a ottobre 2026. CCV Shop sviluppa le app e può modificare le schermate senza preavviso.
