---
title: Error Handling - v3
description: Learn how to handle errors in Textwire, enabling you to identify and resolve issues in your project
outline: [2, 4]
---

# Error Handling

Textwire provides a simple and user-friendly API, but errors can still occur during template processing, evaluation, or configuration. This guide covers error handling patterns to help you identify and resolve issues effectively.

## Common Error Scenarios

Textwire returns detailed error messages to help identify and resolve issues quickly. Here are several common error types:

- **Incorrect Argument Types**: Passing wrong type arguments to functions (e.g., integer to string function)
- **Division by Zero**: Attempting division by zero
- **Undefined Functions**: Using non-existent functions
- **Undefined Variables**: Referencing undefined variables
- **Undefined `@insert` Statements**: Using undefined insert names in layouts
- **Duplicate `@insert` or `@slot` Statements**: Multiple definitions with same name
- **Invalid Layout File Paths**: Specifying non-existent layout paths like `@use('dir/something')`

## Error Handling in Go

Error handling in Textwire occurs in your Go code. Most functions return standard Go `error` types that you handle with typical Go error checking patterns.

### Basic Error Handling

```go
inp := "{{ name.split(1) }}"

out, err := textwire.EvaluateString(inp, map[string]any{
    "name": "Amy Adams",
})

if err != nil {
    log.Printf("String evaluation failed: %v", err)
}
```

The [split](/v3/functions/str#split) function requires a string argument, not an integer. When incorrect argument types are passed, Textwire returns an error from the `EvaluateString` function. You will get an error: `String evaluation failed: [Textwire ERROR:1]: first argument for function 'split' on type 'string' must be a string`.

### Common Error Handling Patterns

::: code-group

```go [Func register]
lowerFn := func(s string, args ...any) any {
    return strings.ToLower(s)
}

if err := textwire.RegisterStrFunc("_lower", lowerFn); err != nil {
    log.Fatal(err)
}
```

```go [Template create]
tpl, err := textwire.NewTemplate(config)
if err != nil {
    log.Fatal(err)
}
```

```go [Template eval]
out, err := textwire.EvaluateString(input, data)
if err != nil {
    log.Printf("Evaluation error: %v", err)
}
```

```go [Web handler]
func homeHandler(w http.ResponseWriter, r *http.Request) {
    if err := tpl.Response(w, "views/home", data); err != nil {
        log.Println(err)
    }
}
```

:::

:::danger Don't Double-Handle Errors
When `tpl.Response()` returns an error, Textwire has already rendered an error page. Don't call `http.Error()` as it will inject plain text and corrupt the HTML **exposing error message in production**. Just log the error to the console, not browser:

```go
if err := tpl.Response(w, "views/home", data); err != nil {
    log.Println(err)  // [!code highlight]
}
```
:::

You don't need to crash the program in your handlers because Textwire will render error page for users. You can read how to customize error pages [here](/v3/api/error-handling#custom-error-pages).

## Error Pages

### Debug Mode

When you enable `DebugMode` in Textwire, detailed error messages display in the browser. This helps during development:

![Debug mode error page in Textwire](/images/debug-error-page.png)

### Production Errors

When `DebugMode` is `false`, Textwire shows user-friendly error pages instead of detailed error messages.

#### Default Behavior

Without custom configuration, Textwire displays a pre-defined static HTML page:

![Production error page in Textwire](/images/oops.png)

#### Custom Error Pages

You can replace the default error page with your own design.

:::warning Debug Mode Only
Custom error pages only appear when `DebugMode` is `false`. Debug mode always shows detailed error information. Don't forget to disable debug mode in production.
:::

##### Configuration

Set `ErrorPagePath` in your configuration:

```go
import (
	"os"
	"github.com/textwire/textwire/v3"
	"github.com/textwire/textwire/v3/config"
)

func main() {
    tpl, err := textwire.NewTemplate(&config.Config{
        ErrorPagePath: "error-page",
        DebugMode:     os.Getenv("ENV") == "development",
    })
}
```

With default `TemplateDir` of `"templates"`, the error page loads from `templates/error-page.tw`. If your `TemplateDir` is set to something like `src`, Textwire searches for `src/error-page.tw`.

##### Creating a Custom Error Page

Use layouts and Textwire syntax. You can access [global data](/v3/api/configurations#global-data) variables:

```textwire
@use('~main')

@insert('title', 'Error')

@insert('content')
    <h1>Oops!</h1>
    <p>Something went wrong.</p>
    <p>&copy; {{ global.year }} My Company</p>
    <p><a href="/">Go back to home</a></p>
@end
```

Save this file in your templates directory (e.g., `templates/error-page.tw`).

:::info Security Considerations
Hiding detailed errors in production protects against information disclosure. This maintains data integrity and security. Read more in the [FAQ section](/v3/faq#prevent-visitors-from-seeing-error).
:::

If the custom error page is missing or has errors, Textwire falls back to the default production error page.

## Best Practices

1. **Always check errors** from Textwire functions
2. **Log errors appropriately** for debugging and monitoring
3. **Use custom error pages** in production for better user experience
4. **Enable debug mode** only during development with `os.Getenv("APP_DEBUG")` or something similar
5. **Handle web errors gracefully** without exposing internal details to users
