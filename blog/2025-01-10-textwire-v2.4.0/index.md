---
title: "v2.4.0 Release Notes"
description: "Get to know details about the Textwire version 2.4.0 release by reading the complete release notes"
authors: [serhiicho]
tags: [release]
---

The Textwire version `v2.4.0` is an important release. The first release in 2025. It adds several convenient features and improvements to the language. This release includes Component Path Alias, introduction of new built-in functions, and more. Read the complete release notes to learn more about the changes.

<!-- truncate -->

## Component Path Alias
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

## New `trimRight` and `trimLeft` Functions
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

## New `repeat` Function
A new function [`repeat`](/docs/v2/functions/str#repeat) is added to strings. The function repeats a string a specified number of times. The function takes a single argument, the number of times to repeat the string.

```textwire title="Example"
<span>{{ '🤣'.repeat(5) }}</span>
```

```textwire title="Output"
<span>🤣🤣🤣🤣🤣</span>
```

## New `append` and `prepend` Functions
Two new functions [`append`](/docs/v2/functions/arr#append) and [`prepend`](/docs/v2/functions/arr#prepend) are added to arrays. The `append` function adds one or more elements to the end of an array and returns a new array. The `prepend` function adds one or more elements to the beginning of an array and returns a new array.

```textwire title="Example"
<span>{{ ["one", "two"].append("three", "four") }}</span>
```

```textwire title="Output"
<span>one, two, three, four</span>
```

```textwire title="Example"
<span>{{ ["one", "two"].prepend("three", "four") }}</span>
```

```textwire title="Output"
<span>three, four, one, two</span>
```


## New `@dump` Directive
The `@dump` directive is used for debugging purposes. It will print the value of the passed variables, objects, arrays, etc. to the output. Here is an example of using the `@dump` directive:

```textwire title="Example"
<h1>This is my title</h1>

{{
    user = {
        name: "John",
        age: 25,
        admin: false,
        hobbies: ["reading", "coding"],
    }
}}

@dump(user)

<p>Some content</p>
```

The output would look like something like this:

<img src="/img/dump-object.png" title="Dump object in Textwire" width="400" />