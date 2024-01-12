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
                text: 'Guide',
                link: '/v1/guide',
            },
            {
                text: 'Features',
                link: '/v1/features',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/textwire/textwire',
            },
            {
                text: '👨🏻‍💻 Author',
                link: 'https://serhii.io/about-me',
                rel: 'author',
            },
            {
                text: '☕️ Buy me a coffee',
                link: 'https://www.buymeacoffee.com/serhiicho',
            },
        ],
    }),
})
