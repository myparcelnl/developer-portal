---
title: PHP SDK
description: "Technische referentie voor het officiële myparcelnl/sdk Composer-package. Behandelt installatie, de consignment-levenscyclus, carriers, labels, retouren, de Fulfilment Order API en direct printen."
---

::: tip In het kort
De PHP SDK verpakt de MyParcel REST API in een typed object-model: bouw een `Consignment`, gooi 'm in een `MyParcelCollection`, verstuur. De SDK regelt request-signing, label-rendering en PDF-stitching. Alles is open source onder MIT op [github.com/myparcelnl/sdk ↗](https://github.com/myparcelnl/sdk).
:::

## Wat zoek je?
| Doel | Sectie |
| --- | --- |
| Installeren en eerste shipment versturen | [1 · Install](#_1-install) → [4 · Quickstart](#_4-quickstart-eerste-zending) |
| Carrier kiezen en hun mogelijkheden zien | [6 · Carriers](#_6-carriers) |
| Pakkettype, delivery type, shipment options | [7 · Consignment opties](#_7-consignment-opties) |
| Labels in PDF (A4/A6) genereren | [9 · Labels en printen](#_9-labels-en-printen) |
| Track & Trace ophalen | [10 · Track & Trace](#_10-track-trace) |
| Bestaande consignments terugzoeken | [11 · Queryen en terughalen](#_11-queryen-en-terughalen) |
| Retouren aanmaken | [12 · Retouren](#_12-retouren) |
| Order API (Fulfilment) gebruiken | [13 · Order API (Fulfilment)](#_13-order-api-fulfilment) |
| Errors afhandelen | [15 · Exceptions](#_15-exceptions) |
| Migreren van een oudere versie | [17 · Migreren](#_17-migreren-van-oudere-versies) |

::: warning Status van deze pagina
De oude variant op [developer.myparcel.nl/documentation/50.php-sdk.html ↗](https://developer.myparcel.nl/documentation/50.php-sdk.html) is verouderd (PHP 7.1, namespace `MyParcel\Sdk`). Deze pagina is geschreven tegen `myparcelnl/sdk` v10.7+ en gebruikt de huidige namespace `MyParcelNL\Sdk\`.
:::

## 1 · Install
```
composer require myparcelnl/sdk
```

PSR-4 autoload — geen handmatige `require` nodig. Bron: [Packagist ↗](https://packagist.org/packages/myparcelnl/sdk).

### Requirements
| | Versie |
| --- | --- |
| PHP | 7.4 of 8.x (8.1+ aanbevolen, 8.4 ondersteund vanaf v10.3.6) |
| Composer | 2.x |
| Extensies | `ext-curl`, `ext-json`, `ext-mbstring` |
| Runtime deps | `setasign/fpdf ^1.8`, `setasign/fpdi ^2.6` (label-stitching) |

Composer constraint: `"php": "^7.4 || ^8.0"`. Lagere PHP-versies dan 7.4 worden niet meer ondersteund.

## 2 · Architectuur in één oogopslag
De SDK volgt drie lagen:

```
Carrier  ──►  Consignment  ──►  MyParcelCollection
( ID/naam)    (één pakket)      (batch + label-IO)
```

- **Carrier** — een statisch model per vervoerder met `ID`, `NAME` en bijbehorende `Consignment`-class. Zie [`src/Model/Carrier`](https://github.com/myparcelnl/sdk/tree/main/src/Model/Carrier).
- **Consignment** — alle data van één pakket (afzender, ontvanger, opties, fysieke eigenschappen). Carrier-specifieke subklassen (bv. `PostNLConsignment`) bepalen welke `delivery_type`, `package_type` en `shipment_option`-combinaties zijn toegestaan. Zie [`src/Model/Consignment`](https://github.com/myparcelnl/sdk/tree/main/src/Model/Consignment).
- **MyParcelCollection** — verzamelt consignments, praat met de API (`POST /shipments`, `/shipment_labels`, `/track_traces`), genereert PDF-labels en regelt multi-collo. Zie [`src/Helper/MyParcelCollection.php`](https://github.com/myparcelnl/sdk/blob/main/src/Helper/MyParcelCollection.php).

Top-level namespaces:

| Namespace | Doel |
| --- | --- |
| `MyParcelNL\Sdk\Factory` | `ConsignmentFactory`, `DeliveryOptionsAdapterFactory` |
| `MyParcelNL\Sdk\Model\Carrier` | Carrier-classes en `CarrierFactory` |
| `MyParcelNL\Sdk\Model\Consignment` | `AbstractConsignment` + per-carrier subklassen |
| `MyParcelNL\Sdk\Model\Fulfilment` | `Order`, `OrderLine`, `OrderNote`, `Product` |
| `MyParcelNL\Sdk\Helper` | `MyParcelCollection`, `LabelHelper`, `TrackTraceUrl`, `Utils` |
| `MyParcelNL\Sdk\Services` | Encoders en `CountryService` |
| `MyParcelNL\Sdk\Exception` | Alle SDK-exceptions |

## 3 · Authenticatie
De SDK authenticeert per request met een **shop-API-key** (Basic auth). Geen OAuth-flow op SDK-niveau — token-uitwisseling regelt de SDK intern als de API dat vereist.

```php
$apiKey = getenv('MYPARCEL_API_KEY'); // base64-encoded shop key uit de backoffice
```

Hoe de key gebruikt wordt:

```php
use MyParcelNL\Sdk\Factory\ConsignmentFactory;
use MyParcelNL\Sdk\Model\Carrier\CarrierPostNL;

$consignment = ConsignmentFactory::createByCarrierId(CarrierPostNL::ID)
    ->setApiKey($apiKey);
```

`setApiKey()` staat op elke consignment, dus mixen van keys binnen één collection is mogelijk — handig voor multi-shop integraties.

::: warning Key-hygiëne
Bewaar keys serverside in env vars, secret manager of `.env` (buiten VCS). Lever ze nooit naar de browser. De API rate-limit zit op de key — een gelekte key is direct misbruikbaar.
:::

### User-agent (verplicht voor integraties)
Plugins en eigen integraties moeten zichzelf identificeren — anders is debuggen onmogelijk en kan MyParcel niet zien wat een issue veroorzaakt.

```php
$consignment->setUserAgentForProposition('CustomShop', '2.4.1');
```

`setUserAgentForProposition(string $proposition, ?string $version)` is de nieuwe API; `setUserAgent()` is deprecated en verdwijnt in de volgende major. De SDK voegt zelf `MyParcelNL-SDK/<sdkVersion>` en `php/<phpVersion>` toe aan de header.

## 4 · Quickstart — eerste zending
Eén consignment, één label, A6-PDF op disk.

```php
<?php
require 'vendor/autoload.php';

use MyParcelNL\Sdk\Factory\ConsignmentFactory;
use MyParcelNL\Sdk\Helper\MyParcelCollection;
use MyParcelNL\Sdk\Model\Carrier\CarrierPostNL;
use MyParcelNL\Sdk\Model\Consignment\AbstractConsignment;

$apiKey = getenv('MYPARCEL_API_KEY');

$consignment = (ConsignmentFactory::createByCarrierId(CarrierPostNL::ID))
    ->setApiKey($apiKey)
    ->setReferenceIdentifier('ORDER-2026-01042')
    ->setCountry(AbstractConsignment::CC_NL)
    ->setPerson('J. de Vries')
    ->setFullStreet('Antwoordnummer 42')
    ->setPostalCode('1012AB')
    ->setCity('Amsterdam')
    ->setEmail('test@example.com')
    ->setPackageType(AbstractConsignment::PACKAGE_TYPE_PACKAGE)
    ->setLabelDescription('Order #146');

(new MyParcelCollection())
    ->addConsignment($consignment)
    ->setUserAgentForProposition('CustomShop', '2.4.1')
    ->setPdfOfLabels()           // POST /shipments + GET /shipment_labels
    ->downloadPdfOfLabels();     // streamt de PDF naar de browser
```

Wat er onder de motorkap gebeurt: de collection roept `POST /shipments` aan, krijgt consignment-ID's terug, vraagt vervolgens labels op via `GET /shipment_labels/{ids}` en stitcht die in één PDF.

## 5 · Builder-conventies
- **Fluent setters.** Elke setter geeft `$this` terug — chain ze.
- **Constants boven strings.** `PACKAGE_TYPE_PACKAGE` (= 1) en `DELIVERY_TYPE_STANDARD` (= 2) zijn beter leesbaar dan magic numbers en breken niet als de API rangetjes uitbreidt.
- **Validators draaien automatisch.** Per carrier zit er een `*ConsignmentValidator` die toegestane combinaties afdwingt. Een `setSignature(true)` op een carrier die dat niet ondersteunt gooit een `InvalidConsignmentException`.
- **`getAllowed*()`-methodes.** Vraag een consignment vóór gebruik welke opties geldig zijn:
  ```php
  $consignment->getAllowedDeliveryTypes();   // ['morning','standard','evening','pickup']
  $consignment->getAllowedPackageTypes();    // ['package','mailbox','letter','digital_stamp','package_small']
  $consignment->getAllowedShipmentOptions(); // ['age_check','insurance','large_format', ...]
  ```

## 6 · Carriers
Iedere carrier heeft een `ID` (numeriek, gebruikt door de API) en een `NAME` (slug, gebruikt in naam-gebaseerde factory-aanroepen).

| Carrier | Class | `ID` | `NAME` |
| --- | --- | --- | --- |
| PostNL | `CarrierPostNL` | `1` | `postnl` |
| bpost | `CarrierBpost` | `2` | `bpost` |
| DPD | `CarrierDPD` | `4` | `dpd` |
| DHL For You | `CarrierDHLForYou` | `9` | `dhlforyou` |
| DHL Parcel Connect | `CarrierDHLParcelConnect` | `10` | `dhlparcelconnect` |
| DHL Europlus | `CarrierDHLEuroplus` | `11` | `dhleuroplus` |
| UPS Standard | `CarrierUPSStandard` | `12` | `upsstandard` |
| UPS Express Saver | `CarrierUPSExpressSaver` | `13` | `upsexpresssaver` |
| GLS | `CarrierGLS` | `14` | `gls` |
| Trunkrs | `CarrierTrunkrs` | `16` | `trunkrs` |

```php
use MyParcelNL\Sdk\Factory\ConsignmentFactory;

ConsignmentFactory::createByCarrierId(2);            // bpost
ConsignmentFactory::createByCarrierName('dhlforyou'); // DHL For You
```

::: tip Welke carriers zijn beschikbaar voor mijn account?
Beschikbaarheid is contractueel — niet elke carrier zit in elk shop-contract. De API geeft een `403`/validation error als je een niet-geactiveerde carrier gebruikt.
:::

## 7 · Consignment-opties

### Package types
Het type bepaalt afmetingsregels en welke shipment-opties beschikbaar zijn. Per carrier verschillend; check `getAllowedPackageTypes()`.

| Constant | ID | Naam | Wanneer |
| --- | --- | --- | --- |
| `PACKAGE_TYPE_PACKAGE` | `1` | `package` | Standaard pakket. Default. |
| `PACKAGE_TYPE_MAILBOX` | `2` | `mailbox` | Brievenbuspakje (≤ 2 cm dik, NL-only). |
| `PACKAGE_TYPE_LETTER` | `3` | `letter` | Onverzekerde brief, geen track & trace. |
| `PACKAGE_TYPE_DIGITAL_STAMP` | `4` | `digital_stamp` | Digitale postzegel — wel sturing nodig om gewicht. |
| `PACKAGE_TYPE_PACKAGE_SMALL` | `6` | `package_small` | Klein pakket (PostNL). |

### Delivery types
| Constant | ID | Naam |
| --- | --- | --- |
| `DELIVERY_TYPE_MORNING` | `1` | `morning` |
| `DELIVERY_TYPE_STANDARD` | `2` | `standard` (default) |
| `DELIVERY_TYPE_EVENING` | `3` | `evening` |
| `DELIVERY_TYPE_PICKUP` | `4` | `pickup` |
| `DELIVERY_TYPE_EXPRESS` | `7` | `express` |

Pickup-zendingen hebben een `PickupLocation` nodig — zet via `setPickupLocation(new PickupLocation([...]))`.

### Shipment options
Booleaanse extra's bovenop het basisvervoer.

| Constant | API-key | Setter |
| --- | --- | --- |
| `SHIPMENT_OPTION_SIGNATURE` | `signature` | `setSignature(bool)` |
| `SHIPMENT_OPTION_ONLY_RECIPIENT` | `only_recipient` | `setOnlyRecipient(bool)` |
| `SHIPMENT_OPTION_AGE_CHECK` | `age_check` | `setAgeCheck(bool)` |
| `SHIPMENT_OPTION_INSURANCE` | `insurance` | `setInsurance(int $cents)` |
| `SHIPMENT_OPTION_LARGE_FORMAT` | `large_format` | `setLargeFormat(bool)` |
| `SHIPMENT_OPTION_RETURN` | `return` | `setReturn(bool)` |
| `SHIPMENT_OPTION_PRINTERLESS_RETURN` | `printerless_return` | `setPrinterlessReturn(bool)` |
| `SHIPMENT_OPTION_HIDE_SENDER` | `hide_sender` | `setHideSender(bool)` |
| `SHIPMENT_OPTION_SAME_DAY_DELIVERY` | `same_day_delivery` | `setSameDayDelivery(bool)` |
| `SHIPMENT_OPTION_PRIORITY_DELIVERY` | `priority_delivery` | `setPriorityDelivery(bool)` (sinds v10.7.0) |
| `SHIPMENT_OPTION_RECEIPT_CODE` | `receipt_code` | `setReceiptCode(bool)` |
| `SHIPMENT_OPTION_COLLECT` | `collect` | `setCollect(bool)` |
| `SHIPMENT_OPTION_FRESH_FOOD` | `fresh_food` | `setFreshFood(bool)` |
| `SHIPMENT_OPTION_FROZEN` | `frozen` | `setFrozen(bool)` |

::: warning Geldige combinaties
Niet alle opties zijn met elkaar te combineren — bv. `receipt_code` + `signature` is geblokkeerd. De per-carrier validator gooit `InvalidConsignmentException` met de exacte regel die overtreden wordt.
:::

### Verzekering
Bedragen in **eurocent**. De toegestane maxima per land vraag je op met `getInsurancePossibilities(?string $cc)`:

```php
$consignment->getInsurancePossibilities('NL'); // [0, 100, 250, 500, ..., 50000]
$consignment->setInsurance(50000);             // €500
```

### Multi-collo (één label-stroom voor meerdere colli)
Voor zendingen die fysiek uit meerdere colli bestaan maar logistiek bij elkaar horen:

```php
(new MyParcelCollection())
    ->addMultiCollo($consignment, 3)        // 1 hoofdcollo + 2 vervolgcolli
    ->setPdfOfLabels()
    ->downloadPdfOfLabels();
```

Werkt alleen op carriers die multi-collo aanbieden (`getAllowedExtraOptions()` bevat `'multi_collo'`).

## 8 · MyParcelCollection — batch-API
`MyParcelCollection` is een Laravel-stijl collection met SDK-specifieke methods. Belangrijkste publieke API:

| Method | Doel |
| --- | --- |
| `addConsignment($c)` | Voeg één consignment toe. |
| `addMultiCollo($c, $amount)` | Multi-collo (zie boven). |
| `addMultiColloConsignments(array $cs)` | Reeds-gegroepeerde set in één keer toevoegen. |
| `createConcepts()` | `POST /shipments` voor de hele batch. |
| `setLatestData(int $size = 300)` | Hydrate consignments met server-data (status, barcode, IDs). |
| `setLinkOfLabels($pos = 1)` | Vraag download-link voor labels-PDF op. |
| `setPdfOfLabels($pos = 1)` | Vraag PDF-bytes op (intern aanroepbaar door `downloadPdfOfLabels`). |
| `downloadPdfOfLabels($inline = false)` | Stream PDF naar de browser (`Content-Disposition: attachment` of `inline`). |
| `getLabelPdf()` / `getLinkOfLabels()` | Raw PDF-string of label-link na `setPdfOfLabels()`/`setLinkOfLabels()`. |
| `printDirect(string $printerGroupId)` | Stuur direct naar een gekoppelde printer. Vereist v10.6.0+. |
| `generateReturnConsignments(bool $sendMail, ?Closure $modifier)` | Maak retourzendingen aan op basis van bestaande pakketten. |
| `fetchTrackTraceData()` | Haal track & trace-historie op. |
| `addConsignmentByConsignmentIds(array $ids, string $apiKey)` | Hydrate een collection vanuit bestaande shipment-IDs. |
| `addConsignmentByReferenceIds($ids, $apiKey)` | Idem op `reference_identifier`. |

Volgorde van calls in de typische workflow:

```
addConsignment*() → setLinkOfLabels() of setPdfOfLabels()
                 → downloadPdfOfLabels() of getLabelPdf()
                 → (optioneel) fetchTrackTraceData()
```

`setPdfOfLabels()` en `setLinkOfLabels()` triggeren intern `createConcepts()` als dat nog niet gebeurd is — je hoeft het zelden expliciet aan te roepen.

## 9 · Labels en printen

### A6 versus A4
Default papierformaat is A6. Voor A4-vellen met meerdere labels per pagina geef je een positie mee:

```php
// A6, één label per pagina
$collection->setPdfOfLabels()->downloadPdfOfLabels();

// A4, label op positie 1 (linksboven), 2 (rechtsboven), 3 (linksonder), 4 (rechtsonder)
$collection->setPdfOfLabels(2)->downloadPdfOfLabels();

// A4, vanaf positie 1, automatisch doorvullen
$collection->setPdfOfLabels(1)->downloadPdfOfLabels();
```

Posities 1–4 zijn alleen relevant voor A4. Op A6 wordt het argument genegeerd.

### Direct printen (v10.6.0+)
Voor klanten met een gekoppelde label-printer in de MyParcel backoffice:

```php
$collection
    ->setLinkOfLabels()
    ->printDirect('printer-group-uuid-here');
```

Het `printerGroupId` haal je uit de backoffice — *Settings → Printers*. Direct printen vraagt geen PDF aan op disk; de printserver krijgt de zending direct toegewezen.

### Label-link delen zonder PDF te downloaden
```php
$url = $collection->setLinkOfLabels()->getLinkOfLabels();
// signed URL, kort geldig — geschikt voor e-mail of UI-link
```

## 10 · Track & Trace
Eerst de consignments hydraten, dan T&T-data ophalen:

```php
$collection
    ->setLatestData()         // status + barcode
    ->fetchTrackTraceData();  // history events

foreach ($collection->getConsignments() as $c) {
    echo $c->getBarcode();
    echo $c->getBarcodeUrl(
        $c->getBarcode(),
        $c->getPostalCode(),
        $c->getCountry()
    );
}
```

`getBarcodeUrl()` levert de **publieke** track-and-trace-URL. Plakt veilig in een e-mail naar de eindklant.

Status-constanten op `AbstractConsignment`:

| Constant | Betekenis |
| --- | --- |
| `STATUS_CONCEPT` (`1`) | Aangemaakt, label nog niet geprint. |
| Hogere waardes | Geprint, overgedragen, in transit, afgeleverd, retour. Vraag de actuele lijst op via [`/shipments` ↗](../api/myparcel.md). |

## 11 · Queryen en terughalen
### Op consignment-ID
```php
$collection = (new MyParcelCollection())
    ->addConsignmentByConsignmentIds([12345678, 12345679], $apiKey)
    ->setLatestData();
```

### Op reference identifier
```php
$collection = (new MyParcelCollection())
    ->addConsignmentByReferenceIds(['ORDER-2026-01042'], $apiKey)
    ->setLatestData();
```

### Filter / search
```php
$collection = MyParcelCollection::query($apiKey, [
    'q'      => 'de Vries',
    'status' => AbstractConsignment::STATUS_CONCEPT,
    'from'   => '2026-04-01 00:00:00',
    'to'     => '2026-05-01 00:00:00',
    'size'   => 100,
]);
```

Geldige filter-keys volgen de `GET /shipments`-endpointparameters in de [API-referentie](../api/myparcel.md). De SDK zet ze 1-op-1 door.

## 12 · Retouren
### Retour-in-de-doos (label meestuurt met originele zending)
```php
$consignment->setReturn(true);
$collection->addConsignment($consignment);
```

Het label van de retour zit op pagina 2 van de PDF. Klant plakt 'm op de doos en stuurt 'm terug.

### Printerless return (klant scant QR-code bij PostNL)
```php
$consignment->setPrinterlessReturn(true);
```

Geen geprint label — de klant krijgt een QR-code in de portal/e-mail. Werkt alleen op carriers die het ondersteunen.

### Losse retourzending genereren
Voor retouren die los staan van een bestaande zending (bv. RMA na 30 dagen):

```php
$collection
    ->addConsignmentByConsignmentIds([$originalId], $apiKey)
    ->generateReturnConsignments(
        sendMail: true,
        modifier: function ($returnConsignment) {
            $returnConsignment->setLabelDescription('RMA-2026-7712');
        }
    );
```

`sendMail: true` triggert de standaard MyParcel-retourmail naar de ontvanger met de QR-code of label-link.

## 13 · Order API (Fulfilment)
Voor accounts met fulfilment-contract: in plaats van direct labels aanmaken, plaats je een *order* die later in de fulfilment-flow uitvalt.

```php
use MyParcelNL\Sdk\Collection\Fulfilment\OrderCollection;
use MyParcelNL\Sdk\Model\Fulfilment\Order;
use MyParcelNL\Sdk\Model\Fulfilment\OrderLine;
use MyParcelNL\Sdk\Model\Fulfilment\Product;
use MyParcelNL\Sdk\Model\Recipient;

$order = (new Order())
    ->setExternalIdentifier('ORDER-2026-01042')
    ->setRecipient(new Recipient([
        'cc'         => 'NL',
        'person'     => 'J. de Vries',
        'street'     => 'Antwoordnummer',
        'number'     => '42',
        'postalCode' => '1012AB',
        'city'       => 'Amsterdam',
    ]))
    ->setOrderLines([
        (new OrderLine())
            ->setQuantity(2)
            ->setProduct(
                (new Product())
                    ->setSku('SKU-7712')
                    ->setName('Linnen tas, blauw')
                    ->setEan('8712345678905')
            ),
    ]);

(new OrderCollection())
    ->setApiKey($apiKey)
    ->push($order)
    ->save(); // POST /fulfilment/orders
```

### Order notes
Markeer fulfilment-instructies of cs-notities op een order:

```php
use MyParcelNL\Sdk\Collection\Fulfilment\OrderNotesCollection;
use MyParcelNL\Sdk\Model\Fulfilment\OrderNote;

(new OrderNotesCollection())
    ->setApiKey($apiKey)
    ->push(
        (new OrderNote())
            ->setOrderUuid($order->getUuid())
            ->setNote('Cadeaupapier toevoegen')
            ->setAuthor('webshop')
    )
    ->save(); // POST /fulfilment/orders/{id}/notes
```

## 14 · Webhooks
De SDK heeft geen webhook-server (dat is jouw applicatie), maar wel models om subscriptions te beheren. Zie [Webhooks](webhooks.md) voor end-to-end voorbeelden.

```php
// pseudo: alle bestaande subscriptions inzien
MyParcelRequest::sendRequest('GET', 'webhook_subscriptions');
```

Beschikbare event-types worden actueel gehouden in de [API-referentie](../api/myparcel.md#webhooks).

## 15 · Exceptions
Alles in `MyParcelNL\Sdk\Exception\`:

| Exception | HTTP | Wanneer |
| --- | --- | --- |
| `InvalidConsignmentException` | `412` | Validator weigert de combinatie van velden (carrier + opties). |
| `MissingFieldException` | `500` | Verplicht veld leeg gelaten (bv. `country`). |
| `ApiException` | `502` | Backend-fout of geen verbinding met `api.myparcel.nl`. |
| `ValidationException` | `422` | API gaf veld-validatie terug die de SDK lokaal niet ving. |
| `AccountNotActiveException` | `403` | Shop is gepauzeerd / contract niet actief. |
| `NoConsignmentFoundException` | `404` | `addConsignmentByConsignmentIds` met onbekende ID. |

Naast deze SDK-eigen exceptions kun je ook generieke PHP-exceptions terugkrijgen — `InvalidArgumentException` (verkeerd type doorgegeven) en `BadMethodCallException` (geen setter voor die key).

```php
use MyParcelNL\Sdk\Exception\ApiException;
use MyParcelNL\Sdk\Exception\InvalidConsignmentException;

try {
    $collection->setPdfOfLabels()->downloadPdfOfLabels();
} catch (InvalidConsignmentException $e) {
    // herstelbaar — log + corrigeer consignment
} catch (ApiException $e) {
    // network/backend — retry-with-backoff of queue
}
```

## 16 · Testen tegen de SDK
De SDK gebruikt PHPUnit + Mockery in zijn eigen tests. Voor jouw integratietests:

- **Unit-niveau** — mock de `MyParcelCurl`-helper of de hele `MyParcelCollection` (`addConsignment` is fluent → makkelijk te mocken).
- **Integratie-niveau** — gebruik een sandbox-account en de echte API. Er is geen public sandbox-URL; vraag een test-shop aan via [support@myparcel.nl](mailto:support@myparcel.nl).
- **Snapshot tests op label-bytes** zijn niet stabiel — de PDF-stitching gebruikt timestamps. Test de business logica, niet de bytes.

```bash
composer require --dev mockery/mockery phpunit/phpunit
./vendor/bin/phpunit
```

## 17 · Migreren van oudere versies
### Vanaf de oude `MyParcel\Sdk`-namespace
De pre-v8 SDK gebruikte `MyParcel\Sdk\` zonder `NL`. Find-and-replace:

```
MyParcel\Sdk\   →   MyParcelNL\Sdk\
```

PSR-4 doet de rest — geen verdere autoload-config nodig.

### Naar v10.x
Belangrijkste breaks per minor:

| Versie | Wat veranderde |
| --- | --- |
| **v10.7.0** | `priority_delivery` toegevoegd voor PostNL-mailbox (BBP Prio 24h). Geen breaks. |
| **v10.6.0** | `printDirect()` op `MyParcelCollection`. |
| **v10.5.0** | Account general settings exposed via `Account`-models. |
| **v10.4.0** | Trunkrs als carrier (`ID 16`). |
| **v10.3.x** | PHP 8.4 deprecation-fixes; insurance-bedragen converteren correct naar cents. |
| **v10.x → v9** | `setUserAgent()` is deprecated — gebruik `setUserAgentForProposition()`. |

Volledige changelog: [github.com/myparcelnl/sdk/blob/main/CHANGELOG.md ↗](https://github.com/myparcelnl/sdk/blob/main/CHANGELOG.md).

## 18 · Bijdragen en support
- **Bron** — [github.com/myparcelnl/sdk ↗](https://github.com/myparcelnl/sdk) (MIT)
- **Issues** — open een issue met PHP-versie, SDK-versie en een minimaal reproductievoorbeeld.
- **Slack** — `#sdk` in [myparcel-dev.slack.com ↗](https://join.slack.com/t/myparcel-dev/shared_invite/enQtNDkyNTg3NzA1MjM4LTM0Y2IzNmZlY2NkOWFlNTIyODY5YjFmNGQyYzZjYmQzMzliNDBjYzBkOGMwYzA0ZDYzNmM1NzAzNDY1ZjEzOTM)
- **E-mail** — [support@myparcel.nl](mailto:support@myparcel.nl)

PR-richtlijnen: branch vanaf `main`, schrijf tests met Mockery (geen live HTTP), commits volgen [Conventional Commits](https://www.conventionalcommits.org/).
