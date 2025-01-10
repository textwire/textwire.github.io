const keywords = 'true|false|nil|in'
const keywordDirectives = 'else|end|break|continue|slot'
const directiveNames =
    'if|elseif|for|use|each|breakIf|continueIf|insert|reserve|component|slot'

const variable = {
    pattern: /\b\w+\.?\b/,
}

const textwireCode = {
    directive: {
        pattern: new RegExp(`^@(?:${directiveNames})`),
        alias: 'keyword',
    },
    comment: {
        pattern: /{{--(.*)--}}/,
        greedy: true,
    },
    number: {
        pattern: /\b\d+(\.\d+)?\b/,
    },
    braces: [
        {
            pattern: /{{/,
            alias: 'keyword',
        },
        {
            pattern: /}}/,
            alias: 'keyword',
        },
    ],
    string: [
        {
            pattern: /(^|[^\\])"(?:\\.|[^"\\])*"/,
            lookbehind: true,
        },
        {
            pattern: /(^|[^\\])'(?:\\.|[^"\\])*'/,
            lookbehind: true,
        },
    ],
    punctuation: {
        pattern: /,/,
    },
    object: [
        {
            pattern: /\{([^{}]*)\}/,
            inside: { variable },
        },
    ],
    keyword: new RegExp(`\b(?:${keywords})\b/`),
    variable,
}

Prism.languages.textwire = Prism.languages.extend('markup', {
    expression: [
        {
            pattern: /{{(.*)}}/,
            inside: textwireCode,
        },
    ],
    directive: [
        {
            pattern: new RegExp(`@(?:${directiveNames})\s*\\([^)]*\\)`, ''),
            inside: textwireCode,
        },
        {
            pattern: new RegExp(`(?<![\@])(@(${keywordDirectives}))`),
            alias: 'keyword',
        },
    ],
})

Prism.languages.webmanifest = Prism.languages.textwire
