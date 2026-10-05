import type { HeadConfig, TransformContext } from 'vitepress'
import { defineVersionedConfig, SidebarType } from '@viteplus/versions'
import { latestVersion, outdatedVersions } from './theme/versions.ts'
import { resolve } from 'node:path'
import { sidebarV1 } from './sidebars/sidebarV1.ts'
import { sidebarV2 } from './sidebars/sidebarV2.ts'
import { sidebarV3 } from './sidebars/sidebarV3.ts'
import { sidebarV4 } from './sidebars/sidebarV4.ts'
import { sidebarV5 } from './sidebars/sidebarV5.ts'

const sidebar: SidebarType = {
    root: sidebarV5,
    'v1': sidebarV1,
    'v2': sidebarV2,
    'v3': sidebarV3,
    'v4': sidebarV4,
}

const hostname = 'https://textwire.serhiicho.com'
const rmGrammarUrl = 'https://codeberg.org/textwire/vscode-textwire/raw/branch/master/syntaxes/textwire.tmLanguage.json'

async function fetchTextwireGrammar() {
    const resp = await fetch(rmGrammarUrl)
    const twLang = await resp.json()
    twLang.name = twLang.name.toLowerCase()
    return twLang
}

function setCanonicalTag(page: string): string {
    page = page.replace('.md', '.html')
    return page == 'index.html' ? hostname : `${hostname}/${page}`
}

export default defineVersionedConfig(
    {
        lang: 'en-US',
        title: 'Textwire',
        description: 'Textwire embraces Go’s philosophy by prioritizing stability, and ongoing performance improvements over frequent new feature releases. The focus is on delivering reliable, efficient solutions that users can depend on long term',
        head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],

        transformHead: (ctx: TransformContext) => {
            const head: HeadConfig[] = []
            head.push(['link', { rel: 'canonical', href: setCanonicalTag(ctx.page) }])
            return head
        },

        lastUpdated: true,
        cleanUrls: true,

        markdown: {
            languages: ['html', await fetchTextwireGrammar()],
            theme: {
                light: 'github-light',
                dark: 'catppuccin-mocha',
            },
        },

        vite: {
            resolve: {
                alias: {
                    '@': resolve(import.meta.dirname, './theme'),
                },
            },
        },

        versionsConfig: {
            current: latestVersion,
            versionSwitcher: false,
        },

        sitemap: {
            hostname,
            // exclude old version pages from sitemap
            transformItems: items => items.filter(item => !outdatedVersions.some(p => item.url.startsWith(p))),
        },

        themeConfig: {
            logo: '/images/logo.png',
            footer: {
                message: 'Release under the <a href="https://codeberg.org/textwire/textwire/src/branch/master/LICENSE" target="_blank">MIT License</a>',
                copyright: 'Copyright © 2023 - present <a href="https://serhiicho.com/about-me" target="_blank">Serhii Cho</a>',
            },

            search: {
                provider: 'local',
            },

            nav: {
                root: [
                    { component: 'VersionSwitcher' },
                    { text: 'Docs', link: `/intro` },
                    { text: 'Blog', link: '/blog/', skipVersioning: true },
                    { text: 'Support', link: '/community', skipVersioning: true },
                ],
            },

            sidebar,

            socialLinks: [
                {
                    icon: 'neovim',
                    ariaLabel: 'Neovim Plugin',
                    link: 'https://codeberg.org/textwire/textwire.nvim',
                },
                {
                    icon: 'visualstudiocode',
                    ariaLabel: 'VSCode Extension',
                    link: 'https://codeberg.org/textwire/vscode-textwire',
                },
                {
                    icon: 'go',
                    ariaLabel: 'Golang',
                    link: `https://pkg.go.dev/codeberg.org/textwire/textwire/${latestVersion}`,
                },
                {
                    icon: 'codeberg',
                    ariaLabel: 'Codeberg repository',
                    link: 'https://codeberg.org/textwire/textwire',
                },
            ],
        },
    },
)
