---
title: Built-in Functions - v1
---

# Built-in Functions
Textwire has a set of built-in functions that can be used to manipulate data. These functions are used to perform operations on strings, arrays, integers, and floats. You can use these functions anywhere in your Textwire programs.

Each function is attached to a specific data type. For example, the `len` function is used to get the length of an array, and the `trim` function is used to remove characters from both sides of the string. You can call a function on a value by using the dot operator (`.`) followed by the function name.

```textwire
<div>
    {{ "Textwire".len() }} <!-- output: 8 -->
</div>
```

You can also chain multiple functions together to perform complex operations.

```textwire
<span>
    {{ "  Textwire  ".trim().len() }} <!-- output: 8 -->
</span>
```

:::tip
New functions are added in new version of Textwire when there is a need for them. If you have a suggestion for a new function, please open [an issue](https://github.com/textwire/textwire/issues/new) on GitHub and we will consider adding it in the next version.
:::
