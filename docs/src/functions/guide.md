---
title: Functions Guide - v5
description: Discover correct syntax for Textwire functions and learn about built-in and global functions.
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

Learn about [error handling](/api/error-handling) in Textwire when you call a function that doesn't exist, or when you pass incorrect arguments.

## Global Functions

Functions like `defined()`, `hasValue()`, and `formatDate()` are not attached to a specific type. They are available everywhere and are documented on the [Global Functions](/functions/global) page.

## Unicode Support

Most built-in string functions handle Unicode characters and strings. Whether you're working with emojis, accented characters, or non-Latin scripts, functions such as `len()`, `at()`, `truncate()`, and `reverse()` work on characters instead of bytes. Learn more in the [Unicode](/language-elements/unicode) section.

## Suggest a new function

New functions are added in a new version of Textwire when there is a need for them. You can follow the updates in our [Release Notes](https://codeberg.org/textwire/textwire/src/branch/master/CHANGELOG.md) on Codeberg.

If you have a suggestion for a new function that might benefit everybody using Textwire, please open [an issue](https://codeberg.org/textwire/textwire/issues/new) on Codeberg if it's an important function to add.
