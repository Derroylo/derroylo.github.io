import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WebDev Documentation",
  description: "A tool that aims to make life easier with web development using devcontainer",
  lang: 'en-US',
  lastUpdated: true,
  base: "/",
  cleanUrls: true,
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js' }],
    ['script', {}, `
      function initMermaid() {
        if (typeof mermaid !== 'undefined') {
          console.log('Initializing Mermaid...');
          mermaid.initialize({ 
            startOnLoad: false,
            theme: 'dark',
            darkMode: true,
            securityLevel: 'loose',
            fontFamily: 'inherit',
            logLevel: 1,
            htmlLabels: true
          });
          
          // Find all mermaid code blocks and render them
          const mermaidElements = document.querySelectorAll('.language-mermaid pre code');
          console.log('Found', mermaidElements.length, 'mermaid elements');
          
          mermaidElements.forEach((element, index) => {
            try {
              console.log('Rendering mermaid element', index + 1);
              const id = 'mermaid-' + Date.now() + '-' + index;
              
              // Get the parent pre element to replace
              const preElement = element.parentElement;
              preElement.id = id;
              
              // Get the code content
              const code = element.textContent;
              console.log('Code content:', code);
              
              mermaid.render(id, code).then(({svg}) => {
                console.log('SVG generated successfully');

                console.log('Parent element:', preElement.parentElement);

                // Replace the pre element content with the SVG
                document.querySelector('.language-mermaid').innerHTML = svg;
                //preElement.innerHTML = svg;
                //preElement.className = 'mermaid-container';
              }).catch((error) => {
                console.error('Error rendering mermaid element', index + 1, ':', error);
                console.log('Element content:', code);
              });
            } catch (error) {
              console.error('Error rendering mermaid element', index + 1, ':', error);
              console.log('Element content:', element.textContent);
            }
          });
        } else {
          console.log('Mermaid not loaded yet, retrying...');
          setTimeout(initMermaid, 100);
        }
      }
      
      // Try to initialize on DOMContentLoaded first
      //document.addEventListener('DOMContentLoaded', initMermaid);
      
      // Fallback to load event
      //window.addEventListener('load', initMermaid);
      
      // Also try immediately in case script loads after DOM
      initMermaid();
    `]
  ],
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
          text: 'Details',
          items: [
            { text: 'Setup project with WebDev', link: '/convert_project' },
            { text: 'Proxy', link: '/proxy' },
            { text: 'Workspaces', link: '/workspaces' },
            { text: 'Tasks', link: '/tasks' },
            { text: 'Secrets', link: '/secrets' },
            { text: 'Live Database', link: '/live_database' },
            { text: 'Services', link: '/services' },
          ]
        },
        {
          text: 'Changelog',
          collapsed: true,
          items: [
            { text: 'v0.3.1', link: '/changelog/v0.3.1' },
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
                { text: 'Apache', link: '/cli/commands/apache' },
                { text: 'Configuration', link: '/cli/commands/config' },
                { text: 'Info', link: '/cli/commands/info' },
                { text: 'MySQL', link: '/cli/commands/mysql' },
                { text: 'NodeJS', link: '/cli/commands/nodejs' },
                { text: 'PHP', link: '/cli/commands/php' },
                { text: 'Project', link: '/cli/commands/project' },
                { text: 'Restore', link: '/cli/commands/restore' },
                { text: 'Secrets', link: '/cli/commands/secrets' },
                { text: 'Services', link: '/cli/commands/services' },
                { text: 'Tasks', link: '/cli/commands/tasks' },
                { text: 'Update', link: '/cli/commands/update' },
              ]
            },
            { 
              text: 'Env Variables', link: '/cli/env_variables'
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
                { text: 'WebDev execute', link: '/reference/webdev/webdev_execute' },
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
