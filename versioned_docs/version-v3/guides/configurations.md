---
title: Configurations - v3
sidebar_label: Configurations
sidebar_position: 7
description: Learn how to setup and configure Textwire in your Go applications
---

# Configurations
Textwire provides configuration options to customize template behavior. You can apply these settings in two ways:

1. **Using `textwire.Configure`:**
   Call the `textwire.Configure` function to set global configurations for the library.

2. **Passing to `textwire.NewTemplate`:**
   Pass the configuration directly to the `textwire.NewTemplate` function when creating templates.

:::info
Setting configurations with `Configure` and `NewTemplate` functions is only applied when you use Textwire as templating system. 

For simple string evaluations with `EvaluateString` or `EvaluateFile`, configurations are ignored.
:::

## Setting Configurations
For detailed instructions on using `textwire.NewTemplate`, refer to the [Usage with Templates](/docs/v3/guides/template-usage) guide. Below is a basic example of setting configurations with `textwire.Configure`:

```go
import (
    "github.com/textwire/textwire/v3"
    "github.com/textwire/textwire/v3/config"
)

func main() {
    textwire.Configure(&config.Config{
        TemplateDir: "my-templates",
        DebugMode:   true,
    })
}
```

In the example above, `TemplateDir` applies only when using Textwire as a template engine for your project. For evaluating individual Textwire files or strings, this configuration is not required.

All Textwire configurations are optional and include sensible default values. Read more about the available configurations below.

## Available Configurations
| Property        | Type            | Description                                                                                              | Default value        |
| --------------- | --------------- | -------------------------------------------------------------------------------------------------------- | -------------------- |
| `TemplateDir`   | `string`        | The directory where Textwire searches for template files                                                 | `"templates"`        |
| `TemplateExt`   | `string`        | The file extension for template files                                                                     | `".tw"`              |
| `ErrorPagePath` | `string`        | The path to the custom error page, relative to the `TemplateDir` directory. Custom error pages are displayed only when `DebugMode` is `false` | `""`                 |
| `DebugMode`     | `bool`          | A flag that enables debug mode. When enabled, error messages are displayed in the browser. Read more in the [Error Handling guide](/docs/v3/guides/error-handling) | `false`              |
| `GlobalData`    | `map[string]any`| Global data accessible in all Textwire files. Read more [here](#global-data)                             | `map[string]any{}`   |

:::warning Extension Compatibility
If you are using VSCode and change the `TemplateExt` setting to anything other than `.tw`, you will lose syntax highlighting for Textwire files provided by the [Textwire extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire). To maintain full extension functionality, use `.tw` as the extension for Textwire files.
:::

## Global Data
Global data allows you to share values from your Go code across all Textwire templates. This is useful for environment variables, authenticated user data, and similar global information. Use the `GlobalData` configuration for this purpose. Here is an example:

```go title="main.go"
import (
    "log"
    "os"
    "github.com/textwire/textwire/v3"
    "github.com/textwire/textwire/v3/config"
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

You can access your global data in any Textwire template using the `global` object. Here is an example:

```textwire title="home.tw"
@if(global.env == "development")
    <p>You are in development mode</p>
@end

@if(global.auth == nil)
    <p>Please log in.</p>
@else
    <p>Welcome, {{ global.auth.name }}!</p>
@end
```

The `global` identifier is a reserved word and cannot be used for variable names. Read more about [reserved variables](/docs/v3/introduction#reserved-variable-names).
