---
title: Delegation API
description: "This API features registering an API Key for delegations."
---

## Endpoints {#endpoints}

Auto-generated from `delegation.api.myparcel.nl/openapi.yaml`. Click an endpoint to see its parameters and code samples.

**DELEGATION REQUESTS**

### `POST /delegation-requests/api-key` {#post-delegation-requests-api-key}

_Register API Key for a delegation request._

Register API Key.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Registered API Key. |
| 400 | Invalid request syntax |

**Request — POST /delegation-requests/api-key**

::: code-group
```bash [cURL]
curl -X POST 'https://delegation.api.myparcel.nl/delegation-requests/api-key' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "apiKey": {
    "key": "string",
    "secret": "string"
  },
  "delegateeId": {
    "delegatee": "BOL",
    "id": "string"
  }
}'
```

```php [PHP]
<?php
$ch = curl_init("https://delegation.api.myparcel.nl/delegation-requests/api-key");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"apiKey": {"key": "string", "secret": "string"}, "delegateeId": {"delegatee": "BOL", "id": "string"}}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://delegation.api.myparcel.nl/delegation-requests/api-key", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "apiKey": {
      "key": "string",
      "secret": "string"
    },
    "delegateeId": {
      "delegatee": "BOL",
      "id": "string"
    }
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "apiKey": {
        "key": "string",
        "secret": "string"
    },
    "delegateeId": {
        "delegatee": "BOL",
        "id": "string"
    }
}

response = requests.post("https://delegation.api.myparcel.nl/delegation-requests/api-key", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://delegation.api.myparcel.nl/delegation-requests/api-key')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"apiKey\": {\"key\": \"string\", \"secret\": \"string\"}, \"delegateeId\": {\"delegatee\": \"BOL\", \"id\": \"string\"}}"

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
	payload := []byte(`{"apiKey": {"key": "string", "secret": "string"}, "delegateeId": {"delegatee": "BOL", "id": "string"}}`)
	req, _ := http.NewRequest("POST", "https://delegation.api.myparcel.nl/delegation-requests/api-key", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://delegation.api.myparcel.nl/delegation-requests/api-key"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"apiKey\": {\"key\": \"string\", \"secret\": \"string\"}, \"delegateeId\": {\"delegatee\": \"BOL\", \"id\": \"string\"}}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://delegation.api.myparcel.nl/delegation-requests/api-key");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""apiKey"": {""key"": ""string"", ""secret"": ""string""}, ""delegateeId"": {""delegatee"": ""BOL"", ""id"": ""string""}}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "id": {
    "delegatee": "BOL",
    "id": "string"
  }
}
```

### `POST /delegation-requests/api-key-without-secret` {#post-delegation-requests-api-key-without-secret}

_Register API Key for a delegation request (without secret)._

Register API Key without secret.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Registered API Key. |
| 400 | Invalid request syntax |

**Request — POST /delegation-requests/api-key-without-secret**

::: code-group
```bash [cURL]
curl -X POST 'https://delegation.api.myparcel.nl/delegation-requests/api-key-without-secret' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0' \
  -H 'Content-Type: application/json' \
  -d '{
  "apiKey": {
    "key": "string"
  },
  "delegateeId": {
    "delegatee": "BOL",
    "id": "string"
  }
}'
```

```php [PHP]
<?php
$ch = curl_init("https://delegation.api.myparcel.nl/delegation-requests/api-key-without-secret");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'POST',
    CURLOPT_POSTFIELDS     => json_encode({"apiKey": {"key": "string"}, "delegateeId": {"delegatee": "BOL", "id": "string"}}),
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
        'Content-Type: application/json',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://delegation.api.myparcel.nl/delegation-requests/api-key-without-secret", {
  method: 'POST',
  headers: {
    Authorization: 'bearer <token>',
    'User-Agent': 'my-integration/1.0',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "apiKey": {
      "key": "string"
    },
    "delegateeId": {
      "delegatee": "BOL",
      "id": "string"
    }
  }),
});

const data = await response.json();
```

```python [Python]
import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = {
    "apiKey": {
        "key": "string"
    },
    "delegateeId": {
        "delegatee": "BOL",
        "id": "string"
    }
}

response = requests.post("https://delegation.api.myparcel.nl/delegation-requests/api-key-without-secret", json=payload, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://delegation.api.myparcel.nl/delegation-requests/api-key-without-secret')
req = Net::HTTP::Post.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'
req['Content-Type'] = 'application/json'
req.body = "{\"apiKey\": {\"key\": \"string\"}, \"delegateeId\": {\"delegatee\": \"BOL\", \"id\": \"string\"}}"

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
	payload := []byte(`{"apiKey": {"key": "string"}, "delegateeId": {"delegatee": "BOL", "id": "string"}}`)
	req, _ := http.NewRequest("POST", "https://delegation.api.myparcel.nl/delegation-requests/api-key-without-secret", bytes.NewBuffer(payload))
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
            .uri(URI.create("https://delegation.api.myparcel.nl/delegation-requests/api-key-without-secret"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString("{\"apiKey\": {\"key\": \"string\"}, \"delegateeId\": {\"delegatee\": \"BOL\", \"id\": \"string\"}}"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://delegation.api.myparcel.nl/delegation-requests/api-key-without-secret");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");
req.Content = new StringContent(@"{""apiKey"": {""key"": ""string""}, ""delegateeId"": {""delegatee"": ""BOL"", ""id"": ""string""}}", Encoding.UTF8, "application/json");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "id": {
    "delegatee": "BOL",
    "id": "string"
  }
}
```
