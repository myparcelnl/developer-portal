---
title: Errors
description: "How MyParcel reports errors: the error object, the code ranges per category and a catalogue of common error codes. Handle failures by code, not by message text."
---

## Overview
Every `4xx` and `5xx` response carries a structured error so you can handle failures programmatically. Branch on the **code**, not on the message text — messages can change, codes don't.

## The error object
Errors come back in an `errors` array, each with a `code` and a `message`:

```json
{
  "errors": [
    { "code": 3505, "message": "Invalid postal code" }
  ],
  "message": "[3505] Invalid postal code"
}
```

The [API reference](../api/myparcel.md) holds the authoritative error schema per endpoint.

## Error code ranges
Codes are grouped by category, each range covering one concern:

| Range | Category |
| --- | --- |
| 3000–3001 | Authentication |
| 3100–3107 | Request headers |
| 3200–3223 | Query parameters |
| 3500–3520 | Address validation |
| 3700–3768 | Shipment operations |
| 4000–4001 | Delivery / locations |
| 5000 | Date validation |
| 10001–10003 | Webhooks |

## Common error codes
| Code | Meaning | What to do |
| --- | --- | --- |
| `3000` | Access denied | Check your [API key](./authentication.md) and its permissions. |
| `3103` | Invalid authorization header | Base64-encode the key and use the `bearer`/`basic` scheme. |
| `3201` | Invalid query parameter: `size` | Correct the query parameter. |
| `3505` | Invalid postal code | Fix the recipient's postal code. |
| `3704` | Invalid physical properties (length, width, height, weight) | Provide valid dimensions/weight. |
| `3717` | Cannot update shipment | The shipment can no longer be changed at its current status. |
| `3728` | Unsupported carrier | Use a [carrier](./data-types.md#carrier) enabled for your account/platform. |
| `3751` | Missing email and phone in recipient | Add an email or phone — required for this carrier/destination. |
| `4000` | No nearest locations found | Widen the search or check the postal code used for the drop-off / pickup lookup. |
| `5000` | Invalid date | Use the `YYYY-MM-DD HH:MM:SS` format and a valid delivery date. |
| `10002` | Invalid webhook url | Use a lowercase HTTPS URL — see [Webhooks](./webhooks.md). |

This is a representative set. The full, current list of codes is published per endpoint in the [API reference](../api/myparcel.md).

## Handling errors
- **`401`** — authentication failed. See [Authentication](./authentication.md).
- **`422`** — the data is valid JSON but fails validation; read the `errors[]` codes and fix the offending fields.
- **`429`** — you hit a rate limit; back off and retry later.
- **`5xx`** — a problem on the MyParcel side; retry after a short delay.

See [Responses](./responses.md) for the full status-code list.
