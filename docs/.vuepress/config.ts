import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Textwire',
    description: 'A template language for Go',
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
        })
    ],
    theme: defaultTheme({
        navbar: [
            {
                text: 'Getting Started',
                link: '/1.x/getting-started',
            },
            {
                text: 'Language Elements',
                link: '/1.x/language-elements',
            },
            {
                text: 'Usage with Templates',
                link: '/1.x/usage-with-templates',
            },
            {
                text: 'Error Handling',
                link: '/1.x/error-handling',
            },
            {
                text: 'Examples',
                link: '/1.x/examples',
            },
            {
                text: 'FAQ',
                link: '/1.x/faq',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/textwire/textwire',
            },
        ],
    }),
})
