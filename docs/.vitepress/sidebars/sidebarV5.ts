import { DefaultTheme } from 'vitepress'

export const sidebarV5: DefaultTheme.SidebarItem[] = [
    { text: 'Introduction', link: '/v5/' },
    { text: 'Get Started', link: '/v5/get-started' },
    {
        text: 'Engine API',
        items: [
            { text: 'Usage with Templates', link: '/v5/api/template-usage' },
            { text: 'Evaluating Strings', link: '/v5/api/eval-string' },
            { text: 'Evaluating Files', link: '/v5/api/eval-file' },
            { text: 'Custom Functions', link: '/v5/api/custom-functions' },
            { text: 'Error Handling', link: '/v5/api/error-handling' },
            { text: 'Configurations', link: '/v5/api/configurations' },
            { text: 'Template Embedding', link: '/v5/api/template-embedding' },
            { text: 'Development', link: '/v5/api/development' },
            { text: 'JavaScript', link: '/v5/api/javascript' },
        ],
    },
    {
        text: 'Language Elements',
        items: [
            { text: 'Syntax & Types', link: '/v5/language-elements/syntax' },
            { text: 'Unicode Support', link: '/v5/language-elements/unicode' },
            { text: 'Loops', link: '/v5/language-elements/loops' },
            { text: 'Directives', link: '/v5/language-elements/directives' },
            { text: 'Expressions', link: '/v5/language-elements/expressions' },
            { text: 'Statements', link: '/v5/language-elements/statements' },
            { text: 'Literals', link: '/v5/language-elements/literals' },
            { text: 'Other Information', link: '/v5/language-elements/other' },
        ],
    },
    {
        text: 'Functions',
        items: [
            { text: 'Functions Guide', link: '/v5/functions/guide' },
            { text: 'Global Functions', link: '/v5/functions/global' },
            { text: 'Integer Functions', link: '/v5/functions/int' },
            { text: 'Float Functions', link: '/vv5functions/float' },
            { text: 'Boolean Functions', link: '/v5/functions/bool' },
            { text: 'Array Functions', link: '/v5/functions/arr' },
            { text: 'String Functions', link: '/v5/functions/str' },
            { text: 'Object Functions', link: '/v5/functions/obj' },
        ],
    },
    { text: 'FAQ', link: '/v5/faq' },
    { text: 'Upgrade Guide', link: '/v5/upgrade' },
]
