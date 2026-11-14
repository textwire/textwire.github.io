---
title: Upgrade Guide - v6
description: Learn how to upgrade your Textwire code from v5 to v6
outline: deep
---

# Upgrade Guide

Upgrading from v5 to v6 introduces some breaking changes: the `loop` object scope in nested loops, loop control directives crossing component boundaries, whitespace handling around standalone directives, `defined()` returning `false` for missing properties and indices, HTML escaping of `@insert` and `@reserve` values and more.

A lot of changes but it needs to be done while **Textwire is still young**. It's much harder to make these changes later when there are more users and more templates in the wild.

Most of these changes are not going to effect you but still you need to go through your templates and code to make sure everything works as expected. This guide will help you identify the changes that affect your project and how to fix them.

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

### Standalone Directive Whitespace

In v6, Textwire follows [Mustache's standalone-tag whitespace rules](https://mustache.github.io/). Only lines where exactly one directive is the sole non-whitespace content are trimmed. Lines containing embedded expressions or other content keep their whitespace and line endings. This is different from v5, where all whitespace was preserved and some newlines were removed, which caused issues with whitespace-sensitive formats such as YAML.

See [Whitespace Handling](/language-elements/whitespace) for details and examples.

### `defined()` Returns `false` for Missing Properties and Indices

In v5, `defined()` returned `true` when you checked a property that didn't exist on an object or an index outside an array, because both evaluated to `nil`. In v6, both return `false`. A property or index that exists and holds `nil` still counts as defined.

```textwire
{{ empty = {} }}
{{ defined(empty.name) }} {{-- v5: true, v6: false --}}

{{ withNil = { name: nil } }}
{{ defined(withNil.name) }} {{-- v5: true, v6: true --}}

{{ arr = [1, 2] }}
{{ defined(arr[5]) }} {{-- v5: true, v6: false --}}
{{ defined(arr[-1]) }} {{-- v5: true, v6: false --}}
```

This also applies to chained access. `defined(user.address.street.number)` returns `false` if any part of the chain is missing.

Closes [#167](https://codeberg.org/textwire/textwire/issues/167).

### Component Depth Limit

In v6, components can be nested at most 500 levels deep during a single render. If a component includes itself, directly or through other components, Textwire stops with an error instead of crashing the program with a stack overflow. Components rendered one after another, like inside of a loop, don't count toward the limit.

This most likely doesn't affect you. But if you rely on recursive component calls and the depth goes higher than 500, change the `MaxComponentDepth` configuration. See [Available Configurations](/api/configurations#available-configurations) for details.

### Escaped `@insert` and `@reserve` Values

In v5, the short form `@insert("title", value)` and the `@reserve("title", fallback)` fallback printed their values raw. In v6, they are HTML-escaped the same way as <code v-pre>{{ }}</code>, which prevents XSS when user data is passed this way.

```textwire
{{-- index.tw --}}
@use("layout")
@insert("title", "<span>Title</span>")
```

```textwire
{{-- layout.tw --}}
<title>@reserve("title")</title>
```

In v5 the output was:

```html
<title><span>Title</span></title>
```

In v6 the same code produces:

```html
<title>&lt;span&gt;Title&lt;/span&gt;</title>
```

If the HTML is trusted and should be printed as is, wrap the value in [`raw()`](/functions/global#raw):

```textwire
@insert("title", raw("<span>Title</span>"))
```

For `@insert`, you can also use the block form, which is a normal template body:

```textwire
@insert("title")
    <span>Title</span>
@end
```

Do not use `raw()` for user-provided data unless it was sanitized first.

Closes [#156](https://codeberg.org/textwire/textwire/issues/156).

### Read-Only Global Data

In v5, assigning to `global`, one of its properties, or a value aliased from it was silently ignored. In v6, it returns an evaluation error. This applies everywhere: templates, layouts, components, and loops.

```textwire
{{ global.limit = 99 }}          {{-- ERROR... --}}
{{ global.user.name = "Bob" }}   {{-- ERROR... --}}
{{ global.tags[0] = "new" }}     {{-- ERROR... --}}
{{ global.count++ }}             {{-- ERROR... --}}

{{ user = global.user }}
{{ user.name = "Bob" }}          {{-- ERROR... --}}
```

Global data is meant to be read, not changed. If a template needs a modified value, create a new local value instead:

```textwire
{{ user = { name: "Bob", role: global.user.role } }}
```

Since v5 ignored these writes, you shouldn't have any code that depends on them. If you do, just remove those assignments since they are dead code anyway.

### Global Data Converted Once at Template Creation

In v5, `GlobalData` was converted while rendering, so changes to the original map after `NewTemplate` were picked up. In v6, it is converted once inside `NewTemplate` and frozen, so later changes are not picked up:

```go
global := map[string]any{"env": "dev"}

tpl, err := textwire.NewTemplate(&config.Config{GlobalData: global})
if err != nil {
    // handle error
}

// v5: templates see "prod", v6: templates still see "dev"
global["env"] = "prod"
```

Unsupported values, such as functions and channels, now fail in `NewTemplate` instead of at render time:

```go
_, err := textwire.NewTemplate(&config.Config{
    GlobalData: map[string]any{"callback": func() {}},
})
// v6: NewTemplate returns "unsupported value type 'func()'"
```

Finish global data before calling `NewTemplate`. For values that change per render, pass them to `String()` or `Response()` as template data instead of mutating `GlobalData`.

### Public `pkg/` API Changes

If you import Textwire's `pkg/` packages directly, three functions changed:

| v5                                             | v6                                            |
| ---------------------------------------------- | --------------------------------------------- |
| `evaluator.New(customFunc, conf)`              | `evaluator.New(customFunc, conf, global)`      |
| `value.NewScopeFromMap(data)`                  | `value.NewScopeFromMap(data, global)`          |
| `scope.AddGlobal(key, value)`                  | Removed. Pass the value through `GlobalData`.  |

`global` is a `*value.Obj`. Pass `nil` to keep the previous behavior.

Before (v5):

```go
scope, err := value.NewScopeFromMap(data)
if err != nil {
    // handle error
}

scope.AddGlobal("env", "dev")
e := evaluator.New(customFunc, conf)
```

After (v6):

```go
global, err := value.NewFrozenGlobal(map[string]any{"env": "dev"})
if err != nil {
    // handle error
}

scope, err := value.NewScopeFromMap(data, global)
if err != nil {
    // handle error
}

e := evaluator.New(customFunc, conf, global)
```

`NewTemplate` does this for you, so this only affects code that uses `pkg/evaluator` or `pkg/value` directly.

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

### `raw()` Global Function

The new `raw()` global function marks a value as raw, so it is printed without HTML escaping. This is useful when you need unescaped output for a single value instead of a whole <code v-pre>{!! !!}</code> block. The function works recursively on strings in arrays and objects:

```textwire
{{ raw("<span>Title</span>") }} {{-- Output: <span>Title</span> --}}
{{ raw(["<a>", "<b>"]) }}        {{-- Output: <a>, <b> --}}
{{ raw({ name: "<b>" }) }}       {{-- Output: {name: "<b>"} --}}
```

See [raw()](/functions/global#raw) for all details and examples.

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

### 4. Review `defined()` Checks

Search your templates for `defined()` calls that check optional object properties or array indices. In v6 they return `false` when the property or index is missing:

```textwire
@if(defined(user.address.street.number))
    {{ user.address.street.number }}
@end
```

In v5 this block was entered even when `user.address.street.number` was missing, which hid mistakes. If a template depended on the old behavior, make the property exist with a `nil` value or guard the access with your own condition.

### 5. Check Whitespace-Sensitive Templates

Review templates where standalone directive lines affect whitespace-sensitive output. In v6, only lines where exactly one directive is the sole non-whitespace content are trimmed. See [Whitespace Handling](/language-elements/whitespace) for details.

### 6. Review Escaped `@insert` and `@reserve` Values

Search your templates for the short form `@insert("name", value)` and `@reserve("name", fallback)`. In v6, their values are HTML-escaped. If a value contained trusted HTML and should stay raw, wrap it in [`raw()`](/functions/global#raw):

```textwire
@insert("title", raw("<span>Title</span>"))
@reserve("title", raw("<i>Fallback</i>"))
```

For `@insert`, you can also move static markup into the block form. Leave user-provided values escaped.

### 7. Review Recursive Components

Only needed if your components include each other recursively and go deeper than 500 levels. In that case, increase `MaxComponentDepth` in your Textwire configuration:

```go
textwire.Configure(&config.Config{
    MaxComponentDepth: 1000,
})
```

See [Available Configurations](/api/configurations#available-configurations) for details.

### 8. Remove Writes to Global Data

Search your templates for assignments, increments, or decrements that target `global`, its properties, array elements, or values aliased from it. In v6 they fail at render time. Since v5 ignored them, you can usually delete them. If a template needs the new value, use a local variable instead:

```textwire
{{ global.theme = "dark" }} // [!code --]
{{ theme = "dark" }}       // [!code ++]
```

An alias points to the same frozen value, so create a new local object when you need to modify a copy:

```textwire
{{ user = global.user }} // [!code --]
{{ user.name = "Bob" }} // [!code --]

{{ user = { name: "Bob", role: global.user.role } }} // [!code ++]
```

### 9. Prepare Global Data Before `NewTemplate`

Move any changes to the `GlobalData` map before `NewTemplate`, and make sure it contains only supported values. Functions, channels, and other unsupported types now fail in `NewTemplate`:

```go
tpl, err := textwire.NewTemplate(&config.Config{
    GlobalData: map[string]any{"env": os.Getenv("APP_ENV")},
})
if err != nil {
    // handle error
}
```

Values that change per render should go through template data instead:

```go
html, err := tpl.String("index", map[string]any{"user": user})
```

### 10. Update Direct `pkg/` Usage

Only needed if you call `pkg/evaluator` or `pkg/value` directly. Pass the global value to the constructors and remove `Scope.AddGlobal` calls:

```go
scope, err := value.NewScopeFromMap(data) // [!code --]
scope, err := value.NewScopeFromMap(data, global) // [!code ++]

e := evaluator.New(customFunc, conf) // [!code --]
e := evaluator.New(customFunc, conf, global) // [!code ++]
```

Pass `nil` for `global` to keep the previous behavior. See [Public `pkg/` API Changes](#public-pkg-api-changes) for the full example.

## Verification Checklist

After completing the migration:

1. <label><input type="checkbox"> All imports changed from `v5` to `v6`</label>
2. <label><input type="checkbox"> `go mod tidy` runs without errors</label>
3. <label><input type="checkbox"> Nested loops use `loop.parent` when accessing parent loop metadata.</label>
4. <label><input type="checkbox"> Loop control directives inside components have a local loop or were moved outside the `@component` call</label>
5. <label><input type="checkbox"> Whitespace-sensitive outputs checked after the standalone directive whitespace change</label>
6. <label><input type="checkbox"> `defined()` checks reviewed for missing properties and out-of-range indices</label>
7. <label><input type="checkbox"> Short-form `@insert` and `@reserve` fallbacks reviewed for newly escaped values</label>
8. <label><input type="checkbox"> Recursive components stay under 500 levels or `MaxComponentDepth` was raised</label>
9. <label><input type="checkbox"> No assignments target `global` or values aliased from it</label>
10. <label><input type="checkbox"> Global data is prepared before `NewTemplate` and contains no unsupported values</label>
11. <label><input type="checkbox"> Direct `evaluator.New`, `value.NewScopeFromMap`, and `Scope.AddGlobal` usage updated</label>
12. <label><input type="checkbox"> Project compiles successfully</label>

## Need Help?

- Check the [Whitespace Handling](/language-elements/whitespace) page for whitespace rules
- Open a [Codeberg Issue](https://codeberg.org/textwire/textwire/issues) and we will help
- Read about [defined()](/functions/global#defined) function
- Read about [raw()](/functions/global#raw) function
