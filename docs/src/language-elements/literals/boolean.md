---
title: Boolean Literals - v5
description: Learn about boolean literals in Textwire
---

# Boolean Literals

Booleans represent truth values and can be either `true` or `false`. They are essential for controlling program flow with conditional statements.

```textwire
{{ isAdmin = true }}

@if(isAdmin)
    <button>Delete User</button>
@else
    <p>You don't have permission</p>
@end
```

## Truthy values

Non-empty strings, non-zero numbers (including negatives), non-empty arrays, and objects with at least one key are truthy.

## Falsy values

`false`, `nil`, `0`, `0.0`, empty strings `""`, empty arrays `[]`, and empty objects `{}` are falsy.

## Printed as `1` and `0`

Outputting a boolean renders `1` for `true` and `0` for `false`. Use a ternary expression if you need `"true"` or `"false"` text.
