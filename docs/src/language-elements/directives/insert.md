---
title: Insert Directive - v6
description: Learn about the @insert directive in Textwire
---

# @insert

The `@insert` directive lets you insert (inject) content into placeholders defined by the [`@reserve`](/language-elements/directives/reserve) directive in your layout file. This feature enables flexible template structuring and reusability.

Below is an example demonstrating two scenarios for the `@insert` directive with a content body and without:

```textwire
@use("layouts/main")

{{-- Without a content body --}}
@insert("title", "Home page")

{{-- With a content body --}}
@insert("content")
    <h1>Hello, World!</h1>
    <p>This is a home page.</p>
@end
```

## Important Notes

- **Name is a constant.** The first argument (name) is the constant, it cannot be dynamic, only literal strings are allowed.
- **Two arguments.** `@insert` accepts the name of the reserved placeholder and an optional content argument.
- **Values are escaped.** The short-form content argument is HTML-escaped the same way as <code v-pre>{{ }}</code>. Use [`raw()`](/functions/global#raw) for trusted HTML, or the block form for markup.
- **Evaluated in template context.** All inserts are evaluated within the template file first, and next, they are matched to placeholders defined by the [`@reserve`](/language-elements/directives/reserve) directives in the layout file. It means they have the context of the file where they are defined.
- **Requires matching reserve.** If you define an insert without having a matching reserve, it will result in error. Such inserts are considered unused.
- **Names must be unique.** You cannot define multiple inserts with the same name in a single file. It will result in error.
- **Requires `@use`.** `@insert` requires an `@use` directive in the same file, otherwise you'll get an error.
