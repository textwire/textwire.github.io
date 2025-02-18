---
title: Introduction - v2
sidebar_label: Introduction
sidebar_position: 1
description: Get an overview of Textwire, a powerful template evaluator for Go developers, and learn about its features, syntax, and various use cases
---

# Introduction
Textwire is a domain-specific language (DSL) tailored for Go projects, designed to effortlessly embed dynamic content into text-based formats like HTML, XML, JSON or any other text-based format that you can think of.

Built specifically for Go, Textwire offers a clean and intuitive syntax that makes injecting variables and logic into any text-based format simple and efficient.

:::info VSCode Extension
If you use VSCode code editor, you can use our [VSCode extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire) to get syntax highlighting and other features for Textwire.
:::

With Textwire, seamlessly integrate dynamic content into your HTML files, enabling the creation of data-driven, responsive pages with ease.

The syntax is designed to be familiar and easy-to-learn, especially for developers with experience in other template languages. Visit the [Language Elements](/docs/v2/language-elements/) page to explore the full range of available statements and directives for your templates.

You can use Textwire in three versatile ways:
1. [As a templating engine for web applications](/docs/v2/guides/template-usage)
2. [To embed dynamic content into a string](/docs/v2/guides/eval-string)
3. [To embed dynamic content into a file](/docs/v2/guides/eval-file)

Here is a simple example of a Textwire template:

```textwire title="home.tw"
@use('~main')

@insert('title', 'Welcome to Home Page')

@insert('content')
    <h1>Welcome to Textwire</h1>
    <p>Our team along with {{ user.name }} are glad to see you!</p>

    <div>
        @each(book in books)
            @component('~book', { book })
        @else
            <h2>No books found</h2>
        @end
    </div>
@end
```

Click the "Next" button below to learn more about Language Elements in Textwire.
