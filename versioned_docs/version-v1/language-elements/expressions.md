---
sidebar_position: 3
---

# Expressions

- Expressions
    - [Ternary expressions](#ternary-expressions) `{{ x ? y : z }}`
    - [Prefix expressions](#prefix-expressions) `{{ !x` or `-x }}`
    - [Infix expressions](#infix-expressions) `{{ x * (y + 3) }}`
    - [Postfix expressions](#postfix-expressions) `{{ x++ }}` or `{{ x-- }}`
    - [Comparison expressions](#comparison-expressions) `{{ x == y }}` or `{{ x < y }}`
    - [Function calls](#function-calls) `{{ name.split(" ") }}`

## Ternary expressions

You can use ternary expressions to conditionally render content. Here is an example of using ternary expressions:

```html
<span>{{ x == 1 ? "yes" : "no" }}</span>
```

The advantage of a "ternary expression" over "if statement" is that it can be use inside of any other expressions.

## Prefix expressions

You can use prefix expressions to negate or invert a boolean value. Here is an example of using prefix expressions:

```html
<span>{{ !isTall ? "Not tall" : "Is tall" }}</span>
<span>{{ -x }}</span>
```

## Infix expressions

You can use infix expressions to perform arithmetic operations. Here is an example of using infix expressions:

```html
<ul>
    <li>{{ x + y }}</li> <!-- Addition -->
    <li>{{ x - y }}</li> <!-- Subtraction -->
    <li>{{ x * y }}</li> <!-- Multiplication -->
    <li>{{ x / y }}</li> <!-- Division -->
    <li>{{ x % y }}</li> <!-- Modulo -->
    <li>{{ (x + 2) / (y * (4 - c)) }}</li> <!-- Grouped expressions -->
</ul>
```

## Postfix expressions

You can use postfix expressions to increment or decrement a variable. Here is an example of using postfix expressions:

```html
<span>{{ x++ }}</span> <!-- Increment -->
<span>{{ x-- }}</span> <!-- Decrement -->
```

## Comparison expressions

Comparison expressions produce a boolean value. Here is an example of using comparison expressions:

```html
@if(x == 1)
    <p>x is 1</p>
@end
```

### Supported operators

All supported operators are listed in the table below:

| Operator | Description      |
| -------- | ---------------- |
| `==`     | Equal            |
| `!=`     | Not equal        |
| `>`      | Greater          |
| `<`      | Less             |
| `>=`     | Greater or equal |
| `<=`     | Less or equal    |


## Function calls

You can use function calls to call functions. Textwire has a few built-in functions that you can use in your templates.

Functions in Textwire are type specific, which means that you can't call a function on a variable that is not of the same type as the function. For example, you can't call a `split` function on an integer variable.

Here is an example of using function calls:

```html
{{ name.split(" ") }}
```

> You can read more detailed about built-in functions on the [Built-in Functions](/docs/v1/functions/) page.