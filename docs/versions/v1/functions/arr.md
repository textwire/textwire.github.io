---
title: Array functions - v1
---

# Array functions

### `len`

#### Description
Function `len` returns the length of an array.

#### Arguments
None

#### Input example:
```textwire
<span>{{ [1, 2, 3].len() }}</span>
```

#### Output:
```textwire
<span>3</span>
```

### `join`

#### Description
Function `join` is used to join the elements of an array into a string. It takes an optional argument `separator` which is used to join the elements. If no separator is provided, it defaults to a comma.

#### Arguments
1. `separator` (optional) - What separator to use to join the elements. Default is comma `,`.

#### Input example:
```textwire
<span>{{ ["one", "two"].join(" ") }}</span>
```

#### Output:
```textwire
<span>one two</span>
```

