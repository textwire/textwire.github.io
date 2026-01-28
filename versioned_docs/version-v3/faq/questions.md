---
title: Questions - v3
sidebar_label: Questions
sidebar_position: 2
description: Find answers to frequently asked questions about Textwire, including its purpose, usage, and how it differs from templating engines
---

# Questions

## What exactly is Textwire?
Textwire is a programming language designed to be used with Go programs. Since Go doesn't have a simple and easy to use template language, Textwire was created to fill that gap. It is a simple and easy to use language that can be used with any text files.

## How does Textwire parse text files?
Textwire has its own lexing and parsing engine that is used to parse text files. It reads the text file line by line and converts it into a tree of nodes. Each node represents a part of the text file and can be used to generate the final output.

All the non-Textwire specific parts of the text file are not parsed as HTML, XML or any other format. They are treated as plain text and are not modified in any way. Even whitespace in your text is preserved in the final output. The only parts that are parsed are the Textwire specific parts, like directives and expressions like:

```textwire
{{ "Hello, World!".upper() }}
```

That's why Textwire is fast and efficient, as it only parses the parts that are necessary and leaves the rest as is.

## Is Textwire a templating engine?
Textwire is not exactly a templating engine. It is a Domain-specific language (DSL) written in Go. It is designed to be used with Go programs to provide elegant and easy to use syntax for working with front-end. It's a good alternative to other templating engines for Go since it's performant and optimized.

## Why is it best to prevent visitors from seeing function output when an error occurs?
When an error occurs in your function, the output may be incorrect or misleading. Displaying faulty output to users can result in confusing information, broken layouts, or unintentional exposure of sensitive data.

Hiding incorrect output when errors occur ensures that visitors only see validated, correct content, maintaining both data integrity and user trust while preventing potential security risks.

## What is the difference between directives and statements in Textwire?
Directives and statements are the core of Textwire language. They are used to define the structure and behavior of your text files. However, there are some key differences between them:

- All directives are statements, but not all statements are directives
- Directives start with the `@` symbol, while statements are a general term for parts of code that perform an action and do not return a value

:::note
You can read about statements in the [Statements](/docs/v3/language-elements/statements) section of the documentation.
:::

For example, `{{ x = 5 }}` is a statement that assigns the value `5` to the variable `x`. On the other hand, `@use('~main')` is a directive and a statement at the same time, as it includes the layout `main` in the current file and doesn't return a value.
