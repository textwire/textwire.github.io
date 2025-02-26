---
title: String Functions - v1
sidebar_label: String Functions
sidebar_position: 1
---

# String Functions

### `raw()`

#### Description
Function `raw` is used to render a string as raw HTML. This is useful when you want to render HTML tags from a string. By default, HTML tags in a string are escaped to prevent XSS attacks.

#### Arguments
None

#### Input example
```textwire
{{ "<h1>Test</h1>".raw() }}
```

#### Output
```textwire
<h1>Test</h1>
```

### `split()`

#### Description
Function `split` is used to split a string into an array of substrings. It takes an optional argument `separator` which is used to split the string. If no separator is provided, it defaults to a space.

#### Arguments
1. `separator` (optional) - What separator to use to split the string. Default is " " (space).

#### Input example
```textwire
<div>{{ "one two".split(" ") }}</div>
```

#### Output
The output will be `one,two` because when you trying to print an array, it will be join values with comma. It only happens when you are trying to print the array. For example, `{{ [1, 2, 3] }}` will be printed as `1,2,3`.

```textwire
<div>one,two</div>
```

### `trim()`

#### Description
Trims a string from spaces and special characters like tabs, spaces and new lines by default. You can pass a argument to trim a specific set of characters from a string.

#### Arguments
1. `chars` (optional) - A string of characters to trim from a string. Default is `\t \n\r`.

#### Input example
```textwire
<span>{{ " Textwire ".trim() }}</span>
```

#### Output
```textwire
<span>Textwire</span>
```

### `len()`

#### Description
The `len` function returns the length of a string.

#### Arguments
None

#### Input example
```textwire
<b>{{ "Hello, World!".len() }}</b>
```

#### Output
```textwire
<b>13</b>
```

### `lower()`

#### Description
The `lower` function converts a string to lowercase.

#### Arguments
None

#### Input example
```textwire
<span>{{ "Hello, World!".lower() }}<span>
```

#### Output
```textwire
<span>hello, world!</span>
```

### `upper()`

#### Description
The `upper` function converts a string to uppercase.

#### Arguments
None

#### Input example
```textwire
<b>{{ "Hello, World!".upper() }}</b>
```

#### Output
```textwire
<b>HELLO, WORLD!</b>
```