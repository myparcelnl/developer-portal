---
title: Ecwid
description: "Connectez votre boutique Ecwid à MyParcel avec l'application gratuite MyParcel de l'Ecwid App Market. Couvre l'installation de l'application, la saisie de votre clé API, le moment où les commandes arrivent chez MyParcel, la création des étiquettes à partir des envois en brouillon dans votre back-office MyParcel, et un tableau de diagnostic."
---

::: tip En bref
Ecwid se connecte à MyParcel avec l'application gratuite **MyParcel** de l'**Ecwid App Market**. Vous saisissez une seule fois votre clé API MyParcel, puis chaque commande qui passe à **Paid** (Payée) dans Ecwid apparaît dans votre back-office MyParcel sous forme d'**envoi en brouillon**. C'est là que vous choisissez le transporteur, le type de colis et les options et que vous créez l'étiquette, pas dans Ecwid. L'application n'a pas d'autres réglages.
:::

## Démarrage rapide, votre première étiquette en 10 minutes
De quoi expédier votre première commande dès aujourd'hui. Pour les détails, voir [Que cherchez-vous ?](#que-cherchez-vous) ci-dessous.

1. **Compte.** Vous n'avez pas encore de compte MyParcel ? Créez-en un sur [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Copiez la clé API.** Connectez-vous à [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Paramètres de la boutique → Intégration* → copiez la clé API.
3. **Installez l'application.** Dans l'administration Ecwid, allez dans **Apps → App Market**, recherchez *MyParcel* et installez l'application gratuite.
4. **Collez la clé.** Ouvrez l'application, collez la clé dans **Fill in your MyParcel API key** et cliquez sur **Connect** (Connecter).
5. **Imprimez une étiquette.** Passez une commande à **Paid**, ouvrez **Envois** dans votre back-office MyParcel, vérifiez l'envoi en brouillon et créez l'étiquette.

::: tip C'est terminé lorsque vous voyez ceci
- L'application affiche un statut vert **Connected to** (Connecté à)
- Une commande Ecwid payée apparaît comme envoi en brouillon dans votre back-office MyParcel
:::

