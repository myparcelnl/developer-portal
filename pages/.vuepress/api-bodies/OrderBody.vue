<template>
  <div>
<section class="mp-ref-section">
        <div class="mp-ref-section__head">
          <h2 class="mp-ref-section__title" id="endpoints">Endpoints</h2>
          <p class="mp-ref-section__sub">Auto-generated from <code>order.api.myparcel.nl/openapi.yaml</code>. Click an endpoint to see its parameters and code samples.</p>
        </div>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">ADD NOTE</div>
        <article class="mp-endpoint" id="post-add-note">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/add-note</span>
            <span class="mp-endpoint__summary">Add a note to an order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Add an order note. Only possible if the order has <code>status=OPEN</code> and the maximum number of 100 notes is not reached.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The request is successfully accepted.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /add-note</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://order.api.myparcel.nl/add-note&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[
  {
    &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;text&quot;: &quot;string&quot;
  }
]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/add-note&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;text&quot;: &quot;string&quot;}]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/add-note&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([
    {
      &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
      &quot;text&quot;: &quot;string&quot;
    }
  ]),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = [
    {
        &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
        &quot;text&quot;: &quot;string&quot;
    }
]

response = requests.post(&quot;https://order.api.myparcel.nl/add-note&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/add-note&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;text\&quot;: \&quot;string\&quot;}]&quot;

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
	payload := []byte(`[{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;text&quot;: &quot;string&quot;}]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://order.api.myparcel.nl/add-note&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/add-note&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;text\&quot;: \&quot;string\&quot;}]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://order.api.myparcel.nl/add-note&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[{&quot;&quot;id&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;text&quot;&quot;: &quot;&quot;string&quot;&quot;}]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">[]</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">ASSIGN TO USER</div>
        <article class="mp-endpoint" id="post-assign-to-user">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/assign-to-user</span>
            <span class="mp-endpoint__summary">Assign orders to an user. Only possible if the order has `status=OPEN`.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Assign orders to an user. Only possible if the order has <code>status=OPEN</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The request is successfully accepted.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /assign-to-user</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://order.api.myparcel.nl/assign-to-user&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[
  {
    &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;userId&quot;: &quot;string&quot;
  }
]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/assign-to-user&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;userId&quot;: &quot;string&quot;}]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/assign-to-user&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([
    {
      &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
      &quot;userId&quot;: &quot;string&quot;
    }
  ]),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = [
    {
        &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
        &quot;userId&quot;: &quot;string&quot;
    }
]

response = requests.post(&quot;https://order.api.myparcel.nl/assign-to-user&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/assign-to-user&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;userId\&quot;: \&quot;string\&quot;}]&quot;

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
	payload := []byte(`[{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;userId&quot;: &quot;string&quot;}]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://order.api.myparcel.nl/assign-to-user&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/assign-to-user&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;userId\&quot;: \&quot;string\&quot;}]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://order.api.myparcel.nl/assign-to-user&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[{&quot;&quot;id&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;userId&quot;&quot;: &quot;&quot;string&quot;&quot;}]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">[]</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">CANCEL</div>
        <article class="mp-endpoint" id="post-cancel">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/cancel</span>
            <span class="mp-endpoint__summary">Cancel orders.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Cancel orders. Only possible if the order has <code>status=OPEN</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The request is successfully accepted.</td></tr>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://order.api.myparcel.nl/cancel&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[
  {
    &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
  }
]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/cancel&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;}]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/cancel&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([
    {
      &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
    }
  ]),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = [
    {
        &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
    }
]

