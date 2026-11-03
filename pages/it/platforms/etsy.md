---
title: Etsy
description: "Collega il tuo negozio Etsy a MyParcel dalla pagina Integration del back office MyParcel, senza installare nulla. Tratta l'autorizzazione in Etsy, l'importazione degli ordini Etsy aperti come spedizioni in bozza, il tipo di collo predefinito, il codice a barre che torna su Etsy, la disconnessione e una tabella di diagnostica."
---

::: tip In breve
Etsy si collega a MyParcel dalla pagina **Integration** del tuo back office MyParcel, senza installare nulla. Dai una sola volta l'autorizzazione a MyParcel nel tuo account Etsy. Poi importi con un clic i tuoi ordini Etsy aperti in MyParcel, arrivano come **spedizioni in bozza** e crei le etichette nel back office MyParcel. MyParcel invia il codice a barre a Etsy e segna l'ordine come spedito. Il collegamento è gratuito.
:::

## Avvio rapido, i tuoi primi ordini Etsy in 5 minuti
Quanto basta per collegare Etsy a MyParcel oggi. Per i dettagli, vedi [Cosa stai cercando?](#cosa-stai-cercando) qui sotto.

1. **Account.** Non hai ancora un account MyParcel? Creane uno su [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Apri l'integrazione.** In [backoffice.myparcel.nl](https://backoffice.myparcel.nl) vai su *Shop settings → Integration*, scorri fino a **External links** e apri **Etsy**.
3. **Dai l'autorizzazione.** Fai clic su **Give permission**, accedi a Etsy se richiesto e fai clic su **Grant access**.
4. **Imposta il tipo di collo.** Scegli il tipo di collo predefinito per gli ordini importati in *Shop settings → Shipments*.
5. **Importa gli ordini.** Nella panoramica *Shipments* fai clic su **Import external orders**, seleziona i tuoi ordini Etsy e importali.

::: tip Hai finito quando vedi questo
- Il messaggio **Etsy is linked.** e un pulsante rosso **Revoke permission** sul pannello Etsy
- **MyParcel** nell'elenco *Apps You Use* del tuo account Etsy
- I tuoi ordini Etsy come spedizioni in bozza nella panoramica *Shipments*
:::

## Cosa stai cercando?
| Cosa vuoi fare? | Vai a |
| --- | --- |
| Capire come funziona il collegamento | [1 · Come funziona il collegamento](#1-come-funziona-il-collegamento) |
| Collegare il tuo negozio Etsy | [2 · Collegare Etsy](#2-collegare-etsy) |
| Impostare il tipo di collo per gli ordini importati | [3 · Tipo di collo predefinito](#3-tipo-di-collo-predefinito) |
| Importare ordini e stampare etichette | [4 · Uso quotidiano](#4-uso-quotidiano) |
| Scollegare Etsy | [5 · Scollegare](#5-scollegare) |
| Qualcosa non funziona | [6 · Qualcosa non funziona, diagnostica](#6-qualcosa-non-funziona-diagnostica) |
| Risposta a una domanda frequente | [7 · FAQ](#7-faq) |

## 1 · Come funziona il collegamento
Etsy è un marketplace, quindi non c'è nessun plugin o app da installare. Colleghi il tuo negozio Etsy una sola volta dal back office MyParcel e dai l'autorizzazione a MyParcel nel tuo account Etsy. Da quel momento MyParcel comunica con Etsy per conto tuo.

Recuperi tu stesso gli ordini Etsy aperti, che arrivano in MyParcel come spedizioni in bozza. Crei le etichette nel back office MyParcel e MyParcel invia il codice a barre a Etsy e segna l'ordine come spedito.

Il collegamento usa l'API di Etsy, ma MyParcel non è approvato né certificato da Etsy.

## 2 · Collegare Etsy
1. Accedi a [backoffice.myparcel.nl](https://backoffice.myparcel.nl) e vai su **Shop settings → Integration**.
2. Scorri fino a **External links** e apri **Etsy** con il pulsante **+**.
3. Fai clic su **Give permission**.

![La sezione External links della pagina Integration, con il pannello Etsy aperto e il pulsante Give permission.](../../platforms/images/etsy/01-integration-give-permission.png)

4. Vieni indirizzato a Etsy. Accedi con l'account Etsy del tuo negozio se Etsy lo chiede.
5. Etsy mostra le autorizzazioni richieste da MyParcel. Fai clic su **Grant access**.

![La pagina di Etsy in cui MyParcel chiede di collegarsi al tuo account, con le autorizzazioni e il pulsante Grant access.](../../platforms/images/etsy/02-etsy-grant-access.png)

MyParcel chiede queste autorizzazioni:

| Autorizzazione | Perché serve a MyParcel |
| --- | --- |
| **Connect to your account** | Per collegare il tuo negozio Etsy al tuo negozio MyParcel. |
| **see private shop info** | Per leggere i dati del negozio. |
| **see all checkout/payment data** | Per leggere gli ordini e l'indirizzo di consegna. |
| **update receipts** | Per inviare il codice a barre e segnare l'ordine come spedito. |

Tornato nel back office MyParcel vedi il messaggio **Etsy is linked.** Il pulsante sul pannello Etsy è diventato un pulsante rosso **Revoke permission**.

![Il pannello Etsy dopo il collegamento, con il pulsante Revoke permission e il messaggio Etsy is linked.](../../platforms/images/etsy/03-integration-linked.png)

::: warning Parti sempre da MyParcel
Apri la pagina di autorizzazione di Etsy solo tramite **Give permission** nel back office MyParcel. Etsy stessa ti avvisa di chiudere la pagina se ci sei arrivato da un link in un'email o in una chat.
:::

## 3 · Tipo di collo predefinito
Gli ordini Etsy importati arrivano come spedizione standard. Quale tipo di collo sia, ad esempio un pacco o un pacco per cassetta postale, lo imposti in **Shop settings → Shipments** nel back office MyParcel. Fallo prima della prima importazione.

Puoi modificare una singola spedizione dopo l'importazione, vedi [§4](#4-uso-quotidiano).

## 4 · Uso quotidiano
1. Nel back office MyParcel apri la panoramica **Shipments** e fai clic su **Import external orders**.
2. Compare l'elenco dei tuoi ordini Etsy aperti. Seleziona gli ordini da spedire e fai clic su **Import**.
3. Gli ordini arrivano come **spedizioni in bozza**. Fai clic sulla matita accanto a una spedizione per modificarla, ad esempio il tipo di collo o le opzioni di consegna.
4. Crea le etichette e consegna i pacchi al corriere.

Appena l'etichetta è stampata, MyParcel invia il codice a barre a Etsy e l'ordine risulta spedito. Nella panoramica ordini di Etsy vedi il codice a barre sull'ordine, con la data di spedizione.

![Un ordine Etsy con il codice a barre di MyParcel e la data di spedizione.](../../platforms/images/etsy/04-etsy-order-shipped.png)

::: warning Spedizioni fuori dall'UE
Puoi importare ordini con indirizzi fuori dall'UE, ma il modulo doganale non viene compilato del tutto. Controlla e completa i dati doganali sulla spedizione in bozza prima di creare l'etichetta.
:::

Paghi una spedizione solo quando viene effettivamente consegnata al corriere.

## 5 · Scollegare
Puoi terminare il collegamento in due punti:

- **In MyParcel.** Vai su *Shop settings → Integration → External links → Etsy* e fai clic su **Revoke permission**.
- **In Etsy.** Vai nelle impostazioni dell'account, apri **Apps** e fai clic su **Revoke** accanto a MyParcel. In *Third Party Apps to which you've granted access* vedi anche quando hai dato l'autorizzazione.

![MyParcel in Apps You Use su Etsy, con le autorizzazioni, il pulsante Revoke e la data dell'autorizzazione.](../../platforms/images/etsy/05-etsy-apps.png)

Vuoi ricollegarti in seguito? Fai clic su **Give permission** nel back office MyParcel e concedi di nuovo l'accesso.

## 6 · Qualcosa non funziona, diagnostica
Scorri questa tabella dall'alto verso il basso, la maggior parte dei problemi si risolve in pochi minuti.

| Sintomo | Cosa controllare |
| --- | --- |
| **Il pannello Etsy mostra ancora Give permission** | Il collegamento non è stato completato. Fai di nuovo clic su **Give permission** e su **Grant access** in Etsy ([§2](#2-collegare-etsy)). |
| **Etsy mostra l'account sbagliato** | Sei collegato a Etsy con un altro account. Esci da Etsy, accedi con l'account del tuo negozio e ricomincia da MyParcel. |
| **Nessun ordine compare durante l'importazione** | Vengono importati solo gli ordini aperti. Controlla che l'ordine non sia già segnato come spedito su Etsy e che MyParcel sia ancora in *Apps* nel tuo account Etsy ([§5](#5-scollegare)). |
| **Gli ordini importati hanno il tipo di collo sbagliato** | Controlla il valore predefinito in *Shop settings → Shipments* ([§3](#3-tipo-di-collo-predefinito)) oppure modifica la spedizione in bozza prima di creare l'etichetta. |
| **Il codice a barre non compare su Etsy** | Il codice a barre viene inviato appena l'etichetta è stampata. Avevi già segnato l'ordine come spedito su Etsy prima? |
| **Errore doganale su una spedizione fuori dall'UE** | Completa i dati doganali sulla spedizione in bozza ([§4](#4-uso-quotidiano)). |

## 7 · FAQ

### Devo installare qualcosa?
No. Etsy si collega dal back office MyParcel, non c'è nessun plugin o app.

### Ha un costo?
Collegare Etsy è gratuito. Paghi le spedizioni come al solito.

### Gli ordini vengono importati automaticamente?
No. Recuperi tu gli ordini Etsy aperti con **Import external orders** nella panoramica *Shipments*.

### Inviate il codice a barre a Etsy?
Sì. Appena l'etichetta è stampata, MyParcel invia il codice a barre a Etsy e segna l'ordine come spedito.

### Come interrompo il collegamento?
Fai clic su **Revoke permission** nel back office MyParcel oppure su **Revoke** in *Apps* nel tuo account Etsy ([§5](#5-scollegare)).

## Risorse e supporto
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), integrazione, spedizioni, account e fatturazione.
- [Spedire gli ordini Etsy con MyParcel ↗](https://www.myparcel.nl/koppelingen/etsy-verzenden/).
- [Contatta il supporto MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Questa guida descrive il collegamento Etsy nel back office MyParcel così come funziona a ottobre 2026. Le schermate lato Etsy possono variare leggermente in base alla lingua dell'account.
