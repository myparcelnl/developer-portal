---
title: Product API
description: "This API features managing products."
---

## Endpoints {#endpoints}

Auto-generated from `product.api.myparcel.nl/openapi.yaml`. Click an endpoint to see its parameters and code samples.

**CREATE PRODUCT**

### `POST /create-product` {#post-create-product}

_Create a product._

Create a product.

**Responses**

| Status | Description |
| --- | --- |
| 200 | product is created. |
| 400 | Invalid request syntax |

**Request — POST /create-product**

::: code-group
```bash [cURL]
curl -X POST 'https://product.api.myparcel.nl/create-product' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
    "name": "test-name",
    "createdAt": "2024-11-13T19:20:33+00:00",
    "status": "ACTIVE",
    "trackInventory": true,
    "barcode": "12345678",
    "containsDangerousSubstances": true,
    "countryCodeOfOrigin": "NL",
    "descriptions": [
      {
        "text": "Description",
        "languageCode": "en"
      }
    ],
    "dimensions": {
      "height": {
        "value": 100,
        "unit": "cm"
      },
      "length": {
        "value": 100,
        "unit": "cm"
      },
      "weight": {
        "value": 1000,
        "unit": "gr"
      },
      "width": {
        "value": 100,
        "unit": "cm"
      }
    },
    "ean": "12345678",
    "hasUnlimitedShelfLife": true,
    "hsCode": "123456",
    "purchasePrice": {
      "currency": "EUR",
      "integral": 10,
      "fractional": 99
    },
    "salesPrice": {
      "currency": "EUR",
      "integral": 10,
      "fractional": 99,
      "taxRate": 21
    },
    "sku": "sku",
    "children": [
      {
        "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "quantity": 2
      }
    ],
    "fulfilmentPlatforms": [
      "VASCO"
    ],
    "salesChannels": [
      {
        "sourceId": "sales-channel-shopify-external-ID",
        "salesChannelId": "sales-channel-shopify-sales-channel-ID",
        "ecommercePlatformName": "shopify",
        "inventoryLocationId": "test-location-id",
        "inventoryItemId": "test-inventory-item-id"
      },
      {
        "sourceId": "sales-channel-bol-external-ID",
        "salesChannelId": "sales-channel-bol-sales-channel-ID",
        "ecommercePlatformName": "bol"
      },
      {
        "sourceId": "sales-channel-woocommerce-external-ID",
        "salesChannelId": "sales-channel-woocommerce-sales-channel-ID",
        "ecommercePlatformName": "woocommerce"
      },
      {
        "sourceId": "sales-channel-lightspeed-external-ID",
        "salesChannelId": "sales-channel-lightspeed-sales-channel-ID",
        "ecommercePlatformName": "lightspeed"
      },
      {
        "sourceId": "sales-channel-magento-external-ID",
        "salesChannelId": "sales-channel-magento-sales-channel-ID",
        "ecommercePlatformName": "magento"
      },
      {
        "sourceId": "sales-channel-presta-external-ID",
        "salesChannelId": "sales-channel-presta-sales-channel-ID",
        "ecommercePlatformName": "presta"
      }
    ],
    "shopIds": [
      "test-shop-id"
    ],
    "stock": {
      "VASCO": {
        "free": 15,
        "value": 20
      }
    },
    "updatedAt": "2024-11-13T19:20:34+00:00"
  },
  {
    "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
    "name": "test-name",
    "createdAt": "2024-11-13T19:20:33+00:00",
    "status": "ACTIVE",
    "trackInventory": true
  }
]'
```

