<template>
  <div>
<section class="mp-ref-section">
        <div class="mp-ref-section__head">
          <h2 class="mp-ref-section__title" id="endpoints">Endpoints</h2>
          <p class="mp-ref-section__sub">Auto-generated from <code>product.api.myparcel.nl/openapi.yaml</code>. Click an endpoint to see its parameters and code samples.</p>
        </div>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">CREATE PRODUCT</div>
        <article class="mp-endpoint" id="post-create-product">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/create-product</span>
            <span class="mp-endpoint__summary">Create a product.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Create a product.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">product is created.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /create-product</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://product.api.myparcel.nl/create-product&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[
  {
    &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
    &quot;name&quot;: &quot;test-name&quot;,
    &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
    &quot;status&quot;: &quot;ACTIVE&quot;,
    &quot;trackInventory&quot;: true,
    &quot;barcode&quot;: &quot;12345678&quot;,
    &quot;containsDangerousSubstances&quot;: true,
    &quot;countryCodeOfOrigin&quot;: &quot;NL&quot;,
    &quot;descriptions&quot;: [
      {
        &quot;text&quot;: &quot;Description&quot;,
        &quot;languageCode&quot;: &quot;en&quot;
      }
    ],
    &quot;dimensions&quot;: {
      &quot;height&quot;: {
        &quot;value&quot;: 100,
        &quot;unit&quot;: &quot;cm&quot;
      },
      &quot;length&quot;: {
        &quot;value&quot;: 100,
        &quot;unit&quot;: &quot;cm&quot;
      },
      &quot;weight&quot;: {
        &quot;value&quot;: 1000,
        &quot;unit&quot;: &quot;gr&quot;
      },
      &quot;width&quot;: {
        &quot;value&quot;: 100,
        &quot;unit&quot;: &quot;cm&quot;
      }
    },
    &quot;ean&quot;: &quot;12345678&quot;,
    &quot;hasUnlimitedShelfLife&quot;: true,
    &quot;hsCode&quot;: &quot;123456&quot;,
    &quot;purchasePrice&quot;: {
      &quot;currency&quot;: &quot;EUR&quot;,
      &quot;integral&quot;: 10,
      &quot;fractional&quot;: 99
    },
    &quot;salesPrice&quot;: {
      &quot;currency&quot;: &quot;EUR&quot;,
      &quot;integral&quot;: 10,
      &quot;fractional&quot;: 99,
      &quot;taxRate&quot;: 21
    },
    &quot;sku&quot;: &quot;sku&quot;,
    &quot;children&quot;: [
      {
        &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;quantity&quot;: 2
      }
    ],
    &quot;fulfilmentPlatforms&quot;: [
      &quot;VASCO&quot;
    ],
    &quot;salesChannels&quot;: [
      {
        &quot;sourceId&quot;: &quot;sales-channel-shopify-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-shopify-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;shopify&quot;,
        &quot;inventoryLocationId&quot;: &quot;test-location-id&quot;,
        &quot;inventoryItemId&quot;: &quot;test-inventory-item-id&quot;
      },
      {
        &quot;sourceId&quot;: &quot;sales-channel-bol-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-bol-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;bol&quot;
      },
      {
        &quot;sourceId&quot;: &quot;sales-channel-woocommerce-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-woocommerce-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;woocommerce&quot;
      },
      {
        &quot;sourceId&quot;: &quot;sales-channel-lightspeed-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-lightspeed-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;lightspeed&quot;
      },
      {
        &quot;sourceId&quot;: &quot;sales-channel-magento-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-magento-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;magento&quot;
      },
      {
        &quot;sourceId&quot;: &quot;sales-channel-presta-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-presta-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;presta&quot;
      }
    ],
    &quot;shopIds&quot;: [
      &quot;test-shop-id&quot;
    ],
    &quot;stock&quot;: {
      &quot;VASCO&quot;: {
        &quot;free&quot;: 15,
        &quot;value&quot;: 20
      }
    },
    &quot;updatedAt&quot;: &quot;2024-11-13T19:20:34+00:00&quot;
  },
  {
    &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
    &quot;name&quot;: &quot;test-name&quot;,
    &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
    &quot;status&quot;: &quot;ACTIVE&quot;,
    &quot;trackInventory&quot;: true
  }
]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://product.api.myparcel.nl/create-product&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([{&quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;, &quot;name&quot;: &quot;test-name&quot;, &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;, &quot;status&quot;: &quot;ACTIVE&quot;, &quot;trackInventory&quot;: true, &quot;barcode&quot;: &quot;12345678&quot;, &quot;containsDangerousSubstances&quot;: true, &quot;countryCodeOfOrigin&quot;: &quot;NL&quot;, &quot;descriptions&quot;: [{&quot;text&quot;: &quot;Description&quot;, &quot;languageCode&quot;: &quot;en&quot;}], &quot;dimensions&quot;: {&quot;height&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}, &quot;length&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}, &quot;weight&quot;: {&quot;value&quot;: 1000, &quot;unit&quot;: &quot;gr&quot;}, &quot;width&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}}, &quot;ean&quot;: &quot;12345678&quot;, &quot;hasUnlimitedShelfLife&quot;: true, &quot;hsCode&quot;: &quot;123456&quot;, &quot;purchasePrice&quot;: {&quot;currency&quot;: &quot;EUR&quot;, &quot;integral&quot;: 10, &quot;fractional&quot;: 99}, &quot;salesPrice&quot;: {&quot;currency&quot;: &quot;EUR&quot;, &quot;integral&quot;: 10, &quot;fractional&quot;: 99, &quot;taxRate&quot;: 21}, &quot;sku&quot;: &quot;sku&quot;, &quot;children&quot;: [{&quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;quantity&quot;: 2}], &quot;fulfilmentPlatforms&quot;: [&quot;VASCO&quot;], &quot;salesChannels&quot;: [{&quot;sourceId&quot;: &quot;sales-channel-shopify-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-shopify-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;shopify&quot;, &quot;inventoryLocationId&quot;: &quot;test-location-id&quot;, &quot;inventoryItemId&quot;: &quot;test-inventory-item-id&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-bol-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-bol-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;bol&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-woocommerce-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-woocommerce-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;woocommerce&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-lightspeed-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-lightspeed-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;lightspeed&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-magento-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-magento-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;magento&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-presta-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-presta-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;presta&quot;}], &quot;shopIds&quot;: [&quot;test-shop-id&quot;], &quot;stock&quot;: {&quot;VASCO&quot;: {&quot;free&quot;: 15, &quot;value&quot;: 20}}, &quot;updatedAt&quot;: &quot;2024-11-13T19:20:34+00:00&quot;}, {&quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;, &quot;name&quot;: &quot;test-name&quot;, &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;, &quot;status&quot;: &quot;ACTIVE&quot;, &quot;trackInventory&quot;: true}]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://product.api.myparcel.nl/create-product&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([
    {
      &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
      &quot;name&quot;: &quot;test-name&quot;,
      &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
      &quot;status&quot;: &quot;ACTIVE&quot;,
      &quot;trackInventory&quot;: true,
      &quot;barcode&quot;: &quot;12345678&quot;,
      &quot;containsDangerousSubstances&quot;: true,
      &quot;countryCodeOfOrigin&quot;: &quot;NL&quot;,
      &quot;descriptions&quot;: [
        {
          &quot;text&quot;: &quot;Description&quot;,
          &quot;languageCode&quot;: &quot;en&quot;
        }
      ],
      &quot;dimensions&quot;: {
        &quot;height&quot;: {
          &quot;value&quot;: 100,
          &quot;unit&quot;: &quot;cm&quot;
        },
        &quot;length&quot;: {
          &quot;value&quot;: 100,
          &quot;unit&quot;: &quot;cm&quot;
        },
        &quot;weight&quot;: {
          &quot;value&quot;: 1000,
          &quot;unit&quot;: &quot;gr&quot;
        },
        &quot;width&quot;: {
          &quot;value&quot;: 100,
          &quot;unit&quot;: &quot;cm&quot;
        }
      },
      &quot;ean&quot;: &quot;12345678&quot;,
      &quot;hasUnlimitedShelfLife&quot;: true,
      &quot;hsCode&quot;: &quot;123456&quot;,
      &quot;purchasePrice&quot;: {
        &quot;currency&quot;: &quot;EUR&quot;,
        &quot;integral&quot;: 10,
        &quot;fractional&quot;: 99
      },
      &quot;salesPrice&quot;: {
        &quot;currency&quot;: &quot;EUR&quot;,
        &quot;integral&quot;: 10,
        &quot;fractional&quot;: 99,
        &quot;taxRate&quot;: 21
      },
      &quot;sku&quot;: &quot;sku&quot;,
      &quot;children&quot;: [
        {
          &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
          &quot;quantity&quot;: 2
        }
      ],
      &quot;fulfilmentPlatforms&quot;: [
        &quot;VASCO&quot;
      ],
      &quot;salesChannels&quot;: [
        {
          &quot;sourceId&quot;: &quot;sales-channel-shopify-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-shopify-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;shopify&quot;,
          &quot;inventoryLocationId&quot;: &quot;test-location-id&quot;,
          &quot;inventoryItemId&quot;: &quot;test-inventory-item-id&quot;
        },
        {
          &quot;sourceId&quot;: &quot;sales-channel-bol-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-bol-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;bol&quot;
        },
        {
          &quot;sourceId&quot;: &quot;sales-channel-woocommerce-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-woocommerce-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;woocommerce&quot;
        },
        {
          &quot;sourceId&quot;: &quot;sales-channel-lightspeed-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-lightspeed-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;lightspeed&quot;
        },
        {
          &quot;sourceId&quot;: &quot;sales-channel-magento-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-magento-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;magento&quot;
        },
        {
          &quot;sourceId&quot;: &quot;sales-channel-presta-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-presta-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;presta&quot;
        }
      ],
      &quot;shopIds&quot;: [
        &quot;test-shop-id&quot;
      ],
      &quot;stock&quot;: {
        &quot;VASCO&quot;: {
          &quot;free&quot;: 15,
          &quot;value&quot;: 20
        }
      },
      &quot;updatedAt&quot;: &quot;2024-11-13T19:20:34+00:00&quot;
    },
    {
      &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
      &quot;name&quot;: &quot;test-name&quot;,
      &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
      &quot;status&quot;: &quot;ACTIVE&quot;,
      &quot;trackInventory&quot;: true
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
        &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
        &quot;name&quot;: &quot;test-name&quot;,
        &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
        &quot;status&quot;: &quot;ACTIVE&quot;,
        &quot;trackInventory&quot;: true,
        &quot;barcode&quot;: &quot;12345678&quot;,
        &quot;containsDangerousSubstances&quot;: true,
        &quot;countryCodeOfOrigin&quot;: &quot;NL&quot;,
        &quot;descriptions&quot;: [
            {
                &quot;text&quot;: &quot;Description&quot;,
                &quot;languageCode&quot;: &quot;en&quot;
            }
        ],
        &quot;dimensions&quot;: {
            &quot;height&quot;: {
                &quot;value&quot;: 100,
                &quot;unit&quot;: &quot;cm&quot;
            },
            &quot;length&quot;: {
                &quot;value&quot;: 100,
                &quot;unit&quot;: &quot;cm&quot;
            },
            &quot;weight&quot;: {
                &quot;value&quot;: 1000,
                &quot;unit&quot;: &quot;gr&quot;
            },
            &quot;width&quot;: {
                &quot;value&quot;: 100,
                &quot;unit&quot;: &quot;cm&quot;
            }
        },
        &quot;ean&quot;: &quot;12345678&quot;,
        &quot;hasUnlimitedShelfLife&quot;: true,
        &quot;hsCode&quot;: &quot;123456&quot;,
        &quot;purchasePrice&quot;: {
            &quot;currency&quot;: &quot;EUR&quot;,
            &quot;integral&quot;: 10,
            &quot;fractional&quot;: 99
        },
        &quot;salesPrice&quot;: {
            &quot;currency&quot;: &quot;EUR&quot;,
            &quot;integral&quot;: 10,
            &quot;fractional&quot;: 99,
            &quot;taxRate&quot;: 21
        },
        &quot;sku&quot;: &quot;sku&quot;,
        &quot;children&quot;: [
            {
                &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
                &quot;quantity&quot;: 2
            }
        ],
        &quot;fulfilmentPlatforms&quot;: [
            &quot;VASCO&quot;
        ],
        &quot;salesChannels&quot;: [
            {
                &quot;sourceId&quot;: &quot;sales-channel-shopify-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-shopify-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;shopify&quot;,
                &quot;inventoryLocationId&quot;: &quot;test-location-id&quot;,
                &quot;inventoryItemId&quot;: &quot;test-inventory-item-id&quot;
            },
            {
                &quot;sourceId&quot;: &quot;sales-channel-bol-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-bol-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;bol&quot;
            },
            {
                &quot;sourceId&quot;: &quot;sales-channel-woocommerce-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-woocommerce-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;woocommerce&quot;
            },
            {
                &quot;sourceId&quot;: &quot;sales-channel-lightspeed-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-lightspeed-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;lightspeed&quot;
            },
            {
                &quot;sourceId&quot;: &quot;sales-channel-magento-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-magento-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;magento&quot;
            },
            {
                &quot;sourceId&quot;: &quot;sales-channel-presta-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-presta-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;presta&quot;
            }
        ],
        &quot;shopIds&quot;: [
            &quot;test-shop-id&quot;
        ],
        &quot;stock&quot;: {
            &quot;VASCO&quot;: {
                &quot;free&quot;: 15,
                &quot;value&quot;: 20
            }
        },
        &quot;updatedAt&quot;: &quot;2024-11-13T19:20:34+00:00&quot;
    },
    {
        &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
        &quot;name&quot;: &quot;test-name&quot;,
        &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
        &quot;status&quot;: &quot;ACTIVE&quot;,
        &quot;trackInventory&quot;: true
    }
]

