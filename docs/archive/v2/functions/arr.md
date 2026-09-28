---
title: Array Functions - v2
description: Explore the various array functions available in Textwire
---

# Array Functions
## append
```ts
append(elem: any...): arr
```

Adds one or more elements to the end of an array and returns a new array

#### Arguments
- `elem` (any) - Any amount of elements to add to the array

#### Input Example:
```textwire
{{ ["one", "two"].append("three", "four") }}
```

#### Output:
```html
one, two, three, four
```

## contains
```ts
contains(elem?: any): bool
```

Returns `true` if the array contains the given element, otherwise `false`

#### Arguments
1. `elem` (any) - The element to search for in the array. Can be any type, including objects and arrays

#### Input Example:
```textwire
{{ ["one", "two"].contains("two") }}
```

#### Output:
```html
1
```

#### Notes
You can do deep comparison with objects and arrays as well

```textwire
{{ obj = { name: 'Anna' }; [obj].contains(obj) }}
```

Keep in mind that the order of object's fields doesn't matter in the comparison, but the order of array elements does matter, because each element has a unique index. `[1, 2]` and `[2, 1]` are different arrays.

## join
```ts
join(separator?: str = ","): str
```

Joins the elements of an array into a string and returns it. It takes an optional argument `separator` which is used to join the elements. If no separator is provided, it defaults to a comma

#### Arguments
1. `separator` (str) (optional) - What separator to use to join the elements. Default is `","` (comma)

#### Input Example:
```textwire
{{ ["one", "two"].join(" ") }}
```

#### Output:
```html
one two
```

## len
```ts
len(): int
```

Returns the length of an array

#### Input Example:
```textwire
{{ [1, 2, 3].len() }}
```

#### Output:
```html
3
```

## prepend
```ts
prepend(elem: any...): arr
```

Adds one or more elements to the beginning of an array and returns a new array

#### Arguments
- `elem` (any) - Any amount of elements to add to the array

#### Input Example:
```textwire
{{ ["three", "four"].prepend("one", "two") }}
```

#### Output:
```html
one, two, three, four
```

## rand
```ts
rand(): any
```

Returns a random element from the array. The return type depends on the type of elements in the array.

#### Input Example:
```textwire
{{ [1, 2, 3].rand() }}
```

#### Output:
```html
2
```

## reverse
```ts
reverse(): arr
```

Reverses the elements of an array and returns a new array

#### Input Example:
```textwire
{{ [1, 2, 3].reverse() }}
```

#### Output:
```html
3, 2, 1
```

## shuffle
```ts
shuffle(): arr
```

Shuffles the elements of an array and returns a new array

#### Input Example:
```textwire
{{ [1, 2, 3, 5].shuffle() }}
```

#### Output:
```html
<!-- The order of the elements will be random -->
2, 1, 3, 5
```

## slice
```ts
slice(start: int, end?: int): arr
```

Returns a portion of an array. The `start` argument is the index at which to begin the slice. The `end` argument is the index at which to end the slice. If `end` is not provided, it slices to the end of the array

#### Arguments
1. `start` (int) - The index at which to begin the slice
2. `end` (int) (optional) - The index at which to end the slice

#### Input Example:
```textwire
{{ [1, 2, 3, 4, 5].slice(1, 3) }}
```

#### Output:
```html
2, 3
```

:::warning No Negative Arguments
`start` and `end` arguments cannot be negative. If you provide a negative value for `start`, it will be treated as `0`. If you provide a negative value for `end` or the value exceeds the length of the array, it will default to the last index of the array
:::