```php [PHP]
<?php
$ch = curl_init("https://product.api.myparcel.nl/create-product");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([{"id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a", "name": "test-name", "createdAt": "2024-11-13T19:20:33+00:00", "status": "ACTIVE", "trackInventory": true, "barcode": "12345678", "containsDangerousSubstances": true, "countryCodeOfOrigin": "NL", "descriptions": [{"text": "Description", "languageCode": "en"}], "dimensions": {"height": {"value": 100, "unit": "cm"}, "length": {"value": 100, "unit": "cm"}, "weight": {"value": 1000, "unit": "gr"}, "width": {"value": 100, "unit": "cm"}}, "ean": "12345678", "hasUnlimitedShelfLife": true, "hsCode": "123456", "purchasePrice": {"currency": "EUR", "integral": 10, "fractional": 99}, "salesPrice": {"currency": "EUR", "integral": 10, "fractional": 99, "taxRate": 21}, "sku": "sku", "children": [{"id": "a2aacbcc-b6c1-48d5-a9e1-179425737965", "quantity": 2}], "fulfilmentPlatforms": ["VASCO"], "salesChannels": [{"sourceId": "sales-channel-shopify-external-ID", "salesChannelId": "sales-channel-shopify-sales-channel-ID", "ecommercePlatformName": "shopify", "inventoryLocationId": "test-location-id", "inventoryItemId": "test-inventory-item-id"}, {"sourceId": "sales-channel-bol-external-ID", "salesChannelId": "sales-channel-bol-sales-channel-ID", "ecommercePlatformName": "bol"}, {"sourceId": "sales-channel-woocommerce-external-ID", "salesChannelId": "sales-channel-woocommerce-sales-channel-ID", "ecommercePlatformName": "woocommerce"}, {"sourceId": "sales-channel-lightspeed-external-ID", "salesChannelId": "sales-channel-lightspeed-sales-channel-ID", "ecommercePlatformName": "lightspeed"}, {"sourceId": "sales-channel-magento-external-ID", "salesChannelId": "sales-channel-magento-sales-channel-ID", "ecommercePlatformName": "magento"}, {"sourceId": "sales-channel-presta-external-ID", "salesChannelId": "sales-channel-presta-sales-channel-ID", "ecommercePlatformName": "presta"}], "shopIds": ["test-shop-id"], "stock": {"VASCO": {"free": 15, "value": 20}}, "updatedAt": "2024-11-13T19:20:34+00:00"}, {"id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a", "name": "test-name", "createdAt": "2024-11-13T19:20:33+00:00", "status": "ACTIVE", "trackInventory": true}]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://product.api.myparcel.nl/create-product", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
      "name": "test-name",
      "createdAt": "2024-11-13T19:20:33+00:00",
      "status": "ACTIVE",
      "trackInventory": true,
      "barcode": "12345678",
      "containsDangerousSubstances": true,
      "countryCodeOfOrigin": "NL",
      "descriptions": [
        {
          "text": "Description",
          "languageCode": "en"
        }
      ],
      "dimensions": {
        "height": {
          "value": 100,
          "unit": "cm"
        },
        "length": {
          "value": 100,
          "unit": "cm"
        },
        "weight": {
          "value": 1000,
          "unit": "gr"
        },
        "width": {
          "value": 100,
          "unit": "cm"
        }
      },
      "ean": "12345678",
      "hasUnlimitedShelfLife": true,
      "hsCode": "123456",
      "purchasePrice": {
        "currency": "EUR",
        "integral": 10,
        "fractional": 99
      },
      "salesPrice": {
        "currency": "EUR",
        "integral": 10,
        "fractional": 99,
        "taxRate": 21
      },
      "sku": "sku",
      "children": [
        {
          "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
          "quantity": 2
        }
      ],
      "fulfilmentPlatforms": [
        "VASCO"
      ],
      "salesChannels": [
        {
          "sourceId": "sales-channel-shopify-external-ID",
          "salesChannelId": "sales-channel-shopify-sales-channel-ID",
          "ecommercePlatformName": "shopify",
          "inventoryLocationId": "test-location-id",
          "inventoryItemId": "test-inventory-item-id"
        },
        {
          "sourceId": "sales-channel-bol-external-ID",
          "salesChannelId": "sales-channel-bol-sales-channel-ID",
          "ecommercePlatformName": "bol"
        },
        {
          "sourceId": "sales-channel-woocommerce-external-ID",
          "salesChannelId": "sales-channel-woocommerce-sales-channel-ID",
          "ecommercePlatformName": "woocommerce"
        },
        {
          "sourceId": "sales-channel-lightspeed-external-ID",
          "salesChannelId": "sales-channel-lightspeed-sales-channel-ID",
          "ecommercePlatformName": "lightspeed"
        },
        {
          "sourceId": "sales-channel-magento-external-ID",
          "salesChannelId": "sales-channel-magento-sales-channel-ID",
          "ecommercePlatformName": "magento"
        },
        {
          "sourceId": "sales-channel-presta-external-ID",
          "salesChannelId": "sales-channel-presta-sales-channel-ID",
          "ecommercePlatformName": "presta"
        }
      ],
      "shopIds": [
        "test-shop-id"
      ],
      "stock": {
        "VASCO": {
          "free": 15,
          "value": 20
        }
      },
      "updatedAt": "2024-11-13T19:20:34+00:00"
    },
    {
      "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
      "name": "test-name",
      "createdAt": "2024-11-13T19:20:33+00:00",
      "status": "ACTIVE",
      "trackInventory": true
    }
  ]),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = [
    {
        "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
        "name": "test-name",
        "createdAt": "2024-11-13T19:20:33+00:00",
        "status": "ACTIVE",
        "trackInventory": true,
        "barcode": "12345678",
        "containsDangerousSubstances": true,
        "countryCodeOfOrigin": "NL",
        "descriptions": [
            {
                "text": "Description",
                "languageCode": "en"
            }
        ],
        "dimensions": {
            "height": {
                "value": 100,
                "unit": "cm"
            },
            "length": {
                "value": 100,
                "unit": "cm"
            },
            "weight": {
                "value": 1000,
                "unit": "gr"
            },
            "width": {
                "value": 100,
                "unit": "cm"
            }
        },
        "ean": "12345678",
        "hasUnlimitedShelfLife": true,
        "hsCode": "123456",
        "purchasePrice": {
            "currency": "EUR",
            "integral": 10,
            "fractional": 99
        },
        "salesPrice": {
            "currency": "EUR",
            "integral": 10,
            "fractional": 99,
            "taxRate": 21
        },
        "sku": "sku",
        "children": [
            {
                "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
                "quantity": 2
            }
        ],
        "fulfilmentPlatforms": [
            "VASCO"
        ],
        "salesChannels": [
            {
                "sourceId": "sales-channel-shopify-external-ID",
                "salesChannelId": "sales-channel-shopify-sales-channel-ID",
                "ecommercePlatformName": "shopify",
                "inventoryLocationId": "test-location-id",
                "inventoryItemId": "test-inventory-item-id"
            },
            {
                "sourceId": "sales-channel-bol-external-ID",
                "salesChannelId": "sales-channel-bol-sales-channel-ID",
                "ecommercePlatformName": "bol"
            },
            {
                "sourceId": "sales-channel-woocommerce-external-ID",
                "salesChannelId": "sales-channel-woocommerce-sales-channel-ID",
                "ecommercePlatformName": "woocommerce"
            },
            {
                "sourceId": "sales-channel-lightspeed-external-ID",
                "salesChannelId": "sales-channel-lightspeed-sales-channel-ID",
                "ecommercePlatformName": "lightspeed"
            },
            {
                "sourceId": "sales-channel-magento-external-ID",
                "salesChannelId": "sales-channel-magento-sales-channel-ID",
                "ecommercePlatformName": "magento"
            },
            {
                "sourceId": "sales-channel-presta-external-ID",
                "salesChannelId": "sales-channel-presta-sales-channel-ID",
                "ecommercePlatformName": "presta"
            }
        ],
        "shopIds": [
            "test-shop-id"
        ],
        "stock": {
            "VASCO": {
                "free": 15,
                "value": 20
            }
        },
        "updatedAt": "2024-11-13T19:20:34+00:00"
    },
    {
        "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
        "name": "test-name",
        "createdAt": "2024-11-13T19:20:33+00:00",
        "status": "ACTIVE",
        "trackInventory": true
    }
]

response = requests.post("https://product.api.myparcel.nl/create-product", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://product.api.myparcel.nl/create-product')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[{\"id\": \"b9b4ac3e-8566-4481-9f1f-614c38d2b72a\", \"name\": \"test-name\", \"createdAt\": \"2024-11-13T19:20:33+00:00\", \"status\": \"ACTIVE\", \"trackInventory\": true, \"barcode\": \"12345678\", \"containsDangerousSubstances\": true, \"countryCodeOfOrigin\": \"NL\", \"descriptions\": [{\"text\": \"Description\", \"languageCode\": \"en\"}], \"dimensions\": {\"height\": {\"value\": 100, \"unit\": \"cm\"}, \"length\": {\"value\": 100, \"unit\": \"cm\"}, \"weight\": {\"value\": 1000, \"unit\": \"gr\"}, \"width\": {\"value\": 100, \"unit\": \"cm\"}}, \"ean\": \"12345678\", \"hasUnlimitedShelfLife\": true, \"hsCode\": \"123456\", \"purchasePrice\": {\"currency\": \"EUR\", \"integral\": 10, \"fractional\": 99}, \"salesPrice\": {\"currency\": \"EUR\", \"integral\": 10, \"fractional\": 99, \"taxRate\": 21}, \"sku\": \"sku\", \"children\": [{\"id\": \"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"quantity\": 2}], \"fulfilmentPlatforms\": [\"VASCO\"], \"salesChannels\": [{\"sourceId\": \"sales-channel-shopify-external-ID\", \"salesChannelId\": \"sales-channel-shopify-sales-channel-ID\", \"ecommercePlatformName\": \"shopify\", \"inventoryLocationId\": \"test-location-id\", \"inventoryItemId\": \"test-inventory-item-id\"}, {\"sourceId\": \"sales-channel-bol-external-ID\", \"salesChannelId\": \"sales-channel-bol-sales-channel-ID\", \"ecommercePlatformName\": \"bol\"}, {\"sourceId\": \"sales-channel-woocommerce-external-ID\", \"salesChannelId\": \"sales-channel-woocommerce-sales-channel-ID\", \"ecommercePlatformName\": \"woocommerce\"}, {\"sourceId\": \"sales-channel-lightspeed-external-ID\", \"salesChannelId\": \"sales-channel-lightspeed-sales-channel-ID\", \"ecommercePlatformName\": \"lightspeed\"}, {\"sourceId\": \"sales-channel-magento-external-ID\", \"salesChannelId\": \"sales-channel-magento-sales-channel-ID\", \"ecommercePlatformName\": \"magento\"}, {\"sourceId\": \"sales-channel-presta-external-ID\", \"salesChannelId\": \"sales-channel-presta-sales-channel-ID\", \"ecommercePlatformName\": \"presta\"}], \"shopIds\": [\"test-shop-id\"], \"stock\": {\"VASCO\": {\"free\": 15, \"value\": 20}}, \"updatedAt\": \"2024-11-13T19:20:34+00:00\"}, {\"id\": \"b9b4ac3e-8566-4481-9f1f-614c38d2b72a\", \"name\": \"test-name\", \"createdAt\": \"2024-11-13T19:20:33+00:00\", \"status\": \"ACTIVE\", \"trackInventory\": true}]"

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(req) }
data = JSON.parse(res.body)
```

