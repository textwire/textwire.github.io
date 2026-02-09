---
title: Custom Functions - v3
description: Learn how to define and use custom functions in Textwire, enabling you to extend the functionality of Textwire by incorporating user-defined operations
---

# Custom Functions

## Introduction
Custom functions are user-defined functions in your Go code that extend Textwire's capabilities beyond built-in functions. They were introduced in Textwire `v2.0.0` and allow you to create type-specific operations invoked using the dot operator `.` followed by the function name.

```textwire
{{ "John Wick"._isCool() }}`
```

Custom functions can accept variadic arguments and return values of any type, enabling you to perform custom operations on Textwire data types.

## Function Registration API
Textwire provides six registration methods for different data types. All custom functions should be prefixed with underscore to avoid conflicts with built-in functions.

| Function | Function Signature |
|----------|-------------------|
| `RegisterStrFunc` | `func(s string, args ...any) any` |
| `RegisterIntFunc` | `func(num int, args ...any) any` |
| `RegisterFloatFunc` | `func(num float64, args ...any) any` |
| `RegisterBoolFunc` | `func(b bool, args ...any) any` |
| `RegisterArrFunc` | `func(arr []any, args ...any) any` |
| `RegisterObjFunc` | `func(obj map[string]any, args ...any) any` |

All registration methods return an `error`.

## Defining Custom Functions
### Example: String Function
```go
err := textwire.RegisterStrFunc("_isCool", func(s string, args ...any) any {
    return s == "John Wick"
})
```

### Other Function Types
```go
// Integer
err := textwire.RegisterIntFunc("_double", func(num int, args ...any) any {
    return num * 2
})

// Float
err := textwire.RegisterFloatFunc("_double", func(num float64, args ...any) any {
    return num * 2
})

// Boolean
err := textwire.RegisterBoolFunc("_negate", func(b bool, args ...any) any {
    return !b
})

// Array
err := textwire.RegisterArrFunc("_addNumber", func(arr []any, args ...any) any {
    arr = append(arr, args[0].(int64))
    return arr
})

// Object
err := textwire.RegisterObjFunc("_addProp", func(obj map[string]any, args ...any) any {
    key := args[0].(string)
    value := args[1]
    obj[key] = value
    return obj
})
```

## Using Custom Functions
### Usage Examples
```go
// String
input := "{{ 'John Wick'._isCool() }}"
result, err := textwire.EvaluateString(input, nil)
// Result: "1" because true is converted to string

// Integer  
input := "{{ 3._double() }}"
result, err := textwire.EvaluateString(input, nil)
// Result: "6"

// Float
input := "{{ 3.5._double() }}"
result, err := textwire.EvaluateString(input, nil)
// Result: "7.0"

// Boolean
input := "{{ true._negate() }}"
result, err := textwire.EvaluateString(input, nil)
// Result: "0"

// Array
input := "{{ [1, 2]._addNumber(3) }}"
result, err := textwire.EvaluateString(input, nil)
// Result: "1, 2, 3"

// Object
input := `{{ obj = {name: "Anna"}; obj = obj._addProp("age", 25); obj.age }}`
result, err := textwire.EvaluateString(input, nil)
// Result: "25"
```

### Multiple Arguments
Custom functions support variadic arguments:

```go
err := textwire.RegisterStrFunc("_format", func(s string, args ...any) any {
    if len(args) >= 2 {
        prefix := args[0].(string)
        suffix := args[1].(string)
        return prefix + s + suffix
    }
    return s
})

input := "{{ 'hello'._format('>>', '<<') }}"
result, err := textwire.EvaluateString(input, nil)
// Result: ">>hello<<"
```

## Error Handling

Registration fails if a custom function name already exists:

```go
err := textwire.RegisterStrFunc("_duplicate", func(s string, args ...any) any {
    return s
})

// Second registration fails
err = textwire.RegisterStrFunc("_duplicate", func(s string, args ...any) any {
    return s + "2"
})
// Error: custom function '_duplicate' already defined for 'strings'
```

## Best Practices
1. **Always use underscore prefix** to avoid conflicts with built-in functions
2. **Built-in functions take precedence** over custom functions
3. **Handle edge cases** (empty strings, nil arguments)
4. **Validate arguments** before processing
5. **Use descriptive names** for clarity

:::warning Naming Conflicts
To avoid conflicts with built-in functions, always prefix your custom functions with an underscore (_). Built-in functions take precedence over custom ones, so defining a custom function with the same name as a built-in function will cause the built-in function to be used.
:::
