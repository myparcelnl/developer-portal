---
title: PHP SDK v11
description: "Connect a shop to MyParcel Connect with myparcelnl/sdk v11 and push orders to the e-commerce API. Covers ConnectConfig, the storage you write, the two routes your app needs, and the order push."
---

Use this page to connect a shop with MyParcel Connect and push orders directly to MyParcel. Everything here is in `myparcelnl/sdk` v11.

::: warning This page is a placeholder
v11 is in beta, and this page documents two features of it: connecting a shop and pushing orders. Shipments, labels, track and trace, returns, and printing are not on it yet. Until they are, [Upgrading to v11 ↗](https://github.com/myparcelnl/sdk/blob/v11/UPGRADE.md) has a before and after example for each of them. The [PHP SDK](php-sdk.md) page documents v10.
:::

## When to use Connect

Connect is for an integration you publish and other people install: a plugin, an app, or a hosted
service that any merchant connects to their own MyParcel account. Each merchant authorises it
themselves in their own browser, and each shop ends up with its own credentials, so you never ask a
merchant for an API key and you hold no secret that belongs to them.

It is not for a one-to-one integration against a shop you run yourself. There, a shop API key from
your own MyParcel backoffice does the same work with far fewer moving parts: no route to publish, no
storage to write, and no token to refresh. Reach for Connect when you do not know, at the time you
write the code, whose shop it will run against.

Connect authenticates the e-commerce services, which today means the order push on this page. Every
other MyParcel endpoint still authenticates with an API key, the way it did in v10, and you cannot
use Connect for those yet.

## Requirements

| | Version |
| --- | --- |
| PHP | 7.4 or 8.x |
| Extensions | `ext-openssl`, for Connect only |

The shop's MyParcel account must have order management, which is order v2. `GET /whoami` reports it
as `ORDER_MANAGEMENT` in its `features` array, and the SDK exposes that call as
`IamApi\Api\DefaultApi::whoamiGet()`. An account without it authorises at MyParcel and is then refused,
so the callback returns `access_denied` rather than a token. `LEGACY_ORDER_MANAGEMENT` is a
different feature and does not count.

`ext-openssl` is a Composer suggestion rather than a requirement, because only Connect needs it. Call `ConnectService::isSupported()` before you offer the feature, so a settings screen can say why it is unavailable instead of showing a button that throws.

## Install

```
composer require myparcelnl/sdk:^11.0@beta
```

v11 has no stable release yet, so Composer needs the `@beta` flag to accept it.

## Upgrading from v10

v11 replaces the consignment stack with generated API clients and typed service wrappers. [Upgrading to v11 ↗](https://github.com/myparcelnl/sdk/blob/v11/UPGRADE.md) lists every breaking change with a before and after example.

Connect is new in v11 and replaces nothing, so you can adopt it without migrating the rest.

## How connecting a shop works

Connect is OAuth 2.0 with proof of possession. Three things follow from that, and they are all you need to know to use it:

- **The merchant authorises the shop in a browser.** You send them to MyParcel, they log in there, and MyParcel sends them back to a callback URL on the shop. You never see or store their password, and there is no API key to copy.
- **The shop gets its own key pair.** The SDK makes it on the first call and signs every request with it, so a stolen access token cannot be used without the key.
- **The access token is short-lived.** The SDK refreshes it for you when it is close to expiry, including in cron jobs and webhook handlers.

A later document describes the flow in more depth. You do not need it to use the SDK.

## What you provide

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

## Connect a shop

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

## Push orders

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

## Manage the connection

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

## Errors

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

## A working example

[`dev/connect-poc` ↗](https://github.com/myparcelnl/sdk/tree/v11/dev/connect-poc) in the SDK repository is a page that runs this whole flow: it connects a shop, refreshes and drops the token, and pushes an order you can edit. Its `index.php` puts every call above in the order they happen. It ships with the source and not with the package, so `composer require` does not pull it in.

## Coming soon

The rest of v11, on this page, as each part is ready.
