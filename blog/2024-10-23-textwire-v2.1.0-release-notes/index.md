---
title: "Textwire v2.1.0 Release Notes"
description: "Get to know details about the Textwire version 2.1.0 release by reading the complete release notes"
authors: [serhiicho]
# image: ./cover.png
tags: [release]
---

The Textwire version `v2.0.0` brought us an ability to define [custom functions](/docs/v2/guides/custom-functions) and had lots of code refactoring and improvements. I'm very happy to introduce Textwire version `v2.1.0` with new built-in functions and other improvements.

<!-- truncate -->

## New Features

### 4 New array functions
Textwire is very young but it's growing. I'm happy to introduce **3 new built-in functions** for array literals. You can read more about them in the [array functions](/docs/v2/functions/arr) documentation. Here is the short overview of them:

- `rand()` - Returns a random element from an array
- `reverse()` - Reverses the elements of an array and returns a new array
- `slice(start: int, end?: int)` - Returns a portion of an array
- `shuffle()` - Shuffles the elements of an array and returns a new array

### 2 New integer functions
Here are the new integer functions that I've added in this release. Read more about them in the [integer functions](/docs/v2/functions/int) documentation.

- `abs()` - Returns the absolute value of an integer. If the integer is negative, it will return the positive value of it
- `str()` - Converts an integer to a string and returns it


## Minor changes
Some very small changes were made to the Textwire that don't effect any functionality. Here are they:
- 📝 Remove `CONTRIBUTING.md` file that was added in `v2.0.0`. It doesn't have any important information, it's better to make a better one in the future

