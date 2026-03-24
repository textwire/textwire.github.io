---
title: Upgrade Guide - v4
description: Learn how to upgrade your Textwire code from v3 to v4
outline: deep
---

# Upgrade Guide

Upgrading from Textwire v3 to v4 should be straightforward. This guide covers the breaking changes and provides step-by-step migration instructions.

For a complete overview of v4 features and changes, read the [Textwire v4 Release Blog Post](/blog/2026-03-20-textwire-v4).

## 1. Update Import Path

Replace all v3 imports with v4:

```go
import "github.com/textwire/textwire/v3" // [!code --]
import "github.com/textwire/textwire/v4" // [!code ++]
```

After updating imports, run:

```bash
go mod tidy
```

## 2. Error Handling Changes

**The biggest change in v4:** All Textwire functions now return `*fail.Error` instead of Go's standard `error` type.

### Affected Functions

| Function            | Old Return           | New Return                 |
| ------------------- | -------------------- | -------------------------- |
| `NewTemplate`       | `(*Template, error)` | `(*Template, *fail.Error)` |
| `EvaluateString`    | `(string, error)`    | `(string, *fail.Error)`    |
| `EvaluateFile`      | `(string, error)`    | `(string, *fail.Error)`    |
| `tpl.String()`      | `(string, error)`    | `(string, *fail.Error)`    |
| `tpl.Response()`    | `error`              | `*fail.Error`              |
| `RegisterStrFunc`   | `error`              | `*fail.Error`              |
| `RegisterIntFunc`   | `error`              | `*fail.Error`              |
| `RegisterFloatFunc` | `error`              | `*fail.Error`              |
| `RegisterBoolFunc`  | `error`              | `*fail.Error`              |
| `RegisterArrFunc`   | `error`              | `*fail.Error`              |
| `RegisterObjFunc`   | `error`              | `*fail.Error`              |

### Migration Example

If you're returning Textwire errors from your functions, you'll need to convert them:

**Before (v3):**

```go
func initTemplate() (*textwire.Template, error) {
    tpl, err := textwire.NewTemplate(nil)
    if err != nil {
        return nil, err // Works in v3
    }
    return tpl, nil
}
```

**After (v4):**

```go
func initTemplate() (*textwire.Template, error) {
    tpl, err := textwire.NewTemplate(nil)
    if err != nil {
        return nil, err.Error() // [!code highlight]
    }
    return tpl, nil
}
```

### Alternative: Use `*fail.Error` Throughout

If you prefer, update your function signatures to use `*fail.Error` directly:

```go
import (
    "github.com/textwire/textwire/v4"
    "github.com/textwire/textwire/v4/pkg/fail"
)

func initTemplate() (*textwire.Template, *fail.Error) {
    return textwire.NewTemplate(nil)
}
```

## 3. Rename Directives

Two directives changed from camelCase to lowercase:

| Old Name      | New Name      |
| ------------- | ------------- |
| `@breakIf`    | `@breakif`    |
| `@continueIf` | `@continueif` |

**Find and replace in your templates:**

```textwire
@breakIf(condition)    // [!code --]
@breakif(condition)    // [!code ++]

@continueIf(condition) // [!code --]
@continueif(condition) // [!code ++]
```

## 4. Postfix Statement Changes

In v4, `++` and `--` are statements, not expressions. They don't return values.

**Before (v3):**

```textwire
{{ n = 0; n++ }} {{-- Would output "1" --}}
```

**After (v4):**

```textwire
{{ n = 0; n++ }}  {{-- Outputs nothing (just increments) --}}
{{ n = 0; n + 1 }} {{-- Use this to output value --}}
```

**Note:** The `i++` in `@for` headers still works as expected:

```textwire
@for(i = 0; i < items.len(); i++)
    // This is fine
@end
```

Just don't use postfix operators where you need their return value:

```textwire
@for(i = 0; i < items.len(); i++)
    {{ i++ }}   {{-- Don't do this --}} // [!code --]
    {{ i + 1 }} {{-- Do this instead --}} // [!code ++]
@end
```

## 5. Improved String Encoding (Security Fix)

In v4, single and double quotes are now HTML-encoded. Previously, only `<> &` were encoded, leaving quotes vulnerable to XSS attacks.

**Before (v3 output):**

```textwire
{{ userInput }}
{{-- Input:  Hello "world" --}}
{{-- Output: Hello "world" --}}
```

**After (v4 output):**

```textwire
{{ userInput }}
{{-- Input:  Hello "world" --}}
{{-- Output: Hello &#34;world&#34; --}}
```

> [!WARNING] XSS Risk
> If you need unencoded output, use `raw()` with extreme caution. Never use `raw()` with user input - only for trusted hardcoded strings.

## 6. `time.Time` Handling Changes

In v4, `time.Time` values from Go are now automatically converted to datetime strings using `2006-01-02 15:04:05` layout. Previously, they were converted to empty objects <code v-pre>{}</code>.

**Before (v3 output):**

```textwire
{{ createdAt }} {{-- Outputs: {} --}}
```

**After (v4 output):**

```textwire
{{ createdAt }} {{-- Outputs: 1990-12-23 11:22:33 --}}
```

## Verification Checklist

After completing the migration:

1. <input type="checkbox"> All imports changed from `v3` to `v4`
2. <input type="checkbox"> `go mod tidy` runs without errors
3. <input type="checkbox"> All `@breakIf` renamed to `@breakif`
4. <input type="checkbox"> All `@continueIf` renamed to `@continueif`
5. <input type="checkbox"> Postfix operators used correctly (not as expressions)
6. <input type="checkbox"> Error handling updated for `*fail.Error`
7. <input type="checkbox"> `time.Time` values display correctly as datetime strings
8. <input type="checkbox"> Project compiles successfully
9. <input type="checkbox"> Project prints proper strings

## Need Help?

- Review the [Error Handling Guide](/v4/api/error-handling) for details on `*fail.Error`
- Check the [Statements Reference](/v4/language-elements/statements#postfix-operations) for postfix operator usage
- Open [GitHub Issue](https://github.com/textwire/textwire/issues) and we will help
