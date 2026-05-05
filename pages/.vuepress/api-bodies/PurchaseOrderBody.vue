<template>
  <div>
<section class="mp-ref-section">
        <div class="mp-ref-section__head">
          <h2 class="mp-ref-section__title" id="endpoints">Endpoints</h2>
          <p class="mp-ref-section__sub">Auto-generated from <code>purchase-order.api.myparcel.nl/openapi.yaml</code>. Click an endpoint to see its parameters and code samples.</p>
        </div>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">ADD LINES</div>
        <article class="mp-endpoint" id="post-add-lines">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/add-lines</span>
            <span class="mp-endpoint__summary">Add lines to a purchase order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Add lines to a purchase order. The status of the purchase order must be <code>CONCEPT</code>, <code>REGISTERED</code> or <code>REGISTRATION_REQUESTED</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Purchase order with lines added.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /add-lines</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://purchase-order.api.myparcel.nl/add-lines&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;lines&quot;: [
    {
      &quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
      &quot;quantity&quot;: 5
    }
  ]
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/add-lines&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;lines&quot;: [{&quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;quantity&quot;: 5}]}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/add-lines&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;lines&quot;: [
      {
        &quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;quantity&quot;: 5
      }
    ]
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;lines&quot;: [
        {
            &quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
            &quot;quantity&quot;: 5
        }
    ]
}

