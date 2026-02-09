---
title: Loops - v2
description: Learn how to use different types of loops in Textwire, including 'each' and 'for' loops
---

# Loops Usage
Textwire has two types of loops: [for loop](/v2/language-elements/statements#for-loop) and [each loop](/v2/language-elements/statements#each-loop), you can read about them on their respective pages. Both loops are used to iterate over arrays and have special syntax. In this guide, we will show you extra features of these loops and how to use them.

## Break and Continue
In most programming languages, you can use `break` and `continue` statements to break or continue a loop. Textwire has similar functionality, but it is implemented as directives with the `@` symbol.

For convenience, you also have `@breakIf()` and `@continueIf()` directives. They accept a single argument, which is a condition that needs to be met to break or continue the loop. Here is an example:

```textwire
@each(num in [0, 1])
    @breakIf(num == 1)
    <p>{{ name }}</p>
@end
```

When the condition is `false`, the directive does nothing. When the condition is `true`, the loop is broken or continued.

## Loop Variables
Inside of every `each` and `for` loop, you have an access to a `loop` object. It allows you to get the current iteration index or other data that is updated on every iteration.

For example, `{{ loop.index }}` will return the current iteration index starting from `0`. `{{ loop.first }}` will return `true` if it is the first iteration. Here is a list of all the properties of the `loop` object you can use:

| Property | Type    | Description                                |
| -------- | ------- | ------------------------------------------ |
| `index`  | Integer | Current index number starting from `0`     |
| `first`  | Boolean | Is the first item in a loop                |
| `last`   | Boolean | Is the last item in a loop                 |
| `iter`   | Integer | Current iteration number starting from `1` |

### Example
```textwire
{{ names = ["Anna", "Serhii", "Vladimir"] }}

<ul>
    @each(name in names)
        <li>{{ loop.iter }}. {{ name }}</li>
    @end
</ul>
```

### Output
```textwire
<ul>

        <li>1. Anna</li>

        <li>2. Serhii</li>

        <li>3. Vladimir</li>

</ul>
```

It's a very useful feature that removes the need to create additional variables to track the iteration index or other data.

## Else Statement
Optionally, you can use the `@else` statement to render content when the array is empty. It is similar to the `else` statement in the `@if` statement. Here is an example:

```textwire
@each(name in [])
    <p>{{ name }}</p>
@else
    <p>No names</p>
@end
```

The result will be `<p>No names</p>` because the array is empty. If you remove the `@else` statement, nothing will be rendered.

With `for` loops, the `@else` statement will behave the same way. The body of the `@else` statement will be rendered when the loop is not executed.
