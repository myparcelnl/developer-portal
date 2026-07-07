---
title: PHP SDK
description: "Référence technique du package Composer officiel myparcelnl/sdk. Couvre l'installation, le cycle de vie du consignment, les carriers, les labels, les retours, la Fulfilment Order API et l'impression directe."
---

::: tip En bref
Le SDK PHP encapsule l'API REST MyParcel dans un modèle objet typé : construisez un `Consignment`, placez-le dans une `MyParcelCollection`, expédiez-le. Le SDK gère la signature des requêtes, le rendu des labels et l'assemblage des PDF. Tout est open source sous licence MIT sur [github.com/myparcelnl/sdk ↗](https://github.com/myparcelnl/sdk).
:::

## Vous cherchez…
| Objectif | Section |
| --- | --- |
| Installer et envoyer votre première expédition | [1 · Install](#1-install) → [4 · Quickstart](#4-quickstart-premire-expdition) |
| Choisir un carrier et voir ses possibilités | [6 · Carriers](#6-carriers) |
| Type de colis, type de livraison, options d'expédition | [7 · Options du consignment](#7-options-du-consignment) |
| Générer des labels PDF (A4/A6) | [9 · Labels et impression](#9-labels-et-impression) |
| Récupérer le Track & Trace | [10 · Track & Trace](#10-track-trace) |
| Retrouver des consignments existants | [11 · Interroger et récupérer](#11-interroger-et-rcuprer) |
| Créer des retours | [12 · Retours](#12-retours) |
| Utiliser l'Order API (Fulfilment) | [13 · Order API (Fulfilment)](#13-order-api-fulfilment) |
| Gérer les erreurs | [15 · Exceptions](#15-exceptions) |
| Migrer depuis une version plus ancienne | [17 · Migrer](#17-migrer-depuis-des-versions-plus-anciennes) |

::: warning Statut de cette page
L'ancienne version sur [developer.myparcel.nl/documentation/50.php-sdk.html ↗](https://developer.myparcel.nl/documentation/50.php-sdk.html) est obsolète (PHP 7.1, namespace `MyParcel\Sdk`). Cette page est rédigée pour `myparcelnl/sdk` v10.7+ et utilise le namespace actuel `MyParcelNL\Sdk\`.
:::

## 1 · Install
```
composer require myparcelnl/sdk
```

Autoload PSR-4, aucun `require` manuel nécessaire. Source : [Packagist ↗](https://packagist.org/packages/myparcelnl/sdk).

### Requirements
| | Version |
| --- | --- |
| PHP | 7.4 ou 8.x (8.1+ recommandé, 8.4 pris en charge à partir de v10.3.6) |
| Composer | 2.x |
| Extensions | `ext-curl`, `ext-json`, `ext-mbstring` |
| Runtime deps | `setasign/fpdf ^1.8`, `setasign/fpdi ^2.6` (assemblage des labels) |

Contrainte Composer : `"php": "^7.4 || ^8.0"`. Les versions de PHP antérieures à 7.4 ne sont plus prises en charge.

## 2 · Architecture en un coup d'œil
Le SDK suit trois couches :

```
Carrier  ──►  Consignment  ──►  MyParcelCollection
( ID/nom)     (un colis)        (batch + label I/O)
```

- **Carrier**, un modèle statique par transporteur avec `ID`, `NAME` et la classe `Consignment` correspondante. Voir [`src/Model/Carrier`](https://github.com/myparcelnl/sdk/tree/main/src/Model/Carrier).
- **Consignment**, toutes les données d'un seul colis (expéditeur, destinataire, options, propriétés physiques). Les sous-classes spécifiques au carrier (par ex. `PostNLConsignment`) déterminent quelles combinaisons de `delivery_type`, `package_type` et `shipment_option` sont autorisées. Voir [`src/Model/Consignment`](https://github.com/myparcelnl/sdk/tree/main/src/Model/Consignment).
- **MyParcelCollection**, collecte les consignments, dialogue avec l'API (`POST /shipments`, `/shipment_labels`, `/track_traces`), génère les labels PDF et gère le multi-collo. Voir [`src/Helper/MyParcelCollection.php`](https://github.com/myparcelnl/sdk/blob/main/src/Helper/MyParcelCollection.php).

Namespaces de premier niveau :

| Namespace | Rôle |
| --- | --- |
| `MyParcelNL\Sdk\Factory` | `ConsignmentFactory`, `DeliveryOptionsAdapterFactory` |
| `MyParcelNL\Sdk\Model\Carrier` | Classes de carriers et `CarrierFactory` |
| `MyParcelNL\Sdk\Model\Consignment` | `AbstractConsignment` + sous-classes par carrier |
| `MyParcelNL\Sdk\Model\Fulfilment` | `Order`, `OrderLine`, `OrderNote`, `Product` |
| `MyParcelNL\Sdk\Helper` | `MyParcelCollection`, `LabelHelper`, `TrackTraceUrl`, `Utils` |
| `MyParcelNL\Sdk\Services` | Encoders et `CountryService` |
| `MyParcelNL\Sdk\Exception` | Toutes les exceptions du SDK |

## 3 · Authentification
Le SDK s'authentifie par requête avec une **clé API de boutique** (Basic auth). Il n'y a pas de flux OAuth au niveau du SDK, le SDK gère tout échange de token en interne si l'API l'exige.

```php
$apiKey = getenv('MYPARCEL_API_KEY'); // base64-encoded shop key from the backoffice
```

Comment la clé est utilisée :

```php
use MyParcelNL\Sdk\Factory\ConsignmentFactory;
use MyParcelNL\Sdk\Model\Carrier\CarrierPostNL;

$consignment = ConsignmentFactory::createByCarrierId(CarrierPostNL::ID)
    ->setApiKey($apiKey);
```

`setApiKey()` existe sur chaque consignment, il est donc possible de mélanger les clés au sein d'une même collection, ce qui est utile pour les intégrations multi-boutiques.

::: warning Hygiène des clés
Conservez les clés côté serveur dans des variables d'environnement, un gestionnaire de secrets ou un fichier `.env` (hors du VCS). Ne les envoyez jamais au navigateur. La limite de débit de l'API est liée à la clé, une clé fuitée peut être exploitée immédiatement.
:::

### User agent (obligatoire pour les intégrations)
Les plugins et intégrations personnalisées doivent s'identifier, sans cela le débogage est impossible et MyParcel ne peut pas retrouver l'origine d'un problème.

```php
$consignment->setUserAgentForProposition('CustomShop', '2.4.1');
```

`setUserAgentForProposition(string $proposition, ?string $version)` est la nouvelle API ; `setUserAgent()` est deprecated et sera supprimée dans la prochaine version majeure. Le SDK ajoute lui-même `MyParcelNL-SDK/<sdkVersion>` et `php/<phpVersion>` à l'en-tête.

## 4 · Quickstart, première expédition
Un consignment, un label, un PDF A6 sur le disque.

```php
<?php
require 'vendor/autoload.php';

use MyParcelNL\Sdk\Factory\ConsignmentFactory;
use MyParcelNL\Sdk\Helper\MyParcelCollection;
use MyParcelNL\Sdk\Model\Carrier\CarrierPostNL;
use MyParcelNL\Sdk\Model\Consignment\AbstractConsignment;

$apiKey = getenv('MYPARCEL_API_KEY');

$consignment = (ConsignmentFactory::createByCarrierId(CarrierPostNL::ID))
    ->setApiKey($apiKey)
    ->setReferenceIdentifier('ORDER-2026-01042')
    ->setCountry(AbstractConsignment::CC_NL)
    ->setPerson('J. de Vries')
    ->setFullStreet('Antwoordnummer 42')
    ->setPostalCode('1012AB')
    ->setCity('Amsterdam')
    ->setEmail('test@example.com')
    ->setPackageType(AbstractConsignment::PACKAGE_TYPE_PACKAGE)
    ->setLabelDescription('Order #146');

(new MyParcelCollection())
    ->addConsignment($consignment)
    ->setUserAgentForProposition('CustomShop', '2.4.1')
    ->setPdfOfLabels()           // POST /shipments + GET /shipment_labels
    ->downloadPdfOfLabels();     // streams the PDF to the browser
```

Ce qui se passe en coulisses : la collection appelle `POST /shipments`, récupère les ID de consignment, puis demande les labels via `GET /shipment_labels/{ids}` et les assemble en un seul PDF.

## 5 · Conventions du builder
- **Setters fluents.** Chaque setter retourne `$this`, chaînez-les.
- **Constantes plutôt que chaînes.** `PACKAGE_TYPE_PACKAGE` (= 1) et `DELIVERY_TYPE_STANDARD` (= 2) se lisent mieux que des nombres magiques et ne cassent pas si l'API étend ses plages.
- **Les validateurs s'exécutent automatiquement.** Chaque carrier possède un `*ConsignmentValidator` qui impose les combinaisons autorisées. Appeler `setSignature(true)` sur un carrier qui ne le prend pas en charge déclenche une `InvalidConsignmentException`.
- **Méthodes `getAllowed*()`.** Demandez à un consignment quelles options sont valides avant de les utiliser :
  ```php
  $consignment->getAllowedDeliveryTypes();   // ['morning','standard','evening','pickup']
  $consignment->getAllowedPackageTypes();    // ['package','mailbox','letter','digital_stamp','package_small']
  $consignment->getAllowedShipmentOptions(); // ['age_check','insurance','large_format', ...]
  ```

## 6 · Carriers
Chaque carrier possède un `ID` (numérique, utilisé par l'API) et un `NAME` (slug, utilisé dans les appels de factory basés sur le nom).

| Carrier | Class | `ID` | `NAME` |
| --- | --- | --- | --- |
| PostNL | `CarrierPostNL` | `1` | `postnl` |
| bpost | `CarrierBpost` | `2` | `bpost` |
| DPD | `CarrierDPD` | `4` | `dpd` |
| DHL For You | `CarrierDHLForYou` | `9` | `dhlforyou` |
| DHL Parcel Connect | `CarrierDHLParcelConnect` | `10` | `dhlparcelconnect` |
| DHL Europlus | `CarrierDHLEuroplus` | `11` | `dhleuroplus` |
| UPS Standard | `CarrierUPSStandard` | `12` | `upsstandard` |
| UPS Express Saver | `CarrierUPSExpressSaver` | `13` | `upsexpresssaver` |
| GLS | `CarrierGLS` | `14` | `gls` |
| Trunkrs | `CarrierTrunkrs` | `16` | `trunkrs` |

```php
use MyParcelNL\Sdk\Factory\ConsignmentFactory;

ConsignmentFactory::createByCarrierId(2);            // bpost
ConsignmentFactory::createByCarrierName('dhlforyou'); // DHL For You
```

::: tip Quels carriers sont disponibles pour mon compte ?
La disponibilité est contractuelle, tous les carriers ne figurent pas dans chaque contrat de boutique. L'API renvoie une erreur `403`/validation si vous utilisez un carrier qui n'est pas activé.
:::

## 7 · Options du consignment

### Package types
Le type détermine les règles de dimensions et les options d'expédition disponibles. Il varie selon le carrier ; vérifiez avec `getAllowedPackageTypes()`.

| Constant | ID | Name | Quand |
| --- | --- | --- | --- |
| `PACKAGE_TYPE_PACKAGE` | `1` | `package` | Colis standard. Valeur par défaut. |
| `PACKAGE_TYPE_MAILBOX` | `2` | `mailbox` | Colis boîte aux lettres (≤ 2 cm d'épaisseur, NL uniquement). |
| `PACKAGE_TYPE_LETTER` | `3` | `letter` | Lettre non assurée, sans track & trace. |
| `PACKAGE_TYPE_DIGITAL_STAMP` | `4` | `digital_stamp` | Timbre numérique, le poids doit être renseigné. |
| `PACKAGE_TYPE_PACKAGE_SMALL` | `6` | `package_small` | Petit colis (PostNL). |

### Delivery types
| Constant | ID | Name |
| --- | --- | --- |
| `DELIVERY_TYPE_MORNING` | `1` | `morning` |
| `DELIVERY_TYPE_STANDARD` | `2` | `standard` (default) |
| `DELIVERY_TYPE_EVENING` | `3` | `evening` |
| `DELIVERY_TYPE_PICKUP` | `4` | `pickup` |
| `DELIVERY_TYPE_EXPRESS` | `7` | `express` |

Les expéditions en point relais nécessitent une `PickupLocation`, définissez-la via `setPickupLocation(new PickupLocation([...]))`.

### Shipment options
Extras booléens qui viennent s'ajouter au service de base.

| Constant | API key | Setter |
| --- | --- | --- |
| `SHIPMENT_OPTION_SIGNATURE` | `signature` | `setSignature(bool)` |
| `SHIPMENT_OPTION_ONLY_RECIPIENT` | `only_recipient` | `setOnlyRecipient(bool)` |
| `SHIPMENT_OPTION_AGE_CHECK` | `age_check` | `setAgeCheck(bool)` |
| `SHIPMENT_OPTION_INSURANCE` | `insurance` | `setInsurance(int $cents)` |
| `SHIPMENT_OPTION_LARGE_FORMAT` | `large_format` | `setLargeFormat(bool)` |
| `SHIPMENT_OPTION_RETURN` | `return` | `setReturn(bool)` |
| `SHIPMENT_OPTION_PRINTERLESS_RETURN` | `printerless_return` | `setPrinterlessReturn(bool)` |
| `SHIPMENT_OPTION_HIDE_SENDER` | `hide_sender` | `setHideSender(bool)` |
| `SHIPMENT_OPTION_SAME_DAY_DELIVERY` | `same_day_delivery` | `setSameDayDelivery(bool)` |
| `SHIPMENT_OPTION_PRIORITY_DELIVERY` | `priority_delivery` | `setPriorityDelivery(bool)` (since v10.7.0) |
| `SHIPMENT_OPTION_RECEIPT_CODE` | `receipt_code` | `setReceiptCode(bool)` |
| `SHIPMENT_OPTION_COLLECT` | `collect` | `setCollect(bool)` |
| `SHIPMENT_OPTION_FRESH_FOOD` | `fresh_food` | `setFreshFood(bool)` |
| `SHIPMENT_OPTION_FROZEN` | `frozen` | `setFrozen(bool)` |

::: warning Combinaisons valides
Toutes les options ne peuvent pas être combinées, par exemple `receipt_code` + `signature` est bloqué. Le validateur propre à chaque carrier déclenche `InvalidConsignmentException` avec la règle exacte qui a été enfreinte.
:::

### Assurance
Les montants sont exprimés en **centimes d'euro**. Récupérez les maximums autorisés par pays avec `getInsurancePossibilities(?string $cc)` :

```php
$consignment->getInsurancePossibilities('NL'); // [0, 100, 250, 500, ..., 50000]
$consignment->setInsurance(50000);             // €500
```

### Multi-collo (un seul flux de label pour plusieurs colis)
Pour les expéditions qui se composent physiquement de plusieurs colis mais qui, du point de vue logistique, forment un ensemble :

```php
(new MyParcelCollection())
    ->addMultiCollo($consignment, 3)        // 1 main parcel + 2 follow-up parcels
    ->setPdfOfLabels()
    ->downloadPdfOfLabels();
```

Ne fonctionne que sur les carriers qui proposent le multi-collo (`getAllowedExtraOptions()` contient `'multi_collo'`).

## 8 · MyParcelCollection, API par lot
`MyParcelCollection` est une collection de style Laravel dotée de méthodes propres au SDK. Voici la principale API publique :

| Method | Rôle |
| --- | --- |
| `addConsignment($c)` | Ajoute un seul consignment. |
| `addMultiCollo($c, $amount)` | Multi-collo (voir ci-dessus). |
| `addMultiColloConsignments(array $cs)` | Ajoute en une fois un ensemble déjà groupé. |
| `createConcepts()` | `POST /shipments` pour l'ensemble du lot. |
| `setLatestData(int $size = 300)` | Hydrate les consignments avec les données serveur (statut, code-barres, ID). |
| `setLinkOfLabels($pos = 1)` | Demande un lien de téléchargement pour le PDF des labels. |
| `setPdfOfLabels($pos = 1)` | Demande les octets du PDF (appelé en interne par `downloadPdfOfLabels`). |
| `downloadPdfOfLabels($inline = false)` | Diffuse le PDF vers le navigateur (`Content-Disposition: attachment` ou `inline`). |
| `getLabelPdf()` / `getLinkOfLabels()` | Chaîne PDF brute ou lien de label après `setPdfOfLabels()`/`setLinkOfLabels()`. |
| `printDirect(string $printerGroupId)` | Envoie directement vers une imprimante connectée. Nécessite v10.6.0+. |
| `generateReturnConsignments(bool $sendMail, ?Closure $modifier)` | Crée des expéditions de retour à partir de colis existants. |
| `fetchTrackTraceData()` | Récupère l'historique track & trace. |
| `addConsignmentByConsignmentIds(array $ids, string $apiKey)` | Hydrate une collection à partir d'ID d'expédition existants. |
| `addConsignmentByReferenceIds($ids, $apiKey)` | Identique mais sur `reference_identifier`. |

Ordre des appels dans le workflow classique :

```
addConsignment*() → setLinkOfLabels() or setPdfOfLabels()
                 → downloadPdfOfLabels() or getLabelPdf()
                 → (optional) fetchTrackTraceData()
```

`setPdfOfLabels()` et `setLinkOfLabels()` déclenchent en interne `createConcepts()` s'il n'a pas encore été exécuté, vous avez rarement besoin de l'appeler explicitement.

## 9 · Labels et impression

### A6 versus A4
Le format papier par défaut est l'A6. Pour des feuilles A4 comportant plusieurs labels par page, passez une position :

```php
// A6, one label per page
$collection->setPdfOfLabels()->downloadPdfOfLabels();

// A4, label at position 1 (top-left), 2 (top-right), 3 (bottom-left), 4 (bottom-right)
$collection->setPdfOfLabels(2)->downloadPdfOfLabels();

// A4, starting from position 1, auto-fills the sheet
$collection->setPdfOfLabels(1)->downloadPdfOfLabels();
```

Les positions 1 à 4 ne comptent que sur l'A4. Sur l'A6 l'argument est ignoré.

### Impression directe (v10.6.0+)
Pour les boutiques dotées d'une imprimante de labels connectée dans le backoffice MyParcel :

```php
$collection
    ->setLinkOfLabels()
    ->printDirect('printer-group-uuid-here');
```

Récupérez le `printerGroupId` dans le backoffice, *Settings → Printers*. L'impression directe ne demande pas de PDF sur le disque ; l'expédition est attribuée directement au serveur d'impression.

### Partager un lien de label sans télécharger le PDF
```php
$url = $collection->setLinkOfLabels()->getLinkOfLabels();
// signed URL, short-lived — suitable for an email or UI link
```

## 10 · Track & Trace
Hydratez d'abord les consignments, puis récupérez les données T&T :

```php
$collection
    ->setLatestData()         // status + barcode
    ->fetchTrackTraceData();  // history events

foreach ($collection->getConsignments() as $c) {
    echo $c->getBarcode();
    echo $c->getBarcodeUrl(
        $c->getBarcode(),
        $c->getPostalCode(),
        $c->getCountry()
    );
}
```

`getBarcodeUrl()` renvoie l'URL **publique** de track-and-trace. Vous pouvez l'insérer sans risque dans un e-mail au client final.

Constantes de statut sur `AbstractConsignment` :

| Constant | Signification |
| --- | --- |
| `STATUS_CONCEPT` (`1`) | Créé, label pas encore imprimé. |
| Valeurs supérieures | Imprimé, remis, en transit, livré, retourné. Récupérez la liste actuelle via [`/shipments` ↗](../../api/myparcel.md). |

## 11 · Interroger et récupérer
### Par ID de consignment
```php
$collection = (new MyParcelCollection())
    ->addConsignmentByConsignmentIds([12345678, 12345679], $apiKey)
    ->setLatestData();
```

### Par reference identifier
```php
$collection = (new MyParcelCollection())
    ->addConsignmentByReferenceIds(['ORDER-2026-01042'], $apiKey)
    ->setLatestData();
```

### Filter / search
```php
$collection = MyParcelCollection::query($apiKey, [
    'q'      => 'de Vries',
    'status' => AbstractConsignment::STATUS_CONCEPT,
    'from'   => '2026-04-01 00:00:00',
    'to'     => '2026-05-01 00:00:00',
    'size'   => 100,
]);
```

Les clés de filtre valides reflètent les paramètres de l'endpoint `GET /shipments` dans la [référence de l'API](../../api/myparcel.md). Le SDK les transmet telles quelles.

## 12 · Retours
### Retour dans le colis (le label voyage avec l'expédition d'origine)
```php
$consignment->setReturn(true);
$collection->addConsignment($consignment);
```

Le label de retour se trouve à la page 2 du PDF. Le client le colle sur le colis et le renvoie.

### Retour sans impression (le client scanne un QR code chez PostNL)
```php
$consignment->setPrinterlessReturn(true);
```

Aucun label imprimé, le client reçoit un QR code dans le portail/l'e-mail. Ne fonctionne que sur les carriers qui le prennent en charge.

### Expédition de retour autonome
Pour les retours indépendants d'une expédition existante (par ex. un RMA après 30 jours) :

```php
$collection
    ->addConsignmentByConsignmentIds([$originalId], $apiKey)
    ->generateReturnConsignments(
        sendMail: true,
        modifier: function ($returnConsignment) {
            $returnConsignment->setLabelDescription('RMA-2026-7712');
        }
    );
```

`sendMail: true` déclenche l'e-mail de retour MyParcel standard vers le destinataire, avec le QR code ou le lien du label.

## 13 · Order API (Fulfilment)
Pour les comptes disposant d'un contrat de fulfilment : au lieu de créer directement des labels, vous placez une *order* qui suit ensuite le pipeline de fulfilment.

```php
use MyParcelNL\Sdk\Collection\Fulfilment\OrderCollection;
use MyParcelNL\Sdk\Model\Fulfilment\Order;
use MyParcelNL\Sdk\Model\Fulfilment\OrderLine;
use MyParcelNL\Sdk\Model\Fulfilment\Product;
use MyParcelNL\Sdk\Model\Recipient;

$order = (new Order())
    ->setExternalIdentifier('ORDER-2026-01042')
    ->setRecipient(new Recipient([
        'cc'         => 'NL',
        'person'     => 'J. de Vries',
        'street'     => 'Antwoordnummer',
        'number'     => '42',
        'postalCode' => '1012AB',
        'city'       => 'Amsterdam',
    ]))
    ->setOrderLines([
        (new OrderLine())
            ->setQuantity(2)
            ->setProduct(
                (new Product())
                    ->setSku('SKU-7712')
                    ->setName('Linen bag, blue')
                    ->setEan('8712345678905')
            ),
    ]);

(new OrderCollection())
    ->setApiKey($apiKey)
    ->push($order)
    ->save(); // POST /fulfilment/orders
```

### Order notes
Attachez des instructions de fulfilment ou des notes du service client à une order :

```php
use MyParcelNL\Sdk\Collection\Fulfilment\OrderNotesCollection;
use MyParcelNL\Sdk\Model\Fulfilment\OrderNote;

(new OrderNotesCollection())
    ->setApiKey($apiKey)
    ->push(
        (new OrderNote())
            ->setOrderUuid($order->getUuid())
            ->setNote('Add gift wrap')
            ->setAuthor('webshop')
    )
    ->save(); // POST /fulfilment/orders/{id}/notes
```

## 14 · Webhooks
Le SDK ne fournit pas de serveur de webhooks (c'est le rôle de votre application), mais il inclut des modèles pour gérer les abonnements. Voir [Webhooks](webhooks.md) pour des exemples de bout en bout.

```php
// pseudo: list all existing subscriptions
MyParcelRequest::sendRequest('GET', 'webhook_subscriptions');
```

Les types d'événements disponibles sont tenus à jour dans la [référence de l'API](../../api/myparcel.md#webhooks).

## 15 · Exceptions
Tout se trouve sous `MyParcelNL\Sdk\Exception\` :

| Exception | HTTP | Quand |
| --- | --- | --- |
| `InvalidConsignmentException` | `412` | Le validateur rejette la combinaison de champs (carrier + options). |
| `MissingFieldException` | `500` | Un champ obligatoire est vide (par ex. `country`). |
| `ApiException` | `502` | Erreur backend ou aucune connexion à `api.myparcel.nl`. |
| `ValidationException` | `422` | L'API a renvoyé une validation de champ que le SDK n'a pas détectée localement. |
| `AccountNotActiveException` | `403` | Boutique en pause / contrat non actif. |
| `NoConsignmentFoundException` | `404` | `addConsignmentByConsignmentIds` avec un ID inconnu. |

En plus de ces exceptions propres au SDK, vous pouvez également rencontrer des exceptions PHP génériques : `InvalidArgumentException` (type erroné transmis) et `BadMethodCallException` (aucun setter pour cette clé).

```php
use MyParcelNL\Sdk\Exception\ApiException;
use MyParcelNL\Sdk\Exception\InvalidConsignmentException;

try {
    $collection->setPdfOfLabels()->downloadPdfOfLabels();
} catch (InvalidConsignmentException $e) {
    // recoverable — log + correct the consignment
} catch (ApiException $e) {
    // network/backend — retry-with-backoff or queue
}
```

## 16 · Tester avec le SDK
Le SDK utilise PHPUnit + Mockery dans ses propres tests. Pour vos tests d'intégration :

- **Niveau unitaire**, mockez le helper `MyParcelCurl` ou la totalité de `MyParcelCollection` (`addConsignment` est fluent → facile à mocker).
- **Niveau intégration**, utilisez un compte sandbox et l'API réelle. Il n'existe pas d'URL de sandbox publique ; demandez une boutique de test via [support@myparcel.nl](mailto:support@myparcel.nl).
- **Les tests de snapshot sur les octets des labels** ne sont pas stables, l'assemblage des PDF utilise des timestamps. Testez la logique métier, pas les octets.

```bash
composer require --dev mockery/mockery phpunit/phpunit
./vendor/bin/phpunit
```

## 17 · Migrer depuis des versions plus anciennes
### Depuis l'ancien namespace `MyParcel\Sdk`
Le SDK antérieur à la v8 utilisait `MyParcel\Sdk\` sans `NL`. Rechercher-remplacer :

```
MyParcel\Sdk\   →   MyParcelNL\Sdk\
```

PSR-4 s'occupe du reste, aucune configuration d'autoload supplémentaire n'est nécessaire.

### Vers la v10.x
Principales ruptures par version mineure :

| Version | Ce qui a changé |
| --- | --- |
| **v10.7.0** | `priority_delivery` ajouté pour PostNL mailbox (BBP Prio 24h). Aucune rupture. |
| **v10.6.0** | `printDirect()` sur `MyParcelCollection`. |
| **v10.5.0** | Paramètres généraux du compte exposés via les modèles `Account`. |
| **v10.4.0** | Trunkrs en tant que carrier (`ID 16`). |
| **v10.3.x** | Corrections de deprecation PHP 8.4 ; les montants d'assurance sont correctement convertis en centimes. |
| **v10.x → v9** | `setUserAgent()` est deprecated, utilisez `setUserAgentForProposition()`. |

Changelog complet : [github.com/myparcelnl/sdk/blob/main/CHANGELOG.md ↗](https://github.com/myparcelnl/sdk/blob/main/CHANGELOG.md).

## 18 · Contribuer et support
- **Source**, [github.com/myparcelnl/sdk ↗](https://github.com/myparcelnl/sdk) (MIT)
- **Issues**, ouvrez une issue en indiquant la version de PHP, la version du SDK et une reproduction minimale.
- **Slack**, `#sdk` sur [myparcel-dev.slack.com ↗](https://join.slack.com/t/myparcel-dev/shared_invite/enQtNDkyNTg3NzA1MjM4LTM0Y2IzNmZlY2NkOWFlNTIyODY5YjFmNGQyYzZjYmQzMzliNDBjYzBkOGMwYzA0ZDYzNmM1NzAzNDY1ZjEzOTM)
- **E-mail**, [support@myparcel.nl](mailto:support@myparcel.nl)

Directives pour les PR : créez une branche depuis `main`, écrivez des tests avec Mockery (pas de HTTP en direct), les commits suivent [Conventional Commits](https://www.conventionalcommits.org/).
