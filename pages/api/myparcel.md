---
title: MyParcel API
description: "Allows MyParcel users to query delivery options, pickup & drop off locations with opening hours, register & trace shipments, print labels and more."
---

## Endpoints {#endpoints}

Auto-generated from `api.myparcel.nl/openapi.yaml`. Click an endpoint to see its parameters and code samples.

**OVERVIEW**

### `GET /` {#get-root}

_Status page_

Reports the status of the API.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Status is OK |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/");
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
const response = await fetch("https://api.myparcel.nl/", {
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

response = requests.get("https://api.myparcel.nl/", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/", nil)
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
            .uri(URI.create("https://api.myparcel.nl/"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "status": "string"
}
```

**SHIPMENTS**

### `GET /shipments` {#get-shipments}

_Gets a list of Shipments, optionally filtered using parameters._

This operation returns a list of Shipments available to this User.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| barcode |  |  |
| carrier_id |  |  |
| created | string | When set, only resources created after this date will be returned. Inclusive. |
| delayed |  | Filter on whether the current event code means the shipment has been delayed. |
| delivered |  |  |
| dropoff_today | boolean | Use this parameter to only show Shipments that need to be dropped off today. |
| filter_hidden_shops | boolean |  |
| hidden |  |  |
| link_consumer_portal | boolean |  |
| order |  | Specify whether the results should be sorted in ascending or descending order. |
| package_type |  | Filter by Package Type. |
| page |  | Request a specific page of the results, used for paginated results. |
| q | string | If this parameter is provided results will be filtered by the provided query or keyword. |
| reference_identifier | string | Filter by `reference_identifier`, an optional arbitrary identifier to identify the Shipment. |
| region | string | The region, department, state or province of the address. |
| shipment_type |  |  |
| shop_id |  |  |
| size |  | Specify the number of resources returned per page, used for paginated results. |
| sort |  | Sort Shipment results by a particular resource field. |
| status |  | Filter by Shipment status. This filter will return only Shipments with the specified status. |
| transaction_status |  |  |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A shipments response. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /shipments**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/shipments?barcode=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/shipments?barcode=string");
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
const response = await fetch("https://api.myparcel.nl/shipments?barcode=string", {
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
    "barcode": "string"
}

response = requests.get("https://api.myparcel.nl/shipments", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/shipments?barcode=string')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/shipments?barcode=string", nil)
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
            .uri(URI.create("https://api.myparcel.nl/shipments?barcode=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/shipments?barcode=string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `POST /shipments` {#post-shipments}

_Add Shipment_

Add shipments allows you to create standard and related return shipments.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| format |  | The paper size of the PDF as specified in ISO216. Currently, A4 and A6 are supported. When A4 is chosen you can specify the label positions. When requesting the label for a shipment that contains a custom form, you can only request an A4 format. |
| positions |  | The positions of the label on an A4 sheet. A position is identified by a digit from `1` to `4`. You can specify up to four positions separated by semicolons (`;`). __Note__: This parameter only works when you specify the `A4` __format__ and only applies to the first page when requesting multiple pages worth of labels. Subsequent pages use the default positioning `1;2;3;4`. |
| collect_date |  |  |
| delivery_options_identifier |  |  |

**Responses**

| Status | Description |
| --- | --- |
| 200 | Shipment creation was successful. |
| 415 | This response is given when the request Content-Type is not supported. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — POST /shipments**

::: code-group
```bash [cURL]
curl -X POST 'https://api.myparcel.nl/shipments' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/shipments");
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
const response = await fetch("https://api.myparcel.nl/shipments", {
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

response = requests.post("https://api.myparcel.nl/shipments", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/shipments')
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
	req, _ := http.NewRequest("POST", "https://api.myparcel.nl/shipments", nil)
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
            .uri(URI.create("https://api.myparcel.nl/shipments"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://api.myparcel.nl/shipments");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `PUT /shipments` {#put-shipments}

_Update Shipment_

This operation can be used to update certain fields of a shipment. The fields that can be modified depend on the status of the shipment.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Shipment update was successful. Returns full shipments when Accept version 1.2 is used. |
| 204 | Shipment update was successful. |
| 415 | This response is given when the request Content-Type is not supported. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — PUT /shipments**

::: code-group
```bash [cURL]
curl -X PUT 'https://api.myparcel.nl/shipments' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/shipments");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'PUT',
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://api.myparcel.nl/shipments", {
  method: 'PUT',
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

response = requests.put("https://api.myparcel.nl/shipments", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/shipments')
req = Net::HTTP::Put.new(uri)
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
	req, _ := http.NewRequest("PUT", "https://api.myparcel.nl/shipments", nil)
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
            .uri(URI.create("https://api.myparcel.nl/shipments"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .PUT(HttpRequest.BodyPublishers.ofString(""))
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
var req = new HttpRequestMessage(HttpMethod.Put, "https://api.myparcel.nl/shipments");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `GET /shipments/{ids}` {#get-shipments-ids}

_Get shipments by id._

Get shipments by id.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ids (path)REQUIRED |  | One or more shipment IDs. Separate multiple shipment IDs using `;`. |
| link_consumer_portal | boolean |  |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A shipments response. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /shipments/{ids}**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/shipments/123?link_consumer_portal=True' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/shipments/123?link_consumer_portal=True");
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
const response = await fetch("https://api.myparcel.nl/shipments/123?link_consumer_portal=True", {
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
    "link_consumer_portal": true
}

response = requests.get("https://api.myparcel.nl/shipments/123", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/shipments/123?link_consumer_portal=True')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/shipments/123?link_consumer_portal=True", nil)
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
            .uri(URI.create("https://api.myparcel.nl/shipments/123?link_consumer_portal=True"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/shipments/123?link_consumer_portal=True");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `DELETE /shipments/{ids}` {#delete-shipments-ids}

_Delete Shipment_

This operation can be used to delete shipments for which a label has not yet been created. However, outside of housekeeping, this is not really necessary since Shipments not handed over to the distributor will not be billed by MyParcel; thus unused shipments which are not deleted have no financial consequences.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ids (path)REQUIRED |  | One or more shipment IDs. Separate multiple shipment IDs using `;`. |

**Responses**

| Status | Description |
| --- | --- |
| 204 | Shipment deletion was successful. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — DELETE /shipments/{ids}**

::: code-group
```bash [cURL]
curl -X DELETE 'https://api.myparcel.nl/shipments/123' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/shipments/123");
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
const response = await fetch("https://api.myparcel.nl/shipments/123", {
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

response = requests.delete("https://api.myparcel.nl/shipments/123", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/shipments/123')
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
	req, _ := http.NewRequest("DELETE", "https://api.myparcel.nl/shipments/123", nil)
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
            .uri(URI.create("https://api.myparcel.nl/shipments/123"))
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
var req = new HttpRequestMessage(HttpMethod.Delete, "https://api.myparcel.nl/shipments/123");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `POST /shipments/capabilities` {#post-shipments-capabilities}

_List shipment capabilities (Beta)_

**This endpoint is currently in beta and the API contract may change.** List shipment capabilities of the carriers for the MyParcel platforms. This endpoint allows you to determine what delivery options, package types, and shipment options are available for specific carriers and destinations.

**Responses**

| Status | Description |
| --- | --- |
| 200 | A capabilities response. |
| 415 | This response is given when the request Content-Type is not supported. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — POST /shipments/capabilities**

::: code-group
```bash [cURL]
curl -X POST 'https://api.myparcel.nl/shipments/capabilities' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/shipments/capabilities");
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
const response = await fetch("https://api.myparcel.nl/shipments/capabilities", {
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

response = requests.post("https://api.myparcel.nl/shipments/capabilities", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/shipments/capabilities')
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
	req, _ := http.NewRequest("POST", "https://api.myparcel.nl/shipments/capabilities", nil)
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
            .uri(URI.create("https://api.myparcel.nl/shipments/capabilities"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://api.myparcel.nl/shipments/capabilities");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `POST /shipments/capabilities/contract-definitions` {#post-shipments-capabilities-contract-definitions}

_List a superset of available capabilities for the carriers and contracts associated with the logged-in user. (Beta)_

**This endpoint is currently in beta and the API contract may change.** List shipment capabilities of the carriers for the MyParcel platforms. This endpoint allows you to determine the complete set of delivery options, package types, and shipment options available to a specific account.

**Responses**

| Status | Description |
| --- | --- |
| 200 | A capabilities contract definitions response. |
| 415 | This response is given when the request Content-Type is not supported. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — POST /shipments/capabilities/contract-definitions**

::: code-group
```bash [cURL]
curl -X POST 'https://api.myparcel.nl/shipments/capabilities/contract-definitions' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/shipments/capabilities/contract-definitions");
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
const response = await fetch("https://api.myparcel.nl/shipments/capabilities/contract-definitions", {
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

response = requests.post("https://api.myparcel.nl/shipments/capabilities/contract-definitions", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/shipments/capabilities/contract-definitions')
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
	req, _ := http.NewRequest("POST", "https://api.myparcel.nl/shipments/capabilities/contract-definitions", nil)
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
            .uri(URI.create("https://api.myparcel.nl/shipments/capabilities/contract-definitions"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://api.myparcel.nl/shipments/capabilities/contract-definitions");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `POST /shipments/rates` {#post-shipments-rates}

_List shipment rates_

This endpoint allows you to determine the rates for a shipment configuration.

**Responses**

| Status | Description |
| --- | --- |
| 200 | A rates response. |
| 204 | This response is given when the request is successful and the response is empty. |
| 415 | This response is given when the request Content-Type is not supported. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — POST /shipments/rates**

::: code-group
```bash [cURL]
curl -X POST 'https://api.myparcel.nl/shipments/rates' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/shipments/rates");
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
const response = await fetch("https://api.myparcel.nl/shipments/rates", {
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

response = requests.post("https://api.myparcel.nl/shipments/rates", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/shipments/rates')
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
	req, _ := http.NewRequest("POST", "https://api.myparcel.nl/shipments/rates", nil)
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
            .uri(URI.create("https://api.myparcel.nl/shipments/rates"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://api.myparcel.nl/shipments/rates");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `GET /shipment_labels/{ids}` {#get-shipment-labels-ids}

_Get Shipment labels_

#### Get Shipment labels You can specify label format and positions of labels on the first page with the __format__ and __positions__ query parameters. The __positions__ query only works when you specify the A4 format and is only applied on the first page with labels. Accounts with __Post-payment__ payment methods can fetch multiple labels in one call. For accounts with __Pre-payment__ payment method an `HTTP 402 Payment Required` with a PaymentInstructions object is returned if the label has not been paid for yet.

##### Multi-collo shipments When a label for a multi collo shipment is requested, labels for all shipments parts of the multi collo shipment will be generated. Each shipment within a multi collo shipment MUST be labeled with a specific label containing a unique barcode.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ids (path)REQUIRED |  | One or more shipment IDs. Separate multiple shipment IDs using `;`. |
| format |  | The paper size of the PDF as specified in ISO216. Currently, A4 and A6 are supported. When A4 is chosen you can specify the label positions. When requesting the label for a shipment that contains a custom form, you can only request an A4 format. |
| positions |  | The positions of the label on an A4 sheet. A position is identified by a digit from `1` to `4`. You can specify up to four positions separated by semicolons (`;`). __Note__: This parameter only works when you specify the `A4` __format__ and only applies to the first page when requesting multiple pages worth of labels. Subsequent pages use the default positioning `1;2;3;4`. |
| collect_date |  |  |
| delivery_options_identifier |  |  |

**Responses**

| Status | Description |
| --- | --- |
| 2XX | ##### Shipment Label Response Contains one or more shipment labels in the desired media format. ###### Asynchronous retrieval of labels When retrieving multiple pages worth of labels, it is recommended to perform an async request by defining the `Accept` header `application/vnd.shipment_label_link+json`. The response will then contain a promise URL to the desired label(s). These promise URLs will return `HTTP 404 Not Found` until they're ready. Depending on the number of labels, this process will take between 3 seconds and 3 minutes. You can regularly check whether the label is available or you can use the `label_created` webhooks. ##### ZPL labels Currently, our system supports only PostNL and Bpost labels in ZPL format for the following shipment types: - Domestic shipments for both normal packages and mailbox packages. - EU shipments If you request a rest of world label, the system will return a label in PDF format. Additionally, you can request just one label at a time. For Bpost shipments, you can request a label in ZPL format only if you have not requested a PDF label before. After you requested a ZPL label, you can also request a PDF label. |
| 204 | Direct Printing Response |
| 400 | The request could not be understood by the server due to malformed syntax. The client should not repeat the request without modifications. |
| 401 | No credentials have been sent with the request, or the wrong credentials are sent. Tip: check if the API key is properly attached in the header: ```http Authorization: bearer BASE64_ENCODED_API_KEY ``` |
| 402 | Payment Required |
| 406 | Direct printing requires an active subscription. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /shipment_labels/{ids}**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/shipment_labels/123?format=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/shipment_labels/123?format=string");
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
const response = await fetch("https://api.myparcel.nl/shipment_labels/123?format=string", {
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
    "format": "string"
}

response = requests.get("https://api.myparcel.nl/shipment_labels/123", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/shipment_labels/123?format=string')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/shipment_labels/123?format=string", nil)
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
            .uri(URI.create("https://api.myparcel.nl/shipment_labels/123?format=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/shipment_labels/123?format=string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**DELIVERY OPTIONS**

### `GET /delivery_options` {#get-delivery-options}

_Get Delivery Options_

Get the delivery options for a given location and carrier.

If none of the optional parameters are specified then the following default will be used: If a request is made for the delivery options between Friday after the default cutoff_time (15:30) and Monday before the default cutoff_time (15:30) then Tuesday will be shown as the next possible delivery date.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| cc | string | The country code for which to fetch the delivery options. |
| postal_code |  | The postal code for which to fetch the resources. |
| number | string | The street number for which to fetch the resources. |
| city | string | Only available for carriers Bpost and DPD. This can be used to narrow the search results for locations outside NL. |
| street | string | This can be used to narrow the search results for locations outside NL. |
| platform |  | The platform where you want the data from. |
| shop_id |  |  |
| carrier |  |  |
| delivery_date |  | The date on which the package has to be delivered. |
| delivery_time |  | The time on which a package has to be delivered. > __Note__: This is only an indication of time the package will be > delivered on the selected date. |
| cutoff_time |  | This option allows the **Merchant** to indicate the latest cutoff time before which a consumer order will still be picked, packed and dispatched on the same/first set drop-off day, taking into account the drop-off delay. Default time is 15:30. For example, if cutoff time is 15:30, Monday is a delivery day and there's no delivery delay; all orders placed Monday before 15:30 will be dropped of at PostNL on that same Monday in time for the Monday collection. |
| dropoff_days |  | This options allows the **Merchant** to set the days she normally goes to PostNL to hand in her parcels. By default Saturday and Sunday are excluded. |
| monday_delivery |  | Monday delivery is only possible when the package is delivered before 15.00 on Saturday at the designated PostNL locations. > __Note__: To activate Monday delivery, value 6 must be given with > [dropoff_days], value 1 must be given by [monday_delivery]. And on > Saturday the [cutoff_time] must be before 15:00 (14:30 recommended) > so that Monday will be shown. |
| dropoff_delay | integer | This options allows the **Merchant** to set the number of days it takes them to pick, pack and hand in their parcels at the carrier when ordered before the cutoff time. The default value is 0. |
| deliverydays_window | integer | This options allows the Merchant to set the number of days into the future for which they want to show their consumers delivery options. For example, if set to 3 in their check-out, a consumer ordering on Monday will see possible delivery options for Tuesday, Wednesday and Thursday (provided there is no drop-off delay, it's before the cutoff time, and they go to PostNL on Mondays). |
| exclude_delivery_type |  | Exclude shipments with a specific delivery type. This parameter can be used multiple times to exclude multiple delivery types. |
| exclude_parcel_lockers |  | This option allows to filter out pickup locations that are parcel lockers. |
| latitude |  | This provides the ability to search locations through the coordinates. If only latitude is provided without longitude, it will be ignored. |
| longitude |  | This provides the ability to search locations through the coordinates. If only longitude is provided without latitude, it will be ignored. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A collection of Delivery Options. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /delivery_options**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/delivery_options?cc=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/delivery_options?cc=string");
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
const response = await fetch("https://api.myparcel.nl/delivery_options?cc=string", {
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
    "cc": "string"
}

response = requests.get("https://api.myparcel.nl/delivery_options", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/delivery_options?cc=string')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/delivery_options?cc=string", nil)
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
            .uri(URI.create("https://api.myparcel.nl/delivery_options?cc=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/delivery_options?cc=string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `GET /drop_off_points` {#get-drop-off-points}

_Get drop off points_

Use this endpoint to receive a list of nearby drop off points, where shipments can be dropped off upon shipping. Results are ordered by distance from the provided postal code or coordinates.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| postal_code |  | The postal code for which to fetch the resources. |
| number | string | The street number for which to fetch the resources. |
| distance | integer | Provide the radius in kilometers for which you want to find drop off points. The default distance differs by carrier. |
| cc | string | The country code for which to fetch the delivery options. |
| limit | integer | Limit the number of resources returned. |
| carrier_id |  |  |
| shop_id |  |  |
| reference | string | Filter by `reference`. |
| location_name | string | Filter by location name. |
| external_identifier | string |  |
| city | string | Only available for carriers Bpost and DPD. This can be used to narrow the search results for locations outside NL. |
| cut_off_time |  |  |
| min_cut_off_time |  |  |
| max_cut_off_time |  |  |
| latitude |  | This provides the ability to search locations through the coordinates. If only latitude is provided without longitude, it will be ignored. |
| longitude |  | This provides the ability to search locations through the coordinates. If only longitude is provided without latitude, it will be ignored. |
| exclude_parcel_lockers |  | This option allows to filter out pickup locations that are parcel lockers. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A collection of Drop Off Points. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /drop_off_points**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/drop_off_points?postal_code=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/drop_off_points?postal_code=string");
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
const response = await fetch("https://api.myparcel.nl/drop_off_points?postal_code=string", {
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
    "postal_code": "string"
}

response = requests.get("https://api.myparcel.nl/drop_off_points", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/drop_off_points?postal_code=string')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/drop_off_points?postal_code=string", nil)
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
            .uri(URI.create("https://api.myparcel.nl/drop_off_points?postal_code=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/drop_off_points?postal_code=string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `GET /pickup_locations` {#get-pickup-locations}

_Get Pickup Locations_

Get Pickup Locations

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| cc | string | The country code for which to fetch the delivery options. |
| postal_code |  | The postal code for which to fetch the resources. |
| number | string | The street number for which to fetch the resources. |
| city | string | Only available for carriers Bpost and DPD. This can be used to narrow the search results for locations outside NL. |
| street | string | This can be used to narrow the search results for locations outside NL. |
| platform |  | The platform where you want the data from. |
| shop_id |  |  |
| carrier |  |  |
| delivery_date |  | The date on which the package has to be delivered. |
| delivery_time |  | The time on which a package has to be delivered. > __Note__: This is only an indication of time the package will be > delivered on the selected date. |
| cutoff_time |  | This option allows the **Merchant** to indicate the latest cutoff time before which a consumer order will still be picked, packed and dispatched on the same/first set drop-off day, taking into account the drop-off delay. Default time is 15:30. For example, if cutoff time is 15:30, Monday is a delivery day and there's no delivery delay; all orders placed Monday before 15:30 will be dropped of at PostNL on that same Monday in time for the Monday collection. |
| dropoff_days |  | This options allows the **Merchant** to set the days she normally goes to PostNL to hand in her parcels. By default Saturday and Sunday are excluded. |
| monday_delivery |  | Monday delivery is only possible when the package is delivered before 15.00 on Saturday at the designated PostNL locations. > __Note__: To activate Monday delivery, value 6 must be given with > [dropoff_days], value 1 must be given by [monday_delivery]. And on > Saturday the [cutoff_time] must be before 15:00 (14:30 recommended) > so that Monday will be shown. |
| dropoff_delay | integer | This options allows the **Merchant** to set the number of days it takes them to pick, pack and hand in their parcels at the carrier when ordered before the cutoff time. The default value is 0. |
| deliverydays_window | integer | This options allows the Merchant to set the number of days into the future for which they want to show their consumers delivery options. For example, if set to 3 in their check-out, a consumer ordering on Monday will see possible delivery options for Tuesday, Wednesday and Thursday (provided there is no drop-off delay, it's before the cutoff time, and they go to PostNL on Mondays). |
| exclude_delivery_type |  | Exclude shipments with a specific delivery type. This parameter can be used multiple times to exclude multiple delivery types. |
| exclude_parcel_lockers |  | This option allows to filter out pickup locations that are parcel lockers. |
| latitude |  | This provides the ability to search locations through the coordinates. If only latitude is provided without longitude, it will be ignored. |
| longitude |  | This provides the ability to search locations through the coordinates. If only longitude is provided without latitude, it will be ignored. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A collection of Pickup Locations. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /pickup_locations**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/pickup_locations?cc=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/pickup_locations?cc=string");
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
const response = await fetch("https://api.myparcel.nl/pickup_locations?cc=string", {
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
    "cc": "string"
}

response = requests.get("https://api.myparcel.nl/pickup_locations", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/pickup_locations?cc=string')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/pickup_locations?cc=string", nil)
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
            .uri(URI.create("https://api.myparcel.nl/pickup_locations?cc=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/pickup_locations?cc=string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**TRACK & TRACE**

### `GET /tracktraces` {#get-tracktraces}

_Track Shipment_

Get detailed Track & Trace information for one or more shipments.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| barcode |  |  |
| country_code |  |  |
| external_identifier |  |  |
| extra_info |  | Enables extra info in the response that is not included by default for performance reasons. |
| postal_code |  | The postal code for which to fetch the resources. |
| sort |  | Sort order. Defaults to `desc`. Values: `asc`, `desc` |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A Track & Traces response. |
| 404 | The requested resource could not be found or its existence may not be disclosed. This may be temporary or permanent. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /tracktraces**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/tracktraces?barcode=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/tracktraces?barcode=string");
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
const response = await fetch("https://api.myparcel.nl/tracktraces?barcode=string", {
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
    "barcode": "string"
}

response = requests.get("https://api.myparcel.nl/tracktraces", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/tracktraces?barcode=string')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/tracktraces?barcode=string", nil)
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
            .uri(URI.create("https://api.myparcel.nl/tracktraces?barcode=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/tracktraces?barcode=string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `GET /tracktraces/{ids}` {#get-tracktraces-ids}

_Track Shipment_

Get detailed Track & Trace information for one or more shipments.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ids (path)REQUIRED |  | One or more shipment IDs. Separate multiple shipment IDs using `;`. |
| sort |  | Sort order. Defaults to `desc`. Values: `asc`, `desc` |
| extra_info |  | Enables extra info in the response that is not included by default for performance reasons. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A Track & Traces response. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /tracktraces/{ids}**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/tracktraces/123?sort=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/tracktraces/123?sort=string");
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
const response = await fetch("https://api.myparcel.nl/tracktraces/123?sort=string", {
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
    "sort": "string"
}

response = requests.get("https://api.myparcel.nl/tracktraces/123", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/tracktraces/123?sort=string')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/tracktraces/123?sort=string", nil)
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
            .uri(URI.create("https://api.myparcel.nl/tracktraces/123?sort=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/tracktraces/123?sort=string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**RETURNS**

### `POST /return_shipments` {#post-return-shipments}

_Generate unrelated return shipment URL_

This endpoint is often used by external parties to facilitate return shipments on a dedicated part of their website, mainly when offering reverse logistics e.g. repair services. It will allow the consumer to send packages to the merchant directly from the merchant's website.

**Responses**

| Status | Description |
| --- | --- |
| 200 | This is the download URL object. |
| 404 | If this option is not enables then `HTTP 404 Not Found` is returned. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — POST /return_shipments**

::: code-group
```bash [cURL]
curl -X POST 'https://api.myparcel.nl/return_shipments' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/return_shipments");
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
const response = await fetch("https://api.myparcel.nl/return_shipments", {
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

response = requests.post("https://api.myparcel.nl/return_shipments", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/return_shipments')
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
	req, _ := http.NewRequest("POST", "https://api.myparcel.nl/return_shipments", nil)
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
            .uri(URI.create("https://api.myparcel.nl/return_shipments"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://api.myparcel.nl/return_shipments");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**NOTIFICATIONS**

### `GET /notification_groups` {#get-notification-groups}

_Get notification groups_

Retrieve notification groups to see which groups are set up to receive notifications about shipment events.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| shopId |  |  |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A notification groups response. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /notification_groups**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/notification_groups?shopId=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/notification_groups?shopId=string");
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
const response = await fetch("https://api.myparcel.nl/notification_groups?shopId=string", {
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
    "shopId": "string"
}

response = requests.get("https://api.myparcel.nl/notification_groups", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/notification_groups?shopId=string')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/notification_groups?shopId=string", nil)
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
            .uri(URI.create("https://api.myparcel.nl/notification_groups?shopId=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/notification_groups?shopId=string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `POST /notification_groups` {#post-notification-groups}

_Create notification groups_

Create notification groups to receive notifications about shipment events.

**Responses**

| Status | Description |
| --- | --- |
| 201 | A notification groups response. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — POST /notification_groups**

::: code-group
```bash [cURL]
curl -X POST 'https://api.myparcel.nl/notification_groups' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/notification_groups");
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
const response = await fetch("https://api.myparcel.nl/notification_groups", {
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

response = requests.post("https://api.myparcel.nl/notification_groups", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/notification_groups')
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
	req, _ := http.NewRequest("POST", "https://api.myparcel.nl/notification_groups", nil)
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
            .uri(URI.create("https://api.myparcel.nl/notification_groups"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://api.myparcel.nl/notification_groups");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `DELETE /notification_groups/{ids}` {#delete-notification-groups-ids}

_Delete notification groups_

Delete notification groups to stop receiving notifications about shipment events.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ids (path)REQUIRED | string | One or more notification group IDs. Separate multiple IDs using `;`. |

**Responses**

| Status | Description |
| --- | --- |
| 204 | Notification group deletion was successful. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — DELETE /notification_groups/{ids}**

::: code-group
```bash [cURL]
curl -X DELETE 'https://api.myparcel.nl/notification_groups/string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/notification_groups/string");
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
const response = await fetch("https://api.myparcel.nl/notification_groups/string", {
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

response = requests.delete("https://api.myparcel.nl/notification_groups/string", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/notification_groups/string')
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
	req, _ := http.NewRequest("DELETE", "https://api.myparcel.nl/notification_groups/string", nil)
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
            .uri(URI.create("https://api.myparcel.nl/notification_groups/string"))
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
var req = new HttpRequestMessage(HttpMethod.Delete, "https://api.myparcel.nl/notification_groups/string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `GET /notification_groups/{notification_group_id}/notification_templates` {#get-notification-groups-notification-group-id-notification-templates}

_Get notification templates_

Retrieve notification templates associated with a specific notification group.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| notification_group_id (path)REQUIRED | integer | The ID of the notification group. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A notification templates response. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /notification_groups/{notification_group_id}/notification_templates**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/notification_groups/1/notification_templates' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/notification_groups/1/notification_templates");
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
const response = await fetch("https://api.myparcel.nl/notification_groups/1/notification_templates", {
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

response = requests.get("https://api.myparcel.nl/notification_groups/1/notification_templates", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/notification_groups/1/notification_templates')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/notification_groups/1/notification_templates", nil)
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
            .uri(URI.create("https://api.myparcel.nl/notification_groups/1/notification_templates"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/notification_groups/1/notification_templates");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `PUT /notification_groups/{notification_group_id}/notification_templates/{notification_template_id}` {#put-notification-groups-notification-group-id-notification-templates-notification-template-id}

_Update notification template_

Update a notification template associated with a specific notification group.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| notification_group_id (path)REQUIRED | integer | The ID of the notification group. |
| notification_template_id (path)REQUIRED | integer | The ID of the notification template. |

**Responses**

| Status | Description |
| --- | --- |
| 204 | Notification template update was successful. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — PUT /notification_groups/{notification_group_id}/notification_templates/{notification_template_id}**

::: code-group
```bash [cURL]
curl -X PUT 'https://api.myparcel.nl/notification_groups/1/notification_templates/1' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/notification_groups/1/notification_templates/1");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'PUT',
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://api.myparcel.nl/notification_groups/1/notification_templates/1", {
  method: 'PUT',
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

response = requests.put("https://api.myparcel.nl/notification_groups/1/notification_templates/1", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/notification_groups/1/notification_templates/1')
req = Net::HTTP::Put.new(uri)
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
	req, _ := http.NewRequest("PUT", "https://api.myparcel.nl/notification_groups/1/notification_templates/1", nil)
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
            .uri(URI.create("https://api.myparcel.nl/notification_groups/1/notification_templates/1"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .PUT(HttpRequest.BodyPublishers.ofString(""))
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
var req = new HttpRequestMessage(HttpMethod.Put, "https://api.myparcel.nl/notification_groups/1/notification_templates/1");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `PUT /notification_groups/{notification_group_id}/notification_templates/disable` {#put-notification-groups-notification-group-id-notification-templates-disable}

_Disable all notification templates in a notification group_

Disable all notification templates associated with a specific notification group.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| notification_group_id (path)REQUIRED | integer | The ID of the notification group. |

**Responses**

| Status | Description |
| --- | --- |
| 204 | Disabling notification templates was successful. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — PUT /notification_groups/{notification_group_id}/notification_templates/disable**

::: code-group
```bash [cURL]
curl -X PUT 'https://api.myparcel.nl/notification_groups/1/notification_templates/disable' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/notification_groups/1/notification_templates/disable");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'PUT',
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://api.myparcel.nl/notification_groups/1/notification_templates/disable", {
  method: 'PUT',
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

response = requests.put("https://api.myparcel.nl/notification_groups/1/notification_templates/disable", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/notification_groups/1/notification_templates/disable')
req = Net::HTTP::Put.new(uri)
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
	req, _ := http.NewRequest("PUT", "https://api.myparcel.nl/notification_groups/1/notification_templates/disable", nil)
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
            .uri(URI.create("https://api.myparcel.nl/notification_groups/1/notification_templates/disable"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .PUT(HttpRequest.BodyPublishers.ofString(""))
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
var req = new HttpRequestMessage(HttpMethod.Put, "https://api.myparcel.nl/notification_groups/1/notification_templates/disable");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `PUT /notification_groups/{notification_group_id}/notification_templates/enable` {#put-notification-groups-notification-group-id-notification-templates-enable}

_Enable all notification templates in a notification group_

Enable all notification templates associated with a specific notification group.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| notification_group_id (path)REQUIRED | integer | The ID of the notification group. |

**Responses**

| Status | Description |
| --- | --- |
| 204 | Enabling notification templates was successful. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — PUT /notification_groups/{notification_group_id}/notification_templates/enable**

::: code-group
```bash [cURL]
curl -X PUT 'https://api.myparcel.nl/notification_groups/1/notification_templates/enable' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/notification_groups/1/notification_templates/enable");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'PUT',
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://api.myparcel.nl/notification_groups/1/notification_templates/enable", {
  method: 'PUT',
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

response = requests.put("https://api.myparcel.nl/notification_groups/1/notification_templates/enable", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/notification_groups/1/notification_templates/enable')
req = Net::HTTP::Put.new(uri)
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
	req, _ := http.NewRequest("PUT", "https://api.myparcel.nl/notification_groups/1/notification_templates/enable", nil)
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
            .uri(URI.create("https://api.myparcel.nl/notification_groups/1/notification_templates/enable"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .PUT(HttpRequest.BodyPublishers.ofString(""))
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
var req = new HttpRequestMessage(HttpMethod.Put, "https://api.myparcel.nl/notification_groups/1/notification_templates/enable");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `PUT /notification_groups/{notification_group_id}/notification_templates/{notification_template_id}/disable` {#put-notification-groups-notification-group-id-notification-templates-notification-template-id-disable}

_Disable notification template_

Disable a specific notification template associated with a specific notification group.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| notification_group_id (path)REQUIRED | integer | The ID of the notification group. |
| notification_template_id (path)REQUIRED | integer | The ID of the notification template. |

**Responses**

| Status | Description |
| --- | --- |
| 204 | Disabling notification template was successful. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — PUT /notification_groups/{notification_group_id}/notification_templates/{notification_template_id}/disable**

::: code-group
```bash [cURL]
curl -X PUT 'https://api.myparcel.nl/notification_groups/1/notification_templates/1/disable' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/notification_groups/1/notification_templates/1/disable");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'PUT',
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://api.myparcel.nl/notification_groups/1/notification_templates/1/disable", {
  method: 'PUT',
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

response = requests.put("https://api.myparcel.nl/notification_groups/1/notification_templates/1/disable", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/notification_groups/1/notification_templates/1/disable')
req = Net::HTTP::Put.new(uri)
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
	req, _ := http.NewRequest("PUT", "https://api.myparcel.nl/notification_groups/1/notification_templates/1/disable", nil)
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
            .uri(URI.create("https://api.myparcel.nl/notification_groups/1/notification_templates/1/disable"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .PUT(HttpRequest.BodyPublishers.ofString(""))
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
var req = new HttpRequestMessage(HttpMethod.Put, "https://api.myparcel.nl/notification_groups/1/notification_templates/1/disable");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `PUT /notification_groups/{notification_group_id}/notification_templates/{notification_template_id}/enable` {#put-notification-groups-notification-group-id-notification-templates-notification-template-id-enable}

_Enable notification template_

Enable a specific notification template associated with a specific notification group.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| notification_group_id (path)REQUIRED | integer | The ID of the notification group. |
| notification_template_id (path)REQUIRED | integer | The ID of the notification template. |

**Responses**

| Status | Description |
| --- | --- |
| 204 | Enabling notification template was successful. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — PUT /notification_groups/{notification_group_id}/notification_templates/{notification_template_id}/enable**

::: code-group
```bash [cURL]
curl -X PUT 'https://api.myparcel.nl/notification_groups/1/notification_templates/1/enable' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/notification_groups/1/notification_templates/1/enable");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST  => 'PUT',
    CURLOPT_HTTPHEADER     => [
        'Authorization: bearer <token>',
        'User-Agent: my-integration/1.0',
    ],
]);

$response = json_decode(curl_exec($ch), true);
```

```js [JavaScript]
const response = await fetch("https://api.myparcel.nl/notification_groups/1/notification_templates/1/enable", {
  method: 'PUT',
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

response = requests.put("https://api.myparcel.nl/notification_groups/1/notification_templates/1/enable", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/notification_groups/1/notification_templates/1/enable')
req = Net::HTTP::Put.new(uri)
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
	req, _ := http.NewRequest("PUT", "https://api.myparcel.nl/notification_groups/1/notification_templates/1/enable", nil)
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
            .uri(URI.create("https://api.myparcel.nl/notification_groups/1/notification_templates/1/enable"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")
            .PUT(HttpRequest.BodyPublishers.ofString(""))
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
var req = new HttpRequestMessage(HttpMethod.Put, "https://api.myparcel.nl/notification_groups/1/notification_templates/1/enable");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `POST /notification_groups/{notification_group_id}/notification_templates/{notification_template_id}/test` {#post-notification-groups-notification-group-id-notification-templates-notification-template-id-test}

_Send test notification_

Send a test notification using a specific notification template associated with a specific notification group. The test notification is sent to the email address of the logged-in user.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| notification_group_id (path)REQUIRED | integer | The ID of the notification group. |
| notification_template_id (path)REQUIRED | integer | The ID of the notification template. |

**Responses**

| Status | Description |
| --- | --- |
| 204 | Test notification was successfully send. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — POST /notification_groups/{notification_group_id}/notification_templates/{notification_template_id}/test**

::: code-group
```bash [cURL]
curl -X POST 'https://api.myparcel.nl/notification_groups/1/notification_templates/1/test' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/notification_groups/1/notification_templates/1/test");
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
const response = await fetch("https://api.myparcel.nl/notification_groups/1/notification_templates/1/test", {
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

response = requests.post("https://api.myparcel.nl/notification_groups/1/notification_templates/1/test", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/notification_groups/1/notification_templates/1/test')
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
	req, _ := http.NewRequest("POST", "https://api.myparcel.nl/notification_groups/1/notification_templates/1/test", nil)
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
            .uri(URI.create("https://api.myparcel.nl/notification_groups/1/notification_templates/1/test"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://api.myparcel.nl/notification_groups/1/notification_templates/1/test");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**WEBHOOKS**

### `GET /webhook_subscriptions` {#get-webhook-subscriptions}

_Get webhook subscriptions_

Retrieve active webhook subscriptions for this account. Returns an array of Subscription objects.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| hook | string | Filter by webhook event type. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A webhook subscriptions response. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /webhook_subscriptions**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/webhook_subscriptions?hook=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/webhook_subscriptions?hook=string");
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
const response = await fetch("https://api.myparcel.nl/webhook_subscriptions?hook=string", {
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
    "hook": "string"
}

response = requests.get("https://api.myparcel.nl/webhook_subscriptions", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/webhook_subscriptions?hook=string')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/webhook_subscriptions?hook=string", nil)
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
            .uri(URI.create("https://api.myparcel.nl/webhook_subscriptions?hook=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/webhook_subscriptions?hook=string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `POST /webhook_subscriptions` {#post-webhook-subscriptions}

_Create webhook subscriptions_

Create webhook subscriptions for event notifications.

**Responses**

| Status | Description |
| --- | --- |
| 200 | Webhook subscription creation was successful. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — POST /webhook_subscriptions**

::: code-group
```bash [cURL]
curl -X POST 'https://api.myparcel.nl/webhook_subscriptions' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/webhook_subscriptions");
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
const response = await fetch("https://api.myparcel.nl/webhook_subscriptions", {
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

response = requests.post("https://api.myparcel.nl/webhook_subscriptions", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/webhook_subscriptions')
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
	req, _ := http.NewRequest("POST", "https://api.myparcel.nl/webhook_subscriptions", nil)
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
            .uri(URI.create("https://api.myparcel.nl/webhook_subscriptions"))
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
var req = new HttpRequestMessage(HttpMethod.Post, "https://api.myparcel.nl/webhook_subscriptions");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `GET /webhook_subscriptions/{ids}` {#get-webhook-subscriptions-ids}

_Get webhook subscriptions by id._

Retrieve specific webhook subscriptions by id. You can specify multiple subscription ids by semicolon separating them on the URI. Returns an array of webhook subscriptions.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ids (path)REQUIRED |  | One or more webhook subscription IDs. Separate multiple IDs using `;`. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | A webhook subscriptions response. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — GET /webhook_subscriptions/{ids}**

::: code-group
```bash [cURL]
curl -X GET 'https://api.myparcel.nl/webhook_subscriptions/123' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/webhook_subscriptions/123");
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
const response = await fetch("https://api.myparcel.nl/webhook_subscriptions/123", {
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

response = requests.get("https://api.myparcel.nl/webhook_subscriptions/123", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/webhook_subscriptions/123')
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
	req, _ := http.NewRequest("GET", "https://api.myparcel.nl/webhook_subscriptions/123", nil)
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
            .uri(URI.create("https://api.myparcel.nl/webhook_subscriptions/123"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://api.myparcel.nl/webhook_subscriptions/123");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

### `DELETE /webhook_subscriptions/{ids}` {#delete-webhook-subscriptions-ids}

_Delete webhook subscriptions_

Delete webhook subscriptions to stop receiving notifications about events.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ids (path)REQUIRED |  | One or more webhook subscription IDs. Separate multiple IDs using `;`. |

**Responses**

| Status | Description |
| --- | --- |
| 204 | Webhook subscription deletion was successful. |
| 4XX | This response is given when the request contains bad syntax or cannot be fulfilled due to a client-side issue. |
| 5XX | This response is given when the server fails to fulfill a valid request due to a server-side issue. |

**Request — DELETE /webhook_subscriptions/{ids}**

::: code-group
```bash [cURL]
curl -X DELETE 'https://api.myparcel.nl/webhook_subscriptions/123' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://api.myparcel.nl/webhook_subscriptions/123");
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
const response = await fetch("https://api.myparcel.nl/webhook_subscriptions/123", {
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

response = requests.delete("https://api.myparcel.nl/webhook_subscriptions/123", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.myparcel.nl/webhook_subscriptions/123')
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
	req, _ := http.NewRequest("DELETE", "https://api.myparcel.nl/webhook_subscriptions/123", nil)
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
            .uri(URI.create("https://api.myparcel.nl/webhook_subscriptions/123"))
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
var req = new HttpRequestMessage(HttpMethod.Delete, "https://api.myparcel.nl/webhook_subscriptions/123");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::
