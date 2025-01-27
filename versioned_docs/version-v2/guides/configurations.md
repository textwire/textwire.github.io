---
title: Configurations - v2
sidebar_label: Configurations
sidebar_position: 7
description: Learn how to setup and configure Textwire in your Go applications
---

# Configurations
Textwire offers several configuration options to customize its behavior. You can apply these settings in two ways:

1. **Using `textwire.Configure`:**
   Call the `textwire.Configure` function to set global configurations for the library.

2. **Passing to `textwire.NewTemplate`:**
   Pass the configuration directly to the `textwire.NewTemplate` function when creating templates, allowing you to customize behavior on a per-template basis.

## Setting Configurations
To learn how to set configurations using `textwire.NewTemplate`, refer to the [Usage with Templates](/docs/v2/guides/template-usage) guide. Below is a basic example of setting configurations with `textwire.Configure`:

```go
import (
    "github.com/textwire/textwire/v2"
    "github.com/textwire/textwire/v2/config"
)

func main() {
    textwire.Configure(&config.Config{
        TemplateDir: "templates",
        TemplateExt: ".tw", // recommended to use .tw extension
    })
}
```

In the example above the `TemplateDir` and `TemplateExt` make sense only if you use Textwire as a template engine for your project. For things like evaluating a single Textwire file or a string, you don't need to set these configurations.

All the configurations in Textwire are optional, because each configuration has a default value. Read more about the available configurations below.

## Available Configurations
| Property        | Type     | Description of the configuration                                                                     | Default value |
| --------------- | -------- | ---------------------------------------------------------------------------------------------------- | ------------- |
| `TemplateDir`   | `string` | The directory where Textwire will look for template files | `"templates"` |
| `TemplateExt`   | `string` | The extension of the template files | `".tw.html"` |
| `ErrorPagePath` | `string` | The relative path to the custom error page. It's relative to the `TemplateDir` directory. Custom error page is displayed only when `DebugMode` is set to `false` | `""` |
| `DebugMode`     | `bool`   | Is a flag to enable the debug mode. With this mode enabled you can see error messages in the browser. Read about the error handling [here](/docs/v2/guides/error-handling) | `false` |

:::info Recommended
We recommend using the `TemplateExt` setting with the `.tw` extension. The `.tw.html` extension is longer and may be deprecated in future major versions of Textwire.
:::

:::warning Losing Extension Features
If you are using VSCode and change the `TemplateExt` setting to anything other than `.tw` or `.tw.html`, you will lose syntax highlighting for Textwire files provided by the [Textwire extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire). To retain full extension functionality, change the extension to `.tw` for Textwire files.
:::