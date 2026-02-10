---
title: Custom Functions - v2
description: Learn how to define and use custom functions in Textwire, enabling you to extend the functionality of Textwire by incorporating user-defined operations
---

# Custom Functions

## Introduction
Custom functions are user-defined functions in your Go code that extend Textwire’s capabilities beyond what built-in functions offer. They were introduced in Textwire `v2.0.0` by suggestion from [@joeyjurjens](https://github.com/joeyjurjens).

You can attach custom functions to any data type in Textwire and invoke them on a value using the dot operator `.` followed by the function name.

Custom functions can take any number of arguments and return a value of any type. They can be used to perform any operations and return any value of any type.

## Defining Custom Functions
To define a custom function, you need to create a function in your Go code. Here is an example of defining an `_upperLast` function that converts the last character of a string to uppercase:

```go {12-20}
package main

import (
	"fmt"
	"log"
	"unicode"

	"github.com/textwire/textwire/v2"
)

func main() {
    err := textwire.RegisterStrFunc("_upperLast", func(s string, args ...interface{}) string {
        runes := []rune(s)
 
        if len(runes) > 0 {
            runes[len(runes)-1] = unicode.ToUpper(runes[len(runes)-1])
        }

        return string(runes)
    })

    if err != nil {
        log.Fatal(err)
    }
}
```

You can now use the `_upperLast` function anywhere in your Textwire code.

:::warning Prefix Custom Functions
To avoid conflicts with built-in functions, it’s recommended to prefix your custom functions with an underscore (_). Since built-in functions take precedence over custom ones, defining a custom function with the same name as a built-in function will cause the built-in function to be used. By adding an underscore prefix, you can prevent these conflicts. For example: <code v-pre>{{ name._upperLast() }}</code>
:::

## Using Custom Functions
Here is the example of using the `_upperLast` function in Textwire after defining it:

```go {26-33}
package main

import (
	"fmt"
	"log"
	"unicode"

	"github.com/textwire/textwire/v2"
)

func main() {
    err := textwire.RegisterStrFunc("_upperLast", func(s string, args ...interface{}) string {
        runes := []rune(s)

        if len(runes) > 0 {
            runes[len(runes)-1] = unicode.ToUpper(runes[len(runes)-1])
        }

        return string(runes)
    })

    if err != nil {
        log.Fatal(err)
    }

    twCode := "<h1>{{ 'hello'._upperLast() }}</h1>"
    output, err := textwire.EvaluateString(twCode, nil)

    if err != nil {
        log.Fatal(err)
    }

    fmt.Println(output) // Output: <h1>hellO</h1>
}
```
