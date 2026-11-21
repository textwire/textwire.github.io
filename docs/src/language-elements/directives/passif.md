---
title: Passif Directive - v6
description: Learn about the @passif directive in Textwire
---

# @passif

`@passif` directive combines `@pass` and `@if` directives making it possible to conditionally render content. It takes a condition as the first argument and a pass name as the second argument. If the condition is truthy, the content of the pass will be rendered; otherwise, it will be ignored.

Here’s an example of how to use conditional passes in a component. Example:

```textwire :line-numbers
@each(book in books)
    @component("~book", { book })
        @passif(hasFooter, 'footer')
            <small>published by {{ book.author }}</small>
            <button>Read more</button>
        @end
    @end
@end
```

## Important Notes

- **Same rules.** All the rules from [@pass](/language-elements/directives/pass) apply to `@passif`.
