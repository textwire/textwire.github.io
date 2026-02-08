---
title: Functions Guide - v3
sidebar_label: Functions Guide
sidebar_position: 1
description: Discover correct syntax for Textwire functions and learn about differences between built-in functions and global.
---

# Functions Guide
Each function is attached to a specific data type. For example, the `len` function is used to get the length of an array, and the `trim` function is used to remove characters from both sides of the string. You can call a function on a value by using the dot operator (`.`) followed by the function name.

```textwire
{{ "Textwire".len() }} <!-- output: 8 -->
```

You can also chain multiple functions together to perform complex operations.

```textwire
{{ "  Textwire  ".trim().len() }} <!-- output: 8 -->
```

:::tip Error handling
Learn about [error handling](/docs/v3/guides/error-handling) in Textwire when you call a function that doesn't exist, or when you pass incorrect arguments
:::

## Unicode friendly
Textwire is designed to be Unicode friendly to satisfy the needs of developers from different countries. All built-in functions handle Unicode characters and strings without any issues.

All the built-in functions in Textwire are Unicode friendly, which means they can handle Unicode characters and strings without any issues. You can use these functions to manipulate strings in any language. For example:

```textwire
{{ "我喜欢中国".len() }} <!-- output: 5 -->
```

Or:

```textwire
{{ "привет".at(2) }} <!-- output: и -->
```

## Suggest a new function
New functions are added in new version of Textwire when there is a need for them. You can follow the updates in our [Release Notes](https://github.com/textwire/textwire/blob/master/CHANGELOG.md) on GitHub.

If you have a suggestion for a new function that might benefit everybody using Textwire, please open [an issue](https://github.com/textwire/textwire/issues/new) on GitHub if it's an important function to add.
