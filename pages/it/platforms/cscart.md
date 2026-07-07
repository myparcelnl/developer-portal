---
title: CS-Cart
description: "Collega il tuo negozio CS-Cart a MyParcel tramite un canale di vendita (Sales channel) nel backoffice MyParcel, non esiste un plugin CS-Cart. MyParcel comunica direttamente con il tuo negozio tramite la REST API e importa i tuoi ordini. Include i dati esatti che ti servono (URL del negozio, e-mail CS-Cart e chiave API), dove trovarli, la procedura di collegamento passo passo con screenshot, il flusso di lavoro quotidiano e una tabella diagnostica."
---

::: tip In breve
CS-Cart si collega a MyParcel tramite un **canale di vendita** (Sales channel) che crei nel backoffice MyParcel, non c'è alcuna app o plugin CS-Cart da installare. Una volta autenticato il canale, MyParcel legge i tuoi ordini CS-Cart direttamente tramite la CS-Cart REST API e li importa, pronti per l'etichetta e la spedizione. Ti servono tre cose dal tuo back office CS-Cart: l'**URL del negozio**, il tuo **indirizzo e-mail CS-Cart** e una **chiave API CS-Cart**.
:::

## Avvio rapido, il tuo primo collegamento in 10 minuti
Abbastanza per collegare CS-Cart a MyParcel oggi stesso. Per i dettagli, vedi [Cosa stai cercando?](#cosa-stai-cercando) più sotto.

1. **Account.** Non hai ancora un account MyParcel? Creane uno su [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Raccogli i tuoi dati.** Nel tuo **back office CS-Cart**, annota l'**URL del negozio**, il tuo **indirizzo e-mail di amministratore** e genera/attiva una **chiave API** per quell'amministratore (vedi [Cosa ti serve e dove trovarlo](#2-cosa-ti-serve-e-dove-trovarlo)).
3. **Aggiungi il canale di vendita.** In [backoffice.myparcel.nl](https://backoffice.myparcel.nl) vai su *Shop settings → Sales Channels* → **Add sales channel** → scegli **CS-Cart** → inserisci un nome e l'URL del tuo negozio → **Save**.
4. **Autentica.** Apri il nuovo canale, clicca su **Set credentials**, incolla il tuo **indirizzo e-mail CS-Cart** e la **chiave API CS-Cart**, poi clicca su **Connect**.
5. **Fatto.** L'etichetta **Missing data** scompare e il canale mostra **Connected**. MyParcel inizia a importare i tuoi ordini CS-Cart.

::: tip Hai finito quando vedi questo
- Il canale mostra **Connected** invece di **Missing data**.
- Sulla scheda del canale compare una riga **Latest synchronisation** con un orario recente.
- I nuovi ordini CS-Cart iniziano ad apparire nella tua panoramica *Spedizioni* di MyParcel.
:::

## Cosa stai cercando?
| Cosa vuoi fare? | Vai a |
| --- | --- |
| Capire come funziona il collegamento | [1 · Come funziona il collegamento](#1-come-funziona-il-collegamento) |
| Sapere esattamente quali dati raccogliere | [2 · Cosa ti serve e dove trovarlo](#2-cosa-ti-serve-e-dove-trovarlo) |
| Preparare il tuo account MyParcel | [3 · Preparare il tuo account MyParcel](#3-preparare-il-tuo-account-myparcel) |
| Creare il canale di vendita | [4 · Creare il canale di vendita](#4-creare-il-canale-di-vendita) |
| Autenticare con e-mail e chiave API | [5 · Autenticare il canale](#5-autenticare-il-canale) |
| Gestire gli ordini ogni giorno | [6 · Uso quotidiano](#6-uso-quotidiano) |
| Qualcosa non funziona | [7 · Qualcosa non funziona, diagnostica](#7-qualcosa-non-funziona-diagnostica) |
| Risposta a una domanda frequente | [8 · FAQ](#8-faq) |

## 1 · Come funziona il collegamento
A differenza di WooCommerce, PrestaShop o Magento, che usano un plugin all'interno del negozio, CS-Cart **non ha alcun modulo da installare**. MyParcel si collega invece a CS-Cart come farebbe un sistema esterno: tramite la **CS-Cart REST API**.

Registri il tuo negozio una volta come **canale di vendita** nel backoffice MyParcel e dai a MyParcel il permesso di leggerlo (il tuo indirizzo e-mail + una chiave API). Da quel momento MyParcel **preleva** i tuoi ordini direttamente da CS-Cart e li importa come spedizioni. Crei le etichette e spedisci dal tuo backoffice MyParcel, esattamente come con qualsiasi altro canale.

Poiché il collegamento avviene server-to-server tramite l'API, non c'è nulla da mantenere all'interno di CS-Cart e non c'è alcun modulo di checkout, le opzioni di consegna non vengono aggiunte al checkout di CS-Cart.

## 2 · Cosa ti serve e dove trovarlo
Per creare il collegamento, MyParcel ha bisogno di tre informazioni dal tuo **back office CS-Cart**. Questo è indicato anche nel backoffice quando aggiungi il canale: *"To create the link we need the URL of your webshop, your email address and an API key that can be found in your CS-Cart back office."* (L'URL del tuo negozio, il tuo indirizzo e-mail e una chiave API dal tuo back office CS-Cart.)

| Cosa | Di cosa si tratta | Dove trovarlo in CS-Cart |
| --- | --- | --- |
| **URL del negozio** | L'indirizzo web del tuo storefront CS-Cart, es. `https://il-tuo-negozio.com`. | L'indirizzo della pagina principale del tuo negozio. Usa lo stesso dominio che usano i tuoi clienti. |
| **Indirizzo e-mail CS-Cart** | L'indirizzo e-mail di un account **amministratore** CS-Cart con accesso API. | L'e-mail dell'utente amministratore con cui accedi al back office CS-Cart. |
| **Chiave API CS-Cart** | Una chiave che concede l'accesso API a quell'amministratore. | Nel pannello di amministrazione CS-Cart, apri il profilo dell'amministratore (menu utente in alto a destra, oppure *Customers → Administrators →* seleziona l'utente). Nella sezione **API access** attiva l'accesso API e copia la **chiave API** generata. |

::: tip Attiva l'accesso API per l'utente
In CS-Cart la chiave API appartiene a un amministratore specifico e funziona solo se l'**accesso API è attivato** per quell'utente. Se non vedi una chiave API, spunta l'opzione per consentire l'accesso API nel profilo dell'amministratore e salva, CS-Cart mostrerà la chiave. La dicitura esatta e la posizione possono variare leggermente a seconda della versione e del tema di CS-Cart.
:::

::: warning Tratta la chiave API come una password
L'indirizzo e-mail e la chiave API insieme danno pieno accesso in lettura ai tuoi ordini CS-Cart. Non condividerli e inseriscili solo nel backoffice ufficiale MyParcel ([backoffice.myparcel.nl](https://backoffice.myparcel.nl)).
:::

## 3 · Preparare il tuo account MyParcel
Prima di aggiungere il canale, sistema tre cose nel tuo backoffice MyParcel:

1. **Indirizzo di fatturazione e di reso**, *Shop settings → General*. Compare su ogni etichetta.
2. **Attivare i corrieri**, *Shop settings → Carriers*. Solo i corrieri attivati potranno essere scelti sulle tue spedizioni.
3. **Tipo di pacco predefinito**, *Account settings → Shipments*. Gli ordini CS-Cart importati ricadono su questo tipo.

## 4 · Creare il canale di vendita
1. Accedi a [backoffice.myparcel.nl](https://backoffice.myparcel.nl) e vai su **Shop settings → Sales Channels**.
2. Clicca su **Add sales channel** (in alto a destra).

![La panoramica Sales Channels nel backoffice MyParcel, con il pulsante Add sales channel in alto a destra.](../../platforms/images/cscart/backoffice-sales-channels.png)

3. Inserisci un **Name** (nome) che ti aiuti a riconoscere il canale (es. *Il mio negozio CS-Cart*).
4. In **Type of sales channel**, scegli **CS-Cart**.
5. In **Webshop URL**, inserisci l'indirizzo del tuo storefront CS-Cart (es. `il-tuo-negozio.com`).
6. Clicca su **Save**. Il canale viene creato e compare con l'etichetta **Missing data**, significa solo che manca ancora il passaggio di autenticazione.

![Il modulo Add sales channel. In Type of sales channel scegli CS-Cart; comparirà poi il campo Webshop URL.](../../platforms/images/cscart/backoffice-add-channel.png)

## 5 · Autenticare il canale
Un canale di vendita ha bisogno del permesso di leggere i tuoi ordini CS-Cart. Per CS-Cart questo avviene con il tuo **indirizzo e-mail CS-Cart** e la **chiave API CS-Cart** (vedi [Cosa ti serve e dove trovarlo](#2-cosa-ti-serve-e-dove-trovarlo)).

1. Apri il canale e clicca su **Set credentials**.
2. Nella finestra **Set API key**, compila:
   - **Your CS-Cart email address**, l'e-mail dell'amministratore da CS-Cart.
   - **Your CS-Cart API key**, la chiave API dal profilo di quell'amministratore.
3. Clicca su **Connect**.

![La finestra Set API key, con i campi per il tuo indirizzo e-mail CS-Cart e la chiave API CS-Cart.](../../platforms/images/cscart/backoffice-credentials.png)

Una volta connesso, l'etichetta **Missing data** scompare, il canale mostra **Connected** e MyParcel inizia a sincronizzare i tuoi ordini CS-Cart.

::: warning La connessione non riesce?
Cause più comuni: uno spazio in più incollato con l'e-mail o la chiave API · accesso API non attivato per quell'amministratore in CS-Cart · un URL del negozio che non corrisponde al negozio a cui appartiene la chiave · la chiave API appartiene a un amministratore diverso dall'e-mail inserita.
:::

## 6 · Uso quotidiano
Una volta connesso il canale, MyParcel importa automaticamente i tuoi ordini CS-Cart:

1. I nuovi ordini CS-Cart compaiono come spedizioni nella tua panoramica **Spedizioni** di MyParcel.
2. Seleziona gli ordini, crea le etichette e consegnale al corriere, tutto dal tuo backoffice MyParcel.
3. Ti viene addebitato solo quando una spedizione viene effettivamente consegnata al corriere.

::: tip Elaborazione in blocco
Seleziona più ordini nuovi con la casella in alto nella panoramica Spedizioni e usa *Elabora* + *Stampa etichette* per gestire un intero lotto in una volta.
:::

## 7 · Qualcosa non funziona, diagnostica
Scorri questa tabella dall'alto verso il basso, la maggior parte dei problemi si risolve in pochi minuti.

| Sintomo | Cosa controllare |
| --- | --- |
| **Il canale resta su "Missing data"** | Il passaggio di autenticazione non è completato. Apri il canale, clicca su **Set credentials** e inserisci la tua e-mail e la chiave API CS-Cart ([§5](#5-autenticare-il-canale)). |
| **"Connect" viene rifiutato** | Reincolla l'e-mail e la chiave API senza spazi in più. Verifica che l'**accesso API sia attivato** per quell'amministratore in CS-Cart e che l'e-mail e la chiave appartengano allo **stesso** amministratore. |
| **Nessun ordine viene importato** | Controlla che l'**URL del negozio** sia corretto e raggiungibile (`https://…`) e che l'amministratore di cui hai usato la chiave possa vedere gli ordini in CS-Cart. |
| **Alcuni ordini mancano** | MyParcel importa gli ordini che può leggere tramite l'API. Assicurati che gli ordini esistano e siano visibili all'utente API in CS-Cart. |
| **Tipo di pacco errato sugli ordini** | Gli ordini importati ricadono sul tuo **tipo di pacco predefinito** in *Account settings → Shipments*. Modificalo lì, o cambia le singole spedizioni prima di elaborarle. |

## 8 · FAQ

### Esiste un plugin CS-Cart?
No. CS-Cart si collega a MyParcel solo tramite un **canale di vendita** nel backoffice MyParcel, tramite la CS-Cart REST API. Non c'è nulla da installare all'interno di CS-Cart.

### Dove trovo la mia chiave API CS-Cart?
Nel pannello di amministrazione CS-Cart, nel profilo dell'amministratore sotto la sezione **API access**. Attiva l'accesso API per l'utente e CS-Cart mostrerà la chiave. L'indirizzo e-mail è l'e-mail di accesso di quello stesso amministratore. Vedi [§2](#2-cosa-ti-serve-e-dove-trovarlo).

### Posso mostrare le opzioni di consegna MyParcel nel checkout di CS-Cart?
No. Il collegamento è server-to-server per importare gli ordini; non aggiunge opzioni di consegna al checkout di CS-Cart.

### Il collegamento è a pagamento?
No. Il collegamento è gratuito. Paghi solo per le spedizioni secondo la tua tariffa MyParcel.

### Come cambio l'indirizzo del mittente sull'etichetta?
Si imposta nel tuo backoffice MyParcel (*Shop settings → General*), non in CS-Cart. Le modifiche sono immediate.

## Risorse e supporto
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), canali di vendita, account, chiave API, fatturazione.
- [Contatta il supporto MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Questa guida descrive l'attuale canale di vendita CS-Cart nel backoffice MyParcel. Le schermate dal lato CS-Cart possono apparire leggermente diverse a seconda della versione o del tema; i dati di cui hai bisogno (URL del negozio, e-mail, chiave API) restano gli stessi.
