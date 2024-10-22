---
sidebar_position: 1
description: Explore the various array functions available in Textwire
---

# Array functions

## join
```ts
join(separator?: str = ""): str
```

Joins the elements of an array into a string and returns it. It takes an optional argument `separator` which is used to join the elements. If no separator is provided, it defaults to a comma

#### Arguments
1. `separator` (str) (optional) - What separator to use to join the elements. Default is comma `,`

#### Input example:
```html
<span>{{ ["one", "two"].join(" ") }}</span>
```

#### Output:
```html
<span>one two</span>
```

## len
```ts
len(): int
```

Returns the length of an array

#### Input example:
```html
<span>{{ [1, 2, 3].len() }}</span>
```

#### Output:
```html
<span>3</span>
```

## rand
```ts
<T>.rand(): T
```

Returns a random element from the array. The return type is the same as the type of the elements in the array

#### Input example:
```html
<span>{{ [1, 2, 3].rand() }}</span>
```

#### Output:
```html
<span>2</span>
```

## reverse
```ts
reverse(): arr
```

Reverses the elements of an array and returns a new array

#### Input example:
```html
<span>{{ [1, 2, 3].reverse() }}</span>
```

#### Output:
```html
<span>3, 2, 1</span>
```

## shuffle
```ts
shuffle(): arr
```

Shuffles the elements of an array and returns a new array

#### Input example:
```html
<span>{{ [1, 2, 3, 5].shuffle() }}</span>
```

#### Output:
```html
<!-- The order of the elements will be random -->
<span>2, 1, 3, 5</span>
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
```html
<span>{{ [1, 2, 3, 4, 5].slice(1, 3) }}</span>
```

#### Output:
```html
<span>2, 3</span>
```

:::warning
`start` and `end` arguments cannot be negative. If you provide a negative value for `start`, it will be treated as `0`. If you provide a negative value for `end` or the value will exceed the length of the array, it will default to a value of the last index of the array
:::