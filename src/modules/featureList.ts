import type { FeatureItem } from '@site/src/types'

const featureList: FeatureItem[] = [
    {
        title: 'Security',
        Svg: require('@site/static/img/secure.svg').default,
        description:
            'Textwire is designed to be secure by default, preventing code injection attacks when printing user-generated content',
    },
    {
        title: 'Flexibility',
        Svg: require('@site/static/img/layouts.svg').default,
        description:
            'Textwire allows you to define custom functions and components, giving you the flexibility to create complex templates with ease',
    },
    {
        title: 'Performance',
        Svg: require('@site/static/img/fast.svg').default,
        description:
            'Textwire is fast and has a low memory footprint, making it load pages quickly. The parsing is done at application startup, so there is no overhead during runtime',
    },
    {
        title: 'Error handling',
        Svg: require('@site/static/img/error.svg').default,
        description:
            'Textwire provides detailed error messages with line numbers and file names, making it easier to debug your templates',
    },
    {
        title: 'Syntax Highlighting',
        Svg: require('@site/static/img/code.svg').default,
        description:
            'You get syntax highlighting and other features for Textwire in with VSCode extension',
    },
    {
        title: 'Good documentation',
        Svg: require('@site/static/img/files.svg').default,
        description:
            'Textwire has a comprehensive documentation that covers all the features and provides examples to help you get started',
    },
]

export default featureList
