---
title: Other Information - v6
description: Learn about trailing commas and comments in Textwire, including how to use them in arrays, objects, and function arguments
---

# Other Information

- [Trailing commas](#trailing-commas) <code v-pre>{{ [1, 2, 3,] }}</code>
- [Comments](#comments) <code v-pre>{{-- This is a Textwire comment --}}</code>

## Trailing Commas

You can use trailing commas in arrays, objects, and function arguments. Example:

```textwire
{{ names = ["John", "Jane", "Jack",] }}
{{ person = { "name": "John", "age": 25, } }}

@insert (
    "title",
    "Home page",
)
```

## Comments

You can use comments in Textwire to write notes or to comment out code. Example:

```textwire
{{-- This is a Textwire comment --}}
<!-- This is an HTML comment -->

{{ x = 5; x }}
```

HTML comment will be displayed in the final HTML output, but Textwire comment will be removed from the final HTML output. It might be useful when you want to comment out some code that you don't want to be displayed in the final HTML output.

Textwire comments can span multiple lines and can be nested:

```textwire
{{-- This comment
     spans two lines --}}

{{-- Outer {{-- inner --}} --}}
```

A comment on its own line is removed together with its indentation and line ending, so it does not leave a blank line. An inline comment only removes the comment itself and preserves the surrounding text and whitespace. See [Whitespace Handling](/language-elements/whitespace#standalone-comments) for examples.

To print comment syntax as text, escape it with a backslash:

```textwire
\{{-- This is printed --}}
```

The output is <code v-pre>{{-- This is printed --}}</code>.
