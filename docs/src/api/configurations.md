---
title: Configurations - v6
description: Learn how to setup and configure Textwire in your Go applications
---

# Configurations

Textwire provides configuration options to customize template behavior. You can apply these settings in two ways:

1. **Using `textwire.Configure`:**
   Set app-wide defaults for templates created afterward.

2. **Passing to `textwire.NewTemplate`:**
   Set options for that template instance, overriding the app-wide defaults.

> [!NOTE] Configuration Scope
> Settings passed to `Configure` and `NewTemplate` apply when you use Textwire as a templating system.
>
> For simple string evaluations with `EvaluateString` or `EvaluateFile`, configurations are ignored.

## How Configurations Are Resolved

Each template resolves its configuration in three layers, where every later layer overrides the previous one:

1. Built-in defaults
2. Settings passed to `textwire.Configure`
3. Options passed to `textwire.NewTemplate`

A `Template` keeps the config it was created with. Creating another template doesn't change the component depth limit, global data, error paths, or any other setting of templates that already exist. Calling `Configure` doesn't change them either: it only affects templates created afterward. Rendering is also safe to run while another goroutine calls `NewTemplate` or `Configure`.

For example:

```go
textwire.Configure(&config.Config{
    TemplateDir:       "templates",
    MaxComponentDepth: 100,
})

// Depth is 100, taken from Configure
appTpl, _ := textwire.NewTemplate(nil)

// Depth is 10, overridden for this template only
previewTpl, _ := textwire.NewTemplate(&config.Config{
    TemplateDir:       "templates",
    MaxComponentDepth: 10,
})
```

## Setting Configurations

For detailed instructions on using `textwire.NewTemplate`, refer to the [Usage with Templates](/api/template-usage) guide. Below is a basic example of setting configurations with `textwire.Configure`:

```go
import (
    "github.com/textwire/textwire/v6"
    "github.com/textwire/textwire/v6/config"
)

func main() {
    textwire.Configure(&config.Config{
        TemplateDir: "my-templates",
        DebugMode:   true,
    })
}
```

In the example above, `TemplateDir` applies only when using Textwire as a template engine for your project. For evaluating individual Textwire files or strings, this configuration is not required.

`Configure` applies the settings you pass to the app-wide config used by templates created afterward. Passing `nil` doesn't reset your settings.

All Textwire configurations are optional and include sensible default values. Read more about the available configurations below.

## Available Configurations

| Property          | Description                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TemplateDir`     | The directory where Textwire searches for template files.<br><br>- Type: `string`<br>- Default: `"templates"`                                                                                                                          |
| `TemplateFS`      | Provides an optional fs.FS filesystem for template access. Use this field to embed templates into your binary using Go's embed package. [Read more](/api/template-embedding).<br><br>- Type: `fs.FS`<br>- Default: `os.DirFS(TemplateDir)` |
| `TemplateExt`     | The file extension for template files.<br><br>- Type: `string`<br>- Default: `".tw"`                                                                                                                                                    |
| `ErrorPagePath`   | The path to the custom error page, relative to the `TemplateDir` directory. Custom error pages are displayed only when `DebugMode` is `false`.<br><br>- Type: `string`<br>- Default: `""`                                               |
| `DebugMode`       | A flag that enables debug mode. When enabled, error messages are displayed in the browser. [Read more](/api/error-handling).<br><br>- Type: `bool`<br>- Default: `false`                              |
| `GlobalData`      | Global data accessible in all Textwire files. [Read more](#global-data).<br><br>- Type: `map[string]any`<br>- Default: `map[string]any{}`                                                                                                        |
| `FileWatcher`     | Enables the File Watcher to watch Textwire files for changes and refresh the content. [Read more](/api/development#file-watcher).<br><br>- Type: `bool`<br>- Default: `false` |
| `WatcherInterval` | Changes how frequently the File Watcher checks for changes in your templates. You cannot set the value lower than a second. [Read more](/api/development#watcher-interval).<br><br>- Type: `time.Duration`<br>- Default: `time.Second` |
| `MaxComponentDepth` | Limits how many component directives can be rendering inside each other at the same time during one render. It stops a component that includes itself, directly or through other components, with an error instead of crashing the program with a stack overflow. Only nesting counts: components rendered one after another, like inside of a loop, don't add up. Values less than 1 are treated as the default.<br><br>- Type: `int`<br>- Default: `500` |

> [!WARNING] Extension Compatibility
> If you are using VSCode and change the `TemplateExt` setting to anything other than `.tw`, you will lose syntax highlighting for Textwire files provided by the [Textwire extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire). To maintain full extension functionality, use `.tw` as the extension for Textwire files.

## Global Data

Global data allows you to share values from your Go code across all Textwire templates. This is useful for environment variables, authenticated user data, and similar global information. Use the `GlobalData` configuration for this purpose. Example:

```go :line-numbers
import (
    "os"
    "github.com/textwire/textwire/v6"
    "github.com/textwire/textwire/v6/config"
)

tpl, err = textwire.NewTemplate(&config.Config{
    ErrorPagePath: "error-page",
    DebugMode:     true,
    GlobalData: map[string]any{
        "env":  os.Getenv("APP_ENV"),
        "auth": auth.User(),
    },
})
```

You can access your global data in any Textwire template using the `global` object. Example:

```textwire
@if(global.env == "development")
    <p>You are in development mode</p>
@end

@if(global.auth == nil)
    <p>Please log in.</p>
@else
    <p>Welcome, {{ global.auth.name }}!</p>
@end
```

The `global` object is read-only. Writing to `global`, one of its properties, an array element, or a value aliased from it results in an error. Use a local variable or a copy when a template needs a modified value.

The `global` identifier is a reserved word and cannot be used for variable names. Read more about [reserved variables](/intro#reserved-variable-names).
