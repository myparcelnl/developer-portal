---
title: Printing API
description: "This API features all functionality around direct printing."
---

## Endpoints {#endpoints}

Auto-generated from `printing.api.myparcel.nl/openapi.yaml`. Click an endpoint to see its parameters and code samples.

**PRINTER GROUPS**

### `GET /printer-groups` {#get-printer-groups}

_Get the list accessible printer groups_

Get the list accessible printer groups.

**Responses**

| Status | Description |
| --- | --- |
| 200 | List of accessible printer groups |

**Request — GET /printer-groups**

::: code-group
```bash [cURL]
curl -X GET 'https://printing.api.myparcel.nl/printer-groups' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://printing.api.myparcel.nl/printer-groups");
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
const response = await fetch("https://printing.api.myparcel.nl/printer-groups", {
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

response = requests.get("https://printing.api.myparcel.nl/printer-groups", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://printing.api.myparcel.nl/printer-groups')
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
	req, _ := http.NewRequest("GET", "https://printing.api.myparcel.nl/printer-groups", nil)
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
            .uri(URI.create("https://printing.api.myparcel.nl/printer-groups"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://printing.api.myparcel.nl/printer-groups");
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
      "name": "string",
      "shopIds": [
        "string"
      ]
    }
  ]
}
```

**PRINTERS**

### `GET /printers` {#get-printers}

_Get the list of available printers_

Get the list of available printers.

**Responses**

| Status | Description |
| --- | --- |
| 200 | List of printers |

**Request — GET /printers**

::: code-group
```bash [cURL]
curl -X GET 'https://printing.api.myparcel.nl/printers' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://printing.api.myparcel.nl/printers");
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
const response = await fetch("https://printing.api.myparcel.nl/printers", {
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

response = requests.get("https://printing.api.myparcel.nl/printers", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://printing.api.myparcel.nl/printers')
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
	req, _ := http.NewRequest("GET", "https://printing.api.myparcel.nl/printers", nil)
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
            .uri(URI.create("https://printing.api.myparcel.nl/printers"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://printing.api.myparcel.nl/printers");
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
      "name": "string",
      "formats": [
        "A4"
      ]
    }
  ]
}
```

**STATUS**

### `GET /status` {#get-status}

_Get the direct printing account status_

Get the direct printing account status.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Account status |

**Request — GET /status**

::: code-group
```bash [cURL]
curl -X GET 'https://printing.api.myparcel.nl/status' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://printing.api.myparcel.nl/status");
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
const response = await fetch("https://printing.api.myparcel.nl/status", {
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

response = requests.get("https://printing.api.myparcel.nl/status", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://printing.api.myparcel.nl/status')
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
	req, _ := http.NewRequest("GET", "https://printing.api.myparcel.nl/status", nil)
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
            .uri(URI.create("https://printing.api.myparcel.nl/status"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://printing.api.myparcel.nl/status");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "status": "INITIALIZATION_REQUIRED"
}
```

**ALLOW SHOPS ACCESS TO PRINTER GROUP**

### `POST /allow-shops-access-to-printer-group` {#post-allow-shops-access-to-printer-group}

_Allows shop IDs to access a printer group_

Allows shop IDs to access a printer group.

**Responses**

| Status | Description |
| --- | --- |
| 204 | The shop IDs have access to the printer group. |
| 400 | Invalid request syntax |

**Request — POST /allow-shops-access-to-printer-group**

::: code-group
```bash [cURL]
curl -X POST 'https://printing.api.myparcel.nl/allow-shops-access-to-printer-group' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "printerGroupId": "00000000-0000-0000-0000-000000000000",
  "shopIds": [
    "string"
  ]
}'
```