```go [Go]
package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
)

func main() {
	payload := []byte(`[{"id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a", "name": "test-name", "createdAt": "2024-11-13T19:20:33+00:00", "status": "ACTIVE", "trackInventory": true, "barcode": "12345678", "containsDangerousSubstances": true, "countryCodeOfOrigin": "NL", "descriptions": [{"text": "Description", "languageCode": "en"}], "dimensions": {"height": {"value": 100, "unit": "cm"}, "length": {"value": 100, "unit": "cm"}, "weight": {"value": 1000, "unit": "gr"}, "width": {"value": 100, "unit": "cm"}}, "ean": "12345678", "hasUnlimitedShelfLife": true, "hsCode": "123456", "purchasePrice": {"currency": "EUR", "integral": 10, "fractional": 99}, "salesPrice": {"currency": "EUR", "integral": 10, "fractional": 99, "taxRate": 21}, "sku": "sku", "children": [{"id": "a2aacbcc-b6c1-48d5-a9e1-179425737965", "quantity": 2}], "fulfilmentPlatforms": ["VASCO"], "salesChannels": [{"sourceId": "sales-channel-shopify-external-ID", "salesChannelId": "sales-channel-shopify-sales-channel-ID", "ecommercePlatformName": "shopify", "inventoryLocationId": "test-location-id", "inventoryItemId": "test-inventory-item-id"}, {"sourceId": "sales-channel-bol-external-ID", "salesChannelId": "sales-channel-bol-sales-channel-ID", "ecommercePlatformName": "bol"}, {"sourceId": "sales-channel-woocommerce-external-ID", "salesChannelId": "sales-channel-woocommerce-sales-channel-ID", "ecommercePlatformName": "woocommerce"}, {"sourceId": "sales-channel-lightspeed-external-ID", "salesChannelId": "sales-channel-lightspeed-sales-channel-ID", "ecommercePlatformName": "lightspeed"}, {"sourceId": "sales-channel-magento-external-ID", "salesChannelId": "sales-channel-magento-sales-channel-ID", "ecommercePlatformName": "magento"}, {"sourceId": "sales-channel-presta-external-ID", "salesChannelId": "sales-channel-presta-sales-channel-ID", "ecommercePlatformName": "presta"}], "shopIds": ["test-shop-id"], "stock": {"VASCO": {"free": 15, "value": 20}}, "updatedAt": "2024-11-13T19:20:34+00:00"}, {"id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a", "name": "test-name", "createdAt": "2024-11-13T19:20:33+00:00", "status": "ACTIVE", "trackInventory": true}]`)
	req, _ := http.NewRequest("POST", "https://product.api.myparcel.nl/create-product", bytes.NewBuffer(payload))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "bearer <token>")
	req.Header.Set("User-Agent", "my-integration/1.0")

	res, _ := http.DefaultClient.Do(req)
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}
```

```java [Java]
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Example {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest req = HttpRequest.newBuilder()
            .uri(URI.create("https://product.api.myparcel.nl/create-product"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[{\"id\": \"b9b4ac3e-8566-4481-9f1f-614c38d2b72a\", \"name\": \"test-name\", \"createdAt\": \"2024-11-13T19:20:33+00:00\", \"status\": \"ACTIVE\", \"trackInventory\": true, \"barcode\": \"12345678\", \"containsDangerousSubstances\": true, \"countryCodeOfOrigin\": \"NL\", \"descriptions\": [{\"text\": \"Description\", \"languageCode\": \"en\"}], \"dimensions\": {\"height\": {\"value\": 100, \"unit\": \"cm\"}, \"length\": {\"value\": 100, \"unit\": \"cm\"}, \"weight\": {\"value\": 1000, \"unit\": \"gr\"}, \"width\": {\"value\": 100, \"unit\": \"cm\"}}, \"ean\": \"12345678\", \"hasUnlimitedShelfLife\": true, \"hsCode\": \"123456\", \"purchasePrice\": {\"currency\": \"EUR\", \"integral\": 10, \"fractional\": 99}, \"salesPrice\": {\"currency\": \"EUR\", \"integral\": 10, \"fractional\": 99, \"taxRate\": 21}, \"sku\": \"sku\", \"children\": [{\"id\": \"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"quantity\": 2}], \"fulfilmentPlatforms\": [\"VASCO\"], \"salesChannels\": [{\"sourceId\": \"sales-channel-shopify-external-ID\", \"salesChannelId\": \"sales-channel-shopify-sales-channel-ID\", \"ecommercePlatformName\": \"shopify\", \"inventoryLocationId\": \"test-location-id\", \"inventoryItemId\": \"test-inventory-item-id\"}, {\"sourceId\": \"sales-channel-bol-external-ID\", \"salesChannelId\": \"sales-channel-bol-sales-channel-ID\", \"ecommercePlatformName\": \"bol\"}, {\"sourceId\": \"sales-channel-woocommerce-external-ID\", \"salesChannelId\": \"sales-channel-woocommerce-sales-channel-ID\", \"ecommercePlatformName\": \"woocommerce\"}, {\"sourceId\": \"sales-channel-lightspeed-external-ID\", \"salesChannelId\": \"sales-channel-lightspeed-sales-channel-ID\", \"ecommercePlatformName\": \"lightspeed\"}, {\"sourceId\": \"sales-channel-magento-external-ID\", \"salesChannelId\": \"sales-channel-magento-sales-channel-ID\", \"ecommercePlatformName\": \"magento\"}, {\"sourceId\": \"sales-channel-presta-external-ID\", \"salesChannelId\": \"sales-channel-presta-sales-channel-ID\", \"ecommercePlatformName\": \"presta\"}], \"shopIds\": [\"test-shop-id\"], \"stock\": {\"VASCO\": {\"free\": 15, \"value\": 20}}, \"updatedAt\": \"2024-11-13T19:20:34+00:00\"}, {\"id\": \"b9b4ac3e-8566-4481-9f1f-614c38d2b72a\", \"name\": \"test-name\", \"createdAt\": \"2024-11-13T19:20:33+00:00\", \"status\": \"ACTIVE\", \"trackInventory\": true}]"))
            .build();

        HttpResponse<String> res = client.send(req, HttpResponse.BodyHandlers.ofString());
        System.out.println(res.body());
    }
}
```

