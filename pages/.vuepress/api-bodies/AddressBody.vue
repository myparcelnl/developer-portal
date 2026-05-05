<template>
  <div>
<section class="mp-ref-section">
        <div class="mp-ref-section__head">
          <h2 class="mp-ref-section__title" id="endpoints">Endpoints</h2>
          <p class="mp-ref-section__sub">Auto-generated from <code>address.api.myparcel.nl/openapi.yaml</code>. Click an endpoint to see its parameters and code samples.</p>
        </div>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">ADDRESSES</div>
        <article class="mp-endpoint" id="get-addresses">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/addresses</span>
            <span class="mp-endpoint__summary">List addresses by query parameters.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">List addresses.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">countryCode</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">ISO 3166-1 alpha-2 code.<br><small>Values: <code>AD</code>, <code>AE</code>, <code>AF</code>, <code>AG</code>, <code>AI</code>, <code>AL</code>, <code>AM</code>, <code>AO</code>, <code>AQ</code>, <code>AR</code>, <code>AS</code>, <code>AT</code>, <code>AU</code>, <code>AW</code>, <code>AX</code>, <code>AZ</code>, <code>BA</code>, <code>BB</code>, <code>BD</code>, <code>BE</code>, <code>BF</code>, <code>BG</code>, <code>BH</code>, <code>BI</code>, <code>BJ</code>, <code>BL</code>, <code>BM</code>, <code>BN</code>, <code>BO</code>, <code>BQ</code>, <code>BR</code>, <code>BS</code>, <code>BT</code>, <code>BV</code>, <code>BW</code>, <code>BY</code>, <code>BZ</code>, <code>CA</code>, <code>CC</code>, <code>CD</code>, <code>CF</code>, <code>CG</code>, <code>CH</code>, <code>CI</code>, <code>CK</code>, <code>CL</code>, <code>CM</code>, <code>CN</code>, <code>CO</code>, <code>CR</code>, <code>CU</code>, <code>CV</code>, <code>CW</code>, <code>CX</code>, <code>CY</code>, <code>CZ</code>, <code>DE</code>, <code>DJ</code>, <code>DK</code>, <code>DM</code>, <code>DO</code>, <code>DZ</code>, <code>EC</code>, <code>EE</code>, <code>EG</code>, <code>EH</code>, <code>ER</code>, <code>ES</code>, <code>ET</code>, <code>FI</code>, <code>FJ</code>, <code>FK</code>, <code>FM</code>, <code>FO</code>, <code>FR</code>, <code>GA</code>, <code>GB</code>, <code>GD</code>, <code>GE</code>, <code>GF</code>, <code>GG</code>, <code>GH</code>, <code>GI</code>, <code>GL</code>, <code>GM</code>, <code>GN</code>, <code>GP</code>, <code>GQ</code>, <code>GR</code>, <code>GS</code>, <code>GT</code>, <code>GU</code>, <code>GW</code>, <code>GY</code>, <code>HK</code>, <code>HM</code>, <code>HN</code>, <code>HR</code>, <code>HT</code>, <code>HU</code>, <code>ID</code>, <code>IE</code>, <code>IL</code>, <code>IM</code>, <code>IN</code>, <code>IO</code>, <code>IQ</code>, <code>IR</code>, <code>IS</code>, <code>IT</code>, <code>JE</code>, <code>JM</code>, <code>JO</code>, <code>JP</code>, <code>KE</code>, <code>KG</code>, <code>KH</code>, <code>KI</code>, <code>KM</code>, <code>KN</code>, <code>KP</code>, <code>KR</code>, <code>KW</code>, <code>KY</code>, <code>KZ</code>, <code>LA</code>, <code>LB</code>, <code>LC</code>, <code>LI</code>, <code>LK</code>, <code>LR</code>, <code>LS</code>, <code>LT</code>, <code>LU</code>, <code>LV</code>, <code>LY</code>, <code>MA</code>, <code>MC</code>, <code>MD</code>, <code>ME</code>, <code>MF</code>, <code>MG</code>, <code>MH</code>, <code>MK</code>, <code>ML</code>, <code>MM</code>, <code>MN</code>, <code>MO</code>, <code>MP</code>, <code>MQ</code>, <code>MR</code>, <code>MS</code>, <code>MT</code>, <code>MU</code>, <code>MV</code>, <code>MW</code>, <code>MX</code>, <code>MY</code>, <code>MZ</code>, <code>NA</code>, <code>NC</code>, <code>NE</code>, <code>NF</code>, <code>NG</code>, <code>NI</code>, <code>NL</code>, <code>False</code>, <code>NP</code>, <code>NR</code>, <code>NU</code>, <code>NZ</code>, <code>OM</code>, <code>PA</code>, <code>PE</code>, <code>PF</code>, <code>PG</code>, <code>PH</code>, <code>PK</code>, <code>PL</code>, <code>PM</code>, <code>PN</code>, <code>PR</code>, <code>PS</code>, <code>PT</code>, <code>PW</code>, <code>PY</code>, <code>QA</code>, <code>RE</code>, <code>RO</code>, <code>RS</code>, <code>RU</code>, <code>RW</code>, <code>SA</code>, <code>SB</code>, <code>SC</code>, <code>SD</code>, <code>SE</code>, <code>SG</code>, <code>SH</code>, <code>SI</code>, <code>SJ</code>, <code>SK</code>, <code>SL</code>, <code>SM</code>, <code>SN</code>, <code>SO</code>, <code>SR</code>, <code>SS</code>, <code>ST</code>, <code>SV</code>, <code>SX</code>, <code>SY</code>, <code>SZ</code>, <code>TC</code>, <code>TD</code>, <code>TF</code>, <code>TG</code>, <code>TH</code>, <code>TJ</code>, <code>TK</code>, <code>TL</code>, <code>TM</code>, <code>TN</code>, <code>TO</code>, <code>TR</code>, <code>TT</code>, <code>TV</code>, <code>TW</code>, <code>TZ</code>, <code>UA</code>, <code>UG</code>, <code>UM</code>, <code>US</code>, <code>UY</code>, <code>UZ</code>, <code>VA</code>, <code>VC</code>, <code>VE</code>, <code>VG</code>, <code>VI</code>, <code>VN</code>, <code>VU</code>, <code>WF</code>, <code>WS</code>, <code>XK</code>, <code>YE</code>, <code>YT</code>, <code>ZA</code>, <code>ZM</code>, <code>ZW</code></small></td></tr>
                <tr><td><span class="mp-params__name">houseNumber</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">House number to search for an address. Can only be used when `countryCode`=`NL`. Otherwise ignored.</td></tr>
                <tr><td><span class="mp-params__name">houseNumberSuffix</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">House number suffix to search for an address. Can only be used when `countryCode`=`NL`. Otherwise ignored.</td></tr>
                <tr><td><span class="mp-params__name">postalCode</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">Postal code to search for an address. Can only be used when `countryCode`=`NL`. Otherwise ignored.</td></tr>
                <tr><td><span class="mp-params__name">query</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">Query string to search for an address. Must be used when `houseNumber` and `postalCode` are not used.</td></tr>
                <tr><td><span class="mp-params__name">limit</span></td><td><span class="mp-params__type">integer</span></td><td class="mp-params__desc">Limit the number of addresses to respond. Can only be used when `countryCode`=`NL`. Otherwise ignored.</td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Found addresses.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /addresses</span></div>
              <div class="mp-code-group" data-code-tabs>
                <div class="mp-code-langswitch">
                  <button type="button" class="mp-code-langswitch__toggle" aria-haspopup="listbox" aria-expanded="false">
                    <span class="mp-code-langswitch__current">cURL</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  <ul class="mp-code-langswitch__menu" role="listbox" aria-label="Programming language">
                    <li role="none"><button type="button" role="option" class="mp-code-tab mp-code-tab--active" data-lang="curl">cURL</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="php">PHP</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="js">JavaScript</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="python">Python</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="ruby">Ruby</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="go">Go</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="java">Java</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="csharp">C#</button></li>
                  </ul>
                </div>
                <div class="mp-code-panel mp-code-panel--active" data-lang="curl" role="tabpanel">
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://address.api.myparcel.nl/addresses?countryCode=string&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://address.api.myparcel.nl/addresses?countryCode=string&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://address.api.myparcel.nl/addresses?countryCode=string&quot;, {
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
  },
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

