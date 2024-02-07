import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Textwire',
    description: 'A template language for Go',
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),
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
                link: '/v1/getting-started',
            },
            {
                text: 'Language Elements',
                link: '/v1/language-elements',
            },
            {
                text: 'Built-in Functions',
                link: '/v1/functions',
            },
            {
                text: 'Examples',
                link: '/v1/examples',
            },
            {
                text: 'FAQ',
                link: '/v1/faq',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/textwire/textwire',
            },
        ],
    }),
})
