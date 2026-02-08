import type { FeatureItem } from '@site/src/types'

const featureList: FeatureItem[] = [
    {
        title: 'Security',
        description:
            'Built with security-first design, Textwire prevents code injection and common vulnerabilities by default',
    },
    {
        title: 'Flexibility',
        description:
            'Textwire allows you to define custom functions, components, layouts, and custom error pages, giving you the flexibility to create complex templates with ease',
    },
    {
        title: 'Performance',
        description:
            'Textwire is fast and has a low memory footprint, making it load pages quickly. The parsing is done at application startup, so there is no overhead during runtime',
    },
    {
        title: 'Error Handling',
        description:
            'Textwire provides detailed error messages with line numbers and file names, making it easier to debug your templates',
    },
    {
        title: 'Syntax Highlighting',
        description:
            'You get syntax highlighting and other features for Textwire using the Neovim plugin and VSCode extension',
    },
    {
        title: 'Perfect Docs',
        description:
            'We have a comprehensive documentation that covers all the features and provides examples to help you get started',
    },
]

export default featureList
