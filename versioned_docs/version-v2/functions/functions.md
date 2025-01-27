---
title: Built-in Functions - v2
sidebar_label: Built-in Functions
sidebar_position: 5
description: Discover the built-in functions in Textwire for manipulating different types of data, and learn how to use these functions
---

# Built-in Functions
Textwire has a set of built-in functions that can be used to manipulate data. These functions are used to perform operations on strings, arrays, integers, and floats. You can use these functions anywhere in your Textwire programs.

## Built-in functions usage
Each function is attached to a specific data type. For example, the `len` function is used to get the length of an array, and the `trim` function is used to remove characters from both sides of the string. You can call a function on a value by using the dot operator (`.`) followed by the function name.

```textwire
{{ "Textwire".len() }} <!-- output: 8 -->
```

You can also chain multiple functions together to perform complex operations.

```textwire
{{ "  Textwire  ".trim().len() }} <!-- output: 8 -->
```

:::tip Error handling
Learn about [error handling](/docs/v2/guides/error-handling) in Textwire when you call a function that doesn't exist, or when you pass incorrect arguments
:::

## Unicode friendly
Since I speak 4 languages, Russian, English, Chinese, and Ukrainian, I understand the importance of Unicode support. So, I'm trying to make Textwire as Unicode friendly as possible to setisfy the needs of people from different countries.

All the built-in functions in Textwire are Unicode friendly, which means they can handle Unicode characters and strings without any issues. You can use these functions to manipulate strings in any language. For example:

```textwire
{{ "我喜欢中国".len() }} <!-- output: 5 -->
```

Or:

```textwire
{{ "привет".at(2) }} <!-- output: и -->
```

## Suggest a new function
New functions are added in new version of Textwire when there is a need for them. You can follow the updates in our [Release Notes](https://github.com/textwire/textwire/blob/main/CHANGELOG.md) on GitHub.

If you have a suggestion for a new functions that might benefit everybody using Textwire, please open [an issue](https://github.com/textwire/textwire/issues/new) on GitHub or email me at <a mailto="serhiicho@protonmail.com">serhiicho@protonmail.com</a> and I will consider adding it in the next version. Just quick suggestion in a single paragraph is enough.