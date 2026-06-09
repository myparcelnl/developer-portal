---
title: Rate limiting
description: "The MyParcel API limits how often you can call each endpoint. Learn how the sliding window works, what a 429 means and how to stay within the limits."
---

## Overview
The MyParcel API applies a **rate limit per method + endpoint combination**, using a **sliding window**. When you exceed a limit you receive `429 Too Many Requests` and the request is ignored.

Each combination has its own counter. `GET /shipments/{ids}` and `POST /shipments`, for example, are limited independently — using up one does not affect the other.

## How the sliding window works
- Every request counts toward the limit for that exact method + endpoint.
- When the limit is reached, further calls return `429` until the window slides forward.
- **Failed `429` calls also count.** Retrying immediately keeps the counter full and extends the block — back off instead.
- A combination typically frees up again after about **5 minutes**.

::: warning Don't retry in a tight loop
After a `429`, wait before trying again. Hammering the endpoint resets the clock and keeps you blocked longer.
:::

## Worked example
You fire **100 GET requests in 15 seconds** at an endpoint capped at **100 calls / 5 minutes**. You hit the limit almost immediately and stay blocked for roughly **4 minutes 45 seconds** — until the window slides past your burst. `POST` calls to the same path are unaffected, because they have their own limit.

## Current limits
These are indicative limits for common endpoints. Exact values can change.

| Method | Endpoint | Limit |
| --- | --- | --- |
| `GET` | `/` | 30 / 5 min |
| `GET` | `/delivery_options` | 60 / 1 min |
| `GET` | `/drop_off_points` | 300 / 5 min |
| `POST` | `/shipments` | 500 / 5 min |
| `GET` | `/shipments/{ids}` | 1000 / 5 min |
| `POST` | `/webhook_subscriptions` | 30 / 5 min |

::: tip These figures are indicative
Rate limits are not part of the OpenAPI spec and may change over time. Treat the table as a guideline, handle `429` defensively in code, and contact MyParcel if you need higher limits for your use case.
:::

## Staying within the limits
- **Don't poll for status.** Use [webhooks](./webhooks.md) to receive updates instead of repeatedly calling `GET`.
- **Batch where you can.** Many endpoints accept multiple IDs in one call — fetch several shipments at once instead of one per request.
- **Back off on `429`.** Pause (a few minutes) before retrying, and spread bursts of traffic over time.

See [Requests](./requests.md) for the general request conventions.
