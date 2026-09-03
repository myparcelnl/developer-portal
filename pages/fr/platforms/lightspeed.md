---
title: Lightspeed
description: "De zéro à un colis expédié sur Lightspeed, ajoutez l'application, connectez votre compte MyParcel avec une clé API, activez vos transporteurs et associez vos méthodes d'expédition pour que les options de livraison apparaissent au moment du paiement. Avec démarrage rapide, référence des réglages, checkout, workflow quotidien et un tableau de diagnostic."
---

::: tip En bref
L'application MyParcel connecte votre boutique Lightspeed à MyParcel. Vous activez vos transporteurs, définissez les options de livraison que vous souhaitez proposer et les associez à vos méthodes d'expédition Lightspeed. Les options de livraison apparaissent alors au moment du paiement et vos commandes sont prêtes à être expédiées via MyParcel. Aucun code nécessaire, tout se fait depuis la page de réglages de l'application.
:::

## Démarrage rapide, votre premier colis en 15 minutes
De quoi expédier votre première commande réelle dès aujourd'hui. Pour une configuration plus approfondie, voir [Vous cherchez…](#vous-cherchez) ci-dessous.

1. **Compte.** Vous n'avez pas encore de compte MyParcel ? Créez-en un sur [myparcel.com/register](https://www.myparcel.com/register).
2. **Copier la clé API.** Connectez-vous à [backoffice.myparcel.com](https://backoffice.myparcel.com) → *Réglages de la boutique → Intégrations* → copiez la clé API.
3. **Ajouter l'application.** Dans votre back office Lightspeed, ouvrez l'**App Store**, recherchez *MyParcel* et installez-la.
4. **Connecter l'application.** Ouvrez les réglages de l'application MyParcel, collez la clé dans **Chiave API MyParcel** (clé API MyParcel) et cliquez sur **Convalida** (Valider).
5. **Activer un transporteur.** Activez un transporteur (par exemple InPost ou Poste Italiane), activez au moins un type de livraison et ajoutez un motif de méthode d'expédition sous **Mappatura titoli** (Correspondance des méthodes d'expédition). Cliquez sur **Salva impostazioni** (Enregistrer les réglages).

::: tip Vous avez terminé lorsque vous voyez ceci
- Le message vert **La chiave API è valida** (La clé API est valide) apparaît sous le champ de la clé
- Au moins un transporteur est activé avec un type de livraison activé
- La **Mappatura titoli** du transporteur correspond aux noms de vos méthodes d'expédition Lightspeed
:::

