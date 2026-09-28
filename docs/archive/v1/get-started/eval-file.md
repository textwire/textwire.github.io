---
title: Evaluate a File - v1
---

# Evaluate a File

Evaluating a file can be done with the `EvaluateFile` function. The `EvaluateFile` function accepts a path to the file that contains Textwire code and a map of variables that you want to inject into the file. Here is an example:

```go
path := "path/to/file.tw.html"

out, err := textwire.EvaluateFile(path, map[string]interface{}{
    "name": "Anna",
    "age":  25,
})
if err != nil {
    log.Fatal(err)
}
```
