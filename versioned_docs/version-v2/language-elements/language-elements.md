---
title: Language Elements - v2
sidebar_label: Language Elements
sidebar_position: 2
description: Textwire has a simple syntax that is easy to learn
---

# Language Elements
Textwire is designed to be intuitive for Go developers, offering a syntax that feels familiar while being tailored specifically for template usage. It's a standalone language with its own grammar designed for simplicity and ease of use.

## Textwire Syntax

Textwire’s syntax is straightforward and easy to learn. Below are the key rules for writing Textwire code:

- **File Extensions**: All HTML files intended for Textwire parsing must have a `.tw.html` or `.tw` extension. The default is `.tw.html`, but using the `.tw` extension is recommended.
- **Code Placement**: All Textwire code must either:
  - Be enclosed within `{{ }}` braces, or
  - Start with the `@` symbol.

:::info VSCode Extension
If you use VSCode code editor, you can use our [VSCode extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire) to get syntax highlighting, Textwire file icon, autocompletion, and other features for Textwire. Plugin for [Neovim](https://neovim.io/) is coming soon.
:::

## Directives
Directives are special Textwire statements that begin with the `@` symbol. They are used to define layouts, insert content into reserved placeholders, and perform logical operations such as conditionals and loops. Directives can only be placed within HTML code and are not allowed inside braces statements (`{{` and `}}`).

#### Key Points:
- **Expressions and Variables**: Directives support Textwire expressions and variables, e.g., `@if(x == 1)` or `@use(layoutName)`.
- **Closing Directives**: Directives with a body, such as `@if`, `@for`, `@each`, and `@component`, must be closed using the `@end` keyword.

## Braces Statements
Braces statements are special Textwire constructs that begin with `{{` and end with `}}`. They are used for defining variables, performing arithmetic operations, conditionally rendering content, and more. Braces statements can be placed anywhere in the file, except within directives.

#### Key Points:
- **Multiple Expressions**: Use a semicolon (`;`) to separate multiple expressions inside braces. For example:

    ```textwire
    {{ x = 5; y = 10 }}
    ```
- **Return Values**: All braces statements return a string.
  - Defining a variable like `{{ x = 5 }}` doesn't return anything.
  - Expressions like `{{ 5 + 5 }}` will return result. In this example it's `"10"`.

## Textwire with JavaScript
Many JavaScript frameworks and libraries use the `@` symbol or `{{ }}` for their own purposes. To avoid conflicts, you escape it with a backslash `\`.

For example, `\@if(x == 1)` and `\{{ x = 1 }}` will not be parsed as Textwire directives or bracesstatements.

## Types and Literals
Textwire has a different type system that Go. When you pass a variable to Textwire, it will be automatically converted to a Textwire type. Here is a list of supported types that you can pass to Textwire or define in Textwire:

| Textwire type | Equivalent Go types                                                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Str`         | `string`                                                                                                                                                    |
| `Bool`        | `bool`                                                                                                                                                      |
| `Int`         | `int`, `int8`, `int16`, `int32`, `int64`, `uint`, `uint8`, `uint16`, `uint32`, `uint64`                                                                     |
| `Float`       | `float32`, `float64`                                                                                                                                        |
| `Nil`         | `nil`                                                                                                                                                       |
| `Array`       | `[]string`, `[]bool`, `[]int`, `[]int64`, `[]int32`, `[]int16`, `[]int8`, `[]uint`, `[]uint64`, `[]uint32`, `[]uint16`, `[]uint8`, `[]float64`, `[]float32` |
| `Object`      | any struct can be just `struct{}` or a typed struct like `User{}` with any fields or a `map` type like `map[string]string` or something else                |

The biggest difference in types and type literals between Textwire and Go is that Textwire's literals have functions that you can call on them. For example, you can call a `split` function on a string literal like this: `{{ "hello world".split(" ") }}` to get an array of strings `["hello", "world"]`.