response = requests.post(&quot;https://order.api.myparcel.nl/cancel&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/cancel&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;}]&quot;

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
	payload := []byte(`[{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;}]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://order.api.myparcel.nl/cancel&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/cancel&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;}]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://order.api.myparcel.nl/cancel&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[{&quot;&quot;id&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;}]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">[]</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">CREATE FROM SHIPPABLE PACKAGES</div>
        <article class="mp-endpoint" id="post-create-from-shippable-packages">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/create-from-shippable-packages</span>
            <span class="mp-endpoint__summary">Create an order from shippable packages.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Create an order with packages that contain shipment properties.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The request is successfully accepted.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /create-from-shippable-packages</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://order.api.myparcel.nl/create-from-shippable-packages&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/create-from-shippable-packages&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/create-from-shippable-packages&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([]),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = []

response = requests.post(&quot;https://order.api.myparcel.nl/create-from-shippable-packages&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/create-from-shippable-packages&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[]&quot;

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
	payload := []byte(`[]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://order.api.myparcel.nl/create-from-shippable-packages&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/create-from-shippable-packages&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://order.api.myparcel.nl/create-from-shippable-packages&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">[]</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">ADD PACKAGES</div>
        <article class="mp-endpoint" id="post-add-packages">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/add-packages</span>
            <span class="mp-endpoint__summary">Add packages to orders</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Add packages to orders</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The request is successfully accepted.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /add-packages</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://order.api.myparcel.nl/add-packages&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[
  {
    &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;packages&quot;: [
      {
        &quot;lines&quot;: [
          {
            &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
            &quot;quantity&quot;: 1
          }
        ],
        &quot;physicalProperties&quot;: null
      }
    ]
  }
]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/add-packages&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;packages&quot;: [{&quot;lines&quot;: [{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;quantity&quot;: 1}], &quot;physicalProperties&quot;: null}]}]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/add-packages&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([
    {
      &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
      &quot;packages&quot;: [
        {
          &quot;lines&quot;: [
            {
              &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
              &quot;quantity&quot;: 1
            }
          ],
          &quot;physicalProperties&quot;: null
        }
      ]
    }
  ]),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = [
    {
        &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
        &quot;packages&quot;: [
            {
                &quot;lines&quot;: [
                    {
                        &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
                        &quot;quantity&quot;: 1
                    }
                ],
                &quot;physicalProperties&quot;: null
            }
        ]
    }
]

response = requests.post(&quot;https://order.api.myparcel.nl/add-packages&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/add-packages&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;packages\&quot;: [{\&quot;lines\&quot;: [{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;quantity\&quot;: 1}], \&quot;physicalProperties\&quot;: null}]}]&quot;

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
	payload := []byte(`[{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;packages&quot;: [{&quot;lines&quot;: [{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;quantity&quot;: 1}], &quot;physicalProperties&quot;: null}]}]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://order.api.myparcel.nl/add-packages&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/add-packages&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;packages\&quot;: [{\&quot;lines\&quot;: [{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;quantity\&quot;: 1}], \&quot;physicalProperties\&quot;: null}]}]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://order.api.myparcel.nl/add-packages&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[{&quot;&quot;id&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;packages&quot;&quot;: [{&quot;&quot;lines&quot;&quot;: [{&quot;&quot;id&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;quantity&quot;&quot;: 1}], &quot;&quot;physicalProperties&quot;&quot;: null}]}]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">[]</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">PREPARE PACKAGES FOR SHIPMENT</div>
        <article class="mp-endpoint" id="post-prepare-packages-for-shipment">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/prepare-packages-for-shipment</span>
            <span class="mp-endpoint__summary">Prepares packages for shipment</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Prepares packages for shipment</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The request is successfully accepted.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /prepare-packages-for-shipment</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://order.api.myparcel.nl/prepare-packages-for-shipment&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/prepare-packages-for-shipment&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/prepare-packages-for-shipment&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([]),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = []

response = requests.post(&quot;https://order.api.myparcel.nl/prepare-packages-for-shipment&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/prepare-packages-for-shipment&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[]&quot;

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
	payload := []byte(`[]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://order.api.myparcel.nl/prepare-packages-for-shipment&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/prepare-packages-for-shipment&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://order.api.myparcel.nl/prepare-packages-for-shipment&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">[]</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">UNPREPARE PACKAGES FOR SHIPMENT</div>
        <article class="mp-endpoint" id="post-unprepare-packages-for-shipment">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/unprepare-packages-for-shipment</span>
            <span class="mp-endpoint__summary">Unprepares packages for shipment</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Unprepares packages for shipment. Only possible if the order has <code>status=OPEN</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The request is successfully accepted.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /unprepare-packages-for-shipment</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://order.api.myparcel.nl/unprepare-packages-for-shipment&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[
  {
    &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;packageIds&quot;: [
      &quot;00000000-0000-0000-0000-000000000000&quot;
    ]
  }
]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/unprepare-packages-for-shipment&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;packageIds&quot;: [&quot;00000000-0000-0000-0000-000000000000&quot;]}]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/unprepare-packages-for-shipment&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([
    {
      &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
      &quot;packageIds&quot;: [
        &quot;00000000-0000-0000-0000-000000000000&quot;
      ]
    }
  ]),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = [
    {
        &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
        &quot;packageIds&quot;: [
            &quot;00000000-0000-0000-0000-000000000000&quot;
        ]
    }
]

