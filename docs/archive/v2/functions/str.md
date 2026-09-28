---
title: String Functions - v2
description: Explore the various string functions available in Textwire
---

# String Functions
## at
```ts
at(index?: int = 0): str
```

Returns the character at the given index.
- When the index is out of bounds, it will return `nil` type, which will be converted to an empty string when rendered in the template
- When the index is negative, it will count from the end of the string. For example, `-1` will return the last character of the string

#### Arguments
1. `index` (int) - The index of the character to return. Default is `0`, which returns the first character of the string

#### Input Example
```textwire
{{ "Textwire".at(1) }}
```

#### Output
```html
e
```

## capitalize
```ts
capitalize(): str
```

Capitalizes the first letter of a string

#### Input Example
```textwire
{{ "hello, world!".capitalize() }}
```

#### Output
```html
Hello, world!
```

## contains
```ts
contains(substr: str): bool
```

Returns true if the string contains the given substring, otherwise false. The function is case-sensitive, so the substring must match the case of the string

#### Arguments
1. `substr` (str) - The substring to search for

#### Input Example
```textwire
{{ "Hello, World!".contains("World") }}
```

#### Output
```html
true
```

:::tip Empty Substring
If the `substr` argument is an empty string, the function will always return `true`. It's done this way because an empty string is always a substring of any string
:::

:::tip Ignore Case
If you want to search for a substring without considering the case, you can use the `lower` function to convert both the string and the substring to lowercase:

```textwire
{{ "Hello, World!".lower().contains("world") }} <!-- true -->
```
:::

## decimal
```ts
decimal(separator?: str = ".", decimals?: int = 2): str
```

Converts to a string with a decimal part by appending a decimal separator and the number of decimal places. Here are some rules:
- When the string is not a number, it will return the string as is
- When the string is already a decimal number, it will return the string as is
- When you use it on a string, it will return the string as is if it's not a number

#### Arguments
1. `separator` (str) (optional) - The separator to use for the decimal. Default is `"."`
2. `decimals` (int) (optional) - The number of decimal places to add to the number. Default is `2`

#### Input Example
```textwire
{{ "123".decimal() }}
```

#### Output
```html
123.00
```

## first
```ts
first(): str
```

Returns the first character of a string. When the string is empty, it will return `nil` type, which will be converted to an empty string when rendered in the template

#### Input Example
```textwire
{{ "Textwire".first() }}
```

#### Output
```html
T
```

## last
```ts
last(): str
```

Returns the last character of a string. When the string is empty, it will return `nil` type, which will be converted to an empty string when rendered in the template

#### Input Example
```textwire
{{ "Textwire".last() }}
```

#### Output
```html
e
```

## len
```ts
len(): int
```

Returns the length of the string

#### Input Example
```textwire
{{ "Hello, World!".len() }}
```

#### Output
```html
13
```

## lower
```ts
lower(): str
```

Converts a string to lowercase

#### Input Example
```textwire
{{ "Hello, World!".lower() }}
```

#### Output
```html
hello, world!
```

## raw
```ts
raw(): str
```

Function `raw` is used to render a string as raw HTML. This is useful when you want to render HTML tags from a string. By default, HTML tags in a string are escaped to prevent XSS attacks

#### Input Example
```textwire
{{ "<h1>Test</h1>".raw() }}
```

#### Output
```html
<h1>Test</h1>
```

## repeat
```ts
repeat(times: int): str
```

Returns a new string consisting of count copies of the string on which it was called

#### Arguments
1. `times` (int) - The number of times to repeat the string

#### Input Example
```textwire
{{ "Hello".repeat(3) }}
```

#### Output
```html
HelloHelloHello
```

## reverse
```ts
reverse(): str
```

Returns a string with the characters reversed

#### Input Example
```textwire
{{ "stressed".reverse() }}
```

#### Output
```html
desserts
```

## split
```ts
split(separator?: str = " "): arr
```

Function `split` is used to split a string into an array of substrings. It takes an optional argument `separator` which is used to split the string. If no separator is provided, it defaults to a space

#### Arguments
1. `separator` (str) (optional) - What separator to use to split the string. Default is `" "` (space)

#### Input Example
```textwire
<div>{{ "one two".split(" ") }}</div>
```

#### Output
```html
<div>one, two</div>
```

## trim
```ts
trim(chars?: str = "\t \n\r"): str
```

Trims a string from spaces and special characters like tabs, spaces and new lines by default. You can pass an argument to trim a specific set of characters from a string

#### Arguments
1. `chars` (str) (optional) - A string of characters to trim from a string. Default is `"\t \n\r"`

#### Input Example
```textwire
<span>{{ " Textwire ".trim() }}</span>
```

#### Output
```html
<span>Textwire</span>
```

## trimLeft
```ts
trimLeft(chars?: str = "\t \n\r"): str
```

Trims left side of a string from spaces and special characters like tabs, spaces and new lines by default. You can pass an argument to trim a specific set of characters from a string

#### Arguments
1. `chars` (str) (optional) - A string of characters to trim from a string. Default is `"\t \n\r"`

#### Input Example
```textwire
<span>{{ " Textwire".trimLeft() }}</span>
```

#### Output
```html
<span>Textwire</span>
```

## trimRight
```ts
trimRight(chars?: str = "\t \n\r"): str
```

Trims right side of a string from spaces and special characters like tabs, spaces and new lines by default. You can pass an argument to trim a specific set of characters from a string

#### Arguments
1. `chars` (str) (optional) - A string of characters to trim from a string. Default is `"\t \n\r"`

#### Input Example
```textwire
<span>{{ "Textwire ".trimRight() }}</span>
```

#### Output
```html
<span>Textwire</span>
```

## truncate
```ts
truncate(length: int, ellipsis: str = "..."): str
```

Returns a string truncated to the given length with an optional ellipsis at the end

#### Arguments
1. `length` (int) - The length to truncate the string to
2. `ellipsis` (str) (optional) - The ellipsis to append to the truncated string. Default is `"..."`

#### Input Example
```textwire
{{ "Hello, World!".truncate(5) }}
```

#### Output
```html
Hello...
```

## upper
```ts
upper(): str
```

Converts a string to uppercase

#### Input Example
```textwire
{{ "Hello, World!".upper() }}
```

#### Output
```html
HELLO, WORLD!
```
