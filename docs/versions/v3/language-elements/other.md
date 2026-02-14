---
title: Other Information - v3
description: Learn about trailing commas and comments in Textwire, including how to use them in arrays, objects, and function arguments
---

# Other Information

- [Trailing commas](#trailing-commas) <code v-pre>{{ [1, 2, 3,] }}</code>
- [Comments](#comments) <code v-pre>{{-- This is a Textwire comment --}}</code>
- [Variable Declaration](#variable-declaration) <code v-pre>{{ x = 5 }}</code>

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

## Variable Declaration

You can assign and declare variables by using the `=` operator. Example:

```textwire :no-line-numbers
{{ x = 5 }}
{{ x = 10 }}
```

You cannot assign values to variables of a different type. For example, you cannot do <code v-pre>{{ x = "Hello"; x = 3 }}</code> because `x` is a string and then you are trying to assign an integer to it. In Textwire, you don't need to declare type of a variable, it will be automatically inferred from the value that you assign to it.

:::tip Declaration Has No Output
Variable declaration statements are not expressions! They don't return any value and can't be used inside of other expressions. Therefore, they don't print anything to the output.
:::
