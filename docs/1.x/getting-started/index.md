# Getting Started

Welcome to Textwire, a powerful templating language designed for Go developers. Textwire provides a seamless way to inject variables into your HTML files, making it easier to create dynamic and data-driven content. This guide will walk you through the essential steps to get started with Textwire in your Go projects.

## Installation

Install the Textwire package in your Go environment. You can do this by running the following command:

```bash
go get -u github.com/textwire/textwire
```

## Configuration

To apply configurations to Textwire, you need to import the `github.com/textwire/textwire` package in your main Go file and use the `NewConfig` function to specify the configurations. The `NewConfig` function accepts a `Config` struct as its only argument.

```go
func main() {
    textwire.NewConfig(textwire.Config{
        // Configurations go here
    })
}
```

### Available Configurations

| Property      | Type     | Description of the configuration                          | Example value      | Default value      |
| ------------- | -------- | --------------------------------------------------------- | ------------------ | ------------------ |
| `TemplateDir` | `string` | The directory where Textwire will look for template files | `"src/templates"`  | `"templates"`      |
| `TemplateExt` | `string` | The extension of the template files                       | `".textwire.html"` | `".textwire.html"` |

### Example of setting configurations

```go
func main() {
    textwire.NewConfig(textwire.Config{
        TemplateDir: "src/templates",
        TemplateExt: ".html",
    })
}
```