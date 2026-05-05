---
title: Order API
description: "This API features all functionality around orders."
---

## Endpoints {#endpoints}

Auto-generated from `order.api.myparcel.nl/openapi.yaml`. Click an endpoint to see its parameters and code samples.

**ADD NOTE**

### `POST /add-note` {#post-add-note}

_Add a note to an order._

Add an order note. Only possible if the order has `status=OPEN` and the maximum number of 100 notes is not reached.

**Responses**

| Status | Description |
| --- | --- |
| 200 | The request is successfully accepted. |
| 400 | Invalid request syntax |

**Request — POST /add-note**

::: code-group
```bash [cURL]
curl -X POST 'https://order.api.myparcel.nl/add-note' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "id": "00000000-0000-0000-0000-000000000000",
    "text": "string"
  }
]'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/add-note");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([{"id": "00000000-0000-0000-0000-000000000000", "text": "string"}]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://order.api.myparcel.nl/add-note", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "text": "string"
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
        "id": "00000000-0000-0000-0000-000000000000",
        "text": "string"
    }
]

response = requests.post("https://order.api.myparcel.nl/add-note", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/add-note')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"text\": \"string\"}]"

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
	payload := []byte(`[{"id": "00000000-0000-0000-0000-000000000000", "text": "string"}]`)
	req, _ := http.NewRequest("POST", "https://order.api.myparcel.nl/add-note", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://order.api.myparcel.nl/add-note"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"text\": \"string\"}]"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://order.api.myparcel.nl/add-note");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[{""id"": ""00000000-0000-0000-0000-000000000000"", ""text"": ""string""}]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
[]
```

**ASSIGN TO USER**

### `POST /assign-to-user` {#post-assign-to-user}

_Assign orders to an user. Only possible if the order has `status=OPEN`._

Assign orders to an user. Only possible if the order has `status=OPEN`.

**Responses**

| Status | Description |
| --- | --- |
| 200 | The request is successfully accepted. |
| 400 | Invalid request syntax |

**Request — POST /assign-to-user**

::: code-group
```bash [cURL]
curl -X POST 'https://order.api.myparcel.nl/assign-to-user' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "id": "00000000-0000-0000-0000-000000000000",
    "userId": "string"
  }
]'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/assign-to-user");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([{"id": "00000000-0000-0000-0000-000000000000", "userId": "string"}]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://order.api.myparcel.nl/assign-to-user", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "userId": "string"
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
        "id": "00000000-0000-0000-0000-000000000000",
        "userId": "string"
    }
]

response = requests.post("https://order.api.myparcel.nl/assign-to-user", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/assign-to-user')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"userId\": \"string\"}]"

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
	payload := []byte(`[{"id": "00000000-0000-0000-0000-000000000000", "userId": "string"}]`)
	req, _ := http.NewRequest("POST", "https://order.api.myparcel.nl/assign-to-user", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://order.api.myparcel.nl/assign-to-user"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"userId\": \"string\"}]"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://order.api.myparcel.nl/assign-to-user");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[{""id"": ""00000000-0000-0000-0000-000000000000"", ""userId"": ""string""}]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
[]
```

**CANCEL**

### `POST /cancel` {#post-cancel}

_Cancel orders._

Cancel orders. Only possible if the order has `status=OPEN`.

**Responses**

| Status | Description |
| --- | --- |
| 200 | The request is successfully accepted. |
| 400 | Invalid request syntax |

**Request — POST /cancel**

::: code-group
```bash [cURL]
curl -X POST 'https://order.api.myparcel.nl/cancel' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "id": "00000000-0000-0000-0000-000000000000"
  }
]'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/cancel");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([{"id": "00000000-0000-0000-0000-000000000000"}]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://order.api.myparcel.nl/cancel", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      "id": "00000000-0000-0000-0000-000000000000"
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
        "id": "00000000-0000-0000-0000-000000000000"
    }
]

response = requests.post("https://order.api.myparcel.nl/cancel", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/cancel')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[{\"id\": \"00000000-0000-0000-0000-000000000000\"}]"

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
	payload := []byte(`[{"id": "00000000-0000-0000-0000-000000000000"}]`)
	req, _ := http.NewRequest("POST", "https://order.api.myparcel.nl/cancel", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://order.api.myparcel.nl/cancel"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[{\"id\": \"00000000-0000-0000-0000-000000000000\"}]"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://order.api.myparcel.nl/cancel");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[{""id"": ""00000000-0000-0000-0000-000000000000""}]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
[]
```

**CREATE FROM SHIPPABLE PACKAGES**

