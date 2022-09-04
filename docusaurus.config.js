// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'chim',
  tagline: 'Cross-platform binary shims with optional remote fetching.',
  url: 'https://chim.sh/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // gh-pages config
  organizationName: 'chim',
  projectName: 'chim.sh',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/jdxcode/chim.sh/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/jdxcode/chim.sh/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        //respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'chim',
        logo: {
          alt: 'chim',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'what-is-chim',
            position: 'left',
            label: 'What is chim?',
          },
          {
            type: 'doc',
            docId: 'installing',
            position: 'left',
            label: 'Installing',
          },
          {
            type: 'doc',
            docId: 'configuration',
            position: 'left',
            label: 'Configuration',
          },
          {
            type: 'doc',
            docId: 'faq',
            position: 'left',
            label: 'FAQs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/jdxcode/chim',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        }
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'What is chim?',
                to: '/docs/what-is-chim',
              },
              {
                label: 'Installing',
                to: '/docs/installing',
              },
              {
                label: 'Configuration',
                to: '/docs/configuration',
              },
              {
                label: 'FAQs',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/chim',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/KavQAgsBq3',
              },
              /* {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              }, */
            ],
          },
          {
            title: 'More',
            items: [
              /* {
                label: 'Blog',
                to: '/blog',
              }, */
              {
                label: 'GitHub',
                href: 'https://github.com/jdxcode/chim',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://jdxcode.com/">@jdxcode</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          // 'shell-session',
          'toml',
          'batch',
        ]
      },
    }),
};

module.exports = config;
