---
title: Upgrade Guide - v3
description: Learn how to upgrade your Textwire code from v2 to v3
outline: deep
---

# Upgrade Guide

## Upgrading from v2 to v3

### Quick Summary

For experienced developers, here's the high-level overview:

- Change import paths from `v2` to `v3`
- Update Go version requirement
- Rename any `global` variables
- Update custom function return types to `any`
- Update file extensions from `.tw.html` to `.tw` (optional)
- Function call precedence has changed for prefix expressions
- Pass variables to components manually

Going from version 2 to version 3 is a simple process but it does involve some breaking changes.

The reason we are doing so many breaking changes in one release is because it's better to do them right now when we don't have lots of people using Textwire. This transition would be much harder with tens of thousands of users than hundreds of users. Thank you for choosing Textwire, we'll do the best job possible to give you the least painful transition experience with detailed guide.

## Table of Contents

1. [New Import Path](#1-new-import-path)
2. [Updating the Dependencies](#2-updating-the-dependencies)
3. [Minimal Go Version is 1.25](#3-minimal-go-version-is-125)
4. [Global Variable Conflict](#4-global-variable-conflict)
5. [Return Type for Custom Functions](#5-return-type-for-custom-functions)
6. [Precedence Change](#6-precedence-change)
7. [Changed Default file Extension](#7-changed-default-file-extension)

---

## Steps

Follow the steps below to upgrade your Textwire code to v3.

### 1. New Import Path

Change all the imports in your code from `github.com/textwire/textwire/v2` to `github.com/textwire/textwire/v3`

```go
import "github.com/textwire/textwire/v2" // [!code --]
import "github.com/textwire/textwire/v3" // [!code ++]
```

### 2. Updating the Dependencies

Run the command `go mod tidy` to update the dependencies in your `go.mod` file

```bash title="Update Go module dependencies"
go mod tidy
```

### 3. Minimal Go Version is 1.25

Make sure your Go version is `1.25` or higher.

:::warning Breaking Change
Applications using Go versions below 1.25 will not work with Textwire v3.
:::

### 4. Global Variable Conflict

If you have any defined variables called `global`, rename it to something else because this variable is now reserved. You'll get an error if you are trying to use it.

:::warning Critical
Using `global` as a variable name will cause compilation errors in v3. This variable name is now reserved for internal use.
:::

```bash title="Recursively search files that contain the word global"
grep -r "global" ./templates
```

Replace `./templates` with the path to your Textwire files. It will show you all the files that you need to modify. If you found any, prefix them with underscore like `_global` and search for `"global"` in your Go files, in the parts that pass that variable through to Textwire.

```bash title="Search for global variable references in Go code"
grep -r '"global"' ./internal
```

Replace `./internal` with the path to your Go code. If you found any values that you pass to Textwire, replace `"global"` with `"_global"`.

---

### 5. Return Type for Custom Functions

In Textwire v2, custom functions would return the receiver type. For example, if you define a custom function for strings, it would return string. In Textwire v3, custom functions for all types return type `any`, which is an alias to `interface{}`. Check if you have custom functions defined in your Go code.

:::warning Breaking Change
All custom functions must now return `any` instead of their specific type. This affects `RegisterStrFunc`, `RegisterIntFunc`, `RegisterBoolFunc`, `RegisterFloatFunc`, and `RegisterArrFunc`.
:::

```bash title="Search for custom function registrations"
grep -r -E "Register(Str|Int|Bool|Float|Arr)Func\(" ./internal
```

Replace `./internal` with the path to your Go code. If you found any, just change the return type to any.

```go title="Update custom function return type"
err = textwire.RegisterStrFunc("_isCool", func(s string, args ...any) string { // [!code --]
err = textwire.RegisterStrFunc("_isCool", func(s string, args ...any) any { // [!code ++]
    return s == "John Wick"
})
```

The behavior will not change, because your function will still return the same type as it was.

---

### 6. Precedence Change <Badge type="danger" text="caution" />

#### Understanding the Problem

Textwire v2 has a wrong [precedence](https://en.wikipedia.org/wiki/Order_of_operations) for function call operations with prefix expressions. For example, operation like <code v-pre>{{ !"aaa".contains("a") }}</code> would evaluate `!"aaa"` first and cause an error because you cannot use `!` operator on string.

#### New Precedence Behavior

Textwire v3 puts higher precedence on function call and in code like this <code v-pre>{{ !"aaa".contains("a") }}</code> it would first evaluate `"aaa".contains("a")` and then apply `!` operator. Check if you use the functions with prefix expressions like `!` and `-` and make sure they returns the result you expect.

Here is the command that will help you to find all functions that might be affected by this change. Only functions that return boolean, integer or float could be affected by this change. See if any of them have prefix.

```bash title="Search for functions affected by precedence change"
grep -r -E "\.(contains|len|rand|abs|float|ceil|floor|int|binary|then)\(" ./internal
```

Replace `./internal` with the path to your Go code.

If you found something like <code v-pre>{{ -numb.floor() }}</code>, you can fix it in two ways:

1. **Keep the old behavior.** To keep the old behavior just add parenthesis like this <code v-pre>{{ (-numb).floor() }}</code>.
2. **To get the correct behavior.** To get the correct result, you don't need to change anything, just keep <code v-pre>{{ -numb.floor() }}</code>. It will evaluate `numb.floor()` first and then prepend `-` sign to the result.

---

### 7. Changed Default file Extension

Textwire v2 is using `.tw.html` file extension by default, in v3 this file default file extension was changed to `.tw`. If you use `.tw.html` for your Textwire files, you can resolve this in 2 ways:

#### 1. Easy Solution

The easy solution would be to find your `textwire.NewTemplate()` or `textwire.Configure()` (depending on how you set configurations), and add `TemplateExt: ".tw.html"` configuration like this:

```go title="Configure template extension for v3 compatibility"
tpl, err = textwire.NewTemplate(&config.Config{
    TemplateExt: ".tw.html",
})
```

#### 2. A Long Term Solution

Rename Textwire file extensions from `.tw.html` to `.tw` and make sure you don't have `TemplateExt` configuration setup. In Textwire v3 `TemplateExt` is set to `.tw` by default.

:::info Custom Extensions
You can set any extension for Textwire that you want, refer to [configurations](/v3/guides/configurations) page for more details. But we recommend using `.tw`.
:::

### 8. Components Scope Fix

Components in **Textwire v2** would pass variables to their children automatially without manual passing. It was a bug. In **Textwire v3** each component has its scope. You need to pass data manually if you were using this:

```textwire
{{ name = "Anna" }}

@component('user') // [!code --]
@component('user', { name }) // [!code ++]
```

### 9. Variable Leak Fix

Fixed variable leak from template to layout non-explicitly. In Textwire v2, if you had a variable in your template, it would be accessible in your layout without passing it explicitly. In Textwire v3, this is not available anymore.

If you were utilizing this behavior, you can fix it by using [Global Data](/v3/guides/configurations#global-data). Use it to pass variables into all of your Textwire files.
