# Getting Started

Welcome to Textwire, a powerful template evaluate designed for Go developers. Textwire provides a seamless way to inject variables into your HTML files, making it easier to create dynamic and data-driven content. This guide will walk you through the essential steps to get started with Textwire in your Go projects.

## Installation

Install the Textwire package in your Go environment. You can do this by running the following command:

```bash
go get -u github.com/textwire/textwire
```

## Evaluate a string

You can use the `EvaluateString` function to compile and evaluate a string containing Textwire code. The `EvaluateString` function accepts a string and a map of variables that you want to inject into the string. Here is an example:

```go
inp := `Hello <b>{{ name }}</b>! Congratulations on your {{ age }}th birthday!`

result, err := textwire.EvaluateString(inp, map[string]interface{}{
    "name": "Serhii",
    "age": 33
})

err.FatalOnError()
```

## Evaluate a file

Evaluating a file can be done with the `EvaluateFile` function. The `EvaluateFile` function accepts a path to the file that contains Textwire code and a map of variables that you want to inject into the file. Here is an example:

```go
path := "path/to/file.tw.html"

result, err := textwire.EvaluateFile(path, map[string]interface{}{
    "name": "Anna",
    "age":  25,
})

err.FatalOnError()
```

## Textwire as a template engine

Using Textwire as a template includes lots of steps, like setting up the configurations and evaluating the templates. Read about everything related to using Textwire as a template engine in the [Usage with Templates](/1.x/usage-with-templates) section.