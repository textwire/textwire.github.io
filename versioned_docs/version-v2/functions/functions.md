---
sidebar_position: 4
description: Discover the built-in functions in Textwire for manipulating different types of data, and learn how to use these functions
---

# Built-in functions
Textwire has a set of built-in functions that can be used to manipulate data. These functions are used to perform operations on strings, arrays, integers, and floats. You can use these functions anywhere in your Textwire programs.

## Built-in functions usage
Each function is attached to a specific data type. For example, the `len` function is used to get the length of an array, and the `trim` function is used to remove characters from both sides of the string. You can call a function on a value by using the dot operator (`.`) followed by the function name.

```html
<div>
    {{ "Textwire".len() }} <!-- output: 8 -->
</div>
```

You can also chain multiple functions together to perform complex operations.

```html
<span>
    {{ "  Textwire  ".trim().len() }} <!-- output: 8 -->
</span>
```

:::info NOTE
New functions are added in new version of Textwire when there is a need for them. If you have a suggestion for a new function, please open [an issue](https://github.com/textwire/textwire/issues/new) on GitHub and we will consider adding it in the next version.
:::

## Error handling
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


:::info
**Why it's best to prevent visitors of your site from seeing the result of the function output when an error occurs?**

When an error occurs in your function, the output may be incorrect or misleading. Displaying this faulty output to users can result in confusing information, broken layouts, or even unintentionally exposing sensitive data.

For example, a function might return partial or incorrect data due to an error in the logic or wrong inputs. If this faulty output is displayed to your site’s visitors, it could negatively impact the user experience by showing inaccurate information or broken page elements.

Moreover, displaying incorrect output can also pose security risks, as it might reveal unintended details about the internal workings of your system, or expose raw data that wasn’t meant to be shown. By hiding incorrect output when an error occurs, you ensure that visitors only see validated, correct content, maintaining both the integrity of your site’s data and the trustworthiness of your user experience.
:::