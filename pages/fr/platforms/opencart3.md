---
title: OpenCart 3
description: "Connectez votre boutique OpenCart 3 à MyParcel avec l'extension MyParcel NL. Couvre l'installation du module, du mode d'expédition et de l'order total, la saisie de votre clé API, les réglages d'export par défaut, les options de livraison PostNL au checkout, l'export des commandes et l'impression des étiquettes depuis la liste des commandes, les étiquettes de retour et un tableau de diagnostic."
---

::: tip En bref
L'extension **MyParcel NL** connecte votre boutique OpenCart 3 à MyParcel. Vous exportez les commandes et imprimez les étiquettes PostNL directement depuis la liste des commandes d'OpenCart, vos clients peuvent choisir au checkout un moment de livraison ou un point relais PostNL, et le code Track & Trace peut être ajouté à l'e-mail de commande. L'extension comporte trois parties : un **Module** avec tous les réglages, un **Mode d'expédition** pour le checkout et un **Order Total** qui ajoute à la commande le supplément des options de livraison.
:::

::: warning Extension ancienne
Ce manuel décrit la version **1.1.17**, conçue pour OpenCart 3.0.x et testée sur OpenCart 3.0.2.0 avec PHP jusqu'à 8.2. L'extension ne prend en charge **que PostNL**. Le nouveau développement de MyParcel porte sur l'[extension OpenCart 4](./opencart.md) : si vous lancez une nouvelle boutique, partez sur OpenCart 4.
:::

## Démarrage rapide, votre première étiquette en 20 minutes
De quoi expédier votre première commande dès aujourd'hui. Pour les détails, voir [Que cherchez-vous ?](#que-cherchez-vous) ci-dessous.

1. **Compte.** Vous n'avez pas encore de compte MyParcel ? Créez-en un sur [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Copiez la clé API.** Connectez-vous à [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Paramètres de la boutique → Intégration* → copiez la clé API.
3. **Installez l'extension.** Téléchargez le fichier `.ocmod.zip` depuis la [dernière version](https://github.com/myparcelnl/opencart3/releases/latest), envoyez-le sous **Extensions → Installer** et cliquez sur **Refresh** sous **Extensions → Modifications**.
4. **Activez les trois parties.** Sous **Extensions → Extensions**, installez **Myparcel NL** (type *Modules*), **MyParcel Shipping** (type *Shipping*) et **MyParcel Total** (type *Order Total*).
5. **Collez la clé.** Ouvrez **System → MyParcel**, collez la clé dans **API** sur l'onglet **General** et enregistrez.
6. **Imprimez une étiquette.** Dans **Sales → Orders**, cliquez sur **Export to MyParcel** à côté d'une commande, puis sur **Print MyParcel label**.

::: tip C'est terminé lorsque vous voyez ceci
- Le PDF de l'étiquette se télécharge ou s'ouvre dans un nouvel onglet
- La commande affiche un code Track & Trace et un statut comme *pending - registered*
- L'envoi apparaît dans votre back-office MyParcel
:::

