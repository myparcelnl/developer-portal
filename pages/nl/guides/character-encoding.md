---
title: Character encoding
description: "Al het MyParcel API-verkeer is UTF-8. Vermeld altijd charset=utf-8 in je Content-Type-header zodat namen en adressen intact aankomen."
---

## Overal UTF-8
Alle content die je naar de MyParcel API stuurt en ervan ontvangt moet **UTF-8**-gecodeerd zijn. Vermeld de charset expliciet in je `Content-Type`-header:

```
Content-Type: application/json;charset=utf-8
```

## Waarom dit belangrijk is
Namen van ontvangers, straten en steden bevatten vaak accenten of niet-Latijnse tekens (é, ñ, ü, ø, …). Stuur je ze in de verkeerde codering, dan krijg je onleesbare labels en onbestelbare pakketten. UTF-8 dekt elk teken dat MyParcel ondersteunt, dus stel het één keer in en je zit goed.

::: tip
De meeste HTTP-clients gebruiken standaard UTF-8, maar de charset wordt niet altijd meegestuurd. Zet 'm expliciet om verrassingen te voorkomen.
:::
