import { DefaultTheme } from 'vitepress'

export const sidebarV2: DefaultTheme.SidebarItem[] = [
    { text: 'Introduction', link: '/' },
    { text: 'Get Started', link: '/get-started' },
    {
        text: 'Guides',
        items: [
            { text: 'Usage with Templates', link: '/guides/template-usage' },
            { text: 'Evaluating Strings', link: '/guides/eval-string' },
            { text: 'Evaluating Files', link: '/guides/eval-file' },
            { text: 'Custom Functions', link: '/guides/custom-functions' },
            { text: 'Error Handling', link: '/guides/error-handling' },
            { text: 'Configurations', link: '/guides/configurations' },
            { text: 'Loops Usage', link: '/guides/loops' },
        ],
    },
    {
        text: 'Language Elements',
        items: [
            { text: 'Syntax', link: '/language-elements/syntax' },
            { text: 'Statements', link: '/language-elements/statements' },
            { text: 'Expressions', link: '/language-elements/expressions' },
            { text: 'Literals', link: '/language-elements/literals' },
            { text: 'Other Information', link: '/language-elements/other' },
        ],
    },
    {
        text: 'Functions',
        items: [
            { text: 'Functions Guide', link: '/functions/guide' },
            { text: 'Integer Functions', link: '/functions/int' },
            { text: 'Float Functions', link: '/functions/float' },
            { text: 'Boolean Functions', link: '/functions/bool' },
            { text: 'Array Functions', link: '/functions/arr' },
            { text: 'String Functions', link: '/functions/str' },
        ],
    },
    { text: 'FAQ', link: '/faq' },
    { text: 'Upgrade Guide', link: '/upgrade' },
]
