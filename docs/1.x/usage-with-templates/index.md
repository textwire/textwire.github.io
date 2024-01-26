# Usage with Templates

One of the main Textwire features is the ability to use it as a template engine for Go projects. Using it as template engine is split into 3 steps:

1. Create a template file with the extension `.textwire.html`
1. Parse the template file using the `textwire.ParseTemplate` function
1. Evaluate the template file using the `Evaluate` function on the parsed template

```go
func homeHandler(w http.ResponseWriter, r *http.Request) {
    data := map[string]interface{}{
        "title": "Hello, World!",
        "age":   23,
    }

    err := tpl.View(w, "home", data)

    if err != nil {
        fmt.Println(err) // handle error
    }
}
```

We first parse the template because it is more efficient to parse the template once when the application starts and then evaluate it when certain routes are called.

The `textwire.ParseTemplate` function accepts a string as its only argument. This string is the name of the template file without the extension. In this example, we have a template file called `home.textwire.html` and we pass the name of the file without the extension, which is `home`.

In return, we get a `Template` object that we can use to evaluate the template. The `EvaluateResponse` function accepts a `http.ResponseWriter` object and a map of variables that we want to inject into the template. The `EvaluateResponse` function will then evaluate the parsed template and print the result to the `http.ResponseWriter` object.

## Layouts

Defining a layout in Textwire is very simple. You need to create a file anywhere inside of your template files. Many developers just create a "layouts" directory for different layouts because you might have a main layout, one for admin panel, one for user cabinet and so on.

### Reserve space in the layout

The `reserve` keyword is used to reserve a place for dynamic content that you can insert later in the layout. For example, you can reserve a place for the title of the page and then insert it later. Here is an example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ reserve "title" }}</title>
</head>
<body>
    {{ reserve "content" }}
</body>
</html>
```

We reserve a place for the title and content of the page. We can then insert the title and content into these reserved places.

### Insert content into reserved space

The `insert` keyword is used to insert content into reserved places. Insert statement can be defined in 2 ways, with and without the body. In the example below, we define the insert for "title" without the body, and for "content" with the body.

Let's take a look at the example how I would define a `home.textwire.html` and then I'll explain each part of it:

```html
{{ use "layouts/main" }}

{{ insert "title", "Home page" }}

{{ insert "content" }}
    <h1>Hello, World!</h1>
    <p>This is a home page.</p>
{{ end }}
```

- First, we tell which layout we want to use by providing a path to the layout
- Then we insert the title into layout with the value "Home page"
- Then we insert the content into layout with the HTML body.

You can read more about [use](/1.x/language-elements#use-statement), [insert](/1.x/language-elements#insert-statement) and [reserve](/1.x/language-elements#reserve-statement) statements on the [statements](/1.x/language-elements#statements) page if you need more information about the syntax.