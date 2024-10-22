---
sidebar_position: 3
description: Explore the various integer functions available in Textwire
---

# Integer functions
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