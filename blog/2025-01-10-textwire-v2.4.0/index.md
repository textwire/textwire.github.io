---
title: "v2.4.0 Release Notes"
description: "Get to know details about the Textwire version 2.4.0 release by reading the complete release notes"
authors: [serhiicho]
tags: [release]
---

The Textwire version `v2.4.0` is an important release. The first release in 2025. It adds several convenient features and improvements to the language. This release includes Component Path Alias, introduction of new built-in functions, and more. Read the complete release notes to learn more about the changes.

<!-- truncate -->

## Features Added
### Component Path Alias
Component Path Alias is a small but useful feature that is useful for people who will keep their components in the `components` directory. The `~` alias can be used to reference components in the `components` directory.

Consider this example of calling a `components/post-card` component before the version `v2.4.0`:

```textwire
<div class="posts">
    @each(post in posts)
        @component("components/post-card", { post })
    @end
</div>
```

Now you can repleace the `components/` part with `~` alias like so:

```textwire
<div class="posts">
    @each(post in posts)
        @component("~post-card", { post })
    @end
</div>
```

The `~` alias will be replaced with `components/` behind the scenes.

### New Built-in Functions
The `v2.4.0` release introduces new built-in functions that can be used in your Textwire templates.

#### `trimRight` and `trimLeft` Functions
A couple of people suggested to add [`trimRight`](/docs/v2/functions/str#trimright) and [`trimLeft`](/docs/v2/functions/str#trimleft) functions and now they are available in the `v2.4.0` release. We already had the [`trim`](/docs/v2/functions/str#trim) function for trimming both sides of a string, but now you can trim only the left or right side of a string if that's what you need.

The usage is simple:

```textwire title="Example"
<span>{{ " Textwire ".trim() }}</span>
```

```textwire title="Output"
<span>Textwire</span>
```

You can also pass a string of characters to trim from a string:

```textwire title="Example"
<span>{{ "_Textwire".trimLeft('_') }}</span>
```

```textwire title="Output"
<span>Textwire</span>
```