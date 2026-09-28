---
title: Statements - v4
description: Comprehensive guide to statements in Textwire templating language
outline: 2-3
---

# Statements

Statements in Textwire perform actions but do not return values. Unlike expressions, statements cannot be nested within other expressions and do not produce output directly.

- **[Assignment](#assignment)** <code v-pre>{{ x = 5 }}</code>
- **[Postfix Operations](#postfix-operations)** <code v-pre>{{ x++ }}</code> or <code v-pre>{{ x-- }}</code>

---

## Assignment

The assignment statement declares variables and assigns values using the `=` operator.

### Syntax

```textwire
{{ myVar = value }}
```

### Examples

```textwire
{{ count = 5 }}
{{ message = "Hello, World!" }}
{{ price = 19.99 }}
```

### Type Safety

Textwire enforces strict type safety for variable assignments. Once a variable is assigned a value, its type is inferred and cannot be changed by subsequent assignments.

**Invalid Example:**

```textwire
{{ name = "Alice" }}
{{ name = 42 }}  {{-- Error: cannot assign identifier 'name' of type 'string' to type 'integer' --}}
```

**Valid Example:**

```textwire
{{ name = "Alice" }}
{{ name = "Bob" }}  {{-- OK: Same type (string) --}}
```

---

## Postfix Operations

Postfix statements modify a variable's value by incrementing or decrementing it by 1.

### Syntax

```textwire
{{ variable++ }}  {{-- Increment by 1 --}}
{{ variable-- }}  {{-- Decrement by 1 --}}
```

### Examples

```textwire
{{ counter = 0; counter++ }}
<span>Current count: {{ counter }}</span>  {{-- Output: 1 --}}
```

```textwire
{{ score = 100; score-- }}
<span>Final score: {{ score }}</span>  {{-- Output: 99 --}}
```

### Supported Types

| Operator | Description | Valid Types        |
| -------- | ----------- | ------------------ |
| `++`     | Increment   | `integer`, `float` |
| `--`     | Decrement   | `integer`, `float` |
