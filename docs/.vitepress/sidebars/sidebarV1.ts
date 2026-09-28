import { DefaultTheme } from 'vitepress'

export const sidebarV1: DefaultTheme.SidebarItem[] = [
    {
        text: 'Usage with Templates',
        link: '/intro',
        items: [
            { text: 'Evaluating Strings', link: '/get-started/eval-string' },
            { text: 'Evaluating Files', link: '/get-started/eval-file' },
        ],
    },
    {
        text: 'Functions',
        items: [
            { text: 'Functions Guide', link: '/functions/guide' },
            { text: 'Integer Functions', link: '/functions/int' },
            { text: 'Float Functions', link: '/functions/float' },
            { text: 'Array Functions', link: '/functions/arr' },
            { text: 'String Functions', link: '/functions/str' },
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
    { text: 'FAQ', link: '/faq' },
]
