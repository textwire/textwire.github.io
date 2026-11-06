import { DefaultTheme } from 'vitepress'

export const sidebarV6: DefaultTheme.SidebarItem[] = [
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
            { text: 'JavaScript', link: '/api/javascript' },
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
            { text: 'Statements', link: '/language-elements/statements' },
            {
                text: 'Literals',
                collapsed: true,
                items: [
                    { text: 'Overview', link: '/language-elements/literals' },
                    { text: 'String', link: '/language-elements/literals/string' },
                    { text: 'Integer', link: '/language-elements/literals/integer' },
                    { text: 'Float', link: '/language-elements/literals/float' },
                    { text: 'Boolean', link: '/language-elements/literals/boolean' },
                    { text: 'Nil', link: '/language-elements/literals/nil' },
                    { text: 'Array', link: '/language-elements/literals/array' },
                    { text: 'Object', link: '/language-elements/literals/object' },
                ],
            },
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
