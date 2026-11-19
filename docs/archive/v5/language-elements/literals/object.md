---
title: Object Literals - v5
description: Learn about object literals in Textwire
---

# Object Literals

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

> [!TIP] Uppercase-First Properties
> Property keys that start with an uppercase letter can be accessed in lowercase, and vice versa. If you are passing an object like `user: User` that has a `Name` field, you can access it as <code v-pre>{{ user.name }}</code> or <code v-pre>{{ user.Name }}</code>, both work. The same applies to nested properties, like <code v-pre>{{ user.name.first }}</code> and <code v-pre>{{ user.Name.First }}</code>:
>
> ```textwire
> {{ user = {Name: {First: "Anna", Last: "Cho"}} }}
>
> <li>First name: {{ user.name.first }}</li>  {{-- "Anna" --}}
> <li>Last name: {{ user.Name.First }}</li>  {{-- "Anna" --}}
> ```
> It only works for the first letter of the property.

## First character case-insensitivity in field access

Field name matching ignores case differences in the first character. This means <code v-pre>{{ user.name.first }}</code> and <code v-pre>{{ user.Name.First }}</code> resolve to the same result.

## Keys must be identifiers or strings

Unquoted keys have to be valid identifiers. If a key contains characters like `-` or starts with a number, wrap it in quotes. Example:

```textwire
{{ user = { name: "John", "first-name": "Johnny", "1st": true } }}
```

## Dot and bracket access

Use `obj.key` or `obj['key']` to read a value. Bracket access takes a string key. Use dot notation to assign values, for example `user.name = "Anna"`.

## Safe accessing

You can use the [get()](/v5/functions/obj#get) function to safely access object properties without worrying about errors. Example:

```textwire
{{ user = {age: 25, name: {first: 'Anna', last: 'Cho'}} }}
{{ user.get('name.first') }}
```

## Only exported fields are converted

Textwire automatically converts Go structs to objects, but **only exported fields** are converted. Since Go doesn't export fields that start with lowercase letters, Textwire cannot access them. Make sure to capitalize field names if you want them available in your templates.

## Accessing missing object properties returns `nil`

Similar to arrays, trying to access a property that doesn't exist on an object returns `nil` rather than throwing an error. However, this only applies to the first undefined property—attempting to access a property on `nil` itself will result in an error.

## Sorted keys when printed

Objects in Textwire maintain the order of keys in alphabetical order when printed or in JSON string if you do <code v-pre>{{ myObj.json() }}</code>.

## Shorthand Property Notation

Similar to objects in JavaScript, you can use shorthand property notation to define an object.

```textwire
{{ name = "John"; age = 25 }}
{{ person = { name, age } }}
```

<!--@include: @/.vitepress/parts/language-elements/circular-reference.md-->