```csharp [C#]
using System.Net.Http;
using System.Text;

var client = new HttpClient();
var req = new HttpRequestMessage(HttpMethod.Post, "https://product.api.myparcel.nl/create-product");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[{""id"": ""b9b4ac3e-8566-4481-9f1f-614c38d2b72a"", ""name"": ""test-name"", ""createdAt"": ""2024-11-13T19:20:33+00:00"", ""status"": ""ACTIVE"", ""trackInventory"": true, ""barcode"": ""12345678"", ""containsDangerousSubstances"": true, ""countryCodeOfOrigin"": ""NL"", ""descriptions"": [{""text"": ""Description"", ""languageCode"": ""en""}], ""dimensions"": {""height"": {""value"": 100, ""unit"": ""cm""}, ""length"": {""value"": 100, ""unit"": ""cm""}, ""weight"": {""value"": 1000, ""unit"": ""gr""}, ""width"": {""value"": 100, ""unit"": ""cm""}}, ""ean"": ""12345678"", ""hasUnlimitedShelfLife"": true, ""hsCode"": ""123456"", ""purchasePrice"": {""currency"": ""EUR"", ""integral"": 10, ""fractional"": 99}, ""salesPrice"": {""currency"": ""EUR"", ""integral"": 10, ""fractional"": 99, ""taxRate"": 21}, ""sku"": ""sku"", ""children"": [{""id"": ""a2aacbcc-b6c1-48d5-a9e1-179425737965"", ""quantity"": 2}], ""fulfilmentPlatforms"": [""VASCO""], ""salesChannels"": [{""sourceId"": ""sales-channel-shopify-external-ID"", ""salesChannelId"": ""sales-channel-shopify-sales-channel-ID"", ""ecommercePlatformName"": ""shopify"", ""inventoryLocationId"": ""test-location-id"", ""inventoryItemId"": ""test-inventory-item-id""}, {""sourceId"": ""sales-channel-bol-external-ID"", ""salesChannelId"": ""sales-channel-bol-sales-channel-ID"", ""ecommercePlatformName"": ""bol""}, {""sourceId"": ""sales-channel-woocommerce-external-ID"", ""salesChannelId"": ""sales-channel-woocommerce-sales-channel-ID"", ""ecommercePlatformName"": ""woocommerce""}, {""sourceId"": ""sales-channel-lightspeed-external-ID"", ""salesChannelId"": ""sales-channel-lightspeed-sales-channel-ID"", ""ecommercePlatformName"": ""lightspeed""}, {""sourceId"": ""sales-channel-magento-external-ID"", ""salesChannelId"": ""sales-channel-magento-sales-channel-ID"", ""ecommercePlatformName"": ""magento""}, {""sourceId"": ""sales-channel-presta-external-ID"", ""salesChannelId"": ""sales-channel-presta-sales-channel-ID"", ""ecommercePlatformName"": ""presta""}], ""shopIds"": [""test-shop-id""], ""stock"": {""VASCO"": {""free"": 15, ""value"": 20}}, ""updatedAt"": ""2024-11-13T19:20:34+00:00""}, {""id"": ""b9b4ac3e-8566-4481-9f1f-614c38d2b72a"", ""name"": ""test-name"", ""createdAt"": ""2024-11-13T19:20:33+00:00"", ""status"": ""ACTIVE"", ""trackInventory"": true}]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "createdAt": "2026-04-20T10:00:00Z",
  "name": "string",
  "status": "ACTIVE",
  "trackInventory": true
}
```

**PRODUCTS**

### `GET /products` {#get-products}

_Query and/or filter products._

Get products.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| aggregation | array | Fields to summarize data based on the query. |
| filter | object |  |
| limit | integer | The maximum number of products to retrieve. |
| query | string | The following operators are supported: '+ signifies AND operation' '\| signifies OR operation' '- negates a single token' '" wraps a number of tokens to signify a phrase for searching' '* at the end of a term signifies a prefix query' '( and ) signify precedence' '~N after a word signifies edit distance (fuzziness)' '~N after a phrase signifies slop amount' To use one of these characters literally, escape it with a preceding backslash (\). |
| pageToken | string | The page token to retrieve the next page of orders. |
| sort | object | When no `query` is provided the default sort is by `name` ascending. When a `query` is provided the default sort is by relevance. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | The listed products. |
| 400 | Invalid request syntax |

**Request — GET /products**

::: code-group
```bash [cURL]
curl -X GET 'https://product.api.myparcel.nl/products?aggregation=value' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://product.api.myparcel.nl/products?aggregation=value");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://product.api.myparcel.nl/products?aggregation=value", {
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
  },
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

params = {
    "aggregation": "value"
}

response = requests.get("https://product.api.myparcel.nl/products", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://product.api.myparcel.nl/products?aggregation=value')
req = Net::HTTP::Get.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(req) }
data = JSON.parse(res.body)
```

```go [Go]
package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
)

func main() {
	req, _ := http.NewRequest("GET", "https://product.api.myparcel.nl/products?aggregation=value", nil)
	req.Header.Set("Authorization", "bearer <token>")
	req.Header.Set("User-Agent", "my-integration/1.0")

	res, _ := http.DefaultClient.Do(req)
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}
```

```java [Java]
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Example {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest req = HttpRequest.newBuilder()
            .uri(URI.create("https://product.api.myparcel.nl/products?aggregation=value"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .GET()
            .build();

        HttpResponse<String> res = client.send(req, HttpResponse.BodyHandlers.ofString());
        System.out.println(res.body());
    }
}
```

```csharp [C#]
using System.Net.Http;
using System.Text;

var client = new HttpClient();
var req = new HttpRequestMessage(HttpMethod.Get, "https://product.api.myparcel.nl/products?aggregation=value");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "results": [
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "createdAt": "2026-04-20T10:00:00Z",
      "name": "string",
      "status": "ACTIVE",
      "trackInventory": true
    }
  ],
  "total": {
    "relation": "eq",
    "value": 1
  }
}
```

**MANAGE INVENTORY**

### `POST /manage-inventory` {#post-manage-inventory}

_Manage inventory of a product._

Manage and unmanage the inventory of a product. This endpoint requires the new value of fulfilment platforms. Based on the input we will add and/or remove fulfilment platforms from the product.

**Responses**

| Status | Description |
| --- | --- |
| 204 | inventory is (un)managed by provided fulfilment platform. |
| 400 | Invalid request syntax |

