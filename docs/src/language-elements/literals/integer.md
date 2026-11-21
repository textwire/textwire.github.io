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

Integers are 64-bit. Adding to the maximum value `9223372036854775807` overflows and wraps around to `-9223372036854775808`. Example:

```textwire
{{ 9223372036854775807 + 1 }} {{-- Output: -9223372036854775808 --}}
```

## Important Notes

- **Arithmetic operators.** Support `+`, `-`, `*`, `/`, `%` operations.
- **Division returns an integer.** Integer division like `4 / 2` returns `2` (integer). Use a float literal if you need a float result, for example `4.0 / 2.0`.
- **Negative numbers.** Prefix with `-` for negative integers (e.g., `-42`).
