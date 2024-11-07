---
title: Statements - v1
sidebar_label: Statements
sidebar_position: 2
---

# Statements

- Statements
    - [If statement](#if-statement) `@if(x == 1)`
    - [Variable declaration](#variable-declaration) `{{ x = 5 }}`
    - [Use statement](#use-statement) `@use("layouts/main")`
    - [Insert statement](#insert-statement) `@insert("title", "Home")`
    - [Reserve statement](#reserve-statement) `@reserve("title")`
    - [For loop](#for-loop) `@for(i = 0; i < 2; i++)`
    - [Each loop](#each-loop) `@each(name in names)`
    - [Component](#component) `@component("components/post-card")`

## If statement
You can use if statements to conditionally render content. Here is an example of using if statements:

```html
@if(name == "Anna")
    <p>Her name is Anna</p>
@end
```

You can also use `else` and `elseif` statements:

```html
@if(x == 1)
    <p>x is 1</p>
@elseif(x == 2)
    <p>x is 2</p>
@else
    <p>x is not 1 and 2</p>
@end
```

## For loop
You can use regular for loops to iterate over an array or a range of numbers.

This is a basic for loop that you can use. It has a declaration, condition and post statement. `for <declaration>; <condition>; <post>`. They are all optional. Here is an example of using for loop:

```html
{{ names = ["Ann", "Serhii"] }}

@for(i = 0; i < names.len(); i++)
    <p>{{ names[i] }}</p>
@else
    <p>No names</p>
@end
```

:::info Else is optional
The `@else` statement is optional and can be used to render content when there are no iterations in the loop.
:::

You can also use `@break`, `@breakIf()`, `@continue` and `@continueIf()` directives inside of a for loop to break or continue the loop. `@breakIf()` and `@continueIf()` directives except a single argument, which is a condition that needs to be met to break or continue the loop.

### Example
```html
{{ names = ["Ann", "Serhii", "Vladimir"] }}

<ul>
    @for(i = 0; i < names.len(); i++)
        @continueIf(names[i] == "Serhii")
        <li>{{ names[i] }}</li>
    @end
</ul>
```

## Each loop
Each statement is a special for loop that you can use to iterate over an array. It has a declaration and an array. `@each(<declaration> in <array>)`. Here is an example of using each loop:

```html
{{ names = ["Ann", "Serhii"] }}

@each(name in names)
    <p>{{ name }}</p>
@else
    <p>No names</p>
@end
```

:::info Else is optional
The `@else` statement is optional and can be used to render content when the array is empty
:::

Inside of every `each` loop, you can optionally use a `loop` object to get the current index of the item or other data that is updated on every iteration.

For example, `{{ loop.index }}` will return the current index of the item. Here is a list of all the properties of the `loop` object you can use:

| Property | Type    | Description                                |
| -------- | ------- | ------------------------------------------ |
| `index`  | Integer | Current index number starting from `0`     |
| `first`  | Boolean | Is the first item in a loop                |
| `last`   | Boolean | Is the last item in a loop                 |
| `iter`   | Integer | Current iteration number starting from `1` |

### Example
```html
{{ names = ["Ann", "Serhii", "Vladimir"] }}

<ul>
    @each(name in names)
        <li>{{ loop.iter }}: {{ name }}</li>
    @end
</ul>
```

### Output
```html
<ul>

        <li>1: Anna</li>

        <li>2: Serhii</li>

        <li>3: Vladimir</li>

</ul>
```

You can also use `@break`, `@breakIf()`, `@continue` and `@continueIf()` directives inside of a for loop to break or continue the loop. `@breakIf()` and `@continueIf()` directives except a single argument, which is a condition that needs to be met to break or continue the loop.

### Example
```html
{{ names = ["Ann", "Serhii", "Vladimir"] }}

<ul>
    @each(name in names)
        @breakIf(name == "Serhii")
        <li>{{ name }}</li>
    @end
</ul>
```

## Variable declaration
You can assign and declare variables by using the `=` operator. Here is an example of declaring variables:

```html
{{ x = 5 }}
{{ x = 10 }}
```

You cannot assign values to variables that have a different type. For example, you cannot do `{{ x = "Hello"; x = 3 }}` because `x` is a string and then you are trying to assign an integer to it. In Textwire, you don't need to declare type of a variable, it will be automatically inferred from the value that you assign to it.

:::info Declaration has no output
Variable declaration statements are not expressions! They don't return any value and can't be used inside of other expressions. Therefore, they don't print anything to the output.
:::

## Use statement
You have a "use statement" to define a layout for your template. Here is an example of using use statement:

```html
@use("layouts/main")
```

Use statement excepts a string literal as an argument. The string literal should be a path to the layout file relative to a `TemplateDir` parameter that you set in the config. For example, if you set `TemplateDir` to `"src/templates/layouts"`, then you can use the layout statement like `@use("main")` and it will look for the layout file in `"src/templates/layouts/main.tw.html"`.

:::info Understanding the @use Directive
When you use the `@use` directive, only the content inside `@insert` directives will be rendered, while the rest of the file’s content will be ignored. This is because the `@use` directive instructs the program to apply a layout file instead of rendering the current file directly. In this process, all reserved placeholders in the layout file are filled with the content specified within your `@insert` directives.
:::

## Insert statement
You can use insert statement to insert content into reserved places. You cannot use `insert` without defining a layout with Use statement in the same file. Here is an example of using insert statement in 2 ways, with content body and without it:

```html
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

## Reserve statement
When you define a layout file for you template, you need to reserve places for dynamic content. You can reserve a place for a title, content, sidebar, footer and so on. Here is an example of using reserve statement:

```html
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

### Example of a component `components/post-card.tw.html`
```html
<div class="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
</div>
```

### Example of using a component in a template `home.tw.html`
```html
<div class="posts">
    @each(post in posts)
        @component("components/post-card", { post })
    @end
</div>
```

The first argument of the `@component` directive is a path to the component file relative to the `TemplateDir` parameter that you set in the config.

The second optional argument is a [Textwire object](/docs/v1/language-elements/literals#object-literals) that you want to pass to the component. Here is another example of using a component with a second argument:

```html
<ul>
    @each(book in books)
        @component("parts/book", { completed: book.completed })
    @end
</ul>
```

You can also use slots in components to pass content to the component. Read about slots [in the next section](#component-slots)

## Component slots
Component slots is a very common feature in most template languages and frameworks like Vue.js or Laravel Blade. Textwire has named and default slots that you can use to pass content to a component.

There are 2 types of slots in Textwire, default and named slots. To pass and define a default slot you use `@slot` directive. To pass and define a named slot you use `@slot("some-name")` directive. Let's see an example of using slots in a component:

```html
<!-- components/book.tw.html -->
<div class="book">
    @slot

    <h1>{{ book.title }}</h1>
    <p>{{ book.description }}</p>

    @slot('footer')
</div>
```

We can now use `book.tw.html` component in our Textwire files like this:

```html
<!-- home.tw.html -->

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