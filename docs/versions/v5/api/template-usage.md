---
title: Usage with Templates - v5
description: Learn how to configure and use Textwire templates in your Go applications, including importing the package, creating template instances, and more
outline: [2, 3]
---

# Usage with Templates

## Simple Usage

Import `github.com/textwire/textwire/v5` and call `textwire.NewTemplate(nil)` to create a template instance. Pass `nil` for defaults, or a `*config.Config` to customize. See [configuration options](/v5/api/configurations).

Choose one of these initialization patterns:

1. **Global** — `tpl` is a package variable accessible from any handler
2. **Local** — `tpl` is created in `main()` and injected into handlers

::: code-group

```go [Global Template] :line-numbers
import (
    "net/http"
    "github.com/textwire/textwire/v5"
)

var tpl *textwire.Template

func main() {
    tpl, _ = textwire.NewTemplate(nil)
    http.HandleFunc("/", homeHandler)
    http.ListenAndServe(":8080", nil)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    tpl.Response(w, "views/home", nil)
}
```

```go [Local Template] :line-numbers
import (
	"net/http"
	"github.com/textwire/textwire/v5"
)

func main() {
	tpl, _ := textwire.NewTemplate(nil)
	http.HandleFunc("/", homeHandler(tpl))
	http.ListenAndServe(":8080", nil)
}

func homeHandler(tpl *textwire.Template) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		tpl.Response(w, "views/home", nil)
	}
}
```

:::

Both patterns work—use global for simplicity, local for testability. Call `NewTemplate` only once at startup; it parses all templates into memory.

## Writing Responses to the Client

Choose how to output your rendered template:

::: code-group

```go [Response - Direct HTTP Output]
func homeHandler(w http.ResponseWriter, r *http.Request) {
    err := tpl.Response(w, "views/home", map[string]any{
        "title": "Home page",
    })

    err.PrintOnError()
}
```

```go [String - Get Rendered Output]
func generateEmail() (string, error) {
    out, err := tpl.String("emails/welcome", map[string]any{
        "name": user.Name,
    })
    if err != nil {
        return "", err.Error()
    }
    return out, nil
}
```

:::

- **`Response()`** — Writes directly to HTTP response and returns `*fail.Error` with detailed info (line, filepath, message)
- **`String()`** — Returns rendered string and `*fail.Error` with detailed info (line, filepath, message)

## Layouts

Layouts are reusable templates that define the overall structure of a page. They allow you to maintain a consistent look and feel across your website while enabling you to insert dynamic content into specific reserved places. You can define a base layout which will be used by multiple pages.

To define a layout in Textwire you need to create a file anywhere within your `templates` directory. **We recommend to store it in `templates/layouts` directory.** This way, all of your layouts could go in there.

### Reserving Space in Layouts

The [@reserve](/v5/language-elements/directives#reserve) directive reserves placeholders for dynamic content that can be inserted later. For example, you can reserve a space for the page title and description, and then populate it from other templates such as `about-me.tw` or `contact-us.tw`. Example layout file:

```textwire :line-numbers
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@reserve('title')</title>
    <meta name="description" content="@reserve('description')">
</head>
<body>
    <main id="main-app">
        @reserve('content')
    </main>
</body>
</html>
```

This layout reserves spaces for the title, description and content. These placeholders can be populated with data from templates that use this layout. The next section explains how to insert content into reserved spaces.

Learn about [@reserve](/v5/language-elements/directives#reserve) directive.

### Inserting Content into Reserved Spaces

The [@insert](/v5/language-elements/directives#insert) directive inserts content into reserved placeholders. It can be used in two ways: with or without a block. In the following example, we insert "title" and "description" without a block, and "content" with a block.

Example `templates/views/home.tw` template:

```textwire
@use("layouts/main")

@insert("title", "Home page")
@insert("description", "Go community loves Textwire")

@insert("content")
    <h1>Hello, World!</h1>
    <p>This is a home page.</p>
@end
```

**Explanation:**
1. Specify which layout to use by providing the layout path.
2. Insert the title into the layout.
3. Insert the description into the layout.
4. Insert the main content into the layout with the HTML block.

Learn about [@insert](/v5/language-elements/directives#insert) directive.

## Configuration

The `NewTemplate` function accepts a `*config.Config` parameter with several properties to customize template behavior. Common use cases include overriding the default file format or specifying the template directory. Example:

```go :line-numbers
import (
    "fmt"
    "net/http"

    "github.com/textwire/textwire/v5"
    "github.com/textwire/textwire/v5/fail"
    "github.com/textwire/textwire/v5/config" // [!code highlight]
)

var tpl *textwire.Template

func main() {
    var err *fail.Error

    tpl, err = textwire.NewTemplate(&config.Config{ // [!code highlight]
        TemplateDir: "src/templates", // [!code highlight]
    }) // [!code highlight]

    err.FatalOnError()

    http.HandleFunc("/", homeHandler)

    http.ListenAndServe(":8080", nil)
}
```

For detailed information about available configuration options, visit the [configurations](/v5/api/configurations) page.

## Important Notes

- **Single initialization.** Call `NewTemplate` only once at startup; it parses all templates into memory. Re-initializing for each request causes significant performance degradation.
- **Live reload.** If your template files are not showing up after creation and you're using live-reload tools like [Fresh](https://github.com/gravityblast/fresh) or [Air](https://github.com/air-verse/air), restart them and add `.tw` files to the watch list.
- **Layout organization.** Store layout files in `templates/layouts` directory for better organization and consistency across your project.
- **Error handling.** `Response()` and `String()` return `*fail.Error` with detailed info (line number, filepath, message). Call `failure.Error()` to convert to standard `error`.
- **Use path alias.** If your views are located in the `views` directory, you can use the `~` alias to reference them. Read about [Path Aliases](/v5/faq#what-are-the-path-aliases).
