---
title: Global Functions - v3
description: Explore global functions available in Textwire
outline: [2, 3]
---

# Global Functions

Global functions are not attached to any specific type like strings or integers, they are globally available everywhere. They are similar to Golang `len()`, `cap()` functions.

This global function should be used only with variables and object properties. It allows you to check if the variable or property is defined or not to prevent Textwire from creating an error.

## defined

```ts
defined(arg: ANY...): BOOLEAN
```

Function `defined` checks if variables and properties are defined. It doesn't care about `true`, `false`, `nil`, or any other literal type, it only tells you if the variable is defined and if the property on an object is defined or not.

#### Arguments:

1. `arg` (ANY) - Any amount of arguments

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
@if(defined(user.address.street.number)) {
    {{ user.address.street.number }}
}
```

It prevents you from getting an error when trying to get propery on `NIL` type if your `address` or `street` is undefined.

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
{{-- Error: method 'somemethod' does not exist on type 'STRING' --}}
```

:::tip Best Practice
Use `defined()` when working with optional variables in components to avoid runtime errors when the variable is not passed to the template.
:::
