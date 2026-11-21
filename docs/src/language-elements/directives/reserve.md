---
title: Reserve Directive - v6
description: Learn about the @reserve directive in Textwire
---

# @reserve

When defining a layout file for your template, you can reserve placeholders for dynamic content. These placeholders can be used for elements such as the title, content, sidebar, footer, and more. Below is an example of how to use the `@reserve` directive:

```textwire
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@reserve("title")</title>
</head>
<body>
    @reserve("content")
</body>
</html>
```

## Fallback Argument

As a second argument, `@reserve` can also take a fallback value that will be used if no corresponding `@insert` is defined in the template. The fallback is HTML-escaped the same way as <code v-pre>{{ }}</code>. Use [`raw()`](/functions/global#raw) when the fallback is trusted HTML. Example:

```textwire
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@reserve("title", "Welcome to Textwire")</title>
</head>
<body>
    @reserve("content", "There is nothing here")
</body>
</html>
```

Values inserted into a reserved placeholder are escaped when they are defined in `@insert`, so `@reserve` prints them as they are.

## Can be passed to components

If you want to pass the value of `@reserve` from layout into a component, you can pass it using [passes](/language-elements/directives/pass). Example:

```textwire
@component('header')
    @pass('title')@reserve('title')@end
@end
```

## Important Notes

- **Name is a constant.** The first argument (name) is the constant, it cannot be dynamic, only literal strings are allowed.
- **Only in layout files.** `@reserve` can only be used inside layout file. Using it in templates and components will result in error.
- **`@insert` is optional.** `@reserve` does not force you to have a matching `@insert`. If you don't insert any value into `@reserve`, it will fallback to an empty string.
- **One `@reserve` per name.** You cannot define multiple `@reserve` directives with the same name in a single layout file. It will result in an error starting from version [v5.1.0](https://codeberg.org/textwire/textwire/pulls/68).
