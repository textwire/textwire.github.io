---
title: Boolean Functions - v3
description: Explore the various boolean functions available in Textwire
---

# Boolean Functions
## binary
```ts
bool.binary(): INTEGER
```

Returns an integer `1` if the receiver is true, `0` otherwise

#### Input Example:
```textwire
{{ true.binary() }}
{{ false.binary() }}
```

#### Output:
```html
1
0
```

## then
```ts
bool.then(ifCase: ANY, elseCase?: ANY = NIL): ANY
```

Returns the `ifCase` if the receiver is true, otherwise returns the `elseCase`. The `elseCase` is optional and defaults to `NIL`

#### Arguments:
1. `ifCase` (ANY) - The value to return if the receiver is true
2. `elseCase` (ANY) - The value to return if the receiver is false. Default is `NIL`, which will be converted to an empty string when rendered in the template

#### Input Example:
```textwire
{{ true.then("Yes", "No") }}
{{ false.then("Yes", "No") }}
{{ false.then("Yes") }}
```

#### Output:
```html
Yes
No

```
