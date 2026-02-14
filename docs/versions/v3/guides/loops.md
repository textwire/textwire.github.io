---
title: Loops - v3
description: Learn how to use different types of loops in Textwire, including 'each' and 'for' loops
outline: deep
---

# Loops Usage

Textwire provides two types of loops: [for loop](/v3/language-elements/directives#for) and [each loop](/v3/language-elements/directives#each). Both loops iterate over arrays with special syntax and additional features. This guide covers loop functionality and usage patterns.

## For Loops

Textwire supports traditional for loops with the syntax `@for(<declaration>; <condition>; <post>)`. All three parameters are optional.

```textwire
{{ names = ["Ann", "Serhii"] }}

@for(i = 0; i < names.len(); i++)
    <p>{{ names[i] }}</p>
@else
    <p>No names</p>
@end
```

## Each Loops

Each loops provide simplified array iteration with syntax `@each(<declaration> in <array>)`.

```textwire
{{ names = ["Ann", "Serhii"] }}

@each(name in names)
    <p>{{ name }}</p>
@end
```

## Break and Continue

Textwire provides multiple loop control directives:

### Conditional Break and Continue

Use `@breakIf()` and `@continueIf()` with a single condition argument.

```textwire
@each(num in [0, 1])
    @breakIf(num == 1)
    <p>{{ name }}</p>
@end
```

When the condition is `false`, the directive does nothing. When the condition is `true`, the loop is broken or continued.

### Direct Break and Continue

Use `@break` and `@continue` without conditions for immediate loop control.

```textwire
@each(item in items)
    @if(item.should_print)
        <p>{{ item }}</p>
    @end

    @break
@end
```

Direct `@continue` skips to next iteration immediately. Direct `@break` exits the loop entirely.

## Loop Variables

Both `@for` and `@each` loops provide access to a `loop` object with iteration metadata. The `loop` object updates on each iteration.

Available properties:

| Property | Type | Description                                |
| -------- | ---- | ------------------------------------------ |
| `index`  | int  | Current index number starting from `0`     |
| `first`  | bool | Is the first item in a loop or not?        |
| `last`   | bool | Is the last item in a loop or not?         |
| `iter`   | int  | Current iteration number starting from `1` |

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

It's a useful feature that eliminates the need for additional variables to track iteration data.

## Else Statement

Use `@else` to render content when arrays are empty. This works with both `@for` and `@each` loops. Example:

```textwire
@each(name in [])
    <p>{{ name }}</p>
@else
    <p>No names</p>
@end
```

When the array is empty, the result is `<p>No names</p>`. Without the `@else` statement, nothing renders when arrays are empty. The same behavior applies to `@for` loops.

## Best Practices

1. **Choose appropriate loop type**: Use `@each` for simple array iteration, `@for` for index-based control
2. **Handle empty arrays**: Always include `@else` for better user experience
3. **Use loop variables**: Leverage `loop.first`, and `loop.last` for conditional logic
