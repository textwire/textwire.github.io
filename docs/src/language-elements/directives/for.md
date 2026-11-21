---
title: For Directive - v6
description: Learn about the @for directive in Textwire
---

# @for

You can use regular for loops to iterate over an array or a range of numbers.

This is a basic for loop that you can use. It has a declaration, condition and post statement. `for <declaration>; <condition>; <post>`. They are all optional. Example:

```textwire
{{ names = ["Ann", "Serhii"] }}

@for(i = 0; i < names.len(); i++)
    <p>{{ names[i] }}</p>
@else
    <p>No names</p>
@end
```

Read more about loops in the [Loops guide](/language-elements/loops).

## Example with `@continueif`

This example renders a list of names and skips `Serhii` with `@continueif`:

```textwire
{{ names = ["Ann", "Serhii", "Vladimir"] }}

<ul>
    @for(i = 0; i < names.len(); i++)
        @continueif(names[i] == "Serhii")
        <li>{{ names[i] }}</li>
    @end
</ul>
```

## Important Notes

- **Extends parent scope.** For loop extends parent scope, which means that you can manipulate variables defined outside of the loop. For example, you can define a variable outside of the loop and increment it inside the loop.
- **`loop` object.** `@for` loops provide a `loop` object with iteration metadata. The `loop.last` property is only available in `@each` loops. Read more about [Loop Variables](/language-elements/loops#loop-variables).
