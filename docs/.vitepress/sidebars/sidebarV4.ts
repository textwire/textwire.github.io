import { DefaultTheme } from 'vitepress'

export const sidebarV4: DefaultTheme.SidebarItem[] = [
    { text: 'Introduction', link: '/v4/' },
    { text: 'Get Started', link: '/v4/get-started' },
    {
        text: 'Engine API',
        items: [
            { text: 'Usage with Templates', link: '/v4/api/template-usage' },
            { text: 'Evaluating Strings', link: '/v4/api/eval-string' },
            { text: 'Evaluating Files', link: '/v4/api/eval-file' },
            { text: 'Custom Functions', link: '/v4/api/custom-functions' },
            { text: 'Error Handling', link: '/v4/api/error-handling' },
            { text: 'Configurations', link: '/v4/api/configurations' },
            { text: 'Template Embedding', link: '/v4/api/template-embedding' },
            { text: 'Development', link: '/v4/api/development' },
        ],
    },
    {
        text: 'Language Elements',
        items: [
            { text: 'Syntax & Types', link: '/v4/language-elements/syntax' },
            { text: 'Unicode Support', link: '/v4/language-elements/unicode' },
            { text: 'Loops', link: '/v4/language-elements/loops' },
            { text: 'Directives', link: '/v4/language-elements/directives' },
            { text: 'Expressions', link: '/v4/language-elements/expressions' },
            { text: 'Statements', link: '/v4/language-elements/statements' },
            { text: 'Literals', link: '/v4/language-elements/literals' },
            { text: 'Other Information', link: '/v4/language-elements/other' },
        ],
    },
    {
        text: 'Functions',
        items: [
            { text: 'Functions Guide', link: '/v4/functions/guide' },
            { text: 'Global Functions', link: '/v4/functions/global' },
            { text: 'Integer Functions', link: '/v4/functions/int' },
            { text: 'Float Functions', link: '/vv4functions/float' },
            { text: 'Boolean Functions', link: '/v4/functions/bool' },
            { text: 'Array Functions', link: '/v4/functions/arr' },
            { text: 'String Functions', link: '/v4/functions/str' },
            { text: 'Object Functions', link: '/v4/functions/obj' },
        ],
    },
    { text: 'FAQ', link: '/v4/faq' },
    { text: 'Upgrade Guide', link: '/v4/upgrade' },
]
