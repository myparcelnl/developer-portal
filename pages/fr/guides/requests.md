---
title: Requêtes
description: "Comment appeler l'API MyParcel : URL de base, méthodes HTTP, en-têtes, la convention User-Agent et les content types. La référence OpenAPI reste la source de vérité pour chaque endpoint."
---

## Aperçu
Les API MyParcel sont basées sur REST et échangent du JSON via HTTPS. Vous créez et lisez des objets avec des méthodes HTTP standard, et chaque endpoint est documenté dans la [référence API](../../api/myparcel.md) générée automatiquement, cette référence est toujours la source de vérité pour les chemins, les paramètres et les schémas.

## URL de base
La Shipment API est hébergée sur `https://api.myparcel.nl`. Les autres API MyParcel ont chacune leur propre hôte :

| API | URL de base |
| --- | --- |
| Shipment | `https://api.myparcel.nl` |
| Order | `https://order.api.myparcel.nl` |
| Rule | `https://rule.api.myparcel.nl` |
| Address | `https://address.api.myparcel.nl` |
| Printing | `https://printing.api.myparcel.nl` |
| Product | `https://product.api.myparcel.nl` |

Tout le trafic passe par HTTPS. Le HTTP simple n'est pas pris en charge.

## Authentification
Authentifiez chaque requête avec votre clé API encodée en base64. Consultez le [guide d'authentification](./authentication.md) pour l'en-tête exact.

## Méthodes HTTP
L'API suit la sémantique REST standard.

| Méthode | Utilisation | Remarques |
| --- | --- | --- |
| `GET` | Lire un objet ou une liste | Idempotent. Peut renvoyer du JSON, PDF, CSV ou XML selon l'endpoint. |
| `POST` | Créer un objet ou envoyer des données | — |
| `PUT` | Créer ou remplacer entièrement un objet | — |
| `DELETE` | Supprimer un objet | Renvoie `204 No Content` sauf indication contraire. |

Toutes les méthodes ne sont pas disponibles sur chaque endpoint. Consultez la [référence API](../../api/myparcel.md) pour les méthodes prises en charge par chaque chemin.

## En-têtes
- **`Content-Type`**, utilisez `application/json;charset=utf-8` pour les corps JSON. Voir [Encodage des caractères](./character-encoding.md).
- **`Accept`**, indiquez le format que vous attendez en retour (par ex. `application/json`). Certains endpoints utilisent un media type vendor comme `application/vnd.shipment+json` ; la [référence API](../../api/myparcel.md) indique le type exact par endpoint.
- **`Authorization`**, votre clé API (voir [Authentification](./authentication.md)).
- **`User-Agent`**, identifie votre intégration (voir ci-dessous).

## La convention User-Agent
Envoyez un en-tête `User-Agent` qui identifie votre intégration. Cela aide le support MyParcel à rattacher les problèmes au bon plugin ou backend.

```
User-Agent: MyParcel-<integration>/<version> <cms>/<version> <backend>/<version>
```

Exemple :

```
User-Agent: MyParcel-MyFirstCMS/1.0.0 MyFirstCMS/3.0.0 PHP/8.1.0
```

::: tip Vous développez une intégration publique ?
Contactez MyParcel afin que votre intégration puisse être reconnue dans la chaîne User-Agent.
:::

## Formats de réponse
La plupart des endpoints renvoient du JSON. Certains renvoient plutôt du binaire ou du texte : les étiquettes et les factures reviennent au format **PDF**, et certains exports au format **CSV**. Voir [Réponses](./responses.md) pour les codes de statut et l'enveloppe de réponse.

## Limitation de débit
L'API applique une limitation de débit par endpoint à l'aide d'une fenêtre glissante. Lorsque vous dépassez une limite, vous recevez `429 Too Many Requests`. Attendez quelques minutes avant de réessayer plutôt que de solliciter l'endpoint sans relâche. Si vous atteignez régulièrement les limites, contactez MyParcel pour discuter d'options telles que les webhooks.

## Exemple de requête
```
GET https://api.myparcel.nl/
Accept: application/json;charset=utf-8
Authorization: bearer <base64-encoded API key>
User-Agent: MyParcel-MyFirstCMS/1.0.0 MyFirstCMS/3.0.0 PHP/8.1.0
```
