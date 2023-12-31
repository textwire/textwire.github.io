# Textwire. A template language for Go.

> WARNING: Textwire is still in development and is not ready for production use.

Textwire is a simple yet powerful template language for Go. It is designed to easily inject variables from Go code into a template file or just a regular string. It is inspired by Go's syntax and has a similar syntax to make it easier for Go developers to learn and use it.

Keep in mind that this is a separate language and has nothing to do with Go. It just has a similar syntax to make it easier for Go developer to learn and use it. As for example, you can't write `{{ true ? "yes" : "no" }}` in Go, but you can do it in Textwire.

## 🚀 Get started

Before we start using Textwire as a templating language, we need to tell it where to look for the template files. We can do that by using the `textwire.SetConfig` function only once in our `main.go` file. Here is an example of setting the configurations:

```go
func main() {
    textwire.SetConfig(textwire.Config{
        TemplateDir: "src/views/templates",
    })
}
```

With this configuration in place, Textwire will scan the content of the `src/views/templates` folder and all of its subfolders for template files. It will then cache them so that it doesn't scan the folder every time you want to parse a file.

To print the content of the template file, we can use the `textwire.ParseFile` function. Here is an example of parsing a template file:

```go
func main() {
	http.HandleFunc("/", homeView)
	fmt.Println("Listening on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}

func homeView(w http.ResponseWriter, r *http.Request) {
	vars := map[string]interface{}{
		"title": "Hello, World!",
		"age":   23,
	}

	err := textwire.PrintFile(w, "home", vars)

	if err != nil {
		fmt.Println(err)
	}
}
```

In this example, for our home page, we tell Textwire to use the "home.textwire.html" file and pass the variables that we want to inject into the template. The `textwire.PrintFile` function will then parse the file and print the result to the `http.ResponseWriter` object.

## 💡 Features

## 🔍 Parse a string

One way of using Textwire is to use it to parse a string with embedded variables. It is useful for rendering emails or other text-based content that you want to inject variables into.

```go
import "github.com/textwire/textwire"

str := `
    Hello {{ name }}! Thank you for your order #{{ orderNumber }}.
    As a gift, we give you a {{ discount }} discount on your next order.
`

vars := map[string]interface{}{
    "name": "John Doe",
    "orderNumber": 12,
    "discount":  "10%",
}

parsed, err := textwire.ParseStr(str, vars)
```

Variable **"parsed"** will now contain the parsed string with the injected variables. If there is an error, the **"err"** variable will contain the error.

## 📃 Usage with templates

You can use Textwire as a template language for your Server Side Rendered (SSR) web applications. Let's take a look what features you can use to build your templates.

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

## 📏 Define aliases

You can define aliases for specific paths so that you don't have to always specify the relative path to the layout file. For example, if you have a layout file in the "src/views/templates/layouts" folder, you can set an alias for it like this:

```go
textwire.SetAliases(map[string]string{
    "@layouts": "src/views/templates/layouts",
})
```

After setting the alias, you can use it like this:

```html
{{ layout "@layouts/main" }}
```

If you've used aliases on the frontend with Webpack, you will find this feature very familiar and useful.

## 📖 Language syntax

Textwire is designed to be easy to use for Go developers. It has a similar syntax to Go, but it is a separate language and has specific grammar to make it easier to use as a template language.

Textwire code can only be defined inside of the `{{ }}` brackets. If you want to write a regular HTML code, you can do it outside of the brackets. Code inside brackets is a single expression and can't be split into multiple lines.

❌ Incorrect expression

```html
{{ x := 5; y := 10 }}
```

✅ Correct expression

```html
{{ x := 5 }}
{{ y := 10 }}
```

All the bracket statements return either an empty string or a string. For example, `{{ x := 5 }}` will return an empty string, but `{{ 5 + 5 }}` will return "10".

