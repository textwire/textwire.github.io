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