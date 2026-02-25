---
title: Expressions - v3
description: You can find here all the information about expressions in Textwire
---

# Expressions

- [Ternary](#ternary) <code v-pre>{{ x ? y : z }}</code>
- [Prefix](#prefix) <code v-pre>{{ !x` or `-x }}</code>
- [Infix](#infix) <code v-pre>{{ x * (y + 3) }}</code>
- [Postfix](#postfix) <code v-pre>{{ x++ }}</code> or <code v-pre>{{ x-- }}</code>
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
    <li>{{ (x + 2) / (y * (4 - c)) }}</li> {{-- Grouped expressions --}}
</ul>
```

## Postfix

You can use postfix expressions to increment or decrement a variable. Example:

```textwire
<span>{{ x++ }}</span> {{-- Increment --}}
<span>{{ x-- }}</span> {{-- Decrement --}}
```

## Comparison

Comparison expressions produce a boolean value. Example:

```textwire
@if(x == 1)
    <p>x is 1</p>
@end
```

### Supported Operators

All supported operators are listed in the table below:

| Operator | Description      |
| -------- | ---------------- |
| `==`     | Equal            |
| `!=`     | Not equal        |
| `>`      | Greater          |
| `<`      | Less             |
| `>=`     | Greater or equal |
| `<=`     | Less or equal    |

## Function Calls

You can use function calls to call functions. Textwire has a few built-in functions that you can use in your templates.

Functions in Textwire are type-specific, which means that you can't call a function on a variable that is not of the same type as the function. For example, you can't call a `split` function on an integer variable.

Example:

```textwire
{{ name.split(" ") }}
```

You can read more detail about built-in functions on the [Functions Guide](/v3/functions/guide) page.

## Logical Expressions

You can use logical OR (`||`) and logical AND (`&&`) expressions to combine boolean values.

```textwire
@if(admin || owner)
    @component('admin-popup')
@end

@if(isSunny && isWarm)
    @component('good-weather-widget')
@end
```

Logical expression accepts any literal value and converts it to boolean. Read about [Truthy and Falsy Values](/v3/#truthy-and-falsy-values).
