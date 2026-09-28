import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Home from '@/components/Pages/Home.vue'
import VersionSwitcher from '@/components/VersionSwitcher.vue'
import OutdatedVersion from '@/components/OutdatedVersion.vue'
import Blog from '@/components/Blog/Blog.vue'
import './main.css'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            'doc-before': () => h(OutdatedVersion),
            'home-hero-before': () => h(OutdatedVersion),
        })
    },
    enhanceApp({ app }) {
        app.component('VersionSwitcher', VersionSwitcher)
        app.component('Home', Home)
        app.component('Blog', Blog)
    },
} satisfies Theme
