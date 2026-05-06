---
title: PHP SDK
description: "Riferimento tecnico per il pacchetto Composer ufficiale myparcelnl/sdk. Copre installazione, ciclo di vita del consignment, carrier, etichette, resi, Fulfilment Order API e stampa diretta."
---

::: tip In sintesi
Il PHP SDK avvolge l'API REST di MyParcel in un modello a oggetti tipizzato: costruisci un `Consignment`, mettilo in una `MyParcelCollection`, spediscilo. L'SDK gestisce la firma delle richieste, il rendering delle etichette e lo stitching dei PDF. Tutto è open source sotto licenza MIT su [github.com/myparcelnl/sdk ↗](https://github.com/myparcelnl/sdk).
:::

## Cosa stai cercando?
| Obiettivo | Sezione |
| --- | --- |
| Installare e inviare la prima spedizione | [1 · Installazione](#_1-installazione) → [4 · Avvio rapido](#_4-avvio-rapido-prima-spedizione) |
| Scegliere un carrier e vederne le possibilità | [6 · Carrier](#_6-carrier) |
| Package type, delivery type, shipment options | [7 · Opzioni del consignment](#_7-opzioni-del-consignment) |
| Generare etichette in PDF (A4/A6) | [9 · Etichette e stampa](#_9-etichette-e-stampa) |
| Recuperare Track & Trace | [10 · Track & Trace](#_10-track-trace) |
| Ritrovare consignment esistenti | [11 · Query e recupero](#_11-query-e-recupero) |
| Creare resi | [12 · Resi](#_12-resi) |
| Usare la Order API (Fulfilment) | [13 · Order API (Fulfilment)](#_13-order-api-fulfilment) |
| Gestire gli errori | [15 · Eccezioni](#_15-eccezioni) |
| Migrare da una versione precedente | [17 · Migrazione](#_17-migrazione-da-versioni-precedenti) |

::: warning Stato di questa pagina
La vecchia versione su [developer.myparcel.nl/documentation/50.php-sdk.html ↗](https://developer.myparcel.nl/documentation/50.php-sdk.html) è obsoleta (PHP 7.1, namespace `MyParcel\Sdk`). Questa pagina è scritta per `myparcelnl/sdk` v10.7+ e usa il namespace attuale `MyParcelNL\Sdk\`.
:::

## 1 · Installazione
```
composer require myparcelnl/sdk
```

Autoload PSR-4 — nessun `require` manuale necessario. Sorgente: [Packagist ↗](https://packagist.org/packages/myparcelnl/sdk).

### Requisiti
| | Versione |
| --- | --- |
| PHP | 7.4 oppure 8.x (8.1+ consigliato, 8.4 supportato dalla v10.3.6) |
| Composer | 2.x |
| Estensioni | `ext-curl`, `ext-json`, `ext-mbstring` |
| Dipendenze runtime | `setasign/fpdf ^1.8`, `setasign/fpdi ^2.6` (stitching delle etichette) |

Constraint Composer: `"php": "^7.4 || ^8.0"`. Le versioni di PHP inferiori alla 7.4 non sono più supportate.

## 2 · Architettura a colpo d'occhio
L'SDK segue tre livelli:

```
Carrier  ──►  Consignment  ──►  MyParcelCollection
( ID/nome)    (un pacchetto)    (batch + label-IO)
```

- **Carrier** — un modello statico per ogni vettore con `ID`, `NAME` e la classe `Consignment` associata. Vedi [`src/Model/Carrier`](https://github.com/myparcelnl/sdk/tree/main/src/Model/Carrier).
- **Consignment** — tutti i dati di un singolo collo (mittente, destinatario, opzioni, proprietà fisiche). Le sottoclassi specifiche per carrier (es. `PostNLConsignment`) determinano quali combinazioni di `delivery_type`, `package_type` e `shipment_option` sono ammesse. Vedi [`src/Model/Consignment`](https://github.com/myparcelnl/sdk/tree/main/src/Model/Consignment).
- **MyParcelCollection** — raccoglie i consignment, parla con l'API (`POST /shipments`, `/shipment_labels`, `/track_traces`), genera PDF di etichette e gestisce il multi-collo. Vedi [`src/Helper/MyParcelCollection.php`](https://github.com/myparcelnl/sdk/blob/main/src/Helper/MyParcelCollection.php).

Namespace di alto livello:

| Namespace | Scopo |
| --- | --- |
| `MyParcelNL\Sdk\Factory` | `ConsignmentFactory`, `DeliveryOptionsAdapterFactory` |
| `MyParcelNL\Sdk\Model\Carrier` | Classi carrier e `CarrierFactory` |
| `MyParcelNL\Sdk\Model\Consignment` | `AbstractConsignment` + sottoclassi per carrier |
| `MyParcelNL\Sdk\Model\Fulfilment` | `Order`, `OrderLine`, `OrderNote`, `Product` |
| `MyParcelNL\Sdk\Helper` | `MyParcelCollection`, `LabelHelper`, `TrackTraceUrl`, `Utils` |
| `MyParcelNL\Sdk\Services` | Encoder e `CountryService` |
| `MyParcelNL\Sdk\Exception` | Tutte le eccezioni dell'SDK |

## 3 · Autenticazione
L'SDK si autentica per ogni richiesta con una **shop API key** (Basic auth). Nessun flusso OAuth a livello di SDK — lo scambio di token è gestito internamente dall'SDK quando l'API lo richiede.

```php
$apiKey = getenv('MYPARCEL_API_KEY'); // shop key codificata in base64 dal backoffice
```

Come viene utilizzata la key:

```php
use MyParcelNL\Sdk\Factory\ConsignmentFactory;
use MyParcelNL\Sdk\Model\Carrier\CarrierPostNL;

$consignment = ConsignmentFactory::createByCarrierId(CarrierPostNL::ID)
    ->setApiKey($apiKey);
```

`setApiKey()` è disponibile su ogni consignment, quindi è possibile mescolare più key all'interno di una stessa collection — utile per integrazioni multi-shop.

::: warning Igiene delle key
Conserva le key lato server in env var, secret manager o `.env` (fuori dal VCS). Non inviarle mai al browser. Il rate-limit dell'API è legato alla key — una key trapelata è immediatamente sfruttabile.
:::

### User-agent (obbligatorio per le integrazioni)
Plugin e integrazioni proprietarie devono identificarsi — altrimenti il debug è impossibile e MyParcel non può capire cosa causa un problema.

```php
$consignment->setUserAgentForProposition('CustomShop', '2.4.1');
```

`setUserAgentForProposition(string $proposition, ?string $version)` è la nuova API; `setUserAgent()` è deprecato e verrà rimosso nella prossima major. L'SDK aggiunge da solo `MyParcelNL-SDK/<sdkVersion>` e `php/<phpVersion>` all'header.

## 4 · Avvio rapido — prima spedizione
Un consignment, un'etichetta, un PDF A6 su disco.

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
    ->downloadPdfOfLabels();     // invia il PDF in streaming al browser
```

Cosa succede sotto il cofano: la collection chiama `POST /shipments`, riceve gli ID dei consignment, poi richiede le etichette tramite `GET /shipment_labels/{ids}` e le unisce in un unico PDF.

## 5 · Convenzioni del builder
- **Setter fluent.** Ogni setter restituisce `$this` — concatenali liberamente.
- **Costanti invece di stringhe.** `PACKAGE_TYPE_PACKAGE` (= 1) e `DELIVERY_TYPE_STANDARD` (= 2) sono più leggibili dei magic number e non si rompono se l'API estende i range.
- **I validator girano automaticamente.** Per ogni carrier esiste un `*ConsignmentValidator` che impone le combinazioni ammesse. Un `setSignature(true)` su un carrier che non lo supporta lancia una `InvalidConsignmentException`.
- **Metodi `getAllowed*()`.** Chiedi a un consignment quali opzioni sono valide prima di usarle:
  ```php
  $consignment->getAllowedDeliveryTypes();   // ['morning','standard','evening','pickup']
  $consignment->getAllowedPackageTypes();    // ['package','mailbox','letter','digital_stamp','package_small']
  $consignment->getAllowedShipmentOptions(); // ['age_check','insurance','large_format', ...]
  ```

## 6 · Carrier
Ogni carrier ha un `ID` (numerico, usato dall'API) e un `NAME` (slug, usato nelle chiamate factory basate sul nome).

| Carrier | Classe | `ID` | `NAME` |
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

::: tip Quali carrier sono disponibili per il mio account?
La disponibilità è contrattuale — non tutti i carrier sono presenti in ogni contratto shop. L'API restituisce un errore `403`/validation se utilizzi un carrier non attivato.
:::

## 7 · Opzioni del consignment

### Package type
Il tipo determina le regole dimensionali e quali shipment option sono disponibili. Varia per carrier; controlla con `getAllowedPackageTypes()`.

| Costante | ID | Nome | Quando |
| --- | --- | --- | --- |
| `PACKAGE_TYPE_PACKAGE` | `1` | `package` | Pacchetto standard. Default. |
| `PACKAGE_TYPE_MAILBOX` | `2` | `mailbox` | Pacco da buca delle lettere (≤ 2 cm di spessore, solo NL). |
| `PACKAGE_TYPE_LETTER` | `3` | `letter` | Lettera non assicurata, senza track & trace. |
| `PACKAGE_TYPE_DIGITAL_STAMP` | `4` | `digital_stamp` | Francobollo digitale — è comunque necessario indicare il peso. |
| `PACKAGE_TYPE_PACKAGE_SMALL` | `6` | `package_small` | Pacchetto piccolo (PostNL). |

### Delivery type
| Costante | ID | Nome |
| --- | --- | --- |
| `DELIVERY_TYPE_MORNING` | `1` | `morning` |
| `DELIVERY_TYPE_STANDARD` | `2` | `standard` (default) |
| `DELIVERY_TYPE_EVENING` | `3` | `evening` |
| `DELIVERY_TYPE_PICKUP` | `4` | `pickup` |
| `DELIVERY_TYPE_EXPRESS` | `7` | `express` |

Le spedizioni pickup richiedono una `PickupLocation` — impostala con `setPickupLocation(new PickupLocation([...]))`.

### Shipment options
Extra booleani aggiunti al trasporto base.

| Costante | API key | Setter |
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
| `SHIPMENT_OPTION_PRIORITY_DELIVERY` | `priority_delivery` | `setPriorityDelivery(bool)` (dalla v10.7.0) |
| `SHIPMENT_OPTION_RECEIPT_CODE` | `receipt_code` | `setReceiptCode(bool)` |
| `SHIPMENT_OPTION_COLLECT` | `collect` | `setCollect(bool)` |
| `SHIPMENT_OPTION_FRESH_FOOD` | `fresh_food` | `setFreshFood(bool)` |
| `SHIPMENT_OPTION_FROZEN` | `frozen` | `setFrozen(bool)` |

::: warning Combinazioni valide
Non tutte le opzioni sono combinabili tra loro — es. `receipt_code` + `signature` è bloccata. Il validator per carrier lancia `InvalidConsignmentException` indicando esattamente la regola violata.
:::

### Assicurazione
Importi in **eurocentesimi**. I massimali ammessi per paese si ottengono con `getInsurancePossibilities(?string $cc)`:

```php
$consignment->getInsurancePossibilities('NL'); // [0, 100, 250, 500, ..., 50000]
$consignment->setInsurance(50000);             // €500
```

### Multi-collo (un unico flusso di etichette per più colli)
Per spedizioni che fisicamente sono più colli ma logicamente appartengono allo stesso ordine:

```php
(new MyParcelCollection())
    ->addMultiCollo($consignment, 3)        // 1 collo principale + 2 secondari
    ->setPdfOfLabels()
    ->downloadPdfOfLabels();
```

Funziona solo sui carrier che offrono multi-collo (`getAllowedExtraOptions()` contiene `'multi_collo'`).

## 8 · MyParcelCollection — API batch
`MyParcelCollection` è una collection in stile Laravel con metodi specifici dell'SDK. API pubblica principale:

| Metodo | Scopo |
| --- | --- |
| `addConsignment($c)` | Aggiunge un singolo consignment. |
| `addMultiCollo($c, $amount)` | Multi-collo (vedi sopra). |
| `addMultiColloConsignments(array $cs)` | Aggiunge in una volta sola un set già raggruppato. |
| `createConcepts()` | `POST /shipments` per l'intero batch. |
| `setLatestData(int $size = 300)` | Idrata i consignment con i dati del server (status, barcode, ID). |
| `setLinkOfLabels($pos = 1)` | Richiede il link di download del PDF delle etichette. |
| `setPdfOfLabels($pos = 1)` | Richiede i byte del PDF (chiamato internamente da `downloadPdfOfLabels`). |
| `downloadPdfOfLabels($inline = false)` | Invia il PDF in streaming al browser (`Content-Disposition: attachment` o `inline`). |
| `getLabelPdf()` / `getLinkOfLabels()` | Stringa raw del PDF o link delle etichette dopo `setPdfOfLabels()`/`setLinkOfLabels()`. |
| `printDirect(string $printerGroupId)` | Invia direttamente a una stampante collegata. Richiede v10.6.0+. |
| `generateReturnConsignments(bool $sendMail, ?Closure $modifier)` | Crea spedizioni di reso a partire da pacchetti esistenti. |
| `fetchTrackTraceData()` | Recupera lo storico track & trace. |
| `addConsignmentByConsignmentIds(array $ids, string $apiKey)` | Idrata una collection a partire da shipment ID esistenti. |
| `addConsignmentByReferenceIds($ids, $apiKey)` | Idem ma su `reference_identifier`. |

Ordine delle chiamate nel workflow tipico:

```
addConsignment*() → setLinkOfLabels() oppure setPdfOfLabels()
                 → downloadPdfOfLabels() oppure getLabelPdf()
                 → (opzionale) fetchTrackTraceData()
```

`setPdfOfLabels()` e `setLinkOfLabels()` triggerano internamente `createConcepts()` se non è ancora stato chiamato — raramente devi invocarlo esplicitamente.

## 9 · Etichette e stampa

### A6 vs A4
Il formato carta di default è A6. Per fogli A4 con più etichette per pagina puoi passare una posizione:

```php
// A6, una etichetta per pagina
$collection->setPdfOfLabels()->downloadPdfOfLabels();

// A4, etichetta in posizione 1 (in alto a sinistra), 2 (in alto a destra), 3 (in basso a sinistra), 4 (in basso a destra)
$collection->setPdfOfLabels(2)->downloadPdfOfLabels();

// A4, partendo dalla posizione 1, riempimento automatico
$collection->setPdfOfLabels(1)->downloadPdfOfLabels();
```

Le posizioni 1–4 sono rilevanti solo per A4. Su A6 l'argomento viene ignorato.

### Stampa diretta (v10.6.0+)
Per i clienti che hanno una stampante etichette collegata nel backoffice MyParcel:

```php
$collection
    ->setLinkOfLabels()
    ->printDirect('printer-group-uuid-here');
```

Il `printerGroupId` lo trovi nel backoffice — *Impostazioni → Stampanti*. La stampa diretta non richiede di avere il PDF su disco; il print server riceve direttamente la spedizione.

### Condividere il link dell'etichetta senza scaricare il PDF
```php
$url = $collection->setLinkOfLabels()->getLinkOfLabels();
// URL firmato, validità breve — adatto per e-mail o link UI
```

## 10 · Track & Trace
Prima idrata i consignment, poi recupera i dati T&T:

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

`getBarcodeUrl()` restituisce l'URL **pubblico** track-and-trace. Si incolla in sicurezza in un'e-mail al cliente finale.

Costanti di status su `AbstractConsignment`:

| Costante | Significato |
| --- | --- |
| `STATUS_CONCEPT` (`1`) | Creato, etichetta non ancora stampata. |
| Valori superiori | Stampato, consegnato al carrier, in transito, recapitato, reso. Recupera l'elenco aggiornato tramite [`/shipments` ↗](../api/myparcel.md). |

## 11 · Query e recupero
### Per consignment ID
```php
$collection = (new MyParcelCollection())
    ->addConsignmentByConsignmentIds([12345678, 12345679], $apiKey)
    ->setLatestData();
```

### Per reference identifier
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

Le filter key valide seguono i parametri dell'endpoint `GET /shipments` nel [riferimento API](../api/myparcel.md). L'SDK le passa 1-a-1.

## 12 · Resi
### Reso nella scatola (etichetta inclusa nella spedizione originale)
```php
$consignment->setReturn(true);
$collection->addConsignment($consignment);
```

L'etichetta del reso si trova a pagina 2 del PDF. Il cliente la incolla sulla scatola e la rispedisce indietro.

### Printerless return (il cliente scansiona un QR-code presso PostNL)
```php
$consignment->setPrinterlessReturn(true);
```

Nessuna etichetta stampata — il cliente riceve un QR-code nel portale o via e-mail. Funziona solo sui carrier che lo supportano.

### Generare un reso indipendente
Per resi scollegati da una spedizione esistente (es. RMA dopo 30 giorni):

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

`sendMail: true` invia l'e-mail standard di reso MyParcel al destinatario con QR-code o link all'etichetta.

## 13 · Order API (Fulfilment)
Per gli account con contratto fulfilment: invece di creare direttamente le etichette, inserisci un *order* che successivamente entrerà nel flusso di fulfilment.

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
                    ->setName('Borsa di lino, blu')
                    ->setEan('8712345678905')
            ),
    ]);

(new OrderCollection())
    ->setApiKey($apiKey)
    ->push($order)
    ->save(); // POST /fulfilment/orders
```

### Note sull'order
Aggiungi istruzioni di fulfilment o note del customer service a un order:

```php
use MyParcelNL\Sdk\Collection\Fulfilment\OrderNotesCollection;
use MyParcelNL\Sdk\Model\Fulfilment\OrderNote;

(new OrderNotesCollection())
    ->setApiKey($apiKey)
    ->push(
        (new OrderNote())
            ->setOrderUuid($order->getUuid())
            ->setNote('Aggiungere carta regalo')
            ->setAuthor('webshop')
    )
    ->save(); // POST /fulfilment/orders/{id}/notes
```

## 14 · Webhook
L'SDK non include un webhook server (quello è la tua applicazione), ma fornisce i model per gestire le subscription. Vedi [Webhook](webhooks.md) per esempi end-to-end.

```php
// pseudo: visualizza tutte le subscription esistenti
MyParcelRequest::sendRequest('GET', 'webhook_subscriptions');
```

L'elenco aggiornato dei tipi di evento è mantenuto nel [riferimento API](../api/myparcel.md#webhooks).

## 15 · Eccezioni
Tutto in `MyParcelNL\Sdk\Exception\`:

| Eccezione | HTTP | Quando |
| --- | --- | --- |
| `InvalidConsignmentException` | `412` | Il validator rifiuta la combinazione dei campi (carrier + opzioni). |
| `MissingFieldException` | `500` | Campo obbligatorio lasciato vuoto (es. `country`). |
| `ApiException` | `502` | Errore backend o nessuna connessione a `api.myparcel.nl`. |
| `ValidationException` | `422` | L'API ha restituito un errore di validazione che l'SDK non ha intercettato localmente. |
| `AccountNotActiveException` | `403` | Shop in pausa / contratto non attivo. |
| `NoConsignmentFoundException` | `404` | `addConsignmentByConsignmentIds` con un ID sconosciuto. |

Oltre a queste eccezioni specifiche dell'SDK puoi anche ricevere generiche eccezioni PHP — `InvalidArgumentException` (tipo errato passato) e `BadMethodCallException` (nessun setter per quella key).

```php
use MyParcelNL\Sdk\Exception\ApiException;
use MyParcelNL\Sdk\Exception\InvalidConsignmentException;

try {
    $collection->setPdfOfLabels()->downloadPdfOfLabels();
} catch (InvalidConsignmentException $e) {
    // recuperabile — log + correggi il consignment
} catch (ApiException $e) {
    // network/backend — retry-with-backoff o queue
}
```

## 16 · Test contro l'SDK
L'SDK utilizza PHPUnit + Mockery nei propri test. Per i tuoi test di integrazione:

- **Livello unit** — fai mock dell'helper `MyParcelCurl` o dell'intera `MyParcelCollection` (`addConsignment` è fluent → facile da mockare).
- **Livello integration** — usa un account sandbox e l'API reale. Non esiste un URL sandbox pubblico; richiedi un test-shop tramite [support@myparcel.nl](mailto:support@myparcel.nl).
- **Snapshot test sui byte delle etichette** non sono stabili — lo stitching del PDF usa timestamp. Testa la business logic, non i byte.

```bash
composer require --dev mockery/mockery phpunit/phpunit
./vendor/bin/phpunit
```

## 17 · Migrazione da versioni precedenti
### Dal vecchio namespace `MyParcel\Sdk`
L'SDK pre-v8 usava `MyParcel\Sdk\` senza `NL`. Find-and-replace:

```
MyParcel\Sdk\   →   MyParcelNL\Sdk\
```

PSR-4 fa il resto — nessuna ulteriore configurazione di autoload.

### Verso v10.x
Principali break per minor:

| Versione | Cosa è cambiato |
| --- | --- |
| **v10.7.0** | `priority_delivery` aggiunto per PostNL mailbox (BBP Prio 24h). Nessun break. |
| **v10.6.0** | `printDirect()` su `MyParcelCollection`. |
| **v10.5.0** | Account general settings esposti tramite i model `Account`. |
| **v10.4.0** | Trunkrs come carrier (`ID 16`). |
| **v10.3.x** | Fix dei deprecation di PHP 8.4; gli importi delle assicurazioni vengono convertiti correttamente in centesimi. |
| **v10.x → v9** | `setUserAgent()` è deprecato — usa `setUserAgentForProposition()`. |

Changelog completo: [github.com/myparcelnl/sdk/blob/main/CHANGELOG.md ↗](https://github.com/myparcelnl/sdk/blob/main/CHANGELOG.md).

## 18 · Contributi e supporto
- **Sorgente** — [github.com/myparcelnl/sdk ↗](https://github.com/myparcelnl/sdk) (MIT)
- **Issue** — apri una issue indicando versione di PHP, versione dell'SDK e un esempio minimale di riproduzione.
- **Slack** — `#sdk` su [myparcel-dev.slack.com ↗](https://join.slack.com/t/myparcel-dev/shared_invite/enQtNDkyNTg3NzA1MjM4LTM0Y2IzNmZlY2NkOWFlNTIyODY5YjFmNGQyYzZjYmQzMzliNDBjYzBkOGMwYzA0ZDYzNmM1NzAzNDY1ZjEzOTM)
- **E-mail** — [support@myparcel.nl](mailto:support@myparcel.nl)

Linee guida per le PR: branch da `main`, scrivi i test con Mockery (niente HTTP live), commit secondo [Conventional Commits](https://www.conventionalcommits.org/).
