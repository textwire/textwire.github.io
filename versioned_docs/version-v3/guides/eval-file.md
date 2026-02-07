---
title: Evaluating Files - v3
sidebar_label: Evaluating Files
sidebar_position: 4
description: Learn how to evaluate files containing Textwire code in your Go applications using the EvaluateFile function
---

# Evaluating Files
Use the `EvaluateFile` function to evaluate a file containing Textwire code. The function accepts a file path and a map of variables to inject into the template. This approach is ideal for processing individual template files without setting up a full template engine.

Here is an example:

```go
path := "templates/email-template.tw"

result, err := textwire.EvaluateFile(path, map[string]any{
    "name": "Anna",
    "age":  25,
    "role": "Developer",
})

if err != nil {
    log.Fatal(err)
}

// result now contains the fully evaluated template content
```

## Good to Know
- **Confiturations** that you set with `Configure` have no effect on `EvaluateFile` and `EvaluateString`.
- You cannot use template directives like `@use`, `@insert`, `@reserve` or `@component` inside because they are specific to templates.

## Return Values
The `EvaluateFile` function returns two values:

1. `string` - The evaluated template with all variables substituted and Textwire code processed
2. `error` - Any error that occurred during file reading, compilation, or evaluation

## Error Handling
The function can return errors for various reasons:

- **File not found** - The specified path does not exist
- **Permission denied** - Insufficient file system permissions
- **Syntax errors** - Invalid Textwire syntax in the template file
- **Undefined variables** - Variables referenced but not provided in the data map
- **Type mismatches** - Incompatible data types when evaluating expressions

Always check the error value before using the result string:

```go
result, err := textwire.EvaluateFile("template.tw", data)
if err != nil {
    // handle error here
}
```

## File Path Resolution
The `EvaluateFile` function resolves file paths as follows:

- **Relative paths** are resolved from the main entry point directory
- **Absolute paths** are used as specified
- **Template directory configuration** does not affect `EvaluateFile` - it uses exact paths
- **File extensions** are not automatically added - specify the full path including `.tw`

## When to Use EvaluateFile
Use `EvaluateFile` when:

- Processing individual template files without full template engine setup
- Evaluating user-uploaded template files
- Creating one-off template evaluations
- Testing template files during development
- Building simple template-based tools

For complex applications with multiple templates, consider using the template engine with `textwire.NewTemplate` for better performance and caching.

## Best Practices
1. **Validate file paths** before evaluation to prevent path traversal attacks
2. **Handle errors gracefully** and provide meaningful error messages to users
3. **Use descriptive variable names** in data maps for better code readability
4. **Consider file permissions** when deploying applications in production
5. **Cache frequently evaluated files** for better performance in production applications
