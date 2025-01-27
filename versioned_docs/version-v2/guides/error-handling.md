---
title: Error Handling - v2
sidebar_label: Error Handling
sidebar_position: 6
description: Learn how to handle errors in Textwire, enabling you to identify and resolve issues in your project
---

# Error Handling
Textwire aims to provide a simple and user-friendly API for developers. However, errors can still occur in your project. This guide will help you understand how to handle errors in Textwire, enabling you to identify and resolve issues effectively.

## When Do Errors Occur?
Errors in Textwire can arise from a variety of situations. For instance, calling a non-existent function will result in an error. Regardless of whether you're parsing a string or a file, errors will be returned to your Go code. Below are common scenarios that may lead to errors:

### Common Error Cases
- **Incorrect Argument Types**: Passing an argument of the wrong type to a function (e.g., passing an integer to a function that expects a string).
- **Division by Zero**: Attempting to divide by zero will result in an error.
- **Undefined Functions**: Using a function that does not exist in Textwire will trigger a detailed error message.
- **Undefined Variables**: Referencing a variable that has not been defined.
- **Unsupported Function Calls**: Calling a function on a value type that does not support it.
- **Undefined `@insert` Statements**: Using an `@insert` with a name that is not defined in the layout file.
- **Duplicate `@insert` or `@slot` Statements**: Defining the same `@insert` or `@slot` statement multiple times in a layout file with the same name.
- **Invalid Layout File Paths**: Specifying a layout file path that does not exist, such as `@use('~something')`.

Textwire will return detailed error messages in each of these scenarios, helping you quickly identify and resolve issues in your project.

## Handling errors in Textwire
Handling errors in Textwire are handled in you Go code. Let's say you are evaluating a string that contains Textwire code with an incorrect function usage:

```go
inp := "{{ name.split(1) }}"

result, err := textwire.EvaluateString(inp, map[string]interface{}{
    "name": "Serhii Cho",
})

if err != nil {
    // handle the error
}
```

The [split](/docs/v2/functions/str#split) function requires a string as an argument, not an integer. If an incorrect argument type is passed, Textwire will return an error from the `EvaluateString` function, which you can handle as needed.

In the same way you handle errors with evaluating a file or working with templating system.

## Error Page
- **Single File or String Evaluation**: If an error occurs while evaluating a single file or string, the output will be empty.
- **Templating System**: When using Textwire as a **templating system**, an error page will be rendered instead. This is a static HTML page displayed when an error occurs.

The error page is fully customizable, and you can configure its path in the [configuration](/docs/v2/guides/configurations).

:::info
When an error occurs, we cannot serve you the output to the frontend. The wrong usage of functions will lead to wrong function output, which can result in wrong data being displayed on the frontend. For better security and data integrity, the best way is to prevent the user of your site to see the output. You can read more about this [here in the FAQ section](/docs/v2/faq/questions#why-its-best-to-prevent-visitors-of-your-site-from-seeing-the-result-of-the-function-output-when-an-error-occurs).
:::

### Error in Production
When something goes wrong with your Textwire code, you'll get pre-defined HTML with the static message displayed. This is what people would see when your app is in production:

![Error output in Textwire](/img/oops.png)

### Error with Debug Mode
When you enable the `DebugMode` in Textwire, you can see the error message in the browser. This is useful when you are developing your application and want to see the error message in the browser. This is what you would see when the `DebugMode` is set to `true`:

![Error output in Textwire](/img/debug-error-page.png)

### Custom Error Page
If you want to define your own error page, you can do so by creating a new HTML file and setting the `ErrorPagePath` configuration to the path of the HTML file. You can read about configurations in the [Available Configurations](/docs/v2/guides/configurations#available-configurations) section.

This is useful when you want to display a custom error message to your users and use your own design for the error page, including the layout usage. For example, you can create a custom error page like this:

```textwire
@use('~main')

@insert('title', 'About Us')

@insert('content')
    <h1>Oops!</h1>
    <p>Something went wrong.</p>
    <p><a href="/">Go back to home</a></p>
@end
```

This file should be saved somewhere in your `templates` directory that you have specified in the configuration by `TemplateDir` key. Recommended to save it in the root of `templates` directory with the name `error-page.tw`.

Here is the example of how you can set the `ErrorPagePath` configuration:

```go
func main() {
    // ...

    tpl, err = textwire.NewTemplate(&config.Config{
        TemplateExt:   ".tw",
        ErrorPagePath: "error-page",
        DebugMode:     true,
    })

    // ...
}
```

Since `TemplateDir` is set to `templates` by default, the `ErrorPagePath` will look for the file in the `templates` directory.

:::info Custom Page and Debug Mode
Custom error pages are rendered only when `DebugMode` is set to `false`. Otherwise, the default error page will be displayed.
:::