import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			enabled: true,
			// force: true,
			onError: 'continue',
      		entries: ['*']
      
		},
	}
};

export default config;