**Request — POST /manage-inventory**

::: code-group
```bash [cURL]
curl -X POST 'https://product.api.myparcel.nl/manage-inventory' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "productIds": [
    "a2aacbcc-b6c1-48d5-a9e1-179425737965",
    "a3aacbcc-b6c1-48d5-a9e1-179425737966"
  ],
  "fulfilmentPlatforms": [
    "VASCO"
  ]
}'
```

```php [PHP]
<?php
$ch = curl_init("https://product.api.myparcel.nl/manage-inventory");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"productIds": ["a2aacbcc-b6c1-48d5-a9e1-179425737965", "a3aacbcc-b6c1-48d5-a9e1-179425737966"], "fulfilmentPlatforms": ["VASCO"]}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://product.api.myparcel.nl/manage-inventory", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "productIds": [
      "a2aacbcc-b6c1-48d5-a9e1-179425737965",
      "a3aacbcc-b6c1-48d5-a9e1-179425737966"
    ],
    "fulfilmentPlatforms": [
      "VASCO"
    ]
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "productIds": [
        "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "a3aacbcc-b6c1-48d5-a9e1-179425737966"
    ],
    "fulfilmentPlatforms": [
        "VASCO"
    ]
}

response = requests.post("https://product.api.myparcel.nl/manage-inventory", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://product.api.myparcel.nl/manage-inventory')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"productIds\": [\"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"a3aacbcc-b6c1-48d5-a9e1-179425737966\"], \"fulfilmentPlatforms\": [\"VASCO\"]}"

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(req) }
data = JSON.parse(res.body)
```

```go [Go]
package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
)

func main() {
	payload := []byte(`{"productIds": ["a2aacbcc-b6c1-48d5-a9e1-179425737965", "a3aacbcc-b6c1-48d5-a9e1-179425737966"], "fulfilmentPlatforms": ["VASCO"]}`)
	req, _ := http.NewRequest("POST", "https://product.api.myparcel.nl/manage-inventory", bytes.NewBuffer(payload))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "bearer <token>")
	req.Header.Set("User-Agent", "my-integration/1.0")

	res, _ := http.DefaultClient.Do(req)
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}
```

```java [Java]
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Example {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest req = HttpRequest.newBuilder()
            .uri(URI.create("https://product.api.myparcel.nl/manage-inventory"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"productIds\": [\"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"a3aacbcc-b6c1-48d5-a9e1-179425737966\"], \"fulfilmentPlatforms\": [\"VASCO\"]}"))
            .build();

        HttpResponse<String> res = client.send(req, HttpResponse.BodyHandlers.ofString());
        System.out.println(res.body());
    }
}
```

