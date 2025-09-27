// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'dylgja',
  tagline: 'Leskande litteratur',
  favicon: 'favicon/favicon.ico',

  // Set the production url of your site here
  url: 'https://dylgja.no',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'markus-ap',
  projectName: 'dylgja.no',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'no',
    locales: ['no'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        } ,
        theme: {
          customCss: './src/css/custom.css',
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dylgja.no',
        logo: {
          alt: 'Dylgja Logo',
          src: 'favicon/favicon.ico', // Path to your favicon
        },
      },
      footer: {
        style: 'dark',
        copyright: `
        <div style="display: flex; flex-direction: column; align-items: center;">
          <a href="https://skvip.lol/@markus" target="_blank" rel="me">
            <img 
              src="https://joinmastodon.org/logos/logo-white.svg" 
              alt="Mastodon logo" 
              class="footer-mastodon-logo"
            />
          </a>
        </div>
      `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar:{
          hideable: true,
        }
      }
    }),
};

export default config;
