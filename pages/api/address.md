---
title: Address API
description: "This API features searching and validating addresses."
---

## Endpoints {#endpoints}

Auto-generated from `address.api.myparcel.nl/openapi.yaml`. Click an endpoint to see its parameters and code samples.

**ADDRESSES**

### `GET /addresses` {#get-addresses}

_List addresses by query parameters._

List addresses.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| countryCode | string | ISO 3166-1 alpha-2 code. Values: `AD`, `AE`, `AF`, `AG`, `AI`, `AL`, `AM`, `AO`, `AQ`, `AR`, `AS`, `AT`, `AU`, `AW`, `AX`, `AZ`, `BA`, `BB`, `BD`, `BE`, `BF`, `BG`, `BH`, `BI`, `BJ`, `BL`, `BM`, `BN`, `BO`, `BQ`, `BR`, `BS`, `BT`, `BV`, `BW`, `BY`, `BZ`, `CA`, `CC`, `CD`, `CF`, `CG`, `CH`, `CI`, `CK`, `CL`, `CM`, `CN`, `CO`, `CR`, `CU`, `CV`, `CW`, `CX`, `CY`, `CZ`, `DE`, `DJ`, `DK`, `DM`, `DO`, `DZ`, `EC`, `EE`, `EG`, `EH`, `ER`, `ES`, `ET`, `FI`, `FJ`, `FK`, `FM`, `FO`, `FR`, `GA`, `GB`, `GD`, `GE`, `GF`, `GG`, `GH`, `GI`, `GL`, `GM`, `GN`, `GP`, `GQ`, `GR`, `GS`, `GT`, `GU`, `GW`, `GY`, `HK`, `HM`, `HN`, `HR`, `HT`, `HU`, `ID`, `IE`, `IL`, `IM`, `IN`, `IO`, `IQ`, `IR`, `IS`, `IT`, `JE`, `JM`, `JO`, `JP`, `KE`, `KG`, `KH`, `KI`, `KM`, `KN`, `KP`, `KR`, `KW`, `KY`, `KZ`, `LA`, `LB`, `LC`, `LI`, `LK`, `LR`, `LS`, `LT`, `LU`, `LV`, `LY`, `MA`, `MC`, `MD`, `ME`, `MF`, `MG`, `MH`, `MK`, `ML`, `MM`, `MN`, `MO`, `MP`, `MQ`, `MR`, `MS`, `MT`, `MU`, `MV`, `MW`, `MX`, `MY`, `MZ`, `NA`, `NC`, `NE`, `NF`, `NG`, `NI`, `NL`, `False`, `NP`, `NR`, `NU`, `NZ`, `OM`, `PA`, `PE`, `PF`, `PG`, `PH`, `PK`, `PL`, `PM`, `PN`, `PR`, `PS`, `PT`, `PW`, `PY`, `QA`, `RE`, `RO`, `RS`, `RU`, `RW`, `SA`, `SB`, `SC`, `SD`, `SE`, `SG`, `SH`, `SI`, `SJ`, `SK`, `SL`, `SM`, `SN`, `SO`, `SR`, `SS`, `ST`, `SV`, `SX`, `SY`, `SZ`, `TC`, `TD`, `TF`, `TG`, `TH`, `TJ`, `TK`, `TL`, `TM`, `TN`, `TO`, `TR`, `TT`, `TV`, `TW`, `TZ`, `UA`, `UG`, `UM`, `US`, `UY`, `UZ`, `VA`, `VC`, `VE`, `VG`, `VI`, `VN`, `VU`, `WF`, `WS`, `XK`, `YE`, `YT`, `ZA`, `ZM`, `ZW` |
| houseNumber | string | House number to search for an address. Can only be used when `countryCode`=`NL`. Otherwise ignored. |
| houseNumberSuffix | string | House number suffix to search for an address. Can only be used when `countryCode`=`NL`. Otherwise ignored. |
| postalCode | string | Postal code to search for an address. Can only be used when `countryCode`=`NL`. Otherwise ignored. |
| query | string | Query string to search for an address. Must be used when `houseNumber` and `postalCode` are not used. |
| limit | integer | Limit the number of addresses to respond. Can only be used when `countryCode`=`NL`. Otherwise ignored. |

**Responses**

| Status | Description |
| --- | --- |
| 200 | Found addresses. |
| 400 | Invalid request syntax |

**Request — GET /addresses**

