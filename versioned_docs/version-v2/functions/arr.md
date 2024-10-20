---
sidebar_position: 3
description: Explore the various array functions available in Textwire
---

# Array functions

## `len(): int` {#len}
Returns the length of an array

#### Input example:
```html
<span>{{ [1, 2, 3].len() }}</span>
```

#### Output:
```html
<span>3</span>
```

## `join(): str` {#join}
Joins the elements of an array into a string and returns it. It takes an optional argument `separator` which is used to join the elements. If no separator is provided, it defaults to a comma

#### Arguments
1. `separator` (optional) - What separator to use to join the elements. Default is comma `,`

#### Input example:
```html
<span>{{ ["one", "two"].join(" ") }}</span>
```

#### Output:
```html
<span>one two</span>
```

## `rand(): any` {#rand}
Returns a random element from the array. The return type is the same as the type of the elements in the array

#### Input example:
```html
<span>{{ [1, 2, 3].rand() }}</span>
```

#### Output:
```html
<span>2</span>
```

## `reverse(): arr` {#reverse}
Reverses the elements of an array and returns a new array

#### Input example:
```html
<span>{{ [1, 2, 3].reverse() }}</span>
```

#### Output:
```html
<span>3, 2, 1</span>
```