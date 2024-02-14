import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

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
                link: '/1.x/getting-started/',
            },
            {
                text: 'Language Elements',
                link: '/1.x/language-elements/',
            },
            {
                text: 'Built-in Functions',
                link: '/1.x/functions/',
            },
            {
                text: 'Examples',
                link: '/1.x/examples/',
            },
            {
                text: 'FAQ',
                link: '/1.x/faq/',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/textwire/textwire',
            },
        ],
    }),
})
