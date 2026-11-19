---
title: Development - v3
description: Learn about the development process of Textwire, including debug mode and File Watcher that refreshes template files on changes, making development faster and easier
outline: deep
---

# Development

This guide covers development features to make building with Textwire faster.

## File Watcher <Badge type="warning" text="beta" />

File Watcher watches all of your template files for changes and automatically reparses them when they are modified. It doesn't work with `TemplateFS` configuration enabled! Disable it to use file refresh functionality.

:::warning Only For Development
This is intended for development use only and should not be enabled in production due to performance implications.
:::

### Configuration Example

```go
import (
	"os"
	"github.com/textwire/textwire/v3"
	"github.com/textwire/textwire/v3/config"
)

tpl, err := textwire.NewTemplate(&config.Config{
    FileWatcher: os.Getenv("APP_ENV") == "development",
})
```

### Watcher Interval

You can set `WatcherInterval` in your config to change how often Textwire checks for changes in template files when `FileWatcher` is enabled. The higher the interval, the less frequently Textwire checks for file changes, which can reduce CPU usage but may delay updates. Values less than 1 second will be treated as the default (1 second). Adjust this value based on your development needs.

File Watcher doesn't reload your browser automatically when changes are detected. You will need to refresh your browser manually to see the updates. This allows you to control when you want to see the changes without being interrupted by automatic reloads.
