---
title: Array Functions - v3
description: Explore the various array functions available in Textwire
---

# Array Functions
## append
```ts
arr.append(elem: ANY...): ARRAY
```

Adds one or more elements to the end of an array and returns a new array

#### Arguments:
- `elem` (ANY) - Any amount of elements to add to the array

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
arr.contains(elem?: ANY): BOOLEAN
```

Returns `true` if the array contains the given element, otherwise `false`

#### Arguments:
1. `elem` (ANY) - The element to search for in the array. Can be ANY type, including OBJECTS and ARRAYS

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
arr.join(separator?: STRING = ","): STRING
```

Joins the elements of an array into a string and returns it. It takes an optional argument `separator` which is used to join the elements. If no separator is provided, it defaults to a comma

#### Arguments:
1. `separator` (STRING) (optional) - What separator to use to join the elements. Default is `","` (comma)

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
arr.len(): INTEGER
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
arr.prepend(elem: ANY...): ARRAY
```

Adds one or more elements to the beginning of an array and returns a new array

#### Arguments:
- `elem` (ANY) - Any amount of elements to add to the array

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
arr.rand(): ANY
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
arr.reverse(): ARRAY
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
arr.shuffle(): ARRAY
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
arr.slice(start: INTEGER, end?: INTEGER): ARRAY
```

Returns a portion of an array. The `start` argument is the index at which to begin the slice. The `end` argument is the index at which to end the slice. If `end` is not provided, it slices to the end of the array

#### Arguments:
1. `start` (INTEGER) - The index at which to begin the slice
2. `end` (INTEGER) (optional) - The index at which to end the slice

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
