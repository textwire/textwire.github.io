---
sidebar_position: 5
---

# Custom functions

## Introduction

Custom functions are user-defined functions in your Go code that can be utilized within Textwire. These functions allow you to perform operations beyond what the built-in functions provide. You can attach custom functions to any data type within Textwire and invoke them on a value using the dot operator `.` followed by the function name.

## Defining custom functions

To define a custom function, you need to create a function in your Go code. Here is an example of defining a `upperLast` function that converts the last character of a string to uppercase:

```go
package main

import (
	"fmt"
	"log"
	"unicode"

	"github.com/textwire/textwire/v2"
)

func main() {
    // highlight-start
    err := textwire.RegisterStrFunc("upperLast", func(s string, args ...interface{}) string {
        runes := []rune(s)

        if len(runes) > 0 {
            runes[len(runes)-1] = unicode.ToUpper(runes[len(runes)-1])
        }

        return string(runes)
    })
    // highlight-end

    if err != nil {
        log.Fatal(err)
    }
}
```

You can now use the `upperLast` function anywhere in your Textwire code.

## Using custom functions

Here is the example of using the `upperLast` function in Textwire after defining it:

```go
package main

import (
	"fmt"
	"log"
	"unicode"

	"github.com/textwire/textwire/v2"
)

func main() {
    err := textwire.RegisterStrFunc("upperLast", func(s string, args ...interface{}) string {
        runes := []rune(s)

        if len(runes) > 0 {
            runes[len(runes)-1] = unicode.ToUpper(runes[len(runes)-1])
        }

        return string(runes)
    })

    if err != nil {
        log.Fatal(err)
    }

    // highlight-start
    twCode := "<h1>{{ 'hello'.upperLast() }}</h1>"
    output, err := textwire.EvaluateString(twCode, nil)

    if err != nil {
        log.Fatal(err)
    }

    fmt.Println(output) // Output: <h1>hellO</h1>
    // highlight-end
}
```