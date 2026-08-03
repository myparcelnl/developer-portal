---
title: OpenCart 4
description: "De zéro à un colis expédié sur OpenCart 4 : installez l'extension, connectez votre compte MyParcel, importez vos transporteurs et envoyez votre première étiquette dès aujourd'hui. Avec démarrage rapide, référence des réglages, options produit, workflow quotidien des commandes et un tableau de diagnostic."
---

::: tip En bref
L'extension MyParcel connecte votre boutique OpenCart 4 à MyParcel. Les clients choisissent un moment de livraison ou un point relais lors de la commande, vous exportez les commandes et imprimez les étiquettes depuis l'administration OpenCart, et le Track & Trace est généré automatiquement. Aucun code nécessaire, tout se fait depuis **Extensions** dans votre administration. L'extension se compose de deux parties : une **méthode d'expédition** (le tarif au checkout) et un **Module** (tous les réglages, les transporteurs et la gestion des étiquettes).
:::

::: warning Pré-version
L'extension OpenCart 4 est actuellement en pré-version (version `0.2.0`). Elle nécessite **OpenCart 4.1.0.3 ou une version plus récente** et **PHP 8.2 ou une version plus récente**. Les écrans et les noms de champs peuvent encore changer d'une version à l'autre.
:::

## Démarrage rapide, votre premier colis en 15 minutes
De quoi expédier votre première vraie commande dès aujourd'hui. Pour une configuration plus poussée, voir [Que cherchez-vous ?](#que-cherchez-vous) ci-dessous.

