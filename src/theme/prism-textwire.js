const keywordDirectives = 'else|end|break|continue|slot'
const directiveNames =
    'if|elseif|for|use|each|breakIf|continueIf|insert|reserve|component|slot|dump'

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
    number: /\b\d+(\.\d+)?\b/,
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
    boolean: /\b(?:true|false)\b/,
    keyword: /\b(?:nil|in)\b/,
    punctuation: /,/,
    object: [
        {
            pattern: /\{([^{}]*)\}/,
            inside: { variable },
        },
    ],
    variable,
}

Prism.languages.textwire = Prism.languages.extend('markup', {
    expression: [
        {
            pattern: /{{([\s\S]*?)}}/s,
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
