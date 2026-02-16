---
title: Directives - v3
description: Learn about different directives in Textwire, including @if, @each, @for, @insert, @declare and more
---

# Directives

Textwire directives provide control over your templates through commands that begin with `@`. These directives enable you to conditionally display content, iterate over data, create reusable layouts, and build modular components. Each directive serves a specific purpose in the template rendering process, allowing you to write dynamic and maintainable templates without mixing complex logic into your presentation layer.

- [@if](#if) `@if(x == 1)`
- [@use](#use) `@use("layouts/main")`
- [@insert](#insert) `@insert("title", "Home")`
- [@reserve](#reserve) `@reserve("title")`
- [@for](#for) `@for(i = 0; i < 2; i++)`
- [@each](#each) `@each(name in names)`
- [@component](#component) `@component("components/post-card")`
- [@slot](#slot) `@slot('footer')`
- [@dump](#dump) `@dump(users, page)`

## @if

You can use if directives to conditionally render content. You can construct `@if` directive using the `@if`, `@elseif`, `@else` and `@end` directives. Example:

```textwire
@if(name == "Anna")
    <p>Her name is Anna</p>
@end
```

You can also use `else` and `elseif` directives:

```textwire
@if(x == 1)
    <p>x is 1</p>
@elseif(x == 2)
    <p>x is 2</p>
@else
    <p>x is not 1 and 2</p>
@end
```

If you pass `nil` or an empty string to the `@if` directive, it will be treated as `false`.

```textwire
{{ name = nil }}

@if(name)
    <p>This will not be printed</p>
@end
```

## @for

You can use regular for loops to iterate over an array or a range of numbers.

This is a basic for loop that you can use. It has a declaration, condition and post directive. `for <declaration>; <condition>; <post>`. They are all optional. Example:

```textwire
{{ names = ["Ann", "Serhii"] }}

@for(i = 0; i < names.len(); i++)
    <p>{{ names[i] }}</p>
@else
    <p>No names</p>
@end
```

Read more about loops in the [Loops guide](/v3/language-elements/loops).

#### Example

```textwire
{{ names = ["Ann", "Serhii", "Vladimir"] }}

<ul>
    @for(i = 0; i < names.len(); i++)
        @continueIf(names[i] == "Serhii")
        <li>{{ names[i] }}</li>
    @end
</ul>
```

## @each

Each directive is a special form of `for` loop that you can use to iterate over an array. It has a declaration and an array. `@each(<declaration> in <array>)`. Example:

```textwire
{{ names = ["Ann", "Serhii"] }}

@each(name in names)
    <p>{{ name }}</p>
@end
```

Read more about loops in the [Loops guide](/v3/language-elements/loops).

## @use

`@use` directives allow you to specify a layout file that will be used to render the current template. This feature is useful for creating reusable layouts that can be applied to multiple templates.

Example:

```textwire
@use("layouts/main")
```

:::tip @use Path Alias
If your layouts are located in the `layouts` directory, you can use the `~` alias to reference them. For example, `@use("~main")` instead of `@use("layouts/main")`. Behind the scenes, the `~` alias will be replaced with `layouts/`.
:::

The `@use` directive accepts a string literal as its argument. This string literal should specify the path to the layout file relative to the [`TemplateDir`](/v3/api/configurations#setting-configurations) parameter defined in the configuration. For example, if [`TemplateDir`](/v3/api/configurations#setting-configurations) is set to `"src/templates"` and you have `layouts` directory in there, you can use the layout directive like `@use("layouts/main")`, and it will look for the layout file at `"src/templates/layouts/main.tw"`.

:::tip Understanding the @use Directive
When you use the `@use` directive, only the content inside [`@insert`](#insert) directives will be rendered; the rest of the file's content will be ignored. This is because the `@use` takes the layout file as a base instead of rendering the current file directly. During this process, all placeholders reserved in the layout file are populated with the content specified within your inserts.
:::

### Important Notes

- **Only one `@use` allowed.** Only one `@use` directive is allowed per template file. Defining multiple layouts will cause an error.
    ```textwire
    @use('~main')
    @use('~user')  {{-- ❌ Error --}}
    ```
- **Recommended at the beginning.** You can place `@use` anywhere in the template, but it’s **recommended to put it on the first line** for clarity.
    ```textwire
    @use('~base') {{-- ✅ Recommended --}}

    @insert('title', 'Home Page')
    @insert('description', 'This is a books example template with Textwire')
    ```
- **Not allowed in layouts.** Defining `@use` inside a **layout file** will always result in an error. This is intentional to keep layouts simple.

## @insert

The `@insert` directive lets you insert (inject) content into placeholders defined by the [`@reserve`](#reserve) directive in your layout file. This feature enables flexible template structuring and reusability.

Below is an example demonstrating two scenarios for the `@insert` directive with a content body and without:

```textwire
@use("layouts/main")

{{-- Without a content body --}}
@insert("title", "Home page")

{{-- With a content body --}}
@insert("content")
    <h1>Hello, World!</h1>
    <p>This is a home page.</p>
@end
```

### Important Notes

- **Takes two arguments.** `@insert` is optional and accepts two arguments: the name of the reserved placeholder and the optional content to be injected into that placeholder.
- **Evaluated in template context.** All inserts are evaluated within the template file first, and next, they are matched to placeholders defined by the [`@reserve`](#reserve) directives in the layout file. It means they have the context of the file where they are defined.
- **Requires matching reserve.** If you define an insert without having a matching reserve, it will result in error. Such inserts are considered unused.
- **Names must be unique.** You cannot define multiple inserts with the same name in a single file. It will result in error.
- **Requires `@use` first.** If you define `@insert` without defining `@use` directive first, you'll get an error.

## @reserve

When defining a layout file for your template, you can reserve placeholders for dynamic content. These placeholders can be used for elements such as the title, content, sidebar, footer, and more. Below is an example of how to use the `@reserve` directive:

```textwire
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@reserve("title")</title>
</head>
<body>
    @reserve("content")
</body>
</html>
```

### Fallback Argument

As a second argument, `@reserve` can also take a fallback value that will be used if no corresponding `@insert` is defined in the template. Example:

```textwire
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@reserve("title", "Welcome to Textwire")</title>
</head>
<body>
    @reserve("content", "There is nothing here")
</body>
</html>
```

### Important notes

- **Only in layout files.** `@reserve` can only be used inside layout file. Using it in templates and components will result in error.
- **`@insert` is optional.** `@reserve` does not force you to have a matching `@insert`. If you don't insert any value into `@reseve`, it will fallback to an empty string.
- **One `@reserve` per file.**  You cannot define multiple `@reserve` directives with the same name in a single layout file. It will result in an error starting from version [v3.1.0](https://github.com/textwire/textwire/pull/68).
- **Can be passed to components.** If you want to pass the value of `@reserve` from layout into a component, you can pass it using [slots](/v3/language-elements/directives#slot). Example:
    ```textwire
    @component('header')
        @slot('title')@reserve('title')@end
    @end
    ```

## @component

The `@component` directive allows you to include reusable code within your templates. Components help organize and structure templates by encapsulating reusable parts of your UI.

To use components in Textwire, create a `components` directory inside your templates and store your component files there. You can then include a component in your template using the `@component` directive. Example:

### Example of a Component File
Define a component file in `templates/components` directory.

```textwire
<div class="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
</div>
```

### Example of Using a Component
To include your component use `@component` directive with first argument being the path to your component relative to `templates` directory.

```textwire
<div class="posts">
    @each(post in posts)
        @component("components/post-card", { post })
    @end
</div>
```

The first argument of the `@component` directive is a path to the component file relative to the `TemplateDir` parameter that you set in the config.

The second optional argument is an [object](/v3/language-elements/literals#object) that you want to pass to the component. Here is another example of using a component with a second argument:

```textwire
<ul>
    @each(book in books)
        @component("parts/book", { completed: book.completed })
    @end
</ul>
```

### Imporant Notes

- You can include layout file into components using [`@use`](/v3/language-elements/directives#use) directive, but it can make your templates more complex and harder to maintain. We recommend to avoid using layouts in components and keep them simple.
- Component cannot have empty body and be like `@component("post", { post })@end`. In this situations it's important to remove `@end` token to avoid parsing errors.
- You can use [slots](/v3/language-elements/directives#slot) in components to pass content to the component file.
- If your components are located in the `components` directory, you can use the `~` alias to reference them. Behind the scenes, the `~` alias will be replaced with `components/`. Example:
    ```textwire
    @component("components/post-card", { post }) {{-- no alias --}}
    @component("~post-card", { post })           {{-- with alias--}}
    ```

## @slot

Component slots are a common feature in many template languages and frameworks. Textwire supports both named and default slots, allowing you to pass content into components flexibly.

There are 2 types of slots in Textwire: default slots and named slots.

1. **Default Local Slots**: Use the `@slot` directive to define and pass content to a default slot.
2. **Named Local Slots**: Use the `@slot("name")` directive to define and pass content to a named slot.

Here’s an example of how to use slots in a component. Consider this component:

```textwire
<div class="book">
    @slot

    <h1>{{ book.title }}</h1>
    <p>{{ book.description }}</p>

    @slot('footer')
</div>
```

We can now use `book.tw` component in our Textwire files like this:

```textwire :line-numbers
@each(book in books)
    @component("~book", { book })
        {{-- default slot --}}
        @slot
            <img src="{{ book.image }}" alt="{{ book.title }}">
        @end

        {{-- named slot --}}
        @slot('footer')
            <small>published by {{ book.author }}</small>
            <button>Read more</button>
        @end
    @end
@end
```

In this example, both default and named slots are used within a single component. You can include as many slots as needed in a single component, provided that all named slots have unique names.

### Important Notes

- **Duplicate names not allowed.** Defining multiple default slots or named slots with the same name in a single component will result in an error.
- **Empty string is default slot.** If you provide an empty string as a slot name, it will act as default slot. `@slot` and `@slot('')` act the same.
- **Slots have current context.** Slots have the context of the same file where they are defined. It means you can dinamically modify the content of a slot before it get rendered in the component file.
- **Slots are optional.** If you don't provide content for a slot, it will be rendered as an empty string.

## @dump

The `@dump` directive is primarily used for debugging purposes. This directive outputs the value of variables, [objects](/v3/language-elements/literals#object), [arrays](/v3/language-elements/literals#array), [strings](/v3/language-elements/literals#string) and other data types to the screen.

Here’s an example of how to use the `@dump` directive:

```textwire
{{ names = ["John", "Jane", "Jack", "Jill"] }}

@dump(names)
```

The output would look like something like this:

<img src="/images/dump-names.png" width="150" />

### Works with Different Types

Similarly, you can print objects and other types of data:

```textwire
<h1>This is my title</h1>

@dump({
    name: "John",
    age: 25,
    admin: false,
    hobbies: ["reading", "coding"],
})

<p>Some content</p>
```

<img src="/images/dump-object.png" width="400" />

### Dump Multiple Objects

`@dump` directive can accept an endless amount arguments at once:

```textwire
{{ meta = [1, 2.23, true, false, nil] }}
{{ user = { name: "John", age: 25 } }}

@dump(meta, user)
```

<img src="/images/dump-multiple.png" width="300" />

It's an easy and convenient way to debug your templates and see what's going on inside of them.
