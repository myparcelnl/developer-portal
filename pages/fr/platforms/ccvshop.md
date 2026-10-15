---
title: CCV Shop
description: "Connectez votre boutique CCV Shop à MyParcel avec les applications MyParcel de l'App Store CCV Shop. Comprend l'installation de MyParcel Verzendservice et MyParcel Bezorgopties, la saisie de votre clé API, les réglages d'envoi par défaut, les options de livraison que vos clients voient au checkout, l'enregistrement des commandes et l'impression des étiquettes une par une ou en masse, ainsi qu'un tableau de diagnostic."
---

::: tip En bref
CCV Shop se connecte à MyParcel via des applications de l'**App Store CCV Shop**. **MyParcel Verzendservice** enregistre vos commandes chez MyParcel et imprime les étiquettes directement depuis la gestion des commandes de CCV Shop, et le code Track & Trace est ajouté à la commande pour vous. Ajoutez **MyParcel Bezorgopties** pour afficher les jours de livraison, les créneaux horaires et les points relais au checkout. CCV Shop développe et maintient ces applications, les questions sur les applications elles-mêmes sont donc à adresser au support CCV Shop.
:::

## Démarrage rapide, votre première étiquette en 15 minutes
De quoi expédier votre première commande dès aujourd'hui. Pour les détails, voir [Que cherchez-vous ?](#que-cherchez-vous) ci-dessous.

1. **Compte.** Vous n'avez pas encore de compte MyParcel ? Créez-en un sur [myparcel.nl/register](https://www.myparcel.nl/register).
2. **Copiez la clé API.** Connectez-vous à [backoffice.myparcel.nl](https://backoffice.myparcel.nl) → *Paramètres de la boutique → Intégration* → copiez la clé API.
3. **Installez l'application.** Dans le back-office CCV Shop, allez dans **App Store**, ouvrez **MyParcel Verzendservice** et installez-la. Vous expédiez depuis la Belgique ? Installez plutôt **MyParcel België Verzendservice**.
4. **Collez la clé.** Allez dans *Startpunt → Mijn webshop → Instellingen → Verzendkosten & logistiek → MyParcel verzendservice*, collez la clé dans **MyParcel API key**, choisissez votre **Soort zending** (Type de colis) par défaut et cliquez sur **Opslaan** (Enregistrer).
5. **Imprimez une étiquette.** Ouvrez une commande, allez dans l'onglet **Koppelingen** (Intégrations) et cliquez sur **Meld de order aan bij MyParcel en download etiket** (Enregistrer la commande chez MyParcel et télécharger l'étiquette).

::: tip C'est terminé lorsque vous voyez ceci
- L'étiquette se télécharge dès que vous enregistrez la commande
- La commande a un code Track & Trace sous *Verzending* (Expédition) dans l'onglet *Orderoverzicht* (Aperçu de la commande)
- Le tableau *Historie* (Historique) de l'onglet *Koppelingen* affiche l'action sans erreur
:::

