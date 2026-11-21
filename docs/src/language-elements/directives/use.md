---
title: Use Directive - v6
description: Learn about the @use directive in Textwire
---

# @use

`@use` directives allow you to specify a layout file that will be used to render the current template. This feature is useful for creating reusable layouts that can be applied to multiple templates.

Example:

```textwire
@use("layouts/main")
```

The `@use` directive accepts a string literal as its argument. This string literal should specify the path to the layout file relative to the [`TemplateDir`](/api/configurations#setting-configurations) parameter defined in the configuration. For example, if [`TemplateDir`](/api/configurations#setting-configurations) is set to `"src/templates"` and you have `layouts` directory in there, you can use the layout directive like `@use("layouts/main")`, and it will look for the layout file at `"src/templates/layouts/main.tw"`.

> [!TIP] Understanding the @use Directive
> When you use the `@use` directive, only the content inside [`@insert`](/language-elements/directives/insert) directives will be rendered; the rest of the file's content will be ignored. This is because the `@use` takes the layout file as a base instead of rendering the current file directly. During this process, all placeholders reserved in the layout file are populated with the content specified within your inserts.

## Important Notes

- **Name is a constant.** The first argument (name) is the constant, it cannot be dynamic, only literal strings are allowed.
- **Use path alias.** If your layouts are located in the `layouts` directory, you can use the `~` alias to reference them. Read about [Path Aliases](/faq#what-are-the-path-aliases).
- **Only one `@use` allowed.** Only one `@use` directive is allowed per template file. Defining multiple layouts will cause an error.
- **Recommended at the beginning.** You can place `@use` anywhere in the template, but it’s **recommended to put it on the first line** for clarity.
- **Not allowed in layouts.** Defining `@use` inside a **layout file** will always result in an error. This is intentional to keep layouts simple.
<!--@include: @/.vitepress/parts/language-elements/component-as-layout.md-->
