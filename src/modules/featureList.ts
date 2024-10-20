import type { FeatureItem } from '@site/src/types'

const featureList: FeatureItem[] = [
    {
        title: 'Templating system',
        Svg: require('@site/static/img/docs.svg').default,
        description:
            'You can use package as a template system your website, blog, or any other project that uses Go on the frontend',
    },
    {
        title: 'Define layouts',
        Svg: require('@site/static/img/layouts.svg').default,
        description:
            'You can define layouts for your template files and use them to easily render content',
    },
    {
        title: 'Fast',
        Svg: require('@site/static/img/fast.svg').default,
        description:
            'Textwire is very fast and has a low memory footprint because it parses templates into an AST tree when application starts',
    },
    {
        title: 'Error handling',
        Svg: require('@site/static/img/error.svg').default,
        description:
            'Proper error handling with error messages containing line numbers and file names',
    },
    {
        title: 'Syntax Highlighting',
        Svg: require('@site/static/img/code.svg').default,
        description:
            'You get syntax highlighting and other features for Textwire in with VSCode extension',
    },
    {
        title: 'Parse string',
        Svg: require('@site/static/img/string.svg').default,
        description:
            'You can use package to parse a string with embedded Textwire code. It can be useful for email templates, markdown, files, etc',
    },
]

export default featureList
