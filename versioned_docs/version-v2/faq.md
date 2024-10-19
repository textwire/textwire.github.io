---
sidebar_position: 5
---

# FAQ

## Information

### What exactly is Textwire?

Textwire is a programming language designed to be used with Go programs. Since Go doesn't have a simple and easy to use templating language, Textwire was created to fill that gap. It is a simple and easy to use language that can be used with any text files.


### Is Textwire a templating engine?

Textwire is not exactly a templating engine. It is a separate language written in Go that comes as a package.

## Usage

### How do I use Textwire directives that start with @ symbol?

Textwire has several directives that you can use anywhere directly in your text files except for `{{ }}` curly braces. Here is the example of `@if` directive:

```html
<div>
    @if(isFast)
        <b>Can run</b>
    @else
        <b>Can't run</b>
    @end
</div>
```