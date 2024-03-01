# Language Elements

Textwire is designed to be easy to use for Go developers. It has a similar syntax to Go, but it is a separate language and has specific grammar to make it easier to use as a template language.

## Syntax

Textwire has a simple syntax that is easy to learn. Here are some rules that you need to follow when writing Textwire code:

- All the HTML files that you want to parse with Textwire must have a `.tw.html` extension.
- All the Textwire code must be inside of the `{{ }}` brackets, or start with `@` symbol.

### Bracket statements

Bracket statements are special Textwire statements that start with `{{` brackets and end with `}}`. They can be used to define variables, perform arithmetic operations, conditionally render content and so on. Bracket statements can be placed anywhere in the file except inside of directives.

- If you want multiple expressions inside `{{ }}` brackets, use `;` to separate them. For example: `{{ x = 5; y = 10 }}`.
- All the bracket statements return a string. For example, `{{ x = 5 }}` will return an empty string, but `{{ 5 + 5 }}` will return "10".
- There are special bracket statements that need to be closed with `{{ end }}` keyword. For example, [if statement](#if-statement) and [for statements](#for-loop).
- To escape `{{ }}` brackets, you can use `\`. For example `\{{ x }}` will not be parsed as a bracket statement but as HTML.

### Directives

Directives are special Textwire statements that start with `@` symbol. They can be used to define a layout, insert content into reserved places, if statements and so on. Directives can be placed anywhere in the file except inside of `{{ }}` brackets.

- To escape directive symbols, you can use `\`. For example `\@if(x == 1)` will not be parsed as a directive but as HTML.
- You can use textwire expressions and variables inside of directives. For example `@if(x == 1)` or `@use(layoutName)`.

## Available features

Let's take a look at what features are available in Textwire:

- Statements
    - [If statement](#if-statement) `@if(x == 1)`
    - [Variable declaration](#variable-declaration) `{{ x = 5 }}`
    - [Use statement](#use-statement) `@use("layouts/main")`
    - [Insert statement](#insert-statement) `@insert("title", "Home")`
    - [Reserve statement](#reserve-statement) `@reserve("title")`
    - [For loop](#for-loop) `@for(i = 0; i < 2; i++)`
    - [Each loop](#each-loop) `@each(name in names)`
- Expressions
    - [Ternary expressions](#ternary-expressions) `{{ x ? y : z }}`
    - [Prefix expressions](#prefix-expressions) `{{ !x` or `-x }}`
    - [Infix expressions](#infix-expressions) `{{ x * (y + 3) }}`
    - [Postfix expressions](#postfix-expressions) `{{ x++ }}` or `{{ x-- }}`
    - [Comparison expressions](#comparison-expressions) `{{ x == y }}` or `{{ x < y }}`
    - [Function calls](#function-calls) `{{ name.split(" ") }}`
- Literals
    - [String literals](#string-literals) `{{ "Hello, World!" }}` or ``{{ `Hello, World!` }}``
    - [Integer literals](#integer-literals) `{{ 123 }}` or `{{ -234 }}`
    - [Float literals](#float-literals) `{{ 123.456 }}`
    - [Boolean literals](#boolean-literals) `{{ true }}`
    - [Nil literal](#nil-literal) `{{ nil }}`
    - [Array literals](#array-literals) `{{ [1, 2, 3] }}`
    - [Object literals](#object-literals) `{{ { "name": "John", "age": 25 } }}`

## Types and Literals

Textwire has a different type system that Go. When you pass a variable to Textwire, it will be automatically converted to a Textwire type. Here is a list of supported types that you can pass to Textwire or define in Textwire:

| Textwire type | Equivalent Go types                                                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Str`         | `string`                                                                                                                                                    |
| `Bool`        | `bool`                                                                                                                                                      |
| `Int`         | `int`, `int8`, `int16`, `int32`, `int64`, `uint`, `uint8`, `uint16`, `uint32`, `uint64`                                                                     |
| `Float`       | `float32`, `float64`                                                                                                                                        |
| `Nil`         | `nil`                                                                                                                                                       |
| `Array`       | `[]string`, `[]bool`, `[]int`, `[]int64`, `[]int32`, `[]int16`, `[]int8`, `[]uint`, `[]uint64`, `[]uint32`, `[]uint16`, `[]uint8`, `[]float64`, `[]float32` |
| `Object`      | any struct can be just `struct{}` or a typed struct like `User{}` with any fields or a `map` type like `map[string]string` or something else                |

The biggest difference in types and type literals between Textwire and Go is that Textwire's literals have functions that you can call on them. For example, you can call a `split` function on a string literal like this: `{{ "hello world".split(" ") }}` to get an array of strings `["hello", "world"]`.

## Statements

### If statement

You can use if statements to conditionally render content. Here is an example of using if statements:

```html
@if(name == "Anna")
    <p>Her name is Anna</p>
@end
```

You can also use `else` and `elseif` statements:

```html
@if(x == 1)
    <p>x is 1</p>
@elseif(x == 2)
    <p>x is 2</p>
@else
    <p>x is not 1 and 2</p>
@end
```

### For loop

You can use regular for loops to iterate over an array or a range of numbers.

This is a basic for loop that you can use. It has a declaration, condition and post statement. `for <declaration>; <condition>; <post>`. They are all optional. Here is an example of using for loop:

```html
{{ names = ["Ann", "Serhii"] }}

@for(i = 0; i < names.len(); i++)
    <p>{{ names[i] }}</p>
@else
    <p>No names</p>
@end
```

::: tip
The `@else` statement is optional and can be used to render content when there are no iterations in the loop.
:::

You can also use `@break` and `@continue` directives inside of a for loop to break or continue the loop.

### Each loop

Each statement is a special for loop that you can use to iterate over an array. It has a declaration and an array. `@each(<declaration> in <array>)`. Here is an example of using each loop:

```html
{{ names = ["Ann", "Serhii"] }}

@each(name in names)
    <p>{{ name }}</p>
@else
    <p>No names</p>
@end
```

::: tip
The `@else` statement is optional and can be used to render content when the array is empty.
:::

Inside of every `each` loop, you can optionally use a `loop` object to get the current index of the item or other data that is updated on every iteration.

For example, `{{ loop.index }}` will return the current index of the item. Here is a list of all the properties of the `loop` object you can use:

| Property | Type    | Description                                |
| -------- | ------- | ------------------------------------------ |
| `index`  | Integer | Current index number starting from `0`     |
| `first`  | Boolean | Is the first item in a loop                |
| `last`   | Boolean | Is the last item in a loop                 |
| `iter`   | Integer | Current iteration number starting from `1` |

You can also use `@break` and `@continue` directives inside of a for loop to break or continue the loop.

#### Example

```html
{{ names = ["Ann", "Serhii", "Vladimir"] }}

<ul>
    @each(name in names)
        <li>{{ loop.iter }}: {{ name }}</li>
    @end
</ul>
```

#### Output

```html
<ul>

        <li>1: Anna</li>

        <li>2: Serhii</li>

        <li>3: Vladimir</li>

</ul>
```

### Variable declaration

You can assign and declare variables by using the `=` operator. Here is an example of declaring variables:

```html
{{ x = 5 }}
{{ x = 10 }}
```

You cannot assign values to variables that have a different type. For example, you cannot do `{{ x = "Hello"; x = 3 }}` because `x` is a string and then you are trying to assign an integer to it. In Textwire, you don't need to declare type of a variable, it will be automatically inferred from the value that you assign to it.

::: tip
Variable declaration statements are not expressions! They don't return any value and can't be used inside of other expressions. Therefore, they don't print anything to the output.
:::


### Use statement

You have a "use statement" to define a layout for your template. Here is an example of using use statement:

```html
@use("layouts/main")
```

Use statement excepts a string literal as an argument. The string literal should be a path to the layout file relative to a `TemplateDir` parameter that you set in the config. For example, if you set `TemplateDir` to `"src/templates/layouts"`, then you can use the layout statement like `@use("main")` and it will look for the layout file in `"src/templates/layouts/main.tw.html"`.

::: tip
When you use the `@use` directive, all the content of the file will not be rendered except everything inside of the `@insert` directives. It happens because you tell the program to use a layout file instead of the current file. It means that all the reserved places in the layout file will be replaced with the content that you insert into them.
:::

### Insert statement

You can use insert statement to insert content into reserved places. You cannot use `insert` without defining a layout with Use statement in the same file. Here is an example of using insert statement:

```html
@use("layouts/main")

@insert("title", "Home page")

@insert("content")
    <h1>Hello, World!</h1>
    <p>This is a home page.</p>
@end
```

Insert statement excepts 2 arguments, the name of the reserved place and the optional content that you want to insert into the reserved place.

All the `insert` statements will be transferred to the layout file and will be placed into reserved places defined by a [reserve statement](#reserve-statement).

### Reserve statement

When you define a layout file for you template, you need to reserve places for dynamic content. You can reserve a place for a title, content, sidebar, footer and so on. Here is an example of using reserve statement:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@reserve("title")</title>
</head>
<body>
    @reserve("content")
</body>
</html>
```

::: tip
All the variables passed to the template file will be available in the layout file. It means that you can even use replace the `@reserve("title")` with `{{ title }}` and define the `title` variable in each template file.
:::

Reserve statement excepts only a single argument, which the name of the reserved place. This name will be used in the [insert statement](#insert-statement) to insert content into the reserved place.

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

### Postfix expressions

You can use postfix expressions to increment or decrement a variable. Here is an example of using postfix expressions:

```html
<span>{{ x++ }}</span> <!-- Increment -->
<span>{{ x-- }}</span> <!-- Decrement -->
```

### Comparison expressions

Comparison expressions produce a boolean value. Here is an example of using comparison expressions:

```html
@if(x == 1)
    <p>x is 1</p>
@end
```

#### Supported operators

All supported operators are listed in the table below:

| Operator | Description      |
| -------- | ---------------- |
| `==`     | Equal            |
| `!=`     | Not equal        |
| `>`      | Greater          |
| `<`      | Less             |
| `>=`     | Greater or equal |
| `<=`     | Less or equal    |


### Function calls

You can use function calls to call functions. Textwire has a few built-in functions that you can use in your templates.

Functions in Textwire are type specific, which means that you can't call a function on a variable that is not of the same type as the function. For example, you can't call a `split` function on an integer variable.

Here is an example of using function calls:

```html
{{ name.split(" ") }}
```

> You can read more detailed about built-in functions on the [Built-in Functions](/1.x/functions/) page.

## Literals

### String literals

You can use string literals and concatenate them with other strings. You can use double or single quotes for strings. Here is an example of using string literals:

```html
{{ "Hello" + 'World!' }}
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
@if(nil)
    <p>It will not be displayed</p>
@end
```

### Float literals

You can use float literals and perform arithmetic operations with them. Here is an example of using float literals:

```html
<span>{{ 1.5 + 2.5 }}</span>
```

### Boolean literals

You can use boolean literals to check if a variable is true or false. Here is an example of using boolean literals:

```html
@if(true)
    <p>Is tall</p>
@end
```

### Array literals

Defining an array in Textwire is done is a similar way as in other languages. Here is an example of defining an array:

```html
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    @each(name in names)
        <li>{{ name }}</li>
        <li>{{ loop.index }}</li> <!-- Index of the current item -->
    @end
</ul>
```

You can access values in an array by using an index. Here is an example of accessing values in an array:

```html
{{ names = ["John", "Jane", "Jack"] }}

<ul>
    <li>{{ names[0] }}</li> <!-- "John" -->
    <li>{{ names[1] }}</li> <!-- "Jane" -->
    <li>{{ names[2] }}</li> <!-- "Jack" -->
</ul>
```

### Object literals

Objects in Textwire are very similar to JSON object with key-value pairs. Here is an example of defining an object:

```html
{{ person = {"name": "John", "age": 25} }}
```

You can access values in an object by using a key. Here is an example of accessing values in an object:

```html
{{ user = {"age": 25, "name": {"first": "Anna", "last": "Cho"}} }}

<ul>
    <li>First name: {{ user.name.first }}</li> <!-- "Anna" -->
    <li>Last name: {{ user.name.last }}</li> <!-- "Cho" -->
    <li>Age: {{ user.age }}</li> <!-- 25 -->
</ul>
```

::: tip
Object fields are case insensitive. It means that you can access fields in an object by using any case. For example, `{{ user.name.first }}` and `{{ user.Name.First }}` will return the same value. It's done this way for convenience.
:::