---
title: Types de données
description: "Types, enums et conventions courants utilisés dans toute la Shipment API : ID, prix, dates, pays, transporteurs et types de colis."
---

## Identifiants
Les expéditions et les abonnements webhook ont des ID entiers. Les commandes utilisent des UUID, comme `db610547-7434-4f6d-9e13-178b686a94d6`.

## Prix
Un prix est un objet avec un montant en **centimes** et une devise. Seul `EUR` est pris en charge.

```
{ "insurance": { "amount": 25000, "currency": "EUR" } }  // 250,00 €
```

## Booléens
Les options d'expédition sont des booléens entiers : `1` pour activé, `0` pour désactivé.

```
{ "options": { "signature": 1, "only_recipient": 0 } }
```

## Dates et heures
- Dates : `YYYY-MM-DD`, par exemple `2026-04-20`.
- Timestamps : `YYYY-MM-DD HH:MM:SS`, par exemple `2026-04-20 08:12:34`.

## Codes pays
Les pays sont des codes ISO 3166-1 alpha-2 (`NL`, `BE`, `DE`, `FR`, …) dans le champ `cc`.

## ID des transporteurs
- `1` : PostNL
- `2` : bpost
- `3` : Cheap Cargo
- `4` : DPD
- `9` : DHL For You
- `10` : DHL Parcel Connect
- `11` : DHL Europlus
- `12` : UPS Standard
- `13` : UPS Express Saver
- `14` : GLS
- `15` : BRT
- `16` : Trunkrs
- `17` : InPost
- `18` : Poste Italiane

Les ID `5` à `8` (Instabox, DHL Cheap Cargo, bol et l'ancien UPS) sont obsolètes. Les transporteurs que vous pouvez utiliser dépendent de votre plateforme et de vos contrats.

## Types de colis
- `1` : colis
- `2` : colis boîte aux lettres
- `3` : lettre
- `4` : timbre numérique
- `5` : palette
- `6` : petit colis
- `7` : enveloppe

## Format d'erreur
Une réponse d'erreur contient un message, un ID de requête et une liste d'erreurs avec des codes numériques :

```
{
  "message": "…",
  "request_id": "…",
  "errors": [
    { "code": 3501, "message": "Invalid address" }
  ]
}
```

Traitez les erreurs selon le `code`, pas selon le texte du message.
