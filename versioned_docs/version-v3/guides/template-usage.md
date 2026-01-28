---
title: Usage with Templates - v3
sidebar_label: Usage with Templates
sidebar_position: 2
description: Learn how to configure and use Textwire templates in your Go applications, including importing the package, creating template instances, and more
---

# Usage with Templates

## Simple usage
To use Textwire as a template language, you need to import the `github.com/textwire/textwire/v3` package and create a new Template instance. You can ether pass `nil` or a `*textwire.Config` to the `NewTemplate` function. The `*textwire.Config` is used to configure Textwire. Read more about [configurations](/docs/v3/guides/configurations).

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

Non of the configurations are required, because each configuration has a default value. The `NewTemplate` function returns 2 values:

1. `*textwire.Template` is a struct that holds the parsed templates and has methods to evaluate the templates.
2. `error` is the error that might occur during any stage of the template parsing.

In return from the `NewTemplate` function, we get a `Template` object that can be used to evaluate an already parsed template.

## Write response to the client
You can use the `Response` method on `Template` object to write the evaluated template to the client. The `Response` method accepts a `http.ResponseWriter` object, the name of the template file, and a map of variables that you want to inject into the template. Here is an example:

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

If you don't want to write directly to response, you can use `String()` method to get the final string:

```go
out, failure := tpl.String("home", map[string]any{
    "names":     []string{"John", "Jane", "Jack", "Jill"},
    "showNames": true,
    "books":     books,
})
```

Keep in mind that `tpl.String()` doesn't return `error`, it returns `*fail.Error`, which is a Textwire wrapper for error.

:::info
If your template files are not showing up after you've created them and you are using live-reloading libraries like [Fresh](https://github.com/gravityblast/fresh) or [Air](https://github.com/air-verse/air), restart them. Also, don't forget to add `.tw` files to trigger live-reloading.
:::

## Layouts
Defining a layout in Textwire is very simple. You need to create a layout file anywhere inside of your `templates` directory. Many developers just create a `templates/layouts/` directory for different layouts because you might have different layouts like `main.tw`, `admin.tw`, `user.tw`.

### Reserve space in the layout
The [@reserve](/docs/v3/language-elements/statements#reserve-statement) directive is used to reserve a place for dynamic content that you can insert later in the layout. For example, you can reserve a place for the title of the page and then insert it later from `about-me.tw` or `contact-us.tw`. Here is an example of a layout file:

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

We reserve spaces for the title and content of the page. These reserved spaces can then be filled with the title and content from other files that use this layout. Read the next section to learn how to insert content into reserved spaces.

### Insert content into reserved space
The [@insert](/docs/v3/language-elements/statements#insert-statement) directive is used to insert content into reserved places. It can be defined in 2 ways, with and without the body. In the example below, we define the `@insert` for "title" without the body, and for "content" with the body.

Let's take a look at the example how I would define a `home.tw` and then I'll explain each part of it:

```textwire title="templates/home.tw"
@use("layouts/main")

@insert("title", "Home page")

@insert("content")
    <h1>Hello, World!</h1>
    <p>This is a home page.</p>
@end
```

- First, we tell which layout we want to use by providing a path to the layout
- Then we insert the title into layout with the value "Home page"
- Then we insert the content into layout with the HTML body.

You can read more about [@use](/docs/v3/language-elements/statements#use-statement), [@insert](/docs/v3/language-elements/statements#insert-statement) and [@reserve](/docs/v3/language-elements/statements#reserve-statement) directives on the [statements](/docs/v3/language-elements/statements) page if you need more information about the syntax.

## Configuration
There are a few configurations that you can pass to the `NewTemplate` function to configure the template language. The `NewTemplate` function accepts a `*config.Config` with several properties.

There are cases when you want to override the default file format or the directory where the template files are stored. Here is an example of how you can configure the template language:

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

To read more about the available configurations, visit the [configurations](/docs/v3/guides/configurations) page.

