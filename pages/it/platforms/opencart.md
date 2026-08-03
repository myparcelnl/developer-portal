---
title: OpenCart 4
description: "Da zero al pacco spedito su OpenCart 4, installa l'estensione, collega il tuo account MyParcel, importa i tuoi vettori e spedisci oggi stesso la tua prima etichetta. Con avvio rapido, riferimento impostazioni, opzioni prodotto, workflow quotidiano degli ordini e una tabella diagnostica."
---

::: tip In breve
L'estensione MyParcel collega il tuo shop OpenCart 4 a MyParcel. I clienti scelgono al checkout un momento di consegna o un pickup point, tu esporti gli ordini e stampi le etichette dall'admin di OpenCart, e il Track & Trace viene generato automaticamente. Nessun codice necessario, tutto avviene da **Estensioni** nel tuo admin. L'estensione è composta da due parti: un **Metodo di spedizione** (la tariffa al checkout) e un **Modulo** (tutte le impostazioni, i vettori e la gestione delle etichette).
:::

::: warning Versione preliminare
L'estensione OpenCart 4 è attualmente in versione preliminare (versione `0.2.0`). Richiede **OpenCart 4.1.0.3 o superiore** e **PHP 8.2 o superiore**. Schermate e nomi dei campi potrebbero ancora cambiare tra una release e l'altra.
:::

