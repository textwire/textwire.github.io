---
title: isDefined Function - v3
sidebar_label: isDefined Function
sidebar_position: 6
description: Explore the isDefined function available in Textwire
---

# isDefined Function
## Description
This special function that should be used only with variables. This function allows you to check if the variable is defined or not to prevent Textwire from creating an error.

## Usage Example
#### Input example:
```textwire
{{ actors.isDefined() ? 'Defined' : 'Missing' }}
```

#### Output:
```textwire
Defined
```

## When to Use isDefined
You can use it inside of you components when you need to check if variable was passed to the component or not. Here is the example when the `book` variable is required but `author` is optional.

```textwire title="components/book.tw"
<div class="book">
    <h1>{{ book.title }}</h1>
    <p>{{ book.description }}</p>

    @if(author)
        <small>The author is {{ author.first }} {{ author.last }}</small>
    @else
        <small>The author is unknown</small>
    @end
</div>
```

## How it Works with Literal Types
The function `isDefined` designed to work with variables, but if you try to call it on any literal type it will always return `true`. Here is the example:

```textwire
{{ "".isDefined() ? 'Yes' : 'No' }} <!-- Output: Yes -->
{{ 0.isDefined() ? 'Yes' : 'No' }} <!-- Output: Yes -->
{{ nil.isDefined() ? 'Yes' : 'No' }} <!-- Output: Yes -->
{{ false.isDefined() ? 'Yes' : 'No' }} <!-- Output: Yes -->
{{ true.isDefined() ? 'Yes' : 'No' }} <!-- Output: Yes -->
{{ {}.isDefined() ? 'Yes' : 'No' }} <!-- Output: Yes -->
{{ [].isDefined() ? 'Yes' : 'No' }} <!-- Output: Yes -->
```

