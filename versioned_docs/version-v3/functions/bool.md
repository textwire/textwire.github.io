---
title: Boolean Functions - v3
sidebar_label: Boolean Functions
sidebar_position: 5
description: Explore the various boolean functions available in Textwire
---

# Boolean Functions
## binary
```ts
binary(): int
```

Returns an integer `1` if the receiver is true, `0` otherwise

#### Input example
```textwire
{{ true.binary() }}
{{ false.binary() }}
```

#### Output
```textwire
1
0
```

## then
```ts
then(consequence: any, alternative?: any = nil): any
```

Returns the `consequence` if the receiver is true, otherwise returns the `alternative`. The `alternative` is optional and defaults to `nil`

#### Arguments
1. `consequence` (any) - The value to return if the receiver is true
2. `alternative` (any) - The value to return if the receiver is false. Default is `nil`, which will be converted to an empty string when rendered in the template

#### Input example
```textwire
{{ true.then("Yes", "No") }}
{{ false.then("Yes", "No") }}
{{ false.then("Yes") }}
```

#### Output
```textwire
Yes
No

```
