import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
    title: 'Textwire',
    tagline: 'Easy for you, difficult for the parser',
    favicon: 'img/favicon.png',
    url: 'https://textwire.github.io',
    baseUrl: '/',
    organizationName: 'SerhiiCho',
    projectName: 'textwire',

    onBrokenLinks: 'throw',

    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        },
    },

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    versions: {
                        v1: {
                            label: 'v1',
                            path: 'v1',
                        },
                        v2: {
                            label: 'v2',
                            path: 'v2',
                        },
                        v3: {
                            label: 'v3',
                            path: 'v3',
                        },
                    },
                    onlyIncludeVersions: ['v1', 'v2', 'v3'],
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'Textwire',
            logo: {
                alt: 'Textwire Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                { to: '/community', label: 'Community', position: 'left' },
                {
                    type: 'docsVersionDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/textwire/textwire.nvim',
                    label: 'Neovim',
                    position: 'right',
                },
                {
                    href: 'https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire',
                    label: 'VSCode',
                    position: 'right',
                },
                {
                    href: 'https://github.com/textwire/textwire',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'https://liberapay.com/textwire/',
                    label: 'Donate',
                    position: 'right',
                },
                {
                    type: 'search',
                    position: 'right',
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.oneDark,
            additionalLanguages: ['diff', 'bash'],
        },
    } satisfies Preset.ThemeConfig,

    plugins: [
        [
            'docusaurus-lunr-search',
            {
                excludeRoutes: ['/docs/v1/**'],
                disableVersioning: true,
            },
        ],
    ],
}

export default config
