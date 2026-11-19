---
title: Global Functions - v6
description: Explore global functions available in Textwire
outline: [2, 3]
---

# Global Functions

Global functions are not attached to any specific type like strings or integers, they are globally available everywhere. They are similar to Golang `len()`, `cap()` functions.

## defined

```ts
defined(arg: any...): boolean
```

Function `defined` checks if variables, object properties, and array indices are defined. It doesn't care about `true`, `false`, `nil`, or any other literal type, it only tells you if the variable is defined, if the property exists on an object, or if the index is inside the array bounds.

A property or index that exists but holds `nil` counts as defined. A missing property, a key that isn't in the object, or an index outside the array bounds returns `false`.

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

### Missing Properties and Indices

A property or index that is missing from the object or array is not defined, even though reading it produces `nil`:

```textwire
{{ empty = {} }}
{{ defined(empty.name) }} {{-- Output: false --}}

{{ withNil = { name: nil } }}
{{ defined(withNil.name) }} {{-- Output: true --}}

{{ arr = [1, 2] }}
{{ defined(arr[1]) }} {{-- Output: true --}}
{{ defined(arr[5]) }} {{-- Output: false --}}
{{ defined(arr[-1]) }} {{-- Output: false --}}
```

This also applies to chained access. In the example below, `defined()` returns `false` if any part of the chain is missing:

```textwire
{{ user = { address: {} } }}
{{ defined(user.address.street.number) }} {{-- Output: false --}}
```

