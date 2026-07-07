---
title: Encodage des caractères
description: "Tout le trafic de l'API MyParcel est en UTF-8. Déclarez toujours charset=utf-8 dans votre en-tête Content-Type afin que les noms et les adresses arrivent intacts."
---

## UTF-8 partout
Tout le contenu envoyé à l'API MyParcel et reçu de celle-ci doit être encodé en **UTF-8**. Déclarez explicitement le charset dans votre en-tête `Content-Type` :

```
Content-Type: application/json;charset=utf-8
```

## Pourquoi c'est important
Les noms des destinataires, les noms de rues et les villes contiennent souvent des caractères accentués ou non latins (é, ñ, ü, ø, …). Les envoyer dans le mauvais encodage produit des étiquettes illisibles et des colis non livrables. UTF-8 couvre tous les caractères pris en charge par MyParcel, donc définissez-le une seule fois et vous êtes tranquille.

::: tip
La plupart des clients HTTP utilisent UTF-8 par défaut, mais le charset n'est pas toujours envoyé. Définissez-le explicitement pour éviter les surprises.
:::
