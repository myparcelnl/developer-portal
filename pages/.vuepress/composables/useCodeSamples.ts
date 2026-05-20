import type { ParsedOperation } from './useOpenApi';

export type Lang = 'curl' | 'php' | 'js' | 'python' | 'ruby' | 'go' | 'java' | 'csharp';

export interface CodeSample {
  lang: Lang;
  label: string;
  highlight: string;
  source: string;
}

export const LANGS: Array<{ lang: Lang; label: string; highlight: string }> = [
  { lang: 'curl',   label: 'cURL',       highlight: 'bash' },
  { lang: 'php',    label: 'PHP',        highlight: 'php' },
  { lang: 'js',     label: 'JavaScript', highlight: 'javascript' },
  { lang: 'python', label: 'Python',     highlight: 'python' },
  { lang: 'ruby',   label: 'Ruby',       highlight: 'ruby' },
  { lang: 'go',     label: 'Go',         highlight: 'go' },
  { lang: 'java',   label: 'Java',       highlight: 'java' },
  { lang: 'csharp', label: 'C#',         highlight: 'csharp' },
];

function urlWithQuery(baseUrl: string, op: ParsedOperation): string {
  const queryParams = op.parameters.filter(p => p.in === 'query');
  const url = baseUrl.replace(/\/+$/, '') + op.path;
  if (queryParams.length === 0) return url;
  // Match existing template: include just the first query param with literal "value"
  return `${url}?${queryParams[0].name}=value`;
}

function jsonBody(body: any, indent = 2): string {
  if (body === undefined || body === null) return '';
  return JSON.stringify(body, null, indent);
}

function curl(op: ParsedOperation, baseUrl: string): string {
  const url = urlWithQuery(baseUrl, op);
  const hasBody = op.requestBodyExample !== undefined;
  const lines = [
    `curl -X ${op.methodUpper} '${url}' \\`,
    `  -H 'Authorization: bearer <token>' \\`,
    `  -H 'User-Agent: my-integration/1.0'${hasBody ? ' \\' : ''}`,
  ];
  if (hasBody) {
    lines.push(`  -H 'Content-Type: ${op.requestContentType ?? 'application/json'}' \\`);
    lines.push(`  -d '${jsonBody(op.requestBodyExample)}'`);
  }
  return lines.join('\n');
}

function php(op: ParsedOperation, baseUrl: string): string {
  const url = urlWithQuery(baseUrl, op);
  const hasBody = op.requestBodyExample !== undefined;
  const headers = [
    `'Authorization: bearer <token>'`,
    `'User-Agent: my-integration/1.0'`,
  ];
  if (hasBody) headers.push(`'Content-Type: ${op.requestContentType ?? 'application/json'}'`);
  const inline = JSON.stringify(op.requestBodyExample);
  const opts = [
    `    CURLOPT_RETURNTRANSFER => true,`,
    op.method === 'get' ? '' : `    CURLOPT_CUSTOMREQUEST  => '${op.methodUpper}',`,
    hasBody ? `    CURLOPT_POSTFIELDS     => json_encode(${inline}),` : '',
    `    CURLOPT_HTTPHEADER     => [\n        ${headers.join(',\n        ')},\n    ],`,
  ].filter(Boolean).join('\n');
  return `<?php
$ch = curl_init("${url}");
curl_setopt_array($ch, [
${opts}
]);

$response = json_decode(curl_exec($ch), true);`;
}

function js(op: ParsedOperation, baseUrl: string): string {
  const url = urlWithQuery(baseUrl, op);
  const hasBody = op.requestBodyExample !== undefined;
  const headers = [
    `    Authorization: 'bearer <token>',`,
    `    'User-Agent': 'my-integration/1.0',`,
  ];
  if (hasBody) headers.push(`    'Content-Type': '${op.requestContentType ?? 'application/json'}',`);
  const body = hasBody
    ? `,\n  body: JSON.stringify(${jsonBody(op.requestBodyExample)})`
    : '';
  return `const response = await fetch("${url}", {
  method: '${op.methodUpper}',
  headers: {
${headers.join('\n')}
  }${body},
});

const data = await response.json();`;
}

function python(op: ParsedOperation, baseUrl: string): string {
  const url = urlWithQuery(baseUrl, op);
  const hasBody = op.requestBodyExample !== undefined;
  const lower = op.method;
  if (hasBody) {
    return `import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

payload = ${jsonBody(op.requestBodyExample, 4)
      .replace(/^/gm, '')
      .replace(/^\{/, '{')
      .replace(/^\[/, '[')}

response = requests.${lower}("${url}", json=payload, headers=headers)

data = response.json()`;
  }
  return `import requests

headers = {"Authorization": "bearer <token>", "User-Agent": "my-integration/1.0"}

response = requests.${lower}("${url}", headers=headers)

data = response.json()`;
}

