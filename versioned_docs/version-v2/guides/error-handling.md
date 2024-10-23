---
sidebar_position: 6
description: Learn how to handle errors in Textwire, enabling you to identify and resolve issues in your project
---

# Error Handling
If you call a function on a value that doesn't support that function, Textwire will return an error. Whether you use Textwire to parse a string or a file, you will get an error returned.

### Example with a string
Let's say you are evaluating a string that contains a Textwire code with the wrong function usage:

```go
inp := "{{ name.split(1) }}"

result, err := textwire.EvaluateString(inp, map[string]interface{}{
    "name": "Serhii Cho",
})

if err != nil {
    // handle the error
}
```

The `split` function accepts an optional `separator` argument, which should be a string. In this case, the `separator` argument is an integer, which is incorrect. Textwire will return an error in this case from the `EvaluateString` function which you can handle however you want.

### Example with templates
If you use Textwire as a templating engine to serve the frontend, you will get an error from

```go
err := tpl.Response(w, "home", map[string]interface{}{
    "title": "Home page",
})

if err != nil {
    // handle the error
}
```

### What happens to the output?

When an error occurs, we cannot serve you the output on the frontend. The wrong usage of functions will lead to wrong function output, which can result in wrong data being displayed on the frontend. For better security and data integrity, the best way is to prevent the user of your site to see the output. You can read more about this in the FAQ section.


:::info Why hiding the output?
Read more about [Why it's best to prevent visitors of your site from seeing the result of the function output when an error occurs](/docs/v2/faq/questions#why-its-best-to-prevent-visitors-of-your-site-from-seeing-the-result-of-the-function-output-when-an-error-occurs) in the FAQ section
:::
