---
title: Shopify
description: "Van nul naar verzonden pakket op Shopify — voeg de app toe via de App Store, koppel je MyParcel-account met een API key, koppel je verzendmethoden per zone en print vandaag nog je eerste label. Met snelstart, settings-naslag, checkout, dagelijkse workflow en een diagnose-tabel."
---

::: tip In het kort
De MyParcel-app verbindt je Shopify-shop met MyParcel. Je koppelt je Shopify-verzendmethoden per land aan een vervoerder en bezorgoptie, print labels rechtstreeks vanuit Shopify, en track & trace gaat automatisch naar de klant. Geen code nodig — alles via de Shopify-admin.
:::

## Snelstart — je eerste pakket in 15 minuten
Genoeg om vandaag je eerste echte bestelling te versturen. Voor diepere configuratie, zie [Op zoek naar…](#op-zoek-naar) hieronder.

1. **Account.** Nog geen MyParcel-account? Maak er een aan op [myparcel.com/register](https://www.myparcel.com/register).
2. **API key kopiëren.** Log in op [backoffice.myparcel.com](https://backoffice.myparcel.com) → *Shopinstellingen → Integraties* → kopieer de API key.
3. **App toevoegen.** Zoek in de [Shopify App Store](https://apps.shopify.com/) op *MyParcel* → **App toevoegen** → volg de stappen.
4. **App koppelen.** Open **Apps → MyParcel → Instellingen**, plak de key in het veld **API key** en sla op.
5. **Eerste label.** Open **Apps → MyParcel**, vink een betaalde bestelling aan en klik op **Printen**. Je pdf-label rolt eruit.

::: tip Je bent klaar als je dit ziet
- De API key staat opgeslagen bij **Instellingen → Account**
- Je verzendmethoden zijn gekoppeld onder **Standaard exportinstellingen** (geen oranje badge *MyParcel niet actief*)
- Je kunt een testbestelling printen en het pdf-label opent
:::

## Op zoek naar…
| Wat wil je doen? | Ga naar |
| --- | --- |
| Eerste installatie | [Snelstart](#snelstart-je-eerste-pakket-in-15-minuten) |
| Je account koppelen | [3 · De app koppelen](#3-de-app-koppelen-api-key) |
| Koppelen via een sales channel | [Koppelen via een sales channel](#koppelen-via-een-sales-channel) |
| Een specifieke instelling opzoeken | [4 · Instellingen · Algemeen](#4-instellingen-algemeen) t/m [7 · Instellingen · Wereldzendingen](#7-instellingen-wereldzendingen) |
| Een verzendmethode aan een vervoerder koppelen | [5 · Instellingen · Export & zones](#5-instellingen-export-zones) |
| Een andere instelling per product | [8 · Productinstellingen](#8-productinstellingen) |
| Wat de klant ziet in de checkout | [9 · De checkout-ervaring](#9-de-checkout-ervaring) |
| Labels printen of exporteren | [10 · Dagelijks gebruik](#10-dagelijks-gebruik) |
| Er werkt iets niet | [11 · Er werkt iets niet — diagnose](#11-er-werkt-iets-niet-diagnose) |
| Antwoord op een veelgestelde vraag | [12 · FAQ](#12-faq) |

## 1 · Je MyParcel-account voorbereiden
Voordat je in Shopify begint, regel je vier dingen in je MyParcel-backoffice:

1. **Factuur- en retouradres** — *Shopinstellingen → Algemeen*. Dit staat op elk label.
2. **Vervoerders activeren** — *Shopinstellingen → Vervoerders*. Alleen ingeschakelde vervoerders verschijnen later in de app.
3. **API key genereren** — *Shopinstellingen → Integraties*.
4. **Verzendmethoden instellen** in Shopify onder **Instellingen → Verzending en bezorging**. De app koppelt zich aan deze methoden (zie [§5](#5-instellingen-export-zones)).

## 2 · De app installeren
1. Ga naar de [Shopify App Store](https://apps.shopify.com/) en zoek op *MyParcel*.
2. Klik op **App toevoegen** en volg de stappen om de app aan je shop toe te voegen.
3. Open de app via **Apps → MyParcel**. Vanaf dan werkt hij zichzelf automatisch bij.

## 3 · De app koppelen (API key)
Open **Apps → MyParcel** en klik rechtsboven op **Instellingen**. Alle instellingen staan op één pagina; het eerste blok is **Account**.

![MyParcel voor Shopify — Account en Algemene instellingen. Het API key-veld koppelt je shop aan MyParcel.](../../platforms/images/shopify/account-general.png) De API key is in deze schermafbeelding afgeschermd.

1. Plak de key uit je MyParcel-backoffice in **API key**.
2. Scroll naar beneden en klik op **Opslaan**.
3. Gebruik **Réinstaller les Webhooks** alleen als de automatische statusupdates niet meer werken — daarmee herstel je de koppeling.

::: warning Werkt het niet?
Meest voorkomende oorzaken: niet op *Opslaan* geklikt · een spatie voor/na de key mee gekopieerd · key van een andere shop · key van een andere omgeving (live vs sandbox) dan je MyParcel-account.
:::

### Koppelen via een sales channel
In plaats van de API key met de hand in de app te kopiëren, kun je koppelen via een **sales channel** in je MyParcel-backoffice. MyParcel verbindt dan rechtstreeks met je Shopify-shop.

1. Log in op [backoffice.myparcel.com](https://backoffice.myparcel.com) en ga naar **Shop settings → Sales Channels** (Shopinstellingen → Verkoopkanalen).
2. Klik rechtsboven op **Add sales channel** (Verkoopkanaal toevoegen).

![Het overzicht Sales Channels in de MyParcel-backoffice, met rechtsboven de knop Add sales channel.](../../platforms/images/shopify/backoffice-sales-channels.png)

3. Vul een **Name** (Naam) in voor het kanaal en kies bij **Type of sales channel** (Type verkoopkanaal) voor **Shopify**.
4. Vul je **Store ID** in — het eerste deel van je `.myshopify.com`-adres (voor de shop `mijn-shop.myshopify.com` is de Store ID `mijn-shop`).
5. Klik op **Save** (Opslaan). Het kanaal wordt aangemaakt met een label **Missing data** (Gegevens ontbreken).

![Een Shopify sales channel toevoegen: kies het type en vul je Store ID in, klik dan op Save.](../../platforms/images/shopify/backoffice-add-channel.png)

6. Open het kanaal en klik op **Create connection** (Verbinding maken).
7. Log in op je Shopify-omgeving wanneer daarom wordt gevraagd en keur de koppeling goed. Shopify stuurt je terug naar de backoffice en het kanaal toont **Connected** (Verbonden).

![Een Shopify sales channel gebruikt je Store ID en een knop Create connection — daarop klikken vraagt je in te loggen bij Shopify en de koppeling goed te keuren.](../../platforms/images/shopify/backoffice-credentials.png)

### Wat doet de app in je Shopify-admin?
| Waar? | Wat kun je doen? |
| --- | --- |
| **Apps → MyParcel** | Het *Bestellingen*-scherm — selecteer bestellingen en print of exporteer labels. |
| **Apps → MyParcel → Instellingen** | Alle instellingen: Account, Algemeen, Export & zones, Afhaalpunten, Wereldzendingen. |
| **Product → Verzending** | Standaard Shopify-velden (gewicht, land van herkomst, HS-code) die MyParcel uitleest. |

::: tip Twee MyParcel-labels in je app-lijst?
Op een ontwikkelshop zie je soms *MyParcel.nl DEV* of *MyParcel.nl - Local* naast de gepubliceerde **MyParcel NL**-app. Gebruik de gepubliceerde app voor live verzendingen.
:::

## 4 · Instellingen · Algemeen
In **Instellingen**, onder Account, vind je **Algemene instellingen**.

![Algemene instellingen: paginaformaat, labelomschrijving, fulfilment, automatische export, Track & Trace-mails.](../../platforms/images/shopify/account-general.png)

- **Standaard paginakeuze** — Bepaalt het labelformaat. *Standaardprinter (A4)* voor een gewone printer, *Labelprinter (A6)* voor een Zebra/Brother-labelprinter.
- **Beschrijving op label** — De tekst op je label. Gebruik plaatshouders die automatisch gevuld worden: `{order_name}` (bijv. #1008), `{order_number}` (bijv. 1008) of `{product_sku}` (bijv. TST-D01).
- **Fulfilment** — Wanneer een bestelling in Shopify als *Fulfilled* wordt gemarkeerd. Kies *Manueel* (zelf), *Automatisch* (bij de eerste scan van de vervoerder) of *Onmiddellijk* (bij het printen van een label).
- **Automatische export** — Of bestellingen automatisch naar MyParcel gaan. *Niet automatisch doorsturen* om dit handmatig te doen, of een export-optie om zendingsinformatie (of de volledige order, inclusief producten voor paklijsten) automatisch door te sturen.
- **Verstuur Track & Trace emails vanuit Shopify** — *Nee* laat MyParcel de mail sturen; *Ja* laat Shopify dit doen.

## 5 · Instellingen · Export & zones
Hier koppel je je Shopify-verzendmethoden per **zone** (land of regio) aan een MyParcel-vervoerder, bezorgoptie en pakkettype. Maak de zones en tarieven eerst aan in Shopify onder **Instellingen → Verzending en bezorging**.

![Exportinstellingen met zones. Elke zone koppelt verzendmethoden aan een vervoerder en pakkettype.](../../platforms/images/shopify/export-zones.png)

- **Standaard instelling** — De terugvaloptie als een verzendmethode niet wordt herkend. Voor Europese en wereldzendingen wordt automatisch een pakketzending aangemaakt.
- **Per zone** — Elke zone toont je Shopify-verzendmethoden (bijv. *Standaard* en *Pickup*) met de prijs en de gekoppelde MyParcel-opties (*Thuislevering* of *Afhaalpunt*, plus het pakkettype).

Klik op een verzendmethode om de koppeling te openen:

![Verzendmethode koppelen — Verzenden via MyParcel, vervoerder en type verzending.](../../platforms/images/shopify/zone-link-1.png)

![Verzendmethode koppelen — pakkettype en verpakkingsgewicht.](../../platforms/images/shopify/zone-link-2.png)

- **Verzenden via MyParcel NL** — Zet op *Ja* om deze methode via MyParcel te versturen.
- **Verzenden via** — De vervoerder voor deze methode. Welke vervoerders verschijnen hangt af van de zone (bijv. PostNL, DHL en DPD in Nederland; InPost en Poste Italiane in Italië).
- **Type verzending** — *Standaard bezorging* (thuislevering) of *Ophalen bij afhaalpunt*.
- **Type pakket** — bijv. *Pakket*. Kies een brievenbus-optie als de zending door de brievenbus past.
- **Standaard verpakkings gewicht** — Het gewicht van de verpakking in gram. Telt op bij het productgewicht.

::: warning Niet vergeten op te slaan
Klik na het koppelen onderaan de instellingenpagina op **Opslaan**.
:::

## 6 · Instellingen · Afhaalpunten
Verderop op de instellingenpagina staan de afhaalpunt- en herinneringsmail-opties.

![Afhaalpunt-instellingen en de herinneringsmail voor de afhaallocatie.](../../platforms/images/shopify/export-zones.png)

- **Automatisch dichtstbijzijnde afhaalpunt kiezen** — Kiest automatisch het dichtstbijzijnde punt voor de klant.
- **Herinneringsmail afhaallocatie** — Heeft de klant geen afhaalpunt gekozen, dan stuurt MyParcel 30 minuten na de bestelling een herinneringsmail met een link. Zet **Herinneringsmail versturen** op *Ja*, vul een **Contact email** in voor je eigen klantenservice en kies de **taal voor PostNL-locaties** (NL/BE).

## 7 · Instellingen · Wereldzendingen
Onderaan de instellingenpagina stel je de douane-standaardwaarden in voor zendingen buiten de EU, als een product zelf geen douanegegevens heeft.

![Wereldzendingen: standaard HS-code, standaard gewicht en standaard land van herkomst.](../../platforms/images/shopify/world-shipments.png)

- **Standaard HS Code** — Douanecode voor je producten. Zoek hem op via [tarief.douane.nl](https://tarief.douane.nl). Een verkeerde code kan leiden tot retour door de douane.
- **Standaard gewicht per pakket (in gram)** — Wordt gebruikt als een product geen gewicht heeft. Kies een waarde dicht bij je gemiddelde.
- **Standaard land van herkomst** — Het land van waaruit je verzendt.

## 8 · Productinstellingen
De MyParcel-app voegt **geen** velden toe aan de Shopify-productpagina. Je stelt de verzendgegevens in via de standaard Shopify-velden onder **Verzending** op het product of de variant. MyParcel leest deze uit.

![Shopify-verzendvelden die MyParcel uitleest: pakket, productgewicht, land van herkomst, HS-code.](../../platforms/images/shopify/product-shipping.png)

- **Pakket** — Het standaard pakketformaat van Shopify voor dit product.
- **Productgewicht** — Vul dit altijd in; het bepaalt mee de verzendprijs.
- **Landcode van herkomst** (onder *Douanegegevens*) — Waar het product vandaan komt. Nodig buiten de EU.
- **Harmonized System (HS)-code** (onder *Douanegegevens*) — Voer een 6-cijferige code in of zoek op trefwoord. Belangrijk voor wereldzendingen.

## 9 · De checkout-ervaring
Wat je klant ziet zodra het bezorgadres is ingevuld. De opties hangen af van je instellingen in [§5](#5-instellingen-export-zones).

![Checkout — de klant kiest Verzenden & afhaalpunten of Ophalen in de winkel.](../../platforms/images/shopify/checkout-delivery.png)

De klant kiest eerst **Verzenden & afhaalpunten** of **Ophalen in de winkel**. Daarna verschijnen de verzendmethoden die bij het gekozen land horen.

![Checkout — verzendwijzes (Standaard / Pickup) gekoppeld vanuit je zones.](../../platforms/images/shopify/checkout-method.png)

- **Standaard** — Gewone thuislevering (in het voorbeeld: gratis, 3–5 werkdagen).
- **Pickup** — Ophalen bij een afhaalpunt in de buurt (in het voorbeeld: € 2,00, 5–8 werkdagen).

Heb je afhaalpunten ingeschakeld ([§5](#5-instellingen-export-zones) en [§6](#6-instellingen-afhaalpunten)), dan kiest de klant na het afrekenen een afhaalpunt op de bedankpagina. Doet de klant dat niet, dan volgt een herinneringsmail. *Prijzen en levertijden zijn voorbeelden — ze hangen af van je eigen instellingen en contract.*

## 10 · Dagelijks gebruik
Open **Apps → MyParcel**. Je komt op het **Bestellingen**-scherm, met tabbladen zoals *All*, *Paid & Unfulfilled*, *Printed*, *Fulfilled* en *Onvolledig*.

![Bestellingenoverzicht — tabbladen, selectievakjes en status per order. Klantgegevens zijn hier afgeschermd.](../../platforms/images/shopify/orders-list.png) Klantgegevens zijn in deze schermafbeelding afgeschermd.

1. Vink de bestelling(en) aan die je wilt verwerken.
2. Gebruik de actiebalk die bovenaan verschijnt:

![Actiebalk: Printen, Bestelling exporteren, Maak een concept aan.](../../platforms/images/shopify/orders-actions.png)

- **Printen** — Maakt de labels aan en print ze.
- **Bestelling exporteren** — Stuurt de bestelling(en) naar MyParcel.
- **Maak een concept aan** — Maakt een conceptzending die je later afmaakt.

::: tip Wanneer je gefactureerd wordt
Je wordt pas gefactureerd zodra een zending daadwerkelijk aan de vervoerder is overgedragen.
:::

## 11 · Er werkt iets niet — diagnose
Loop deze tabel van boven naar beneden door — de meeste problemen zijn binnen 5 minuten opgelost.

| Symptoom | Wat te controleren |
| --- | --- |
| **Het app-scherm blijft leeg** | Op een ontwikkelshop rendert de *MyParcel.nl DEV* / *Local*-app alleen met een draaiende dev-server. Gebruik de gepubliceerde **MyParcel NL**-app. |
| **"Geen exportinstellingen gevonden voor de verzendmethode"** | De verzendmethode van die bestelling is niet gekoppeld. Koppel de juiste zone en methode in [§5](#5-instellingen-export-zones). |
| **Geen afhaalpunten in de checkout** | Zet afhaalpunt aan in je zone-koppeling ([§5](#5-instellingen-export-zones)) en controleer de afhaalpunt-instellingen ([§6](#6-instellingen-afhaalpunten)). |
| **Foutmelding bij het printen van meerdere labels** | Een order met een onvolledig adres kan niet geëxporteerd worden. Controleer orders met een waarschuwing (bijv. *Afhaallocatie niet vermeld*) en corrigeer het adres. |
| **API key wordt niet geaccepteerd** | Plak de key opnieuw uit de backoffice (*Integraties*) zonder extra spaties en klik op **Opslaan**. |
| **Wereldzending geretourneerd door de douane** | Zorg dat HS-code en gewicht kloppen. Stel standaardwaarden in ([§7](#7-instellingen-wereldzendingen)) of nauwkeurige waarden per product ([§8](#8-productinstellingen)). |

## 12 · FAQ

### Kost de app geld?
Nee. Je betaalt alleen voor de zendingen via MyParcel.

### Waar vind ik mijn API key?
In je MyParcel-backoffice onder *Shopinstellingen → Integraties*.

### Welke vervoerders kan ik gebruiken?
De vervoerders die op je MyParcel-account zijn ingeschakeld, per zone — bijvoorbeeld PostNL, DHL en DPD in Nederland, en InPost en Poste Italiane in Italië.

### Hoe wijzig ik het afzendadres op het label?
Dat stel je in je MyParcel-backoffice in (*Shopinstellingen → Algemeen*), niet in de app. Wijzigingen gelden direct.

### Kunnen mijn klanten een afhaalpunt kiezen?
Ja — zet afhaalpunt aan in je zone-koppeling ([§5](#5-instellingen-export-zones)). De klant kiest een punt op de bedankpagina.

### Kan ik een retourlabel naar mijn klant sturen?
Ja — retourlabels kunnen naar de klant gemaild worden. Zie je MyParcel-backoffice voor de retourportaal-opties.

## Bronnen & support
- [github.com/myparcelnl/shopify ↗](https://github.com/myparcelnl/shopify) — handleiding & issues.
- [apps.shopify.com ↗](https://apps.shopify.com/) — vind en voeg de MyParcel-app toe.
- [backoffice.myparcel.com ↗](https://backoffice.myparcel.com) — account, API key, facturatie.