```php [PHP]
<?php
$ch = curl_init("https://printing.api.myparcel.nl/allow-shops-access-to-printer-group");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"printerGroupId": "00000000-0000-0000-0000-000000000000", "shopIds": ["string"]}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://printing.api.myparcel.nl/allow-shops-access-to-printer-group", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "printerGroupId": "00000000-0000-0000-0000-000000000000",
    "shopIds": [
      "string"
    ]
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "printerGroupId": "00000000-0000-0000-0000-000000000000",
    "shopIds": [
        "string"
    ]
}

response = requests.post("https://printing.api.myparcel.nl/allow-shops-access-to-printer-group", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://printing.api.myparcel.nl/allow-shops-access-to-printer-group')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"printerGroupId\": \"00000000-0000-0000-0000-000000000000\", \"shopIds\": [\"string\"]}"

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
	payload := []byte(`{"printerGroupId": "00000000-0000-0000-0000-000000000000", "shopIds": ["string"]}`)
	req, _ := http.NewRequest("POST", "https://printing.api.myparcel.nl/allow-shops-access-to-printer-group", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://printing.api.myparcel.nl/allow-shops-access-to-printer-group"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"printerGroupId\": \"00000000-0000-0000-0000-000000000000\", \"shopIds\": [\"string\"]}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://printing.api.myparcel.nl/allow-shops-access-to-printer-group");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""printerGroupId"": ""00000000-0000-0000-0000-000000000000"", ""shopIds"": [""string""]}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**ASSIGN PRINTER TO GROUP**

### `POST /assign-printer-to-group` {#post-assign-printer-to-group}

_Assign a printer to a printer group_

Assigns a printer to a printer group.

**Responses**

| Status | Description |
| --- | --- |
| 204 | The printer has been assigned. |
| 400 | Invalid request syntax |

**Request — POST /assign-printer-to-group**

::: code-group
```bash [cURL]
curl -X POST 'https://printing.api.myparcel.nl/assign-printer-to-group' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "printerGroupId": "00000000-0000-0000-0000-000000000000",
  "printerId": "00000000-0000-0000-0000-000000000000",
  "format": "A4"
}'
```

```php [PHP]
<?php
$ch = curl_init("https://printing.api.myparcel.nl/assign-printer-to-group");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"printerGroupId": "00000000-0000-0000-0000-000000000000", "printerId": "00000000-0000-0000-0000-000000000000", "format": "A4"}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://printing.api.myparcel.nl/assign-printer-to-group", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "printerGroupId": "00000000-0000-0000-0000-000000000000",
    "printerId": "00000000-0000-0000-0000-000000000000",
    "format": "A4"
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "printerGroupId": "00000000-0000-0000-0000-000000000000",
    "printerId": "00000000-0000-0000-0000-000000000000",
    "format": "A4"
}

