---
title: PrestaShop
description: "Van nul naar verzonden pakket op PrestaShop — installeer de plugin, koppel je MyParcel-account, kies een shop-profiel en je verstuurt vandaag nog je eerste label. Met snelstart, shop-profielen, settings-naslag, dagelijkse workflow en een diagnose-tabel."
---

::: tip In het kort
De MyParcel-plugin verbindt je PrestaShop-shop met MyParcel. Klanten kiezen in de checkout een bezorgmoment of afhaalpunt, jij print labels vanuit PrestaShop en track & trace gaat automatisch naar de klant. Geen code nodig — alles via de back-office.
:::

## Snelstart — in 15 minuten je eerste pakket
Genoeg om vandaag je eerste echte order te versturen. Dieper configureren doe je later via [Wat zoek je?](#wat-zoek-je) hieronder.

1. **Account.** Heb je nog geen MyParcel-account? Maak er een aan via [myparcel.nl/register](https://www.myparcel.nl/register).
2. **API-key kopiëren.** Log in op [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Shopinstellingen → Integratie* → kopieer de API-key.
3. **Plugin installeren.** Download de release-ZIP via [github.com/myparcelnl/prestashop/releases](https://github.com/myparcelnl/prestashop/releases). In PrestaShop: **Modules → Module manager → Upload een module** → ZIP slepen.
4. **Plugin koppelen.** Zoek na installatie op `myparcel`, klik **Configureer**, plak je API-key onder *API key wijzigen* en klik **Opslaan**. De status-badge bovenaan moet *Gekoppeld met MyParcel* tonen.
5. **Eerste label.** Open een betaalde order, ga naar het MyParcel-blok onderaan, klik **Exporteren** en daarna **Print label**. Je PDF rolt eruit.

::: tip Klaar als je dit ziet
- Bovenaan de plugin: groene status *Gekoppeld met MyParcel*
- Een testorder kun je exporteren naar MyParcel
- Je PDF-label opent (of komt in de download-map)
:::

## Wat zoek je?
| Wat wil je doen? | Ga naar |
| --- | --- |
| Voor het eerst opzetten | [Snelstart](#snelstart-in-15-minuten-je-eerste-pakket) |
| Ook koppelen via de backoffice (sales channel) | [Sales channel via de MyParcel Backoffice](#sales-channel-via-de-myparcel-backoffice) |
| Aanbevolen instellingen voor jouw type shop | [4 · Welk shop-profiel ben jij?](#4-welk-shop-profiel-ben-jij) |
| Een specifieke instelling opzoeken | [5 · Settings · Bestellingen](#5-settings-bestellingen) tot [9 · Settings · Vervoerders](#9-settings-vervoerders) |
| Per product een afwijkende instelling | [10 · Productinstellingen](#10-productinstellingen) |
| Wat een klant in de checkout ziet | [12 · De checkout-ervaring](#12-de-checkout-ervaring) |
| 50+ orders per dag verwerken | [13 · Dagelijks gebruik](#13-dagelijks-gebruik) |
| Iets werkt niet | [14 · Iets werkt niet — diagnose](#14-iets-werkt-niet-diagnose) |
| Antwoord op een veelgestelde vraag | [15 · FAQ](#15-faq) |

## 1 · Voorbereiden in je MyParcel-account
Voordat je in PrestaShop begint, regel je vier dingen in je MyParcel-backoffice:

1. **Factuur- en retouradres** — *Shopinstellingen → Algemeen*. Dit komt op al je labels.
2. **Vervoerders activeren** — *Shopinstellingen → Vervoerders*. Alleen aangevinkte vervoerders verschijnen later in de plugin.
3. **API key genereren** — *Shopinstellingen → Integratie*.
4. **Orderinformatie importeren** (optioneel) — aanzetten als je [Ordermodus](#5-settings-bestellingen) wilt gebruiken.

## 2 · Plugin installeren
::: warning Versie-eisen
Plugin 5.0.x werkt op **PrestaShop 1.7.8 t/m 8.x** met **PHP 7.4+** (8.1/8.2 aanbevolen). PrestaShop 9 wordt nog niet ondersteund — zie [issue #415](https://github.com/myparcelnl/prestashop/issues/415).
:::

1. Download de release-ZIP via [github.com/myparcelnl/prestashop/releases](https://github.com/myparcelnl/prestashop/releases).
2. **Modules → Module manager → Upload een module** → sleep de ZIP.
3. Wacht tot installatie klaar is, zoek op `myparcel` en klik **Configureer**.

::: details Installatie mislukt met "Pdk instance must be set to use facades"
Verwijder eerdere MyParcel-modules volledig (inclusief database-tabellen via *Module Manager → Verwijderen*). Maak eerst een database-backup, leeg dan handmatig tabellen die met `ps_myparcelnl_` beginnen en installeer 5.0.x opnieuw.
:::

## Sales channel via de MyParcel Backoffice
::: warning Voor je dit instelt
Een sales channel is optioneel en nog niet beschikbaar op elk account. De plugin werkt ook zonder. Een sales channel voegt directe order-synchronisatie toe, en in sommige situaties ontstaan er dubbele orders — zie [13 · Dagelijks gebruik](#13-dagelijks-gebruik) om dat te voorkomen.
:::

Naast het koppelen van de plugin met je API key (zie [Plugin koppelen](#3-plugin-koppelen-api-key)) kun je PrestaShop ook registreren als **Sales channel** in je MyParcel-backoffice. De plugin verzorgt de PrestaShop-checkout en -instellingen; de sales channel laat MyParcel rechtstreeks via de webservice-API met je shop praten en je bestellingen ophalen.

::: tip Wat doet elke koppeling?
- De **plugin + API key** (zie [Plugin koppelen](#3-plugin-koppelen-api-key)) voegt bezorgopties toe aan de PrestaShop-checkout en laat je verzenden vanuit je PrestaShop back office beheren.
- De **Sales channel** (deze sectie) laat MyParcel je bestellingen rechtstreeks uit PrestaShop ophalen en beheer je vanuit de backoffice.
:::

### De sales channel aanmaken
1. Log in op [backoffice.myparcel.com](https://backoffice.myparcel.com) en ga naar **Shop settings → Sales Channels** (Shopinstellingen → Verkoopkanalen).
2. Klik rechtsboven op **Add sales channel** (Verkoopkanaal toevoegen).

![Het overzicht Sales Channels in de MyParcel-backoffice, met rechtsboven de knop Add sales channel.](../../platforms/images/prestashop/backoffice-sales-channels.png)

3. Vul een **Name** (Naam) in waaraan je het kanaal herkent (bijv. *Mijn PrestaShop-shop*).
4. Kies bij **Type of sales channel** (Type verkoopkanaal) voor **PrestaShop**.
5. Vul je **Webshop URL** in — het adres van je PrestaShop-shop (bijvoorbeeld `https://jouw-shop.nl`).
6. Klik op **Save** (Opslaan). Het kanaal wordt aangemaakt en krijgt een label **Missing data** (Gegevens ontbreken) tot je de API key toevoegt.

![Een PrestaShop sales channel toevoegen: kies het type en vul je webshop-URL in, klik dan op Save.](../../platforms/images/prestashop/backoffice-add-channel.png)

### Het kanaal authenticeren (API key)
PrestaShop laat MyParcel je bestellingen lezen met een **webservice-API key**.

1. Ga in je **PrestaShop** back office naar **Advanced Parameters → Webservice** (Geavanceerde parameters → Webservice), zet de webservice aan en klik op **Add new webservice key**. Genereer een sleutel, geef die de resources die MyParcel nodig heeft en sla op. Kopieer de gegenereerde sleutel.
2. Open in de backoffice het kanaal en klik op **Set credentials** (Gegevens instellen).
3. Plak in de dialoog **Set API key** (API key instellen) je **PrestaShop API key**.
4. Klik op **Connect** (Verbinden).

![De dialoog "Set API key" vraagt om je PrestaShop API key.](../../platforms/images/prestashop/backoffice-credentials.png)

Zodra de verbinding er is, verdwijnt het label **Missing data**, toont het kanaal **Connected** (Verbonden) en begint MyParcel je PrestaShop-bestellingen te synchroniseren.

::: warning Lukt verbinden niet?
Meest voorkomende oorzaken: een extra spatie meegeplakt bij de key · de webservice staat niet aan in PrestaShop · de sleutel heeft geen rechten voor de benodigde resources · de **Webshop URL** wijst naar een andere shop of mist `https://`.
:::

### Wat gebeurt er als je een zending exporteert
Je exporteert en print een zending vanuit de bestellingenlijst of vanaf de order-detailpagina ([§11](#11-de-order-detailpagina)). Wat je in je MyParcel-backoffice krijgt, hangt af van wat er eerst was: de zending of de order.

| Wat je doet | Wat er in de backoffice gebeurt |
| --- | --- |
| Je exporteert de zending **voordat** de sales channel de order heeft geïmporteerd | Eén order, gekoppeld aan je zending, onder **Actief** — zonder de optionele metadata zoals producten (afhankelijk van account features), omdat de zending al bestond voordat de sales channel de order synchroniseerde. |
| Je exporteert de zending **nadat** de sales channel de order heeft geïmporteerd | Twee orders: de geïmporteerde order mét metadata, plus een tweede order uit je export, onder **Actief** en zonder metadata. |
| Je exporteert geen zending vanuit de plugin | Eén order via de sales channel, onder **Te importeren** of **Actief**, afhankelijk van instellingen in de backoffice. |

::: warning Exporteer niet vanuit de plugin
Gebruik je een sales channel? Maak de zending dan aan en print het label vanuit de MyParcel-backoffice. Alleen zo houd je één order met alle gegevens. Zie [§13 · Dagelijks gebruik](#13-dagelijks-gebruik).
:::

## 3 · Plugin koppelen (API-key)
Open **Modules → Module manager → MyParcelNL → Configureer**. Bovenaan zie je drie knoppen — *API key wijzigen*, *Webhooks wijzigen*, *Debugopties* — plus de status-badge.

![MyParcel koppelingsbalk: Gekoppeld met MyParcel + drie actieknoppen.](../../platforms/images/prestashop/01-connection-bar.png) De koppelingsbalk verschijnt op élke plugin-pagina.

1. Klik **API key wijzigen**.
2. Plak de key uit je MyParcel-backoffice.
3. Klik **Opslaan** — binnen enkele seconden wisselt de status naar *Gekoppeld met MyParcel*.

::: warning Werkt het niet?
Meest voorkomende oorzaken: niet op *Opslaan* geklikt · spatie meegekopieerd vóór/na de key · key van een andere shop · shop draait op andere omgeving (live vs sandbox) dan je MyParcel-account.
:::

## 4 · Welk shop-profiel ben jij?
Drie typische profielen met aanbevolen settings. Eén kiezen, instellingen overnemen, dan met [5 · Settings](#5-settings-bestellingen) finetunen.

### Klein — 1–10 orders/dag, alleen NL
| Instelling | Aanbevolen | Waarom |
| --- | --- | --- |
| Ordermodus | Aan | Volledige order naar MyParcel — beter voor afhaalpunten en buitenland later |
| Concept zendingen | Aan | Houdt je in controle terwijl je leert |
| Automatisch verwerken | Geen | Per order zelf op *Exporteren* klikken |
| Label formaat | A4 (4 per pagina) | Geen labelprinter nodig |
| Track & Trace in e-mail | Aan | Klant krijgt automatisch tracking |
| PostNL — *Bezorgopties inschakelen* | Aan | Standaard NL-vervoerder |
| Verzekering — *Verzekeren vanaf €* | 250 | Pakketten boven €250 automatisch verzekerd |

### Medium — 10–50 orders/dag, NL + BE
| Instelling | Aanbevolen | Waarom |
| --- | --- | --- |
| Concept zendingen | Uit | Sneller — labels direct definitief |
| Automatisch verwerken | *In behandeling* (na betaling) | Geen klikken meer per order |
| Label formaat | A6 (labelprinter) | Brother/Zebra labelprinter |
| Meteen afdrukken | Aan | Print-flow zonder klikken |
| PostNL + DHL Parcel Connect | Beide aan | NL én BE gedekt |
| Verzekering | Vanaf €250, tot €500 | Schaalt mee met orderwaarde |

### Brievenbus-only — koffie, kaarten, cosmetica
| Instelling | Aanbevolen | Waarom |
| --- | --- | --- |
| Per product *Pakkettype* | Brievenbuspakje | Verplicht — anders gaat alles als pakket |
| Per product *in mailbox* | Realistisch (bv. 5) | Aantal stuks per brievenbuspakje |
| Standaardgewicht *brievenbuspakje* | 50–100 g | Niet te hoog instellen — anders valt MyParcel terug op pakket |
| Bezorgopties | Uit | Bij brievenbus geen tijdkeuze |
| Verzekering | Uit | Niet beschikbaar voor brievenbuspakje |

::: tip Andere scenario's?
Voor dure sieraden, internationaal, of speciale eisen — zie [15 · FAQ](#15-faq) of de shop-profielen in de [WooCommerce-handleiding](./woocommerce.html#14-veelvoorkomende-scenarios) (toepasbaar op alle platforms).
:::

## 5 · Settings · Bestellingen
De eerste tab — hier bepaal je hoe orders door je shop stromen.

![Bestellingen-tab: Algemeen, Automatisering orderstatus, Track & Trace, Standaard gewichten, Bestelnotities.](../../platforms/images/prestashop/02-bestellingen-tab.png)

### Algemeen
- **Ordermodus** — Aan: volledige order (klantdata, productregels, notities) naar MyParcel. Uit: alleen een label. *Aanbevolen aan*, mits *Orderinformatie importeren* in je MyParcel-account ook aan staat.
- **Concept zendingen** — Aan: zending blijft concept in MyParcel, je kunt nog wijzigen. Uit: direct aanmelden bij vervoerder. *Aan tijdens setup, uit als alles stabiel draait.*
- **Automatisch verwerken** — Welke PrestaShop-orderstatus triggert export? *Geen* / *Wachtend op betaling* / *In behandeling* / *Verzonden*. Begin met *Geen*.
- **Stuur retour e-mail** — Klant krijgt automatisch een retour-link.
- **Klantadres opslaan in adresboek** — Adressen belanden in je MyParcel-adresboek.
- **Deel klantinformatie** — E-mail + telefoonnummer naar MyParcel. Nodig voor track & trace-mail vanaf MyParcel én voor internationale zendingen. *Aanbevolen aan.*

### Automatisering orderstatus
Koppel MyParcel-events aan PrestaShop-statussen — pakketstatus blijft synchroon zonder handwerk.

- **Bestelstatus bij label aanmaken** — vaak *Verzending in voorbereiding*.
- **Bestelstatus bij label scannen** — vaak *Verzonden*.
- **Bestelstatus bij bezorging** — vaak *Afgeleverd*.
- **Stuur notificatie na** — vanaf welke status een klantmail uitgaat. Zet op *Verzonden* zodat klanten direct hun track & trace ontvangen.

### Track & Trace
- **Track & Trace in e-mail** — link in PrestaShop-bestelmails. *Aanbevolen aan.*
- **Track & Trace in account** — ook zichtbaar in het klantaccount op de webshop.

### Standaard gewichten
Vangnet voor producten zonder gewicht in de catalogus.

| Pakkettype | Typisch leeg-gewicht |
| --- | --- |
| Pakket | 200 – 400 g |
| Klein pakket | 100 – 200 g |
| Brievenbuspakje | 50 – 100 g |
| Digitale postzegel | 10 – 30 g |

### Bestelnotities
- **Barcode in notitie** — track & trace-barcode automatisch in de ordernotitie. Handig voor pickers in het magazijn.
- **Barcode in notitie titel** — kop boven de barcode, bv. *Track & Trace*.

## 6 · Settings · Labels
Hoe verzendlabels eruitzien én hoe ze afgedrukt worden.

![Labels-tab: Omschrijving, Meteen afdrukken, Label positie opvragen en Standaardwaarden.](../../platforms/images/prestashop/03-labels-tab.png)

### Omschrijving op het label
- **Omschrijving** — vrije tekst, bv. ordernummer of interne referentie.

### Printgedrag
- **Meteen afdrukken** — label direct naar je printer-groep zodra je een zending exporteert. *Aanbevolen aan* met labelprinter.
- **Label positie opvragen** — prompt voor formaat, uitvoer en positie per label. Aan voor flexibiliteit; uit voor snelheid bij vast formaat.

### Standaardwaarden
- **Label uitvoer** — *Open in nieuw tabblad* (snelst voor handmatig) of *Download label*.
- **Label formaat** — *A4 (4 per pagina)* of *A6 (labelprinter)*.
- **Label positie(s) op A4** — meervoudige selectie *Linksboven*/*Rechtsboven*/*Linksonder*/*Rechtsonder* om vellen volledig te benutten.

## 7 · Settings · Douane
Verplicht bij zendingen buiten de EU. Per product te overrulen — zie [10 · Productinstellingen](#10-productinstellingen).

![Douane-tab: Inhoud pakket, HS-code, Herkomstland.](../../platforms/images/prestashop/04-douane-tab.png)

- **Inhoud pakket** — *Goederen* (standaard voor webshops), *Documenten*, *Cadeau*, *Commercieel monster*, *Retourzending*.
- **HS-code** — geharmoniseerde douanecode. Zoek op [tarief.douane.nl](https://tarief.douane.nl). Voorbeelden: `6109.10` (T-shirts), `9503.00` (speelgoed), `3304.99` (make-up).
- **Herkomstland** — waar het product vandaan komt (niet waar je het opslaat).

## 8 · Settings · Checkout
Wat je klant in de checkout ziet — of liever niet ziet.

![Checkout-tab: Bezorgopties, Prijs type, Standaard weergave, Gesloten dagen, Pakautomaten uitsluiten.](../../platforms/images/prestashop/05-checkout-tab.png)

### Bezorgopties
- **Bezorgopties tonen** — hoofdschakelaar voor de MyParcel-checkout-widget. *Aanbevolen aan.*
- **Bezorgopties tonen voor backorders** — uit: bij niet-voorradige producten verbergt de plugin de bezorgopties. Aan als levertijden zeker zijn.
- **Prijs type** — *Inbegrepen* (in totaalprijs) of *Apart* (los getoond). *Inbegrepen voorkomt verrassingen.*
- **Bezorgopties titel** — kop boven het MyParcel-blok. Bv. *Hoe wil je je pakket ontvangen?*
- **Toon belastingvelden bij het afrekenen** — BTW-velden voor zakelijke bestellingen.
- **Gesloten dagen** — datumkiezer voor feestdagen. Op deze dagen verbergt de checkout bezorgopties.

### Afhaalpunten
- **Standaard weergave** — *Lijst* (overzichtelijk) of *Kaart* (visueler).
- **Gebruikers kunnen wisselen tussen lijst en kaart** — *Aanbevolen aan.*
- **Pakautomaten uitsluiten** — verberg pakautomaten als bezorgoptie. Aan als producten te groot zijn.

## 9 · Settings · Vervoerders
De grootste tab. Sub-tabs voor élke vervoerder die je MyParcel-account ondersteunt: PostNL, DHL Parcel Connect, DHL Europlus, UPS Standard, UPS Express Saver, plus eventueel DHL For You / DPD / Bol Parcel Carrier afhankelijk van je contract.

![Carrier-subtabs binnen de Vervoerders-tab.](../../platforms/images/prestashop/07-carrier-subtabs.png)

::: tip Alle vervoerders gelijk opgebouwd
Ik loop **PostNL** als voorbeeld door — andere vervoerders volgen exact dezelfde structuur, met eigen specifieke opties (bv. DHL heeft *Tracked*, Trunkrs heeft *Fresh*).
:::

![Volledige PostNL-instellingen — Standaard export, Verzekering, Bezorgopties, Thuisbezorging, Afhaallocaties.](../../platforms/images/prestashop/06-vervoerders-tab.png)

### Standaard export instellingen
Welke opties standaard meegegeven worden aan elke nieuwe zending.

- **Activeer leeftijdscontrole (18+)** — voor alcohol/tabak/messen.
- **Activeer handtekening** — voor waardevolle zendingen.
- **Activeer alleen ontvanger** — geen buren.
- **Activeer ontvangstcode** — extra zekerheid.
- **Activeer groter dan 100 × 70 × 58 cm** — markeer oversized; vervoerderstoeslag mogelijk.
- **Activeer direct retour** — automatisch retourlabel bij kleding/elektronica.
- **Activeer verzekering** — schakelt verzekering aan.

### Verzekering
- **Verzekeren vanaf (€)** — drempelbedrag.
- **Verzekeren tot** / **(NL)** / **(EU)** / **(EU + Rest Wereld)** — maxima per regio.
- **Verzekeren voor percentage** — bv. 100% van orderwaarde.

### Standaard exportinstellingen voor retouren
- **Standaard pakkettype** — Pakket / Klein pakket / Brievenbuspakje / Digitale postzegel.
- **Activeer groter dan 100 × 70 × 58 cm** — voor oversized retouren.

### Bezorgopties (hoofdschakelaar)
- **Bezorgopties inschakelen** — zonder deze toggle verschijnt deze vervoerder helemaal niet in de checkout.

::: details Opties voor thuisbezorging — alle velden
- **Thuisbezorging inschakelen** — toon thuisbezorging als optie.
- **Standaard pakkettype** — meestal *Pakket*.
- **Klein pakket prijs**, **Brievenbuspakket prijs**, **Digitale postzegel prijs** — verzendprijzen per type.
- **Activeer internationaal brievenbuspakje** + **Prijs** — voor brievenbuspakjes buiten NL/BE.
- **Bezorgdagen venster** — aantal dagen vooruit waaruit klant kiest.
- **Verwerkingstijd** — werkdagen die jij nodig hebt; rekent door in het venster.
- **Verzendmogelijkheden** — vink dagen aan waarop je daadwerkelijk verstuurt.
- **Standaard bezorging** + prijs — basisoptie zonder tijdkeuze.
- **Ochtendbezorging** + prijs — vóór 12:00.
- **Avondbezorging** + prijs — 18:00–22:00.
- **Maandagbezorging** + prijs — voor zaterdag-afgifte.
- **Zaterdagbezorging** + prijs.
- **Handtekening** + prijs — handtekening met eventuele toeslag.
- **Alleen ontvanger** + prijs — alleen-ontvanger met eventuele toeslag.
:::

::: details Opties voor afhaallocaties
- **Afhaallocaties inschakelen** — klanten kunnen een afhaalpunt kiezen.
- **Prijs afhalen** — vaak lager dan thuisbezorging.
:::

::: warning Vergeet niet op te slaan
Klik altijd op **Opslaan** onderaan elke vervoerder-tab voordat je naar een andere tab wisselt. Anders zijn je wijzigingen weg.
:::

## 10 · Productinstellingen
Open een product, ga naar **Modules** en klik **Configureer** bij MyParcelNL. Hier overrule je de globale [Vervoerders](#9-settings-vervoerders)- en [Douane](#7-settings-douane)-instellingen per product.

![Productpagina: MyParcel opties, Product bezorgopties, Product douane opties, Product export opties.](../../platforms/images/prestashop/08-product-myparcel.png)

### MyParcel opties
- **Pakkettype** — *Standaard* of forceer een type voor dit product.
- **in mailbox** — hoeveel van dit product passen in één brievenbuspakje. `5` = vijf passen erin. `-1` = standaard gebruiken. Bestelt klant méér dan past, dan gaat de order automatisch als Pakket.

### Product bezorgopties
- **Verzending vertragen** — extra werkdagen voor producten op bestelling / dropship / made-to-order.
- **Verzendopties uitschakelen** — verbergt de hele MyParcel-bezorgwidget als dit product in het mandje zit. Voor cadeaubonnen of digitale producten.
- **Pakautomaten uitsluiten** — sluit pakautomaten uit voor dit product.

### Product douane opties
- **Land van herkomst** — overrult [§7](#7-settings-douane). Bv. globaal *Nederland*, dropship-product *China*.
- **Douane code** — product-specifieke HS-code.

### Product export opties
- **Activeer leeftijdscontrole (18+)**, **Activeer verzekering**, **Activeer groter dan 100 × 70 × 58 cm**, **Activeer alleen ontvanger**, **Activeer handtekening**, **Activeer direct retour** — forceer per product.

::: tip Slotje achter een optie?
Die optie is alleen beschikbaar bij specifieke vervoerders of contracten. Klik het slotje voor uitleg.
:::

## 11 · De order-detailpagina
Open een individuele order. Onder de standaard PrestaShop-gegevens zie je een **MyParcel**-blok met:

- Vervoerder en pakkettype voor deze zending
- Verzekering aan/uit + verzekerd bedrag
- Geselecteerde bezorgopties (avondbezorging, handtekening, alleen ontvanger…)
- Knoppen: *Exporteren* · *Print label* · *Track & Trace bekijken*

::: warning Sla wijzigingen op vóór printen
Pas je een veld aan? **Sla op** voordat je een label print — anders verwerkt MyParcel de oude waarden.
:::

## 12 · De checkout-ervaring
De MyParcel-checkout-widget verschijnt na het invullen van het bezorgadres, zodra ten minste één vervoerder is ingeschakeld én PrestaShop-vervoerders aan de juiste verzendzone gekoppeld zijn — zie [diagnose](#14-iets-werkt-niet-diagnose).

Boven de widget kiest de klant een vervoerder + dienst (bv. *PostNL — Super snelle levering — €9,95 incl. btw*). Daaronder klapt **Levering thuis of op het werk** open met:

- **Datum-carrousel** met de eerstvolgende werkbare dagen.
- **Tijdvak** voor aanbieding (bv. *10:45–13:15*).
- **Extra opties** zoals *Handtekening (€2,00)* of *Alleen ontvanger* met aparte toeslagen.

Onder thuisbezorging staat een tweede blok **Ophalen bij een afhaallocatie**, gemarkeerd *Meest duurzaam*. Bij openen verschijnt een interactieve kaart met PostNL/DHL-punten in de buurt, met openingstijden per dag. De klant kan switchen tussen *Lijst* en *Kaart* (mits ingeschakeld in [§8](#8-settings-checkout)).

## 13 · Dagelijks gebruik

::: warning Gebruik je een sales channel?
Is er ook een [sales channel](#sales-channel-via-de-myparcel-backoffice) gekoppeld? Maak de zending dan aan en print het label vanuit de MyParcel-backoffice, niet vanaf hier — dat voorkomt dubbele orders in de MyParcel-backoffice. De rest van deze pagina werkt zoals beschreven.
:::

### Workflow 1 — per order
1. Open de order-detailpagina.
2. Controleer pakkettype en bezorgopties in het MyParcel-blok.
3. Klik **Exporteren** (concept) → controleer in MyParcel → klik **Print label**.

### Workflow 2 — bulk (10+ orders/dag)
1. Op **Bestellingen** filter je een tijdvak (bv. *Vandaag betaald*).
2. Per order via het actiemenu **Exporteren** kiezen.
3. In MyParcel zendingen verwerken (handmatig óf met *Automatisch verwerken* uit [§5](#5-settings-bestellingen)).
4. Labels in bulk printen via MyParcel.

::: tip Volledig automatisch verzenden
Met *Automatisch verwerken* op *In behandeling* en *Concept zendingen* uit, wordt elke betaalde order direct als label aangemaakt zonder tussenstap.
:::

### Retouren
- **Activeer direct retour** ([§9](#9-settings-vervoerders)) of de [product-override](#10-productinstellingen) → automatisch retourlabel bij elke zending.
- **Stuur retour e-mail** ([§5](#5-settings-bestellingen)) → klant kan zelfstandig een retourlabel opvragen.

## 14 · Iets werkt niet — diagnose
Werkt iets niet zoals verwacht? Loop deze tabel van boven naar onder door — drie op de vier issues zijn binnen 5 minuten opgelost.

| Symptoom | Wat te checken |
| --- | --- |
| **Checkout: "Geen vervoerders beschikbaar"** | PrestaShop-vervoerders gekoppeld aan een verzendzone met prijzen voor het bezorgadres? Ga naar *Verzending → Vervoerders*. Pas daarna verschijnen MyParcel-bezorgopties. |
| **Geen bezorgopties zichtbaar** | (1) [§8](#8-settings-checkout): *Bezorgopties tonen* aan? (2) [§9](#9-settings-vervoerders): minstens één vervoerder met *Bezorgopties inschakelen* aan? |
| **Installatie mislukt — *"Pdk instance must be set to use facades"*** | Verwijder oudere MyParcel-modules volledig (incl. database-tabellen `ps_myparcelnl_*`) en installeer 5.0.x opnieuw. |
| **Provincie-fout: *"state must be at most 2 characters"*** | NL-taalpakket maakt provincies als `NL-LI` (4 tekens). Pas in *Internationaal → Locaties → Provincies* de iso-codes naar 2 tekens. Zie [issue #509](https://github.com/myparcelnl/prestashop/issues/509). |
| **"Invalid API key" terwijl koppeling werkt** | Sluit plugin-config volledig en open opnieuw. Bij blijvende problemen: kopieer de key opnieuw uit *backoffice.myparcel.nl → Shopinstellingen → Integratie*. |
| **PostNL-instellingen worden niet opgeslagen** | Klik **Opslaan** onderaan élke tab vóór je wisselt. Check anders *Debugopties* op foutmeldingen. |
| **Labels worden niet aangemaakt** | (1) [§5](#5-settings-bestellingen): *Concept zendingen* uit voor directe aanmaak. (2) [§6](#6-settings-labels): printer-groep correct? (3) [§9](#9-settings-vervoerders): vervoerder geselecteerd én *Bezorgopties inschakelen* aan? |
| **Track & trace niet in e-mail** | (1) *Track & Trace in e-mail* aan ([§5](#5-settings-bestellingen)). (2) *Stuur notificatie na* op de juiste status (vaak *Verzonden*). (3) *Deel klantinformatie* aan — anders krijgt MyParcel het mailadres niet. |
| **Alles wordt Pakket, nooit Brievenbus** | (1) [§10](#10-productinstellingen): *Pakkettype* op *Brievenbuspakje* + *in mailbox* op realistisch aantal. (2) [§5](#5-settings-bestellingen): *Standaardgewicht brievenbuspakje* niet te hoog (anders valt MyParcel terug op pakket). |

## 15 · FAQ

### Werkt de plugin op PrestaShop 9?
Nog niet. Versie 5.0.x ondersteunt PrestaShop 1.7.8 t/m 8.x. PrestaShop 9-ondersteuning staat op de roadmap; volg [issue #415](https://github.com/myparcelnl/prestashop/issues/415).

### Kan ik meerdere vervoerders tegelijk gebruiken?
Ja. Activeer per vervoerder onder *Vervoerders → \[Vervoerdernaam\] → Bezorgopties → Bezorgopties inschakelen*.

### Hoe verander ik mijn afzenderadres op het label?
Het afzenderadres komt uit je MyParcel-backoffice (*Shopinstellingen → Algemeen*), niet uit PrestaShop.

### Welke statussen voor "Automatisch verwerken"?
*In behandeling* of *Wachtend op betaling* werkt voor de meeste shops. Begin op *Geen* tijdens setup; activeer als de workflow stabiel draait.

### Klant kiest een afhaalpunt — hoe zie ik dat op het label?
Het afhaalpunt verschijnt automatisch als bezorgadres op het MyParcel-label én in het MyParcel-blok op de order-detailpagina ([§11](#11-de-order-detailpagina)). In sommige PrestaShop-thema's komt het afhaalpunt niet terug op de PDF-factuur — thema-issue, geen plugin-bug ([issue #390](https://github.com/myparcelnl/prestashop/issues/390)).

### Plugin-update gedaan en nu werkt iets niet meer
Open de plugin opnieuw, controleer de status-badge en doorloop [§14](#14-iets-werkt-niet-diagnose). Update-issues lossen vaak op door uit/in loggen of browser-cache legen.

### Kost de plugin geld?
Nee. De plugin is gratis. Je betaalt alleen voor de zendingen via je MyParcel-tarief.

## Bronnen & support
- [github.com/myparcelnl/prestashop ↗](https://github.com/myparcelnl/prestashop) — broncode, releases, issues.
- [github.com/myparcelnl/prestashop/releases ↗](https://github.com/myparcelnl/prestashop/releases) — changelog & ZIP-downloads.
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl) — account, API key, facturatie.
- [Contact MyParcel-support](../../contact.md) — **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Deze handleiding is geschreven voor plugin-versie **5.0.x**. Bij nieuwere versies kunnen veld-namen of -volgorde licht afwijken; de hoofdindeling van de plugin blijft hetzelfde.