params = {
    &quot;countryCode&quot;: &quot;string&quot;
}

response = requests.get(&quot;https://address.api.myparcel.nl/addresses&quot;, params=params, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://address.api.myparcel.nl/addresses?countryCode=string&#x27;)
req = Net::HTTP::Get.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(req) }
data = JSON.parse(res.body)</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="go" role="tabpanel">
<pre class="mp-code-block" data-lang="go"><code class="language-go">package main

import (
	&quot;bytes&quot;
	&quot;fmt&quot;
	&quot;io&quot;
	&quot;net/http&quot;
)

func main() {
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://address.api.myparcel.nl/addresses?countryCode=string&quot;, nil)
	req.Header.Set(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
	req.Header.Set(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)

	res, _ := http.DefaultClient.Do(req)
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="java" role="tabpanel">
<pre class="mp-code-block" data-lang="java"><code class="language-java">import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Example {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest req = HttpRequest.newBuilder()
            .uri(URI.create(&quot;https://address.api.myparcel.nl/addresses?countryCode=string&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .GET()
            .build();

        HttpResponse&lt;String&gt; res = client.send(req, HttpResponse.BodyHandlers.ofString());
        System.out.println(res.body());
    }
}</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="csharp" role="tabpanel">
<pre class="mp-code-block" data-lang="csharp"><code class="language-csharp">using System.Net.Http;
using System.Text;

var client = new HttpClient();
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://address.api.myparcel.nl/addresses?countryCode=string&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;results&quot;: []
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">VALIDATE</div>
        <article class="mp-endpoint" id="get-validate">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/validate</span>
            <span class="mp-endpoint__summary">Validate an address by query parameters.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Validate an address.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">countryCode</span><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">ISO 3166-1 alpha-2 code.<br><small>Values: <code>AD</code>, <code>AE</code>, <code>AF</code>, <code>AG</code>, <code>AI</code>, <code>AL</code>, <code>AM</code>, <code>AO</code>, <code>AQ</code>, <code>AR</code>, <code>AS</code>, <code>AT</code>, <code>AU</code>, <code>AW</code>, <code>AX</code>, <code>AZ</code>, <code>BA</code>, <code>BB</code>, <code>BD</code>, <code>BE</code>, <code>BF</code>, <code>BG</code>, <code>BH</code>, <code>BI</code>, <code>BJ</code>, <code>BL</code>, <code>BM</code>, <code>BN</code>, <code>BO</code>, <code>BQ</code>, <code>BR</code>, <code>BS</code>, <code>BT</code>, <code>BV</code>, <code>BW</code>, <code>BY</code>, <code>BZ</code>, <code>CA</code>, <code>CC</code>, <code>CD</code>, <code>CF</code>, <code>CG</code>, <code>CH</code>, <code>CI</code>, <code>CK</code>, <code>CL</code>, <code>CM</code>, <code>CN</code>, <code>CO</code>, <code>CR</code>, <code>CU</code>, <code>CV</code>, <code>CW</code>, <code>CX</code>, <code>CY</code>, <code>CZ</code>, <code>DE</code>, <code>DJ</code>, <code>DK</code>, <code>DM</code>, <code>DO</code>, <code>DZ</code>, <code>EC</code>, <code>EE</code>, <code>EG</code>, <code>EH</code>, <code>ER</code>, <code>ES</code>, <code>ET</code>, <code>FI</code>, <code>FJ</code>, <code>FK</code>, <code>FM</code>, <code>FO</code>, <code>FR</code>, <code>GA</code>, <code>GB</code>, <code>GD</code>, <code>GE</code>, <code>GF</code>, <code>GG</code>, <code>GH</code>, <code>GI</code>, <code>GL</code>, <code>GM</code>, <code>GN</code>, <code>GP</code>, <code>GQ</code>, <code>GR</code>, <code>GS</code>, <code>GT</code>, <code>GU</code>, <code>GW</code>, <code>GY</code>, <code>HK</code>, <code>HM</code>, <code>HN</code>, <code>HR</code>, <code>HT</code>, <code>HU</code>, <code>ID</code>, <code>IE</code>, <code>IL</code>, <code>IM</code>, <code>IN</code>, <code>IO</code>, <code>IQ</code>, <code>IR</code>, <code>IS</code>, <code>IT</code>, <code>JE</code>, <code>JM</code>, <code>JO</code>, <code>JP</code>, <code>KE</code>, <code>KG</code>, <code>KH</code>, <code>KI</code>, <code>KM</code>, <code>KN</code>, <code>KP</code>, <code>KR</code>, <code>KW</code>, <code>KY</code>, <code>KZ</code>, <code>LA</code>, <code>LB</code>, <code>LC</code>, <code>LI</code>, <code>LK</code>, <code>LR</code>, <code>LS</code>, <code>LT</code>, <code>LU</code>, <code>LV</code>, <code>LY</code>, <code>MA</code>, <code>MC</code>, <code>MD</code>, <code>ME</code>, <code>MF</code>, <code>MG</code>, <code>MH</code>, <code>MK</code>, <code>ML</code>, <code>MM</code>, <code>MN</code>, <code>MO</code>, <code>MP</code>, <code>MQ</code>, <code>MR</code>, <code>MS</code>, <code>MT</code>, <code>MU</code>, <code>MV</code>, <code>MW</code>, <code>MX</code>, <code>MY</code>, <code>MZ</code>, <code>NA</code>, <code>NC</code>, <code>NE</code>, <code>NF</code>, <code>NG</code>, <code>NI</code>, <code>NL</code>, <code>False</code>, <code>NP</code>, <code>NR</code>, <code>NU</code>, <code>NZ</code>, <code>OM</code>, <code>PA</code>, <code>PE</code>, <code>PF</code>, <code>PG</code>, <code>PH</code>, <code>PK</code>, <code>PL</code>, <code>PM</code>, <code>PN</code>, <code>PR</code>, <code>PS</code>, <code>PT</code>, <code>PW</code>, <code>PY</code>, <code>QA</code>, <code>RE</code>, <code>RO</code>, <code>RS</code>, <code>RU</code>, <code>RW</code>, <code>SA</code>, <code>SB</code>, <code>SC</code>, <code>SD</code>, <code>SE</code>, <code>SG</code>, <code>SH</code>, <code>SI</code>, <code>SJ</code>, <code>SK</code>, <code>SL</code>, <code>SM</code>, <code>SN</code>, <code>SO</code>, <code>SR</code>, <code>SS</code>, <code>ST</code>, <code>SV</code>, <code>SX</code>, <code>SY</code>, <code>SZ</code>, <code>TC</code>, <code>TD</code>, <code>TF</code>, <code>TG</code>, <code>TH</code>, <code>TJ</code>, <code>TK</code>, <code>TL</code>, <code>TM</code>, <code>TN</code>, <code>TO</code>, <code>TR</code>, <code>TT</code>, <code>TV</code>, <code>TW</code>, <code>TZ</code>, <code>UA</code>, <code>UG</code>, <code>UM</code>, <code>US</code>, <code>UY</code>, <code>UZ</code>, <code>VA</code>, <code>VC</code>, <code>VE</code>, <code>VG</code>, <code>VI</code>, <code>VN</code>, <code>VU</code>, <code>WF</code>, <code>WS</code>, <code>XK</code>, <code>YE</code>, <code>YT</code>, <code>ZA</code>, <code>ZM</code>, <code>ZW</code></small></td></tr>
                <tr><td><span class="mp-params__name">postalCode</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">Postal code to validate an address with. The postalCode is only used for validation when the country uses a postal code system, otherwise it is ignored.</td></tr>
                <tr><td><span class="mp-params__name">city</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">City to validate an address with. For dutch addresses this is not validated.</td></tr>
                <tr><td><span class="mp-params__name">houseNumber</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">House number to validate an address with. For dutch addresses this is mandatory.</td></tr>
                <tr><td><span class="mp-params__name">houseNumberSuffix</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">House number suffix to validate an address with. For dutch addresses this could be mandatory to identify an apartment.</td></tr>
                <tr><td><span class="mp-params__name">boxNumber</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">Bus number to validate an address with, this is only for Belgian addresses (instead of a houseNumberSuffix)</td></tr>
                <tr><td><span class="mp-params__name">region</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">Region to validate an address with. For dutch addresses this is not validated.</td></tr>
                <tr><td><span class="mp-params__name">street</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">Street to validate an address with. For dutch addresses this is not validated.</td></tr>
                <tr><td><span class="mp-params__name">validationType</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">When used it only validates the format of the address. Otherwise its existence is also validated.<br><small>Values: <code>FORMAT</code></small></td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Valid address whether or not.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /validate</span></div>
              <div class="mp-code-group" data-code-tabs>
                <div class="mp-code-langswitch">
                  <button type="button" class="mp-code-langswitch__toggle" aria-haspopup="listbox" aria-expanded="false">
                    <span class="mp-code-langswitch__current">cURL</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  <ul class="mp-code-langswitch__menu" role="listbox" aria-label="Programming language">
                    <li role="none"><button type="button" role="option" class="mp-code-tab mp-code-tab--active" data-lang="curl">cURL</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="php">PHP</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="js">JavaScript</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="python">Python</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="ruby">Ruby</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="go">Go</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="java">Java</button></li>
                    <li role="none"><button type="button" role="option" class="mp-code-tab" data-lang="csharp">C#</button></li>
                  </ul>
                </div>
                <div class="mp-code-panel mp-code-panel--active" data-lang="curl" role="tabpanel">
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://address.api.myparcel.nl/validate?countryCode=string&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://address.api.myparcel.nl/validate?countryCode=string&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://address.api.myparcel.nl/validate?countryCode=string&quot;, {
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
  },
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

params = {
    &quot;countryCode&quot;: &quot;string&quot;
}

response = requests.get(&quot;https://address.api.myparcel.nl/validate&quot;, params=params, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://address.api.myparcel.nl/validate?countryCode=string&#x27;)
req = Net::HTTP::Get.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(req) }
data = JSON.parse(res.body)</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="go" role="tabpanel">
<pre class="mp-code-block" data-lang="go"><code class="language-go">package main

import (
	&quot;bytes&quot;
	&quot;fmt&quot;
	&quot;io&quot;
	&quot;net/http&quot;
)

func main() {
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://address.api.myparcel.nl/validate?countryCode=string&quot;, nil)
	req.Header.Set(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
	req.Header.Set(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)

	res, _ := http.DefaultClient.Do(req)
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="java" role="tabpanel">
<pre class="mp-code-block" data-lang="java"><code class="language-java">import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Example {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest req = HttpRequest.newBuilder()
            .uri(URI.create(&quot;https://address.api.myparcel.nl/validate?countryCode=string&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .GET()
            .build();

        HttpResponse&lt;String&gt; res = client.send(req, HttpResponse.BodyHandlers.ofString());
        System.out.println(res.body());
    }
}</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="csharp" role="tabpanel">
<pre class="mp-code-block" data-lang="csharp"><code class="language-csharp">using System.Net.Http;
using System.Text;

var client = new HttpClient();
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://address.api.myparcel.nl/validate?countryCode=string&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;valid&quot;: true
}</code></pre>
            </div>
          </div>
        </article>
      </section>
  </div>
</template>
