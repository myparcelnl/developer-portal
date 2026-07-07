---
title: Shopify
description: "De zéro à un colis expédié sur Shopify, ajoutez l'application via l'App Store, connectez votre compte MyParcel avec une clé API, associez vos méthodes d'expédition par zone et imprimez votre première étiquette dès aujourd'hui. Avec démarrage rapide, référence des réglages, checkout, workflow quotidien et un tableau de diagnostic."
---

::: tip En bref
L'application MyParcel connecte votre boutique Shopify à MyParcel. Vous associez vos méthodes d'expédition Shopify à un transporteur et une option de livraison par pays, vous imprimez les étiquettes directement depuis Shopify, et le Track & Trace est envoyé automatiquement au client. Aucun code requis, tout se passe depuis l'admin Shopify.
:::

## Démarrage rapide, votre premier colis en 15 minutes
Suffisant pour expédier votre première vraie commande dès aujourd'hui. Pour une configuration plus approfondie, voir [Vous cherchez…](#vous-cherchez) ci-dessous.

1. **Compte.** Vous n'avez pas encore de compte MyParcel ? Créez-en un sur [myparcel.com/register](https://www.myparcel.com/register).
2. **Copier la clé API.** Connectez-vous à [backoffice.myparcel.com](https://backoffice.myparcel.com) → *Paramètres de la boutique → Intégrations* → copiez la clé API.
3. **Ajouter l'application.** Dans le [Shopify App Store](https://apps.shopify.com/), recherchez *MyParcel* → **Ajouter l'application** → suivez les étapes.
4. **Connecter l'application.** Ouvrez **Applications → MyParcel → Paramètres**, collez la clé dans le champ **Clé API** et enregistrez.
5. **Première étiquette.** Ouvrez **Applications → MyParcel**, cochez une commande payée et cliquez sur **Imprimer**. Votre étiquette PDF sort.

::: tip Vous avez terminé quand vous voyez ceci
- La clé API est enregistrée dans **Paramètres → Compte**
- Vos méthodes d'expédition sont associées sous **Paramètres d'export par défaut** (aucun badge orange *MyParcel non actif*)
- Vous pouvez imprimer une commande test et l'étiquette PDF s'ouvre
:::

## Vous cherchez…
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Première installation | [Démarrage rapide](#dmarrage-rapide-votre-premier-colis-en-15-minutes) |
| Connecter votre compte | [3 · Connecter l'application](#3-connecter-lapplication-cl-api) |
| Connecter via un canal de vente | [Connecter via un canal de vente](#connecter-via-un-canal-de-vente) |
| Rechercher un réglage précis | [4 · Réglages · Général](#4-rglages-gnral) à [7 · Réglages · Envois mondiaux](#7-rglages-envois-mondiaux) |
| Associer une méthode d'expédition à un transporteur | [5 · Réglages · Export & zones](#5-rglages-export-zones) |
| Un réglage différent par produit | [8 · Réglages produit](#8-rglages-produit) |
| Ce que le client voit au checkout | [9 · L'expérience checkout](#9-lexprience-checkout) |
| Imprimer ou exporter des étiquettes | [10 · Utilisation quotidienne](#10-utilisation-quotidienne) |
| Quelque chose ne fonctionne pas | [11 · Quelque chose ne fonctionne pas, diagnostic](#11-quelque-chose-ne-fonctionne-pas-diagnostic) |
| Réponse à une question fréquente | [12 · FAQ](#12-faq) |

## 1 · Préparer votre compte MyParcel
Avant de commencer dans Shopify, réglez quatre choses dans votre backoffice MyParcel :

1. **Adresse de facturation et de retour**, *Paramètres de la boutique → Général*. Cela figure sur chaque étiquette.
2. **Activer les transporteurs**, *Paramètres de la boutique → Transporteurs*. Seuls les transporteurs activés apparaîtront ensuite dans l'application.
3. **Générer une clé API**, *Paramètres de la boutique → Intégrations*.
4. **Configurer vos méthodes d'expédition** dans Shopify sous **Paramètres → Expédition et livraison**. L'application s'associe à ces méthodes (voir [§5](#5-rglages-export-zones)).

## 2 · Installer l'application
1. Rendez-vous sur le [Shopify App Store](https://apps.shopify.com/) et recherchez *MyParcel*.
2. Cliquez sur **Ajouter l'application** et suivez les étapes pour l'ajouter à votre boutique.
3. Ouvrez l'application via **Applications → MyParcel**. À partir de là, elle se met à jour automatiquement.

## 3 · Connecter l'application (clé API)
Ouvrez **Applications → MyParcel** et cliquez en haut à droite sur **Paramètres**. Tous les réglages tiennent sur une seule page ; le premier bloc est **Compte**.

![MyParcel pour Shopify, Compte et Paramètres généraux. Le champ Clé API connecte votre boutique à MyParcel.](../../platforms/images/shopify/account-general.png) La clé API est masquée sur cette capture d'écran.

1. Collez la clé de votre backoffice MyParcel dans **Clé API**.
2. Faites défiler vers le bas et cliquez sur **Enregistrer**.
3. Utilisez **Réinstaller les Webhooks** uniquement si les mises à jour de statut automatiques cessent de fonctionner, cela rétablit la connexion.

::: warning Ça ne marche pas ?
Causes les plus fréquentes : pas cliqué sur *Enregistrer* · un espace copié avant/après la clé · clé d'une autre boutique · clé d'un autre environnement (live vs sandbox) que votre compte MyParcel.
:::

### Connecter via un canal de vente
Au lieu de copier la clé API à la main dans l'application, vous pouvez connecter via un **canal de vente** dans votre backoffice MyParcel. MyParcel se connecte alors directement à votre boutique Shopify.

1. Connectez-vous à [backoffice.myparcel.com](https://backoffice.myparcel.com) et allez dans **Paramètres de la boutique → Canaux de vente**.
2. Cliquez en haut à droite sur **Ajouter un canal de vente**.

![L'aperçu Canaux de vente dans le backoffice MyParcel, avec en haut à droite le bouton Ajouter un canal de vente.](../../platforms/images/shopify/backoffice-sales-channels.png)

3. Renseignez un **Nom** pour le canal et choisissez **Shopify** comme **Type de canal de vente**.
4. Renseignez votre **Store ID**, la première partie de votre adresse `.myshopify.com` (pour la boutique `ma-boutique.myshopify.com`, le Store ID est `ma-boutique`).
5. Cliquez sur **Enregistrer**. Le canal est créé avec un badge **Données manquantes**.

![Ajouter un canal de vente Shopify : choisissez le type et renseignez votre Store ID, puis Enregistrer.](../../platforms/images/shopify/backoffice-add-channel.png)

6. Ouvrez le canal et cliquez sur **Créer la connexion**.
7. Connectez-vous à votre environnement Shopify lorsqu'on vous le demande et approuvez la connexion. Shopify vous renvoie vers le backoffice et le canal affiche **Connecté**.

![Un canal de vente Shopify utilise votre Store ID et un bouton Créer la connexion, cliquer dessus vous demande de vous connecter à Shopify et d'approuver la connexion.](../../platforms/images/shopify/backoffice-credentials.png)

### Que fait l'application dans votre admin Shopify ?
| Où ? | Que pouvez-vous faire ? |
| --- | --- |
| **Applications → MyParcel** | L'écran *Commandes*, sélectionnez des commandes et imprimez ou exportez des étiquettes. |
| **Applications → MyParcel → Paramètres** | Tous les réglages : Compte, Général, Export & zones, Points de retrait, Envois mondiaux. |
| **Produit → Expédition** | Champs Shopify standard (poids, pays d'origine, code SH) que MyParcel lit. |

::: tip Deux étiquettes MyParcel dans votre liste d'applications ?
Sur une boutique de développement, vous voyez parfois *MyParcel.nl DEV* ou *MyParcel.nl - Local* à côté de l'application publiée **MyParcel NL**. Utilisez l'application publiée pour les expéditions en production.
:::

## 4 · Réglages · Général
Dans **Paramètres**, sous Compte, vous trouvez les **Paramètres généraux**.

![Paramètres généraux : format de page, description d'étiquette, fulfilment, export automatique, e-mails Track & Trace.](../../platforms/images/shopify/account-general.png)

- **Choix de page par défaut**, Définit le format d'étiquette. *Imprimante standard (A4)* pour une imprimante ordinaire, *Imprimante d'étiquettes (A6)* pour une imprimante d'étiquettes Zebra/Brother.
- **Description sur l'étiquette**, Le texte sur votre étiquette. Utilisez des variables qui se remplissent automatiquement : `{order_name}` (par ex. #1008), `{order_number}` (par ex. 1008) ou `{product_sku}` (par ex. TST-D01).
- **Fulfilment**, Quand une commande est marquée *Fulfilled* dans Shopify. Choisissez *Manuel* (vous le faites), *Automatique* (au premier scan du transporteur) ou *Immédiat* (à l'impression d'une étiquette).
- **Export automatique**, Si les commandes partent automatiquement vers MyParcel. *Ne pas transférer automatiquement* pour le faire à la main, ou une option d'export pour transférer automatiquement les informations d'envoi (ou la commande complète, produits inclus pour les bons de livraison).
- **Envoyer les e-mails Track & Trace depuis Shopify**, *Non* laisse MyParcel envoyer l'e-mail ; *Oui* laisse Shopify le faire.

## 5 · Réglages · Export & zones
C'est ici que vous associez vos méthodes d'expédition Shopify à un transporteur MyParcel, une option de livraison et un type de colis, par **zone** (pays ou région). Créez d'abord les zones et les tarifs dans Shopify sous **Paramètres → Expédition et livraison**.

![Paramètres d'export avec zones. Chaque zone associe les méthodes d'expédition à un transporteur et un type de colis.](../../platforms/images/shopify/export-zones.png)

- **Réglage par défaut**, L'option de repli utilisée quand une méthode d'expédition n'est pas reconnue. Pour les envois européens et mondiaux, un envoi colis est créé automatiquement.
- **Par zone**, Chaque zone affiche vos méthodes d'expédition Shopify (par ex. *Standard* et *Pickup*) avec le prix et les options MyParcel associées (*Livraison à domicile* ou *Point de retrait*, plus le type de colis).

Cliquez sur une méthode d'expédition pour ouvrir son association :

![Associer une méthode d'expédition, Expédier via MyParcel, transporteur et type d'envoi.](../../platforms/images/shopify/zone-link-1.png)

![Associer une méthode d'expédition, type de colis et poids d'emballage.](../../platforms/images/shopify/zone-link-2.png)

- **Expédier via MyParcel NL**, Réglez sur *Oui* pour envoyer cette méthode via MyParcel.
- **Expédier via**, Le transporteur pour cette méthode. Les transporteurs affichés dépendent de la zone (par ex. PostNL, DHL et DPD aux Pays-Bas ; InPost et Poste Italiane en Italie).
- **Type d'envoi**, *Livraison standard* (livraison à domicile) ou *Retrait en point de retrait*.
- **Type de colis**, par ex. *Colis*. Choisissez une option boîte aux lettres si l'envoi passe par la boîte aux lettres.
- **Poids d'emballage par défaut**, Le poids de l'emballage en grammes. S'ajoute au poids du produit.

::: warning N'oubliez pas d'enregistrer
Après avoir associé vos méthodes, faites défiler jusqu'en bas de la page des réglages et cliquez sur **Enregistrer**.
:::

## 6 · Réglages · Points de retrait
Plus bas sur la page des réglages se trouvent les options de point de retrait et d'e-mail de rappel.

![Réglages des points de retrait et l'e-mail de rappel pour le point de retrait.](../../platforms/images/shopify/export-zones.png)

- **Choisir automatiquement le point de retrait le plus proche**, Choisit automatiquement le point le plus proche pour le client.
- **E-mail de rappel du point de retrait**, Si le client n'a pas choisi de point de retrait, MyParcel envoie 30 minutes après la commande un e-mail de rappel avec un lien. Réglez **Envoyer l'e-mail de rappel** sur *Oui*, renseignez un **E-mail de contact** pour votre propre service client et choisissez la **langue pour les points PostNL** (NL/BE).

## 7 · Réglages · Envois mondiaux
En bas de la page des réglages, définissez les valeurs douanières par défaut utilisées pour les envois hors UE lorsqu'un produit n'a pas ses propres données douanières.

![Envois mondiaux : code SH par défaut, poids par défaut et pays d'origine par défaut.](../../platforms/images/shopify/world-shipments.png)

- **Code SH par défaut**, Code douanier pour vos produits. Recherchez-le sur [tarief.douane.nl](https://tarief.douane.nl). Un code erroné peut entraîner un retour par la douane.
- **Poids par défaut par colis (en grammes)**, Utilisé quand un produit n'a pas de poids. Choisissez une valeur proche de votre moyenne.
- **Pays d'origine par défaut**, Le pays depuis lequel vous expédiez.

## 8 · Réglages produit
L'application MyParcel n'ajoute **aucun** champ à la page produit Shopify. Vous définissez les informations d'expédition via les champs Shopify standard sous **Expédition** sur le produit ou la variante. MyParcel les lit.

![Champs d'expédition Shopify que MyParcel lit : colis, poids du produit, pays d'origine, code SH.](../../platforms/images/shopify/product-shipping.png)

- **Colis**, Le format de colis standard de Shopify pour ce produit.
- **Poids du produit**, Renseignez-le toujours ; il influe sur le prix d'expédition.
- **Code pays d'origine** (sous *Données douanières*), D'où vient le produit. Nécessaire hors UE.
- **Code Harmonized System (SH)** (sous *Données douanières*), Saisissez un code à 6 chiffres ou recherchez par mot-clé. Important pour les envois mondiaux.

## 9 · L'expérience checkout
Ce que voit votre client une fois l'adresse de livraison renseignée. Les options dépendent de vos réglages au [§5](#5-rglages-export-zones).

![Checkout, le client choisit Expédition & points de retrait ou Retrait en magasin.](../../platforms/images/shopify/checkout-delivery.png)

Le client choisit d'abord **Expédition & points de retrait** ou **Retrait en magasin**. Les méthodes d'expédition correspondant au pays choisi apparaissent ensuite.

![Checkout, méthodes d'expédition (Standard / Pickup) associées depuis vos zones.](../../platforms/images/shopify/checkout-method.png)

- **Standard**, Livraison à domicile ordinaire (dans l'exemple : gratuite, 3 à 5 jours ouvrés).
- **Pickup**, Retrait dans un point de retrait à proximité (dans l'exemple : 2,00 €, 5 à 8 jours ouvrés).

Si vous avez activé les points de retrait ([§5](#5-rglages-export-zones) et [§6](#6-rglages-points-de-retrait)), le client peut choisir un point de retrait sur la page de remerciement après le checkout. S'il ne le fait pas, un e-mail de rappel suit. *Les prix et délais de livraison sont des exemples, ils dépendent de vos propres réglages et de votre contrat.*

## 10 · Utilisation quotidienne
Ouvrez **Applications → MyParcel**. Vous arrivez sur l'écran **Commandes**, avec des onglets tels que *All*, *Paid & Unfulfilled*, *Printed*, *Fulfilled* et *Incomplètes*.

![Aperçu des commandes, onglets, cases à cocher et statut par commande. Les données client sont masquées ici.](../../platforms/images/shopify/orders-list.png) Les données client sont masquées sur cette capture d'écran.

1. Cochez la ou les commandes que vous voulez traiter.
2. Utilisez la barre d'actions qui apparaît en haut :

![Barre d'actions : Imprimer, Exporter la commande, Créer un brouillon.](../../platforms/images/shopify/orders-actions.png)

- **Imprimer**, Crée les étiquettes et les imprime.
- **Exporter la commande**, Envoie la ou les commandes vers MyParcel.
- **Créer un brouillon**, Crée un envoi brouillon à finaliser plus tard.

::: tip Quand êtes-vous facturé
Vous n'êtes facturé qu'une fois l'envoi réellement remis au transporteur.
:::

## 11 · Quelque chose ne fonctionne pas, diagnostic
Parcourez ce tableau de haut en bas, la plupart des problèmes se règlent en 5 minutes.

| Symptôme | Que vérifier |
| --- | --- |
| **L'écran de l'application reste vide** | Sur une boutique de développement, l'application *MyParcel.nl DEV* / *Local* ne s'affiche qu'avec un serveur de développement en cours d'exécution. Utilisez l'application publiée **MyParcel NL**. |
| **"Geen exportinstellingen gevonden voor de verzendmethode"** | La méthode d'expédition de cette commande n'est pas associée. Associez la bonne zone et la bonne méthode au [§5](#5-rglages-export-zones). |
| **Aucun point de retrait au checkout** | Activez le point de retrait dans votre association de zone ([§5](#5-rglages-export-zones)) et vérifiez les réglages des points de retrait ([§6](#6-rglages-points-de-retrait)). |
| **Erreur lors de l'impression de plusieurs étiquettes** | Une commande avec une adresse incomplète ne peut pas être exportée. Vérifiez les commandes avec un avertissement (par ex. *Point de retrait non renseigné*) et corrigez l'adresse. |
| **La clé API n'est pas acceptée** | Recollez la clé du backoffice (*Intégrations*) sans espaces supplémentaires, puis cliquez sur **Enregistrer**. |
| **Envoi mondial retourné par la douane** | Assurez-vous que le code SH et le poids sont corrects. Définissez des valeurs par défaut ([§7](#7-rglages-envois-mondiaux)) ou des valeurs précises par produit ([§8](#8-rglages-produit)). |

## 12 · FAQ

### L'application est-elle payante ?
Non. Vous ne payez que pour les envois via MyParcel.

### Où trouver ma clé API ?
Dans votre backoffice MyParcel sous *Paramètres de la boutique → Intégrations*.

### Quels transporteurs puis-je utiliser ?
Les transporteurs activés sur votre compte MyParcel, par zone, par exemple PostNL, DHL et DPD aux Pays-Bas, et InPost et Poste Italiane en Italie.

### Comment modifier l'adresse d'expéditeur sur l'étiquette ?
Cela se règle dans votre backoffice MyParcel (*Paramètres de la boutique → Général*), pas dans l'application. Les modifications s'appliquent immédiatement.

### Mes clients peuvent-ils choisir un point de retrait ?
Oui, activez le point de retrait dans votre association de zone ([§5](#5-rglages-export-zones)). Le client choisit un point sur la page de remerciement.

### Puis-je envoyer une étiquette de retour à mon client ?
Oui, les étiquettes de retour peuvent être envoyées par e-mail au client. Consultez votre backoffice MyParcel pour les options du portail de retour.

## Ressources & support
- [github.com/myparcelnl/shopify ↗](https://github.com/myparcelnl/shopify), manuel & issues.
- [apps.shopify.com ↗](https://apps.shopify.com/), trouvez et ajoutez l'application MyParcel.
- [backoffice.myparcel.com ↗](https://backoffice.myparcel.com), compte, clé API, facturation.
