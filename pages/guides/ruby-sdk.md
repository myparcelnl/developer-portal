---
title: Ruby SDK
description: "Community Ruby gem for the MyParcel API: install the gem, create a client with your API key and work with shipments, delivery options, track & trace and webhooks."
---

::: warning Community SDK
This is a **community-maintained** gem — [paypronl/myparcel](https://github.com/paypronl/myparcel) — not an official MyParcel SDK. It's an early (`0.x`) version and may lag behind the current API. Check the [API reference](../api/myparcel.md) and the repository before relying on it in production.
:::

## Install
Add the gem to your `Gemfile`:

```ruby
gem 'myparcel', '~> 0.1'
```

Or install it directly:

```
gem install myparcel
```

## Create a client
```ruby
client = Myparcel.client('YOUR_API_KEY')
```

Get an API key from your MyParcel Backoffice — see [Authentication](./authentication.md).

## Create a shipment
```ruby
shipment = {
  recipient: {
    cc: 'NL', postal_code: '9999XX', city: 'Amsterdam',
    street: 'Hoofdstraat', number: '1', person: 'John Doe'
  },
  carrier: 1,
  options: { package_type: 1 }
}

client.shipments.create shipments: [shipment]
```

## What it covers
- **Shipments** — `client.shipments.all` / `.find` / `.create` / `.delete`.
- **Delivery options** — `client.delivery_options.find`.
- **Track & trace** — `client.tracktraces.find`.
- **Webhooks** — `client.webhooks.create` / `.find`.

## Notes
- Numeric values map to the API enums — see [Data types](./data-types.md) (e.g. `carrier: 1` is PostNL, `package_type: 1` is a package).
- For issues or contributions, use the [GitHub repository](https://github.com/paypronl/myparcel).
