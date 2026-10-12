---
title: PHP SDK v11
description: "Use myparcelnl/sdk v11 to create shipments, fetch labels, track parcels, handle returns and webhooks, check carrier capabilities, and connect a shop with MyParcel Connect to push orders."
---

Use this page to integrate with MyParcel through `myparcelnl/sdk` v11: create shipments, fetch labels, follow track and trace, create returns, subscribe to webhooks, check what a carrier offers, and connect a shop with MyParcel Connect to push orders.

::: warning v11 is in beta
v11 has no stable release yet. Class names and method signatures can still change between beta releases. Check the [releases ↗](https://github.com/myparcelnl/sdk/releases) before you upgrade to a newer beta. The [PHP SDK](php-sdk.md) page documents v10.
:::

## Requirements

| | Version |
| --- | --- |
| PHP | 7.4 or 8.x |
| Extensions | `ext-openssl`, for MyParcel Connect only |

## Install

```
composer require myparcelnl/sdk:^11.0@beta
```

v11 has no stable release yet, so Composer needs the `@beta` flag to accept it. Without it, Composer installs v10.

## Authentication

v11 authenticates in one of two ways:

- **An API key.** Most services on this page take the key of your MyParcel account as their first constructor argument. Use this for an integration against your own shop.
- **MyParcel Connect.** For an integration you publish and other people install. The merchant authorises the shop in their own browser and you never handle their API key. Connect authenticates the e-commerce services only, which today means the order push. See [MyParcel Connect](#myparcel-connect).

If you pass no API key to a factory, the SDK reads the `API_KEY` environment variable, and after that the older `API_KEY_NL` and `API_KEY_BE`. Without any key it throws an `InvalidArgumentException`.

Some services work differently:

- `CapabilitiesService` has no API key argument. It always reads the key from the environment variables above, see [Carrier capabilities](#carrier-capabilities).
- `MultiColloShipmentService` and the value mapping classes make no API calls and need no key.

## Services

| Service | Use it to |
| --- | --- |
| `ShipmentCreateService` | Create shipments, as concepts or with labels |
| `ShipmentQueryService` | Find shipments by ID or by reference |
| `ShipmentDeleteService` | Delete concept shipments |
| `ShipmentLabelsService` | Get label PDFs, links or direct downloads |
| `ShipmentPrintService` | Print shipments to a printer group |
| `ShipmentTrackTraceService` | Fetch track and trace data |
| `ReturnShipmentService` | Create related or unrelated return shipments |
| `MultiColloShipmentService` | Split a shipment into several colli |
| `WebhookService` | Subscribe to, unsubscribe from and list webhooks |
| `ApiKeyService` | Check an API key and read who it belongs to |
| `CapabilitiesService` | Check what a carrier offers for a given shipment |
| `CarrierContractDefinitionsService` | Fetch the carrier contracts of an account |
| `ApiMapperService` | Convert carrier, delivery type and package type values between API versions |
| `ConnectService` | Connect a shop with MyParcel Connect and keep its access token usable |

## Create a shipment

Build a `Shipment`, put it in a `ShipmentCollection` and pass the collection to `ShipmentCreateService`:

```php
use MyParcelNL\Sdk\Collection\ShipmentCollection;
use MyParcelNL\Sdk\Model\Shipment\Shipment;
use MyParcelNL\Sdk\Services\Shipment\ShipmentCreateService;

$shipment = (new Shipment())
    ->setRecipient([
        'cc'          => 'NL',
        'street'      => 'Antareslaan',
        'number'      => 31,
        'person'      => 'John Doe',
        'city'        => 'Hoofddorp',
        'postal_code' => '2132 JE',
    ])
    ->setCarrier(1)
    ->withPackageType('PACKAGE');

$collection = (new ShipmentCollection())->push($shipment);

$service = new ShipmentCreateService('your-api-key');
$mapping = $service->create($collection);
// [shipmentId => referenceIdentifier, ...]
```

`create()` returns the ID of each new shipment with its reference identifier. Keep the ID: every other shipment service works with it.

`create()` also takes a label format (`'A4'` or `'A6'`) and, for A4, the label positions as its second and third arguments.

## Find and delete shipments

```php
use MyParcelNL\Sdk\Services\Shipment\ShipmentDeleteService;
use MyParcelNL\Sdk\Services\Shipment\ShipmentQueryService;

$query = new ShipmentQueryService('your-api-key');

$shipment  = $query->find(12345);
$shipments = $query->findMany([12345, 12346]);
$shipments = $query->findByReferenceId('order-42');

(new ShipmentDeleteService('your-api-key'))->deleteMany([12345, 12346]);
```

A shipment you find carries its barcode (`getBarcode()`) and the link to the consumer portal (`getLinkConsumerPortal()`).

## Labels

```php
use MyParcelNL\Sdk\Services\Labels\ShipmentLabelsService;

$labels = new ShipmentLabelsService('your-api-key');

// The PDF itself
$labels->setPdfOfLabels([12345, 12346]);
$pdf = $labels->getLabelPdf();

// A link to the PDF
$labels->setLinkOfLabels([12345], 1);
$url = $labels->getLinkOfLabels();

// Send the PDF to the browser as a download
$labels->downloadPdfOfLabels(true);
```

The second argument of `setPdfOfLabels()` and `setLinkOfLabels()` sets both the paper format and where the labels go on the page. It defaults to `1`.

| Value | Result |
| --- | --- |
| A number from `1` to `4` | A4, filling the positions from that number up to 4. `2` prints on positions 2, 3 and 4. |
| An array, such as `[1, 3]` | A4, on exactly those positions |
| Anything else, such as `false` | A6 |

## Print directly

`ShipmentPrintService` sends the labels of a collection to a printer group in the merchant's MyParcel account:

```php
use MyParcelNL\Sdk\Services\Shipment\ShipmentPrintService;

$result = (new ShipmentPrintService('your-api-key'))->print($collection, 'your-printer-group-id');
```

## Track and trace

```php
use MyParcelNL\Sdk\Services\TrackTrace\ShipmentTrackTraceService;

$traces = (new ShipmentTrackTraceService('your-api-key'))->fetchTrackTraceData([12345]);
```

Each trace holds the status, the barcode and the history of the shipment. `getLinkTracktrace()` on a trace returns the carrier's own tracking URL.

## Returns

A related return is linked to a shipment you already sent. An unrelated return stands on its own:

```php
use MyParcelNL\Sdk\Services\Returns\ReturnShipmentService;

$returns = new ReturnShipmentService('your-api-key');

$related = $returns->createRelated([
    ['parent' => 12345, 'carrier' => 1],
], true);

$unrelated = $returns->createUnrelated([
    ['carrier' => 1, 'recipient' => [/* address */]],
]);
```

## Multi-collo

Split one shipment into several colli that travel together:

```php
use MyParcelNL\Sdk\Services\MultiCollo\MultiColloShipmentService;

$multiCollo = (new MultiColloShipmentService())->splitShipment($shipment, 3);
```

## Webhooks

```php
use MyParcelNL\Sdk\Services\Webhook\WebhookService;

$webhooks = new WebhookService('your-api-key');

$id = $webhooks->subscribe(
    WebhookService::HOOK_SHIPMENT_STATUS_CHANGE,
    'https://example.com/webhook'
);

$all = $webhooks->getAll();
$webhooks->unsubscribe($id);
```

| Constant | Fires when |
| --- | --- |
| `HOOK_SHIPMENT_STATUS_CHANGE` | A shipment changes status |
| `HOOK_SHIPMENT_LABEL_CREATED` | A label is created |
| `HOOK_ORDER_STATUS_CHANGE` | An order changes status |
| `HOOK_SHOP_CARRIER_ACCESSIBILITY_UPDATED` | The carriers available to a shop change |
| `HOOK_SHOP_UPDATED` | A shop is updated |

## Check an API key

```php
use MyParcelNL\Sdk\Services\Auth\ApiKeyService;

$service   = new ApiKeyService('your-api-key');
$isValid   = $service->isValid();
$principal = $service->getPrincipal();
```

Use this in a settings screen, so a merchant learns that a key is wrong before the first shipment fails.

## Carrier capabilities

`CapabilitiesService` tells you what a carrier offers for one specific shipment, based on input such as the destination country, the weight, the package type and the delivery options:

```php
use MyParcelNL\Sdk\Model\Shipment\Shipment;
use MyParcelNL\Sdk\Services\Capabilities\CapabilitiesService;

$shipment = (new Shipment())
    ->withRecipientCountryCode('NL')
    ->withWeight(2000);

$capabilities = (new CapabilitiesService())->fromShipment($shipment);
```

`CapabilitiesService` takes no API key. It reads the key from the `API_KEY` environment variable, so set that before you call it. To use a key from elsewhere, pass your own implementation of `CapabilitiesClientInterface` to the constructor.

A capabilities request drops option names it does not know or the API does not support. Ask the request which names it will drop, so your application can report them:

```php
use MyParcelNL\Sdk\Model\Capabilities\CapabilitiesRequest;

$request = CapabilitiesRequest::forCountry('NL')
    ->withOptions(['signature' => null, 'tracked' => null]);

$request->getUnsupportedOptions(); // ['tracked']
```

This checks option names only. It does not check option values, and it does not tell you which options a carrier offers.

## Carrier contracts

`CarrierContractDefinitionsService` returns the carrier contracts of an account. Use it to build carrier settings or to find out which carriers an account can use. Use `CapabilitiesService` instead when the answer depends on a specific shipment.

```php
use MyParcelNL\Sdk\Client\Generated\CoreApi\Model\CapabilitiesPostContractDefinitionsRequestV2;
use MyParcelNL\Sdk\Services\Capabilities\CarrierContractDefinitionsService;

$service = new CarrierContractDefinitionsService('your-api-key');

$all    = $service->getContractDefinitions();
$inPost = $service->getContractDefinitions(CapabilitiesPostContractDefinitionsRequestV2::CARRIER_INPOST);
```

The service returns the generated API models as they are. Read them directly.

## Value mapping

The delivery options, the v1 API and the v2 API name carriers, delivery types and package types differently. `ApiMapperService` converts between them:

```php
use MyParcelNL\Sdk\Services\Mapping\ApiMapperService;

$mapper = ApiMapperService::forCarrier();

$mapper->idFromLegacyName('dhlforyou');  // 9
$mapper->v2NameFromId(9);               // 'DHL_FOR_YOU'
$mapper->legacyNameFromV2Name('DPD');   // 'dpd'
```

Use `forDeliveryType()` or `forPackageType()` for the other two. A conversion returns `null` when there is no mapping. `allRows()` returns the whole map for one category, and `allDomains()` returns all three.

Shipment option names have their own mapper. `ShipmentOptionMapper::v2PropertyFromName()` returns the property name in the capabilities v2 model, or `null`. For example, `signature` and `requiresSignature` both map to `requires_signature`.

## Advanced

### Send extra headers

`ShipmentApiFactory::make()` builds the generated shipment client. Its fourth argument holds headers to send on every request, such as `x-dmp-*` API feature flags. Pass the client to a service as its second constructor argument:

```php
use MyParcelNL\Sdk\Services\CoreApi\ShipmentApiFactory;
use MyParcelNL\Sdk\Services\Shipment\ShipmentCreateService;

$api = ShipmentApiFactory::make('your-api-key', null, null, ['x-dmp-example' => 'true']);

$service = new ShipmentCreateService('your-api-key', $api);
```

The second and third arguments of `make()` override the API host and the user agent.

This works for the services that send their requests through the generated client: creating, finding and deleting shipments, and track and trace. `CarrierContractDefinitionsService` takes the client as its third argument, after the host. The labels, print and returns services build the request with the generated client but send it with a separate HTTP client, so headers set through `make()` do not reach those requests.

### Test your integration

Most services take a generated API client as their second constructor argument. In your own tests, pass a mock of that client, so no test reaches the real API.

| Service | Constructor arguments after the API key |
| --- | --- |
| `ShipmentCreateService`, `ShipmentQueryService`, `ShipmentDeleteService`, `ShipmentTrackTraceService` | `ShipmentApi`, host |
| `ShipmentLabelsService`, `ShipmentPrintService`, `ReturnShipmentService` | `ShipmentApi`, PSR-18 HTTP client, host |
| `CarrierContractDefinitionsService` | host, `ShipmentApi` |
| `ApiKeyService` | the generated IAM `DefaultApi`, host |
| `WebhookService` | `WebhookApi`, host |

The labels, print and returns services send their requests with the PSR-18 client, so mock that one too. `CapabilitiesService` takes a `CapabilitiesClientInterface` as its only argument.

## Upgrading from v10

v11 replaces the consignment stack with generated API clients and typed services. [Upgrading to v11 ↗](https://github.com/myparcelnl/sdk/blob/v11/UPGRADE.md) has a before and after example for every change. The most common replacements:

| v10 (removed) | v11 |
| --- | --- |
| `MyParcelCollection` with `AbstractConsignment` | `ShipmentCollection` with `Shipment` |
| `ConsignmentFactory::createByCarrierId()` | `new Shipment()` with fluent setters |
| `MyParcelCollection::createConcepts()` | `ShipmentCreateService::create()` |
| `MyParcelCollection::setLatestData()` | `ShipmentQueryService::find()`, `findMany()`, `findByReferenceId()` |
| `MyParcelCollection::deleteConcepts()` | `ShipmentDeleteService::deleteMany()` |
| `MyParcelCollection::setPdfOfLabels()` | `ShipmentLabelsService::setPdfOfLabels()` |
| `MyParcelCollection::generateReturnConsignments()` | `ReturnShipmentService::createRelated()` |
| `MyParcelCollection::createUnrelatedReturns()` | `ReturnShipmentService::createUnrelated()` |
| `$consignment->getBarcode()`, `getBarcodeUrl()` | `ShipmentTrackTraceService::fetchTrackTraceData()` |
| `AbstractWebhookWebService` and its subclasses | `WebhookService` |
| `CheckApiKeyWebService::apiKeyIsCorrect()` | `ApiKeyService::isValid()` |
| `CarrierOptionsWebService` | `CarrierContractDefinitionsService` (not a one-to-one replacement) |
| Delivery options adapters | `ShipmentOptions` |

Also removed in v11:

- All consignment models, the delivery options adapters, `MyParcelCollection` and `ConsignmentFactory`.
- The drop-off point.
- `ValidatePostalCode`, `TrackTraceUrl`, `Utils` and `LabelHelper`.

Deprecated, still working in v11: `CarrierApiMapping`, `DeliveryTypeApiMapping`, `PackageTypeApiMapping` and `ApiMappingInterface`. Use `ApiMapperService`. Replace `RefTypesCarrierV2` with `RefCapabilitiesSharedCarrierV2`.

Enum values are validated more loosely but consistently since beta.29. If you relied on an exception for an unknown enum value, test that path again.

Some v10 classes still exist in v11, such as the Order v1 fulfilment classes and `AccountWebService`. Most of them are marked `@internal` and will be replaced. Do not build new code on them. [Upgrading to v11 ↗](https://github.com/myparcelnl/sdk/blob/v11/UPGRADE.md#what-still-works) lists them.

## MyParcel Connect

### When to use Connect

Connect is for an integration you publish and other people install: a plugin, an app, or a hosted
service that any merchant connects to their own MyParcel account. Each merchant authorises it
themselves in their own browser, and each shop ends up with its own credentials, so you never ask a
merchant for an API key and you hold no secret that belongs to them.

It is not for a one-to-one integration against a shop you run yourself. There, a shop API key from
your own MyParcel backoffice does the same work with far fewer moving parts: no route to publish, no
storage to write, and no token to refresh. Reach for Connect when you do not know, at the time you
write the code, whose shop it will run against.

Connect authenticates the e-commerce services, which today means the order push in this section.
Every other service on this page still authenticates with an API key, and you cannot use Connect
for those yet.

### Connect requirements

The shop's MyParcel account must have order management, which is order v2. `GET /whoami` reports it
as `ORDER_MANAGEMENT` in its `features` array, and the SDK exposes that call as
`IamApi\Api\DefaultApi::whoamiGet()`. An account without it authorises at MyParcel and is then refused,
so the callback returns `access_denied` rather than a token. `LEGACY_ORDER_MANAGEMENT` is a
different feature and does not count.

Connect needs `ext-openssl`. It is a Composer suggestion rather than a requirement, because only Connect needs it. Call `ConnectService::isSupported()` before you offer the feature, so a settings screen can say why it is unavailable instead of showing a button that throws.

Connect is new in v11 and replaces nothing, so you can adopt it without migrating the rest.

### How connecting a shop works

Connect is OAuth 2.0 with proof of possession. Three things follow from that, and they are all you need to know to use it:

- **The merchant authorises the shop in a browser.** You send them to MyParcel, they log in there, and MyParcel sends them back to a callback URL on the shop. You never see or store their password, and there is no API key to copy.
- **The shop gets its own key pair.** The SDK makes it on the first call and signs every request with it, so a stolen access token cannot be used without the key.
- **The access token is short-lived.** The SDK refreshes it for you when it is close to expiry, including in cron jobs and webhook handlers.

### What you provide

You provide two things:

**A `ConnectConfig`**, holding the platform you integrate and a key that encrypts what you store:

```php
use MyParcelNL\Sdk\Model\Connect\ConnectConfig;

$config = new ConnectConfig($platform, $encryptionKey);
```

- `$platform` picks the e-commerce service the SDK calls. [`ConnectPlatform::getAllowableEnumValues()` ↗](https://github.com/myparcelnl/sdk/blob/v11/src/Model/Connect/ConnectPlatform.php) returns the values it accepts.
- `$encryptionKey` encrypts the private key and the access token before the SDK hands them to your storage. Keep it out of the database, for example in an environment variable or a secret manager. A key stored next to the data it protects protects nothing.

Each `with` method returns a copy, so a config can be shared:

```php
$config = $config
    ->withExpiryLeewaySeconds(30)             // how early to refresh the token
    ->withScopes([/* see ConnectScope */]);   // narrow the permissions you ask for
```

**A storage class**, implementing [`ConnectStorageInterface` ↗](https://github.com/myparcelnl/sdk/blob/v11/src/Services/Connect/ConnectStorageInterface.php). The SDK keeps no state of its own: it calls your storage to read and write the shop's connection.

You implement all seven of its methods, a load and a save for each of three records plus a `clear()`.
Each one is close to a single line, because every record has a `toArray()` and a static
`fromArray()`: your side of it is deciding where the array goes and reading it back. Use whatever
your application already keeps settings in, such as a database table or your platform's own settings
store. [`FileConnectStorage` ↗](https://github.com/myparcelnl/sdk/blob/v11/dev/connect-poc/FileConnectStorage.php)
implements every method, so you can read the shape in one file. Read it as an example and not as a
pattern to copy: it keeps the records in a JSON file, its writes take no lock, and two requests at
the same time lose one of them.

The three records do not last equally long, and [the interface ↗](https://github.com/myparcelnl/sdk/blob/v11/src/Services/Connect/ConnectStorageInterface.php) documents where each one belongs:

| Record | Keep it | If you lose it |
| --- | --- | --- |
| Installation | As long as the shop exists | The shop becomes a new shop to MyParcel and the merchant reconnects |
| Token | Until the shop disconnects | One refresh |
| Nonces | About an hour | One extra round trip |

::: warning Keep the storage private
Treat these records the way you treat any other credential store. The SDK encrypts the private key
and the access token before they reach you. On its own, a leaked record hands over no usable token.
But the encryption is only as strong as the key you keep elsewhere. The rest of each record, the
connection ID, the token's scope and expiry, and the nonces, is stored as is.

Keep the records where your web server cannot serve them, keep them out of logs, and treat a backup
of them as a backup of a credential. If the storage and the encryption key leak together, the holder
has the shop's identity at MyParcel. There is no revoke endpoint to call: `uninstall()` followed by
a fresh connect gives the shop a new key pair, and the old access token stays valid until it
expires.
:::

No method takes a shop identifier, so one storage instance holds one shop's connection. In a plugin
that is what you want, because the plugin already runs inside one shop. If you serve several shops
from one application, build a storage and a `ConnectService` per shop and let your storage scope its
reads and writes to that shop.

### Connect a shop

Build the service, then give your app two routes.

```php
use MyParcelNL\Sdk\Services\Connect\ConnectService;

$connect = new ConnectService($config, $storage);
```

**Your own route** starts the flow. `start()` returns a URL, and you send the browser to it:

```php
header('Location: ' . $connect->start($shopName, $shopUrl));
```

- `$shopName` is what the merchant sees at MyParcel, 1 to 64 characters.
- `$shopUrl` is the shop's own HTTPS base URL, with no query and no fragment. Take it from configuration your application owns. Never build it from the request, because it is where MyParcel delivers a one-time code.
- Pass your plugin version as a third argument if you have one.

It must be a top-level browser navigation. MyParcel sets a cookie that its own callback checks, and an iframe or a server-side fetch loses it.

::: warning Authorise both routes
Put the flow behind your platform's own administrator check, the way you would any other shop setting. Anyone who reaches an unprotected start route can connect the shop to their own MyParcel account.
:::

**A route on `ConnectService::CALLBACK_PATH`** finishes it. MyParcel builds the return URL as your shop URL plus that path, so the path is not yours to choose. Pass the whole query and store the result:

```php
// $query holds the callback's query parameters, read from your framework's request object.
$state = $connect->handleCallback($query);
```

`handleCallback()` checks the callback against the flow it started, trades its code for an access token, and stores everything through your storage. After it returns, the shop is connected. You do not need a `state` parameter or a CSRF token of your own: the SDK issues and verifies a single-use nonce for that.

Hand the values over unchanged. The SDK treats them as untrusted. It compares the nonce in constant
time before it reads anything else. It ignores a parameter that is not a string. It refuses a
callback whose nonce it did not issue, has already used, or has expired. Filtering or escaping the
values first can only break that comparison.

### Push orders

`EcommerceApiFactory::make()` returns the generated e-commerce client with the signing middleware already on it. Use it rather than constructing the client yourself, which would send every call unsigned:

```php
use MyParcelNL\Sdk\Client\Generated\EcommerceApi\Model\Order;
use MyParcelNL\Sdk\Services\Ecommerce\EcommerceApiFactory;

$order = new Order([
    'ordered_at' => new DateTime('now'),
    'source_id'  => 'ORDER-2026-01042',
]);

$problems = $order->listInvalidProperties();   // [] when the order matches the API's own limits

$results = EcommerceApiFactory::make($connect)->webhookOrdersPost([$order]);
```

`ordered_at` and `source_id` are the only required fields. Send the ID the order has in your shop as `source_id`, so you can recognise it later.

From there the SDK reads the stored token, refreshes it when it is close to expiry, and signs the request. Nothing else is needed to authenticate the call.

Three things about the request and its answer:

- **Up to 50 orders per request.** Send them in one array.
- **The answer is per order.** Some orders can be accepted while others are refused in the same response, so read every item rather than only the status code. A refused item names the field that was wrong.
- **An accepted item carries no order ID.** There is no identifier to link to, which is why `source_id` matters.

Money is expressed in whole micros, so one euro is 1,000,000:

```php
use MyParcelNL\Sdk\Client\Generated\EcommerceApi\Model\Money;

new Money(['currency' => 'EUR', 'micros' => 24950000]);   // EUR 24.95
```

`listInvalidProperties()` is on every generated model, and it names what is wrong with the order before you spend a request on it.

### Manage the connection

Every call in this section is on the `ConnectService` you built above:

| `ConnectService` method | Use it for |
| --- | --- |
| `isConnected()` | Whether this shop has a usable connection. Answered from storage. |
| `getAccessToken()` | A token that is valid now. Refreshes when needed. |
| `refresh()` | Force a new token. Signed calls already do this for you. |
| `disconnect()` | Drop the token, keep the key pair, so connecting again restores the same connection. |
| `uninstall()` | Delete everything, including the key pair. For plugin removal. |

`disconnect()` removes the shop's own copy of the token.

Keep the connection ID from the installation record. MyParcel puts it on requests it sends you, and there is no way to read it back without reconnecting.

### Errors

Everything the SDK refuses, and everything MyParcel refuses, arrives as `MyParcelNL\Sdk\Exception\ConnectException`:

```php
use MyParcelNL\Sdk\Exception\ConnectException;

try {
    $connect->handleCallback($query);
} catch (ConnectException $exception) {
    $exception->getMessage();         // what went wrong
    $exception->getErrorCode();       // the error code MyParcel sent, when it sent one
    $exception->getStatusCode();      // the HTTP status, when there was one
    $exception->getResponseBody();    // the parsed response body
}
```

A merchant who cancels the login also triggers this exception, because MyParcel reports the
cancellation in the callback query. Its error code is `access_denied`, which also covers an account
without order management, so check the account's features before you tell the merchant they
cancelled.

### A working example

[`dev/connect-poc` ↗](https://github.com/myparcelnl/sdk/tree/v11/dev/connect-poc) in the SDK repository is a page that runs this whole flow: it connects a shop, refreshes and drops the token, and pushes an order you can edit. Its `index.php` puts every call above in the order they happen. It ships with the source and not with the package, so `composer require` does not pull it in.

Its default setup uses MyParcel's own development infrastructure. Outside MyParcel, follow [Without traefik ↗](https://github.com/myparcelnl/sdk/tree/v11/dev/connect-poc#without-traefik) in its README: run the page with PHP's built-in server and give it an HTTPS URL that reaches your machine, such as one from ngrok or Cloudflare Tunnel.
