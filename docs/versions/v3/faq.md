---
title: FAQ - v3
description: Find answers to common questions about Textwire, a templating engine for Go
---

# Frequently Asked Questions

Find answers to common questions about Textwire. If you don't find what you're looking for, feel free to [open an issue on GitHub](https://github.com/textwire/textwire.github.io/issues/new).

## What is Textwire?

Textwire is a templating engine for Go. You implement your business logic in Go and pass data to Textwire templates to generate dynamic content. It is designed to be fast, efficient, and easy to use.

- Committed to performance optimization and solid error handling
- Focused on keeping the language core reliable
- Avoids features that add unnecessary complexity

## How Does Textwire Parse Files?

Textwire processes templates in four stages:

1. **Tokenizing** - Breaks the template into tokens
2. **Parsing** - Converts tokens into [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) nodes
3. **Linking** - Connects related AST nodes
4. **Evaluating** - Generates the final text output

Non-Textwire content is treated as plain text and passes through unchanged, including whitespace. Only Textwire-specific syntax is processed:

```textwire
<h1>Welcome</h1>
{{ "Hello, World!".upper() }}
<p>Ready for production</p>
```

In the example above, only <code v-pre>{{ "Hello, World!".upper() }}</code> is evaluated. This selective parsing is what makes Textwire fast compared to other templating engines.

## Why Hide Error Output from Visitors?

When a function error occurs, the output may be incorrect or misleading. Displaying faulty output to users can result in:

- Confusing information or broken layouts
- Unintentional exposure of sensitive data
- Security vulnerabilities

For example, a function might return partial or incorrect data due to a logic error or invalid input. Displaying this to visitors negatively impacts user experience and may reveal internal system details.

By hiding incorrect output when errors occur, you ensure visitors only see validated, correct content. This maintains data integrity, user trust, and prevents potential security risks.

## Directives vs Statements

Directives and statements are fundamental elements of the Textwire language. Both define the structure and behavior of your templates, but they differ in form:

- **Directives** start with the `@` symbol (e.g., `@use`, `@if`, `@for`)
- **Statements** are expressions that perform an action but don't return a value (e.g., <code v-pre>{{ x = 5 }}</code>)

:::info Learn More
See the [Directives](/v3/language-elements/directives) section for a complete reference.
:::
