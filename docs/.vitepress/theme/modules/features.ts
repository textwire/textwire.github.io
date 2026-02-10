import { Feature } from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'

export const features: Feature[] = [
    {
        icon: '🚀',
        title: 'Performance',
        details: `Templates parsed at app startup, evaluated on page visit. Use Go's embed package to bundle templates in final binary`,
    },
    {
        icon: '🔒',
        title: 'Security',
        details: `Built with security-first design, Textwire prevents code injection and common vulnerabilities by default`,
    },
    {
        icon: '🎨',
        title: 'Template Customization',
        details:
            'Define custom functions, components, layouts, and error pages with full control over template structure',
    },
    {
        icon: '🐛',
        title: 'Error Handling',
        details: `Detailed error messages with line numbers and file names for efficient template debugging`,
    },
    {
        icon: '🖋‍',
        title: 'Editor Integration',
        details:
            'Neovim and VSCode extensions provide syntax highlighting and editor integration',
    },
    {
        icon: '📚',
        title: 'Documentation',
        details:
            'Comprehensive documentation with examples covering all features and getting started guides',
    },
]
