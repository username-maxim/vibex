// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VIBEX',
  tagline: 'The compiler that vibes.',
  favicon: 'img/favicon.ico',

  url: 'https://username-maxim.github.io',
  baseUrl: '/vibex/',

  organizationName: 'username-maxim',
  projectName: 'vibex',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'zh', 'hy'],
    localeConfigs: {
      en: { label: 'English' },
      ru: { label: 'Русский' },
      zh: { label: '中文' },
      hy: { label: 'Հայerեն' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'VIBEX',
        items: [
          { to: '/', label: 'Docs', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/username-maxim/vibex',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Built with VIBEX. Probably.`,
      },
      prism: {
        additionalLanguages: ['bash', 'asm6502'],
      },
    }),
};

export default config;