```csharp [C#]
using System.Net.Http;
using System.Text;

var client = new HttpClient();
var req = new HttpRequestMessage(HttpMethod.Post, "https://product.api.myparcel.nl/manage-inventory");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""productIds"": [""a2aacbcc-b6c1-48d5-a9e1-179425737965"", ""a3aacbcc-b6c1-48d5-a9e1-179425737966""], ""fulfilmentPlatforms"": [""VASCO""]}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**UPDATE PRODUCT**

### `POST /update-product` {#post-update-product}

_Update a product._

Update a product.

**Responses**

| Status | Description |
| --- | --- |
| 200 | product is updated. |
| 400 | Invalid request syntax |

**Request — POST /update-product**

::: code-group
```bash [cURL]
curl -X POST 'https://product.api.myparcel.nl/update-product' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
    "name": "test-name",
    "createdAt": "2024-11-13T19:20:33+00:00",
    "status": "ACTIVE",
    "trackInventory": true,
    "barcode": "12345678",
    "containsDangerousSubstances": true,
    "countryCodeOfOrigin": "NL",
    "descriptions": [
      {
        "text": "Description",
        "languageCode": "en"
      }
    ],
    "dimensions": {
      "height": {
        "value": 100,
        "unit": "cm"
      },
      "length": {
        "value": 100,
        "unit": "cm"
      },
      "weight": {
        "value": 1000,
        "unit": "gr"
      },
      "width": {
        "value": 100,
        "unit": "cm"
      }
    },
    "ean": "12345678",
    "hasUnlimitedShelfLife": true,
    "hsCode": "123456",
    "purchasePrice": {
      "currency": "EUR",
      "integral": 10,
      "fractional": 99
    },
    "salesPrice": {
      "currency": "EUR",
      "integral": 10,
      "fractional": 99,
      "taxRate": 21
    },
    "sku": "sku",
    "children": [
      {
        "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "quantity": 2
      }
    ],
    "fulfilmentPlatforms": [
      "VASCO"
    ],
    "salesChannels": [
      {
        "sourceId": "sales-channel-shopify-external-ID",
        "salesChannelId": "sales-channel-shopify-sales-channel-ID",
        "ecommercePlatformName": "shopify",
        "inventoryLocationId": "test-location-id",
        "inventoryItemId": "test-inventory-item-id"
      },
      {
        "sourceId": "sales-channel-bol-external-ID",
        "salesChannelId": "sales-channel-bol-sales-channel-ID",
        "ecommercePlatformName": "bol"
      },
      {
        "sourceId": "sales-channel-woocommerce-external-ID",
        "salesChannelId": "sales-channel-woocommerce-sales-channel-ID",
        "ecommercePlatformName": "woocommerce"
      },
      {
        "sourceId": "sales-channel-lightspeed-external-ID",
        "salesChannelId": "sales-channel-lightspeed-sales-channel-ID",
        "ecommercePlatformName": "lightspeed"
      },
      {
        "sourceId": "sales-channel-magento-external-ID",
        "salesChannelId": "sales-channel-magento-sales-channel-ID",
        "ecommercePlatformName": "magento"
      },
      {
        "sourceId": "sales-channel-presta-external-ID",
        "salesChannelId": "sales-channel-presta-sales-channel-ID",
        "ecommercePlatformName": "presta"
      }
    ],
    "shopIds": [
      "test-shop-id"
    ],
    "stock": {
      "VASCO": {
        "free": 15,
        "value": 20
      }
    },
    "updatedAt": "2024-11-13T19:20:34+00:00"
  },
  {
    "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
    "name": "test-name",
    "createdAt": "2024-11-13T19:20:33+00:00",
    "status": "ACTIVE",
    "trackInventory": true
  }
]'
```

```php [PHP]
<?php
$ch = curl_init("https://product.api.myparcel.nl/update-product");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([{"id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a", "name": "test-name", "createdAt": "2024-11-13T19:20:33+00:00", "status": "ACTIVE", "trackInventory": true, "barcode": "12345678", "containsDangerousSubstances": true, "countryCodeOfOrigin": "NL", "descriptions": [{"text": "Description", "languageCode": "en"}], "dimensions": {"height": {"value": 100, "unit": "cm"}, "length": {"value": 100, "unit": "cm"}, "weight": {"value": 1000, "unit": "gr"}, "width": {"value": 100, "unit": "cm"}}, "ean": "12345678", "hasUnlimitedShelfLife": true, "hsCode": "123456", "purchasePrice": {"currency": "EUR", "integral": 10, "fractional": 99}, "salesPrice": {"currency": "EUR", "integral": 10, "fractional": 99, "taxRate": 21}, "sku": "sku", "children": [{"id": "a2aacbcc-b6c1-48d5-a9e1-179425737965", "quantity": 2}], "fulfilmentPlatforms": ["VASCO"], "salesChannels": [{"sourceId": "sales-channel-shopify-external-ID", "salesChannelId": "sales-channel-shopify-sales-channel-ID", "ecommercePlatformName": "shopify", "inventoryLocationId": "test-location-id", "inventoryItemId": "test-inventory-item-id"}, {"sourceId": "sales-channel-bol-external-ID", "salesChannelId": "sales-channel-bol-sales-channel-ID", "ecommercePlatformName": "bol"}, {"sourceId": "sales-channel-woocommerce-external-ID", "salesChannelId": "sales-channel-woocommerce-sales-channel-ID", "ecommercePlatformName": "woocommerce"}, {"sourceId": "sales-channel-lightspeed-external-ID", "salesChannelId": "sales-channel-lightspeed-sales-channel-ID", "ecommercePlatformName": "lightspeed"}, {"sourceId": "sales-channel-magento-external-ID", "salesChannelId": "sales-channel-magento-sales-channel-ID", "ecommercePlatformName": "magento"}, {"sourceId": "sales-channel-presta-external-ID", "salesChannelId": "sales-channel-presta-sales-channel-ID", "ecommercePlatformName": "presta"}], "shopIds": ["test-shop-id"], "stock": {"VASCO": {"free": 15, "value": 20}}, "updatedAt": "2024-11-13T19:20:34+00:00"}, {"id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a", "name": "test-name", "createdAt": "2024-11-13T19:20:33+00:00", "status": "ACTIVE", "trackInventory": true}]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://product.api.myparcel.nl/update-product", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
      "name": "test-name",
      "createdAt": "2024-11-13T19:20:33+00:00",
      "status": "ACTIVE",
      "trackInventory": true,
      "barcode": "12345678",
      "containsDangerousSubstances": true,
      "countryCodeOfOrigin": "NL",
      "descriptions": [
        {
          "text": "Description",
          "languageCode": "en"
        }
      ],
      "dimensions": {
        "height": {
          "value": 100,
          "unit": "cm"
        },
        "length": {
          "value": 100,
          "unit": "cm"
        },
        "weight": {
          "value": 1000,
          "unit": "gr"
        },
        "width": {
          "value": 100,
          "unit": "cm"
        }
      },
      "ean": "12345678",
      "hasUnlimitedShelfLife": true,
      "hsCode": "123456",
      "purchasePrice": {
        "currency": "EUR",
        "integral": 10,
        "fractional": 99
      },
      "salesPrice": {
        "currency": "EUR",
        "integral": 10,
        "fractional": 99,
        "taxRate": 21
      },
      "sku": "sku",
      "children": [
        {
          "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
          "quantity": 2
        }
      ],
      "fulfilmentPlatforms": [
        "VASCO"
      ],
      "salesChannels": [
        {
          "sourceId": "sales-channel-shopify-external-ID",
          "salesChannelId": "sales-channel-shopify-sales-channel-ID",
          "ecommercePlatformName": "shopify",
          "inventoryLocationId": "test-location-id",
          "inventoryItemId": "test-inventory-item-id"
        },
        {
          "sourceId": "sales-channel-bol-external-ID",
          "salesChannelId": "sales-channel-bol-sales-channel-ID",
          "ecommercePlatformName": "bol"
        },
        {
          "sourceId": "sales-channel-woocommerce-external-ID",
          "salesChannelId": "sales-channel-woocommerce-sales-channel-ID",
          "ecommercePlatformName": "woocommerce"
        },
        {
          "sourceId": "sales-channel-lightspeed-external-ID",
          "salesChannelId": "sales-channel-lightspeed-sales-channel-ID",
          "ecommercePlatformName": "lightspeed"
        },
        {
          "sourceId": "sales-channel-magento-external-ID",
          "salesChannelId": "sales-channel-magento-sales-channel-ID",
          "ecommercePlatformName": "magento"
        },
        {
          "sourceId": "sales-channel-presta-external-ID",
          "salesChannelId": "sales-channel-presta-sales-channel-ID",
          "ecommercePlatformName": "presta"
        }
      ],
      "shopIds": [
        "test-shop-id"
      ],
      "stock": {
        "VASCO": {
          "free": 15,
          "value": 20
        }
      },
      "updatedAt": "2024-11-13T19:20:34+00:00"
    },
    {
      "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
      "name": "test-name",
      "createdAt": "2024-11-13T19:20:33+00:00",
      "status": "ACTIVE",
      "trackInventory": true
    }
  ]),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = [
    {
        "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
        "name": "test-name",
        "createdAt": "2024-11-13T19:20:33+00:00",
        "status": "ACTIVE",
        "trackInventory": true,
        "barcode": "12345678",
        "containsDangerousSubstances": true,
        "countryCodeOfOrigin": "NL",
        "descriptions": [
            {
                "text": "Description",
                "languageCode": "en"
            }
        ],
        "dimensions": {
            "height": {
                "value": 100,
                "unit": "cm"
            },
            "length": {
                "value": 100,
                "unit": "cm"
            },
            "weight": {
                "value": 1000,
                "unit": "gr"
            },
            "width": {
                "value": 100,
                "unit": "cm"
            }
        },
        "ean": "12345678",
        "hasUnlimitedShelfLife": true,
        "hsCode": "123456",
        "purchasePrice": {
            "currency": "EUR",
            "integral": 10,
            "fractional": 99
        },
        "salesPrice": {
            "currency": "EUR",
            "integral": 10,
            "fractional": 99,
            "taxRate": 21
        },
        "sku": "sku",
        "children": [
            {
                "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
                "quantity": 2
            }
        ],
        "fulfilmentPlatforms": [
            "VASCO"
        ],
        "salesChannels": [
            {
                "sourceId": "sales-channel-shopify-external-ID",
                "salesChannelId": "sales-channel-shopify-sales-channel-ID",
                "ecommercePlatformName": "shopify",
                "inventoryLocationId": "test-location-id",
                "inventoryItemId": "test-inventory-item-id"
            },
            {
                "sourceId": "sales-channel-bol-external-ID",
                "salesChannelId": "sales-channel-bol-sales-channel-ID",
                "ecommercePlatformName": "bol"
            },
            {
                "sourceId": "sales-channel-woocommerce-external-ID",
                "salesChannelId": "sales-channel-woocommerce-sales-channel-ID",
                "ecommercePlatformName": "woocommerce"
            },
            {
                "sourceId": "sales-channel-lightspeed-external-ID",
                "salesChannelId": "sales-channel-lightspeed-sales-channel-ID",
                "ecommercePlatformName": "lightspeed"
            },
            {
                "sourceId": "sales-channel-magento-external-ID",
                "salesChannelId": "sales-channel-magento-sales-channel-ID",
                "ecommercePlatformName": "magento"
            },
            {
                "sourceId": "sales-channel-presta-external-ID",
                "salesChannelId": "sales-channel-presta-sales-channel-ID",
                "ecommercePlatformName": "presta"
            }
        ],
        "shopIds": [
            "test-shop-id"
        ],
        "stock": {
            "VASCO": {
                "free": 15,
                "value": 20
            }
        },
        "updatedAt": "2024-11-13T19:20:34+00:00"
    },
    {
        "id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a",
        "name": "test-name",
        "createdAt": "2024-11-13T19:20:33+00:00",
        "status": "ACTIVE",
        "trackInventory": true
    }
]

