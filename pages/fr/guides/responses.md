---
title: Réponses
description: "Ce que renvoie l'API MyParcel : du JSON par défaut, du PDF et du CSV pour les étiquettes et les exports, l'enveloppe de réponse et les codes de statut HTTP auxquels vous pouvez vous attendre."
---

## Aperçu
La plupart des endpoints renvoient du JSON. Il existe quelques exceptions :

- **Les étiquettes et les factures** reviennent au format **PDF**.
- **Certains exports** reviennent au format **CSV**.
- Un **`DELETE`** renvoie `204 No Content` sans corps.
- Un traitement de longue durée (comme la création de colis ou un export CSV) peut renvoyer **`202 Accepted`** pendant qu'il est traité.

## L'enveloppe de réponse
Les réponses JSON réussies encapsulent le résultat dans un objet `data` de premier niveau, indexé par la ressource :

```json
{
  "data": {
    "shipments": [
      { "id": 100000001 }
    ]
  }
}
```

Les champs exacts par ressource sont documentés dans la [référence API](../../api/myparcel.md), utilisez-la comme source de vérité plutôt que de recopier les structures à la main.

## Codes de statut HTTP
| Code | Signification |
| --- | --- |
| `200 OK` | Requête réussie avec un corps de réponse. |
| `202 Accepted` | Accepté pour un traitement asynchrone (par ex. colis, CSV). |
| `204 No Content` | Succès sans corps, généralement après un `DELETE`. |
| `304 Not Modified` | La ressource n'a pas changé depuis votre copie en cache. |
| `400 Bad Request` | La requête est malformée. |
| `401 Unauthorized` | Clé API manquante ou incorrecte. Voir [Authentification](./authentication.md). |
| `402 Payment Required` | Un paiement est requis ; la réponse peut inclure une facture. |
| `403 Forbidden` | Votre clé n'est pas autorisée pour cette action. |
| `404 Not Found` | La ressource n'existe pas. |
| `405 Method Not Allowed` | Cette méthode HTTP n'est pas prise en charge sur cet endpoint. |
| `406 Not Acceptable` | Le format de réponse demandé n'est pas pris en charge. |
| `409 Conflict` | La requête entre en conflit avec l'état actuel de la ressource. |
| `415 Unsupported Media Type` | Le `Content-Type` n'est pas pris en charge. |
| `422 Unprocessable Entity` | JSON valide, mais la validation échoue. |
| `5xx` | Un problème du côté de MyParcel, réessayez plus tard. |

## Erreurs
Une réponse `4xx` contient un corps d'erreur avec un message lisible et un ou plusieurs codes d'erreur. Utilisez ces codes pour gérer les échecs de manière programmatique plutôt que d'analyser le texte du message.

::: tip Lire les codes d'erreur
Le catalogue complet et lisible des codes d'erreur se trouve dans le guide **Errors**. En attendant, les réponses d'erreur de chaque endpoint sont listées dans la [référence API](../../api/myparcel.md).
:::
