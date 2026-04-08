import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { changelogsLoader } from 'starlight-changelogs/loader'
import { docsVersionsLoader } from 'starlight-versions/loader'
import { blogSchema } from 'starlight-blog/schema'

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema({
		extend: (context) =>
			blogSchema(context).extend({
				/** Hide default page title; use custom hero block in MDX (e.g. homepage). */
				landing: z.boolean().optional(),
			}),
	}) }),
	versions: defineCollection({ loader: docsVersionsLoader() }),
	changelogs: defineCollection({
		loader: changelogsLoader([
		  {
			provider: 'github',
			base: 'webdev-tool',
			owner: 'derroylo',
			repo: 'webdev-tool',
		  },
		  {
			provider: 'github',
			base: 'webdev-admin',
			owner: 'derroylo',
			repo: 'webdev-admin',
		  },
		]),
	}),
};
