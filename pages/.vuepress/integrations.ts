// Canonical list of every MyParcel integration, ported from the integrations
// overview on the previous developer portal (developer.myparcel.nl).
//
// One flat data file feeds the /integrations.html page. Names and logos are
// rendered verbatim; every other string on the page is an English key that the
// data-i18n runtime translates, so this list never needs a locale copy.
//
// `markets` records where an integration is actually usable. Most of our
// integrations are built for the Dutch and Belgian market; the ones that are
// also built for Italy carry 'it'. Everything API-level (SDKs, PDK, Delivery
// Options, Chrome extension) is market-agnostic and uses ALL_MARKETS.

export type Market = 'nlbe' | 'it';

/** Every market, for integrations that are not tied to a country. */
export const ALL_MARKETS: Market[] = ['nlbe', 'it'];

export interface IntegrationLink {
  /** Translated label key. */
  label: 'Documentation' | 'GitHub' | 'Website';
  /** Absolute external URL, or a slug-only path on this portal. */
  url: string;
  /** True when the URL leaves this portal. */
  external?: boolean;
}

export interface Integration {
  name: string;
  /** Filename inside /images/integrations/. */
  logo: string;
  /** Where the integration is usable. */
  markets: Market[];
  /** Built and maintained by MyParcel itself. */
  byMyParcel?: boolean;
  /** Documented as end-of-life; kept listed for shops still running it. */
  eol?: boolean;
  /**
   * How the connection is made, when that is not obvious from the group.
   * Only set where there is genuinely no plug-in or app to install: the
   * MyParcel Backoffice offers a sales channel instead.
   */
  connection?: 'Sales channel';
  /**
   * Tile background for logos that are light artwork and would otherwise
   * vanish on the default white tile. Same colours the previous portal used.
   */
  logoBg?: string;
  links: IntegrationLink[];
}

export interface IntegrationGroup {
  /** Anchor id. */
  id: string;
  /** Translated heading key. */
  label: string;
  /** Translated intro key. */
  intro: string;
  items: Integration[];
}

const NLBE: Market[] = ['nlbe'];

/** Shorthand builders, purely to keep the list below readable. */
const docs = (url: string): IntegrationLink => ({ label: 'Documentation', url });
const extDocs = (url: string): IntegrationLink => ({ label: 'Documentation', url, external: true });
const github = (repo: string): IntegrationLink => ({
  label: 'GitHub',
  url: `https://github.com/${repo}`,
  external: true,
});
const site = (url: string): IntegrationLink => ({ label: 'Website', url, external: true });

/** Docs that still only live on the previous portal. */
const oldPortal = (slug: string): IntegrationLink => extDocs(`https://developer.myparcel.nl/${slug}`);

