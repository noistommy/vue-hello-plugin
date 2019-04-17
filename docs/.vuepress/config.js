module.exports = {
	locales: {
		'/': {
			lang: 'en-US',
			title: 'VueHelloPlugin',
			description: 'VueHelloPlugin for Vue.js'
		}
	},
	themeConfig: {
		repo: 'noistommy/vue-hello-plugin',
		docsDir: 'docs',
		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				editLinkText: 'Edit this page on GitHub',
				nav: [{
					text: 'Release Notes',
					link: 'https://github.com/noistommy/vue-hello-plugin/releases'
				}],
				sidebar: [
					'/installation.md',
					'/started.md',
				]
			}
		}
	}
}

