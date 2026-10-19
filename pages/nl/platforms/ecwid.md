---
title: Ecwid
description: "Koppel je Ecwid-winkel aan MyParcel met de gratis MyParcel-app uit de Ecwid App Market. Over het installeren van de app, het invullen van je API-key, wanneer orders naar MyParcel gaan, labels maken van de conceptzendingen in je MyParcel-backoffice, en een diagnose-tabel."
---

::: tip In het kort
Ecwid koppel je aan MyParcel met de gratis **MyParcel**-app uit de **Ecwid App Market**. Je vult één keer je MyParcel API-key in, en daarna verschijnt elke order die in Ecwid op **Paid** (Betaald) komt te staan als **conceptzending** in je MyParcel-backoffice. Daar kies je de vervoerder, het pakkettype en de opties en maak je het label, niet in Ecwid. De app heeft verder geen instellingen.
:::

## Snelstart, je eerste label in 10 minuten
Genoeg om vandaag je eerste order te verzenden. Voor de details, zie [Wat zoek je?](#wat-zoek-je) hieronder.

1. **Account.** Heb je nog geen MyParcel-account? Maak er een aan via [myparcel.nl/register](https://www.myparcel.nl/register).
2. **API-key kopiëren.** Log in op [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Shopinstellingen → Integratie* → kopieer de API-key.
3. **App installeren.** Ga in je Ecwid-beheer naar **Apps → App Market**, zoek op *MyParcel* en installeer de gratis app.
4. **Key plakken.** Open de app, plak de key in **Fill in your MyParcel API key** en klik op **Connect** (Verbinden).
5. **Label printen.** Zet een order op **Paid**, open **Zendingen** in je MyParcel-backoffice, controleer de conceptzending en maak het label.

::: tip Klaar als je dit ziet
- De app toont een groene status **Connected to** (Verbonden met)
- Een betaalde Ecwid-order staat als conceptzending in je MyParcel-backoffice
:::

## Wat zoek je?
| Wat wil je doen? | Ga naar |
| --- | --- |
| Begrijpen wat de app doet | [1 · Hoe de koppeling werkt](#1-hoe-de-koppeling-werkt) |
| De app installeren | [2 · De app installeren](#2-de-app-installeren) |
| Je account koppelen | [3 · Je MyParcel-account koppelen](#3-je-myparcel-account-koppelen) |
| Weten wanneer een order wordt doorgestuurd | [4 · Wanneer orders in MyParcel komen](#4-wanneer-orders-in-myparcel-komen) |
| De vervoerder, het pakkettype en de opties instellen | [5 · Zendinginstellingen](#5-zendinginstellingen) |
| Zien wat je klanten zien | [7 · De checkout voor je klant](#7-de-checkout-voor-je-klant) |
| Labels printen | [8 · Dagelijks gebruik](#8-dagelijks-gebruik) |
| Er werkt iets niet | [9 · Er werkt iets niet, diagnose](#9-er-werkt-iets-niet-diagnose) |
| Antwoord op een veelgestelde vraag | [10 · FAQ](#10-faq) |

## 1 · Hoe de koppeling werkt
De MyParcel-app koppelt je Ecwid-winkel aan één shop in je MyParcel-account. Hij doet één ding: zodra een order op **Paid** (Betaald) komt te staan, stuurt de app die door naar MyParcel, waar hij als conceptzending klaarstaat. Vanaf daar werk je in je MyParcel-backoffice: je controleert de zending, maakt het label en geeft het pakket mee aan de vervoerder.

De app voegt geen bezorgopties toe aan je checkout, voegt geen instellingen toe aan je producten en toont geen labels in Ecwid.

::: warning Niet hetzelfde als Buy Shipping Label
De Ecwid-knop **Buy Shipping Label** (Verzendlabel kopen) op een order heeft niets met MyParcel te maken. Wil je verzenden tegen je MyParcel-tarieven, maak het label dan in je MyParcel-backoffice.
:::

## 2 · De app installeren
1. Open in je Ecwid-beheer **Apps → App Market**.
2. Zoek op *MyParcel* en open de app van MyParcel. De app is gratis.
3. Installeer de app en accepteer de rechten die hij vraagt.

Je geïnstalleerde apps staan onder **Apps → My Apps** (Mijn apps). Klik naast MyParcel op **Open app** om naar de app-pagina te gaan. Na installatie staat de app ook onder **Shipping & Pickup → MyParcel** (Verzending en ophalen) in het menu links.

![De MyParcel-app onder My Apps in het Ecwid-beheer, met de knop Open app.](../../platforms/images/ecwid/02-my-apps.png)

## 3 · Je MyParcel-account koppelen
![De MyParcel-app-pagina in Ecwid: het veld voor de API-key met de knop Connect, en daaronder de groene status Verbonden.](../../platforms/images/ecwid/01-connect.png)

1. Kopieer je API-key uit [backoffice.myparcel.nl](https://backoffice.myparcel.nl) onder *Shopinstellingen → Integratie*. Ook de link **General settings** onder het veld brengt je naar je MyParcel-backoffice.
2. Plak de key in **Fill in your MyParcel API key**. Let op spaties voor of na de key.
3. Klik op **Connect** (Verbinden).

Wordt de key geaccepteerd, dan kleurt het blok **Status** groen met **Connected to** (Verbonden met) en je MyParcel-account, en de regel *You will see your orders appear in your MyParcel Backoffice automatically* (Je orders verschijnen automatisch in je MyParcel-backoffice). Wordt de key niet geaccepteerd, dan staat er **Not connected** (Niet verbonden).

Wil je een andere key gebruiken? Klik op **Disconnect** (Verbinding verbreken). De key wordt verwijderd en je kunt een nieuwe invullen.

::: warning Eén key, één shop
De app koppelt aan één shop in je MyParcel-account. Heeft je account meer dan één shop, gebruik dan de API-key van de shop waar je Ecwid-orders moeten binnenkomen. Alle labels en facturen komen in die shop terecht.
:::

## 4 · Wanneer orders in MyParcel komen
Een order gaat naar MyParcel op het moment dat de **Payment Status** (Betaalstatus) verandert in **Paid** (Betaald). Bij online betalen gebeurt dat vanzelf. Is een order op een andere manier betaald, bijvoorbeeld per overboeking, zet de status dan zelf: open de order en klik op **Mark as Paid** (Markeren als betaald), of kies **Paid** in het menu *Payment Status*.

![Een Ecwid-order met het menu Payment Status open, met Paid bovenaan, en de knop Mark as Paid.](../../platforms/images/ecwid/03-order-paid.png)

Orders die nog op *Awaiting Payment* (Wacht op betaling) staan, of die geannuleerd of terugbetaald zijn, worden niet doorgestuurd.

## 5 · Zendinginstellingen
De app zelf heeft geen zendinginstellingen. Alles over het pakket bepaal je in je MyParcel-backoffice:

- **De standaardinstellingen.** Elke conceptzending start met de standaard vervoerder, het standaard pakkettype en de standaardopties van de shop waaraan de app gekoppeld is. Die stel je in je MyParcel-backoffice in onder *Shopinstellingen*.
- **Per zending.** Voordat je een label maakt, kun je de vervoerder, het pakkettype, de opties en de verzekering op de conceptzending zelf aanpassen.

Welke vervoerders en opties je kunt kiezen, hangt af van je MyParcel-contract.

## 6 · Productinstellingen
Deze app voegt geen opties toe op productniveau. Alles rond verzenden regel je in je MyParcel-backoffice.

## 7 · De checkout voor je klant
De app verandert niets aan je Ecwid-checkout. Je klanten kiezen uit de verzendmethoden die je in Ecwid onder **Shipping & Pickup** hebt ingesteld, zoals een vast tarief of gratis verzending. De gekozen methode wordt niet als vervoerder of bezorgoptie meegenomen: die kies je zelf op de conceptzending in MyParcel.

## 8 · Dagelijks gebruik
1. Er komt een order binnen en die komt op **Paid** te staan ([§4](#4-wanneer-orders-in-myparcel-komen)).
2. Open **Zendingen** in je MyParcel-backoffice. De order staat daar als **conceptzending**.
3. Controleer het adres, de vervoerder, het pakkettype en het gewicht. Klik op het potloodje achter de zending om iets aan te passen.
4. Maak het label, print het en geef het pakket mee aan de vervoerder. Dat kan per zending, of je selecteert er meerdere en maakt de labels in één keer.

De app schrijft de Track & Trace-code niet terug naar Ecwid. Wil je dat je klant het pakket kan volgen, deel dan de Track & Trace-link uit MyParcel, of voeg hem in Ecwid aan de order toe met **Add tracking number** (Trackingnummer toevoegen).

Je betaalt pas voor een zending als die echt aan de vervoerder is overgedragen.

## 9 · Er werkt iets niet, diagnose
Loop deze tabel van boven naar beneden door, de meeste problemen zijn binnen een paar minuten opgelost.

| Symptoom | Wat je controleert |
| --- | --- |
| **De status zegt Not connected** | Klopt de **API-key**, zonder spaties? Kopieer hem opnieuw uit je MyParcel-backoffice en klik op **Connect** ([§3](#3-je-myparcel-account-koppelen)). |
| **Een betaalde order komt niet in MyParcel** | Staat de order echt op **Paid**? Wil je hem opnieuw versturen, zet de betaalstatus dan terug op *Awaiting Payment* en daarna weer op **Paid** ([§4](#4-wanneer-orders-in-myparcel-komen)). |
| **Orders komen in de verkeerde MyParcel-shop** | De app is gekoppeld aan de shop die bij de API-key hoort. Klik op **Disconnect** en koppel opnieuw met de key van de juiste shop ([§3](#3-je-myparcel-account-koppelen)). |
| **Er komen helemaal geen orders binnen** | Verwijder de app onder **Apps → My Apps**, installeer hem opnieuw en koppel opnieuw met je API-key ([§2](#2-de-app-installeren)). |
| **Het gewicht of de waarde op de conceptzending lijkt niet te kloppen** | Controleer het gewicht van je producten in Ecwid, en corrigeer de conceptzending voordat je het label maakt ([§8](#8-dagelijks-gebruik)). |

## 10 · FAQ

### Waar vind ik mijn API-key?
In [backoffice.myparcel.nl](https://backoffice.myparcel.nl) onder *Shopinstellingen → Integratie*.

### Waar print ik labels?
In je MyParcel-backoffice, onder **Zendingen**. Je Ecwid-orders staan daar klaar als conceptzending.

### Kan ik per order de vervoerder kiezen?
Ja, op de conceptzending in je MyParcel-backoffice, voordat je het label maakt. Welke vervoerders je kunt kiezen, hangt af van je MyParcel-contract.

### Kunnen mijn klanten in de checkout een bezorgdag of afhaalpunt kiezen?
Nee. De app voegt geen bezorgopties toe aan de Ecwid-checkout.

### Kan ik verzendopties per product instellen?
Nee. Stel je standaardinstellingen in je MyParcel-backoffice in en pas een losse zending aan op de conceptzending.

### Hoe koppel ik een andere MyParcel-shop?
Klik op de app-pagina op **Disconnect** en koppel opnieuw met de API-key van de andere shop.

### Wanneer betaal ik?
MyParcel factureert een zending pas als die echt aan de vervoerder is overgedragen.

## Bronnen & support
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), account, API-key, vervoerders en facturatie.
- [MyParcel in de Ecwid App Market ↗](https://www.ecwid.com/apps/shipping/myparcel/).
- [Contact MyParcel support](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Deze handleiding beschrijft de MyParcel-app voor Ecwid zoals hij werkt in oktober 2026.
