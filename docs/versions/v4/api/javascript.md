---
title: JavaScript - v4
description: Learn how Textwire works together with JavaScript frameworks and how to avoid conflicts between them
outline: deep
---

# JavaScript

Textwire templates often work alongside JavaScript frameworks like Vue, React, or Alpine.js. Since these frameworks use similar syntax (<code v-pre>@</code> directives and <code v-pre>{{ }}</code> braces), you'll need to handle conflicts carefully.

This guide shows you how to escape Textwire code when needed and how to pass data from Textwire to your frontend frameworks.

## Escaping

JavaScript frameworks often use the `@` symbol or <code v-pre>{{ }}</code> for their own purposes. To avoid conflicts, you escape it with a backslash `\`.

For example, `\@if(x == 1)` and <code v-pre>\\{{ x = 1 }}</code> will not be parsed as Textwire directives or embedded code. Textwire will remove the backslash and output `@if(x == 1)` and <code v-pre>{{ x = 1 }}</code> as-is in the final HTML, allowing JavaScript frameworks to handle them.

## Passing JSON through props

When you need to pass a JSON object from Textwire to JavaScript frameworks using props, you can use the [camel](/v4/functions/obj#camel) function to convert object keys to camel case and [json](/v4/functions/obj#json) function to convert the object to a JSON string. Example:

```textwire
{{ post = {
    Title: "Securing Your Digital Life: A Programmer's Action Plan",
    URL: "https://serhiicho.com/posts/securing-your-digital-life-a-programmers-action-plan",
    CreatedAt: "Sep 18, 2025",
} }}

<post-likes :post="{{ post.camel().json() }}" />
```

In your JavaScript, you'll get this JSON:

```json
{
    "title": "Securing Your Digital Life: A Programmer's Action Plan",
    "url": "https://serhiicho.com/posts/securing-your-digital-life-a-programmers-action-plan",
    "createdAt": "Sep 18, 2025"
}
```

If you don't use `camel` function, your JSON keys will be in snake case, which may not work well with JavaScript frameworks that expect camel case. By using `camel` and `json` together, you ensure that your data is properly formatted for JavaScript consumption.
