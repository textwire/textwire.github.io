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