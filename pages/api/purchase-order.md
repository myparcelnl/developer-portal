---
title: Purchase Order API
description: "This API features managing purchase orders."
---

## Endpoints {#endpoints}

Auto-generated from `purchase-order.api.myparcel.nl/openapi.yaml`. Click an endpoint to see its parameters and code samples.

**ADD LINES**

### `POST /add-lines` {#post-add-lines}

_Add lines to a purchase order._

Add lines to a purchase order. The status of the purchase order must be `CONCEPT`, `REGISTERED` or `REGISTRATION_REQUESTED`.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Purchase order with lines added. |
| 400 | Invalid request syntax |

**Request — POST /add-lines**

::: code-group
```bash [cURL]
curl -X POST 'https://purchase-order.api.myparcel.nl/add-lines' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "lines": [
    {
      "productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
      "quantity": 5
    }
  ]
}'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/add-lines");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "lines": [{"productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965", "quantity": 5}]}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://purchase-order.api.myparcel.nl/add-lines", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "lines": [
      {
        "productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "quantity": 5
      }
    ]
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "lines": [
        {
            "productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
            "quantity": 5
        }
    ]
}

response = requests.post("https://purchase-order.api.myparcel.nl/add-lines", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/add-lines')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"lines\": [{\"productId\": \"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"quantity\": 5}]}"

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
	payload := []byte(`{"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "lines": [{"productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965", "quantity": 5}]}`)
	req, _ := http.NewRequest("POST", "https://purchase-order.api.myparcel.nl/add-lines", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/add-lines"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"lines\": [{\"productId\": \"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"quantity\": 5}]}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://purchase-order.api.myparcel.nl/add-lines");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""id"": ""93cb8f97-8f08-4f40-960f-98c85c0b7cfe"", ""lines"": [{""productId"": ""a2aacbcc-b6c1-48d5-a9e1-179425737965"", ""quantity"": 5}]}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "createdAt": "2024-02-04T00:00:00.123000+00:00",
  "fulfilmentPlatform": "VASCO",
  "lines": [
    {
      "product": {
        "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "name": "Product 1",
        "ean": "1234567890123",
        "sku": "SKU123"
      },
      "quantity": 5
    }
  ]
}
```

**CANCEL**

### `POST /cancel` {#post-cancel}

_Cancel a purchase order._

Cancel one or multiple purchase orders. The status of the purchase order must be `REGISTERED` or `REGISTRATION_REQUESTED`.

**Responses**

| Status | Description |
| --- | --- |
| 204 | Purchase orders are cancelled. |
| 400 | Invalid request syntax |

**Request — POST /cancel**

::: code-group
```bash [cURL]
curl -X POST 'https://purchase-order.api.myparcel.nl/cancel' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "ids": [
    "93cb8f97-8f08-4f40-960f-98c85c0b7cfe"
  ]
}'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/cancel");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"ids": ["93cb8f97-8f08-4f40-960f-98c85c0b7cfe"]}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://purchase-order.api.myparcel.nl/cancel", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "ids": [
      "93cb8f97-8f08-4f40-960f-98c85c0b7cfe"
    ]
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "ids": [
        "93cb8f97-8f08-4f40-960f-98c85c0b7cfe"
    ]
}

response = requests.post("https://purchase-order.api.myparcel.nl/cancel", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/cancel')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"ids\": [\"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\"]}"

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
	payload := []byte(`{"ids": ["93cb8f97-8f08-4f40-960f-98c85c0b7cfe"]}`)
	req, _ := http.NewRequest("POST", "https://purchase-order.api.myparcel.nl/cancel", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/cancel"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"ids\": [\"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\"]}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://purchase-order.api.myparcel.nl/cancel");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""ids"": [""93cb8f97-8f08-4f40-960f-98c85c0b7cfe""]}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**CREATE**

### `POST /create` {#post-create}

_Create a purchase order._

Create a purchase order.

**Responses**

| Status | Description |
| --- | --- |
| 201 | Purchase order is created. |
| 400 | Invalid request syntax |

**Request — POST /create**

