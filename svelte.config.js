import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

import remarkUnwrapImages from 'remark-unwrap-images';
import remarkAttr from 'remark-attr';

import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */

const basePath = process.env.NODE_ENV === 'production' ? '/digital-fabrication' : '';

const entries = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'src/lib/utils/prerender-entries.json'), 'utf-8'));

const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
        paths: {
            base: basePath,
        },
        prerender: {
			entries: entries,
            // entries: [
            //     "/about",
            //     "/something"
            // ]
        }
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [
				remarkUnwrapImages,
				remarkAttr,
			],
		})
	]
};

export default config;
