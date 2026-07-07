---
title: PrestaShop
description: "De zéro à un colis expédié sur PrestaShop, installez le plugin, connectez votre compte MyParcel, choisissez un profil de boutique et envoyez votre premier label dès aujourd'hui. Avec démarrage rapide, profils de boutique, référence des réglages, workflow quotidien et un tableau de diagnostic."
---

::: tip En bref
Le plugin MyParcel connecte votre boutique PrestaShop à MyParcel. Les clients choisissent un moment de livraison ou un point relais dans le checkout, vous imprimez les labels depuis PrestaShop et le Track & Trace est envoyé automatiquement au client. Aucun code nécessaire, tout se fait depuis le back-office.
:::

## Démarrage rapide, votre premier colis en 15 minutes
De quoi expédier votre première vraie commande dès aujourd'hui. Pour une configuration plus poussée, voir [Que cherchez-vous ?](#que-cherchez-vous) ci-dessous.

1. **Compte.** Vous n'avez pas encore de compte MyParcel ? Créez-en un sur [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Copier la clé API.** Connectez-vous à [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Paramètres de la boutique → Intégration* → copiez la clé API.
3. **Installer le plugin.** Téléchargez le ZIP de la release depuis [github.com/myparcelnl/prestashop/releases](https://github.com/myparcelnl/prestashop/releases). Dans PrestaShop : **Modules → Gestionnaire de modules → Charger un module** → glissez le ZIP.
4. **Connecter le plugin.** Après l'installation, recherchez `myparcel`, cliquez sur **Configurer**, collez votre clé API sous *Modifier la clé API* et cliquez sur **Enregistrer**. Le badge de statut en haut doit afficher *Connecté à MyParcel*.
5. **Premier label.** Ouvrez une commande payée, allez au bloc MyParcel en bas, cliquez sur **Exporter** puis sur **Imprimer le label**. Votre PDF sort.

::: tip C'est terminé lorsque vous voyez ceci
- En haut du plugin : un statut vert *Connecté à MyParcel*
- Vous pouvez exporter une commande de test vers MyParcel
- Votre label PDF s'ouvre (ou arrive dans votre dossier de téléchargements)
:::

## Que cherchez-vous ?
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Première configuration | [Démarrage rapide](#dmarrage-rapide-votre-premier-colis-en-15-minutes) |
| Réglages recommandés pour votre type de boutique | [4 · Quel profil de boutique êtes-vous ?](#4-quel-profil-de-boutique-tes-vous) |
| Rechercher un réglage précis | [5 · Réglages · Commandes](#5-rglages-commandes) à [9 · Réglages · Transporteurs](#9-rglages-transporteurs) |
| Un réglage différent par produit | [10 · Réglages produit](#10-rglages-produit) |
| Ce que le client voit dans le checkout | [12 · L'expérience du checkout](#12-lexprience-du-checkout) |
| Traiter plus de 50 commandes par jour | [13 · Utilisation quotidienne](#13-utilisation-quotidienne) |
| Quelque chose ne fonctionne pas | [14 · Quelque chose ne fonctionne pas, diagnostic](#14-quelque-chose-ne-fonctionne-pas-diagnostic) |
| Réponse à une question fréquente | [15 · FAQ](#15-faq) |

## 1 · Préparer votre compte MyParcel
Avant de commencer dans PrestaShop, réglez quatre choses dans votre back-office MyParcel :

1. **Adresse de facturation et de retour**, *Paramètres de la boutique → Général*. Elle apparaît sur chaque label.
2. **Activer les transporteurs**, *Paramètres de la boutique → Transporteurs*. Seuls les transporteurs activés apparaîtront ensuite dans le plugin.
3. **Générer une clé API**, *Paramètres de la boutique → Intégration*.
4. **Importer les informations de commande** (facultatif), activez-le si vous voulez utiliser le [mode commande](#5-rglages-commandes).

## 2 · Installer le plugin
::: warning Prérequis de version
Le plugin 5.0.x fonctionne sur **PrestaShop 1.7.8 à 8.x** avec **PHP 7.4+** (8.1/8.2 recommandé). PrestaShop 9 n'est pas encore pris en charge, voir [issue #415](https://github.com/myparcelnl/prestashop/issues/415).
:::

1. Téléchargez le ZIP de la release depuis [github.com/myparcelnl/prestashop/releases](https://github.com/myparcelnl/prestashop/releases).
2. **Modules → Gestionnaire de modules → Charger un module** → glissez le ZIP.
3. Attendez la fin de l'installation, recherchez `myparcel` et cliquez sur **Configurer**.

::: details L'installation échoue avec « Pdk instance must be set to use facades »
Supprimez complètement les anciens modules MyParcel (y compris les tables de la base de données via *Gestionnaire de modules → Désinstaller*). Faites d'abord une sauvegarde de la base de données, puis videz manuellement les tables commençant par `ps_myparcelnl_` et réinstallez la 5.0.x.
:::

## 3 · Connecter le plugin (clé API)
Ouvrez **Modules → Gestionnaire de modules → MyParcelNL → Configurer**. En haut, vous voyez trois boutons, *Modifier la clé API*, *Modifier les webhooks*, *Options de débogage*, ainsi que le badge de statut.

![Barre de connexion MyParcel : Connecté à MyParcel + trois boutons d'action.](../../platforms/images/prestashop/01-connection-bar.png) La barre de connexion apparaît sur chaque page du plugin.

1. Cliquez sur **Modifier la clé API**.
2. Collez la clé provenant de votre back-office MyParcel.
3. Cliquez sur **Enregistrer**, en quelques secondes le statut passe à *Connecté à MyParcel*.

::: warning Cela ne fonctionne pas ?
Causes les plus fréquentes : vous n'avez pas cliqué sur *Enregistrer* · un espace copié avant/après la clé · clé d'une autre boutique · la boutique tourne sur un autre environnement (live vs sandbox) que votre compte MyParcel.
:::

## 4 · Quel profil de boutique êtes-vous ?
Trois profils typiques avec des réglages recommandés. Choisissez-en un, reprenez les réglages, puis affinez via [5 · Réglages](#5-rglages-commandes).

### Petite, 1 à 10 commandes/jour, NL uniquement
| Réglage | Recommandé | Pourquoi |
| --- | --- | --- |
| Mode commande | Activé | Commande complète vers MyParcel, meilleur pour les points relais et l'international par la suite |
| Envois en concept | Activé | Vous garde le contrôle pendant l'apprentissage |
| Traitement automatique | Aucun | Cliquez vous-même sur *Exporter* par commande |
| Format de label | A4 (4 par page) | Aucune imprimante à labels nécessaire |
| Track & Trace dans l'e-mail | Activé | Le client reçoit automatiquement le suivi |
| PostNL, *Activer les options de livraison* | Activé | Transporteur NL standard |
| Assurance, *Assurer à partir de €* | 250 | Les colis au-dessus de 250 € sont assurés automatiquement |

### Moyenne, 10 à 50 commandes/jour, NL + BE
| Réglage | Recommandé | Pourquoi |
| --- | --- | --- |
| Envois en concept | Désactivé | Plus rapide, les labels sont définitifs immédiatement |
| Traitement automatique | *En cours de traitement* (après paiement) | Plus de clics par commande |
| Format de label | A6 (imprimante à labels) | Imprimante à labels Brother/Zebra |
| Imprimer immédiatement | Activé | Flux d'impression sans clics |
| PostNL + DHL Parcel Connect | Les deux activés | NL et BE couverts |
| Assurance | À partir de 250 €, jusqu'à 500 € | Évolue avec la valeur de la commande |

### Boîte aux lettres uniquement, café, cartes, cosmétiques
| Réglage | Recommandé | Pourquoi |
| --- | --- | --- |
| Par produit *Type de colis* | Colis boîte aux lettres | Obligatoire, sinon tout part comme colis |
| Par produit *in mailbox* | Réaliste (par ex. 5) | Nombre d'articles par colis boîte aux lettres |
| Poids par défaut *colis boîte aux lettres* | 50–100 g | Ne le réglez pas trop haut, sinon MyParcel bascule sur colis |
| Options de livraison | Désactivé | Pas de créneau horaire pour la boîte aux lettres |
| Assurance | Désactivé | Non disponible pour les colis boîte aux lettres |

::: tip D'autres scénarios ?
Pour les bijoux de valeur, l'international ou des exigences particulières, voir [15 · FAQ](#15-faq) ou les profils de boutique dans le [manuel WooCommerce](./woocommerce.html#4-quel-profil-de-boutique-tes-vous) (applicable à toutes les plateformes).
:::

## 5 · Réglages · Commandes
Le premier onglet, c'est ici que vous définissez comment les commandes circulent dans votre boutique.

![Onglet Commandes : Général, Automatisation du statut de commande, Track & Trace, Poids par défaut, Notes de commande.](../../platforms/images/prestashop/02-bestellingen-tab.png)

### Général
- **Mode commande**, Activé : commande complète (données client, lignes de produits, notes) vers MyParcel. Désactivé : uniquement un label. *Recommandé activé*, à condition que *Importer les informations de commande* soit également activé dans votre compte MyParcel.
- **Envois en concept**, Activé : l'envoi reste en concept dans MyParcel, vous pouvez encore le modifier. Désactivé : enregistré directement chez le transporteur. *Activé pendant la configuration, désactivé une fois que tout tourne de façon stable.*
- **Traitement automatique**, Quel statut de commande PrestaShop déclenche un export ? *Aucun* / *En attente de paiement* / *En cours de traitement* / *Expédié*. Commencez par *Aucun*.
- **Envoyer un e-mail de retour**, Le client reçoit automatiquement un lien de retour.
- **Enregistrer l'adresse du client dans le carnet d'adresses**, Les adresses arrivent dans votre carnet d'adresses MyParcel.
- **Partager les informations du client**, E-mail + numéro de téléphone vers MyParcel. Nécessaire pour l'e-mail Track & Trace depuis MyParcel et pour les envois internationaux. *Recommandé activé.*

### Automatisation du statut de commande
Liez les événements MyParcel aux statuts PrestaShop, le statut du colis reste synchronisé sans intervention manuelle.

- **Statut de commande à la création du label**, souvent *Envoi en préparation*.
- **Statut de commande au scan du label**, souvent *Expédié*.
- **Statut de commande à la livraison**, souvent *Livré*.
- **Envoyer la notification à partir de**, à partir de quel statut un e-mail client est envoyé. Réglez sur *Expédié* pour que les clients reçoivent leur Track & Trace immédiatement.

### Track & Trace
- **Track & Trace dans l'e-mail**, lien dans les e-mails de commande PrestaShop. *Recommandé activé.*
- **Track & Trace dans le compte**, également visible dans le compte client sur la boutique.

### Poids par défaut
Un filet de sécurité pour les produits sans poids dans le catalogue.

| Type de colis | Poids à vide typique |
| --- | --- |
| Colis | 200 – 400 g |
| Petit paquet | 100 – 200 g |
| Colis boîte aux lettres | 50 – 100 g |
| Timbre numérique | 10 – 30 g |

### Notes de commande
- **Code-barres dans la note**, code-barres Track & Trace ajouté automatiquement à la note de commande. Pratique pour les préparateurs en entrepôt.
- **Titre du code-barres dans la note**, en-tête au-dessus du code-barres, par ex. *Track & Trace*.

## 6 · Réglages · Labels
L'apparence des labels d'expédition et la façon dont ils sont imprimés.

![Onglet Labels : Description, Imprimer immédiatement, Demander la position du label et Valeurs par défaut.](../../platforms/images/prestashop/03-labels-tab.png)

### Description sur le label
- **Description**, texte libre, par ex. numéro de commande ou référence interne.

### Comportement d'impression
- **Imprimer immédiatement**, le label est envoyé directement à votre groupe d'imprimantes dès que vous exportez un envoi. *Recommandé activé* avec une imprimante à labels.
- **Demander la position du label**, invite à choisir le format, la sortie et la position par label. Activé pour la flexibilité ; désactivé pour la rapidité avec un format fixe.

### Valeurs par défaut
- **Sortie du label**, *Ouvrir dans un nouvel onglet* (le plus rapide en manuel) ou *Télécharger le label*.
- **Format de label**, *A4 (4 par page)* ou *A6 (imprimante à labels)*.
- **Position(s) du label sur A4**, sélection multiple *En haut à gauche*/*En haut à droite*/*En bas à gauche*/*En bas à droite* pour utiliser les feuilles entièrement.

## 7 · Réglages · Douane
Obligatoire pour les envois hors UE. Peut être remplacé par produit, voir [10 · Réglages produit](#10-rglages-produit).

![Onglet Douane : Contenu du colis, Code SH, Pays d'origine.](../../platforms/images/prestashop/04-douane-tab.png)

- **Contenu du colis**, *Marchandises* (par défaut pour les webshops), *Documents*, *Cadeau*, *Échantillon commercial*, *Envoi de retour*.
- **Code SH**, code douanier harmonisé. Recherchez-le sur [tarief.douane.nl](https://tarief.douane.nl). Exemples : `6109.10` (T-shirts), `9503.00` (jouets), `3304.99` (maquillage).
- **Pays d'origine**, d'où provient le produit (pas là où vous le stockez).

## 8 · Réglages · Checkout
Ce que votre client voit dans le checkout, ou plutôt ne voit pas.

![Onglet Checkout : Options de livraison, Type de prix, Vue par défaut, Jours de fermeture, Exclure les casiers à colis.](../../platforms/images/prestashop/05-checkout-tab.png)

### Options de livraison
- **Afficher les options de livraison**, interrupteur principal du widget de checkout MyParcel. *Recommandé activé.*
- **Afficher les options de livraison pour les commandes en attente de réapprovisionnement**, désactivé : pour les produits en rupture de stock, le plugin masque les options de livraison. Activé si les délais sont fiables.
- **Type de prix**, *Inclus* (dans le prix total) ou *Séparé* (affiché à part). *Inclus évite les surprises.*
- **Titre des options de livraison**, en-tête au-dessus du bloc MyParcel. Par ex. *Comment souhaitez-vous recevoir votre colis ?*
- **Afficher les champs de taxe au checkout**, champs TVA pour les commandes professionnelles.
- **Jours de fermeture**, sélecteur de dates pour les jours fériés. Ces jours-là, le checkout masque les options de livraison.

### Points relais
- **Vue par défaut**, *Liste* (plus claire) ou *Carte* (plus visuelle).
- **Les utilisateurs peuvent basculer entre liste et carte**, *Recommandé activé.*
- **Exclure les casiers à colis**, masquer les casiers à colis comme option de livraison. Activé si les produits sont trop grands.

## 9 · Réglages · Transporteurs
Le plus gros onglet. Des sous-onglets pour chaque transporteur pris en charge par votre compte MyParcel : PostNL, DHL Parcel Connect, DHL Europlus, UPS Standard, UPS Express Saver, plus éventuellement DHL For You / DPD / Bol Parcel Carrier selon votre contrat.

![Sous-onglets des transporteurs dans l'onglet Transporteurs.](../../platforms/images/prestashop/07-carrier-subtabs.png)

::: tip Tous les transporteurs sont structurés de la même façon
Je prends **PostNL** comme exemple, les autres transporteurs suivent exactement la même structure, avec leurs propres options spécifiques (par ex. DHL a *Tracked*, Trunkrs a *Fresh*).
:::

![Réglages PostNL complets, Export par défaut, Assurance, Options de livraison, Livraison à domicile, Points relais.](../../platforms/images/prestashop/06-vervoerders-tab.png)

### Réglages d'export par défaut
Les options appliquées automatiquement à chaque nouvel envoi.

- **Activer le contrôle d'âge (18+)**, pour l'alcool/le tabac/les couteaux.
- **Activer la signature**, pour les envois de valeur.
- **Activer destinataire uniquement**, pas de voisins.
- **Activer le code de réception**, sécurité supplémentaire.
- **Activer plus grand que 100 × 70 × 58 cm**, signaler le hors format ; supplément transporteur possible.
- **Activer le retour direct**, label de retour automatique pour vêtements/électronique.
- **Activer l'assurance**, active l'assurance.

### Assurance
- **Assurer à partir de (€)**, montant seuil.
- **Assurer jusqu'à** / **(NL)** / **(UE)** / **(UE + Reste du monde)**, maximums par région.
- **Assurer pour un pourcentage**, par ex. 100 % de la valeur de la commande.

### Réglages d'export par défaut pour les retours
- **Type de colis par défaut**, Colis / Petit paquet / Colis boîte aux lettres / Timbre numérique.
- **Activer plus grand que 100 × 70 × 58 cm**, pour les retours hors format.

### Options de livraison (interrupteur principal)
- **Activer les options de livraison**, sans cet interrupteur, le transporteur n'apparaît pas du tout dans le checkout.

::: details Options de livraison à domicile, tous les champs
- **Activer la livraison à domicile**, afficher la livraison à domicile comme option.
- **Type de colis par défaut**, généralement *Colis*.
- **Prix petit paquet**, **Prix colis boîte aux lettres**, **Prix timbre numérique**, prix d'expédition par type.
- **Activer le colis boîte aux lettres international** + **Prix**, pour les colis boîte aux lettres hors NL/BE.
- **Fenêtre de jours de livraison**, nombre de jours à l'avance parmi lesquels le client peut choisir.
- **Temps de traitement**, jours ouvrés dont vous avez besoin ; compté en avant dans la fenêtre.
- **Options d'expédition**, cochez les jours où vous expédiez réellement.
- **Livraison standard** + prix, option de base sans créneau horaire.
- **Livraison matinale** + prix, avant 12h00.
- **Livraison en soirée** + prix, 18h00–22h00.
- **Livraison le lundi** + prix, pour un dépôt le samedi.
- **Livraison le samedi** + prix.
- **Signature** + prix, signature avec supplément éventuel.
- **Destinataire uniquement** + prix, destinataire uniquement avec supplément éventuel.
:::

::: details Options de points relais
- **Activer les points relais**, les clients peuvent choisir un point relais.
- **Prix point relais**, souvent inférieur à la livraison à domicile.
:::

::: warning N'oubliez pas d'enregistrer
Cliquez toujours sur **Enregistrer** en bas de chaque onglet transporteur avant de passer à un autre onglet. Sinon vos modifications sont perdues.
:::

## 10 · Réglages produit
Ouvrez un produit, allez dans **Modules** et cliquez sur **Configurer** au niveau de MyParcelNL. Ici, vous remplacez par produit les réglages globaux [Transporteurs](#9-rglages-transporteurs) et [Douane](#7-rglages-douane).

![Page produit : Options MyParcel, Options de livraison produit, Options douane produit, Options d'export produit.](../../platforms/images/prestashop/08-product-myparcel.png)

### Options MyParcel
- **Type de colis**, *Par défaut* ou forcer un type pour ce produit.
- **in mailbox**, combien de ce produit tiennent dans un colis boîte aux lettres. `5` = cinq tiennent. `-1` = utiliser le réglage par défaut. Si un client en commande plus que ce qui tient, la commande devient automatiquement un Colis.

### Options de livraison produit
- **Retarder l'expédition**, jours ouvrés supplémentaires pour les produits sur commande / dropshipping.
- **Désactiver les options d'expédition**, masque tout le widget de livraison MyParcel lorsque ce produit est dans le panier. Pour les cartes cadeaux ou les produits numériques.
- **Exclure les casiers à colis**, exclure les casiers à colis pour ce produit.

### Options douane produit
- **Pays d'origine**, remplace le [§7](#7-rglages-douane). Par ex. globalement *Pays-Bas*, produit dropshipping *Chine*.
- **Code douanier**, code SH spécifique au produit.

### Options d'export produit
- **Activer le contrôle d'âge (18+)**, **Activer l'assurance**, **Activer plus grand que 100 × 70 × 58 cm**, **Activer destinataire uniquement**, **Activer la signature**, **Activer le retour direct**, à forcer par produit.

::: tip Un cadenas à côté d'une option ?
Cette option n'est disponible que pour certains transporteurs ou contrats. Cliquez sur le cadenas pour une explication.
:::

## 11 · La page de détail de la commande
Ouvrez une commande individuelle. Sous les détails PrestaShop standard, vous voyez un bloc **MyParcel** avec :

- Transporteur et type de colis pour cet envoi
- Assurance activée/désactivée + montant assuré
- Options de livraison sélectionnées (livraison en soirée, signature, destinataire uniquement…)
- Boutons : *Exporter* · *Imprimer le label* · *Voir le Track & Trace*

::: warning Enregistrez les modifications avant d'imprimer
Vous avez modifié un champ ? **Enregistrez** avant d'imprimer un label, sinon MyParcel traite les anciennes valeurs.
:::

## 12 · L'expérience du checkout
Le widget de checkout MyParcel apparaît une fois l'adresse de livraison renseignée, dès qu'au moins un transporteur est activé et que les transporteurs PrestaShop sont liés à la bonne zone d'expédition, voir [diagnostic](#14-quelque-chose-ne-fonctionne-pas-diagnostic).

Au-dessus du widget, le client choisit un transporteur + un service (par ex. *PostNL, Livraison super rapide, 9,95 € TVA incl.*). En dessous, **Livraison à domicile ou au travail** se déploie avec :

- **Carrousel de dates** avec les prochains jours ouvrés disponibles.
- **Créneau horaire** proposé (par ex. *10h45–13h15*).
- **Options supplémentaires** comme *Signature (2,00 €)* ou *Destinataire uniquement* avec suppléments distincts.

Sous la livraison à domicile se trouve un second bloc **Retrait dans un point relais**, marqué *Le plus durable*. Lorsqu'il est ouvert, une carte interactive apparaît avec les points PostNL/DHL à proximité, avec les heures d'ouverture par jour. Le client peut basculer entre *Liste* et *Carte* (si activé dans le [§8](#8-rglages-checkout)).

## 13 · Utilisation quotidienne

### Workflow 1, par commande
1. Ouvrez la page de détail de la commande.
2. Vérifiez le type de colis et les options de livraison dans le bloc MyParcel.
3. Cliquez sur **Exporter** (concept) → vérifiez dans MyParcel → cliquez sur **Imprimer le label**.

### Workflow 2, en masse (10+ commandes/jour)
1. Sur **Commandes**, filtrez une période (par ex. *Payées aujourd'hui*).
2. Par commande, choisissez **Exporter** dans le menu d'actions.
3. Traitez les envois dans MyParcel (manuellement ou avec *Traitement automatique* du [§5](#5-rglages-commandes)).
4. Imprimez les labels en masse via MyParcel.

::: tip Expédition entièrement automatique
Avec *Traitement automatique* sur *En cours de traitement* et *Envois en concept* désactivé, chaque commande payée est créée directement comme label sans étape intermédiaire.
:::

### Retours
- **Activer le retour direct** ([§9](#9-rglages-transporteurs)) ou la [surcharge produit](#10-rglages-produit) → label de retour automatique avec chaque envoi.
- **Envoyer un e-mail de retour** ([§5](#5-rglages-commandes)) → le client peut demander lui-même un label de retour.

## 14 · Quelque chose ne fonctionne pas, diagnostic
Quelque chose ne se comporte pas comme prévu ? Parcourez ce tableau de haut en bas, trois problèmes sur quatre sont résolus en 5 minutes.

| Symptôme | Ce qu'il faut vérifier |
| --- | --- |
| **Checkout : « Aucun transporteur disponible »** | Les transporteurs PrestaShop sont-ils liés à une zone d'expédition avec des prix pour l'adresse de livraison ? Allez dans *Expédition → Transporteurs*. Ce n'est qu'ensuite que les options de livraison MyParcel apparaissent. |
| **Aucune option de livraison visible** | (1) [§8](#8-rglages-checkout) : *Afficher les options de livraison* activé ? (2) [§9](#9-rglages-transporteurs) : au moins un transporteur avec *Activer les options de livraison* activé ? |
| **L'installation échoue, *« Pdk instance must be set to use facades »*** | Supprimez complètement les anciens modules MyParcel (y compris les tables de la base de données `ps_myparcelnl_*`) et réinstallez la 5.0.x. |
| **Erreur de province : *« state must be at most 2 characters »*** | Le pack de langue NL crée les provinces sous la forme `NL-LI` (4 caractères). Dans *International → Localisation → Provinces*, changez les codes iso en 2 caractères. Voir [issue #509](https://github.com/myparcelnl/prestashop/issues/509). |
| **« Invalid API key » alors que la connexion fonctionne** | Fermez complètement la config du plugin et rouvrez-la. Si le problème persiste : copiez à nouveau la clé depuis *backoffice.myparcel.nl → Paramètres de la boutique → Intégration*. |
| **Les réglages PostNL ne sont pas enregistrés** | Cliquez sur **Enregistrer** en bas de chaque onglet avant de changer. Sinon, vérifiez les *Options de débogage* pour les messages d'erreur. |
| **Les labels ne sont pas créés** | (1) [§5](#5-rglages-commandes) : *Envois en concept* désactivé pour une création directe. (2) [§6](#6-rglages-labels) : groupe d'imprimantes correct ? (3) [§9](#9-rglages-transporteurs) : transporteur sélectionné et *Activer les options de livraison* activé ? |
| **Track & Trace pas dans l'e-mail** | (1) *Track & Trace dans l'e-mail* activé ([§5](#5-rglages-commandes)). (2) *Envoyer la notification à partir de* sur le bon statut (souvent *Expédié*). (3) *Partager les informations du client* activé, sinon MyParcel ne reçoit pas l'adresse e-mail. |
| **Tout devient Colis, jamais Boîte aux lettres** | (1) [§10](#10-rglages-produit) : *Type de colis* sur *Colis boîte aux lettres* + *in mailbox* sur un nombre réaliste. (2) [§5](#5-rglages-commandes) : *Poids par défaut colis boîte aux lettres* pas réglé trop haut (sinon MyParcel bascule sur colis). |

## 15 · FAQ

### Le plugin fonctionne-t-il sur PrestaShop 9 ?
Pas encore. La version 5.0.x prend en charge PrestaShop 1.7.8 à 8.x. La prise en charge de PrestaShop 9 est sur la roadmap ; suivez l'[issue #415](https://github.com/myparcelnl/prestashop/issues/415).

### Puis-je utiliser plusieurs transporteurs à la fois ?
Oui. Activez par transporteur sous *Transporteurs → \[Nom du transporteur\] → Options de livraison → Activer les options de livraison*.

### Comment changer l'adresse d'expéditeur sur le label ?
L'adresse d'expéditeur provient de votre back-office MyParcel (*Paramètres de la boutique → Général*), pas de PrestaShop.

### Quels statuts pour « Traitement automatique » ?
*En cours de traitement* ou *En attente de paiement* convient à la plupart des boutiques. Commencez sur *Aucun* pendant la configuration ; activez lorsque le workflow tourne de façon stable.

### Le client choisit un point relais, comment le voir sur le label ?
Le point relais apparaît comme adresse de livraison sur le label MyParcel et dans le bloc MyParcel de la page de détail de la commande ([§11](#11-la-page-de-dtail-de-la-commande)). Dans certains thèmes PrestaShop, le point relais n'apparaît pas sur la facture PDF, c'est un problème de thème, pas un bug du plugin ([issue #390](https://github.com/myparcelnl/prestashop/issues/390)).

### J'ai mis à jour le plugin et maintenant quelque chose ne fonctionne plus
Rouvrez le plugin, vérifiez le badge de statut et parcourez le [§14](#14-quelque-chose-ne-fonctionne-pas-diagnostic). Les problèmes de mise à jour se résolvent souvent en se déconnectant/reconnectant ou en vidant le cache du navigateur.

### Le plugin est-il payant ?
Non. Le plugin est gratuit. Vous ne payez que pour les envois via votre tarif MyParcel.

## Ressources & support
- [github.com/myparcelnl/prestashop ↗](https://github.com/myparcelnl/prestashop), code source, releases, issues.
- [github.com/myparcelnl/prestashop/releases ↗](https://github.com/myparcelnl/prestashop/releases), changelog & téléchargements ZIP.
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), compte, clé API, facturation.
- [Contacter le support MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Ce manuel est écrit pour la version **5.0.x** du plugin. Dans les versions plus récentes, les noms ou l'ordre des champs peuvent légèrement varier ; la disposition générale du plugin reste identique.
