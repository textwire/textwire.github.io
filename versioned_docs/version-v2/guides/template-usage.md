---
title: Usage with Templates - v2
sidebar_label: Usage with Templates
sidebar_position: 2
description: Learn how to configure and use Textwire templates in your Go applications, including importing the package, creating template instances, and more
---

# Usage with Templates

## Simple usage
To use Textwire as a template language, you need to import the `github.com/textwire/textwire` package and create a new Template instance. You can ether pass `nil` or a `*textwire.Config` to the `NewTemplate` function. The `*textwire.Config` is used to configure the template language. Read more about [configurations](/docs/v2/guides/configurations) in Textwire.

```go title="main.go"
import (
    "fmt"
    "net/http"

    "github.com/textwire/textwire/v2"
)

var tpl *textwire.Template

func main() {
    var err error

    tpl, err = textwire.NewTemplate(nil)

    if err != nil {
        fmt.Println(err)
    }

    http.HandleFunc("/", homeView)

    http.ListenAndServe(":8080", nil)
}
```

Non of the configurations are required, because each configuration has a default value. The `NewTemplate` function returns 2 values:

1. `*textwire.Template` is a struct that holds the parsed templates and has methods to evaluate the templates.
2. `error` is the error that might occur during any stage of the template parsing.

In return from the `NewTemplate` function, we get a `Template` object that can be used to evaluate an already parsed template.

## Configuration
There are a few configurations that you can pass to the `NewTemplate` function to configure the template language. The `NewTemplate` function accepts a `*config.Config` with several properties.

There are cases when you want to override the default file format or the directory where the template files are stored. Here is an example of how you can configure the template language:

```go title="main.go"
import (
    "fmt"
    "net/http"

    "github.com/textwire/textwire/v2"
    // highlight-next-line
    "github.com/textwire/textwire/v2/config"
)

var tpl *textwire.Template

func main() {
    var err error

    // highlight-start
    tpl, err = textwire.NewTemplate(&config.Config{
        TemplateDir: "src/templates",
        TemplateExt: ".tw",
    })
    // highlight-end

    if err != nil {
        fmt.Println(err)
    }

    http.HandleFunc("/", homeView)

    http.ListenAndServe(":8080", nil)
}
```

To read more about the available configurations, visit the [configurations](/docs/v2/guides/configurations) page.

## Write response to the client
You can use the `Response` method on `Template` object to write the evaluated template to the client. The `Response` method accepts a `http.ResponseWriter` object, the name of the template file, and a map of variables that you want to inject into the template. Here is an example:

```go title="main.go"
func homeView(w http.ResponseWriter, r *http.Request) {
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

## Layouts
Defining a layout in Textwire is very simple. You need to create a layout file anywhere inside of your `templates` directory. Many developers just create a `templates/layouts/` directory for different layouts because you might have different layouts like `main.tw.html`, `admin.tw.html`, `user.tw.html`.

### Reserve space in the layout
The [reserve](/docs/v2/language-elements/statements#reserve-statement) statement (also called directive) is used to reserve a place for dynamic content that you can insert later in the layout. For example, you can reserve a place for the title of the page and then insert it later from `about-me-tw.html` or `contact-us.tw.html`. Here is an example of a layout file:

```textwire title="templates/layouts/main.tw.html"
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
The `insert` statement (directive) is used to insert content into reserved places. Insert statement can be defined in 2 ways, with and without the body. In the example below, we define the insert for "title" without the body, and for "content" with the body.

Let's take a look at the example how I would define a `home.tw.html` and then I'll explain each part of it:

```textwire title="templates/home.tw.html"
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

You can read more about [use](/docs/v2/language-elements/statements#use-statement), [insert](/docs/v2/language-elements/statements#insert-statement) and [reserve](/docs/v2/language-elements/statements#reserve-statement) statements on the [statements](/docs/v2/language-elements/statements) page if you need more information about the syntax.