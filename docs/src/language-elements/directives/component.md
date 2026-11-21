---
title: Component Directive - v6
description: Learn about the @component directive in Textwire
---

# @component

The `@component` directive allows you to include reusable code within your templates. Components help organize and structure templates by encapsulating reusable parts of your UI.

To use components in Textwire, create a `components` directory inside your templates and store your component files there. You can then include a component in your template using the `@component` directive. Example:

## Example of a Component File

Define a component file in `templates/components` directory.

```textwire
<div class="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
</div>
```

## Example of Using a Component

To include your component use `@component` directive with first argument being the path to your component relative to `templates` directory.

```textwire
<div class="posts">
    @each(post in posts)
        @component("components/post-card", { post })@end
    @end
</div>
```

The first argument of the `@component` directive is a path to the component file relative to the `TemplateDir` parameter that you set in the config.

The second optional argument is an [object](/language-elements/literals/object) literal that will be passed to the component file. Here is another example of using a component with a second argument:

```textwire
<ul>
    @each(book in books)
        @component("parts/book", { completed: book.completed })@end
    @end
</ul>
```

## Important Notes

- **Always must be closed.** Component directive always requires to be closed with the `@end` directive.
- **Name is a constant.** The first argument (name) is the constant, it cannot be dynamic, only literal strings are allowed.
- **Argument must be an object literal.** Second argument for components must be an object literal. If you provide a non-object literal, it will result in an error.
- **Layout for components.** You can include layout file into components using [`@use`](/language-elements/directives/use) directive, but it can make your templates more complex and harder to maintain. We recommend to avoid using layouts in components and keep them simple.
<!--@include: @/.vitepress/parts/language-elements/component-as-layout.md-->
- **Use passes to pass data.** You can use [@pass](/language-elements/directives/pass) and [@passif](/language-elements/directives/passif) in components to pass content to the component file.
- **Use path alias.** If your components are located in the `components` directory, you can use the `~` alias to reference them. Read about [Path Aliases](/faq#what-are-the-path-aliases).
- **Can't use loop control directives.** A component body is supplying content for a slot, it doesn't own the loop it's sitting in, so it can't reach back and kill it with [loop control directives](/language-elements/loops#break-and-continue) like `@break`.
- **Nesting depth is limited to 500.** Components can be nested at most 500 levels deep during a single render. A component that includes itself, directly or through other components, stops with an error instead of crashing the program with a stack overflow. Components rendered one after another, like inside of a loop, don't count toward the limit. If you need a different limit, change the [`MaxComponentDepth`](/api/configurations#available-configurations) configuration.
