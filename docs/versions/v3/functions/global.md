---
title: Global Functions - v3
description: Explore global functions available in Textwire
---

# Global Functions
Global functions are not attached to any specific type like strings or integers, they are globally available everywhere. They are similar to Golang `len()`, `cap()` functions.

This global function should be used only with variables. It allows you to check if the variable is defined or not to prevent Textwire from creating an error.

## defined
```ts
defined(arg: any...): bool
```

#### Arguments:
1. `arg` (any) - Any amount of arguments

If you pass more than 1 variable, the function will return `true` if all variables are defined.

#### Input Example:
```textwire
{{ defined(actors) ? 'Defined' : 'Missing' }}
```

#### Output:
```html
Defined
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

### How it Works with Literal Types
The function `defined` is designed to work with variables, but if you try to call it on any literal type it will always return `true`. Here is the example:

```textwire
{{ defined("") ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined(0) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined(nil) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined(false) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined(true) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined({}) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
{{ defined([]) ? 'Yes' : 'No' }} {{-- Output: Yes --}}
```

:::tip Best Practice
Use `defined()` when working with optional variables in components to avoid runtime errors when the variable is not passed to the template.
:::
