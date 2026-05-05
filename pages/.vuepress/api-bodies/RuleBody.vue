<template>
  <div>
<section class="mp-ref-section">
        <div class="mp-ref-section__head">
          <h2 class="mp-ref-section__title" id="endpoints">Endpoints</h2>
          <p class="mp-ref-section__sub">Auto-generated from <code>rule.api.myparcel.nl/openapi.yaml</code>. Click an endpoint to see its parameters and code samples.</p>
        </div>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">SHOPS</div>
        <article class="mp-endpoint" id="get-shops-shopid-order-rules">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/shops/{shopId}/order-rules</span>
            <span class="mp-endpoint__summary">List all order rule groups</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Retrieves a list of all order rule groups associated with a specific shop.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">shopId</span> <small style="color:var(--mp-text-faint);font-size:10px">(path)</small><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">The unique identifier of the shop.</td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">A list of order rule groups for the shop.</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /shops/{shopId}/order-rules</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://rule.api.myparcel.nl/shops/string/order-rules&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;);
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
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;, {
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

response = requests.get(&quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://rule.api.myparcel.nl/shops/string/order-rules&#x27;)
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
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;, nil)
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
            .uri(URI.create(&quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;);
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
        <article class="mp-endpoint" id="post-shops-shopid-order-rules">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/shops/{shopId}/order-rules</span>
            <span class="mp-endpoint__summary">Create an order rule group</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Creates a new order rule group for a specific shop.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">shopId</span> <small style="color:var(--mp-text-faint);font-size:10px">(path)</small><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">The unique identifier of the shop.</td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">201</span></td><td class="mp-params__desc">The newly created order rule group.</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /shops/{shopId}/order-rules</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://rule.api.myparcel.nl/shops/string/order-rules&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;true&quot;: &quot;ORDER_IMPORTED&quot;,
  &quot;rules&quot;: [
    {
      &quot;actions&quot;: {
        &quot;setShippingPreferences&quot;: null
      },
      &quot;condition&quot;: &quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;,
      &quot;name&quot;: &quot;string&quot;,
      &quot;status&quot;: &quot;ACTIVE&quot;
    }
  ],
  &quot;condition&quot;: null
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;true&quot;: &quot;ORDER_IMPORTED&quot;, &quot;rules&quot;: [{&quot;actions&quot;: {&quot;setShippingPreferences&quot;: null}, &quot;condition&quot;: &quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;, &quot;name&quot;: &quot;string&quot;, &quot;status&quot;: &quot;ACTIVE&quot;}], &quot;condition&quot;: null}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;true&quot;: &quot;ORDER_IMPORTED&quot;,
    &quot;rules&quot;: [
      {
        &quot;actions&quot;: {
          &quot;setShippingPreferences&quot;: null
        },
        &quot;condition&quot;: &quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;,
        &quot;name&quot;: &quot;string&quot;,
        &quot;status&quot;: &quot;ACTIVE&quot;
      }
    ],
    &quot;condition&quot;: null
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;true&quot;: &quot;ORDER_IMPORTED&quot;,
    &quot;rules&quot;: [
        {
            &quot;actions&quot;: {
                &quot;setShippingPreferences&quot;: null
            },
            &quot;condition&quot;: &quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;,
            &quot;name&quot;: &quot;string&quot;,
            &quot;status&quot;: &quot;ACTIVE&quot;
        }
    ],
    &quot;condition&quot;: null
}

