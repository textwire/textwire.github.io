---
title: Integer Literals - v6
description: Learn about integer literals in Textwire
---

# Integer Literals

You can use integer literals and perform arithmetic operations with them. Example:

```textwire
<span>{{ 1 + 2 }}</span>
```

## Overflow

Integers are 64-bit and follow Go's `int64` arithmetic, so they range from `-9223372036854775808` to `9223372036854775807`. When `+`, `-`, `*`, `/`, unary `-`, `++` or `--` produce a value outside this range, it wraps around to the other end instead of causing render error. Example:

```textwire
{{ 9223372036854775807 + 1 }} {{-- Output: -9223372036854775808 --}}
{{ -9223372036854775808 - 1 }} {{-- Output: 9223372036854775807 --}}
{{ 3037000500 * 3037000500 }} {{-- Output: -9223372036709301616 --}}
{{ -9223372036854775808 / -1 }} {{-- Output: -9223372036854775808 --}}
```

These cases cause render error instead of wrapping:

- **Division by zero.** `/` and `%` with a divisor of `0`.
- **Literals out of range.** An integer literal above the maximum, like `9223372036854775808`.
- **Unsigned data out of range.** A `uint` or `uint64` value from your Go data above `9223372036854775807`.
- **Function results out of range.** [`abs()`](/functions/int#abs) on `-9223372036854775808`, and [`int()`](/functions/float#int), [`ceil()`](/functions/float#ceil) or [`floor()`](/functions/float#floor) on a float too large for an integer.

## Important Notes

- **Arithmetic operators.** Support `+`, `-`, `*`, `/`, `%` operations.
- **Division returns an integer.** Integer division like `4 / 2` returns `2` (integer). Use a float literal if you need a float result, for example `4.0 / 2.0`.
- **Negative numbers.** Prefix with `-` for negative integers (e.g., `-42`).
