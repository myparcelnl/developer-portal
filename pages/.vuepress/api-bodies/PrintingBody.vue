<template>
  <div>
<section class="mp-ref-section">
        <div class="mp-ref-section__head">
          <h2 class="mp-ref-section__title" id="endpoints">Endpoints</h2>
          <p class="mp-ref-section__sub">Auto-generated from <code>printing.api.myparcel.nl/openapi.yaml</code>. Click an endpoint to see its parameters and code samples.</p>
        </div>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">PRINTER GROUPS</div>
        <article class="mp-endpoint" id="get-printer-groups">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/printer-groups</span>
            <span class="mp-endpoint__summary">Get the list accessible printer groups</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Get the list accessible printer groups.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">List of accessible printer groups</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /printer-groups</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://printing.api.myparcel.nl/printer-groups&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://printing.api.myparcel.nl/printer-groups&quot;);
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
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://printing.api.myparcel.nl/printer-groups&quot;, {
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

response = requests.get(&quot;https://printing.api.myparcel.nl/printer-groups&quot;, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://printing.api.myparcel.nl/printer-groups&#x27;)
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
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://printing.api.myparcel.nl/printer-groups&quot;, nil)
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
            .uri(URI.create(&quot;https://printing.api.myparcel.nl/printer-groups&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://printing.api.myparcel.nl/printer-groups&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;results&quot;: [
    {
      &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
      &quot;name&quot;: &quot;string&quot;,
      &quot;shopIds&quot;: [
        &quot;string&quot;
      ]
    }
  ]
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">PRINTERS</div>
        <article class="mp-endpoint" id="get-printers">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/printers</span>
            <span class="mp-endpoint__summary">Get the list of available printers</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Get the list of available printers.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">List of printers</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /printers</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://printing.api.myparcel.nl/printers&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://printing.api.myparcel.nl/printers&quot;);
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
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://printing.api.myparcel.nl/printers&quot;, {
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

response = requests.get(&quot;https://printing.api.myparcel.nl/printers&quot;, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://printing.api.myparcel.nl/printers&#x27;)
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
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://printing.api.myparcel.nl/printers&quot;, nil)
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
            .uri(URI.create(&quot;https://printing.api.myparcel.nl/printers&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://printing.api.myparcel.nl/printers&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;results&quot;: [
    {
      &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
      &quot;name&quot;: &quot;string&quot;,
      &quot;formats&quot;: [
        &quot;A4&quot;
      ]
    }
  ]
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">STATUS</div>
        <article class="mp-endpoint" id="get-status">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/status</span>
            <span class="mp-endpoint__summary">Get the direct printing account status</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Get the direct printing account status.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Account status</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /status</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://printing.api.myparcel.nl/status&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://printing.api.myparcel.nl/status&quot;);
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
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://printing.api.myparcel.nl/status&quot;, {
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

response = requests.get(&quot;https://printing.api.myparcel.nl/status&quot;, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://printing.api.myparcel.nl/status&#x27;)
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
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://printing.api.myparcel.nl/status&quot;, nil)
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
            .uri(URI.create(&quot;https://printing.api.myparcel.nl/status&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://printing.api.myparcel.nl/status&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;status&quot;: &quot;INITIALIZATION_REQUIRED&quot;
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">ALLOW SHOPS ACCESS TO PRINTER GROUP</div>
        <article class="mp-endpoint" id="post-allow-shops-access-to-printer-group">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/allow-shops-access-to-printer-group</span>
            <span class="mp-endpoint__summary">Allows shop IDs to access a printer group</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Allows shop IDs to access a printer group.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">204</span></td><td class="mp-params__desc">The shop IDs have access to the printer group.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /allow-shops-access-to-printer-group</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://printing.api.myparcel.nl/allow-shops-access-to-printer-group&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
  &quot;shopIds&quot;: [
    &quot;string&quot;
  ]
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://printing.api.myparcel.nl/allow-shops-access-to-printer-group&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;shopIds&quot;: [&quot;string&quot;]}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://printing.api.myparcel.nl/allow-shops-access-to-printer-group&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;shopIds&quot;: [
      &quot;string&quot;
    ]
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;shopIds&quot;: [
        &quot;string&quot;
    ]
}

response = requests.post(&quot;https://printing.api.myparcel.nl/allow-shops-access-to-printer-group&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://printing.api.myparcel.nl/allow-shops-access-to-printer-group&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;printerGroupId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;shopIds\&quot;: [\&quot;string\&quot;]}&quot;

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
	payload := []byte(`{&quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;shopIds&quot;: [&quot;string&quot;]}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://printing.api.myparcel.nl/allow-shops-access-to-printer-group&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://printing.api.myparcel.nl/allow-shops-access-to-printer-group&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;printerGroupId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;shopIds\&quot;: [\&quot;string\&quot;]}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://printing.api.myparcel.nl/allow-shops-access-to-printer-group&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;printerGroupId&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;shopIds&quot;&quot;: [&quot;&quot;string&quot;&quot;]}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">ASSIGN PRINTER TO GROUP</div>
        <article class="mp-endpoint" id="post-assign-printer-to-group">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/assign-printer-to-group</span>
            <span class="mp-endpoint__summary">Assign a printer to a printer group</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Assigns a printer to a printer group.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">204</span></td><td class="mp-params__desc">The printer has been assigned.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /assign-printer-to-group</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://printing.api.myparcel.nl/assign-printer-to-group&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
  &quot;printerId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
  &quot;format&quot;: &quot;A4&quot;
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://printing.api.myparcel.nl/assign-printer-to-group&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;printerId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;format&quot;: &quot;A4&quot;}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://printing.api.myparcel.nl/assign-printer-to-group&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;printerId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;format&quot;: &quot;A4&quot;
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;printerId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;format&quot;: &quot;A4&quot;
}

response = requests.post(&quot;https://printing.api.myparcel.nl/assign-printer-to-group&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://printing.api.myparcel.nl/assign-printer-to-group&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;printerGroupId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;printerId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;format\&quot;: \&quot;A4\&quot;}&quot;

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
	payload := []byte(`{&quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;printerId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;format&quot;: &quot;A4&quot;}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://printing.api.myparcel.nl/assign-printer-to-group&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://printing.api.myparcel.nl/assign-printer-to-group&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;printerGroupId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;printerId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;format\&quot;: \&quot;A4\&quot;}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://printing.api.myparcel.nl/assign-printer-to-group&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;printerGroupId&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;printerId&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;format&quot;&quot;: &quot;&quot;A4&quot;&quot;}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">CREATE PRINTER GROUP</div>
        <article class="mp-endpoint" id="post-create-printer-group">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/create-printer-group</span>
            <span class="mp-endpoint__summary">Create printer group</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Creates a new printer group.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">201</span></td><td class="mp-params__desc">The created printer group.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /create-printer-group</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://printing.api.myparcel.nl/create-printer-group&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;name&quot;: &quot;string&quot;,
  &quot;shopIds&quot;: [
    &quot;string&quot;
  ]
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://printing.api.myparcel.nl/create-printer-group&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;name&quot;: &quot;string&quot;, &quot;shopIds&quot;: [&quot;string&quot;]}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://printing.api.myparcel.nl/create-printer-group&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;name&quot;: &quot;string&quot;,
    &quot;shopIds&quot;: [
      &quot;string&quot;
    ]
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;name&quot;: &quot;string&quot;,
    &quot;shopIds&quot;: [
        &quot;string&quot;
    ]
}

response = requests.post(&quot;https://printing.api.myparcel.nl/create-printer-group&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://printing.api.myparcel.nl/create-printer-group&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;name\&quot;: \&quot;string\&quot;, \&quot;shopIds\&quot;: [\&quot;string\&quot;]}&quot;

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
	payload := []byte(`{&quot;name&quot;: &quot;string&quot;, &quot;shopIds&quot;: [&quot;string&quot;]}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://printing.api.myparcel.nl/create-printer-group&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://printing.api.myparcel.nl/create-printer-group&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;name\&quot;: \&quot;string\&quot;, \&quot;shopIds\&quot;: [\&quot;string\&quot;]}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://printing.api.myparcel.nl/create-printer-group&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;name&quot;&quot;: &quot;&quot;string&quot;&quot;, &quot;&quot;shopIds&quot;&quot;: [&quot;&quot;string&quot;&quot;]}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">201</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
  &quot;createdAt&quot;: &quot;2026-04-20T10:00:00Z&quot;,
  &quot;name&quot;: &quot;string&quot;,
  &quot;shopIds&quot;: [
    &quot;string&quot;
  ]
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">ENABLE DIRECT PRINTING</div>
        <article class="mp-endpoint" id="post-enable-direct-printing">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/enable-direct-printing</span>
            <span class="mp-endpoint__summary">Enable direct printing</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Asynchronously enables the account for direct printing.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The account has been enabled.</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /enable-direct-printing</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://printing.api.myparcel.nl/enable-direct-printing&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://printing.api.myparcel.nl/enable-direct-printing&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://printing.api.myparcel.nl/enable-direct-printing&quot;, {
  method: &#x27;POST&#x27;,
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

response = requests.post(&quot;https://printing.api.myparcel.nl/enable-direct-printing&quot;, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://printing.api.myparcel.nl/enable-direct-printing&#x27;)
req = Net::HTTP::Post.new(uri)
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
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://printing.api.myparcel.nl/enable-direct-printing&quot;, nil)
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
            .uri(URI.create(&quot;https://printing.api.myparcel.nl/enable-direct-printing&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://printing.api.myparcel.nl/enable-direct-printing&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;credentials&quot;: {
    &quot;email&quot;: &quot;example@myparcel.nl&quot;,
    &quot;password&quot;: &quot;string&quot;
  }
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">REMOVE PRINTER GROUP</div>
        <article class="mp-endpoint" id="post-remove-printer-group">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/remove-printer-group</span>
            <span class="mp-endpoint__summary">Remove printer group</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Removes a printer group.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">204</span></td><td class="mp-params__desc">The printer group has been removed.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /remove-printer-group</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://printing.api.myparcel.nl/remove-printer-group&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://printing.api.myparcel.nl/remove-printer-group&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://printing.api.myparcel.nl/remove-printer-group&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
}

response = requests.post(&quot;https://printing.api.myparcel.nl/remove-printer-group&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://printing.api.myparcel.nl/remove-printer-group&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;printerGroupId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;}&quot;

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
	payload := []byte(`{&quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://printing.api.myparcel.nl/remove-printer-group&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://printing.api.myparcel.nl/remove-printer-group&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;printerGroupId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://printing.api.myparcel.nl/remove-printer-group&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;printerGroupId&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">RENAME PRINTER GROUP</div>
        <article class="mp-endpoint" id="post-rename-printer-group">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/rename-printer-group</span>
            <span class="mp-endpoint__summary">Rename printer group</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Renames a printer group.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Rename successful</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /rename-printer-group</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://printing.api.myparcel.nl/rename-printer-group&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
  &quot;name&quot;: &quot;string&quot;
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://printing.api.myparcel.nl/rename-printer-group&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;name&quot;: &quot;string&quot;}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://printing.api.myparcel.nl/rename-printer-group&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;name&quot;: &quot;string&quot;
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;name&quot;: &quot;string&quot;
}

response = requests.post(&quot;https://printing.api.myparcel.nl/rename-printer-group&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://printing.api.myparcel.nl/rename-printer-group&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;printerGroupId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;name\&quot;: \&quot;string\&quot;}&quot;

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
	payload := []byte(`{&quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;name&quot;: &quot;string&quot;}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://printing.api.myparcel.nl/rename-printer-group&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://printing.api.myparcel.nl/rename-printer-group&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;printerGroupId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;name\&quot;: \&quot;string\&quot;}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://printing.api.myparcel.nl/rename-printer-group&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;printerGroupId&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;name&quot;&quot;: &quot;&quot;string&quot;&quot;}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
  &quot;name&quot;: &quot;string&quot;
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">SYNC PRINTERS</div>
        <article class="mp-endpoint" id="post-sync-printers">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/sync-printers</span>
            <span class="mp-endpoint__summary">Synchronize printers</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Asynchronously synchronizes the available printer list.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The available printer list has been synchronized</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /sync-printers</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://printing.api.myparcel.nl/sync-printers&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://printing.api.myparcel.nl/sync-printers&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://printing.api.myparcel.nl/sync-printers&quot;, {
  method: &#x27;POST&#x27;,
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

response = requests.post(&quot;https://printing.api.myparcel.nl/sync-printers&quot;, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://printing.api.myparcel.nl/sync-printers&#x27;)
req = Net::HTTP::Post.new(uri)
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
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://printing.api.myparcel.nl/sync-printers&quot;, nil)
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
            .uri(URI.create(&quot;https://printing.api.myparcel.nl/sync-printers&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://printing.api.myparcel.nl/sync-printers&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">UNASSIGN PRINTER FROM GROUP</div>
        <article class="mp-endpoint" id="post-unassign-printer-from-group">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/unassign-printer-from-group</span>
            <span class="mp-endpoint__summary">Unassign a printer from a printer group</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Unassigns a printer from a printer group.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">204</span></td><td class="mp-params__desc">The printer has been unassigned.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /unassign-printer-from-group</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://printing.api.myparcel.nl/unassign-printer-from-group&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
  &quot;format&quot;: &quot;A4&quot;
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://printing.api.myparcel.nl/unassign-printer-from-group&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;format&quot;: &quot;A4&quot;}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://printing.api.myparcel.nl/unassign-printer-from-group&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;format&quot;: &quot;A4&quot;
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;format&quot;: &quot;A4&quot;
}

response = requests.post(&quot;https://printing.api.myparcel.nl/unassign-printer-from-group&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://printing.api.myparcel.nl/unassign-printer-from-group&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;printerGroupId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;format\&quot;: \&quot;A4\&quot;}&quot;

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
	payload := []byte(`{&quot;printerGroupId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;format&quot;: &quot;A4&quot;}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://printing.api.myparcel.nl/unassign-printer-from-group&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://printing.api.myparcel.nl/unassign-printer-from-group&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;printerGroupId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;format\&quot;: \&quot;A4\&quot;}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://printing.api.myparcel.nl/unassign-printer-from-group&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;printerGroupId&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;format&quot;&quot;: &quot;&quot;A4&quot;&quot;}&quot;, Encoding.UTF8, &quot;application/json&quot;);

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
