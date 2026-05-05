---
title: Rule API
description: "This API features all functionalities around rules."
---

## Endpoints {#endpoints}

Auto-generated from `rule.api.myparcel.nl/openapi.yaml`. Click an endpoint to see its parameters and code samples.

**SHOPS**

### `GET /shops/{shopId}/order-rules` {#get-shops-shopid-order-rules}

_List all order rule groups_

Retrieves a list of all order rule groups associated with a specific shop.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| shopId (path)REQUIRED | string | The unique identifier of the shop. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A list of order rule groups for the shop. |

**Request — GET /shops/{shopId}/order-rules**

::: code-group
```bash [cURL]
curl -X GET 'https://rule.api.myparcel.nl/shops/string/order-rules' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://rule.api.myparcel.nl/shops/string/order-rules");
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
const response = await fetch("https://rule.api.myparcel.nl/shops/string/order-rules", {
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

response = requests.get("https://rule.api.myparcel.nl/shops/string/order-rules", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://rule.api.myparcel.nl/shops/string/order-rules')
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
	req, _ := http.NewRequest("GET", "https://rule.api.myparcel.nl/shops/string/order-rules", nil)
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
            .uri(URI.create("https://rule.api.myparcel.nl/shops/string/order-rules"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://rule.api.myparcel.nl/shops/string/order-rules");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "results": []
}
```

### `POST /shops/{shopId}/order-rules` {#post-shops-shopid-order-rules}

_Create an order rule group_

Creates a new order rule group for a specific shop.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| shopId (path)REQUIRED | string | The unique identifier of the shop. |

**Responses**

| Status | Description |
| --- | --- |
| 201 | The newly created order rule group. |

**Request — POST /shops/{shopId}/order-rules**

::: code-group
```bash [cURL]
curl -X POST 'https://rule.api.myparcel.nl/shops/string/order-rules' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "true": "ORDER_IMPORTED",
  "rules": [
    {
      "actions": {
        "setShippingPreferences": null
      },
      "condition": "price > 100 && price <= 200",
      "name": "string",
      "status": "ACTIVE"
    }
  ],
  "condition": null
}'
```

