---
title: String Literals - v6
description: Learn about string literals in Textwire
---

# String Literals

You can use string literals and concatenate them with other strings. You can use double or single quotes for strings. Example:

```textwire
{{ "Hello" + 'World!' }}
```

When you print a string, it will be automatically escaped. If you want to print a string without escaping it, you can use the raw embedding with `{!!` and `!!}`. Example:

```textwire
{!! "<h1>Test</h1>" !!}
```

## Auto-escaped on output

All strings are automatically HTML-escaped when printed to prevent XSS attacks.

## Use `{!! !!}` for unescaped output

Use the `{!! myVar !!}` when you need to output HTML, XML, JSON without escaping.

## Concatenation with `+`

Use the `+` operator to join strings together.

## Quote flexibility

Single and double quotes are interchangeable for string literals.

## Escaping

Use a backslash to insert special characters inside strings. See [Escaping](/language-elements/syntax#escaping-in-strings).

Backslash escapes only change the characters in the string. They do not disable HTML escaping when the string is printed. If a trusted string should be printed as is, use the [`raw()`](/functions/global#raw) global function:

```textwire
{{ html = "<b>Hello</b>" }}
{{ html }}      {{-- Output: &lt;b&gt;Hello&lt;/b&gt; --}}
{{ raw(html) }} {{-- Output: <b>Hello</b> --}}
```

Read more about [`raw()`](/functions/global#raw) in the Global Functions documentation.
