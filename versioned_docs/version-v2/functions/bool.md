---
title: Boolean Functions - v2
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
<b>{{ true.binary() }}</b>
<b>{{ false.binary() }}</b>
```

#### Output
```textwire
<b>1</b>
<b>0</b>
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
<b>{{ true.then("Yes", "No") }}</b>
<b>{{ false.then("Yes", "No") }}</b>
<b>{{ false.then("Yes") }}</b>
```

#### Output
```textwire
<b>Yes</b>
<b>No</b>
<b></b>
```
