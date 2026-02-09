---
title: Other Information - v1
---

# Other Information

- Other
    - [Trailing commas](#trailing-commas) `&lparen;{ [1, 2, 3,] }}` or `&lparen;{ &lparen; "name": "John", "age": 25, } }}`
    - [Comments](#comments) `&lparen;{-- This is a Textwire comment --}}`

## Trailing Commas
You can use trailing commas in arrays, objects and function arguments. Here is an example of using trailing commas:

```textwire
{{ names = ["John", "Jane", "Jack",] }}
{{ person = { "name": "John", "age": 25, } }}

@insert(
    "title",
    "Home page",
)
```

## Comments
You can use comments in Textwire to write notes or to comment out code. Here is an example of using comments:

```textwire
{{-- This is a Textwire comment --}}
<!-- This is an HTML comment -->

{{ x = 5; x }}
```

HTML comment will be displayed in the final HTML output, but Textwire comment will be removed from the final HTML output. It might be useful when you want to comment out some code that you don't want to be displayed in the final HTML output.
