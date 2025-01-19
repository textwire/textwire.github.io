---
title: Statements - v2
sidebar_label: Statements
sidebar_position: 2
description: Learn about different statements in Textwire, including if statements, variable declarations, use statements, insert statements, for loops, etc.
---

# Statements

- Statements
    - [If Statement](#if-statement) `@if(x == 1)`
    - [Variable Declaration](#variable-declaration) `{{ x = 5 }}`
    - [Use Statement](#use-statement) `@use("layouts/main")`
    - [Insert Statement](#insert-statement) `@insert("title", "Home")`
    - [Reserve Statement](#reserve-statement) `@reserve("title")`
    - [For Loop](#for-loop) `@for(i = 0; i < 2; i++)`
    - [Each Loop](#each-loop) `@each(name in names)`
    - [Component](#component) `@component("components/post-card")`
    - [Component Slots](#component-slots) `@slot('footer')`
    - [Dump Directive](#dump-directive) `@dump(users, page)`

## If Statement
You can use if statements to conditionally render content. Here is an example of using if statements:

```textwire
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

## For Loop
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

:::info Read More about Loops
Read more about loops in the [Loops guide](/docs/v2/guides/loops).
:::

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

## Each Loop
Each statement is a special for loop that you can use to iterate over an array. It has a declaration and an array. `@each(<declaration> in <array>)`. Here is an example of using each loop:

```textwire
{{ names = ["Ann", "Serhii"] }}

@each(name in names)
    <p>{{ name }}</p>
@end
```

:::info Read More about Loops
Read more about loops in the [Loops guide](/docs/v2/guides/loops).
:::

## Variable Declaration
You can assign and declare variables by using the `=` operator. Here is an example of declaring variables:

```textwire
{{ x = 5 }}
{{ x = 10 }}
```

You cannot assign values to variables that have a different type. For example, you cannot do `{{ x = "Hello"; x = 3 }}` because `x` is a string and then you are trying to assign an integer to it. In Textwire, you don't need to declare type of a variable, it will be automatically inferred from the value that you assign to it.

:::info Declaration has no output
Variable declaration statements are not expressions! They don't return any value and can't be used inside of other expressions. Therefore, they don't print anything to the output.
:::

## Use Statement
You have a "use statement" to define a layout for your template. Here is an example of using use statement:

```textwire
@use("layouts/main")
```

Use statement excepts a string literal as an argument. The string literal should be a path to the layout file relative to a `TemplateDir` parameter that you set in the config. For example, if you set `TemplateDir` to `"src/templates/layouts"`, then you can use the layout statement like `@use("main")` and it will look for the layout file in `"src/templates/layouts/main.tw"`.

:::info Understanding the @use Directive
When you use the `@use` directive, only the content inside `@insert` directives will be rendered, while the rest of the file’s content will be ignored. This is because the `@use` directive instructs the program to apply a layout file instead of rendering the current file directly. In this process, all reserved placeholders in the layout file are filled with the content specified within your `@insert` directives.
:::

## Insert Statement
You can use insert statement to insert content into reserved places. You cannot use `insert` without defining a layout with Use statement in the same file. Here is an example of using insert statement in 2 ways, with content body and without it:

```textwire title="home.tw"
@use("layouts/main")

<!-- It's useful when you want to pass a variable to the layout file -->
@insert("title", "Home page")

<!-- It's useful when you want to insert content into a reserved place -->
@insert("content")
    <h1>Hello, World!</h1>
    <p>This is a home page.</p>
@end
```

Insert statement excepts 2 arguments, the name of the reserved place and the optional content that you want to insert into the reserved place.

All the `insert` statements will be transferred to the layout file and will be placed into reserved places defined by a [reserve statement](#reserve-statement).

## Reserve Statement
When you define a layout file for you template, you need to reserve places for dynamic content. You can reserve a place for a title, content, sidebar, footer and so on. Here is an example of using reserve statement:

```textwire title="layouts/main.tw"
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

:::info Pass variables to the layout
All the variables passed to the template file will be available in the layout file. It means that you can even replace `@reserve("title")` with `{{ title }}` and define the `title` variable in each template file. In other words, you can use variables in the layout file that are available in the template file.
:::

Reserve statement excepts only a single argument, which the name of the reserved place. This name will be used in the [insert statement](#insert-statement) to insert content into the reserved place.

## Component
One of the best features of Textwire is the ability to use components. You can create a directory `components` in your templates and put all your components there. Then you can use the `@component` directive to include a component in your template. Let's see a simple example of a component:

### Example of a Component
```textwire title="components/post-card.tw"
<div class="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
</div>
```

### Example of Using a Template
```textwire title="home.tw"
<div class="posts">
    @each(post in posts)
        @component("components/post-card", { post })
    @end
</div>
```

:::info Component path alias
If your components are located in the `components` directory, you can use the `~` alias to reference them. For example, `@component("~post-card", { post })`. Behind the scenes, the `~` alias will be replaced with `components/`.
:::

The first argument of the `@component` directive is a path to the component file relative to the `TemplateDir` parameter that you set in the config.

The second optional argument is a [Textwire object](/docs/v2/language-elements/literals#object) that you want to pass to the component. Here is another example of using a component with a second argument:

```textwire title="home.tw"
<ul>
    @each(book in books)
        @component("parts/book", { completed: book.completed })
    @end
</ul>
```

You can also use slots in components to pass content to the component. Read about slots in the next section.

## Component Slots
Component slots is a very common feature in most template languages and frameworks like Vue.js or Laravel Blade. Textwire has named and default slots that you can use to pass content to a component.

There are 2 types of slots in Textwire, default and named slots. To pass and define a default slot you use `@slot` directive. To pass and define a named slot you use `@slot("some-name")` directive. Let's see an example of using slots in a component:

```textwire title="components/book.tw"
<div class="book">
    @slot

    <h1>{{ book.title }}</h1>
    <p>{{ book.description }}</p>

    @slot('footer')
</div>
```

We can now use `book.tw.html` component in our Textwire files like this:

```textwire title="home.tw"
@each(book in books)
    @component("components/book", { book })
        @slot
            <img src="{{ book.image }}" alt="{{ book.title }}">
        @end

        @slot('footer')
            <small>published by {{ book.author }}</small>
            <button>Read more</button>
        @end
    @end
@end
```

In this example we use default and named slots in a single component. You can use as many slots as you want in a single component as long as names are unique.

## Dump Directive
`@dump` directive is used for debugging purposes. It will print the value of the passed variables, objects, arrays, etc. to the output. Here is an example of using `@dump` directive:

```textwire
{{ names = ["John", "Jane", "Jack", "Jill"] }}

@dump(names)
```

The output would look like something like this:

<img src="/img/dump-names.png" title="Dump output in Textwire" width="150" />

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

<img src="/img/dump-object.png" title="Dump object in Textwire" width="400" />

### Dump Multiple Objects
`@dump` directive can accept an endless amount arguments at once:

```textwire
{{ meta = [1, 2.23, true, false, nil] }}
{{ user = { name: "John", age: 25 } }}

@dump(meta, user)
```

<img src="/img/dump-multiple.png" title="Dump multiple object in Textwire" width="300" />

It's an easy and convenient way to debug your templates and see what's going on inside of them.