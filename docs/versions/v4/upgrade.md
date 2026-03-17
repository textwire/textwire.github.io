---
title: Upgrade Guide - v4
description: Learn how to upgrade your Textwire code from v3 to v4
outline: deep
---

# Upgrade Guide

Upgrading Textwire from v3 to v4 shoud be very simple. There are only 3 breaking changes and you might not be effected by them. Still, follow this guide to see all the steps that you need to make to migrate to Textwire 4.

## Steps

Follow the steps below to upgrade your Textwire project to v4.

### 1. New Import Path

Change all the imports in your code from `github.com/textwire/textwire/v3` to `github.com/textwire/textwire/v4`

```go
import "github.com/textwire/textwire/v3" // [!code --]
import "github.com/textwire/textwire/v4" // [!code ++]
```

### 2. Updating the Dependencies

Run the command `go mod tidy` to update the dependencies in your `go.mod` file

```bash
go mod tidy
```

### 3. Add correct error handling

Several Textwire functions changed return value from a standard `error` to `*fail.Error` object. Here is the list of functions that were effected:

| Name                | Old return           | New return                 |
| ------------------- | -------------------- | -------------------------- |
| `NewTemplate`       | `(*Template, error)` | `(*Template, *fail.Error)` |
| `EvaluateString`    | `(string, error)`    | `(string, *fail.Error)`    |
| `EvaluateFile`      | `(string, error)`    | `(string, *fail.Error)`    |
| `RegisterStrFunc`   | `error`              | `*fail.Error`              |
| `RegisterStrFunc`   | `error`              | `*fail.Error`              |
| `RegisterArrFunc`   | `error`              | `*fail.Error`              |
| `RegisterObjFunc`   | `error`              | `*fail.Error`              |
| `RegisterIntFunc`   | `error`              | `*fail.Error`              |
| `RegisterFloatFunc` | `error`              | `*fail.Error`              |
| `RegisterBoolFunc`  | `error`              | `*fail.Error`              |
| `Response`          | `error`              | `*fail.Error`              |

If you are returning Textwire `error` like that:

```go
import "github.com/textwire/textwire/v4"

func initTpl() (*textwire.Template, error) {
	tpl, err := textwire.NewTemplate(nil)
	if err != nil {
		return nil, err // [!code highlight]
	}
	return tpl, nil
}
```

You'll get a compilation error: `cannot use err (variable of type *fail.Error) as error value in return statement: *fail.Error does not implement error (wrong type for method Error)`. To fix it, call `Error` method on `*fail.Error`. Example:

```go
import "github.com/textwire/textwire/v4"

func initTpl() (*textwire.Template, error) {
	tpl, err := textwire.NewTemplate(nil)
	if err != nil {
		return nil, err // [!code --]
        return nil, err.Error() // [!code ++]
	}
	return tpl, nil
}
```

### 4. Rename `@continueIf` and `@breakIf`

If you are using `@continueIf` or `@breakIf` directives, change them to be lowercase.

| Old Name      | New name      |
| ------------- | ------------- |
| `@breakIf`    | `@breakif`    |
| `@continueIf` | `@continueIf` |

### 4. Check Postfix Statement Usage

In Textwire 4, incrementing and decrementing a variable has changed from expression to a statement. It means that this `n++` or `n--` cannot be used as an expression and it doesn't return a value.

In Textwire 3, this <code v-pre>{{ n = 0; n++ }}</code> would print `1` because `n++` expression was evaluated to `1`.

In version 4, we follow Go's approach and make it behave the same way. <code v-pre>{{ n = 0; n++ }}</code> will evaluated to nothing because `n++` is a statement that re-assigns `n` to a new value. You can read more about [postfix statement here](/v4/language-elements/statements#postfix-operations).

So, if you do use postfix as an expression, change `n++` to `n + 1`. Keep in mind that it doesn't apply to `@for` directives header. It will still work the same way as before. Except when you expect increment to print value. Example:

```textwire
@for(i = 0; i < items.len(); i++)
    {{ i++ }}
@end
```

In this case, change it to this:

```textwire
@for(i = 0; i < items.len(); i++)
    {{ i++ }} // [!code --]
    {{ i + 1 }} // [!code ++]
@end
```

But `i++` in loop header still works the same way.
