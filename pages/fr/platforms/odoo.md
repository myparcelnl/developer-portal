---
title: Odoo
description: "De zéro au premier colis expédié dans Odoo 19, installez l'application MyParcel Shipping, créez une méthode d'expédition par transporteur, choisissez vos options sur la commande client et imprimez l'étiquette depuis la livraison. Avec démarrage rapide, guide des réglages, une matrice des options par transporteur, le flux quotidien et un tableau de diagnostic."
---

::: tip En bref
L'application MyParcel Shipping relie votre base Odoo à MyParcel. Vous créez une méthode d'expédition par transporteur, choisissez les options sur la commande client, et dès que vous validez la livraison Odoo crée l'expédition chez MyParcel et récupère l'étiquette et le Track & Trace. Tout se passe dans les écrans standard **Sales** et **Inventory**, sans code.
:::

::: tip À propos des captures
Les captures montrent l'interface Odoo en anglais. Si votre Odoo est en français, vous verrez les mêmes champs avec des noms traduits, par exemple *Paramètres MyParcel* pour **MyParcel Settings**.
:::

## Démarrage rapide, votre premier colis en 15 minutes
De quoi expédier votre première vraie commande aujourd'hui. Pour une configuration plus poussée, voir [Que cherchez-vous ?](#que-cherchez-vous) ci-dessous.

