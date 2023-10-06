import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GPT Documentation",
  description: "A tool that aims to make life easier with web development using gitpod",
  lang: 'en-US',
  lastUpdated: true,
  base: "/",
  themeConfig: {
    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/Derroylo/derroylo.github.io/edit/main/docs/:path'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/index', activeMatch: '/guide/' },
      { text: 'Howto', link: '/howto/index', activeMatch: '/howto/' },
      { text: 'Reference', link: '/reference/index' },
    ],

    sidebar: {
      "/guide": [
        {
          text: 'Introduction',
          items: [
            { text: 'What is GPT?', link: '/guide/index' },
            { text: 'Installation', link: '/guide/install' },
            { text: 'Development', link: '/guide/develop' },
          ]
        },
        {
          text: 'Usage',
          items: [
            { text: 'General', link: '/guide/usage' },
            { 
              text: 'Commands', 
              items: [
                { text: 'Update', link: '/guide/usage/commands/update' },
                { text: 'Configuration', link: '/guide/usage/commands/config' },
                { text: 'PHP', link: '/guide/usage/commands/php' },
                { text: 'NodeJS', link: '/guide/usage/commands/nodejs' },
                { text: 'Apache', link: '/guide/usage/commands/apache' },
                { text: 'MySQL', link: '/guide/usage/commands/mysql' },
                { text: 'Services', link: '/guide/usage/commands/services' },
                { text: 'Restore', link: '/guide/usage/commands/restore' },
                { text: 'Ask', link: '/guide/usage/commands/ask' },
              ]
            }
          ]
        },
        {
          text: 'Extensions',
          items: [
            { text: 'Extend GPT', link: '/guide/extensions' },
            {
              text: 'Extension Examples',
              items: [
                { text: 'Shopware', link: '/guide/extensions/shopware' },
                { text: 'Oxid', link: '/guide/extensions/oxid' },
                { text: 'Sulu', link: '/guide/extensions/sulu' },
                { text: 'Symfony', link: '/guide/extensions/symfony' },
              ]
            }
          ]
        }
      ],
      "/howto": [
          {
            text: 'Howto´s',
            items: [
              { text: 'Xdebug', link: '/howto/xdebug/index'}
            ]
          }
      ],
      "/howto/xdebug": [
        {
          text: 'General',
          items: [
            { text: 'Introduction', link: '/howto/xdebug/index' },
            { text: 'Installation', link: '/howto/xdebug/installation' },
            { text: 'Setup', link: '/howto/xdebug/setup' }
          ]
        },
        {
          text: 'Xdebug Modes',
          items: [
            { text: 'off', link: '/howto/xdebug/modes/off' },
            { text: 'develop', link: '/howto/xdebug/modes/develop' },
            { text: 'debug', link: '/howto/xdebug/modes/debug' },
            { text: 'profile', link: '/howto/xdebug/modes/profile' }
          ]
        },
        {
          text: 'Usage',
          items: [
            { text: 'CLI' },
            { text: 'Browser' },
            { text: 'VS Code' },
            { text: 'PhpStorm' },
            { text: 'Postman' }
          ]
        }
    ],
      "/reference": [
        {
          text: 'Reference',
          items: [
            {
              text: 'gpt.yml',
              items: [
                { text: 'Config', link: '/reference/config' },
                { text: 'PHP', link: '/reference/php' },
                { text: 'Services', link: '/reference/services' },
                { text: 'NodeJS', link: '/reference/nodejs' },
                { text: 'Shellscripts', link: '/reference/shell-scripts' },
              ]
            }
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Derroylo/gitpod-tool' },
      { icon: 'twitter', link: 'https://twitter.com/Derroylo' }
    ]
  }
})