export const integrationGroups: IntegrationGroup[] = [
  {
    id: 'webshop-platforms',
    label: 'Webshop platforms',
    intro:
      'Connect the platform your shop runs on. The ones carrying the MyParcel mark are plug-ins, apps and sales channels we build and maintain ourselves. For the rest, the platform or a partner ships the connection and you switch it on there, so their support desk owns it.',
    items: [
      {
        name: 'WooCommerce',
        logo: 'woocommerce.svg',
        markets: ALL_MARKETS,
        byMyParcel: true,
        links: [
          docs('/platforms/woocommerce.html'),
          github('myparcelnl/woocommerce'),
          site('https://nl.wordpress.org/plugins/woocommerce-myparcel/'),
        ],
      },
      {
        name: 'PrestaShop',
        logo: 'prestashop.svg',
        markets: ALL_MARKETS,
        byMyParcel: true,
        links: [docs('/platforms/prestashop.html'), github('myparcelnl/prestashop')],
      },
      {
        name: 'Shopify',
        logo: 'shopify.svg',
        markets: ALL_MARKETS,
        byMyParcel: true,
        links: [
          docs('/platforms/shopify.html'),
          site('https://apps.shopify.com/myparcel-nl-1?locale=nl'),
        ],
      },
      {
        name: 'Lightspeed',
        logo: 'lightspeed.svg',
        markets: ALL_MARKETS,
        byMyParcel: true,
        links: [
          docs('/platforms/lightspeed.html'),
          site('https://www.lightspeedhq.nl/ecommerce/store/apps/myparcel/'),
        ],
      },
      {
        name: 'Magento 2',
        logo: 'magento.svg',
        markets: NLBE,
        byMyParcel: true,
        links: [docs('/platforms/magento2.html'), github('myparcelnl/magento')],
      },
      {
        name: 'CS-Cart',
        logo: 'cscart.svg',
        connection: 'Sales channel',
        markets: ALL_MARKETS,
        byMyParcel: true,
        links: [docs('/platforms/cscart.html')],
      },
      {
        name: 'OpenCart 4',
        logo: 'opencart.svg',
        markets: ALL_MARKETS,
        byMyParcel: true,
        links: [docs('/platforms/opencart.html')],
      },
      {
        name: 'Ecwid',
        logo: 'ecwid.svg',
        markets: NLBE,
        byMyParcel: true,
        links: [
          oldPortal('documentation/17.ecwid.html'),
          site('https://www.ecwid.com/apps/shipping/myparcel/'),
        ],
      },
      {
        name: 'Shopware',
        logo: 'shopware.svg',
        markets: NLBE,
        byMyParcel: true,
        links: [
          oldPortal('documentation/15.shopware.html'),
          site('https://store.shopware.com/en/myparcel.html'),
        ],
      },
      {
        name: 'Wix',
        logo: 'wix.svg',
        markets: NLBE,
        byMyParcel: true,
        links: [
          oldPortal('documentation/20.wix.html'),
          site('https://nl.wix.com/app-market/myparcel/'),
        ],
      },
      {
        name: 'Shoppagina',
        logo: 'shoppagina.svg',
        markets: NLBE,
        links: [extDocs('https://myparcelnl.github.io/shoppagina'), site('https://www.shoppagina.nl/')],
      },
      {
        name: 'CCV',
        logo: 'ccv.png',
        markets: NLBE,
        links: [extDocs('https://myparcelnl.github.io/ccv-shop'), site('https://www.ccvshop.nl/')],
      },
      {
        name: 'Mijnwebwinkel',
        logo: 'mijnwebwinkel.svg',
        markets: NLBE,
        links: [
          extDocs(
            'https://www.mijnwebwinkel.nl/support-resources/vraag-antwoord/hoe-gebruik-ik-myparcel-mijnwebwinkel',
          ),
          site('https://www.mijnwebwinkel.nl/'),
        ],
      },
      {
        name: 'osCommerce',
        logo: 'oscommerce.png',
        logoBg: '#263559',
        markets: NLBE,
        links: [extDocs('https://www.myparcel.nl/integrations/oscommerce/')],
      },
      {
        name: 'BigCommerce',
        logo: 'bigcommerce.svg',
        markets: NLBE,
        links: [extDocs('https://www.myparcel.nl/integrations/bigcommerce/')],
      },
      {
        name: 'Gratis Webshop Beginnen',
        logo: 'gratis-webshop-beginnen.png',
        markets: NLBE,
        links: [
          extDocs(
            'https://www.gratiswebshopbeginnen.nl/help/webshop-apps/hoe-werkt-de-myparcel-koppeling/',
          ),
          site('https://www.gratiswebshopbeginnen.nl/'),
        ],
      },
      {
        name: 'LogiVert',
        logo: 'logivert.svg',
        markets: NLBE,
        links: [extDocs('https://www.logivert.com/nl/'), site('https://www.logivert.com/')],
      },
      {
        name: 'myShop',
        logo: 'myshop.svg',
        markets: NLBE,
        links: [extDocs('https://myparcelnl.github.io/myshop/'), site('https://www.myshop.com/')],
      },
      {
        name: 'Sherpaan',
        logo: 'sherpaan.svg',
        logoBg: '#001452',
        markets: NLBE,
        links: [extDocs('https://sherpaan.nl/project/myparcel/'), site('https://sherpaan.nl/')],
      },
      {
        name: 'Shoptrader',
        logo: 'shoptrader.png',
        markets: NLBE,
        links: [
          extDocs('https://www.shoptrader.nl/addons/myparcel-checkout.html'),
          site('https://www.shoptrader.nl/'),
        ],
      },
      {
        name: 'EasyWebshop',
        logo: 'easywebshop.svg',
        markets: NLBE,
        links: [extDocs('https://ews.wiki/pakketdiensten/myparcel'), site('https://easywebshop.com/')],
      },
      {
        name: 'Mijndomein',
        logo: 'mijndomein.png',
        markets: NLBE,
        links: [
          extDocs('https://mijndomein.zendesk.com/hc/nl/sections/13019196364305-MyParcel'),
          site('https://www.mijndomein.nl/'),
        ],
      },
      {
        name: 'Acendy',
        logo: 'acendy.png',
        markets: NLBE,
        links: [site('https://www.acendy.com/')],
      },
      {
        name: 'Base',
        logo: 'base.svg',
        markets: ALL_MARKETS,
        links: [site('https://base.com/')],
      },
      {
        name: 'Jeeigenweb',
        logo: 'jeeigenweb.png',
        markets: NLBE,
        links: [
          extDocs('https://www.myparcel.nl/koppelingen/jeeigenweb/'),
          site('https://jeeigenweb.nl/'),
        ],
      },
      {
        name: 'Afosto',
        logo: 'afosto.svg',
        markets: NLBE,
        links: [extDocs('https://afosto.com/nl/docs/apps/myparcel/'), site('https://afosto.com/nl/')],
      },
      {
        name: 'Magento 1',
        logo: 'magento.svg',
        markets: NLBE,
        byMyParcel: true,
        eol: true,
        links: [
          extDocs('https://myparcelnl.github.io/magento1-End-of-life/'),
          github('myparcelnl/magento1'),
        ],
      },
      {
        name: 'OpenCart 2.2.x – 2.3.x',
        logo: 'opencart.svg',
        markets: NLBE,
        byMyParcel: true,
        links: [extDocs('https://myparcelnl.github.io/opencart2_3')],
      },
      {
        name: 'OpenCart 3',
        logo: 'opencart.svg',
        markets: NLBE,
        byMyParcel: true,
        links: [extDocs('https://myparcelnl.github.io/opencart3')],
      },
      {
        name: 'VirtueMart 2',
        logo: 'virtuemart.svg',
        markets: NLBE,
        links: [extDocs('https://myparcelnl.github.io/virtuemart')],
      },
      {
        name: 'VirtueMart 3',
        logo: 'virtuemart.svg',
        markets: NLBE,
        links: [extDocs('https://myparcelnl.github.io/virtuemart3')],
      },
    ],
  },
  {
    id: 'marketplaces',
    label: 'Marketplaces and channel management',
    intro:
      'Sell through marketplaces or manage several sales channels at once, and ship the resulting orders through MyParcel.',
    items: [
      {
        name: 'bol.com',
        logo: 'bol-com.svg',
        markets: NLBE,
        byMyParcel: true,
        links: [
          oldPortal('documentation/18.bol.html'),
          site('https://partnerplatform.bol.com/nl/intermediair/myparcel/'),
        ],
      },
      {
        name: 'Amazon',
        logo: 'amazon.svg',
        markets: NLBE,
        byMyParcel: true,
        links: [
          oldPortal('documentation/25.amazon.html'),
          site('https://www.myparcel.nl/en/integrations/amazon/'),
        ],
      },
      {
        name: 'Etsy',
        logo: 'etsy.svg',
        markets: NLBE,
        byMyParcel: true,
        links: [
          oldPortal('documentation/30.etsy.html'),
          site('https://www.myparcel.nl/koppelingen/etsy-verzenden/'),
        ],
      },
      {
        name: 'e-tailize',
        logo: 'e-tailize.png',
        markets: NLBE,
        links: [
          extDocs('https://help.e-tailize.com/en/articles/186674-connecting-myparcel'),
          site('https://e-tailize.com/nl/'),
        ],
      },
      {
        name: 'ShopLinkr',
        logo: 'shoplinkr.svg',
        markets: NLBE,
        links: [
          extDocs(
            'https://shoplinkr.notion.site/MyParcel-koppelen-58cfe20c650a4c07bd61367e4595060c',
          ),
          site('https://shoplinkr.com/'),
        ],
      },
      {
        name: 'ChannelDock',
        logo: 'channeldock.svg',
        markets: NLBE,
        links: [
          extDocs('https://help.channeldock.com/books/english-en/page/connecting-myparcel'),
          site('https://channeldock.com/nl/'),
        ],
      },
      {
        name: 'ProductFlow',
        logo: 'productflow.png',
        markets: NLBE,
        links: [site('https://www.productflow.com/')],
      },
    ],
  },
  {
    id: 'back-office',
    label: 'Warehouse, fulfilment and ERP software',
    intro:
      'Software that runs your warehouse, your orders or your administration. These connect to MyParcel from their side, so you set the connection up in their interface.',
    items: [
      {
        name: 'Picqer',
        logo: 'picqer.svg',
        markets: NLBE,
        links: [
          extDocs('https://picqer.com/nl/help/artikelen/myparcel-koppelen'),
          site('https://picqer.com/nl/'),
        ],
      },
      {
        name: 'Goedgepickt',
        logo: 'goedgepickt.svg',
        markets: NLBE,
        links: [
          extDocs('https://help.goedgepickt.nl/article/srujx2j0ln-my-parcel'),
          site('https://www.goedgepickt.nl/'),
        ],
      },
      {
        name: 'Stockpilot',
        logo: 'stockpilot.png',
        markets: NLBE,
        links: [
          extDocs('https://help.stockpilot.com/article/me71o2kd4i-integrate-my-parcel-to-stockpilot'),
          site('https://stockpilot.com/nl/'),
        ],
      },
      {
        name: 'iPacky',
        logo: 'ipacky.png',
        markets: NLBE,
        links: [extDocs('https://ipacky.com/shipping-connectors-overview/'), site('https://ipacky.com/')],
      },
      {
        name: 'Stockitup',
        logo: 'stockitup.png',
        logoBg: '#05386b',
        markets: NLBE,
        links: [site('https://stockitup.nl/')],
      },
      {
        name: 'LyraWMS',
        logo: 'lyrawms.png',
        logoBg: '#3b82f6',
        markets: NLBE,
        links: [
          extDocs('https://help.lyrawms.nl/nl/articles/9014984-myparcel-als-vervoerder-koppelen'),
          site('https://help.lyrawms.nl/'),
        ],
      },
      {
        name: 'PackCloud',
        logo: 'packcloud.svg',
        markets: NLBE,
        links: [
          extDocs('https://pack.cloud/docs/integraties/myparcel/koppelen/'),
          site('https://pack.cloud/'),
        ],
      },
      {
        name: 'Fulfilment software',
        logo: 'fulfilment-software.svg',
        markets: NLBE,
        links: [site('https://fulfilment-software.com/')],
      },
      {
        name: 'OrderPanda',
        logo: 'orderpanda.png',
        markets: NLBE,
        links: [extDocs('https://orderpanda.nl/integratie-myparcel/'), site('https://orderpanda.nl/')],
      },
      {
        name: 'Brincr',
        logo: 'brincr.png',
        markets: NLBE,
        links: [site('https://brincr.com/')],
      },
      {
        name: 'DeliveryMatch',
        logo: 'deliverymatch.svg',
        markets: NLBE,
        links: [
          extDocs('https://www.deliverymatch.nl/engine/live/deliverymatch/register'),
          site('https://www.deliverymatch.nl/'),
        ],
      },
      {
        name: 'Exact Online',
        logo: 'exact-online.svg',
        markets: NLBE,
        byMyParcel: true,
        links: [extDocs('https://myparcelnl.github.io/exact-online'), site('https://www.exact.com/nl/')],
      },
      {
        name: 'Odoo',
        logo: 'odoo.svg',
        logoBg: '#714B67',
        markets: NLBE,
        links: [],
      },
      {
        name: 'Microsoft Dynamics 365',
        logo: 'microsoft-dynamics-365.svg',
        markets: NLBE,
        links: [
          site(
            'https://appsource.microsoft.com/product/dynamics-365-business-central/PUBID.britebluesolutions%7CAID.myparcel365%7CPAPPID.2851c756-71b9-4811-bf1c-4b1a92e47560/',
          ),
        ],
      },
      {
        name: 'CM Specialist',
        logo: 'cm-specialist.svg',
        markets: NLBE,
        links: [
          extDocs('https://www.myparcel.nl/koppelingen/cm-specialist/'),
          site('https://www.cmspecialist.nl/'),
        ],
      },
    ],
  },
  {
    id: 'build-your-own',
    label: 'Build your own integration',
    intro:
      'Go straight at our API. An SDK saves you most of the plumbing, and the PDK goes a step further: it is the plug-in framework we build our own plug-ins on.',
    items: [
      {
        name: 'PHP SDK',
        logo: 'php.svg',
        logoBg: '#787CB5',
        markets: ALL_MARKETS,
        byMyParcel: true,
        links: [docs('/guides/php-sdk.html'), github('myparcelnl/sdk')],
      },
      {
        name: 'JavaScript / Node.js SDK',
        logo: 'js.svg',
        logoBg: '#F7DF1E',
        markets: ALL_MARKETS,
        byMyParcel: true,
        links: [docs('/guides/javascript-sdk.html'), github('myparcelnl/js-sdk')],
      },
      {
        name: 'C# / .NET SDK',
        logo: 'c-sharp.svg',
        markets: ALL_MARKETS,
        links: [github('janssenr/MyParcelApi.Net')],
      },
      {
        name: 'Ruby SDK',
        logo: 'ruby.svg',
        logoBg: '#F44336',
        markets: ALL_MARKETS,
        links: [github('paypronl/myparcel')],
      },
      {
        name: 'PHP PDK',
        logo: 'php.svg',
        logoBg: 'var(--mp-goldfish)',
        markets: ALL_MARKETS,
        byMyParcel: true,
        links: [oldPortal('documentation/52.pdk/'), github('myparcelnl/pdk')],
      },
      {
        name: 'JS PDK',
        logo: 'js.svg',
        logoBg: 'var(--mp-goldfish)',
        markets: ALL_MARKETS,
        byMyParcel: true,
        links: [oldPortal('documentation/52.pdk/'), github('myparcelnl/js-pdk')],
      },
    ],
  },
  {
    id: 'add-ons',
    label: 'Add-ons',
    intro:
      'Tools you use alongside another integration. The Chrome extension creates shipments from any website, and our Delivery Options module already ships inside most of our plug-ins.',
    items: [
      {
        name: 'Delivery Options',
        logo: 'delivery-options.svg',
        logoBg: 'var(--mp-goldfish)',
        markets: ALL_MARKETS,
        byMyParcel: true,
        links: [docs('/platforms/delivery-options.html'), github('myparcelnl/delivery-options')],
      },
      {
        name: 'Google Chrome Extension',
        logo: 'chrome.svg',
        markets: NLBE,
        byMyParcel: true,
        links: [oldPortal('documentation/40.chrome-extension.html')],
      },
      {
        name: 'Plug&Pay',
        logo: 'plug-and-pay.svg',
        markets: NLBE,
        links: [
          extDocs(
            'https://help.imu.nl/nl/articles/6498451-plug-pay-koppeling-plug-pay-en-myparcel-via-google-chrome-plugin',
          ),
          site('https://plugandpay.nl/'),
        ],
      },
      {
        name: 'Bugalou',
        logo: 'bugalou.png',
        logoBg: '#000000',
        markets: NLBE,
        links: [extDocs('https://www.myparcel.nl/koppelingen/bugalou/'), site('https://bugalou.com/')],
      },
    ],
  },
];

/** Total number of integrations across every group. */
export const integrationCount = integrationGroups.reduce((n, g) => n + g.items.length, 0);