1. **Récupérez votre clé API.** Connectez-vous à [backoffice.myparcel.com](https://backoffice.myparcel.com), allez dans *Paramètres boutique → Intégrations* et copiez votre clé API.
2. **Installez l'application.** Dans Odoo, ouvrez **Apps**, cherchez *MyParcel Shipping* et cliquez sur **Activate**.
3. **Créez une méthode d'expédition.** Allez dans **Sales → Configuration → Delivery Methods → New**. Donnez-lui un nom, choisissez un **Provider** comme *MyParcel - PostNL* et réglez **Integration Level** sur *Get Rate and Create Shipment*.
4. **Connectez votre compte.** Ouvrez l'onglet **MyParcel Settings**, choisissez votre **MyParcel Platform**, collez votre **API Key**, choisissez un **Package Type** et cliquez sur **MyParcel API CHECK**.
5. **Expédiez une commande.** Sur une commande client, cliquez sur **Add shipping**, choisissez votre méthode MyParcel, cliquez sur **Get rate** puis sur **Add**. Confirmez la commande, ouvrez la livraison et cliquez sur **Validate**.

::: tip Vous avez terminé quand vous voyez ceci
- **MyParcel API CHECK** répond *Connection Successful*
- Votre méthode apparaît dans la fenêtre **Add shipping**, avec les options MyParcel en dessous
- Après validation de la livraison, **Tracking Reference** et **Label URL** sont renseignés dans l'onglet **Additional Info**
:::

## Que cherchez-vous ?
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Première configuration | [Démarrage rapide](#dmarrage-rapide-votre-premier-colis-en-15-minutes) |
| Installer l'application | [2 · Installer l'application](#2-installer-lapplication) |
| Créer une méthode par transporteur | [3 · Créer une méthode d'expédition](#3-crer-une-mthode-dexpdition) |
| Saisir ou tester la clé API | [4 · Réglages · Général et commandes](#4-rglages-gnral-et-commandes) |
| Choisir entre étiquettes A4 et A6 | [5 · Réglages · Étiquettes](#5-rglages-tiquettes) |
| Décider comment les frais sont calculés | [6 · Réglages · Tarifs](#6-rglages-tarifs) |
| Régler le type de colis et l'assurance | [7 · Réglages · Type de colis et assurance](#7-rglages-type-de-colis-et-assurance) |
| Définir les options par défaut par transporteur | [8 · Réglages · Options par transporteur](#8-rglages-options-par-transporteur) |
| Voir quelles options un transporteur accepte | [9 · Ce que chaque transporteur prend en charge](#9-ce-que-chaque-transporteur-prend-en-charge) |
| Renseigner les données douanières sur les produits | [10 · Réglages produit](#10-rglages-produit) |
| Modifier les options d'une seule commande | [11 · Options d'expédition par commande](#11-options-dexpdition-par-commande) |
| Imprimer une étiquette et trouver le Track & Trace | [12 · La livraison, l'étiquette et le Track & Trace](#12-la-livraison-ltiquette-et-le-track-trace) |
| Quelque chose ne fonctionne pas | [14 · Quelque chose ne fonctionne pas, diagnostic](#14-quelque-chose-ne-fonctionne-pas-diagnostic) |
| Réponse à une question fréquente | [15 · Questions fréquentes](#15-questions-frquentes) |

## 1 · Préparer votre compte MyParcel
Avant de commencer dans Odoo, réglez trois points dans votre backoffice MyParcel :

1. **Adresse de facturation et de retour**, dans *Paramètres boutique → Général*. Elle figure sur chaque étiquette.
2. **Activez vos transporteurs**, dans *Paramètres boutique → Transporteurs*. Vous ne pouvez expédier qu'avec les transporteurs actifs sur votre compte.
3. **Copiez votre clé API**, dans *Paramètres boutique → Intégrations*. Il vous faut une clé par boutique.

Il vous faut également une base Odoo avec **Inventory** et **Sales** installés, et un utilisateur disposant des droits d'administrateur pour accéder aux écrans de configuration.

## 2 · Installer l'application
1. Ouvrez **Apps** depuis l'écran d'accueil d'Odoo.
2. Cherchez **MyParcel Shipping** et cliquez sur **Activate**.
3. Odoo installe l'application avec **Inventory** et les fonctions d'expédition nécessaires.

L'application ajoute un onglet **MyParcel Settings** à vos méthodes d'expédition, vos commandes client et vos livraisons, et crée un type de colis par transporteur.

::: tip Migrer depuis l'ancien module
Si vous utilisiez auparavant le module `delivery_myparcel`, l'application actuelle le remplace sous le nom `delivery_myparcel_official`. Suivez les étapes de migration du changelog de l'application avant d'installer, pour que vos méthodes d'expédition existantes continuent de fonctionner.
:::

## 3 · Créer une méthode d'expédition
Vous créez **une méthode d'expédition par transporteur**. Une méthode nommée *MyParcel PostNL* expédie avec PostNL, une deuxième méthode expédie avec DHL, et ainsi de suite.

Allez dans **Sales → Configuration → Delivery Methods** et cliquez sur **New**.

![La liste des méthodes d'expédition, avec une méthode MyParcel à côté de la méthode standard d'Odoo.](../../platforms/images/odoo/01-delivery-methods.png)

Remplissez le haut du formulaire :

| Champ | Ce qu'il faut régler |
| --- | --- |
| **Delivery Method** | Le nom que votre équipe voit sur les commandes, par exemple *MyParcel PostNL*. |
| **Provider** | Le transporteur MyParcel, par exemple *MyParcel - PostNL*. Ce choix détermine les options qui apparaissent plus bas. |
| **Integration Level** | *Get Rate and Create Shipment*. Avec *Get Rate* seul, Odoo demande un prix à MyParcel mais ne crée jamais l'expédition ni l'étiquette. |
| **Delivery Product** | Laissez *MyParcel Package*. C'est le produit qu'Odoo ajoute à la commande pour facturer les frais de port. |
| **Invoicing Policy** | *Estimated cost* facture le prix affiché sur la commande. *Real cost* facture ce que l'expédition a réellement coûté. |

Dans l'onglet **Availability**, vous choisissez pour quelles commandes une méthode s'applique, par pays, préfixe de code postal, poids ou volume. C'est le comportement standard d'Odoo et il fonctionne de la même façon pour les méthodes MyParcel.

## 4 · Réglages · Général et commandes
Ouvrez l'onglet **MyParcel Settings** sur la méthode d'expédition.

![L'onglet MyParcel Settings d'une méthode d'expédition, avec les réglages généraux, commandes, étiquettes et tarifs.](../../platforms/images/odoo/02-carrier-general.png)

| Réglage | Ce qu'il fait |
| --- | --- |
| **MyParcel Platform** | *MyParcel NL* pour un compte myparcel.nl, *MyParcel BE* pour un compte SendMyParcel. Cela détermine aussi les options d'expédition disponibles, certaines n'existent que sur une seule plateforme. |
| **API Key** | La clé issue de votre backoffice MyParcel. Collez-la ici et enregistrez. |
| **MyParcel API CHECK** | Teste la connexion. *Connection Successful* signifie que la clé fonctionne, *Connection Error* qu'il faut la vérifier. |
| **Add Email to Shipment** | Transmet l'adresse e-mail du client avec l'expédition, pour que MyParcel puisse envoyer le Track & Trace. Activez-le si vous voulez que votre client soit prévenu. L'adresse devient alors obligatoire sur chaque commande utilisant cette méthode. |
| **Add Phone to Shipment** | Transmet le numéro de téléphone du client. Certains transporteurs et modes de livraison en ont besoin. Le numéro devient alors obligatoire sur chaque commande utilisant cette méthode. |

::: warning Obligatoires dès que vous les activez
**Add Email to Shipment** et **Add Phone to Shipment** rendent ces champs obligatoires. Une commande sans adresse e-mail ou sans numéro de téléphone bloque ensuite avec un message clair au moment d'expédier.
:::

## 5 · Réglages · Étiquettes
| Réglage | Ce qu'il fait | Recommandé |
| --- | --- | --- |
| **Label size** | *Standard Printer (A4)* place jusqu'à quatre étiquettes sur une feuille A4. *Labelprinter (A6)* imprime une étiquette par autocollant. | A6 si vous avez une imprimante d'étiquettes |
| **Label position** | Le quart de la feuille A4 où arrive la première étiquette, de *Top Left* à *Bottom Right*. Visible uniquement en A4. | Top Left |
| **Direct Label** | Activé, Odoo récupère l'étiquette et le code Track & Trace dès la création de l'expédition, et joint le PDF à la livraison. Désactivé, l'expédition est créée mais vous récupérez l'étiquette vous-même ensuite. | Activé |

## 6 · Réglages · Tarifs
| Réglage | Ce qu'il fait |
| --- | --- |
| **Pricing method** | *Dynamic pricing* demande à MyParcel le coût exact de cette expédition et place ce montant sur la commande. *Fixed Price* facture un montant que vous fixez vous-même. |
| **Fixed Price** | Le prix d'expédition que vous facturez. Visible uniquement quand Pricing method est sur *Fixed Price*. |

Avec **Fixed Price**, vous pouvez aussi facturer un supplément par option. Un champ de prix apparaît à côté de chaque option activée dans [Options par transporteur](#8-rglages-options-par-transporteur), par exemple *Age Verification Price (18+)* ou *Signature Price*, et ces montants s'ajoutent au prix fixe.

::: tip Comment fonctionne la tarification dynamique
Pour donner un prix réel, MyParcel crée brièvement l'expédition, lit son prix et la supprime. Rien n'est expédié et cette consultation ne vous coûte rien.
:::

## 7 · Réglages · Type de colis et assurance
![Les réglages de colis, la grille tarifaire d'assurance et les options transporteur d'une méthode PostNL.](../../platforms/images/odoo/03-carrier-postnl-options.png)

**Package Type** est obligatoire. Chaque transporteur a ses propres types de colis, et la liste ne propose que ceux du provider choisi. Vous les retrouvez tous dans **Inventory → Configuration → Package Types**.

![Les types de colis ajoutés par l'application, un par transporteur, avec leur poids maximum et leur code transporteur.](../../platforms/images/odoo/07-package-types.png)

Sous **Insurance**, vous construisez votre propre grille tarifaire. Ajoutez une ligne pour chaque montant assuré que vous voulez proposer et indiquez ce que vous facturez :

- **Insurance Amount** est la valeur assurée en euros : 85, 100, 250, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500 ou 5000.
- **Price** est ce que vous facturez au client pour cette couverture.

Laissez la liste vide si vous ne proposez pas d'assurance. Votre équipe choisit un montant dans cette liste directement sur la commande.

## 8 · Réglages · Options par transporteur
Le dernier bloc, **Carrier settings**, définit les options **par défaut** de chaque expédition avec cette méthode. Votre équipe peut encore les modifier commande par commande.

| Option | Ce qu'elle fait |
| --- | --- |
| **Age Verification (18+)** | Le transporteur contrôle la pièce d'identité du destinataire et ne remet le colis qu'à une personne de 18 ans ou plus. À utiliser pour l'alcool, le tabac ou d'autres produits soumis à une limite d'âge. |
| **Signature** | Le transporteur demande une signature à la livraison. Utile pour les commandes de valeur. |
| **Receiver Only** | Le colis va uniquement au destinataire, pas à un voisin. |
| **Receipt Code** | Le destinataire a besoin d'un code pour retirer le colis. PostNL uniquement, pour des adresses néerlandaises et belges, et uniquement avec une assurance. |
| **Larger than 100x70x58 cm** | Marque le colis comme hors gabarit. PostNL uniquement, pour des adresses européennes. |
| **Direct Return** | Ajoute une étiquette de retour pour que le client puisse renvoyer la commande immédiatement. PostNL sur MyParcel NL uniquement. |
| **Hide Sender** | Laisse vos coordonnées hors de l'étiquette, par exemple si vous expédiez pour le compte d'un tiers. DHL For You et DHL Europlus uniquement. |
| **Same-day Delivery** | Propose la livraison le jour même. DHL For You uniquement. |

::: warning Combinaisons que PostNL n'autorise pas
**Receipt Code** ne se combine pas avec Age Verification, Signature ou Receiver Only, et exige toujours une assurance. Hors Pays-Bas et Belgique, **Signature** exige également une assurance. Odoo bloque la combinaison avec un message avant que l'expédition ne parte.
:::

## 9 · Ce que chaque transporteur prend en charge
Tous les transporteurs ne proposent pas toutes les options, et certaines n'existent que sur une plateforme. Voici ce que vous pouvez utiliser par transporteur :

| Transporteur | 18+ | Signature | Destinataire seul | Code de retrait | Hors gabarit | Retour direct | Masquer l'expéditeur | Assurance |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **PostNL** | NL seulement | oui | oui | NL et BE | UE seulement | NL seulement | non | oui |
| **DHL For You** | NL seulement | oui | oui | non | non | non | oui | oui |
| **DHL Europlus** | non | oui | non | non | non | non | oui | oui |
| **DHL Parcel Connect** | non | non | non | non | non | non | non | oui |
| **DPD** | non | non | non | non | non | non | non | non |
| **Bpost** | non | oui | non | non | non | non | non | non |
| **UPS Standard** | NL seulement | oui | oui | non | non | non | non | oui |
| **UPS Express Saver** | NL seulement | oui | oui | non | non | non | non | oui |

*NL seulement* signifie que l'option apparaît quand **MyParcel Platform** est réglé sur *MyParcel NL*. Sur une méthode *MyParcel BE*, ces options sont masquées.

## 10 · Réglages produit
L'application n'ajoute pas de champs MyParcel à l'écran produit. Tout le comportement d'expédition se règle depuis la méthode d'expédition (voir [4 · Réglages · Général et commandes](#4-rglages-gnral-et-commandes)) et depuis la commande elle-même.

Trois champs produit standard d'Odoo comptent toutefois, parce que MyParcel les utilise :

| Champ | Où | Pourquoi c'est important |
| --- | --- | --- |
| **Weight** | Produit → onglet *Inventory* | Détermine le prix d'expédition et le type de colis adapté. Sans poids, l'application retombe sur un minimum de 10 grammes, ce qui rend les devis irréalistes. |
| **HS Code** | Produit → onglet *Accounting* ou *Purchase* | Obligatoire pour les expéditions hors UE. Le code doit compter 6, 8 ou 10 chiffres, et 10 chiffres pour les États-Unis. |
| **Country of Origin** | À côté du HS Code | Obligatoire pour les expéditions hors UE, il figure sur la déclaration douanière. |

Pour les commandes au sein de l'UE, vous pouvez laisser HS Code et Country of Origin vides.

## 11 · Options d'expédition par commande
Sur une commande client, cliquez sur **Add shipping** sous les totaux. Choisissez votre méthode MyParcel et les options de cette expédition apparaissent.

![La fenêtre Add a shipping method avec les options MyParcel pour PostNL et le bouton Get rate.](../../platforms/images/odoo/04-order-shipping-wizard.png)

1. Choisissez la **Shipping Method**. La liste des options s'adapte au transporteur.
2. Renseignez la **Delivery Date**. PostNL en a besoin, les autres transporteurs non.
3. Cochez les options souhaitées pour cette commande. Elles partent des valeurs par défaut de la méthode d'expédition.
4. Cochez **Activate Insurance** et choisissez un montant si vous voulez assurer le colis.
5. Cliquez sur **Get rate** pour récupérer le prix réel, puis sur **Add** pour ajouter la ligne d'expédition à la commande.

Une fois la méthode sur la commande, un onglet **MyParcel Settings** montre ce qui a été choisi. Il est en lecture seule, utilisez **Update shipping cost** ou supprimez la ligne d'expédition si vous devez changer quelque chose.

![L'onglet MyParcel Settings d'une commande client, avec la méthode d'expédition et les options choisies.](../../platforms/images/odoo/05-order-myparcel-tab.png)

::: tip Ajouter l'expédition sans prix
Si vous cliquez sur **Add** sans récupérer de tarif, Odoo demande si la livraison doit vraiment être gratuite. C'est normal si vous facturez un prix fixe ou expédiez gratuitement, l'expédition est créée normalement.
:::

## 12 · La livraison, l'étiquette et le Track & Trace
Confirmer la commande client crée une livraison. Ouvrez-la depuis le bouton **Delivery** sur la commande.

Tout ce qui concerne MyParcel se trouve dans l'onglet **Additional Info**, sous **MyParcel Settings**. Vous pouvez encore y modifier les options, jusqu'au moment où vous validez.

![L'onglet Additional Info d'une livraison, avec le transporteur, la tracking reference, l'URL de l'étiquette et les options MyParcel.](../../platforms/images/odoo/06-delivery-myparcel.png)

Cliquez sur **Validate** quand le colis est prêt. Odoo procède alors ainsi :

1. L'expédition est créée chez MyParcel avec les options de cette livraison.
2. L'étiquette PDF est récupérée et jointe à la livraison sous le nom `LabelMyParcel.pdf`, si **Direct Label** est activé.
3. **Tracking Reference** et **Label URL** sont renseignés, et le lien Track & Trace est conservé.

La page Track & Trace destinée à votre client se trouve sur `myparcel.me/track-trace`, et Odoo construit le lien à partir du code-barres, du code postal et du pays.

::: tip Plusieurs colis pour une commande PostNL
PostNL prend en charge le multicolis. Quand une expédition est répartie sur plusieurs colis, Odoo additionne leurs prix et garde les étiquettes ensemble sur la même livraison.
:::

## 13 · Utilisation quotidienne
Une journée d'expédition typique :

1. Ouvrez **Sales → Orders** et confirmez les commandes que vous allez expédier.
2. Vérifiez sur chaque commande la méthode d'expédition et les options, et ajustez-les là où un client a demandé quelque chose de précis.
3. Ouvrez **Inventory → Delivery Orders**, emballez la marchandise et utilisez **Put in Pack** si vous expédiez plusieurs colis.
4. Cliquez sur **Validate**. L'expédition est créée et l'étiquette jointe.
5. Imprimez les étiquettes depuis la pièce jointe de chaque livraison et remettez les colis au transporteur.

## 14 · Quelque chose ne fonctionne pas, diagnostic
| Symptôme | Cause probable et solution |
| --- | --- |
| **Toegang geweigerd / Access Denied** | La clé API est erronée, expirée, ou appartient à un autre compte MyParcel. Recopiez-la depuis *Paramètres boutique → Intégrations* et testez avec **MyParcel API CHECK**. |
| **MyParcel API CHECK indique Connection Error** | Même cause. Vérifiez que vous avez collé la clé entière, sans espaces. |
| **Street number not found in street field** | Le numéro de rue doit se trouver à la fin du champ **Street**, ou dans **Street 2** pour les adresses non belges. Corrigez l'adresse de livraison sur le contact. |
| **State is required for creating a shipment** | Odoo demande une région ou une province pour toute adresse hors Belgique. Renseignez-la sur le contact. |
| **City / Postal code / Recipient name is required** | L'adresse de livraison est incomplète. Complétez-la sur le contact, pas seulement sur la commande. |
| **Email address is required** | **Add Email to Shipment** est activé pour cette méthode, mais le contact n'a pas d'adresse e-mail. Ajoutez-en une, ou désactivez le réglage. |
| **Phone number is required** | Idem, pour **Add Phone to Shipment**. |
| **Invalid email address provided** | L'adresse e-mail du contact est mal formée. Corrigez-la sur le contact. |
| **The HS Code does not have the correct amount of digits** | Les codes HS doivent compter 6, 8 ou 10 chiffres, et 10 chiffres pour les États-Unis. Corrigez le code sur le produit. |
| **No country of origin found for this product** | Renseignez **Country of Origin** sur chaque produit d'une expédition qui quitte l'UE. |
| **Package type needed for MyParcel carriers** | **Package Type** est vide sur la méthode d'expédition. Choisissez-en un dans l'onglet MyParcel Settings. |
| **Receipt code can not be selected with any other option** | Le code de retrait ne fonctionne que seul, et uniquement avec une assurance. Décochez les autres options. |
| **This delivery method is not available as no shipment ID was found** | L'adresse ou la combinaison d'options choisie a été refusée par MyParcel. Vérifiez l'adresse de livraison et désactivez les options une par une. |
| **Une nouvelle méthode réclame des champs MyParcel inutiles** | Une méthode d'expédition non MyParcel peut réclamer des champs MyParcel. Choisissez d'abord le provider, puis remplissez le reste du formulaire. |

## 15 · Questions fréquentes
**Faut-il une méthode d'expédition par transporteur ?**
Oui. Chaque méthode porte un provider, son propre type de colis et ses propres options par défaut. Créez-en une pour chaque transporteur avec lequel vous expédiez.

**Où trouver ma clé API ?**
Dans votre backoffice MyParcel, sous *Paramètres boutique → Intégrations*. Utilisez la clé de la boutique depuis laquelle vous voulez expédier.

**Quelle différence entre MyParcel NL et MyParcel BE ?**
*MyParcel NL* concerne les comptes myparcel.nl, *MyParcel BE* les comptes SendMyParcel. La plateforme détermine les transporteurs et les options disponibles, Age Verification et Direct Return n'existent que sur MyParcel NL.

**Get rate crée-t-il déjà une expédition ?**
Il en crée une brièvement pour lire le prix réel, puis la supprime. Rien n'est expédié et cette consultation ne génère aucun frais.

**Mes clients peuvent-ils choisir eux-mêmes un créneau ou un point relais ?**
Pas dans cette version. Les options de livraison sont définies par votre équipe sur la commande, pas par le client au moment de commander.

**Puis-je envoyer une étiquette de retour à mon client ?**
Pas automatiquement. **Direct Return** ajoute une étiquette de retour à une expédition PostNL sur MyParcel NL, que vous pouvez glisser dans le colis.

**Quels transporteurs puis-je utiliser ?**
PostNL, DHL For You, DHL Parcel Connect, DHL Europlus, DPD, Bpost, UPS Standard et UPS Express Saver. Seuls les transporteurs actifs sur votre compte MyParcel accepteront réellement des expéditions.

**Pourquoi mon prix d'expédition est-il à 0,00 ?**
Vous avez ajouté la méthode d'expédition sans récupérer de tarif, ou la consultation a échoué. Utilisez **Update shipping cost** sur la commande pour réessayer.

## Ressources & support
- [backoffice.myparcel.com ↗](https://backoffice.myparcel.com), votre compte, votre clé API et vos transporteurs.
- [myparcel.nl/contact ↗](https://www.myparcel.nl/contact), le support de votre compte MyParcel.
- Ce guide décrit l'application MyParcel Shipping pour **Odoo 19**, version `19.0.0.5.0`.