::: code-group
```bash [cURL]
curl -X POST 'https://purchase-order.api.myparcel.nl/create' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "deliverySupplierDetails": {
    "supplier": "MyParcel",
    "reference": "#555"
  },
  "deliveryType": {
    "type": "CONTAINER",
    "quantity": 100
  },
  "expectedDelivery": {
    "true": "2025-02-04",
    "timeslot": {
      "from": 36000,
      "to": 43200
    }
  },
  "fulfilmentPlatform": "VASCO",
  "lines": [
    {
      "productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
      "quantity": 5
    }
  ]
}'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/create");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"deliverySupplierDetails": {"supplier": "MyParcel", "reference": "#555"}, "deliveryType": {"type": "CONTAINER", "quantity": 100}, "expectedDelivery": {"true": "2025-02-04", "timeslot": {"from": 36000, "to": 43200}}, "fulfilmentPlatform": "VASCO", "lines": [{"productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965", "quantity": 5}]}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://purchase-order.api.myparcel.nl/create", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "deliverySupplierDetails": {
      "supplier": "MyParcel",
      "reference": "#555"
    },
    "deliveryType": {
      "type": "CONTAINER",
      "quantity": 100
    },
    "expectedDelivery": {
      "true": "2025-02-04",
      "timeslot": {
        "from": 36000,
        "to": 43200
      }
    },
    "fulfilmentPlatform": "VASCO",
    "lines": [
      {
        "productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "quantity": 5
      }
    ]
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "deliverySupplierDetails": {
        "supplier": "MyParcel",
        "reference": "#555"
    },
    "deliveryType": {
        "type": "CONTAINER",
        "quantity": 100
    },
    "expectedDelivery": {
        "true": "2025-02-04",
        "timeslot": {
            "from": 36000,
            "to": 43200
        }
    },
    "fulfilmentPlatform": "VASCO",
    "lines": [
        {
            "productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
            "quantity": 5
        }
    ]
}

response = requests.post("https://purchase-order.api.myparcel.nl/create", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/create')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"deliverySupplierDetails\": {\"supplier\": \"MyParcel\", \"reference\": \"#555\"}, \"deliveryType\": {\"type\": \"CONTAINER\", \"quantity\": 100}, \"expectedDelivery\": {\"true\": \"2025-02-04\", \"timeslot\": {\"from\": 36000, \"to\": 43200}}, \"fulfilmentPlatform\": \"VASCO\", \"lines\": [{\"productId\": \"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"quantity\": 5}]}"

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
	payload := []byte(`{"deliverySupplierDetails": {"supplier": "MyParcel", "reference": "#555"}, "deliveryType": {"type": "CONTAINER", "quantity": 100}, "expectedDelivery": {"true": "2025-02-04", "timeslot": {"from": 36000, "to": 43200}}, "fulfilmentPlatform": "VASCO", "lines": [{"productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965", "quantity": 5}]}`)
	req, _ := http.NewRequest("POST", "https://purchase-order.api.myparcel.nl/create", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/create"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"deliverySupplierDetails\": {\"supplier\": \"MyParcel\", \"reference\": \"#555\"}, \"deliveryType\": {\"type\": \"CONTAINER\", \"quantity\": 100}, \"expectedDelivery\": {\"true\": \"2025-02-04\", \"timeslot\": {\"from\": 36000, \"to\": 43200}}, \"fulfilmentPlatform\": \"VASCO\", \"lines\": [{\"productId\": \"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"quantity\": 5}]}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://purchase-order.api.myparcel.nl/create");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""deliverySupplierDetails"": {""supplier"": ""MyParcel"", ""reference"": ""#555""}, ""deliveryType"": {""type"": ""CONTAINER"", ""quantity"": 100}, ""expectedDelivery"": {""true"": ""2025-02-04"", ""timeslot"": {""from"": 36000, ""to"": 43200}}, ""fulfilmentPlatform"": ""VASCO"", ""lines"": [{""productId"": ""a2aacbcc-b6c1-48d5-a9e1-179425737965"", ""quantity"": 5}]}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 201**

```json
{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "createdAt": "2024-02-04T00:00:00.123000+00:00",
  "deliveryType": {
    "type": "CONTAINER",
    "quantity": 100
  },
  "expectedDelivery": {
    "true": "2025-02-26",
    "timeslot": {
      "from": "08:00:00",
      "to": 36000
    }
  },
  "fulfilmentPlatform": "VASCO",
  "lines": [
    {
      "product": {
        "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "name": "Product 1",
        "ean": "1234567890123",
        "sku": "SKU123"
      },
      "quantity": 5
    }
  ],
  "status": "CONCEPT"
}
```

**PURCHASE ORDERS**

### `GET /purchase-orders` {#get-purchase-orders}

_Query and/or filter purchase orders._

Get purchase orders.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| aggregation | array | Fields to summarize data for based on the filters and query. |
| filter | object |  |
| limit | integer | The maximum number of purchase orders to retrieve. |
| pageToken | string | The page token to retrieve the next page of purchase orders. |
| query | string | The following operators are supported: '+ signifies AND operation' '\| signifies OR operation' '- negates a single token' '" wraps a number of tokens to signify a phrase for searching' '* at the end of a term signifies a prefix query' '( and ) signify precedence' '~N after a word signifies edit distance (fuzziness)' '~N after a phrase signifies slop amount' To use one of these characters literally, escape it with a preceding backslash (\). |
| sort | object | When no `query` is provided the default sort is by `createdAt` descending. When a `query` is provided the default sort is by relevance. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | The listed purchase orders. |
| 400 | Invalid request syntax |

**Request — GET /purchase-orders**

::: code-group
```bash [cURL]
curl -X GET 'https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value");
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
const response = await fetch("https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value", {
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

response = requests.get("https://purchase-order.api.myparcel.nl/purchase-orders", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value')
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
	req, _ := http.NewRequest("GET", "https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value", nil)
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "results": [],
  "total": {
    "relation": "eq",
    "value": 1
  }
}
```

### `GET /purchase-orders/{purchaseOrderId}/packing-slip` {#get-purchase-orders-purchaseorderid-packing-slip}

_Download a packing slip._

Download the packing slip of a purchase order. The status of the purchase order must be `REGISTERED`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| purchaseOrderId (path)REQUIRED | string | The ID of the purchase order. |
| firstName | string | First name on the packing slip. |
| lastName | string | Last name on the packing slip. |
| Accept (header)REQUIRED | string | Values: `application/pdf` |

**Responses**

| Status | Description |
| --- | --- |
| 200 | The packing slip PDF. |
| 400 | Invalid request syntax |
| 404 | Not found. |

**Request — GET /purchase-orders/{purchaseOrderId}/packing-slip**

::: code-group
```bash [cURL]
curl -X GET 'https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string");
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
const response = await fetch("https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string", {
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
    "firstName": "string"
}

response = requests.get("https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string')
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
	req, _ := http.NewRequest("GET", "https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string", nil)
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
"string"
```

**REMOVE**

### `POST /remove` {#post-remove}

_Remove purchase order._

Remove a purchase order. The status of the purchase order must be `CONCEPT`.

**Responses**

| Status | Description |
| --- | --- |
| 204 | Purchase order is removed. |
| 400 | Invalid request syntax |

**Request — POST /remove**

::: code-group
```bash [cURL]
curl -X POST 'https://purchase-order.api.myparcel.nl/remove' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "ids": [
    "a2aacbcc-b6c1-48d5-a9e1-179425737965",
    "a3aacbcc-b6c1-48d5-a9e1-179425737966"
  ]
}'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/remove");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"ids": ["a2aacbcc-b6c1-48d5-a9e1-179425737965", "a3aacbcc-b6c1-48d5-a9e1-179425737966"]}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://purchase-order.api.myparcel.nl/remove", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "ids": [
      "a2aacbcc-b6c1-48d5-a9e1-179425737965",
      "a3aacbcc-b6c1-48d5-a9e1-179425737966"
    ]
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "ids": [
        "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "a3aacbcc-b6c1-48d5-a9e1-179425737966"
    ]
}

response = requests.post("https://purchase-order.api.myparcel.nl/remove", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/remove')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"ids\": [\"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"a3aacbcc-b6c1-48d5-a9e1-179425737966\"]}"

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
	payload := []byte(`{"ids": ["a2aacbcc-b6c1-48d5-a9e1-179425737965", "a3aacbcc-b6c1-48d5-a9e1-179425737966"]}`)
	req, _ := http.NewRequest("POST", "https://purchase-order.api.myparcel.nl/remove", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/remove"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"ids\": [\"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"a3aacbcc-b6c1-48d5-a9e1-179425737966\"]}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://purchase-order.api.myparcel.nl/remove");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""ids"": [""a2aacbcc-b6c1-48d5-a9e1-179425737965"", ""a3aacbcc-b6c1-48d5-a9e1-179425737966""]}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**REMOVE LINES**

### `POST /remove-lines` {#post-remove-lines}

_Remove lines from a purchase order._

Remove lines from a purchase order. The status of the purchase order must be `CONCEPT`, `REGISTERED` or `REGISTRATION_REQUESTED`. When the status is `REGISTERED` or `REGISTRATION_REQUESTED` at least one line must remain.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Purchase order with lines removed. |
| 400 | Invalid request syntax |

**Request — POST /remove-lines**

::: code-group
```bash [cURL]
curl -X POST 'https://purchase-order.api.myparcel.nl/remove-lines' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "productIds": [
    "a2aacbcc-b6c1-48d5-a9e1-179425737965"
  ]
}'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/remove-lines");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "productIds": ["a2aacbcc-b6c1-48d5-a9e1-179425737965"]}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://purchase-order.api.myparcel.nl/remove-lines", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "productIds": [
      "a2aacbcc-b6c1-48d5-a9e1-179425737965"
    ]
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "productIds": [
        "a2aacbcc-b6c1-48d5-a9e1-179425737965"
    ]
}

response = requests.post("https://purchase-order.api.myparcel.nl/remove-lines", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/remove-lines')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"productIds\": [\"a2aacbcc-b6c1-48d5-a9e1-179425737965\"]}"

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
	payload := []byte(`{"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "productIds": ["a2aacbcc-b6c1-48d5-a9e1-179425737965"]}`)
	req, _ := http.NewRequest("POST", "https://purchase-order.api.myparcel.nl/remove-lines", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/remove-lines"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"productIds\": [\"a2aacbcc-b6c1-48d5-a9e1-179425737965\"]}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://purchase-order.api.myparcel.nl/remove-lines");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""id"": ""93cb8f97-8f08-4f40-960f-98c85c0b7cfe"", ""productIds"": [""a2aacbcc-b6c1-48d5-a9e1-179425737965""]}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "createdAt": "2024-02-04T00:00:00.123000+00:00",
  "fulfilmentPlatform": "VASCO"
}
```

**SET DELIVERY SUPPLIER DETAILS**

### `POST /set-delivery-supplier-details` {#post-set-delivery-supplier-details}

_Set delivery supplier details of a purchase order._

Set the delivery supplier details for a purchase order. The status of the purchase order must be `CONCEPT`, `REGISTERED` or `REGISTRATION_REQUESTED`.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Purchase order with delivery supplier details set. |
| 400 | Invalid request syntax |

**Request — POST /set-delivery-supplier-details**

::: code-group
```bash [cURL]
curl -X POST 'https://purchase-order.api.myparcel.nl/set-delivery-supplier-details' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "supplier": "MyParcel",
  "reference": "#555"
}'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/set-delivery-supplier-details");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "supplier": "MyParcel", "reference": "#555"}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://purchase-order.api.myparcel.nl/set-delivery-supplier-details", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "supplier": "MyParcel",
    "reference": "#555"
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "supplier": "MyParcel",
    "reference": "#555"
}

