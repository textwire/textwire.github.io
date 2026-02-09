---
title: "v3 Release Notes"
description: "Get to know details about the Textwire v3 release by reading the complete release notes"
outline: deep
---

# v3 Release Notes

Textwire v3 is one of the most important releases, introducing several significant features and improvements. This release includes the introduction of the `global` variable object, a new [defined()](/v3/functions/global#defined) function ([#56](https://github.com/textwire/textwire/issues/56)), the ability to register custom functions for the OBJECT type, and improvements to error handling, performance ([#61](https://github.com/textwire/textwire/issues/61) [#60](https://github.com/textwire/textwire/issues/60) [#59](https://github.com/textwire/textwire/issues/59)), and usability [#35](https://github.com/textwire/textwire/issues/35).

If you are transitioning from Textwire v2, you can follow [this guide](/v3/upgrade) for all the instructions. v3 contains several breaking changes, so make sure you don't miss any parts of the guide.

### Table of Contents

- [New Features](#new-features)
- [Improvements](#improvements)
- [Bug Fixes](#bug-fixes)
- [Breaking Changes](#breaking-changes)

## New Features

Textwire v3 brings several new features to the language. Let's explore these features, starting with a new concept in Textwire - global functions.

### 1. Function `defined`

Textwire v3 introduces the global function [defined()](/v3/functions/global#defined) that returns a boolean value. This function should be used only with variables and allows you to check if a variable is defined to prevent Textwire from creating an error.

```textwire title="components/header.tw"
<header class="header">
    <h2>{{ page.title }}</h2>
    <p>{{ page.desc }}</p>

    @if(defined(user))
        <small>The user is {{ user.name }}</small>
    @end
</header>
```

Here are the commits [0a19b](https://github.com/textwire/textwire/commit/0a19b5b5d6363a2ee9c9827df25026ffab5c2e1e), [f1d3f](https://github.com/textwire/textwire/commit/f1d3fdc0736dd0892aeacfa28b5156cca0c78ac3), [264e7](https://github.com/textwire/textwire/commit/264e7ffc37a1d3bf6344fb99530be2f2b89c2081).

### 2. Global Data

In v3 you can now pass values from your Go code to any Textwire template using the global object. Here is an example of passing some values:

```go title="main.go"
import (
    "os"
    "github.com/textwire/textwire/v3"
    "github.com/textwire/textwire/v3/config"
)

tpl, err = textwire.NewTemplate(&config.Config{
    DebugMode:     true,
    GlobalData: map[string]any{
        "env":  os.Getenv("APP_ENV"),
    },
})
```

In your templates, you can access global object like this:

```textwire title="home.tw"
@if (global.env == "development")
    <p>You are currently in development mode</p>
@end
```

Read more about [Global Data](/v3/guides/configurations#global-data) in our docs, or look at the [commit](https://github.com/textwire/textwire/commit/f156f3fd2175f925652d462d75dc843a396de702).

### 3. Custom Functions for Object Type

In Textwire v2 you could define [custom functions](/v3/guides/custom-functions) for all types except objects; in v3 you can now do that. This was added with [this commit](https://github.com/textwire/textwire/commit/a225ccacaf0fc9ca62365ebfe7e715de39b067af). Here is a simple example:

```go
err := textwire.RegisterObjFunc("_addProp", func(obj map[string]any, args ...any) any {
    key := args[0].(string) // first arg
    value := args[1] // second arg
    obj[key] = value
    return obj
})
```

You can now use it in Textwire:

```go
input := `{{ obj = {name: "Anna"}; obj = obj._addProp("age", 25); obj.age }}`
result, err := textwire.EvaluateString(input, nil)
// Result: "25"
```

### 4. Embed Templates into Binary

Now, in Textwire v3 you can use Go's embedded package to embed Textwire template files into a final, compiled binary. You can read about how to use this functionality in [our docs](/v3/guides/template-embedding). But it looks something like this:

```go title="main.go" showLineNumbers
package main

import (
	"embed"

	"github.com/textwire/textwire/v3"
	"github.com/textwire/textwire/v3/config"
)

// highlight-start
//go:embed templates/*
var templateFS embed.FS
// highlight-end

func main() {
    tpl, err := textwire.NewTemplate(&config.Config{
        // highlight-next-line
        TemplateFS:    templateFS,
    })

    // other logic here ...
}
```

## Improvements

### 1. Error Handling

- Improve error handling with [this commit](https://github.com/textwire/textwire/commit/d9442c5d567d788652c03fb8efa6125c93ee5843) when trying to use `@use`, `@insert`, `@reserve` or `@component` directives in simple `EvaluateString` or `EvaluateFile` function calls. These directives are only allowed inside template files with `textwire.NewTemplate`.
- Now, you'll get a clear error message like `@use, @insert, @reserve, @component only allowed in templates` if you try to use them. Previously, the error wasn't clear.
- Improved all error messages in [this commit](https://github.com/textwire/textwire/commit/e6b0935af2d7de0469733e12028fc349564584c6) to make them clearer and more straightforward.
- You'll get a proper error instead of panic when you try to use `@each(item in false)` directive on non-array type.
- You'll get a clear error when using 2 or more `@use` statements in the same template.

There are much more improvements to error handling in this release, so make sure to [upgrade](/v3/upgrade) to version 3.

### 2. Memory Performance

Improve memory and performance with optimized data structures and reduced memory allocations. Here are the optimizations that you can expect in Textwire v3:

| Improved target                                    | Speed               | Memory usage      | Allocations        |
| -------------------------------------------------- | ------------------- | ----------------- | ------------------ |
| Function [arr.join()](/v3/functions/arr#join) | ⚡ **18.5× faster** | 💾 **97.8% less** | 📉 **33% fewer**   |
| Tokenizing (lexing) directives                     | ⚡ **1.24× faster** | 💾 **46.9% less** | 📉 **84.9% fewer** |
| Parsed AST evaluation                              | **No change**       | 💾 **9.3% less**  | 📉 **2.5% fewer**  |

Here is a GitHub [issue](https://github.com/textwire/textwire/issues/59) for `array.join()` if you are interested.

## Bug Fixes

Like any software, Textwire has its share of bugs. We found and fixed several bugs in this release. You can find the list of fixed bugs below.

### 1. Using Component Statement inside Layout

Fixed bug where you couldn't use `@component` directive inside of a layout file like this:

```textwire
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@reserve('title')</title>
    <meta name="description" content="@reserve('description')">
</head>
<body>
@component('~navbar') {{-- using components/navbar here --}}
<main class="container mx-auto max-w-200">
@reserve('content')
</main>
</body>
</html>
```

You also couldn't use `@component` inside of other components. Now, it all has been fixed.

### 2. Incorrect File Path

Fixed incorrect file path in error messages when an error occurs inside the `@insert` directive. It used to point to the wrong file.

### 3. Function `contains()`

- Fixed `contains` function for strings, `&lbrace;{ !"aaa".contains("a") }}` now returns correct result.
- Fixed `contains` function for arrays, `&lbrace;{ ![{}, 21].contains({age: 21}) }}` now returns correct result.
  They both used to work incorrect because of incorrect precidence, which was fixed.

### 4. Replace Panic with Error

Now you will get a proper error when trying to access propery on non object type like `&lbrace;{ "str".nice }}`. Before, in Textwire v2 you would get a panic with weird error message and long stacktrace.

## Breaking Changes

Textwire v3 introduces several breaking changes. We're implementing these changes now rather than later, as it's better to make significant updates when the user base is smaller.

This transition would be much harder with tens of thousands of users than with hundreds. Thank you for choosing Textwire - we'll provide the least painful transition experience with our [detailed upgrade guide](/v3/upgrade).

:::important
I'll discuss each breaking change briefly because they are already explained in the [Upgrade Guide](/v3/upgrade), so there's no need to repeat that detailed information here.
:::

### 1. Custom Functions Return Type

When you define a custom function, it now returns the type `any`. If you have any registered custom functions, make sure to change their return type to `any`.

### 2. Reserved Variable Name

Variable `global` is now reserved, you cannot use this name for your variables.

### 3. Precedence Fix

Fixed precedence for prefix expressions and function call expressions. In Textwire v3, function calls now have higher precedence over prefix expressions. Instead of `((!var).func())`, we now have `(!(var.func()))`.

### 4. Default Extension Change

Changed the default file extension from `.tw.html` to `.tw`. If you still want to support `.tw.html`, add the field `TemplateExt: ".tw.html"` to your configuration in `NewTemplate` or `Configure`. This will behave the same way as in Textwire v2.

### 5. Minimal Go Version

In Textwire v3, the minimum supported Go version is now `1.25.0`. In Textwire v2, it was `1.22.0`. Upgrade your project to the latest version to use Textwire v3.

### 6. Components Scope Fix

Components in **Textwire v2** would pass variables to their children automatially without manual passing. It was a bug. In **Textwire v3** each component has its scope. You need to pass data manually:

```diff
{{ name = "Anna" }}

- @component('user')
+ @component('user', { name })
```

### 7. Variable Leak Fix

Fixed variable leak from template to layout non-explicitly. In Textwire v2, if you had a variable in your template, it would be accessible in your layout without passing it explicitly. In Textwire v3, this is not available anymore.

Use the [Global Data](/v3/guides/configurations#global-data) to pass variables into all of your Textwire files.
