import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Home from '@/components/Pages/Home.vue'
import VersionSwitcher from '@/components/VersionSwitcher.vue'
import Blog from '@/components/Blog/Blog.vue'
import './main.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('VersionSwitcher', VersionSwitcher)
        app.component('Home', Home)
        app.component('Blog', Blog)
    },
} satisfies Theme
