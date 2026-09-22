---
title: bol
description: "Connectez votre compte vendeur bol à MyParcel via un Sales channel dans le backoffice MyParcel et importez vos commandes bol, manuellement ou automatiquement. Comprend la nouvelle autorisation bol, en vigueur pour les clients MyParcel depuis le 22 septembre 2026, qui accorde l'accès par composant API et par droit, les composants dont MyParcel a besoin, le renouvellement avant la date d'expiration, le flux de travail quotidien et un tableau de diagnostic."
---

::: tip En bref
bol se connecte à MyParcel via un **Sales channel** que vous créez dans le backoffice MyParcel, il n'y a rien à installer. Vous autorisez MyParcel une seule fois dans votre compte vendeur bol. Ensuite, MyParcel importe vos commandes bol ouvertes, renvoie le code-barres Track & Trace et le transporteur, et passe la commande bol en expédiée. Depuis le **22 septembre 2026**, vous ne donnez plus accès à l'ensemble de l'API bol : vous autorisez **par composant API et par droit**. Les composants utilisés par MyParcel sont cochés pour vous, laissez cette présélection telle quelle.
:::

## Démarrage rapide, vos premières commandes bol en 10 minutes
De quoi relier bol à MyParcel dès aujourd'hui. Pour les détails, voir [Que cherchez-vous ?](#que-cherchez-vous) ci-dessous.

1. **Compte.** Vous n'avez pas encore de compte MyParcel ? Créez-en un sur [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Ajoutez le canal de vente.** Dans [backoffice.myparcel.nl](https://backoffice.myparcel.nl), allez dans *Paramètres de la boutique → Sales Channels* → **Add sales channel** → choisissez **bol** → saisissez un nom → **Save**.
3. **Lancez l'autorisation depuis MyParcel.** Ouvrez le nouveau canal et lancez l'autorisation depuis celui-ci. Ne la lancez jamais depuis bol.
4. **Connectez-vous chez bol** sur la page vers laquelle vous êtes redirigé et sélectionnez le compte bol à relier.
5. **Ne touchez pas à la présélection.** Vérifiez les composants API présélectionnés et leurs droits, ne changez rien et cliquez sur **Toestaan** (Autoriser).
6. **Choisissez le mode d'import.** De retour dans MyParcel, indiquez si vous importez manuellement ou automatiquement, puis enregistrez.

::: tip C'est terminé lorsque vous voyez ceci
- Le canal ne demande plus d'autorisation et affiche le compte bol relié.
- **MyParcel** apparaît dans votre compte vendeur bol sous *Authorized parties*, avec une date d'expiration.
- Le bouton **Importer des commandes externes** apparaît dans votre aperçu MyParcel *Envois*.
:::

