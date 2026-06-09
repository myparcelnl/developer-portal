---
title: SDK Ruby
description: "Gem Ruby della community per l'API MyParcel: installa la gem, crea un client con la tua API key e lavora con spedizioni, delivery options, track & trace e webhook."
---

::: warning SDK della community
Questa è una gem **mantenuta dalla community** — [paypronl/myparcel](https://github.com/paypronl/myparcel) — non una SDK ufficiale MyParcel. È una versione iniziale (`0.x`) e potrebbe essere indietro rispetto all'API attuale. Controlla il [riferimento API](../../api/myparcel.md) e il repository prima di usarla in produzione.
:::

## Installazione
Aggiungi la gem al tuo `Gemfile`:

```ruby
gem 'myparcel', '~> 0.1'
```

Oppure installala direttamente:

```
gem install myparcel
```

## Creare un client
```ruby
client = Myparcel.client('YOUR_API_KEY')
```

Ottieni una API key dal tuo Backoffice MyParcel — vedi [Autenticazione](./authentication.md).

## Creare una spedizione
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

## Cosa copre
- **Spedizioni** — `client.shipments.all` / `.find` / `.create` / `.delete`.
- **Delivery options** — `client.delivery_options.find`.
- **Track & trace** — `client.tracktraces.find`.
- **Webhook** — `client.webhooks.create` / `.find`.

## Note
- I valori numerici corrispondono agli enum dell'API — vedi [Tipi di dato](./data-types.md) (es. `carrier: 1` è PostNL, `package_type: 1` è un pacco).
- Per problemi o contributi, usa il [repository GitHub](https://github.com/paypronl/myparcel).
