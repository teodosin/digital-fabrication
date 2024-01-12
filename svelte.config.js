import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/digital-fabrication' : '',
        },
		prerender: {
			entries: [
				"/blog",
				"/blog/about",]
	}
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
		})
	]
};

export default config;
