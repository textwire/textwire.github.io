---
title: Upgrade Guide - v4
description: Learn how to upgrade your Textwire code from v3 to v4
outline: deep
---

# Upgrade Guide

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
