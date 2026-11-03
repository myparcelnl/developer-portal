---
title: PHP SDK v12
description: "Use myparcelnl/sdk v12 to create shipments, fetch labels, track parcels, handle returns and webhooks, check carrier capabilities, and connect a shop with MyParcel Connect to push orders and receive commands."
---

Use this page to integrate with MyParcel through `myparcelnl/sdk` v12: create shipments, fetch labels, follow track and trace, create returns, subscribe to webhooks, check what a carrier offers, and connect a shop with MyParcel Connect to push orders and receive commands.

## Requirements

| | Version |
| --- | --- |
| PHP | 8.3 or later |
| Extensions | `ext-openssl`, for MyParcel Connect only |

## Install

```
composer require myparcelnl/sdk:^12.0@beta
```

## Authentication

v12 authenticates in one of two ways:

- **An API key.** Most services on this page take the key of your MyParcel account as their first constructor argument. Use this for an integration against your own shop.
- **MyParcel Connect.** For an integration you publish and other people install. The merchant authorises the shop in their own browser and you never handle their API key. Connect authenticates the e-commerce services only, which today means the order push. See [MyParcel Connect](#myparcel-connect).

If you pass no API key to a factory, the SDK reads the `API_KEY` environment variable, and after that the older `API_KEY_NL` and `API_KEY_BE`. Without any key it throws an `InvalidArgumentException`.

## Services

| Service | Use it to |
| --- | --- |
| `ShipmentCreateService` | Create shipments, as concepts or with labels |
| `ShipmentQueryService` | Find shipments by ID or by reference |
| `ShipmentDeleteService` | Delete concept shipments |
| `ShipmentLabelsService` | Get label PDFs, links or direct downloads |
| `ShipmentPrintService` | Create shipments and print their labels on a printer group |
| `ShipmentTrackTraceService` | Fetch track and trace data |
| `ReturnShipmentService` | Create related or unrelated return shipments |
| `MultiColloShipmentService` | Split a shipment into several colli |
| `WebhookService` | Subscribe to, unsubscribe from and list webhooks |
| `ApiKeyService` | Check an API key and read who it belongs to |
| `CapabilitiesService` | Check what a carrier offers for a given destination, package and set of options |
| `CarrierContractDefinitionsService` | Fetch everything each carrier can offer an account, across all its contracts |
| `ApiMapperService` | Convert carrier, delivery type and package type values between different endpoint definitions |
| `ConnectService` | Connect a shop with MyParcel Connect and keep its access token usable |

## Create a shipment

Build a `Shipment`, put it in a `ShipmentCollection` and pass the collection to `ShipmentCreateService`:

```php
use MyParcelNL\Sdk\Client\Generated\CoreApi\Model\RefCapabilitiesSharedCarrierV2;
use MyParcelNL\Sdk\Client\Generated\CoreApi\Model\RefShipmentPackageTypeV2;
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
    ->setCarrier(RefCapabilitiesSharedCarrierV2::POSTNL)
    ->withPackageType(RefShipmentPackageTypeV2::PACKAGE);

$collection = (new ShipmentCollection())->push($shipment);

$service = new ShipmentCreateService('your-api-key');
$mapping = $service->create($collection);
// [shipmentId => referenceIdentifier, ...]
```

Use the enum classes of the generated client for carriers, package types and other fixed values, as in this example, rather than plain strings or numbers. `setCarrier()` converts the carrier name to the carrier ID the shipment API expects.

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
use MyParcelNL\Sdk\Client\Generated\CoreApi\Model\RefShipmentLabelPrintingPosition;
use MyParcelNL\Sdk\Services\Labels\ShipmentLabelsService;

$labels = new ShipmentLabelsService('your-api-key');

// The PDF itself
$labels->setPdfOfLabels([12345, 12346]);
$pdf = $labels->getLabelPdf();

// A link to the PDF
$labels->setLinkOfLabels([12345], RefShipmentLabelPrintingPosition::TOP_LEFT_QUADRANT);
$url = $labels->getLinkOfLabels();

// Send the PDF to the browser as a download
$labels->downloadPdfOfLabels();
```

`downloadPdfOfLabels()` sends the PDF with its own headers and then ends the script with `exit`, so call it last. Pass `true` to open the PDF in the browser instead of downloading it.

The second argument of `setPdfOfLabels()` and `setLinkOfLabels()` sets both the paper format and where the labels go on the page. Use the constants of `RefShipmentLabelPrintingPosition` for the positions: `TOP_LEFT_QUADRANT` (1), `TOP_RIGHT_QUADRANT` (2), `BOTTOM_LEFT_QUADRANT` (3) and `BOTTOM_RIGHT_QUADRANT` (4). The default is the top left quadrant.

| Value | Result |
| --- | --- |
| One position | A4, filling the page from that position onwards. `TOP_RIGHT_QUADRANT` prints on positions 2, 3 and 4. |
| An array of positions | A4, on exactly those positions |
| Anything else, such as `false` | A6 |

## Printer groups

`ShipmentPrintService` creates the shipments in a collection and sends their labels straight to a printer group, without a PDF in between. It does not print shipments that already exist.

```php
use MyParcelNL\Sdk\Services\Shipment\ShipmentPrintService;

$mapping = (new ShipmentPrintService('your-api-key'))->print($collection, 'your-printer-group-id');
// [shipmentId => referenceIdentifier, ...]
```

The account needs a working printer group before this call succeeds. Set it up through the [Printing API](../api/printing.md):

1. Create a printer group with [`POST /create-printer-group`](../api/printing.md#post-create-printer-group).
2. Make the printers known with [`POST /sync-printers`](../api/printing.md#post-sync-printers), then add one to the group with [`POST /assign-printer-to-group`](../api/printing.md#post-assign-printer-to-group).
3. Give the shop access to the group with [`POST /allow-shops-access-to-printer-group`](../api/printing.md#post-allow-shops-access-to-printer-group).
4. Turn on direct printing with [`POST /enable-direct-printing`](../api/printing.md#post-enable-direct-printing).

The SDK has no public service to list printer groups. Read the ID of the group from [`GET /printer-groups`](../api/printing.md#get-printer-groups).

## Track and trace

```php
use MyParcelNL\Sdk\Services\TrackTrace\ShipmentTrackTraceService;

$traces = (new ShipmentTrackTraceService('your-api-key'))->fetchTrackTraceData([12345]);
```

Each trace holds the status, the barcode and the history of the shipment. `getLinkTracktrace()` on a trace returns the carrier's own tracking URL.

## Returns

A related return is linked to a shipment you already sent. An unrelated return stands on its own:

```php
use MyParcelNL\Sdk\Client\Generated\CoreApi\Model\RefTypesCarrier;
use MyParcelNL\Sdk\Services\Returns\ReturnShipmentService;

$returns = new ReturnShipmentService('your-api-key');

$related = $returns->createRelated([
    [
        'parent'  => 12345,
        'carrier' => RefTypesCarrier::POSTNL,
        'name'    => 'John Doe',
        'email'   => 'john@example.com',
    ],
]);

$unrelated = $returns->createUnrelated([
    ['carrier' => RefTypesCarrier::POSTNL, 'recipient' => [/* address */]],
]);
```

The rows go to the API as they are, so the carrier is a numeric carrier ID here. `RefTypesCarrier` holds those IDs. A related return needs the parent shipment, the carrier, and the name and email address of the consumer. An unrelated return needs at least the carrier.

`createRelated()` takes a second argument, `$sendMail`. Set it to `true` and MyParcel emails the return label to the consumer of the original shipment. It defaults to `false`. Leave it off while you test, or a real customer receives the mail.

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

`CapabilitiesService` tells you what a carrier offers for a given destination, package and set of options. Describe what you want to send in a `CapabilitiesRequest` and pass it to `get()`. You do not need to build a shipment first:

```php
use MyParcelNL\Sdk\Client\Generated\CoreApi\Model\PhysicalPropertiesWeightV2;
use MyParcelNL\Sdk\Client\Generated\CoreApi\Model\RefCapabilitiesSharedCarrierV2;
use MyParcelNL\Sdk\Client\Generated\CoreApi\Model\RefShipmentPackageTypeV2;
use MyParcelNL\Sdk\Model\Capabilities\CapabilitiesRequest;
use MyParcelNL\Sdk\Services\Capabilities\CapabilitiesService;

$request = CapabilitiesRequest::forCountry('NL')
    ->withCarrier(RefCapabilitiesSharedCarrierV2::POSTNL)
    ->withPackageType(RefShipmentPackageTypeV2::PACKAGE)
    ->withPhysicalProperties([
        'weight' => ['value' => 2000, 'unit' => PhysicalPropertiesWeightV2::UNIT_G],
    ]);

$capabilities = (new CapabilitiesService())->get($request);

$capabilities->getPackageTypes();
$capabilities->getDeliveryTypes();
$capabilities->getShipmentOptions();
```

The request also takes a delivery type, a direction, a sender, shipment options and a pickup location. The response merges every result the API returns, so set a carrier when you want the answer for one carrier. Without one, `getCarrier()` returns `null` as soon as the results span more than one carrier.

If you already have a `Shipment`, `fromShipment($shipment)` builds the request from it.

::: warning Known issue
`CapabilitiesService` has no API key argument and reads the key from the `API_KEY` environment variable. Without that variable it throws an `InvalidArgumentException`. Until this changes, set `API_KEY`, or pass your own implementation of `CapabilitiesClientInterface` to the constructor.
:::

A capabilities request drops option names it does not know or the API does not support. Ask the request which names it will drop, so your application can report them:

```php
use MyParcelNL\Sdk\Model\Capabilities\CapabilitiesRequest;

$request = CapabilitiesRequest::forCountry('NL')
    ->withOptions(['signature' => null, 'tracked' => null]);

$request->getUnsupportedOptions(); // ['tracked']
```

This checks option names only. It does not check option values, and it does not tell you which options a carrier offers.

## Contract definitions

`CarrierContractDefinitionsService` returns, for each carrier, everything an account can use across all its contracts: the package types, delivery types, shipment options, transaction types and the maximum number of colli. It is the superset of the capabilities of the account, not a list of the contracts themselves. Use it to build carrier settings or to find out which carriers an account can use. Use `CapabilitiesService` when the answer depends on a destination, a package or a set of options.

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

## Upgrading from v11

v12 needs PHP 8.3 or later, up from 7.4 in v11, and has some breaking changes of its own. [Upgrading to v12 ↗](https://github.com/myparcelnl/sdk/blob/beta/UPGRADE.md) in the SDK repository lists every change. The [PHP SDK v11](php-sdk-v11.md) page documents v11.

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

Connect came in v11 and replaces nothing, so you can adopt it without migrating the rest.

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

- `$platform` picks the e-commerce service the SDK calls. [`ConnectPlatform::getAllowableEnumValues()` ↗](https://github.com/myparcelnl/sdk/blob/beta/src/Model/Connect/ConnectPlatform.php) returns the values it accepts.
- `$encryptionKey` encrypts the private key and the access token before the SDK hands them to your storage. Keep it out of the database, for example in an environment variable or a secret manager. A key stored next to the data it protects protects nothing.

Each `with` method returns a copy, so a config can be shared:

```php
$config = $config
    ->withExpiryLeewaySeconds(30)             // how early to refresh the token
    ->withScopes([/* see ConnectScope */]);   // narrow the permissions you ask for
```

**A storage class**, implementing [`ConnectStorageInterface` ↗](https://github.com/myparcelnl/sdk/blob/beta/src/Services/Connect/ConnectStorageInterface.php). The SDK keeps no state of its own: it calls your storage to read and write the shop's connection.

You implement all seven of its methods, a load and a save for each of three records plus a `clear()`.
Each one is close to a single line, because every record has a `toArray()` and a static
`fromArray()`: your side of it is deciding where the array goes and reading it back. Use whatever
your application already keeps settings in, such as a database table or your platform's own settings
store. [`FileConnectStorage` ↗](https://github.com/myparcelnl/sdk/blob/beta/dev/connect-poc/FileConnectStorage.php)
implements every method, so you can read the shape in one file. Read it as an example and not as a
pattern to copy: it keeps the records in a JSON file, its writes take no lock, and two requests at
the same time lose one of them.

The three records do not last equally long, and [the interface ↗](https://github.com/myparcelnl/sdk/blob/beta/src/Services/Connect/ConnectStorageInterface.php) documents where each one belongs:

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

### Receiving commands

MyParcel sends commands to your plugin, for example when order lines of an order are shipped. Each
command is a signed `POST` request to one URL in your plugin: the command endpoint. Your plugin
checks the request, stores the command, replies, and then does the work.

Once a shop receives commands, stop listening to the shipment webhooks and events of the Core API
for that shop. The commands carry the same information, and handling both ships every order twice.

#### Give MyParcel your command endpoint

Pass the URL as `commandEndpoint` when you start the connect flow:

```php
header('Location: ' . $connect->start(
    shopName: $shopName,
    shopUrl: $shopUrl,
    version: '1.2.3',
    commandEndpoint: 'https://shop.example.com/myparcel/commands',
));
```

- The URL must be https, at most 250 characters, and without a fragment. A query string is allowed,
  for example `https://shop.example.com/?route=myparcel/commands`.
- It must be canonical: a lowercase host, no default port (`:443`), a path that starts with `/`, and
  no user name or password. `start()` throws a `ConnectException` for a URL that breaks one of these
  rules.
- Without a command endpoint, the shop gets no commands.

MyParcel takes the URL when the connect flow completes. The SDK then stores it with the
installation, and `$connect->getCommandEndpoint()` returns it from storage. A reconnect replaces it,
also with `null` when you leave it out. `disconnect()` removes it. `$connect->getConnectionId()`
returns the connection ID the same way; every command carries it.

#### The request MyParcel sends

Your plugin listens on the command endpoint you passed to `start()`. MyParcel sends each command to
that URL as an incoming request:

| Part              | Value                                                                                                                                                                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Method            | `POST`                                                                                                                                                                                                                                                                        |
| URL               | The `commandEndpoint` you passed to `start()`. All commands come in on this one URL.                                                                                                                                                                                          |
| `Content-Type`    | `application/json`                                                                                                                                                                                                                                                            |
| `Content-Digest`  | `sha-256=:…:`, the base64 SHA-256 of the raw body bytes ([RFC 9530](https://www.rfc-editor.org/rfc/rfc9530))                                                                                                                                                                  |
| `Signature-Input` | One member with the label `myparcel`: the covered components `("@method" "@target-uri" "content-type" "content-digest")` and the parameters `created`, `expires` (`created` + 60), `keyid` and `alg="ecdsa-p256-sha256"` ([RFC 9421](https://www.rfc-editor.org/rfc/rfc9421)) |
| `Signature`       | `myparcel=:…:`, the base64 ECDSA P-256 SHA-256 signature, 64 bytes `r‖s`                                                                                                                                                                                                      |
| Body              | UTF-8 JSON: the command fields, plus `commandId`, `connectionId` and `type`                                                                                                                                                                                                   |
| Timeout           | MyParcel waits 10 seconds for your reply                                                                                                                                                                                                                                      |
| Redirects         | MyParcel does not follow redirects                                                                                                                                                                                                                                            |

Every command body has three fields:

- `type` names the command, for example `ORDER_SHIPMENTS`. Use it to pick the handler.
- `connectionId` is the connection between the shop and MyParcel. It must equal the connection ID
  you stored when the shop connected. A reconnect gives a new one.
- `commandId` identifies one command. MyParcel sends the same value each time it sends that command
  again. Do not parse it.

Use only the body for business data. The signature covers the body, through `Content-Digest`, but not
the other headers or the query string.

#### Check every request

Before you act on a request, prove that it comes from MyParcel and is meant for this shop.
`CommandRequestVerifier` runs the checks for you:

```php
use MyParcelNL\Sdk\Exception\CommandCheckUnavailableException;
use MyParcelNL\Sdk\Exception\UnauthorizedCommandException;
use MyParcelNL\Sdk\Services\Ecommerce\CommandRequestVerifier;

$rawBody  = file_get_contents('php://input');
$verifier = new CommandRequestVerifier($connect, $jwksStorage);

try {
    $verifier->verify($_SERVER['REQUEST_METHOD'], getallheaders(), $rawBody);
} catch (UnauthorizedCommandException $exception) {
    return 401;   // A check failed. MyParcel drops the command.
} catch (CommandCheckUnavailableException $exception) {
    return 503;   // The key set could not be fetched. MyParcel sends the command again.
}
```

- `$connect` is your `ConnectService`. The verifier reads the stored command endpoint and connection
  ID from it, and the Connect host the key set comes from.
- `$jwksStorage` is a class you write, see [Store the key set](#store-the-key-set).
- `verify()` takes the method, the headers and the raw body. Pass the headers as your framework
  gives them: names in any casing, and a header that arrived more than once as a list. Pass the body
  bytes exactly as received. The digest is over those bytes, so a decoded and re-encoded body fails
  the check.
- `verify()` returns when every check passed, and throws when one did not. Never put the exception
  message in the response: it names the failed check, for your own log.

##### What the verifier checks

The signature follows these standards:

- [RFC 9421 HTTP Message Signatures ↗](https://www.rfc-editor.org/rfc/rfc9421) for `Signature-Input`
  and `Signature`, with ECDSA P-256 SHA-256.
- [RFC 9530 Digest Fields ↗](https://www.rfc-editor.org/rfc/rfc9530) for `Content-Digest`.
- [RFC 8941 Structured Field Values ↗](https://www.rfc-editor.org/rfc/rfc8941) for the syntax of
  all three headers.
- [RFC 7517 JSON Web Key ↗](https://www.rfc-editor.org/rfc/rfc7517) for the key set that holds the
  public key, at `/.well-known/jwks.json` on the Connect host.

The verifier runs these checks, in this order. The cheap ones come first, so a request that is not
even shaped like a command costs no network call:

1. `Signature-Input` and `Signature` are RFC 8941 dictionaries with exactly one member each, labelled
   `myparcel`. Header lines that arrived more than once are joined with a comma first.
2. The covered components are exactly `("@method" "@target-uri" "content-type" "content-digest")`,
   in this order, without parameters.
3. `alg` is `ecdsa-p256-sha256`. `created` and `expires` are integers, `keyid` is a string.
4. Time: `created` is within 60 seconds of the clock, in both directions. `expires` is in the
   future. `expires - created` is at most 60. There is no extra tolerance.
5. `Content-Digest` has exactly one member, `sha-256`, equal to the SHA-256 of the raw body.
6. `keyid` is the `kid` of a key in MyParcel's key set with `kty: EC`, `crv: P-256` and
   `alg: ES256`. The key set comes from `/.well-known/jwks.json` on the Connect host, never from a
   URL in the request.
7. The signature verifies over the signature base. `@target-uri` is your stored command endpoint,
   `$connect->getCommandEndpoint()`, not a URL rebuilt from the request.
8. The body is a JSON object, and its `connectionId` equals `$connect->getConnectionId()`.

A failed check throws `UnauthorizedCommandException`. The SDK throws
`CommandCheckUnavailableException` instead when it cannot finish a check because the key set could
not be fetched, so you reply `503` and MyParcel tries again. A `401` there would drop the command
for good.

The verifier proves who sent the request, not that it is new. MyParcel resends a command after a
timeout, and a captured request stays valid for up to 60 seconds. Dropping duplicates is your job:
see [Store the command, then reply](#store-the-command-then-reply).

##### Store the key set

MyParcel signs with a private key and publishes the public half in a key set. The verifier keeps
that set in a storage class you write, implementing
[`JwksStorageInterface` ↗](https://github.com/myparcelnl/sdk/blob/beta/src/Services/Connect/JwksStorageInterface.php).
It has two methods, a load and a save for one record, `JwksCache`. Like the Connect records it has a
`toArray()` and a static `fromArray()`, so each method is close to one line:

```php
use MyParcelNL\Sdk\Model\Connect\JwksCache;
use MyParcelNL\Sdk\Services\Connect\JwksStorageInterface;

final class TransientJwksStorage implements JwksStorageInterface
{
    public function loadJwks(): ?JwksCache
    {
        $raw = get_transient('myparcel_jwks');

        return $raw ? JwksCache::fromArray(json_decode($raw, true)) : null;
    }

    public function saveJwks(JwksCache $jwks): void
    {
        set_transient('myparcel_jwks', json_encode($jwks->toArray()), HOUR_IN_SECONDS);
    }
}
```

Nothing in the record is a secret, and it is safe to lose: the next command fetches the set again.
The SDK applies these rules, so you do not have to:

- A stored set is used for at most one hour. After that, the next command fetches it again.
- A `keyid` that is not in the stored set makes the SDK fetch the set again, at most once a minute.
  A `keyid` that is still unknown after that is a failed check.
- A fetch that fails, or answers without a usable key, is not stored, and the request gets a `503`.

#### Read the command

After `verify()` returns, `CommandReader` turns the body into the model for its type:

```php
use MyParcelNL\Sdk\Client\Generated\Jane\EcommerceApi\Model\OrderShipmentsCommand;
use MyParcelNL\Sdk\Exception\InvalidCommandException;
use MyParcelNL\Sdk\Exception\UnknownCommandException;
use MyParcelNL\Sdk\Services\Ecommerce\CommandReader;

try {
    $command = (new CommandReader())->read($rawBody);
} catch (UnknownCommandException $exception) {
    // A type this SDK version does not know. $exception->getType() names it.
    return 404;
} catch (InvalidCommandException $exception) {
    return 400;
}

if (!$command instanceof OrderShipmentsCommand) {
    // A type the SDK knows, but your plugin does not handle.
    return 404;
}
```

`read()` takes the raw body exactly as you received it. It does not check the signature or the
connection ID: that is what `verify()` did.

All four exceptions implement `CommandResponseInterface`, whose `getStatusCode()` returns the status
to reply with: `401` for `UnauthorizedCommandException`, `503` for `CommandCheckUnavailableException`,
`404` for `UnknownCommandException` and `400` for `InvalidCommandException`. One catch block then
replies for all of them, as the example below does.

An enum value that the SDK does not know yet stays the raw string. For example, `$command->order->status`
is an `OrderShipmentsOrderStatus` for a known status, and a string for a status that MyParcel adds
later. Handle both, so a new value does not stop your plugin.

#### Store the command, then reply

MyParcel sends each command at least once, and sometimes more than once. A resend has a new signature
and a new `created`, but the same `commandId`.

- **Drop duplicates.** Store each `connectionId` and `commandId` pair for at least 14 days, in one
  atomic insert-if-absent. If the pair is already stored, reply `202` and do nothing else.
- **Store the pair and the command in one transaction.** If you cannot store the command, roll back
  the pair and reply `503`. A pair without its command loses the command, because the resend then
  looks like a duplicate.
- **Reply first, work later.** Store the command and reply `202` within the 10 seconds. Do the work,
  for example an order status change that sends an email, after the reply.

For example, with a table in your own storage that has the `connectionId` and `commandId` pair as its
key, and the raw body in the same row. Your controller then reads, stores and replies:

```php
use MyParcelNL\Sdk\Client\Generated\Jane\EcommerceApi\Model\OrderShipmentsCommand;
use MyParcelNL\Sdk\Exception\CommandResponseInterface;
use MyParcelNL\Sdk\Services\Ecommerce\CommandReader;
use MyParcelNL\Sdk\Services\Ecommerce\CommandRequestVerifier;

function receiveCommand(string $method, array $headers, string $rawBody): int
{
    try {
        (new CommandRequestVerifier($connect, $jwksStorage))->verify($method, $headers, $rawBody);
        $command = (new CommandReader())->read($rawBody);
    } catch (CommandResponseInterface $exception) {
        return $exception->getStatusCode();   // 401, 503, 404 or 400. Log the message, never send it.
    }

    if (!$command instanceof OrderShipmentsCommand) {
        return 404;   // Your plugin does not handle this type.
    }

    try {
        // Store the row only if the pair is new. A duplicate changes nothing.
        $commands->insertIfNew($command->connectionId, $command->commandId, $rawBody);
    } catch (YourStorageException $exception) {
        return 503;   // MyParcel sends the command again later.
    }

    return 202;       // Also for a duplicate.
}
```

A scheduled job does the work later, and removes old rows:

```php
foreach ($commands->unprocessed() as $row) {
    $command = (new CommandReader())->read($row->body);

    // Mark the lines in $command->shipment->orderLines as shipped,
    // on the order with ID $command->order->sourceId.

    $commands->markProcessed($row);
}

$commands->deleteProcessedOlderThan('14 days');
```

#### Replies

MyParcel ignores the response body. It sends a command again only after a timeout, a network error,
`408`, `429` or a `5xx`. For every other status it drops the command for good.

| Status                                | Use it when                                                                    | MyParcel                      |
| ------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------- |
| `202` (or another `2xx`)              | You stored the command, or it is a duplicate                                   | Done                          |
| `401`                                 | `verify()` threw `UnauthorizedCommandException`                                | Logs it and drops the command |
| `404`                                 | `read()` threw `UnknownCommandException`, your plugin does not handle the type, or the order is unknown | Logs it and drops the command |
| `400`                                 | `read()` threw `InvalidCommandException`                                       | Logs it and drops the command |
| Another `4xx`, such as `409` or `422` | Your plugin refuses the command                                                | Logs it and drops the command |
| `408`, `429`                          | Your plugin is busy                                                            | Sends it again later          |
| `503` (or another `5xx`)              | `verify()` threw `CommandCheckUnavailableException`, or your own storage failed | Sends it again later          |
| `3xx`                                 | Do not use                                                                     | Drops the command             |

Reply `5xx`, not `401`, when your plugin cannot finish a check because of its own failure. The SDK
makes that split for you with the two exceptions. A `401` drops the command for good.

Do not log the `Signature` header, and check that the request logging of your framework does not
write request headers.

#### Order shipments

MyParcel sends `ORDER_SHIPMENTS` when order lines of an order are shipped. One command holds one
shipment.

```json
{
  "type": "ORDER_SHIPMENTS",
  "order": { "sourceId": "1001", "status": "PARTIALLY_SHIPPED" },
  "shipment": {
    "shipmentId": "154873263",
    "orderLines": [{ "sourceId": "5001", "quantity": 2 }]
  },
  "commandId": "6f1c2d3e-4a5b-4c6d-8e7f-0a1b2c3d4e5f",
  "connectionId": "9c9e0d2c-2c0a-4bfa-97cf-8a4f42a0f001"
}
```

| Field                            | Model property                                 | Meaning                                                                              |
| -------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| `order.sourceId`                 | `$command->order->sourceId`                    | The order ID in your shop                                                            |
| `order.status`                   | `$command->order->status`                      | An `OrderShipmentsOrderStatus`, or the raw string for a status the SDK does not know |
| `shipment.shipmentId`            | `$command->shipment->shipmentId`               | The Core API shipment ID, as a string                                                |
| `shipment.orderLines[].sourceId` | `$command->shipment->orderLines[$i]->sourceId` | The order line ID in your shop                                                       |
| `shipment.orderLines[].quantity` | `$command->shipment->orderLines[$i]->quantity` | The shipped quantity of that line                                                    |

Create one shipment in your shop with these order lines and quantities. If your shop cannot ship
separate order lines, mark the order as shipped.

The command does not hold the shipment details, such as the carrier or the barcode. To get them,
call `GET /shipments/{ids}` of the [Core API](../api/) with the `shipmentId`. That call needs an API
key: see [Authentication](#authentication).

A plugin that does not handle `ORDER_SHIPMENTS` replies `404`.

### A working example

[`dev/connect-poc` ↗](https://github.com/myparcelnl/sdk/tree/beta/dev/connect-poc) in the SDK repository is a page that runs this whole flow: it connects a shop, refreshes and drops the token, and pushes an order you can edit. Its `index.php` puts every call above in the order they happen. It ships with the source and not with the package, so `composer require` does not pull it in.

Its default setup uses MyParcel's own development infrastructure. Outside MyParcel, follow [Without traefik ↗](https://github.com/myparcelnl/sdk/tree/beta/dev/connect-poc#without-traefik) in its README: run the page with PHP's built-in server and give it an HTTPS URL that reaches your machine, such as one from ngrok or Cloudflare Tunnel.