response = requests.post(&quot;https://purchase-order.api.myparcel.nl/add-lines&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/add-lines&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;lines\&quot;: [{\&quot;productId\&quot;: \&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;quantity\&quot;: 5}]}&quot;

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
	payload := []byte(`{&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;lines&quot;: [{&quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;quantity&quot;: 5}]}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://purchase-order.api.myparcel.nl/add-lines&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/add-lines&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;lines\&quot;: [{\&quot;productId\&quot;: \&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;quantity\&quot;: 5}]}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://purchase-order.api.myparcel.nl/add-lines&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;id&quot;&quot;: &quot;&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;&quot;, &quot;&quot;lines&quot;&quot;: [{&quot;&quot;productId&quot;&quot;: &quot;&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;&quot;, &quot;&quot;quantity&quot;&quot;: 5}]}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;createdAt&quot;: &quot;2024-02-04T00:00:00.123000+00:00&quot;,
  &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;,
  &quot;lines&quot;: [
    {
      &quot;product&quot;: {
        &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;name&quot;: &quot;Product 1&quot;,
        &quot;ean&quot;: &quot;1234567890123&quot;,
        &quot;sku&quot;: &quot;SKU123&quot;
      },
      &quot;quantity&quot;: 5
    }
  ]
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">CANCEL</div>
        <article class="mp-endpoint" id="post-cancel">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/cancel</span>
            <span class="mp-endpoint__summary">Cancel a purchase order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Cancel one or multiple purchase orders. The status of the purchase order must be <code>REGISTERED</code> or <code>REGISTRATION_REQUESTED</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">204</span></td><td class="mp-params__desc">Purchase orders are cancelled.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /cancel</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://purchase-order.api.myparcel.nl/cancel&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;ids&quot;: [
    &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;
  ]
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/cancel&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;ids&quot;: [&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;]}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/cancel&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;ids&quot;: [
      &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;
    ]
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;ids&quot;: [
        &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;
    ]
}

response = requests.post(&quot;https://purchase-order.api.myparcel.nl/cancel&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/cancel&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;ids\&quot;: [\&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;]}&quot;

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
	payload := []byte(`{&quot;ids&quot;: [&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;]}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://purchase-order.api.myparcel.nl/cancel&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/cancel&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;ids\&quot;: [\&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;]}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://purchase-order.api.myparcel.nl/cancel&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;ids&quot;&quot;: [&quot;&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;&quot;]}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">CREATE</div>
        <article class="mp-endpoint" id="post-create">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/create</span>
            <span class="mp-endpoint__summary">Create a purchase order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Create a purchase order.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">201</span></td><td class="mp-params__desc">Purchase order is created.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /create</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://purchase-order.api.myparcel.nl/create&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;deliverySupplierDetails&quot;: {
    &quot;supplier&quot;: &quot;MyParcel&quot;,
    &quot;reference&quot;: &quot;#555&quot;
  },
  &quot;deliveryType&quot;: {
    &quot;type&quot;: &quot;CONTAINER&quot;,
    &quot;quantity&quot;: 100
  },
  &quot;expectedDelivery&quot;: {
    &quot;true&quot;: &quot;2025-02-04&quot;,
    &quot;timeslot&quot;: {
      &quot;from&quot;: 36000,
      &quot;to&quot;: 43200
    }
  },
  &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;,
  &quot;lines&quot;: [
    {
      &quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
      &quot;quantity&quot;: 5
    }
  ]
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/create&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;deliverySupplierDetails&quot;: {&quot;supplier&quot;: &quot;MyParcel&quot;, &quot;reference&quot;: &quot;#555&quot;}, &quot;deliveryType&quot;: {&quot;type&quot;: &quot;CONTAINER&quot;, &quot;quantity&quot;: 100}, &quot;expectedDelivery&quot;: {&quot;true&quot;: &quot;2025-02-04&quot;, &quot;timeslot&quot;: {&quot;from&quot;: 36000, &quot;to&quot;: 43200}}, &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;, &quot;lines&quot;: [{&quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;quantity&quot;: 5}]}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/create&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;deliverySupplierDetails&quot;: {
      &quot;supplier&quot;: &quot;MyParcel&quot;,
      &quot;reference&quot;: &quot;#555&quot;
    },
    &quot;deliveryType&quot;: {
      &quot;type&quot;: &quot;CONTAINER&quot;,
      &quot;quantity&quot;: 100
    },
    &quot;expectedDelivery&quot;: {
      &quot;true&quot;: &quot;2025-02-04&quot;,
      &quot;timeslot&quot;: {
        &quot;from&quot;: 36000,
        &quot;to&quot;: 43200
      }
    },
    &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;,
    &quot;lines&quot;: [
      {
        &quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;quantity&quot;: 5
      }
    ]
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;deliverySupplierDetails&quot;: {
        &quot;supplier&quot;: &quot;MyParcel&quot;,
        &quot;reference&quot;: &quot;#555&quot;
    },
    &quot;deliveryType&quot;: {
        &quot;type&quot;: &quot;CONTAINER&quot;,
        &quot;quantity&quot;: 100
    },
    &quot;expectedDelivery&quot;: {
        &quot;true&quot;: &quot;2025-02-04&quot;,
        &quot;timeslot&quot;: {
            &quot;from&quot;: 36000,
            &quot;to&quot;: 43200
        }
    },
    &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;,
    &quot;lines&quot;: [
        {
            &quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
            &quot;quantity&quot;: 5
        }
    ]
}

