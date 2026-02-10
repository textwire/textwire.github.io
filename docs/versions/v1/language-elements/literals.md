---
title: Literals - v1
---

# Literals

- Literals
    - [String literals](#string-literals) <code v-pre>{{ "Hello, World!" }}</code> or <code v-pre>{{ 'Hello, World!' }}</code>
    - [Integer literals](#integer-literals) <code v-pre>{{ 123 }}</code> or <code v-pre>{{ -234 }}</code>
    - [Float literals](#float-literals) <code v-pre>{{ 123.456 }}</code>
    - [Boolean literals](#boolean-literals) <code v-pre>{{ true }}</code>
    - [Nil literal](#nil-literal) <code v-pre>{{ nil }}</code>
    - [Array literals](#array-literals) <code v-pre>{{ [1, 2, 3] }}</code>
    - [Object literals](#object-literals) <code v-pre>{{ { "name": "John", "age": 25 } }}</code>

## String literals
You can use string literals and concatenate them with other strings. You can use double or single quotes for strings. Here is an example of using string literals:

```textwire
{{ "Hello" + 'World!' }}
```

When you print a string, it will be automatically escaped. If you want to print a string without escaping it, you can use the a [raw()](/v1/functions/str#raw) function on strings. Example: <code v-pre>{{ "Test".raw() }}</code>

## Integer literals
You can use integer literals and perform arithmetic operations with them. Here is an example of using integer literals:

```textwire
<span>{{ 1 + 2 }}</span>
```

## Nil literal
You can use nil literal to check if a variable is nil. Here is an example of using nil literal:

```textwire
@if(nil)
    <p>It will not be displayed</p>
@end
```

## Float literals
You can use float literals and perform arithmetic operations with them. Here is an example of using float literals:

```textwire
<span>{{ 1.5 + 2.5 }}</span>
```

## Boolean literals
You can use boolean literals to check if a variable is true or false. Here is an example of using boolean literals:

```textwire
@if(true)
    <p>Is tall</p>
@end
```

## Array literals
Defining an array in Textwire is done is a similar way as in other languages. Here is an example of defining an array:

```textwire
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    @each(name in names)
        <li>{{ name }}</li>
        <li>{{ loop.index }}</li> <!-- Index of the current item -->
    @end
</ul>
```

You can access values in an array by using an index. Here is an example of accessing values in an array:

```textwire
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    <li>{{ names[0] }}</li> <!-- "John" -->
    <li>{{ names[1] }}</li> <!-- "Jane" -->
    <li>{{ names[2] }}</li> <!-- "Jack" -->
</ul>
```

## Object literals
Objects in Textwire are very similar to JavaScript object with key-value pairs. Here is an example of defining an object:

```textwire
{{ person = {"name": "John", "age": 25} }}
```

You can also use key names without quotes if your keys are valid identifiers:

```textwire
{{ person = { name: "John", age: 25 } }}
```

You can access values in an object by using a key. Here is an example of accessing values in an object:

```textwire
{{ user = {age: 25, name: {first: "Anna", last: "Cho"}} }}

<ul>
    <li>First name: {{ user.name.first }}</li> <!-- "Anna" -->
    <li>Last name: {{ user.name.last }}</li> <!-- "Cho" -->
    <li>Age: {{ user.age }}</li> <!-- 25 -->
</ul>
```

:::tip First Character is Case-Insensitive
**First character case-insensitivity in field access.** Field name matching ignores case differences in the first character. This means <code v-pre>{{ user.name.first }}</code> and <code v-pre>{{ user.Name.First }}</code> resolve to the same result.
:::

:::important
Textwire automatically converts Go structs to objects, but **only exported fields** are converted. Since Go doesn't export fields that start with lowercase letters, Textwire cannot access them. Make sure to capitalize field names if you want them available in your templates.
:::

### Shorthand property notation
Similar to objects in JavaScript, you can use shorthand property notation to define an object. Here is an example of using shorthand property notation:

```textwire
{{ name = "John"; age = 25; person = { name, age } }}
```
