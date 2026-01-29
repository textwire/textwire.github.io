---
title: Upgrade Guide - v3
sidebar_label: Upgrade Guide
sidebar_position: 7
description: Learn how to upgrade your Textwire code from v2 to v3
---

# Upgrade Guide
## Upgrading from v2 to v3
Going from version 2 to version 3 is a simple process if you are not using Textwire's inner Lexer and Parser. If you do use Textwire's parser directly, see [this](/docs/v3/upgrade#changes-to-the-parser) section.

The complexity depends on how you use Textwire, if you use it as a templating system it would be more time-consuming versus if you use as simple string evaluation. Many of the steps in this guide you might even need to do. Each step is goint to have a label on the left, ALL and TEMPLATE. If you see TEMPLATE label and you don't use Textwire as template system that ignore this step. ALL means that everybody needs to do this step.

The reason we are doing so many breaking changes in one release is because it's better to do them right now when we don't have lots of people using Textwire. This transition would be much harded with tens of thousands of users than hundreds of users. Thank you for choosing Textwire, we'll do the best job possible to give you the least painful transition experience with detailed guide.

Follow the steps below to upgrade your Textwire code to v3.

### 1. New Import Path (ALL)
Change all the imports in your code from `github.com/textwire/textwire/v2` to `github.com/textwire/textwire/v3`

```diff
- import "github.com/textwire/textwire/v2"
+ import "github.com/textwire/textwire/v3"
```

### 2. Updating the Dependencies (ALL)
Run the command `go mod tidy` to update the dependencies in your `go.mod` file

```bash
go mod tidy
```

### 3. Global Variable Conflict (TEMPLATE)
If you have any defined variables called `global`, rename it to something else because this variable is now reserved. You'll get an error if you are trying to use it.

```bash title="Recursively search files that contain the word global"
grep -r "global" ./templates
```

Replace `./templates` with the path to your Textwire files. It will show you all the files that you need to modify. If you found any, prefix them with underscore like `_global` and search the `"global"` in your Go files, the part that passes that variable through to Textwire.

```bash
grep -r '"global"' ./internal
```

Replace `./internal` with the path to your Go code. If you found any values that you pass to Textwire, replace `"global"` with `"_global"`.

### 4. Return Type for Custom Functions
In Textwire v2, custom functions would return the receiver type. For example, if you define a custom function for strings, it would return string. In Textwire v3, custom functions for all types return type `any`, which is an alias to `interface{}`. Check if you have custom functions defined in your Go code.

```bash title="Search custom functions with RegEx
grep -r -E "Register(Str|Int|Bool|Float|Arr)Func\(" ./internal
```

Replace `./internal` with the path to your Go code. If you found any, just change the return type to any.

```diff
- err = textwire.RegisterStrFunc("_isCool", func(s string, args ...any) string {
+ err = textwire.RegisterStrFunc("_isCool", func(s string, args ...any) any {
    return s == "John Wick"
})
```

The behavior will not change, because your function will still return the same type as it was.

### 5. Precedence Change
#### Understanding the Problem
Textwire v2 has a wrong [precedence](https://en.wikipedia.org/wiki/Order_of_operations) for function call operations with prefix expressions. For example, operation like `{{ !"aaa".contains("a") }}` would evaluate `!"aaa"` first and cause an error because you cannot use `!` operator on string.

#### New Precedence Behavior
Textwire v3 puts higher precedence on function call and in code like this ``{{ !"aaa".contains("a") }}`` it would first evaluate `"aaa".contains("a")` and then apply `!` operator. Check if you use the functions with prefix expressions like `!` and `-` and make sure they returns the result you expect.

Here is the command that will help you to find all functions that might get effected by this change. Only functions that return boolean, integer or float are could be effected by this change. See if any of them have prefix.

```bash
grep -r -E "\.(contains|len|rand|abs|float|ceil|floor|int|binary|then)\(" ./internal
```

Replace `./internal` with the path to your Go code.

If you found something like `{{ -numb.floor() }}`, you can fix it in two ways:
1. **Keep the old vehavior.**  To keep the old behavior just add parenthesis like this `{{ (-numb).floor() }}`.
2. **To make a proper behavior.**  To make a proper result, you don't need to change anything, just keep `{{ -numb.floor() }}`. It will evaluate `numb.floor()` first and then prepend `-` sign to the result.

### 6. Removed Support for `.tw.html`
If you use `.tw.html` format for your Textwire files, you can resolve this in 2 ways:

#### 1. Easy Solution
The easy solution would be to find your `textwire.NewTemplate()`

#### 2. A Long Term Solution
Changed default file extension from `.tw.html` to `.tw`. If you still want to support it, go to you configurations in `NewTemplate` or `Configure` and add field `TemplateExt:   ".tw.html"` to it.

## Changes to the Parser
TODO:
