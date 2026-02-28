---
title: Literals - v3
description: Learn about Textwire literals like string, int, float, bool, nil, array, objects, etc.
---

# Literals

- [String](#string) <code v-pre>{{ "Hello, World!" }}</code> or <code v-pre>{{ `Hello, World!` }}</code>
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

When you print a string, it will be automatically escaped. If you want to print a string without escaping it, you can use the [raw()](/v3/functions/str#raw) function on strings. Example:

```textwire
{{ "<h1>Test</h1>".raw() }}
```

### Important Notes

- **Auto-escaped on output.** All strings are automatically HTML-escaped when printed to prevent XSS attacks.
- **Use `.raw()` for unescaped output.** Call the `raw()` method when you need to output HTML without escaping.
- **Concatenation with `+`.** Use the `+` operator to join strings together.
- **Quote flexibility.** Single and double quotes are interchangeable for string literals.

## Integer

You can use integer literals and perform arithmetic operations with them. Example:

```textwire
<span>{{ 1 + 2 }}</span>
```

### Important Notes

- **Arithmetic operators.** Support `+`, `-`, `*`, `/`, `%` operations.
- **Division returns float.** Even integer division like `4 / 2` returns `2.0` (float).
- **Negative numbers.** Prefix with `-` for negative integers (e.g., `-42`).

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
- **Division always returns float.** Integer division like `4 / 2` returns `2.0`.

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

- **Truthy values.** Non-empty strings, non-zero numbers (including negatives), arrays, and objects are truthy. Arrays and objects are always truthy regardless of being empty.
- **Falsy values.** Only `false`, `nil`, `0`, and empty strings `""` are falsy.

## Array

Defining an array in Textwire is done is a similar way as in other languages. Example:

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

- **Out of bounds returns nil.** Accessing array on non-existant index returns `nil` instead of resulting in error.
- **Prints as comma-separated.** Printing array will convert it to comma seperated values. Example:
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

### Important Notes

- **First character case-insensitivity in field access.** Field name matching ignores case differences in the first character. This means <code v-pre>{{ user.name.first }}</code> and <code v-pre>{{ user.Name.First }}</code> resolve to the same result.
- **Only exported fields are converted.** Textwire automatically converts Go structs to objects, but **only exported fields** are converted. Since Go doesn't export fields that start with lowercase letters, Textwire cannot access them. Make sure to capitalize field names if you want them available in your templates.
- **Accessing missing object properties returns `nil`.** Similar to arrays, trying to access a property that doesn't exist on an object returns `nil` rather than throwing an error. However, this only applies to the first undefined property—attempting to access a property on `nil` itself will result in an error.
- **Sorted keys when printed.** Objects in Textwire maintain the order of keys in alphabetical order when printed or in JSON string if you do <code v-pre>{{ myObj.json() }}</code>.
- **Shorthand Property Notation.** Similar to objects in JavaScript, you can use shorthand property notation to define an object.
    ```textwire
    {{ name = "John"; age = 25 }}
    {{ person = { name, age } }}
    ```
