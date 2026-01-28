---
title: Introduction - v3
sidebar_label: Introduction
sidebar_position: 1
description: Get an overview of Textwire, a powerful template evaluator for Go developers, and learn about its features, syntax, and various use cases
---

# Introduction
Textwire is a domain-specific language (DSL) tailored for Go projects, designed to embed dynamic content into text-based formats like HTML, XML, JSON or any other text-based format.

Built specifically for Go, Textwire offers a clean and intuitive syntax that simplifies the injection of variables and logic into any text-based format.

:::info Syntax Highlighting
If you use Neovim or VSCode code editor, you can use our [Neovim plugin](https://github.com/textwire/textwire.nvim) or [VSCode extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire) to get syntax highlighting and other features for Textwire.
:::

With Textwire, integrate dynamic content into HTML files to create data-driven, responsive pages.

The syntax is designed to be familiar and easy-to-learn, particularly for developers experienced with other template languages. Visit the [Language Elements](/docs/v3/language-elements/) page to explore the full range of available statements and directives for your templates.

## How to use it

You can use Textwire in three versatile ways:
1. [As a templating engine for web applications](/docs/v3/guides/template-usage)
2. [To embed dynamic content into a string](/docs/v3/guides/eval-string)
3. [To embed dynamic content into a file](/docs/v3/guides/eval-file)

Below is a simple example of a Textwire template:

```textwire title="home.tw"
@use('~main')

@insert('title', 'Welcome to Home Page')

@insert('content')
    <h1>Welcome to Textwire</h1>
        <p>Our team, along with {{ user.name }}, is pleased to welcome you!</p>

    <div>
        @each(book in books)
            @component('~book', { book })
        @else
            <h2>No books found</h2>
        @end
    </div>
@end
```

## Mathematical Expressions
Textwire operates similarly to Go when it comes to mathematical expressions. You can use the following operators in your templates:
- Addition: `+` (`a + b`)
- Subtraction: `-` (`a - b`)
- Multiplication: `*` (`a * b`)
- Division: `/` (`a / b`)
- Modulus: `%` (`a % b`)
- Parentheses: `()` (`(a + b) * c`)
- Greater than: `>` (`a > b`)
- Less than: `<` (`a < b`)
- Greater than or equal to: `>=` (`a >= b`)
- Less than or equal to: `<=` (`a <= b`)
- Equal to: `==` (`a == b`)
- Not equal to: `!=` (`a != b`)
- Increment: `++` (`a++`)
- Decrement: `--` (`a--`)
- Negation: `-` (`-a`)
- Logical NOT: `!` (`!a`)
- Logical AND: `&&` (`a && b`)
- Logical OR: `||` (`a || b`)

:::note
Type mismatching is not supported when performing mathematical operations. For example, you cannot add an integer to a float directly. Type conversion is required to match types using conversion functions such as `<your float>.int()`, `<your int>.float()`, etc.
:::
