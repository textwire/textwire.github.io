---
sidebar_position: 2
description: Learn how to configure and use Textwire templates in your Go applications, including importing the package, creating template instances, and more
---

# Usage with Templates

## Template Configuration

To use Textwire as a template language, you need to import the `github.com/textwire/textwire` package and create a new Template instance. You can ether pass `nil` or a `*textwire.Config` to the `NewTemplate` function. The `*textwire.Config` is used to configure the template language.

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

### Available Configurations

| Property      | Type     | Description of the configuration                          | Example value     | Default value |
| ------------- | -------- | --------------------------------------------------------- | ----------------- | ------------- |
| `TemplateDir` | `string` | The directory where Textwire will look for template files | `"src/templates"` | `"templates"` |
| `TemplateExt` | `string` | The extension of the template files                       | `".html"`         | `".tw.html"`  |

:::warning
Keep in mind that if you use VSCode and you change `TemplateExt` to something else than `.tw.html`, you will lose the syntax highlighting for Textwire files if you use the [Textwire extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire).
:::

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

```html title="templates/layouts/main.tw.html"
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

```html
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

# Evaluate a string

You can use the `EvaluateString` function to compile and evaluate a string containing Textwire code. The `EvaluateString` function accepts a string and a map of variables that you want to inject into the string. After evaluating the string, the function returns the evaluated string.

This is useful when you want to inject variables into an email template or any other string that contains Textwire code. Here is an example:

```go
inp := `Hello <b>{{ name }}</b>! Congratulations on your {{ age }}th birthday!`

result, err := textwire.EvaluateString(inp, map[string]interface{}{
    "name": "Serhii",
    "age": 33
})

if err != nil {
    log.Fatal(err)
}
```

# Evaluate a file

Evaluating a file can be done with the `EvaluateFile` function. The `EvaluateFile` function accepts a path to the file that contains Textwire code and a map of variables that you want to inject into the file. Here is an example:

```go
path := "path/to/file.tw.html"

result, err := textwire.EvaluateFile(path, map[string]interface{}{
    "name": "Anna",
    "age":  25,
})

if err != nil {
    log.Fatal(err)
}
```