response = requests.post(&quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://rule.api.myparcel.nl/shops/string/order-rules&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;true\&quot;: \&quot;ORDER_IMPORTED\&quot;, \&quot;rules\&quot;: [{\&quot;actions\&quot;: {\&quot;setShippingPreferences\&quot;: null}, \&quot;condition\&quot;: \&quot;price &gt; 100 &amp;&amp; price &lt;= 200\&quot;, \&quot;name\&quot;: \&quot;string\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;}], \&quot;condition\&quot;: null}&quot;

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
	payload := []byte(`{&quot;true&quot;: &quot;ORDER_IMPORTED&quot;, &quot;rules&quot;: [{&quot;actions&quot;: {&quot;setShippingPreferences&quot;: null}, &quot;condition&quot;: &quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;, &quot;name&quot;: &quot;string&quot;, &quot;status&quot;: &quot;ACTIVE&quot;}], &quot;condition&quot;: null}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;, bytes.NewBuffer(payload))
	req.Header.Set(&quot;Content-Type&quot;, &quot;application/json&quot;)
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
            .uri(URI.create(&quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;true\&quot;: \&quot;ORDER_IMPORTED\&quot;, \&quot;rules\&quot;: [{\&quot;actions\&quot;: {\&quot;setShippingPreferences\&quot;: null}, \&quot;condition\&quot;: \&quot;price &gt; 100 &amp;&amp; price &lt;= 200\&quot;, \&quot;name\&quot;: \&quot;string\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;}], \&quot;condition\&quot;: null}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://rule.api.myparcel.nl/shops/string/order-rules&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;true&quot;&quot;: &quot;&quot;ORDER_IMPORTED&quot;&quot;, &quot;&quot;rules&quot;&quot;: [{&quot;&quot;actions&quot;&quot;: {&quot;&quot;setShippingPreferences&quot;&quot;: null}, &quot;&quot;condition&quot;&quot;: &quot;&quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;&quot;, &quot;&quot;name&quot;&quot;: &quot;&quot;string&quot;&quot;, &quot;&quot;status&quot;&quot;: &quot;&quot;ACTIVE&quot;&quot;}], &quot;&quot;condition&quot;&quot;: null}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="mp-endpoint" id="put-shops-shopid-order-rules-rulegroupid">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--put mp-method--lg">PUT</span>
            <span class="mp-endpoint__path">/shops/{shopId}/order-rules/{ruleGroupId}</span>
            <span class="mp-endpoint__summary">Update an order rule group</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Updates an existing order rule group by its ID.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">ruleGroupId</span> <small style="color:var(--mp-text-faint);font-size:10px">(path)</small><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">The unique identifier of the rule group.</td></tr>
                <tr><td><span class="mp-params__name">shopId</span> <small style="color:var(--mp-text-faint);font-size:10px">(path)</small><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">The unique identifier of the shop.</td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The updated order rule group.</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">PUT /shops/{shopId}/order-rules/{ruleGroupId}</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X PUT &#x27;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;true&quot;: &quot;ORDER_IMPORTED&quot;,
  &quot;rules&quot;: [
    {
      &quot;actions&quot;: {
        &quot;setShippingPreferences&quot;: null
      },
      &quot;condition&quot;: &quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;,
      &quot;name&quot;: &quot;string&quot;,
      &quot;status&quot;: &quot;ACTIVE&quot;
    }
  ],
  &quot;condition&quot;: null
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;PUT&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;true&quot;: &quot;ORDER_IMPORTED&quot;, &quot;rules&quot;: [{&quot;actions&quot;: {&quot;setShippingPreferences&quot;: null}, &quot;condition&quot;: &quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;, &quot;name&quot;: &quot;string&quot;, &quot;status&quot;: &quot;ACTIVE&quot;}], &quot;condition&quot;: null}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;, {
  method: &#x27;PUT&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;true&quot;: &quot;ORDER_IMPORTED&quot;,
    &quot;rules&quot;: [
      {
        &quot;actions&quot;: {
          &quot;setShippingPreferences&quot;: null
        },
        &quot;condition&quot;: &quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;,
        &quot;name&quot;: &quot;string&quot;,
        &quot;status&quot;: &quot;ACTIVE&quot;
      }
    ],
    &quot;condition&quot;: null
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;true&quot;: &quot;ORDER_IMPORTED&quot;,
    &quot;rules&quot;: [
        {
            &quot;actions&quot;: {
                &quot;setShippingPreferences&quot;: null
            },
            &quot;condition&quot;: &quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;,
            &quot;name&quot;: &quot;string&quot;,
            &quot;status&quot;: &quot;ACTIVE&quot;
        }
    ],
    &quot;condition&quot;: null
}

response = requests.put(&quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&#x27;)
req = Net::HTTP::Put.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;true\&quot;: \&quot;ORDER_IMPORTED\&quot;, \&quot;rules\&quot;: [{\&quot;actions\&quot;: {\&quot;setShippingPreferences\&quot;: null}, \&quot;condition\&quot;: \&quot;price &gt; 100 &amp;&amp; price &lt;= 200\&quot;, \&quot;name\&quot;: \&quot;string\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;}], \&quot;condition\&quot;: null}&quot;

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
	payload := []byte(`{&quot;true&quot;: &quot;ORDER_IMPORTED&quot;, &quot;rules&quot;: [{&quot;actions&quot;: {&quot;setShippingPreferences&quot;: null}, &quot;condition&quot;: &quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;, &quot;name&quot;: &quot;string&quot;, &quot;status&quot;: &quot;ACTIVE&quot;}], &quot;condition&quot;: null}`)
	req, _ := http.NewRequest(&quot;PUT&quot;, &quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;, bytes.NewBuffer(payload))
	req.Header.Set(&quot;Content-Type&quot;, &quot;application/json&quot;)
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
            .uri(URI.create(&quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .PUT(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;true\&quot;: \&quot;ORDER_IMPORTED\&quot;, \&quot;rules\&quot;: [{\&quot;actions\&quot;: {\&quot;setShippingPreferences\&quot;: null}, \&quot;condition\&quot;: \&quot;price &gt; 100 &amp;&amp; price &lt;= 200\&quot;, \&quot;name\&quot;: \&quot;string\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;}], \&quot;condition\&quot;: null}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Put, &quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;true&quot;&quot;: &quot;&quot;ORDER_IMPORTED&quot;&quot;, &quot;&quot;rules&quot;&quot;: [{&quot;&quot;actions&quot;&quot;: {&quot;&quot;setShippingPreferences&quot;&quot;: null}, &quot;&quot;condition&quot;&quot;: &quot;&quot;price &gt; 100 &amp;&amp; price &lt;= 200&quot;&quot;, &quot;&quot;name&quot;&quot;: &quot;&quot;string&quot;&quot;, &quot;&quot;status&quot;&quot;: &quot;&quot;ACTIVE&quot;&quot;}], &quot;&quot;condition&quot;&quot;: null}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="mp-endpoint" id="delete-shops-shopid-order-rules-rulegroupid">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--delete mp-method--lg">DELETE</span>
            <span class="mp-endpoint__path">/shops/{shopId}/order-rules/{ruleGroupId}</span>
            <span class="mp-endpoint__summary">Delete an order rule group</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Deletes a specific order rule group by its ID.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">ruleGroupId</span> <small style="color:var(--mp-text-faint);font-size:10px">(path)</small><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">The unique identifier of the rule group.</td></tr>
                <tr><td><span class="mp-params__name">shopId</span> <small style="color:var(--mp-text-faint);font-size:10px">(path)</small><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">The unique identifier of the shop.</td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">204</span></td><td class="mp-params__desc">The order rule group is successfully deleted.</td></tr>
                <tr><td><span class="mp-params__name">404</span></td><td class="mp-params__desc">The resource (shop or order rule group) is not found.</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">DELETE /shops/{shopId}/order-rules/{ruleGroupId}</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X DELETE &#x27;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;DELETE&#x27;,
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;, {
  method: &#x27;DELETE&#x27;,
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

response = requests.delete(&quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&#x27;)
req = Net::HTTP::Delete.new(uri)
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
	req, _ := http.NewRequest(&quot;DELETE&quot;, &quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;, nil)
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
            .uri(URI.create(&quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .DELETE()
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
var req = new HttpRequestMessage(HttpMethod.Delete, &quot;https://rule.api.myparcel.nl/shops/string/order-rules/00000000-0000-0000-0000-000000000000&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
  </div>
</template>
