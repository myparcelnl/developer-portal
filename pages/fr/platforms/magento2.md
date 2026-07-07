---
title: Magento 2
description: "De zéro à un colis expédié sur Magento 2 : installez le plugin via Composer, connectez votre compte MyParcel, choisissez un profil de boutique et envoyez votre première étiquette dès aujourd'hui. Avec démarrage rapide, profils de boutique, référence des réglages, workflow quotidien et un tableau de diagnostic."
---

::: tip En bref
Le plugin MyParcel relie votre boutique Magento 2 à MyParcel. Dans le checkout, les clients choisissent un moment de livraison ou un point de retrait, vous imprimez les étiquettes depuis l'admin Magento, et le Track & Trace part automatiquement vers le client. Conçu pour les propriétaires et gestionnaires de boutique, aucune connaissance de développeur n'est requise après l'installation initiale via Composer.
:::

## Démarrage rapide, votre premier colis en 15 minutes
De quoi expédier votre première vraie commande dès aujourd'hui. Pour une configuration plus poussée, voir [Que cherchez-vous ?](#que-cherchez-vous) ci-dessous.

1. **Compte.** Pas encore de compte MyParcel ? Créez-en un sur [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Copier la clé API.** Connectez-vous à [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Paramètres de la boutique → Intégration* → copiez la clé API.
3. **Installer le plugin.** Demandez à votre développeur ou hébergeur d'exécuter `composer require myparcelnl/magento && bin/magento setup:upgrade && bin/magento setup:di:compile && bin/magento cache:flush`.
4. **Connecter le plugin.** Ouvrez **Stores → Configuration → MyParcel → Settings**, collez votre clé API dans *API key*, cliquez sur **Save Config** puis sur **Import MyParcel Backoffice settings**.
5. **Première étiquette.** Ouvrez *Sales → Orders* → choisissez une commande payée → **Print MyParcel Label** → vérifiez le type de colis/les options → **Create**.

::: tip C'est terminé quand vous voyez ceci
- Sous *Stores → Configuration → MyParcel* : vous avez une clé API valide enregistrée
- Les onglets des transporteurs apparaissent après *Import MyParcel Backoffice settings*
- Vous pouvez exporter une commande test via **Print MyParcel Label**
:::

## Que cherchez-vous ?
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Première configuration | [Démarrage rapide](#dmarrage-rapide-votre-premier-colis-en-15-minutes) |
| Réglages recommandés pour votre type de boutique | [4 · Quel profil de boutique êtes-vous ?](#4-quel-profil-de-boutique-tes-vous) |
| Réglages généraux du plugin | [5 · Settings · General](#5-settings-general) |
| Options spécifiques par transporteur | [6 · Settings · Transporteurs](#6-settings-transporteurs) |
| Un réglage différent par produit | [7 · Réglages produit](#7-rglages-produit) |
| Ce que le client voit dans le checkout | [8 · L'expérience checkout](#8-lexprience-checkout) |
| Traitement en masse pour 50+ commandes/jour | [9 · Utilisation quotidienne](#9-utilisation-quotidienne) |
| Quelque chose ne fonctionne pas | [10 · Quelque chose ne fonctionne pas, diagnostic](#10-quelque-chose-ne-fonctionne-pas-diagnostic) |
| Réponse à une question fréquente | [11 · FAQ](#11-faq) |

## 1 · Préparer votre compte MyParcel
Avant de commencer dans Magento, réglez quatre choses dans votre backoffice MyParcel :

1. **Adresse de facturation et de retour**, *Paramètres de la boutique → Général*. Elle figure sur chaque étiquette.
2. **Activer les transporteurs**, *Paramètres de la boutique → Transporteurs*. Seuls les transporteurs activés apparaîtront ensuite dans le plugin.
3. **Générer une clé API**, *Paramètres de la boutique → Intégration*.
4. **Importer les informations de commande** (optionnel), activez cette option si vous voulez utiliser le [mode commande](#api-settings).

## 2 · Installer le plugin
Le plugin Magento s'installe via Composer. Demandez à votre développeur ou hébergeur d'exécuter les commandes suivantes sur le serveur :

```bash
composer require myparcelnl/magento
bin/magento setup:upgrade
bin/magento setup:di:compile
bin/magento cache:flush
```

::: details Checkout Hyvä ?
Installez également le module de compatibilité en plus de ce qui précède :

```bash
composer require hyva-themes/magento2-hyva-checkout-myparcelnl
bin/magento setup:upgrade
```
:::

::: warning L'ancien module PakjeGemak tourne-t-il encore ?
Désactivez-le avant de démarrer avec ce plugin. Deux plugins MyParcel actifs en même temps entraînent des étiquettes en double.
:::

Après l'installation, retrouvez le plugin sous **Stores → Configuration → MyParcel**.

## 3 · Connecter le plugin (clé API)
Ouvrez **Stores → Configuration → MyParcel → Settings** et collez votre clé API en haut, dans le champ *API key*. Cliquez ensuite sur **Save Config**.

1. Connectez-vous au backoffice MyParcel.
2. Allez dans *Paramètres de la boutique → Intégration*.
3. Copiez la clé API (généralement 40 caractères).
4. Collez-la dans Magento et enregistrez.

Le bouton **Import MyParcel Backoffice settings** récupère vos réglages de contrat et de transporteurs en un clic. Les onglets des transporteurs n'apparaissent qu'après cette importation.

![MyParcel Settings avec le champ API key et le bouton Import MyParcel Backoffice settings.](../../platforms/images/magento2/01-api-settings.svg) Après une clé valide, les onglets des transporteurs apparaissent.

::: warning Ça ne marche pas ?
Causes les plus fréquentes : pas cliqué sur *Save Config* · un espace copié avant/après la clé · clé d'une autre boutique · cache non vidé (`bin/magento cache:flush`).
:::

### Que fait le plugin dans votre admin Magento ?
| Où ? | Que pouvez-vous y faire ? |
| --- | --- |
| **Stores → Configuration → MyParcel** | Tous les réglages : *Version and support* et *Settings* (un onglet par transporteur). |
| **Sales → Orders → \[commande\] → Print MyParcel Label** | Créer une étiquette pour une commande précise, y compris ajuster le type de colis et les options par commande. |
| **Catalog → Products → \[produit\] → MyParcel Options** | Réglages spécifiques au produit (délai de dépôt, contrôle d'âge, format boîte aux lettres, code HS, etc.) qui priment sur les valeurs par défaut globales. |

## 4 · Quel profil de boutique êtes-vous ?
Trois profils types avec des réglages recommandés. Choisissez-en un, reprenez les réglages, puis affinez via [5 · Settings · General](#5-settings-general).

### Petite, quelques commandes par jour, NL uniquement
| Réglage | Recommandé | Pourquoi |
| --- | --- | --- |
| Mode (Print settings) | *Concept* | Vous garde aux commandes pendant l'apprentissage |
| Drop-off delay | 1 | Les commandes sont traitées le lendemain |
| Paper type | A4 | Aucune imprimante d'étiquettes nécessaire |
| Number of days | 7 | Le client peut choisir une semaine à l'avance |
| PostNL, *Delivery enabled* | Yes | Transporteur NL standard |
| Insure orders from (€) | 250 | Les colis au-dessus de 250 € sont assurés automatiquement |

### Boutique active, 50+ commandes/jour
| Réglage | Recommandé | Pourquoi |
| --- | --- | --- |
| Mode (Print settings) | *Direct* | Plus rapide, les étiquettes sont définitives immédiatement |
| Paper type | A6 (imprimante d'étiquettes Zebra/Brother) | Impression plus rapide |
| Drop-off delay | 0 (ou 1 en période de pointe) | Jours ouvrés entre la commande et le dépôt |
| Bulk *Create & print MyParcel track(s)* | Activé | Traitez 50+ commandes en un clic |
| PostNL + DHL For You | Les deux activés | Large couverture |
| Automate signature on receipt, From price | 250 | Au-dessus de 250 €, une signature est requise |

### Boîte aux lettres uniquement, café, cartes, cosmétiques
| Réglage | Recommandé | Pourquoi |
| --- | --- | --- |
| Mailbox settings, *Automate mailbox* | Yes | Expédier automatiquement en colis boîte aux lettres quand la taille/le poids correspondent |
| Mailbox weight | 2000 g (max) | Poids seuil pour le colis boîte aux lettres |
| Par produit *Fit in mailbox* | Réaliste (par ex. 5) | Nombre d'articles par colis boîte aux lettres |
| Pickup active | No | Pas de choix de retrait pour la boîte aux lettres |
| Insure orders | No | Non disponible pour les colis boîte aux lettres |

::: tip Autres scénarios ?
Pour des bijoux de valeur, l'international ou des exigences particulières, voir [11 · FAQ](#11-faq) ou les profils de boutique plus détaillés dans le [manuel WooCommerce](./woocommerce.html#4-quel-profil-de-boutique-tes-vous) (applicables à toutes les plateformes).
:::

## 5 · Settings · General
L'onglet général gère la connexion, les règles de frais de port, les jours de livraison, les réglages d'impression et l'apparence du bloc MyParcel dans le checkout.

![Onglet General settings avec les sections API, Delivery costs, Date settings, Print settings et Delivery methods.](../../platforms/images/magento2/02-general-settings.svg)

### API settings
- **API key**, relie votre boutique à MyParcel. Sans clé valide, les options de livraison ne fonctionnent pas.
- **Import MyParcel Backoffice settings**, récupère vos réglages actuels de contrat et de transporteurs depuis MyParcel.

### Delivery costs
Définissez le prix de livraison que les clients voient dans le checkout. Chaque règle comporte un *Rule name*, un *Price* et une ou plusieurs conditions (poids, type de colis, pays). Par ex. *"Colis boîte aux lettres aux Pays-Bas < 12 kg"* au prix de 4,97 €.

- **Show or hide JSON textarea**, vue avancée pour éditer les règles en JSON.
- **Use Free Shipping**, respecter les règles de livraison gratuite de Magento.

### Date settings
- **Number of days**, combien de jours à l'avance les clients peuvent choisir un jour de livraison. Par défaut 7.
- **Drop-off delay**, jours ouvrés entre la commande et le dépôt. Réglez sur 1 si vous ne traitez les commandes que le lendemain.

### Print settings
- **Mode**, *Concept* (d'abord dans le backoffice MyParcel) ou *Direct* (définitif immédiatement).
- **Paper type**, *A4* (imprimante standard) ou *A6* (imprimante d'étiquettes).
- **Label description**, texte sur l'étiquette, avec des variables comme `%order_nr%`.
- **Country of origin**, pays d'origine pour les envois internationaux. Par défaut NL.
- **Create Concept**, les étiquettes d'abord en concept pour pouvoir encore les ajuster.
- **Return in the box**, inclut automatiquement une étiquette de retour.
- **I use the following weight type**, *gram* ou *kilogram* (la même unité que dans Magento).

### Empty package weight
Chaque type de colis a un poids à vide ; MyParcel l'ajoute au poids du produit.

| Type de colis | Poids à vide typique |
| --- | --- |
| Package (carton brun) | 200 – 400 g |
| Small package | 100 – 200 g |
| Mailbox (colis boîte aux lettres) | 50 – 100 g |
| Digital stamp | 10 – 30 g |

### Delivery methods
- **Show details in summary**, affiche l'option de livraison choisie dans le récapitulatif de commande du client.
- **Preferred pickup locations view**, *Liste* ou *Carte* par défaut.
- **Switching the view is allowed**, laisse les clients basculer.
- **Price shown in delivery options**, affiche le supplément par option de livraison.
- **Exclude parcel lockers**, masque les consignes à colis.

## 6 · Settings · Transporteurs
Chaque transporteur a son propre onglet. Les onglets visibles dépendent de ce que contient votre contrat MyParcel.

![Onglets : General settings, PostNL, DHL For You, DHL Europlus, DHL Parcel Connect, DPD, UPS Standard, GLS, Trunkrs.](../../platforms/images/magento2/03-carrier-tabs.svg)

::: tip Tous les transporteurs suivent la même structure
Ci-dessous, je parcours **PostNL** en exemple ; les autres transporteurs suivent la même structure, avec leurs propres options spécifiques.
:::

### PostNL settings

#### Titres de livraison
Les textes que votre client voit dans le checkout. Les valeurs par défaut conviennent, sauf si vous voulez votre propre formulation.

- **Delivery title**, titre au-dessus du bloc PostNL. Par défaut : *Livré à domicile ou au travail*.
- **Standard / Signature on receipt / Receipt code / Home address only / Priority / Morning / Evening / Mailbox / Digital stamp / Pickup title**, texte par option de livraison.

#### Drop-off days & Cut-off times
- **Drop-off days**, cochez les jours où vous déposez chez PostNL.
- **Cut-off time** (par jour), jusqu'à quelle heure une commande part encore le jour même. Par défaut 15:30.

#### Default shipping options
Appliquez des options automatiquement au-dessus d'un prix seuil.

- **Automate 'Signature on receipt'** + From price.
- **Automate 'Collect package'** + From price.
- **Automate 'Home address only'** + From price.
- **Automate 'Larger than 100 × 70 × 58 cm'** + From price.
- **Automate 'Age check 18+'**.

#### Assurance
- **Insure orders from (€)**, seuil au-dessus duquel la commande est assurée automatiquement.
- **Insure orders up to (NL)** / **(BE)** / **(EU)** / **(ROW)**, maximums par région.
- **Insure orders for percentage**, assurer un % de la valeur de la commande.

::: details Moments de livraison + options d'expédition, tous les champs
**Digital stamp settings**
- **Automate digital stamp**, expédier automatiquement en timbre numérique pour les produits légers et plats.
- **Default weight**, poids par défaut pour les envois en timbre numérique.

**Mailbox settings**
- **Automate mailbox**, expédier automatiquement en colis boîte aux lettres quand le poids et la taille conviennent.
- **Mailbox weight**, poids maximum (par défaut 2000 g).
- **Priority delivery (Prio 24 heures)** + **Priority delivery fee**.
- **International mailbox**, colis boîte aux lettres vers l'étranger.

**Small Package settings**
- **Automate Small Package** + **Small Package weight**.

**Moments de livraison**
- **Morning delivery active** + fee.
- **Evening delivery active** + fee.
- **Pickup active** + fee.

**Delivery settings**
- **Delivery enabled**, interrupteur principal PostNL.
- **Signature on receipt** + fee.
- **Home address only** + fee.
- **Saturday delivery** + fee.
:::

### Autres transporteurs, différences en bref
| Transporteur | Particularités |
| --- | --- |
| **DHL For You** | Colis boîte aux lettres pris en charge. Retrait au point service DHL. Pas de livraison matin/soir. |
| **DHL Europlus** | Envois professionnels UE. Assurance par région (Local/BE/EU/ROW). |
| **DHL Parcel Connect** | Envois grand public en Europe. Retrait possible. |
| **DPD** | Colis NL + colis boîte aux lettres (depuis v4.15). Retrait au DPD ParcelShop. |
| **UPS Standard** | International professionnel. Moins d'options, fenêtre de livraison de 3 jours par défaut. |
| **GLS** | NL/BE. Signature, Only recipient, Saturday delivery. Retrait au point GLS. |
| **Trunkrs** | Transporteur NL rapide. Receipt code, Fresh food, Frozen, Priority delivery. |

## 7 · Réglages produit
Chaque produit dispose d'une section **MyParcel Options** sur sa page d'édition. Elle prime sur les valeurs par défaut globales de [§6](#6-settings-transporteurs) au niveau du produit, utile pour les produits ayant des exigences particulières.

![Section MyParcel Options sur la page d'édition du produit avec Drop-off delay, Age check 18+, Fit in digital stamp, HS code, Fit in mailbox, Disable delivery options, Exclude parcel lockers.](../../platforms/images/magento2/10-product-myparcel-options.svg)

- **Drop-off delay**, jours ouvrés supplémentaires pour préparer ce produit. Pour le made-to-order ou le dropshipping.
- **Age check 18+**, exige un contrôle d'identité. Pour l'alcool, le tabac, les couteaux. Incompatible avec la livraison matin/soir.
- **Fit in digital stamp**, ce produit peut-il être expédié en timbre numérique ?
- **HS code**, code douanier pour les envois dans le monde entier. À rechercher sur [tarief.douane.nl](https://tarief.douane.nl).
- **Fit in mailbox**, combien d'unités tiennent dans un colis boîte aux lettres ? `0` = automatique selon le poids, `-1` = ne tient pas dans la boîte aux lettres.
- **Disable delivery options**, masque le bloc d'options de livraison MyParcel quand ce produit est dans le panier. Pour les produits numériques ou les cartes cadeaux.
- **Exclude parcel lockers**, masque les consignes à colis comme point de retrait pour ce produit.

## 8 · L'expérience checkout
Dès que le client renseigne une adresse de livraison, le bloc MyParcel apparaît avec les options de livraison. Les options affichées dépendent des transporteurs actifs, des produits dans le panier et des surcharges spécifiques au produit de [§7](#7-rglages-produit).

![Bloc MyParcel dans le checkout Magento avec options de livraison par transporteur, points de retrait et suppléments.](../../platforms/images/magento2/20-checkout-delivery-options.svg)

### Options de livraison
- **Livraison standard**, livraison pendant les heures de bureau.
- **Livraison le matin**, PostNL livre le matin (supplément).
- **Livraison le soir**, entre 18:00 et 22:00 (supplément).
- **Livraison le samedi**, visible uniquement si activée par transporteur.
- **Signature à la réception**, le livreur demande au client de signer.
- **Pas de livraison chez les voisins**, uniquement au destinataire.
- **Contrôle d'identité 18+**, apparaît automatiquement quand un produit l'exige.
- **Retrait dans un point PostNL**, liste ou carte ; consignes à colis selon *Exclude parcel lockers*.
- **Colis boîte aux lettres**, quand le panier respecte les limites de taille.
- **Timbre numérique**, pour les envois plats et légers.
- **Prio 24 heures**, livraison prioritaire (uniquement si activée).

## 9 · Utilisation quotidienne

### Workflow 1, par commande
1. Allez dans *Sales → Orders* et ouvrez une commande.
2. Cliquez sur **Print MyParcel Label**.
3. Ajustez éventuellement le type de colis, l'assurance ou les options de livraison pour cette commande.
4. Cliquez sur **Create**. L'étiquette est créée dans le backoffice MyParcel.

### Workflow 2, en masse (10+ commandes/jour)
1. Allez dans *Sales → Orders*.
2. Sélectionnez plusieurs commandes avec les cases à cocher.
3. Sous *Actions* → **Create & print MyParcel track(s)**.

### Track & Trace dans l'e-mail de confirmation
Sous *Stores → Configuration → Sales → Sales Emails → MyParcel Track*, vous définissez le lien de suivi dans l'e-mail d'expédition. Voir la [FAQ](#11-faq) pour les conflits de modèle d'e-mail.

::: tip Quand êtes-vous facturé
Vous n'êtes facturé qu'une fois l'envoi réellement remis au transporteur. Les timbres numériques font exception, ils sont facturés dès l'export.
:::

## 10 · Quelque chose ne fonctionne pas, diagnostic
Quelque chose ne se comporte pas comme prévu ? Parcourez ce tableau de haut en bas, trois problèmes sur quatre sont résolus en moins de 5 minutes.

| Symptôme | Que vérifier |
| --- | --- |
| **Pas d'options de livraison dans le checkout** | (1) Clé API correctement enregistrée ? (2) Au moins un transporteur avec *Delivery enabled = Yes* ? (3) Adresse de livraison dans *Ship to Specific Countries* ? (4) `bin/magento cache:flush` |
| **Impossible de sélectionner MyParcel après un autre mode d'expédition** | Mettez à niveau vers la v5.5.2 ou une version supérieure ; cela a été amélioré dans les versions récentes. Toujours présent : contactez le support MyParcel. |
| **"This address can not be split"** | Un plugin de vérification de code postal en usage ? Configurez-le pour que la rue et le numéro restent des champs séparés. |
| **"API key invalid"** | Un espace dans la clé ? Clé de la bonne boutique ? Recopiez-la depuis le backoffice MyParcel *Paramètres de la boutique → Intégration* et collez-la. Videz le cache. |
| **"Can't get setting with path" dans les logs** | Transporteur présent dans les logs mais non actif, message sans gravité. Sera corrigé dans les versions plus récentes. |
| **Les modes d'expédition restent en chargement** | Un autre mode d'expédition actif avec *Show Method if Not Applicable = Yes* ? Désactivez cette option. |
| **Les étiquettes ne correspondent pas aux réglages** | Cliquez à nouveau sur *Import MyParcel Backoffice settings*. Après une mise à niveau : videz le cache. |
| **Checkout Hyvä, les options de livraison n'apparaissent pas** | Module de compatibilité installé ? `composer require hyva-themes/magento2-hyva-checkout-myparcelnl` |

## 11 · FAQ

### Comment changer le type de colis pour une commande précise ?
Ouvrez la commande, cliquez sur *Print MyParcel Label* et ajustez le type de colis dans la fenêtre contextuelle avant de créer l'étiquette.

### Puis-je utiliser plusieurs transporteurs à la fois ?
Oui, s'ils figurent dans votre contrat MyParcel. Activez chaque transporteur dans son propre onglet. Les clients verront alors plusieurs blocs de livraison dans le checkout.

### Je ne veux pas proposer de consignes à colis, puis-je les désactiver ?
Allez dans *General settings → Delivery methods → Exclude parcel lockers*. Vous pouvez aussi le régler par produit via *Exclude parcel lockers* sur la page d'édition du produit.

### Le plugin fonctionne-t-il avec des checkouts tiers ?
Officiellement pris en charge : le checkout Magento standard et le checkout Hyvä (avec le module `hyva-themes/magento2-hyva-checkout-myparcelnl`). D'autres checkouts peuvent ne pas fonctionner entièrement, testez toujours avant la mise en ligne.

### Comment revenir à une version plus ancienne ?
Composer : `composer require myparcelnl/magento:5.4.0` suivi de `bin/magento setup:upgrade` et `cache:flush`. Signalez le bug sur [github.com/myparcelnl/magento/issues](https://github.com/myparcelnl/magento/issues).

### Mes clients n'obtiennent pas d'options de livraison quand ils saisissent d'abord leur code postal
Problème connu avec certains plugins de vérification de code postal. Configurez le vérificateur pour que la rue et le numéro restent des champs séparés.

### Comment changer l'adresse d'expéditeur sur l'étiquette ?
L'adresse d'expéditeur provient de votre backoffice MyParcel (*Paramètres de la boutique → Général*), pas de Magento.

### Le plugin est-il payant ?
Non. Vous ne payez que pour les envois via votre tarif MyParcel.

## Ressources & support
- [github.com/myparcelnl/magento ↗](https://github.com/myparcelnl/magento), code source, versions, issues.
- [developer.myparcel.nl, Magento 2 ↗](https://developer.myparcel.nl/nl/documentatie/13.magento2.html), manuel officiel d'installation et de configuration.
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), compte, clé API, facturation.
- [Contacter le support MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).
