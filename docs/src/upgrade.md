---
title: Upgrade Guide - v6
description: Learn how to upgrade your Textwire code from v5 to v6
outline: deep
---

# Upgrade Guide

Upgrading from v5 to v6 introduces two breaking changes: the `loop` object scope in nested loops and loop control directives crossing component boundaries.

## Breaking Changes

### Relative `loop` Object in Nested Loops

In v5, the `loop` object inside a nested loop referred to the parent loop. In v6, `loop` is relative to the current loop. If you need metadata from the parent loop, use `loop.parent`.

For example, in v5 this printed the parent loop index:

```textwire
@each(group in groups)
    @each(item in group.items)
        {{ loop.index }}
    @end
@end
```

In v6, `loop.index` refers to the current inner loop. To keep the old behavior, use `loop.parent.index`:

```textwire
@each(group in groups)
    @each(item in group.items)
        {{ loop.parent.index }}
    @end
@end
```

This also applies to other `loop` properties such as `loop.first`, `loop.last`, and `loop.iter`. Non-nested loops are not affected. Closes [#138](https://codeberg.org/textwire/textwire/issues/138).

### Loop Control Directives Across Component Boundaries

In v5, using a loop control directive (`@break`, `@continue`, `@breakif`, or `@continueif`) inside a component body to control a loop outside that component was silently ignored. In v6, it results in a parser error.

Components are now a boundary for loop control, even though the component body can access variables from the surrounding scope.

```textwire
@each(name in names)
    @component('user')
        @breakif(name == 'Skirk')
    @end
@end

{{-- ERROR: @breakif is not allowed inside @component --}}
```

A loop defined inside the component body can still use its own loop control directives.

## New Features

### `loop` Object in `@for` Loops

`@for` loops now provide a `loop` object with the following properties:

| Property | Type   | Description                                    |
| -------- | ------ | ---------------------------------------------- |
| `index`  | int    | Current index number starting from `0`         |
| `iter`   | int    | Current iteration number starting from `1`     |
| `first`  | bool   | Is the first iteration of the loop or not?     |
| `parent` | object | Parent loop object when loops are nested       |

The `last` property is not available because a `for` loop may not have a known length. Accessing `loop.last` in a `@for` loop returns `nil`. See the [loop object](/language-elements/loops#loop-variables) documentation for more information.

```textwire
@for(i = 0; i < 5; i++)
    <p>{{ loop.iter }} (index {{ loop.index }})</p>
@end
```

Closes [#130](https://codeberg.org/textwire/textwire/issues/130).

## Steps

### 1. Update Import Path

Replace all v5 imports with v6:

```go
import "codeberg.org/textwire/textwire/v5" // [!code --]
import "codeberg.org/textwire/textwire/v6" // [!code ++]
```

After updating imports, run:

```bash
go mod tidy
```

### 2. Update Nested Loops

If you access the parent loop object inside a nested loop, replace `loop` with `loop.parent`:

```textwire
@each(group in groups)
    @each(item in group.items)
        {{ loop.index }} // [!code --]
        {{ loop.parent.index }} // [!code ++]
    @end
@end
```

### 3. Move Loop Control Directives Out of Components

If a loop control directive inside a component body targets a loop outside the component, move it into the surrounding loop, outside the `@component` call.

Before (v5):

```textwire
@each(post in posts)
    @component("components/post-card", { post })
        @continue
    @end
@end
```

After (v6):

```textwire
@each(post in posts)
    @continue
    @component("components/post-card", { post })@end
@end
```
