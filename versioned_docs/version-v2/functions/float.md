---
sidebar_position: 5
description: Explore the various float functions available in Textwire
---

# Float functions
## int
```ts
int(): int
```

Converts a float to an integer by removing the decimal part of the number. It doesn't round the number, it just removes the decimal part

#### Input example
```html
<p>{{ 5.5.int() }}</p>
```

#### Output
```html
<p>5</p>
```

## str
```ts
str(): string
```

Converts a float to a string. It's useful when you want to manipulate the float as a string. For displaying the float, you don't need to use this function, as Textwire automatically converts the float to a string when displaying it

#### Input example
```html
<p>{{ 5.125.str() }}</p>
```

#### Output
```html
<p>5.125</p>
```

## abs
```ts
abs(): float
```

Returns the absolute value of a float

#### Input example
```html
<p>{{ -5.125.abs() }}</p>
```

#### Output
```html
<p>5.125</p>
```

## ceil
```ts
ceil(): float
```

Returns the rounded up value of a float to the nearest integer

#### Input example
```html
<p>{{ 5.125.ceil() }}</p>
```

#### Output
```html
<p>6</p>
```

## floor
```ts
floor(): float
```

Returns the rounded down value of a float to the nearest integer

#### Input example
```html
<p>{{ 5.125.floor() }}</p>
```

#### Output
```html
<p>5</p>
```

## round
```ts
round(): float
```

Rounds a float to the nearest integer. `1.5 -> 2`, `1.4 -> 1`, `1.6 -> 2`

#### Input example
```html
<p>{{ 5.5.round() }}</p>
```

#### Output
```html
<p>6</p>
```