response = requests.post(&quot;https://product.api.myparcel.nl/create-product&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://product.api.myparcel.nl/create-product&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[{\&quot;id\&quot;: \&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a\&quot;, \&quot;name\&quot;: \&quot;test-name\&quot;, \&quot;createdAt\&quot;: \&quot;2024-11-13T19:20:33+00:00\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;, \&quot;trackInventory\&quot;: true, \&quot;barcode\&quot;: \&quot;12345678\&quot;, \&quot;containsDangerousSubstances\&quot;: true, \&quot;countryCodeOfOrigin\&quot;: \&quot;NL\&quot;, \&quot;descriptions\&quot;: [{\&quot;text\&quot;: \&quot;Description\&quot;, \&quot;languageCode\&quot;: \&quot;en\&quot;}], \&quot;dimensions\&quot;: {\&quot;height\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}, \&quot;length\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}, \&quot;weight\&quot;: {\&quot;value\&quot;: 1000, \&quot;unit\&quot;: \&quot;gr\&quot;}, \&quot;width\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}}, \&quot;ean\&quot;: \&quot;12345678\&quot;, \&quot;hasUnlimitedShelfLife\&quot;: true, \&quot;hsCode\&quot;: \&quot;123456\&quot;, \&quot;purchasePrice\&quot;: {\&quot;currency\&quot;: \&quot;EUR\&quot;, \&quot;integral\&quot;: 10, \&quot;fractional\&quot;: 99}, \&quot;salesPrice\&quot;: {\&quot;currency\&quot;: \&quot;EUR\&quot;, \&quot;integral\&quot;: 10, \&quot;fractional\&quot;: 99, \&quot;taxRate\&quot;: 21}, \&quot;sku\&quot;: \&quot;sku\&quot;, \&quot;children\&quot;: [{\&quot;id\&quot;: \&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;quantity\&quot;: 2}], \&quot;fulfilmentPlatforms\&quot;: [\&quot;VASCO\&quot;], \&quot;salesChannels\&quot;: [{\&quot;sourceId\&quot;: \&quot;sales-channel-shopify-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-shopify-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;shopify\&quot;, \&quot;inventoryLocationId\&quot;: \&quot;test-location-id\&quot;, \&quot;inventoryItemId\&quot;: \&quot;test-inventory-item-id\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-bol-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-bol-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;bol\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-woocommerce-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-woocommerce-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;woocommerce\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-lightspeed-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-lightspeed-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;lightspeed\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-magento-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-magento-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;magento\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-presta-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-presta-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;presta\&quot;}], \&quot;shopIds\&quot;: [\&quot;test-shop-id\&quot;], \&quot;stock\&quot;: {\&quot;VASCO\&quot;: {\&quot;free\&quot;: 15, \&quot;value\&quot;: 20}}, \&quot;updatedAt\&quot;: \&quot;2024-11-13T19:20:34+00:00\&quot;}, {\&quot;id\&quot;: \&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a\&quot;, \&quot;name\&quot;: \&quot;test-name\&quot;, \&quot;createdAt\&quot;: \&quot;2024-11-13T19:20:33+00:00\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;, \&quot;trackInventory\&quot;: true}]&quot;

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
	payload := []byte(`[{&quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;, &quot;name&quot;: &quot;test-name&quot;, &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;, &quot;status&quot;: &quot;ACTIVE&quot;, &quot;trackInventory&quot;: true, &quot;barcode&quot;: &quot;12345678&quot;, &quot;containsDangerousSubstances&quot;: true, &quot;countryCodeOfOrigin&quot;: &quot;NL&quot;, &quot;descriptions&quot;: [{&quot;text&quot;: &quot;Description&quot;, &quot;languageCode&quot;: &quot;en&quot;}], &quot;dimensions&quot;: {&quot;height&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}, &quot;length&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}, &quot;weight&quot;: {&quot;value&quot;: 1000, &quot;unit&quot;: &quot;gr&quot;}, &quot;width&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}}, &quot;ean&quot;: &quot;12345678&quot;, &quot;hasUnlimitedShelfLife&quot;: true, &quot;hsCode&quot;: &quot;123456&quot;, &quot;purchasePrice&quot;: {&quot;currency&quot;: &quot;EUR&quot;, &quot;integral&quot;: 10, &quot;fractional&quot;: 99}, &quot;salesPrice&quot;: {&quot;currency&quot;: &quot;EUR&quot;, &quot;integral&quot;: 10, &quot;fractional&quot;: 99, &quot;taxRate&quot;: 21}, &quot;sku&quot;: &quot;sku&quot;, &quot;children&quot;: [{&quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;quantity&quot;: 2}], &quot;fulfilmentPlatforms&quot;: [&quot;VASCO&quot;], &quot;salesChannels&quot;: [{&quot;sourceId&quot;: &quot;sales-channel-shopify-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-shopify-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;shopify&quot;, &quot;inventoryLocationId&quot;: &quot;test-location-id&quot;, &quot;inventoryItemId&quot;: &quot;test-inventory-item-id&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-bol-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-bol-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;bol&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-woocommerce-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-woocommerce-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;woocommerce&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-lightspeed-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-lightspeed-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;lightspeed&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-magento-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-magento-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;magento&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-presta-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-presta-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;presta&quot;}], &quot;shopIds&quot;: [&quot;test-shop-id&quot;], &quot;stock&quot;: {&quot;VASCO&quot;: {&quot;free&quot;: 15, &quot;value&quot;: 20}}, &quot;updatedAt&quot;: &quot;2024-11-13T19:20:34+00:00&quot;}, {&quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;, &quot;name&quot;: &quot;test-name&quot;, &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;, &quot;status&quot;: &quot;ACTIVE&quot;, &quot;trackInventory&quot;: true}]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://product.api.myparcel.nl/create-product&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://product.api.myparcel.nl/create-product&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[{\&quot;id\&quot;: \&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a\&quot;, \&quot;name\&quot;: \&quot;test-name\&quot;, \&quot;createdAt\&quot;: \&quot;2024-11-13T19:20:33+00:00\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;, \&quot;trackInventory\&quot;: true, \&quot;barcode\&quot;: \&quot;12345678\&quot;, \&quot;containsDangerousSubstances\&quot;: true, \&quot;countryCodeOfOrigin\&quot;: \&quot;NL\&quot;, \&quot;descriptions\&quot;: [{\&quot;text\&quot;: \&quot;Description\&quot;, \&quot;languageCode\&quot;: \&quot;en\&quot;}], \&quot;dimensions\&quot;: {\&quot;height\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}, \&quot;length\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}, \&quot;weight\&quot;: {\&quot;value\&quot;: 1000, \&quot;unit\&quot;: \&quot;gr\&quot;}, \&quot;width\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}}, \&quot;ean\&quot;: \&quot;12345678\&quot;, \&quot;hasUnlimitedShelfLife\&quot;: true, \&quot;hsCode\&quot;: \&quot;123456\&quot;, \&quot;purchasePrice\&quot;: {\&quot;currency\&quot;: \&quot;EUR\&quot;, \&quot;integral\&quot;: 10, \&quot;fractional\&quot;: 99}, \&quot;salesPrice\&quot;: {\&quot;currency\&quot;: \&quot;EUR\&quot;, \&quot;integral\&quot;: 10, \&quot;fractional\&quot;: 99, \&quot;taxRate\&quot;: 21}, \&quot;sku\&quot;: \&quot;sku\&quot;, \&quot;children\&quot;: [{\&quot;id\&quot;: \&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;quantity\&quot;: 2}], \&quot;fulfilmentPlatforms\&quot;: [\&quot;VASCO\&quot;], \&quot;salesChannels\&quot;: [{\&quot;sourceId\&quot;: \&quot;sales-channel-shopify-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-shopify-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;shopify\&quot;, \&quot;inventoryLocationId\&quot;: \&quot;test-location-id\&quot;, \&quot;inventoryItemId\&quot;: \&quot;test-inventory-item-id\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-bol-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-bol-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;bol\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-woocommerce-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-woocommerce-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;woocommerce\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-lightspeed-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-lightspeed-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;lightspeed\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-magento-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-magento-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;magento\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-presta-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-presta-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;presta\&quot;}], \&quot;shopIds\&quot;: [\&quot;test-shop-id\&quot;], \&quot;stock\&quot;: {\&quot;VASCO\&quot;: {\&quot;free\&quot;: 15, \&quot;value\&quot;: 20}}, \&quot;updatedAt\&quot;: \&quot;2024-11-13T19:20:34+00:00\&quot;}, {\&quot;id\&quot;: \&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a\&quot;, \&quot;name\&quot;: \&quot;test-name\&quot;, \&quot;createdAt\&quot;: \&quot;2024-11-13T19:20:33+00:00\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;, \&quot;trackInventory\&quot;: true}]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://product.api.myparcel.nl/create-product&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[{&quot;&quot;id&quot;&quot;: &quot;&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;&quot;, &quot;&quot;name&quot;&quot;: &quot;&quot;test-name&quot;&quot;, &quot;&quot;createdAt&quot;&quot;: &quot;&quot;2024-11-13T19:20:33+00:00&quot;&quot;, &quot;&quot;status&quot;&quot;: &quot;&quot;ACTIVE&quot;&quot;, &quot;&quot;trackInventory&quot;&quot;: true, &quot;&quot;barcode&quot;&quot;: &quot;&quot;12345678&quot;&quot;, &quot;&quot;containsDangerousSubstances&quot;&quot;: true, &quot;&quot;countryCodeOfOrigin&quot;&quot;: &quot;&quot;NL&quot;&quot;, &quot;&quot;descriptions&quot;&quot;: [{&quot;&quot;text&quot;&quot;: &quot;&quot;Description&quot;&quot;, &quot;&quot;languageCode&quot;&quot;: &quot;&quot;en&quot;&quot;}], &quot;&quot;dimensions&quot;&quot;: {&quot;&quot;height&quot;&quot;: {&quot;&quot;value&quot;&quot;: 100, &quot;&quot;unit&quot;&quot;: &quot;&quot;cm&quot;&quot;}, &quot;&quot;length&quot;&quot;: {&quot;&quot;value&quot;&quot;: 100, &quot;&quot;unit&quot;&quot;: &quot;&quot;cm&quot;&quot;}, &quot;&quot;weight&quot;&quot;: {&quot;&quot;value&quot;&quot;: 1000, &quot;&quot;unit&quot;&quot;: &quot;&quot;gr&quot;&quot;}, &quot;&quot;width&quot;&quot;: {&quot;&quot;value&quot;&quot;: 100, &quot;&quot;unit&quot;&quot;: &quot;&quot;cm&quot;&quot;}}, &quot;&quot;ean&quot;&quot;: &quot;&quot;12345678&quot;&quot;, &quot;&quot;hasUnlimitedShelfLife&quot;&quot;: true, &quot;&quot;hsCode&quot;&quot;: &quot;&quot;123456&quot;&quot;, &quot;&quot;purchasePrice&quot;&quot;: {&quot;&quot;currency&quot;&quot;: &quot;&quot;EUR&quot;&quot;, &quot;&quot;integral&quot;&quot;: 10, &quot;&quot;fractional&quot;&quot;: 99}, &quot;&quot;salesPrice&quot;&quot;: {&quot;&quot;currency&quot;&quot;: &quot;&quot;EUR&quot;&quot;, &quot;&quot;integral&quot;&quot;: 10, &quot;&quot;fractional&quot;&quot;: 99, &quot;&quot;taxRate&quot;&quot;: 21}, &quot;&quot;sku&quot;&quot;: &quot;&quot;sku&quot;&quot;, &quot;&quot;children&quot;&quot;: [{&quot;&quot;id&quot;&quot;: &quot;&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;&quot;, &quot;&quot;quantity&quot;&quot;: 2}], &quot;&quot;fulfilmentPlatforms&quot;&quot;: [&quot;&quot;VASCO&quot;&quot;], &quot;&quot;salesChannels&quot;&quot;: [{&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-shopify-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-shopify-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;shopify&quot;&quot;, &quot;&quot;inventoryLocationId&quot;&quot;: &quot;&quot;test-location-id&quot;&quot;, &quot;&quot;inventoryItemId&quot;&quot;: &quot;&quot;test-inventory-item-id&quot;&quot;}, {&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-bol-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-bol-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;bol&quot;&quot;}, {&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-woocommerce-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-woocommerce-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;woocommerce&quot;&quot;}, {&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-lightspeed-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-lightspeed-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;lightspeed&quot;&quot;}, {&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-magento-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-magento-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;magento&quot;&quot;}, {&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-presta-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-presta-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;presta&quot;&quot;}], &quot;&quot;shopIds&quot;&quot;: [&quot;&quot;test-shop-id&quot;&quot;], &quot;&quot;stock&quot;&quot;: {&quot;&quot;VASCO&quot;&quot;: {&quot;&quot;free&quot;&quot;: 15, &quot;&quot;value&quot;&quot;: 20}}, &quot;&quot;updatedAt&quot;&quot;: &quot;&quot;2024-11-13T19:20:34+00:00&quot;&quot;}, {&quot;&quot;id&quot;&quot;: &quot;&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;&quot;, &quot;&quot;name&quot;&quot;: &quot;&quot;test-name&quot;&quot;, &quot;&quot;createdAt&quot;&quot;: &quot;&quot;2024-11-13T19:20:33+00:00&quot;&quot;, &quot;&quot;status&quot;&quot;: &quot;&quot;ACTIVE&quot;&quot;, &quot;&quot;trackInventory&quot;&quot;: true}]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
  &quot;createdAt&quot;: &quot;2026-04-20T10:00:00Z&quot;,
  &quot;name&quot;: &quot;string&quot;,
  &quot;status&quot;: &quot;ACTIVE&quot;,
  &quot;trackInventory&quot;: true
}</code></pre>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">PRODUCTS</div>
        <article class="mp-endpoint" id="get-products">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--get mp-method--lg">GET</span>
            <span class="mp-endpoint__path">/products</span>
            <span class="mp-endpoint__summary">Query and/or filter products.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Get products.</p>
              <div class="mp-params-label">Parameters</div>
              <table class="mp-params">
                <thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">aggregation</span></td><td><span class="mp-params__type">array</span></td><td class="mp-params__desc">Fields to summarize data based on the query.</td></tr>
                <tr><td><span class="mp-params__name">filter</span></td><td><span class="mp-params__type">object</span></td><td class="mp-params__desc"></td></tr>
                <tr><td><span class="mp-params__name">limit</span></td><td><span class="mp-params__type">integer</span></td><td class="mp-params__desc">The maximum number of products to retrieve.</td></tr>
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
                <tr><td><span class="mp-params__name">pageToken</span></td><td><span class="mp-params__type">string</span></td><td class="mp-params__desc">The page token to retrieve the next page of orders.</td></tr>
                <tr><td><span class="mp-params__name">sort</span></td><td><span class="mp-params__type">object</span></td><td class="mp-params__desc">When no `query` is provided the default sort is by `name` ascending. When a `query` is provided the default sort is by relevance.</td></tr>
                </tbody>
              </table>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">The listed products.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">GET /products</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X GET &#x27;https://product.api.myparcel.nl/products?aggregation=value&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://product.api.myparcel.nl/products?aggregation=value&quot;);
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
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://product.api.myparcel.nl/products?aggregation=value&quot;, {
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

response = requests.get(&quot;https://product.api.myparcel.nl/products&quot;, params=params, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://product.api.myparcel.nl/products?aggregation=value&#x27;)
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
	req, _ := http.NewRequest(&quot;GET&quot;, &quot;https://product.api.myparcel.nl/products?aggregation=value&quot;, nil)
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
            .uri(URI.create(&quot;https://product.api.myparcel.nl/products?aggregation=value&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Get, &quot;https://product.api.myparcel.nl/products?aggregation=value&quot;);
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
      &quot;createdAt&quot;: &quot;2026-04-20T10:00:00Z&quot;,
      &quot;name&quot;: &quot;string&quot;,
      &quot;status&quot;: &quot;ACTIVE&quot;,
      &quot;trackInventory&quot;: true
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

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">MANAGE INVENTORY</div>
        <article class="mp-endpoint" id="post-manage-inventory">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/manage-inventory</span>
            <span class="mp-endpoint__summary">Manage inventory of a product.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Manage and unmanage the inventory of a product. This endpoint requires the new value of fulfilment platforms. Based on the input we will add and/or remove fulfilment platforms from the product.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">204</span></td><td class="mp-params__desc">inventory is (un)managed by provided fulfilment platform.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /manage-inventory</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://product.api.myparcel.nl/manage-inventory&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;{
  &quot;productIds&quot;: [
    &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
    &quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;
  ],
  &quot;fulfilmentPlatforms&quot;: [
    &quot;VASCO&quot;
  ]
}&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://product.api.myparcel.nl/manage-inventory&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode({&quot;productIds&quot;: [&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;], &quot;fulfilmentPlatforms&quot;: [&quot;VASCO&quot;]}),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://product.api.myparcel.nl/manage-inventory&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify({
    &quot;productIds&quot;: [
      &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
      &quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;
    ],
    &quot;fulfilmentPlatforms&quot;: [
      &quot;VASCO&quot;
    ]
  }),
});

const data = await response.json();</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="python" role="tabpanel">
<pre class="mp-code-block" data-lang="python"><code class="language-python">import requests

headers = {&quot;Authorization&quot;: &quot;bearer &lt;token&gt;&quot;, &quot;User-Agent&quot;: &quot;my-integration/1.0&quot;}

payload = {
    &quot;productIds&quot;: [
        &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;
    ],
    &quot;fulfilmentPlatforms&quot;: [
        &quot;VASCO&quot;
    ]
}

response = requests.post(&quot;https://product.api.myparcel.nl/manage-inventory&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://product.api.myparcel.nl/manage-inventory&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;{\&quot;productIds\&quot;: [\&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;a3aacbcc-b6c1-48d5-a9e1-179425737966\&quot;], \&quot;fulfilmentPlatforms\&quot;: [\&quot;VASCO\&quot;]}&quot;

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
	payload := []byte(`{&quot;productIds&quot;: [&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;], &quot;fulfilmentPlatforms&quot;: [&quot;VASCO&quot;]}`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://product.api.myparcel.nl/manage-inventory&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://product.api.myparcel.nl/manage-inventory&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;{\&quot;productIds\&quot;: [\&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;a3aacbcc-b6c1-48d5-a9e1-179425737966\&quot;], \&quot;fulfilmentPlatforms\&quot;: [\&quot;VASCO\&quot;]}&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://product.api.myparcel.nl/manage-inventory&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;{&quot;&quot;productIds&quot;&quot;: [&quot;&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;&quot;, &quot;&quot;a3aacbcc-b6c1-48d5-a9e1-179425737966&quot;&quot;], &quot;&quot;fulfilmentPlatforms&quot;&quot;: [&quot;&quot;VASCO&quot;&quot;]}&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div class="mp-section-label" style="margin-top:var(--mp-space-8);">UPDATE PRODUCT</div>
        <article class="mp-endpoint" id="post-update-product">
          <header class="mp-endpoint__header" data-toggle>
            <span class="mp-method mp-method--post mp-method--lg">POST</span>
            <span class="mp-endpoint__path">/update-product</span>
            <span class="mp-endpoint__summary">Update a product.</span>
            <svg class="mp-endpoint__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </header>
          <div class="mp-endpoint__body mp-endpoint__body--split">
            <div class="mp-endpoint__info">
              <p class="mp-endpoint__desc">Update a product.</p>
              <div class="mp-params-label" style="margin-top:var(--mp-space-5);">Responses</div>
              <table class="mp-params">
                <thead><tr><th>Status</th><th>Description</th></tr></thead>
                <tbody>
                <tr><td><span class="mp-params__name">200</span></td><td class="mp-params__desc">product is updated.</td></tr>
                <tr><td><span class="mp-params__name">400</span></td><td class="mp-params__desc">Invalid request syntax</td></tr>
                </tbody>
              </table>
            </div>
            <div class="mp-endpoint__code">
              <div class="mp-code-header"><span>Request</span><span class="mp-code-status">POST /update-product</span></div>
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
<pre class="mp-code-block" data-lang="bash"><code class="language-bash">curl -X POST &#x27;https://product.api.myparcel.nl/update-product&#x27; \
  -H &#x27;Authorization: bearer &lt;token&gt;&#x27; \
  -H &#x27;User-Agent: my-integration/1.0&#x27; \
  -H &#x27;Content-Type: application/json&#x27; \
  -d &#x27;[
  {
    &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
    &quot;name&quot;: &quot;test-name&quot;,
    &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
    &quot;status&quot;: &quot;ACTIVE&quot;,
    &quot;trackInventory&quot;: true,
    &quot;barcode&quot;: &quot;12345678&quot;,
    &quot;containsDangerousSubstances&quot;: true,
    &quot;countryCodeOfOrigin&quot;: &quot;NL&quot;,
    &quot;descriptions&quot;: [
      {
        &quot;text&quot;: &quot;Description&quot;,
        &quot;languageCode&quot;: &quot;en&quot;
      }
    ],
    &quot;dimensions&quot;: {
      &quot;height&quot;: {
        &quot;value&quot;: 100,
        &quot;unit&quot;: &quot;cm&quot;
      },
      &quot;length&quot;: {
        &quot;value&quot;: 100,
        &quot;unit&quot;: &quot;cm&quot;
      },
      &quot;weight&quot;: {
        &quot;value&quot;: 1000,
        &quot;unit&quot;: &quot;gr&quot;
      },
      &quot;width&quot;: {
        &quot;value&quot;: 100,
        &quot;unit&quot;: &quot;cm&quot;
      }
    },
    &quot;ean&quot;: &quot;12345678&quot;,
    &quot;hasUnlimitedShelfLife&quot;: true,
    &quot;hsCode&quot;: &quot;123456&quot;,
    &quot;purchasePrice&quot;: {
      &quot;currency&quot;: &quot;EUR&quot;,
      &quot;integral&quot;: 10,
      &quot;fractional&quot;: 99
    },
    &quot;salesPrice&quot;: {
      &quot;currency&quot;: &quot;EUR&quot;,
      &quot;integral&quot;: 10,
      &quot;fractional&quot;: 99,
      &quot;taxRate&quot;: 21
    },
    &quot;sku&quot;: &quot;sku&quot;,
    &quot;children&quot;: [
      {
        &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
        &quot;quantity&quot;: 2
      }
    ],
    &quot;fulfilmentPlatforms&quot;: [
      &quot;VASCO&quot;
    ],
    &quot;salesChannels&quot;: [
      {
        &quot;sourceId&quot;: &quot;sales-channel-shopify-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-shopify-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;shopify&quot;,
        &quot;inventoryLocationId&quot;: &quot;test-location-id&quot;,
        &quot;inventoryItemId&quot;: &quot;test-inventory-item-id&quot;
      },
      {
        &quot;sourceId&quot;: &quot;sales-channel-bol-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-bol-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;bol&quot;
      },
      {
        &quot;sourceId&quot;: &quot;sales-channel-woocommerce-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-woocommerce-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;woocommerce&quot;
      },
      {
        &quot;sourceId&quot;: &quot;sales-channel-lightspeed-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-lightspeed-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;lightspeed&quot;
      },
      {
        &quot;sourceId&quot;: &quot;sales-channel-magento-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-magento-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;magento&quot;
      },
      {
        &quot;sourceId&quot;: &quot;sales-channel-presta-external-ID&quot;,
        &quot;salesChannelId&quot;: &quot;sales-channel-presta-sales-channel-ID&quot;,
        &quot;ecommercePlatformName&quot;: &quot;presta&quot;
      }
    ],
    &quot;shopIds&quot;: [
      &quot;test-shop-id&quot;
    ],
    &quot;stock&quot;: {
      &quot;VASCO&quot;: {
        &quot;free&quot;: 15,
        &quot;value&quot;: 20
      }
    },
    &quot;updatedAt&quot;: &quot;2024-11-13T19:20:34+00:00&quot;
  },
  {
    &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
    &quot;name&quot;: &quot;test-name&quot;,
    &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
    &quot;status&quot;: &quot;ACTIVE&quot;,
    &quot;trackInventory&quot;: true
  }
]&#x27;</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="php" role="tabpanel">
<pre class="mp-code-block" data-lang="php"><code class="language-php">&lt;?php
$ch = curl_init(&quot;https://product.api.myparcel.nl/update-product&quot;);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER =&gt; true,
    CURLOPT_CUSTOMREQUEST  =&gt; &#x27;POST&#x27;,
    CURLOPT_POSTFIELDS     =&gt; json_encode([{&quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;, &quot;name&quot;: &quot;test-name&quot;, &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;, &quot;status&quot;: &quot;ACTIVE&quot;, &quot;trackInventory&quot;: true, &quot;barcode&quot;: &quot;12345678&quot;, &quot;containsDangerousSubstances&quot;: true, &quot;countryCodeOfOrigin&quot;: &quot;NL&quot;, &quot;descriptions&quot;: [{&quot;text&quot;: &quot;Description&quot;, &quot;languageCode&quot;: &quot;en&quot;}], &quot;dimensions&quot;: {&quot;height&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}, &quot;length&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}, &quot;weight&quot;: {&quot;value&quot;: 1000, &quot;unit&quot;: &quot;gr&quot;}, &quot;width&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}}, &quot;ean&quot;: &quot;12345678&quot;, &quot;hasUnlimitedShelfLife&quot;: true, &quot;hsCode&quot;: &quot;123456&quot;, &quot;purchasePrice&quot;: {&quot;currency&quot;: &quot;EUR&quot;, &quot;integral&quot;: 10, &quot;fractional&quot;: 99}, &quot;salesPrice&quot;: {&quot;currency&quot;: &quot;EUR&quot;, &quot;integral&quot;: 10, &quot;fractional&quot;: 99, &quot;taxRate&quot;: 21}, &quot;sku&quot;: &quot;sku&quot;, &quot;children&quot;: [{&quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;quantity&quot;: 2}], &quot;fulfilmentPlatforms&quot;: [&quot;VASCO&quot;], &quot;salesChannels&quot;: [{&quot;sourceId&quot;: &quot;sales-channel-shopify-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-shopify-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;shopify&quot;, &quot;inventoryLocationId&quot;: &quot;test-location-id&quot;, &quot;inventoryItemId&quot;: &quot;test-inventory-item-id&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-bol-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-bol-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;bol&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-woocommerce-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-woocommerce-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;woocommerce&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-lightspeed-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-lightspeed-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;lightspeed&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-magento-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-magento-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;magento&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-presta-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-presta-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;presta&quot;}], &quot;shopIds&quot;: [&quot;test-shop-id&quot;], &quot;stock&quot;: {&quot;VASCO&quot;: {&quot;free&quot;: 15, &quot;value&quot;: 20}}, &quot;updatedAt&quot;: &quot;2024-11-13T19:20:34+00:00&quot;}, {&quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;, &quot;name&quot;: &quot;test-name&quot;, &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;, &quot;status&quot;: &quot;ACTIVE&quot;, &quot;trackInventory&quot;: true}]),
    CURLOPT_HTTPHEADER     =&gt; [
        &#x27;Authorization: bearer &lt;token&gt;&#x27;,
        &#x27;User-Agent: my-integration/1.0&#x27;,
        &#x27;Content-Type: application/json&#x27;,
    ],
]);

$response = json_decode(curl_exec($ch), true);</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="js" role="tabpanel">
<pre class="mp-code-block" data-lang="javascript"><code class="language-javascript">const response = await fetch(&quot;https://product.api.myparcel.nl/update-product&quot;, {
  method: &#x27;POST&#x27;,
  headers: {
    Authorization: &#x27;bearer &lt;token&gt;&#x27;,
    &#x27;User-Agent&#x27;: &#x27;my-integration/1.0&#x27;,
    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,
  },
  body: JSON.stringify([
    {
      &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
      &quot;name&quot;: &quot;test-name&quot;,
      &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
      &quot;status&quot;: &quot;ACTIVE&quot;,
      &quot;trackInventory&quot;: true,
      &quot;barcode&quot;: &quot;12345678&quot;,
      &quot;containsDangerousSubstances&quot;: true,
      &quot;countryCodeOfOrigin&quot;: &quot;NL&quot;,
      &quot;descriptions&quot;: [
        {
          &quot;text&quot;: &quot;Description&quot;,
          &quot;languageCode&quot;: &quot;en&quot;
        }
      ],
      &quot;dimensions&quot;: {
        &quot;height&quot;: {
          &quot;value&quot;: 100,
          &quot;unit&quot;: &quot;cm&quot;
        },
        &quot;length&quot;: {
          &quot;value&quot;: 100,
          &quot;unit&quot;: &quot;cm&quot;
        },
        &quot;weight&quot;: {
          &quot;value&quot;: 1000,
          &quot;unit&quot;: &quot;gr&quot;
        },
        &quot;width&quot;: {
          &quot;value&quot;: 100,
          &quot;unit&quot;: &quot;cm&quot;
        }
      },
      &quot;ean&quot;: &quot;12345678&quot;,
      &quot;hasUnlimitedShelfLife&quot;: true,
      &quot;hsCode&quot;: &quot;123456&quot;,
      &quot;purchasePrice&quot;: {
        &quot;currency&quot;: &quot;EUR&quot;,
        &quot;integral&quot;: 10,
        &quot;fractional&quot;: 99
      },
      &quot;salesPrice&quot;: {
        &quot;currency&quot;: &quot;EUR&quot;,
        &quot;integral&quot;: 10,
        &quot;fractional&quot;: 99,
        &quot;taxRate&quot;: 21
      },
      &quot;sku&quot;: &quot;sku&quot;,
      &quot;children&quot;: [
        {
          &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
          &quot;quantity&quot;: 2
        }
      ],
      &quot;fulfilmentPlatforms&quot;: [
        &quot;VASCO&quot;
      ],
      &quot;salesChannels&quot;: [
        {
          &quot;sourceId&quot;: &quot;sales-channel-shopify-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-shopify-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;shopify&quot;,
          &quot;inventoryLocationId&quot;: &quot;test-location-id&quot;,
          &quot;inventoryItemId&quot;: &quot;test-inventory-item-id&quot;
        },
        {
          &quot;sourceId&quot;: &quot;sales-channel-bol-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-bol-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;bol&quot;
        },
        {
          &quot;sourceId&quot;: &quot;sales-channel-woocommerce-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-woocommerce-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;woocommerce&quot;
        },
        {
          &quot;sourceId&quot;: &quot;sales-channel-lightspeed-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-lightspeed-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;lightspeed&quot;
        },
        {
          &quot;sourceId&quot;: &quot;sales-channel-magento-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-magento-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;magento&quot;
        },
        {
          &quot;sourceId&quot;: &quot;sales-channel-presta-external-ID&quot;,
          &quot;salesChannelId&quot;: &quot;sales-channel-presta-sales-channel-ID&quot;,
          &quot;ecommercePlatformName&quot;: &quot;presta&quot;
        }
      ],
      &quot;shopIds&quot;: [
        &quot;test-shop-id&quot;
      ],
      &quot;stock&quot;: {
        &quot;VASCO&quot;: {
          &quot;free&quot;: 15,
          &quot;value&quot;: 20
        }
      },
      &quot;updatedAt&quot;: &quot;2024-11-13T19:20:34+00:00&quot;
    },
    {
      &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
      &quot;name&quot;: &quot;test-name&quot;,
      &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
      &quot;status&quot;: &quot;ACTIVE&quot;,
      &quot;trackInventory&quot;: true
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
        &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
        &quot;name&quot;: &quot;test-name&quot;,
        &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
        &quot;status&quot;: &quot;ACTIVE&quot;,
        &quot;trackInventory&quot;: true,
        &quot;barcode&quot;: &quot;12345678&quot;,
        &quot;containsDangerousSubstances&quot;: true,
        &quot;countryCodeOfOrigin&quot;: &quot;NL&quot;,
        &quot;descriptions&quot;: [
            {
                &quot;text&quot;: &quot;Description&quot;,
                &quot;languageCode&quot;: &quot;en&quot;
            }
        ],
        &quot;dimensions&quot;: {
            &quot;height&quot;: {
                &quot;value&quot;: 100,
                &quot;unit&quot;: &quot;cm&quot;
            },
            &quot;length&quot;: {
                &quot;value&quot;: 100,
                &quot;unit&quot;: &quot;cm&quot;
            },
            &quot;weight&quot;: {
                &quot;value&quot;: 1000,
                &quot;unit&quot;: &quot;gr&quot;
            },
            &quot;width&quot;: {
                &quot;value&quot;: 100,
                &quot;unit&quot;: &quot;cm&quot;
            }
        },
        &quot;ean&quot;: &quot;12345678&quot;,
        &quot;hasUnlimitedShelfLife&quot;: true,
        &quot;hsCode&quot;: &quot;123456&quot;,
        &quot;purchasePrice&quot;: {
            &quot;currency&quot;: &quot;EUR&quot;,
            &quot;integral&quot;: 10,
            &quot;fractional&quot;: 99
        },
        &quot;salesPrice&quot;: {
            &quot;currency&quot;: &quot;EUR&quot;,
            &quot;integral&quot;: 10,
            &quot;fractional&quot;: 99,
            &quot;taxRate&quot;: 21
        },
        &quot;sku&quot;: &quot;sku&quot;,
        &quot;children&quot;: [
            {
                &quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;,
                &quot;quantity&quot;: 2
            }
        ],
        &quot;fulfilmentPlatforms&quot;: [
            &quot;VASCO&quot;
        ],
        &quot;salesChannels&quot;: [
            {
                &quot;sourceId&quot;: &quot;sales-channel-shopify-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-shopify-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;shopify&quot;,
                &quot;inventoryLocationId&quot;: &quot;test-location-id&quot;,
                &quot;inventoryItemId&quot;: &quot;test-inventory-item-id&quot;
            },
            {
                &quot;sourceId&quot;: &quot;sales-channel-bol-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-bol-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;bol&quot;
            },
            {
                &quot;sourceId&quot;: &quot;sales-channel-woocommerce-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-woocommerce-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;woocommerce&quot;
            },
            {
                &quot;sourceId&quot;: &quot;sales-channel-lightspeed-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-lightspeed-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;lightspeed&quot;
            },
            {
                &quot;sourceId&quot;: &quot;sales-channel-magento-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-magento-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;magento&quot;
            },
            {
                &quot;sourceId&quot;: &quot;sales-channel-presta-external-ID&quot;,
                &quot;salesChannelId&quot;: &quot;sales-channel-presta-sales-channel-ID&quot;,
                &quot;ecommercePlatformName&quot;: &quot;presta&quot;
            }
        ],
        &quot;shopIds&quot;: [
            &quot;test-shop-id&quot;
        ],
        &quot;stock&quot;: {
            &quot;VASCO&quot;: {
                &quot;free&quot;: 15,
                &quot;value&quot;: 20
            }
        },
        &quot;updatedAt&quot;: &quot;2024-11-13T19:20:34+00:00&quot;
    },
    {
        &quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;,
        &quot;name&quot;: &quot;test-name&quot;,
        &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;,
        &quot;status&quot;: &quot;ACTIVE&quot;,
        &quot;trackInventory&quot;: true
    }
]

response = requests.post(&quot;https://product.api.myparcel.nl/update-product&quot;, json=payload, headers=headers)

data = response.json()</code></pre>
                </div>
                <div class="mp-code-panel" data-lang="ruby" role="tabpanel">
<pre class="mp-code-block" data-lang="ruby"><code class="language-ruby">require &#x27;net/http&#x27;
require &#x27;json&#x27;
require &#x27;uri&#x27;

uri = URI(&#x27;https://product.api.myparcel.nl/update-product&#x27;)
req = Net::HTTP::Post.new(uri)
req[&#x27;Authorization&#x27;] = &#x27;bearer &lt;token&gt;&#x27;
req[&#x27;User-Agent&#x27;] = &#x27;my-integration/1.0&#x27;
req[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;
req.body = &quot;[{\&quot;id\&quot;: \&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a\&quot;, \&quot;name\&quot;: \&quot;test-name\&quot;, \&quot;createdAt\&quot;: \&quot;2024-11-13T19:20:33+00:00\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;, \&quot;trackInventory\&quot;: true, \&quot;barcode\&quot;: \&quot;12345678\&quot;, \&quot;containsDangerousSubstances\&quot;: true, \&quot;countryCodeOfOrigin\&quot;: \&quot;NL\&quot;, \&quot;descriptions\&quot;: [{\&quot;text\&quot;: \&quot;Description\&quot;, \&quot;languageCode\&quot;: \&quot;en\&quot;}], \&quot;dimensions\&quot;: {\&quot;height\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}, \&quot;length\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}, \&quot;weight\&quot;: {\&quot;value\&quot;: 1000, \&quot;unit\&quot;: \&quot;gr\&quot;}, \&quot;width\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}}, \&quot;ean\&quot;: \&quot;12345678\&quot;, \&quot;hasUnlimitedShelfLife\&quot;: true, \&quot;hsCode\&quot;: \&quot;123456\&quot;, \&quot;purchasePrice\&quot;: {\&quot;currency\&quot;: \&quot;EUR\&quot;, \&quot;integral\&quot;: 10, \&quot;fractional\&quot;: 99}, \&quot;salesPrice\&quot;: {\&quot;currency\&quot;: \&quot;EUR\&quot;, \&quot;integral\&quot;: 10, \&quot;fractional\&quot;: 99, \&quot;taxRate\&quot;: 21}, \&quot;sku\&quot;: \&quot;sku\&quot;, \&quot;children\&quot;: [{\&quot;id\&quot;: \&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;quantity\&quot;: 2}], \&quot;fulfilmentPlatforms\&quot;: [\&quot;VASCO\&quot;], \&quot;salesChannels\&quot;: [{\&quot;sourceId\&quot;: \&quot;sales-channel-shopify-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-shopify-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;shopify\&quot;, \&quot;inventoryLocationId\&quot;: \&quot;test-location-id\&quot;, \&quot;inventoryItemId\&quot;: \&quot;test-inventory-item-id\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-bol-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-bol-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;bol\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-woocommerce-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-woocommerce-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;woocommerce\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-lightspeed-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-lightspeed-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;lightspeed\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-magento-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-magento-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;magento\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-presta-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-presta-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;presta\&quot;}], \&quot;shopIds\&quot;: [\&quot;test-shop-id\&quot;], \&quot;stock\&quot;: {\&quot;VASCO\&quot;: {\&quot;free\&quot;: 15, \&quot;value\&quot;: 20}}, \&quot;updatedAt\&quot;: \&quot;2024-11-13T19:20:34+00:00\&quot;}, {\&quot;id\&quot;: \&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a\&quot;, \&quot;name\&quot;: \&quot;test-name\&quot;, \&quot;createdAt\&quot;: \&quot;2024-11-13T19:20:33+00:00\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;, \&quot;trackInventory\&quot;: true}]&quot;

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
	payload := []byte(`[{&quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;, &quot;name&quot;: &quot;test-name&quot;, &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;, &quot;status&quot;: &quot;ACTIVE&quot;, &quot;trackInventory&quot;: true, &quot;barcode&quot;: &quot;12345678&quot;, &quot;containsDangerousSubstances&quot;: true, &quot;countryCodeOfOrigin&quot;: &quot;NL&quot;, &quot;descriptions&quot;: [{&quot;text&quot;: &quot;Description&quot;, &quot;languageCode&quot;: &quot;en&quot;}], &quot;dimensions&quot;: {&quot;height&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}, &quot;length&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}, &quot;weight&quot;: {&quot;value&quot;: 1000, &quot;unit&quot;: &quot;gr&quot;}, &quot;width&quot;: {&quot;value&quot;: 100, &quot;unit&quot;: &quot;cm&quot;}}, &quot;ean&quot;: &quot;12345678&quot;, &quot;hasUnlimitedShelfLife&quot;: true, &quot;hsCode&quot;: &quot;123456&quot;, &quot;purchasePrice&quot;: {&quot;currency&quot;: &quot;EUR&quot;, &quot;integral&quot;: 10, &quot;fractional&quot;: 99}, &quot;salesPrice&quot;: {&quot;currency&quot;: &quot;EUR&quot;, &quot;integral&quot;: 10, &quot;fractional&quot;: 99, &quot;taxRate&quot;: 21}, &quot;sku&quot;: &quot;sku&quot;, &quot;children&quot;: [{&quot;id&quot;: &quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;, &quot;quantity&quot;: 2}], &quot;fulfilmentPlatforms&quot;: [&quot;VASCO&quot;], &quot;salesChannels&quot;: [{&quot;sourceId&quot;: &quot;sales-channel-shopify-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-shopify-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;shopify&quot;, &quot;inventoryLocationId&quot;: &quot;test-location-id&quot;, &quot;inventoryItemId&quot;: &quot;test-inventory-item-id&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-bol-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-bol-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;bol&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-woocommerce-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-woocommerce-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;woocommerce&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-lightspeed-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-lightspeed-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;lightspeed&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-magento-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-magento-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;magento&quot;}, {&quot;sourceId&quot;: &quot;sales-channel-presta-external-ID&quot;, &quot;salesChannelId&quot;: &quot;sales-channel-presta-sales-channel-ID&quot;, &quot;ecommercePlatformName&quot;: &quot;presta&quot;}], &quot;shopIds&quot;: [&quot;test-shop-id&quot;], &quot;stock&quot;: {&quot;VASCO&quot;: {&quot;free&quot;: 15, &quot;value&quot;: 20}}, &quot;updatedAt&quot;: &quot;2024-11-13T19:20:34+00:00&quot;}, {&quot;id&quot;: &quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;, &quot;name&quot;: &quot;test-name&quot;, &quot;createdAt&quot;: &quot;2024-11-13T19:20:33+00:00&quot;, &quot;status&quot;: &quot;ACTIVE&quot;, &quot;trackInventory&quot;: true}]`)
	req, _ := http.NewRequest(&quot;POST&quot;, &quot;https://product.api.myparcel.nl/update-product&quot;, bytes.NewBuffer(payload))
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
            .uri(URI.create(&quot;https://product.api.myparcel.nl/update-product&quot;))
            .header(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;)
            .header(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;)
            .header(&quot;Content-Type&quot;, &quot;application/json&quot;)
            .POST(HttpRequest.BodyPublishers.ofString(&quot;[{\&quot;id\&quot;: \&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a\&quot;, \&quot;name\&quot;: \&quot;test-name\&quot;, \&quot;createdAt\&quot;: \&quot;2024-11-13T19:20:33+00:00\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;, \&quot;trackInventory\&quot;: true, \&quot;barcode\&quot;: \&quot;12345678\&quot;, \&quot;containsDangerousSubstances\&quot;: true, \&quot;countryCodeOfOrigin\&quot;: \&quot;NL\&quot;, \&quot;descriptions\&quot;: [{\&quot;text\&quot;: \&quot;Description\&quot;, \&quot;languageCode\&quot;: \&quot;en\&quot;}], \&quot;dimensions\&quot;: {\&quot;height\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}, \&quot;length\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}, \&quot;weight\&quot;: {\&quot;value\&quot;: 1000, \&quot;unit\&quot;: \&quot;gr\&quot;}, \&quot;width\&quot;: {\&quot;value\&quot;: 100, \&quot;unit\&quot;: \&quot;cm\&quot;}}, \&quot;ean\&quot;: \&quot;12345678\&quot;, \&quot;hasUnlimitedShelfLife\&quot;: true, \&quot;hsCode\&quot;: \&quot;123456\&quot;, \&quot;purchasePrice\&quot;: {\&quot;currency\&quot;: \&quot;EUR\&quot;, \&quot;integral\&quot;: 10, \&quot;fractional\&quot;: 99}, \&quot;salesPrice\&quot;: {\&quot;currency\&quot;: \&quot;EUR\&quot;, \&quot;integral\&quot;: 10, \&quot;fractional\&quot;: 99, \&quot;taxRate\&quot;: 21}, \&quot;sku\&quot;: \&quot;sku\&quot;, \&quot;children\&quot;: [{\&quot;id\&quot;: \&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965\&quot;, \&quot;quantity\&quot;: 2}], \&quot;fulfilmentPlatforms\&quot;: [\&quot;VASCO\&quot;], \&quot;salesChannels\&quot;: [{\&quot;sourceId\&quot;: \&quot;sales-channel-shopify-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-shopify-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;shopify\&quot;, \&quot;inventoryLocationId\&quot;: \&quot;test-location-id\&quot;, \&quot;inventoryItemId\&quot;: \&quot;test-inventory-item-id\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-bol-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-bol-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;bol\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-woocommerce-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-woocommerce-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;woocommerce\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-lightspeed-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-lightspeed-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;lightspeed\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-magento-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-magento-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;magento\&quot;}, {\&quot;sourceId\&quot;: \&quot;sales-channel-presta-external-ID\&quot;, \&quot;salesChannelId\&quot;: \&quot;sales-channel-presta-sales-channel-ID\&quot;, \&quot;ecommercePlatformName\&quot;: \&quot;presta\&quot;}], \&quot;shopIds\&quot;: [\&quot;test-shop-id\&quot;], \&quot;stock\&quot;: {\&quot;VASCO\&quot;: {\&quot;free\&quot;: 15, \&quot;value\&quot;: 20}}, \&quot;updatedAt\&quot;: \&quot;2024-11-13T19:20:34+00:00\&quot;}, {\&quot;id\&quot;: \&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a\&quot;, \&quot;name\&quot;: \&quot;test-name\&quot;, \&quot;createdAt\&quot;: \&quot;2024-11-13T19:20:33+00:00\&quot;, \&quot;status\&quot;: \&quot;ACTIVE\&quot;, \&quot;trackInventory\&quot;: true}]&quot;))
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
var req = new HttpRequestMessage(HttpMethod.Post, &quot;https://product.api.myparcel.nl/update-product&quot;);
req.Headers.Add(&quot;Authorization&quot;, &quot;bearer &lt;token&gt;&quot;);
req.Headers.Add(&quot;User-Agent&quot;, &quot;my-integration/1.0&quot;);
req.Content = new StringContent(@&quot;[{&quot;&quot;id&quot;&quot;: &quot;&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;&quot;, &quot;&quot;name&quot;&quot;: &quot;&quot;test-name&quot;&quot;, &quot;&quot;createdAt&quot;&quot;: &quot;&quot;2024-11-13T19:20:33+00:00&quot;&quot;, &quot;&quot;status&quot;&quot;: &quot;&quot;ACTIVE&quot;&quot;, &quot;&quot;trackInventory&quot;&quot;: true, &quot;&quot;barcode&quot;&quot;: &quot;&quot;12345678&quot;&quot;, &quot;&quot;containsDangerousSubstances&quot;&quot;: true, &quot;&quot;countryCodeOfOrigin&quot;&quot;: &quot;&quot;NL&quot;&quot;, &quot;&quot;descriptions&quot;&quot;: [{&quot;&quot;text&quot;&quot;: &quot;&quot;Description&quot;&quot;, &quot;&quot;languageCode&quot;&quot;: &quot;&quot;en&quot;&quot;}], &quot;&quot;dimensions&quot;&quot;: {&quot;&quot;height&quot;&quot;: {&quot;&quot;value&quot;&quot;: 100, &quot;&quot;unit&quot;&quot;: &quot;&quot;cm&quot;&quot;}, &quot;&quot;length&quot;&quot;: {&quot;&quot;value&quot;&quot;: 100, &quot;&quot;unit&quot;&quot;: &quot;&quot;cm&quot;&quot;}, &quot;&quot;weight&quot;&quot;: {&quot;&quot;value&quot;&quot;: 1000, &quot;&quot;unit&quot;&quot;: &quot;&quot;gr&quot;&quot;}, &quot;&quot;width&quot;&quot;: {&quot;&quot;value&quot;&quot;: 100, &quot;&quot;unit&quot;&quot;: &quot;&quot;cm&quot;&quot;}}, &quot;&quot;ean&quot;&quot;: &quot;&quot;12345678&quot;&quot;, &quot;&quot;hasUnlimitedShelfLife&quot;&quot;: true, &quot;&quot;hsCode&quot;&quot;: &quot;&quot;123456&quot;&quot;, &quot;&quot;purchasePrice&quot;&quot;: {&quot;&quot;currency&quot;&quot;: &quot;&quot;EUR&quot;&quot;, &quot;&quot;integral&quot;&quot;: 10, &quot;&quot;fractional&quot;&quot;: 99}, &quot;&quot;salesPrice&quot;&quot;: {&quot;&quot;currency&quot;&quot;: &quot;&quot;EUR&quot;&quot;, &quot;&quot;integral&quot;&quot;: 10, &quot;&quot;fractional&quot;&quot;: 99, &quot;&quot;taxRate&quot;&quot;: 21}, &quot;&quot;sku&quot;&quot;: &quot;&quot;sku&quot;&quot;, &quot;&quot;children&quot;&quot;: [{&quot;&quot;id&quot;&quot;: &quot;&quot;a2aacbcc-b6c1-48d5-a9e1-179425737965&quot;&quot;, &quot;&quot;quantity&quot;&quot;: 2}], &quot;&quot;fulfilmentPlatforms&quot;&quot;: [&quot;&quot;VASCO&quot;&quot;], &quot;&quot;salesChannels&quot;&quot;: [{&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-shopify-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-shopify-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;shopify&quot;&quot;, &quot;&quot;inventoryLocationId&quot;&quot;: &quot;&quot;test-location-id&quot;&quot;, &quot;&quot;inventoryItemId&quot;&quot;: &quot;&quot;test-inventory-item-id&quot;&quot;}, {&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-bol-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-bol-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;bol&quot;&quot;}, {&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-woocommerce-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-woocommerce-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;woocommerce&quot;&quot;}, {&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-lightspeed-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-lightspeed-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;lightspeed&quot;&quot;}, {&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-magento-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-magento-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;magento&quot;&quot;}, {&quot;&quot;sourceId&quot;&quot;: &quot;&quot;sales-channel-presta-external-ID&quot;&quot;, &quot;&quot;salesChannelId&quot;&quot;: &quot;&quot;sales-channel-presta-sales-channel-ID&quot;&quot;, &quot;&quot;ecommercePlatformName&quot;&quot;: &quot;&quot;presta&quot;&quot;}], &quot;&quot;shopIds&quot;&quot;: [&quot;&quot;test-shop-id&quot;&quot;], &quot;&quot;stock&quot;&quot;: {&quot;&quot;VASCO&quot;&quot;: {&quot;&quot;free&quot;&quot;: 15, &quot;&quot;value&quot;&quot;: 20}}, &quot;&quot;updatedAt&quot;&quot;: &quot;&quot;2024-11-13T19:20:34+00:00&quot;&quot;}, {&quot;&quot;id&quot;&quot;: &quot;&quot;b9b4ac3e-8566-4481-9f1f-614c38d2b72a&quot;&quot;, &quot;&quot;name&quot;&quot;: &quot;&quot;test-name&quot;&quot;, &quot;&quot;createdAt&quot;&quot;: &quot;&quot;2024-11-13T19:20:33+00:00&quot;&quot;, &quot;&quot;status&quot;&quot;: &quot;&quot;ACTIVE&quot;&quot;, &quot;&quot;trackInventory&quot;&quot;: true}]&quot;, Encoding.UTF8, &quot;application/json&quot;);

var response = await client.SendAsync(req);
var data = await response.Content.ReadAsStringAsync();</code></pre>
                </div>
              </div>
              <div class="mp-code-header"><span>Response</span><span class="mp-code-status">200</span></div>
<pre class="mp-code-block" data-lang="json"><code class="language-json">{
  &quot;id&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;,
  &quot;createdAt&quot;: &quot;2026-04-20T10:00:00Z&quot;,
  &quot;name&quot;: &quot;string&quot;,
  &quot;status&quot;: &quot;ACTIVE&quot;,
  &quot;trackInventory&quot;: true
}</code></pre>
            </div>
          </div>
        </article>
      </section>
  </div>
</template>