function ruby(op: ParsedOperation, baseUrl: string): string {
  const url = urlWithQuery(baseUrl, op);
  const hasBody = op.requestBodyExample !== undefined;
  const klass = op.method.charAt(0).toUpperCase() + op.method.slice(1);
  const inline = hasBody ? JSON.stringify(op.requestBodyExample).replace(/"/g, '\\"') : '';
  return `require 'net/http'
require 'json'
require 'uri'

uri = URI('${url}')
req = Net::HTTP::${klass}.new(uri)
req['Authorization'] = 'bearer <token>'
req['User-Agent'] = 'my-integration/1.0'${hasBody ? `
req['Content-Type'] = '${op.requestContentType ?? 'application/json'}'
req.body = "${inline}"` : ''}

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(req) }
data = JSON.parse(res.body)`;
}

function go(op: ParsedOperation, baseUrl: string): string {
  const url = urlWithQuery(baseUrl, op);
  const hasBody = op.requestBodyExample !== undefined;
  const inline = hasBody ? JSON.stringify(op.requestBodyExample) : '';
  const body = hasBody
    ? `\tpayload := []byte(\`${inline}\`)\n\treq, _ := http.NewRequest("${op.methodUpper}", "${url}", bytes.NewBuffer(payload))`
    : `\treq, _ := http.NewRequest("${op.methodUpper}", "${url}", nil)`;
  const ctHeader = hasBody
    ? `\treq.Header.Set("Content-Type", "${op.requestContentType ?? 'application/json'}")\n`
    : '';
  const imports = hasBody
    ? `\t"bytes"\n\t"fmt"\n\t"io"\n\t"net/http"`
    : `\t"fmt"\n\t"io"\n\t"net/http"`;
  return `package main

import (
${imports}
)

func main() {
${body}
${ctHeader}\treq.Header.Set("Authorization", "bearer <token>")
\treq.Header.Set("User-Agent", "my-integration/1.0")

\tres, _ := http.DefaultClient.Do(req)
\tdefer res.Body.Close()
\tbody, _ := io.ReadAll(res.Body)
\tfmt.Println(string(body))
}`;
}

function java(op: ParsedOperation, baseUrl: string): string {
  const url = urlWithQuery(baseUrl, op);
  const hasBody = op.requestBodyExample !== undefined;
  const inline = hasBody ? JSON.stringify(op.requestBodyExample).replace(/"/g, '\\"') : '';
  const verb = hasBody
    ? `.${op.method.toUpperCase() === 'POST' ? 'POST' : op.methodUpper === 'PUT' ? 'PUT' : 'method'}(${op.methodUpper === 'POST' || op.methodUpper === 'PUT' ? `HttpRequest.BodyPublishers.ofString("${inline}")` : `"${op.methodUpper}", HttpRequest.BodyPublishers.ofString("${inline}")`})`
    : `.${op.methodUpper === 'GET' ? 'GET' : 'method'}(${op.methodUpper === 'GET' ? '' : `"${op.methodUpper}", HttpRequest.BodyPublishers.noBody()`})`;
  const ctHeader = hasBody
    ? `\n            .header("Content-Type", "${op.requestContentType ?? 'application/json'}")`
    : '';
  return `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Example {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest req = HttpRequest.newBuilder()
            .uri(URI.create("${url}"))
            .header("Authorization", "bearer <token>")
            .header("User-Agent", "my-integration/1.0")${ctHeader}
            ${verb}
            .build();

        HttpResponse<String> res = client.send(req, HttpResponse.BodyHandlers.ofString());
        System.out.println(res.body());
    }
}`;
}

function csharp(op: ParsedOperation, baseUrl: string): string {
  const url = urlWithQuery(baseUrl, op);
  const hasBody = op.requestBodyExample !== undefined;
  const inline = hasBody ? JSON.stringify(op.requestBodyExample).replace(/"/g, '""') : '';
  const httpMethod = `HttpMethod.${op.method.charAt(0).toUpperCase()}${op.method.slice(1)}`;
  const content = hasBody
    ? `\nreq.Content = new StringContent(@"${inline}", Encoding.UTF8, "${op.requestContentType ?? 'application/json'}");`
    : '';
  const imports = hasBody
    ? `using System.Net.Http;\nusing System.Text;`
    : `using System.Net.Http;`;
  return `${imports}

var client = new HttpClient();
var req = new HttpRequestMessage(${httpMethod}, "${url}");
req.Headers.Add("Authorization", "bearer <token>");
req.Headers.Add("User-Agent", "my-integration/1.0");${content}

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();`;
}

const GENERATORS: Record<Lang, (op: ParsedOperation, baseUrl: string) => string> = {
  curl, php, js, python, ruby, go, java, csharp,
};

export function buildCodeSamples(op: ParsedOperation, baseUrl: string): CodeSample[] {
  return LANGS.map(({ lang, label, highlight }) => ({
    lang,
    label,
    highlight,
    source: GENERATORS[lang](op, baseUrl),
  }));
}
