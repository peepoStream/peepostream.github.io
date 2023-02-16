// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'peepoDocs',
  url: 'https://peepostream.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  tagline:
    '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'peepoStream', // Usually your GitHub org/user name.
  projectName: 'peepostream.github.io', // Usually your repo name.
	trailingSlash: false,

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
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      navbar: {
        title: 'peepoDocs',
        logo: {
          alt: 'peepoChatting',
          src: 'https://cdn.7tv.app/emote/60ef410f48cde2fcc3eb5caa/1x.webp',
        },
        items: [
          {
            type: 'doc',
            docId: '/main',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'updates', position: 'left'},
          {
            href: 'https://peepostream.com/',
            label: 'peepoStream',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Doc Categories',
            items: [
              {
                label: 'Account',
                to: '/docs/account',
              },
              {
                label: 'Software Setup',
                to: '/docs/setup',
              },
              {
                label: 'Rewards',
                to: '/docs/rewards',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/peepostream',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/peepoStream',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'peepoStream',
                href: 'https://peepostream.com/',
              },
              {
                label: 'Status Page',
                href: 'https://peepostream.instatus.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} peepoStream. Built with Docusaurus.`,
      },
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: false,
          respectPrefersColorScheme: false,
        },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
