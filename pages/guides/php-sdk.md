---
title: PHP SDK
description: "Technical reference for the official myparcelnl/sdk Composer package. Covers installation, the consignment lifecycle, carriers, labels, returns, the Fulfilment Order API and direct printing."
---

::: tip In short
The PHP SDK wraps the MyParcel REST API in a typed object model: build a `Consignment`, drop it in a `MyParcelCollection`, ship it. The SDK handles request signing, label rendering and PDF stitching. Everything is open source under MIT on [github.com/myparcelnl/sdk ↗](https://github.com/myparcelnl/sdk).
:::

## Looking for…
| Goal | Section |
| --- | --- |
| Install and send your first shipment | [1 · Install](#_1-install) → [4 · Quickstart](#_4-quickstart-first-shipment) |
| Pick a carrier and see its capabilities | [6 · Carriers](#_6-carriers) |
| Package type, delivery type, shipment options | [7 · Consignment options](#_7-consignment-options) |
| Generate PDF labels (A4/A6) | [9 · Labels and printing](#_9-labels-and-printing) |
| Fetch Track & Trace | [10 · Track & Trace](#_10-track-trace) |
| Look up existing consignments | [11 · Query and retrieve](#_11-query-and-retrieve) |
| Create returns | [12 · Returns](#_12-returns) |
| Use the Order API (Fulfilment) | [13 · Order API (Fulfilment)](#_13-order-api-fulfilment) |
| Handle errors | [15 · Exceptions](#_15-exceptions) |
| Migrate from an older version | [17 · Migrate](#_17-migrating-from-older-versions) |

::: warning Status of this page
The old version at [developer.myparcel.nl/documentation/50.php-sdk.html ↗](https://developer.myparcel.nl/documentation/50.php-sdk.html) is outdated (PHP 7.1, namespace `MyParcel\Sdk`). This page is written against `myparcelnl/sdk` v10.7+ and uses the current namespace `MyParcelNL\Sdk\`.
:::

## 1 · Install
```
composer require myparcelnl/sdk
```

PSR-4 autoload — no manual `require` needed. Source: [Packagist ↗](https://packagist.org/packages/myparcelnl/sdk).

### Requirements
| | Version |
| --- | --- |
| PHP | 7.4 or 8.x (8.1+ recommended, 8.4 supported from v10.3.6) |
| Composer | 2.x |
| Extensions | `ext-curl`, `ext-json`, `ext-mbstring` |
| Runtime deps | `setasign/fpdf ^1.8`, `setasign/fpdi ^2.6` (label stitching) |

Composer constraint: `"php": "^7.4 || ^8.0"`. PHP versions below 7.4 are no longer supported.

## 2 · Architecture at a glance
The SDK follows three layers:

```
Carrier  ──►  Consignment  ──►  MyParcelCollection
( ID/name)    (one parcel)      (batch + label I/O)
```

- **Carrier** — a static model per carrier with `ID`, `NAME` and matching `Consignment` class. See [`src/Model/Carrier`](https://github.com/myparcelnl/sdk/tree/main/src/Model/Carrier).
- **Consignment** — all data for a single parcel (sender, recipient, options, physical properties). Carrier-specific subclasses (e.g. `PostNLConsignment`) determine which `delivery_type`, `package_type` and `shipment_option` combinations are allowed. See [`src/Model/Consignment`](https://github.com/myparcelnl/sdk/tree/main/src/Model/Consignment).
- **MyParcelCollection** — collects consignments, talks to the API (`POST /shipments`, `/shipment_labels`, `/track_traces`), generates PDF labels and handles multi-collo. See [`src/Helper/MyParcelCollection.php`](https://github.com/myparcelnl/sdk/blob/main/src/Helper/MyParcelCollection.php).

Top-level namespaces:

| Namespace | Purpose |
| --- | --- |
| `MyParcelNL\Sdk\Factory` | `ConsignmentFactory`, `DeliveryOptionsAdapterFactory` |
| `MyParcelNL\Sdk\Model\Carrier` | Carrier classes and `CarrierFactory` |
| `MyParcelNL\Sdk\Model\Consignment` | `AbstractConsignment` + per-carrier subclasses |
| `MyParcelNL\Sdk\Model\Fulfilment` | `Order`, `OrderLine`, `OrderNote`, `Product` |
| `MyParcelNL\Sdk\Helper` | `MyParcelCollection`, `LabelHelper`, `TrackTraceUrl`, `Utils` |
| `MyParcelNL\Sdk\Services` | Encoders and `CountryService` |
| `MyParcelNL\Sdk\Exception` | All SDK exceptions |

## 3 · Authentication
The SDK authenticates per request with a **shop API key** (Basic auth). There is no OAuth flow at SDK level — the SDK handles any token exchange internally if the API requires it.

```php
$apiKey = getenv('MYPARCEL_API_KEY'); // base64-encoded shop key from the backoffice
```

How the key is used:

```php
use MyParcelNL\Sdk\Factory\ConsignmentFactory;
use MyParcelNL\Sdk\Model\Carrier\CarrierPostNL;

$consignment = ConsignmentFactory::createByCarrierId(CarrierPostNL::ID)
    ->setApiKey($apiKey);
```

`setApiKey()` exists on every consignment, so mixing keys within one collection is possible — useful for multi-shop integrations.

::: warning Key hygiene
Keep keys server-side in env vars, a secret manager or `.env` (outside VCS). Never ship them to the browser. The API rate limit is tied to the key — a leaked key can be abused immediately.
:::

### User agent (required for integrations)
Plugins and custom integrations must identify themselves — without this, debugging is impossible and MyParcel cannot trace the source of an issue.

```php
$consignment->setUserAgentForProposition('CustomShop', '2.4.1');
```

`setUserAgentForProposition(string $proposition, ?string $version)` is the new API; `setUserAgent()` is deprecated and will be removed in the next major. The SDK appends `MyParcelNL-SDK/<sdkVersion>` and `php/<phpVersion>` to the header itself.

## 4 · Quickstart — first shipment
One consignment, one label, A6 PDF on disk.

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
    ->downloadPdfOfLabels();     // streams the PDF to the browser
```

What happens under the hood: the collection calls `POST /shipments`, gets consignment IDs back, then fetches labels via `GET /shipment_labels/{ids}` and stitches them into one PDF.

## 5 · Builder conventions
- **Fluent setters.** Every setter returns `$this` — chain them.
- **Constants over strings.** `PACKAGE_TYPE_PACKAGE` (= 1) and `DELIVERY_TYPE_STANDARD` (= 2) read better than magic numbers and don't break if the API extends its ranges.
- **Validators run automatically.** Each carrier has a `*ConsignmentValidator` that enforces allowed combinations. Calling `setSignature(true)` on a carrier that doesn't support it throws an `InvalidConsignmentException`.
- **`getAllowed*()` methods.** Ask a consignment which options are valid before using them:
  ```php
  $consignment->getAllowedDeliveryTypes();   // ['morning','standard','evening','pickup']
  $consignment->getAllowedPackageTypes();    // ['package','mailbox','letter','digital_stamp','package_small']
  $consignment->getAllowedShipmentOptions(); // ['age_check','insurance','large_format', ...]
  ```

## 6 · Carriers
Every carrier has an `ID` (numeric, used by the API) and a `NAME` (slug, used by name-based factory calls).

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

::: tip Which carriers are available for my account?
Availability is contractual — not every carrier is in every shop contract. The API returns a `403`/validation error if you use a carrier that isn't activated.
:::

## 7 · Consignment options

### Package types
The type determines size rules and which shipment options are available. It varies per carrier; check `getAllowedPackageTypes()`.

| Constant | ID | Name | When |
| --- | --- | --- | --- |
| `PACKAGE_TYPE_PACKAGE` | `1` | `package` | Standard parcel. Default. |
| `PACKAGE_TYPE_MAILBOX` | `2` | `mailbox` | Mailbox parcel (≤ 2 cm thick, NL-only). |
| `PACKAGE_TYPE_LETTER` | `3` | `letter` | Uninsured letter, no track & trace. |
| `PACKAGE_TYPE_DIGITAL_STAMP` | `4` | `digital_stamp` | Digital stamp — weight needs to be set. |
| `PACKAGE_TYPE_PACKAGE_SMALL` | `6` | `package_small` | Small parcel (PostNL). |

### Delivery types
| Constant | ID | Name |
| --- | --- | --- |
| `DELIVERY_TYPE_MORNING` | `1` | `morning` |
| `DELIVERY_TYPE_STANDARD` | `2` | `standard` (default) |
| `DELIVERY_TYPE_EVENING` | `3` | `evening` |
| `DELIVERY_TYPE_PICKUP` | `4` | `pickup` |
| `DELIVERY_TYPE_EXPRESS` | `7` | `express` |

Pickup shipments need a `PickupLocation` — set it via `setPickupLocation(new PickupLocation([...]))`.

### Shipment options
Boolean extras on top of the base service.

| Constant | API key | Setter |
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
| `SHIPMENT_OPTION_PRIORITY_DELIVERY` | `priority_delivery` | `setPriorityDelivery(bool)` (since v10.7.0) |
| `SHIPMENT_OPTION_RECEIPT_CODE` | `receipt_code` | `setReceiptCode(bool)` |
| `SHIPMENT_OPTION_COLLECT` | `collect` | `setCollect(bool)` |
| `SHIPMENT_OPTION_FRESH_FOOD` | `fresh_food` | `setFreshFood(bool)` |
| `SHIPMENT_OPTION_FROZEN` | `frozen` | `setFrozen(bool)` |

::: warning Valid combinations
Not all options can be combined — for example, `receipt_code` + `signature` is blocked. The per-carrier validator throws `InvalidConsignmentException` with the exact rule that was violated.
:::

### Insurance
Amounts are in **euro cents**. Get the allowed maxima per country with `getInsurancePossibilities(?string $cc)`:

```php
$consignment->getInsurancePossibilities('NL'); // [0, 100, 250, 500, ..., 50000]
$consignment->setInsurance(50000);             // €500
```

### Multi-collo (one label flow for multiple parcels)
For shipments that physically consist of multiple parcels but logistically belong together:

```php
(new MyParcelCollection())
    ->addMultiCollo($consignment, 3)        // 1 main parcel + 2 follow-up parcels
    ->setPdfOfLabels()
    ->downloadPdfOfLabels();
```

Only works on carriers that offer multi-collo (`getAllowedExtraOptions()` contains `'multi_collo'`).

## 8 · MyParcelCollection — batch API
`MyParcelCollection` is a Laravel-style collection with SDK-specific methods. The main public API:

| Method | Purpose |
| --- | --- |
| `addConsignment($c)` | Add a single consignment. |
| `addMultiCollo($c, $amount)` | Multi-collo (see above). |
| `addMultiColloConsignments(array $cs)` | Add an already-grouped set in one go. |
| `createConcepts()` | `POST /shipments` for the entire batch. |
| `setLatestData(int $size = 300)` | Hydrate consignments with server data (status, barcode, IDs). |
| `setLinkOfLabels($pos = 1)` | Request a download link for the labels PDF. |
| `setPdfOfLabels($pos = 1)` | Request the PDF bytes (called internally by `downloadPdfOfLabels`). |
| `downloadPdfOfLabels($inline = false)` | Stream the PDF to the browser (`Content-Disposition: attachment` or `inline`). |
| `getLabelPdf()` / `getLinkOfLabels()` | Raw PDF string or label link after `setPdfOfLabels()`/`setLinkOfLabels()`. |
| `printDirect(string $printerGroupId)` | Send directly to a connected printer. Requires v10.6.0+. |
| `generateReturnConsignments(bool $sendMail, ?Closure $modifier)` | Create return shipments based on existing parcels. |
| `fetchTrackTraceData()` | Retrieve track & trace history. |
| `addConsignmentByConsignmentIds(array $ids, string $apiKey)` | Hydrate a collection from existing shipment IDs. |
| `addConsignmentByReferenceIds($ids, $apiKey)` | Same but on `reference_identifier`. |

Order of calls in the typical workflow:

```
addConsignment*() → setLinkOfLabels() or setPdfOfLabels()
                 → downloadPdfOfLabels() or getLabelPdf()
                 → (optional) fetchTrackTraceData()
```

`setPdfOfLabels()` and `setLinkOfLabels()` internally trigger `createConcepts()` if it hasn't run yet — you rarely need to call it explicitly.

## 9 · Labels and printing

### A6 versus A4
The default paper format is A6. For A4 sheets with multiple labels per page, pass a position:

```php
// A6, one label per page
$collection->setPdfOfLabels()->downloadPdfOfLabels();

// A4, label at position 1 (top-left), 2 (top-right), 3 (bottom-left), 4 (bottom-right)
$collection->setPdfOfLabels(2)->downloadPdfOfLabels();

// A4, starting from position 1, auto-fills the sheet
$collection->setPdfOfLabels(1)->downloadPdfOfLabels();
```

Positions 1–4 only matter on A4. On A6 the argument is ignored.

### Direct printing (v10.6.0+)
For shops with a connected label printer in the MyParcel backoffice:

```php
$collection
    ->setLinkOfLabels()
    ->printDirect('printer-group-uuid-here');
```

Get the `printerGroupId` from the backoffice — *Settings → Printers*. Direct printing doesn't request a PDF on disk; the print server is assigned the shipment directly.

### Share a label link without downloading the PDF
```php
$url = $collection->setLinkOfLabels()->getLinkOfLabels();
// signed URL, short-lived — suitable for an email or UI link
```

## 10 · Track & Trace
First hydrate the consignments, then fetch T&T data:

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

`getBarcodeUrl()` returns the **public** track-and-trace URL. Safe to drop into an email to the end customer.

Status constants on `AbstractConsignment`:

| Constant | Meaning |
| --- | --- |
| `STATUS_CONCEPT` (`1`) | Created, label not printed yet. |
| Higher values | Printed, handed over, in transit, delivered, returned. Get the current list from [`/shipments` ↗](../api/myparcel.md). |

## 11 · Query and retrieve
### By consignment ID
```php
$collection = (new MyParcelCollection())
    ->addConsignmentByConsignmentIds([12345678, 12345679], $apiKey)
    ->setLatestData();
```

### By reference identifier
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

Valid filter keys mirror the `GET /shipments` endpoint parameters in the [API reference](../api/myparcel.md). The SDK passes them straight through.

## 12 · Returns
### Return-in-the-box (label travels with the original shipment)
```php
$consignment->setReturn(true);
$collection->addConsignment($consignment);
```

The return label sits on page 2 of the PDF. The customer sticks it on the box and ships it back.

### Printerless return (customer scans a QR code at PostNL)
```php
$consignment->setPrinterlessReturn(true);
```

No printed label — the customer gets a QR code in the portal/email. Only works on carriers that support it.

### Stand-alone return shipment
For returns unrelated to an existing shipment (e.g. an RMA after 30 days):

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

`sendMail: true` triggers the standard MyParcel return email to the recipient with the QR code or label link.

## 13 · Order API (Fulfilment)
For accounts with a fulfilment contract: instead of creating labels directly, you place an *order* that later flows through the fulfilment pipeline.

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
                    ->setName('Linen bag, blue')
                    ->setEan('8712345678905')
            ),
    ]);

(new OrderCollection())
    ->setApiKey($apiKey)
    ->push($order)
    ->save(); // POST /fulfilment/orders
```

### Order notes
Attach fulfilment instructions or CS notes to an order:

```php
use MyParcelNL\Sdk\Collection\Fulfilment\OrderNotesCollection;
use MyParcelNL\Sdk\Model\Fulfilment\OrderNote;

(new OrderNotesCollection())
    ->setApiKey($apiKey)
    ->push(
        (new OrderNote())
            ->setOrderUuid($order->getUuid())
            ->setNote('Add gift wrap')
            ->setAuthor('webshop')
    )
    ->save(); // POST /fulfilment/orders/{id}/notes
```

## 14 · Webhooks
The SDK doesn't ship a webhook server (that's your application), but it does include models to manage subscriptions. See [Webhooks](webhooks.md) for end-to-end examples.

```php
// pseudo: list all existing subscriptions
MyParcelRequest::sendRequest('GET', 'webhook_subscriptions');
```

Available event types are kept up to date in the [API reference](../api/myparcel.md#webhooks).

## 15 · Exceptions
Everything sits under `MyParcelNL\Sdk\Exception\`:

| Exception | HTTP | When |
| --- | --- | --- |
| `InvalidConsignmentException` | `412` | The validator rejects the field combination (carrier + options). |
| `MissingFieldException` | `500` | A required field is empty (e.g. `country`). |
| `ApiException` | `502` | Backend error or no connection to `api.myparcel.nl`. |
| `ValidationException` | `422` | The API returned a field validation that the SDK didn't catch locally. |
| `AccountNotActiveException` | `403` | Shop is paused / contract not active. |
| `NoConsignmentFoundException` | `404` | `addConsignmentByConsignmentIds` with an unknown ID. |

On top of these SDK-specific exceptions you may also see generic PHP exceptions — `InvalidArgumentException` (wrong type passed) and `BadMethodCallException` (no setter for that key).

```php
use MyParcelNL\Sdk\Exception\ApiException;
use MyParcelNL\Sdk\Exception\InvalidConsignmentException;

try {
    $collection->setPdfOfLabels()->downloadPdfOfLabels();
} catch (InvalidConsignmentException $e) {
    // recoverable — log + correct the consignment
} catch (ApiException $e) {
    // network/backend — retry-with-backoff or queue
}
```

## 16 · Testing against the SDK
The SDK uses PHPUnit + Mockery in its own tests. For your integration tests:

- **Unit level** — mock the `MyParcelCurl` helper or the entire `MyParcelCollection` (`addConsignment` is fluent → easy to mock).
- **Integration level** — use a sandbox account and the real API. There is no public sandbox URL; request a test shop via [support@myparcel.nl](mailto:support@myparcel.nl).
- **Snapshot tests on label bytes** are not stable — PDF stitching uses timestamps. Test the business logic, not the bytes.

```bash
composer require --dev mockery/mockery phpunit/phpunit
./vendor/bin/phpunit
```

## 17 · Migrating from older versions
### From the old `MyParcel\Sdk` namespace
The pre-v8 SDK used `MyParcel\Sdk\` without `NL`. Find-and-replace:

```
MyParcel\Sdk\   →   MyParcelNL\Sdk\
```

PSR-4 takes care of the rest — no further autoload config needed.

### To v10.x
Main breaks per minor:

| Version | What changed |
| --- | --- |
| **v10.7.0** | `priority_delivery` added for PostNL mailbox (BBP Prio 24h). No breaks. |
| **v10.6.0** | `printDirect()` on `MyParcelCollection`. |
| **v10.5.0** | Account general settings exposed via `Account` models. |
| **v10.4.0** | Trunkrs as a carrier (`ID 16`). |
| **v10.3.x** | PHP 8.4 deprecation fixes; insurance amounts convert correctly to cents. |
| **v10.x → v9** | `setUserAgent()` is deprecated — use `setUserAgentForProposition()`. |

Full changelog: [github.com/myparcelnl/sdk/blob/main/CHANGELOG.md ↗](https://github.com/myparcelnl/sdk/blob/main/CHANGELOG.md).

## 18 · Contributing and support
- **Source** — [github.com/myparcelnl/sdk ↗](https://github.com/myparcelnl/sdk) (MIT)
- **Issues** — open an issue with PHP version, SDK version and a minimal reproduction.
- **Slack** — `#sdk` in [myparcel-dev.slack.com ↗](https://join.slack.com/t/myparcel-dev/shared_invite/enQtNDkyNTg3NzA1MjM4LTM0Y2IzNmZlY2NkOWFlNTIyODY5YjFmNGQyYzZjYmQzMzliNDBjYzBkOGMwYzA0ZDYzNmM1NzAzNDY1ZjEzOTM)
- **Email** — [support@myparcel.nl](mailto:support@myparcel.nl)

PR guidelines: branch from `main`, write tests with Mockery (no live HTTP), commits follow [Conventional Commits](https://www.conventionalcommits.org/).
