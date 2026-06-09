---
title: Authentication
description: "Authenticate every MyParcel API request with a base64-encoded API key from your Backoffice, sent in the Authorization header."
---

## Your API key
Every request is authenticated with an **API key** that you generate in the MyParcel Backoffice, under your shop's integration settings. The key identifies your account and carries its permissions.

::: warning Keep your key secret
Store the key on your server. Anyone who has it can ship — and bill — on your account. Never expose it in a browser, mobile app or public repository.
:::

## Encode the key
Base64-encode your API key before you send it. For example, the key `abc123` becomes:

```
echo -n 'abc123' | base64
# YWJjMTIz
```

Most languages have a built-in base64 function — there's no need to encode by hand.

## Send it in the Authorization header
Send the encoded key in the `Authorization` header on every request, using the `bearer` scheme:

```
GET https://api.myparcel.nl/shipments
Authorization: bearer BASE64_ENCODED_API_KEY
```

The API also accepts the `basic` scheme with the same base64-encoded key:

```
Authorization: basic BASE64_ENCODED_API_KEY
```

Both schemes are documented in the [API reference](../api/myparcel.md).

## Managing your key
- **Invalidate by regenerating.** To revoke a key, generate a new one in the Backoffice — the old key stops working immediately.
- **One key, one account.** Each key belongs to a single MyParcel account and carries that account's permissions.
- A **`401 Unauthorized`** response means the key is missing, wrong, or no longer valid. See [Responses](./responses.md) for status codes.
