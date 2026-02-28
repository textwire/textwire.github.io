import { DefaultTheme } from 'vitepress'

export const sidebarV3: DefaultTheme.SidebarItem[] = [
    { text: 'Introduction', link: '/v3/' },
    { text: 'Get Started', link: '/v3/get-started' },
    {
        text: 'Engine API',
        items: [
            { text: 'Usage with Templates', link: '/v3/api/template-usage' },
            { text: 'Evaluating Strings', link: '/v3/api/eval-string' },
            { text: 'Evaluating Files', link: '/v3/api/eval-file' },
            { text: 'Custom Functions', link: '/v3/api/custom-functions' },
            { text: 'Error Handling', link: '/v3/api/error-handling' },
            { text: 'Configurations', link: '/v3/api/configurations' },
            { text: 'Template Embedding', link: '/v3/api/template-embedding' },
            { text: 'Development', link: '/v3/api/development' },
        ],
    },
    {
        text: 'Language Elements',
        items: [
            { text: 'Syntax & Types', link: '/v3/language-elements/syntax' },
            { text: 'Unicode Support', link: '/v3/language-elements/unicode' },
            { text: 'Loops', link: '/v3/language-elements/loops' },
            { text: 'Directives', link: '/v3/language-elements/directives' },
            { text: 'Expressions', link: '/v3/language-elements/expressions' },
            { text: 'Literals', link: '/v3/language-elements/literals' },
            { text: 'Other Information', link: '/v3/language-elements/other' },
        ],
    },
    {
        text: 'Functions',
        items: [
            { text: 'Functions Guide', link: '/v3/functions/guide' },
            { text: 'Global Functions', link: '/v3/functions/global' },
            { text: 'Integer Functions', link: '/v3/functions/int' },
            { text: 'Float Functions', link: '/v3/functions/float' },
            { text: 'Boolean Functions', link: '/v3/functions/bool' },
            { text: 'Array Functions', link: '/v3/functions/arr' },
            { text: 'String Functions', link: '/v3/functions/str' },
            { text: 'Object Functions', link: '/v3/functions/obj' },
        ],
    },
    { text: 'FAQ', link: '/v3/faq' },
    { text: 'Upgrade Guide', link: '/v3/upgrade' },
]
