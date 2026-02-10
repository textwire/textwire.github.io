---
title: FAQ - v1
description: Frequently asked questions about Textwire
outline: deep
---

# FAQ

## Information

### What exactly is Textwire?
Textwire is a programming language designed to be used with Go programs. Since Go doesn't have a simple and easy to use templating language, Textwire was created to fill that gap. It is a simple and easy to use language that can be used with any text files.


### Is Textwire a templating engine?
Textwire is not exactly a templating engine. It is a Domain-specific language (DSL) written in Go. It is designed to be used with Go programs to provide elegant and easy to use syntax for working with front-end. It's a good alternative to other templating engines for Go since it's performant and optimized.

## Usage

### How do I use Textwire directives that start with @ symbol?
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
