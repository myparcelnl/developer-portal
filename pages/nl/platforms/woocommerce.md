---
title: WooCommerce
description: "Van nul naar verzonden pakket op WooCommerce — installeer de plugin, koppel je MyParcel-account, kies een shop-profiel en je verstuurt vandaag nog je eerste label. Met snelstart, shop-profielen, settings-naslag, dagelijkse workflow en een diagnose-tabel."
---

::: tip In het kort
De MyParcel-plugin verbindt je WooCommerce-shop met MyParcel. Klanten kiezen in de checkout een bezorgmoment of afhaalpunt, jij print labels vanuit WordPress en track & trace gaat automatisch naar de klant. Geen code nodig — alles via de WordPress-admin.
:::

## Snelstart — in 15 minuten je eerste pakket
Genoeg om vandaag je eerste echte order te versturen. Dieper configureren doe je via [Wat zoek je?](#wat-zoek-je) hieronder.

1. **Account.** Heb je nog geen MyParcel-account? Maak er een aan via [myparcel.nl/register](https://www.myparcel.nl/register).
2. **API-key kopiëren.** Log in op [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Shopinstellingen → Integratie* → kopieer de API-key.
3. **Plugin installeren.** In WordPress: **Plugins → Nieuwe plugin** → zoek op *MyParcel* → **Nu installeren** → **Activeren**.
4. **Plugin koppelen.** Open **WooCommerce → MyParcel**, klik **API key wijzigen**, plak de key en klik **Opslaan**. De status-badge moet *Gekoppeld met MyParcel* tonen.
5. **Eerste label.** Open een betaalde order, scroll naar het MyParcel-blok en klik **Exporteer en print**. Je PDF-label rolt eruit.

::: tip Klaar als je dit ziet
- Bovenaan de plugin: groene status *Gekoppeld met MyParcel*
- Een testorder kun je exporteren naar MyParcel
- Je PDF-label opent (of komt in de download-map)
:::

## Wat zoek je?
| Wat wil je doen? | Ga naar |
| --- | --- |
| Voor het eerst opzetten | [Snelstart](#snelstart-in-15-minuten-je-eerste-pakket) |
| Aanbevolen instellingen voor jouw type shop | [4 · Welk shop-profiel ben jij?](#4-welk-shop-profiel-ben-jij) |
| Een specifieke instelling opzoeken | [5 · Settings · Bestellingen](#5-settings-bestellingen) tot [9 · Settings · Vervoerders](#9-settings-vervoerders) |
| Per product een afwijkende instelling | [10 · Productinstellingen](#10-productinstellingen) |
| Wat een klant in de checkout ziet | [12 · De checkout-ervaring](#12-de-checkout-ervaring) |
| Bulkverwerking voor 50+ orders/dag | [14 · Dagelijks gebruik](#14-dagelijks-gebruik) |
| Iets werkt niet | [15 · Iets werkt niet — diagnose](#15-iets-werkt-niet-diagnose) |
| Antwoord op een veelgestelde vraag | [16 · FAQ](#16-faq) |

## 1 · Voorbereiden in je MyParcel-account
Voordat je in WooCommerce begint, regel je vier dingen in je MyParcel-backoffice:

1. **Factuur- en retouradres** — *Shopinstellingen → Algemeen*. Dit komt op al je labels.
2. **Vervoerders activeren** — *Shopinstellingen → Vervoerders*. Alleen aangevinkte vervoerders verschijnen later in de plugin.
3. **API key genereren** — *Shopinstellingen → Integratie*.
4. **Orderinformatie importeren** (optioneel) — aanzetten als je [Ordermodus](#5-settings-bestellingen) wilt gebruiken.

## 2 · Plugin installeren
1. In WordPress-admin: **Plugins → Nieuwe plugin**.
2. Zoek op *MyParcel*.
3. Bij *WooCommerce MyParcel* op **Nu installeren**, daarna **Activeren**.
4. Er verschijnt een nieuw menu-item **WooCommerce → MyParcel**.

::: details Liever handmatig installeren?
Download de release-ZIP via [github.com/myparcelnl/woocommerce/releases](https://github.com/myparcelnl/woocommerce/releases) en upload via **Plugins → Nieuwe plugin → Plugin uploaden**.
:::

## 3 · Plugin koppelen (API-key)
Open **WooCommerce → MyParcel**. Bovenaan zie je drie knoppen — *API key wijzigen*, *Webhooks wijzigen*, *Debugopties* — plus de status-badge.

![MyParcel koppelingsbalk: Gekoppeld met MyParcel + drie actieknoppen.](../../platforms/images/woocommerce/connection-bar.svg) De koppelingsbalk verschijnt op élke plugin-pagina.

1. Klik **API key wijzigen**.
2. Plak de key uit je MyParcel-backoffice.
3. Klik **Opslaan** — binnen enkele seconden wisselt de status naar *Gekoppeld met MyParcel*.

::: warning Werkt het niet?
Meest voorkomende oorzaken: niet op *Opslaan* geklikt · spatie meegekopieerd vóór/na de key · key van een andere shop · plugin draait op andere omgeving (live vs sandbox) dan je MyParcel-account.
:::

### Wat doet de plugin in je WordPress-admin?
| Waar? | Wat kun je er? |
| --- | --- |
| **WooCommerce → MyParcel** | Settingspagina met vijf tabs (Bestellingen, Labels, Douane, Checkout, Vervoerders). |
| **WooCommerce → Bestellingen** | Extra kolom *MyParcel* per order + bulk-acties voor exporteren & printen. |
| **Order-detailpagina** | *MyParcel*-box om per order vervoerder/pakkettype/verzekering in te stellen en labels aan te maken. |
| **Product-detailpagina** | *MyParcel*-tab in *Productgegevens* voor product-specifieke instellingen. |

## 4 · Welk shop-profiel ben jij?
Vier typische profielen met aanbevolen settings. Eén kiezen, instellingen overnemen, dan met [5 · Settings](#5-settings-bestellingen) finetunen.

### Klein — paar orders per dag, alleen NL
| Instelling | Aanbevolen | Waarom |
| --- | --- | --- |
| Ordermodus | Aan | Volledige order naar MyParcel |
| Concept zendingen | Aan | Houdt je in controle terwijl je leert |
| Automatisch verwerken | Geen | Per order zelf op *Exporteren* klikken |
| Label formaat | A4 (4 per pagina) | Geen labelprinter nodig |
| Alleen PostNL | Aan | Standaard NL-vervoerder |
| Verzekering — *Verzekeren vanaf €* | 250 | Pakketten boven €250 automatisch verzekerd |

### Drukke shop — 50+ orders/dag
| Instelling | Aanbevolen | Waarom |
| --- | --- | --- |
| Concept zendingen | Uit | Sneller — labels direct definitief |
| Automatisch verwerken | *In behandeling* | Geen klikken meer per order |
| Label formaat | A6 (Zebra/Brother labelprinter) | Sneller printen |
| Meteen afdrukken | Aan | Print-flow zonder klikken |
| Bulk-export | 2–3× per dag | Op de orderlijst |
| Verwerkingstijd | 2 dagen in piek | Realistisch venster voor klant |
| PostNL + DHL For You | Beide aan | Brede dekking |

### Brievenbus-only — koffie, kaarten, cosmetica
| Instelling | Aanbevolen | Waarom |
| --- | --- | --- |
| Verzendklasse `Brievenbus` | Aanmaken in *WooCommerce → Verzending → Verzendklasses* | Producten daaraan koppelen |
| *Checkout → Toegestane verzendmethoden* | Methode → *Brievenbuspakket* | Eén methode per pakkettype |
| Bezorgopties tonen | Uit | Bij brievenbus geen tijdkeuze |
| Verzekering | Uit | Niet beschikbaar voor brievenbuspakje |

### Dure sieraden / hoogwaardige producten
| Instelling | Aanbevolen | Waarom |
| --- | --- | --- |
| Standaard handtekening | Aan | Bezorger laat klant tekenen |
| Standaard alleen ontvanger | Aan | Geen buren |
| Verzekering | Vanaf €0, tot €2500, percentage 100% | Volledige dekking |
| Avondbezorging + afhaalpunten | Uit | Vermindert verlies/diefstal |
| Aparte adresvelden + Adressenwidget | Aan | Minimale typfouten |

### Internationaal verzenden
| Instelling | Aanbevolen | Waarom |
| --- | --- | --- |
| Deel klantinformatie | Aan | Telefoon vereist voor douane |
| Douane-tab | Volledig invullen | HS-code, herkomstland, *Goederen* |
| DHL Parcel Connect | Aan | Voor Europa |
| UPS / DHL Express | Aan | Voor wereldwijd |

## 5 · Settings · Bestellingen
De eerste en belangrijkste tab — hier bepaal je hoe orders door je shop stromen.

![Bestellingen-tab: Algemeen, Automatisering orderstatus, Track & Trace, Standaard gewichten, Bestelnotities.](../../platforms/images/woocommerce/bestellingen.jpg)

### Algemeen
- **Ordermodus** — Aan: volledige order (klantdata, productregels, notities) naar MyParcel. Uit: alleen een label. *Aanbevolen aan*, mits *Orderinformatie importeren* in MyParcel ook aan staat.
- **Concept zendingen** — Aan: zending blijft concept in MyParcel. Uit: direct aanmelden bij vervoerder. *Aan tijdens setup, uit als alles draait.*
- **Automatisch verwerken** — Welke WooCommerce-status triggert automatische export? *Geen* / *Wachtend op betaling* / *In behandeling* / *Afgerond*. Begin met *Geen*.
- **Stuur retour e-mail** — Klant krijgt automatisch een retour-link. *Aanbevolen voor mode/schoenen.*
- **Klantadres opslaan in adresboek** — Adressen belanden in je MyParcel-adresboek.
- **Deel klantinformatie** — E-mail + telefoon naar MyParcel. Nodig voor track & trace-mail én verplicht voor internationaal. *Aanbevolen aan.*

### Automatisering orderstatus
Laat de WooCommerce-orderstatus automatisch meelopen met het verzendproces.

- **Bestelstatus bij label aanmaken** — typisch *In behandeling*.
- **Bestelstatus bij label scannen** — typisch *Afgerond*.
- **Bestelstatus bij bezorging** — bij *Afgerond* (als nog niet eerder).
- **Stuur notificatie na** — welke statusovergang een WooCommerce-mail triggert.

### Track & Trace
- **Track & Trace in e-mail** — link in WooCommerce order-bevestiging. *Aanbevolen aan.*
- **Track & Trace in account** — link op *Mijn account*-pagina van klant.

### Standaard gewichten
Elk pakkettype heeft een leeg-gewicht. MyParcel telt dit op bij het productgewicht.

| Pakkettype | Typisch leeg-gewicht |
| --- | --- |
| Pakket (bruine doos) | 200 – 400 g |
| Klein pakket | 100 – 200 g |
| Brievenbuspakje | 50 – 100 g |
| Digitale postzegel | 10 – 30 g |

### Bestelnotities
- **Barcode in notitie** — Track & Trace-code als orderopmerking.
- **Barcode in notitie titel** — prefix vóór de code. Standaard: `Track & Trace code:`.

## 6 · Settings · Labels
Alles wat te maken heeft met het etiket zelf — tekst, formaat en print-gedrag.

![Labels-tab: Omschrijving (met variabelen), Meteen afdrukken, Label positie opvragen, Label uitvoer en Label formaat.](../../platforms/images/woocommerce/labels-tab.svg)

### Omschrijving op het label
Variabelen worden automatisch ingevuld bij het aanmaken van het label:

| Variabele | Wordt |
| --- | --- |
| `[DELIVERY_DATE]` | Bezorgdatum |
| `[ORDER_ID]` | WooCommerce-ordernummer |
| `[PRODUCT_ID]` | Product-ID |
| `[PRODUCT_NAME]` | Productnaam |
| `[PRODUCT_QTY]` | Aantal |
| `[PRODUCT_SKU]` | SKU |
| `[CUSTOMER_NOTE]` | Opmerking van de klant |

**Voorbeelden:** `Order [ORDER_ID]` · `[ORDER_ID] · [PRODUCT_QTY]× [PRODUCT_NAME]`

### Printgedrag
- **Meteen afdrukken** — toon PDF direct na export.
- **Label positie opvragen** — vraag telkens welke posities op een A4 je wilt gebruiken.

### Standaardwaarden
- **Label uitvoer** — *Open in nieuw tabblad* (handmatig printen via browser) of *Download label*.
- **Label formaat** — *A4 (4 per pagina)* voor standaardprinter, *A6 (labelprinter)* voor Zebra/Brother.

## 7 · Settings · Douane
Verplicht bij zendingen buiten de EU (VK, Zwitserland, VS, Noorwegen, Canada…). Deze waarden komen op het CN22/CN23-formulier dat aan het label vastzit.

![Douane-tab met drie velden: Inhoud pakket, HS-code, Herkomstland.](../../platforms/images/woocommerce/douane-tab.svg)

- **Inhoud pakket** — *Goederen* (standaard voor webshops), *Documenten*, *Cadeau*, *Commercieel monster*, *Retourzending*.
- **HS-code** — geharmoniseerde douanecode. Zoek op [tarief.douane.nl](https://tarief.douane.nl). Voorbeelden: `6109.10` (T-shirts), `9503.00` (speelgoed), `3304.99` (make-up).
- **Herkomstland** — waar het product vandaan komt (niet waar je het opslaat).

## 8 · Settings · Checkout
Wat je klant ziet en kan kiezen bij het afrekenen.

![Checkout-tab: adresvelden, bezorgopties-widget, mapping van verzendmethoden, prijsweergave, afhaalpunten.](../../platforms/images/woocommerce/checkout-tab.svg)

### Adresvelden
- **Gebruik aparte adresvelden** — splitst Straat in Straat + Huisnummer + Toevoeging. *Aanbevolen aan* — voorkomt onbestelbare pakketten.
- **MyParcel Adressenwidget (BETA)** — autocomplete op NL-postcode + huisnummer.

### Bezorgopties
- **Bezorgopties tonen** — master-schakelaar voor de checkout-widget. *Aanbevolen aan.*
- **Bezorgopties tonen voor backorders** — ook tonen bij niet-op-voorraad producten.
- **Positie in checkout** — *Na factuuradres*, *Na verzendadres*, of *Na orderopmerking*.
- **Toegestane verzendmethoden** — koppel elke WooCommerce-verzendmethode aan een pakkettype (*Standaard*, *Pakket*, *Klein pakket*, *Brievenbuspakket*, *Digitale postzegel*, *Ongefrankeerd*). *Eén methode = één pakkettype.*
- **Prijs type** — *Inbegrepen* (totaalprijs) of *Meerkosten* (alleen het verschil).
- **Bezorgopties titel** — kop boven de widget.
- **Custom CSS** — eigen styling.

### Afhaalpunten
- **Standaard weergave** — *Kaart* of *Lijst*.
- **Gebruikers kunnen wisselen tussen lijst en kaart** — *Aanbevolen aan.*
- **Pakautomaten uitsluiten** — verberg onbemande automaten.
- **Gesloten dagen** — dagen waarop je niet verzendt.

## 9 · Settings · Vervoerders
Per vervoerder een eigen sub-tab. Welke verschijnen hangt af van wat je op je MyParcel-account hebt geactiveerd.

![Carrier-subtabs: CheapCargo, DPD, UPS, DHL Europlus, DHL Parcel Connect, PostNL (actief), GLS, DHL For You.](../../platforms/images/woocommerce/carrier-subtabs.svg)

::: tip Alle vervoerders gelijk opgebouwd
Hieronder loop ik **PostNL** als voorbeeld door — DHL For You, DHL Parcel Connect, DPD, UPS, GLS en Trunkrs werken identiek (met elk hun eigen specifieke opties).
:::

### Standaard export instellingen
- **Activeer leeftijdscontrole (18+)** — verplicht voor alcohol/tabak.
- **Activeer handtekening** — bezorger laat tekenen.
- **Activeer alleen ontvanger** — geen buren.
- **Activeer direct retour** — ongeleverd direct terug naar jou.
- **Activeer groter dan 100 × 70 × 58 cm** — grote pakketten (toeslag).
- **Activeer tracked** / **Activeer ontvangstcode** — extra trackingopties.

### Verzekering
- **Activeer verzekering** — master-toggle.
- **Verzekeren vanaf (€)** — drempelbedrag.
- **Verzekeren tot** — maximumdekking NL.
- **Verzekeren tot (EU)** / **(EU + Rest Wereld)** — maxima per regio.
- **Verzekeren voor percentage** — bv. 100% van orderwaarde.

::: details Bezorgopties — alle velden
**Opties voor thuisbezorging**
- **Thuisbezorging inschakelen** — master-toggle.
- **Bezorgdagen venster** — 1 t/m 14 dagen vooruit.
- **Verwerkingstijd** — werkdagen tussen bestelling en aanleveren.
- **Sluitingstijd** — per dag instelbaar.
- **Verzendmogelijkheden** — per dag aanvinken of je verzendt.

**Bezorgmomenten**
- **Standaard bezorging** + Standaard bezorgprijs.
- **Ochtendbezorging** + Prijs ochtendbezorging.
- **Avondbezorging** + Prijs avondbezorging.
- **Maandagbezorging** + Prijs maandagbezorging.

**Verzendopties**
- **Alleen ontvanger** + toeslag.
- **Handtekening** + toeslag.
- **Prio (24 uur) toestaan** + toeslag — expresbezorging.

**Opties voor afhaallocaties**
- **Afhaallocaties inschakelen**.
- **Prijs afhalen** — positief = toeslag, negatief = korting.
:::

::: warning Vergeet niet op te slaan
Klik altijd op **Opslaan** onderaan elke vervoerder-tab vóór je naar een andere tab wisselt.
:::

## 10 · Productinstellingen
Op elk product staat een extra tabblad **MyParcel** onder *Productgegevens*. Hier overschrijf je de globale instellingen uit [Vervoerders](#9-settings-vervoerders) en [Douane](#7-settings-douane) per product. Elk veld heeft een 🔒 slot-icoon — klik open om de globale waarde los te koppelen.

![Productgegevens → MyParcel-tab met pakkettype, In mailbox, bezorgopties, douane- en exportopties.](../../platforms/images/woocommerce/product-tab.svg)

### MyParcel opties
- **Pakkettype** — overschrijft het standaard pakkettype voor dit product.
- **In mailbox** — hoeveel van dit product samen in één brievenbuspakje passen. `-1` = niet-mailbox. Voorbeeld: stickers waarvan er 50 in een brievenbuspakje passen → zet `50`. Bestelt klant 51 stuks, dan gaat de order automatisch als Pakket.

### Product bezorgopties
- **Verzending vertragen** — extra werkdagen vóór dit product uit de deur kan. Voor made-to-order, externe magazijnen, etc.
- **Verzendopties uitschakelen** — verbergt de hele MyParcel-bezorgwidget bij het afrekenen als dit product in het mandje zit. Voor virtuele producten of cadeaubonnen.
- **Pakautomaten uitsluiten** — verbergt DHL/PostNL-pakautomaten als afhaalpunt voor dit product.

### Product douane opties
- **Land van herkomst** — specifieker dan de globale waarde. Bv. globaal *Nederland*, dropship-product *China*.
- **Douane code (HS-code)** — product-specifieke HS-code.

### Product export opties (allemaal met slot-override)
- **Activeer leeftijdscontrole (18+)** — bv. voor alcohol.
- **Activeer direct retour** — ongeleverd direct retour.
- **Activeer verzekering** — dit product altijd verzekeren.
- **Activeer groter dan 100 × 70 × 58 cm of zwaarder dan 23 kg** — voor oversized.
- **Activeer alleen ontvanger** / **Activeer handtekening** / **Activeer Prio (24 uur)**.
- **Activeer tracked** / **Activeer ontvangstcode**.
- **Vers bezorgen** / **Bevroren bezorgen** — voor food-shops.

::: tip Het slot-icoon 🔒
Slot dicht = product gebruikt globale instelling. Slot open = product-specifieke waarde actief.
:::

## 11 · De bestellingenlijst
Op **WooCommerce → Bestellingen** voegt de plugin een kolom *MyParcel* toe en bulk-acties. Per order zie je in één oogopslag of het al aangemaakt is en welke status het heeft.

![Orderlijst met extra MyParcel-kolom — barcode + Printen-knop bij geëxporteerde orders, Exporteren-knop bij nieuwe.](../../platforms/images/woocommerce/orderlist-column.svg)

### Bulkacties
Vink orders aan en kies in de *Bulkacties*-dropdown:

- **MyParcel: Exporteren** — maakt zendingen aan bij MyParcel (concept of direct).
- **MyParcel: Exporteren & Printen** — als hierboven, plus meteen een gecombineerd PDF.

::: tip Bulk-flow voor 50+ orders/dag
Verwerk al je dag-orders in één klik. Combineer met *Automatisch verwerken* op *In behandeling* en de plugin werkt vrijwel volledig zelfstandig.
:::

## 12 · De order-detailpagina
Op de detailpagina van een individuele order verschijnt een **MyParcel**-box waarin je álle verzendopties voor die order fijnregelt.

![MyParcel-box op order-detailpagina met radio-knoppen voor vervoerder, pakkettype, bezorgwijze, aantal labels, verzekering en vier actieknoppen.](../../platforms/images/woocommerce/order-metabox.svg)

### Wat staat er in de box?
- **Vervoerder** — radio met alle beschikbare vervoerders. MyParcel kiest automatisch de meest geschikte; je kunt per order overriden.
- **Pakkettype** — overschrijven voor deze order (bv. brievenbuspakje voor een kleine bestelling).
- **Bezorgwijze** — *Standaard bezorging* of *Afhalen* bij een afhaalpunt.
- **Aantal labels** — splits een grote bestelling over meerdere pakketten? Zet `2` of `3`.
- **Verzekering** — override de globale regels voor deze order.
- **Zaterdagbezorging** / **Handtekening vereist** — toggles met slot.

### De vier actieknoppen
- **Opslaan** — bewaart instellingen zonder de zending aan te melden.
- **Exporteren** — meldt de zending aan bij MyParcel. Genereert een barcode.
- **Printen** — print het label van een al geëxporteerde zending.
- **Exporteer en print** — alles in één klik.

### De Labels-tabel onderaan de box
Zodra een order is geëxporteerd verschijnt onder de knoppen een tabel met alle labels.

![Labels-tabel onder de MyParcel-box: Track & Trace, Status, Laatst bijgewerkt, Acties.](../../platforms/images/woocommerce/labels-table.svg)

::: tip Acties-dropdown per label
*Label herprinten* · *Retourlabel genereren* · *Zending annuleren* (alleen mogelijk zolang het pakket nog niet is gescand door de vervoerder).
:::

## 13 · De checkout-ervaring
Wat je klant ziet zodra het bezorgadres is ingevuld — verschijnt zodra ten minste één vervoerder is ingeschakeld én de WooCommerce-verzendmethode aan een MyParcel-pakkettype is gekoppeld ([§8](#8-settings-checkout)).

De klant kiest een vervoerder en bezorgmoment uit een **datum-carrousel**, een **tijdvak** en eventueel **extra opties** (handtekening, alleen ontvanger). Onder thuisbezorging staat een **Ophalen bij een afhaallocatie**-blok met interactieve kaart, openingstijden en lijst/kaart-toggle.

## 14 · Dagelijks gebruik

### Workflow 1 — per order
1. Open *WooCommerce → Bestellingen* en klik een order.
2. Onderaan: **MyParcel**-box → kies vervoerder, pakkettype, etc.
3. Klik **Exporteer en print**.
4. PDF wordt geopend/gedownload — plak het label op de doos.

### Workflow 2 — bulk (10+ orders/dag)
1. Op de orderlijst, vink orders aan.
2. *Bulkacties* → **MyParcel: Exporteren & Printen**.
3. Klik *Toepassen*. Eén gecombineerd PDF met alle labels.

::: tip Belasting-moment
Je wordt pas belast wanneer een zending daadwerkelijk aan de vervoerder wordt overgedragen. Digitale postzegels zijn de uitzondering — die worden bij export direct afgerekend.
:::

### Retouren
Drie manieren, van meest naar minst geautomatiseerd:

1. **Automatische retour-mail** — *Bestellingen → Algemeen → Stuur retour e-mail* aan. Bij elke export ontvangt klant een retour-link.
2. **Handmatig retour-label** — in de MyParcel-box op de order, kies *Retour genereren*. Stuur het label zelf naar de klant.
3. **Retour-portaal** — zet in je MyParcel-backoffice aan. Klant gaat naar een URL, vult ordernummer in, krijgt meteen een label.

## 15 · Iets werkt niet — diagnose
Werkt iets niet zoals verwacht? Loop deze tabel van boven naar onder door — drie op de vier issues zijn binnen 5 minuten opgelost.

| Symptoom | Wat te checken |
| --- | --- |
| **Geen status-badge of *Niet gekoppeld*** | (1) Plugin geactiveerd? (2) WooCommerce 7.0+ en PHP 8.1+? (*WooCommerce → Status*) (3) Server-, LiteSpeed/Redis- én browser-cache geleegd? |
| **Widget verschijnt niet op checkout** | (1) [§8](#8-settings-checkout): *Bezorgopties tonen* aan? (2) Elke verzendmethode gekoppeld aan een pakkettype? (3) Standaard shortcode-checkout (`[woocommerce_checkout]`)? (4) JS-error in browser-console (F12)? |
| **Labels worden niet aangemaakt** | (1) Status-badge nog groen? (2) Order heeft een verzend- + klantadres? (3) Verzendmethode aanwezig (lokaal afhalen telt niet)? (4) Product-gewicht ingevuld? (5) Foutmelding bij de zending in de MyParcel-backoffice? |
| **Track & trace niet in de e-mail** | (1) [§5](#5-settings-bestellingen): *Track & Trace in e-mail* aan? (2) Order al geëxporteerd? Zonder barcode geen link. (3) Mail verstuurd? (*WooCommerce → Status → Logs*) (4) Spam-folder van klant? |
| **Adres verkeerd op het label** | (1) Zet *Gebruik aparte adresvelden* aan ([§8](#8-settings-checkout)). (2) Gebruik de *MyParcel Adressenwidget* voor NL. (3) Het label toont het *Verzendadres*, niet het factuuradres. |
| **Alles wordt Pakket, nooit Brievenbus** | (1) [§8](#8-settings-checkout): brievenbus-methode mag niet óók onder *Pakket* staan. (2) Eén verzendmethode = één pakkettype. (3) Gebruik verzendklasses om producten aan pakkettypes te koppelen. |
| **Conflict met andere plugin** | Deactiveer andere shipping-/checkout-plugins één voor één om te isoleren. Postcode-checker plugins kunnen straat/huisnummer-velden splitsen die MyParcel verwacht. |

## 16 · FAQ

### Kost de plugin geld?
Nee. Je betaalt alleen voor de zendingen via MyParcel.

### Kan ik twee MyParcel-accounts aan één WooCommerce-shop koppelen?
Niet uit de doos — één API key per shop. Voor twee merken: draai twee aparte WooCommerce-shops.

### Hoe verander ik mijn afzenderadres op het label?
Dat staat in je MyParcel-backoffice (*Shopinstellingen → Algemeen → Adresgegevens*), niet in de plugin. Wijzigingen zijn direct actief.

### Welke statussen voor "Automatisch verwerken"?
Mollie/iDEAL? Orders gaan direct naar *In behandeling*. Overboeking en handmatige verwerking? *Afgerond*.

### Kan ik meer dan 4 labels per A4 printen?
Nee — A4 is altijd 4 per pagina. Overweeg een A6-labelprinter bij 20+ orders/dag.

### Werkt het met Afterpay/Klarna?
Ja — MyParcel staat los van je betaalprovider.

### Klant kiest een afhaalpunt — hoe zie ik dat op het label?
Het afhaalpunt wordt automatisch als ontvangstadres meegestuurd naar MyParcel.

### Avondbezorging is niet zichtbaar voor bepaalde adressen
Adres-afhankelijk — bepaald door de vervoerder, niet de plugin.

### Ik zie dubbele DPD-tabs
Geen bug — MyParcel onderscheidt twee DPD-contracten. Zet alleen je actieve contract aan.

### Kan ik pakketten laten ophalen door de vervoerder?
Ja — onder *Vervoerders → \[carrier\] → Activeer pakket laten ophalen door vervoerder*.

### Plugin-update gedaan en nu werkt iets niet meer
Rol terug via [WP Rollback](https://wordpress.org/plugins/wp-rollback/) of de GitHub-release. Meld de bug op [github.com/myparcelnl/woocommerce/issues](https://github.com/myparcelnl/woocommerce/issues).

## Bronnen & support
- [github.com/myparcelnl/woocommerce ↗](https://github.com/myparcelnl/woocommerce) — broncode, releases, issues.
- [wordpress.org/plugins/woocommerce-myparcel ↗](https://wordpress.org/plugins/woocommerce-myparcel/) — plugin-listing.
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl) — account, API key, facturatie.
- [Contact MyParcel-support](../../contact.md) — **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).