response = requests.post("https://purchase-order.api.myparcel.nl/set-delivery-supplier-details", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/set-delivery-supplier-details')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"supplier\": \"MyParcel\", \"reference\": \"#555\"}"

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
	payload := []byte(`{"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "supplier": "MyParcel", "reference": "#555"}`)
	req, _ := http.NewRequest("POST", "https://purchase-order.api.myparcel.nl/set-delivery-supplier-details", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/set-delivery-supplier-details"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"supplier\": \"MyParcel\", \"reference\": \"#555\"}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://purchase-order.api.myparcel.nl/set-delivery-supplier-details");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""id"": ""93cb8f97-8f08-4f40-960f-98c85c0b7cfe"", ""supplier"": ""MyParcel"", ""reference"": ""#555""}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "createdAt": "2024-02-04T00:00:00.123000+00:00",
  "fulfilmentPlatform": "VASCO",
  "lines": [
    {
      "product": {
        "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "name": "Product 1",
        "ean": "1234567890123",
        "sku": "SKU123"
      },
      "quantity": 5
    }
  ],
  "expectedDelivery": {
    "true": "2025-02-04",
    "timeslot": {
      "from": 36000,
      "to": 43200
    }
  },
  "deliverySupplierDetails": {
    "supplier": "MyParcel",
    "reference": "#555"
  },
  "deliveryType": {
    "type": "CONTAINER",
    "quantity": 100
  }
}
```

**SET DELIVERY TYPE**

### `POST /set-delivery-type` {#post-set-delivery-type}

_Set delivery type of a purchase order._

Set the delivery type of a purchase order. The status of the purchase order must be `CONCEPT`, `REGISTERED` or `REGISTRATION_REQUESTED`.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Purchase order with delivery type set. |
| 400 | Invalid request syntax |

**Request — POST /set-delivery-type**

::: code-group
```bash [cURL]
curl -X POST 'https://purchase-order.api.myparcel.nl/set-delivery-type' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "type": "CONTAINER",
  "quantity": 100
}'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/set-delivery-type");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "type": "CONTAINER", "quantity": 100}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://purchase-order.api.myparcel.nl/set-delivery-type", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "type": "CONTAINER",
    "quantity": 100
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "type": "CONTAINER",
    "quantity": 100
}

