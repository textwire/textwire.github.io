---
title: Nil Literal - v6
description: Learn about the nil literal in Textwire
---

# Nil Literal

`nil` represents the absence of a value. It is commonly used to indicate that a variable has no value assigned or that something doesn't exist.

In Textwire, `nil` is treated as `false` in boolean contexts, making it easy to check for missing values:

```textwire
{{ user = nil }}

@if(!user)
    <p>No user found</p>
@end
```

## Important Notes

- **Converts to `false` in conditions.** `nil` is falsy in boolean contexts.
- **Prints as empty string.** Outputting `nil` displays nothing.
- **Array out-of-bounds returns `nil`.** Accessing non-existent array indices returns `nil` instead of error.
- **Accessing object property `nil`.** Accessing a property that doesn't exist on object returns `nil` instead of error.
