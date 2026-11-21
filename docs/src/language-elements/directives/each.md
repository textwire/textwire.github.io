---
title: Each Directive - v6
description: Learn about the @each directive in Textwire
---

# @each

Each directive is a special form of `for` loop that you can use to iterate over an array. It has a declaration and an array. `@each(<declaration> in <array>)`. Example:

```textwire
{{ names = ["Ann", "Serhii"] }}

@each(name in names)
    <p>{{ name }}</p>
@end
```

Read more about loops in the [Loops guide](/language-elements/loops).

## Important Notes

- **Extends parent scope.** Each loop extends parent scope, which means that you can manipulate variables defined outside of the loop. For example, you can define a variable outside of the loop and increment it inside the loop.
- **Single-type array item.** `@each` requires single-type arrays. Since Textwire variables are strictly typed, the iterator adopts the type of the first element; mixed types will trigger a reassignment error. For arrays with multiple types, use a standard `@for` loop with index access.
