<template>
  <aside class="mp-sidebar">
<a href="/developer-portal/" class="mp-sidebar__back">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <span data-i18n="Back to portal">Back to portal</span>
      </a>

      <a class="mp-sidebar__item mp-sidebar__item--active" href="/developer-portal/api/" style="margin-top:var(--mp-space-4);">
        <span data-i18n="API Overview">API Overview</span>
      </a>

      <details class="mp-sidebar__api">
        <summary class="mp-sidebar__api-summary">
          <span>MyParcel API</span>
          <span class="mp-sidebar__api-summary-version">2026-04-16</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label">Overview</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-root"><span class="mp-method mp-method--get">GET</span><span>Status page</span></a>
        <div class="mp-sidebar__group-label">Shipments</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-shipments"><span class="mp-method mp-method--get">GET</span><span>Gets a list of Shipments, opti…</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#post-shipments"><span class="mp-method mp-method--post">POST</span><span>Add Shipment</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#put-shipments"><span class="mp-method mp-method--put">PUT</span><span>Update Shipment</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-shipments-ids"><span class="mp-method mp-method--get">GET</span><span>Get shipments by id.</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#delete-shipments-ids"><span class="mp-method mp-method--delete">DEL</span><span>Delete Shipment</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#post-shipments-capabilities"><span class="mp-method mp-method--post">POST</span><span>List shipment capabilities (Be…</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#post-shipments-capabilities-contract-definitions"><span class="mp-method mp-method--post">POST</span><span>List a superset of available c…</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#post-shipments-rates"><span class="mp-method mp-method--post">POST</span><span>List shipment rates</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-shipment-labels-ids"><span class="mp-method mp-method--get">GET</span><span>Get Shipment labels</span></a>
        <div class="mp-sidebar__group-label">Delivery options</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-delivery-options"><span class="mp-method mp-method--get">GET</span><span>Get Delivery Options</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-drop-off-points"><span class="mp-method mp-method--get">GET</span><span>Get drop off points</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-pickup-locations"><span class="mp-method mp-method--get">GET</span><span>Get Pickup Locations</span></a>
        <div class="mp-sidebar__group-label">Track &amp; trace</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-tracktraces"><span class="mp-method mp-method--get">GET</span><span>Track Shipment</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-tracktraces-ids"><span class="mp-method mp-method--get">GET</span><span>Track Shipment</span></a>
        <div class="mp-sidebar__group-label">Returns</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#post-return-shipments"><span class="mp-method mp-method--post">POST</span><span>Generate unrelated return ship…</span></a>
        <div class="mp-sidebar__group-label">Notifications</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-notification-groups"><span class="mp-method mp-method--get">GET</span><span>Get notification groups</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#post-notification-groups"><span class="mp-method mp-method--post">POST</span><span>Create notification groups</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#delete-notification-groups-ids"><span class="mp-method mp-method--delete">DEL</span><span>Delete notification groups</span></a>
        <div class="mp-sidebar__group-label">Webhooks</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-webhook-subscriptions"><span class="mp-method mp-method--get">GET</span><span>Get webhook subscriptions</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#post-webhook-subscriptions"><span class="mp-method mp-method--post">POST</span><span>Create webhook subscriptions</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-webhook-subscriptions-ids"><span class="mp-method mp-method--get">GET</span><span>Get webhook subscriptions by i…</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#delete-webhook-subscriptions-ids"><span class="mp-method mp-method--delete">DEL</span><span>Delete webhook subscriptions</span></a>
      </details>

      <details class="mp-sidebar__api">
        <summary class="mp-sidebar__api-summary">
          <span>Order API</span>
          <span class="mp-sidebar__api-summary-version">1.0.0</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label">Orders</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#get-orders"><span class="mp-method mp-method--get">GET</span><span>Query and/or filter orders.</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-cancel"><span class="mp-method mp-method--post">POST</span><span>Cancel orders.</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-import"><span class="mp-method mp-method--post">POST</span><span>Import an order.</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-add-packages"><span class="mp-method mp-method--post">POST</span><span>Add packages to orders</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-create-from-shippable-packages"><span class="mp-method mp-method--post">POST</span><span>Create from shippable packages</span></a>
        <div class="mp-sidebar__group-label">Documents</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#get-packing-slips"><span class="mp-method mp-method--get">GET</span><span>Generate packing slips</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#get-picklist"><span class="mp-method mp-method--get">GET</span><span>Generate picklist</span></a>
      </details>

      <details class="mp-sidebar__api">
        <summary class="mp-sidebar__api-summary">
          <span>IAM API</span>
          <span class="mp-sidebar__api-summary-version">1.0.0</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label">Whoami</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/iam.html#get-whoami"><span class="mp-method mp-method--get">GET</span><span>Find out who you are and what…</span></a>
      </details>

      <details class="mp-sidebar__api">
        <summary class="mp-sidebar__api-summary">
          <span>Rule API</span>
          <span class="mp-sidebar__api-summary-version">1.0.0</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label">Shops</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/rule.html#get-shops-shopid-order-rules"><span class="mp-method mp-method--get">GET</span><span>List all order rule groups</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/rule.html#post-shops-shopid-order-rules"><span class="mp-method mp-method--post">POST</span><span>Create an order rule group</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/rule.html#put-shops-shopid-order-rules-rulegroupid"><span class="mp-method mp-method--put">PUT</span><span>Update an order rule group</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/rule.html#delete-shops-shopid-order-rules-rulegroupid"><span class="mp-method mp-method--delete">DEL</span><span>Delete an order rule group</span></a>
      </details>

      <details class="mp-sidebar__api">
        <summary class="mp-sidebar__api-summary">
          <span>Address API</span>
          <span class="mp-sidebar__api-summary-version">1.0.0</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label">Addresses</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/address.html#get-addresses"><span class="mp-method mp-method--get">GET</span><span>List addresses by query parame…</span></a>
        <div class="mp-sidebar__group-label">Validate</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/address.html#get-validate"><span class="mp-method mp-method--get">GET</span><span>Validate an address by query p…</span></a>
      </details>

      <details class="mp-sidebar__api">
        <summary class="mp-sidebar__api-summary">
          <span>Printing API</span>
          <span class="mp-sidebar__api-summary-version">1.0.0</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label">Printer groups</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/printing.html#get-printer-groups"><span class="mp-method mp-method--get">GET</span><span>Get the list accessible printe…</span></a>
        <div class="mp-sidebar__group-label">Printers</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/printing.html#get-printers"><span class="mp-method mp-method--get">GET</span><span>Get the list of available prin…</span></a>
        <div class="mp-sidebar__group-label">Status</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/printing.html#get-status"><span class="mp-method mp-method--get">GET</span><span>Get the direct printing accoun…</span></a>
        <div class="mp-sidebar__group-label">Sync printers</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/printing.html#post-sync-printers"><span class="mp-method mp-method--post">POST</span><span>Synchronize printers</span></a>
      </details>

      <details class="mp-sidebar__api">
        <summary class="mp-sidebar__api-summary">
          <span>Product API</span>
          <span class="mp-sidebar__api-summary-version">1.0.0</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label">Create product</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/product.html#post-create-product"><span class="mp-method mp-method--post">POST</span><span>Create a product.</span></a>
        <div class="mp-sidebar__group-label">Products</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/product.html#get-products"><span class="mp-method mp-method--get">GET</span><span>Query and/or filter products.</span></a>
        <div class="mp-sidebar__group-label">Manage inventory</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/product.html#post-manage-inventory"><span class="mp-method mp-method--post">POST</span><span>Manage inventory of a product.</span></a>
        <div class="mp-sidebar__group-label">Update product</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/product.html#post-update-product"><span class="mp-method mp-method--post">POST</span><span>Update a product.</span></a>
      </details>

      <details class="mp-sidebar__api">
        <summary class="mp-sidebar__api-summary">
          <span>Delegation API</span>
          <span class="mp-sidebar__api-summary-version">1.0.0</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label">Delegation requests</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/delegation.html#post-delegation-requests-api-key"><span class="mp-method mp-method--post">POST</span><span>Register API Key for a delegat…</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/delegation.html#post-delegation-requests-api-key-without-secret"><span class="mp-method mp-method--post">POST</span><span>Register API Key for a delegat…</span></a>
      </details>

      <details class="mp-sidebar__api">
        <summary class="mp-sidebar__api-summary">
          <span>Purchase Order API</span>
          <span class="mp-sidebar__api-summary-version">1.0.0</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label">Purchase orders</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#get-purchase-orders"><span class="mp-method mp-method--get">GET</span><span>Query and/or filter purchase o…</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-create"><span class="mp-method mp-method--post">POST</span><span>Create a purchase order.</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-cancel"><span class="mp-method mp-method--post">POST</span><span>Cancel a purchase order.</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-remove"><span class="mp-method mp-method--post">POST</span><span>Remove purchase order.</span></a>
      </details>

      <details class="mp-sidebar__api">
        <summary class="mp-sidebar__api-summary">
          <span>Event API</span>
          <span class="mp-sidebar__api-summary-version">—</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label" style="color:var(--mp-text-faint);">Spec unavailable</div>
      </details>
  </aside>
</template>
