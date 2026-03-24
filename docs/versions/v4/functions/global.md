---
title: Global Functions - v4
description: Explore global functions available in Textwire
outline: [2, 3]
---

# Global Functions

Global functions are not attached to any specific type like strings or integers, they are globally available everywhere. They are similar to Golang `len()`, `cap()` functions.

This global function should be used only with variables and object properties. It allows you to check if the variable or property is defined or not to prevent Textwire from creating an error.

## defined

```ts
defined(arg: any...): boolean
```

Function `defined` checks if variables and properties are defined. It doesn't care about `true`, `false`, `nil`, or any other literal type, it only tells you if the variable is defined and if the property on an object is defined or not.

#### Arguments:

1. `arg` (any) - Any amount of arguments

If you pass more than 1 variable, the function will return `true` if all variables or properties are defined.

#### Input Example:

```textwire
{{ defined(actors) ? 'Defined' : 'Missing' }}
```

#### Output:

```html
Missing
```

### When to Use It?

You can use it inside of your components when you need to check if variable was passed to the component or not. Here is the example when the `book` variable is required but `author` is optional.

```textwire
<div class="book">
    <h1>{{ book.title }}</h1>
    <p>{{ book.description }}</p>

    @if(defined(author))
        <small>The author is {{ author.first }} {{ author.last }}</small>
    @else
        <small>The author is unknown</small>
    @end
</div>
```

Another good usecase is for object properties, you can do something like this:

```textwire
@if(defined(user.address.street.number))
    {{ user.address.street.number }}
@end
```

It prevents you from getting an error when trying to get propery on `nil` type if your `address` or `street` is undefined.

### How it Works with Literal Types

The function `defined` is designed to work with variables and object properties, but if you try to call it on any literal type it will always return `true`. Here is the example:

```textwire
{{ defined("") ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined(0) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined(nil) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined(false) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined(true) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined({}) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined([]) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
```

### Limitations

The `defined` function only checks for **undefined variables** and **undefined properties on objects**. It does **not** check for:

- Method calls on objects
- Function calls
- Array index out of bounds
- Type errors

If you try to use `defined()` with a method call that doesn't exist, it will still produce an error:

```textwire
{{ name = "john"; defined(name.somemethod()) }}
{{-- Error: method 'somemethod' does not exist on type 'string' --}}
```

> [!TIP] Best Practice
> Use `defined()` when working with optional variables in components to avoid runtime errors when the variable is not passed to the template.

## formatDate

```ts
formatDate(date: string, layout: string): string
```

Function `formatDate` converts given string date to a formatted date string using Go's [format layout](https://pkg.go.dev/time#pkg-constants). It accepts two arguments, the first one is the date you want to format and the second one is the layout you want to use for formatting. The function returns a formatted date string.

#### Arguments:

1. `date` (string) - Date string. Can be one of 3 formats.
2. `layout` (string) - Layout from Go's `time.Time` package. Read [here](https://pkg.go.dev/time#pkg-constants).

#### Available Date Formats:

| Name     | Format                | Example               |
| -------- | --------------------- | --------------------- |
| Datetime | `YYYY-MM-DD HH:mm:ss` | `2026-03-24 13:03:25` |
| Date     | `YYYY-MM-DD`          | `2026-03-24`          |
| Time     | `HH:mm:ss`            | `13:03:25`            |

#### Input Example:

```textwire
{{ createdAt = "2026-03-24 13:03:25" }}
{{ formatDate(createdAt, "15:04:05") }}
```

#### Output:

```html
13:03:25
```

> [!NOTE] Go's Layout Format
> Go uses reference time `Mon Jan 2 15:04:05 MST 2006` for layouts instead of placeholders like `HH:mm:ss`. For example, `"January 2, 2006"` produces `March 24, 2026`.

```textwire
{{ createdAt = "2026-03-24 13:03:25" }}
{{ formatDate(createdAt, "January 2, 2006 at 3:04 PM") }}
{{-- Output: March 24, 2026 at 1:03 PM --}}
```

> [!WARNING] Error Handling
> If the date doesn't match one of the supported formats, you'll get an error: `global function formatDate() doesn't support date format '%s'`

## hasValue

```ts
hasValue(arg: any...): boolean
```

Function `hasValue` checks if variables and properties are defined and [non-nullable](/v4/language-elements/syntax#nullable-types). Unlike function [defined](/v4/functions/global#defined), `hasValue` checks if the variable is not only defined but also has a non-nullable value. For example, if you have a variable `x` that is defined but has a value of `0`, the function `hasValue(x)` will return `false`.

#### Arguments:

1. `arg` (any) - Any amount of arguments

If you pass more than 1 variable, the function will return `true` if all variables or properties have value.

#### Input Example:

```textwire
{{ actors = []; hasValue(actors) ? 'Has value' : 'No value' }}
```

#### Output:

```html
No value
```

> [!TIP] Best Practice
> Use `hasValue()` when you need to know for sure that the variable is defined and contains [non-zero value](/v4/language-elements/syntax#nullable-types).
