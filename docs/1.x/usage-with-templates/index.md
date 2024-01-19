# Usage with Templates

One of the main Textwire features is the ability to use it as a template engine for Go projects. Using it as template engine is split into 3 steps:

1. Create a template file with the extension `.textwire.html`
1. Parse the template file using the `textwire.ParseTemplate` function
1. Evaluate the template file using the `Evaluate` function on the parsed template

```go
func homeHandler() http.HandlerFunc {
	tpl, err := textwire.ParseTemplate("home")

	if err != nil {
		fmt.Println(err)
	}

	return func(w http.ResponseWriter, r *http.Request) {
		vars := map[string]interface{}{
			"title": "Hello, World!",
			"age":   23,
		}

		err := tpl.EvaluateResponse(w, vars)

		if err != nil {
			fmt.Println(err)
		}
	}
}
```

We first parse the template because it is more efficient to parse the template once when the application starts and then evaluate it when certain routes are called.

The `textwire.ParseTemplate` function accepts a string as its only argument. This string is the name of the template file without the extension. In this example, we have a template file called `home.textwire.html` and we pass the name of the file without the extension, which is `home`.

In return, we get a `Template` object that we can use to evaluate the template. The `EvaluateResponse` function accepts a `http.ResponseWriter` object and a map of variables that we want to inject into the template. The `EvaluateResponse` function will then evaluate the parsed template and print the result to the `http.ResponseWriter` object.

### Layouts

Defining a layout in Textwire is very simple. You need to create a file anywhere inside of your template files. Many developers just create a `layouts` directory for different layouts because you might have a main layout, one for admin panel, one for user cabinet and so on. All textwire files should end with `*.textwire.html` file extension.

This is what a layout file might look like:

```html
<!DOCTYPE html>
<html lang="{{ locale }}">
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

### Reserve space
The "reserve" keyword is used to reserve a place for dynamic content that you can insert later. For example, you can reserve a place for the title of the page and then insert it later. Here is an example of inserting a title and content:

```html
{{ layout "layouts/main" }}

{{ insert "title", "Home page" }}

{{ insert "content" }}
    <h1>Hello, World!</h1>
    <p>This is a home page.</p>
{{ end }}
```

First, we use the layout "layouts/main" so that parser knows which layout to use. Then we insert the title and content into reserved places. The first argument is the name of the reserved place and the second argument is the value that we want to insert.

As you can see there are two ways we can define the content. We can either use the `{{ insert "content" }}` and `{{ end }}` keywords and define content between them, or we can use the `{{ insert "title", "Home page" }}` and pass content as the second argument. The first way is useful when you want to insert a lot of content and the second way is useful when you want to insert a single line of content.

### Using layout

The "layout" keyword is used to specify which layout to use. Assuming that our layout is placed in the "layouts" folder and called "main.textwire.html", we can use it like this:

```html
{{ layout "layouts/main" }}
```

`"layouts/main"` is the relative path to the layout file. If you have deeply nested files and don't want to always specify the relative path, you can use the set the [aliases](#define-aliases).

### Inserting content

The "insert" keywords is used to insert the content into the reserved place in layout file. Here is an example of inserting the content into layout:

```html
{{ layout "layouts/main" }}

{{ insert "content" }}
    <h1>Hello, World!</h1>
{{ end }}
```