## Que cherchez-vous ?
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Comprendre ce que fait l'application | [1 · Comment fonctionne la connexion](#1-comment-fonctionne-la-connexion) |
| Installer l'application | [2 · Installer l'application](#2-installer-lapplication) |
| Connecter votre compte | [3 · Connecter votre compte MyParcel](#3-connecter-votre-compte-myparcel) |
| Savoir quand une commande est transmise | [4 · Quand les commandes arrivent chez MyParcel](#4-quand-les-commandes-arrivent-chez-myparcel) |
| Régler le transporteur, le type de colis et les options | [5 · Réglages d'envoi](#5-rglages-denvoi) |
| Voir ce que voient vos clients | [7 · L'expérience au checkout](#7-lexprience-au-checkout) |
| Imprimer des étiquettes | [8 · Utilisation au quotidien](#8-utilisation-au-quotidien) |
| Quelque chose ne fonctionne pas | [9 · Un problème, diagnostic](#9-un-problme-diagnostic) |
| Réponse à une question fréquente | [10 · FAQ](#10-faq) |

## 1 · Comment fonctionne la connexion
L'application MyParcel relie votre boutique Ecwid à une boutique de votre compte MyParcel. Elle fait une seule chose : dès qu'une commande passe à **Paid** (Payée), l'application l'envoie à MyParcel, où elle attend sous forme d'envoi en brouillon. Ensuite, vous travaillez dans votre back-office MyParcel : vous vérifiez l'envoi, créez l'étiquette et remettez le colis au transporteur.

L'application n'ajoute pas d'options de livraison au checkout, n'ajoute aucun réglage à vos produits et n'affiche pas d'étiquettes dans Ecwid.

::: warning Pas la même chose que Buy Shipping Label
Le bouton Ecwid **Buy Shipping Label** (Acheter une étiquette d'expédition) sur une commande n'a rien à voir avec MyParcel. Pour expédier à vos tarifs MyParcel, créez l'étiquette dans votre back-office MyParcel.
:::

## 2 · Installer l'application
1. Dans l'administration Ecwid, ouvrez **Apps → App Market**.
2. Recherchez *MyParcel* et ouvrez l'application de MyParcel. Elle est gratuite.
3. Installez l'application et acceptez les autorisations qu'elle demande.

Vos applications installées sont listées sous **Apps → My Apps** (Mes applications). Cliquez sur **Open app** à côté de MyParcel pour ouvrir la page de l'application. Une fois installée, l'application figure aussi sous **Shipping & Pickup → MyParcel** (Expédition et retrait) dans le menu de gauche.

![L'application MyParcel sous My Apps dans l'administration Ecwid, avec le bouton Open app.](../../platforms/images/ecwid/02-my-apps.png)

## 3 · Connecter votre compte MyParcel
![La page de l'application MyParcel dans Ecwid : le champ de la clé API avec le bouton Connect, et en dessous le statut vert de connexion.](../../platforms/images/ecwid/01-connect.png)

1. Copiez votre clé API depuis [backoffice.myparcel.nl](https://backoffice.myparcel.nl) sous *Paramètres de la boutique → Intégration*. Le lien **General settings** sous le champ mène aussi à votre back-office MyParcel.
2. Collez-la dans **Fill in your MyParcel API key**. Attention aux espaces avant ou après la clé.
3. Cliquez sur **Connect** (Connecter).

Si la clé est acceptée, le bloc **Status** devient vert avec **Connected to** (Connecté à) suivi de votre compte MyParcel, et la ligne *You will see your orders appear in your MyParcel Backoffice automatically* (Vos commandes apparaîtront automatiquement dans votre back-office MyParcel). Si la clé n'est pas acceptée, le statut indique **Not connected** (Non connecté).

Pour utiliser une autre clé, cliquez sur **Disconnect** (Déconnecter). La clé est supprimée et vous pouvez en saisir une nouvelle.

::: warning Une clé, une boutique
L'application se connecte à une seule boutique de votre compte MyParcel. Si votre compte compte plusieurs boutiques, utilisez la clé API de la boutique où vos commandes Ecwid doivent arriver. Toutes les étiquettes et factures se retrouvent dans cette boutique.
:::

## 4 · Quand les commandes arrivent chez MyParcel
Une commande est envoyée à MyParcel au moment où son **Payment Status** (Statut du paiement) passe à **Paid** (Payée). Avec un paiement en ligne, cela se fait automatiquement. Pour une commande payée autrement, par exemple par virement, changez le statut vous-même : ouvrez la commande et cliquez sur **Mark as Paid** (Marquer comme payée), ou choisissez **Paid** dans le menu *Payment Status*.

![Une commande Ecwid avec le menu Payment Status ouvert, Paid en haut, et le bouton Mark as Paid.](../../platforms/images/ecwid/03-order-paid.png)

Les commandes encore en *Awaiting Payment* (En attente de paiement), annulées ou remboursées ne sont pas envoyées.

## 5 · Réglages d'envoi
L'application n'a pas de réglages d'envoi propres. Tout ce qui concerne le colis se décide dans votre back-office MyParcel :

- **Les valeurs par défaut.** Chaque envoi en brouillon démarre avec le transporteur, le type de colis et les options par défaut de la boutique à laquelle l'application est reliée. Vous les réglez dans votre back-office MyParcel sous *Paramètres de la boutique*.
- **Par envoi.** Avant de créer une étiquette, vous pouvez modifier le transporteur, le type de colis, les options et l'assurance directement sur l'envoi en brouillon.

Les transporteurs et options disponibles dépendent de votre contrat MyParcel.

## 6 · Réglages produit
Cette application n'ajoute pas d'options au niveau des produits. Tout ce qui concerne l'expédition se gère depuis votre back-office MyParcel.

## 7 · L'expérience au checkout
L'application ne modifie pas le checkout Ecwid. Vos clients choisissent parmi les modes d'expédition que vous avez configurés dans Ecwid sous **Shipping & Pickup**, comme un tarif fixe ou la livraison gratuite. Le mode choisi n'est pas repris comme transporteur ou option de livraison : vous les choisissez vous-même sur l'envoi en brouillon dans MyParcel.

## 8 · Utilisation au quotidien
1. Une commande arrive et passe à **Paid** ([§4](#4-quand-les-commandes-arrivent-chez-myparcel)).
2. Dans votre back-office MyParcel, ouvrez **Envois**. La commande s'y trouve comme **envoi en brouillon**.
3. Vérifiez l'adresse, le transporteur, le type de colis et le poids. Cliquez sur le crayon à côté de l'envoi pour modifier quelque chose.
4. Créez l'étiquette, imprimez-la et remettez le colis au transporteur. Vous pouvez le faire envoi par envoi, ou en sélectionner plusieurs et créer les étiquettes en une fois.

L'application ne renvoie pas le code Track & Trace vers Ecwid. Pour que votre client puisse suivre son colis, partagez le lien Track & Trace depuis MyParcel, ou ajoutez-le à la commande dans Ecwid avec **Add tracking number** (Ajouter un numéro de suivi).

Vous ne payez un envoi qu'une fois qu'il est réellement remis au transporteur.

## 9 · Un problème, diagnostic
Parcourez ce tableau de haut en bas, la plupart des problèmes se règlent en quelques minutes.

| Symptôme | Que vérifier |
| --- | --- |
| **Le statut indique Not connected** | La **clé API** est-elle correcte, sans espaces ? Copiez-la à nouveau depuis votre back-office MyParcel et cliquez sur **Connect** ([§3](#3-connecter-votre-compte-myparcel)). |
| **Une commande payée n'arrive pas chez MyParcel** | La commande est-elle vraiment sur **Paid** ? Pour l'envoyer à nouveau, remettez le statut du paiement sur *Awaiting Payment* puis de nouveau sur **Paid** ([§4](#4-quand-les-commandes-arrivent-chez-myparcel)). |
| **Les commandes arrivent dans la mauvaise boutique MyParcel** | L'application est reliée à la boutique à laquelle appartient la clé API. Cliquez sur **Disconnect** et reconnectez-vous avec la clé de la bonne boutique ([§3](#3-connecter-votre-compte-myparcel)). |
| **Aucune commande n'arrive** | Supprimez l'application sous **Apps → My Apps**, réinstallez-la et reconnectez-la avec votre clé API ([§2](#2-installer-lapplication)). |
| **Le poids ou la valeur du brouillon semblent faux** | Vérifiez le poids de vos produits dans Ecwid et corrigez l'envoi en brouillon avant de créer l'étiquette ([§8](#8-utilisation-au-quotidien)). |

## 10 · FAQ

### Où trouver ma clé API ?
Dans [backoffice.myparcel.nl](https://backoffice.myparcel.nl) sous *Paramètres de la boutique → Intégration*.

### Où imprimer les étiquettes ?
Dans votre back-office MyParcel, sous **Envois**. Vos commandes Ecwid vous y attendent comme envois en brouillon.

### Puis-je choisir le transporteur par commande ?
Oui, sur l'envoi en brouillon dans votre back-office MyParcel, avant de créer l'étiquette. Les transporteurs disponibles dépendent de votre contrat MyParcel.

### Mes clients peuvent-ils choisir un jour de livraison ou un point relais au checkout ?
Non. L'application n'ajoute pas d'options de livraison au checkout Ecwid.

### Puis-je définir des options d'expédition par produit ?
Non. Réglez vos valeurs par défaut dans votre back-office MyParcel et ajustez un envoi précis sur le brouillon.

### Comment connecter une autre boutique MyParcel ?
Cliquez sur **Disconnect** sur la page de l'application et reconnectez-vous avec la clé API de l'autre boutique.

### Quand suis-je facturé ?
MyParcel facture un envoi seulement une fois qu'il est réellement remis au transporteur.

## Ressources & support
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), compte, clé API, transporteurs et facturation.
- [MyParcel dans l'Ecwid App Market ↗](https://www.ecwid.com/apps/shipping/myparcel/).
- [Contacter le support MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Ce manuel décrit l'application MyParcel pour Ecwid telle qu'elle fonctionne en octobre 2026.