## Avvio rapido, il tuo primo pacco in 15 minuti
Sufficiente per spedire oggi stesso il tuo primo ordine reale. Per configurazioni più approfondite vedi [Cosa stai cercando?](#cosa-stai-cercando) qui sotto.

1. **Ottieni la tua API key.** Accedi a [backoffice.myparcel.com](https://backoffice.myparcel.com), vai su *Impostazioni → Accesso API* e copia la tua API key.
2. **Installa l'estensione.** In OpenCart vai su **Estensioni → Installazione** e carica il pacchetto `.ocmod.zip`. Poi apri **Estensioni → Estensioni**, installa il **Modulo** MyParcel e il metodo di **Spedizione** MyParcel, e aggiorna la cache delle modifiche quando richiesto.
3. **Inserisci l'API key.** Apri le impostazioni del modulo MyParcel, incolla la tua API key nella tab **Generale** e clicca **Salva**.
4. **Importa i tuoi vettori.** Nella tab **Vettori**, clicca **Importa configurazione vettori**. I tuoi vettori appaiono con i servizi disponibili.
5. **Spedisci un ordine.** Apri **Vendite → Ordini**, clicca il pulsante verde di esportazione su un ordine, poi il pulsante etichetta per scaricare il PDF.

::: tip Hai finito quando vedi questo
- Lo stato del modulo MyParcel mostra **abilitato** e **Testa API key** conferma che la key funziona
- I tuoi vettori sono elencati nella tab Vettori
- Un ordine esportato mostra un barcode e uno stato di tracking **Pronto**
:::

## Cosa stai cercando?
| Cosa vuoi fare? | Vai a |
| --- | --- |
| Configurazione iniziale | [Avvio rapido](#avvio-rapido-il-tuo-primo-pacco-in-15-minuti) |
| Capire le due parti del plugin | [4 · Le due parti spiegate](#4-le-due-parti-spiegate) |
| Inserire o testare l'API key | [5 · Impostazioni · Generale](#5-impostazioni-generale) |
| Impostare formato etichetta e dimensioni/peso di fallback | [6 · Impostazioni · Valori predefiniti spedizione](#6-impostazioni-valori-predefiniti-spedizione) |
| Attivare o disattivare vettori e servizi | [7 · Impostazioni · Vettori](#7-impostazioni-vettori) |
| Cambiare ciò che i clienti vedono al checkout | [8 · Impostazioni · Checkout](#8-impostazioni-checkout) |
| Impostare gli HS code per la dogana | [9 · Impostazioni · Dogana](#9-impostazioni-dogana) e [10 · Impostazioni prodotto](#10-impostazioni-prodotto) |
| Esportare ordini e stampare etichette | [11 · La lista ordini](#11-la-lista-ordini) e [12 · La pagina dettaglio ordine](#12-la-pagina-dettaglio-ordine) |
| Vedere cosa vive un cliente | [13 · L'esperienza di checkout](#13-lesperienza-di-checkout) |
| Qualcosa non funziona | [15 · Qualcosa non funziona, diagnostica](#15-qualcosa-non-funziona-diagnostica) |

## 1 · Preparare il tuo account MyParcel
Prima di iniziare in OpenCart, sistema due cose nel tuo backoffice MyParcel:

1. **Copia la tua API key.** Accedi a [backoffice.myparcel.com](https://backoffice.myparcel.com), vai su *Impostazioni → Accesso API* e copia la key. Tienila privata, dà accesso al tuo account.
2. **Attiva i tuoi vettori.** In *Impostazioni → Vettori*, assicurati che i vettori con cui vuoi spedire siano attivi sul tuo account. Solo i vettori attivi potranno essere importati successivamente nell'estensione.

## 2 · Installare l'estensione
L'estensione MyParcel viene fornita come pacchetto di modifica per OpenCart (`.ocmod.zip`).

1. Scarica l'ultimo `myparcel.ocmod.zip` da [github.com/myparcelnl/opencart4/releases](https://github.com/myparcelnl/opencart4/releases).
2. Nel tuo admin OpenCart vai su **Estensioni → Installazione** e carica il pacchetto.
3. Vai su **Estensioni → Estensioni** e scegli **Moduli** dal menu a discesa *Scegli il tipo di estensione*. Trova **MyParcel** e clicca il pulsante verde di installazione.
4. Nella stessa pagina scegli **Spedizione** dal menu a discesa. Trova **MyParcel** e clicca installa, poi apri le sue impostazioni per definire la tariffa, la geo zona e lo stato (vedi [4 · Le due parti spiegate](#4-le-due-parti-spiegate)).
5. Quando OpenCart lo chiede, aggiorna la cache delle modifiche (**Estensioni → Modifiche → Aggiorna**).

![La lista Estensioni filtrata su Spedizione, con MyParcel installato in cima.](../../platforms/images/opencart/01-extensions-shipping.png)

## 3 · Collegare l'estensione (API key)
Apri il **Modulo** MyParcel (**Estensioni → Estensioni → Moduli → MyParcel**, pulsante modifica) e vai alla tab **Generale**.

1. Imposta **Stato** su abilitato.
2. Incolla la tua **API key**.
3. Lascia **Ambiente** su *Produzione* per la spedizione reale. Usa *Acceptance (test)* solo quando stai testando contro l'ambiente di test MyParcel.
4. Clicca **Salva**, poi clicca **Testa API key** per confermare la connessione.

![La tab Generale con Stato, API key, il pulsante Testa API key e il selettore Ambiente.](../../platforms/images/opencart/03-general.png)

::: warning La connessione non riesce?
Le cause più comuni sono uno spazio extra incollato con la key, oppure la key appartenente all'ambiente sbagliato (una key di produzione con Ambiente impostato su Acceptance, o viceversa).
:::

## 4 · Le due parti spiegate
A differenza di un unico plugin all-in-one, MyParcel per OpenCart vive in due punti sotto **Estensioni**. Li usi entrambi.

- **Metodo di spedizione** (*Estensioni → Estensioni → Spedizione → MyParcel*) è ciò che il tuo cliente sceglie e paga al checkout. Qui imposti il **Nome visualizzato** mostrato ai clienti, la **Tariffa**, la **Classe fiscale**, la **Geo zona** a cui si applica, il suo **Stato** e l'**Ordine di visualizzazione**.
- **Modulo** (*Estensioni → Estensioni → Moduli → MyParcel*) è la centrale di controllo: API key, vettori, comportamento del checkout, dogana e valori predefiniti delle etichette. È qui che trascorri la maggior parte del tempo.

Puoi passare dall'uno all'altro con i pulsanti **Impostazioni spedizione** e **Impostazioni modulo** in alto a destra su ogni schermata.

![Il metodo di spedizione MyParcel: Nome visualizzato, Tariffa, Classe fiscale, Geo zona, Stato e Ordine di visualizzazione.](../../platforms/images/opencart/02-shipping-method.png)

## 5 · Impostazioni · Generale
Nella tab **Modulo → Generale**:

| Impostazione | Cosa fa |
| --- | --- |
| **Stato** | Attiva o disattiva l'intero modulo MyParcel. |
| **API key** | La key dal tuo backoffice MyParcel. Usa l'icona a occhio per rivelarla e **Testa API key** per verificarla. |
| **Ambiente** | *Produzione* per spedizioni reali (predefinito), oppure *Acceptance (test)* per testare contro l'ambiente di test MyParcel. |

## 6 · Impostazioni · Valori predefiniti spedizione
Questi valori vengono usati quando un ordine non porta con sé i propri dati. Nella tab **Valori predefiniti spedizione**:

| Impostazione | Cosa fa | Consigliato |
| --- | --- | --- |
| **Tipo di pacco predefinito** | Il tipo di pacco usato quando un ordine non ha un'opzione di consegna scelta al checkout. | Pacco |
| **Formato etichetta** | *A6* stampa un'etichetta per pagina. *A4* posiziona le etichette su un foglio. | A6 |
| **Posizione etichetta** | Posizione sul foglio A4 (da 1 a 4). Ignorata per A6. | 1 |
| **Dimensioni pacco di fallback** | Lunghezza, larghezza e altezza in cm, usate solo quando i prodotti dell'ordine non hanno dimensioni utilizzabili. Alcuni vettori (per esempio Poste Italiane e InPost) le richiedono. | Compilare per i vettori con locker |
| **Peso di fallback** | Peso in grammi, usato solo quando i prodotti dell'ordine non hanno peso. Lascia a 0 per usare un minimo tecnico di 1 g. Alcuni vettori richiedono di più, come UPS (almeno 50 g). | Lascia a 0 salvo che un vettore richieda di più |

![La tab Valori predefiniti spedizione: tipo di pacco predefinito, formato etichetta, posizione etichetta, dimensioni di fallback e peso di fallback.](../../platforms/images/opencart/04-shipment-defaults.png)

## 7 · Impostazioni · Vettori
La tab Vettori riflette i vettori attivi sul tuo account MyParcel.

1. Clicca **Importa configurazione vettori** per recuperare i tuoi vettori. Salva prima la tua API key, le funzionalità vengono recuperate con la key salvata. La schermata mostra quanti vettori sono stati importati e quando.
2. Ogni vettore ha un interruttore on/off. Attiva i vettori che vuoi offrire.
3. Per ogni vettore, abilita i **Servizi** che desideri, come *Consegna standard* e *Pickup point*. Consegna standard e ritiro sono abilitati di default, i servizi premium devono essere abilitati deliberatamente.

![La tab Vettori con il pulsante Importa configurazione vettori e gli interruttori dei servizi per vettore.](../../platforms/images/opencart/05-carriers.png)

::: tip Quali vettori appaiono?
Solo i vettori attivi sul tuo account MyParcel possono essere importati. Se un vettore manca, attivalo prima nel backoffice, poi importa di nuovo.
:::

## 8 · Impostazioni · Checkout
La tab Checkout controlla il widget delle opzioni di consegna MyParcel che i clienti vedono. Nella tab **Checkout**:

| Impostazione | Cosa fa |
| --- | --- |
| **Opzioni di consegna** | Mostra il widget delle opzioni di consegna MyParcel al checkout. Disattivalo per vendere senza opzioni di consegna. |
| **Mostra data di consegna** | Permette al cliente di scegliere una data di consegna. |
| **Finestra giorni di consegna** | Numero di giorni in avanti entro cui il cliente può scegliere una data di consegna (0 = predefinito del widget). |
| **Ritardo di consegna al vettore** | Giorni tra l'ordine e la consegna al vettore (0 = nessuno). Aumentalo se ti serve più tempo per imballare. |
| **Visualizzazione pickup point** | Mostra i pickup point come *Lista* o come *Mappa*. |
| **Consenti passaggio lista/mappa** | Permette al cliente di passare da solo tra vista lista e mappa. |
| **Escludi parcel locker** | Nasconde i parcel locker automatici dalle opzioni di ritiro. |
| **Vista compatta** | Un layout più denso per il widget. |
| **Mappa pickup in pop-up** | Apre la mappa dei pickup in un pop-up invece che in linea. |

![La tab Checkout con le impostazioni del widget delle opzioni di consegna.](../../platforms/images/opencart/06-checkout.png)

## 9 · Impostazioni · Dogana
Necessaria quando spedisci fuori dall'UE. Nella tab **Dogana**:

| Impostazione | Cosa fa |
| --- | --- |
| **Campi doganali del prodotto** | Aggiunge i campi **HS code** e **Paese di origine** all'editor del prodotto per il mapping doganale (vedi [10 · Impostazioni prodotto](#10-impostazioni-prodotto)). |
| **Paese di origine predefinito** | Paese di origine di fallback usato per il mapping doganale quando un prodotto non ne ha uno. |
| **HS code predefinito** | HS code (sistema armonizzato) di fallback usato per il mapping doganale quando un prodotto non ne ha uno. |

![La tab Dogana: interruttore dei campi doganali del prodotto, paese di origine predefinito e HS code predefinito.](../../platforms/images/opencart/07-customs.png)

## 10 · Impostazioni prodotto
Quando i **Campi doganali del prodotto** sono abilitati, una sezione **Dogana MyParcel** appare in cima alla tab **Dati** di un prodotto (**Catalogo → Prodotti →** modifica un prodotto **→ Dati**).

- **HS code**, il codice del sistema armonizzato per questo prodotto.
- **Paese di origine**, dove il prodotto è stato realizzato.

MyParcel usa anche le **Dimensioni (L x P x A)** e il **Peso** standard di OpenCart dalla stessa tab Dati per calcolare la spedizione. Compilali per etichette accurate, in caso di campo vuoto ripiegano sui valori dei [Valori predefiniti spedizione](#6-impostazioni-valori-predefiniti-spedizione).

![La sezione Dogana MyParcel in cima alla tab Dati del prodotto, con HS code e Paese di origine.](../../platforms/images/opencart/08-product-customs.png)

## 11 · La lista ordini
Apri **Vendite → Ordini**. L'estensione MyParcel aggiunge pulsanti azione a ogni riga d'ordine:

| Pulsante | Cosa fa |
| --- | --- |
| **Camion verde** | Esporta l'ordine a MyParcel e crea una spedizione (una spedizione concept). |
| **PDF blu** | Scarica l'etichetta di spedizione per la spedizione più recente. |
| **Pin grigio** | Mostra il pickup point scelto dal cliente, se presente. |
| **Badge spedizione / vettore** | Mostra quante spedizioni ha l'ordine e il vettore. |
| **Occhio blu** | Apre la pagina di dettaglio ordine standard di OpenCart. |

La barra degli strumenti in alto a destra offre le stesse azioni in bulk per gli ordini selezionati.

![La lista ordini con i pulsanti MyParcel di esportazione, etichetta, ritiro e visualizzazione per ogni riga.](../../platforms/images/opencart/09-orders-list.png)

## 12 · La pagina dettaglio ordine
Apri un ordine (il pulsante occhio blu). In alto trovi il pannello **Spedizioni MyParcel**.

- Ogni esportazione crea una spedizione separata, un ordine può averne diverse. Le azioni della barra degli strumenti usano la spedizione più recente, le azioni nella tabella agiscono su una spedizione specifica.
- Ogni riga mostra il numero di **Spedizione**, il **Barcode**, lo stato di **Tracking** (per esempio *Non ancora disponibile* o *Pronto*), l'orario di **Creazione** e le azioni per singola spedizione per **scaricare l'etichetta** e **visualizzare il pickup point**.

![Il pannello Spedizioni MyParcel sulla pagina dettaglio ordine, che elenca ogni spedizione con il suo barcode e lo stato di tracking.](../../platforms/images/opencart/10-order-detail.png)

::: tip Più pacchi per un ordine
Clicca di nuovo il pulsante di esportazione per creare una spedizione extra e indipendente per lo stesso ordine, utile quando un ordine viene spedito in più di una scatola.
:::

## 13 · L'esperienza di checkout
Con le **Opzioni di consegna** abilitate, i clienti vedono il widget MyParcel al checkout dopo aver inserito il proprio indirizzo. Possono scegliere tra i vettori e i servizi che hai abilitato nella [tab Vettori](#7-impostazioni-vettori).

A seconda del vettore e delle tue impostazioni, un cliente può scegliere:

- **Consegna standard**, consegna all'indirizzo.
- **Consegna prioritaria** o altri servizi premium, quando abilitati per il vettore.
- Un **Pickup point**, un punto di ritiro nelle vicinanze, mostrato come lista o su una mappa. I pickup point possono portare un'etichetta **Eco-friendly**.

![Le opzioni di consegna al checkout: vettori con consegna standard, consegna prioritaria e un pickup point.](../../platforms/images/opencart/11-checkout-delivery-options.png)

La scelta del cliente viene passata all'ordine, così quando lo esporti il vettore, il servizio e il pickup point corretti sono già compilati.

## 14 · Uso quotidiano
Una tipica giornata di spedizioni:

1. Apri **Vendite → Ordini** e filtra sui nuovi ordini.
2. Seleziona gli ordini che vuoi spedire e usa il pulsante di esportazione della barra degli strumenti, oppure esportali uno per uno con il pulsante camion verde.
3. Scarica le etichette (singolo PDF o in bulk) e stampale.
4. Consegna i pacchi al vettore. Il Track & Trace viene generato automaticamente e, dove supportato, condiviso con il tuo cliente.

## 15 · Qualcosa non funziona, diagnostica
| Sintomo | Causa probabile e soluzione |
| --- | --- |
| **Testa API key fallisce** | Key errata o digitata male, oppure l'Ambiente non corrisponde alla key. Ricopia la key dal backoffice e controlla Produzione vs Acceptance. |
| **Nessun vettore nella tab Vettori** | Salva prima l'API key, poi clicca **Importa configurazione vettori**. Se un vettore manca ancora, attivalo nel backoffice MyParcel. |
| **Nessuna opzione di consegna al checkout** | L'interruttore **Opzioni di consegna** è disattivato, il **Metodo di spedizione** MyParcel è disabilitato o fuori dalla sua Geo zona, oppure nessun vettore/servizio è abilitato. |
| **L'esportazione fallisce per un vettore che richiede le dimensioni** | Alcuni vettori (Poste Italiane, InPost) necessitano di una dimensione del pacco. Compila le dimensioni del prodotto o le **Dimensioni pacco di fallback**. |
| **Il pulsante etichetta non fa nulla** | La spedizione non ha ancora un barcode (il tracking mostra *Non ancora disponibile*). Attendi un momento e aggiorna, oppure esporta di nuovo. |
| **Impostazioni o pulsanti sembrano datati dopo un aggiornamento** | Aggiorna la cache delle modifiche in **Estensioni → Modifiche → Aggiorna**. |

## 16 · FAQ
**Ho bisogno sia del Modulo sia del Metodo di spedizione?**
Sì. Il Metodo di spedizione è la tariffa che i clienti scelgono al checkout, il Modulo contiene l'API key, i vettori e la gestione delle etichette. Installa e abilita entrambi.

**Dove imposto il prezzo di spedizione?**
Nel **Metodo di spedizione** MyParcel (*Estensioni → Estensioni → Spedizione → MyParcel*), nel campo **Tariffa**.

**Un ordine può avere più di un pacco?**
Sì. Ogni esportazione crea una spedizione separata e indipendente. Esporta di nuovo per aggiungere un altro pacco allo stesso ordine.

**Devo inserire pesi e dimensioni per ogni prodotto?**
Aiuta l'accuratezza. Quando un prodotto non ha peso o dimensioni, MyParcel usa il **Peso di fallback** e le **Dimensioni pacco di fallback** dai [Valori predefiniti spedizione](#6-impostazioni-valori-predefiniti-spedizione). Alcuni vettori richiedono dimensioni reali.

**La scelta di ritiro del mio cliente viene conservata?**
Sì. Il pickup point che un cliente seleziona al checkout viene memorizzato sull'ordine e usato quando lo esporti.
