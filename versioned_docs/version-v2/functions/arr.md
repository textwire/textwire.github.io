---
title: Array Functions - v2
sidebar_label: Array Functions
sidebar_position: 1
description: Explore the various array functions available in Textwire
---

# Array Functions
## contains
```ts
contains(elem?: any): bool
```

Returns `true` if the array contains the given element, otherwise `false`

#### Arguments
1. `elem` (any) - The element to search for in the array. Can be any type, including objects and arrays

#### Input example:
```textwire
{{ ["one", "two"].contains("two") }}
```

#### Output:
```textwire
1
```

#### Notes
You can do deep comparison with objects and arrays as well

```textwire
{{ obj = { name: 'Anna' }; [obj].contains(obj) }}
```

Keep in mind that the order of objects fields doesn't matter in the comparison, but the order of array elements does matter, because each element has a unique index. `[1, 2]` and `[2, 1]` are different arrays.

## join
```ts
join(separator?: str = ","): str
```

Joins the elements of an array into a string and returns it. It takes an optional argument `separator` which is used to join the elements. If no separator is provided, it defaults to a comma

#### Arguments
1. `separator` (str) (optional) - What separator to use to join the elements. Default is `","` (comma)

#### Input example:
```textwire
{{ ["one", "two"].join(" ") }}
```

#### Output:
```textwire
one two
```

## len
```ts
len(): int
```

Returns the length of an array

#### Input example:
```textwire
{{ [1, 2, 3].len() }}
```

#### Output:
```textwire
3
```

## rand
```ts
rand(): any
```

Returns a random element from the array. The return type depends on the type of elements in the array.

#### Input example:
```textwire
{{ [1, 2, 3].rand() }}
```

#### Output:
```textwire
2
```

## reverse
```ts
reverse(): arr
```

Reverses the elements of an array and returns a new array

#### Input example:
```textwire
{{ [1, 2, 3].reverse() }}
```

#### Output:
```textwire
3, 2, 1
```

## shuffle
```ts
shuffle(): arr
```

Shuffles the elements of an array and returns a new array

#### Input example:
```textwire
{{ [1, 2, 3, 5].shuffle() }}
```

#### Output:
```textwire
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

#### Input example:
```textwire
{{ [1, 2, 3, 4, 5].slice(1, 3) }}
```

#### Output:
```textwire
2, 3
```

:::warning No negative arguments
`start` and `end` arguments cannot be negative. If you provide a negative value for `start`, it will be treated as `0`. If you provide a negative value for `end` or the value will exceed the length of the array, it will default to a value of the last index of the array
:::