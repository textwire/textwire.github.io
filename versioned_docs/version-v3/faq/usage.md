---
title: Usage - v3
sidebar_label: Usage
sidebar_position: 3
description: Learn how to use Textwire directives and more in your Textwire code
---

# Textwire Usage

## How do I use Textwire directives that start with the @ symbol?

Textwire has several directives that you can use anywhere directly in your text files except for `{{ }}` curly braces. Here is an example of the `@if` directive:

```textwire
<div>
    @if(isFast)
        <b>Can run</b>
    @else
        <b>Can't run</b>
    @end
</div>
```

Read full information about directives [here](/docs/v3/language-elements/syntax#directives).