> [!NOTE] Changed in v6
> Before v6, missing properties and out-of-range indices returned `true` because they evaluated to `nil`. See the [Upgrade Guide](/upgrade#define-returns-false-for-missing-properties-and-indices) for migration details.

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

The `defined` function only checks for **undefined variables**, **missing properties on objects**, and **out-of-range array indices**. It does **not** check for:

- Method calls on objects
- Function calls
- Type errors

If you try to use `defined()` with a method call that doesn't exist, it will still produce an error:

```textwire
{{ name = "john"; defined(name.somemethod()) }}
{{-- [Textwire ERROR:1]: string.somemethod() is not defined --}}
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
> If the date doesn't match one of the supported formats, you'll get an error with the actual value, for example: `global function formatDate() doesn't support date format '2026-13-01'`

## hasValue

```ts
hasValue(arg: any...): boolean
```

Function `hasValue` checks if variables and properties are defined and [non-empty](/language-elements/syntax#empty-values). Unlike function [defined](/functions/global#defined), `hasValue` checks if the variable is not only defined but also has a truthy value. For example, if you have a variable `x` that is defined but has a value of `0`, the function `hasValue(x)` will return `false`.

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
> Use `hasValue()` when you need to know for sure that the variable is defined and contains a [non-empty value](/language-elements/syntax#empty-values).

## raw

```ts
raw(value: any): any
```

Function `raw` marks the strings in `value` as raw, so they are printed without HTML escaping. It only changes output escaping: wherever Textwire would normally HTML-escape the value, such as <code v-pre>{{ }}</code>, the short form of `@insert`, or a `@reserve` fallback, the marked strings are printed as is. The value itself stays the same, so comparisons are not affected.

#### Arguments:

1. `value` (any) - A value with strings to print without HTML escaping

#### Input Example:

```textwire
{{ html = "<strong>Hello</strong>" }}
{{ html }}
{{ raw(html) }}
```

#### Output:

```html
&lt;strong&gt;Hello&lt;/strong&gt;
<strong>Hello</strong>
```

This is the same as using the <code v-pre>{!! !!}</code> braces:

```textwire
{{ raw(html) }}
{!! html !!}
```

Both lines print `<strong>Hello</strong>`. The difference is that `raw()` lets you decide about escaping per value, while <code v-pre>{!! !!}</code> decides it for the whole output. Calling `raw()` inside <code v-pre>{!! !!}</code> is allowed but does nothing, because that output is already raw.

> [!WARNING] Security
> `raw()` disables HTML escaping. Only use it with trusted content or content that was already sanitized. Passing user-provided data to `raw()` can introduce XSS vulnerabilities.

### Arrays and Objects

When you pass an array or an object to `raw()`, every string inside it is marked as raw, including strings in nested arrays and objects. Non-string literals like integers, floats, booleans, and `nil` are returned unchanged.

```textwire
{{ raw(["<a>", "<b>"]) }} {{-- Output: <a>, <b> --}}
{{ raw({ name: "<b>", count: 1 }) }} {{-- Output: {name: "<b>", count: 1} --}}
```

Arrays and objects are copied, so the original value is never changed. You can safely keep using the original value with escaping:

```textwire
{{ safe = ["<b>"] }}
{{ unsafe = raw(safe) }}

{{ safe }} {{-- Output: &lt;b&gt; --}}
{{ unsafe }} {{-- Output: <b> --}}
```

Raw and plain strings can be mixed in the same array or object. Only the strings marked with `raw()` are printed without escaping:

```textwire
{{ [raw("<b>"), "<b>"] }}
{{-- Output: <b>, &lt;b&gt; --}}

{{ { a: raw("<b>"), b: "<b>" } }}
{{-- Output: {a: "<b>", b: &#34;&lt;b&gt;&#34;} --}}
```

The raw mark is kept when you access nested values, assign a raw value to a variable, or store it in an array or object:

```textwire
{{ user = { name: "<b>" } }}
{{ raw(user).name }} {{-- Output: <b> --}}

{{ html = raw("<i>") }}
{{ obj = { content: html } }}
{{ obj.content }} {{-- Output: <i> --}}
```

### Functions

Functions that keep the elements of a collection keep the raw mark. For example, `reverse()`, `slice()`, `rand()`, and `append()` with a raw value:

```textwire
{{ raw(["<a>", "<b>"]).reverse() }} {{-- Output: <b>, <a> --}}
```

Functions that create a new string return a plain, unmarked string, so the result is escaped again. Wrap the result in `raw()` when you need raw output:

```textwire
{{ raw("<b>").upper() }} {{-- Output: &lt;B&gt; --}}
{{ raw("<b>".upper()) }} {{-- Output: <B> --}}

{{ raw("<b>") + "<b>" }} {{-- Output: &lt;b&gt;&lt;b&gt; --}}
{{ raw("<b>" + "<b>") }} {{-- Output: <b><b> --}}
```

### Comparisons and Other Functions

The raw mark only affects output. Two strings with the same text are equal even if only one of them is raw:

```textwire
{{ raw("<b>") == "<b>" }} {{-- Output: 1 --}}
{{ raw("<b>").len() }} {{-- Output: 3 --}}
```

Functions like `defined()` and `hasValue()` treat raw values the same way as plain values.

### JSON

`json()` ignores the raw mark, because it always returns a new string. The result is escaped when printed with <code v-pre>{{ }}</code>. Wrap the `json()` result itself in `raw()` when you need unescaped JSON:

```textwire
{{ data = { name: "<b>" } }}
{{ raw(data).json() }} {{-- Output: {&#34;name&#34;:&#34;&lt;b&gt;&#34;} --}}
{{ raw(data.json()) }} {{-- Output: {"name":"<b>"} --}}
```

### `@insert`, `@reserve`, and Components

The short form of `@insert` and the fallback of `@reserve` are escaped the same way as <code v-pre>{{ }}</code>. Use `raw()` for trusted HTML:

```textwire
@use("layout")
@insert("title", raw("<span>Title</span>"))
```

```textwire
<title>@reserve("title", raw("<i>Fallback</i>"))</title>
```

For `@insert`, the block form is usually a better choice for markup, because the content is a normal template body. Use `{!! !!}` inside the block only for dynamic strings that should not be escaped:

```textwire
@insert("content")
    <p>{!! post.html !!}</p>
@end
```

Components behave the same way. Raw values passed as props, slots, or default values keep their raw mark:

```textwire
@component("~header", { title: raw("<span>Title</span>") })@end
```
