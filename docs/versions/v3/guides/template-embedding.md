---
title: Template Embedding - v3
description: Learn how to use Go's embed package to embed Textwire templates into your Go applications for efficient template management.
---

# Template Embedding
Go's [embed](https://pkg.go.dev/embed) package allows you to include static files and directories in your Go binaries at compile time. This is particularly useful for embedding Textwire templates directly into your application, ensuring that your templates are always available without needing to manage separate files.

You'll be able to deploy a single compiled Go binary that contains all your Textwire templates, simplifying distribution and deployment.

## Embedding Templates
Get started with embedding templates you need to create a variable in your main package that uses the `embed` package to include your template files.

Of course, everyone is going to have their own directory structure, but for the sake of this example, let's say you have a `templates` directory in your root project that contains your Textwire templates. We'll take a look at scenario when your `main.go` file is in project root directory.

The easiest way to embed your Textwire templates is when you have your `main.go` file in the root of the project. We are going to consider this directory structure:

### Directory Structure Example
```text
project/
├── templates/
│   │
│   ├── layouts/
│   │   └── base.tw
│   │
│   ├── components/
│   │   └── book.tw
│   │
│   └── views/
│       └── home.tw
│
├── go.mod
└── main.go
```

### Embedding Templates
 Just create a variable `templateFS` with the Go's type `embed.FS` and add comment `//go:embed templates/*` which should point to your Textwire templates.

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
        TemplateFS:    templateFS, // [!code highlight]
    })

    // other logic here ...
}
```

That's it! Now you can build your Go application and the Textwire templates will be embedded in the binary.
