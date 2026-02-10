import type { FeatureItem } from '@site/src/types'

const featureList: FeatureItem[] = [
    {
        title: '🚀 Performance',
        description: `Templates parsed at app startup, evaluated on page visit. Use Go's embed package to bundle templates in final binary`,
    },
    {
        title: '🔒 Security',
        description: `Built with security-first design, Textwire prevents code injection and common vulnerabilities by default`,
    },
    {
        title: '🎨 Template Customization',
        description: 'Define custom functions, components, layouts, and error pages with full control over template structure',
    },
    {
        title: '🐛 Error Handling',
        description: `Detailed error messages with line numbers and file names for efficient template debugging`,
    },
    {
        title: '🖋‍ Editor Integration',
        description: 'Neovim and VSCode extensions provide syntax highlighting and editor integration',
    },
    {
        title: '📚 Documentation',
        description: 'Comprehensive documentation with examples covering all features and getting started guides',
    }
]

export default featureList
