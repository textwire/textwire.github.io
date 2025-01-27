---
title: Textwire Directives - v2
sidebar_label: Directives
sidebar_position: 9
description: Learn about the directives in Textwire and how to use them.
---

# Directives
Directives are special Textwire statements that start with `@` symbol. They can be used to define a layout, insert content into reserved places, if statements and so on. Directives can be placed anywhere in the file except inside of `{{ }}` brackets.

- To escape directive symbols, you can use `\`. For example `\@if(x == 1)` will not be parsed as a directive but as HTML
- You can use textwire expressions and variables inside of directives. For example `@if(x == 1)` or `@use(layoutName)`
- All the directives with body like `@if`, `@for`, `@each`, `@component`, etc. must be closed with `@end` keyword