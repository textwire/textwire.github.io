# Language Elements

Textwire is designed to be easy to use for Go developers. It has a similar syntax to Go, but it is a separate language and has specific grammar to make it easier to use as a template language.

## Rules

- All the HTML files that you want to parse with Textwire must have a `.textwire.html` extension.
- All the Textwire code must be inside of the `{{ }}` brackets.
- You must use only a single statement inside `{{ }}` brackets. `{{ <statement> }}`

All the bracket statements return either an empty string or a string. For example, `{{ x := 5 }}` will return an empty string, but `{{ 5 + 5 }}` will return "10".

There are special bracket statements that need to be closed with `{{ end }}` keyword. For example, [if statements](#if-statements) and [for statements](#for-statements).

Let's take a look at what features are available (✅) in Textwire and what features are still in development (🚧).

- Statements
    - ✅ [If statements](#if-statements) `{{ if x == 1 }}`
    - 🚧 [For statements](#for-statements) `{{ for i, name := range names }}`
    - ✅ [Variable declaration](#variable-declaration) `{{ x := 5 }}` or `{{ var y = 10 }}`
    - ✅ [Layout statement](#layout-statement) `{{ layout "main" }}`
    - ✅ [Insert statement](#insert-statement) `{{ insert "title", "Home" }}`
    - ✅ [Reserve statement](#reserve-statement) `{{ reserve "title" }}`
- Expressions
    - ✅ [Ternary expressions](#ternary-expressions) `{{ x ? y : z }}`
    - ✅ [Prefix expressions](#prefix-expressions) `{{ !x` or `-x }}`
    - ✅ [Infix expressions](#infix-expressions) `{{ x * (y + 3) }}`
    - 🚧 [Function calls](#function-calls) `{{ name.split(" ") }}`
- Literals
    - ✅ [String literals](#string-literals) `{{ "Hello, World!" }}` or ``{{ `Hello, World!` }}``
    - ✅ [Integer literals](#integer-literals) `{{ 123 }}` or `{{ -234 }}`
    - ✅ [Float literals](#float-literals) `{{ 123.456 }}`
    - ✅ [Boolean literals](#boolean-literals) `{{ true }}`
    - ✅ [Nil literal](#nil-literal) `{{ nil }}`
    - 🚧 [Slice literals](#slice-literals) `{{ []int{1, 2, 3} }}`

## Statements

### If statements

You can use if statements to conditionally render content. Here is an example of using if statements:

```html
{{ if name == "Anna" }}
    <p>Her name is Anna</p>
{{ end }}
```

You can also use else and else if statements:

```html
{{ if x == 1 }}
    <p>x is 1</p>
{{ else if x == 2 }}
    <p>x is 2</p>
{{ else }}
    <p>x is not 1 and 2</p>
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

> Variable declaration statements are not expressions! They don't return any value and can't be used inside of other expressions.


### Layout statement

You can use layout statement to define a layout for your template file. Here is an example of using layout statement:

```html
{{ layout "layouts/main" }}
```

Layout statement excepts a string literal as an argument. The string literal should be a path to the layout file relative to a `TemplateDir` parameter that you set in the config. For example, if you set `TemplateDir` to `"src/templates/layouts"`, then you can use the layout statement like `{{ layout "main" }}` and it will look for the layout file in `"src/templates/layouts/main.textwire.html"`.

### Insert statement

You can use insert statement to insert content into reserved places. You cannot use `insert` without defining a `layout` in the same file. Here is an example of using insert statement:

```html
{{ layout "layouts/main" }}

{{ insert "title", "Home page" }}

{{ insert "content" }}
    <h1>Hello, World!</h1>
    <p>This is a home page.</p>
{{ end }}
```

All the `insert` statements will be transferred to the layout file and will be placed into reserved places defined by a [reserve statement](#reserve-statement).

### Reserve statement

When you define a layout file for you template, you need to reserve places for dynamic content. You can reserve a place for a title, content, sidebar, footer and so on. Here is an example of using reserve statement:

```html
<!DOCTYPE html>
<html lang="{{ locale }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ reserve "title" }}</title>
</head>
<body>
    {{ reserve "content" }}
</body>
</html>
```

## Expressions

### Ternary expressions

You can use ternary expressions to conditionally render content. Here is an example of using ternary expressions:

```html
<span>{{ x == 1 ? "yes" : "no" }}</span>
```

The advantage of a "ternary expression" over "if statement" is that it can be use inside of any other expressions.

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

### Function calls

You can use function calls to call functions. Textwire has a few built-in functions that you can use in your templates.

Functions in Textwire are type specific, which means that you can't call a function on a variable that is not of the same type as the function. For example, you can't call a `split` function on an integer variable.

Here is an example of using function calls:

```html
{{ name.split(" ") }}
```

#### The list of Built-in functions

Textwire has a few buit-in functions that you can use in your templates.

##### String functions

| Function | Description | Arguments | Example |
| --- | --- | --- | --- |
| `raw` | Prints a string without escaping it | `raw()` | `{{ "<h1>Test</h1>".raw() }}` |
| `split` | Splits a string into a slice | `split(separator string)` | `{{ "Serhii Cho".split(" ") }}` |
| `trim` | Trims a string from spaces and special characters like `\t\n\r` | `trim()` | `{{ "  Anna  ".trim() }}` |

## Literals

### String literals

You can use string literals and concatenate them with other strings. Here is an example of using string literals:

```html
{{ "Hello" + "World!" }}
```

> When you print a string, it will be automatically escaped. If you want to print a string without escaping it, you can use the a `raw` function on strings. Example: `{{ "<h1>Test</h1>".raw() }}`

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
