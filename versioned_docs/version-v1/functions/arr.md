---
title: Array functions - Textwire v1
sidebar_label: Array functions
sidebar_position: 3
---

# Array functions

### `len`

#### Description
Function `len` returns the length of an array.

#### Arguments
None

#### Input example:
```html
<span>{{ [1, 2, 3].len() }}</span>
```

#### Output:
```html
<span>3</span>
```

### `join`

#### Description
Function `join` is used to join the elements of an array into a string. It takes an optional argument `separator` which is used to join the elements. If no separator is provided, it defaults to a comma.

#### Arguments
1. `separator` (optional) - What separator to use to join the elements. Default is comma `,`.

#### Input example:
```html
<span>{{ ["one", "two"].join(" ") }}</span>
```

#### Output:
```html
<span>one two</span>
```