### `POST /create-from-shippable-packages` {#post-create-from-shippable-packages}

_Create an order from shippable packages._

Create an order with packages that contain shipment properties.

**Responses**

| Status | Description |
| --- | --- |
| 200 | The request is successfully accepted. |
| 400 | Invalid request syntax |

**Request — POST /create-from-shippable-packages**

::: code-group
```bash [cURL]
curl -X POST 'https://order.api.myparcel.nl/create-from-shippable-packages' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[]'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/create-from-shippable-packages");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://order.api.myparcel.nl/create-from-shippable-packages", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([]),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = []

response = requests.post("https://order.api.myparcel.nl/create-from-shippable-packages", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/create-from-shippable-packages')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[]"

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
	payload := []byte(`[]`)
	req, _ := http.NewRequest("POST", "https://order.api.myparcel.nl/create-from-shippable-packages", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://order.api.myparcel.nl/create-from-shippable-packages"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[]"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://order.api.myparcel.nl/create-from-shippable-packages");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
[]
```

**ADD PACKAGES**

### `POST /add-packages` {#post-add-packages}

_Add packages to orders_

Add packages to orders

**Responses**

| Status | Description |
| --- | --- |
| 200 | The request is successfully accepted. |
| 400 | Invalid request syntax |

**Request — POST /add-packages**

::: code-group
```bash [cURL]
curl -X POST 'https://order.api.myparcel.nl/add-packages' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "id": "00000000-0000-0000-0000-000000000000",
    "packages": [
      {
        "lines": [
          {
            "id": "00000000-0000-0000-0000-000000000000",
            "quantity": 1
          }
        ],
        "physicalProperties": null
      }
    ]
  }
]'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/add-packages");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([{"id": "00000000-0000-0000-0000-000000000000", "packages": [{"lines": [{"id": "00000000-0000-0000-0000-000000000000", "quantity": 1}], "physicalProperties": null}]}]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://order.api.myparcel.nl/add-packages", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "packages": [
        {
          "lines": [
            {
              "id": "00000000-0000-0000-0000-000000000000",
              "quantity": 1
            }
          ],
          "physicalProperties": null
        }
      ]
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
        "id": "00000000-0000-0000-0000-000000000000",
        "packages": [
            {
                "lines": [
                    {
                        "id": "00000000-0000-0000-0000-000000000000",
                        "quantity": 1
                    }
                ],
                "physicalProperties": null
            }
        ]
    }
]

response = requests.post("https://order.api.myparcel.nl/add-packages", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/add-packages')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"packages\": [{\"lines\": [{\"id\": \"00000000-0000-0000-0000-000000000000\", \"quantity\": 1}], \"physicalProperties\": null}]}]"

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
	payload := []byte(`[{"id": "00000000-0000-0000-0000-000000000000", "packages": [{"lines": [{"id": "00000000-0000-0000-0000-000000000000", "quantity": 1}], "physicalProperties": null}]}]`)
	req, _ := http.NewRequest("POST", "https://order.api.myparcel.nl/add-packages", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://order.api.myparcel.nl/add-packages"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"packages\": [{\"lines\": [{\"id\": \"00000000-0000-0000-0000-000000000000\", \"quantity\": 1}], \"physicalProperties\": null}]}]"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://order.api.myparcel.nl/add-packages");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[{""id"": ""00000000-0000-0000-0000-000000000000"", ""packages"": [{""lines"": [{""id"": ""00000000-0000-0000-0000-000000000000"", ""quantity"": 1}], ""physicalProperties"": null}]}]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
[]
```

**PREPARE PACKAGES FOR SHIPMENT**

### `POST /prepare-packages-for-shipment` {#post-prepare-packages-for-shipment}

_Prepares packages for shipment_

Prepares packages for shipment

**Responses**

| Status | Description |
| --- | --- |
| 200 | The request is successfully accepted. |
| 400 | Invalid request syntax |

**Request — POST /prepare-packages-for-shipment**

::: code-group
```bash [cURL]
curl -X POST 'https://order.api.myparcel.nl/prepare-packages-for-shipment' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[]'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/prepare-packages-for-shipment");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://order.api.myparcel.nl/prepare-packages-for-shipment", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([]),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = []

response = requests.post("https://order.api.myparcel.nl/prepare-packages-for-shipment", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/prepare-packages-for-shipment')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[]"

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
	payload := []byte(`[]`)
	req, _ := http.NewRequest("POST", "https://order.api.myparcel.nl/prepare-packages-for-shipment", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://order.api.myparcel.nl/prepare-packages-for-shipment"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[]"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://order.api.myparcel.nl/prepare-packages-for-shipment");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
[]
```

