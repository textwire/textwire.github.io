---
title: Upgrade Guide - v4
description: Learn how to upgrade your Textwire code from v3 to v4
outline: deep
---

# Upgrade Guide

Textwire 4 is a major update with breaking changes that not only changes the way to work with components but also the way blocks are processed by the parser. This update focuses on making Textwire more mature and flexible for production use, while also improving error handling for directives. This guide covers the breaking changes and provides step-by-step migration instructions.

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

In v4, `time.Time` values from Go are now automatically converted to datetime strings using `2006-01-02 15:04:05` layout. Previously, they were converted to empty objects `{}`.

**Before (v3 output):**

```textwire
{{ createdAt }} {{-- Outputs: {} --}}
```

**After (v4 output):**

```textwire
{{ createdAt }} {{-- Outputs: 1990-12-23 11:22:33 --}}
```

If you need custom formatting, use [formatDate](/v4/functions/global#formatdate) global function.

## 7. New Syntax for Components
### 1. No Default `@slot` For Components

The way you were passing default slots from components into component files was like this:

```textwire
@component('user')
    @slot
        <h2>This is a user</h2>
    @end
@end
```

You had to wrap default content with `@slot` directive. In version 4, you don't need to do it. You can just do it like that:

```textwire
@component('user')
    <h2>This is a user</h2>
@end
```

That's the only way of passing default slot right now. Check your codebase for `@component(` and see if you are using `@slot` for default value passing. Don't confuse them with `@slot` directive inside of your component files. Here is a bash command that will help you to find all `@slot` occurrences assuming that your templates in `templates/` directory.

```bash
grep -r '@slot' templates/
```

### 2. Directive `@slot` is now `@pass`

We renamed slots that are used to pass content into component files from `@slot` and `@slotif` to `@pass` and `@passif` to prevent interference with slots inside of `components` directive. So if you have something like this:

```textwire
@component('user')
    @slot('header')
        <h2>This is a user</h2>
    @end
    @slotif(true, 'footer')
        <footer>content</footer>
    @end
@end
```
You need to change it to:

```textwire
@component('user')
    @pass('header')
        <h2>This is a user</h2>
    @end
    @passif(true, 'footer')
        <footer>content</footer>
    @end
@end
```

You can use this bash command to search for your named slots

```bash
grep -r '@slot(' templates/
```

Don't rename slots that are placeholders in your component files, they should keep being `@slot('name')`.

## 8. Blocks are Trimmed by Default

All blocks in Textwire are now left and right trimmed, it should not effect your HTML because HTML ignores whitespace, but it can effect your string outputs. If you have something like this:

```textwire
@insert('content')
    <h1>Header</h1>
@end
```

This insert block has `\n    <h1>Header</h1>\n` content. In previous versions, your reserve would receive exactly that, but in v4, the content is trimmed to `<h1>Header</h1>`. It applies to blocks for `@component`, `@insert`, `@pass`, `@passif` `@if`, `@each` and `@for` loops.

## Verification Checklist

After completing the migration:

1. <input type="checkbox"> All imports changed from `v3` to `v4`
2. <input type="checkbox"> `go mod tidy` runs without errors
3. <input type="checkbox"> All `@breakIf` renamed to `@breakif`
4. <input type="checkbox"> All `@continueIf` renamed to `@continueif`
5. <input type="checkbox"> Postfix operators used correctly (not as expressions)
6. <input type="checkbox"> Error handling updated for `*fail.Error`
7. <input type="checkbox"> `time.Time` values display correctly as datetime strings
8. <input type="checkbox"> Project prints proper strings with `{{ }}` braces
9. <input type="checkbox"> For passing default slots, we don't use `@slot` directive, we just passing them inside of a component's block (body)
10. <input type="checkbox"> All `@slot('name')<some content>@end` directives inside of a component block (body) are renamed to `@pass('name')<some content>@end`
11. <input type="checkbox"> Project compiles successfully

## Need Help?

- Review the [Error Handling Guide](/v4/api/error-handling) for details on `*fail.Error`
- Check the [Statements Reference](/v4/language-elements/statements#postfix-operations) for postfix operator usage
- Open [GitHub Issue](https://github.com/textwire/textwire/issues) and we will help
