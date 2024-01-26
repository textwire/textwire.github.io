# Getting Started

Welcome to Textwire, a powerful templating interpreter designed for Go developers. Textwire provides a seamless way to inject variables into your HTML files, making it easier to create dynamic and data-driven content. This guide will walk you through the essential steps to get started with Textwire in your Go projects.

## Installation

Install the Textwire package in your Go environment. You can do this by running the following command:

```bash
go get -u github.com/textwire/textwire
```

## Configuration

To apply configurations to Textwire, you need to import the `github.com/textwire/textwire` package in your main Go file and use the `NewConfig` function to specify the configurations. The `NewConfig` function accepts a `Config` struct as its only argument.

```go
func main() {
    textwire.New(textwire.Config{
        // Configurations go here
    })
}
```

Non of the configurations are required, especially if you are using Textwire not as a template engine but as program to inject dynamic content into files. You can read more about that in the [Interpreter](#interpreter) section.

### Available Configurations

| Property      | Type     | Description of the configuration                          | Example value      | Default value      |
| ------------- | -------- | --------------------------------------------------------- | ------------------ | ------------------ |
| `TemplateDir` | `string` | The directory where Textwire will look for template files | `"src/templates"`  | `"templates"`      |
| `TemplateExt` | `string` | The extension of the template files                       | `".textwire.html"` | `".textwire.html"` |

### Example of setting configurations

```go
func main() {
    textwire.New(textwire.Config{
        TemplateDir: "src/templates",
    })
}
```

## Interpreter

You can use Textwire to parse and evaluate a string that contains Textwire syntax. This is useful if you want to inject dynamic content into an email template or a markdown file. It could be anything really. You can still use all the Textwire features like "if statements", "for statements", "ternary expressions" and so on.

There are 2 ways of how to do it, either by interpreting a string or by interpreting a file. Let's look at both ways.

### Interpret a string

todo: here

### Interpret a file

todo: here

### Textwire as a template engine

If you want to know how to use Textwire as a template engine, you can read the [Usage with Templates](/1.x/usage-with-templates) page.