**UNPREPARE PACKAGES FOR SHIPMENT**

### `POST /unprepare-packages-for-shipment` {#post-unprepare-packages-for-shipment}

_Unprepares packages for shipment_

Unprepares packages for shipment. Only possible if the order has `status=OPEN`.

**Responses**

| Status | Description |
| --- | --- |
| 200 | The request is successfully accepted. |
| 400 | Invalid request syntax |

**Request — POST /unprepare-packages-for-shipment**

::: code-group
```bash [cURL]
curl -X POST 'https://order.api.myparcel.nl/unprepare-packages-for-shipment' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "id": "00000000-0000-0000-0000-000000000000",
    "packageIds": [
      "00000000-0000-0000-0000-000000000000"
    ]
  }
]'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/unprepare-packages-for-shipment");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([{"id": "00000000-0000-0000-0000-000000000000", "packageIds": ["00000000-0000-0000-0000-000000000000"]}]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://order.api.myparcel.nl/unprepare-packages-for-shipment", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "packageIds": [
        "00000000-0000-0000-0000-000000000000"
      ]
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
        "id": "00000000-0000-0000-0000-000000000000",
        "packageIds": [
            "00000000-0000-0000-0000-000000000000"
        ]
    }
]

response = requests.post("https://order.api.myparcel.nl/unprepare-packages-for-shipment", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/unprepare-packages-for-shipment')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"packageIds\": [\"00000000-0000-0000-0000-000000000000\"]}]"

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
	payload := []byte(`[{"id": "00000000-0000-0000-0000-000000000000", "packageIds": ["00000000-0000-0000-0000-000000000000"]}]`)
	req, _ := http.NewRequest("POST", "https://order.api.myparcel.nl/unprepare-packages-for-shipment", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://order.api.myparcel.nl/unprepare-packages-for-shipment"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"packageIds\": [\"00000000-0000-0000-0000-000000000000\"]}]"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://order.api.myparcel.nl/unprepare-packages-for-shipment");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[{""id"": ""00000000-0000-0000-0000-000000000000"", ""packageIds"": [""00000000-0000-0000-0000-000000000000""]}]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
[]
```

**EDIT NOTE**

### `POST /edit-note` {#post-edit-note}

_Edit a note of an order._

Edit order note. Only possible if the order has `status=OPEN`.

**Responses**

| Status | Description |
| --- | --- |
| 200 | The request is successfully accepted. |
| 400 | Invalid request syntax |

**Request — POST /edit-note**

::: code-group
```bash [cURL]
curl -X POST 'https://order.api.myparcel.nl/edit-note' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "id": "00000000-0000-0000-0000-000000000000",
    "noteId": "00000000-0000-0000-0000-000000000000",
    "text": "string"
  }
]'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/edit-note");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([{"id": "00000000-0000-0000-0000-000000000000", "noteId": "00000000-0000-0000-0000-000000000000", "text": "string"}]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://order.api.myparcel.nl/edit-note", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "noteId": "00000000-0000-0000-0000-000000000000",
      "text": "string"
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
        "id": "00000000-0000-0000-0000-000000000000",
        "noteId": "00000000-0000-0000-0000-000000000000",
        "text": "string"
    }
]

response = requests.post("https://order.api.myparcel.nl/edit-note", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/edit-note')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"noteId\": \"00000000-0000-0000-0000-000000000000\", \"text\": \"string\"}]"

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
	payload := []byte(`[{"id": "00000000-0000-0000-0000-000000000000", "noteId": "00000000-0000-0000-0000-000000000000", "text": "string"}]`)
	req, _ := http.NewRequest("POST", "https://order.api.myparcel.nl/edit-note", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://order.api.myparcel.nl/edit-note"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"noteId\": \"00000000-0000-0000-0000-000000000000\", \"text\": \"string\"}]"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://order.api.myparcel.nl/edit-note");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[{""id"": ""00000000-0000-0000-0000-000000000000"", ""noteId"": ""00000000-0000-0000-0000-000000000000"", ""text"": ""string""}]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
[]
```

**IMPORT**

### `POST /import` {#post-import}

_Import an order after it is discovered from a sales channel._

Import a discovered order. Only possible if the order has `status=DISCOVERED`.

**Responses**

| Status | Description |
| --- | --- |
| 200 | The request is successfully accepted. |
| 400 | Invalid request syntax |

**Request — POST /import**