::: code-group
```bash [cURL]
curl -X GET 'https://address.api.myparcel.nl/addresses?countryCode=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://address.api.myparcel.nl/addresses?countryCode=string");
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
const response = await fetch("https://address.api.myparcel.nl/addresses?countryCode=string", {
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
    "countryCode": "string"
}

response = requests.get("https://address.api.myparcel.nl/addresses", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://address.api.myparcel.nl/addresses?countryCode=string')
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
	req, _ := http.NewRequest("GET", "https://address.api.myparcel.nl/addresses?countryCode=string", nil)
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
            .uri(URI.create("https://address.api.myparcel.nl/addresses?countryCode=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://address.api.myparcel.nl/addresses?countryCode=string");
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

**VALIDATE**

### `GET /validate` {#get-validate}

_Validate an address by query parameters._

Validate an address.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| countryCodeREQUIRED | string | ISO 3166-1 alpha-2 code. Values: `AD`, `AE`, `AF`, `AG`, `AI`, `AL`, `AM`, `AO`, `AQ`, `AR`, `AS`, `AT`, `AU`, `AW`, `AX`, `AZ`, `BA`, `BB`, `BD`, `BE`, `BF`, `BG`, `BH`, `BI`, `BJ`, `BL`, `BM`, `BN`, `BO`, `BQ`, `BR`, `BS`, `BT`, `BV`, `BW`, `BY`, `BZ`, `CA`, `CC`, `CD`, `CF`, `CG`, `CH`, `CI`, `CK`, `CL`, `CM`, `CN`, `CO`, `CR`, `CU`, `CV`, `CW`, `CX`, `CY`, `CZ`, `DE`, `DJ`, `DK`, `DM`, `DO`, `DZ`, `EC`, `EE`, `EG`, `EH`, `ER`, `ES`, `ET`, `FI`, `FJ`, `FK`, `FM`, `FO`, `FR`, `GA`, `GB`, `GD`, `GE`, `GF`, `GG`, `GH`, `GI`, `GL`, `GM`, `GN`, `GP`, `GQ`, `GR`, `GS`, `GT`, `GU`, `GW`, `GY`, `HK`, `HM`, `HN`, `HR`, `HT`, `HU`, `ID`, `IE`, `IL`, `IM`, `IN`, `IO`, `IQ`, `IR`, `IS`, `IT`, `JE`, `JM`, `JO`, `JP`, `KE`, `KG`, `KH`, `KI`, `KM`, `KN`, `KP`, `KR`, `KW`, `KY`, `KZ`, `LA`, `LB`, `LC`, `LI`, `LK`, `LR`, `LS`, `LT`, `LU`, `LV`, `LY`, `MA`, `MC`, `MD`, `ME`, `MF`, `MG`, `MH`, `MK`, `ML`, `MM`, `MN`, `MO`, `MP`, `MQ`, `MR`, `MS`, `MT`, `MU`, `MV`, `MW`, `MX`, `MY`, `MZ`, `NA`, `NC`, `NE`, `NF`, `NG`, `NI`, `NL`, `False`, `NP`, `NR`, `NU`, `NZ`, `OM`, `PA`, `PE`, `PF`, `PG`, `PH`, `PK`, `PL`, `PM`, `PN`, `PR`, `PS`, `PT`, `PW`, `PY`, `QA`, `RE`, `RO`, `RS`, `RU`, `RW`, `SA`, `SB`, `SC`, `SD`, `SE`, `SG`, `SH`, `SI`, `SJ`, `SK`, `SL`, `SM`, `SN`, `SO`, `SR`, `SS`, `ST`, `SV`, `SX`, `SY`, `SZ`, `TC`, `TD`, `TF`, `TG`, `TH`, `TJ`, `TK`, `TL`, `TM`, `TN`, `TO`, `TR`, `TT`, `TV`, `TW`, `TZ`, `UA`, `UG`, `UM`, `US`, `UY`, `UZ`, `VA`, `VC`, `VE`, `VG`, `VI`, `VN`, `VU`, `WF`, `WS`, `XK`, `YE`, `YT`, `ZA`, `ZM`, `ZW` |
| postalCode | string | Postal code to validate an address with. The postalCode is only used for validation when the country uses a postal code system, otherwise it is ignored. |
| city | string | City to validate an address with. For dutch addresses this is not validated. |
| houseNumber | string | House number to validate an address with. For dutch addresses this is mandatory. |
| houseNumberSuffix | string | House number suffix to validate an address with. For dutch addresses this could be mandatory to identify an apartment. |
| boxNumber | string | Bus number to validate an address with, this is only for Belgian addresses (instead of a houseNumberSuffix) |
| region | string | Region to validate an address with. For dutch addresses this is not validated. |
| street | string | Street to validate an address with. For dutch addresses this is not validated. |
| validationType | string | When used it only validates the format of the address. Otherwise its existence is also validated. Values: `FORMAT` |

**Responses**

| Status | Description |
| --- | --- |
| 200 | Valid address whether or not. |
| 400 | Invalid request syntax |

**Request — GET /validate**

::: code-group
```bash [cURL]
curl -X GET 'https://address.api.myparcel.nl/validate?countryCode=string' \
  -H 'Authorization: bearer <token>' \
  -H 'User-Agent: my-integration/1.0'
```

```php [PHP]
<?php
$ch = curl_init("https://address.api.myparcel.nl/validate?countryCode=string");
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
const response = await fetch("https://address.api.myparcel.nl/validate?countryCode=string", {
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
    "countryCode": "string"
}

response = requests.get("https://address.api.myparcel.nl/validate", params=params, headers=headers)

data = response.json()
```

```ruby [Ruby]
require 'net/http'
require 'json'
require 'uri'

uri = URI('https://address.api.myparcel.nl/validate?countryCode=string')
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
	req, _ := http.NewRequest("GET", "https://address.api.myparcel.nl/validate?countryCode=string", nil)
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
            .uri(URI.create("https://address.api.myparcel.nl/validate?countryCode=string"))
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
var req = new HttpRequestMessage(HttpMethod.Get, "https://address.api.myparcel.nl/validate?countryCode=string");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();
```
:::

**Response — 200**

```json
{
  "valid": true
}
```
