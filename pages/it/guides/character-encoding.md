---
title: Character encoding
description: "Tutto il traffico della API MyParcel è UTF-8. Dichiara sempre charset=utf-8 nell'header Content-Type, così nomi e indirizzi arrivano intatti."
---

## UTF-8 ovunque
Tutti i contenuti inviati e ricevuti dalla API MyParcel devono essere codificati in **UTF-8**. Dichiara il charset esplicitamente nell'header `Content-Type`:

```
Content-Type: application/json;charset=utf-8
```

## Perché è importante
Nomi dei destinatari, vie e città contengono spesso caratteri accentati o non latini (é, ñ, ü, ø, …). Inviarli con la codifica sbagliata produce etichette illeggibili e pacchi non recapitabili. UTF-8 copre ogni carattere supportato da MyParcel, quindi impostalo una volta e sei a posto.

::: tip
La maggior parte dei client HTTP usa UTF-8 per impostazione predefinita, ma il charset non viene sempre inviato. Impostalo esplicitamente per evitare sorprese.
:::
