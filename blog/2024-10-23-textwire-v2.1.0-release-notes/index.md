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
Read more about them in the [integer functions](/docs/v2/functions/int) documentation.

- `abs(): int` - Returns the absolute value of an integer. If the integer is negative, it will return the positive value of it
- `str(): str` - Converts an integer to a string and returns it

### 5 New float functions
Read more about them in the [float functions](/docs/v2/functions/float) documentation.

- `abs(): float` - Returns the absolute value of a float. If the float is negative, it will return the positive value of it
- `ceil(): int` - Returns the rounded up value of a float to the nearest integer
- `floor(): int` - Returns the rounded down value of a float to the nearest integer
- `round(): int` - Rounds a float to the nearest integer. `1.5 -> 2`, `1.4 -> 1`, `1.6 -> 2`
- `str(): str` - Returns converted float to a string

### 3 New string functions
Read more about them in the [string functions](/docs/v2/functions/str) documentation.

- `capitalize(): bool` - Capitalizes the first letter of a string
- `reverse(): bool` - Reverses the characters of a string
- `contains(substr: str): bool` - Returns `true` if a string contains a substring, otherwise `false`

### 1 New boolean function
Read more about it in the [boolean functions](/docs/v2/functions/bool) documentation.

- `binary(): int` - Returns an integer `1` if the receiver is true, `0` otherwise


## Minor changes
Some very small changes were made to the Textwire that don't effect any functionality. Here are they:
- 📝 Remove `CONTRIBUTING.md` file that was added in `v2.0.0`. It doesn't have any important information, it's better to make a better one in the future

