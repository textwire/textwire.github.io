---
sidebar_position: 4
description: Learn about Textwire literals like string, int, float, bool, nil, array, objects, etc.
---

# Literals

- Literals
    - [String literals](#string-literals) `{{ "Hello, World!" }}` or ``{{ `Hello, World!` }}``
    - [Integer literals](#integer-literals) `{{ 123 }}` or `{{ -234 }}`
    - [Float literals](#float-literals) `{{ 123.456 }}`
    - [Boolean literals](#boolean-literals) `{{ true }}`
    - [Nil literal](#nil-literal) `{{ nil }}`
    - [Array literals](#array-literals) `{{ [1, 2, 3] }}`
    - [Object literals](#object-literals) `{{ { "name": "John", "age": 25 } }}`

## String literals

You can use string literals and concatenate them with other strings. You can use double or single quotes for strings. Here is an example of using string literals:

```html
{{ "Hello" + 'World!' }}
```

> When you print a string, it will be automatically escaped. If you want to print a string without escaping it, you can use the a [raw()](/docs/v2/functions/str#raw) function on strings. Example: `{{ "<h1>Test</h1>".raw() }}`

## Integer literals

You can use integer literals and perform arithmetic operations with them. Here is an example of using integer literals:

```html
<span>{{ 1 + 2 }}</span>
```

## Nil literal

You can use nil literal to check if a variable is nil. Here is an example of using nil literal:

```html
@if(nil)
    <p>It will not be displayed</p>
@end
```

## Float literals

You can use float literals and perform arithmetic operations with them. Here is an example of using float literals:

```html
<span>{{ 1.534 + 2.5 }}</span>
```

:::warning Precision limit
Most languages (including Textwire) use **IEEE 754 standard** for floating-point numbers. These floating-point types have a finite precision and are unable to accurately represent more than approximately 15-17 digits. For example `1234567890.1234567890` will be rounded to `1234567890.1234567` in Textwire because of the precision limit of floating-point numbers. If you need to work with large numbers, you can keep them as strings.
:::

## Boolean literals

You can use boolean literals to check if a variable is true or false. Here is an example of using boolean literals:

```html
@if(true)
    <p>Is tall</p>
@end
```

## Array literals

Defining an array in Textwire is done is a similar way as in other languages. Here is an example of defining an array:

```html
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    @each(name in names)
        <li>{{ name }}</li>
        <li>{{ loop.index }}</li> <!-- Index of the current item -->
    @end
</ul>
```

You can access values in an array by using an index. Here is an example of accessing values in an array:

```html
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    <li>{{ names[0] }}</li> <!-- "John" -->
    <li>{{ names[1] }}</li> <!-- "Jane" -->
    <li>{{ names[2] }}</li> <!-- "Jack" -->
</ul>
```

## Object literals

Objects in Textwire are very similar to JavaScript object with key-value pairs. Here is an example of defining an object:

```html
{{ person = {"name": "John", "age": 25} }}
```

You can also use key names without quotes if your keys are valid identifiers:

```html
{{ person = { name: "John", age: 25 } }}
```

You can access values in an object by using a key. Here is an example of accessing values in an object:

```html
{{ user = {age: 25, name: {first: "Anna", last: "Cho"}} }}

<ul>
    <li>First name: {{ user.name.first }}</li> <!-- "Anna" -->
    <li>Last name: {{ user.name.last }}</li> <!-- "Cho" -->
    <li>Age: {{ user.age }}</li> <!-- 25 -->
</ul>
```

:::tip Case insensitive fields
**Object fields are case insensitive**. It means that you can access fields in an object by using any case. For example, `{{ user.name.first }}` and `{{ user.Name.First }}` will return the same value. It's done this way for convenience.
:::

### Shorthand property notation

Similar to objects in JavaScript, you can use shorthand property notation to define an object. Here is an example of using shorthand property notation:

```html
{{ name = "John"; age = 25; person = { name, age } }}
```