response = requests.post("https://purchase-order.api.myparcel.nl/set-delivery-type", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/set-delivery-type')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"type\": \"CONTAINER\", \"quantity\": 100}"

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
	payload := []byte(`{"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "type": "CONTAINER", "quantity": 100}`)
	req, _ := http.NewRequest("POST", "https://purchase-order.api.myparcel.nl/set-delivery-type", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/set-delivery-type"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"type\": \"CONTAINER\", \"quantity\": 100}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://purchase-order.api.myparcel.nl/set-delivery-type");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""id"": ""93cb8f97-8f08-4f40-960f-98c85c0b7cfe"", ""type"": ""CONTAINER"", ""quantity"": 100}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "createdAt": "2024-02-04T00:00:00.123000+00:00",
  "fulfilmentPlatform": "VASCO",
  "lines": [
    {
      "product": {
        "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "name": "Product 1",
        "ean": "1234567890123",
        "sku": "SKU123"
      },
      "quantity": 5
    }
  ],
  "expectedDelivery": {
    "true": "2025-02-04",
    "timeslot": {
      "from": 36000,
      "to": 43200
    }
  },
  "deliverySupplierDetails": {
    "supplier": "MyParcel",
    "reference": "#555"
  },
  "deliveryType": {
    "type": "CONTAINER",
    "quantity": 100
  }
}
```

**SET EXPECTED DELIVERY**

### `POST /set-expected-delivery` {#post-set-expected-delivery}

_Set expected delivery of a purchase order._

Set the expected delivery of a purchase order. The status of the purchase order must be `CONCEPT`, `REGISTERED` or `REGISTRATION_REQUESTED`.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Purchase order with expected delivery set. |
| 400 | Invalid request syntax |

**Request — POST /set-expected-delivery**

::: code-group
```bash [cURL]
curl -X POST 'https://purchase-order.api.myparcel.nl/set-expected-delivery' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "true": "2025-02-04",
  "timeslot": {
    "from": 36000,
    "to": 43200
  }
}'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/set-expected-delivery");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "true": "2025-02-04", "timeslot": {"from": 36000, "to": 43200}}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://purchase-order.api.myparcel.nl/set-expected-delivery", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "true": "2025-02-04",
    "timeslot": {
      "from": 36000,
      "to": 43200
    }
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "true": "2025-02-04",
    "timeslot": {
        "from": 36000,
        "to": 43200
    }
}