response = requests.post(&quot;https://purchase-order.api.myparcel.nl/create&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/create&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;deliverySupplierDetails\&quot;: {\&quot;supplier\&quot;: \&quot;MyParcel\&quot;, \&quot;reference\&quot;: \&quot;#555\&quot;}, \&quot;deliveryType\&quot;: {\&quot;type\&quot;: \&quot;CONTAINER\&quot;, \&quot;quantity\&quot;: 100}, \&quot;expectedDelivery\&quot;: {\&quot;true\&quot;: \&quot;2025-02-04\&quot;, \&quot;timeslot\&quot;: {\&quot;from\&quot;: 36000, \&quot;to\&quot;: 43200}}, \&quot;fulfilmentPlatform\&quot;: \&quot;VASCO\&quot;, \&quot;lines\&quot;: [{\&quot;productId\&quot;: \&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;quantity\&quot;: 5}]}&quot;

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
	payload := []byte(`{&quot;deliverySupplierDetails&quot;: {&quot;supplier&quot;: &quot;MyParcel&quot;, &quot;reference&quot;: &quot;#555&quot;}, &quot;deliveryType&quot;: {&quot;type&quot;: &quot;CONTAINER&quot;, &quot;quantity&quot;: 100}, &quot;expectedDelivery&quot;: {&quot;true&quot;: &quot;2025-02-04&quot;, &quot;timeslot&quot;: {&quot;from&quot;: 36000, &quot;to&quot;: 43200}}, &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;, &quot;lines&quot;: [{&quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;quantity&quot;: 5}]}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://purchase-order.api.myparcel.nl/create&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/create&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;deliverySupplierDetails\&quot;: {\&quot;supplier\&quot;: \&quot;MyParcel\&quot;, \&quot;reference\&quot;: \&quot;#555\&quot;}, \&quot;deliveryType\&quot;: {\&quot;type\&quot;: \&quot;CONTAINER\&quot;, \&quot;quantity\&quot;: 100}, \&quot;expectedDelivery\&quot;: {\&quot;true\&quot;: \&quot;2025-02-04\&quot;, \&quot;timeslot\&quot;: {\&quot;from\&quot;: 36000, \&quot;to\&quot;: 43200}}, \&quot;fulfilmentPlatform\&quot;: \&quot;VASCO\&quot;, \&quot;lines\&quot;: [{\&quot;productId\&quot;: \&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;quantity\&quot;: 5}]}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://purchase-order.api.myparcel.nl/create&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;deliverySupplierDetails&quot;&quot;: {&quot;&quot;supplier&quot;&quot;: &quot;&quot;MyParcel&quot;&quot;, &quot;&quot;reference&quot;&quot;: &quot;&quot;#555&quot;&quot;}, &quot;&quot;deliveryType&quot;&quot;: {&quot;&quot;type&quot;&quot;: &quot;&quot;CONTAINER&quot;&quot;, &quot;&quot;quantity&quot;&quot;: 100}, &quot;&quot;expectedDelivery&quot;&quot;: {&quot;&quot;true&quot;&quot;: &quot;&quot;2025-02-04&quot;&quot;, &quot;&quot;timeslot&quot;&quot;: {&quot;&quot;from&quot;&quot;: 36000, &quot;&quot;to&quot;&quot;: 43200}}, &quot;&quot;fulfilmentPlatform&quot;&quot;: &quot;&quot;VASCO&quot;&quot;, &quot;&quot;lines&quot;&quot;: [{&quot;&quot;productId&quot;&quot;: &quot;&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;&quot;, &quot;&quot;quantity&quot;&quot;: 5}]}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">201</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;createdAt&quot;: &quot;2024-02-04T00:00:00.123000+00:00&quot;,
  &quot;deliveryType&quot;: {
    &quot;type&quot;: &quot;CONTAINER&quot;,
    &quot;quantity&quot;: 100
  },
  &quot;expectedDelivery&quot;: {
    &quot;true&quot;: &quot;2025-02-26&quot;,
    &quot;timeslot&quot;: {
      &quot;from&quot;: &quot;08:00:00&quot;,
      &quot;to&quot;: 36000
    }
  },
  &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;,
  &quot;lines&quot;: [
    {
      &quot;product&quot;: {
        &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;name&quot;: &quot;Product 1&quot;,
        &quot;ean&quot;: &quot;1234567890123&quot;,
        &quot;sku&quot;: &quot;SKU123&quot;
      },
      &quot;quantity&quot;: 5
    }
  ],
  &quot;status&quot;: &quot;CONCEPT&quot;
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">PURCHASE ORDERS</div>
        <article class="mp-endpoint" id="get-purchase-orders">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/purchase-orders</span>
            <span class="mp-endpoint__summary">Query and/or filter purchase orders.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Get purchase orders.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">aggregation</span></td><td><span class="mp-params__type">array</span></td><td class="mp-params__desc">Fields to summarize data for based on the filters and query.</td></tr>
                <tr><td><span class="mp-params__name">filter</span></td><td><span class="mp-params__type">object</span></td><td class="mp-params__desc"></td></tr>
                <tr><td><span class="mp-params__name">limit</span></td><td><span class="mp-params__type">integer</span></td><td class="mp-params__desc">The maximum number of purchase orders to retrieve.</td></tr>
                <tr><td><span class="mp-params__name">pageToken</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">The page token to retrieve the next page of purchase orders.</td></tr>
                <tr><td><span class="mp-params__name">query</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">The following operators are supported:
&#x27;+ signifies AND operation&#x27;
&#x27;| signifies OR operation&#x27;
&#x27;- negates a single token&#x27;
&#x27;&quot; wraps a number of tokens to signify a phrase for searching&#x27;
&#x27;* at the end of a term signifies a prefix query&#x27;
&#x27;( and ) signify precedence&#x27;
&#x27;~N after a word signifies edit distance (fuzziness)&#x27;
&#x27;~N after a phrase signifies slop amount&#x27;
To use one of these characters literally, escape it with a preceding backslash (\).</td></tr>
                <tr><td><span class="mp-params__name">sort</span></td><td><span class="mp-params__type">object</span></td><td class="mp-params__desc">When no `query` is provided the default sort is by `createdAt` descending. When a `query` is provided the default sort is by relevance.</td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The listed purchase orders.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /purchase-orders</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value&quot;);
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
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value&quot;, {
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
    &quot;aggregation&quot;: &quot;value&quot;
}

response = requests.get(&quot;https://purchase-order.api.myparcel.nl/purchase-orders&quot;, params=params, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value&#x27;)
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
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value&quot;, nil)
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://purchase-order.api.myparcel.nl/purchase-orders?aggregation=value&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;results&quot;: [],
  &quot;total&quot;: {
    &quot;relation&quot;: &quot;eq&quot;,
    &quot;value&quot;: 1
  }
}</code></pre>
            </div>
          </div>
        </article>
        <article class="mp-endpoint" id="get-purchase-orders-purchaseorderid-packing-slip">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/purchase-orders/{purchaseOrderId}/packing-slip</span>
            <span class="mp-endpoint__summary">Download a packing slip.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Download the packing slip of a purchase order. The status of the purchase order must be <code>REGISTERED</code>.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">purchaseOrderId</span> <small style="color:var(--mp-text-faint);font-size:10px">(path)</small><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">The ID of the purchase order.</td></tr>
                <tr><td><span class="mp-params__name">firstName</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">First name on the packing slip.</td></tr>
                <tr><td><span class="mp-params__name">lastName</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">Last name on the packing slip.</td></tr>
                <tr><td><span class="mp-params__name">Accept</span> <small style="color:var(--mp-text-faint);font-size:10px">(header)</small><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc"><br><small>Values: <code>application/pdf</code></small></td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The packing slip PDF.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                <tr><td><span class="mp-params__name">404</span></td><td class="mp-params__desc">Not found.</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /purchase-orders/{purchaseOrderId}/packing-slip</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string&quot;);
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
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string&quot;, {
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
    &quot;firstName&quot;: &quot;string&quot;
}

response = requests.get(&quot;https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip&quot;, params=params, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string&#x27;)
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
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string&quot;, nil)
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://purchase-order.api.myparcel.nl/purchase-orders/00000000-0000-0000-0000-000000000000/packing-slip?firstName=string&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">&quot;string&quot;</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">REMOVE</div>
        <article class="mp-endpoint" id="post-remove">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/remove</span>
            <span class="mp-endpoint__summary">Remove purchase order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Remove a purchase order.  The status of the purchase order must be <code>CONCEPT</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">204</span></td><td class="mp-params__desc">Purchase order is removed.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /remove</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://purchase-order.api.myparcel.nl/remove&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;ids&quot;: [
    &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
    &quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;
  ]
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/remove&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;ids&quot;: [&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;]}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/remove&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;ids&quot;: [
      &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
      &quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;
    ]
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;ids&quot;: [
        &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;
    ]
}

response = requests.post(&quot;https://purchase-order.api.myparcel.nl/remove&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/remove&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;ids\&quot;: [\&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;a3aacbcc-b6c1-48d5-a9e1-179425737966\&quot;]}&quot;

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
	payload := []byte(`{&quot;ids&quot;: [&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;]}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://purchase-order.api.myparcel.nl/remove&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/remove&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;ids\&quot;: [\&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;a3aacbcc-b6c1-48d5-a9e1-179425737966\&quot;]}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://purchase-order.api.myparcel.nl/remove&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;ids&quot;&quot;: [&quot;&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;&quot;, &quot;&quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;&quot;]}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">REMOVE LINES</div>
        <article class="mp-endpoint" id="post-remove-lines">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/remove-lines</span>
            <span class="mp-endpoint__summary">Remove lines from a purchase order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Remove lines from a purchase order. The status of the purchase order must be <code>CONCEPT</code>, <code>REGISTERED</code> or <code>REGISTRATION_REQUESTED</code>. When the status is <code>REGISTERED</code> or <code>REGISTRATION_REQUESTED</code> at least one line must remain.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Purchase order with lines removed.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /remove-lines</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://purchase-order.api.myparcel.nl/remove-lines&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;productIds&quot;: [
    &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;
  ]
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/remove-lines&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;productIds&quot;: [&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;]}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/remove-lines&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;productIds&quot;: [
      &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;
    ]
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;productIds&quot;: [
        &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;
    ]
}