response = requests.post("https://product.api.myparcel.nl/update-product", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://product.api.myparcel.nl/update-product')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[{\"id\": \"b9b4ac3e-8566-4481-9f1f-614c38d2b72a\", \"name\": \"test-name\", \"createdAt\": \"2024-11-13T19:20:33+00:00\", \"status\": \"ACTIVE\", \"trackInventory\": true, \"barcode\": \"12345678\", \"containsDangerousSubstances\": true, \"countryCodeOfOrigin\": \"NL\", \"descriptions\": [{\"text\": \"Description\", \"languageCode\": \"en\"}], \"dimensions\": {\"height\": {\"value\": 100, \"unit\": \"cm\"}, \"length\": {\"value\": 100, \"unit\": \"cm\"}, \"weight\": {\"value\": 1000, \"unit\": \"gr\"}, \"width\": {\"value\": 100, \"unit\": \"cm\"}}, \"ean\": \"12345678\", \"hasUnlimitedShelfLife\": true, \"hsCode\": \"123456\", \"purchasePrice\": {\"currency\": \"EUR\", \"integral\": 10, \"fractional\": 99}, \"salesPrice\": {\"currency\": \"EUR\", \"integral\": 10, \"fractional\": 99, \"taxRate\": 21}, \"sku\": \"sku\", \"children\": [{\"id\": \"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"quantity\": 2}], \"fulfilmentPlatforms\": [\"VASCO\"], \"salesChannels\": [{\"sourceId\": \"sales-channel-shopify-external-ID\", \"salesChannelId\": \"sales-channel-shopify-sales-channel-ID\", \"ecommercePlatformName\": \"shopify\", \"inventoryLocationId\": \"test-location-id\", \"inventoryItemId\": \"test-inventory-item-id\"}, {\"sourceId\": \"sales-channel-bol-external-ID\", \"salesChannelId\": \"sales-channel-bol-sales-channel-ID\", \"ecommercePlatformName\": \"bol\"}, {\"sourceId\": \"sales-channel-woocommerce-external-ID\", \"salesChannelId\": \"sales-channel-woocommerce-sales-channel-ID\", \"ecommercePlatformName\": \"woocommerce\"}, {\"sourceId\": \"sales-channel-lightspeed-external-ID\", \"salesChannelId\": \"sales-channel-lightspeed-sales-channel-ID\", \"ecommercePlatformName\": \"lightspeed\"}, {\"sourceId\": \"sales-channel-magento-external-ID\", \"salesChannelId\": \"sales-channel-magento-sales-channel-ID\", \"ecommercePlatformName\": \"magento\"}, {\"sourceId\": \"sales-channel-presta-external-ID\", \"salesChannelId\": \"sales-channel-presta-sales-channel-ID\", \"ecommercePlatformName\": \"presta\"}], \"shopIds\": [\"test-shop-id\"], \"stock\": {\"VASCO\": {\"free\": 15, \"value\": 20}}, \"updatedAt\": \"2024-11-13T19:20:34+00:00\"}, {\"id\": \"b9b4ac3e-8566-4481-9f1f-614c38d2b72a\", \"name\": \"test-name\", \"createdAt\": \"2024-11-13T19:20:33+00:00\", \"status\": \"ACTIVE\", \"trackInventory\": true}]"

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(req) }
data = JSON.parse(res.body)
```

```go [Go]
package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
)