response = requests.post(&quot;https://order.api.myparcel.nl/unprepare-packages-for-shipment&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/unprepare-packages-for-shipment&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;packageIds\&quot;: [\&quot;00000000-0000-0000-0000-000000000000\&quot;]}]&quot;

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
	payload := []byte(`[{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;packageIds&quot;: [&quot;00000000-0000-0000-0000-000000000000&quot;]}]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://order.api.myparcel.nl/unprepare-packages-for-shipment&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/unprepare-packages-for-shipment&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;packageIds\&quot;: [\&quot;00000000-0000-0000-0000-000000000000\&quot;]}]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://order.api.myparcel.nl/unprepare-packages-for-shipment&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[{&quot;&quot;id&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;packageIds&quot;&quot;: [&quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;]}]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">[]</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">EDIT NOTE</div>
        <article class="mp-endpoint" id="post-edit-note">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/edit-note</span>
            <span class="mp-endpoint__summary">Edit a note of an order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Edit order note. Only possible if the order has <code>status=OPEN</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The request is successfully accepted.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /edit-note</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://order.api.myparcel.nl/edit-note&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[
  {
    &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;noteId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;text&quot;: &quot;string&quot;
  }
]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/edit-note&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;noteId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;text&quot;: &quot;string&quot;}]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/edit-note&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([
    {
      &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
      &quot;noteId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
      &quot;text&quot;: &quot;string&quot;
    }
  ]),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = [
    {
        &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
        &quot;noteId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
        &quot;text&quot;: &quot;string&quot;
    }
]

response = requests.post(&quot;https://order.api.myparcel.nl/edit-note&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/edit-note&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;noteId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;text\&quot;: \&quot;string\&quot;}]&quot;

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
	payload := []byte(`[{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;noteId&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;text&quot;: &quot;string&quot;}]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://order.api.myparcel.nl/edit-note&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/edit-note&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;noteId\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;text\&quot;: \&quot;string\&quot;}]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://order.api.myparcel.nl/edit-note&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[{&quot;&quot;id&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;noteId&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;text&quot;&quot;: &quot;&quot;string&quot;&quot;}]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">[]</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">IMPORT</div>
        <article class="mp-endpoint" id="post-import">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/import</span>
            <span class="mp-endpoint__summary">Import an order after it is discovered from a sales channel.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Import a discovered order. Only possible if the order has <code>status=DISCOVERED</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The request is successfully accepted.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /import</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://order.api.myparcel.nl/import&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[
  {
    &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
  }
]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/import&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;}]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/import&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([
    {
      &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
    }
  ]),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = [
    {
        &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
    }
]

