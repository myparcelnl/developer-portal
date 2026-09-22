---
title: bol
description: "Koppel je bol-verkoopaccount aan MyParcel via een Sales channel in de MyParcel-backoffice en importeer je bol-orders, handmatig of automatisch. Met de nieuwe bol-autorisatie die vanaf 22 september 2026 geldt voor MyParcel-klanten, waarbij je per API-onderdeel en per recht toegang geeft, de onderdelen die MyParcel nodig heeft, vernieuwen voor de vervaldatum, de dagelijkse workflow en een diagnose-tabel."
---

::: tip In het kort
bol koppel je aan MyParcel via een **Sales channel** die je aanmaakt in de MyParcel-backoffice, je hoeft niets te installeren. Je autoriseert MyParcel één keer in je bol-verkoopaccount. Daarna importeert MyParcel je openstaande bol-orders, koppelt de Track & Trace-barcode en de vervoerder terug en zet de bol-order op verzonden. Vanaf **22 september 2026** geef je geen toegang meer tot de volledige bol API: je autoriseert **per API-onderdeel en per recht**. De onderdelen die MyParcel gebruikt staan voor je aangevinkt, laat die voorselectie ongewijzigd.
:::

## Snelstart, je eerste bol-orders in 10 minuten
Genoeg om bol vandaag aan MyParcel te koppelen. Voor de details, zie [Wat zoek je?](#wat-zoek-je) hieronder.

1. **Account.** Heb je nog geen MyParcel-account? Maak er een aan via [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Sales channel toevoegen.** Ga in [backoffice.myparcel.nl](https://backoffice.myparcel.nl) naar *Shopinstellingen → Sales Channels* → **Add sales channel** → kies **bol** → vul een naam in → **Save**.
3. **Start de autorisatie vanuit MyParcel.** Open de nieuwe channel en start de autorisatie daar. Start nooit vanuit bol.
4. **Log in bij bol** op de pagina waar je naartoe wordt gestuurd en selecteer het bol-account dat je wilt koppelen.
5. **Laat de voorselectie staan.** Controleer de voorgeselecteerde API-onderdelen en hun rechten, wijzig niets en klik op **Toestaan**.
6. **Kies hoe je importeert.** Stel in MyParcel in of je handmatig of automatisch importeert en sla op.

::: tip Klaar als je dit ziet
- De channel vraagt niet meer om autorisatie en toont het gekoppelde bol-account.
- **MyParcel** staat in je bol-verkoopaccount onder *Authorized parties*, met een vervaldatum.
- De knop **Importeer externe orders** verschijnt in je MyParcel-overzicht *Zendingen*.
:::

## Wat zoek je?
| Wat wil je doen? | Ga naar |
| --- | --- |
| Begrijpen hoe de koppeling werkt | [1 · Hoe de koppeling werkt](#1-hoe-de-koppeling-werkt) |
| Weten wat er verandert in de bol-autorisatie | [2 · Wat er verandert in de bol-autorisatie](#2-wat-er-verandert-in-de-bol-autorisatie) |
| De sales channel aanmaken | [3 · De bol-sales channel aanmaken](#3-de-bol-sales-channel-aanmaken) |
| De koppeling autoriseren | [4 · De koppeling autoriseren stap voor stap](#4-de-koppeling-autoriseren-stap-voor-stap) |
| Opzoeken welke onderdelen aan moeten staan | [5 · Welke API-onderdelen MyParcel nodig heeft](#5-welke-api-onderdelen-myparcel-nodig-heeft) |
| Je autorisatie controleren of vernieuwen | [6 · Je autorisatie controleren en vernieuwen](#6-je-autorisatie-controleren-en-vernieuwen) |
| Handmatig of automatisch importeren | [7 · Importinstellingen](#7-importinstellingen) |
| Het pakkettype van geïmporteerde orders instellen | [8 · Verzendregels](#8-verzendregels) |
| Bestellingen dagelijks verwerken | [9 · Dagelijks gebruik](#9-dagelijks-gebruik) |
| Er werkt iets niet | [10 · Er werkt iets niet, diagnose](#10-er-werkt-iets-niet-diagnose) |
| Antwoord op een veelgestelde vraag | [11 · FAQ](#11-faq) |

## 1 · Hoe de koppeling werkt
bol is een marktplaats en geen webshopplatform, dus er is geen plugin of app. Je registreert je bol-verkoopaccount één keer als **Sales channel** in de MyParcel-backoffice en autoriseert MyParcel in je bol-account. Vanaf dan praat MyParcel namens jou met de **bol Retailer API**.

MyParcel haalt je openstaande bol-orders op en importeert ze als conceptzendingen. Je maakt de labels in je MyParcel-backoffice. MyParcel koppelt de Track & Trace-barcode en de vervoerder terug naar bol en zet de order op verzonden.

::: warning Zet orders niet zelf op verzonden in bol
MyParcel kan alleen een order bijwerken die nog openstaat. Heb je de zending in bol al handmatig op verzonden gezet, dan worden de barcode en de vervoerder niet teruggekoppeld.
:::

## 2 · Wat er verandert in de bol-autorisatie
bol heeft het autorisatieproces gewijzigd. Voor MyParcel-klanten geldt dit vanaf **22 september 2026**.

- **Je autoriseert per onderdeel, niet per API.** Je geeft geen toegang meer tot de volledige bol API in één keer, maar per API-onderdeel (resource) en per recht: lezen of beheren.
- **Het geldt voor nieuwe en vernieuwde koppelingen.** Elke nieuwe SSO-koppeling en elke SSO-koppeling die je vernieuwt gebruikt het nieuwe scherm. Koppelingen van voor deze datum blijven werken tot hun vervaldatum.
- **Je ziet alleen wat MyParcel gebruikt.** bol verdeelt de API over 5 hoofdscopes: *Assortimentbeheer*, *Logistiek*, *Inzichten*, *Financiën* en *Subscriptions*. In het scherm zie je alleen de onderdelen die je integratiepartner echt gebruikt, en die staan voor je aangevinkt. Laat die voorselectie ongewijzigd.

::: warning Uitvinken breekt de koppeling
Vink je een onderdeel uit dat MyParcel nodig heeft, dan werkt de koppeling niet meer. bol weigert elke aanroep waarvoor het recht ontbreekt, met een *403 Forbidden*. Rechten achteraf bijzetten kan niet: je moet de autorisatie dan volledig opnieuw doorlopen.
:::

Koppelingen via Client Credentials vallen hier nog buiten. bol verwacht deze wijziging in Q4 2026 ook daarvoor door te voeren en kondigt dat aan op het partnerplatform.

## 3 · De bol-sales channel aanmaken
1. Log in op [backoffice.myparcel.nl](https://backoffice.myparcel.nl) en ga naar **Shopinstellingen → Sales Channels**.
2. Klik rechtsboven op **Add sales channel**.
3. Vul een **Name** in waaraan je de channel herkent, bijvoorbeeld *Mijn bol-shop*.
4. Kies onder **Type of sales channel** voor **bol**.
5. Klik op **Save**. De channel is aangemaakt en moet nog geautoriseerd worden, zie [§4](#4-de-koppeling-autoriseren-stap-voor-stap).

::: tip Eén bol-account per shop
Je koppelt één bol-account aan één MyParcel-shop. Verkoop je via meerdere bol-accounts? Maak dan per account een extra MyParcel-shop aan.
:::

## 4 · De koppeling autoriseren stap voor stap
Doorloop deze 6 stappen om een nieuwe koppeling te maken of een bestaande te vernieuwen.

1. **Start vanuit MyParcel.** Open de bol-sales channel in je MyParcel-backoffice en start de autorisatie daar. Start niet vanuit bol, MyParcel moet de vragende partij zijn.
2. **Log in bij bol.** MyParcel stuurt je naar de inlogpagina van bol. Log in met het account dat je bol-verkoopaccount beheert.
3. **Selecteer het juiste bol-account.** Kies onder *Kies de retailer die je wilt koppelen* het account dat je aan MyParcel wilt koppelen.
4. **Controleer de voorgeselecteerde onderdelen.** De onderdelen die MyParcel gebruikt staan voor je aangevinkt. Twijfel je? Vink dan niets extra aan en niets uit.

![Het autorisatiescherm van bol: kies de retailer en zie daaronder de groepen Assortimentbeheer en Orders en logistiek met hun rechten.](../../platforms/images/bol/01-bol-authorisation-screen.png)

5. **Controleer de rechten per onderdeel.** Klik op het pijltje voor een groep om die uit te klappen en de losse onderdelen en hun rechten te zien: lezen, alleen gegevens ophalen, of beheren, gegevens ook aanmaken, aanpassen en verwijderen. Vergelijk ze met [§5](#5-welke-api-onderdelen-myparcel-nodig-heeft). Achter elk onderdeel legt het informatie-icoon uit waar het over gaat.

![Hetzelfde scherm met beide groepen uitgeklapt: Aanbod, Productcontent, Orders, Transportinformatie, Verzendlabels en Zendingen.](../../platforms/images/bol/02-bol-authorisation-resources.png)

6. **Sla op en controleer.** Klik op **Toestaan** om de autorisatie op te slaan. Je komt terug in MyParcel. Importeer een order om te controleren of de koppeling werkt, zie [§9](#9-dagelijks-gebruik).

## 5 · Welke API-onderdelen MyParcel nodig heeft
Dit zijn de onderdelen van de bol Retailer API die de MyParcel-koppeling gebruikt. Alle overige onderdelen staan standaard uit en zijn niet nodig.

| API-onderdeel | In bol te zien als | Rechten |
| --- | --- | --- |
| Assortment Management → Offers | *Assortimentbeheer → Aanbod* | Read en Read and Write |
| Assortment Management → Product Content | *Assortimentbeheer → Productcontent* | Read |
| Orders and logistics → Orders | *Orders en logistiek → Orders* | Read en Read and Write |
| Orders and logistics → Shipments | *Orders en logistiek → Zendingen* | Read en Read and Write |
| Orders and logistics → Shipping labels | *Orders en logistiek → Verzendlabels* | Read en Read and Write |
| Orders and logistics → Transport Information | *Orders en logistiek → Transportinformatie* | Read and Write |

Welke namen bol toont hangt af van de taal van je bol-account. De Engelse namen zijn de namen die bol in de documentatie van de Retailer API gebruikt.

## 6 · Je autorisatie controleren en vernieuwen
Elke autorisatie heeft een vervaldatum. Je controleert beide in je bol-verkoopaccount via **Instellingen → Diensten → API-instellingen → Authorized parties**. MyParcel staat daar met de vervaldatum zodra de koppeling actief is.

- **Vernieuw op tijd.** Vernieuw binnen 2 maanden voor de vervaldatum, dan stopt de koppeling nooit op een verzenddag.
- **Vernieuwen gaat hetzelfde.** Start vanuit MyParcel en doorloop de 6 stappen uit [§4](#4-de-koppeling-autoriseren-stap-voor-stap). Omdat het een vernieuwing is, krijg je het nieuwe autorisatiescherm met de onderdelen en rechten.
- **Bestaande koppelingen blijven werken.** Een koppeling van voor 22 september 2026 loopt door tot de vervaldatum. Vanaf dat moment vernieuw je hem op de nieuwe manier.

## 7 · Importinstellingen
Open de bol-sales channel in je MyParcel-backoffice om te kiezen hoe orders binnenkomen.

- **Handmatig**, je haalt je openstaande bol-orders zelf op, zie [§9](#9-dagelijks-gebruik).
- **Automatisch**, MyParcel haalt elke 5 minuten de nieuwe openstaande orders op.

::: tip Vergeet niet op te slaan
Klik op **Save** nadat je de importinstelling hebt aangepast, anders wordt de wijziging niet toegepast.
:::

Ook met automatisch importeren aan kun je altijd handmatig orders blijven ophalen.

## 8 · Verzendregels
Geïmporteerde bol-orders volgen de verzendregels van je MyParcel-account, stel die dus in voor je eerste import. Ga naar **Shopinstellingen → Zendingen → Verzendregels** en kies een standaard pakkettype plus eventuele verzendopties.

Bij elke import worden deze regels gebruikt. Een pakketvoorkeur per order meegeven tijdens het importeren kan niet, een zending achteraf aanpassen wel, zie [§9](#9-dagelijks-gebruik).

## 9 · Dagelijks gebruik
Zodra de channel geautoriseerd is, verschijnt de knop **Importeer externe orders** in je overzicht *Zendingen*.

1. Klik op **Importeer externe orders** om je openstaande bol-orders te zien. Heb je meerdere externe koppelingen? Schakel dan tussen de tabbladen.
2. Importeer orders afzonderlijk of in bulk.
3. Geïmporteerde orders komen binnen als **conceptzending**. Klik op het potloodje achter een zending om die te bewerken.
4. Maak de labels aan en geef de pakketten af bij de vervoerder. MyParcel koppelt de barcode en de vervoerder terug naar bol en zet de order op verzonden.

::: warning Pas aan in MyParcel, niet in bol
Pas een order niet aan in het bol-portaal voordat je hem importeert. De ordergegevens komen dan mogelijk verkeerd binnen en de barcode wordt bij het verwerken niet teruggekoppeld naar bol.
:::

Je betaalt pas zodra een zending daadwerkelijk aan de vervoerder is overgedragen.

## 10 · Er werkt iets niet, diagnose
Loop deze tabel van boven naar beneden door, de meeste problemen zijn binnen een paar minuten opgelost.

| Symptoom | Wat je controleert |
| --- | --- |
| **De channel blijft om autorisatie vragen** | De autorisatie is niet afgerond. Start hem opnieuw vanuit MyParcel en sluit af met **Toestaan** ([§4](#4-de-koppeling-autoriseren-stap-voor-stap)). |
| **Er worden geen orders geïmporteerd** | Staan er openstaande orders in bol? Controleer of de koppeling nog onder *Authorized parties* in je bol-account staat en niet is verlopen ([§6](#6-je-autorisatie-controleren-en-vernieuwen)). |
| **Orders komen binnen, maar de barcode wordt niet teruggekoppeld** | De order is in bol handmatig op verzonden gezet. MyParcel kan alleen orders bijwerken die nog openstaan ([§1](#1-hoe-de-koppeling-werkt)). |
| **Een deel van de koppeling werkt niet meer** | Er is tijdens de autorisatie een onderdeel uitgevinkt, bol weigert die aanroepen met een *403 Forbidden*. Vergelijk je rechten met [§5](#5-welke-api-onderdelen-myparcel-nodig-heeft) en doorloop de autorisatie opnieuw, bijzetten achteraf kan niet. |
| **De koppeling stopte op een vaste datum** | De autorisatie is verlopen. Vernieuw hem en controleer de vervaldatum onder *Authorized parties* ([§6](#6-je-autorisatie-controleren-en-vernieuwen)). |
| **Je hebt het verkeerde bol-account gekozen** | Doorloop de autorisatie opnieuw vanuit MyParcel en selecteer bij stap 3 de juiste retailer ([§4](#4-de-koppeling-autoriseren-stap-voor-stap)). |
| **Verkeerd pakkettype op geïmporteerde orders** | Geïmporteerde orders volgen je verzendregels. Pas ze aan in *Shopinstellingen → Zendingen → Verzendregels* ([§8](#8-verzendregels)), of wijzig de zending voor je hem verwerkt. |

## 11 · FAQ

### Moet ik de autorisatie nu meteen opnieuw doen?
Nee. Een koppeling van voor 22 september 2026 blijft werken tot de vervaldatum. Je krijgt het nieuwe scherm zodra je na die datum voor het eerst een koppeling maakt of vernieuwt.

### Wat gebeurt er als ik een onderdeel uitvink?
De delen van de koppeling die dat onderdeel nodig hebben werken niet meer. Rechten achteraf bijzetten kan niet, doorloop de autorisatie dus opnieuw vanuit MyParcel en laat de voorselectie staan ([§4](#4-de-koppeling-autoriseren-stap-voor-stap)).

### Geldt dit ook voor Client Credentials?
Nog niet. Koppelingen via Client Credentials vallen hier nog buiten. bol verwacht de wijziging in Q4 2026 ook daarvoor door te voeren en kondigt dat aan op het partnerplatform.

### Waar zie ik welke partijen toegang hebben tot mijn bol-account?
In je bol-verkoopaccount via *Instellingen → Diensten → API-instellingen → Authorized parties*. Daar staat ook de vervaldatum van elke autorisatie ([§6](#6-je-autorisatie-controleren-en-vernieuwen)).

### Kan ik de toestemming weer intrekken?
Ja. Open de bol-sales channel in je MyParcel-backoffice en trek de toestemming daar in. Je kunt MyParcel ook verwijderen onder *Authorized parties* in je bol-account.

### Hoe vaak halen jullie nieuwe orders op?
Met automatisch importeren aan elke 5 minuten. Je kunt daarnaast altijd handmatig orders ophalen ([§7](#7-importinstellingen)).

### Kan ik meerdere bol-accounts koppelen aan MyParcel?
Je koppelt één bol-account aan één MyParcel-shop. Maak een extra shop aan voor een extra bol-account.

### Koppelen jullie de barcode terug naar bol?
Ja. Nadat het label is aangemaakt, koppelt MyParcel de barcode en de vervoerder terug naar bol en zet de order op verzonden.

### Kan ik voor het importeren een pakketvoorkeur per order meegeven?
Nee. Bij elke import worden je verzendregels gebruikt ([§8](#8-verzendregels)). Pas de zending na het importeren aan als een pakket iets anders nodig heeft.

## Bronnen & support
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), sales channels, verzendregels, account, facturatie.
- [bol partnerplatform ↗](https://partnerplatform.bol.com/nl/intermediair/myparcel/), MyParcel op het partnerplatform van bol.
- [Het vernieuwde autorisatieproces van bol ↗](https://partnerplatform.bol.com/nl/nadp/reboarding-api), het stappenplan van bol zelf voor aanmaken en vernieuwen.
- [Improved API authorization for SSO integrations ↗](https://developers.bol.com/en/news/improved-api-authorization-for-sso-integrations/), de aankondiging voor developers.
- [Contact MyParcel support](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Deze handleiding beschrijft de bol-sales channel in de MyParcel-backoffice en de bol-autorisatie zoals die vanaf 22 september 2026 werkt. Schermen aan de kant van bol kunnen er per accounttaal iets anders uitzien.
