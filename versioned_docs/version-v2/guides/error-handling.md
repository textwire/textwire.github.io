---
title: Error Handling - v2
sidebar_label: Error Handling
sidebar_position: 6
description: Learn how to handle errors in Textwire, enabling you to identify and resolve issues in your project
---

# Error Handling
One of the main focuses of Textwire is to provide a simple and easy-to-use API for developers. However, errors can still occur in your project. In this guide, you will learn how to handle errors in Textwire, enabling you to identify and resolve issues in your project.

## When does an error occur?
If you call a function on a value that doesn't support that function, Textwire will return an error. Whether you use Textwire to parse a string or a file, you will get an error returned. Some example cases where errors can occur in Textwire are:

- **Passing the wrong argument type to a function.** For example, passing an integer to a function that expects a string
- **Dividing by zero.** This is a well known error in programming, and Textwire will result in an error if you try to divide by zero
- **Using a function that doesn't exist.** You'll get a detailed error message if you try to use a function that doesn't exist in Textwire
- **Using a variable that doesn't exist.** If you try to use a variable that doesn't exist, Textwire will return an error
- **Using a function on a value that doesn't support that function.** If you try to use a function on a value that doesn't support that function, Textwire will return an error

## Handling errors in Textwire
Handling errors in Textwire are handled in you Go code. Let's say you are evaluating a string that contains Textwire code with the incorrect function usage:

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

## What Happens to the Output?
- **Single File or String Evaluation**: If an error occurs while evaluating a single file or string, the output will be empty.
- **Templating System**: When using Textwire as a **templating system**, an error page will be rendered instead. This is a static HTML page displayed when an error occurs.

The error page is fully customizable, and you can configure its path in the [configuration](/docs/v2/guides/configurations).

:::info
When an error occurs, we cannot serve you the output to the frontend. The wrong usage of functions will lead to wrong function output, which can result in wrong data being displayed on the frontend. For better security and data integrity, the best way is to prevent the user of your site to see the output. You can read more about this [here in the FAQ section](/docs/v2/faq/questions#why-its-best-to-prevent-visitors-of-your-site-from-seeing-the-result-of-the-function-output-when-an-error-occurs).
:::

### Error output in Production
When something goes wrong with your Textwire code, you'll get pre-defined HTML with the static message displayed. This is what people would see when your app is in production:

![Error output in Textwire](/img/oops.png)

### Error output in Debug Mode
When you enable the `DebugMode` in Textwire, you can see the error message in the browser. This is useful when you are developing your application and want to see the error message in the browser. This is what you would see when the `DebugMode` is set to `true`:

![Error output in Textwire](/img/debug-error-page.png)

### Custom Error Page