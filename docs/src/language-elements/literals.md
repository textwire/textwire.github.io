---
title: Literals - v5
description: Learn about Textwire literals like string, int, float, bool, nil, array, objects, etc.
---

# Literals

- [String](#string) <code v-pre>{{ "Hello, World!" }}</code> or <code v-pre>{{ 'Hello, World!' }}</code>
- [Integer](#integer) <code v-pre>{{ 123 }}</code> or <code v-pre>{{ -234 }}</code>
- [Float](#float) <code v-pre>{{ 123.456 }}</code>
- [Boolean](#boolean) <code v-pre>{{ true }}</code>
- [Nil](#nil) <code v-pre>{{ nil }}</code>
- [Array](#array) <code v-pre>{{ [1, 2, 3] }}</code>
- [Object](#object) <code v-pre>{{ { "name": "John", "age": 25 } }}</code>

## String

You can use string literals and concatenate them with other strings. You can use double or single quotes for strings. Example:

```textwire
{{ "Hello" + 'World!' }}
```

When you print a string, it will be automatically escaped. If you want to print a string without escaping it, you can use the raw embedding with `{!!` and `!!}`. Example:

```textwire
{!! "<h1>Test</h1>" !!}
```

### Important Notes

- **Auto-escaped on output.** All strings are automatically HTML-escaped when printed to prevent XSS attacks.
- **Use `{!! !!}` for unescaped output.** Use the `{!! myVar !!}` when you need to output HTML, XML, JSON without escaping.
- **Concatenation with `+`.** Use the `+` operator to join strings together.
- **Quote flexibility.** Single and double quotes are interchangeable for string literals.
- **Escaping.** Use a backslash to insert special characters inside strings. See [Escaping](/language-elements/syntax#escaping-in-strings).

## Integer

You can use integer literals and perform arithmetic operations with them. Example:

```textwire
<span>{{ 1 + 2 }}</span>
```

### Important Notes

- **Arithmetic operators.** Support `+`, `-`, `*`, `/`, `%` operations.
- **Division returns an integer.** Integer division like `4 / 2` returns `2` (integer). Use a float literal if you need a float result, for example `4.0 / 2.0`.
- **Negative numbers.** Prefix with `-` for negative integers (e.g., `-42`).
- **Overflow.** Integers are 64-bit. Adding to the maximum value `9223372036854775807` overflows and wraps around to `-9223372036854775808`. Example:
    ```textwire
    {{ 9223372036854775807 + 1 }} {{-- Output: -9223372036854775808 --}}
    ```

## Nil

`nil` represents the absence of a value. It is commonly used to indicate that a variable has no value assigned or that something doesn't exist.

In Textwire, `nil` is treated as `false` in boolean contexts, making it easy to check for missing values:

```textwire
{{ user = nil }}

@if(!user)
    <p>No user found</p>
@end
```

### Important Notes

- **Converts to `false` in conditions.** `nil` is falsy in boolean contexts.
- **Prints as empty string.** Outputting `nil` displays nothing.
- **Array out-of-bounds returns `nil`.** Accessing non-existent array indices returns `nil` instead of error.
- **Accessing object property `nil`.** Accessing a property that doesn't exist on object returns `nil` instead of error.

## Float

You can use float literals and perform arithmetic operations with them. Example:

```textwire
<span>{{ 1.534 + 2.5 }}</span>
```

### Important Notes

- **Precision limit (IEEE 754).** Floating-point numbers have ~15-17 digit precision. For example, `1234567890.1234567890` rounds to `1234567890.1234567`.
- **Large numbers as strings.** Keep large numbers as strings if you need exact precision.
- **Division follows the operand types.** Float division like `4.0 / 2.0` returns a float. Integer division like `4 / 2` returns an integer.
- **Follows IEEE 754 like Go.** Overflow produces `+Inf` or `-Inf`, values too small to represent underflow to `0.0`, and invalid operations like `+Inf - +Inf` produce `NaN`. These special values are printed as `+Inf`, `-Inf`, and `NaN`.
<!--@include: @/.vitepress/parts/funcs/non-finite-floats.md-->

## Boolean

Booleans represent truth values and can be either `true` or `false`. They are essential for controlling program flow with conditional statements.

```textwire
{{ isAdmin = true }}

@if(isAdmin)
    <button>Delete User</button>
@else
    <p>You don't have permission</p>
@end
```

### Important Notes

- **Truthy values.** Non-empty strings, non-zero numbers (including negatives), non-empty arrays, and objects with at least one key are truthy.
- **Falsy values.** `false`, `nil`, `0`, `0.0`, empty strings `""`, empty arrays `[]`, and empty objects `{}` are falsy.
- **Printed as `1` and `0`.** Outputting a boolean renders `1` for `true` and `0` for `false`. Use a ternary expression if you need `"true"` or `"false"` text.

## Array

Defining an array in Textwire is done in a similar way as in other languages. Example:

```textwire
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    @each(name in names)
        <li>{{ name }}</li>
    @end
</ul>
```

You can access values in an array by using an index. Example:

```textwire
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    <li>{{ names[0] }}</li> {{-- John --}}
    <li>{{ names[1] }}</li> {{-- Jane --}}
    <li>{{ names[2] }}</li> {{-- Jack --}}
    <li>{{ names[10] }}</li> {{-- nil --}}
</ul>
```

### Important Notes

- **Out of bounds returns nil.** Accessing an array at a non-existent index returns `nil` instead of resulting in an error.
- **Indexing strings.** You cannot use `[number]` to access a string character, instead, use [at()](/functions/str#at) function.
- **Prints as comma-separated.** Printing an array converts it to comma separated values. Example:
    ```textwire
    <span>{{ [1, 2, 3] }}</span>
    ```
    ```html
    <span>1, 2, 3</span>
    <!-- Output -->
    ```
- **Check for nil first.** Always check array access with index for `nil` before using it to prevent using functions on `nil` errors. Example:
    ```textwire
    {{ names = [] }}
    {{ names[0] ? names[0].upper() : '' }}
    ```

## Object

Objects in Textwire are very similar to JavaScript object with key-value pairs. Example:

```textwire
{{ person = {"name": "John", "age": 25} }}
```

You can also use key names without quotes if your keys are valid identifiers:

```textwire
{{ person = { name: "John", age: 25 } }}
```

You can access values in an object by using a key. Example:

```textwire
{{ user = {age: 25, name: {first: "Anna", last: "Cho"}} }}

<ul>
    <li>First name: {{ user.name.first }}</li> {{-- "Anna" --}}
    <li>Last name: {{ user.name.last }}</li> {{-- "Cho" --}}
    <li>Age: {{ user.age }}</li> {{-- 25 --}}
</ul>
```

You can also use an index expression with the key as a string:

```textwire
{{ hero = { name: 'Skirk', 'release-version': '5.7' } }}

{{ hero['name'] }}             {{-- Skirk --}}
{{ hero['release-version'] }}  {{-- 5.7 --}}
```

This is useful for keys that are not valid identifiers, such as `release-version`.

### Important Notes

- **First character case-insensitivity in field access.** Field name matching ignores case differences in the first character. This means <code v-pre>{{ user.name.first }}</code> and <code v-pre>{{ user.Name.First }}</code> resolve to the same result.
- **Keys must be identifiers or strings.** Unquoted keys have to be valid identifiers. If a key contains characters like `-` or starts with a number, wrap it in quotes. Example:
    ```textwire
    {{ user = { name: "John", "first-name": "Johnny", "1st": true } }}
    ```
- **Dot and bracket access.** Use `obj.key` or `obj['key']` to read a value. Bracket access takes a string key. Use dot notation to assign values, for example `user.name = "Anna"`.
- **Safe accessing.** You can use the [get()](/functions/obj#get) function to safely access object properties without worrying about errors. Example:
    ```textwire
    {{ user = {age: 25, name: {first: 'Anna', last: 'Cho'}} }}
    {{ user.get('name.first') }}
    ```
- **Only exported fields are converted.** Textwire automatically converts Go structs to objects, but **only exported fields** are converted. Since Go doesn't export fields that start with lowercase letters, Textwire cannot access them. Make sure to capitalize field names if you want them available in your templates.
- **Accessing missing object properties returns `nil`.** Similar to arrays, trying to access a property that doesn't exist on an object returns `nil` rather than throwing an error. However, this only applies to the first undefined property—attempting to access a property on `nil` itself will result in an error.
- **Sorted keys when printed.** Objects in Textwire maintain the order of keys in alphabetical order when printed or in JSON string if you do <code v-pre>{{ myObj.json() }}</code>.
- **Shorthand Property Notation.** Similar to objects in JavaScript, you can use shorthand property notation to define an object.
    ```textwire
    {{ name = "John"; age = 25 }}
    {{ person = { name, age } }}
    ```
