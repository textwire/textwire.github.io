---
sidebar_position: 3
---

# Evaluate a string

You can use the `EvaluateString` function to compile and evaluate a string containing Textwire code. The `EvaluateString` function accepts a string and a map of variables that you want to inject into the string. After evaluating the string, the function returns the evaluated string.

This is useful when you want to inject variables into an email template or any other string that contains Textwire code. Here is an example:

```go
inp := `Hello <b>{{ name }}</b>! Congratulations on your {{ age }}th birthday!`

result, err := textwire.EvaluateString(inp, map[string]interface{}{
    "name": "Serhii",
    "age": 33
})

if err != nil {
    log.Fatal(err)
}
```