---
title: Pass Directive - v6
description: Learn about the @pass directive in Textwire
---

# @pass

The `@pass` directive sends content into component slots. Think of it as "passing" content to a component. There are two types:

1. **Default pass**: Content not wrapped in `@pass` goes to the default `@slot`
2. **Named pass**: Content inside `@pass("name")` goes to the named `@slot("name")`

Here's an example showing how to pass content to a component:

```textwire :line-numbers
@each(book in books)
    @component("~book", { book })
        <img src="{{ book.image }}" alt="{{ book.title }}">

        @pass('footer')
            <small>published by {{ book.author }}</small>
        @end
    @end
@end
```

In this example:
- The `<img>` tag goes to the **default slot** in the component
- The `<small>` tag inside `@pass('footer')` goes to the **named slot** called "footer"

## How It Works

The component file (`components/book.tw`) defines slots that receive this content:

**Default slot receives:**
```textwire
<img src="{{ book.image }}" alt="{{ book.title }}">
```

**Named slot 'footer' receives:**
```textwire
<small>published by {{ book.author }}</small>
```

See the [@slot](/language-elements/directives/slot) section for how to define slots in components.

## Important Notes

- **Duplicate names not allowed.** Defining multiple passes with the same name in a single component will result in an error.
- **Cannot use empty string as a name.** If you provide an empty string as a name for `@pass` or `@passif`, you'll get an error.
- **Passes have current context.** Passes have the context of the same file where they are defined. It means you can dynamically modify the content of a pass before it gets rendered in the component file.
- **Passes are optional.** If you don't provide content for a slot, it will be rendered as an empty string.
- **Name is a constant.** The first argument (name) is the constant, it cannot be dynamic, only literal strings are allowed.
