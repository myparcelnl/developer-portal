---
title: Authentication
description: "Every request to the MyParcel API is authenticated with your shop's API key, base64-encoded, in the Authorization header."
---

## Get your API key
Log in to [backoffice.myparcel.nl](https://backoffice.myparcel.nl) and open **Shop settings → Integration**. Copy the API key, or generate one if there is none yet.

Keep the key on your server. Anyone who has it can create shipments and read data on behalf of your shop, so never send it to a browser or commit it to a repository.

## Send it with every request
Base64-encode the key and send it in the `Authorization` header with the `bearer` scheme:

```
GET https://api.myparcel.nl/shipments
Accept: application/json;charset=utf-8
Authorization: bearer <base64-encoded API key>
```

In a shell, use `printf` rather than `echo`, so no newline ends up inside the encoded key:

```
curl https://api.myparcel.nl/shipments \
  -H "Accept: application/json;charset=utf-8" \
  -H "Authorization: bearer $(printf '%s' "$MYPARCEL_API_KEY" | base64)"
```

In PHP:

```php
$headers = [
    'Authorization' => 'bearer ' . base64_encode($apiKey),
];
```

The [PHP SDK v10](php-sdk.md) sends the same encoded key with the `basic` scheme instead. The examples in this documentation use `bearer`, as the current MyParcel plugins do.

## When a request is refused
A `401 Unauthorized` response means the key is missing, not base64-encoded, or no longer valid. Check that you encode the key itself, without spaces or a trailing newline. If the key was replaced in the Backoffice, copy the new one.

## Using an SDK
The [PHP SDK v12](php-sdk-v12.md) takes the API key as a constructor argument, or reads it from the `API_KEY` environment variable, and builds the header for you.

Publishing an integration that other merchants install? Use [MyParcel Connect](php-sdk-v12.md#myparcel-connect) instead, so the merchant authorises their shop and you never handle their API key.