response = requests.post("https://printing.api.myparcel.nl/assign-printer-to-group", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://printing.api.myparcel.nl/assign-printer-to-group')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"printerGroupId\": \"00000000-0000-0000-0000-000000000000\", \"printerId\": \"00000000-0000-0000-0000-000000000000\", \"format\": \"A4\"}"

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
	payload := []byte(`{"printerGroupId": "00000000-0000-0000-0000-000000000000", "printerId": "00000000-0000-0000-0000-000000000000", "format": "A4"}`)
	req, _ := http.NewRequest("POST", "https://printing.api.myparcel.nl/assign-printer-to-group", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://printing.api.myparcel.nl/assign-printer-to-group"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"printerGroupId\": \"00000000-0000-0000-0000-000000000000\", \"printerId\": \"00000000-0000-0000-0000-000000000000\", \"format\": \"A4\"}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://printing.api.myparcel.nl/assign-printer-to-group");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""printerGroupId"": ""00000000-0000-0000-0000-000000000000"", ""printerId"": ""00000000-0000-0000-0000-000000000000"", ""format"": ""A4""}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**CREATE PRINTER GROUP**

### `POST /create-printer-group` {#post-create-printer-group}

_Create printer group_

Creates a new printer group.

**Responses**

| Status | Description |
| --- | --- |
| 201 | The created printer group. |
| 400 | Invalid request syntax |

**Request — POST /create-printer-group**

::: code-group
```bash [cURL]
curl -X POST 'https://printing.api.myparcel.nl/create-printer-group' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "string",
  "shopIds": [
    "string"
  ]
}'
```

```php [PHP]
<?php
$ch = curl_init("https://printing.api.myparcel.nl/create-printer-group");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"name": "string", "shopIds": ["string"]}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://printing.api.myparcel.nl/create-printer-group", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "name": "string",
    "shopIds": [
      "string"
    ]
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "name": "string",
    "shopIds": [
        "string"
    ]
}

response = requests.post("https://printing.api.myparcel.nl/create-printer-group", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://printing.api.myparcel.nl/create-printer-group')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"name\": \"string\", \"shopIds\": [\"string\"]}"

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
	payload := []byte(`{"name": "string", "shopIds": ["string"]}`)
	req, _ := http.NewRequest("POST", "https://printing.api.myparcel.nl/create-printer-group", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://printing.api.myparcel.nl/create-printer-group"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"name\": \"string\", \"shopIds\": [\"string\"]}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://printing.api.myparcel.nl/create-printer-group");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""name"": ""string"", ""shopIds"": [""string""]}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 201**

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "createdAt": "2026-04-20T10:00:00Z",
  "name": "string",
  "shopIds": [
    "string"
  ]
}
```

**ENABLE DIRECT PRINTING**

### `POST /enable-direct-printing` {#post-enable-direct-printing}

_Enable direct printing_

Asynchronously enables the account for direct printing.

**Responses**

| Status | Description |
| --- | --- |
| 200 | The account has been enabled. |

**Request — POST /enable-direct-printing**

::: code-group
```bash [cURL]
curl -X POST 'https://printing.api.myparcel.nl/enable-direct-printing' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://printing.api.myparcel.nl/enable-direct-printing");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://printing.api.myparcel.nl/enable-direct-printing", {
  method: 'POST',
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

response = requests.post("https://printing.api.myparcel.nl/enable-direct-printing", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://printing.api.myparcel.nl/enable-direct-printing')
req = Net::HTTP::Post.new(uri)
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
	req, _ := http.NewRequest("POST", "https://printing.api.myparcel.nl/enable-direct-printing", nil)
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
            .uri(URI.create("https://printing.api.myparcel.nl/enable-direct-printing"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .POST(HttpRequest.BodyPublishers.ofString(""))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://printing.api.myparcel.nl/enable-direct-printing");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "credentials": {
    "email": "example@myparcel.nl",
    "password": "string"
  }
}
```

**REMOVE PRINTER GROUP**

### `POST /remove-printer-group` {#post-remove-printer-group}

_Remove printer group_

Removes a printer group.

**Responses**

| Status | Description |
| --- | --- |
| 204 | The printer group has been removed. |
| 400 | Invalid request syntax |

**Request — POST /remove-printer-group**

::: code-group
```bash [cURL]
curl -X POST 'https://printing.api.myparcel.nl/remove-printer-group' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "printerGroupId": "00000000-0000-0000-0000-000000000000"
}'
```

```php [PHP]
<?php
$ch = curl_init("https://printing.api.myparcel.nl/remove-printer-group");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"printerGroupId": "00000000-0000-0000-0000-000000000000"}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://printing.api.myparcel.nl/remove-printer-group", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "printerGroupId": "00000000-0000-0000-0000-000000000000"
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "printerGroupId": "00000000-0000-0000-0000-000000000000"
}

response = requests.post("https://printing.api.myparcel.nl/remove-printer-group", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://printing.api.myparcel.nl/remove-printer-group')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"printerGroupId\": \"00000000-0000-0000-0000-000000000000\"}"

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
	payload := []byte(`{"printerGroupId": "00000000-0000-0000-0000-000000000000"}`)
	req, _ := http.NewRequest("POST", "https://printing.api.myparcel.nl/remove-printer-group", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://printing.api.myparcel.nl/remove-printer-group"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"printerGroupId\": \"00000000-0000-0000-0000-000000000000\"}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://printing.api.myparcel.nl/remove-printer-group");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""printerGroupId"": ""00000000-0000-0000-0000-000000000000""}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**RENAME PRINTER GROUP**

### `POST /rename-printer-group` {#post-rename-printer-group}

_Rename printer group_

Renames a printer group.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Rename successful |
| 400 | Invalid request syntax |

**Request — POST /rename-printer-group**

::: code-group
```bash [cURL]
curl -X POST 'https://printing.api.myparcel.nl/rename-printer-group' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "printerGroupId": "00000000-0000-0000-0000-000000000000",
  "name": "string"
}'
```

```php [PHP]
<?php
$ch = curl_init("https://printing.api.myparcel.nl/rename-printer-group");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"printerGroupId": "00000000-0000-0000-0000-000000000000", "name": "string"}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://printing.api.myparcel.nl/rename-printer-group", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "printerGroupId": "00000000-0000-0000-0000-000000000000",
    "name": "string"
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "printerGroupId": "00000000-0000-0000-0000-000000000000",
    "name": "string"
}

