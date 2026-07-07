---
title: CS-Cart
description: "Connectez votre boutique CS-Cart à MyParcel via un Sales channel dans le backoffice MyParcel, il n'existe pas de plugin CS-Cart. MyParcel communique avec votre boutique via son API REST et importe vos commandes. Comprend les données exactes dont vous avez besoin (URL de la boutique, e-mail CS-Cart et clé API), où les trouver, un parcours de connexion étape par étape avec captures d'écran, le flux de travail quotidien et un tableau de diagnostic."
---

::: tip En bref
CS-Cart se connecte à MyParcel via un **Sales channel** que vous créez dans le backoffice MyParcel, il n'y a pas d'application ou de plugin CS-Cart à installer. Une fois le canal authentifié, MyParcel lit directement vos commandes CS-Cart via l'API REST de CS-Cart et les importe, prêtes à être étiquetées et expédiées. Vous avez besoin de trois éléments issus de votre back office CS-Cart : l'**URL de la boutique**, votre **adresse e-mail CS-Cart** et une **clé API CS-Cart**.
:::

## Démarrage rapide, votre première connexion en 10 minutes
De quoi relier CS-Cart à MyParcel dès aujourd'hui. Pour les détails, voir [Que cherchez-vous ?](#que-cherchez-vous) ci-dessous.

