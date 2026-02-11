---
title: Usage with Templates - v1
outline: deep
---

# Usage with Templates

## Template Configuration
To use Textwire as a template language, you need to import the `github.com/textwire/textwire` package and create a new Template instance. You can ether pass `nil` or a `*textwire.Config` to the `NewTemplate` function. The `*textwire.Config` is used to configure the template language.

```go
import "github.com/textwire/textwire"

func main() {
    tpl, err := textwire.NewTemplate(&textwire.Config{
        TemplateDir: "src/templates",
    })

    if err != nil {
        log.Fatal(err)
    }
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

:::warning Loosing Extension Benefits
Keep in mind that if you use VSCode and you change `TemplateExt` to something else than `.tw` or `.tw.html`, you will lose the syntax highlighting for Textwire files if you use the [Textwire extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire).
:::

## Write Response to the Client
You can use the `Response` method on `Template` object to write the evaluated template to the client. The `Response` method accepts a `http.ResponseWriter` object, the name of the template file, and a map of variables that you want to inject into the template. Here is an example:

```go
func homeHandler(w http.ResponseWriter, r *http.Request) {
    err := tpl.Response(w, "home", map[string]interface{}{
        "title":     "Home page",
        "names":     []string{"John", "Jane", "Jack", "Jill"},
        "showNames": true,
    })

    if err != nil {
        log.Fatal(err)
    }
}
```

## Layouts
Defining a layout in Textwire is very simple. You need to create a file anywhere inside of your template files. Many developers just create a "layouts" directory for different layouts because you might have a main layout, one for admin panel, one for user cabinet and so on.

### Reserve Space in the Layout
The `reserve` statement (directive) is used to reserve a place for dynamic content that you can insert later in the layout. For example, you can reserve a place for the title of the page and then insert it later. Here is an example:

```textwire
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

We reserve a place for the title and content of the page. We can then insert the title and content into these reserved places.

### Insert Content Into Reserved Space
The `insert` statement (directive) is used to insert content into reserved places. Insert statement can be defined in 2 ways, with and without the body. In the example below, we define the insert for "title" without the body, and for "content" with the body.

Let's take a look at the example how I would define a `home.tw.html` and then I'll explain each part of it:

```textwire
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

You can read more about [use](/v1/language-elements/statements#use-statement), [insert](/v1/language-elements/statements#insert-statement) and [reserve](/v1/language-elements/statements#reserve-statement) statements on the [statements](/v1/language-elements/statements) page if you need more information about the syntax.
