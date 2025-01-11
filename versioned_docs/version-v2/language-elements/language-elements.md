---
title: Language Elements - v2
sidebar_label: Language Elements
sidebar_position: 5
description: Textwire has a simple syntax that is easy to learn
---

# Language Elements
Textwire is designed to be easy to use for Go developers. It has a similar syntax to Go, but it is a separate language and has specific grammar to make it easier to use as a template language.

## Syntax
Textwire has a simple syntax that is easy to learn. Here are some rules that you need to follow when writing Textwire code:

- All the HTML files that you want to parse with Textwire must have a `.tw.html` or `.tw` extension. Default is `.tw.html` but recommended to use `.tw` extension.
- All the Textwire code must be inside of the `{{ }}` brackets, or start with `@` symbol.

:::info VSCode Extension
If you use VSCode code editor, you can use our [VSCode extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire) to get syntax highlighting and other features for Textwire.
:::

### Bracket statements
Bracket statements are special Textwire statements that start with `{{` brackets and end with `}}`. They can be used to define variables, perform arithmetic operations, conditionally render content and so on. Bracket statements can be placed anywhere in the file except inside of directives.

- If you want multiple expressions inside `{{ }}` brackets, use `;` to separate them. For example: `{{ x = 5; y = 10 }}`.
- All the bracket statements return a string. For example, `{{ x = 5 }}` will return an empty string, but `{{ 5 + 5 }}` will return "10".
- There are special bracket statements that need to be closed with `{{ end }}` keyword. For example, [if statement](/docs/v2/language-elements/statements#if-statement) and [for statements](/docs/v2/language-elements/statements#for-loop).
- To escape `{{ }}` brackets, you can use `\`. For example `\{{ x }}` will not be parsed as a bracket statement but as HTML.

### Directives
Directives are special Textwire statements that start with `@` symbol. They can be used to define a layout, insert content into reserved places, if statements and so on. Directives can be placed anywhere in the file except inside of `{{ }}` brackets.

- To escape directive symbols, you can use `\`. For example `\@if(x == 1)` will not be parsed as a directive but as HTML
- You can use textwire expressions and variables inside of directives. For example `@if(x == 1)` or `@use(layoutName)`
- All the directives with body like `@if`, `@for`, `@each`, `@component`, etc. must be closed with `@end` keyword


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