---
title: Magento 2
description: "Van nul naar verzonden pakket op Magento 2 — installeer de plugin via Composer, koppel je MyParcel-account, kies een shop-profiel en verstuur vandaag nog je eerste label. Met snelstart, shop-profielen, settings-naslag, dagelijkse workflow en een diagnose-tabel."
---

::: tip In het kort
De MyParcel-plugin verbindt je Magento 2-shop met MyParcel. Klanten kiezen in de checkout een bezorgmoment of afhaalpunt, jij print labels vanuit de Magento-admin en track & trace gaat automatisch naar de klant. Bedoeld voor shopeigenaren en shopbeheerders — geen developer-kennis nodig na de initiële Composer-installatie.
:::

## Snelstart — in 15 minuten je eerste pakket
Genoeg om vandaag je eerste echte order te versturen. Dieper configureren doe je via [Wat zoek je?](#wat-zoek-je) hieronder.

1. **Account.** Heb je nog geen MyParcel-account? Maak er een aan via [myparcel.nl/register](https://www.myparcel.nl/register).
2. **API-key kopiëren.** Log in op [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Shopinstellingen → Integratie* → kopieer de API-key.
3. **Plugin installeren.** Laat je developer of hostingpartij `composer require myparcelnl/magento && bin/magento setup:upgrade && bin/magento setup:di:compile && bin/magento cache:flush` uitvoeren.
4. **Plugin koppelen.** Open **Stores → Configuration → MyParcel → Settings**, plak je API-key in *API key*, klik **Save Config** en daarna **Import MyParcel Backoffice settings**.
5. **Eerste label.** Open *Sales → Orders* → kies een betaalde order → **Print MyParcel Label** → controleer pakkettype/opties → **Create**.

::: tip Klaar als je dit ziet
- Onder *Stores → Configuration → MyParcel*: je hebt een geldige API-key opgeslagen
- Vervoerder-tabs verschijnen na *Import MyParcel Backoffice settings*
- Een testorder kun je via **Print MyParcel Label** exporteren
:::

## Wat zoek je?
| Wat wil je doen? | Ga naar |
| --- | --- |
| Voor het eerst opzetten | [Snelstart](#snelstart-in-15-minuten-je-eerste-pakket) |
| Aanbevolen instellingen voor jouw type shop | [4 · Welk shop-profiel ben jij?](#4-welk-shop-profiel-ben-jij) |
| Algemene plugin-instellingen | [5 · Settings · General](#5-settings-general) |
| Vervoerder-specifieke opties | [6 · Settings · Vervoerders](#6-settings-vervoerders) |
| Per product een afwijkende instelling | [7 · Productinstellingen](#7-productinstellingen) |
| Wat een klant in de checkout ziet | [8 · De checkout-ervaring](#8-de-checkout-ervaring) |
| Bulkverwerking voor 50+ orders/dag | [9 · Dagelijks gebruik](#9-dagelijks-gebruik) |
| Iets werkt niet | [10 · Iets werkt niet — diagnose](#10-iets-werkt-niet-diagnose) |
| Antwoord op een veelgestelde vraag | [11 · FAQ](#11-faq) |

## 1 · Voorbereiden in je MyParcel-account
Voordat je in Magento begint, regel je vier dingen in je MyParcel-backoffice:

1. **Factuur- en retouradres** — *Shopinstellingen → Algemeen*. Dit komt op al je labels.
2. **Vervoerders activeren** — *Shopinstellingen → Vervoerders*. Alleen aangevinkte vervoerders verschijnen later in de plugin.
3. **API key genereren** — *Shopinstellingen → Integratie*.
4. **Orderinformatie importeren** (optioneel) — aanzetten als je de [Ordermodus](#api-settings) wilt gebruiken.

## 2 · Plugin installeren
De Magento-plugin wordt via Composer geïnstalleerd. Laat je developer of hostingpartij de volgende commando's op de server uitvoeren:

```bash
composer require myparcelnl/magento
bin/magento setup:upgrade
bin/magento setup:di:compile
bin/magento cache:flush
```

::: details Hyvä-checkout?
Installeer naast bovenstaande ook de compatibility-module:

```bash
composer require hyva-themes/magento2-hyva-checkout-myparcelnl
bin/magento setup:upgrade
```
:::

::: warning Draait de oude PakjeGemak-module nog?
Zet die uit voordat je met deze plugin start. Twee MyParcel-plugins tegelijk leidt tot dubbele labels.
:::

Na installatie vind je de plugin onder **Stores → Configuration → MyParcel**.

## 3 · Plugin koppelen (API-key)
Open **Stores → Configuration → MyParcel → Settings** en plak je API-key bovenaan in het veld *API key*. Klik daarna op **Save Config**.

1. Log in op de MyParcel-backoffice.
2. Ga naar *Shopinstellingen → Integratie*.
3. Kopieer de API-key (meestal 40 tekens).
4. Plak deze in Magento en sla op.

Met de knop **Import MyParcel Backoffice settings** haal je je contract- en vervoerderinstellingen in één klik op. Vervoerder-tabs verschijnen pas na deze import.

![MyParcel Settings met API key veld en Import MyParcel Backoffice settings knop.](./images/magento2/01-api-settings.svg) Na een geldige key verschijnen de vervoerder-tabs.

::: warning Werkt het niet?
Meest voorkomende oorzaken: niet op *Save Config* geklikt · spatie meegekopieerd vóór/na de key · key van een andere shop · cache niet geleegd (`bin/magento cache:flush`).
:::

### Wat doet de plugin in je Magento-admin?
| Waar? | Wat kun je er? |
| --- | --- |
| **Stores → Configuration → MyParcel** | Alle instellingen — *Version and support* en *Settings* (één tab per vervoerder). |
| **Sales → Orders → \[order\] → Print MyParcel Label** | Label aanmaken voor een specifieke bestelling, incl. aanpassen van pakkettype en opties per order. |
| **Catalog → Products → \[product\] → MyParcel Options** | Product-specifieke instellingen (dropoff-delay, age check, mailbox-fit, HS-code, etc.) die de globale defaults overschrijven. |

## 4 · Welk shop-profiel ben jij?
Drie typische profielen met aanbevolen settings. Eén kiezen, instellingen overnemen, dan met [5 · Settings · General](#5-settings-general) finetunen.

### Klein — paar orders per dag, alleen NL
| Instelling | Aanbevolen | Waarom |
| --- | --- | --- |
| Mode (Print settings) | *Concept* | Houdt je in controle terwijl je leert |
| Drop-off delay | 1 | Bestellingen worden de volgende dag verwerkt |
| Paper type | A4 | Geen labelprinter nodig |
| Number of days | 7 | Klant kan een week vooruit kiezen |
| PostNL — *Delivery enabled* | Yes | Standaard NL-vervoerder |
| Insure orders from (€) | 250 | Pakketten boven €250 automatisch verzekerd |

### Drukke shop — 50+ orders/dag
| Instelling | Aanbevolen | Waarom |
| --- | --- | --- |
| Mode (Print settings) | *Direct* | Sneller — labels direct definitief |
| Paper type | A6 (Zebra/Brother labelprinter) | Sneller printen |
| Drop-off delay | 0 (of 1 in piek) | Werkdagen tussen bestelling en aanleveren |
| Bulk *Create & print MyParcel track(s)* | Aan | Verwerk 50+ orders in één klik |
| PostNL + DHL For You | Beide aan | Brede dekking |
| Automate signature on receipt — From price | 250 | Boven €250 verplicht handtekening |

### Brievenbus-only — koffie, kaarten, cosmetica
| Instelling | Aanbevolen | Waarom |
| --- | --- | --- |
| Mailbox settings — *Automate mailbox* | Yes | Verzend automatisch als brievenbuspakje bij passende afmeting/gewicht |
| Mailbox weight | 2000 g (max) | Drempelgewicht voor brievenbuspakje |
| Per product *Fit in mailbox* | Realistisch (bv. 5) | Aantal stuks per brievenbuspakje |
| Pickup active | No | Bij brievenbus geen afhaalkeuze |
| Insure orders | No | Niet beschikbaar voor brievenbuspakje |

::: tip Andere scenario's?
Voor dure sieraden, internationaal of speciale eisen — zie [11 · FAQ](#11-faq) of de uitgebreide shop-profielen in de [WooCommerce-handleiding](./woocommerce.html#4-welk-shop-profiel-ben-jij) (toepasbaar op alle platforms).
:::

## 5 · Settings · General
De algemene tab regelt de koppeling, de verzendkostenregels, bezorgdagen, printinstellingen en hoe het MyParcel-blok in de checkout er uitziet.

![General settings tab met API, Delivery costs, Date settings, Print settings en Delivery methods secties.](./images/magento2/02-general-settings.svg)

### API settings
- **API key** — koppelt je shop aan MyParcel. Zonder geldige key werken de bezorgopties niet.
- **Import MyParcel Backoffice settings** — haalt je actuele contract- en vervoerderinstellingen op uit MyParcel.

### Delivery costs
Definieer welke verzendprijs klanten in de checkout zien. Elke regel bestaat uit een *Rule name*, een *Price* en één of meer condities (gewicht, pakkettype, land). Bv. *"Brievenbuspakje binnen Nederland < 12 kg"* met prijs €4,97.

- **Show or hide JSON textarea** — geavanceerde weergave voor wie regels als JSON wil bewerken.
- **Use Free Shipping** — respecteer Magento's gratis-verzending-regels.

### Date settings
- **Number of days** — hoeveel dagen vooruit klanten een bezorgdag mogen kiezen. Standaard 7.
- **Drop-off delay** — werkdagen tussen bestelling en aanleveren. Zet op 1 als je bestellingen pas de volgende dag verwerkt.

### Print settings
- **Mode** — *Concept* (eerst in MyParcel-backoffice) of *Direct* (direct definitief).
- **Paper type** — *A4* (standaard printer) of *A6* (labelprinter).
- **Label description** — tekst op het label, met variabelen zoals `%order_nr%`.
- **Country of origin** — herkomstland voor internationale zendingen. Standaard NL.
- **Create Concept** — labels eerst als concept zodat je nog kunt wijzigen.
- **Return in the box** — voegt automatisch een retourlabel bij.
- **I use the following weight type** — *gram* of *kilogram* (zelfde eenheid als in Magento).

### Empty package weight
Elk pakkettype heeft een leeg-gewicht; MyParcel telt dit op bij het productgewicht.

| Pakkettype | Typisch leeg-gewicht |
| --- | --- |
| Package (bruine doos) | 200 – 400 g |
| Small package | 100 – 200 g |
| Mailbox (brievenbuspakje) | 50 – 100 g |
| Digital stamp | 10 – 30 g |

### Delivery methods
- **Show details in summary** — toont gekozen bezorgoptie in het besteloverzicht van de klant.
- **Preferred pickup locations view** — *Lijst* of *Kaart* als standaard.
- **Switching the view is allowed** — laat klanten zelf schakelen.
- **Price shown in delivery options** — laat de meerprijs per bezorgoptie zien.
- **Exclude parcel lockers** — verberg pakketautomaten.

## 6 · Settings · Vervoerders
Per vervoerder een eigen tab. Welke tabs zichtbaar zijn hangt af van wat in je MyParcel-contract staat.

![Tabs: General settings, PostNL, DHL For You, DHL Europlus, DHL Parcel Connect, DPD, UPS Standard, GLS, Trunkrs.](./images/magento2/03-carrier-tabs.svg)

::: tip Alle vervoerders gelijk opgebouwd
Hieronder loop ik **PostNL** als voorbeeld door — andere vervoerders volgen dezelfde structuur, met eigen specifieke opties.
:::

### PostNL settings

#### Bezorgtitels
De teksten die je klant in de checkout ziet. Standaard latin tenzij je eigen bewoordingen wilt.

- **Delivery title** — kop boven het PostNL-blok. Standaard: *Thuis of op het werk bezorgd*.
- **Standard / Signature on receipt / Receipt code / Home address only / Priority / Morning / Evening / Mailbox / Digital stamp / Pickup title** — tekst per bezorgoptie.

#### Drop-off days & Cut-off times
- **Drop-off days** — vink de dagen aan waarop je aanlevert bij PostNL.
- **Cut-off time** (per dag) — tot welk tijdstip een bestelling nog dezelfde dag meegaat. Standaard 15:30.

#### Default shipping options
Pas opties automatisch toe boven een drempelprijs.

- **Automate 'Signature on receipt'** + From price.
- **Automate 'Collect package'** + From price.
- **Automate 'Home address only'** + From price.
- **Automate 'Larger than 100 × 70 × 58 cm'** + From price.
- **Automate 'Age check 18+'**.

#### Verzekering
- **Insure orders from (€)** — drempel waarboven automatisch verzekerd.
- **Insure orders up to (NL)** / **(BE)** / **(EU)** / **(ROW)** — maxima per regio.
- **Insure orders for percentage** — verzeker een % van de orderwaarde.

::: details Bezorgmomenten + verzendopties — alle velden
**Digital stamp settings**
- **Automate digital stamp** — verzend automatisch als digitale postzegel bij lichte, platte producten.
- **Default weight** — standaardgewicht voor digitale-postzegelzendingen.

**Mailbox settings**
- **Automate mailbox** — verzend automatisch als brievenbuspakje als gewicht en afmetingen passen.
- **Mailbox weight** — maximumgewicht (standaard 2000 g).
- **Priority delivery (Prio 24 uur)** + **Priority delivery fee**.
- **International mailbox** — brievenbuspakjes naar het buitenland.

**Small Package settings**
- **Automate Small Package** + **Small Package weight**.

**Bezorgmomenten**
- **Morning delivery active** + fee.
- **Evening delivery active** + fee.
- **Pickup active** + fee.

**Delivery settings**
- **Delivery enabled** — PostNL master-toggle.
- **Signature on receipt** + fee.
- **Home address only** + fee.
- **Saturday delivery** + fee.
:::

### Andere vervoerders — verschillen in het kort
| Vervoerder | Bijzonderheden |
| --- | --- |
| **DHL For You** | Brievenbuspakjes ondersteund. Afhalen bij DHL-servicepoint. Geen ochtend/avondlevering. |
| **DHL Europlus** | Zakelijke EU-zendingen. Verzekering per regio (Local/BE/EU/ROW). |
| **DHL Parcel Connect** | Consumentenzendingen binnen Europa. Pickup mogelijk. |
| **DPD** | NL pakket + brievenbuspakje (sinds v4.15). Afhalen bij DPD ParcelShop. |
| **UPS Standard** | Internationaal zakelijk. Minder opties, 3-dagen bezorgvenster standaard. |
| **GLS** | NL/BE. Signature, Only recipient, Saturday delivery. Pickup bij GLS-punt. |
| **Trunkrs** | Snelle NL-bezorger. Receipt code, Fresh food, Frozen, Priority delivery. |

## 7 · Productinstellingen
Op elk product verschijnt een sectie **MyParcel Options** op de edit-pagina. Deze overschrijft de globale defaults uit [§6](#6-settings-vervoerders) per product — handig voor producten met bijzondere eisen.

![MyParcel Options sectie op product-edit pagina met Dropoff-delay, Age check 18+, Fit in digital stamp, HS code, Fit in mailbox, Disable delivery options, Exclude parcel lockers.](./images/magento2/10-product-myparcel-options.svg)

- **Dropoff-delay** — extra werkdagen om dit product te pakken. Voor made-to-order of dropship.
- **Age check 18+** — verplicht legitimatiecheck. Voor alcohol, tabak, messen. Kan niet samen met ochtend-/avondlevering.
- **Fit in digital stamp** — mag dit product als digitale postzegel?
- **HS code** — douanecode voor wereldwijde zendingen. Zoek op [tarief.douane.nl](https://tarief.douane.nl).
- **Fit in mailbox** — hoeveel stuks passen in één brievenbuspakje? `0` = automatisch op gewicht, `-1` = past niet in brievenbus.
- **Disable delivery options** — verbergt het MyParcel-bezorgoptieblok als dit product in het mandje ligt. Voor digitale producten of cadeaubonnen.
- **Exclude parcel lockers** — verbergt pakketautomaten als afhaalpunt voor dit product.

## 8 · De checkout-ervaring
Zodra de klant een bezorgadres invult verschijnt het MyParcel-blok met bezorgopties. Welke opties er staan hangt af van: de actieve vervoerders, de producten in het winkelwagentje en de product-specifieke overrides uit [§7](#7-productinstellingen).

![MyParcel-blok in de Magento-checkout met bezorgopties per vervoerder, afhaalpunten en meerprijzen.](./images/magento2/20-checkout-delivery-options.svg)

### Bezorgopties
- **Standaardlevering** — bezorging tijdens kantooruren.
- **Ochtendlevering** — PostNL bezorgt 's ochtends (meerprijs).
- **Avondlevering** — tussen 18:00 en 22:00 (meerprijs).
- **Zaterdaglevering** — alleen zichtbaar als per vervoerder ingeschakeld.
- **Handtekening voor ontvangst** — bezorger laat klant tekenen.
- **Niet bij de buren bezorgen** — alleen aan ontvanger.
- **18+ legitimatiecheck** — verschijnt automatisch als een product dit vereist.
- **Ophalen bij een PostNL-locatie** — lijst of kaart; pakketautomaten afhankelijk van *Exclude parcel lockers*.
- **Brievenbuspakje** — als het mandje binnen de maatvoering past.
- **Digitale postzegel** — voor platte, lichte zendingen.
- **Prio 24 uur** — prioriteitsbezorging (alleen indien geactiveerd).

## 9 · Dagelijks gebruik

### Workflow 1 — per order
1. Ga naar *Sales → Orders* en open een bestelling.
2. Klik **Print MyParcel Label**.
3. Pas eventueel pakkettype, verzekering of bezorgopties aan voor deze order.
4. Klik **Create**. Het label wordt in de MyParcel-backoffice aangemaakt.

### Workflow 2 — bulk (10+ orders/dag)
1. Ga naar *Sales → Orders*.
2. Selecteer meerdere orders met de checkboxes.
3. Onder *Actions* → **Create & print MyParcel track(s)**.

### Track & Trace in bevestigingsmail
Onder *Stores → Configuration → Sales → Sales Emails → MyParcel Track* zet je de tracking-link in de verzendmail. Zie [FAQ](#11-faq) voor mail-template-conflicten.

::: tip Belasting-moment
Je wordt pas belast wanneer een zending daadwerkelijk aan de vervoerder wordt overgedragen. Digitale postzegels zijn de uitzondering — die worden bij export direct afgerekend.
:::

## 10 · Iets werkt niet — diagnose
Werkt iets niet zoals verwacht? Loop deze tabel van boven naar onder door — drie op de vier issues zijn binnen 5 minuten opgelost.

| Symptoom | Wat te checken |
| --- | --- |
| **Geen bezorgopties in de checkout** | (1) API-key correct opgeslagen? (2) Minstens één vervoerder op *Delivery enabled = Yes*? (3) Bezorgadres binnen *Ship to Specific Countries*? (4) `bin/magento cache:flush` |
| **Cannot select MyParcel na andere shipping method** | Upgrade naar v5.5.2 of hoger; dit is in recente releases verbeterd. Blijft het: MyParcel-support. |
| **"This address can not be split"** | Postcode-checker-plugin gebruikt? Configureer deze zo dat straat en huisnummer als aparte velden blijven bestaan. |
| **"API key invalid"** | Spatie in key? Key van juiste shop? Opnieuw kopiëren uit MyParcel-backoffice *Shopinstellingen → Integratie* en plakken. Cache leegmaken. |
| **"Can't get setting with path" in logs** | Vervoerder staat in logging maar niet actief — onschuldige melding. Wordt verholpen in nieuwere releases. |
| **Shipping methods blijven laden** | Ander shipping method actief met *Show Method if Not Applicable = Yes*? Zet die optie uit. |
| **Labels kloppen niet met instellingen** | Klik *Import MyParcel Backoffice settings* opnieuw. Na upgrade: cache flushen. |
| **Hyvä-checkout — bezorgopties verschijnen niet** | Compatibility-module geïnstalleerd? `composer require hyva-themes/magento2-hyva-checkout-myparcelnl` |

## 11 · FAQ

### Hoe wissel ik het pakkettype voor één specifieke bestelling?
Open de order, klik *Print MyParcel Label* en pas in het popup-venster het pakkettype aan voordat je het label aanmaakt.

### Mag ik meerdere vervoerders tegelijk gebruiken?
Ja, als ze in je MyParcel-contract staan. Activeer elke vervoerder in zijn eigen tab. Klanten zien dan meerdere bezorgblokken in de checkout.

### Ik wil geen pakketautomaten aanbieden — kan dat?
Ga naar *General settings → Delivery methods → Exclude parcel lockers*. Per product kun je dit ook regelen via *Exclude parcel lockers* op de product-edit-pagina.

### Werkt de plugin met third-party checkouts?
Officieel ondersteund: standaard Magento-checkout én Hyvä-checkout (met de `hyva-themes/magento2-hyva-checkout-myparcelnl` module). Andere checkouts werken mogelijk niet volledig — test altijd vóór live.

### Hoe rol ik terug naar een oudere versie?
Composer: `composer require myparcelnl/magento:5.4.0` gevolgd door `bin/magento setup:upgrade` en `cache:flush`. Meld de bug op [github.com/myparcelnl/magento/issues](https://github.com/myparcelnl/magento/issues).

### Mijn klanten krijgen geen bezorgopties als ze postcode eerst invullen
Bekend issue met sommige Postcode-checker plugins. Configureer de checker zo dat straat en huisnummer als aparte velden behouden blijven.

### Hoe verander ik mijn afzenderadres op het label?
Het afzenderadres komt uit je MyParcel-backoffice (*Shopinstellingen → Algemeen*), niet uit Magento.

### Kost de plugin geld?
Nee. Je betaalt alleen voor de zendingen via je MyParcel-tarief.

## Bronnen & support
- [github.com/myparcelnl/magento ↗](https://github.com/myparcelnl/magento) — broncode, releases, issues.
- [developer.myparcel.nl — Magento 2 ↗](https://developer.myparcel.nl/nl/documentatie/13.magento2.html) — officiële installatie- en configuratiehandleiding.
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl) — account, API key, facturatie.
- [Contact MyParcel-support](../contact.md) — **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).
