---
title: Ruby SDK
description: "Community Ruby-gem voor de MyParcel API: installeer de gem, maak een client met je API key en werk met zendingen, delivery options, track & trace en webhooks."
---

::: warning Community-SDK
Dit is een **community-onderhouden** gem — [paypronl/myparcel](https://github.com/paypronl/myparcel) — geen officiële MyParcel-SDK. Het is een vroege (`0.x`) versie en kan achterlopen op de huidige API. Controleer de [API-referentie](../../api/myparcel.md) en de repository voordat je hierop bouwt in productie.
:::

## Installeren
Voeg de gem toe aan je `Gemfile`:

```ruby
gem 'myparcel', '~> 0.1'
```

Of installeer hem direct:

```
gem install myparcel
```

## Een client maken
```ruby
client = Myparcel.client('YOUR_API_KEY')
```

Een API key haal je uit je MyParcel-backoffice — zie [Authenticatie](./authentication.md).

## Een zending aanmaken
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

## Wat het dekt
- **Zendingen** — `client.shipments.all` / `.find` / `.create` / `.delete`.
- **Delivery options** — `client.delivery_options.find`.
- **Track & trace** — `client.tracktraces.find`.
- **Webhooks** — `client.webhooks.create` / `.find`.

## Opmerkingen
- Numerieke waarden komen overeen met de API-enums — zie [Datatypes](./data-types.md) (bijv. `carrier: 1` is PostNL, `package_type: 1` is een pakket).
- Voor issues of bijdragen: gebruik de [GitHub-repository](https://github.com/paypronl/myparcel).
