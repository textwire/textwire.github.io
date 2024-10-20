---
title: "Introducing Textwire: A Domain-Specific Language for Go"
description: "We are very happy to introduce Textwire to help you work with templates in Go"
authors: [serhiicho]
image: ./cover.png
tags: [story]
---

![Introducing Textwire: A Domain-Specific Language for Go](./cover.png)

What was the motivation to create Textwire? How does it work? What are the benefits of using it and should you use it in your next Go project? In this article, we will answer these questions and more.

<!-- truncate -->

## What's Textwire?

**Textwire is a domain-specific language (DSL) for Go that provides a simple and flexible declarative syntax on the front end.** It allows you to write business logic in Go on the backend and pass the processed data to Textwire templates.

To give you a feeling of how Textwire looks, here is an example of a simple template:

```html title="index.tw.html"
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

As you can see, the syntax is straightforward and easy to understand. You can also use else-if statements, loops, components, and more, making Textwire an excellent choice for template management in Go.

## Why Textwire over other template engines?

**Textwire is not only a template engine similar to other engines in Go, but it also provides a way to evaluate strings or files containing Textwire code.** That means you can use Textwire to sprinkle some logic into your email templates, markdown files, or any other text-based content.