response = requests.post(&quot;https://purchase-order.api.myparcel.nl/remove-lines&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/remove-lines&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;productIds\&quot;: [\&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;]}&quot;

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
	payload := []byte(`{&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;productIds&quot;: [&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;]}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://purchase-order.api.myparcel.nl/remove-lines&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/remove-lines&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;productIds\&quot;: [\&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;]}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://purchase-order.api.myparcel.nl/remove-lines&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;id&quot;&quot;: &quot;&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;&quot;, &quot;&quot;productIds&quot;&quot;: [&quot;&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;&quot;]}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;createdAt&quot;: &quot;2024-02-04T00:00:00.123000+00:00&quot;,
  &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">SET DELIVERY SUPPLIER DETAILS</div>
        <article class="mp-endpoint" id="post-set-delivery-supplier-details">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/set-delivery-supplier-details</span>
            <span class="mp-endpoint__summary">Set delivery supplier details of a purchase order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Set the delivery supplier details for a purchase order. The status of the purchase order must be <code>CONCEPT</code>, <code>REGISTERED</code> or <code>REGISTRATION_REQUESTED</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Purchase order with delivery supplier details set.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /set-delivery-supplier-details</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://purchase-order.api.myparcel.nl/set-delivery-supplier-details&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;supplier&quot;: &quot;MyParcel&quot;,
  &quot;reference&quot;: &quot;#555&quot;
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/set-delivery-supplier-details&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;supplier&quot;: &quot;MyParcel&quot;, &quot;reference&quot;: &quot;#555&quot;}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/set-delivery-supplier-details&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;supplier&quot;: &quot;MyParcel&quot;,
    &quot;reference&quot;: &quot;#555&quot;
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;supplier&quot;: &quot;MyParcel&quot;,
    &quot;reference&quot;: &quot;#555&quot;
}

response = requests.post(&quot;https://purchase-order.api.myparcel.nl/set-delivery-supplier-details&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/set-delivery-supplier-details&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;supplier\&quot;: \&quot;MyParcel\&quot;, \&quot;reference\&quot;: \&quot;#555\&quot;}&quot;

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
	payload := []byte(`{&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;supplier&quot;: &quot;MyParcel&quot;, &quot;reference&quot;: &quot;#555&quot;}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://purchase-order.api.myparcel.nl/set-delivery-supplier-details&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/set-delivery-supplier-details&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;supplier\&quot;: \&quot;MyParcel\&quot;, \&quot;reference\&quot;: \&quot;#555\&quot;}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://purchase-order.api.myparcel.nl/set-delivery-supplier-details&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;id&quot;&quot;: &quot;&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;&quot;, &quot;&quot;supplier&quot;&quot;: &quot;&quot;MyParcel&quot;&quot;, &quot;&quot;reference&quot;&quot;: &quot;&quot;#555&quot;&quot;}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;createdAt&quot;: &quot;2024-02-04T00:00:00.123000+00:00&quot;,
  &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;,
  &quot;lines&quot;: [
    {
      &quot;product&quot;: {
        &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;name&quot;: &quot;Product 1&quot;,
        &quot;ean&quot;: &quot;1234567890123&quot;,
        &quot;sku&quot;: &quot;SKU123&quot;
      },
      &quot;quantity&quot;: 5
    }
  ],
  &quot;expectedDelivery&quot;: {
    &quot;true&quot;: &quot;2025-02-04&quot;,
    &quot;timeslot&quot;: {
      &quot;from&quot;: 36000,
      &quot;to&quot;: 43200
    }
  },
  &quot;deliverySupplierDetails&quot;: {
    &quot;supplier&quot;: &quot;MyParcel&quot;,
    &quot;reference&quot;: &quot;#555&quot;
  },
  &quot;deliveryType&quot;: {
    &quot;type&quot;: &quot;CONTAINER&quot;,
    &quot;quantity&quot;: 100
  }
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">SET DELIVERY TYPE</div>
        <article class="mp-endpoint" id="post-set-delivery-type">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/set-delivery-type</span>
            <span class="mp-endpoint__summary">Set delivery type of a purchase order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Set the delivery type of a purchase order. The status of the purchase order must be <code>CONCEPT</code>, <code>REGISTERED</code> or <code>REGISTRATION_REQUESTED</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Purchase order with delivery type set.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /set-delivery-type</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://purchase-order.api.myparcel.nl/set-delivery-type&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;type&quot;: &quot;CONTAINER&quot;,
  &quot;quantity&quot;: 100
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/set-delivery-type&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;type&quot;: &quot;CONTAINER&quot;, &quot;quantity&quot;: 100}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/set-delivery-type&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;type&quot;: &quot;CONTAINER&quot;,
    &quot;quantity&quot;: 100
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;type&quot;: &quot;CONTAINER&quot;,
    &quot;quantity&quot;: 100
}

response = requests.post(&quot;https://purchase-order.api.myparcel.nl/set-delivery-type&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/set-delivery-type&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;type\&quot;: \&quot;CONTAINER\&quot;, \&quot;quantity\&quot;: 100}&quot;

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
	payload := []byte(`{&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;type&quot;: &quot;CONTAINER&quot;, &quot;quantity&quot;: 100}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://purchase-order.api.myparcel.nl/set-delivery-type&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/set-delivery-type&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;type\&quot;: \&quot;CONTAINER\&quot;, \&quot;quantity\&quot;: 100}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://purchase-order.api.myparcel.nl/set-delivery-type&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;id&quot;&quot;: &quot;&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;&quot;, &quot;&quot;type&quot;&quot;: &quot;&quot;CONTAINER&quot;&quot;, &quot;&quot;quantity&quot;&quot;: 100}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;createdAt&quot;: &quot;2024-02-04T00:00:00.123000+00:00&quot;,
  &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;,
  &quot;lines&quot;: [
    {
      &quot;product&quot;: {
        &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;name&quot;: &quot;Product 1&quot;,
        &quot;ean&quot;: &quot;1234567890123&quot;,
        &quot;sku&quot;: &quot;SKU123&quot;
      },
      &quot;quantity&quot;: 5
    }
  ],
  &quot;expectedDelivery&quot;: {
    &quot;true&quot;: &quot;2025-02-04&quot;,
    &quot;timeslot&quot;: {
      &quot;from&quot;: 36000,
      &quot;to&quot;: 43200
    }
  },
  &quot;deliverySupplierDetails&quot;: {
    &quot;supplier&quot;: &quot;MyParcel&quot;,
    &quot;reference&quot;: &quot;#555&quot;
  },
  &quot;deliveryType&quot;: {
    &quot;type&quot;: &quot;CONTAINER&quot;,
    &quot;quantity&quot;: 100
  }
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">SET EXPECTED DELIVERY</div>
        <article class="mp-endpoint" id="post-set-expected-delivery">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/set-expected-delivery</span>
            <span class="mp-endpoint__summary">Set expected delivery of a purchase order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Set the expected delivery of a purchase order. The status of the purchase order must be <code>CONCEPT</code>, <code>REGISTERED</code> or <code>REGISTRATION_REQUESTED</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Purchase order with expected delivery set.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /set-expected-delivery</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://purchase-order.api.myparcel.nl/set-expected-delivery&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;true&quot;: &quot;2025-02-04&quot;,
  &quot;timeslot&quot;: {
    &quot;from&quot;: 36000,
    &quot;to&quot;: 43200
  }
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/set-expected-delivery&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;true&quot;: &quot;2025-02-04&quot;, &quot;timeslot&quot;: {&quot;from&quot;: 36000, &quot;to&quot;: 43200}}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/set-expected-delivery&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;true&quot;: &quot;2025-02-04&quot;,
    &quot;timeslot&quot;: {
      &quot;from&quot;: 36000,
      &quot;to&quot;: 43200
    }
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;true&quot;: &quot;2025-02-04&quot;,
    &quot;timeslot&quot;: {
        &quot;from&quot;: 36000,
        &quot;to&quot;: 43200
    }
}

response = requests.post(&quot;https://purchase-order.api.myparcel.nl/set-expected-delivery&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/set-expected-delivery&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;true\&quot;: \&quot;2025-02-04\&quot;, \&quot;timeslot\&quot;: {\&quot;from\&quot;: 36000, \&quot;to\&quot;: 43200}}&quot;

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
	payload := []byte(`{&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;true&quot;: &quot;2025-02-04&quot;, &quot;timeslot&quot;: {&quot;from&quot;: 36000, &quot;to&quot;: 43200}}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://purchase-order.api.myparcel.nl/set-expected-delivery&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/set-expected-delivery&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;true\&quot;: \&quot;2025-02-04\&quot;, \&quot;timeslot\&quot;: {\&quot;from\&quot;: 36000, \&quot;to\&quot;: 43200}}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://purchase-order.api.myparcel.nl/set-expected-delivery&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;id&quot;&quot;: &quot;&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;&quot;, &quot;&quot;true&quot;&quot;: &quot;&quot;2025-02-04&quot;&quot;, &quot;&quot;timeslot&quot;&quot;: {&quot;&quot;from&quot;&quot;: 36000, &quot;&quot;to&quot;&quot;: 43200}}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;createdAt&quot;: &quot;2024-02-04T00:00:00.123000+00:00&quot;,
  &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;,
  &quot;lines&quot;: [
    {
      &quot;product&quot;: {
        &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;name&quot;: &quot;Product 1&quot;,
        &quot;ean&quot;: &quot;1234567890123&quot;,
        &quot;sku&quot;: &quot;SKU123&quot;
      },
      &quot;quantity&quot;: 5
    }
  ],
  &quot;expectedDelivery&quot;: {
    &quot;true&quot;: &quot;2025-02-04&quot;,
    &quot;timeslot&quot;: {
      &quot;from&quot;: 36000,
      &quot;to&quot;: 43200
    }
  },
  &quot;deliverySupplierDetails&quot;: {
    &quot;supplier&quot;: &quot;MyParcel&quot;,
    &quot;reference&quot;: &quot;#555&quot;
  },
  &quot;deliveryType&quot;: {
    &quot;type&quot;: &quot;CONTAINER&quot;,
    &quot;quantity&quot;: 100
  }
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">REGISTER</div>
        <article class="mp-endpoint" id="post-register">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/register</span>
            <span class="mp-endpoint__summary">Register a purchase order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Register one or multiple purchase orders. The status of the purchase order must be <code>CONCEPT</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">204</span></td><td class="mp-params__desc">Purchase orders are requested to register.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /register</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://purchase-order.api.myparcel.nl/register&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;ids&quot;: [
    &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;
  ]
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/register&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;ids&quot;: [&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;]}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/register&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;ids&quot;: [
      &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;
    ]
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;ids&quot;: [
        &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;
    ]
}

