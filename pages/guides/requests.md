---
title: Requests
description: "How to call the MyParcel API: base URL, HTTP methods, headers, the User-Agent convention and content types. The OpenAPI reference stays the source of truth for each endpoint."
---

## Overview
The MyParcel APIs are REST-based and speak JSON over HTTPS. You create and read objects with standard HTTP methods, and every endpoint is documented in the auto-generated [API reference](../api/myparcel.md) — that reference is always the source of truth for paths, parameters and schemas.

## Base URL
The Shipment API lives at `https://api.myparcel.nl`. The other MyParcel APIs each have their own host:

| API | Base URL |
| --- | --- |
| Shipment | `https://api.myparcel.nl` |
| Order | `https://order.api.myparcel.nl` |
| Rule | `https://rule.api.myparcel.nl` |
| Address | `https://address.api.myparcel.nl` |
| Printing | `https://printing.api.myparcel.nl` |
| Product | `https://product.api.myparcel.nl` |

All traffic runs over HTTPS. Plain HTTP is not supported.

## Authentication
Authenticate every request with your base64-encoded API key. See the [Authentication guide](./authentication.md) for the exact header.

## HTTP methods
The API follows standard REST semantics.

| Method | Use | Notes |
| --- | --- | --- |
| `GET` | Read an object or list | Idempotent. Can return JSON, PDF, CSV or XML depending on the endpoint. |
| `POST` | Create an object or submit data | — |
| `PUT` | Create or fully replace an object | — |
| `DELETE` | Remove an object | Returns `204 No Content` unless stated otherwise. |

Not every method is available on every endpoint. Check the [API reference](../api/myparcel.md) for the methods each path supports.

## Headers
- **`Content-Type`** — use `application/json;charset=utf-8` for JSON bodies. See [Character encoding](./character-encoding.md).
- **`Accept`** — set the format you expect back (e.g. `application/json`). Some endpoints use a vendor media type such as `application/vnd.shipment+json`; the [API reference](../api/myparcel.md) lists the exact type per endpoint.
- **`Authorization`** — your API key (see [Authentication](./authentication.md)).
- **`User-Agent`** — identifies your integration (see below).

## The User-Agent convention
Send a `User-Agent` header that identifies your integration. This helps MyParcel support trace issues to the right plugin or backend.

```
User-Agent: MyParcel-<integration>/<version> <cms>/<version> <backend>/<version>
```

Example:

```
User-Agent: MyParcel-MyFirstCMS/1.0.0 MyFirstCMS/3.0.0 PHP/8.1.0
```

::: tip Building a public integration?
Contact MyParcel so your integration can be recognised in the User-Agent string.
:::

## Response formats
Most endpoints return JSON. Some return binary or text instead — labels and invoices come back as **PDF**, and some exports as **CSV**. See [Responses](./responses.md) for status codes and the response envelope.

## Rate limiting
The API applies a per-endpoint rate limit using a sliding window. When you exceed a limit you receive `429 Too Many Requests`. Wait a few minutes before retrying rather than hammering the endpoint. If you regularly hit the limits, contact MyParcel to discuss options such as webhooks. See [Rate limiting](./rate-limiting.md) for the per-endpoint limits and how to handle `429`.

## Example request
```
GET https://api.myparcel.nl/
Accept: application/json;charset=utf-8
Authorization: bearer <base64-encoded API key>
User-Agent: MyParcel-MyFirstCMS/1.0.0 MyFirstCMS/3.0.0 PHP/8.1.0
```
