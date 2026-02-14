---
title: Literals - v3
description: Learn about Textwire literals like string, int, float, bool, nil, array, objects, etc.
---

# Literals

- [String](#string) <code v-pre>{{ "Hello, World!" }}</code> or <code v-pre>{{ `Hello, World!` }}</code>
- [Integer](#integer) <code v-pre>{{ 123 }}</code> or <code v-pre>{{ -234 }}</code>
- [Float](#float) <code v-pre>{{ 123.456 }}</code>
- [Boolean](#boolean) <code v-pre>{{ true }}</code>
- [Nil Literal](#nil) <code v-pre>{{ nil }}</code>
- [Array](#array) <code v-pre>{{ [1, 2, 3] }}</code>
- [Object](#object) <code v-pre>{{ { "name": "John", "age": 25 } }}</code>

## String

You can use string literals and concatenate them with other strings. You can use double or single quotes for strings. Example:

```textwire :no-line-numbers
{{ "Hello" + 'World!' }}
```

When you print a string, it will be automatically escaped. If you want to print a string without escaping it, you can use the [raw()](/v3/functions/str#raw) function on strings. Example:

```textwire :no-line-numbers
{{ "<h1>Test</h1>".raw() }}
```

## Integer

You can use integer literals and perform arithmetic operations with them. Example:

```textwire :no-line-numbers
<span>{{ 1 + 2 }}</span>
```

## Nil

Unlike Go, Textwire converts `nil` to `false` in boolean context. This means that `nil` is considered falsy in Textwire. Example:

```textwire :no-line-numbers
{{ authUser = nil }}

@if(!authUser)
    <p>You are not logged in!</p>
@end
```

Printing `nil` results in an empty string.

## Float

You can use float literals and perform arithmetic operations with them. Example:

```textwire :no-line-numbers
<span>{{ 1.534 + 2.5 }}</span>
```

:::warning Precision Limit
Most languages (including Textwire) use **IEEE 754 standard** for floating-point numbers. These floating-point types have a finite precision and are unable to accurately represent more than approximately 15-17 digits. For example `1234567890.1234567890` will be rounded to `1234567890.1234567` in Textwire because of the precision limit of floating-point numbers. If you need to work with large numbers, you can keep them as strings.
:::

## Boolean

You can use boolean literals to check if a variable is true or false. Example:

```textwire :no-line-numbers
@if(true)
    <p>Is tall</p>
@end
```

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
    ```textwire :no-line-numbers
    <span>{{ [1, 2, 3] }}</span>
    ```
    ```html :no-line-numbers
    <span>1, 2, 3</span>
    <!-- Output -->
    ```
- **Check for nil first.** Always check array access with index for `nil` before using it to prevent using functions on `nil` errors. Example:
    ```textwire :no-line-numbers
    {{ names = [] }}
    {{ names[0] ? names[0].upper() : '' }}
    ```

## Object

Objects in Textwire are very similar to JavaScript object with key-value pairs. Example:

```textwire :no-line-numbers
{{ person = {"name": "John", "age": 25} }}
```

You can also use key names without quotes if your keys are valid identifiers:

```textwire :no-line-numbers
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
- **Shorthand Property Notation.** Similar to objects in JavaScript, you can use shorthand property notation to define an object.
    ```textwire :no-line-numbers
    {{ name = "John"; age = 25 }}
    {{ person = { name, age } }}
    ```