## Vous cherchez…
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Première installation | [Démarrage rapide](#dmarrage-rapide-votre-premier-colis-en-15-minutes) |
| Connecter votre compte | [3 · Connecter l'application](#3-connecter-lapplication-cl-api) |
| Connecter aussi depuis le backoffice (sales channel) | [Sales channel via le MyParcel Backoffice](#sales-channel-via-le-myparcel-backoffice) |
| Choisir la langue de l'application ou le moment d'envoi des commandes | [4 · Réglages · Général](#4-rglages-gnral) |
| Choisir comment les commandes se synchronisent (Push ou Pull) | [5 · Réglages · Mode de synchronisation](#5-rglages-mode-de-synchronisation) |
| Actualiser les transporteurs et les options | [6 · Réglages · Mettre à jour la capacité](#6-rglages-mettre-jour-la-capacit) |
| Activer un transporteur et associer les méthodes d'expédition | [7 · Réglages · Transporteurs](#7-rglages-transporteurs) |
| Un réglage différent par produit | [8 · Réglages produit](#8-rglages-produit) |
| Ce que voit le client au moment du paiement | [9 · L'expérience de paiement](#9-lexprience-de-paiement) |
| Traiter les commandes au quotidien | [10 · Utilisation quotidienne](#10-utilisation-quotidienne) |
| Quelque chose ne fonctionne pas | [11 · Quelque chose ne fonctionne pas, diagnostic](#11-quelque-chose-ne-fonctionne-pas-diagnostic) |
| Réponse à une question fréquente | [12 · FAQ](#12-faq) |

## 1 · Préparer votre compte MyParcel
Avant de commencer dans Lightspeed, réglez trois choses dans votre backoffice MyParcel :

1. **Adresse de facturation et de retour**, *Réglages de la boutique → Général*. Elle figure sur chaque étiquette.
2. **Activer les transporteurs**, *Réglages de la boutique → Transporteurs*. Seuls les transporteurs activés apparaissent ensuite dans l'application.
3. **Générer une clé API**, *Réglages de la boutique → Intégrations*.

Vous avez également besoin de vos **méthodes d'expédition** configurées dans Lightspeed. L'application s'associe à ces méthodes par leur nom (voir [§7](#7-rglages-transporteurs)).

## 2 · Installer l'application
1. Ouvrez l'**App Store** dans votre back office Lightspeed et recherchez *MyParcel*.
2. Installez l'application et autorisez la connexion à votre boutique.
3. Ouvrez l'application pour accéder à la page de réglages. Elle se met ensuite à jour automatiquement.

## Sales channel via le MyParcel Backoffice
En plus de l'application de l'App Store, vous pouvez connecter Lightspeed directement depuis votre backoffice MyParcel en tant que **Sales channel**. MyParcel communique alors directement avec votre boutique Lightspeed via son API et importe vos commandes, sans que l'application gère le transfert. Choisissez cette méthode si vous préférez gérer la connexion depuis MyParcel.

::: tip Quelle méthode utiliser ?
- Avec l'**application de l'App Store** (voir [Installer l'application](#2-installer-lapplication)) vous ajoutez des options de livraison au checkout Lightspeed et transférez les commandes depuis Lightspeed.
- Avec un **Sales channel** (cette section) MyParcel récupère vos commandes directement depuis Lightspeed. Cette méthode n'ajoute pas d'options de livraison au checkout.
:::

### Créer le sales channel
1. Connectez-vous à [backoffice.myparcel.com](https://backoffice.myparcel.com) et allez dans **Shop settings → Sales Channels** (Réglages de la boutique → Canaux de vente).
2. Cliquez en haut à droite sur **Add sales channel** (Ajouter un canal de vente).

![L'aperçu Sales Channels dans le backoffice MyParcel, avec le bouton Add sales channel en haut à droite.](../../platforms/images/lightspeed/backoffice-sales-channels.png)

3. Renseignez un **Name** (Nom) qui vous permet de reconnaître le canal (par exemple *Ma boutique Lightspeed*).
4. Sous **Type of sales channel** (Type de canal de vente), choisissez **Lightspeed**. (Shopify, WooCommerce et PrestaShop sont les autres options.)
5. Sous **Webshop URL**, choisissez la région correspondant à votre boutique Lightspeed :
   - **https://api.webshopapp.com/en/ (EU)**, pour les boutiques Lightspeed (eCom) européennes.
   - **https://api.shoplightspeed.com/en/ (US)**, pour les boutiques Lightspeed américaines.
6. Cliquez sur **Save** (Enregistrer). Le canal est créé et apparaît avec un badge **Missing data** (Données manquantes), ce qui signifie simplement que l'étape d'authentification reste à effectuer.

![Ajouter un sales channel Lightspeed : choisissez le type et la région Webshop URL correspondante, puis Save.](../../platforms/images/lightspeed/backoffice-add-channel.png)

### Authentifier le canal (clé et secret Lightspeed)
Un sales channel a besoin d'une autorisation pour lire vos commandes Lightspeed. Pour Lightspeed, cela se fait avec une **Consumer key** et un **Consumer secret** issus de votre compte Lightspeed.

1. Ouvrez le canal et cliquez sur **Set credentials** (Définir les identifiants).
2. Dans la boîte de dialogue **Replace key and secret** (Remplacer la clé et le secret), collez votre **Consumer key** et votre **Consumer secret** Lightspeed.
3. Cliquez sur **Connect** (Connecter).

![La boîte de dialogue « Replace key and secret » demande votre Consumer key et votre Consumer secret Lightspeed.](../../platforms/images/lightspeed/backoffice-credentials.png)

Une fois la connexion établie, le badge **Missing data** disparaît, le canal affiche **Connected** (Connecté) et MyParcel commence à synchroniser vos commandes Lightspeed.

::: tip Où trouver la clé et le secret ?
Vous générez la Consumer key et le secret dans votre **back office Lightspeed**, sous ses réglages API/développeur. Si vous ne les trouvez pas, demandez au support Lightspeed d'activer l'accès API pour votre compte. Traitez-les comme un mot de passe, ne les partagez pas.
:::

::: warning La connexion ne fonctionne pas ?
Causes les plus fréquentes : un espace supplémentaire collé avec la clé ou le secret · la mauvaise région **Webshop URL** choisie (EU vs US) · une clé/un secret appartenant à une autre boutique Lightspeed ou ayant expiré.
:::

## 3 · Connecter l'application (clé API)
Tous les réglages se trouvent sur une seule page. En haut, vous trouvez l'identifiant de votre boutique et le bloc **Chiave API MyParcel** (clé API MyParcel).

![MyParcel pour Lightspeed, clé API et Réglages généraux. Le champ de la clé API connecte votre boutique à MyParcel.](../../platforms/images/lightspeed/api-general.png) La clé API est masquée dans cette capture d'écran.

1. Collez la clé de votre backoffice MyParcel dans **Chiave API MyParcel**.
2. Cliquez sur **Convalida** (Valider).
3. Une clé valide affiche le message vert **La chiave API è valida** (La clé API est valide).

::: warning Ça ne fonctionne pas ?
Causes les plus fréquentes : un espace copié avant/après la clé · une clé d'une autre boutique · une clé d'un environnement différent (live vs sandbox) de celui de votre compte MyParcel.
:::

## 4 · Réglages · Général
Le bloc **Impostazioni generali** (Réglages généraux) définit la langue de l'application et le moment où une commande est envoyée à MyParcel.

![Réglages généraux : langue et moment où une commande est transférée à MyParcel.](../../platforms/images/lightspeed/api-general.png)

- **Lingua** (Langue), La langue de l'application. Choisissez parmi *English*, *Italiano*, *Nederlands* ou *Français*. Réglez-la sur la langue dans laquelle vous souhaitez travailler.
- **Momento di inoltro** (Moment du transfert), Quand une commande est envoyée à MyParcel. Choisissez *Quando la spedizione viene creata con stato "Spedito"* (lorsque l'expédition est créée avec le statut *Expédié*) ou *...con stato "Non spedito"* (avec le statut *Non expédié*). Choisissez le moment de votre processus où l'étiquette doit être créée.
- **Salva impostazioni** (Enregistrer les réglages), Cliquez pour enregistrer vos choix.

## 5 · Réglages · Mode de synchronisation
Dans **Modalità di sincronizzazione** (Mode de synchronisation), vous choisissez comment les commandes circulent entre Lightspeed et MyParcel.

![Mode de synchronisation (Push / Pull) et le bouton Mettre à jour la capacité.](../../platforms/images/lightspeed/sync-capacity.png)

- **Push**, L'application traite vos commandes et envoie automatiquement les expéditions à MyParcel. Choisissez cette option si vous voulez que l'application fasse le travail à votre place.
- **Pull**, MyParcel récupère les commandes directement depuis Lightspeed. L'application ne fournit alors que l'intégration au checkout. Choisissez cette option si vous pilotez l'import des commandes depuis MyParcel.

Cliquez sur **Salva impostazioni** (Enregistrer les réglages) après votre choix.

## 6 · Réglages · Mettre à jour la capacité
- **Aggiorna capacità** (Mettre à jour la capacité), Récupère les derniers transporteurs et options de livraison depuis MyParcel. Cliquez dessus dès que vous venez de modifier quelque chose dans votre compte MyParcel et que vous ne le voyez pas encore dans l'application. La ligne **Ultimo aggiornamento** (Dernière mise à jour) indique quand cela s'est produit pour la dernière fois.

## 7 · Réglages · Transporteurs
Sous les réglages généraux, chaque transporteur dispose de son propre bloc. Utilisez l'interrupteur en haut d'un bloc pour activer ou désactiver le transporteur. Les transporteurs qui apparaissent dépendent de ce qui est activé dans votre compte MyParcel, dans la boutique d'exemple il s'agit d'**InPost** et de **Poste Italiane**.

Pour chaque transporteur, vous réglez les mêmes éléments : les types de livraison que vous proposez, le nom et le prix que voit le client, l'heure limite, les jours de livraison et l'association à vos méthodes d'expédition Lightspeed.

### InPost
![Réglages InPost : types de livraison, heure limite, jours de livraison et correspondance des méthodes d'expédition.](../../platforms/images/lightspeed/inpost.png)

- **Tipi di consegna** (Types de livraison), Les façons dont ce transporteur livre. Pour chaque type, vous l'activez ou le désactivez, renseignez le nom que voit le client et définissez le prix.
  - **Consegna standard** (Livraison standard), Livraison à domicile un jour ouvrable normal (dans l'exemple : 8 €).
  - **Punto di ritiro** (Point de retrait), Le client récupère le colis dans un point de retrait à proximité (dans l'exemple : 5 €).
- **Orario limite** (Heure limite), L'heure jusqu'à laquelle une commande est encore traitée le jour même (dans l'exemple : 18:00). Les commandes passées après cette heure sont reportées au jour de livraison suivant.
- **Giorni di consegna** (Jours de livraison), Cochez les jours où ce transporteur livre (dans l'exemple : lun, mar, mer, ven).
- **Mappatura titoli metodo di spedizione** (Correspondance des méthodes d'expédition), Associe vos méthodes d'expédition Lightspeed à ce transporteur. Ajoutez un motif qui apparaît dans le nom de votre méthode d'expédition Lightspeed, afin que l'application sache quelle méthode correspond à quel transporteur. Saisissez un motif et cliquez sur **Aggiungi** (Ajouter).
- **Salva impostazioni** (Enregistrer les réglages), Enregistre les modifications pour ce transporteur.

### Poste Italiane
![Réglages Poste Italiane : types de livraison, options supplémentaires, heure limite, jours de livraison et correspondance des méthodes d'expédition.](../../platforms/images/lightspeed/poste-italiane.png)

Poste Italiane a la même disposition qu'InPost, avec un bloc supplémentaire : **Opzioni** (Options).

- **Tipi di consegna** (Types de livraison), *Consegna standard* (Livraison standard, dans l'exemple 4,00 €) et *Punto di ritiro* (Point de retrait, dans l'exemple 4 €).
- **Opzioni** (Options), Possibilités supplémentaires offertes par ce transporteur.
  - **Raccolta programmata** (Enlèvement programmé), Le transporteur récupère vos colis à un moment convenu. Activez cette option si vous faites enlever vos colis au lieu de les déposer vous-même.
  - **Consegna prioritaria** (Livraison prioritaire), Une livraison plus rapide. Activez cette option pour proposer à vos clients une option prioritaire.
- **Orario limite** (Heure limite) et **Giorni di consegna** (Jours de livraison), Comme pour InPost.
- **Mappatura titoli metodo di spedizione** (Correspondance des méthodes d'expédition), Ajoutez un ou plusieurs motifs (par exemple `poste`, `poste italiane`) qui correspondent aux noms de vos méthodes d'expédition Lightspeed pour ce transporteur.

::: warning N'oubliez pas d'enregistrer
Chaque bloc de transporteur a son propre bouton **Salva impostazioni** (Enregistrer les réglages). Enregistrez le bloc que vous venez de modifier.
:::

## 8 · Réglages produit
L'application MyParcel n'ajoute **aucun** champ à la page produit de Lightspeed. Tout le comportement d'expédition se contrôle depuis les réglages de l'application (voir [§7](#7-rglages-transporteurs)).

## 9 · L'expérience de paiement
Ce que voit votre client une fois l'adresse de livraison renseignée. Les options dépendent des transporteurs et des types de livraison que vous avez activés au [§7](#7-rglages-transporteurs). Le nom et le prix que voit le client sont ceux que vous avez définis par type de livraison.

<!-- screenshot: ../../platforms/images/lightspeed/checkout-delivery.png, voeg een checkout-schermafbeelding toe zodra een testbestelling in de storefront is geplaatst -->

D'après les réglages d'exemple, un client peut rencontrer :

- **Livraison standard** (*Consegna standard*), Le choix par défaut. Le colis est livré à l'adresse du client un jour de livraison normal.
- **Point de retrait** (*Punto di ritiro*), Le client récupère le colis dans un point de retrait à proximité au lieu de le recevoir à domicile.

*Les prix (tels que 8 € ou 4 €) sont des exemples, ils dépendent de vos propres réglages et de votre contrat avec le transporteur.*

## 10 · Utilisation quotidienne
La façon dont vous traitez les commandes dépend du mode de synchronisation que vous avez choisi au [§5](#5-rglages-mode-de-synchronisation) :

- **Push**, Les commandes sont envoyées automatiquement à MyParcel au moment que vous avez défini sous **Momento di inoltro** ([§4](#4-rglages-gnral)). Vous créez ensuite les étiquettes et expédiez depuis votre backoffice MyParcel.
- **Pull**, MyParcel récupère lui-même les commandes depuis Lightspeed. Vous travaillez entièrement depuis votre backoffice MyParcel pour créer les étiquettes et expédier.

::: tip Quand vous êtes facturé
Vous n'êtes facturé qu'une fois qu'une expédition est effectivement remise au transporteur.
:::

## 11 · Quelque chose ne fonctionne pas, diagnostic
Parcourez ce tableau de haut en bas, la plupart des problèmes se règlent en 5 minutes.

| Symptôme | Que vérifier |
| --- | --- |
| **La clé API n'est pas acceptée** | Recollez la clé depuis le backoffice (*Intégrations*) sans espaces supplémentaires, puis cliquez sur **Convalida** (Valider). |
| **Aucune option de livraison au checkout** | Le transporteur est-il activé avec au moins un type de livraison activé ([§7](#7-rglages-transporteurs)) ? La **Mappatura titoli** correspond-elle aux noms de vos méthodes d'expédition Lightspeed ? Cliquez ensuite sur **Aggiorna capacità** (Mettre à jour la capacité). |
| **Un nouveau transporteur ou une nouvelle option n'apparaît pas** | Cliquez sur **Aggiorna capacità** (Mettre à jour la capacité) pour que l'application récupère les dernières données de votre compte MyParcel. |
| **Les commandes sont associées au mauvais transporteur** | Ajustez la **Mappatura titoli metodo di spedizione**. Rendez les motifs uniques par transporteur et faites-les correspondre exactement aux noms de vos méthodes d'expédition Lightspeed. |
| **Les commandes n'arrivent pas jusqu'à MyParcel** | Vérifiez le mode de synchronisation ([§5](#5-rglages-mode-de-synchronisation)) et le **Momento di inoltro** ([§4](#4-rglages-gnral)). En mode Push, la commande est envoyée au statut choisi. |

## 12 · FAQ

### L'application est-elle payante ?
Non. Vous ne payez que pour les expéditions via MyParcel.

### Où trouver ma clé API ?
Dans votre backoffice MyParcel sous *Réglages de la boutique → Intégrations*.

### Quels transporteurs puis-je utiliser ?
Les transporteurs activés sur votre compte MyParcel, par exemple InPost et Poste Italiane en Italie.

### Quelle est la différence entre Push et Pull ?
En **Push**, l'application envoie automatiquement vos commandes à MyParcel. En **Pull**, MyParcel récupère lui-même les commandes et l'application ne fournit que les options de livraison au checkout. Voir [§5](#5-rglages-mode-de-synchronisation).

### Pourquoi mes clients ne voient-ils aucune option de livraison au checkout ?
Assurez-vous que le transporteur est activé avec un type de livraison activé, et que la **Mappatura titoli** correspond aux noms de vos méthodes d'expédition Lightspeed. Cliquez ensuite sur **Aggiorna capacità** (Mettre à jour la capacité). Voir [§7](#7-rglages-transporteurs).

### Comment modifier l'adresse d'expéditeur sur l'étiquette ?
Cela se règle dans votre backoffice MyParcel (*Réglages de la boutique → Général*), pas dans l'application. Les modifications s'appliquent immédiatement.

## Ressources & support
- [backoffice.myparcel.com ↗](https://backoffice.myparcel.com), compte, clé API, facturation.