response = requests.post(&quot;https://order.api.myparcel.nl/import&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/import&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;}]&quot;

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
	payload := []byte(`[{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;}]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://order.api.myparcel.nl/import&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/import&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;}]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://order.api.myparcel.nl/import&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[{&quot;&quot;id&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;}]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">[]</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">ORDERS</div>
        <article class="mp-endpoint" id="get-orders">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/orders</span>
            <span class="mp-endpoint__summary">Query and/or filter orders.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Get orders.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">aggregation</span></td><td><span class="mp-params__type">array</span></td><td class="mp-params__desc">Fields to summarize data for based on the query.</td></tr>
                <tr><td><span class="mp-params__name">filter</span></td><td><span class="mp-params__type">object</span></td><td class="mp-params__desc"></td></tr>
                <tr><td><span class="mp-params__name">limit</span></td><td><span class="mp-params__type">integer</span></td><td class="mp-params__desc">The maximum number of orders to retrieve.</td></tr>
                <tr><td><span class="mp-params__name">pageToken</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">The page token to retrieve the next page of orders.</td></tr>
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
                <tr><td><span class="mp-params__name">sort</span></td><td><span class="mp-params__type">object</span></td><td class="mp-params__desc">When no `query` is provided the default sort is by `orderedAt` descending. When a `query` is provided the default sort is by relevance.</td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The found orders.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /orders</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://order.api.myparcel.nl/orders?aggregation=value&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/orders?aggregation=value&quot;);
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
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/orders?aggregation=value&quot;, {
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

response = requests.get(&quot;https://order.api.myparcel.nl/orders&quot;, params=params, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/orders?aggregation=value&#x27;)
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
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://order.api.myparcel.nl/orders?aggregation=value&quot;, nil)
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/orders?aggregation=value&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://order.api.myparcel.nl/orders?aggregation=value&quot;);
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
      &quot;orderedAt&quot;: null,
      &quot;price&quot;: {
        &quot;currency&quot;: &quot;string&quot;,
        &quot;fractional&quot;: 1,
        &quot;integral&quot;: 1
      },
      &quot;shopId&quot;: &quot;string&quot;,
      &quot;status&quot;: &quot;CANCELED&quot;
    }
  ],
  &quot;total&quot;: {
    &quot;relation&quot;: &quot;eq&quot;,
    &quot;value&quot;: 1
  }
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">PACKING SLIPS</div>
        <article class="mp-endpoint" id="get-packing-slips">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/packing-slips</span>
            <span class="mp-endpoint__summary">Generate packing slips for 1 or more orders.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Get packing slips for one or more orders. When packageId is provided, exactly one orderId must be supplied and the packageIds must belong to that order.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">shipmentLabelsLayout</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">How shipment labels are included alongside the packing slips in the resulting PDF. `INTERLEAVED` outputs each packing slip immediately followed by its shipment label. When the parameter is omitted, no shipment labels are included and only packing slips are rendered.<br><small>Values: <code>INTERLEAVED</code></small></td></tr>
                <tr><td><span class="mp-params__name">orderId</span><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">array</span></td><td class="mp-params__desc">The orderId of the order to include in the packing slips. A maximum of 50 orders can be included in the request. When packageId is provided, exactly one orderId is allowed.</td></tr>
                <tr><td><span class="mp-params__name">packageId</span></td><td><span class="mp-params__type">array</span></td><td class="mp-params__desc">The packageId of the package to include in the packing slips. The packageIds must belong to the single orderId in the request and a maximum of 20 packageIds can be included.</td></tr>
                <tr><td><span class="mp-params__name">Accept</span> <small style="color:var(--mp-text-faint);font-size:10px">(header)</small><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc"><br><small>Values: <code>application/pdf</code></small></td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Packing slips PDF.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /packing-slips</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://order.api.myparcel.nl/packing-slips?orderId=value&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/packing-slips?orderId=value&quot;);
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
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/packing-slips?orderId=value&quot;, {
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
    &quot;orderId&quot;: &quot;value&quot;
}

response = requests.get(&quot;https://order.api.myparcel.nl/packing-slips&quot;, params=params, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/packing-slips?orderId=value&#x27;)
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
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://order.api.myparcel.nl/packing-slips?orderId=value&quot;, nil)
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/packing-slips?orderId=value&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://order.api.myparcel.nl/packing-slips?orderId=value&quot;);
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

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">PICKLIST</div>
        <article class="mp-endpoint" id="get-picklist">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/picklist</span>
            <span class="mp-endpoint__summary">Generate a picklist for 1 or more orders.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Get picklist.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">orderId</span><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">array</span></td><td class="mp-params__desc">The orderId of the order to include in the picklist. A maximum of 50 orders can be included in the request.</td></tr>
                <tr><td><span class="mp-params__name">Accept</span> <small style="color:var(--mp-text-faint);font-size:10px">(header)</small><span class="mp-params__required">REQUIRED</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc"><br><small>Values: <code>application/pdf</code></small></td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">Picklist PDF.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /picklist</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://order.api.myparcel.nl/picklist?orderId=value&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/picklist?orderId=value&quot;);
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
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/picklist?orderId=value&quot;, {
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
    &quot;orderId&quot;: &quot;value&quot;
}

response = requests.get(&quot;https://order.api.myparcel.nl/picklist&quot;, params=params, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/picklist?orderId=value&#x27;)
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
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://order.api.myparcel.nl/picklist?orderId=value&quot;, nil)
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/picklist?orderId=value&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://order.api.myparcel.nl/picklist?orderId=value&quot;);
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

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">REMOVE NOTES</div>
        <article class="mp-endpoint" id="post-remove-notes">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/remove-notes</span>
            <span class="mp-endpoint__summary">Remove notes from an order.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Remove order notes. Only possible if the order has <code>status=OPEN</code>.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The request is successfully accepted.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /remove-notes</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://order.api.myparcel.nl/remove-notes&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[
  {
    &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
    &quot;noteIds&quot;: [
      &quot;00000000-0000-0000-0000-000000000000&quot;
    ]
  }
]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/remove-notes&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;noteIds&quot;: [&quot;00000000-0000-0000-0000-000000000000&quot;]}]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/remove-notes&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([
    {
      &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
      &quot;noteIds&quot;: [
        &quot;00000000-0000-0000-0000-000000000000&quot;
      ]
    }
  ]),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = [
    {
        &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
        &quot;noteIds&quot;: [
            &quot;00000000-0000-0000-0000-000000000000&quot;
        ]
    }
]

response = requests.post(&quot;https://order.api.myparcel.nl/remove-notes&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/remove-notes&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;noteIds\&quot;: [\&quot;00000000-0000-0000-0000-000000000000\&quot;]}]&quot;

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
	payload := []byte(`[{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;, &quot;noteIds&quot;: [&quot;00000000-0000-0000-0000-000000000000&quot;]}]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://order.api.myparcel.nl/remove-notes&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/remove-notes&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;, \&quot;noteIds\&quot;: [\&quot;00000000-0000-0000-0000-000000000000\&quot;]}]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://order.api.myparcel.nl/remove-notes&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[{&quot;&quot;id&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;, &quot;&quot;noteIds&quot;&quot;: [&quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;]}]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">[]</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">UNASSIGN FROM USER</div>
        <article class="mp-endpoint" id="post-unassign-from-user">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/unassign-from-user</span>
            <span class="mp-endpoint__summary">Unassign orders from an user. Only possible if the order has `status=OPEN`</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Unassign orders from an user. Only possible if the order has <code>status=OPEN</code></p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The request is successfully accepted.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /unassign-from-user</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://order.api.myparcel.nl/unassign-from-user&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[
  {
    &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
  }
]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://order.api.myparcel.nl/unassign-from-user&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;}]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://order.api.myparcel.nl/unassign-from-user&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([
    {
      &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
    }
  ]),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = [
    {
        &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
    }
]

response = requests.post(&quot;https://order.api.myparcel.nl/unassign-from-user&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://order.api.myparcel.nl/unassign-from-user&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;}]&quot;

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
	payload := []byte(`[{&quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;}]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://order.api.myparcel.nl/unassign-from-user&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://order.api.myparcel.nl/unassign-from-user&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[{\&quot;id\&quot;: \&quot;00000000-0000-0000-0000-000000000000\&quot;}]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://order.api.myparcel.nl/unassign-from-user&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[{&quot;&quot;id&quot;&quot;: &quot;&quot;00000000-0000-0000-0000-000000000000&quot;&quot;}]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">[]</code></pre>
            </div>
          </div>
        </article>
      </section>
  </div>
</template>
