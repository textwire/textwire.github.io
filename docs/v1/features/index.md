# Features

Textwire is designed to be easy to use for Go developers. It has a similar syntax to Go, but it is a separate language and has specific grammar to make it easier to use as a template language.

Textwire code can only be defined inside of the `{{ }}` brackets. If you want to write a regular HTML code, you can do it outside of the brackets. Code inside brackets is a single expression and can't be split into multiple lines.

❌ Incorrect expression

```html
{{ x := 5; y := 10 }}
```

✅ Correct expression

```html
{{ x := 5 }}
{{ y := 10 }}
```

All the bracket statements return either an empty string or a string. For example, `{{ x := 5 }}` will return an empty string, but `{{ 5 + 5 }}` will return "10".

There are special bracket statements that need to be closed with `{{ end }}` keyword. For example, [if statements](#if-statements) and [for statements](#for-statements).

Let's take a look at what features are available (✅) in Textwire and what features are still in development (🚧).

- Statements
    - ✅ [If statements](#if-statements) `{{ if x == 1 }}`
    - 🚧 [For statements](#for-statements) `{{ for i, name := range names }}`
    - ✅ [Variable declaration](#variable-declaration) `{{ x := 5 }}` or `{{ var y = 10 }}`
- Expressions
    - ✅ [Ternary expressions](#ternary-expressions) `{{ x ? y : z }}`
    - ✅ [Prefix expressions](#prefix-expressions) `{{ !x` or `-x }}`
    - ✅ [Infix expressions](#infix-expressions) `{{ x * (y + 3) }}`
- Literals
    - ✅ [String literals](#string-literals) `{{ "Hello, World!" }}`
    - ✅ [Integer literals](#integer-literals) `{{ 123 }}` or `{{ -234 }}`
    - ✅ [Float literals](#float-literals) `{{ 123.456 }}`
    - ✅ [Boolean literals](#boolean-literals) `{{ true }}`
    - ✅ [Nil literal](#nil-literal) `{{ nil }}`
    - 🚧 [Slice literals](#slice-literals) `{{ []int{1, 2, 3} }}`

## Statements

### If statements

You can use if statements to conditionally render content. Here is an example of using if statements:

```html
{{ if x == 1 }}
    <p>x is equal to 1</p>
{{ else if x == 2 }}
    <p>x is equal to 2</p>
{{ else }}
    <p>x is not equal to 1 or 2</p>
{{ end }}
```

### For statements

You can use for statements to iterate over slices. Here is an example of using for statements:

```html
{{ for i, name := range names }}
    <p>{{ i }}. {{ name }}</p>
{{ end }}
```

### Variable declaration

You can declare variables in 2 ways, either by using the `:=` operator or by using the `var` keyword. Here is an example of declaring variables:

```html
{{ x := 5 }}
{{ var y = 10 }}
```

## Expressions

### Ternary expressions

You can use ternary expressions to conditionally render content. Here is an example of using ternary expressions:

```html
<span>{{ x == 1 ? "yes" : "no" }}</span>
```

### Prefix expressions

You can use prefix expressions to negate or invert a boolean value. Here is an example of using prefix expressions:

```html
<span>{{ !isTall ? "Not tall" : "Is tall" }}</span>
<span>{{ -x }}</span>
```

### Infix expressions

You can use infix expressions to perform arithmetic operations. Here is an example of using infix expressions:

```html
<ul>
    <li>{{ x + y }}</li> <!-- Addition -->
    <li>{{ x - y }}</li> <!-- Subtraction -->
    <li>{{ x * y }}</li> <!-- Multiplication -->
    <li>{{ x / y }}</li> <!-- Division -->
    <li>{{ x % y }}</li> <!-- Modulo -->
    <li>{{ (x + 2) / (y * (4 - c)) }}</li> <!-- Grouped expressions -->
</ul>
```

## Literals

### String literals

You can use string literals and concatenate them with other strings. Here is an example of using string literals:

```html
{{ "Hello" + "World!" }}
```

### Integer literals

You can use integer literals and perform arithmetic operations with them. Here is an example of using integer literals:

```html
<span>{{ 1 + 2 }}</span>
```

### Nil literal

You can use nil literal to check if a variable is nil. Here is an example of using nil literal:

```html
{{ if x == nil }}
    <p>x is nil</p>
{{ end }}
```

### Float literals

You can use float literals and perform arithmetic operations with them. Here is an example of using float literals:

```html
<span>{{ 1.5 + 2.5 }}</span>
```

### Boolean literals

You can use boolean literals to check if a variable is true or false. Here is an example of using boolean literals:

```html
{{ if isTall == true }}
    <p>Is tall</p>
{{ end }}
```

### Slice literals

Defining a slice in Textwire is done is a similar way as in Go. Here is an example of defining a slice:

```html
{{ names := []string{"John", "Jane", "Jack"} }}

<ul>
    {{ for _, name := range names }}
        <li>{{ name }}</li>
    {{ end }}
</ul>
```
