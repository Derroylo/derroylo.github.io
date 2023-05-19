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
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Reference', link: '/reference' },
    ],

    sidebar: {
      "/guide": [
        {
          text: 'Introduction',
          items: [
            { text: 'What is GPT?', link: '/guide' },
            { text: 'Installation', link: '/guide/install' },
          ]
        },
        {
          text: 'Usage',
          items: [
            { text: 'PHP', link: '/guide/usage/php' },
            { text: 'Services', link: '/guide/usage/services' },
          ]
        },
        {
          text: 'Extensions',
          items: [
            { text: 'Extend GPT', link: '/guide/extensions' },
            { text: 'Shopware', link: '/guide/extensions/shopware' },
            { text: 'Oxid', link: '/guide/extensions/oxid' },
            { text: 'Sulu', link: '/guide/extensions/sulu' },
            { text: 'Symfony', link: '/guide/extensions/symfony' },
          ]
        }
      ],
      "/reference": [
        {
          text: 'gpt.yml',
          items: [
            { text: 'GPT config', link: '/reference' },
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
