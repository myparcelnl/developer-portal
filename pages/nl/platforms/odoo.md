---
title: Odoo
description: "Van nul naar een verzonden pakket in Odoo 19, installeer de MyParcel Shipping-app, maak een verzendmethode per vervoerder, kies je verzendopties op de verkooporder en print je label vanuit de levering. Met snelstart, settings-naslag, een optiematrix per vervoerder, de dagelijkse workflow en een diagnose-tabel."
---

::: tip In het kort
De MyParcel Shipping-app verbindt je Odoo-database met MyParcel. Je maakt één verzendmethode per vervoerder, kiest de verzendopties op de verkooporder, en zodra je de levering valideert maakt Odoo de zending aan bij MyParcel en haalt het label en Track & Trace op. Alles draait vanuit de standaard **Sales**- en **Inventory**-schermen, geen code nodig.
:::

::: tip Over de schermafbeeldingen
De schermafbeeldingen tonen de Engelse Odoo-interface. Staat jouw Odoo in het Nederlands, dan zie je dezelfde velden met Nederlandse namen, bijvoorbeeld *MyParcel Instellingen* voor **MyParcel Settings** en *Leeftijdscontrole (18+)* voor **Age Verification (18+)**.
:::

## Snelstart, je eerste pakket in 15 minuten
Genoeg om vandaag je eerste echte order te versturen. Dieper configureren doe je via [Wat zoek je?](#wat-zoek-je) hieronder.

1. **Haal je API-key op.** Log in op [backoffice.myparcel.com](https://backoffice.myparcel.com), ga naar *Shopinstellingen → Integraties* en kopieer je API-key.
2. **Installeer de app.** Open in Odoo **Apps**, zoek op *MyParcel Shipping* en klik op **Activate**.
3. **Maak een verzendmethode.** Ga naar **Sales → Configuration → Delivery Methods → New**. Geef hem een naam, kies een **Provider** zoals *MyParcel - PostNL* en zet **Integration Level** op *Get Rate and Create Shipment*.
4. **Koppel je account.** Open het tabblad **MyParcel Settings**, kies je **MyParcel Platform**, plak je **API Key**, kies een **Package Type** en klik op **MyParcel API CHECK**.
5. **Verstuur een order.** Klik op een verkooporder op **Add shipping**, kies je MyParcel-methode, klik op **Get rate** en daarna op **Add**. Bevestig de order, open de levering en klik op **Validate**.

::: tip Je bent klaar als je dit ziet
- **MyParcel API CHECK** meldt *Connection Successful*
- Je methode verschijnt in het venster **Add shipping**, met de MyParcel-opties eronder
- Na het valideren van de levering zijn **Tracking Reference** en **Label URL** gevuld op het tabblad **Additional Info**
:::

## Wat zoek je?
| Wat wil je doen? | Ga naar |
| --- | --- |
| Eerste installatie | [Snelstart](#snelstart-je-eerste-pakket-in-15-minuten) |
| De app installeren | [2 · De app installeren](#2-de-app-installeren) |
| Een methode per vervoerder maken | [3 · Een verzendmethode aanmaken](#3-een-verzendmethode-aanmaken) |
| Je API-key invoeren of testen | [4 · Instellingen · Algemeen en orders](#4-instellingen-algemeen-en-orders) |
| Kiezen tussen A4- en A6-labels | [5 · Instellingen · Labels](#5-instellingen-labels) |
| Bepalen hoe verzendkosten worden berekend | [6 · Instellingen · Prijzen](#6-instellingen-prijzen) |
| Pakkettype en verzekering instellen | [7 · Instellingen · Pakkettype en verzekering](#7-instellingen-pakkettype-en-verzekering) |
| Standaardopties per vervoerder instellen | [8 · Instellingen · Vervoerdersopties](#8-instellingen-vervoerdersopties) |
| Zien welke opties een vervoerder ondersteunt | [9 · Wat elke vervoerder ondersteunt](#9-wat-elke-vervoerder-ondersteunt) |
| Douanegegevens op producten zetten | [10 · Productinstellingen](#10-productinstellingen) |
| De opties voor één order aanpassen | [11 · Verzendopties per order](#11-verzendopties-per-order) |
| Een label printen en Track & Trace vinden | [12 · De levering, het label en Track & Trace](#12-de-levering-het-label-en-track-trace) |
| Er werkt iets niet | [14 · Het werkt niet, diagnose](#14-het-werkt-niet-diagnose) |
| Antwoord op een veelgestelde vraag | [15 · Veelgestelde vragen](#15-veelgestelde-vragen) |

## 1 · Je MyParcel-account voorbereiden
Regel eerst drie dingen in je MyParcel-backoffice, voordat je in Odoo begint:

1. **Factuur- en retouradres**, onder *Shopinstellingen → Algemeen*. Dit staat op elk label.
2. **Activeer je vervoerders**, onder *Shopinstellingen → Vervoerders*. Je kunt alleen verzenden met vervoerders die actief zijn op je account.
3. **Kopieer je API-key**, onder *Shopinstellingen → Integraties*. Je hebt één key per shop nodig.

Je hebt daarnaast een Odoo-database met **Inventory** en **Sales** nodig, en een gebruiker met beheerdersrechten om bij de configuratieschermen te komen.

## 2 · De app installeren
1. Open **Apps** vanaf het Odoo-startscherm.
2. Zoek op **MyParcel Shipping** en klik op **Activate**.
3. Odoo installeert de app samen met **Inventory** en de verzendfunctionaliteit die daarbij hoort.

De app voegt een tabblad **MyParcel Settings** toe aan je verzendmethodes, verkooporders en leveringen, en zet één pakkettype per vervoerder klaar.

::: tip Overstappen vanaf de oude module
Draaide je eerder de module `delivery_myparcel`, dan vervangt de huidige app die onder de naam `delivery_myparcel_official`. Volg de migratiestappen uit de changelog van de app vóór je installeert, zodat je bestaande verzendmethodes blijven werken.
:::

## 3 · Een verzendmethode aanmaken
Je maakt **één verzendmethode per vervoerder**. Een methode met de naam *MyParcel PostNL* verzendt met PostNL, een tweede methode verzendt met DHL, enzovoort.

Ga naar **Sales → Configuration → Delivery Methods** en klik op **New**.

![De lijst met verzendmethodes, met een MyParcel-methode naast de standaardmethode van Odoo.](../../platforms/images/odoo/01-delivery-methods.png)

Vul de bovenkant van het formulier in:

| Veld | Wat je instelt |
| --- | --- |
| **Delivery Method** | De naam die je team op orders ziet, bijvoorbeeld *MyParcel PostNL*. |
| **Provider** | De MyParcel-vervoerder, bijvoorbeeld *MyParcel - PostNL*. Deze keuze bepaalt welke opties verderop verschijnen. |
| **Integration Level** | *Get Rate and Create Shipment*. Met alleen *Get Rate* vraagt Odoo wel een prijs op bij MyParcel, maar maakt het nooit de zending of het label aan. |
| **Delivery Product** | Laat dit op *MyParcel Package* staan. Dit is het product dat Odoo aan de order toevoegt om verzendkosten te berekenen. |
| **Invoicing Policy** | *Estimated cost* rekent de prijs die op de order staat. *Real cost* rekent wat de zending werkelijk heeft gekost. |

Op het tabblad **Availability** bepaal je voor welke orders een methode geldt, op land, postcodeprefix, gewicht of volume. Dat is standaard Odoo-gedrag en werkt voor MyParcel-methodes hetzelfde.

## 4 · Instellingen · Algemeen en orders
Open het tabblad **MyParcel Settings** op de verzendmethode.

![Het tabblad MyParcel Settings op een verzendmethode, met de algemene instellingen, orderinstellingen, labelinstellingen en prijsstelling.](../../platforms/images/odoo/02-carrier-general.png)

| Instelling | Wat het doet |
| --- | --- |
| **MyParcel Platform** | *MyParcel NL* voor een myparcel.nl-account, *MyParcel BE* voor een SendMyParcel-account. Dit bepaalt ook welke verzendopties je kunt gebruiken, sommige opties bestaan maar op één platform. |
| **API Key** | De key uit je MyParcel-backoffice. Plak hem hier en sla op. |
| **MyParcel API CHECK** | Test de verbinding. *Connection Successful* betekent dat de key werkt, *Connection Error* betekent dat je de key moet nakijken. |
| **Add Email to Shipment** | Stuurt het e-mailadres van de klant mee, zodat MyParcel Track & Trace kan mailen. Zet dit aan als je wilt dat je klant bericht krijgt. Het adres wordt dan verplicht op elke order met deze methode. |
| **Add Phone to Shipment** | Stuurt het telefoonnummer van de klant mee. Sommige vervoerders en bezorgvormen hebben dit nodig. Het nummer wordt dan verplicht op elke order met deze methode. |

::: warning Verplicht zodra je ze aanzet
**Add Email to Shipment** en **Add Phone to Shipment** maken die velden verplicht. Een order zonder e-mailadres of telefoonnummer loopt daarna vast met een duidelijke melding zodra je wilt verzenden.
:::

## 5 · Instellingen · Labels
| Instelling | Wat het doet | Aanbevolen |
| --- | --- | --- |
| **Label size** | *Standard Printer (A4)* zet tot vier labels op een A4-vel. *Labelprinter (A6)* print één label per sticker. | A6 als je een labelprinter hebt |
| **Label position** | Op welk kwart van het A4-vel het eerste label komt, *Top Left* tot *Bottom Right*. Alleen zichtbaar bij A4. | Top Left |
| **Direct Label** | Staat dit aan, dan haalt Odoo het label en de Track & Trace-code op zodra de zending is aangemaakt, en hangt de pdf aan de levering. Staat het uit, dan wordt de zending wel aangemaakt maar haal je het label daarna zelf op. | Aan |

## 6 · Instellingen · Prijzen
| Instelling | Wat het doet |
| --- | --- |
| **Pricing method** | *Dynamic pricing* vraagt bij MyParcel op wat deze specifieke zending kost en zet dat bedrag op de order. *Fixed Price* rekent een bedrag dat je zelf bepaalt. |
| **Fixed Price** | De verzendprijs die je berekent. Alleen zichtbaar als Pricing method op *Fixed Price* staat. |

Met **Fixed Price** kun je ook een toeslag per optie rekenen. Naast elke optie die je aanzet bij [Vervoerdersopties](#8-instellingen-vervoerdersopties) verschijnt een prijsveld, bijvoorbeeld *Age Verification Price (18+)* of *Signature Price*, en die bedragen komen boven op de vaste prijs.

::: tip Hoe dynamische prijsstelling werkt
Om een echte prijs te geven maakt MyParcel de zending heel even aan, leest de prijs uit en verwijdert hem weer. Er wordt niets verzonden en die opvraging kost je niets.
:::

## 7 · Instellingen · Pakkettype en verzekering
![Pakketinstellingen, de verzekeringsprijslijst en de vervoerdersopties van een PostNL-verzendmethode.](../../platforms/images/odoo/03-carrier-postnl-options.png)

**Package Type** is verplicht. Elke vervoerder heeft eigen pakkettypes, en de keuzelijst toont alleen de types die bij de gekozen provider horen. Je vindt ze allemaal onder **Inventory → Configuration → Package Types**.

![De pakkettypes die de app toevoegt, één per vervoerder, met hun maximumgewicht en vervoerderscode.](../../platforms/images/odoo/07-package-types.png)

Onder **Insurance** bouw je je eigen prijslijst. Voeg een regel toe voor elk verzekerd bedrag dat je wilt aanbieden en zet erbij wat je ervoor rekent:

- **Insurance Amount** is de verzekerde waarde in euro's: 85, 100, 250, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500 of 5000.
- **Price** is wat je de klant voor die dekking rekent.

Laat de lijst leeg als je geen verzekering aanbiedt. Je team kiest op de order zelf een bedrag uit deze lijst.

## 8 · Instellingen · Vervoerdersopties
Het onderste blok, **Carrier settings**, bepaalt de **standaardopties** voor elke zending met deze methode. Je team kan ze per order nog aanpassen.

| Optie | Wat het doet |
| --- | --- |
| **Age Verification (18+)** | De vervoerder controleert het ID van de ontvanger en geeft het pakket alleen af aan iemand van 18 jaar of ouder. Gebruik dit voor alcohol, tabak of andere leeftijdsgebonden artikelen. |
| **Signature** | De vervoerder vraagt om een handtekening bij aflevering. Handig bij waardevolle orders. |
| **Receiver Only** | Het pakket gaat alleen naar de geadresseerde, niet naar een buurman. |
| **Receipt Code** | De ontvanger heeft een code nodig om het pakket op te halen. Alleen PostNL, voor Nederlandse en Belgische adressen, en alleen in combinatie met verzekering. |
| **Larger than 100x70x58 cm** | Markeert het pakket als extra groot. Alleen PostNL, voor Europese adressen. |
| **Direct Return** | Voegt een retourlabel toe zodat de klant de order meteen terug kan sturen. Alleen PostNL op MyParcel NL. |
| **Hide Sender** | Laat jouw gegevens van het label weg, bijvoorbeeld als je namens iemand anders verzendt. Alleen DHL For You en DHL Europlus. |
| **Same-day Delivery** | Biedt bezorging dezelfde dag. Alleen DHL For You. |

::: warning Combinaties die PostNL niet toestaat
**Receipt Code** kan niet samen met Leeftijdscontrole, Handtekening of Alleen Ontvanger, en heeft altijd verzekering nodig. Buiten Nederland en België heeft **Signature** ook verzekering nodig. Odoo blokkeert de combinatie met een melding voordat de zending de deur uit gaat.
:::

## 9 · Wat elke vervoerder ondersteunt
Niet elke vervoerder biedt elke optie, en sommige opties bestaan maar op één platform. Dit kun je per vervoerder gebruiken:

| Vervoerder | 18+ | Handtekening | Alleen ontvanger | Ontvangstcode | Extra groot | Direct retour | Afzender verbergen | Verzekering |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **PostNL** | alleen NL | ja | ja | NL en BE | alleen EU | alleen NL | nee | ja |
| **DHL For You** | alleen NL | ja | ja | nee | nee | nee | ja | ja |
| **DHL Europlus** | nee | ja | nee | nee | nee | nee | ja | ja |
| **DHL Parcel Connect** | nee | nee | nee | nee | nee | nee | nee | ja |
| **DPD** | nee | nee | nee | nee | nee | nee | nee | nee |
| **Bpost** | nee | ja | nee | nee | nee | nee | nee | nee |
| **UPS Standard** | alleen NL | ja | ja | nee | nee | nee | nee | ja |
| **UPS Express Saver** | alleen NL | ja | ja | nee | nee | nee | nee | ja |

*Alleen NL* betekent dat de optie verschijnt als **MyParcel Platform** op *MyParcel NL* staat. Op een *MyParcel BE*-methode zijn die opties verborgen.

## 10 · Productinstellingen
De app voegt geen MyParcel-velden toe aan het productscherm. Al het verzendgedrag regel je vanuit de verzendmethode (zie [4 · Instellingen · Algemeen en orders](#4-instellingen-algemeen-en-orders)) en vanaf de order zelf.

Drie standaard Odoo-productvelden zijn wel van belang, omdat MyParcel ze gebruikt:

| Veld | Waar | Waarom het uitmaakt |
| --- | --- | --- |
| **Weight** | Product → tabblad *Inventory* | Bepaalt de verzendprijs en welk pakkettype past. Zonder gewicht valt de app terug op minimaal 10 gram, waardoor prijsopgaven onrealistisch worden. |
| **HS Code** | Product → tabblad *Accounting* of *Purchase* | Verplicht voor zendingen buiten de EU. De code moet 6, 8 of 10 cijfers hebben, en 10 cijfers voor de Verenigde Staten. |
| **Country of Origin** | Naast de HS Code | Verplicht voor zendingen buiten de EU, dit komt op de douaneaangifte. |

Voor orders binnen de EU mag je HS Code en Country of Origin leeg laten.

## 11 · Verzendopties per order
Klik op een verkooporder onder de ordertotalen op **Add shipping**. Kies je MyParcel-methode en de opties voor deze zending verschijnen.

![Het venster Add a shipping method met de MyParcel-opties voor PostNL en de knop Get rate.](../../platforms/images/odoo/04-order-shipping-wizard.png)

1. Kies de **Shipping Method**. De optielijst past zich aan de vervoerder aan.
2. Vul de **Delivery Date** in. PostNL heeft die nodig, de andere vervoerders niet.
3. Vink de opties aan die je voor deze order wilt. Ze beginnen bij de standaardwaarden van de verzendmethode.
4. Vink **Activate Insurance** aan en kies een bedrag als je het pakket wilt verzekeren.
5. Klik op **Get rate** om de echte prijs op te halen, en daarna op **Add** om de verzendregel op de order te zetten.

Zodra de methode op de order staat, laat een tabblad **MyParcel Settings** zien wat er gekozen is. Dat tabblad is alleen-lezen, gebruik **Update shipping cost** of verwijder de verzendregel als je iets wilt wijzigen.

![Het tabblad MyParcel Settings op een verkooporder, met de gekozen verzendmethode en opties.](../../platforms/images/odoo/05-order-myparcel-tab.png)

::: tip Verzending toevoegen zonder prijs
Klik je op **Add** zonder een tarief op te halen, dan vraagt Odoo of de levering echt gratis moet zijn. Dat is prima als je een vaste prijs rekent of gratis verzendt, de zending zelf wordt gewoon aangemaakt.
:::

## 12 · De levering, het label en Track & Trace
Als je de verkooporder bevestigt, maakt Odoo een levering aan. Open hem via de knop **Delivery** op de order.

Alles wat met MyParcel te maken heeft staat op het tabblad **Additional Info**, onder **MyParcel Settings**. Je kunt de opties daar nog aanpassen, tot het moment dat je valideert.

![Het tabblad Additional Info op een levering, met de vervoerder, de tracking reference, de label-URL en de MyParcel-opties.](../../platforms/images/odoo/06-delivery-myparcel.png)

Klik op **Validate** zodra het pakket is ingepakt. Odoo doet dan het volgende:

1. De zending wordt bij MyParcel aangemaakt met de opties van deze levering.
2. Het pdf-label wordt opgehaald en als `LabelMyParcel.pdf` aan de levering gehangen, als **Direct Label** aanstaat.
3. **Tracking Reference** en **Label URL** worden gevuld, en de Track & Trace-link wordt bewaard.

De Track & Trace-pagina voor je klant staat op `myparcel.me/track-trace`, en Odoo bouwt de link op uit de barcode, de postcode en het land.

::: tip Meerdere pakketten bij een PostNL-order
PostNL ondersteunt multicollo. Wordt één zending over meerdere pakketten verdeeld, dan telt Odoo de prijzen van alle pakketten bij elkaar op en houdt het de labels samen op dezelfde levering.
:::

## 13 · Dagelijks gebruik
Een typische verzenddag:

1. Open **Sales → Orders** en bevestig de orders die je gaat verzenden.
2. Controleer per order de verzendmethode en de opties, en pas ze aan waar een klant om iets specifieks heeft gevraagd.
3. Open **Inventory → Delivery Orders**, pak de goederen in en gebruik **Put in Pack** als je meerdere pakketten verstuurt.
4. Klik op **Validate**. De zending wordt aangemaakt en het label wordt bijgevoegd.
5. Print de labels vanaf de bijlage op elke levering en geef de pakketten mee aan de vervoerder.

## 14 · Het werkt niet, diagnose
| Symptoom | Waarschijnlijke oorzaak en oplossing |
| --- | --- |
| **Toegang geweigerd / Access Denied** | De API-key klopt niet, is verlopen, of hoort bij een ander MyParcel-account. Kopieer hem opnieuw uit *Shopinstellingen → Integraties* en test met **MyParcel API CHECK**. |
| **MyParcel API CHECK meldt Connection Error** | Zelfde oorzaak als hierboven. Controleer of je de hele key zonder spaties hebt geplakt. |
| **Street number not found in street field** | Het huisnummer moet achteraan in het veld **Street** staan, of in **Street 2** bij niet-Belgische adressen. Corrigeer het afleveradres op de contactpersoon. |
| **State is required for creating a shipment** | Odoo vraagt om een provincie of regio bij elk adres buiten België. Vul de provincie in op de contactpersoon. |
| **City / Postal code / Recipient name is required** | Het afleveradres is onvolledig. Vul het aan op de contactpersoon, niet alleen op de order. |
| **Email address is required** | **Add Email to Shipment** staat aan voor deze methode, maar de contactpersoon heeft geen e-mailadres. Vul er een in, of zet de instelling uit. |
| **Phone number is required** | Idem, voor **Add Phone to Shipment**. |
| **Invalid email address provided** | Het e-mailadres van de contactpersoon klopt niet. Corrigeer het op de contactpersoon. |
| **The HS Code does not have the correct amount of digits** | HS-codes moeten 6, 8 of 10 cijfers hebben, en 10 cijfers voor de Verenigde Staten. Corrigeer de code op het product. |
| **No country of origin found for this product** | Vul **Country of Origin** in op elk product in een zending die de EU verlaat. |
| **Package type needed for MyParcel carriers** | **Package Type** is leeg op de verzendmethode. Kies er een op het tabblad MyParcel Settings. |
| **Receipt code can not be selected with any other option** | Ontvangstcode werkt alleen op zichzelf, en alleen samen met verzekering. Zet de andere opties uit. |
| **This delivery method is not available as no shipment ID was found** | Het adres of de gekozen combinatie van opties is door MyParcel geweigerd. Controleer het afleveradres en zet de opties één voor één uit. |
| **Een nieuwe methode vraagt om MyParcel-velden die niet nodig lijken** | Een verzendmethode zonder MyParcel kan toch om MyParcel-velden vragen. Kies eerst de provider en vul daarna de rest van het formulier in. |

## 15 · Veelgestelde vragen
**Heb ik een verzendmethode per vervoerder nodig?**
Ja. Elke methode heeft één provider, een eigen pakkettype en eigen standaardopties. Maak er één voor elke vervoerder waarmee je verzendt.

**Waar vind ik mijn API-key?**
In je MyParcel-backoffice onder *Shopinstellingen → Integraties*. Gebruik de key van de shop waarvandaan je wilt verzenden.

**Wat is het verschil tussen MyParcel NL en MyParcel BE?**
*MyParcel NL* is voor myparcel.nl-accounts, *MyParcel BE* voor SendMyParcel-accounts. Het platform bepaalt welke vervoerders en welke opties je kunt gebruiken, Leeftijdscontrole en Direct Retour bestaan alleen op MyParcel NL.

**Maakt Get rate al een zending aan?**
Er wordt er kort één aangemaakt om de echte prijs uit te lezen, en die wordt daarna weer verwijderd. Er wordt niets verzonden en de opvraging zelf kost niets.

**Kunnen mijn klanten zelf een bezorgmoment of afhaalpunt kiezen?**
Niet in deze versie. De bezorgopties worden door je team op de order gezet, niet door de klant tijdens het afrekenen.

**Kan ik mijn klant een retourlabel sturen?**
Niet automatisch. **Direct Return** voegt een retourlabel toe aan een PostNL-zending op MyParcel NL, dat je bij het pakket kunt doen.

**Welke vervoerders kan ik gebruiken?**
PostNL, DHL For You, DHL Parcel Connect, DHL Europlus, DPD, Bpost, UPS Standard en UPS Express Saver. Alleen vervoerders die actief zijn op je MyParcel-account accepteren daadwerkelijk zendingen.

**Waarom is mijn verzendprijs 0,00?**
Je hebt de verzendmethode toegevoegd zonder een tarief op te halen, of de prijsopvraging is mislukt. Gebruik **Update shipping cost** op de order om het opnieuw te proberen.

## Bronnen & support
- [backoffice.myparcel.com ↗](https://backoffice.myparcel.com), je account, API-key en vervoerders.
- [myparcel.nl/contact ↗](https://www.myparcel.nl/contact), support voor je MyParcel-account.
- Deze handleiding beschrijft de MyParcel Shipping-app voor **Odoo 19**, versie `19.0.0.5.0`.
