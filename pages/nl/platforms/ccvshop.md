---
title: CCV Shop
description: "Koppel je CCV Shop-webshop aan MyParcel met de MyParcel-apps uit de CCV Shop App Store. Over het installeren van MyParcel Verzendservice en MyParcel Bezorgopties, het invullen van je API-key, de standaard zendinginstellingen, de bezorgopties die je klanten in de checkout zien, orders aanmelden en labels printen per stuk of in bulk, en een diagnose-tabel."
---

::: tip In het kort
CCV Shop koppel je aan MyParcel via apps in de **CCV Shop App Store**. **MyParcel Verzendservice** meldt je orders aan bij MyParcel en print de labels direct vanuit je CCV Shop-orderbeheer, en de Track & Trace-code wordt automatisch aan de order toegevoegd. Installeer daarnaast **MyParcel Bezorgopties** om bezorgdagen, tijdvakken en afhaalpunten in de checkout te tonen. CCV Shop bouwt en onderhoudt deze apps, dus met vragen over de apps zelf ga je naar de support van CCV Shop.
:::

## Snelstart, je eerste label in 15 minuten
Genoeg om vandaag je eerste order te verzenden. Voor de details, zie [Wat zoek je?](#wat-zoek-je) hieronder.

1. **Account.** Heb je nog geen MyParcel-account? Maak er een aan via [myparcel.nl/register](https://www.myparcel.nl/register).
2. **API-key kopiëren.** Log in op [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Shopinstellingen → Integratie* → kopieer de API-key.
3. **App installeren.** Ga in je CCV Shop-backoffice naar **App Store**, open **MyParcel Verzendservice** en installeer de app. Verzend je vanuit België? Installeer dan **MyParcel België Verzendservice**.
4. **Key plakken.** Ga naar *Startpunt → Mijn webshop → Instellingen → Verzendkosten & logistiek → MyParcel verzendservice*, plak de key in **MyParcel API key**, kies je standaard **Soort zending** en klik op **Opslaan**.
5. **Label printen.** Open een order, ga naar het tabblad **Koppelingen** en klik op **Meld de order aan bij MyParcel en download etiket**.

::: tip Klaar als je dit ziet
- Het label downloadt zodra je de order aanmeldt
- De order heeft een Track & Trace-code onder *Verzending* op het tabblad *Orderoverzicht*
- De tabel *Historie* op het tabblad *Koppelingen* toont de actie zonder foutmelding
:::

## Wat zoek je?
| Wat wil je doen? | Ga naar |
| --- | --- |
| Begrijpen welke app wat doet | [1 · Hoe de koppeling werkt](#1-hoe-de-koppeling-werkt) |
| De apps installeren | [2 · De apps installeren](#2-de-apps-installeren) |
| Je account koppelen | [3 · Je MyParcel-account koppelen](#3-je-myparcel-account-koppelen) |
| Het standaard pakkettype, opties en verzekering instellen | [4 · Standaard zendinginstellingen](#4-standaard-zendinginstellingen) |
| Bezorgdagen, tijdvakken en afhaalpunten aanbieden | [5 · Bezorgopties in de checkout](#5-bezorgopties-in-de-checkout) |
| Controleren wat je klanten zien | [7 · De checkout voor je klant](#7-de-checkout-voor-je-klant) |
| Labels printen voor één order of voor veel orders | [8 · Dagelijks gebruik](#8-dagelijks-gebruik) |
| Er werkt iets niet | [9 · Er werkt iets niet, diagnose](#9-er-werkt-iets-niet-diagnose) |
| Antwoord op een veelgestelde vraag | [10 · FAQ](#10-faq) |

## 1 · Hoe de koppeling werkt
CCV Shop biedt drie MyParcel-apps aan in de App Store, allemaal in de categorie *Verzendingen*:

| App | Wat hij doet |
| --- | --- |
| **MyParcel Verzendservice** | Meldt orders aan bij MyParcel NL en downloadt de labels binnen je CCV Shop-orderbeheer. |
| **MyParcel België Verzendservice** | Hetzelfde, voor een MyParcel BE-account. |
| **MyParcel Bezorgopties** | Een uitbreiding die bezorgdagen, tijdvakken en afhaalpunten in de checkout toont. Hij heeft een van de twee apps hierboven nodig. |

Je hoeft niet in te loggen bij MyParcel om een label te maken: je meldt de order aan vanuit CCV Shop, het label downloadt direct en de Track & Trace-code wordt in de order gezet, zodat je die met een statusupdate naar je klant kunt sturen.

::: warning Gebouwd door CCV Shop
CCV Shop ontwikkelt en ondersteunt deze apps. Voor vragen over de apps of je CCV Shop-backoffice neem je contact op met de support van CCV Shop. Voor je MyParcel-account, contracten en vervoerders neem je contact op met MyParcel.
:::

## 2 · De apps installeren
1. Open in je CCV Shop-backoffice **App Store** in het menu links.
2. Zoek op *MyParcel* of open de categorie **Verzendingen**.
3. Installeer **MyParcel Verzendservice**, of **MyParcel België Verzendservice** voor een MyParcel BE-account.
4. Wil je bezorgopties in de checkout? Installeer dan ook **MyParcel Bezorgopties**. Die installeert pas als een van de twee verzendapps al aanwezig is.

Je geïnstalleerde apps staan onder **App Store → Geïnstalleerde CCV Shop apps**.

## 3 · Je MyParcel-account koppelen
Alle instellingen van beide apps staan op één pagina: *Startpunt → Mijn webshop → Instellingen → Verzendkosten & logistiek → MyParcel verzendservice*. Bij de Belgische app heet de pagina *MyParcel België verzendservice*.

![Het bovenste deel van de MyParcel-instellingenpagina in CCV Shop, met het veld MyParcel API key en het standaard pakkettype.](../../platforms/images/ccv/01-settings-account.png)

1. Kopieer je API-key uit [backoffice.myparcel.nl](https://backoffice.myparcel.nl) onder *Shopinstellingen → Integratie*.
2. Plak hem in **MyParcel API key**. Let op spaties voor of na de key.
3. Klik rechtsonder op **Opslaan**. **Toepassen** slaat ook op.

::: warning Eén key, één shop
De key koppelt deze CCV Shop aan één shop in je MyParcel-account. Alle labels en facturen komen in die shop terecht.
:::

## 4 · Standaard zendinginstellingen
Deze instellingen zijn de standaard voor elke order die je aanmeldt. Je kunt ze per order aanpassen op het tabblad *Koppelingen* voordat je de order aanmeldt, zie [§8](#8-dagelijks-gebruik).

### Soort zending en extra opties
**Soort zending** is het pakkettype waarmee elke nieuwe zending begint.

| Optie | Wanneer gebruik je het |
| --- | --- |
| **Pakket** | De standaardkeuze voor de meeste orders. |
| **Pakket extra groot** | Pakketten die groter zijn dan het standaardformaat. |
| **Klein pakket** | Kleine pakketten, zie je MyParcel-tarieven voor de maximale afmetingen. |
| **Brievenbuspakje** | Kleine, platte artikelen die door de brievenbus passen. |
| **Ongefrankeerd label** | Een label zonder frankering. |

![De schakelaars voor handtekening voor ontvangst, retour bij geen gehoor en alleen huisadres.](../../platforms/images/ccv/02-settings-shipment-options.png)

Elke schakelaar hieronder voegt een optie toe aan elk pakket. Opties kunnen extra kosten, controleer je MyParcel-tarieven.

| Instelling | Wat het doet | Wanneer zet je het aan |
| --- | --- | --- |
| **Handtekening voor ontvangst** | De ontvanger tekent voor het pakket. | Waardevolle orders, of als je een bewijs van aflevering nodig hebt. |
| **Retour bij geen gehoor** | Is er niemand thuis, dan komt het pakket terug naar jou in plaats van naar een afhaalpunt te gaan. | Orders die nergens anders mogen belanden dan bij de ontvanger. |
| **Alléén huisadres** | Het pakket wordt alleen op het adres van de ontvanger bezorgd, nooit bij de buren. Zet het uit als een buurman het pakket mag aannemen. | Orders die op het adres zelf overhandigd moeten worden. |

Deze opties gelden voor pakketten. Bij een brievenbuspakje of een ongefrankeerd label zijn ze verborgen op het orderscherm.

### Verzekering en labelformaat
![De instellingen voor verzekering en labelformaat.](../../platforms/images/ccv/03-settings-insurance-label.png)

- **Verzekerd verzenden**. Kies **Nee**, een vast bedrag van *Verzekerd tot 100 euro* tot *Verzekerd tot 5.000 euro*, of **Gehele order bedrag**. Bij een vast bedrag wordt het gunstigste verzekerde bedrag voor je gekozen. Het bedrag gaat over de inkoopwaarde van de goederen.
- **Label formaat**. **A6** voor een labelprinter, **A4** voor een gewone printer. Bij A4 kies je per order waar op het vel het label wordt geprint.

::: warning Controleer het verzekerde bedrag
De app kan het verzekerde bedrag niet garanderen. Controleer het op elk label dat je maakt, vooral als je het volledige orderbedrag verzekert.
:::

### Leeftijdscheck
![De schakelaar voor de leeftijdscheck, gevolgd door het begin van het onderdeel bezorgopties met de vervoerders.](../../platforms/images/ccv/04-settings-age-carriers.png)

Met **Leeftijdscheck 18+** controleert de vervoerder bij aflevering de leeftijd van de ontvanger. Zet het aan als je alcohol, tabak of andere producten met een leeftijdsgrens verkoopt. Een leeftijdscheck kun je niet combineren met ochtend- of avondlevering, en hij gaat altijd samen met handtekening voor ontvangst en alleen huisadres.

## 5 · Bezorgopties in de checkout
De instellingen onder de blauwe infobalk horen bij de app **MyParcel Bezorgopties**. Ze bepalen wat je klanten in de checkout kunnen kiezen. Zonder die app hebben deze instellingen geen effect.

### Vervoerders
Vink onder **Vervoerders** de vervoerders aan waarvan je de bezorgopties wilt tonen: **PostNL**, **DHL For You**, **DPD**, **UPS**, **DHL Parcel Connect** en **DHL Europlus**. Vink alleen vervoerders aan die actief zijn op je MyParcel-account. Wil je geen bezorgopties tonen? Laat dan alle vervoerders uitgevinkt.

UPS wordt ondersteund met UPS Standard, niet met UPS Express Saver. DHL Europlus biedt geen afhaalpunten.

### Verwerkingstijd en laatste bestelmoment
![De verwerkingstijd en de laatste bestelmogelijkheid.](../../platforms/images/ccv/05-settings-processing-cutoff.png)

- **Verwerkingstijd**. Het aantal dagen, 0 tot 14, dat je nodig hebt voordat een order aan de vervoerder wordt overgedragen. Gebruik het als je nog iets met producten moet doen, bijvoorbeeld een t-shirt bedrukken.
- **Laatste bestelmogelijkheid**. Het laatste tijdstip waarop een klant kan bestellen om het pakket op de getoonde bezorgdag te krijgen.

### Inleverdagen en levering op dezelfde dag
![De inleverdagen en de instelling voor levering op dezelfde dag voor DHL For You.](../../platforms/images/ccv/06-settings-dropoff-sameday.png)

- **Inleverdagen**. Vink de dagen aan waarop je pakketten aan de vervoerder overdraagt. De bezorgdagen die je klanten zien worden op basis van deze dagen berekend. Is er geen dag aangevinkt, dan biedt de checkout alleen standaardbezorging zonder datum.
- **Zelfde dag levering**. Alleen voor DHL For You, en alleen zichtbaar als DHL For You is aangevinkt. Werkt alleen met een verwerkingstijd van 0 dagen en een laatste bestelmoment uiterlijk 09:30.

### Ochtend- en avondlevering
![Ochtend- en avondlevering, elk met een schakelaar en een veld voor de meerprijs.](../../platforms/images/ccv/07-settings-morning-evening.png)

| Instelling | Wat je klant krijgt |
| --- | --- |
| **Ochtendlevering** | Bezorging voor 12:00 in plaats van gedurende de hele dag, maandag tot en met vrijdag. Alleen PostNL. |
| **Avondlevering** | Bezorging tussen 18:00 en 22:00, maandag tot en met vrijdag. Alleen PostNL. |

Zodra je een optie aanzet, verschijnt een veld **Meer- of minderprijs**. Het bedrag wordt opgeteld bij de verzendkosten die de klant voor die optie betaalt, of er met een minteken van afgetrokken. Laat het op 0,00 staan om de optie zonder meerprijs aan te bieden.

### Maandaglevering en alleen huisadres
![Maandaglevering en de optie alleen huisadres voor klanten.](../../platforms/images/ccv/08-settings-monday-homeonly.png)

- **Maandaglevering**. Bezorging op maandag, alleen PostNL. Alleen zichtbaar als zaterdag is aangevinkt onder *Inleverdagen* en het laatste bestelmoment uiterlijk 15:00 is.
- **Alleen leveren aan huisadres**. Je klant kan kiezen voor alleen huisadres. Alleen PostNL en DHL For You.

### Handtekening en afhaalpunten
![Handtekening voor ontvangst en afhalen op locatie, als opties voor je klanten.](../../platforms/images/ccv/09-settings-signature-pickup.png)

- **Handtekening voor ontvangst**. Je klant kan vragen om een handtekening bij aflevering. Alleen PostNL en DHL For You.
- **Afhalen op locatie**. Toont de afhaalpunten van je aangevinkte vervoerders, zodat je klant het pakket kan ophalen bij een winkel of pakketautomaat in de buurt.

Elk van deze opties heeft een eigen veld **Meer- of minderprijs** zodra je hem aanzet.

::: tip Niet hetzelfde als de standaardinstellingen in §4
De opties in §4 zijn wat *jij* aan elke zending toevoegt. De opties hier zijn wat je *klant* in de checkout kan kiezen. De keuze van een klant wordt overgenomen in de order.
:::

Klik op **Opslaan** als je klaar bent.

## 6 · Productinstellingen
Deze apps voegen geen opties op productniveau toe. Al het verzendgedrag regel je via de instellingenpagina en, per order, via het tabblad *Koppelingen*.

## 7 · De checkout voor je klant
Met **MyParcel Bezorgopties** geïnstalleerd kiezen je klanten in de checkout onder *Afleveropties* voor **MyParcel**. Zodra ze hun postcode en huisnummer hebben ingevuld, verschijnen de bezorgopties.

<p><img src="../../platforms/images/ccv/10-checkout-delivery.png" alt="De checkout met het tabblad Bezorgen open: twee bezorgdagen, tijdvakken van PostNL en DHL For You, en de opties voor handtekening en alleen huisadres." width="376"></p>

Onder **Bezorgen** kiest je klant:

- **Een bezorgdag.** Met de pijltjes zie je latere dagen.
- **Een vervoerder en tijdvak.** Per aangevinkte vervoerder de beschikbare tijdvakken voor die dag. Een ochtendvak verschijnt als ochtendlevering aanstaat.
- **Extra opties.** De opties die je in [§5](#5-bezorgopties-in-de-checkout) hebt aangezet, zoals *Handtekening voor ontvangst* en *Alleen bezorgen aan huisadres*.

<p><img src="../../platforms/images/ccv/11-checkout-pickup.png" alt="Het tabblad Afhalen, met een lijst van afhaalpunten per vervoerder, hun afstand en openingstijden." width="376"></p>

Onder **Afhalen** kiest je klant een afhaalpunt uit een **Lijst** of op een **Kaart**, gesorteerd op afstand en gegroepeerd per vervoerder, met de openingstijden. Afhalen heeft een label *Milieuvriendelijk*.

<p><img src="../../platforms/images/ccv/12-checkout-summary.png" alt="De checkout nadat er een keuze is gemaakt: de gewenste bezorgdatum, tijd en vervoerder, met een knop om die te wijzigen." width="378"></p>

Na de keuze toont de checkout een samenvatting met de gewenste bezorgdatum, tijd en vervoerder. Met **Wijzig afleveroptie** open je de keuzes opnieuw.

In je orderbeheer verschijnt de gekozen bezorgdatum als notitie onder *Verzending* in de order, en die staat al geselecteerd als **Bezorgdatum** wanneer je de order aanmeldt.

## 8 · Dagelijks gebruik
Je kunt één order tegelijk aanmelden vanuit de order zelf, of veel orders tegelijk vanuit het orderoverzicht.

### Eén order
1. Ga naar **Mijn orders → Orderbeheer** en open de order.
2. Open het tabblad **Koppelingen**. Daar vind je het onderdeel *Order exporteren naar MyParcel*.
3. Controleer de gegevens. Ze zijn ingevuld met je standaardinstellingen uit [§4](#4-standaard-zendinginstellingen) en met de keuze van de klant in de checkout. Je kunt ze voor alleen deze order aanpassen.
4. Klik op **Meld de order aan bij MyParcel en download etiket** en bevestig met **Order exporteren**.

![Het onderdeel Order exporteren naar MyParcel in een order, met het pakkettype, de opties, de verzekering, het labelformaat, de leeftijdscheck, de vervoerder en de bezorgdatum voor deze order.](../../platforms/images/ccv/15-order-export.png)

| Veld | Wat het betekent voor deze order |
| --- | --- |
| **Soort zending** | Het pakkettype. Pakketopties en verzekering zie je alleen bij pakketten. |
| **Handtekening voor ontvangst**, **Retour bij geen gehoor**, **Alléén huisadres** | *Ja* of *Nee* per optie. |
| **Verzekerd verzenden** | Het verzekerde bedrag voor dit pakket. |
| **Label formaat** | A6 of A4. Bij A4 kies je met **Label afdruk locatie** de positie op het vel: *Links boven*, *Rechts boven*, *Links onder* of *Rechts onder*. |
| **Leeftijdscheck 18+** | Leeftijdscheck voor dit pakket. |
| **Vervoerders** | De vervoerder voor deze zending. |
| **Bezorgdatum** | De bezorgdatum, vooraf geselecteerd op basis van de keuze van de klant in de checkout. |

Het label downloadt direct als pdf en een groene melding *Succes* bevestigt dat de order is verstuurd. De Track & Trace-code wordt aan de order toegevoegd, onder *Verzending* op het tabblad *Orderoverzicht*, met een link om het pakket te volgen.

![Een aangemelde order: de succesmelding, een melding over opnieuw aanmelden, en de knoppen om het label te downloaden of de order opnieuw aan te melden.](../../platforms/images/ccv/16-order-registered.png)

Zodra een order is aangemeld, toont het onderdeel twee knoppen:

- **Download etiket voor verzending** downloadt hetzelfde label opnieuw, bijvoorbeeld als de printer vastliep.
- **Meld de order opnieuw aan en download een nieuw etiket** maakt een nieuwe zending aan, bijvoorbeeld nadat je het pakkettype hebt gewijzigd.

De tabel *Historie* onder de onderdelen legt elke actie vast met de datum en tijd, de actie, de koppeling en het resultaat.

![De tabel Historie met een geslaagde aanmelding en een eerdere poging die mislukte.](../../platforms/images/ccv/17-order-history.png)

::: warning Een order opnieuw aanmelden
Opnieuw aanmelden maakt een **tweede** zending in MyParcel aan, de eerste wordt niet verwijderd. CCV Shop waarschuwt je hier op het scherm voor. Verwijder de oude zending in je MyParcel-backoffice om je overzicht schoon te houden. Heb je alleen hetzelfde label opnieuw nodig? Gebruik dan **Download etiket voor verzending**.
:::

### Veel orders tegelijk
1. Vink in **Orderbeheer** de orders aan die je wilt verzenden.
2. Open **Groepsactie selecteren** en kies **MyParcel etiketten** onder *Verzendservice*. Met een MyParcel BE-account kies je **MyParcel België etiketten**.

![Het menu voor groepsacties in het orderbeheer, met MyParcel etiketten en MyParcel België etiketten onder Verzendservice.](../../platforms/images/ccv/13-orders-group-action.png)

3. Kies in het venster dat opent de vervoerder onder **Vervoerders** en, voor A4-vellen, de **Label afdruk locatie**.
4. Klik op **Toepassen** om de geselecteerde orders aan te melden en hun labels te downloaden.

![Het venster MyParcel etiketten met de vervoerder en de printpositie van het label.](../../platforms/images/ccv/14-orders-bulk-popup.png)

Elke order in de batch gebruikt je standaardinstellingen uit [§4](#4-standaard-zendinginstellingen). Heeft één order iets anders nodig? Meld die dan los aan.

## 9 · Er werkt iets niet, diagnose
Loop deze tabel van boven naar beneden door, de meeste problemen zijn binnen een paar minuten opgelost.

| Symptoom | Wat je controleert |
| --- | --- |
| **"Er is een fout opgetreden bij het verzenden van de order naar MyParcel"** en *Fout opgetreden* in de historie | Klopt de **MyParcel API key**, zonder spaties? Kopieer hem opnieuw uit de backoffice en sla op ([§3](#3-je-myparcel-account-koppelen)). Is de gekozen vervoerder actief op je MyParcel-account? |
| **Geen bezorgopties in de checkout** | Is **MyParcel Bezorgopties** geïnstalleerd en is er minstens één vervoerder aangevinkt onder *Vervoerders* ([§5](#5-bezorgopties-in-de-checkout))? Heeft de klant een postcode en huisnummer ingevuld? Heeft de klant *MyParcel* gekozen onder *Afleveropties*? |
| **Alleen standaardbezorging, geen dagen of tijdvakken** | Vink je inleverdagen aan onder *Inleverdagen* ([§5](#5-bezorgopties-in-de-checkout)). |
| **Ochtend-, avond- of maandaglevering verschijnt niet** | Deze zijn alleen voor PostNL. Maandaglevering heeft daarnaast zaterdag als inleverdag nodig en een laatste bestelmoment van 15:00 of eerder. |
| **Levering op dezelfde dag verschijnt niet** | Alleen DHL For You, met een verwerkingstijd van 0 dagen en een laatste bestelmoment van 09:30 of eerder. |
| **De opties of afhaalpunten van een vervoerder ontbreken** | Is de vervoerder aangevinkt en actief op je MyParcel-account? DHL Europlus heeft geen afhaalpunten. |
| **Twee zendingen in MyParcel voor één order** | De order is twee keer aangemeld. Verwijder de zending die je niet nodig hebt in de MyParcel-backoffice ([§8](#8-dagelijks-gebruik)). |
| **Verkeerd verzekerd bedrag op het label** | Controleer **Verzekerd verzenden** per order voor het aanmelden en controleer het label daarna ([§4](#verzekering-en-labelformaat)). |

## 10 · FAQ

### Bij wie kan ik terecht met een vraag?
Voor de apps en je CCV Shop-backoffice: de support van CCV Shop. Voor je MyParcel-account, contract, vervoerders en facturen: MyParcel ([Bronnen & support](#bronnen-support)).

### Waar vind ik mijn API-key?
In [backoffice.myparcel.nl](https://backoffice.myparcel.nl) onder *Shopinstellingen → Integratie*.

### Heb ik MyParcel Bezorgopties nodig?
Alleen als je wilt dat je klanten een bezorgdag, tijdvak of afhaalpunt kunnen kiezen. Om labels te printen is MyParcel Verzendservice genoeg.

### Welke vervoerders kan ik gebruiken?
Voor labels de vervoerders onder *Vervoerders* in de order: PostNL, DHL For You, DPD, UPS, DHL Parcel Connect en DHL Europlus. Alleen vervoerders die actief zijn op je MyParcel-account accepteren zendingen.

### Kan ik een leeftijdscheck gebruiken met avond- of ochtendlevering?
Nee. Een leeftijdscheck gaat altijd samen met handtekening voor ontvangst en alleen huisadres, en is niet te combineren met ochtend- of avondlevering.

### Ik verzend vanuit België, welke app gebruik ik?
**MyParcel België Verzendservice**, samen met een MyParcel BE-account. MyParcel Bezorgopties werkt met zowel de Nederlandse als de Belgische app.

### Kan ik verzendopties per product instellen?
Nee. Stel je standaardinstellingen in op de instellingenpagina en pas een losse order aan op het tabblad *Koppelingen*.

### Wanneer betaal ik?
MyParcel factureert een zending pas zodra die daadwerkelijk aan de vervoerder is overgedragen.

## Bronnen & support
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), account, API-key, vervoerders en facturatie.
- [CCV Shop ↗](https://www.ccvshop.nl/), support voor de apps en je CCV Shop-backoffice: **+31 (0)88 990 7700** · [support@ccvshop.nl](mailto:support@ccvshop.nl).
- [Contact MyParcel support](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Deze handleiding beschrijft de MyParcel-apps voor CCV Shop zoals ze werken in oktober 2026. CCV Shop ontwikkelt de apps en kan schermen zonder aankondiging wijzigen.
