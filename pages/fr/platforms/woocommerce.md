---
title: WooCommerce
description: "De zéro à un colis expédié sur WooCommerce : installez le plugin, connectez votre compte MyParcel, choisissez un profil de boutique et envoyez votre première étiquette dès aujourd'hui. Avec démarrage rapide, profils de boutique, référence des réglages, workflow quotidien et un tableau de diagnostic."
---

::: tip En bref
Le plugin MyParcel connecte votre boutique WooCommerce à MyParcel. Les clients choisissent un moment de livraison ou un point relais dans la commande, vous imprimez les étiquettes depuis WordPress et le Track & Trace est envoyé automatiquement au client. Aucun code nécessaire, tout se fait depuis l'administration WordPress.
:::

## Démarrage rapide, votre premier colis en 15 minutes
De quoi expédier votre première vraie commande dès aujourd'hui. Pour une configuration plus poussée, voir [Que cherchez-vous ?](#que-cherchez-vous) ci-dessous.

1. **Compte.** Vous n'avez pas encore de compte MyParcel ? Créez-en un sur [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Copier la clé API.** Connectez-vous sur [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Réglages de la boutique → Intégration* → copiez la clé API.
3. **Installer le plugin.** Dans WordPress : **Extensions → Ajouter une extension** → recherchez *MyParcel* → **Installer** → **Activer**.
4. **Connecter le plugin.** Ouvrez **WooCommerce → MyParcel**, cliquez sur **Modifier la clé API**, collez la clé et cliquez sur **Enregistrer**. Le badge de statut doit afficher *Connecté à MyParcel*.
5. **Première étiquette.** Ouvrez une commande payée, faites défiler jusqu'au bloc MyParcel et cliquez sur **Exporter et imprimer**. Votre étiquette PDF se génère.

::: tip C'est terminé quand vous voyez ceci
- En haut du plugin : un statut vert *Connecté à MyParcel*
- Vous pouvez exporter une commande de test vers MyParcel
- Votre étiquette PDF s'ouvre (ou arrive dans votre dossier de téléchargements)
:::

