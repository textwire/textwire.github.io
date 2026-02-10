---
title: Integer Functions - v3
description: Explore the various integer functions available in Textwire
---

# Integer Functions
## abs
```ts
int.abs(): int
```

Returns the absolute value of an integer. If the integer is negative, it will return the positive value of it

#### Input Example:
```textwire
{{ -5.abs() }}
```

#### Output:
```html
5
```

## decimal
> Read about this function **[HERE](/v3/functions/str#decimal)**

## float
```ts
int.float(): float
```

Converts an integer to a float by adding a decimal part of `.0` to the number

#### Input Example:
```textwire
{{ 5.float() }}
```

#### Output:
```html
5.0
```

The value `0` will be converted to `0.0`.

## len
```ts
int.len(): int
```

Returns the number of digits in an integer. If the integer is negative, it will return the number of digits excluding the `-` sign

#### Input Example:
```textwire
{{ 12345.len() }}
```

#### Output:
```html
5
```

## str
```ts
int.str(): str
```

Converts an integer to a string and returns it

#### Input Example:
```textwire
{{ 5.str() }} and {{ -10.str() }}
```

#### Output:
```html
5 and -10
```
