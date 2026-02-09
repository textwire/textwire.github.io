---
title: "Introducing Textwire: A Domain-Specific Language for Go"
description: "We are very happy to introduce Textwire to help you work with templates in Go"
---

# Introducing Textwire: A Domain-Specific Language for Go

![Introducing Textwire: A Domain-Specific Language for Go](./cover.png)

What was the motivation to create Textwire? How does it work? What are the benefits of using it, and should you use it in your next Go project? In this article, we will answer these questions and more.

## What's Textwire?

**Textwire is a domain-specific language (DSL) for Go that offers a simple, flexible, and declarative syntax for the front end.** It enables you to handle business logic on the backend and pass the processed data to Textwire templates.

Here’s a quick example of what a basic Textwire template looks like:

```textwire title="index.tw"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My blog</title>
</head>
<body>
    @if(age < 18)
        <p>You are under 18 years old</p>
    @end
</body>
</html>
```

As shown, the syntax is clean and intuitive. You can also incorporate else-if conditions, loops, components, and more, making Textwire a powerful tool for template management in Go.

## Why Textwire over other template engines?
**Textwire is more than just another template engine for Go—it allows you to evaluate strings or files containing Textwire code.** This means you can seamlessly integrate logic into your email templates, markdown files, or any other text-based content.

Additionally, Textwire comes with a [VSCode extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire) that offers syntax highlighting and icons for Textwire files, making template development even more straightforward. Plugin for [Neovim](https://neovim.io/) is coming soon.

![Textwire VSCode extension screenshot](./custom-icons.jpg)

Here are some of the key benefits of using Textwire:
- **Error handling.** Textwire provides detailed error messages with line numbers and file names, making it easier to debug your templates
- **Performance.** Textwire is fast and has a low memory footprint, making it load pages quickly. The parsing is done at application startup, so there is no overhead during runtime
- **Flexibility.** Textwire allows you to define custom functions and components, giving you the flexibility to create complex templates with ease
- **Security.** Textwire is designed to be secure by default, preventing code injection attacks when printing user-generated content
- **Support.** Textwire is constantly being improved and updated. Which means you can rely on it for your projects
- **Good documentation.** Textwire has a comprehensive documentation that covers all the features and provides examples to help you get started

![Textwire VSCode extension screenshot](./textwire-code.jpg)

## Resources

For all the details on how to get started with Textwire, check out the [official documentation](/docs/v2/introduction). You can also find the source code on [GitHub](https://github.com/textwire/textwire). If you have any requests or suggestions that will help improve Textwire, feel free to open an [issue](https://github.com/textwire/textwire/issues/new) or submit a pull request.