1. **Compte.** Vous n'avez pas encore de compte MyParcel ? Créez-en un sur [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Rassemblez vos données.** Dans votre **back office CS-Cart**, notez l'**URL de votre boutique**, votre **adresse e-mail d'administrateur** et générez/activez une **clé API** pour cet administrateur (voir [Ce dont vous avez besoin et où le trouver](#2-ce-dont-vous-avez-besoin-et-o-le-trouver)).
3. **Ajoutez le canal de vente.** Dans [backoffice.myparcel.nl](https://backoffice.myparcel.nl), allez dans *Paramètres de la boutique → Sales Channels* → **Add sales channel** → choisissez **CS-Cart** → saisissez un nom et l'URL de votre boutique → **Save**.
4. **Authentifiez.** Ouvrez le nouveau canal, cliquez sur **Set credentials**, collez votre **adresse e-mail CS-Cart** et votre **clé API CS-Cart**, puis cliquez sur **Connect**.
5. **Terminé.** Le badge **Missing data** disparaît et le canal affiche **Connected**. MyParcel commence à importer vos commandes CS-Cart.

::: tip C'est terminé lorsque vous voyez ceci
- Le canal affiche **Connected** au lieu de **Missing data**.
- Une ligne **Latest synchronisation** avec un horodatage récent apparaît sur la carte du canal.
- De nouvelles commandes CS-Cart commencent à apparaître dans votre aperçu MyParcel *Envois*.
:::

## Que cherchez-vous ?
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Comprendre comment fonctionne la connexion | [1 · Comment fonctionne la connexion](#1-comment-fonctionne-la-connexion) |
| Savoir exactement quelles données rassembler | [2 · Ce dont vous avez besoin et où le trouver](#2-ce-dont-vous-avez-besoin-et-o-le-trouver) |
| Créer le canal de vente | [3 · Créer le canal de vente](#3-crer-le-canal-de-vente) |
| Authentifier avec e-mail et clé API | [4 · Authentifier le canal](#4-authentifier-le-canal) |
| Traiter les commandes au quotidien | [5 · Utilisation au quotidien](#5-utilisation-au-quotidien) |
| Quelque chose ne fonctionne pas | [6 · Un problème, diagnostic](#6-un-problme-diagnostic) |
| Réponse à une question fréquente | [7 · FAQ](#7-faq) |

## 1 · Comment fonctionne la connexion
Contrairement à WooCommerce, PrestaShop ou Magento, qui utilisent un plugin dans la boutique, CS-Cart n'a **aucun module à installer**. À la place, MyParcel se connecte à CS-Cart comme le ferait un système externe : via l'**API REST de CS-Cart**.

Vous enregistrez votre boutique une seule fois comme **Sales channel** dans le backoffice MyParcel et vous donnez à MyParcel l'autorisation de la lire (votre adresse e-mail + une clé API). À partir de là, MyParcel **récupère** vos commandes directement dans CS-Cart et les importe comme des envois. Vous créez les étiquettes et expédiez depuis votre backoffice MyParcel, exactement comme avec n'importe quel autre canal.

Comme la connexion fonctionne de serveur à serveur via l'API, il n'y a rien à entretenir dans CS-Cart lui-même et il n'y a pas de module de checkout, les options de livraison ne sont pas ajoutées au checkout de CS-Cart.

## 2 · Ce dont vous avez besoin et où le trouver
Pour créer la connexion, MyParcel a besoin de trois informations issues de votre **back office CS-Cart**. Cela est également indiqué dans le backoffice lorsque vous ajoutez le canal : *"To create the link we need the URL of your webshop, your email address and an API key that can be found in your CS-Cart back office."* (L'URL de votre boutique, votre adresse e-mail et une clé API issue de votre back office CS-Cart.)

| Quoi | Ce que c'est | Où le trouver dans CS-Cart |
| --- | --- | --- |
| **URL de la boutique** | L'adresse web de votre vitrine CS-Cart, par ex. `https://votre-boutique.fr`. | L'adresse de la page d'accueil de votre boutique. Utilisez le même domaine que vos clients. |
| **Adresse e-mail CS-Cart** | L'adresse e-mail d'un compte **administrateur** CS-Cart disposant d'un accès API. | L'e-mail de l'utilisateur admin avec lequel vous vous connectez au back office CS-Cart. |
| **Clé API CS-Cart** | Une clé qui accorde l'accès API à cet administrateur. | Dans le panneau d'administration CS-Cart, ouvrez le profil de l'administrateur (menu utilisateur en haut à droite, ou *Customers → Administrators →* sélectionnez l'utilisateur). Dans la section **API access**, activez l'accès API et copiez la **clé API** générée. |

::: tip Activez l'accès API pour l'utilisateur
Dans CS-Cart, la clé API appartient à un administrateur spécifique et ne fonctionne que si l'**accès API est activé** pour cet utilisateur. Si vous ne voyez pas de clé API, cochez l'option autorisant l'accès API dans le profil de l'administrateur et enregistrez, CS-Cart affiche alors la clé. La formulation et l'emplacement exacts peuvent varier légèrement selon la version et le thème de CS-Cart.
:::

::: warning Traitez la clé API comme un mot de passe
L'adresse e-mail et la clé API donnent ensemble un accès complet en lecture à vos commandes CS-Cart. Ne les partagez pas et ne les saisissez que dans le backoffice officiel MyParcel ([backoffice.myparcel.nl](https://backoffice.myparcel.nl)).
:::

## 3 · Créer le canal de vente
1. Connectez-vous à [backoffice.myparcel.nl](https://backoffice.myparcel.nl) et allez dans **Paramètres de la boutique → Sales Channels**.
2. Cliquez sur **Add sales channel** (en haut à droite).

![L'aperçu Sales Channels dans le backoffice MyParcel, avec le bouton Add sales channel en haut à droite.](../../platforms/images/cscart/backoffice-sales-channels.png)

3. Saisissez un **Name** (nom) qui vous permet de reconnaître le canal (par ex. *Ma boutique CS-Cart*).
4. Sous **Type of sales channel**, choisissez **CS-Cart**.
5. Sous **Webshop URL**, saisissez l'adresse de votre vitrine CS-Cart (par ex. `votre-boutique.fr`).
6. Cliquez sur **Save**. Le canal est créé et apparaît avec un badge **Missing data**, cela signifie simplement que l'étape d'authentification reste à faire.

![Le formulaire Add sales channel. Sous Type of sales channel, choisissez CS-Cart ; un champ Webshop URL apparaît ensuite.](../../platforms/images/cscart/backoffice-add-channel.png)

## 4 · Authentifier le canal
Un canal de vente a besoin d'une autorisation pour lire vos commandes CS-Cart. Pour CS-Cart, cela se fait avec votre **adresse e-mail CS-Cart** et votre **clé API CS-Cart** (voir [Ce dont vous avez besoin et où le trouver](#2-ce-dont-vous-avez-besoin-et-o-le-trouver)).

1. Ouvrez le canal et cliquez sur **Set credentials**.
2. Dans la fenêtre **Set API key**, renseignez :
   - **Your CS-Cart email address**, l'e-mail d'administrateur issu de CS-Cart.
   - **Your CS-Cart API key**, la clé API issue du profil de cet administrateur.
3. Cliquez sur **Connect**.

![La fenêtre Set API key, avec des champs pour votre adresse e-mail CS-Cart et votre clé API CS-Cart.](../../platforms/images/cscart/backoffice-credentials.png)

Une fois connecté, le badge **Missing data** disparaît, le canal affiche **Connected** et MyParcel commence à synchroniser vos commandes CS-Cart.

::: warning La connexion ne fonctionne pas ?
Causes les plus fréquentes : un espace supplémentaire collé avec l'e-mail ou la clé API · l'accès API non activé pour cet administrateur dans CS-Cart · une URL de boutique qui ne correspond pas à la boutique à laquelle la clé appartient · la clé API appartient à un autre administrateur que l'e-mail que vous avez saisi.
:::

## 5 · Utilisation au quotidien
Une fois le canal connecté, MyParcel importe automatiquement vos commandes CS-Cart :

1. Les nouvelles commandes CS-Cart apparaissent comme des envois dans votre aperçu MyParcel **Envois**.
2. Sélectionnez les commandes, créez les étiquettes et remettez-les au transporteur, le tout depuis votre backoffice MyParcel.
3. Vous n'êtes facturé qu'une fois qu'un envoi est réellement remis au transporteur.

::: tip Traitement en masse
Sélectionnez plusieurs nouvelles commandes avec la case à cocher en haut de l'aperçu des envois et utilisez *Traiter* + *Imprimer les étiquettes* pour traiter tout un lot en une seule fois.
:::

## 6 · Un problème, diagnostic
Parcourez ce tableau de haut en bas, la plupart des problèmes se résolvent en quelques minutes.

| Symptôme | Que vérifier |
| --- | --- |
| **Le canal reste sur « Missing data »** | L'étape d'authentification n'est pas terminée. Ouvrez le canal, cliquez sur **Set credentials** et saisissez votre e-mail CS-Cart et votre clé API ([§4](#4-authentifier-le-canal)). |
| **« Connect » est refusé** | Recollez l'e-mail et la clé API sans espaces supplémentaires. Vérifiez que l'**accès API est activé** pour cet administrateur dans CS-Cart, et que l'e-mail et la clé appartiennent au **même** administrateur. |
| **Aucune commande n'est importée** | Vérifiez que l'**URL de la boutique** est correcte et accessible (`https://…`), et que l'administrateur dont vous avez utilisé la clé peut voir les commandes dans CS-Cart. |
| **Certaines commandes manquent** | MyParcel importe les commandes qu'il peut lire via l'API. Assurez-vous que les commandes existent et sont visibles pour l'utilisateur API dans CS-Cart. |
| **Mauvais type de colis sur les commandes** | Les commandes importées reviennent à votre **type de colis par défaut** dans *Paramètres du compte → Envois*. Ajustez-le là, ou modifiez les envois individuels avant le traitement. |

## 7 · FAQ

### Existe-t-il un plugin CS-Cart ?
Non. CS-Cart se connecte à MyParcel uniquement via un **Sales channel** dans le backoffice MyParcel, à travers l'API REST de CS-Cart. Il n'y a rien à installer dans CS-Cart.

### Où trouver ma clé API CS-Cart ?
Dans le panneau d'administration CS-Cart, dans le profil de l'administrateur sous la section **API access**. Activez l'accès API pour l'utilisateur et CS-Cart affiche la clé. L'adresse e-mail est l'e-mail de connexion de ce même administrateur. Voir [§2](#2-ce-dont-vous-avez-besoin-et-o-le-trouver).

### Puis-je afficher les options de livraison MyParcel dans le checkout de CS-Cart ?
Non. La connexion est de serveur à serveur pour l'importation des commandes ; elle n'ajoute pas d'options de livraison au checkout de CS-Cart.

### La connexion est-elle payante ?
Non. La connexion est gratuite. Vous ne payez que pour les envois via votre tarif MyParcel.

### Comment modifier l'adresse de l'expéditeur sur l'étiquette ?
Cela se règle dans votre backoffice MyParcel (*Paramètres de la boutique → Général*), pas dans CS-Cart. Les modifications s'appliquent immédiatement.

## Ressources & support
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), canaux de vente, compte, clé API, facturation.
- [Contacter le support MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Ce manuel décrit le canal de vente CS-Cart actuel dans le backoffice MyParcel. Les écrans du côté CS-Cart peuvent avoir un aspect légèrement différent selon la version ou le thème ; les données dont vous avez besoin (URL de la boutique, e-mail, clé API) restent les mêmes.