func main() {
	payload := []byte(`[{"id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a", "name": "test-name", "createdAt": "2024-11-13T19:20:33+00:00", "status": "ACTIVE", "trackInventory": true, "barcode": "12345678", "containsDangerousSubstances": true, "countryCodeOfOrigin": "NL", "descriptions": [{"text": "Description", "languageCode": "en"}], "dimensions": {"height": {"value": 100, "unit": "cm"}, "length": {"value": 100, "unit": "cm"}, "weight": {"value": 1000, "unit": "gr"}, "width": {"value": 100, "unit": "cm"}}, "ean": "12345678", "hasUnlimitedShelfLife": true, "hsCode": "123456", "purchasePrice": {"currency": "EUR", "integral": 10, "fractional": 99}, "salesPrice": {"currency": "EUR", "integral": 10, "fractional": 99, "taxRate": 21}, "sku": "sku", "children": [{"id": "a2aacbcc-b6c1-48d5-a9e1-179425737965", "quantity": 2}], "fulfilmentPlatforms": ["VASCO"], "salesChannels": [{"sourceId": "sales-channel-shopify-external-ID", "salesChannelId": "sales-channel-shopify-sales-channel-ID", "ecommercePlatformName": "shopify", "inventoryLocationId": "test-location-id", "inventoryItemId": "test-inventory-item-id"}, {"sourceId": "sales-channel-bol-external-ID", "salesChannelId": "sales-channel-bol-sales-channel-ID", "ecommercePlatformName": "bol"}, {"sourceId": "sales-channel-woocommerce-external-ID", "salesChannelId": "sales-channel-woocommerce-sales-channel-ID", "ecommercePlatformName": "woocommerce"}, {"sourceId": "sales-channel-lightspeed-external-ID", "salesChannelId": "sales-channel-lightspeed-sales-channel-ID", "ecommercePlatformName": "lightspeed"}, {"sourceId": "sales-channel-magento-external-ID", "salesChannelId": "sales-channel-magento-sales-channel-ID", "ecommercePlatformName": "magento"}, {"sourceId": "sales-channel-presta-external-ID", "salesChannelId": "sales-channel-presta-sales-channel-ID", "ecommercePlatformName": "presta"}], "shopIds": ["test-shop-id"], "stock": {"VASCO": {"free": 15, "value": 20}}, "updatedAt": "2024-11-13T19:20:34+00:00"}, {"id": "b9b4ac3e-8566-4481-9f1f-614c38d2b72a", "name": "test-name", "createdAt": "2024-11-13T19:20:33+00:00", "status": "ACTIVE", "trackInventory": true}]`)
	req, _ := http.NewRequest("POST", "https://product.api.myparcel.nl/update-product", bytes.NewBuffer(payload))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "bearer <token>")
	req.Header.Set("User-Agent", "my-integration/1.0")

	res, _ := http.DefaultClient.Do(req)
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}
```

```java [Java]
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Example {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest req = HttpRequest.newBuilder()
            .uri(URI.create("https://product.api.myparcel.nl/update-product"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[{\"id\": \"b9b4ac3e-8566-4481-9f1f-614c38d2b72a\", \"name\": \"test-name\", \"createdAt\": \"2024-11-13T19:20:33+00:00\", \"status\": \"ACTIVE\", \"trackInventory\": true, \"barcode\": \"12345678\", \"containsDangerousSubstances\": true, \"countryCodeOfOrigin\": \"NL\", \"descriptions\": [{\"text\": \"Description\", \"languageCode\": \"en\"}], \"dimensions\": {\"height\": {\"value\": 100, \"unit\": \"cm\"}, \"length\": {\"value\": 100, \"unit\": \"cm\"}, \"weight\": {\"value\": 1000, \"unit\": \"gr\"}, \"width\": {\"value\": 100, \"unit\": \"cm\"}}, \"ean\": \"12345678\", \"hasUnlimitedShelfLife\": true, \"hsCode\": \"123456\", \"purchasePrice\": {\"currency\": \"EUR\", \"integral\": 10, \"fractional\": 99}, \"salesPrice\": {\"currency\": \"EUR\", \"integral\": 10, \"fractional\": 99, \"taxRate\": 21}, \"sku\": \"sku\", \"children\": [{\"id\": \"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"quantity\": 2}], \"fulfilmentPlatforms\": [\"VASCO\"], \"salesChannels\": [{\"sourceId\": \"sales-channel-shopify-external-ID\", \"salesChannelId\": \"sales-channel-shopify-sales-channel-ID\", \"ecommercePlatformName\": \"shopify\", \"inventoryLocationId\": \"test-location-id\", \"inventoryItemId\": \"test-inventory-item-id\"}, {\"sourceId\": \"sales-channel-bol-external-ID\", \"salesChannelId\": \"sales-channel-bol-sales-channel-ID\", \"ecommercePlatformName\": \"bol\"}, {\"sourceId\": \"sales-channel-woocommerce-external-ID\", \"salesChannelId\": \"sales-channel-woocommerce-sales-channel-ID\", \"ecommercePlatformName\": \"woocommerce\"}, {\"sourceId\": \"sales-channel-lightspeed-external-ID\", \"salesChannelId\": \"sales-channel-lightspeed-sales-channel-ID\", \"ecommercePlatformName\": \"lightspeed\"}, {\"sourceId\": \"sales-channel-magento-external-ID\", \"salesChannelId\": \"sales-channel-magento-sales-channel-ID\", \"ecommercePlatformName\": \"magento\"}, {\"sourceId\": \"sales-channel-presta-external-ID\", \"salesChannelId\": \"sales-channel-presta-sales-channel-ID\", \"ecommercePlatformName\": \"presta\"}], \"shopIds\": [\"test-shop-id\"], \"stock\": {\"VASCO\": {\"free\": 15, \"value\": 20}}, \"updatedAt\": \"2024-11-13T19:20:34+00:00\"}, {\"id\": \"b9b4ac3e-8566-4481-9f1f-614c38d2b72a\", \"name\": \"test-name\", \"createdAt\": \"2024-11-13T19:20:33+00:00\", \"status\": \"ACTIVE\", \"trackInventory\": true}]"))
            .build();

        HttpResponse<String> res = client.send(req, HttpResponse.BodyHandlers.ofString());
        System.out.println(res.body());
    }
}
```

```csharp [C#]
using System.Net.Http;
using System.Text;

var client = new HttpClient();
var req = new HttpRequestMessage(HttpMethod.Post, "https://product.api.myparcel.nl/update-product");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[{""id"": ""b9b4ac3e-8566-4481-9f1f-614c38d2b72a"", ""name"": ""test-name"", ""createdAt"": ""2024-11-13T19:20:33+00:00"", ""status"": ""ACTIVE"", ""trackInventory"": true, ""barcode"": ""12345678"", ""containsDangerousSubstances"": true, ""countryCodeOfOrigin"": ""NL"", ""descriptions"": [{""text"": ""Description"", ""languageCode"": ""en""}], ""dimensions"": {""height"": {""value"": 100, ""unit"": ""cm""}, ""length"": {""value"": 100, ""unit"": ""cm""}, ""weight"": {""value"": 1000, ""unit"": ""gr""}, ""width"": {""value"": 100, ""unit"": ""cm""}}, ""ean"": ""12345678"", ""hasUnlimitedShelfLife"": true, ""hsCode"": ""123456"", ""purchasePrice"": {""currency"": ""EUR"", ""integral"": 10, ""fractional"": 99}, ""salesPrice"": {""currency"": ""EUR"", ""integral"": 10, ""fractional"": 99, ""taxRate"": 21}, ""sku"": ""sku"", ""children"": [{""id"": ""a2aacbcc-b6c1-48d5-a9e1-179425737965"", ""quantity"": 2}], ""fulfilmentPlatforms"": [""VASCO""], ""salesChannels"": [{""sourceId"": ""sales-channel-shopify-external-ID"", ""salesChannelId"": ""sales-channel-shopify-sales-channel-ID"", ""ecommercePlatformName"": ""shopify"", ""inventoryLocationId"": ""test-location-id"", ""inventoryItemId"": ""test-inventory-item-id""}, {""sourceId"": ""sales-channel-bol-external-ID"", ""salesChannelId"": ""sales-channel-bol-sales-channel-ID"", ""ecommercePlatformName"": ""bol""}, {""sourceId"": ""sales-channel-woocommerce-external-ID"", ""salesChannelId"": ""sales-channel-woocommerce-sales-channel-ID"", ""ecommercePlatformName"": ""woocommerce""}, {""sourceId"": ""sales-channel-lightspeed-external-ID"", ""salesChannelId"": ""sales-channel-lightspeed-sales-channel-ID"", ""ecommercePlatformName"": ""lightspeed""}, {""sourceId"": ""sales-channel-magento-external-ID"", ""salesChannelId"": ""sales-channel-magento-sales-channel-ID"", ""ecommercePlatformName"": ""magento""}, {""sourceId"": ""sales-channel-presta-external-ID"", ""salesChannelId"": ""sales-channel-presta-sales-channel-ID"", ""ecommercePlatformName"": ""presta""}], ""shopIds"": [""test-shop-id""], ""stock"": {""VASCO"": {""free"": 15, ""value"": 20}}, ""updatedAt"": ""2024-11-13T19:20:34+00:00""}, {""id"": ""b9b4ac3e-8566-4481-9f1f-614c38d2b72a"", ""name"": ""test-name"", ""createdAt"": ""2024-11-13T19:20:33+00:00"", ""status"": ""ACTIVE"", ""trackInventory"": true}]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "createdAt": "2026-04-20T10:00:00Z",
  "name": "string",
  "status": "ACTIVE",
  "trackInventory": true
}
```
