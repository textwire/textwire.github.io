import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import HomeFeatures from '@/components/HomeFeatures.vue'
import VersionSwitcher from '@viteplus/versions/components/version-switcher.component.vue'
import OutdatedVersion from '@/components/OutdatedVersion.vue'
import Blog from '@/components/Blog/Blog.vue'
import '@/main.css'

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
        app.component('HomeFeatures', HomeFeatures)
        app.component('Blog', Blog)
    },
} satisfies Theme
