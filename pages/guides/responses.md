---
title: Responses
description: "What the MyParcel API returns: JSON by default, PDF and CSV for labels and exports, the response envelope and the HTTP status codes you can expect."
---

## Overview
Most endpoints return JSON. There are a few exceptions:

- **Labels and invoices** come back as **PDF**.
- **Some exports** come back as **CSV**.
- A **`DELETE`** returns `204 No Content` with no body.
- Long-running work (such as creating shipments or a CSV export) may return **`202 Accepted`** while it is processed.

## The response envelope
Successful JSON responses wrap the result in a top-level `data` object, keyed by the resource:

```json
{
  "data": {
    "shipments": [
      { "id": 100000001 }
    ]
  }
}
```

The exact fields per resource are documented in the [API reference](../api/myparcel.md) — treat that as the source of truth rather than copying shapes by hand.

## HTTP status codes
| Code | Meaning |
| --- | --- |
| `200 OK` | Successful request with a response body. |
| `202 Accepted` | Accepted for asynchronous processing (e.g. shipments, CSV). |
| `204 No Content` | Success with no body — typically after a `DELETE`. |
| `304 Not Modified` | The resource hasn't changed since your cached copy. |
| `400 Bad Request` | The request is malformed. |
| `401 Unauthorized` | Missing or incorrect API key. See [Authentication](./authentication.md). |
| `402 Payment Required` | Payment is needed; the response may include an invoice. |
| `403 Forbidden` | Your key isn't authorised for this action. |
| `404 Not Found` | The resource doesn't exist. |
| `405 Method Not Allowed` | That HTTP method isn't supported on this endpoint. |
| `406 Not Acceptable` | The requested response format isn't supported. |
| `409 Conflict` | The request conflicts with the current state of the resource. |
| `415 Unsupported Media Type` | The `Content-Type` isn't supported. |
| `422 Unprocessable Entity` | The data is valid JSON but fails validation. |
| `5xx` | A problem on the MyParcel side — retry later. |

## Errors
A `4xx` response carries an error body with a human-readable message and one or more error codes. Use those codes to handle failures programmatically rather than parsing the message text.

::: tip Reading error codes
The full, readable catalogue of error codes lives in the **Errors** guide. Until then, each endpoint's error responses are listed in the [API reference](../api/myparcel.md).
:::
