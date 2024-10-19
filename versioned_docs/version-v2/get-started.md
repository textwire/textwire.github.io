---
sidebar_position: 1
---

# Getting Started

Welcome to Textwire, a powerful template evaluate designed for Go developers. Textwire provides a seamless way to inject variables into your HTML files, making it easier to create dynamic and data-driven content.

Textwire has an elegant and easy-to-use syntax that is designed to be familiar to developers who have experience with other template languages. On the [Language Elements](/docs/v2/language-elements/) page you can find all the available statements and directives that you can use in your Textwire templates.

## What is Textwire?
Textwire is a dynamic templating and scripting language for Go. It is designed to be ideal for embedding dynamic content in text-based formats such as HTML, XML, etc.

Textwire is build specifically for Go projects and provides a simple and easy-to-use syntax for injecting variables and logic into any text-based format.

Textwire can be used in 3 ways:
1. [As a templating engine for web applications](/docs/v2/guide/template-usage)
2. [As a method to embed dynamic content into a string](/docs/v2/guide/eval-string)
3. [As a method to embed dynamic content into a file](/docs/v2/guide/eval-file)

Here is a simple example of a Textwire template:

```html title="home.tw.html"
@use("layouts/main")

@insert('title', 'Welcome to Home Page')

@insert('content')
    <h1>Home Page</h1>
    <p>This is the home page content</p>

    <div>
        @each(book in books)
            @component('components/book', { book })
        @else
            <h2>No books found</h2>
        @end
    </div>
@end
```

Textwire focuses on simplicity and ease of use while providing powerful features such as layouts, components, and directives. Read the next section for installation instructions.

## Installation

Install the Textwire package in your Go environment. You can do this by running the following command:

```bash
go get -u github.com/textwire/textwire/v2
```