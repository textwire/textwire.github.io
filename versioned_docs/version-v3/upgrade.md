---
title: Upgrade Guide - v3
sidebar_label: Upgrade Guide
sidebar_position: 7
description: Learn how to upgrade your Textwire code from v2 to v3
---

# Upgrade Guide
## Upgrading from v2 to v3
Going from version 2 to version 3 is a simple process if you are not using Textwire's inner Lexer and Parser. If you do use Textwire's parser directly, see [this](/docs/v3/upgrade#changes-to-the-parser) section. Follow the steps below to upgrade your Textwire code to v3.

### 1. Change the Import Path
Change all the imports in your code from `github.com/textwire/textwire/v2` to `github.com/textwire/textwire/v3`

```diff
- import "github.com/textwire/textwire/v2"
+ import "github.com/textwire/textwire/v3"
```

### 2. Update the Dependencies
Run the command `go mod tidy` to update the dependencies in your `go.mod` file

```bash
go mod tidy
```

### 3. Rename Global Variable
If you have any defined variables called `global`, rename it to something else because this variable is now reserved. You'll get an error if you are trying to use it.

```bash title="Recursively search files that contain the word global"
grep -r "global" ./templates
```

Replace `./templates` with the path to your Textwire files. It will show you all the files that you need to modify. If you found any, prefix them with underscore like `_global` and search the `"global"` in your Go files, the part that passes that variable through to Textwire.

```bash
grep -r '"global"' ./internal
```

Replace `"global"` with `"_global"`.

### 4. Return Type for Custom Functions
In Textwire v2, custom functions would return the receiver type. For example, if you define a custom function for strings, it would return string. In Textwire v3, custom functions for all types return type `any`, which is an alias to `interface{}`. Check if you have custom functions defined in your Go code.

```bash title="Search custom functions with RegEx
grep -r -E "Register(Str|Int|Bool|Float|Arr)Func\(" ./internal
```

If you found any, just change the return type to any.

```diff
- err = textwire.RegisterStrFunc("_isCool", func(s string, args ...any) string {
+ err = textwire.RegisterStrFunc("_isCool", func(s string, args ...any) any {
    return s == "John Wick"
})
```

The behavior will not change, because your function will still return the same type as it was.

## Changes to the Parser
TODO:
