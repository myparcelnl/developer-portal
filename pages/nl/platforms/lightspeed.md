---
title: Lightspeed
description: "Van nul naar verzonden pakket op Lightspeed — voeg de app toe, koppel je MyParcel-account met een API key, zet je vervoerders aan en koppel je verzendmethoden zodat bezorgopties in de checkout verschijnen. Met snelstart, settings-naslag, checkout, dagelijkse workflow en een diagnose-tabel."
---

::: tip In het kort
De MyParcel-app verbindt je Lightspeed-shop met MyParcel. Je zet je vervoerders aan, stelt de bezorgopties in die je wilt aanbieden en koppelt ze aan je Lightspeed-verzendmethoden. De bezorgopties verschijnen dan in de checkout en je bestellingen staan klaar om via MyParcel te verzenden. Geen code nodig — alles via de instellingenpagina van de app.
:::

## Snelstart — je eerste pakket in 15 minuten
Genoeg om vandaag je eerste echte bestelling te versturen. Voor diepere configuratie, zie [Op zoek naar…](#op-zoek-naar) hieronder.

1. **Account.** Nog geen MyParcel-account? Maak er een aan op [myparcel.com/register](https://www.myparcel.com/register).
2. **API key kopiëren.** Log in op [backoffice.myparcel.com](https://backoffice.myparcel.com) → *Shopinstellingen → Integraties* → kopieer de API key.
3. **App toevoegen.** Open in je Lightspeed-beheer de **App Store**, zoek op *MyParcel* en installeer de app.
4. **App koppelen.** Open de instellingen van de MyParcel-app, plak de key in **Chiave API MyParcel** (MyParcel API key) en klik op **Convalida** (Valideren).
5. **Vervoerder aanzetten.** Zet een vervoerder aan (bijv. InPost of Poste Italiane), schakel minstens één bezorgtype in en voeg een patroon toe onder **Mappatura titoli** (Koppeling verzendmethoden). Klik op **Salva impostazioni** (Instellingen opslaan).

::: tip Je bent klaar als je dit ziet
- De groene melding **La chiave API è valida** (De API-sleutel is geldig) staat onder het key-veld
- Minstens één vervoerder staat aan met een ingeschakeld bezorgtype
- De **Mappatura titoli** van de vervoerder komt overeen met de namen van je Lightspeed-verzendmethoden
:::

## Op zoek naar…
| Wat wil je doen? | Ga naar |
| --- | --- |
| Eerste installatie | [Snelstart](#snelstart-je-eerste-pakket-in-15-minuten) |
| Je account koppelen | [3 · De app koppelen](#3-de-app-koppelen-api-key) |
| Koppelen via de backoffice in plaats van de app | [Sales channel via de MyParcel Backoffice](#sales-channel-via-de-myparcel-backoffice-alternatief) |
| App-taal of moment van doorsturen kiezen | [4 · Instellingen · Algemeen](#4-instellingen-algemeen) |
| Kiezen hoe bestellingen synchroniseren (Push of Pull) | [5 · Instellingen · Synchronisatiemodus](#5-instellingen-synchronisatiemodus) |
| Vervoerders en opties verversen | [6 · Instellingen · Capaciteit bijwerken](#6-instellingen-capaciteit-bijwerken) |
| Een vervoerder aanzetten en verzendmethoden koppelen | [7 · Instellingen · Vervoerders](#7-instellingen-vervoerders) |
| Een andere instelling per product | [8 · Productinstellingen](#8-productinstellingen) |
| Wat de klant ziet in de checkout | [9 · De checkout-ervaring](#9-de-checkout-ervaring) |
| Bestellingen dagelijks verwerken | [10 · Dagelijks gebruik](#10-dagelijks-gebruik) |
| Er werkt iets niet | [11 · Er werkt iets niet — diagnose](#11-er-werkt-iets-niet-diagnose) |
| Antwoord op een veelgestelde vraag | [12 · FAQ](#12-faq) |

## 1 · Je MyParcel-account voorbereiden
Voordat je in Lightspeed begint, regel je drie dingen in je MyParcel-backoffice:

1. **Factuur- en retouradres** — *Shopinstellingen → Algemeen*. Dit staat op elk label.
2. **Vervoerders activeren** — *Shopinstellingen → Vervoerders*. Alleen ingeschakelde vervoerders verschijnen later in de app.
3. **API key genereren** — *Shopinstellingen → Integraties*.

Je hebt ook je **verzendmethoden** nodig in Lightspeed. De app koppelt zich op naam aan deze methoden (zie [§7](#7-instellingen-vervoerders)).

## 2 · De app installeren
1. Open de **App Store** in je Lightspeed-beheer en zoek op *MyParcel*.
2. Installeer de app en sta de koppeling met je shop toe.
3. Open de app om bij de instellingenpagina te komen. Vanaf dan werkt hij zichzelf automatisch bij.

## Sales channel via de MyParcel Backoffice (alternatief)
Naast de App Store-app kun je Lightspeed ook rechtstreeks vanuit je MyParcel-backoffice koppelen als **Sales channel**. MyParcel praat dan direct via de API met je Lightspeed-shop en haalt je bestellingen op, zonder dat de app de overdracht regelt. Kies dit als je de koppeling liever vanuit MyParcel beheert.

::: tip Welke methode gebruik ik?
- Met de **App Store-app** (zie [De app installeren](#2-de-app-installeren)) voeg je bezorgopties toe aan de Lightspeed-checkout en stuur je bestellingen door vanuit Lightspeed.
- Met een **Sales channel** (deze sectie) haalt MyParcel je bestellingen rechtstreeks uit Lightspeed op. Deze methode voegt géén bezorgopties toe aan de checkout.
:::

### De sales channel aanmaken
1. Log in op [backoffice.myparcel.com](https://backoffice.myparcel.com) en ga naar **Shop settings → Sales Channels** (Shopinstellingen → Verkoopkanalen).
2. Klik rechtsboven op **Add sales channel** (Verkoopkanaal toevoegen).

![Het overzicht Sales Channels in de MyParcel-backoffice, met rechtsboven de knop Add sales channel.](../../platforms/images/lightspeed/backoffice-sales-channels.png)

3. Vul een **Name** (Naam) in waaraan je het kanaal herkent (bijv. *Mijn Lightspeed-shop*).
4. Kies bij **Type of sales channel** (Type verkoopkanaal) voor **Lightspeed**. (Shopify, WooCommerce en PrestaShop zijn de andere opties.)
5. Kies bij **Webshop URL** de regio die bij je Lightspeed-shop hoort:
   - **https://api.webshopapp.com/en/ (EU)** — voor Europese Lightspeed (eCom)-shops.
   - **https://api.shoplightspeed.com/en/ (US)** — voor Amerikaanse Lightspeed-shops.
6. Klik op **Save** (Opslaan). Het kanaal wordt aangemaakt en verschijnt met een label **Missing data** (Gegevens ontbreken) — dat betekent alleen dat de authenticatiestap nog moet gebeuren.

![Een Lightspeed sales channel toevoegen: kies het type en de bijbehorende Webshop URL-regio en klik op Save.](../../platforms/images/lightspeed/backoffice-add-channel.png)

### Het kanaal authenticeren (Lightspeed key & secret)
Een sales channel heeft toestemming nodig om je Lightspeed-bestellingen te lezen. Voor Lightspeed gebeurt dat met een **Consumer key** en **Consumer secret** uit je Lightspeed-account.

1. Open het kanaal en klik op **Set credentials** (Gegevens instellen).
2. Plak in de dialoog **Replace key and secret** (Key en secret vervangen) je Lightspeed **Consumer key** en **Consumer secret**.
3. Klik op **Connect** (Verbinden).

![De dialoog "Replace key and secret" vraagt om je Lightspeed Consumer key en Consumer secret.](../../platforms/images/lightspeed/backoffice-credentials.png)

Zodra de verbinding er is, verdwijnt het label **Missing data**, toont het kanaal **Connected** (Verbonden) en begint MyParcel je Lightspeed-bestellingen te synchroniseren.

::: tip Waar vind ik de key en secret?
Je genereert de Consumer key en secret in je **Lightspeed-beheer**, onder de API-/developerinstellingen. Vind je ze niet, vraag dan Lightspeed-support om API-toegang voor je account aan te zetten. Behandel ze als een wachtwoord — deel ze niet.
:::

::: warning Lukt verbinden niet?
Meest voorkomende oorzaken: een extra spatie meegeplakt bij de key of secret · de verkeerde **Webshop URL**-regio gekozen (EU vs US) · een key/secret van een andere Lightspeed-shop of die verlopen is.
:::

## 3 · De app koppelen (API key)
Alle instellingen staan op één pagina. Bovenaan vind je je winkel-ID en het blok **Chiave API MyParcel** (MyParcel API key).

![MyParcel voor Lightspeed — API key en Algemene instellingen. Het API key-veld koppelt je shop aan MyParcel.](../../platforms/images/lightspeed/api-general.png) De API key is in deze schermafbeelding afgeschermd.

1. Plak de key uit je MyParcel-backoffice in **Chiave API MyParcel**.
2. Klik op **Convalida** (Valideren).
3. Bij een geldige key verschijnt de groene melding **La chiave API è valida** (De API-sleutel is geldig).

::: warning Werkt het niet?
Meest voorkomende oorzaken: een spatie voor/na de key gekopieerd · een key van een andere shop · een key uit een andere omgeving (live vs sandbox) dan je MyParcel-account.
:::

## 4 · Instellingen · Algemeen
Het blok **Impostazioni generali** (Algemene instellingen) bepaalt de taal van de app en wanneer een bestelling naar MyParcel wordt gestuurd.

![Algemene instellingen: taal en het moment waarop een bestelling naar MyParcel wordt doorgestuurd.](../../platforms/images/lightspeed/api-general.png)

- **Lingua** (Taal) — De taal van de app. Kies uit *English*, *Italiano*, *Nederlands* of *Français*. Zet dit op de taal waarin je wilt werken.
- **Momento di inoltro** (Moment van doorsturen) — Wanneer een bestelling naar MyParcel gaat. Kies *Quando la spedizione viene creata con stato "Spedito"* (zodra de verzending de status *Verzonden* krijgt) of *...con stato "Non spedito"* (status *Niet verzonden*). Kies het moment in je proces waarop het label moet worden aangemaakt.
- **Salva impostazioni** (Instellingen opslaan) — Klik om je keuzes vast te leggen.

## 5 · Instellingen · Synchronisatiemodus
In **Modalità di sincronizzazione** (Synchronisatiemodus) kies je hoe bestellingen tussen Lightspeed en MyParcel lopen.

![Synchronisatiemodus (Push / Pull) en de knop Capaciteit bijwerken.](../../platforms/images/lightspeed/sync-capacity.png)

- **Push** — De app verwerkt je bestellingen en stuurt de verzendingen automatisch naar MyParcel. Kies dit als je wilt dat de app het werk doet.
- **Pull** — MyParcel haalt de bestellingen rechtstreeks uit Lightspeed op. De app verzorgt dan alleen de checkout-integratie. Kies dit als je het ophalen vanuit MyParcel aanstuurt.

Klik na je keuze op **Salva impostazioni** (Instellingen opslaan).

## 6 · Instellingen · Capaciteit bijwerken
- **Aggiorna capacità** (Capaciteit bijwerken) — Haalt de nieuwste vervoerders en bezorgopties op uit MyParcel. Klik hierop als je net iets hebt aangepast in je MyParcel-account en het nog niet terugziet in de app. De regel **Ultimo aggiornamento** (Laatst bijgewerkt) toont wanneer dit voor het laatst gebeurde.

## 7 · Instellingen · Vervoerders
Onder de algemene instellingen staat per vervoerder een eigen blok. Met de schakelaar bovenaan een blok zet je de vervoerder aan of uit. Welke vervoerders verschijnen, hangt af van wat in je MyParcel-account is ingeschakeld — in de voorbeeldshop zijn dat **InPost** en **Poste Italiane**.

Per vervoerder regel je dezelfde dingen: welke bezorgtypes je aanbiedt, de naam en prijs die de klant ziet, de sluitingstijd, de bezorgdagen en de koppeling met je Lightspeed-verzendmethoden.

### InPost
![InPost-instellingen: bezorgtypes, sluitingstijd, bezorgdagen en koppeling verzendmethoden.](../../platforms/images/lightspeed/inpost.png)

- **Tipi di consegna** (Bezorgtypes) — De manieren waarop deze vervoerder bezorgt. Per type zet je het aan of uit, vul je de naam in die de klant ziet en stel je de prijs in.
  - **Consegna standard** (Standaardbezorging) — Thuisbezorging op een normale werkdag (in het voorbeeld € 8).
  - **Punto di ritiro** (Afhaalpunt) — De klant haalt het pakket op bij een afhaalpunt in de buurt (in het voorbeeld € 5).
- **Orario limite** (Sluitingstijd) — De tijd waarvoor een bestelling nog op dezelfde dag wordt verwerkt (in het voorbeeld 18:00). Bestellingen daarna schuiven naar de volgende bezorgdag.
- **Giorni di consegna** (Bezorgdagen) — Vink de dagen aan waarop deze vervoerder bezorgt (in het voorbeeld ma, di, wo, vr).
- **Mappatura titoli metodo di spedizione** (Koppeling verzendmethoden) — Koppelt je Lightspeed-verzendmethoden aan deze vervoerder. Voeg een patroon toe dat in de naam van je Lightspeed-verzendmethode voorkomt, zodat de app weet welke methode bij welke vervoerder hoort. Typ een patroon en klik op **Aggiungi** (Toevoegen).
- **Salva impostazioni** (Instellingen opslaan) — Legt de wijzigingen voor deze vervoerder vast.

### Poste Italiane
![Poste Italiane-instellingen: bezorgtypes, extra opties, sluitingstijd, bezorgdagen en koppeling verzendmethoden.](../../platforms/images/lightspeed/poste-italiane.png)

Poste Italiane heeft dezelfde opbouw als InPost, met één extra blok: **Opzioni** (Opties).

- **Tipi di consegna** (Bezorgtypes) — *Consegna standard* (Standaardbezorging, in het voorbeeld € 4,00) en *Punto di ritiro* (Afhaalpunt, in het voorbeeld € 4).
- **Opzioni** (Opties) — Extra mogelijkheden die deze vervoerder biedt.
  - **Raccolta programmata** (Geplande ophaling) — De vervoerder haalt je pakketten op een afgesproken moment op. Zet dit aan als je je pakketten laat ophalen in plaats van zelf weg te brengen.
  - **Consegna prioritaria** (Prioriteitsbezorging) — Een snellere bezorging. Zet dit aan om je klanten een spoedoptie te bieden.
- **Orario limite** (Sluitingstijd) en **Giorni di consegna** (Bezorgdagen) — Net als bij InPost.
- **Mappatura titoli metodo di spedizione** (Koppeling verzendmethoden) — Voeg een of meer patronen toe (bijv. `poste`, `poste italiane`) die overeenkomen met de namen van je Lightspeed-verzendmethoden voor deze vervoerder.

::: warning Niet vergeten op te slaan
Elk vervoerder-blok heeft een eigen knop **Salva impostazioni** (Instellingen opslaan). Sla het blok op dat je net hebt aangepast.
:::

## 8 · Productinstellingen
De MyParcel-app voegt **geen** velden toe aan het Lightspeed-productscherm. Al het verzendgedrag regel je vanuit de app-instellingen (zie [§7](#7-instellingen-vervoerders)).

## 9 · De checkout-ervaring
Wat je klant ziet zodra het bezorgadres is ingevuld. De opties hangen af van de vervoerders en bezorgtypes die je in [§7](#7-instellingen-vervoerders) hebt aangezet. De naam en prijs die de klant ziet, zijn die welke je per bezorgtype hebt ingesteld.

<!-- screenshot: ../../platforms/images/lightspeed/checkout-delivery.png — voeg een checkout-schermafbeelding toe zodra een testbestelling in de storefront is geplaatst -->

Op basis van de voorbeeldinstellingen kan een klant tegenkomen:

- **Standaardbezorging** (*Consegna standard*) — De standaardkeuze. Het pakket wordt op een normale bezorgdag thuisbezorgd.
- **Afhaalpunt** (*Punto di ritiro*) — De klant haalt het pakket op bij een afhaalpunt in de buurt in plaats van thuis te ontvangen.

*Prijzen (zoals € 8 of € 4) zijn voorbeelden — ze hangen af van je eigen instellingen en je contract met de vervoerder.*

## 10 · Dagelijks gebruik
Hoe je bestellingen verwerkt, hangt af van de synchronisatiemodus die je in [§5](#5-instellingen-synchronisatiemodus) koos:

- **Push** — Bestellingen gaan automatisch naar MyParcel op het moment dat je instelde bij **Momento di inoltro** ([§4](#4-instellingen-algemeen)). Je maakt daarna labels aan en verzendt vanuit je MyParcel-backoffice.
- **Pull** — MyParcel haalt de bestellingen zelf uit Lightspeed op. Je werkt volledig vanuit je MyParcel-backoffice om labels aan te maken en te verzenden.

::: tip Wanneer je betaalt
Je betaalt pas zodra een verzending daadwerkelijk aan de vervoerder is overgedragen.
:::

## 11 · Er werkt iets niet — diagnose
Loop deze tabel van boven naar beneden door — de meeste problemen zijn binnen 5 minuten opgelost.

| Symptoom | Wat te controleren |
| --- | --- |
| **De API key wordt niet geaccepteerd** | Plak de key opnieuw uit de backoffice (*Integraties*) zonder extra spaties en klik op **Convalida** (Valideren). |
| **Geen bezorgopties in de checkout** | Staat de vervoerder aan met minstens één ingeschakeld bezorgtype ([§7](#7-instellingen-vervoerders))? Komt de **Mappatura titoli** overeen met de namen van je Lightspeed-verzendmethoden? Klik daarna op **Aggiorna capacità** (Capaciteit bijwerken). |
| **Een nieuwe vervoerder of optie verschijnt niet** | Klik op **Aggiorna capacità** (Capaciteit bijwerken) zodat de app de nieuwste gegevens uit je MyParcel-account ophaalt. |
| **Bestellingen worden aan de verkeerde vervoerder gekoppeld** | Pas de **Mappatura titoli metodo di spedizione** aan. Maak de patronen per vervoerder uniek en laat ze precies aansluiten op je Lightspeed-verzendmethoden. |
| **Bestellingen bereiken MyParcel niet** | Controleer de synchronisatiemodus ([§5](#5-instellingen-synchronisatiemodus)) en de **Momento di inoltro** ([§4](#4-instellingen-algemeen)). In Push-modus gaat de bestelling bij de gekozen status. |

## 12 · FAQ

### Kost de app geld?
Nee. Je betaalt alleen voor de verzendingen via MyParcel.

### Waar vind ik mijn API key?
In je MyParcel-backoffice onder *Shopinstellingen → Integraties*.

### Welke vervoerders kan ik gebruiken?
De vervoerders die op je MyParcel-account zijn ingeschakeld — bijvoorbeeld InPost en Poste Italiane in Italië.

### Wat is het verschil tussen Push en Pull?
Bij **Push** stuurt de app je bestellingen automatisch naar MyParcel. Bij **Pull** haalt MyParcel de bestellingen zelf op en verzorgt de app alleen de bezorgopties in de checkout. Zie [§5](#5-instellingen-synchronisatiemodus).

### Waarom zien mijn klanten geen bezorgopties in de checkout?
Zorg dat de vervoerder aan staat met een ingeschakeld bezorgtype, en dat de **Mappatura titoli** overeenkomt met je Lightspeed-verzendmethoden. Klik daarna op **Aggiorna capacità** (Capaciteit bijwerken). Zie [§7](#7-instellingen-vervoerders).

### Hoe wijzig ik het afzendadres op het label?
Dat stel je in je MyParcel-backoffice in (*Shopinstellingen → Algemeen*), niet in de app. Wijzigingen gelden direct.

## Bronnen & support
- [github.com/myparcelnl/lightspeed ↗](https://github.com/myparcelnl/lightspeed) — handleiding & issues.
- [backoffice.myparcel.com ↗](https://backoffice.myparcel.com) — account, API key, facturatie.
