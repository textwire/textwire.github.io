---
title: Introduction - v2
description: Get an overview of Textwire, a powerful template evaluator for Go developers, and learn about its features, syntax, and various use cases
---

# Introduction
Textwire is a domain-specific language (DSL) tailored for Go projects, designed to effortlessly embed dynamic content into text-based formats like HTML, XML, JSON or any other text-based format that you can think of.

Built specifically for Go, Textwire offers a clean and intuitive syntax that makes injecting variables and logic into any text-based format simple and efficient.

:::info Syntax Highlighting
If you use Neovim or VSCode code editor, you can use our [Neovim plugin](https://github.com/textwire/textwire.nvim) or [VSCode extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire) to get syntax highlighting and other features for Textwire.
:::

With Textwire, seamlessly integrate dynamic content into your HTML files, enabling the creation of data-driven, responsive pages with ease.

The syntax is designed to be familiar and easy-to-learn, especially for developers with experience in other template languages. Visit the [Language Elements](/v2/language-elements/syntax) page to explore the full range of available statements and directives for your templates.

You can use Textwire in three versatile ways:
1. [As a templating engine for web applications](/v2/guides/template-usage)
2. [To embed dynamic content into a string](/v2/guides/eval-string)
3. [To embed dynamic content into a file](/v2/guides/eval-file)

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

## Mathematical Expressions
Textwire operates similar to Go when it comes to mathematical expressions. You can use the following operators in your templates:
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
You cannot mismatch types when performing mathematical operations. For example, you cannot add an integer to a float directly. You need to convert one of the types to match the other using type conversion functions like `<your float>.int()`, `<your int>.float()`, etc.
:::
