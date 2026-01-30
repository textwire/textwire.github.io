---
title: "v3 Release Notes"
description: "Get to know details about the Textwire v3 release by reading the complete release notes"
authors: [serhiicho]
tags: [release]
---

The Textwire version `v3` is probably the most important release that brought several cool features and improvements. This release includes introduction of `global` variable object, new [defined()](/docs/v3/functions/global#defined) function ([#56](https://github.com/textwire/textwire/issues/56)), ability to register custom functions to OBJECT type and improvements to error handling, performance ([#61](https://github.com/textwire/textwire/issues/61) [#60](https://github.com/textwire/textwire/issues/60) [#59](https://github.com/textwire/textwire/issues/59)) and usability [#35](https://github.com/textwire/textwire/issues/35).

<!-- truncate -->

If you are transitioning from Textwire v2, you can follow [this guide](/docs/v3/upgrade) for all the intstructions. V3 contains several breaking changes, make sure you follow don't miss any parts of the guide.

### Table of Contents
- [New Features](#new-features)
- [Improvements](#improvements)
- [Bug Fixes](#bug-fixes)
- [Breaking Changes](#breaking-changes)

## New Features
Textwire v3 brings several new features to the language. Let's go through each of them starting with a new concept in Textwire - global functions.

### Function `defined`
Textwire v3 introduces global function [defined()](/docs/v3/functions/global#defined) that returns boolean value. This function should be used only with variables and it allows you to check if the variable is defined or not to prevent Textwire from creating an error.

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

### Global Data
In v3 you can now pass any values from your Go code to any Textwire files using global object. Here is an example of passing some values:

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

Read more about [Global Data](/docs/v3/guides/configurations#global-data) in our docs, or look at the [commit](https://github.com/textwire/textwire/commit/f156f3fd2175f925652d462d75dc843a396de702).

### Custom Functions for Object Type
In Textwire v2 you could defined [custom functions](/docs/v3/guides/custom-functions) for all types except objects, in v3 you can now do that. It was added with [this commit](https://github.com/textwire/textwire/commit/a225ccacaf0fc9ca62365ebfe7e715de39b067af). Here is a simple example:

```go
err := textwire.RegisterObjFunc("_addProp", func(obj map[string]any, args ...any) any {
    key := args[0].(string) // first arg
    value := args[1] // second arg
    obj[key] = value
    return obj
})
```

## Improvements
### Error Handling
Improve error handling with [this commit](https://github.com/textwire/textwire/commit/d9442c5d567d788652c03fb8efa6125c93ee5843) when trying to use `@use`, `@insert`, `@reserve` or `@component` directives in simple `EvaluateString` or `EvaluateFile` function calls. These directives are only allowed inside template files with `textwire.NewTemplate`.

Now, you'll get a clear error message like `@use, @insert, @reserve, @component only allowed in templates` if you'll try to use them. Previously, the error wasn't clear.

### Memory Performance
Improve memory and performance.

TODO: here

### Error Messages
Improve all error messages in [this commit](https://github.com/textwire/textwire/commit/e6b0935af2d7de0469733e12028fc349564584c6) to make them more clear and straightforward.

## Bug Fixes
Bugs are unavoidable in any software, Textwire is no exception. We found and fixed several bugs in this release. You can find the list of fixed bugs below.

### Incorret File Path
Fixed incorrect file path in error messages when error happens inside of `@insert` directive.

### Function `contains()`
Fixed `contains` function for strings, `{{ !"aaa".contains("a") }}` now returns correct result.
Fixed `contains` function for arrays, `{{ ![{}, 21].contains({age: 21}) }}` now returns correct result.

## Breaking Changes
Textwire v3 introduces several breaking chages. The reason we are doing so many breaking changes in one release is because it's better to do them right now when we don't have lots of people using Textwire than do them later.

This transition would be much harder with tens of thousands of users than hundreds of users. Thank you for choosing Textwire, we'll do the best job possible to give you the least painful transition experience with the [detailed guide](/docs/v3/upgrade).

:::important
I'll talk about each breaking change very breafly because they are already explained in [Upgrade Guide](/docs/v3/upgrade), there is no need to repeat myself.
:::

### Custom Functions Return Type
When you defined a custom function, now it returns type `any`. If you register any custom functions make sure to change return type to `any`.

### Reserved Variable Name
Variable `global` is now reserved, you cannot use this name for your variables.

### Precedence Fix
Fixed precedence for prefix expressions and function call expressions. In Textwire v3 functions calls now have higher precedence over prefix expressions. Instead of `((!var).func())` we now have `(!(var.func()))`.

### Default Extension Change
Changed default file extension from `.tw.html` to `.tw`. If you still want to support it, go to your configurations in `NewTemplate` or `Configure` and add field `TemplateExt: ".tw.html"` to it. It will behave the same way as in Textwire v2.

### Minimal Go Version
In Textwire v3, the minimal Go version support is now `1.25`. In Textwire v2 it was `1.22.0`.

