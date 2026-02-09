---
title: Syntax - v3
description: Textwire has a simple syntax that is easy to learn
---

# Textwire Syntax

Textwire’s syntax is straightforward and easy to learn. Below are the key rules for writing Textwire code:

- **File Extensions**: All template files intended for Textwire parsing must have a `.tw` extension.
- **Code Placement**: All Textwire code must either:
    - Be enclosed within <code v-pre>{{ }}</code> braces, or
    - Start with the `@` symbol.

:::info Syntax Highlighting
If you use Neovim or VSCode code editor, you can use our [Neovim plugin](https://github.com/textwire/textwire.nvim) or [VSCode extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire) to get syntax highlighting and other features for Textwire.
:::

## Directives

Directives are special Textwire statements that begin with the `@` symbol. They are used to define layouts, insert content into reserved placeholders, and perform logical operations such as conditionals and loops. Directives can only be placed within template files and are not allowed inside braces statements (`&lparen;{` and `}}`).

### Expressions and Variables

Directives support Textwire expressions and variables, e.g., `@if(x == 1)nice@end` or `@use(layoutName)`.

### Closing Directives

Directives with a body, such as `@if`, `@for`, and `@each`, must be closed using the `@end` keyword.

```textwire
@if(true)
    <span>Hello World</span>
@end
```

### Optional Space

The space after the directive name is optional; it means that you can write it as `@if(true)` or even `@if   (true)` if you want it. But we recommend using no space for consistency and less work for the parser.

### Hybrid Directives

Some directives like `@component`, `@slot` and `@insert` have optional body. For example, you can write `@component('navbar')` without a body or with a body:

```textwire
@component('navbar')
    @slot<span>This is navbar component</span>@end
@end
```

Or you can write it without body:

```textwire
@component('navbar')
```

It all depends on your use case.

### Include Path

To include other files with `@component` or `@use` directive you need to specify a relative path to the file you want to include relative to the `templates` directory. For example if your template file is `templates/views/home.tw` and you want to use a component `templates/components/navbar.tw`, you should do this:

```textwire
@component('components/navbar')
```

Or, as an alias to `components/` you can use `~` symbol like this:

```textwire
@component('~navbar')
```

## Braces Statements

Braces statements are special Textwire constructs that begin with `&lparen;{` and end with `}}`. They are used for defining variables, performing arithmetic operations, conditionally rendering content, and more. Braces statements can be placed anywhere in the template file, except within directives.

### Multiple Expressions

Use a semicolon (`;`) to separate multiple expressions inside braces. For example:

```textwire
{{ x = 5; y = 10 }}
```

### Return Values

Most braces statements return a string when they contain expressions.

- Defining a variable like `&lparen;{ x = 5 }}` doesn't return anything and results in empty string.
- Expressions like `&lparen;{ 5 + 5 }}` will return a result. In this example it's `"10"`.

## Textwire with JavaScript

Many JavaScript frameworks and libraries use the `@` symbol or `&lparen;{ }}` for their own purposes. To avoid conflicts, you escape it with a backslash `\`.

For example, `\@if(x == 1)` and `\&lparen;{ x = 1 }}` will not be parsed as Textwire directives or braces statements.

## Types and Literals

Textwire has a different type system than Go. When you pass a variable to Textwire, it will be automatically converted to a Textwire type. Here is a list of supported types that you can pass to Textwire or define in Textwire:

| Textwire type | Equivalent Go types                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Str`         | `string`                                                                                                                                                            |
| `Bool`        | `bool`                                                                                                                                                              |
| `Int`         | `int`, `int8`, `int16`, `int32`, `int64`, `uint`, `uint8`, `uint16`, `uint32`, `uint64`                                                                             |
| `Float`       | `float32`, `float64`                                                                                                                                                |
| `Nil`         | `nil`                                                                                                                                                               |
| `Array`       | `[]string`, `[]bool`, `[]int`, `[]int64`, `[]int32`, `[]int16`, `[]int8`, `[]uint`, `[]uint64`, `[]uint32`, `[]uint16`, `[]uint8`, `[]float64`, `[]float32`         |
| `Object`      | any struct type, including empty structs `struct{}`, typed structs like `User{}` with any fields, or map types such as `map[string]string` and other map variations |

The biggest difference in types and type literals between Textwire and Go is that Textwire's literals have functions that you can call on them. For example, you can call a `split` function on a string literal like this: `&lparen;{ "hello world".split(" ") }}` to get an array of strings `["hello", "world"]`.
