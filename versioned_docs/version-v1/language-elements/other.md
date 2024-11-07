---
title: Other Information - Textwire v1
sidebar_label: Other Information
sidebar_position: 5
---

# Other Information

- Other
    - [Trailing commas](#trailing-commas) `{{ [1, 2, 3,] }}` or `{{ { "name": "John", "age": 25, } }}`
    - [Comments](#comments) `{{-- This is a Textwire comment --}}`

## Trailing Commas
You can use trailing commas in arrays, objects and function arguments. Here is an example of using trailing commas:

```html
{{ names = ["John", "Jane", "Jack",] }}
{{ person = { "name": "John", "age": 25, } }}

@insert(
    "title",
    "Home page",
)
```

## Comments
You can use comments in Textwire to write notes or to comment out code. Here is an example of using comments:

```html
{{-- This is a Textwire comment --}}
<!-- This is an HTML comment -->

{{ x = 5; x }}
```

HTML comment will be displayed in the final HTML output, but Textwire comment will be removed from the final HTML output. It might be useful when you want to comment out some code that you don't want to be displayed in the final HTML output.