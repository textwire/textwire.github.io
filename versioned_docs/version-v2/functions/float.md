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
<input value="{{ 5.5.int() }}" type="number">
```

#### Output
```html
<input value="5" type="number">
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

floatCeilFunc returns the rounded up value of a float to the nearest integer

#### Input example
```html
<p>{{ 5.125.ceil() }}</p>
```

#### Output
```html
<p>6</p>
```