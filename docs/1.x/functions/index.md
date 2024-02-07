# Built-in functions

## String functions

### `raw()`

#### Description
Function `raw` is used to render a string as raw HTML. This is useful when you want to render HTML tags from a string. By default, HTML tags in a string are escaped to prevent XSS attacks.

#### Arguments
None

#### Input
```html
{{ "<h1>Test</h1>".raw() }}
```

#### Output
```html
<h1>Test</h1>
```

### `split()`

#### Description
Function `split` is used to split a string into an array of substrings. It takes an optional argument `delimiter` which is used to split the string. If no delimiter is provided, it defaults to a space.

#### Arguments
1. `delimiter` (optional) - What delimiter to use to split the string. Default is " " (space).

#### Input
```html
<div>{{ "one two".split(" ") }}</div>
```

#### Output
The output will be `one,two` because arrays are automatically converted to array items separated by a comma. But, the result of the split function is an array.

```html
<div>one,two</div>
```

### `trim()`

#### Description
Trims a string from spaces and special characters like `\t\n\r` by default. You can pass a argument to trim a specific set of characters from a string.

#### Arguments
1. `chars` (optional) - A string of characters to trim from a string. Default is ` \t\n\r`.

#### Input
```html
<span>{{ " Anna ".trim() }}</span>
```

#### Output
```html
<span>Anna</span>
```

### `len()`

#### Description
Returns the length of a string.

##### Arguments
None

#### Input
```html
<b>{{ "Hello, World!".len() }}</b>
```

#### Output
```html
<b>13</b>
```

### `lower()`

#### Description
The `lower` function converts a string to lowercase.

##### Arguments
None

#### Input
```html
<span>{{ "Hello, World!".lower() }}<span>
```

#### Output
```html
<span>hello, world!</span>
```

### `upper()`

#### Description
The `upper` function converts a string to uppercase.

##### Arguments
None

#### Input
```html
<b>{{ "Hello, World!".upper() }}</b>
```

#### Output
```html
<b>HELLO, WORLD!</b>
```

---

## Array functions

### `len`

#### Description
Function `len` returns the length of an array.

##### Arguments
None

#### Input:
```html
<span>{{ [1, 2, 3].len() }}</span>
```

#### Output:
```html
<span>3</span>
```

### `min()`

#### Description
Returns the minimum value of an array.

##### Arguments
None

#### Input
```html
<span>{{ [1, 2, 3].min() }}</span>
```

#### Output
```html
<span>1</span>
```

### `max()`

#### Description
Returns the maximum value of an array.

##### Arguments
None

#### Input
```html
<span>{{ [1, 2, 3].max() }}</span>
```

#### Output
```html
<span>3</span>
```

---

## Integer functions

### `float()`

#### Description
The `float` function is used to convert an integer to a float.

##### Arguments
1. `precision` (optional) - The number of decimal places to round the float to. Default is 2.

#### Input
```html
<b>Sum: {{ 5.float() }} USD</b>
```

#### Output
```html
<b>Sum: 5.00 USD</b>
```

---

## Float functions

### `int()`

#### Description
Converts a float to an integer.

##### Arguments
None

#### Input
```html
<input value="{{ 5.5.int() }}" type="number">
```

#### Output
```html
<input value="5" type="number">
```

::: tip NOTICE
Functions for other types like boolean, nil and so on are not available right now. They might be added in the future version if there is a need for them.
:::