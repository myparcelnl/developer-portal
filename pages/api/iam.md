---
title: IAM API
description: "This API features all functionality around IAM."
---

## Endpoints {#endpoints}

Auto-generated from `iam.api.myparcel.nl/openapi.yaml`. Click an endpoint to see its parameters and code samples.

**WHOAMI**

### `GET /whoami` {#get-whoami}

_Find out who you are and what you can._

Who am I?

**Responses**

| Status | Description |
| --- | --- |
| 200 | Who am I information. |

**Request — GET /whoami**

::: code-group
```bash [cURL]
curl -X GET 'https://iam.api.myparcel.nl/whoami' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://iam.api.myparcel.nl/whoami");
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
const response = await fetch("https://iam.api.myparcel.nl/whoami", {
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

response = requests.get("https://iam.api.myparcel.nl/whoami", headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://iam.api.myparcel.nl/whoami')
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
	req, _ := http.NewRequest("GET", "https://iam.api.myparcel.nl/whoami", nil)
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
            .uri(URI.create("https://iam.api.myparcel.nl/whoami"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://iam.api.myparcel.nl/whoami");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::
