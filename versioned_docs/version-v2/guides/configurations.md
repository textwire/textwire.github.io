---
title: Configurations - v2
sidebar_label: Configurations
sidebar_position: 7
description: Learn how to setup and configure Textwire in your Go applications
---

# Configurations
Textwire has a few configurations that you can set to customize the behavior of the library. You can set the configurations using the `textwire.Configure` function or pass the config to `textwire.NewTemplate` function if you use templates.

## Setting Configurations
Here is the most basic example of how you can set the configurations:

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
| Property      | Type     | Description of the configuration                          |  Default value |
| ------------- | -------- | --------------------------------------------------------- | -------------- |
| `TemplateDir` | `string` | The directory where Textwire will look for template files | `"templates"`  |
| `TemplateExt` | `string` | The extension of the template files                       | `".tw.html"`   |

:::info Recommended
It's recommended to use `TemplateExt` setting with `.tw` extension, because `.tw.html` is a bit longer and might be removed in the future major versions of Textwire.
:::

:::warning Loosing extension benefits
Keep in mind that if you use VSCode and you change `TemplateExt` to something else than `.tw` or `.tw.html`, you will lose the syntax highlighting for Textwire files if you use the [Textwire extension](https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire).
:::