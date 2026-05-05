// Shared sidebar definition for the docs three-column layout.
// Mirrors the original portal's mp-docs-sidebar groups.

export interface SidebarItem {
  text: string;
  link: string;
}
export interface SidebarGroup {
  label: string;
  items: SidebarItem[];
}

export const docsSidebar: SidebarGroup[] = [
  {
    label: 'Documentation',
    items: [
      { text: 'Getting started', link: '/guides/getting-started.html' },
      { text: 'Authentication', link: '/guides/authentication.html' },
      { text: 'Shipments', link: '/guides/shipments.html' },
      { text: 'Delivery options', link: '/guides/delivery-options.html' },
      { text: 'Webhooks', link: '/guides/webhooks.html' },
      { text: 'Data types', link: '/guides/data-types.html' },
    ],
  },
  {
    label: 'SDKs',
    items: [
      { text: 'PHP SDK', link: '/guides/php-sdk.html' },
      { text: 'JavaScript SDK', link: '/guides/javascript-sdk.html' },
    ],
  },
  {
    label: 'Platform integrations',
    items: [
      { text: 'WooCommerce', link: '/platforms/woocommerce.html' },
      { text: 'Magento 2', link: '/platforms/magento2.html' },
      { text: 'Shopify', link: '/platforms/coming-soon.html?p=Shopify' },
      { text: 'PrestaShop', link: '/platforms/coming-soon.html?p=PrestaShop' },
      { text: 'Shopware', link: '/platforms/coming-soon.html?p=Shopware' },
      { text: 'Lightspeed', link: '/platforms/coming-soon.html?p=Lightspeed' },
      { text: 'Ecwid', link: '/platforms/coming-soon.html?p=Ecwid' },
      { text: 'Bol.', link: '/platforms/coming-soon.html?p=Bol.' },
      { text: 'Wix', link: '/platforms/coming-soon.html?p=Wix' },
      { text: 'Amazon', link: '/platforms/coming-soon.html?p=Amazon' },
      { text: 'Etsy', link: '/platforms/coming-soon.html?p=Etsy' },
      { text: 'Chrome extension', link: '/platforms/coming-soon.html?p=Chrome+extension' },
    ],
  },
  {
    label: 'Reference',
    items: [
      { text: 'MyParcel API', link: '/api/myparcel.html' },
      { text: 'Order API', link: '/api/order.html' },
      { text: 'IAM API', link: '/api/iam.html' },
      { text: 'Rule API', link: '/api/rule.html' },
      { text: 'Address API', link: '/api/address.html' },
      { text: 'Printing API', link: '/api/printing.html' },
      { text: 'Product API', link: '/api/product.html' },
    ],
  },
];
