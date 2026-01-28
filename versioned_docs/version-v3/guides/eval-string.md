---
title: Evaluating Strings - v3
sidebar_label: Evaluating Strings
sidebar_position: 3
description: Learn how to evaluate strings containing Textwire code in your Go applications
---

# Evaluating Strings

Use the `EvaluateString` function to compile and evaluate a string containing Textwire code. The function accepts a string template and a map of variables to inject. After evaluation, it returns the processed string and any error encountered.

This approach is ideal for dynamic content generation such as email templates, configuration files, or any scenario requiring template-based string processing without file-based templates. Here is an example:

```go
inp := `Hello <b>{{ name }}</b>! Congratulations on your {{ age }} birthday!`

result, err := textwire.EvaluateString(inp, map[string]any{
    "name": "Serhii",
    "age":  36,
})

if err != nil {
    log.Fatal(err)
}

// result now contains: "Hello <b>Serhii</b>! Congratulations on your 36 birthday!"
```

## Return Values

The `EvaluateString` function returns two values:

1. `string` - The evaluated template with all variables substituted
2. `error` - Any error that occurred during compilation or evaluation

## Error Handling

The function can return errors for various reasons:

- **Syntax errors** in the Textwire template
- **Undefined variables** referenced in the template
- **Type mismatches** when evaluating expressions

Always check the error value before using the result string.

## When to Use EvaluateString

Use `EvaluateString` when:

- Processing dynamic content without creating template files
- Generating email templates or notifications
- Evaluating user-provided template strings
- Creating simple template-based string transformations

For complex template hierarchies or file-based templates, consider using the template engine with `textwire.NewTemplate` instead.
