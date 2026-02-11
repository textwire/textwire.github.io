---
title: FAQ - v3
description: Find answers to common questions and helpful tips in our FAQ section. Get quick solutions to common issues and learn more about our services
---

# Frequently Asked Questions (FAQ)
Welcome to our FAQ page, where we address the most common questions and concerns about using Textwire. Whether you’re new to **Textwire** or a seasoned user, the FAQ is designed to provide quick and helpful answers to your most pressing queries.

Here, you’ll find explanations, solutions to common problems, and best practices to make the most of your experience. If you don’t find the answer you’re looking for, feel free to reach out to us by creating an [issue on GitHub](https://github.com/textwire/textwire.github.io/issues/new) and we’ll be happy to help and update the FAQ with your question to help others.

## What Exactly is Textwire?
Textwire is a domain-specific language designed to be used with Go. Unlike other Go templating engines I've used, Textwire provides the joy and flexibility needed for frontend development. It is a simple and stable language that should be used for your app. See how to [Get Started](/v3/get-started) with Textwire.

## How Does Textwire Parse Files?
Textwire has its own unique chain of turning your text files into final output. We do it in 4 steps:

1. **Tokenizing** your Textwire template into tokens.
2. **Parsing** turns tokens into [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) nodes.
3. **Linking** connects related AST nodes to each other.
4. **Evaluating** turns connected AST nodes into final text output.

All non-Textwire-specific parts of the text file are treated as plain text and are not parsed as HTML, XML, or any other format. They remain unmodified in the final output, including whitespace preservation. Only Textwire-specific parts are processed:

```textwire :no-line-numbers
<h1>Textwire seems cool</h1>
{{ "Hello, World!".upper() }}
<p>I would use it in production<p>
```

In the example above, only <code v-pre>{{ "Hello, World!".upper() }}</code> part will be evaluated. That's why Textwire is fast, as it only parses the parts that are necessary and leaves the rest as is.

## Is Textwire a Templating Engine?
Textwire is not exactly a templating engine. It is a Domain-specific language (DSL) written in Go. It is designed to be used with Go programs to provide elegant and easy-to-use syntax for working with frontend. It's a good alternative to other templating engines for Go since it's performant and optimized.

## Prevent Visitors from Seeing Error
When an error occurs in your function, the output may be incorrect or misleading. Displaying faulty output to users can result in confusing information, broken layouts, or unintentional exposure of sensitive data.

Hiding incorrect output when errors occur ensures that visitors only see validated, correct content, maintaining both data integrity and user trust while preventing potential security risks.

## The Difference Between Directives and Statements
Directives and statements are the core of Textwire language. They are used to define the structure and behavior of your text files. However, there are some key differences between them:

- All directives are statements, but not all statements are directives
- Directives start with the `@` symbol, while statements are a general term for parts of code that perform an action and do not return a value

:::info Read More
You can read about statements in the [Statements](/v3/language-elements/statements) section of the documentation.
:::

For example, `{{ x = 5 }}` is a statement that assigns the value `5` to the variable `x`. On the other hand, `@use('~main')` is a directive and a statement at the same time, as it includes the layout `main` in the current file and doesn't return a value.
