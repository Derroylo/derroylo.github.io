import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WebDev Documentation",
  description: "A tool that aims to make life easier with web development using devcontainer",
  lang: 'en-US',
  lastUpdated: true,
  base: "/",
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/Derroylo/derroylo.github.io/edit/main/docs/:path'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Getting Started', link: '/', activeMatch: '/' },
      { text: 'CLI', link: '/cli/index', activeMatch: '/cli/' },
      { text: 'Howto', link: '/howto/index', activeMatch: '/howto/' },
      { text: 'Reference', link: '/reference/index' },
    ],

    sidebar: {
      "/": [
        {
          text: 'Introduction',
          items: [
            { text: 'What is WebDev?', link: '/' },
            { text: 'How does it work?', link: '/how_does_it_work' },
            { text: 'Requirements', link: '/requirements' },
            { text: 'Installation', link: '/install' },
            { text: 'First Steps', link: '/first_steps' },
          ]
        },
        {
          text: 'Changelog',
          collapsed: true,
          items: [
            { text: 'v0.3.0', link: '/changelog/v0.3.0' },
          ]
        }
      ],
      "/cli/": [
        {
          items: [
            { 
              text: 'Commands', 
              items: [
                { text: 'Update', link: '/cli/commands/update' },
                { text: 'Configuration', link: '/cli/commands/config' },
                { text: 'PHP', link: '/cli/commands/php' },
                { text: 'NodeJS', link: '/cli/commands/nodejs' },
                { text: 'Apache', link: '/cli/commands/apache' },
                { text: 'Services', link: '/cli/commands/services' },
                { text: 'Restore', link: '/cli/commands/restore' },
              ]
            },
            { 
              text: 'Custom Commands', 
              items: [
                { text: 'Overview', link: '/cli/custom_commands/' },
                { 
                  text: 'Examples', 
                  link: '/cli/custom_commands/examples',
                  items: [
                    { text: 'Shopware', link: '/cli/custom_commands/examples/shopware' },
                    { text: 'Oxid', link: '/cli/custom_commands/examples/oxid' },
                    { text: 'Sulu', link: '/cli/custom_commands/examples/sulu' },
                    { text: 'Symfony', link: '/cli/custom_commands/examples/symfony' },
                  ]
                }
              ]
            }
          ]
        },
      ],
      "/howto/": [
          {
            text: 'Xdebug',
            items: [
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
            ]
          }
      ],
      "/reference/": [
        {
          text: 'Reference',
          items: [
            {
              text: 'webdev.yml',
              items: [
                { text: 'Full Example', link: '/reference/webdev_yml/example' },
                { text: 'Config', link: '/reference/webdev_yml/config' },
                { text: 'PHP', link: '/reference/webdev_yml/php' },
                { text: 'Services', link: '/reference/webdev_yml/services' },
                { text: 'NodeJS', link: '/reference/webdev_yml/nodejs' },
                { text: 'Shellscripts', link: '/reference/webdev_yml/shell-scripts' },
                { text: 'Secrets', link: '/reference/webdev_yml/secrets' },
                { text: 'Workspaces', link: '/reference/webdev_yml/workspaces' },
                { text: 'Tasks', link: '/reference/webdev_yml/tasks' },
              ]
            },
            {
              text: 'docker-compose.yml',
              items: [
                { text: 'Services', link: '/reference/docker_compose' },
              ]
            },
            {
              text: 'WebDev',
              items: [
                { text: 'Init process', link: '/reference/webdev/init_process' },
                { text: 'Post start process', link: '/reference/webdev/post_start_process' },
              ]
            }
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Derroylo/webdev-tool' }
    ]
  }
})
