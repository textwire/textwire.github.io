---
title: Expressions - v4
description: You can find here all the information about expressions in Textwire
---

# Expressions

- [Ternary](#ternary) <code v-pre>{{ x ? y : z }}</code>
- [Prefix](#prefix) <code v-pre>{{ !x` or `-x }}</code>
- [Infix](#infix) <code v-pre>{{ x * (y + 3) }}</code>
- [Comparison](#comparison) <code v-pre>{{ x == y }}</code>
- [Function calls](#function-calls) <code v-pre>{{ name.split(" ") }}</code>
- [Logical Expressions](#logical-expressions) <code v-pre>{{ isHome || isContact }}</code>

## Ternary

You can use ternary expressions to conditionally render content. Example:

```textwire
<span>{{ x == 1 ? "yes" : "no" }}</span>
```

The advantage of a "ternary expression" over an "if statement" is that it can be used inside of any other expressions.

## Prefix

You can use prefix expressions to negate or invert a boolean value. Example:

```textwire
<span>{{ !isTall ? "Not tall" : "Is tall" }}</span>
<span>{{ -x }}</span>
```

## Infix

You can use infix expressions to perform arithmetic operations. Example:

```textwire
<ul>
    <li>{{ x + y }}</li> {{-- Addition --}}
    <li>{{ x - y }}</li> {{-- Subtraction --}}
    <li>{{ x * y }}</li> {{-- Multiplication --}}
    <li>{{ x / y }}</li> {{-- Division --}}
    <li>{{ x % y }}</li> {{-- Modulo --}}
    <li>{{ x == y }}</li> {{-- Equality --}}
    <li>{{ x != y }}</li> {{-- Inequality --}}
    <li>{{ x && y }}</li> {{-- Logical AND --}}
    <li>{{ x || y }}</li> {{-- Logical OR --}}
    <li>{{ (x + 2) / (y * (4 - c)) }}</li> {{-- Grouped expressions --}}
</ul>
```

### Infix Operators

| Operator | Description      | Left/Right types             |
| -------- | ---------------- | ---------------------------- |
| `==`     | Equal            | `any`                        |
| `!=`     | Not equal        | `any`                        |
| `&&`     | Logical AND      | `any`                        |
| `\|\|`   | Logical OR       | `any`                        |
| `%`      | Modulo           | `integer`                    |
| `+`      | Plus             | `integer`, `float`, `string` |
| `-`      | Minus            | `integer`, `float`           |
| `*`      | Multiply         | `integer`, `float`           |
| `/`      | Divide           | `integer`, `float`           |
| `>`      | Greater          | `integer`, `float`           |
| `<`      | Less             | `integer`, `float`           |
| `>=`     | Greater or equal | `integer`, `float`           |
| `<=`     | Less or equal    | `integer`, `float`           |

### Important Notes

- **String concatenation.** Use `+` operator to concatenate strings. Example: <code v-pre>{{ "Hello, " + name }}</code> will result in `Hello, {name}`.

## Comparison

Comparison expressions produce a boolean value. Example:

```textwire
@if(x == 1)
    <p>x is 1</p>
@end
```

### Comparison Operators

| Operator | Description      | Left/Right types   |
| -------- | ---------------- | ------------------ |
| `==`     | Equal            | `any`              |
| `!=`     | Not equal        | `any`              |
| `>`      | Greater          | `integer`, `float` |
| `<`      | Less             | `integer`, `float` |
| `>=`     | Greater or equal | `integer`, `float` |
| `<=`     | Less or equal    | `integer`, `float` |

- **Any type for equality operators.** Unlike Go, in Textwire, operators `==`, `!=`, `&&` and `||` can be used with any types on left and right.
- **Compare arrays and objects.** Use `==` and `!=` to deeply compare arrays and objects. Example: <code v-pre>{{ [1, 2] == [1, 2] }}</code> will result in `true` because both arrays have the same elements in the same order. Similarly, <code v-pre>{{ { name: "Chiori" } == { name: "Chiori" } }}</code> will also result in `true` because both objects have the same key-value pairs. It works for deeply nested arrays and objects as well.

## Function Calls

You can use function calls to call functions. Textwire has a few built-in functions that you can use in your templates.

Functions in Textwire are type-specific, which means that you can't call a function on a variable that is not of the same type as the function. For example, you can't call a `split` function on an integer variable.

Example:

```textwire
{{ name.split(" ") }}
```

You can read more detail about built-in functions on the [Functions Guide](/v4/functions/guide) page.

## Logical Expressions

You can use logical OR (`||`) and logical AND (`&&`) expressions to combine boolean values.

```textwire
@if(admin || owner)
    @component('admin-popup')@end
@end

@if(isSunny && isWarm)
    @component('good-weather-widget')@end
@end
```

Logical expression accepts any literal value and converts it to boolean. Read about [Truthy and Falsy Values](/v4/#truthy-and-falsy-values).