## Que cherchez-vous ?
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Comprendre comment fonctionne la connexion | [1 · Comment fonctionne la connexion](#1-comment-fonctionne-la-connexion) |
| Savoir ce qui change dans l'autorisation bol | [2 · Ce qui change dans l'autorisation bol](#2-ce-qui-change-dans-lautorisation-bol) |
| Créer le canal de vente | [3 · Créer le canal de vente bol](#3-crer-le-canal-de-vente-bol) |
| Autoriser la connexion | [4 · Autoriser la connexion étape par étape](#4-autoriser-la-connexion-tape-par-tape) |
| Consulter les composants à cocher | [5 · Les composants API dont MyParcel a besoin](#5-les-composants-api-dont-myparcel-a-besoin) |
| Vérifier ou renouveler votre autorisation | [6 · Vérifier et renouveler votre autorisation](#6-vrifier-et-renouveler-votre-autorisation) |
| Importer manuellement ou automatiquement | [7 · Réglages d'import](#7-rglages-dimport) |
| Définir le type de colis des commandes importées | [8 · Règles d'expédition](#8-rgles-dexpdition) |
| Traiter les commandes au quotidien | [9 · Utilisation au quotidien](#9-utilisation-au-quotidien) |
| Quelque chose ne fonctionne pas | [10 · Un problème, diagnostic](#10-un-problme-diagnostic) |
| Réponse à une question fréquente | [11 · FAQ](#11-faq) |

## 1 · Comment fonctionne la connexion
bol est une marketplace et non une plateforme e-commerce, il n'y a donc ni plugin ni application. Vous enregistrez votre compte vendeur bol une seule fois comme **Sales channel** dans le backoffice MyParcel et vous autorisez MyParcel dans votre compte bol. À partir de là, MyParcel dialogue en votre nom avec l'**API Retailer de bol**.

MyParcel récupère vos commandes bol ouvertes et les importe comme envois en brouillon. Vous créez les étiquettes dans votre backoffice MyParcel. MyParcel renvoie le code-barres Track & Trace et le transporteur à bol et passe la commande en expédiée.

::: warning Ne passez pas vous-même les commandes en expédiées dans bol
MyParcel ne peut mettre à jour qu'une commande encore ouverte. Si vous avez déjà marqué l'envoi comme expédié à la main dans bol, le code-barres et le transporteur ne sont pas renvoyés.
:::

## 2 · Ce qui change dans l'autorisation bol
bol a modifié son processus d'autorisation. Pour les clients MyParcel, cela s'applique depuis le **22 septembre 2026**.

- **Vous autorisez par composant, pas par API.** Vous ne donnez plus accès à l'ensemble de l'API bol en une fois, mais par composant API (resource) et par droit : lire ou gérer.
- **Cela vaut pour les connexions nouvelles et renouvelées.** Chaque nouvelle connexion SSO et chaque connexion SSO que vous renouvelez passe par le nouvel écran. Les connexions créées avant cette date continuent de fonctionner jusqu'à leur date d'expiration.
- **Vous ne voyez que ce que MyParcel utilise.** bol répartit son API en 5 grandes portées : *Assortimentbeheer*, *Logistiek*, *Inzichten*, *Financiën* et *Subscriptions*. L'écran n'affiche que les composants réellement utilisés par votre partenaire d'intégration, et ceux-ci sont cochés pour vous. Laissez cette présélection telle quelle.

::: warning Décocher casse la connexion
Si vous décochez un composant dont MyParcel a besoin, la connexion cesse de fonctionner. bol refuse tout appel pour lequel le droit manque, avec une erreur *403 Forbidden*. Vous ne pouvez pas ajouter un droit après coup : pour corriger, vous devez refaire toute l'autorisation.
:::

Les connexions via Client Credentials ne sont pas encore concernées. bol prévoit d'appliquer le même changement au quatrième trimestre 2026 et l'annoncera sur son partnerplatform.

## 3 · Créer le canal de vente bol
1. Connectez-vous à [backoffice.myparcel.nl](https://backoffice.myparcel.nl) et allez dans **Paramètres de la boutique → Sales Channels**.
2. Cliquez sur **Add sales channel** (en haut à droite).
3. Saisissez un **Name** qui vous permet de reconnaître le canal, par exemple *Ma boutique bol*.
4. Sous **Type of sales channel**, choisissez **bol**.
5. Cliquez sur **Save**. Le canal est créé et doit encore être autorisé, voir [§4](#4-autoriser-la-connexion-tape-par-tape).

::: tip Un compte bol par boutique
Vous reliez un compte bol à une boutique MyParcel. Vous vendez via plusieurs comptes bol ? Créez une boutique MyParcel supplémentaire par compte.
:::

## 4 · Autoriser la connexion étape par étape
Suivez ces 6 étapes pour créer une connexion ou en renouveler une existante.

1. **Partez de MyParcel.** Ouvrez le canal de vente bol dans votre backoffice MyParcel et lancez l'autorisation depuis celui-ci. Ne partez pas de bol, MyParcel doit être la partie qui demande.
2. **Connectez-vous chez bol.** MyParcel vous redirige vers la page de connexion de bol. Connectez-vous avec le compte qui gère votre compte vendeur bol.
3. **Sélectionnez le bon compte bol.** Sous *Kies de retailer die je wilt koppelen* (Choisissez le revendeur à relier), choisissez le compte à connecter à MyParcel.
4. **Vérifiez les composants présélectionnés.** Les composants utilisés par MyParcel sont cochés pour vous. Un doute ? Ne cochez rien de plus et ne décochez rien.

![L'écran d'autorisation de bol : choisissez le revendeur, puis les groupes Assortimentbeheer et Orders en logistiek avec leurs droits.](../../platforms/images/bol/01-bol-authorisation-screen.png)

5. **Vérifiez les droits par composant.** Cliquez sur la flèche devant un groupe pour le déplier et voir les composants individuels et leurs droits : lire, uniquement récupérer des données, ou gérer, également créer, modifier et supprimer. Comparez-les avec [§5](#5-les-composants-api-dont-myparcel-a-besoin). L'icône d'information derrière un composant explique ce qu'il couvre.

![Le même écran avec les deux groupes dépliés : Aanbod, Productcontent, Orders, Transportinformatie, Verzendlabels et Zendingen.](../../platforms/images/bol/02-bol-authorisation-resources.png)

6. **Enregistrez et vérifiez.** Cliquez sur **Toestaan** (Autoriser) pour enregistrer l'autorisation. Vous revenez dans MyParcel. Importez une commande pour confirmer que la connexion fonctionne, voir [§9](#9-utilisation-au-quotidien).

## 5 · Les composants API dont MyParcel a besoin
Voici les composants de l'API Retailer de bol utilisés par la connexion MyParcel. Tous les autres composants sont désactivés par défaut et ne sont pas nécessaires.

| Composant API | Affiché dans bol comme | Droits |
| --- | --- | --- |
| Assortment Management → Offers | *Assortimentbeheer → Aanbod* | Read et Read and Write |
| Assortment Management → Product Content | *Assortimentbeheer → Productcontent* | Read |
| Orders and logistics → Orders | *Orders en logistiek → Orders* | Read et Read and Write |
| Orders and logistics → Shipments | *Orders en logistiek → Zendingen* | Read et Read and Write |
| Orders and logistics → Shipping labels | *Orders en logistiek → Verzendlabels* | Read et Read and Write |
| Orders and logistics → Transport Information | *Orders en logistiek → Transportinformatie* | Read and Write |

Les noms affichés par bol dépendent de la langue de votre compte bol. Les noms anglais sont ceux que bol utilise dans la documentation de son API Retailer.

## 6 · Vérifier et renouveler votre autorisation
Chaque autorisation a une date d'expiration. Vous vérifiez les deux dans votre compte vendeur bol via **Instellingen → Diensten → API-instellingen → Authorized parties** (Paramètres → Services → Réglages API). MyParcel y figure avec sa date d'expiration dès que la connexion est active.

- **Renouvelez à temps.** Renouvelez dans les 2 mois précédant la date d'expiration, ainsi la connexion ne s'arrête jamais un jour d'expédition.
- **Le renouvellement suit le même parcours.** Partez de MyParcel et suivez les 6 étapes du [§4](#4-autoriser-la-connexion-tape-par-tape). Comme il s'agit d'un renouvellement, vous obtenez le nouvel écran d'autorisation avec les composants et les droits.
- **Les connexions existantes continuent de fonctionner.** Une connexion créée avant le 22 septembre 2026 tourne jusqu'à sa date d'expiration. À partir de là, vous la renouvelez selon le nouveau processus.

## 7 · Réglages d'import
Ouvrez le canal de vente bol dans votre backoffice MyParcel pour choisir comment les commandes arrivent.

- **Handmatig** (Manuel), vous récupérez vos commandes bol ouvertes vous-même, voir [§9](#9-utilisation-au-quotidien).
- **Automatisch** (Automatique), MyParcel récupère les nouvelles commandes ouvertes toutes les 5 minutes.

::: tip N'oubliez pas d'enregistrer
Cliquez sur **Save** après avoir modifié le réglage d'import, sinon la modification n'est pas appliquée.
:::

Même avec l'import automatique activé, vous pouvez toujours récupérer des commandes à la main.

## 8 · Règles d'expédition
Les commandes bol importées suivent les règles d'expédition de votre compte MyParcel, définissez-les donc avant votre premier import. Allez dans **Paramètres de la boutique → Envois → Règles d'expédition** et choisissez un type de colis par défaut ainsi que les options d'expédition éventuelles.

Chaque import utilise ces règles. Vous ne pouvez pas donner une préférence de colis par commande au moment de l'import, mais vous pouvez modifier un envoi après coup, voir [§9](#9-utilisation-au-quotidien).

## 9 · Utilisation au quotidien
Dès que le canal est autorisé, le bouton **Importer des commandes externes** apparaît dans votre aperçu *Envois*.

1. Cliquez sur **Importer des commandes externes** pour voir vos commandes bol ouvertes. Plusieurs connexions externes ? Passez de l'une à l'autre avec les onglets.
2. Importez les commandes une par une ou en masse.
3. Les commandes importées arrivent comme **envois en brouillon**. Cliquez sur le crayon derrière un envoi pour le modifier.
4. Créez les étiquettes et remettez les colis au transporteur. MyParcel renvoie le code-barres et le transporteur à bol et passe la commande en expédiée.

::: warning Modifiez dans MyParcel, pas dans bol
Ne modifiez pas une commande dans le portail bol avant de l'importer. Les données de la commande risquent alors d'arriver incorrectes et le code-barres n'est pas renvoyé à bol lors du traitement.
:::

Vous n'êtes facturé qu'une fois l'envoi réellement remis au transporteur.

## 10 · Un problème, diagnostic
Parcourez ce tableau de haut en bas, la plupart des problèmes se règlent en quelques minutes.

| Symptôme | Que vérifier |
| --- | --- |
| **Le canal continue de demander une autorisation** | L'autorisation n'a pas été terminée. Relancez-la depuis MyParcel et terminez avec **Toestaan** ([§4](#4-autoriser-la-connexion-tape-par-tape)). |
| **Aucune commande n'est importée** | Y a-t-il des commandes ouvertes dans bol ? Vérifiez que la connexion figure toujours sous *Authorized parties* dans votre compte bol et qu'elle n'a pas expiré ([§6](#6-vrifier-et-renouveler-votre-autorisation)). |
| **Les commandes arrivent, mais le code-barres n'est pas renvoyé** | La commande a été passée en expédiée à la main dans bol. MyParcel ne peut mettre à jour que les commandes encore ouvertes ([§1](#1-comment-fonctionne-la-connexion)). |
| **Une partie de la connexion ne fonctionne plus** | Un composant a été décoché pendant l'autorisation, bol refuse ces appels avec une erreur *403 Forbidden*. Comparez vos droits avec [§5](#5-les-composants-api-dont-myparcel-a-besoin) et refaites l'autorisation, un ajout après coup est impossible. |
| **La connexion s'est arrêtée à une date fixe** | L'autorisation a expiré. Renouvelez-la et vérifiez la date d'expiration sous *Authorized parties* ([§6](#6-vrifier-et-renouveler-votre-autorisation)). |
| **Vous avez choisi le mauvais compte bol** | Refaites l'autorisation depuis MyParcel et sélectionnez le bon revendeur à l'étape 3 ([§4](#4-autoriser-la-connexion-tape-par-tape)). |
| **Mauvais type de colis sur les commandes importées** | Les commandes importées suivent vos règles d'expédition. Ajustez-les dans *Paramètres de la boutique → Envois → Règles d'expédition* ([§8](#8-rgles-dexpdition)), ou modifiez l'envoi avant de le traiter. |

## 11 · FAQ

### Dois-je refaire l'autorisation tout de suite ?
Non. Une connexion créée avant le 22 septembre 2026 continue de fonctionner jusqu'à sa date d'expiration. Vous verrez le nouvel écran la première fois que vous créez ou renouvelez une connexion après cette date.

### Que se passe-t-il si je décoche un composant ?
Les parties de la connexion qui en ont besoin cessent de fonctionner. Un droit ne peut pas être ajouté après coup, refaites donc toute l'autorisation depuis MyParcel et laissez la présélection telle quelle ([§4](#4-autoriser-la-connexion-tape-par-tape)).

### Cela vaut-il aussi pour Client Credentials ?
Pas encore. Les connexions via Client Credentials restent en dehors de ce changement. bol prévoit de l'appliquer également au quatrième trimestre 2026 et l'annoncera sur son partnerplatform.

### Où vois-je quelles parties ont accès à mon compte bol ?
Dans votre compte vendeur bol via *Instellingen → Diensten → API-instellingen → Authorized parties*. Vous y trouvez aussi la date d'expiration de chaque autorisation ([§6](#6-vrifier-et-renouveler-votre-autorisation)).

### Puis-je retirer l'autorisation ?
Oui. Ouvrez le canal de vente bol dans votre backoffice MyParcel et retirez-y l'autorisation. Vous pouvez aussi supprimer MyParcel sous *Authorized parties* dans votre compte bol.

### À quelle fréquence récupérez-vous les nouvelles commandes ?
Avec l'import automatique activé, toutes les 5 minutes. Vous pouvez également récupérer des commandes à la main à tout moment ([§7](#7-rglages-dimport)).

### Puis-je relier plusieurs comptes bol à MyParcel ?
Vous reliez un compte bol à une boutique MyParcel. Créez une boutique supplémentaire pour un compte bol supplémentaire.

### Renvoyez-vous le code-barres à bol ?
Oui. Une fois l'étiquette créée, MyParcel renvoie le code-barres et le transporteur à bol et passe la commande en expédiée.

### Puis-je définir une préférence de colis par commande avant l'import ?
Non. Chaque import utilise vos règles d'expédition ([§8](#8-rgles-dexpdition)). Modifiez l'envoi après l'import si un colis nécessite autre chose.

## Ressources & support
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), canaux de vente, règles d'expédition, compte, facturation.
- [partnerplatform bol ↗](https://partnerplatform.bol.com/nl/intermediair/myparcel/), MyParcel sur le partnerplatform de bol.
- [Le nouveau processus d'autorisation de bol ↗](https://partnerplatform.bol.com/nl/nadp/reboarding-api), le guide pas à pas de bol pour créer et renouveler une connexion.
- [Improved API authorization for SSO integrations ↗](https://developers.bol.com/en/news/improved-api-authorization-for-sso-integrations/), l'annonce pour les développeurs.
- [Contacter le support MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Ce manuel décrit le canal de vente bol dans le backoffice MyParcel et l'autorisation bol telle qu'elle fonctionne depuis le 22 septembre 2026. Les écrans du côté bol peuvent différer légèrement selon la langue du compte.
