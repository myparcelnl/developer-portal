<template>
  <aside class="mp-sidebar">
<a href="/developer-portal/" class="mp-sidebar__back">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <span data-i18n="Back to portal">Back to portal</span>
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
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-notification-groups-notification-group-id-notification-templates"><span class="mp-method mp-method--get">GET</span><span>Get notification templates</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#put-notification-groups-notification-group-id-notification-templates-notification-template-id"><span class="mp-method mp-method--put">PUT</span><span>Update notification template</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#put-notification-groups-notification-group-id-notification-templates-disable"><span class="mp-method mp-method--put">PUT</span><span>Disable all notification templ…</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#put-notification-groups-notification-group-id-notification-templates-enable"><span class="mp-method mp-method--put">PUT</span><span>Enable all notification templa…</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#put-notification-groups-notification-group-id-notification-templates-notification-template-id-disable"><span class="mp-method mp-method--put">PUT</span><span>Disable notification template</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#put-notification-groups-notification-group-id-notification-templates-notification-template-id-enable"><span class="mp-method mp-method--put">PUT</span><span>Enable notification template</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#post-notification-groups-notification-group-id-notification-templates-notification-template-id-test"><span class="mp-method mp-method--post">POST</span><span>Send test notification</span></a>
        <div class="mp-sidebar__group-label">Webhooks</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-webhook-subscriptions"><span class="mp-method mp-method--get">GET</span><span>Get webhook subscriptions</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#post-webhook-subscriptions"><span class="mp-method mp-method--post">POST</span><span>Create webhook subscriptions</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#get-webhook-subscriptions-ids"><span class="mp-method mp-method--get">GET</span><span>Get webhook subscriptions by i…</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/myparcel.html#delete-webhook-subscriptions-ids"><span class="mp-method mp-method--delete">DEL</span><span>Delete webhook subscriptions</span></a>
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

      <details class="mp-sidebar__api" open>
        <summary class="mp-sidebar__api-summary mp-sidebar__api-summary--active">
          <span>Printing API</span>
          <span class="mp-sidebar__api-summary-version">1.0.0</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label">Printer groups</div>
        <a class="mp-sidebar__item" href="#get-printer-groups"><span class="mp-method mp-method--get">GET</span><span>Get the list accessible printe…</span></a>
        <div class="mp-sidebar__group-label">Printers</div>
        <a class="mp-sidebar__item" href="#get-printers"><span class="mp-method mp-method--get">GET</span><span>Get the list of available prin…</span></a>
        <div class="mp-sidebar__group-label">Status</div>
        <a class="mp-sidebar__item" href="#get-status"><span class="mp-method mp-method--get">GET</span><span>Get the direct printing accoun…</span></a>
        <div class="mp-sidebar__group-label">Allow shops access to printer group</div>
        <a class="mp-sidebar__item" href="#post-allow-shops-access-to-printer-group"><span class="mp-method mp-method--post">POST</span><span>Allows shop IDs to access a pr…</span></a>
        <div class="mp-sidebar__group-label">Assign printer to group</div>
        <a class="mp-sidebar__item" href="#post-assign-printer-to-group"><span class="mp-method mp-method--post">POST</span><span>Assign a printer to a printer…</span></a>
        <div class="mp-sidebar__group-label">Create printer group</div>
        <a class="mp-sidebar__item" href="#post-create-printer-group"><span class="mp-method mp-method--post">POST</span><span>Create printer group</span></a>
        <div class="mp-sidebar__group-label">Enable direct printing</div>
        <a class="mp-sidebar__item" href="#post-enable-direct-printing"><span class="mp-method mp-method--post">POST</span><span>Enable direct printing</span></a>
        <div class="mp-sidebar__group-label">Remove printer group</div>
        <a class="mp-sidebar__item" href="#post-remove-printer-group"><span class="mp-method mp-method--post">POST</span><span>Remove printer group</span></a>
        <div class="mp-sidebar__group-label">Rename printer group</div>
        <a class="mp-sidebar__item" href="#post-rename-printer-group"><span class="mp-method mp-method--post">POST</span><span>Rename printer group</span></a>
        <div class="mp-sidebar__group-label">Sync printers</div>
        <a class="mp-sidebar__item" href="#post-sync-printers"><span class="mp-method mp-method--post">POST</span><span>Synchronize printers</span></a>
        <div class="mp-sidebar__group-label">Unassign printer from group</div>
        <a class="mp-sidebar__item" href="#post-unassign-printer-from-group"><span class="mp-method mp-method--post">POST</span><span>Unassign a printer from a prin…</span></a>
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
          <span>Order API</span>
          <span class="mp-sidebar__api-summary-version">1.0.0</span>
          <svg class="mp-sidebar__api-summary-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="mp-sidebar__group-label">Add note</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-add-note"><span class="mp-method mp-method--post">POST</span><span>Add a note to an order.</span></a>
        <div class="mp-sidebar__group-label">Assign to user</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-assign-to-user"><span class="mp-method mp-method--post">POST</span><span>Assign orders to an user. Only…</span></a>
        <div class="mp-sidebar__group-label">Cancel</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-cancel"><span class="mp-method mp-method--post">POST</span><span>Cancel orders.</span></a>
        <div class="mp-sidebar__group-label">Create from shippable packages</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-create-from-shippable-packages"><span class="mp-method mp-method--post">POST</span><span>Create an order from shippable…</span></a>
        <div class="mp-sidebar__group-label">Add packages</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-add-packages"><span class="mp-method mp-method--post">POST</span><span>Add packages to orders</span></a>
        <div class="mp-sidebar__group-label">Prepare packages for shipment</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-prepare-packages-for-shipment"><span class="mp-method mp-method--post">POST</span><span>Prepares packages for shipment</span></a>
        <div class="mp-sidebar__group-label">Unprepare packages for shipment</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-unprepare-packages-for-shipment"><span class="mp-method mp-method--post">POST</span><span>Unprepares packages for shipme…</span></a>
        <div class="mp-sidebar__group-label">Edit note</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-edit-note"><span class="mp-method mp-method--post">POST</span><span>Edit a note of an order.</span></a>
        <div class="mp-sidebar__group-label">Import</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-import"><span class="mp-method mp-method--post">POST</span><span>Import an order after it is di…</span></a>
        <div class="mp-sidebar__group-label">Orders</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#get-orders"><span class="mp-method mp-method--get">GET</span><span>Query and/or filter orders.</span></a>
        <div class="mp-sidebar__group-label">Packing slips</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#get-packing-slips"><span class="mp-method mp-method--get">GET</span><span>Generate packing slips for 1 o…</span></a>
        <div class="mp-sidebar__group-label">Picklist</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#get-picklist"><span class="mp-method mp-method--get">GET</span><span>Generate a picklist for 1 or m…</span></a>
        <div class="mp-sidebar__group-label">Remove notes</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-remove-notes"><span class="mp-method mp-method--post">POST</span><span>Remove notes from an order.</span></a>
        <div class="mp-sidebar__group-label">Unassign from user</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/order.html#post-unassign-from-user"><span class="mp-method mp-method--post">POST</span><span>Unassign orders from an user.…</span></a>
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
        <div class="mp-sidebar__group-label">Add lines</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-add-lines"><span class="mp-method mp-method--post">POST</span><span>Add lines to a purchase order.</span></a>
        <div class="mp-sidebar__group-label">Cancel</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-cancel"><span class="mp-method mp-method--post">POST</span><span>Cancel a purchase order.</span></a>
        <div class="mp-sidebar__group-label">Create</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-create"><span class="mp-method mp-method--post">POST</span><span>Create a purchase order.</span></a>
        <div class="mp-sidebar__group-label">Purchase orders</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#get-purchase-orders"><span class="mp-method mp-method--get">GET</span><span>Query and/or filter purchase o…</span></a>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#get-purchase-orders-purchaseorderid-packing-slip"><span class="mp-method mp-method--get">GET</span><span>Download a packing slip.</span></a>
        <div class="mp-sidebar__group-label">Remove</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-remove"><span class="mp-method mp-method--post">POST</span><span>Remove purchase order.</span></a>
        <div class="mp-sidebar__group-label">Remove lines</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-remove-lines"><span class="mp-method mp-method--post">POST</span><span>Remove lines from a purchase o…</span></a>
        <div class="mp-sidebar__group-label">Set delivery supplier details</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-set-delivery-supplier-details"><span class="mp-method mp-method--post">POST</span><span>Set delivery supplier details…</span></a>
        <div class="mp-sidebar__group-label">Set delivery type</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-set-delivery-type"><span class="mp-method mp-method--post">POST</span><span>Set delivery type of a purchas…</span></a>
        <div class="mp-sidebar__group-label">Set expected delivery</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-set-expected-delivery"><span class="mp-method mp-method--post">POST</span><span>Set expected delivery of a pur…</span></a>
        <div class="mp-sidebar__group-label">Register</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-register"><span class="mp-method mp-method--post">POST</span><span>Register a purchase order.</span></a>
        <div class="mp-sidebar__group-label">Update line quantity</div>
        <a class="mp-sidebar__item" href="/developer-portal/api/purchase-order.html#post-update-line-quantity"><span class="mp-method mp-method--post">POST</span><span>Update quantity of a purchase…</span></a>
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
