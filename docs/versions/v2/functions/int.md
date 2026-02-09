---
title: Integer Functions - v2
description: Explore the various integer functions available in Textwire
---

# Integer Functions
## abs
```ts
abs(): int
```

Returns the absolute value of an integer. If the integer is negative, it will return the positive value of it

#### Input example
```textwire
{{ -5.abs() }}
```

#### Output
```textwire
5
```

## decimal
> Read about this function **[HERE](/docs/v2/functions/str#decimal)**

## float
```ts
float(): float
```

Converts an integer to a float by adding a decimal part of `.0` to the number

#### Input example
```textwire
{{ 5.float() }}
```

#### Output
```textwire
5.0
```

The value `0` will be converted to `0.0`.

## len
```ts
len(): int
```

Returns the number of digits in an integer. If the integer is negative, it will return the number of digits excluding the `-` sign

#### Input example
```textwire
{{ 12345.len() }}
```

#### Output
```textwire
5
```

## str
```ts
str(): str
```

Converts an integer to a string and returns it

#### Input example
```textwire
{{ 5.str() }} and {{ -10.str() }}
```

#### Output
```textwire
5 and -10
```