response = requests.post("https://printing.api.myparcel.nl/rename-printer-group", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://printing.api.myparcel.nl/rename-printer-group')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"printerGroupId\": \"00000000-0000-0000-0000-000000000000\", \"name\": \"string\"}"

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
	payload := []byte(`{"printerGroupId": "00000000-0000-0000-0000-000000000000", "name": "string"}`)
	req, _ := http.NewRequest("POST", "https://printing.api.myparcel.nl/rename-printer-group", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://printing.api.myparcel.nl/rename-printer-group"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"printerGroupId\": \"00000000-0000-0000-0000-000000000000\", \"name\": \"string\"}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://printing.api.myparcel.nl/rename-printer-group");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""printerGroupId"": ""00000000-0000-0000-0000-000000000000"", ""name"": ""string""}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "name": "string"
}
```

**SYNC PRINTERS**

### `POST /sync-printers` {#post-sync-printers}

_Synchronize printers_

Asynchronously synchronizes the available printer list.

**Responses**

| Status | Description |
| --- | --- |
| 200 | The available printer list has been synchronized |
| 400 | Invalid request syntax |

**Request — POST /sync-printers**

::: code-group
```bash [cURL]
curl -X POST 'https://printing.api.myparcel.nl/sync-printers' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://printing.api.myparcel.nl/sync-printers");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://printing.api.myparcel.nl/sync-printers", {
  method: 'POST',
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

response = requests.post("https://printing.api.myparcel.nl/sync-printers", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://printing.api.myparcel.nl/sync-printers')
req = Net::HTTP::Post.new(uri)
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
	req, _ := http.NewRequest("POST", "https://printing.api.myparcel.nl/sync-printers", nil)
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
            .uri(URI.create("https://printing.api.myparcel.nl/sync-printers"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .POST(HttpRequest.BodyPublishers.ofString(""))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://printing.api.myparcel.nl/sync-printers");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**UNASSIGN PRINTER FROM GROUP**

### `POST /unassign-printer-from-group` {#post-unassign-printer-from-group}

_Unassign a printer from a printer group_

Unassigns a printer from a printer group.

**Responses**

| Status | Description |
| --- | --- |
| 204 | The printer has been unassigned. |
| 400 | Invalid request syntax |

**Request — POST /unassign-printer-from-group**

::: code-group
```bash [cURL]
curl -X POST 'https://printing.api.myparcel.nl/unassign-printer-from-group' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "printerGroupId": "00000000-0000-0000-0000-000000000000",
  "format": "A4"
}'
```

```php [PHP]
<?php
$ch = curl_init("https://printing.api.myparcel.nl/unassign-printer-from-group");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"printerGroupId": "00000000-0000-0000-0000-000000000000", "format": "A4"}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://printing.api.myparcel.nl/unassign-printer-from-group", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "printerGroupId": "00000000-0000-0000-0000-000000000000",
    "format": "A4"
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "printerGroupId": "00000000-0000-0000-0000-000000000000",
    "format": "A4"
}

response = requests.post("https://printing.api.myparcel.nl/unassign-printer-from-group", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://printing.api.myparcel.nl/unassign-printer-from-group')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"printerGroupId\": \"00000000-0000-0000-0000-000000000000\", \"format\": \"A4\"}"

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
	payload := []byte(`{"printerGroupId": "00000000-0000-0000-0000-000000000000", "format": "A4"}`)
	req, _ := http.NewRequest("POST", "https://printing.api.myparcel.nl/unassign-printer-from-group", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://printing.api.myparcel.nl/unassign-printer-from-group"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"printerGroupId\": \"00000000-0000-0000-0000-000000000000\", \"format\": \"A4\"}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://printing.api.myparcel.nl/unassign-printer-from-group");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""printerGroupId"": ""00000000-0000-0000-0000-000000000000"", ""format"": ""A4""}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::
