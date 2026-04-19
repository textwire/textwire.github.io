---
title: JavaScript - v5
description: Learn how Textwire works together with JavaScript frameworks and how to avoid conflicts between them
outline: deep
---

# JavaScript

Textwire templates often work alongside JavaScript frameworks like Vue, React, or Alpine.js. Since these frameworks use similar syntax (<code v-pre>@</code> directives and <code v-pre>{{ }}</code> braces), you'll need to handle conflicts carefully.

This guide shows you how to escape Textwire code when needed and how to pass data from Textwire to your frontend frameworks.

## Escaping

JavaScript frameworks often use the `@` symbol or <code v-pre>{{ }}</code> for their own purposes. To avoid conflicts, you escape it with a backslash `\`. Escape Textwire code by prefixing it with a backslash (`\`). For example:

```textwire
<p>\{{ posts.length }}</p>
<p>\@use("~base")</p>
```

will be rendered as:

```html
<p>{{ posts.length }}</p>
<p>@use("~base")</p>
```

## Passing JSON to JavaScript

When you need to pass a JSON object from Textwire to JavaScript frameworks using props, you can use the [camel](/v5/functions/obj#camel) function to convert object keys to camel case and [json](/v5/functions/obj#json) function to convert the object to a JSON string. Example:

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
