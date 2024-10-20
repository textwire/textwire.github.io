import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
    title: 'Textwire',
    tagline: 'Simple yet powerful template language for Go',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    url: 'https://textwire.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'SerhiiCho', // Usually your GitHub org/user name.
    projectName: 'textwire', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
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
                    },
                    onlyIncludeVersions: ['v1', 'v2'],
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
                // { to: '/blog', label: 'Blog', position: 'left' },
                {
                    type: 'docsVersionDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/textwire/textwire/blob/main/CHANGELOG.md',
                    label: 'Changelog',
                    position: 'right',
                },
                {
                    href: 'https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire',
                    label: 'VSCode Extension',
                    position: 'right',
                },
                {
                    href: 'https://github.com/textwire/textwire',
                    label: 'GitHub',
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
        },
        // algolia: {
        //     // The application ID provided by Algolia
        //     appId: 'YOUR_APP_ID',

        //     // Public API key: it is safe to commit it
        //     apiKey: 'YOUR_SEARCH_API_KEY',

        //     indexName: 'YOUR_INDEX_NAME',

        //     // Optional: see doc section below
        //     contextualSearch: true,

        //     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //     externalUrlRegex: 'external\\.com|domain\\.com',

        //     // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        //     replaceSearchResultPathname: {
        //         from: '/docs/', // or as RegExp: /\/docs\//
        //         to: '/',
        //     },

        //     // Optional: Algolia search parameters
        //     searchParameters: {},

        //     // Optional: path for search page that enabled by default (`false` to disable it)
        //     searchPagePath: 'search',

        //     // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        //     insights: false,

        //     //... other Algolia params
        // },
    } satisfies Preset.ThemeConfig,
}

export default config