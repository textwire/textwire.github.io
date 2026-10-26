---
title: Syntax & Types - v5
description: Textwire has a simple syntax that is easy to learn
outline: 2-3
---

# Syntax & Types

Textwire’s syntax is straightforward and easy to learn. Below are the key rules for writing Textwire code:

- **File Extensions:** By default, Textwire template files use the `.tw` extension. The extension is configurable with the `TemplateExt` option, and the file content can be HTML, XML, JSON, or any other text-based format.
- **Code Placement:** All Textwire code must either:
    - Be enclosed within <code v-pre>{{ }}</code> braces, or
    - Be enclosed within <code v-pre>{!! !!}</code> braces, or
    - Start with the `@` symbol.

> [!TIP] Syntax Highlighting
> If you use Neovim or VSCode, you can use our [Neovim plugin](https://codeberg.org/textwire/textwire.nvim) or [VSCode extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire) to get syntax highlighting and other features for Textwire.

## Directives

Directives are Textwire statements that begin with the `@` symbol. They define layouts, insert content into placeholders, and perform logical operations like conditionals and loops. Directives can be placed anywhere in the template outside of braces (<code v-pre>{{</code> and <code v-pre>}}</code>) and are not limited to HTML files.

### Important Notes

- **Expressions and Variables**: Directives support expressions and variables, such as `@if(x == 1)` or `@use(layoutName)`.
- **Closing Directives**: Directives with a body (like `@if`, `@for`, `@each`, and `@component`) must be closed with the `@end` keyword.

Read about directives on [Directives](/language-elements/directives) page.

## Escaping

Escape Textwire code by prefixing it with a backslash (`\`). For example:

```textwire
<p>\{{ not code }}</p>
<p>\@use("~base")</p>
```

will be rendered as:

```html
<p>{{ not code }}</p>
<p>@use("~base")</p>
```

### Escaping in Strings

Inside string literals, a backslash followed by a specific character inserts that character into the string. These sequences are supported:

| Sequence | Result          |
| -------- | --------------- |
| `\\`     | Backslash       |
| `\"`     | Double quote    |
| `\'`     | Single quote    |
| `\n`     | Newline         |
| `\t`     | Tab             |
| `\r`     | Carriage return |

For example:

```textwire
{{ "a\\" }}     {{-- Output: a\ --}}
{{ "C:\\new" }} {{-- Output: C:\new --}}
{{ "a\"b" }}    {{-- Output: a"b --}}
{{ 'a\'b' }}    {{-- Output: a'b --}}
```

Any other escape sequence is kept as is. For example, <code v-pre>{{ "a\xb" }}</code> outputs `a\xb`.

## Raw Unescaped Output

All of your outputs in Textwire using <code v-pre>{{ }}</code> are HTML-encoded. But there are cases when you want to output raw HTML, XML or JSON. To do that, you can use the <code v-pre>{!! !!}</code> braces. For example:

```textwire
{!! "<p>This is raw, unescaped HTML</p>" !!}
{{-- Output: <p>This is raw, unescaped HTML</p> --}}
```

## Embedded

Embedded code begins with <code v-pre>{{</code> and end with <code v-pre>}}</code>. It is used for defining variables, performing arithmetic operations, conditionally rendering content, and more. Embedded code can be placed anywhere in the file, except within directives.

### Important Notes

- **Multiple Expressions**: Use a semicolon (`;`) to separate multiple statements/expressions inside braces. For example:

    ```textwire
    {{ x = 5; x++; x }}
    ```

- **Return Values**: All embedded code returns a string.
- Defining a variable like <code v-pre>{{ x = 5 }}</code> doesn't return anything.
- Expressions like <code v-pre>{{ 5 + 5 }}</code> will return a result. In this case, it's `"10"`.

## Types and Literals

Textwire has a different type system from Go. When you pass a variable to Textwire, it will be automatically converted to a Textwire type. Here is a list of supported types that you can pass to Textwire or define in Textwire:

| Textwire type | Equivalent Go types                                                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `string`      | `string`                                                                                                                                                    |
| `boolean`     | `bool`                                                                                                                                                      |
| `integer`     | `int`, `int8`, `int16`, `int32`, `int64`, `uint`, `uint8`, `uint16`, `uint32`, `uint64`                                                                     |
| `float`       | `float32`, `float64`                                                                                                                                        |
| `nil`         | `nil`                                                                                                                                                       |
| `array`       | Any slice, for example `[]string`, `[]int`, `[]any`, or a slice of structs                                                                                   |
| `object`      | `struct{}`, `User{}`, `map[string]any`, or any other struct or map                                                                                          |

The biggest difference in types and type literals between Textwire and Go is that Textwire's literals have functions that you can call on them. For example, you can call a `split` function on a string literal like this: <code v-pre>{{ "hello world".split(" ") }}</code> to get an array of strings `["hello", "world"]`.

## Empty Values

Each Textwire type has an empty value that is treated as falsy in boolean contexts:

| Type      | Empty Literal | Description   |
| --------- | ------------- | ------------- |
| `string`  | `""`          | Empty string  |
| `integer` | `0`           | Zero integer  |
| `float`   | `0.0`         | Zero float    |
| `boolean` | `false`       | False boolean |
| `array`   | `[]`          | Empty array   |
| `object`  | `{}`          | Empty object  |
| `nil`     | `nil`         | Nil value     |
