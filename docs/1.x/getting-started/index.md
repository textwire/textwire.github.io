# Getting Started

Welcome to Textwire, a powerful template evaluate designed for Go developers. Textwire provides a seamless way to inject variables into your HTML files, making it easier to create dynamic and data-driven content. This guide will walk you through the essential steps to get started with Textwire in your Go projects.

Textwire has an elegant and easy-to-use syntax that is designed to be familiar to developers who have experience with other template languages. On the [Language Elements](/1.x/language-elements/) page you can find all the available statements and directives that you can use in your Textwire templates.

## Installation

Install the Textwire package in your Go environment. You can do this by running the following command:

```bash
go get -u github.com/textwire/textwire
```

## Usage with Templates

### Template Configuration

To use Textwire as a template language, you need to import the `github.com/textwire/textwire` package and create a new Template instance. You can ether pass `nil` or a `*textwire.Config` to the `NewTemplate` function. The `*textwire.Config` is used to configure the template language.

```go
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

#### Available Configurations

| Property      | Type     | Description of the configuration                          | Example value     | Default value |
| ------------- | -------- | --------------------------------------------------------- | ----------------- | ------------- |
| `TemplateDir` | `string` | The directory where Textwire will look for template files | `"src/templates"` | `"templates"` |
| `TemplateExt` | `string` | The extension of the template files                       | `".html"`         | `".tw.html"`  |


### Write response to the client

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

### Layouts

Defining a layout in Textwire is very simple. You need to create a file anywhere inside of your template files. Many developers just create a "layouts" directory for different layouts because you might have a main layout, one for admin panel, one for user cabinet and so on.

#### Reserve space in the layout

The `reserve` statement (directive) is used to reserve a place for dynamic content that you can insert later in the layout. For example, you can reserve a place for the title of the page and then insert it later. Here is an example:

```html
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

#### Insert content into reserved space

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

You can read more about [use](/1.x/language-elements/#use-statement), [insert](/1.x/language-elements/#insert-statement) and [reserve](/1.x/language-elements/#reserve-statement) statements on the [statements](/1.x/language-elements/#statements) page if you need more information about the syntax.

## Evaluate a string

You can use the `EvaluateString` function to compile and evaluate a string containing Textwire code. The `EvaluateString` function accepts a string and a map of variables that you want to inject into the string. Here is an example:

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

## Evaluate a file

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