## Que cherchez-vous ?
| Que voulez-vous faire ? | Aller à |
| --- | --- |
| Comprendre quelle application fait quoi | [1 · Comment fonctionne la connexion](#1-comment-fonctionne-la-connexion) |
| Installer les applications | [2 · Installer les applications](#2-installer-les-applications) |
| Connecter votre compte | [3 · Connecter votre compte MyParcel](#3-connecter-votre-compte-myparcel) |
| Définir le type de colis, les options et l'assurance par défaut | [4 · Réglages d'envoi par défaut](#4-rglages-denvoi-par-dfaut) |
| Proposer des jours de livraison, des créneaux horaires et des points relais | [5 · Options de livraison au checkout](#5-options-de-livraison-au-checkout) |
| Vérifier ce que voient vos clients | [7 · L'expérience au checkout](#7-lexprience-au-checkout) |
| Imprimer des étiquettes pour une ou plusieurs commandes | [8 · Utilisation au quotidien](#8-utilisation-au-quotidien) |
| Quelque chose ne fonctionne pas | [9 · Un problème, diagnostic](#9-un-problme-diagnostic) |
| Réponse à une question fréquente | [10 · FAQ](#10-faq) |

## 1 · Comment fonctionne la connexion
CCV Shop propose trois applications MyParcel dans son App Store, toutes dans la catégorie *Verzendingen* (Expéditions) :

| Application | Ce qu'elle fait |
| --- | --- |
| **MyParcel Verzendservice** | Enregistre les commandes chez MyParcel NL et télécharge les étiquettes dans la gestion des commandes de CCV Shop. |
| **MyParcel België Verzendservice** | La même chose, pour un compte MyParcel BE. |
| **MyParcel Bezorgopties** | Une extension qui affiche les jours de livraison, les créneaux horaires et les points relais au checkout. Elle nécessite l'une des deux applications ci-dessus. |

Vous n'avez pas besoin de vous connecter à MyParcel pour créer une étiquette : vous enregistrez la commande depuis CCV Shop, l'étiquette se télécharge immédiatement et le code Track & Trace est inscrit dans la commande, vous pouvez donc l'envoyer à votre client avec une mise à jour de statut.

::: warning Développé par CCV Shop
CCV Shop développe et assure le support de ces applications. Pour toute question sur les applications ou votre back-office CCV Shop, contactez le support CCV Shop. Pour votre compte MyParcel, vos contrats et vos transporteurs, contactez MyParcel.
:::

## 2 · Installer les applications
1. Dans votre back-office CCV Shop, ouvrez **App Store** dans le menu de gauche.
2. Recherchez *MyParcel* ou ouvrez la catégorie **Verzendingen**.
3. Installez **MyParcel Verzendservice**, ou **MyParcel België Verzendservice** pour un compte MyParcel BE.
4. Vous voulez des options de livraison au checkout ? Installez aussi **MyParcel Bezorgopties**. Elle ne s'installe qu'une fois l'une des deux applications d'expédition en place.

Vos applications installées sont listées sous **App Store → Geïnstalleerde CCV Shop apps** (Applications CCV Shop installées).

## 3 · Connecter votre compte MyParcel
Tous les réglages des deux applications se trouvent sur une seule page : *Startpunt → Mijn webshop → Instellingen → Verzendkosten & logistiek → MyParcel verzendservice*. Avec l'application belge, la page s'appelle *MyParcel België verzendservice*.

![Le haut de la page des réglages MyParcel dans CCV Shop, avec le champ MyParcel API key et le type de colis par défaut.](../../platforms/images/ccv/01-settings-account.png)

1. Copiez votre clé API depuis [backoffice.myparcel.nl](https://backoffice.myparcel.nl) sous *Paramètres de la boutique → Intégration*.
2. Collez-la dans **MyParcel API key**. Attention aux espaces avant ou après la clé.
3. Cliquez sur **Opslaan** (Enregistrer) en bas à droite. **Toepassen** (Appliquer) enregistre aussi.

::: warning Une clé, une boutique
La clé relie ce CCV Shop à une boutique de votre compte MyParcel. Toutes les étiquettes et factures arrivent dans cette boutique.
:::

## 4 · Réglages d'envoi par défaut
Ces réglages sont les valeurs par défaut de chaque commande que vous enregistrez. Vous pouvez les modifier par commande dans l'onglet *Koppelingen* avant de l'enregistrer, voir [§8](#8-utilisation-au-quotidien).

### Type de colis et options supplémentaires
**Soort zending** (Type de colis) est le type de colis avec lequel chaque nouvel envoi démarre.

| Option | Quand l'utiliser |
| --- | --- |
| **Pakket** (Colis) | Le choix standard pour la plupart des commandes. |
| **Pakket extra groot** (Colis extra grand) | Les colis plus grands que le format de colis standard. |
| **Klein pakket** (Petit colis) | Les petits colis, consultez vos tarifs MyParcel pour les limites de taille. |
| **Brievenbuspakje** (Colis boîte aux lettres) | Les articles petits et plats qui passent dans une boîte aux lettres. |
| **Ongefrankeerd label** (Étiquette non affranchie) | Une étiquette sans affranchissement. |

![Les interrupteurs pour la signature à la livraison, le retour en cas d'absence et la livraison à l'adresse du domicile uniquement.](../../platforms/images/ccv/02-settings-shipment-options.png)

Chaque interrupteur ci-dessous ajoute une option à chaque colis. Les options peuvent être payantes, consultez vos tarifs MyParcel.

| Réglage | Ce qu'il fait | Quand l'activer |
| --- | --- | --- |
| **Handtekening voor ontvangst** (Signature à la livraison) | Le destinataire signe pour le colis. | Les commandes de valeur, ou lorsque vous avez besoin d'une preuve de livraison. |
| **Retour bij geen gehoor** (Retour en cas d'absence) | Si personne n'est présent, le colis vous revient au lieu d'aller dans un point relais. | Les commandes qui ne doivent arriver nulle part ailleurs que chez le destinataire. |
| **Alléén huisadres** (Adresse du domicile uniquement) | Le colis n'est livré qu'à l'adresse du destinataire, jamais chez les voisins. Désactivez-le si un voisin peut accepter le colis. | Les commandes qui doivent être remises à l'adresse même. |

Ces options s'appliquent aux colis. Pour un colis boîte aux lettres ou une étiquette non affranchie, elles sont masquées sur l'écran de la commande.

### Assurance et format d'étiquette
![Les réglages d'assurance et de format d'étiquette.](../../platforms/images/ccv/03-settings-insurance-label.png)

- **Verzekerd verzenden** (Envoi assuré). Choisissez **Nee** (Non), un montant fixe de *Verzekerd tot 100 euro* à *Verzekerd tot 5.000 euro*, ou **Gehele order bedrag** (Montant total de la commande). Avec un montant fixe, le montant assuré le plus avantageux est choisi pour vous. Le montant porte sur le prix d'achat des marchandises.
- **Label formaat** (Format d'étiquette). **A6** pour une imprimante d'étiquettes, **A4** pour une imprimante classique. En A4, vous choisissez par commande l'emplacement de l'étiquette sur la feuille.

::: warning Vérifiez le montant assuré
L'application ne peut pas garantir le montant assuré. Vérifiez-le sur chaque étiquette que vous créez, surtout lorsque vous assurez le montant total de la commande.
:::

### Contrôle de l'âge
![L'interrupteur du contrôle de l'âge, suivi du début de la section des options de livraison avec les transporteurs.](../../platforms/images/ccv/04-settings-age-carriers.png)

**Leeftijdscheck 18+** (Contrôle de l'âge 18+) demande au transporteur de vérifier l'âge du destinataire à la livraison. Activez-le si vous vendez de l'alcool, du tabac ou d'autres produits soumis à une limite d'âge. Un contrôle de l'âge ne peut pas être combiné avec la livraison le matin ou le soir, et s'accompagne toujours de la signature à la livraison et de la livraison à l'adresse du domicile uniquement.

## 5 · Options de livraison au checkout
Les réglages sous la barre d'information bleue appartiennent à l'application **MyParcel Bezorgopties**. Ils déterminent ce que vos clients peuvent choisir au checkout. Sans cette application, ces réglages n'ont aucun effet.

### Transporteurs
Sous **Vervoerders** (Transporteurs), cochez les transporteurs dont vous voulez afficher les options de livraison : **PostNL**, **DHL For You**, **DPD**, **UPS**, **DHL Parcel Connect** et **DHL Europlus**. Ne cochez que les transporteurs actifs sur votre compte MyParcel. Vous ne voulez afficher aucune option de livraison ? Laissez tous les transporteurs décochés.

UPS est pris en charge avec UPS Standard, pas avec UPS Express Saver. DHL Europlus ne propose pas de points relais.

### Délai de traitement et heure limite de commande
![Le délai de traitement et le dernier moment pour commander.](../../platforms/images/ccv/05-settings-processing-cutoff.png)

- **Verwerkingstijd** (Délai de traitement). Le nombre de jours, de 0 à 14, dont vous avez besoin avant de remettre une commande au transporteur. Utilisez-le lorsque vous devez encore travailler sur les produits, par exemple imprimer un t-shirt.
- **Laatste bestelmogelijkheid** (Dernier moment pour commander). L'heure limite à laquelle un client peut commander pour recevoir le colis le jour de livraison affiché.

### Jours de dépôt et livraison le jour même
![Les jours de dépôt et le réglage de livraison le jour même pour DHL For You.](../../platforms/images/ccv/06-settings-dropoff-sameday.png)

- **Inleverdagen** (Jours de dépôt). Cochez les jours où vous remettez les colis au transporteur. Les jours de livraison que voient vos clients sont calculés à partir de ces jours. Si aucun jour n'est coché, le checkout ne propose que la livraison standard sans date.
- **Zelfde dag levering** (Livraison le jour même). Uniquement pour DHL For You, et affiché seulement lorsque DHL For You est coché. Cela ne fonctionne qu'avec un délai de traitement de 0 jour et une heure limite au plus tard à 09:30.

### Livraison le matin et le soir
![La livraison le matin et le soir, chacune avec un interrupteur et un champ de supplément.](../../platforms/images/ccv/07-settings-morning-evening.png)

| Réglage | Ce que reçoit votre client |
| --- | --- |
| **Ochtendlevering** (Livraison le matin) | Une livraison avant 12:00 au lieu de toute la journée, du lundi au vendredi. PostNL uniquement. |
| **Avondlevering** (Livraison le soir) | Une livraison entre 18:00 et 22:00, du lundi au vendredi. PostNL uniquement. |

Dès que vous activez une option, un champ **Meer- of minderprijs** (Supplément ou réduction) apparaît. Le montant est ajouté aux frais de livraison que le client paie pour cette option, ou en est déduit avec un signe moins. Laissez-le à 0,00 pour proposer l'option sans frais supplémentaires.

### Livraison le lundi et adresse du domicile uniquement
![La livraison le lundi et l'option adresse du domicile uniquement pour les clients.](../../platforms/images/ccv/08-settings-monday-homeonly.png)

- **Maandaglevering** (Livraison le lundi). Une livraison le lundi, PostNL uniquement. Elle n'est affichée que lorsque le samedi est coché sous *Inleverdagen* et que l'heure limite est au plus tard 15:00.
- **Alleen leveren aan huisadres** (Livrer à l'adresse du domicile uniquement). Permet à votre client de choisir la livraison à l'adresse du domicile uniquement. PostNL et DHL For You uniquement.

### Signature et points relais
![La signature à la livraison et le retrait dans un point relais, comme options pour vos clients.](../../platforms/images/ccv/09-settings-signature-pickup.png)

- **Handtekening voor ontvangst** (Signature à la livraison). Permet à votre client de demander une signature à la livraison. PostNL et DHL For You uniquement.
- **Afhalen op locatie** (Retrait dans un point relais). Affiche les points relais de vos transporteurs cochés, afin que votre client puisse récupérer le colis dans un commerce ou une consigne à colis à proximité.

Chacune de ces options a son propre champ **Meer- of minderprijs** une fois activée.

::: tip Pas la même chose que les valeurs par défaut du §4
Les options du §4 sont ce que *vous* ajoutez à chaque envoi. Les options ici sont ce que votre *client* peut choisir au checkout. Le choix d'un client est repris dans la commande.
:::

Cliquez sur **Opslaan** (Enregistrer) lorsque vous avez terminé.

## 6 · Réglages produit
Ces applications n'ajoutent pas d'options au niveau des produits. Tout le comportement d'expédition se règle depuis la page des réglages et, par commande, depuis l'onglet *Koppelingen*.

## 7 · L'expérience au checkout
Avec **MyParcel Bezorgopties** installé, vos clients choisissent **MyParcel** sous *Afleveropties* (Options de livraison) au checkout. Dès qu'ils ont saisi leur code postal et leur numéro de maison, les options de livraison apparaissent.

<p><img src="../../platforms/images/ccv/10-checkout-delivery.png" alt="Le checkout avec l&#x27;onglet Livrer ouvert : deux jours de livraison, les créneaux horaires PostNL et DHL For You, et les options de signature et d&#x27;adresse du domicile uniquement." width="376"></p>

Sous **Bezorgen** (Livrer), votre client choisit :

- **Un jour de livraison.** Utilisez les flèches pour voir les jours suivants.
- **Un transporteur et un créneau horaire.** Pour chaque transporteur coché, les créneaux horaires disponibles ce jour-là. Un créneau du matin apparaît lorsque la livraison le matin est activée.
- **Des options supplémentaires.** Les options que vous avez activées au [§5](#5-options-de-livraison-au-checkout), comme *Handtekening voor ontvangst* et *Alleen bezorgen aan huisadres*.

<p><img src="../../platforms/images/ccv/11-checkout-pickup.png" alt="L&#x27;onglet Retrait, avec une liste de points relais par transporteur, leur distance et leurs horaires d&#x27;ouverture." width="376"></p>

Sous **Afhalen** (Retrait), votre client choisit un point relais dans une **Lijst** (Liste) ou sur une **Kaart** (Carte), trié par distance et regroupé par transporteur, avec les horaires d'ouverture. Le retrait porte un label *Milieuvriendelijk* (Écologique).

<p><img src="../../platforms/images/ccv/12-checkout-summary.png" alt="Le checkout après un choix : la date de livraison demandée, l&#x27;heure et le transporteur, avec un bouton pour le modifier." width="378"></p>

Après le choix, le checkout affiche un récapitulatif avec la date de livraison demandée, l'heure et le transporteur. **Wijzig afleveroptie** (Modifier l'option de livraison) rouvre les choix.

Dans votre gestion des commandes, la date de livraison choisie apparaît comme note sous *Verzending* (Expédition) dans la commande, et elle est présélectionnée comme **Bezorgdatum** (Date de livraison) lorsque vous enregistrez la commande.

## 8 · Utilisation au quotidien
Vous pouvez enregistrer une commande à la fois depuis la commande elle-même, ou plusieurs à la fois depuis la liste des commandes.

### Une commande
1. Allez dans **Mijn orders → Orderbeheer** (Mes commandes → Gestion des commandes) et ouvrez la commande.
2. Ouvrez l'onglet **Koppelingen** (Intégrations). Vous y trouvez la section *Order exporteren naar MyParcel* (Exporter la commande vers MyParcel).
3. Vérifiez les données. Elles sont remplies avec vos valeurs par défaut du [§4](#4-rglages-denvoi-par-dfaut) et avec le choix du client au checkout. Vous pouvez les modifier pour cette commande uniquement.
4. Cliquez sur **Meld de order aan bij MyParcel en download etiket** et confirmez avec **Order exporteren** (Exporter la commande).

![La section Exporter la commande vers MyParcel d'une commande, avec le type de colis, les options, l'assurance, le format d'étiquette, le contrôle de l'âge, le transporteur et la date de livraison pour cette commande.](../../platforms/images/ccv/15-order-export.png)

| Champ | Ce qu'il signifie pour cette commande |
| --- | --- |
| **Soort zending** | Type de colis. Les options de colis et l'assurance ne s'affichent que pour les colis. |
| **Handtekening voor ontvangst**, **Retour bij geen gehoor**, **Alléén huisadres** | *Ja* (Oui) ou *Nee* (Non) pour chaque option. |
| **Verzekerd verzenden** | Le montant assuré pour ce colis. |
| **Label formaat** | A6 ou A4. En A4, **Label afdruk locatie** (Position d'impression de l'étiquette) vous permet de choisir l'emplacement sur la feuille : *Links boven*, *Rechts boven*, *Links onder* ou *Rechts onder* (en haut à gauche, en haut à droite, en bas à gauche, en bas à droite). |
| **Leeftijdscheck 18+** | Contrôle de l'âge pour ce colis. |
| **Vervoerders** | Le transporteur de cet envoi. |
| **Bezorgdatum** | La date de livraison, présélectionnée à partir du choix du client au checkout. |

L'étiquette se télécharge immédiatement au format PDF et un message vert *Succes* (Succès) confirme que la commande a été envoyée. Le code Track & Trace est ajouté à la commande, sous *Verzending* (Expédition) dans l'onglet *Orderoverzicht* (Aperçu de la commande), avec un lien pour suivre le colis.

![Une commande enregistrée : le message de succès, un avertissement sur le nouvel enregistrement et les boutons pour télécharger l'étiquette ou enregistrer la commande à nouveau.](../../platforms/images/ccv/16-order-registered.png)

Une fois la commande enregistrée, la section affiche deux boutons :

- **Download etiket voor verzending** (Télécharger l'étiquette de l'envoi) télécharge à nouveau la même étiquette, par exemple lorsque l'imprimante s'est bloquée.
- **Meld de order opnieuw aan en download een nieuw etiket** (Enregistrer la commande à nouveau et télécharger une nouvelle étiquette) crée un nouvel envoi, par exemple après avoir modifié le type de colis.

Le tableau *Historie* (Historique) sous les sections consigne chaque action avec la date et l'heure, l'action, l'intégration et le résultat.

![Le tableau Historique avec un enregistrement réussi et une tentative antérieure qui a échoué.](../../platforms/images/ccv/17-order-history.png)

::: warning Enregistrer une commande une nouvelle fois
Un nouvel enregistrement crée un **deuxième** envoi dans MyParcel, le premier n'est pas supprimé. CCV Shop vous en avertit à l'écran. Supprimez l'ancien envoi dans votre backoffice MyParcel pour garder un aperçu clair. Vous avez seulement besoin de la même étiquette ? Utilisez plutôt **Download etiket voor verzending**.
:::

### Plusieurs commandes à la fois
1. Dans **Orderbeheer**, cochez les commandes que vous voulez expédier.
2. Ouvrez **Groepsactie selecteren** (Sélectionner une action groupée) et choisissez **MyParcel etiketten** (Étiquettes MyParcel) sous *Verzendservice*. Avec un compte MyParcel BE, choisissez **MyParcel België etiketten**.

![Le menu d'action groupée dans la gestion des commandes, avec Étiquettes MyParcel et Étiquettes MyParcel België sous Verzendservice.](../../platforms/images/ccv/13-orders-group-action.png)

3. Dans la fenêtre qui s'ouvre, choisissez le transporteur sous **Vervoerders** et, pour les feuilles A4, la **Label afdruk locatie**.
4. Cliquez sur **Toepassen** (Appliquer) pour enregistrer les commandes sélectionnées et télécharger leurs étiquettes.

![La fenêtre Étiquettes MyParcel avec le transporteur et la position d'impression de l'étiquette.](../../platforms/images/ccv/14-orders-bulk-popup.png)

Chaque commande du lot utilise vos réglages par défaut du [§4](#4-rglages-denvoi-par-dfaut). Une commande a besoin d'autre chose ? Enregistrez-la séparément.

## 9 · Un problème, diagnostic
Parcourez ce tableau de haut en bas, la plupart des problèmes se règlent en quelques minutes.

| Symptôme | Que vérifier |
| --- | --- |
| **"Er is een fout opgetreden bij het verzenden van de order naar MyParcel"** et *Fout opgetreden* dans l'historique | La **MyParcel API key** est-elle correcte, sans espaces ? Recopiez-la depuis le backoffice et enregistrez ([§3](#3-connecter-votre-compte-myparcel)). Le transporteur choisi est-il actif sur votre compte MyParcel ? |
| **Aucune option de livraison au checkout** | **MyParcel Bezorgopties** est-elle installée et au moins un transporteur est-il coché sous *Vervoerders* ([§5](#5-options-de-livraison-au-checkout)) ? Le client a-t-il saisi un code postal et un numéro de maison ? Le client a-t-il choisi *MyParcel* sous *Afleveropties* ? |
| **Seulement la livraison standard, sans jours ni créneaux horaires** | Cochez vos jours de dépôt sous *Inleverdagen* ([§5](#5-options-de-livraison-au-checkout)). |
| **La livraison le matin, le soir ou le lundi ne s'affiche pas** | Elles sont réservées à PostNL. La livraison le lundi nécessite en plus le samedi comme jour de dépôt et une heure limite à 15:00 ou plus tôt. |
| **La livraison le jour même ne s'affiche pas** | DHL For You uniquement, avec un délai de traitement de 0 jour et une heure limite à 09:30 ou plus tôt. |
| **Les options ou les points relais d'un transporteur manquent** | Le transporteur est-il coché et actif sur votre compte MyParcel ? DHL Europlus n'a pas de points relais. |
| **Deux envois dans MyParcel pour une seule commande** | La commande a été enregistrée deux fois. Supprimez celui dont vous n'avez pas besoin dans le backoffice MyParcel ([§8](#8-utilisation-au-quotidien)). |
| **Mauvais montant assuré sur l'étiquette** | Vérifiez **Verzekerd verzenden** par commande avant l'enregistrement et contrôlez l'étiquette ensuite ([§4](#assurance-et-format-dtiquette)). |

## 10 · FAQ

### Qui contacter en cas de question ?
Pour les applications et votre back-office CCV Shop : le support CCV Shop. Pour votre compte MyParcel, votre contrat, vos transporteurs et vos factures : MyParcel ([Ressources & support](#ressources-support)).

### Où trouver ma clé API ?
Dans [backoffice.myparcel.nl](https://backoffice.myparcel.nl) sous *Paramètres de la boutique → Intégration*.

### Ai-je besoin de MyParcel Bezorgopties ?
Seulement si vous voulez que vos clients choisissent un jour de livraison, un créneau horaire ou un point relais. Pour imprimer des étiquettes, MyParcel Verzendservice suffit.

### Quels transporteurs puis-je utiliser ?
Pour les étiquettes, les transporteurs listés sous *Vervoerders* dans la commande : PostNL, DHL For You, DPD, UPS, DHL Parcel Connect et DHL Europlus. Seuls les transporteurs actifs sur votre compte MyParcel acceptent les envois.

### Puis-je utiliser un contrôle de l'âge avec la livraison le soir ou le matin ?
Non. Un contrôle de l'âge s'accompagne toujours de la signature à la livraison et de la livraison à l'adresse du domicile uniquement, et ne peut pas être combiné avec la livraison le matin ou le soir.

### J'expédie depuis la Belgique, quelle application dois-je utiliser ?
**MyParcel België Verzendservice**, avec un compte MyParcel BE. MyParcel Bezorgopties fonctionne aussi bien avec l'application néerlandaise qu'avec l'application belge.

### Puis-je définir des options d'expédition par produit ?
Non. Définissez vos valeurs par défaut sur la page des réglages et ajustez une commande précise dans son onglet *Koppelingen*.

### Quand suis-je facturé ?
MyParcel facture un envoi une fois qu'il est réellement remis au transporteur.

## Ressources & support
- [backoffice.myparcel.nl ↗](https://backoffice.myparcel.nl), compte, clé API, transporteurs et facturation.
- [CCV Shop ↗](https://www.ccvshop.nl/), support pour les applications et votre back-office CCV Shop : **+31 (0)88 990 7700** · [support@ccvshop.nl](mailto:support@ccvshop.nl).
- [Contacter le support MyParcel](../../contact.md), **023 - 30 30 315** · [info@myparcel.nl](mailto:info@myparcel.nl).

Ce manuel décrit les applications MyParcel pour CCV Shop telles qu'elles fonctionnent en octobre 2026. CCV Shop développe les applications et peut modifier les écrans sans préavis.
