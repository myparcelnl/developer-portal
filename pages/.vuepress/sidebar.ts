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
      { text: 'Getting started', link: '/beta-developer-portal/guides/getting-started.html' },
      { text: 'Authentication', link: '/beta-developer-portal/guides/authentication.html' },
      { text: 'Shipments', link: '/beta-developer-portal/guides/shipments.html' },
      { text: 'Delivery options', link: '/beta-developer-portal/guides/delivery-options.html' },
      { text: 'Webhooks', link: '/beta-developer-portal/guides/webhooks.html' },
      { text: 'Data types', link: '/beta-developer-portal/guides/data-types.html' },
    ],
  },
  {
    label: 'SDKs',
    items: [
      { text: 'PHP SDK', link: '/beta-developer-portal/guides/php-sdk.html' },
      { text: 'JavaScript SDK', link: '/beta-developer-portal/guides/javascript-sdk.html' },
    ],
  },
  {
    label: 'Platform integrations',
    items: [
      { text: 'WooCommerce', link: '/beta-developer-portal/platforms/woocommerce.html' },
      { text: 'Magento 2', link: '/beta-developer-portal/platforms/magento2.html' },
      { text: 'Shopify', link: '/beta-developer-portal/platforms/coming-soon.html?p=Shopify' },
      { text: 'PrestaShop', link: '/beta-developer-portal/platforms/prestashop.html' },
      { text: 'Shopware', link: '/beta-developer-portal/platforms/coming-soon.html?p=Shopware' },
      { text: 'Lightspeed', link: '/beta-developer-portal/platforms/coming-soon.html?p=Lightspeed' },
      { text: 'Ecwid', link: '/beta-developer-portal/platforms/coming-soon.html?p=Ecwid' },
      { text: 'Bol.', link: '/beta-developer-portal/platforms/coming-soon.html?p=Bol.' },
      { text: 'Wix', link: '/beta-developer-portal/platforms/coming-soon.html?p=Wix' },
      { text: 'Amazon', link: '/beta-developer-portal/platforms/coming-soon.html?p=Amazon' },
      { text: 'Etsy', link: '/beta-developer-portal/platforms/coming-soon.html?p=Etsy' },
      { text: 'Chrome extension', link: '/beta-developer-portal/platforms/coming-soon.html?p=Chrome+extension' },
    ],
  },
  {
    label: 'Reference',
    items: [
      { text: 'MyParcel API', link: '/beta-developer-portal/api/myparcel.html' },
      { text: 'Order API', link: '/beta-developer-portal/api/order.html' },
      { text: 'IAM API', link: '/beta-developer-portal/api/iam.html' },
      { text: 'Rule API', link: '/beta-developer-portal/api/rule.html' },
      { text: 'Address API', link: '/beta-developer-portal/api/address.html' },
      { text: 'Printing API', link: '/beta-developer-portal/api/printing.html' },
      { text: 'Product API', link: '/beta-developer-portal/api/product.html' },
    ],
  },
];
