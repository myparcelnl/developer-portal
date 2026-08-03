---
title: OpenCart 4
description: "Van nul naar een verzonden pakket op OpenCart 4, installeer de extensie, koppel je MyParcel-account, importeer je vervoerders en verstuur vandaag nog je eerste label. Met snelstart, settings-naslag, productopties, de dagelijkse orderworkflow en een diagnose-tabel."
---

::: tip In het kort
De MyParcel-extensie verbindt je OpenCart 4-shop met MyParcel. Klanten kiezen in de checkout een bezorgmoment of afhaalpunt, jij exporteert orders en print labels vanuit de OpenCart-admin, en Track & Trace wordt automatisch aangemaakt. Geen code nodig, alles draait vanuit **Extensies** in je admin. De extensie bestaat uit twee onderdelen: een **Verzendmethode** (het checkout-tarief) en een **Module** (alle instellingen, vervoerders en labelverwerking).
:::

::: warning Pre-release
De OpenCart 4-extensie is momenteel pre-release (versie `0.2.0`). Deze vereist **OpenCart 4.1.0.3 of nieuwer** en **PHP 8.2 of nieuwer**. Schermen en veldnamen kunnen tussen releases nog wijzigen.
:::

## Snelstart, je eerste pakket in 15 minuten
Genoeg om vandaag je eerste echte order te versturen. Dieper configureren doe je via [Wat zoek je?](#wat-zoek-je) hieronder.

1. **Haal je API-key op.** Log in op [backoffice.myparcel.com](https://backoffice.myparcel.com), ga naar *Instellingen → API-toegang* en kopieer je API-key.
2. **Installeer de extensie.** Ga in OpenCart naar **Extensies → Installer** en upload het `.ocmod.zip`-pakket. Open daarna **Extensies → Extensies**, installeer de MyParcel **Module** en de MyParcel **Verzendmethode**, en ververs de modifications-cache wanneer daarom wordt gevraagd.
3. **Voer de API-key in.** Open de instellingen van de MyParcel-module, plak je API-key op het tabblad **Algemeen** en klik op **Opslaan**.
4. **Importeer je vervoerders.** Klik op het tabblad **Vervoerders** op **Vervoerderconfiguratie importeren**. Je vervoerders verschijnen met hun beschikbare services.
5. **Verzend een order.** Open **Verkoop → Bestellingen**, klik op de groene exportknop bij een order en daarna op de labelknop om de PDF te downloaden.

::: tip Klaar als je dit ziet
- De status van de MyParcel-module staat op **ingeschakeld** en **API-key testen** bevestigt dat de key werkt
- Je vervoerders staan op het tabblad Vervoerders
- Een geëxporteerde order toont een barcode en een tracking-status **Gereed**
:::

## Wat zoek je?
| Wat wil je doen? | Ga naar |
| --- | --- |
| Voor het eerst opzetten | [Snelstart](#snelstart-je-eerste-pakket-in-15-minuten) |
| De twee plugin-onderdelen begrijpen | [4 · De twee onderdelen uitgelegd](#4-de-twee-onderdelen-uitgelegd) |
| De API-key invoeren of testen | [5 · Instellingen · Algemeen](#5-instellingen-algemeen) |
| Labelformaat en standaard maat/gewicht instellen | [6 · Instellingen · Standaard zendingsgegevens](#6-instellingen-standaard-zendingsgegevens) |
| Vervoerders en services aan- of uitzetten | [7 · Instellingen · Vervoerders](#7-instellingen-vervoerders) |
| Wijzigen wat klanten in de checkout zien | [8 · Instellingen · Checkout](#8-instellingen-checkout) |
| HS-codes voor de douane instellen | [9 · Instellingen · Douane](#9-instellingen-douane) en [10 · Productinstellingen](#10-productinstellingen) |
| Orders exporteren en labels printen | [11 · De bestellingenlijst](#11-de-bestellingenlijst) en [12 · De order-detailpagina](#12-de-order-detailpagina) |
| Zien wat een klant ervaart | [13 · De checkout-ervaring](#13-de-checkout-ervaring) |
| Iets werkt niet | [15 · Iets werkt niet, diagnose](#15-iets-werkt-niet-diagnose) |

## 1 · Je MyParcel-account voorbereiden
Voordat je in OpenCart begint, regel je twee dingen in je MyParcel-backoffice:

1. **Kopieer je API-key.** Log in op [backoffice.myparcel.com](https://backoffice.myparcel.com), ga naar *Instellingen → API-toegang* en kopieer de key. Houd hem privé, hij geeft toegang tot je account.
2. **Activeer je vervoerders.** Zorg er onder *Instellingen → Vervoerders* voor dat de vervoerders waarmee je wilt verzenden actief zijn op je account. Alleen actieve vervoerders kunnen later in de extensie worden geïmporteerd.

## 2 · De extensie installeren
De MyParcel-extensie wordt geleverd als OpenCart-modificatiepakket (`.ocmod.zip`).

1. Download de nieuwste `myparcel.ocmod.zip` via [github.com/myparcelnl/opencart4/releases](https://github.com/myparcelnl/opencart4/releases).
2. Ga in je OpenCart-admin naar **Extensies → Installer** en upload het pakket.
3. Ga naar **Extensies → Extensies** en kies **Modules** in de dropdown *Kies het extensietype*. Zoek **MyParcel** en klik op de groene installatieknop.
4. Kies op dezelfde pagina **Verzendmethoden** in de dropdown. Zoek **MyParcel**, klik op installeren en open daarna de instellingen om het tarief, de geozone en de status in te stellen (zie [4 · De twee onderdelen uitgelegd](#4-de-twee-onderdelen-uitgelegd)).
5. Ververs de modifications-cache wanneer OpenCart daarom vraagt (**Extensies → Modificaties → Verversen**).

![De Extensies-lijst gefilterd op Verzendmethoden, met MyParcel bovenaan geïnstalleerd.](../../platforms/images/opencart/01-extensions-shipping.png)

## 3 · De extensie koppelen (API-key)
Open de MyParcel **Module** (**Extensies → Extensies → Modules → MyParcel**, bewerkknop) en ga naar het tabblad **Algemeen**.

1. Zet **Status** op ingeschakeld.
2. Plak je **API-key**.
3. Laat **Omgeving** op *Productie* staan voor live verzenden. Gebruik *Acceptatie (test)* alleen wanneer je test tegen de MyParcel-testomgeving.
4. Klik op **Opslaan** en klik daarna op **API-key testen** om de verbinding te bevestigen.

![Het tabblad Algemeen met Status, API-key, de knop API-key testen en de omgevingskeuze.](../../platforms/images/opencart/03-general.png)

::: warning Lukt koppelen niet?
De meest voorkomende oorzaken zijn een extra spatie die met de key is meegeplakt, of een key die bij de verkeerde omgeving hoort (een productie-key terwijl Omgeving op Acceptatie staat, of andersom).
:::

## 4 · De twee onderdelen uitgelegd
Anders dan bij een enkele alles-in-één plugin leeft MyParcel voor OpenCart op twee plekken onder **Extensies**. Je gebruikt ze allebei.

- **Verzendmethode** (*Extensies → Extensies → Verzendmethoden → MyParcel*) is wat je klant in de checkout kiest en betaalt. Hier stel je de **Weergavenaam** in die klanten zien, het **Tarief**, de **Belastingklasse**, de **Geozone** waarop hij van toepassing is, de **Status** en de **Sorteervolgorde**.
- **Module** (*Extensies → Extensies → Modules → MyParcel*) is het controlecentrum: API-key, vervoerders, checkout-gedrag, douane en labelinstellingen. Hier ben je het meeste tijd kwijt.

Je springt tussen beide met de knoppen **Verzendinstellingen** en **Module-instellingen** rechtsboven op elk scherm.

![De MyParcel-verzendmethode: Weergavenaam, Tarief, Belastingklasse, Geozone, Status en Sorteervolgorde.](../../platforms/images/opencart/02-shipping-method.png)

## 5 · Instellingen · Algemeen
Op het tabblad **Module → Algemeen**:

| Instelling | Wat het doet |
| --- | --- |
| **Status** | Zet de hele MyParcel-module aan of uit. |
| **API-key** | De key uit je MyParcel-backoffice. Gebruik het oog-icoon om hem te tonen en **API-key testen** om hem te verifiëren. |
| **Omgeving** | *Productie* voor echte zendingen (de standaard), of *Acceptatie (test)* om te testen tegen de MyParcel-testomgeving. |

## 6 · Instellingen · Standaard zendingsgegevens
Deze waarden worden gebruikt wanneer een order geen eigen gegevens meedraagt. Op het tabblad **Standaard zendingsgegevens**:

| Instelling | Wat het doet | Aanbevolen |
| --- | --- | --- |
| **Standaard pakkettype** | Het pakkettype dat wordt gebruikt wanneer een order geen bezorgoptie heeft gekozen in de checkout. | Pakket |
| **Labelformaat** | *A6* print één label per pagina. *A4* plaatst labels op een vel. | A6 |
| **Labelpositie** | Positie op het A4-vel (1 t/m 4). Wordt genegeerd bij A6. | 1 |
| **Terugval-pakketmaat** | Lengte, breedte en hoogte in cm, alleen gebruikt wanneer de producten van de order geen bruikbare afmetingen hebben. Sommige vervoerders (bijvoorbeeld Poste Italiane en InPost) vereisen ze. | Invullen voor vervoerders met pakketkluizen |
| **Terugval-gewicht** | Gewicht in gram, alleen gebruikt wanneer de producten van de order geen gewicht hebben. Laat op 0 staan om een technisch minimum van 1 g te gebruiken. Sommige vervoerders vereisen meer, zoals UPS (minstens 50 g). | Laat op 0 tenzij een vervoerder meer nodig heeft |

![Het tabblad Standaard zendingsgegevens: standaard pakkettype, labelformaat, labelpositie, terugval-maat en terugval-gewicht.](../../platforms/images/opencart/04-shipment-defaults.png)

## 7 · Instellingen · Vervoerders
Het tabblad Vervoerders weerspiegelt de vervoerders die actief zijn op je MyParcel-account.

1. Klik op **Vervoerderconfiguratie importeren** om je vervoerders op te halen. Sla eerst je API-key op, de mogelijkheden worden opgehaald met de opgeslagen key. Het scherm toont hoeveel vervoerders zijn geïmporteerd en wanneer.
2. Elke vervoerder heeft een aan/uit-schakelaar. Zet de vervoerders aan die je wilt aanbieden.
3. Zet per vervoerder de **Services** aan die je wilt, zoals *Standaardbezorging* en *Afhaallocaties*. Standaardbezorging en afhalen staan standaard aan, premium services moet je bewust inschakelen.

![Het tabblad Vervoerders met de knop Vervoerderconfiguratie importeren en service-schakelaars per vervoerder.](../../platforms/images/opencart/05-carriers.png)

::: tip Welke vervoerders verschijnen?
Alleen vervoerders die actief zijn op je MyParcel-account kunnen worden geïmporteerd. Ontbreekt een vervoerder, activeer hem dan eerst in de backoffice en importeer daarna opnieuw.
:::

## 8 · Instellingen · Checkout
Het tabblad Checkout bepaalt de MyParcel-bezorgopties-widget die klanten zien. Op het tabblad **Checkout**:

| Instelling | Wat het doet |
| --- | --- |
| **Bezorgopties** | Toont de MyParcel-bezorgopties-widget in de checkout. Zet dit uit om te verkopen zonder bezorgopties. |
| **Bezorgdatum tonen** | Laat de klant een bezorgdatum kiezen. |
| **Venster bezorgdagen** | Aantal dagen vooruit waarbinnen de klant een bezorgdatum kan kiezen (0 = standaard van de widget). |
| **Aanleververtraging** | Dagen tussen de order en de overdracht aan de vervoerder (0 = geen). Verhoog dit als je extra tijd nodig hebt om in te pakken. |
| **Weergave afhaallocaties** | Toon afhaalpunten als een *Lijst* of een *Kaart*. |
| **Wisselen lijst/kaart toestaan** | Laat de klant zelf wisselen tussen de lijst- en kaartweergave. |
| **Pakketkluizen uitsluiten** | Verbergt geautomatiseerde pakketkluizen uit de afhaalopties. |
| **Compacte weergave** | Een dichtere lay-out voor de widget. |
| **Afhaalkaart in pop-up** | Opent de afhaalkaart in een pop-up in plaats van inline. |

![Het tabblad Checkout met de instellingen voor de bezorgopties-widget.](../../platforms/images/opencart/06-checkout.png)

## 9 · Instellingen · Douane
Nodig wanneer je buiten de EU verzendt. Op het tabblad **Douane**:

| Instelling | Wat het doet |
| --- | --- |
| **Douanevelden op product** | Voegt de velden **HS-code** en **Land van herkomst** toe aan de producteditor voor douanemapping (zie [10 · Productinstellingen](#10-productinstellingen)). |
| **Standaard land van herkomst** | Terugval-land van herkomst dat wordt gebruikt voor douanemapping wanneer een product er geen heeft. |
| **Standaard HS-code** | Terugval-HS-code (harmonised system) die wordt gebruikt voor douanemapping wanneer een product er geen heeft. |

![Het tabblad Douane: schakelaar douanevelden op product, standaard land van herkomst en standaard HS-code.](../../platforms/images/opencart/07-customs.png)

## 10 · Productinstellingen
Wanneer **Douanevelden op product** is ingeschakeld, verschijnt er een sectie **MyParcel douane** bovenaan het tabblad **Data** van een product (**Catalogus → Producten →** bewerk een product **→ Data**).

- **HS-code**, de harmonised system-code voor dit product.
- **Land van herkomst**, waar het product is gemaakt.

MyParcel gebruikt ook de standaard OpenCart-velden **Afmetingen (L x B x H)** en **Gewicht** van hetzelfde tabblad Data om de zending te berekenen. Vul deze in voor nauwkeurige labels, ze vallen terug op de waarden uit [Standaard zendingsgegevens](#6-instellingen-standaard-zendingsgegevens) wanneer ze leeg zijn.

![De sectie MyParcel douane bovenaan het producttabblad Data, met HS-code en Land van herkomst.](../../platforms/images/opencart/08-product-customs.png)

## 11 · De bestellingenlijst
Open **Verkoop → Bestellingen**. De MyParcel-extensie voegt actieknoppen toe aan elke orderregel:

| Knop | Wat het doet |
| --- | --- |
| **Groene vrachtwagen** | Exporteer de order naar MyParcel en maak een zending aan (een conceptzending). |
| **Blauwe PDF** | Download het verzendlabel van de nieuwste zending. |
| **Grijze pin** | Toon de afhaallocatie die de klant heeft gekozen, indien aanwezig. |
| **Zending-/vervoerderbadge** | Toont hoeveel zendingen de order heeft en de vervoerder. |
| **Blauw oog** | Open de standaard OpenCart order-detailpagina. |

De werkbalk rechtsboven biedt dezelfde acties in bulk voor geselecteerde orders.

![De bestellingenlijst met de MyParcel-knoppen exporteren, label, afhalen en bekijken per regel.](../../platforms/images/opencart/09-orders-list.png)

## 12 · De order-detailpagina
Open een order (de blauwe oog-knop). Bovenaan vind je het paneel **MyParcel-zendingen**.

- Elke export maakt een aparte zending aan, een order kan er meerdere hebben. De werkbalkacties gebruiken de nieuwste zending, de acties in de tabel werken op een specifieke zending.
- Elke regel toont het **Zendingsnummer**, de **Barcode**, de **Tracking**-status (bijvoorbeeld *Nog niet beschikbaar* of *Gereed*), het tijdstip **Aangemaakt** en per-zending-acties om **het label te downloaden** en **de afhaallocatie te bekijken**.

![Het paneel MyParcel-zendingen op de order-detailpagina, met elke zending, de barcode en de tracking-status.](../../platforms/images/opencart/10-order-detail.png)

::: tip Meerdere pakketten voor één order
Klik nogmaals op de exportknop om een extra, onafhankelijke zending voor dezelfde order aan te maken, handig wanneer een order in meer dan één doos wordt verzonden.
:::

## 13 · De checkout-ervaring
Met **Bezorgopties** ingeschakeld zien klanten de MyParcel-widget in de checkout nadat ze hun adres hebben ingevoerd. Ze kunnen kiezen uit de vervoerders en services die je hebt ingeschakeld op het [tabblad Vervoerders](#7-instellingen-vervoerders).

Afhankelijk van de vervoerder en je instellingen kan een klant kiezen:

- **Standaardbezorging**, bezorging op het adres.
- **Priority-bezorging** of andere premium services, wanneer ingeschakeld voor de vervoerder.
- Een **Afhaallocatie**, een afhaalpunt in de buurt, getoond als lijst of op een kaart. Afhaalpunten kunnen een label **Milieuvriendelijk** dragen.

![De bezorgopties in de checkout: vervoerders met standaardbezorging, priority-bezorging en een afhaallocatie.](../../platforms/images/opencart/11-checkout-delivery-options.png)

De keuze van de klant wordt doorgegeven aan de order, zodat bij het exporteren de juiste vervoerder, service en afhaalpunt al zijn ingevuld.

## 14 · Dagelijks gebruik
Een typische verzenddag:

1. Open **Verkoop → Bestellingen** en filter op nieuwe orders.
2. Selecteer de orders die je wilt verzenden en gebruik de exportknop in de werkbalk, of exporteer ze één voor één met de groene vrachtwagenknop.
3. Download de labels (los PDF of in bulk) en print ze.
4. Overhandig de pakketten aan de vervoerder. Track & Trace wordt automatisch aangemaakt en, waar ondersteund, gedeeld met je klant.

## 15 · Iets werkt niet, diagnose
| Symptoom | Waarschijnlijke oorzaak en oplossing |
| --- | --- |
| **API-key testen mislukt** | Verkeerde of verkeerd getypte key, of de Omgeving komt niet overeen met de key. Kopieer de key opnieuw uit de backoffice en controleer Productie versus Acceptatie. |
| **Geen vervoerders op het tabblad Vervoerders** | Sla eerst de API-key op en klik daarna op **Vervoerderconfiguratie importeren**. Ontbreekt een vervoerder nog steeds, activeer hem dan in de MyParcel-backoffice. |
| **Geen bezorgopties in de checkout** | De schakelaar **Bezorgopties** staat uit, de MyParcel **Verzendmethode** is uitgeschakeld of valt buiten zijn geozone, of er is geen vervoerder/service ingeschakeld. |
| **Export mislukt voor een vervoerder die afmetingen nodig heeft** | Sommige vervoerders (Poste Italiane, InPost) hebben een pakketmaat nodig. Vul de productafmetingen in of een **Terugval-pakketmaat**. |
| **Labelknop doet niets** | De zending heeft nog geen barcode (tracking toont *Nog niet beschikbaar*). Wacht even en ververs, of exporteer opnieuw. |
| **Instellingen of knoppen zien er verouderd uit na een update** | Ververs de modifications-cache onder **Extensies → Modificaties → Verversen**. |

## 16 · FAQ
**Heb ik zowel de Module als de Verzendmethode nodig?**
Ja. De Verzendmethode is het tarief dat klanten in de checkout kiezen, de Module bevat de API-key, vervoerders en labelverwerking. Installeer en schakel beide in.

**Waar stel ik de verzendprijs in?**
Op de MyParcel **Verzendmethode** (*Extensies → Extensies → Verzendmethoden → MyParcel*), in het veld **Tarief**.

**Kan één order meer dan één pakket hebben?**
Ja. Elke export maakt een aparte, onafhankelijke zending aan. Exporteer opnieuw om nog een pakket aan dezelfde order toe te voegen.

**Moet ik per product gewichten en maten invoeren?**
Het helpt de nauwkeurigheid. Wanneer een product geen gewicht of afmetingen heeft, gebruikt MyParcel het **Terugval-gewicht** en de **Terugval-pakketmaat** uit [Standaard zendingsgegevens](#6-instellingen-standaard-zendingsgegevens). Sommige vervoerders vereisen echte afmetingen.

**Wordt de afhaalkeuze van mijn klant bewaard?**
Ja. Het afhaalpunt dat een klant in de checkout selecteert, wordt op de order opgeslagen en gebruikt bij het exporteren.
