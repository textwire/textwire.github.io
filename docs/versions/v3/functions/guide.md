---
title: Functions Guide - v3
description: Discover correct syntax for Textwire functions and learn about differences between built-in functions and global.
---

# Functions Guide

Each function is attached to a specific data type. For example, the `len` function is used to get the length of an array, and the `trim` function is used to remove characters from both sides of the string. You can call a function on a value by using the dot operator (`.`) followed by the function name.

```textwire
{{ "Textwire".len() }} {{-- output: 8 --}}
```

You can also chain multiple functions together to perform complex operations.

```textwire
{{ "  Textwire  ".trim().len() }} {{-- output: 8 --}}
```

Learn about [error handling](/v3/guides/error-handling) in Textwire when you call a function that doesn't exist, or when you pass incorrect arguments

## Unicode Support

Textwire's built-in functions fully support Unicode characters and strings. Whether you're working with emojis, accented characters, or non-Latin scripts, all functions work correctly. Learn more in the [Unicode](/v3/#unicode) section.

## Suggest a new function

New functions are added in new version of Textwire when there is a need for them. You can follow the updates in our [Release Notes](https://github.com/textwire/textwire/blob/master/CHANGELOG.md) on GitHub.

If you have a suggestion for a new function that might benefit everybody using Textwire, please open [an issue](https://github.com/textwire/textwire/issues/new) on GitHub if it's an important function to add.
