---
title: Array Literals - v5
description: Learn about array literals in Textwire
---

# Array Literals

Defining an array in Textwire is done in a similar way as in other languages. Example:

```textwire
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    @each(name in names)
        <li>{{ name }}</li>
    @end
</ul>
```

You can access values in an array by using an index. Example:

```textwire
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    <li>{{ names[0] }}</li> {{-- John --}}
    <li>{{ names[1] }}</li> {{-- Jane --}}
    <li>{{ names[2] }}</li> {{-- Jack --}}
    <li>{{ names[10] }}</li> {{-- nil --}}
</ul>
```

## Out of bounds returns nil

Accessing an array at a non-existent index returns `nil` instead of resulting in an error.

## Indexing strings

You cannot use `[number]` to access a string character, instead, use [at()](/functions/str#at) function.

## Prints as comma-separated

Printing an array converts it to comma separated values. Example:

```textwire
<span>{{ [1, 2, 3] }}</span>
```

```html
<span>1, 2, 3</span>
<!-- Output -->
```

## Check for nil first

Always check array access with index for `nil` before using it to prevent using functions on `nil` errors. Example:

```textwire
{{ names = [] }}
{{ names[0] ? names[0].upper() : '' }}
```

<!--@include: @/.vitepress/parts/language-elements/circular-reference.md-->
