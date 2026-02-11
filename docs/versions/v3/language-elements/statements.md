---
title: Statements - v3
description: Learn about different statements in Textwire, including if statements, variable declarations, use statements, insert statements, for loops, etc.
---

# Statements

- [If Statement](#if-statement) `@if(x == 1)`
- [Variable Declaration](#variable-declaration) <code v-pre>{{ x = 5 }}</code>
- [Use Statement](#use-statement) `@use("layouts/main")`
- [Insert Statement](#insert-statement) `@insert("title", "Home")`
- [Reserve Statement](#reserve-statement) `@reserve("title")`
- [For Statement](#for-statement) `@for(i = 0; i < 2; i++)`
- [Each Statement](#each-statement) `@each(name in names)`
- [Component](#component) `@component("components/post-card")`
- [Component Slots](#component-slots) `@slot('footer')`
- [Dump Directive](#dump-directive) `@dump(users, page)`

## If Statement

You can use if statements to conditionally render content. You can construct `@if` statement using the `@if`, `@elseif`, `@else` and `@end` directives.
Here is an example of using if statements:

```textwire :no-line-numbers
@if(name == "Anna")
    <p>Her name is Anna</p>
@end
```

You can also use `else` and `elseif` statements:

```textwire
@if(x == 1)
    <p>x is 1</p>
@elseif(x == 2)
    <p>x is 2</p>
@else
    <p>x is not 1 and 2</p>
@end
```

If you pass `nil` or an empty string to the `@if` statement, it will be treated as `false`.

```textwire
{{ name = nil }}

@if(name)
    <p>This will not be printed</p>
@end
```

## For Statement

You can use regular for loops to iterate over an array or a range of numbers.

This is a basic for loop that you can use. It has a declaration, condition and post statement. `for <declaration>; <condition>; <post>`. They are all optional. Here is an example of using for loop:

```textwire
{{ names = ["Ann", "Serhii"] }}

@for(i = 0; i < names.len(); i++)
    <p>{{ names[i] }}</p>
@else
    <p>No names</p>
@end
```

Read more about loops in the [Loops guide](/v3/guides/loops).

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

## Each Statement

Each statement is a special form of `for` loop that you can use to iterate over an array. It has a declaration and an array. `@each(<declaration> in <array>)`. Here is an example of using each loop:

```textwire
{{ names = ["Ann", "Serhii"] }}

@each(name in names)
    <p>{{ name }}</p>
@end
```

Read more about loops in the [Loops guide](/v3/guides/loops).

## Variable Declaration

You can assign and declare variables by using the `=` operator. Here is an example of declaring variables:

```textwire :no-line-numbers
{{ x = 5 }}
{{ x = 10 }}
```

You cannot assign values to variables of a different type. For example, you cannot do <code v-pre>{{ x = "Hello"; x = 3 }}</code> because `x` is a string and then you are trying to assign an integer to it. In Textwire, you don't need to declare type of a variable, it will be automatically inferred from the value that you assign to it.

:::tip Declaration Has No Output
Variable declaration statements are not expressions! They don't return any value and can't be used inside of other expressions. Therefore, they don't print anything to the output.
:::

## Use Statement

`@use` statements allow you to specify a layout file that will be used to render the current template. This feature is useful for creating reusable layouts that can be applied to multiple templates.

Here is an example of using use statement:

```textwire :no-line-numbers
@use("layouts/main")
```

:::info Use Statement Path Alias
If your layouts are located in the `layouts` directory, you can use the `~` alias to reference them. For example, `@use("~main")` instead of `@use("layouts/main")`. Behind the scenes, the `~` alias will be replaced with `layouts/`.
:::

The `@use` statement accepts a string literal as its argument. This string literal should specify the path to the layout file relative to the [`TemplateDir`](/v3/guides/configurations#setting-configurations) parameter defined in the configuration. For example, if [`TemplateDir`](/v3/guides/configurations#setting-configurations) is set to `"src/templates"` and you have `layouts` directory in there, you can use the layout statement like `@use("layouts/main")`, and it will look for the layout file at `"src/templates/layouts/main.tw"`.

:::info Understanding the @use Directive
When you use the `@use` directive, only the content inside [`@insert`](#insert-statement) directives will be rendered; the rest of the file's content will be ignored. This is because the `@use` directive applies a layout file instead of rendering the current file directly. During this process, all placeholders reserved in the layout file are populated with the content specified within your [`@insert`](#insert-statement) directives.
:::

### Important Notes

1. Only **one** `@use` statement is allowed per template file. Defining multiple layouts will cause an error.

    ```textwire :no-line-numbers
    @use('~main')
    @use('~user')  <!-- ❌ Error -->
    ```

2. You can place `@use` anywhere in the template, but it’s **recommended to put it on the first line** for clarity.

    ```textwire :no-line-numbers
    @use('~base') <!-- ✅ Recommended -->

    @insert('title', 'Home Page')
    @insert('description', 'This is a books example template with Textwire')
    ```

3. Defining `@use` inside a **layout file** will always result in an error. This is intentional to keep layouts simple.

## Insert Statement

The `@insert` statement lets you insert (inject) content into placeholders defined by the [`@reserve`](#reserve-statement) statement in your layout file. This feature enables flexible template structuring and reusability.

Below is an example demonstrating two scenarios for the `@insert` statement with a content body and without:

```textwire
@use("layouts/main")

<!-- Without a content body -->
@insert("title", "Home page")

<!-- With a content body -->
@insert("content")
    <h1>Hello, World!</h1>
    <p>This is a home page.</p>
@end
```

The `@insert` statement is optional and accepts two arguments: the name of the reserved placeholder and the optional content to be injected into that placeholder.

All `@insert` statements are evaluated within the template file first, and next, they are matched to placeholders defined by the [`@reserve`](#reserve-statement) statements in the layout file.

### Important Notes

1. Defining an `@insert` for a placeholder that is not declared in the layout file using [`@reserve`](#reserve-statement) will result in an error.
2. You cannot define multiple `@insert` statements with the same name in a single file. It will result in error.
3. If you define `@insert` statement without defining `@use` statement first, you'll get an error.

## Reserve Statement

When defining a layout file for your template, you can reserve placeholders for dynamic content. These placeholders can be used for elements such as the title, content, sidebar, footer, and more. Below is an example of how to use the `@reserve` statement:

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

:::info Pass Variables to the Layout
All variables passed to the template file are also available in the layout file. This means you can replace `@reserve("title")` with <code v-pre>{{ title }}</code> and define the `title` variable in each template file. In other words, variables available in the template file can be seamlessly used within the layout file.
:::

The `@reserve` statement accepts a single argument: the name of the reserved placeholder. This name will be used in the [`@insert`](#insert-statement) statement to insert content into the corresponding placeholder.

## Component

The `@component` directive allows you to include reusable components within your templates. Components help organize and structure templates by encapsulating reusable parts of your UI.

To use components in Textwire, create a `components` directory inside your templates and store your component files there. You can then include a component in your template using the `@component` directive.

Here’s a simple example of using a component:

### Example of a Component

```textwire
<div class="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
</div>
```

### Example of Using a Template

```textwire
<div class="posts">
    @each(post in posts)
        @component("components/post-card", { post })
    @end
</div>
```

:::info Component path alias
If your components are located in the `components` directory, you can use the `~` alias to reference them. For example, `@component("~post-card", { post })` instead of `@component("components/post-card", { post })`. Behind the scenes, the `~` alias will be replaced with `components/`.
:::

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
1. You can include layout file into components using [`@use`](/v3/language-elements/statements#use-statement) statement, but it can make your templates more complex and harder to maintain. We recommend to avoid using layouts in components and keep them simple.
2. Component cannot have empty body and be like `@component("post", { post })@end`. In this situations it's important to remove `@end` token to avoid parsing errors.
3. You can use [slots](/v3/language-elements/statements#component-slots) in components to pass content to the component file.

## Component Slots

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

```textwire
@each(book in books)
    @component("~book", { book })
        <!-- default slot -->
        @slot
            <img src="{{ book.image }}" alt="{{ book.title }}">
        @end

        <!-- named slot -->
        @slot('footer')
            <small>published by {{ book.author }}</small>
            <button>Read more</button>
        @end
    @end
@end
```

In this example, both default and named slots are used within a single component. You can include as many slots as needed in a single component, provided that all named slots have unique names.

### Important Notes

1. Defining multiple slots with the same name in a single component will result in an error.
2. Defining multiple default slots in a single component will result in an error.
3. If you provide an empty string as a slot name, it will act as default slot. `@slot` and `@slot('')` act the same.

## Dump Directive

The `@dump` directive is primarily used for debugging purposes. This directive outputs the value of variables, [objects](/v3/language-elements/literals#object), [arrays](/v3/language-elements/literals#array), [strings](/v3/language-elements/literals#string) and other data types to the screen.

Here’s an example of how to use the `@dump` directive:

```textwire :no-line-numbers
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

```textwire :no-line-numbers
{{ meta = [1, 2.23, true, false, nil] }}
{{ user = { name: "John", age: 25 } }}

@dump(meta, user)
```

<img src="/images/dump-multiple.png" width="300" />

It's an easy and convenient way to debug your templates and see what's going on inside of them.
