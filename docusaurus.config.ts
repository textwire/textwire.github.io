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
                { to: '/blog', label: 'Blog', position: 'left' },
                { to: '/community', label: 'Community', position: 'left' },
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
