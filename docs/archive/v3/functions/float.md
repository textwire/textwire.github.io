---
title: Float Functions - v3
description: Explore the various float functions available in Textwire
---

# Float Functions
## abs
```ts
float.abs(): float
```

Returns the absolute value of a float. If the float is negative, it will return its positive value

#### Input Example:
```textwire
{{ -5.125.abs() }}
```

#### Output:
```html
5.125
```

## ceil
```ts
float.ceil(): integer
```

Returns the rounded up value of a float to the nearest integer

#### Input Example:
```textwire
{{ 5.125.ceil() }}
```

#### Output:
```html
6
```

## floor
```ts
float.floor(): integer
```

Returns the rounded down value of a float to the nearest integer

#### Input Example:
```textwire
{{ 5.125.floor() }}
```

#### Output:
```html
5
```

## int
```ts
float.int(): integer
```

Converts a float to an integer by removing the decimal part of the number. It doesn't round the number, it just removes the decimal part

#### Input Example:
```textwire
{{ 5.5.int() }}
```

#### Output:
```html
5
```

## str
```ts
float.str(): string
```

Converts a float to a string. It's useful when you want to manipulate the float as a string. For displaying the float, you don't need to use this function, as Textwire automatically converts the float to a string when displaying it

#### Input Example:
```textwire
{{ 5.125.str() }}
```

#### Output
```html
5.125
```
