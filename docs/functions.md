---
sidebar_position: 2
---

# Built-in functions

Textwire has a set of built-in functions that can be used to manipulate data. These functions are used to perform operations on strings, arrays, integers, and floats. You can use these functions anywhere in your Textwire programs.

Each function is attached to a specific data type. For example, the `len` function is used to get the length of an array, and the `trim` function is used to remove characters from both sides of the string. You can call a function on a value by using the dot operator (`.`) followed by the function name.

```html
<div>
    {{ "Textwire".len() }} <!-- output: 8 -->
</div>
```

You can also chain multiple functions together to perform complex operations.

```html
<span>
    {{ "  Textwire  ".trim().len() }} <!-- output: 8 -->
</span>
```

:::info NOTE
New functions are added in new version of Textwire when there is a need for them. If you have a suggestion for a new function, please open [an issue](https://github.com/textwire/textwire/issues/new) on GitHub and we will consider adding it in the next version.
:::

## String functions

### `raw()`

#### Description
Function `raw` is used to render a string as raw HTML. This is useful when you want to render HTML tags from a string. By default, HTML tags in a string are escaped to prevent XSS attacks.

#### Arguments
None

#### Input example
```html
{{ "<h1>Test</h1>".raw() }}
```

#### Output
```html
<h1>Test</h1>
```

### `split()`

#### Description
Function `split` is used to split a string into an array of substrings. It takes an optional argument `separator` which is used to split the string. If no separator is provided, it defaults to a space.

#### Arguments
1. `separator` (optional) - What separator to use to split the string. Default is " " (space).

#### Input example
```html
<div>{{ "one two".split(" ") }}</div>
```

#### Output
The output will be `one,two` because when you trying to print an array, it will be join values with comma. It only happens when you are trying to print the array. For example, `{{ [1, 2, 3] }}` will be printed as `1,2,3`.

```html
<div>one,two</div>
```

### `trim()`

#### Description
Trims a string from spaces and special characters like tabs, spaces and new lines by default. You can pass a argument to trim a specific set of characters from a string.

#### Arguments
1. `chars` (optional) - A string of characters to trim from a string. Default is `\t \n\r`.

#### Input example
```html
<span>{{ " Anna ".trim() }}</span>
```

#### Output
```html
<span>Anna</span>
```

### `len()`

#### Description
The `len` function returns the length of a string.

##### Arguments
None

#### Input example
```html
<b>{{ "Hello, World!".len() }}</b>
```

#### Output
```html
<b>13</b>
```

## Array functions

### `len`

#### Description
Function `len` returns the length of an array.

##### Arguments
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

##### Arguments
1. `separator` (optional) - What separator to use to join the elements. Default is comma `,`.

#### Input example:
```html
<span>{{ ["one", "two"].join(" ") }}</span>
```

#### Output:
```html
<span>one two</span>
```

## Integer functions

### `float()`

#### Description
The `float` function is used to convert an integer to a float.

##### Arguments
None

#### Input example
```html
<b>{{ 5.float() }}</b>
```

#### Output
```html
<b>5.0</b>
```

## Float functions

### `int()`

#### Description
Function `int` is used to convert a float to an integer by removing the decimal part of the number. It doesn't round the number, it just removes the decimal part.

##### Arguments
None

#### Input example
```html
<input value="{{ 5.5.int() }}" type="number">
```

#### Output
```html
<input value="5" type="number">
```