---
sidebar_position: 2
description: Explore the various string functions available in Textwire
---

# String functions
## raw
```ts
raw(): str
```

Function `raw` is used to render a string as raw HTML. This is useful when you want to render HTML tags from a string. By default, HTML tags in a string are escaped to prevent XSS attacks

#### Input example
```html
{{ "<h1>Test</h1>".raw() }}
```

#### Output
```html
<h1>Test</h1>
```

## split
```ts
split(separator?: str = " "): arr
```

Function `split` is used to split a string into an array of substrings. It takes an optional argument `separator` which is used to split the string. If no separator is provided, it defaults to a space

#### Arguments
1. `separator` (str) (optional) - What separator to use to split the string. Default is " " (space)

#### Input example
```html
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

Trims a string from spaces and special characters like tabs, spaces and new lines by default. You can pass a argument to trim a specific set of characters from a string

#### Arguments
1. `chars` (str) (optional) - A string of characters to trim from a string. Default is `\t \n\r`

#### Input example
```html
<span>{{ " Anna ".trim() }}</span>
```

#### Output
```html
<span>Anna</span>
```

## len
```ts
len(): int
```

Returns the length of the string

#### Input example
```html
<b>{{ "Hello, World!".len() }}</b>
```

#### Output
```html
<b>13</b>
```

## lower
```ts
lower(): str
```

Converts a string to lowercase

#### Input example
```html
<span>{{ "Hello, World!".lower() }}<span>
```

#### Output
```html
<span>hello, world!</span>
```

## upper
```ts
upper(): str
```

Converts a string to uppercase

#### Input example
```html
<b>{{ "Hello, World!".upper() }}</b>
```

#### Output
```html
<b>HELLO, WORLD!</b>
```

## capitalize
```ts
capitalize(): str
```

Capitalizes the first letter of a string

#### Input example
```html
<b>{{ "hello, world!".capitalize() }}</b>
```

#### Output
```html
<b>Hello, world!</b>
```

## reverse
```ts
reverse(): str
```

Returns a string with the characters reversed

#### Input example
```html
<b>{{ "stressed".reverse() }}</b>
```

#### Output
```html
<b>desserts</b>
```

## contains
```ts
contains(substr: str): bool
```

Returns true if the string contains the given substring, otherwise false. The function is sase-sensitive, so the substring must match the case of the string

#### Arguments
1. `substr` (str) - The substring to search for

#### Input example
```html
<b>{{ "Hello, World!".contains("World") }}</b>
```

#### Output
```html
<b>true</b>
```

:::note
If the `substr` argument is an empty string, the function will always return `true`
:::