```php [PHP]
<?php
$ch = curl_init("https://rule.api.myparcel.nl/shops/string/order-rules");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"true": "ORDER_IMPORTED", "rules": [{"actions": {"setShippingPreferences": null}, "condition": "price > 100 && price <= 200", "name": "string", "status": "ACTIVE"}], "condition": null}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://rule.api.myparcel.nl/shops/string/order-rules", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "true": "ORDER_IMPORTED",
    "rules": [
      {
        "actions": {
          "setShippingPreferences": null
        },
        "condition": "price > 100 && price <= 200",
        "name": "string",
        "status": "ACTIVE"
      }
    ],
    "condition": null
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "true": "ORDER_IMPORTED",
    "rules": [
        {
            "actions": {
                "setShippingPreferences": null
            },
            "condition": "price > 100 && price <= 200",
            "name": "string",
            "status": "ACTIVE"
        }
    ],
    "condition": null
}

response = requests.post("https://rule.api.myparcel.nl/shops/string/order-rules", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://rule.api.myparcel.nl/shops/string/order-rules')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"true\": \"ORDER_IMPORTED\", \"rules\": [{\"actions\": {\"setShippingPreferences\": null}, \"condition\": \"price > 100 && price <= 200\", \"name\": \"string\", \"status\": \"ACTIVE\"}], \"condition\": null}"

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
	payload := []byte(`{"true": "ORDER_IMPORTED", "rules": [{"actions": {"setShippingPreferences": null}, "condition": "price > 100 && price <= 200", "name": "string", "status": "ACTIVE"}], "condition": null}`)
	req, _ := http.NewRequest("POST", "https://rule.api.myparcel.nl/shops/string/order-rules", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://rule.api.myparcel.nl/shops/string/order-rules"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"true\": \"ORDER_IMPORTED\", \"rules\": [{\"actions\": {\"setShippingPreferences\": null}, \"condition\": \"price > 100 && price <= 200\", \"name\": \"string\", \"status\": \"ACTIVE\"}], \"condition\": null}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://rule.api.myparcel.nl/shops/string/order-rules");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""true"": ""ORDER_IMPORTED"", ""rules"": [{""actions"": {""setShippingPreferences"": null}, ""condition"": ""price > 100 && price <= 200"", ""name"": ""string"", ""status"": ""ACTIVE""}], ""condition"": null}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `PUT /shops/{shopId}/order-rules/{ruleGroupId}` {#put-shops-shopid-order-rules-rulegroupid}

_Update an order rule group_

Updates an existing order rule group by its ID.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ruleGroupId (path)REQUIRED | string | The unique identifier of the rule group. |
| shopId (path)REQUIRED | string | The unique identifier of the shop. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | The updated order rule group. |

**Request — PUT /shops/{shopId}/order-rules/{ruleGroupId}**

::: code-group
```bash [cURL]
curl -X PUT 'https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "true": "ORDER_IMPORTED",
  "rules": [
    {
      "actions": {
        "setShippingPreferences": null
      },
      "condition": "price > 100 && price <= 200",
      "name": "string",
      "status": "ACTIVE"
    }
  ],
  "condition": null
}'
```

```php [PHP]
<?php
$ch = curl_init("https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'PUT',
    CURLOPT_POSTFIELDS     => json_encode({"true": "ORDER_IMPORTED", "rules": [{"actions": {"setShippingPreferences": null}, "condition": "price > 100 && price <= 200", "name": "string", "status": "ACTIVE"}], "condition": null}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000", {
  method: 'PUT',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "true": "ORDER_IMPORTED",
    "rules": [
      {
        "actions": {
          "setShippingPreferences": null
        },
        "condition": "price > 100 && price <= 200",
        "name": "string",
        "status": "ACTIVE"
      }
    ],
    "condition": null
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "true": "ORDER_IMPORTED",
    "rules": [
        {
            "actions": {
                "setShippingPreferences": null
            },
            "condition": "price > 100 && price <= 200",
            "name": "string",
            "status": "ACTIVE"
        }
    ],
    "condition": null
}

response = requests.put("https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000')
req = Net::HTTP::Put.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"true\": \"ORDER_IMPORTED\", \"rules\": [{\"actions\": {\"setShippingPreferences\": null}, \"condition\": \"price > 100 && price <= 200\", \"name\": \"string\", \"status\": \"ACTIVE\"}], \"condition\": null}"

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
	payload := []byte(`{"true": "ORDER_IMPORTED", "rules": [{"actions": {"setShippingPreferences": null}, "condition": "price > 100 && price <= 200", "name": "string", "status": "ACTIVE"}], "condition": null}`)
	req, _ := http.NewRequest("PUT", "https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .PUT(HttpRequest.BodyPublishers.ofString("{\"true\": \"ORDER_IMPORTED\", \"rules\": [{\"actions\": {\"setShippingPreferences\": null}, \"condition\": \"price > 100 && price <= 200\", \"name\": \"string\", \"status\": \"ACTIVE\"}], \"condition\": null}"))
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
var req = new HttpRequestMessage(HttpMethod.Put, "https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""true"": ""ORDER_IMPORTED"", ""rules"": [{""actions"": {""setShippingPreferences"": null}, ""condition"": ""price > 100 && price <= 200"", ""name"": ""string"", ""status"": ""ACTIVE""}], ""condition"": null}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `DELETE /shops/{shopId}/order-rules/{ruleGroupId}` {#delete-shops-shopid-order-rules-rulegroupid}

_Delete an order rule group_

Deletes a specific order rule group by its ID.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ruleGroupId (path)REQUIRED | string | The unique identifier of the rule group. |
| shopId (path)REQUIRED | string | The unique identifier of the shop. |

**Responses**

| Status | Description |
| --- | --- |
| 204 | The order rule group is successfully deleted. |
| 404 | The resource (shop or order rule group) is not found. |

**Request — DELETE /shops/{shopId}/order-rules/{ruleGroupId}**

::: code-group
```bash [cURL]
curl -X DELETE 'https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'DELETE',
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000", {
  method: 'DELETE',
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

response = requests.delete("https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000')
req = Net::HTTP::Delete.new(uri)
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
	req, _ := http.NewRequest("DELETE", "https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000", nil)
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
            .uri(URI.create("https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .DELETE()
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
var req = new HttpRequestMessage(HttpMethod.Delete, "https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::
