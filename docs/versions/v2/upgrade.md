---
title: Upgrade Guide - v2
description: Learn how to upgrade your Textwire code from version 1 to version 2
---

# Upgrade Guide

## Upgrading To 2.0 From 1.0
Going from version 1 to version 2 is a simple process. Follow the steps below to upgrade your Textwire code to version 2.

### 1. Change the import path
Change all the imports in your code from `github.com/textwire/textwire` to `github.com/textwire/textwire/v2`

```diff
- import "github.com/textwire/textwire"
+ import "github.com/textwire/textwire/v2"
```

### 2. Update the dependencies
Run the command `go mod tidy` to update the dependencies in your `go.mod` file

```bash
go mod tidy
```

### 3. Change the package name
Change the package name from `textwire.Config` to `config.Config` in your code if you use configuration and import `"github.com/textwire/textwire/v2/config"`. If you already have a package named `config`, you can alias the import like `twconfig "github.com/textwire/textwire/v2/config"`

```go
import (
    "github.com/textwire/textwire/v2"
    "github.com/textwire/textwire/v2/config"
)

var tpl *textwire.Template

func main() {
    var err error

    tpl, err = textwire.NewTemplate(&config.Config{
        TemplateExt: ".tw", // recommended to use .tw extension
        TemplateDir: "src/templates",
    })

    if err != nil {
        fmt.Println(err)
    }
}
```
