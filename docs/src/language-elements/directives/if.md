---
title: If Directive - v6
description: Learn about the @if directive in Textwire
---

# @if

You can use if directives to conditionally render content. You can construct `@if` directive using the `@if`, `@elseif`, `@else` and `@end` directives. Example:

```textwire
@if(name == "Anna")
    <p>Her name is Anna</p>
@end
```

You can also use `else` and `elseif` directives:

```textwire
@if(x == 1)
    <p>x is 1</p>
@elseif(x == 2)
    <p>x is 2</p>
@else
    <p>x is not 1 and 2</p>
@end
```

If you pass `nil`, an empty string, an empty array, or an empty object to the `@if` directive, it will be treated as `false`.

```textwire
{{ name = nil }}

@if(name)
    <p>This will not be printed</p>
@end
```
