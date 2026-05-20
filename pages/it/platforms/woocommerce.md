---
title: WooCommerce
description: "Da zero al pacco spedito su WooCommerce — installa il plugin, collega il tuo account MyParcel, scegli un profilo shop e oggi stesso spedisci la tua prima etichetta. Con avvio rapido, profili shop, riferimento impostazioni, workflow quotidiano e una tabella diagnostica."
---

::: tip In breve
Il plugin MyParcel collega il tuo shop WooCommerce a MyParcel. I clienti scelgono al checkout un momento di consegna o un pickup point, tu stampi le etichette da WordPress e il Track & Trace va automaticamente al cliente. Nessun codice necessario — tutto tramite l'admin di WordPress.
:::

## Avvio rapido — il primo pacco in 15 minuti
Sufficiente per spedire oggi stesso il tuo primo ordine reale. Per configurazioni più approfondite vedi [Cosa stai cercando?](#cosa-stai-cercando) qui sotto.

1. **Account.** Non hai ancora un account MyParcel? Creane uno su [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Copia API key.** Accedi a [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Impostazioni shop → Integrazione* → copia l'API key.
3. **Installa il plugin.** In WordPress: **Plugin → Aggiungi nuovo** → cerca *MyParcel* → **Installa ora** → **Attiva**.
4. **Collega il plugin.** Apri **WooCommerce → MyParcel**, clicca **Modifica API key**, incolla la key e clicca **Salva**. Il badge di stato deve mostrare *Collegato a MyParcel*.
5. **Prima etichetta.** Apri un ordine pagato, scorri fino al blocco MyParcel e clicca **Esporta e stampa**. La tua etichetta PDF esce subito.

::: tip Hai finito quando vedi questo
- In alto nel plugin: stato verde *Collegato a MyParcel*
- Un ordine di test puoi esportarlo a MyParcel
- L'etichetta PDF si apre (o finisce nella cartella download)
:::

## Cosa stai cercando?
| Cosa vuoi fare? | Vai a |
| --- | --- |
| Configurazione iniziale | [Avvio rapido](#avvio-rapido-il-primo-pacco-in-15-minuti) |
| Impostazioni consigliate per il tuo tipo di shop | [4 · Qual è il tuo profilo shop?](#4-qual-e-il-tuo-profilo-shop) |
| Cercare un'impostazione specifica | [5 · Impostazioni · Ordini](#5-impostazioni-ordini) fino a [9 · Impostazioni · Vettori](#9-impostazioni-vettori) |
| Un'impostazione diversa per prodotto | [10 · Impostazioni prodotto](#10-impostazioni-prodotto) |
| Cosa vede un cliente al checkout | [12 · L'esperienza di checkout](#12-l-esperienza-di-checkout) |
| Elaborazione bulk per 50+ ordini/giorno | [14 · Uso quotidiano](#14-uso-quotidiano) |
| Qualcosa non funziona | [15 · Qualcosa non funziona — diagnostica](#15-qualcosa-non-funziona-diagnostica) |
| Risposta a una domanda frequente | [16 · FAQ](#16-faq) |

## 1 · Preparare il tuo account MyParcel
Prima di iniziare in WooCommerce, sistema quattro cose nel tuo backoffice MyParcel:

1. **Indirizzo di fatturazione e reso** — *Impostazioni shop → Generale*. Appare su tutte le etichette.
2. **Attivare i vettori** — *Impostazioni shop → Vettori*. Solo i vettori spuntati appariranno poi nel plugin.
3. **Generare API key** — *Impostazioni shop → Integrazione*.
4. **Importa informazioni ordine** (opzionale) — attiva se vuoi usare la [Modalità ordine](#5-impostazioni-ordini).

## 2 · Installare il plugin
1. Nell'admin WordPress: **Plugin → Aggiungi nuovo**.
2. Cerca *MyParcel*.
3. Su *WooCommerce MyParcel* clicca **Installa ora**, poi **Attiva**.
4. Appare una nuova voce di menu **WooCommerce → MyParcel**.

::: details Preferisci l'installazione manuale?
Scarica lo ZIP della release da [github.com/myparcelnl/woocommerce/releases](https://github.com/myparcelnl/woocommerce/releases) e caricalo tramite **Plugin → Aggiungi nuovo → Carica plugin**.
:::

## 3 · Collegare il plugin (API key)
Apri **WooCommerce → MyParcel**. In alto vedi tre pulsanti — *Modifica API key*, *Modifica webhook*, *Opzioni di debug* — più il badge di stato.

![Barra di collegamento MyParcel: Collegato a MyParcel + tre pulsanti azione.](../../platforms/images/woocommerce/connection-bar.svg) La barra di collegamento appare su ogni pagina del plugin.

1. Clicca **Modifica API key**.
2. Incolla la key dal tuo backoffice MyParcel.
3. Clicca **Salva** — entro pochi secondi lo stato cambia in *Collegato a MyParcel*.

::: warning Non funziona?
Cause più comuni: non hai cliccato *Salva* · spazio copiato prima/dopo la key · key di un altro shop · plugin gira su un ambiente diverso (live vs sandbox) rispetto al tuo account MyParcel.
:::

### Cosa fa il plugin nell'admin di WordPress?
| Dove? | Cosa puoi fare? |
| --- | --- |
| **WooCommerce → MyParcel** | Pagina impostazioni con cinque tab (Ordini, Etichette, Dogana, Checkout, Vettori). |
| **WooCommerce → Ordini** | Colonna extra *MyParcel* per ordine + azioni bulk per esportare e stampare. |
| **Pagina dettaglio ordine** | Box *MyParcel* per impostare per ordine vettore/tipo di pacco/assicurazione e creare etichette. |
| **Pagina dettaglio prodotto** | Tab *MyParcel* in *Dati prodotto* per impostazioni specifiche del prodotto. |

## 4 · Qual è il tuo profilo shop?
Quattro profili tipici con impostazioni consigliate. Scegline uno, applica le impostazioni, poi affina con [5 · Impostazioni](#5-impostazioni-ordini).

### Piccolo — pochi ordini al giorno, solo NL
| Impostazione | Consigliato | Perché |
| --- | --- | --- |
| Modalità ordine | On | Ordine completo a MyParcel |
| Spedizioni concept | On | Ti tiene sotto controllo mentre impari |
| Elaborazione automatica | Nessuna | Clicca tu *Esporta* per ogni ordine |
| Formato etichetta | A4 (4 per pagina) | Nessuna stampante etichette necessaria |
| Solo PostNL | On | Vettore standard NL |
| Assicurazione — *Assicurare da €* | 250 | Pacchi sopra €250 assicurati automaticamente |

### Shop attivo — 50+ ordini/giorno
| Impostazione | Consigliato | Perché |
| --- | --- | --- |
| Spedizioni concept | Off | Più veloce — etichette subito definitive |
| Elaborazione automatica | *In elaborazione* | Niente più click per ordine |
| Formato etichetta | A6 (stampante etichette Zebra/Brother) | Stampa più veloce |
| Stampa subito | On | Flusso di stampa senza click |
| Esportazione bulk | 2–3× al giorno | Sulla lista ordini |
| Tempo di elaborazione | 2 giorni in alta stagione | Finestra realistica per il cliente |
| PostNL + DHL For You | Entrambi attivi | Ampia copertura |

### Solo cassetta postale — caffè, cartoline, cosmetici
| Impostazione | Consigliato | Perché |
| --- | --- | --- |
| Classe di spedizione `Cassetta postale` | Crea in *WooCommerce → Spedizione → Classi di spedizione* | Collega lì i prodotti |
| *Checkout → Metodi di spedizione consentiti* | Metodo → *Pacco da cassetta postale* | Un metodo per tipo di pacco |
| Mostrare opzioni di consegna | Off | Per cassetta postale niente scelta di orario |
| Assicurazione | Off | Non disponibile per pacco da cassetta postale |

### Gioielli costosi / prodotti di alta gamma
| Impostazione | Consigliato | Perché |
| --- | --- | --- |
| Firma standard | On | Il corriere fa firmare il cliente |
| Solo destinatario standard | On | Niente vicini |
| Assicurazione | Da €0, fino a €2500, percentuale 100% | Copertura totale |
| Consegna serale + pickup point | Off | Riduce perdite/furti |
| Campi indirizzo separati + Address widget | On | Errori di battitura minimi |

### Spedizioni internazionali
| Impostazione | Consigliato | Perché |
| --- | --- | --- |
| Condividi informazioni cliente | On | Telefono richiesto per dogana |
| Tab Dogana | Compilare interamente | HS code, paese di origine, *Merci* |
| DHL Parcel Connect | On | Per Europa |
| UPS / DHL Express | On | Per il mondo |

## 5 · Impostazioni · Ordini
La prima e più importante tab — qui decidi come gli ordini fluiscono attraverso il tuo shop.

![Tab Ordini: Generale, Automazione stato ordine, Track & Trace, Pesi predefiniti, Note ordine.](../../platforms/images/woocommerce/bestellingen.jpg)

### Generale
- **Modalità ordine** — On: ordine completo (dati cliente, righe prodotto, note) a MyParcel. Off: solo un'etichetta. *Consigliato on*, a patto che *Importa informazioni ordine* in MyParcel sia attivo.
- **Spedizioni concept** — On: la spedizione resta concept in MyParcel. Off: registrazione diretta presso il vettore. *On durante il setup, off quando tutto gira.*
- **Elaborazione automatica** — Quale stato WooCommerce attiva l'esportazione automatica? *Nessuno* / *In attesa di pagamento* / *In elaborazione* / *Completato*. Inizia con *Nessuno*.
- **Invia email di reso** — Il cliente riceve automaticamente un link di reso. *Consigliato per moda/scarpe.*
- **Salva indirizzo cliente nella rubrica** — Gli indirizzi finiscono nella tua rubrica MyParcel.
- **Condividi informazioni cliente** — Email + telefono a MyParcel. Necessario per email Track & Trace e obbligatorio per internazionale. *Consigliato on.*

### Automazione stato ordine
Lascia che lo stato ordine WooCommerce segua automaticamente il processo di spedizione.

- **Stato ordine alla creazione etichetta** — tipicamente *In elaborazione*.
- **Stato ordine alla scansione etichetta** — tipicamente *Completato*.
- **Stato ordine alla consegna** — su *Completato* (se non già prima).
- **Invia notifica dopo** — quale transizione di stato attiva un'email WooCommerce.

### Track & Trace
- **Track & Trace nell'email** — link nella conferma ordine WooCommerce. *Consigliato on.*
- **Track & Trace nell'account** — link nella pagina *Il mio account* del cliente.

### Pesi predefiniti
Ogni tipo di pacco ha un peso a vuoto. MyParcel lo aggiunge al peso del prodotto.

| Tipo di pacco | Peso a vuoto tipico |
| --- | --- |
| Pacco (scatola marrone) | 200 – 400 g |
| Pacco piccolo | 100 – 200 g |
| Pacco da cassetta postale | 50 – 100 g |
| Francobollo digitale | 10 – 30 g |

### Note ordine
- **Barcode in nota** — codice Track & Trace come nota dell'ordine.
- **Titolo del barcode in nota** — prefisso prima del codice. Predefinito: `Track & Trace code:`.

## 6 · Impostazioni · Etichette
Tutto ciò che riguarda l'etichetta stessa — testo, formato e comportamento di stampa.

![Tab Etichette: Descrizione (con variabili), Stampa subito, Richiedi posizione etichetta, Output etichetta e Formato etichetta.](../../platforms/images/woocommerce/labels-tab.svg)

### Descrizione sull'etichetta
Le variabili vengono compilate automaticamente alla creazione dell'etichetta:

| Variabile | Diventa |
| --- | --- |
| `[DELIVERY_DATE]` | Data di consegna |
| `[ORDER_ID]` | Numero ordine WooCommerce |
| `[PRODUCT_ID]` | ID prodotto |
| `[PRODUCT_NAME]` | Nome prodotto |
| `[PRODUCT_QTY]` | Quantità |
| `[PRODUCT_SKU]` | SKU |
| `[CUSTOMER_NOTE]` | Nota del cliente |

**Esempi:** `Order [ORDER_ID]` · `[ORDER_ID] · [PRODUCT_QTY]× [PRODUCT_NAME]`

### Comportamento di stampa
- **Stampa subito** — mostra il PDF subito dopo l'esportazione.
- **Richiedi posizione etichetta** — chiede ogni volta quali posizioni su un A4 vuoi usare.

### Valori predefiniti
- **Output etichetta** — *Apri in nuova scheda* (stampa manuale via browser) o *Scarica etichetta*.
- **Formato etichetta** — *A4 (4 per pagina)* per stampante standard, *A6 (stampante etichette)* per Zebra/Brother.

## 7 · Impostazioni · Dogana
Obbligatorio per spedizioni fuori dall'UE (UK, Svizzera, USA, Norvegia, Canada…). Questi valori finiscono sul modulo CN22/CN23 attaccato all'etichetta.

![Tab Dogana con tre campi: Contenuto pacco, HS code, Paese di origine.](../../platforms/images/woocommerce/douane-tab.svg)

- **Contenuto pacco** — *Merci* (predefinito per webshop), *Documenti*, *Regalo*, *Campione commerciale*, *Reso*.
- **HS code** — codice doganale armonizzato. Cerca su [tarief.douane.nl](https://tarief.douane.nl). Esempi: `6109.10` (T-shirt), `9503.00` (giocattoli), `3304.99` (make-up).
- **Paese di origine** — da dove proviene il prodotto (non dove lo conservi).

## 8 · Impostazioni · Checkout
Cosa il cliente vede e può scegliere al pagamento.

![Tab Checkout: campi indirizzo, widget opzioni di consegna, mapping dei metodi di spedizione, visualizzazione prezzo, pickup point.](../../platforms/images/woocommerce/checkout-tab.svg)

### Campi indirizzo
- **Usa campi indirizzo separati** — divide Via in Via + Numero civico + Aggiunta. *Consigliato on* — previene pacchi non consegnabili.
- **MyParcel Address widget (BETA)** — autocomplete su CAP NL + numero civico.

### Opzioni di consegna
- **Mostrare opzioni di consegna** — interruttore master per il widget di checkout. *Consigliato on.*
- **Mostrare opzioni di consegna per backorder** — mostra anche per prodotti non a magazzino.
- **Posizione nel checkout** — *Dopo indirizzo di fatturazione*, *Dopo indirizzo di spedizione*, o *Dopo nota ordine*.
- **Metodi di spedizione consentiti** — collega ogni metodo di spedizione WooCommerce a un tipo di pacco (*Standard*, *Pacco*, *Pacco piccolo*, *Pacco da cassetta postale*, *Francobollo digitale*, *Non affrancato*). *Un metodo = un tipo di pacco.*
- **Tipo di prezzo** — *Incluso* (prezzo totale) o *Costo aggiuntivo* (solo la differenza).
- **Titolo opzioni di consegna** — intestazione sopra il widget.
- **CSS personalizzato** — styling proprio.

### Pickup point
- **Visualizzazione predefinita** — *Mappa* o *Lista*.
- **Gli utenti possono passare tra lista e mappa** — *Consigliato on.*
- **Escludi automatici** — nascondi automatici non presidiati.
- **Giorni chiusi** — giorni in cui non spedisci.

## 9 · Impostazioni · Vettori
Per ogni vettore una propria sub-tab. Quali appaiono dipende da cosa hai attivato sul tuo account MyParcel.

![Sub-tab vettori: CheapCargo, DPD, UPS, DHL Europlus, DHL Parcel Connect, PostNL (attivo), GLS, DHL For You.](../../platforms/images/woocommerce/carrier-subtabs.svg)

::: tip Tutti i vettori strutturati allo stesso modo
Qui sotto illustro **PostNL** come esempio — DHL For You, DHL Parcel Connect, DPD, UPS, GLS e Trunkrs funzionano in modo identico (con le proprie opzioni specifiche).
:::

### Impostazioni di esportazione predefinite
- **Attiva controllo età (18+)** — obbligatorio per alcol/tabacco.
- **Attiva firma** — il corriere fa firmare.
- **Attiva solo destinatario** — niente vicini.
- **Attiva ritorno diretto** — non consegnato torna subito a te.
- **Attiva più grande di 100 × 70 × 58 cm** — pacchi grandi (supplemento).
- **Attiva tracked** / **Attiva codice di ricezione** — opzioni di tracking extra.

### Assicurazione
- **Attiva assicurazione** — toggle master.
- **Assicurare da (€)** — importo soglia.
- **Assicurare fino a** — copertura massima NL.
- **Assicurare fino a (EU)** / **(EU + Resto del mondo)** — massimi per regione.
- **Assicurare per percentuale** — es. 100% del valore ordine.

::: details Opzioni di consegna — tutti i campi
**Opzioni per consegna a domicilio**
- **Attiva consegna a domicilio** — toggle master.
- **Finestra giorni di consegna** — da 1 a 14 giorni in avanti.
- **Tempo di elaborazione** — giorni lavorativi tra ordine e consegna al vettore.
- **Orario di chiusura** — impostabile per giorno.
- **Possibilità di spedizione** — spunta per giorno se spedisci.

**Momenti di consegna**
- **Consegna standard** + Prezzo consegna standard.
- **Consegna mattutina** + Prezzo consegna mattutina.
- **Consegna serale** + Prezzo consegna serale.
- **Consegna lunedì** + Prezzo consegna lunedì.

**Opzioni di spedizione**
- **Solo destinatario** + supplemento.
- **Firma** + supplemento.
- **Consenti Prio (24 ore)** + supplemento — consegna espressa.

**Opzioni per pickup point**
- **Attiva pickup point**.
- **Prezzo ritiro** — positivo = supplemento, negativo = sconto.
:::

::: warning Non dimenticare di salvare
Clicca sempre **Salva** in fondo a ogni tab vettore prima di passare a un'altra tab.
:::

## 10 · Impostazioni prodotto
Su ogni prodotto trovi una tab extra **MyParcel** sotto *Dati prodotto*. Qui sovrascrivi le impostazioni globali da [Vettori](#9-impostazioni-vettori) e [Dogana](#7-impostazioni-dogana) per prodotto. Ogni campo ha un'icona lucchetto 🔒 — clicca per scollegare il valore globale.

![Dati prodotto → tab MyParcel con tipo di pacco, In cassetta, opzioni di consegna, opzioni dogana ed export.](../../platforms/images/woocommerce/product-tab.svg)

### Opzioni MyParcel
- **Tipo di pacco** — sovrascrive il tipo di pacco predefinito per questo prodotto.
- **In cassetta** — quanti di questo prodotto stanno insieme in un pacco da cassetta postale. `-1` = non da cassetta. Esempio: adesivi di cui ne stanno 50 in un pacco da cassetta → metti `50`. Se il cliente ne ordina 51, l'ordine va automaticamente come Pacco.

### Opzioni di consegna prodotto
- **Ritarda spedizione** — giorni lavorativi extra prima che questo prodotto possa partire. Per made-to-order, magazzini esterni, ecc.
- **Disattiva opzioni di spedizione** — nasconde tutto il widget di consegna MyParcel al checkout se questo prodotto è nel carrello. Per prodotti virtuali o gift card.
- **Escludi automatici** — nasconde automatici DHL/PostNL come pickup point per questo prodotto.

### Opzioni dogana prodotto
- **Paese di origine** — più specifico del valore globale. Es. globale *Paesi Bassi*, prodotto dropship *Cina*.
- **Codice dogana (HS code)** — HS code specifico del prodotto.

### Opzioni export prodotto (tutte con override del lucchetto)
- **Attiva controllo età (18+)** — es. per alcol.
- **Attiva ritorno diretto** — non consegnato torna subito.
- **Attiva assicurazione** — questo prodotto sempre assicurato.
- **Attiva più grande di 100 × 70 × 58 cm o più pesante di 23 kg** — per oversize.
- **Attiva solo destinatario** / **Attiva firma** / **Attiva Prio (24 ore)**.
- **Attiva tracked** / **Attiva codice di ricezione**.
- **Consegna fresca** / **Consegna surgelata** — per food shop.

::: tip L'icona lucchetto 🔒
Lucchetto chiuso = il prodotto usa l'impostazione globale. Lucchetto aperto = valore specifico del prodotto attivo.
:::

## 11 · La lista ordini
Su **WooCommerce → Ordini** il plugin aggiunge una colonna *MyParcel* e azioni bulk. Per ordine vedi a colpo d'occhio se è già stato creato e quale stato ha.

![Lista ordini con colonna MyParcel extra — barcode + pulsante Stampa per ordini esportati, pulsante Esporta per nuovi.](../../platforms/images/woocommerce/orderlist-column.svg)

### Azioni bulk
Spunta gli ordini e scegli nel dropdown *Azioni bulk*:

- **MyParcel: Esporta** — crea spedizioni presso MyParcel (concept o dirette).
- **MyParcel: Esporta e stampa** — come sopra, più subito un PDF combinato.

::: tip Flusso bulk per 50+ ordini/giorno
Elabora tutti gli ordini del giorno in un click. Combina con *Elaborazione automatica* su *In elaborazione* e il plugin lavora quasi totalmente da solo.
:::

## 12 · La pagina dettaglio ordine
Sulla pagina di dettaglio di un singolo ordine appare un box **MyParcel** in cui regoli tutte le opzioni di spedizione per quell'ordine.

![Box MyParcel sulla pagina dettaglio ordine con radio per vettore, tipo di pacco, modalità di consegna, numero etichette, assicurazione e quattro pulsanti azione.](../../platforms/images/woocommerce/order-metabox.svg)

### Cosa c'è nel box?
- **Vettore** — radio con tutti i vettori disponibili. MyParcel sceglie automaticamente il più adatto; puoi sovrascrivere per ordine.
- **Tipo di pacco** — sovrascrive per questo ordine (es. pacco da cassetta postale per un piccolo ordine).
- **Modalità di consegna** — *Consegna standard* o *Ritiro* presso un pickup point.
- **Numero etichette** — dividere un grande ordine su più pacchi? Imposta `2` o `3`.
- **Assicurazione** — sovrascrive le regole globali per questo ordine.
- **Consegna sabato** / **Firma richiesta** — toggle con lucchetto.

### I quattro pulsanti azione
- **Salva** — conserva impostazioni senza registrare la spedizione.
- **Esporta** — registra la spedizione presso MyParcel. Genera un barcode.
- **Stampa** — stampa l'etichetta di una spedizione già esportata.
- **Esporta e stampa** — tutto in un click.

### La tabella Etichette in fondo al box
Appena un ordine è esportato appare sotto i pulsanti una tabella con tutte le etichette.

![Tabella etichette sotto il box MyParcel: Track & Trace, Stato, Ultimo aggiornamento, Azioni.](../../platforms/images/woocommerce/labels-table.svg)

::: tip Dropdown azioni per etichetta
*Ristampare etichetta* · *Generare etichetta di reso* · *Annullare spedizione* (possibile solo finché il pacco non è ancora stato scansionato dal vettore).
:::

## 13 · L'esperienza di checkout
Cosa il tuo cliente vede appena l'indirizzo di consegna è compilato — appare appena almeno un vettore è attivato e il metodo di spedizione WooCommerce è collegato a un tipo di pacco MyParcel ([§8](#8-impostazioni-checkout)).

Il cliente sceglie un vettore e momento di consegna da un **carosello di date**, una **fascia oraria** ed eventualmente **opzioni extra** (firma, solo destinatario). Sotto la consegna a domicilio c'è un blocco **Ritiro presso un pickup point** con mappa interattiva, orari di apertura e toggle lista/mappa.

## 14 · Uso quotidiano

### Workflow 1 — per ordine
1. Apri *WooCommerce → Ordini* e clicca un ordine.
2. In fondo: box **MyParcel** → scegli vettore, tipo di pacco, ecc.
3. Clicca **Esporta e stampa**.
4. Il PDF si apre/scarica — incolla l'etichetta sulla scatola.

### Workflow 2 — bulk (10+ ordini/giorno)
1. Sulla lista ordini, spunta gli ordini.
2. *Azioni bulk* → **MyParcel: Esporta e stampa**.
3. Clicca *Applica*. Un PDF combinato con tutte le etichette.

::: tip Momento di addebito
Vieni addebitato solo quando una spedizione viene effettivamente consegnata al vettore. I francobolli digitali sono l'eccezione — vengono addebitati subito all'esportazione.
:::

### Resi
Tre modi, dal più al meno automatizzato:

1. **Email di reso automatica** — *Ordini → Generale → Invia email di reso* on. A ogni esportazione il cliente riceve un link di reso.
2. **Etichetta di reso manuale** — nel box MyParcel sull'ordine, scegli *Genera reso*. Invia l'etichetta tu al cliente.
3. **Portale resi** — attiva nel tuo backoffice MyParcel. Il cliente va a un URL, inserisce il numero ordine, riceve subito un'etichetta.

## 15 · Qualcosa non funziona — diagnostica
Qualcosa non funziona come previsto? Scorri questa tabella dall'alto in basso — tre problemi su quattro si risolvono entro 5 minuti.

| Sintomo | Cosa controllare |
| --- | --- |
| **Nessun badge di stato o *Non collegato*** | (1) Plugin attivato? (2) WooCommerce 7.0+ e PHP 8.1+? (*WooCommerce → Stato*) (3) Cache server, LiteSpeed/Redis e browser svuotata? |
| **Widget non appare al checkout** | (1) [§8](#8-impostazioni-checkout): *Mostrare opzioni di consegna* on? (2) Ogni metodo di spedizione collegato a un tipo di pacco? (3) Checkout shortcode standard (`[woocommerce_checkout]`)? (4) Errore JS nella console browser (F12)? |
| **Le etichette non vengono create** | (1) Badge di stato ancora verde? (2) L'ordine ha indirizzo di spedizione + cliente? (3) Metodo di spedizione presente (ritiro locale non conta)? (4) Peso prodotto compilato? (5) Messaggio di errore sulla spedizione nel backoffice MyParcel? |
| **Track & Trace non nell'email** | (1) [§5](#5-impostazioni-ordini): *Track & Trace nell'email* on? (2) Ordine già esportato? Senza barcode niente link. (3) Email inviata? (*WooCommerce → Stato → Log*) (4) Cartella spam del cliente? |
| **Indirizzo sbagliato sull'etichetta** | (1) Attiva *Usa campi indirizzo separati* ([§8](#8-impostazioni-checkout)). (2) Usa il *MyParcel Address widget* per NL. (3) L'etichetta mostra l'*indirizzo di spedizione*, non quello di fatturazione. |
| **Tutto diventa Pacco, mai Cassetta postale** | (1) [§8](#8-impostazioni-checkout): il metodo cassetta postale non deve stare anche sotto *Pacco*. (2) Un metodo di spedizione = un tipo di pacco. (3) Usa classi di spedizione per collegare prodotti a tipi di pacco. |
| **Conflitto con un altro plugin** | Disattiva altri plugin shipping/checkout uno per uno per isolare. I plugin postcode-checker possono dividere campi via/numero civico che MyParcel si aspetta. |

## 16 · FAQ

### Il plugin costa?
No. Paghi solo per le spedizioni tramite MyParcel.

### Posso collegare due account MyParcel a un singolo shop WooCommerce?
Non out of the box — una API key per shop. Per due brand: gestisci due shop WooCommerce separati.

### Come cambio il mio indirizzo mittente sull'etichetta?
È nel tuo backoffice MyParcel (*Impostazioni shop → Generale → Dati indirizzo*), non nel plugin. Le modifiche sono attive subito.

### Quali stati per "Elaborazione automatica"?
Mollie/iDEAL? Gli ordini vanno direttamente a *In elaborazione*. Bonifico ed elaborazione manuale? *Completato*.

### Posso stampare più di 4 etichette per A4?
No — A4 è sempre 4 per pagina. Considera una stampante etichette A6 con 20+ ordini/giorno.

### Funziona con Afterpay/Klarna?
Sì — MyParcel è indipendente dal tuo provider di pagamento.

### Il cliente sceglie un pickup point — come lo vedo sull'etichetta?
Il pickup point viene inviato automaticamente a MyParcel come indirizzo di destinazione.

### La consegna serale non è visibile per certi indirizzi
Dipende dall'indirizzo — determinato dal vettore, non dal plugin.

### Vedo doppi tab DPD
Non è un bug — MyParcel distingue due contratti DPD. Attiva solo il tuo contratto attivo.

### Posso far ritirare i pacchi dal vettore?
Sì — sotto *Vettori → \[carrier\] → Attiva ritiro pacco da parte del vettore*.

### Update plugin fatto e ora qualcosa non funziona più
Torna indietro tramite [WP Rollback](https://wordpress.org/plugins/wp-rollback/) o la release GitHub. Segnala il bug su [github.com/myparcelnl/woocommerce/issues](https://github.com/myparcelnl/woocommerce/issues).

## Risorse e supporto
- [github.com/myparcelnl/woocommerce ↗](https://github.com/myparcelnl/woocommerce) — codice sorgente, release, issue.
- [wordpress.org/plugins/woocommerce-myparcel ↗](https://wordpress.org/plugins/woocommerce-myparcel/) — listing del plugin.
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl) — account, API key, fatturazione.
- [Contatta il supporto MyParcel](../../contact.md) — **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).
