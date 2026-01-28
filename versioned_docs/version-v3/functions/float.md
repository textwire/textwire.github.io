---
title: Float Functions - v3
sidebar_label: Float Functions
sidebar_position: 4
description: Explore the various float functions available in Textwire
---

# Float Functions
## abs
```ts
abs(): float
```

Returns the absolute value of a float. If the float is negative, it will return the positive value of it

#### Input example
```textwire
{{ -5.125.abs() }}
```

#### Output
```textwire
5.125
```

## ceil
```ts
ceil(): int
```

Returns the rounded up value of a float to the nearest integer

#### Input example
```textwire
{{ 5.125.ceil() }}
```

#### Output
```textwire
6
```

## floor
```ts
floor(): int
```

Returns the rounded down value of a float to the nearest integer

#### Input example
```textwire
{{ 5.125.floor() }}
```

#### Output
```textwire
5
```

## int
```ts
int(): int
```

Converts a float to an integer by removing the decimal part of the number. It doesn't round the number, it just removes the decimal part

#### Input example
```textwire
{{ 5.5.int() }}
```

#### Output
```textwire
5
```

## str
```ts
str(): str
```

Converts a float to a string. It's useful when you want to manipulate the float as a string. For displaying the float, you don't need to use this function, as Textwire automatically converts the float to a string when displaying it

#### Input example
```textwire
{{ 5.125.str() }}
```

#### Output
```textwire
5.125
```