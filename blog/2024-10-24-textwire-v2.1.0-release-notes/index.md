---
title: "Textwire v2.1.0 Release Notes"
description: "Get to know details about the Textwire version 2.1.0 release by reading the complete release notes"
authors: [serhiicho]
tags: [release]
---

The Textwire version `v2.0.0` brought us an ability to define [custom functions](/docs/v2/guides/custom-functions) and had lots of code refactoring and improvements. I'm very happy to introduce Textwire version `v2.1.0` with new built-in functions, improved error handling, and other improvements.

<!-- truncate -->

## 15 New Built-in Functions
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

## Improvements
Regarding improvements, I placed a strong emphasis on proper error handling. I cannot overstate the importance of having effective error handling in place when things go wrong. Receiving clear and detailed error messages is crucial for success. Here are the enhancements introduced in version `v2.1.0`:

- 🐛 **Fixed Bug with Prefix Expression Precedence**: Resolved an issue where prefix expressions like `{{ -1.abs() }}` were not being processed correctly. Previously, the parser evaluated the expression as `{{ (-(1.abs())) }}`, resulting in an incorrect output of `-1`. Now, the parser correctly handles the precedence, evaluating it as `{{ ((-1).abs()) }}`.
- 🧑‍💻 **Enhanced Error Handling for Built-in Functions:** Improved error messages when an incorrect argument type is passed to a built-in function. Users will now receive clear error messages indicating the type mismatch.
- 🧑‍💻 **Enhanced Error Handling for Custom Functions:** If a function is called on a type where it doesn’t exist, Textwire now provides a detailed error message specifying that the function is undefined for that type. For example, an error message might read: `[Textwire ERROR in /var/www/html/templates/home.tw.html:3]: function 'some' doesn't exist for type 'STRING'`.
- 🧑‍💻 **Enhanced Error Handling for Division by Zero:** Improved error messages for division-by-zero cases, replacing previous vague messages with more meaningful ones.
- 🧑‍💻 New error page while rendering a template. Instead of black screen we now get a simple error page with `Sorry! We’re having some trouble right now. Please check back shortly`. You can find more information [here](/docs/v2/guides/error-handling)

#### New error page:
![Error output in Textwire](/img/oops.png)

## Other changes
Some very small changes were made to the Textwire that don't effect any functionality. Here are they:
- 📝 Remove `CONTRIBUTING.md` file that was added in `v2.0.0`. It doesn't have any important information, it's better to make a better one in the future

## Conclusion
Version `v2.1.0` of Textwire brings a host of new built-in functions, improved error handling, and other enhancements. I hope you enjoy using Textwire as much as I enjoy developing it. If you have any questions or feedback, please don't hesitate to reach out to me. I'm always happy to help. Thank you for your continued support and feedback. Stay tuned for more updates and improvements in the future. Happy coding! 🚀

## What's next?
In the next version, I'll focus on further improvements to the language, including new built-in functions, better error handling, more tests, and the ability to define a custom error page for templates. Stay tuned for more updates and improvements in the future. Happy coding! 🚀