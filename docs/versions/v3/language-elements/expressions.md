---
title: Expressions - v3
description: You can find here all the information about expressions in Textwire
---

# Expressions

- [Ternary expressions](#ternary-expressions) <code v-pre>{{ x ? y : z }}</code>
- [Prefix expressions](#prefix-expressions) <code v-pre>{{ !x` or `-x }}</code>
- [Infix expressions](#infix-expressions) <code v-pre>{{ x * (y + 3) }}</code>
- [Postfix expressions](#postfix-expressions) <code v-pre>{{ x++ }}</code> or <code v-pre>{{ x-- }}</code>
- [Comparison expressions](#comparison-expressions) <code v-pre>{{ x == y }}</code>
- [Function calls](#function-calls) <code v-pre>{{ name.split(" ") }}</code>
- [Variable Declaration](#variable-declaration) <code v-pre>{{ x = 5 }}</code>

## Ternary Expressions
You can use ternary expressions to conditionally render content. Here is an example of using ternary expressions:

```textwire :no-line-numbers
<span>{{ x == 1 ? "yes" : "no" }}</span>
```

The advantage of a "ternary expression" over an "if statement" is that it can be used inside of any other expressions.

## Prefix Expressions
You can use prefix expressions to negate or invert a boolean value. Here is an example of using prefix expressions:

```textwire :no-line-numbers
<span>{{ !isTall ? "Not tall" : "Is tall" }}</span>
<span>{{ -x }}</span>
```

## Infix Expressions
You can use infix expressions to perform arithmetic operations. Here is an example of using infix expressions:

```textwire
<ul>
    <li>{{ x + y }}</li> <!-- Addition -->
    <li>{{ x - y }}</li> <!-- Subtraction -->
    <li>{{ x * y }}</li> <!-- Multiplication -->
    <li>{{ x / y }}</li> <!-- Division -->
    <li>{{ x % y }}</li> <!-- Modulo -->
    <li>{{ (x + 2) / (y * (4 - c)) }}</li> <!-- Grouped expressions -->
</ul>
```

## Postfix Expressions
You can use postfix expressions to increment or decrement a variable. Here is an example of using postfix expressions:

```textwire :no-line-numbers
<span>{{ x++ }}</span> <!-- Increment -->
<span>{{ x-- }}</span> <!-- Decrement -->
```

## Comparison Expressions
Comparison expressions produce a boolean value. Here is an example of using comparison expressions:

```textwire :no-line-numbers
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

Here is an example of using function calls:

```textwire :no-line-numbers
{{ name.split(" ") }}
```

> You can read more detail about built-in functions on the [Built-in Functions](/v3/functions/guide) page.

## Variable Declaration

You can assign and declare variables by using the `=` operator. Here is an example of declaring variables:

```textwire :no-line-numbers
{{ x = 5 }}
{{ x = 10 }}
```

You cannot assign values to variables of a different type. For example, you cannot do <code v-pre>{{ x = "Hello"; x = 3 }}</code> because `x` is a string and then you are trying to assign an integer to it. In Textwire, you don't need to declare type of a variable, it will be automatically inferred from the value that you assign to it.

:::tip Declaration Has No Output
Variable declaration statements are not expressions! They don't return any value and can't be used inside of other expressions. Therefore, they don't print anything to the output.
:::
