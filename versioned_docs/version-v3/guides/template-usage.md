---
title: Usage with Templates - v3
sidebar_label: Usage with Templates
sidebar_position: 2
description: Learn how to configure and use Textwire templates in your Go applications, including importing the package, creating template instances, and more
---

# Usage with Templates

## Simple Usage
To use Textwire as a template language, import the `github.com/textwire/textwire/v3` package and create a new Template instance. You can either pass `nil` or a `*textwire.Config` to the `NewTemplate` function. The `*textwire.Config` parameter configures Textwire behavior. Read more about [configurations](/docs/v3/guides/configurations).

```go title="main.go"
import (
    "fmt"
    "net/http"

    "github.com/textwire/textwire/v3"
    "github.com/textwire/textwire/v3/config"
)

var tpl *textwire.Template

func main() {
    var err error

    tpl, err = textwire.NewTemplate(&config.Config{
        DebugMode:   true,
    })

    if err != nil {
        fmt.Println(err)
    }

    http.HandleFunc("/", homeHandler)

    http.ListenAndServe(":8080", nil)
}
```

None of the configurations are required, as each configuration has a default value. The `NewTemplate` function returns two values:

1. `*textwire.Template` - a struct that holds parsed templates and provides methods to evaluate them
2. `error` - an error that might occur during any stage of template parsing

After calling `NewTemplate`, you receive a `Template` instance that can be used to evaluate parsed templates.

## Writing Responses to the Client
Use the `Response` method on a `Template` instance to write the evaluated template to the HTTP client. The `Response` method accepts an `http.ResponseWriter` object, the template file name, and a map of variables to inject into the template. Here is an example:

```go title="main.go"
func homeHandler(w http.ResponseWriter, r *http.Request) {
    err := tpl.Response(w, "home", map[string]interface{}{
        "title":     "Home page",
        "names":     []string{"John", "Jane", "Jack", "Jill"},
        "showNames": true,
    })

    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
    }
}
```

If you prefer not to write directly to the response, use the `String()` method to obtain the final string:

```go
out, failure := tpl.String("home", map[string]any{
    "names":     []string{"John", "Jane", "Jack", "Jill"},
    "showNames": true,
    "books":     books,
})
```

Note that `tpl.String()` does not return a standard `error`. Instead, it returns `*fail.Error`, which is Textwire's error wrapper that provides additional context such as line numbers and file paths.

:::info
If your template files are not showing up after you've created them and you are using live-reloading libraries like [Fresh](https://github.com/gravityblast/fresh) or [Air](https://github.com/air-verse/air), restart them. Also, don't forget to add `.tw` files to trigger live-reloading.
:::

## Layouts
Defining a layout in Textwire is straightforward. Create a layout file anywhere within your `templates` directory. Many developers organize layouts in a `templates/layouts/` directory to manage different layouts such as `main.tw`, `admin.tw`, and `user.tw`.

### Reserving Space in Layouts
The [@reserve](/docs/v3/language-elements/statements#reserve-statement) directive reserves placeholders for dynamic content that can be inserted later. For example, you can reserve a space for the page title and then populate it from other templates such as `about-me.tw` or `contact-us.tw`. Here is an example layout file:

```textwire title="templates/layouts/main.tw"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@reserve("title")</title>
</head>
<body>
    @reserve("content")
</body>
</html>
```

This layout reserves spaces for the page title and content. These placeholders can be populated with data from templates that extend this layout. The next section explains how to insert content into reserved spaces.

### Inserting Content into Reserved Spaces
The [@insert](/docs/v3/language-elements/statements#insert-statement) directive inserts content into reserved placeholders. It can be used in two ways: with or without a body. In the following example, we insert content for "title" without a body and for "content" with a body.

Here is an example `home.tw` template:

```textwire title="templates/home.tw"
@use("layouts/main")

@insert("title", "Home page")

@insert("content")
    <h1>Hello, World!</h1>
    <p>This is a home page.</p>
@end
```

- First, we specify which layout to use by providing the layout path
- Then we insert the title into the layout with the value "Home page"
- Finally, we insert the main content into the layout with the HTML body.

You can read more about [@use](/docs/v3/language-elements/statements#use-statement), [@insert](/docs/v3/language-elements/statements#insert-statement) and [@reserve](/docs/v3/language-elements/statements#reserve-statement) directives on the [statements](/docs/v3/language-elements/statements) page if you need more information about the syntax.

## Configuration
The `NewTemplate` function accepts a `*config.Config` parameter with several properties to customize template behavior. Common use cases include overriding the default file format or specifying the template directory. Here is an example of configuration:

```go title="main.go"
import (
    "fmt"
    "net/http"

    "github.com/textwire/textwire/v3"
    // highlight-next-line
    "github.com/textwire/textwire/v3/config"
)

var tpl *textwire.Template

func main() {
    var err error

    // highlight-start
    tpl, err = textwire.NewTemplate(&config.Config{
        TemplateDir: "src/templates",
    })
    // highlight-end

    if err != nil {
        fmt.Println(err)
    }

    http.HandleFunc("/", homeHandler)

    http.ListenAndServe(":8080", nil)
}
```

For detailed information about available configuration options, visit the [configurations](/docs/v3/guides/configurations) page.

