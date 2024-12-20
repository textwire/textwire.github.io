---
title: Built-in Functions - v2
sidebar_label: Built-in Functions
sidebar_position: 4
description: Discover the built-in functions in Textwire for manipulating different types of data, and learn how to use these functions
---

# Built-in Functions
Textwire has a set of built-in functions that can be used to manipulate data. These functions are used to perform operations on strings, arrays, integers, and floats. You can use these functions anywhere in your Textwire programs.

## Built-in functions usage
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

:::tip Error handling
Learn about [error handling](/docs/v2/guides/error-handling) in Textwire when you call a function that doesn't exist, or when you pass incorrect arguments
:::

:::info Suggest a new function
New functions are added in new version of Textwire when there is a need for them. If you have a suggestion for a new function, please open [an issue](https://github.com/textwire/textwire/issues/new) on GitHub and we will consider adding it in the next version.
:::