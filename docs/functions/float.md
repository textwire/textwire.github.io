---
sidebar_position: 5
---

# Float functions

## `int()`

### Description
Function `int` is used to convert a float to an integer by removing the decimal part of the number. It doesn't round the number, it just removes the decimal part.

#### Arguments
None

### Input example
```html
<input value="{{ 5.5.int() }}" type="number">
```

### Output
```html
<input value="5" type="number">
```