## Que cherchez-vous ?
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Première configuration | [Démarrage rapide](#dmarrage-rapide-votre-premier-colis-en-15-minutes) |
| Se connecter aussi depuis le backoffice (canal de vente) | [Canal de vente via le MyParcel Backoffice](#canal-de-vente-via-le-myparcel-backoffice) |
| Réglages recommandés pour votre type de boutique | [4 · Quel profil de boutique êtes-vous ?](#4-quel-profil-de-boutique-tes-vous) |
| Rechercher un réglage précis | [5 · Réglages · Commandes](#5-rglages-commandes) à [9 · Réglages · Transporteurs](#9-rglages-transporteurs) |
| Un réglage différent par produit | [10 · Réglages produit](#10-rglages-produit) |
| Ce que le client voit lors de la commande | [13 · L'expérience de commande](#13-lexprience-de-commande) |
| Traitement en masse pour 50+ commandes/jour | [14 · Utilisation quotidienne](#14-utilisation-quotidienne) |
| Quelque chose ne fonctionne pas | [15 · Quelque chose ne fonctionne pas, diagnostic](#15-quelque-chose-ne-fonctionne-pas-diagnostic) |
| Réponse à une question fréquente | [16 · FAQ](#16-faq) |

## 1 · Préparer votre compte MyParcel
Avant de commencer dans WooCommerce, réglez quatre choses dans votre backoffice MyParcel :

1. **Adresse de facturation et de retour**, *Réglages de la boutique → Général*. Elle apparaît sur chaque étiquette.
2. **Activer les transporteurs**, *Réglages de la boutique → Transporteurs*. Seuls les transporteurs activés apparaîtront ensuite dans le plugin.
3. **Générer une clé API**, *Réglages de la boutique → Intégration*.
4. **Importer les informations de commande** (facultatif), activez si vous voulez utiliser le [mode commande](#5-rglages-commandes).

## 2 · Installer le plugin
1. Dans l'administration WordPress : **Extensions → Ajouter une extension**.
2. Recherchez *MyParcel*.
3. Repérez *WooCommerce MyParcel* et cliquez sur **Installer**, puis **Activer**.
4. Un nouvel élément de menu **WooCommerce → MyParcel** apparaît.

::: details Vous préférez installer manuellement ?
Téléchargez le ZIP de la version sur [github.com/myparcelnl/woocommerce/releases](https://github.com/myparcelnl/woocommerce/releases) et téléversez-le via **Extensions → Ajouter une extension → Téléverser une extension**.
:::

## Canal de vente via le MyParcel Backoffice
En plus de connecter le plugin avec votre clé API (voir [Connecter le plugin](#3-connecter-le-plugin-cl-api)), vous enregistrez WooCommerce comme **canal de vente** dans votre backoffice MyParcel : vous utilisez les deux. Le plugin gère le checkout et les réglages WooCommerce, tandis que le canal de vente permet à MyParcel de communiquer directement avec votre boutique via son API REST et d'importer vos commandes.

::: tip Ce que fait chaque connexion
- Le **plugin + la clé API** (voir [Connecter le plugin](#3-connecter-le-plugin-cl-api)) ajoute les options de livraison au checkout WooCommerce et vous permet de gérer les expéditions depuis WordPress.
- Le **canal de vente** (cette section) permet à MyParcel de récupérer vos commandes directement depuis WooCommerce et se gère depuis le backoffice.
:::

### Créer le canal de vente
1. Connectez-vous sur [backoffice.myparcel.com](https://backoffice.myparcel.com) et allez dans **Réglages de la boutique → Canaux de vente**.
2. Cliquez sur **Ajouter un canal de vente** (en haut à droite).

![L'aperçu des canaux de vente dans le backoffice MyParcel, avec le bouton Ajouter un canal de vente en haut à droite.](../../platforms/images/woocommerce/backoffice-sales-channels.png)

3. Saisissez un **Nom** qui vous aide à reconnaître le canal (par exemple *Ma boutique WooCommerce*).
4. Sous **Type de canal de vente**, choisissez **WooCommerce**.
5. Renseignez l'**URL de la boutique**, l'adresse de votre boutique WooCommerce (par exemple `https://votre-boutique.com`).
6. Cliquez sur **Enregistrer**. Le canal est créé et affiche un badge **Données manquantes** jusqu'à ce que vous ajoutiez les identifiants.

![Ajout d'un canal de vente WooCommerce : choisissez le type et renseignez l'URL de votre boutique, puis Enregistrer.](../../platforms/images/woocommerce/backoffice-add-channel.png)

### Authentifier le canal (consumer key et secret)
WooCommerce permet à MyParcel de lire vos commandes avec une **Consumer key** et un **Consumer secret** issus de son API REST.

1. Dans l'administration **WooCommerce**, allez dans **WooCommerce → Réglages → Avancé → API REST** et cliquez sur **Ajouter une clé**. Donnez-lui une description, réglez les **Permissions** sur *Lecture/Écriture* et générez la clé : WooCommerce n'affiche la Consumer key et le Consumer secret qu'une seule fois, copiez-les donc maintenant.
2. De retour dans le backoffice, ouvrez le canal et cliquez sur **Définir les identifiants**.
3. Dans la boîte de dialogue **Remplacer la clé et le secret**, collez la **Consumer key** et le **Consumer secret**.
4. Cliquez sur **Connecter**.

![La boîte de dialogue « Remplacer la clé et le secret » demande votre Consumer key et votre Consumer secret WooCommerce.](../../platforms/images/woocommerce/backoffice-credentials.png)

Une fois connecté, le badge **Données manquantes** disparaît, le canal affiche **Connecté** et MyParcel commence à synchroniser vos commandes WooCommerce.

::: warning Ça ne se connecte pas ?
Causes les plus fréquentes : un espace en trop collé avec la clé ou le secret · la clé de l'API REST a été créée en *Lecture* seule au lieu de *Lecture/Écriture* · l'**URL de la boutique** pointe vers une autre boutique ou il manque `https://`.
:::

## 3 · Connecter le plugin (clé API)
Ouvrez **WooCommerce → MyParcel**. En haut, vous voyez trois boutons, *Modifier la clé API*, *Modifier les webhooks*, *Options de débogage*, ainsi que le badge de statut.

![Barre de connexion MyParcel : Connecté à MyParcel + trois boutons d'action.](../../platforms/images/woocommerce/connection-bar.svg) La barre de connexion apparaît sur chaque page du plugin.

1. Cliquez sur **Modifier la clé API**.
2. Collez la clé de votre backoffice MyParcel.
3. Cliquez sur **Enregistrer**, en quelques secondes, le statut passe à *Connecté à MyParcel*.

::: warning Ça ne fonctionne pas ?
Causes les plus fréquentes : pas cliqué sur *Enregistrer* · un espace copié avant/après la clé · clé provenant d'une autre boutique · le plugin tourne sur un environnement différent (live vs sandbox) de votre compte MyParcel.
:::

### Que fait le plugin dans votre administration WordPress ?
| Où ? | Que pouvez-vous faire ? |
| --- | --- |
| **WooCommerce → MyParcel** | Page de réglages avec cinq onglets (Commandes, Étiquettes, Douane, Checkout, Transporteurs). |
| **WooCommerce → Commandes** | Colonne *MyParcel* supplémentaire par commande + actions groupées pour exporter et imprimer. |
| **Page détail de commande** | Bloc *MyParcel* pour définir transporteur/type de colis/assurance par commande et créer des étiquettes. |
| **Page détail du produit** | Onglet *MyParcel* dans *Données produit* pour les réglages spécifiques au produit. |

## 4 · Quel profil de boutique êtes-vous ?
Quatre profils typiques avec des réglages recommandés. Choisissez-en un, reprenez les réglages, puis affinez via [5 · Réglages](#5-rglages-commandes).

### Petite, quelques commandes par jour, NL uniquement
| Réglage | Recommandé | Pourquoi |
| --- | --- | --- |
| Mode commande | Activé | Commande complète vers MyParcel |
| Envois en concept | Activé | Vous gardez le contrôle pendant l'apprentissage |
| Traitement automatique | Aucun | Vous cliquez vous-même sur *Exporter* par commande |
| Format d'étiquette | A4 (4 par page) | Aucune imprimante d'étiquettes nécessaire |
| PostNL uniquement | Activé | Transporteur NL standard |
| Assurance, *Assurer à partir de €* | 250 | Les colis au-dessus de 250 € sont assurés automatiquement |

### Boutique active, 50+ commandes/jour
| Réglage | Recommandé | Pourquoi |
| --- | --- | --- |
| Envois en concept | Désactivé | Plus rapide, les étiquettes sont définitives immédiatement |
| Traitement automatique | *En cours* | Plus besoin de cliquer par commande |
| Format d'étiquette | A6 (imprimante d'étiquettes Zebra/Brother) | Impression plus rapide |
| Imprimer immédiatement | Activé | Flux d'impression sans clics |
| Export en masse | 2 à 3× par jour | Depuis la liste des commandes |
| Délai de traitement | 2 jours en période de pointe | Fenêtre réaliste pour le client |
| PostNL + DHL For You | Les deux activés | Large couverture |

### Boîte aux lettres uniquement, café, cartes, cosmétiques
| Réglage | Recommandé | Pourquoi |
| --- | --- | --- |
| Classe d'expédition `Boîte aux lettres` | À créer dans *WooCommerce → Expédition → Classes d'expédition* | Y associer les produits |
| *Checkout → Méthodes d'expédition autorisées* | Méthode → *Colis boîte aux lettres* | Une méthode par type de colis |
| Afficher les options de livraison | Désactivé | Pas de créneau horaire pour la boîte aux lettres |
| Assurance | Désactivé | Non disponible pour les colis boîte aux lettres |

### Bijoux coûteux / produits de grande valeur
| Réglage | Recommandé | Pourquoi |
| --- | --- | --- |
| Signature par défaut | Activé | Le livreur demande au client de signer |
| Destinataire uniquement par défaut | Activé | Pas de voisins |
| Assurance | À partir de 0 €, jusqu'à 2500 €, pourcentage 100 % | Couverture complète |
| Livraison le soir + points relais | Désactivé | Réduit les pertes/vols |
| Champs d'adresse séparés + widget Adresse | Activé | Minimise les fautes de frappe |

### Expédition à l'international
| Réglage | Recommandé | Pourquoi |
| --- | --- | --- |
| Partager les informations client | Activé | Le téléphone est requis pour la douane |
| Onglet Douane | À remplir entièrement | Code HS, pays d'origine, *Marchandises* |
| DHL Parcel Connect | Activé | Pour l'Europe |
| UPS / DHL Express | Activé | Pour le monde entier |

## 5 · Réglages · Commandes
Le premier et le plus important onglet, c'est ici que vous définissez comment les commandes circulent dans votre boutique.

![Onglet Commandes : Général, Automatisation du statut de commande, Track & Trace, Poids par défaut, Notes de commande.](../../platforms/images/woocommerce/bestellingen.jpg)

### Général
- **Mode commande**, Activé : commande complète (données client, lignes de produits, notes) vers MyParcel. Désactivé : uniquement une étiquette. *Recommandé activé*, à condition que *Importer les informations de commande* soit également activé dans MyParcel.
- **Envois en concept**, Activé : l'envoi reste en concept dans MyParcel. Désactivé : enregistré directement auprès du transporteur. *Activé pendant la configuration, désactivé une fois que tout fonctionne.*
- **Traitement automatique**, Quel statut WooCommerce déclenche un export automatique ? *Aucun* / *En attente de paiement* / *En cours* / *Terminée*. Commencez par *Aucun*.
- **Envoyer un e-mail de retour**, Le client reçoit automatiquement un lien de retour. *Recommandé pour la mode/les chaussures.*
- **Enregistrer l'adresse client dans le carnet d'adresses**, Les adresses arrivent dans votre carnet d'adresses MyParcel.
- **Partager les informations client**, E-mail + téléphone vers MyParcel. Nécessaire pour l'e-mail Track & Trace et obligatoire pour l'international. *Recommandé activé.*

### Automatisation du statut de commande
Laissez le statut de commande WooCommerce suivre automatiquement le processus d'expédition.

- **Statut de commande à la création de l'étiquette**, généralement *En cours*.
- **Statut de commande au scan de l'étiquette**, généralement *Terminée*.
- **Statut de commande à la livraison**, *Terminée* (si pas déjà avant).
- **Envoyer la notification après**, quelle transition de statut déclenche un e-mail WooCommerce.

### Track & Trace
- **Track & Trace dans l'e-mail**, lien dans la confirmation de commande WooCommerce. *Recommandé activé.*
- **Track & Trace dans le compte**, lien sur la page *Mon compte* du client.

### Poids par défaut
Chaque type de colis a un poids à vide. MyParcel l'ajoute au poids du produit.

| Type de colis | Poids à vide typique |
| --- | --- |
| Colis (carton brun) | 200 – 400 g |
| Petit paquet | 100 – 200 g |
| Colis boîte aux lettres | 50 – 100 g |
| Timbre numérique | 10 – 30 g |

### Notes de commande
- **Code-barres dans la note**, le code Track & Trace comme note de commande.
- **Titre du code-barres dans la note**, préfixe avant le code. Par défaut : `Track & Trace code:`.

## 6 · Réglages · Étiquettes
Tout ce qui concerne l'étiquette elle-même : texte, format et comportement d'impression.

![Onglet Étiquettes : Description (avec variables), Imprimer immédiatement, Demander la position de l'étiquette, Sortie d'étiquette et Format d'étiquette.](../../platforms/images/woocommerce/labels-tab.svg)

### Description sur l'étiquette
Les variables sont remplies automatiquement lors de la création de l'étiquette :

| Variable | Devient |
| --- | --- |
| `[DELIVERY_DATE]` | Date de livraison |
| `[ORDER_ID]` | Numéro de commande WooCommerce |
| `[PRODUCT_ID]` | ID du produit |
| `[PRODUCT_NAME]` | Nom du produit |
| `[PRODUCT_QTY]` | Quantité |
| `[PRODUCT_SKU]` | SKU |
| `[CUSTOMER_NOTE]` | Note du client |

**Exemples :** `Order [ORDER_ID]` · `[ORDER_ID] · [PRODUCT_QTY]× [PRODUCT_NAME]`

### Comportement d'impression
- **Imprimer immédiatement**, affiche le PDF directement après l'export.
- **Demander la position de l'étiquette**, demande à chaque fois quelles positions utiliser sur une feuille A4.

### Valeurs par défaut
- **Sortie d'étiquette**, *Ouvrir dans un nouvel onglet* (impression manuelle via le navigateur) ou *Télécharger l'étiquette*.
- **Format d'étiquette**, *A4 (4 par page)* pour une imprimante standard, *A6 (imprimante d'étiquettes)* pour Zebra/Brother.

## 7 · Réglages · Douane
Obligatoire pour les envois hors UE (Royaume-Uni, Suisse, États-Unis, Norvège, Canada…). Ces valeurs apparaissent sur le formulaire CN22/CN23 attaché à l'étiquette.

![Onglet Douane avec trois champs : Contenu du colis, Code HS, Pays d'origine.](../../platforms/images/woocommerce/douane-tab.svg)

- **Contenu du colis**, *Marchandises* (par défaut pour les boutiques en ligne), *Documents*, *Cadeau*, *Échantillon commercial*, *Envoi de retour*.
- **Code HS**, code douanier harmonisé. À rechercher sur [tarief.douane.nl](https://tarief.douane.nl). Exemples : `6109.10` (T-shirts), `9503.00` (jouets), `3304.99` (maquillage).
- **Pays d'origine**, d'où provient le produit (pas l'endroit où vous le stockez).

## 8 · Réglages · Checkout
Ce que votre client voit et peut choisir lors du paiement.

![Onglet Checkout : champs d'adresse, widget des options de livraison, mapping des méthodes d'expédition, affichage des prix, points relais.](../../platforms/images/woocommerce/checkout-tab.svg)

### Champs d'adresse
- **Utiliser des champs d'adresse séparés**, divise Rue en Rue + Numéro + Complément. *Recommandé activé*, cela évite les colis non livrables.
- **Widget Adresse MyParcel (BÊTA)**, autocomplétion pour code postal NL + numéro de maison.

### Options de livraison
- **Afficher les options de livraison**, interrupteur principal du widget de commande. *Recommandé activé.*
- **Afficher les options de livraison pour les commandes en attente**, afficher aussi pour les produits en rupture de stock.
- **Position dans la commande**, *Après l'adresse de facturation*, *Après l'adresse de livraison*, ou *Après la note de commande*.
- **Méthodes d'expédition autorisées**, associez chaque méthode d'expédition WooCommerce à un type de colis (*Par défaut*, *Colis*, *Petit paquet*, *Colis boîte aux lettres*, *Timbre numérique*, *Non affranchi*). *Une méthode = un type de colis.*
- **Type de prix**, *Inclus* (prix total) ou *Supplément* (uniquement la différence).
- **Titre des options de livraison**, en-tête au-dessus du widget.
- **CSS personnalisé**, votre propre style.

### Points relais
- **Affichage par défaut**, *Carte* ou *Liste*.
- **Les utilisateurs peuvent basculer entre liste et carte**, *Recommandé activé.*
- **Exclure les consignes à colis**, masque les consignes sans personnel.
- **Jours de fermeture**, jours où vous n'expédiez pas.

## 9 · Réglages · Transporteurs
Chaque transporteur a son propre sous-onglet. Lesquels apparaissent dépend de ce que vous avez activé sur votre compte MyParcel.

![Sous-onglets des transporteurs : CheapCargo, DPD, UPS, DHL Europlus, DHL Parcel Connect, PostNL (actif), GLS, DHL For You.](../../platforms/images/woocommerce/carrier-subtabs.svg)

::: tip Tous les transporteurs sont structurés de la même façon
Ci-dessous, je détaille **PostNL** à titre d'exemple, DHL For You, DHL Parcel Connect, DPD, UPS, GLS et Trunkrs fonctionnent de manière identique (chacun avec ses propres options spécifiques).
:::

### Réglages d'export par défaut
- **Activer le contrôle d'âge (18+)**, obligatoire pour l'alcool/le tabac.
- **Activer la signature**, le livreur demande une signature.
- **Activer destinataire uniquement**, pas de voisins.
- **Activer le retour direct**, non livré, renvoyé directement chez vous.
- **Activer plus grand que 100 × 70 × 58 cm**, grands colis (supplément).
- **Activer tracked** / **Activer le code de réception**, options de suivi supplémentaires.

### Assurance
- **Activer l'assurance**, interrupteur principal.
- **Assurer à partir de (€)**, montant seuil.
- **Assurer jusqu'à**, couverture maximale NL.
- **Assurer jusqu'à (UE)** / **(UE + Reste du monde)**, maximums par région.
- **Assurer pour un pourcentage**, par ex. 100 % de la valeur de la commande.

::: details Options de livraison, tous les champs
**Options de livraison à domicile**
- **Activer la livraison à domicile**, interrupteur principal.
- **Fenêtre de jours de livraison**, de 1 à 14 jours à l'avance.
- **Délai de traitement**, jours ouvrés entre la commande et le dépôt.
- **Heure limite**, configurable par jour.
- **Options d'expédition**, cochez les jours où vous expédiez.

**Moments de livraison**
- **Livraison standard** + prix de la livraison standard.
- **Livraison le matin** + prix de la livraison le matin.
- **Livraison le soir** + prix de la livraison le soir.
- **Livraison le lundi** + prix de la livraison le lundi.

**Options d'expédition**
- **Destinataire uniquement** + supplément.
- **Signature** + supplément.
- **Autoriser Prio (24 heures)** + supplément, livraison express.

**Options de points relais**
- **Activer les points relais**.
- **Prix du point relais**, positif = supplément, négatif = réduction.
:::

::: warning N'oubliez pas d'enregistrer
Cliquez toujours sur **Enregistrer** en bas de chaque onglet de transporteur avant de passer à un autre onglet.
:::

## 10 · Réglages produit
Chaque produit possède un onglet **MyParcel** supplémentaire sous *Données produit*. Vous y remplacez, par produit, les réglages globaux de [Transporteurs](#9-rglages-transporteurs) et [Douane](#7-rglages-douane). Chaque champ a une icône de cadenas 🔒, cliquez pour l'ouvrir et le détacher de la valeur globale.

![Données produit → onglet MyParcel avec type de colis, En boîte aux lettres, options de livraison, options de douane et d'export.](../../platforms/images/woocommerce/product-tab.svg)

### Options MyParcel
- **Type de colis**, remplace le type de colis par défaut pour ce produit.
- **En boîte aux lettres**, combien d'exemplaires de ce produit tiennent ensemble dans un seul colis boîte aux lettres. `-1` = pas boîte aux lettres. Exemple : des autocollants dont 50 tiennent dans un colis boîte aux lettres → réglez `50`. Si un client en commande 51, la commande devient automatiquement un Colis.

### Options de livraison du produit
- **Retarder l'expédition**, jours ouvrés supplémentaires avant que ce produit puisse partir. Pour le sur-mesure, les entrepôts externes, etc.
- **Désactiver les options d'expédition**, masque tout le widget de livraison MyParcel lors du paiement quand ce produit est dans le panier. Pour les produits virtuels ou les cartes cadeaux.
- **Exclure les consignes à colis**, masque les consignes DHL/PostNL comme point relais pour ce produit.

### Options de douane du produit
- **Pays d'origine**, plus précis que la valeur globale. Par ex. globalement *Pays-Bas*, produit en dropshipping *Chine*.
- **Code douanier (code HS)**, code HS spécifique au produit.

### Options d'export du produit (toutes avec substitution par cadenas)
- **Activer le contrôle d'âge (18+)**, par ex. pour l'alcool.
- **Activer le retour direct**, non livré, retour direct.
- **Activer l'assurance**, toujours assurer ce produit.
- **Activer plus grand que 100 × 70 × 58 cm ou plus lourd que 23 kg**, pour les articles surdimensionnés.
- **Activer destinataire uniquement** / **Activer la signature** / **Activer Prio (24 heures)**.
- **Activer tracked** / **Activer le code de réception**.
- **Livraison fraîche** / **Livraison congelée**, pour les boutiques alimentaires.

::: tip L'icône de cadenas 🔒
Cadenas fermé = le produit utilise le réglage global. Cadenas ouvert = la valeur spécifique au produit est active.
:::

## 11 · La liste des commandes
Sur **WooCommerce → Commandes**, le plugin ajoute une colonne *MyParcel* et des actions groupées. D'un coup d'œil, vous voyez si chaque commande a été créée et quel est son statut.

![Liste des commandes avec colonne MyParcel supplémentaire, code-barres + bouton Imprimer sur les commandes exportées, bouton Exporter sur les nouvelles.](../../platforms/images/woocommerce/orderlist-column.svg)

### Actions groupées
Cochez des commandes et choisissez dans le menu déroulant *Actions groupées* :

- **MyParcel : Exporter**, crée les envois chez MyParcel (concept ou direct).
- **MyParcel : Exporter et imprimer**, comme ci-dessus, plus un PDF combiné.

::: tip Flux en masse pour 50+ commandes/jour
Traitez toutes vos commandes du jour en un clic. Combinez avec *Traitement automatique* sur *En cours* et le plugin fonctionne presque entièrement tout seul.
:::

## 12 · La page détail de commande
Sur la page détail d'une commande individuelle apparaît un bloc **MyParcel** dans lequel vous affinez toutes les options d'expédition de cette commande.

![Bloc MyParcel sur la page détail de commande avec boutons radio pour transporteur, type de colis, mode de livraison, nombre d'étiquettes, assurance et quatre boutons d'action.](../../platforms/images/woocommerce/order-metabox.svg)

### Que contient le bloc ?
- **Transporteur**, bouton radio avec tous les transporteurs disponibles. MyParcel choisit automatiquement le plus adapté ; vous pouvez le remplacer par commande.
- **Type de colis**, remplacer pour cette commande (par ex. colis boîte aux lettres pour une petite commande).
- **Mode de livraison**, *Livraison standard* ou *Retrait* à un point relais.
- **Nombre d'étiquettes**, répartir une grande commande sur plusieurs colis ? Réglez `2` ou `3`.
- **Assurance**, remplace les règles globales pour cette commande.
- **Livraison le samedi** / **Signature requise**, interrupteurs avec cadenas.

### Les quatre boutons d'action
- **Enregistrer**, enregistre les réglages sans enregistrer l'envoi.
- **Exporter**, enregistre l'envoi auprès de MyParcel. Génère un code-barres.
- **Imprimer**, imprime l'étiquette d'un envoi déjà exporté.
- **Exporter et imprimer**, tout en un clic.

### Le tableau des étiquettes au bas du bloc
Dès qu'une commande a été exportée, un tableau avec toutes les étiquettes apparaît sous les boutons.

![Tableau des étiquettes sous le bloc MyParcel : Track & Trace, Statut, Dernière mise à jour, Actions.](../../platforms/images/woocommerce/labels-table.svg)

::: tip Menu déroulant Actions par étiquette
*Réimprimer l'étiquette* · *Générer une étiquette de retour* · *Annuler l'envoi* (uniquement possible tant que le colis n'a pas encore été scanné par le transporteur).
:::

## 13 · L'expérience de commande
Ce que votre client voit une fois l'adresse de livraison remplie, apparaît dès qu'au moins un transporteur est activé et que la méthode d'expédition WooCommerce est associée à un type de colis MyParcel ([§8](#8-rglages-checkout)).

Le client choisit un transporteur et un moment de livraison depuis un **carrousel de dates**, un **créneau horaire** et des **options supplémentaires** facultatives (signature, destinataire uniquement). Sous la livraison à domicile apparaît un bloc **Retrait à un point relais** avec une carte interactive, les horaires d'ouverture et une bascule liste/carte.

## 14 · Utilisation quotidienne

### Workflow 1, par commande
1. Ouvrez *WooCommerce → Commandes* et cliquez sur une commande.
2. En bas : le bloc **MyParcel** → choisissez transporteur, type de colis, etc.
3. Cliquez sur **Exporter et imprimer**.
4. Le PDF s'ouvre ou se télécharge, collez l'étiquette sur le colis.

### Workflow 2, en masse (10+ commandes/jour)
1. Depuis la liste des commandes, cochez des commandes.
2. *Actions groupées* → **MyParcel : Exporter et imprimer**.
3. Cliquez sur *Appliquer*. Un seul PDF combiné avec toutes les étiquettes.

::: tip Quand vous êtes facturé
Vous n'êtes facturé qu'une fois qu'un envoi est réellement remis au transporteur. Les timbres numériques font exception, ils sont facturés immédiatement à l'export.
:::

### Retours
Trois façons, de la plus à la moins automatisée :

1. **E-mail de retour automatique**, *Commandes → Général → Envoyer un e-mail de retour* activé. À chaque export, le client reçoit un lien de retour.
2. **Étiquette de retour manuelle**, dans le bloc MyParcel de la commande, choisissez *Générer un retour*. Envoyez vous-même l'étiquette au client.
3. **Portail de retour**, activez-le dans votre backoffice MyParcel. Le client se rend sur une URL, saisit le numéro de commande et obtient une étiquette instantanément.

## 15 · Quelque chose ne fonctionne pas, diagnostic
Quelque chose ne se comporte pas comme prévu ? Parcourez ce tableau de haut en bas, trois problèmes sur quatre sont résolus en 5 minutes.

| Symptôme | Que vérifier |
| --- | --- |
| **Aucun badge de statut ou *Non connecté*** | (1) Plugin activé ? (2) WooCommerce 7.0+ et PHP 8.1+ ? (*WooCommerce → Statut*) (3) Cache serveur, LiteSpeed/Redis et navigateur vidés ? |
| **Le widget n'apparaît pas lors de la commande** | (1) [§8](#8-rglages-checkout) : *Afficher les options de livraison* activé ? (2) Chaque méthode d'expédition associée à un type de colis ? (3) Commande shortcode standard (`[woocommerce_checkout]`) ? (4) Erreur JS dans la console du navigateur (F12) ? |
| **Les étiquettes ne sont pas créées** | (1) Badge de statut toujours vert ? (2) La commande a-t-elle une adresse d'expédition + client ? (3) Méthode d'expédition présente (le retrait local ne compte pas) ? (4) Poids du produit renseigné ? (5) Message d'erreur sur l'envoi dans le backoffice MyParcel ? |
| **Track & Trace pas dans l'e-mail** | (1) [§5](#5-rglages-commandes) : *Track & Trace dans l'e-mail* activé ? (2) Commande déjà exportée ? Sans code-barres, pas de lien. (3) Mail envoyé ? (*WooCommerce → Statut → Journaux*) (4) Dossier spam du client ? |
| **Mauvaise adresse sur l'étiquette** | (1) Activez *Utiliser des champs d'adresse séparés* ([§8](#8-rglages-checkout)). (2) Utilisez le *widget Adresse MyParcel* pour NL. (3) L'étiquette affiche l'*adresse de livraison*, pas l'adresse de facturation. |
| **Tout devient Colis, jamais Boîte aux lettres** | (1) [§8](#8-rglages-checkout) : la méthode boîte aux lettres ne doit pas non plus se trouver sous *Colis*. (2) Une méthode d'expédition = un type de colis. (3) Utilisez les classes d'expédition pour associer les produits aux types de colis. |
| **Conflit avec une autre extension** | Désactivez les autres extensions d'expédition/de commande une par une pour isoler le problème. Les extensions de vérification de code postal peuvent scinder les champs rue/numéro que MyParcel attend. |

## 16 · FAQ

### Le plugin est-il payant ?
Non. Vous payez uniquement les envois via MyParcel.

### Puis-je lier deux comptes MyParcel à une seule boutique WooCommerce ?
Pas d'origine, une clé API par boutique. Pour deux marques : gérez deux boutiques WooCommerce séparées.

### Comment modifier l'adresse d'expéditeur sur l'étiquette ?
Cela se règle dans votre backoffice MyParcel (*Réglages de la boutique → Général → Détails de l'adresse*), pas dans le plugin. Les modifications s'appliquent immédiatement.

### Quels statuts pour le « Traitement automatique » ?
Mollie/iDEAL ? Les commandes passent directement à *En cours*. Virement bancaire et traitement manuel ? *Terminée*.

### Puis-je imprimer plus de 4 étiquettes par A4 ?
Non, l'A4 est toujours 4 par page. Envisagez une imprimante d'étiquettes A6 à partir de 20+ commandes/jour.

### Cela fonctionne-t-il avec Afterpay/Klarna ?
Oui, MyParcel est indépendant de votre prestataire de paiement.

### Le client choisit un point relais, comment le voir sur l'étiquette ?
Le point relais est envoyé automatiquement comme adresse du destinataire à MyParcel.

### La livraison le soir n'est pas visible pour certaines adresses
Dépend de l'adresse, c'est déterminé par le transporteur, pas par le plugin.

### Je vois des onglets DPD en double
Ce n'est pas un bug, MyParcel distingue deux contrats DPD. N'activez que votre contrat actif.

### Puis-je faire enlever les colis par le transporteur ?
Oui, sous *Transporteurs → \[transporteur\] → Activer l'enlèvement par le transporteur*.

### J'ai mis à jour le plugin et maintenant quelque chose ne fonctionne plus
Revenez en arrière via [WP Rollback](https://wordpress.org/plugins/wp-rollback/) ou la version GitHub. Signalez le bug sur [github.com/myparcelnl/woocommerce/issues](https://github.com/myparcelnl/woocommerce/issues).

## Ressources & support
- [github.com/myparcelnl/woocommerce ↗](https://github.com/myparcelnl/woocommerce), code source, versions, issues.
- [wordpress.org/plugins/woocommerce-myparcel ↗](https://wordpress.org/plugins/woocommerce-myparcel/), fiche du plugin.
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), compte, clé API, facturation.
- [Contacter le support MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).