There are special bracket statements that need to be closed with `{{ end }}` keyword. For example, [if statements](#if-statements) and [for statements](#for-statements).

Let's take a look at what features are available in Textwire.

- Statements
    - 🚧 [If statements](#if-statements) `{{ if x == 1 }}`
    - 🚧 [For statements](#for-statements) `{{ for i, name := range names }}`
    - 🚧 [Variable declaration](#variable-declaration) `{{ x := 5 }}`
- Expressions
    - 🚧 [Ternary expressions](#ternary-expressions) `{{ x ? y : z }}`
    - ✅ [Prefix expressions](#prefix-expressions) `{{ !x` or `-x }}`
    - ✅ [Infix expressions](#infix-expressions) `{{ x * (y + 3) }}`
- Literals
    - ✅ [String literals](#string-literals) `{{ "Hello, World!" }}`
    - ✅ [Integer literals](#integer-literals) `{{ 123 }}` or `{{ -234 }}`
    - ✅ [Float literals](#float-literals) `{{ 123.456 }}`
    - ✅ [Boolean literals](#boolean-literals) `{{ true }}`
    - ✅ [Nil literal](#nil-literals) `{{ nil }}`
    - 🚧 [Slice literals](#slice-literals) `{{ []int{1, 2, 3} }}`

### Statements

#### If statements

You can use if statements to conditionally render content. Here is an example of using if statements:

```html
{{ if x == 1 }}
    <p>x is equal to 1</p>
{{ else if x == 2 }}
    <p>x is equal to 2</p>
{{ else }}
    <p>x is not equal to 1 or 2</p>
{{ end }}
```

#### For statements

You can use for statements to iterate over slices. Here is an example of using for statements:

```html
{{ for i, name := range names }}
    <p>{{ i }}. {{ name }}</p>
{{ end }}
```

#### Variable declaration

You can declare variables in 2 ways, either by using the `:=` operator or by using the `var` keyword. Here is an example of declaring variables:

```html
{{ x := 5 }}
{{ var y = 10 }}
```

### Expressions

#### Ternary expressions

You can use ternary expressions to conditionally render content. Here is an example of using ternary expressions:

```html
<span>{{ x == 1 ? "yes" : "no" }}</span>
```

#### Prefix expressions

You can use prefix expressions to negate or invert a boolean value. Here is an example of using prefix expressions:

```html
<span>{{ !isTall ? "Not tall" : "Is tall" }}</span>
<span>{{ -x }}</span>
```

#### Infix expressions

You can use infix expressions to perform arithmetic operations. Here is an example of using infix expressions:

```html
<ul>
    <li>{{ x + y }}</li> <!-- Addition -->
    <li>{{ x - y }}</li> <!-- Subtraction -->
    <li>{{ x * y }}</li> <!-- Multiplication -->
    <li>{{ x / y }}</li> <!-- Division -->
    <li>{{ x % y }}</li> <!-- Modulo -->
    <li>{{ (x + 2) / (y * (4 - c)) }}</li> <!-- Grouped expressions -->
</ul>
```

### Literals

#### String literals

You can use string literals and concatenate them with other strings. Here is an example of using string literals:

```html
{{ "Hello" + "World!" }}
```

#### Integer literals

You can use integer literals and perform arithmetic operations with them. Here is an example of using integer literals:

```html
<span>{{ 1 + 2 }}</span>
```

#### Nil literal

You can use nil literal to check if a variable is nil. Here is an example of using nil literal:

```html
{{ if x == nil }}
    <p>x is nil</p>
{{ end }}
```

#### Float literals

You can use float literals and perform arithmetic operations with them. Here is an example of using float literals:

```html
<span>{{ 1.5 + 2.5 }}</span>
```

#### Boolean literals

You can use boolean literals to check if a variable is true or false. Here is an example of using boolean literals:

```html
{{ if isTall == true }}
    <p>Is tall</p>
{{ end }}
```

#### Slice literals

Defining a slice in Textwire is done is a similar way as in Go. Here is an example of defining a slice:

```html
{{ names := []string{"John", "Jane", "Jack"} }}

<ul>
    {{ for _, name := range names }}
        <li>{{ name }}</li>
    {{ end }}
</ul>
```

## 🧰 Installation

You can install the latest Textwire version by running the following command:

```bash
go get github.com/textwire/textwire
```