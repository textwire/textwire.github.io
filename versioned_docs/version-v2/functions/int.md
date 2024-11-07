---
title: Integer Functions - Textwire v2
sidebar_label: Integer Functions
sidebar_position: 3
description: Explore the various integer functions available in Textwire
---

# Integer Functions
## abs
```ts
abs(): int
```

Returns the absolute value of an integer. If the integer is negative, it will return the positive value of it

#### Input example
```html
<b>{{ -5.abs() }}</b>
```

#### Output
```html
<b>5</b>
```

## decimal
> Read about this function **[HERE](/docs/v2/functions/str#decimal)**

## float
```ts
float(): float
```

Converts an integer to a float by adding a decimal part of `.0` to the number

#### Input example
```html
<b>{{ 5.float() }}</b>
```

#### Output
```html
<b>5.0</b>
```

## len
```ts
len(): int
```

Returns the number of digits in an integer. If the integer is negative, it will return the number of digits excluding the `-` sign

#### Input example
```html
<b>{{ 12345.len() }}</b>
```

#### Output
```html
<b>5</b>
```

#### Input example
```html
<b>{{ 1000.pretty() }}</b>
```

#### Output
```html
<b>1,000</b>
```

## str
```ts
str(): string
```

Converts an integer to a string and returns it

#### Input example
```html
<b>{{ 5.str() }} and {{ -10.str() }}</b>
```

#### Output
```html
<b>5 and -10</b>
```