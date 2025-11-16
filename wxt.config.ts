import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'GitHub Code Wiki Button (Unofficial)',
    version: '1.0.0',
    description: '__MSG_appDescription__',
    default_locale: 'en',
    permissions: ['scripting'],
    host_permissions: ['https://github.com/*'],
    icons: {
      16: '/images/icon-16.png',
      19: '/images/icon-19.png',
      32: '/images/icon-32.png',
      38: '/images/icon-38.png',
      48: '/images/icon-48.png',
      64: '/images/icon-64.png',
      128: '/images/icon-128.png',
    },
    web_accessible_resources: [
      {
        resources: [
          'images/icon-16.png',
          'images/icon-19.png',
          'images/icon-32.png',
          'images/icon-38.png',
          'images/icon-48.png',
          'images/icon-64.png',
          'images/icon-128.png',
        ],
        matches: ['https://github.com/*'],
      },
    ],
    browser_specific_settings: {
      gecko: {
        id: '{8c3f4a7d-9e2b-4f1c-a5d6-7b8e9f0a1c2d}',
        strict_min_version: '102.0',
      },
    },
  },
  browser: process.env.BROWSER as 'chrome' | 'firefox' | 'edge' | undefined,
});