::: code-group
```bash [cURL]
curl -X POST 'https://order.api.myparcel.nl/import' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "id": "00000000-0000-0000-0000-000000000000"
  }
]'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/import");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([{"id": "00000000-0000-0000-0000-000000000000"}]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://order.api.myparcel.nl/import", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      "id": "00000000-0000-0000-0000-000000000000"
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
        "id": "00000000-0000-0000-0000-000000000000"
    }
]

response = requests.post("https://order.api.myparcel.nl/import", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/import')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[{\"id\": \"00000000-0000-0000-0000-000000000000\"}]"

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
	payload := []byte(`[{"id": "00000000-0000-0000-0000-000000000000"}]`)
	req, _ := http.NewRequest("POST", "https://order.api.myparcel.nl/import", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://order.api.myparcel.nl/import"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[{\"id\": \"00000000-0000-0000-0000-000000000000\"}]"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://order.api.myparcel.nl/import");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[{""id"": ""00000000-0000-0000-0000-000000000000""}]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
[]
```

**ORDERS**

### `GET /orders` {#get-orders}

_Query and/or filter orders._

Get orders.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| aggregation | array | Fields to summarize data for based on the query. |
| filter | object |  |
| limit | integer | The maximum number of orders to retrieve. |
| pageToken | string | The page token to retrieve the next page of orders. |
| query | string | The following operators are supported: '+ signifies AND operation' '\| signifies OR operation' '- negates a single token' '" wraps a number of tokens to signify a phrase for searching' '* at the end of a term signifies a prefix query' '( and ) signify precedence' '~N after a word signifies edit distance (fuzziness)' '~N after a phrase signifies slop amount' To use one of these characters literally, escape it with a preceding backslash (\). |
| sort | object | When no `query` is provided the default sort is by `orderedAt` descending. When a `query` is provided the default sort is by relevance. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | The found orders. |
| 400 | Invalid request syntax |

**Request — GET /orders**

::: code-group
```bash [cURL]
curl -X GET 'https://order.api.myparcel.nl/orders?aggregation=value' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/orders?aggregation=value");
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
const response = await fetch("https://order.api.myparcel.nl/orders?aggregation=value", {
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

response = requests.get("https://order.api.myparcel.nl/orders", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/orders?aggregation=value')
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
	req, _ := http.NewRequest("GET", "https://order.api.myparcel.nl/orders?aggregation=value", nil)
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
            .uri(URI.create("https://order.api.myparcel.nl/orders?aggregation=value"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://order.api.myparcel.nl/orders?aggregation=value");
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
      "orderedAt": null,
      "price": {
        "currency": "string",
        "fractional": 1,
        "integral": 1
      },
      "shopId": "string",
      "status": "CANCELED"
    }
  ],
  "total": {
    "relation": "eq",
    "value": 1
  }
}
```

**PACKING SLIPS**

### `GET /packing-slips` {#get-packing-slips}

_Generate packing slips for 1 or more orders._

Get packing slips for one or more orders. When packageId is provided, exactly one orderId must be supplied and the packageIds must belong to that order.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| shipmentLabelsLayout | string | How shipment labels are included alongside the packing slips in the resulting PDF. `INTERLEAVED` outputs each packing slip immediately followed by its shipment label. When the parameter is omitted, no shipment labels are included and only packing slips are rendered. Values: `INTERLEAVED` |
| orderIdREQUIRED | array | The orderId of the order to include in the packing slips. A maximum of 50 orders can be included in the request. When packageId is provided, exactly one orderId is allowed. |
| packageId | array | The packageId of the package to include in the packing slips. The packageIds must belong to the single orderId in the request and a maximum of 20 packageIds can be included. |
| Accept (header)REQUIRED | string | Values: `application/pdf` |

**Responses**

| Status | Description |
| --- | --- |
| 200 | Packing slips PDF. |
| 400 | Invalid request syntax |

**Request — GET /packing-slips**