## Que cherchez-vous ?
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Comprendre les trois parties | [1 · Comment fonctionne l'extension](#1-comment-fonctionne-lextension) |
| Installer l'extension | [2 · Installation](#2-installation) |
| Saisir la clé API et les réglages généraux | [3 · Réglages · General](#3-rglages-general) |
| Choisir les types de colis et les options par défaut | [4 · Réglages · Default export settings](#4-rglages-default-export-settings) |
| Proposer des moments de livraison et des points relais | [5 · Réglages · Checkout](#5-rglages-checkout) |
| Définir les codes SH pour la douane | [6 · Réglages produit](#6-rglages-produit) |
| Voir ce que voient vos clients | [7 · L'expérience au checkout](#7-lexprience-au-checkout) |
| Exporter des commandes et imprimer des étiquettes | [8 · Utilisation au quotidien](#8-utilisation-au-quotidien) |
| Quelque chose ne fonctionne pas | [9 · Un problème, diagnostic](#9-un-problme-diagnostic) |
| Réponse à une question fréquente | [10 · FAQ](#10-faq) |

## 1 · Comment fonctionne l'extension
L'extension se compose de trois parties. Il vous faut les trois pour profiter de toutes les fonctions.

| Partie | Où | Ce qu'elle fait |
| --- | --- | --- |
| **Myparcel NL** | *Extensions → Extensions → Modules* | Tous les réglages, et les actions MyParcel dans la liste des commandes. Accessible aussi via **System → MyParcel**. |
| **MyParcel Shipping** | *Extensions → Extensions → Shipping* | Le mode d'expédition que votre client choisit au checkout. Les options de livraison MyParcel s'affichent à l'intérieur. |
| **MyParcel Total** | *Extensions → Extensions → Order Total* | Ajoute au total de la commande le supplément de l'option de livraison choisie, comme la livraison du soir. |

Depuis la liste des commandes, vous envoyez une commande à MyParcel (*export*) et l'extension télécharge l'étiquette PostNL. Le code Track & Trace est enregistré sur la commande et peut être ajouté à l'e-mail envoyé à votre client.

## 2 · Installation
1. **Faites une sauvegarde** de votre boutique, ou essayez d'abord l'extension sur une copie.
2. Téléchargez `myparcel_opencart_3.0.2.0_v1.1.17.ocmod.zip` depuis les [versions MyParcel pour OpenCart 3](https://github.com/myparcelnl/opencart3/releases/latest).
3. Allez dans **Extensions → Installer**, cliquez sur **Upload** et choisissez le fichier zip.
4. Allez dans **Extensions → Modifications** et cliquez sur **Refresh** (le bouton bleu en haut à droite). Sans cette étape, l'extension ne fonctionne pas.
5. Allez dans **Extensions → Extensions** et installez les trois parties avec le bouton vert **+** :
   - choisissez *Modules* et installez **Myparcel NL** ;
   - choisissez *Shipping* et installez **MyParcel Shipping** ;
   - choisissez *Order Total* et installez **MyParcel Total**.

![La liste des extensions d'expédition avec MyParcel Shipping, le bouton de modification et le bouton vert d'installation.](../../platforms/images/opencart3/08-extensions-shipping.png)

Cliquez ensuite sur le crayon à côté de **MyParcel Shipping** et vérifiez les réglages :

![Les réglages de MyParcel Shipping : titre, coût, classe de taxe, statut et ordre de tri.](../../platforms/images/opencart3/14-shipping-method.png)

| Réglage | Ce qu'il fait |
| --- | --- |
| **Title** | Le nom du mode d'expédition au checkout. |
| **Cost** | Les frais d'expédition de base. Les suppléments des options de livraison s'y ajoutent. |
| **Tax Class** | La classe de taxe des frais d'expédition. |
| **Status** | Réglez sur **Enabled** pour afficher le mode au checkout. |
| **Sort Order** | La position parmi vos autres modes d'expédition. |

Enfin, vérifiez que **MyParcel Total** est activé sous *Order Total*. Son ordre de tri détermine où le supplément apparaît dans les totaux.

![La liste des extensions Order Total avec MyParcel Total.](../../platforms/images/opencart3/09-extensions-order-total.png)

::: warning Shipping n'est pas la page des réglages
Le crayon à côté de **MyParcel Shipping** n'affiche que les champs ci-dessus. Tous les autres réglages se trouvent dans le module : **System → MyParcel**, ou le crayon à côté de **Myparcel NL** sous *Modules*.
:::

## 3 · Réglages · General
Ouvrez **System → MyParcel**. La page des réglages comporte trois onglets : **General**, **Default Export Settings** et **Checkout**. Cliquez sur le bouton bleu d'enregistrement en haut à droite après chaque modification.

![L'onglet General avec la clé API, le dossier admin, l'affichage de l'étiquette et le format de papier.](../../platforms/images/opencart3/01-general-api.png)

| Réglage | Ce qu'il fait | Recommandé |
| --- | --- | --- |
| **API** | Votre clé API MyParcel, depuis [backoffice.myparcel.nl](https://backoffice.myparcel.nl) sous *Paramètres de la boutique → Intégration*. | Collez-la sans espaces. |
| **Admin folder** | Le nom de votre dossier admin OpenCart. Ne le modifiez que si vous avez renommé ce dossier. | `admin` |
| **Label display** | **Download PDF** enregistre l'étiquette, **Open de PDF in a new tab** l'ouvre dans votre navigateur. | Selon votre préférence. |
| **Paper format** | **A4** pour une imprimante classique, **A6** pour une imprimante d'étiquettes. En A4, vous choisissez la position sur la feuille au moment d'imprimer. | A6 avec une imprimante d'étiquettes. |

![La suite de l'onglet General : Track & Trace, traitement, statut de commande, champs d'adresse et journal.](../../platforms/images/opencart3/02-general-settings.png)

| Réglage | Ce qu'il fait | Quand l'activer |
| --- | --- | --- |
| **Track&trace in email** | Ajoute le code Track & Trace à l'e-mail de commande envoyé au client. | Si vous voulez qu'OpenCart envoie le code. Désactivez alors l'e-mail Track & Trace dans votre back-office MyParcel, sinon votre client reçoit deux e-mails. |
| **Track&trace in My Account** | Affiche le code et un lien sur la commande dans le compte du client. | Recommandé. |
| **Process shipments directly** | Enregistre l'envoi auprès de PostNL dès l'export, pour que l'étiquette et le code Track & Trace soient prêts tout de suite. Désactivé, l'envoi reste en brouillon dans votre back-office MyParcel. | Si vous imprimez les étiquettes directement depuis OpenCart. |
| **Order status automation** | Passe la commande à un statut de votre choix après un export réussi. | Si vous l'utilisez avec *Track&trace in email*, activez aussi *Process shipments directly*, sinon l'e-mail part sans code. |
| **Keep old shipments** | Conserve sur la commande les liens Track & Trace des envois précédents quand vous l'exportez à nouveau. | Si vous expédiez parfois une commande en plusieurs fois. |
| **Use addition address as number suffix** | La façon dont la rue, le numéro et le complément sont lus dans les champs d'adresse : les deux champs comme adresse complète, le champ 1 pour la rue et le champ 2 pour le numéro, ou un troisième champ pour le complément. | Alignez-le sur la façon dont votre checkout demande l'adresse. |
| **Log API communication** | Écrit les échanges avec MyParcel dans un fichier journal, que vous téléchargez avec **Download log file**. | Seulement pendant la résolution d'un problème. |

## 4 · Réglages · Default export settings
Ces réglages sont les valeurs par défaut de chaque envoi que vous exportez. Vous pouvez les modifier par commande avant l'export, voir [§8](#8-utilisation-au-quotidien).

![Les types de colis avec les modes d'expédition associés, le code SH, le pays d'origine et les réglages pour l'e-mail et le téléphone du client.](../../platforms/images/opencart3/03-export-package-types.png)

### Types de colis
Sous **Package Types**, vous associez vos modes d'expédition OpenCart à un type de colis MyParcel. Les commandes avec **MyParcel Shipping** sont toujours un **Parcel** (colis). Pour chaque autre type, choisissez un ou plusieurs modes d'expédition, par exemple *Flat Rate* :

| Type de colis | Quand l'utiliser |
| --- | --- |
| **Mailbox package** (Colis boîte aux lettres) | Articles petits et plats qui passent par la boîte aux lettres. |
| **Unpaid letter** (Étiquette non affranchie) | Une étiquette sans affranchissement. |
| **Digital Stamp** (Timbre numérique) | Lettres avec un timbre numérique. Choisissez la tranche de poids sous **Default Weight**. |

### Douane et coordonnées
- **Default HS code** et **The country of origin**. Utilisés pour les envois hors UE lorsqu'un produit n'a pas ses propres valeurs, voir [§6](#6-rglages-produit).
- **Connect customer email**. Transmet l'adresse e-mail de votre client avec l'envoi, pour que MyParcel puisse envoyer l'e-mail Track & Trace. Vous activez ou désactivez cet e-mail dans votre back-office MyParcel.
- **Connect customer phone**. Transmet le numéro de téléphone, pour que le transporteur puisse joindre votre client. Cela aide beaucoup pour les envois à l'étranger.

### Options d'envoi
![Les options d'envoi par défaut : très grand format, adresse du domicile uniquement, signature, contrôle de l'âge, retour en cas d'absence, assurance et la description de l'étiquette.](../../platforms/images/opencart3/04-export-options.png)

Chaque option est ajoutée à chaque colis que vous exportez. Les options peuvent coûter un supplément, consultez vos tarifs MyParcel. Les prix affichés à côté des libellés dans l'extension proviennent d'une ancienne grille tarifaire.

| Réglage | Ce qu'il fait |
| --- | --- |
| **Extra large size** (Très grand format) | Pour les colis plus grands que le format standard. |
| **Home address only** (Adresse du domicile uniquement) | Le colis n'est livré qu'à l'adresse du destinataire, jamais chez les voisins. |
| **Signature on delivery** (Signature à la livraison) | Le destinataire signe pour le colis. |
| **Age check** (Contrôle de l'âge) | Le livreur vérifie que le destinataire a au moins 18 ans. |
| **Return if no answer** (Retour en cas d'absence) | S'il n'y a personne, le colis vous revient au lieu d'aller dans un point relais. |
| **Insured shipment** (Envoi assuré) | Assure la valeur d'achat. Un colis assuré comprend toujours l'adresse du domicile uniquement et la signature à la livraison. |
| **Label description** (Description de l'étiquette) | Texte imprimé en haut à gauche de l'étiquette. Utilisez `[ORDER_NR]` pour imprimer le numéro de commande et pouvoir le rechercher dans votre back-office MyParcel. |

## 5 · Réglages · Checkout
L'onglet **Checkout** détermine les options de livraison PostNL que vos clients peuvent choisir. Cochez **Enable MyParcel delivery options** pour voir tous les réglages.

![L'onglet Checkout avec les options de livraison activées : deux colonnes de prix selon le sous-total et les options avec un prix par colonne.](../../platforms/images/opencart3/05-checkout-options.png)

### Options de livraison et suppléments
Cochez chaque option que vous voulez proposer. Une option cochée reçoit deux champs de prix, un par colonne **Subtotal**. Les deux lignes *Subtotal* fixent la plage de montant de commande de chaque colonne : vous pouvez par exemple faire payer la livraison du soir sur les petites commandes et l'offrir à partir de 50 €.

| Option | Ce que reçoit votre client |
| --- | --- |
| **Standard delivery** (Livraison standard) | Livraison en journée. |
| **Morning delivery** (Livraison le matin) | Livraison le matin. |
| **Evening delivery** (Livraison le soir) | Livraison le soir. |
| **Signature on delivery** (Signature à la livraison) | Votre client peut demander une signature à la livraison. |
| **Home address only** (Adresse du domicile uniquement) | Votre client peut choisir la livraison à l'adresse du domicile uniquement. |
| **PostNL pickup** (Retrait PostNL) | Retrait dans un point PostNL proche. |
| **Early PostNL pickup** (Retrait PostNL matinal) | Retrait dans un point PostNL dès le petit matin. |
| **Belgium pickup** (Retrait en Belgique) | Options de livraison pour les clients en Belgique, avec un tarif pour la livraison standard et un pour le retrait. |

Avec **Mailbox options**, votre client peut choisir un colis boîte aux lettres au checkout. Vous définissez un titre, un prix et le poids maximal.

### Paramètres de traitement
![Les jours de dépôt, l'heure limite, le délai de traitement, la fenêtre de jours de livraison et les réglages d'affichage.](../../platforms/images/opencart3/06-checkout-processing.png)

| Réglage | Ce qu'il fait |
| --- | --- |
| **Dropoff days** (Jours de dépôt) | Les jours où vous remettez les colis à PostNL. Vide signifie du lundi au vendredi. |
| **Cut-off time** (Heure limite) | L'heure à laquelle vous arrêtez de traiter les commandes du jour, au format `hh:mm`. Vide signifie 15:30. Cochez **Weekdays** pour définir une heure différente par jour. |
| **Dropoff delay** (Délai de traitement) | Le nombre de jours, de 0 à 14, dont vous avez besoin avant qu'une commande parte chez PostNL. |
| **Delivery days window** (Fenêtre de jours de livraison) | Le nombre de jours dont votre client peut reporter la livraison. **Obligatoire** dès que les options de livraison sont activées, sinon l'enregistrement échoue. |

Les réglages sous **Only apply for Xtension Best Checkout** (format de distance, arrondi, texte affiché pour un prix de 0 et format de l'heure) ne servent qu'avec l'extension Xtensions Best Checkout.

### Personnalisation
![Couleur de base, couleur de mise en avant, style personnalisé et Google Fonts.](../../platforms/images/opencart3/07-checkout-customizations.png)

**Base color** et **Highlight color** définissent les couleurs des options de livraison, **Custom style** accepte votre propre CSS, et **Automatically load Google fonts** charge les polices utilisées par les options de livraison.

## 6 · Réglages produit
L'extension ajoute à chaque produit un onglet **My parcel** avec deux champs pour les envois hors UE.

![L'onglet My parcel d'un produit, avec HS Code et Country Code.](../../platforms/images/opencart3/10-product-myparcel.png)

- **HS Code**. Le code douanier du produit.
- **Country Code**. Le pays d'origine, par exemple `NL`.

Les champs vides reprennent les valeurs par défaut du [§4](#douane-et-coordonnes).

## 7 · L'expérience au checkout
Avec les options de livraison activées, votre client voit les options PostNL sous *Delivery Method* au checkout, à l'intérieur de **MyParcel Shipping**. Les options s'affichent en néerlandais.

![Le checkout avec le jour de livraison, les créneaux pour la livraison à domicile et l'option de signature.](../../platforms/images/opencart3/15-checkout-delivery.png)

Sous *Thuis of op het werk bezorgd* (Livré à domicile ou au travail), votre client choisit un jour et un créneau, ainsi que les options supplémentaires que vous avez activées, comme la signature à la livraison.

![Le checkout avec un point relais PostNL choisi, son heure d'ouverture et son adresse.](../../platforms/images/opencart3/16-checkout-pickup.png)

Sous *Ophalen bij een PostNL locatie* (Retrait dans un point PostNL), votre client choisit un point relais. Le crayon ouvre la liste des points proches.

Le choix est enregistré sur la commande et repris lors de l'export.

## 8 · Utilisation au quotidien
L'extension ajoute des actions MyParcel dans **Sales → Orders**.

![La liste des commandes avec les boutons groupés en haut et la colonne MyParcel avec les icônes d'export, d'étiquette et de retour.](../../platforms/images/opencart3/11-orders-list.png)

### Une commande
1. Dans la colonne **Ship To**, cliquez sur le type de colis, par exemple **Parcel**, pour vérifier ou modifier l'envoi.
2. Dans la colonne **MyParcel**, cliquez sur **Export to MyParcel**.
3. Cliquez sur **Print MyParcel label** pour télécharger ou ouvrir l'étiquette.

![La fenêtre d'envoi avec le type d'envoi, le nombre d'étiquettes, les options et un identifiant personnalisé.](../../platforms/images/opencart3/12-order-shipment-popup.png)

Dans la fenêtre d'envoi, vous modifiez pour cette commande uniquement le **Shipment type**, le **Number of labels** (plusieurs colis pour une commande), les options d'envoi et un **Custom ID** imprimé en haut à gauche de l'étiquette. Cliquez sur **Save**.

### Plusieurs commandes à la fois
Cochez les commandes et utilisez les boutons en haut de la liste :

- **Export Batch** envoie les commandes sélectionnées à MyParcel.
- **Print Batch** imprime les étiquettes des commandes déjà exportées.
- **Export Print Batch** fait les deux en une fois.

### Étiquettes de retour
L'icône **Email return label** envoie à votre client un e-mail avec un lien pour imprimer une étiquette de retour.

### Sur la commande elle-même
La page de la commande affiche les mêmes actions MyParcel, le code Track & Trace avec le statut de l'envoi, et l'adresse de livraison avec le type de colis choisi.

![Le détail de la commande avec les actions MyParcel, le code Track & Trace et son statut, et l'adresse de livraison.](../../platforms/images/opencart3/13-order-detail.png)

Vous ne payez un envoi qu'une fois qu'il est réellement remis à PostNL.

## 9 · Un problème, diagnostic
Parcourez ce tableau de haut en bas, la plupart des problèmes se règlent en quelques minutes.

| Symptôme | Que vérifier |
| --- | --- |
| **Le module n'apparaît pas sous Modules** | Avez-vous cliqué sur **Refresh** sous *Extensions → Modifications* ([§2](#2-installation)) ? Vérifiez votre version de PHP : l'extension est testée jusqu'à PHP 8.2. |
| **Je ne vois que Title et Cost** | Vous avez ouvert le mode d'expédition. Les réglages se trouvent sous **System → MyParcel** ([§2](#2-installation)). |
| **L'enregistrement échoue avec « Delivery day windows cannot be empty »** | Remplissez **Delivery days window** sur l'onglet *Checkout* ([§5](#paramtres-de-traitement)). |
| **Aucune option de livraison au checkout** | **Enable MyParcel delivery options** est-il coché et au moins une option activée ([§5](#5-rglages-checkout)) ? **MyParcel Shipping** et **MyParcel Total** sont-ils installés et activés ([§2](#2-installation)) ? Votre client a-t-il saisi une adresse néerlandaise ou belge ? |
| **Le supplément manque dans le total** | **MyParcel Total** est-il installé et activé sous *Order Total* ? |
| **L'export échoue ou renvoie une erreur** | La clé **API** est-elle correcte, sans espaces ([§3](#3-rglages-general)) ? Activez **Log API communication**, réessayez et téléchargez le fichier journal pour le support MyParcel. |
| **Le numéro de rue arrive dans le mauvais champ** | Alignez **Use addition address as number suffix** sur votre checkout ([§3](#3-rglages-general)). |
| **Mon client reçoit deux e-mails Track & Trace** | Désactivez **Track&trace in email** dans OpenCart, ou l'e-mail Track & Trace dans votre back-office MyParcel. |
| **Export Print Batch n'affiche pas les étiquettes** | Utilisez d'abord **Export Batch**, puis **Print Batch**. |

## 10 · FAQ

### Dois-je encore utiliser cette extension ?
Elle fonctionne pour les boutiques qui restent sur OpenCart 3. Le nouveau développement de MyParcel porte sur l'[extension OpenCart 4](./opencart.md), qui prend aussi en charge plus de transporteurs.

### Quels transporteurs puis-je utiliser ?
PostNL uniquement.

### Où trouver ma clé API ?
Dans [backoffice.myparcel.nl](https://backoffice.myparcel.nl) sous *Paramètres de la boutique → Intégration*.

### Puis-je expédier plusieurs colis pour une commande ?
Oui. Réglez le **Number of labels** dans la fenêtre d'envoi avant l'export ([§8](#une-commande)).

### L'extension fonctionne-t-elle avec mon checkout en une page ou mon thème Journal ?
L'extension prend en charge le checkout standard d'OpenCart et quelques autres, comme Journal et Xtensions Best Checkout. Testez le checkout sur une copie de votre boutique avant la mise en ligne.

### Quand suis-je facturé ?
MyParcel facture un envoi seulement une fois qu'il est réellement remis à PostNL.

## Ressources & support
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), compte, clé API, transporteurs et facturation.
- [Versions MyParcel pour OpenCart 3 ↗](https://github.com/myparcelnl/opencart3/releases), pour télécharger l'extension.
- [Contacter le support MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Ce manuel décrit l'extension MyParcel NL 1.1.17 pour OpenCart 3 telle qu'elle fonctionne en octobre 2026.