response = requests.post(&quot;https://purchase-order.api.myparcel.nl/register&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/register&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;ids\&quot;: [\&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;]}&quot;

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
	payload := []byte(`{&quot;ids&quot;: [&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;]}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://purchase-order.api.myparcel.nl/register&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/register&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;ids\&quot;: [\&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;]}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://purchase-order.api.myparcel.nl/register&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;ids&quot;&quot;: [&quot;&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;&quot;]}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">UPDATE LINE QUANTITY</div>
        <article class="mp-endpoint" id="post-update-line-quantity">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/update-line-quantity</span>
            <span class="mp-endpoint__summary">Update quantity of a purchase order line.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Update the quantity of a purchase order line. The status of the purchase order must be <code>CONCEPT</code>, <code>REGISTERED</code> or <code>REGISTRATION_REQUESTED</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Purchase order with quantity of order line updated.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /update-line-quantity</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://purchase-order.api.myparcel.nl/update-line-quantity&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
  &quot;quantity&quot;: 100
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://purchase-order.api.myparcel.nl/update-line-quantity&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;quantity&quot;: 100}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://purchase-order.api.myparcel.nl/update-line-quantity&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
    &quot;quantity&quot;: 100
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
    &quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
    &quot;quantity&quot;: 100
}

response = requests.post(&quot;https://purchase-order.api.myparcel.nl/update-line-quantity&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://purchase-order.api.myparcel.nl/update-line-quantity&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;productId\&quot;: \&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;quantity\&quot;: 100}&quot;

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
	payload := []byte(`{&quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;, &quot;productId&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;quantity&quot;: 100}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://purchase-order.api.myparcel.nl/update-line-quantity&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://purchase-order.api.myparcel.nl/update-line-quantity&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;id\&quot;: \&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe\&quot;, \&quot;productId\&quot;: \&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;quantity\&quot;: 100}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://purchase-order.api.myparcel.nl/update-line-quantity&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;id&quot;&quot;: &quot;&quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;&quot;, &quot;&quot;productId&quot;&quot;: &quot;&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;&quot;, &quot;&quot;quantity&quot;&quot;: 100}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;id&quot;: &quot;93cb8f97-8f08-4f40-960f-98c85c0b7cfe&quot;,
  &quot;createdAt&quot;: &quot;2024-02-04T00:00:00.123000+00:00&quot;,
  &quot;fulfilmentPlatform&quot;: &quot;VASCO&quot;,
  &quot;lines&quot;: [
    {
      &quot;product&quot;: {
        &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;name&quot;: &quot;Product 1&quot;,
        &quot;ean&quot;: &quot;1234567890123&quot;,
        &quot;sku&quot;: &quot;SKU123&quot;
      },
      &quot;quantity&quot;: 100
    }
  ]
}</code></pre>
            </div>
          </div>
        </article>
      </section>
  </div>
</template>
