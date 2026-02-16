---
title: FAQ - v1
description: Frequently asked questions about Textwire
outline: deep
---

# FAQ

## Information

### What Exactly is Textwire?

Textwire is a templating engine for Go programming language. You do all of your business logic in Go and pass data to Textwire templates to generate dynamic content. It is designed to be fast, efficient, and easy to use.

- ✅ We're committed to performance optimization and better error handling
- ✅ Our priority is keeping the language core solid and reliable
- ❌ We steer clear of shiny features that would only add bloat

## Usage

### How Do I Use Textwire Directives That Start With @ Symbol?

Textwire has several directives that you can use anywhere directly in your text files except for `{{ }}` curly braces. Here is the example of `@if` directive:

```textwire
<div>
    @if(isFast)
        <b>Can run</b>
    @else
        <b>Can't run</b>
    @end
</div>
```
