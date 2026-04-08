// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";
import starlightUiTweaks from 'starlight-ui-tweaks'
import starlightHeadingBadges from 'starlight-heading-badges'
import starlightChangelogs, { makeChangelogsSidebarLinks } from 'starlight-changelogs'
import starlightVersions from 'starlight-versions'
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'WebDev',
			customCss: ['./src/styles/global.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/derroylo' }],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
				PageTitle: './src/components/PageTitle.astro',
			},
			sidebar: [
				{
					label: 'Getting Started',
					collapsed: true,
					items: [
						{ label: 'What is WebDev?', slug: 'getting_started/introduction/what_is_webdev' },
						{ label: 'How does it work?', slug: 'getting_started/introduction/how_does_it_work' },
						{ label: 'Requirements', slug: 'getting_started/introduction/requirements' },
						{ label: 'Installation', slug: 'getting_started/introduction/installation' },
						{ label: 'First steps', slug: 'getting_started/introduction/first_steps' },
					],
				},
				{
					label: 'Setup / Configuration',
					collapsed: true,
					items: [
						{ label: 'Convert existing project', slug: 'getting_started/details/convert_project' },
						{ label: 'Proxy', slug: 'getting_started/details/proxy' },
						{ label: 'Workspaces', slug: 'getting_started/details/workspaces' },
						{ label: 'Tasks', slug: 'getting_started/details/tasks' },
						{ label: 'Secrets', slug: 'getting_started/details/secrets' },
						{ label: 'Live Database', slug: 'getting_started/details/live_database' },
						{ label: 'Services', slug: 'getting_started/details/services' },
						{ label: 'Tests', slug: 'getting_started/details/tests' },
					],
				},
				{
					label: 'CLI',
					collapsed: true,
					items: [
						{
							label: 'Overview',
							slug: 'cli',
						},
						{ 
							label: 'Commands', 
							collapsed: true,
							autogenerate: { directory: 'cli/commands' } 
						},
						{ 
							label: 'Custom Commands', slug: 'cli/custom_commands' 
						},
						{ 
							label: 'Custom Commands Examples', 
							collapsed: true,
							autogenerate: { directory: 'cli/custom_commands/examples' } 
						},
						{ 
							label: 'Env Variables', slug: 'cli/env_variables' 
						},
					],
				},
				{
					label: 'Reference',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
                {
                    label: 'Changelog',
					collapsed: true,
                    items: [
						{ label: 'PreRelease Changelog', slug: 'changelog/prerelease_changelog' },
						{ label: 'Update to new version', slug: 'changelog/breaking_changes' },
						{
							label: 'WebDev Tool',
							items: [
								...makeChangelogsSidebarLinks([
									{
										type: 'latest',
										base: 'webdev-tool',
										label: 'Latest Version',
									},
									{
										type: 'all',
										base: 'webdev-tool',
										label: 'Version History',
									},
								])
							]
						},
						{
							label: 'WebDev Admin',
							items: [
								...makeChangelogsSidebarLinks([
									{
										type: 'latest',
										base: 'webdev-admin',
										label: 'Latest Version',
									},
									{
										type: 'all',
										base: 'webdev-admin',
										label: 'Version History',
									},
								])
							]
						}		
					]
                }
			],
			plugins: [
				starlightUiTweaks({
					navbarLinks: [
						{ label: "Getting Started", href: "/getting_started/introduction/what_is_webdev" },
						{ label: "Setup / Configuration", href: "/getting_started/details/convert_project/" },
						{ label: "CLI", href: "/cli" },
						{ label: "Reference", href: "/reference" },
						{ label: "Changelog", href: "/changelog/prerelease_changelog/" },
						{ label: "Blog", href: "/blog" },
					  ],
					}
				),
				catppuccin({
					dark: { flavor: "macchiato", accent: "blue" },
					light: { flavor: "latte", accent: "blue" },
				}),
				starlightHeadingBadges(),
				starlightChangelogs(),
				starlightVersions({
					versions: [{ slug: '0.3', label: 'v0.3' }],
				}),
				starlightBlog()
			],
			routeMiddleware: "./src/routeData.ts",
		}),
	],
});
