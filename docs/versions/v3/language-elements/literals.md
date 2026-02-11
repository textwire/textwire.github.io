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
You can use string literals and concatenate them with other strings. You can use double or single quotes for strings. Here is an example of using string literals:

```textwire :no-line-numbers
{{ "Hello" + 'World!' }}
```

> When you print a string, it will be automatically escaped. If you want to print a string without escaping it, you can use the [raw()](/v3/functions/str#raw) function on strings. Example: <code v-pre>{{ "<h1>Test</h1>".raw() }}</code>

## Integer
You can use integer literals and perform arithmetic operations with them. Here is an example of using integer literals:

```textwire :no-line-numbers
<span>{{ 1 + 2 }}</span>
```

## Nil
You can use nil literal to check if a variable is nil. Here is an example of using nil literal:

```textwire :no-line-numbers
@if(nil)
    <p>It will not be displayed</p>
@end
```

## Float
You can use float literals and perform arithmetic operations with them. Here is an example of using float literals:

```textwire :no-line-numbers
<span>{{ 1.534 + 2.5 }}</span>
```

:::warning Precision Limit
Most languages (including Textwire) use **IEEE 754 standard** for floating-point numbers. These floating-point types have a finite precision and are unable to accurately represent more than approximately 15-17 digits. For example `1234567890.1234567890` will be rounded to `1234567890.1234567` in Textwire because of the precision limit of floating-point numbers. If you need to work with large numbers, you can keep them as strings.
:::

## Boolean
You can use boolean literals to check if a variable is true or false. Here is an example of using boolean literals:

```textwire :no-line-numbers
@if(true)
    <p>Is tall</p>
@end
```

## Array
Defining an array in Textwire is done is a similar way as in other languages. Here is an example of defining an array:

```textwire
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    @each(name in names)
        <li>{{ name }}</li>
    @end
</ul>
```

You can access values in an array by using an index. Here is an example of accessing values in an array:

```textwire
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    <li>{{ names[0] }}</li> {{-- John --}}
    <li>{{ names[1] }}</li> {{-- Jane --}}
    <li>{{ names[2] }}</li> {{-- Jack --}}
    <li>{{ names[10] }}</li> {{-- nil --}}
</ul>
```

:::info Array Index Returns Nil
Accessing array on non-existant index returns `nil` instead of resulting in error.
:::

### Best Practices
Always check array access with index for `nil` before using it to prevent using functions on `nil` errors. Here are 2 ways of performing this check:

#### If Statement 
```textwire
{{ names = [] }}

@if(names[0] != nil)
    {{ names[0].upper() }}
@end
```

#### Ternary Expression
```textwire
{{ names = [] }}

{{ names[0] == nil ? '' : names[0].upper() }}
```

## Object
Objects in Textwire are very similar to JavaScript object with key-value pairs. Here is an example of defining an object:

```textwire :no-line-numbers
{{ person = {"name": "John", "age": 25} }}
```

You can also use key names without quotes if your keys are valid identifiers:

```textwire :no-line-numbers
{{ person = { name: "John", age: 25 } }}
```

You can access values in an object by using a key. Here is an example of accessing values in an object:

```textwire
{{ user = {age: 25, name: {first: "Anna", last: "Cho"}} }}

<ul>
    <li>First name: {{ user.name.first }}</li> {{-- "Anna" --}}
    <li>Last name: {{ user.name.last }}</li> {{-- "Cho" --}}
    <li>Age: {{ user.age }}</li> {{-- 25 --}}
</ul>
```

:::tip First Character is Case-Insensitive
**First character case-insensitivity in field access.** Field name matching ignores case differences in the first character. This means <code v-pre>{{ user.name.first }}</code> and <code v-pre>{{ user.Name.First }}</code> resolve to the same result.
:::

:::warning Exported Fields Only
Textwire automatically converts Go structs to objects, but **only exported fields** are converted. Since Go doesn't export fields that start with lowercase letters, Textwire cannot access them. Make sure to capitalize field names if you want them available in your templates.
:::


#### Shorthand Property Notation
Similar to objects in JavaScript, you can use shorthand property notation to define an object. Here is an example of using shorthand property notation:

```textwire :no-line-numbers
{{ name = "John"; age = 25 }}
{{ person = { name, age } }}
```