1. **Récupérez votre clé API.** Connectez-vous sur [backoffice.myparcel.com](https://backoffice.myparcel.com), allez dans *Réglages → Accès API* et copiez votre clé API.
2. **Installez l'extension.** Dans OpenCart, allez dans **Extensions → Installateur** et téléversez le paquet `.ocmod.zip`. Ouvrez ensuite **Extensions → Extensions**, installez le **Module** MyParcel et la **méthode d'expédition** MyParcel, et rafraîchissez le cache des modifications lorsque cela vous est demandé.
3. **Saisissez la clé API.** Ouvrez les réglages du module MyParcel, collez votre clé API dans l'onglet **Général** et cliquez sur **Enregistrer**.
4. **Importez vos transporteurs.** Dans l'onglet **Transporteurs**, cliquez sur **Importer la configuration des transporteurs**. Vos transporteurs apparaissent avec leurs services disponibles.
5. **Expédiez une commande.** Ouvrez **Ventes → Commandes**, cliquez sur le bouton d'export vert d'une commande, puis sur le bouton d'étiquette pour télécharger le PDF.

::: tip C'est terminé quand vous voyez ceci
- Le statut du module MyParcel affiche **activé** et **Tester la clé API** confirme que la clé fonctionne
- Vos transporteurs sont listés dans l'onglet Transporteurs
- Une commande exportée affiche un code-barres et un statut de suivi **Prêt**
:::

## Que cherchez-vous ?
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Première configuration | [Démarrage rapide](#dmarrage-rapide-votre-premier-colis-en-15-minutes) |
| Comprendre les deux parties de l'extension | [4 · Les deux parties expliquées](#4-les-deux-parties-expliques) |
| Saisir ou tester la clé API | [5 · Réglages · Général](#5-rglages-gnral) |
| Définir le format d'étiquette et la taille/le poids de secours | [6 · Réglages · Valeurs par défaut d'expédition](#6-rglages-valeurs-par-dfaut-dexpdition) |
| Activer ou désactiver les transporteurs et les services | [7 · Réglages · Transporteurs](#7-rglages-transporteurs) |
| Modifier ce que les clients voient lors de la commande | [8 · Réglages · Checkout](#8-rglages-checkout) |
| Définir les codes HS pour la douane | [9 · Réglages · Douane](#9-rglages-douane) et [10 · Réglages produit](#10-rglages-produit) |
| Exporter les commandes et imprimer les étiquettes | [11 · La liste des commandes](#11-la-liste-des-commandes) et [12 · La page détail de commande](#12-la-page-dtail-de-commande) |
| Voir ce que vit un client | [13 · L'expérience de commande](#13-lexprience-de-commande) |
| Quelque chose ne fonctionne pas | [15 · Quelque chose ne fonctionne pas, diagnostic](#15-quelque-chose-ne-fonctionne-pas-diagnostic) |

## 1 · Préparer votre compte MyParcel
Avant de commencer dans OpenCart, réglez deux choses dans votre backoffice MyParcel :

1. **Copiez votre clé API.** Connectez-vous sur [backoffice.myparcel.com](https://backoffice.myparcel.com), allez dans *Réglages → Accès API* et copiez la clé. Gardez-la confidentielle, elle donne accès à votre compte.
2. **Activez vos transporteurs.** Sous *Réglages → Transporteurs*, assurez-vous que les transporteurs avec lesquels vous voulez expédier sont actifs sur votre compte. Seuls les transporteurs actifs pourront être importés dans l'extension par la suite.

## 2 · Installer l'extension
L'extension MyParcel est fournie sous forme de paquet de modification OpenCart (`.ocmod.zip`).

1. Téléchargez la dernière version de `myparcel.ocmod.zip` sur [github.com/myparcelnl/opencart4/releases](https://github.com/myparcelnl/opencart4/releases).
2. Dans votre administration OpenCart, allez dans **Extensions → Installateur** et téléversez le paquet.
3. Allez dans **Extensions → Extensions** et choisissez **Modules** dans le menu déroulant *Choisir le type d'extension*. Repérez **MyParcel** et cliquez sur le bouton d'installation vert.
4. Sur la même page, choisissez **Expédition** dans le menu déroulant. Repérez **MyParcel** et cliquez sur installer, puis ouvrez ses réglages pour définir le tarif, la zone géographique et le statut (voir [4 · Les deux parties expliquées](#4-les-deux-parties-expliques)).
5. Lorsque OpenCart le demande, rafraîchissez le cache des modifications (**Extensions → Modifications → Rafraîchir**).

![La liste des extensions filtrée sur Expédition, avec MyParcel installé en haut.](../../platforms/images/opencart/01-extensions-shipping.png)

## 3 · Connecter l'extension (clé API)
Ouvrez le **Module** MyParcel (**Extensions → Extensions → Modules → MyParcel**, bouton de modification) et allez dans l'onglet **Général**.

1. Réglez **Statut** sur activé.
2. Collez votre **clé API**.
3. Laissez **Environnement** sur *Production* pour les envois réels. Utilisez *Acceptation (test)* uniquement lorsque vous testez sur l'environnement de test MyParcel.
4. Cliquez sur **Enregistrer**, puis sur **Tester la clé API** pour confirmer la connexion.

![L'onglet Général avec Statut, clé API, le bouton Tester la clé API et le sélecteur d'environnement.](../../platforms/images/opencart/03-general.png)

::: warning Ça ne se connecte pas ?
Les causes les plus fréquentes sont un espace en trop collé avec la clé, ou une clé appartenant au mauvais environnement (une clé de production avec l'Environnement réglé sur Acceptation, ou l'inverse).
:::

## 4 · Les deux parties expliquées
Contrairement à une extension tout-en-un unique, MyParcel pour OpenCart se trouve à deux endroits sous **Extensions**. Vous utilisez les deux.

- La **méthode d'expédition** (*Extensions → Extensions → Expédition → MyParcel*) est ce que votre client choisit et paie lors de la commande. Vous y définissez le **Nom affiché** montré aux clients, le **Tarif**, la **Classe de taxe**, la **Zone géographique** à laquelle elle s'applique, son **Statut** et son **Ordre de tri**.
- Le **Module** (*Extensions → Extensions → Modules → MyParcel*) est le centre de contrôle : clé API, transporteurs, comportement du checkout, douane et valeurs par défaut des étiquettes. C'est là que vous passerez le plus de temps.

Vous pouvez passer de l'un à l'autre avec les boutons **Réglages d'expédition** et **Réglages du module** en haut à droite de chaque écran.

![La méthode d'expédition MyParcel : Nom affiché, Tarif, Classe de taxe, Zone géographique, Statut et Ordre de tri.](../../platforms/images/opencart/02-shipping-method.png)

## 5 · Réglages · Général
Dans l'onglet **Module → Général** :

| Réglage | Ce que cela fait |
| --- | --- |
| **Statut** | Active ou désactive l'ensemble du module MyParcel. |
| **Clé API** | La clé issue de votre backoffice MyParcel. Utilisez l'icône en forme d'œil pour l'afficher et **Tester la clé API** pour la vérifier. |
| **Environnement** | *Production* pour les envois réels (par défaut), ou *Acceptation (test)* pour tester sur l'environnement de test MyParcel. |

## 6 · Réglages · Valeurs par défaut d'expédition
Ces valeurs sont utilisées lorsqu'une commande ne comporte pas ses propres données. Dans l'onglet **Valeurs par défaut d'expédition** :

| Réglage | Ce que cela fait | Recommandé |
| --- | --- | --- |
| **Type de colis par défaut** | Le type de colis utilisé lorsqu'aucune option de livraison n'a été choisie lors de la commande. | Colis |
| **Format d'étiquette** | *A6* imprime une étiquette par page. *A4* place les étiquettes sur une feuille. | A6 |
| **Position de l'étiquette** | Position sur la feuille A4 (1 à 4). Ignorée pour l'A6. | 1 |
| **Taille de colis de secours** | Longueur, largeur et hauteur en cm, utilisées uniquement lorsque les produits de la commande n'ont pas de dimensions exploitables. Certains transporteurs (par exemple Poste Italiane et InPost) les exigent. | À renseigner pour les transporteurs à consignes à colis |
| **Poids de secours** | Poids en grammes, utilisé uniquement lorsque les produits de la commande n'ont pas de poids. Laissez sur 0 pour utiliser un minimum technique de 1 g. Certains transporteurs en exigent davantage, comme UPS (au moins 50 g). | Laissez sur 0 sauf si un transporteur en exige plus |

![L'onglet Valeurs par défaut d'expédition : type de colis par défaut, format d'étiquette, position de l'étiquette, taille de secours et poids de secours.](../../platforms/images/opencart/04-shipment-defaults.png)

## 7 · Réglages · Transporteurs
L'onglet Transporteurs reflète les transporteurs actifs sur votre compte MyParcel.

1. Cliquez sur **Importer la configuration des transporteurs** pour récupérer vos transporteurs. Enregistrez d'abord votre clé API, les capacités sont récupérées avec la clé enregistrée. L'écran indique combien de transporteurs ont été importés et quand.
2. Chaque transporteur dispose d'un interrupteur marche/arrêt. Activez les transporteurs que vous voulez proposer.
3. Pour chaque transporteur, activez les **Services** souhaités, comme la *Livraison standard* et les *Points relais*. La livraison standard et le retrait sont activés par défaut, les services premium doivent être activés délibérément.

![L'onglet Transporteurs avec le bouton Importer la configuration des transporteurs et les interrupteurs de service par transporteur.](../../platforms/images/opencart/05-carriers.png)

::: tip Quels transporteurs apparaissent ?
Seuls les transporteurs actifs sur votre compte MyParcel peuvent être importés. Si un transporteur manque, activez-le d'abord dans le backoffice, puis importez à nouveau.
:::

## 8 · Réglages · Checkout
L'onglet Checkout contrôle le widget d'options de livraison MyParcel que les clients voient. Dans l'onglet **Checkout** :

| Réglage | Ce que cela fait |
| --- | --- |
| **Options de livraison** | Affiche le widget d'options de livraison MyParcel lors de la commande. Désactivez-le pour vendre sans options de livraison. |
| **Afficher la date de livraison** | Permet au client de choisir une date de livraison. |
| **Fenêtre de jours de livraison** | Nombre de jours à l'avance dans lesquels le client peut choisir une date de livraison (0 = valeur par défaut du widget). |
| **Délai de traitement** | Nombre de jours entre la commande et la remise au transporteur (0 = aucun). Augmentez-le si vous avez besoin de plus de temps pour emballer. |
| **Affichage des points relais** | Affiche les points relais sous forme de *Liste* ou de *Carte*. |
| **Autoriser la bascule liste/carte** | Permet au client de basculer lui-même entre la vue liste et la vue carte. |
| **Exclure les consignes à colis** | Masque les consignes à colis automatiques des options de retrait. |
| **Vue compacte** | Une disposition plus dense pour le widget. |
| **Carte des points relais en pop-up** | Ouvre la carte des points relais dans une pop-up plutôt qu'en ligne. |

![L'onglet Checkout avec les réglages du widget d'options de livraison.](../../platforms/images/opencart/06-checkout.png)

## 9 · Réglages · Douane
Nécessaire lorsque vous expédiez hors de l'UE. Dans l'onglet **Douane** :

| Réglage | Ce que cela fait |
| --- | --- |
| **Champs douaniers produit** | Ajoute les champs **Code HS** et **Pays d'origine** à l'éditeur de produit pour le mapping douanier (voir [10 · Réglages produit](#10-rglages-produit)). |
| **Pays d'origine par défaut** | Pays d'origine de secours utilisé pour le mapping douanier lorsqu'un produit n'en a pas. |
| **Code HS par défaut** | Code HS (système harmonisé) de secours utilisé pour le mapping douanier lorsqu'un produit n'en a pas. |

![L'onglet Douane : interrupteur des champs douaniers produit, pays d'origine par défaut et code HS par défaut.](../../platforms/images/opencart/07-customs.png)

## 10 · Réglages produit
Lorsque les **Champs douaniers produit** sont activés, une section **Douane MyParcel** apparaît en haut de l'onglet **Données** d'un produit (**Catalogue → Produits →** modifiez un produit **→ Données**).

- **Code HS**, le code du système harmonisé pour ce produit.
- **Pays d'origine**, où le produit a été fabriqué.

MyParcel utilise également les **Dimensions (L x l x H)** et le **Poids** standard d'OpenCart du même onglet Données pour calculer l'envoi. Renseignez-les pour des étiquettes précises, ils reprennent les valeurs des [Valeurs par défaut d'expédition](#6-rglages-valeurs-par-dfaut-dexpdition) lorsqu'ils sont vides.

![La section Douane MyParcel en haut de l'onglet Données du produit, avec le code HS et le pays d'origine.](../../platforms/images/opencart/08-product-customs.png)

## 11 · La liste des commandes
Ouvrez **Ventes → Commandes**. L'extension MyParcel ajoute des boutons d'action à chaque ligne de commande :

| Bouton | Ce que cela fait |
| --- | --- |
| **Camion vert** | Exporte la commande vers MyParcel et crée un envoi (un envoi en concept). |
| **PDF bleu** | Télécharge l'étiquette d'expédition du dernier envoi. |
| **Épingle grise** | Affiche le point relais choisi par le client, le cas échéant. |
| **Badge envoi / transporteur** | Indique le nombre d'envois de la commande et le transporteur. |
| **Œil bleu** | Ouvre la page détail de commande OpenCart standard. |

La barre d'outils en haut à droite propose les mêmes actions en masse pour les commandes sélectionnées.

![La liste des commandes avec les boutons MyParcel d'export, d'étiquette, de point relais et de consultation par ligne.](../../platforms/images/opencart/09-orders-list.png)

## 12 · La page détail de commande
Ouvrez une commande (le bouton œil bleu). En haut, vous trouverez le panneau **Envois MyParcel**.

- Chaque export crée un envoi distinct, une commande peut en avoir plusieurs. Les actions de la barre d'outils utilisent le dernier envoi, les actions du tableau agissent sur un envoi précis.
- Chaque ligne affiche le numéro d'**Envoi**, le **Code-barres**, le statut de **Suivi** (par exemple *Pas encore disponible* ou *Prêt*), l'heure de **Création** et des actions par envoi pour **télécharger l'étiquette** et **voir le point relais**.

![Le panneau Envois MyParcel sur la page détail de commande, listant chaque envoi avec son code-barres et son statut de suivi.](../../platforms/images/opencart/10-order-detail.png)

::: tip Plusieurs colis pour une commande
Cliquez à nouveau sur le bouton d'export pour créer un envoi supplémentaire et indépendant pour la même commande, pratique lorsqu'une commande part dans plus d'un carton.
:::

## 13 · L'expérience de commande
Avec les **Options de livraison** activées, les clients voient le widget MyParcel lors de la commande après avoir saisi leur adresse. Ils peuvent choisir parmi les transporteurs et services que vous avez activés dans l'[onglet Transporteurs](#7-rglages-transporteurs).

Selon le transporteur et vos réglages, un client peut choisir :

- **Livraison standard**, livraison à l'adresse.
- **Livraison prioritaire** ou d'autres services premium, lorsqu'ils sont activés pour le transporteur.
- Un **Point relais**, un point relais à proximité, affiché sous forme de liste ou sur une carte. Les points relais peuvent porter un label **Écologique**.

![Les options de livraison lors de la commande : transporteurs avec livraison standard, livraison prioritaire et un point relais.](../../platforms/images/opencart/11-checkout-delivery-options.png)

Le choix du client est transmis à la commande, de sorte que lorsque vous l'exportez, le bon transporteur, le bon service et le bon point relais sont déjà renseignés.

## 14 · Utilisation quotidienne
Une journée d'expédition type :

1. Ouvrez **Ventes → Commandes** et filtrez sur les nouvelles commandes.
2. Sélectionnez les commandes que vous voulez expédier et utilisez le bouton d'export de la barre d'outils, ou exportez-les une par une avec le bouton camion vert.
3. Téléchargez les étiquettes (PDF unique ou en masse) et imprimez-les.
4. Remettez les colis au transporteur. Le Track & Trace est généré automatiquement et, lorsque cela est pris en charge, partagé avec votre client.

## 15 · Quelque chose ne fonctionne pas, diagnostic
| Symptôme | Cause probable et solution |
| --- | --- |
| **Le test de la clé API échoue** | Clé erronée ou mal saisie, ou l'Environnement ne correspond pas à la clé. Recopiez la clé depuis le backoffice et vérifiez Production vs Acceptation. |
| **Aucun transporteur dans l'onglet Transporteurs** | Enregistrez d'abord la clé API, puis cliquez sur **Importer la configuration des transporteurs**. Si un transporteur manque toujours, activez-le dans le backoffice MyParcel. |
| **Aucune option de livraison lors de la commande** | L'interrupteur **Options de livraison** est désactivé, la **méthode d'expédition** MyParcel est désactivée ou hors de sa zone géographique, ou aucun transporteur/service n'est activé. |
| **L'export échoue pour un transporteur qui a besoin de dimensions** | Certains transporteurs (Poste Italiane, InPost) ont besoin d'une taille de colis. Renseignez les dimensions du produit ou une **Taille de colis de secours**. |
| **Le bouton d'étiquette ne fait rien** | L'envoi n'a pas encore de code-barres (le suivi affiche *Pas encore disponible*). Patientez un instant et rafraîchissez, ou ré-exportez. |
| **Les réglages ou les boutons semblent obsolètes après une mise à jour** | Rafraîchissez le cache des modifications sous **Extensions → Modifications → Rafraîchir**. |

## 16 · FAQ
**Ai-je besoin à la fois du Module et de la méthode d'expédition ?**
Oui. La méthode d'expédition est le tarif que les clients choisissent lors de la commande, le Module contient la clé API, les transporteurs et la gestion des étiquettes. Installez et activez les deux.

**Où définir le prix d'expédition ?**
Sur la **méthode d'expédition** MyParcel (*Extensions → Extensions → Expédition → MyParcel*), dans le champ **Tarif**.

**Une commande peut-elle contenir plusieurs colis ?**
Oui. Chaque export crée un envoi distinct et indépendant. Exportez à nouveau pour ajouter un autre colis à la même commande.

**Dois-je saisir les poids et les tailles par produit ?**
Cela améliore la précision. Lorsqu'un produit n'a pas de poids ou de dimensions, MyParcel utilise le **Poids de secours** et la **Taille de colis de secours** des [Valeurs par défaut d'expédition](#6-rglages-valeurs-par-dfaut-dexpdition). Certains transporteurs exigent des dimensions réelles.

**Le choix de point relais de mon client est-il conservé ?**
Oui. Le point relais qu'un client sélectionne lors de la commande est enregistré sur la commande et utilisé lorsque vous l'exportez.
