---
title: Float Literals - v6
description: Learn about float literals in Textwire
---

# Float Literals

You can use float literals and perform arithmetic operations with them. Example:

```textwire
<span>{{ 1.534 + 2.5 }}</span>
```

## Precision limit (IEEE 754)

Floating-point numbers have ~15-17 digit precision. For example, `1234567890.1234567890` rounds to `1234567890.1234567`.

## Large numbers as strings

Keep large numbers as strings if you need exact precision.

## Division follows the operand types

Float division like `4.0 / 2.0` returns a float. Integer division like `4 / 2` returns an integer.

## Follows IEEE 754 like Go

Overflow produces `+Inf` or `-Inf`, values too small to represent underflow to `0.0`, and invalid operations like `+Inf - +Inf` produce `NaN`. These special values are printed as `+Inf`, `-Inf`, and `NaN`.

## Non-finite floats become `null` in JSON

`+Inf`, `-Inf`, and `NaN` are serialized as `null`.
