import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// target: '#svelte',
		// prerender: {
		// 	crawl: true,
		// 	enabled: true,
		// 	force: true,
		// 	pages: ['*'],
		// },
	}
};

export default config;
