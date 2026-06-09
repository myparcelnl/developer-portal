---
title: Character encoding
description: "All MyParcel API traffic is UTF-8. Always declare charset=utf-8 in your Content-Type header so names and addresses arrive intact."
---

## UTF-8 everywhere
All content sent to and received from the MyParcel API must be encoded in **UTF-8**. Declare the charset explicitly in your `Content-Type` header:

```
Content-Type: application/json;charset=utf-8
```

## Why it matters
Recipient names, street names and cities often contain accented or non-Latin characters (é, ñ, ü, ø, …). Sending them in the wrong encoding produces garbled labels and undeliverable parcels. UTF-8 covers every character MyParcel supports, so set it once and you're safe.

::: tip
Most HTTP clients default to UTF-8, but the charset is not always sent. Set it explicitly to avoid surprises.
:::
