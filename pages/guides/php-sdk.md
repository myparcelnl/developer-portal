---
title: PHP SDK
description: "A typed, autoloaded PHP client for the MyParcel API. Handles auth, retries and rate-limit backoff for you."
---

## Install
```
composer require myparcelnl/sdk
```

Supports PHP 8.1+. PSR-4 autoloaded; no manual requires needed.

## Configure
```
use MyParcel\Sdk\Client;

$mp = new Client([
    'client_id'     => getenv('MP_CLIENT_ID'),
    'client_secret' => getenv('MP_CLIENT_SECRET'),
    'scopes'        => ['shipments.read', 'shipments.write'],
]);
```

## Create a shipment
```
$shipment = $mp->shipments->create([
    'carrier'   => 'postnl',
    'reference' => 'ORDER-2026-01042',
    'recipient' => [
        'name'        => 'J. de Vries',
        'street'      => 'Antwoordnummer 42',
        'postal_code' => '1012AB',
        'city'        => 'Amsterdam',
        'country'     => 'NL',
    ],
]);

echo $shipment->label_url;
```

## Retries & rate limits
The client retries idempotent calls (GET, DELETE) with exponential backoff on `429` and `5xx` responses. Non-idempotent calls use an `Idempotency-Key` header you can supply.

## Source
Open source on GitHub. Issues and PRs welcome.

[github.com/myparcelnl/sdk ↗](https://github.com/myparcelnl/sdk)
