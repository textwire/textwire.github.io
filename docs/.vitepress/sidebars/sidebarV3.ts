import { DefaultTheme } from 'vitepress'

export const sidebarV3: DefaultTheme.SidebarItem[] = [
    { text: 'Introduction', link: '/intro' },
    { text: 'Get Started', link: '/get-started' },
    {
        text: 'Engine API',
        items: [
            { text: 'Usage with Templates', link: '/api/template-usage' },
            { text: 'Evaluating Strings', link: '/api/eval-string' },
            { text: 'Evaluating Files', link: '/api/eval-file' },
            { text: 'Custom Functions', link: '/api/custom-functions' },
            { text: 'Error Handling', link: '/api/error-handling' },
            { text: 'Configurations', link: '/api/configurations' },
            { text: 'Template Embedding', link: '/api/template-embedding' },
            { text: 'Development', link: '/api/development' },
        ],
    },
    {
        text: 'Language Elements',
        items: [
            { text: 'Syntax & Types', link: '/language-elements/syntax' },
            { text: 'Unicode Support', link: '/language-elements/unicode' },
            { text: 'Loops', link: '/language-elements/loops' },
            { text: 'Directives', link: '/language-elements/directives' },
            { text: 'Expressions', link: '/language-elements/expressions' },
            { text: 'Literals', link: '/language-elements/literals' },
            { text: 'Other Information', link: '/language-elements/other' },
        ],
    },
    {
        text: 'Functions',
        items: [
            { text: 'Functions Guide', link: '/functions/guide' },
            { text: 'Global Functions', link: '/functions/global' },
            { text: 'Integer Functions', link: '/functions/int' },
            { text: 'Float Functions', link: '/functions/float' },
            { text: 'Boolean Functions', link: '/functions/bool' },
            { text: 'Array Functions', link: '/functions/arr' },
            { text: 'String Functions', link: '/functions/str' },
            { text: 'Object Functions', link: '/functions/obj' },
        ],
    },
    { text: 'FAQ', link: '/faq' },
    { text: 'Upgrade Guide', link: '/upgrade' },
]
