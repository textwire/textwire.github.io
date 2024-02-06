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

### `trim(chars?: string)`

#### Arguments
- `chars` (optional) - A string of characters to trim from a string. Default is ` \t\n\r`.

Trims a string from spaces and special characters like `\t\n\r` by default. You can pass a argument to trim a specific set of characters from a string.

```html
{{ " Anna ".trim() }} <!-- "Anna" -->
```

### `len()`

Returns the length of a string.

```html
{{ "Hello, World!".len() }} <!-- 13 -->
```

### `lower()`

Converts a string to lowercase.

```html
{{ "Hello, World!".lower() }} <!-- "hello, world!" -->
```

### `upper()`

Converts a string to uppercase.

```html
{{ "Hello, World!".upper() }} <!-- "HELLO, WORLD!" -->
```

---

## Array functions

### `len`

#### Description
Returns the length of an array.

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

Returns the minimum value of an array.

```html
{{ [1, 2, 3].min() }} <!-- 1 -->
```

### `max()`

Returns the maximum value of an array.

```html
{{ [1, 2, 3].max() }} <!-- 3 -->
```

---

## Integer functions

### `float()`

Converts an integer to a float.

```html
{{ 5.float() }} <!-- 5.0 -->
```

---

## Float functions

### `int()`

Converts a float to an integer.

```html
{{ 5.5.int() }} <!-- 5 -->
```

::: tip NOTICE
Functions for other types like boolean, nil and so on are not available right now. They might be added in the future version if there is a need for them.
:::