response = requests.post("https://purchase-order.api.myparcel.nl/set-expected-delivery", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/set-expected-delivery')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"true\": \"2025-02-04\", \"timeslot\": {\"from\": 36000, \"to\": 43200}}"

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
	payload := []byte(`{"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "true": "2025-02-04", "timeslot": {"from": 36000, "to": 43200}}`)
	req, _ := http.NewRequest("POST", "https://purchase-order.api.myparcel.nl/set-expected-delivery", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/set-expected-delivery"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"true\": \"2025-02-04\", \"timeslot\": {\"from\": 36000, \"to\": 43200}}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://purchase-order.api.myparcel.nl/set-expected-delivery");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""id"": ""93cb8f97-8f08-4f40-960f-98c85c0b7cfe"", ""true"": ""2025-02-04"", ""timeslot"": {""from"": 36000, ""to"": 43200}}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "createdAt": "2024-02-04T00:00:00.123000+00:00",
  "fulfilmentPlatform": "VASCO",
  "lines": [
    {
      "product": {
        "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "name": "Product 1",
        "ean": "1234567890123",
        "sku": "SKU123"
      },
      "quantity": 5
    }
  ],
  "expectedDelivery": {
    "true": "2025-02-04",
    "timeslot": {
      "from": 36000,
      "to": 43200
    }
  },
  "deliverySupplierDetails": {
    "supplier": "MyParcel",
    "reference": "#555"
  },
  "deliveryType": {
    "type": "CONTAINER",
    "quantity": 100
  }
}
```

**REGISTER**

### `POST /register` {#post-register}

_Register a purchase order._

Register one or multiple purchase orders. The status of the purchase order must be `CONCEPT`.

**Responses**

| Status | Description |
| --- | --- |
| 204 | Purchase orders are requested to register. |
| 400 | Invalid request syntax |

**Request — POST /register**

::: code-group
```bash [cURL]
curl -X POST 'https://purchase-order.api.myparcel.nl/register' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "ids": [
    "93cb8f97-8f08-4f40-960f-98c85c0b7cfe"
  ]
}'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/register");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"ids": ["93cb8f97-8f08-4f40-960f-98c85c0b7cfe"]}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://purchase-order.api.myparcel.nl/register", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "ids": [
      "93cb8f97-8f08-4f40-960f-98c85c0b7cfe"
    ]
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "ids": [
        "93cb8f97-8f08-4f40-960f-98c85c0b7cfe"
    ]
}