::: code-group
```bash [cURL]
curl -X GET 'https://order.api.myparcel.nl/packing-slips?orderId=value' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/packing-slips?orderId=value");
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
const response = await fetch("https://order.api.myparcel.nl/packing-slips?orderId=value", {
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
    "orderId": "value"
}

response = requests.get("https://order.api.myparcel.nl/packing-slips", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/packing-slips?orderId=value')
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
	req, _ := http.NewRequest("GET", "https://order.api.myparcel.nl/packing-slips?orderId=value", nil)
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
            .uri(URI.create("https://order.api.myparcel.nl/packing-slips?orderId=value"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://order.api.myparcel.nl/packing-slips?orderId=value");
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

**PICKLIST**

### `GET /picklist` {#get-picklist}

_Generate a picklist for 1 or more orders._

Get picklist.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| orderIdREQUIRED | array | The orderId of the order to include in the picklist. A maximum of 50 orders can be included in the request. |
| Accept (header)REQUIRED | string | Values: `application/pdf` |

**Responses**

| Status | Description |
| --- | --- |
| 200 | Picklist PDF. |
| 400 | Invalid request syntax |

**Request — GET /picklist**

::: code-group
```bash [cURL]
curl -X GET 'https://order.api.myparcel.nl/picklist?orderId=value' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/picklist?orderId=value");
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
const response = await fetch("https://order.api.myparcel.nl/picklist?orderId=value", {
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
    "orderId": "value"
}

response = requests.get("https://order.api.myparcel.nl/picklist", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/picklist?orderId=value')
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
	req, _ := http.NewRequest("GET", "https://order.api.myparcel.nl/picklist?orderId=value", nil)
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
            .uri(URI.create("https://order.api.myparcel.nl/picklist?orderId=value"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://order.api.myparcel.nl/picklist?orderId=value");
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

**REMOVE NOTES**

### `POST /remove-notes` {#post-remove-notes}

_Remove notes from an order._

Remove order notes. Only possible if the order has `status=OPEN`.

**Responses**

| Status | Description |
| --- | --- |
| 200 | The request is successfully accepted. |
| 400 | Invalid request syntax |

**Request — POST /remove-notes**

::: code-group
```bash [cURL]
curl -X POST 'https://order.api.myparcel.nl/remove-notes' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "id": "00000000-0000-0000-0000-000000000000",
    "noteIds": [
      "00000000-0000-0000-0000-000000000000"
    ]
  }
]'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/remove-notes");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([{"id": "00000000-0000-0000-0000-000000000000", "noteIds": ["00000000-0000-0000-0000-000000000000"]}]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://order.api.myparcel.nl/remove-notes", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "noteIds": [
        "00000000-0000-0000-0000-000000000000"
      ]
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
        "id": "00000000-0000-0000-0000-000000000000",
        "noteIds": [
            "00000000-0000-0000-0000-000000000000"
        ]
    }
]

response = requests.post("https://order.api.myparcel.nl/remove-notes", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/remove-notes')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"noteIds\": [\"00000000-0000-0000-0000-000000000000\"]}]"

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
	payload := []byte(`[{"id": "00000000-0000-0000-0000-000000000000", "noteIds": ["00000000-0000-0000-0000-000000000000"]}]`)
	req, _ := http.NewRequest("POST", "https://order.api.myparcel.nl/remove-notes", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://order.api.myparcel.nl/remove-notes"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[{\"id\": \"00000000-0000-0000-0000-000000000000\", \"noteIds\": [\"00000000-0000-0000-0000-000000000000\"]}]"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://order.api.myparcel.nl/remove-notes");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[{""id"": ""00000000-0000-0000-0000-000000000000"", ""noteIds"": [""00000000-0000-0000-0000-000000000000""]}]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
[]
```

**UNASSIGN FROM USER**

### `POST /unassign-from-user` {#post-unassign-from-user}

_Unassign orders from an user. Only possible if the order has `status=OPEN`_

Unassign orders from an user. Only possible if the order has `status=OPEN`

**Responses**

| Status | Description |
| --- | --- |
| 200 | The request is successfully accepted. |
| 400 | Invalid request syntax |

**Request — POST /unassign-from-user**

::: code-group
```bash [cURL]
curl -X POST 'https://order.api.myparcel.nl/unassign-from-user' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "id": "00000000-0000-0000-0000-000000000000"
  }
]'
```

```php [PHP]
<?php
$ch = curl_init("https://order.api.myparcel.nl/unassign-from-user");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode([{"id": "00000000-0000-0000-0000-000000000000"}]),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://order.api.myparcel.nl/unassign-from-user", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([
    {
      "id": "00000000-0000-0000-0000-000000000000"
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
        "id": "00000000-0000-0000-0000-000000000000"
    }
]

response = requests.post("https://order.api.myparcel.nl/unassign-from-user", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://order.api.myparcel.nl/unassign-from-user')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "[{\"id\": \"00000000-0000-0000-0000-000000000000\"}]"

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
	payload := []byte(`[{"id": "00000000-0000-0000-0000-000000000000"}]`)
	req, _ := http.NewRequest("POST", "https://order.api.myparcel.nl/unassign-from-user", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://order.api.myparcel.nl/unassign-from-user"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("[{\"id\": \"00000000-0000-0000-0000-000000000000\"}]"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://order.api.myparcel.nl/unassign-from-user");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"[{""id"": ""00000000-0000-0000-0000-000000000000""}]", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
[]
```