response = requests.post("https://purchase-order.api.myparcel.nl/register", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/register')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"ids\": [\"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\"]}"

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
	payload := []byte(`{"ids": ["93cb8f97-8f08-4f40-960f-98c85c0b7cfe"]}`)
	req, _ := http.NewRequest("POST", "https://purchase-order.api.myparcel.nl/register", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/register"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"ids\": [\"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\"]}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://purchase-order.api.myparcel.nl/register");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""ids"": [""93cb8f97-8f08-4f40-960f-98c85c0b7cfe""]}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**UPDATE LINE QUANTITY**

### `POST /update-line-quantity` {#post-update-line-quantity}

_Update quantity of a purchase order line._

Update the quantity of a purchase order line. The status of the purchase order must be `CONCEPT`, `REGISTERED` or `REGISTRATION_REQUESTED`.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Purchase order with quantity of order line updated. |
| 400 | Invalid request syntax |

**Request — POST /update-line-quantity**

::: code-group
```bash [cURL]
curl -X POST 'https://purchase-order.api.myparcel.nl/update-line-quantity' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
  "quantity": 100
}'
```

```php [PHP]
<?php
$ch = curl_init("https://purchase-order.api.myparcel.nl/update-line-quantity");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965", "quantity": 100}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://purchase-order.api.myparcel.nl/update-line-quantity", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
    "quantity": 100
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
    "productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
    "quantity": 100
}

response = requests.post("https://purchase-order.api.myparcel.nl/update-line-quantity", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://purchase-order.api.myparcel.nl/update-line-quantity')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"productId\": \"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"quantity\": 100}"

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
	payload := []byte(`{"id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe", "productId": "a2aacbcc-b6c1-48d5-a9e1-179425737965", "quantity": 100}`)
	req, _ := http.NewRequest("POST", "https://purchase-order.api.myparcel.nl/update-line-quantity", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://purchase-order.api.myparcel.nl/update-line-quantity"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"id\": \"93cb8f97-8f08-4f40-960f-98c85c0b7cfe\", \"productId\": \"a2aacbcc-b6c1-48d5-a9e1-179425737965\", \"quantity\": 100}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://purchase-order.api.myparcel.nl/update-line-quantity");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""id"": ""93cb8f97-8f08-4f40-960f-98c85c0b7cfe"", ""productId"": ""a2aacbcc-b6c1-48d5-a9e1-179425737965"", ""quantity"": 100}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "id": "93cb8f97-8f08-4f40-960f-98c85c0b7cfe",
  "createdAt": "2024-02-04T00:00:00.123000+00:00",
  "fulfilmentPlatform": "VASCO",
  "lines": [
    {
      "product": {
        "id": "a2aacbcc-b6c1-48d5-a9e1-179425737965",
        "name": "Product 1",
        "ean": "1234567890123",
        "sku": "SKU123"
      },
      "quantity": 100
    }
  ]
}
```
