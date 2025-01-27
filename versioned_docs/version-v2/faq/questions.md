---
title: Questions - v2
sidebar_label: Questions
sidebar_position: 2
description: Find answers to frequently asked questions about Textwire, including its purpose, usage, and how it differs from templating engines
---

# Questions

## What exactly is Textwire?
Textwire is a programming language designed to be used with Go programs. Since Go doesn't have a simple and easy to use template language, Textwire was created to fill that gap. It is a simple and easy to use language that can be used with any text files.


## Is Textwire a templating engine?
Textwire is not exactly a templating engine. It is a Domain-specific language (DTO) written in Go. It is designed to be used with Go programs to provide elegant and easy to use syntax for working with front-end. It's a good alternative to other templating engines for Go since it's performant and optimized.

## Why it's best to prevent visitors of your site from seeing the result of the function output when an error occurs?
When an error occurs in your function, the output may be incorrect or misleading. Displaying this faulty output to users can result in confusing information, broken layouts, or even unintentionally exposing sensitive data.

For example, a function might return partial or incorrect data due to an error in the logic or wrong inputs. If this faulty output is displayed to your site’s visitors, it could negatively impact the user experience by showing inaccurate information or broken page elements.

Moreover, displaying incorrect output can also pose security risks, as it might reveal unintended details about the internal workings of your system, or expose raw data that wasn’t meant to be shown. By hiding incorrect output when an error occurs, you ensure that visitors only see validated, correct content, maintaining both the integrity of your site’s data and the trustworthiness of your user experience.

## What is the difference between directives and statements in Textwire?
Directives and statements are the core of Textwire language. They are used to define the structure and behavior of your text files. However, there are some key differences between them:

- All directives are statements, but not all statements are directives
- Directives start with the `@` symbol, while statements is a general term for parts of code that perform and action and do not return a value

:::note
You can read about statements in the [Statements](/docs/v2/language-elements/statements) section of the documentation.
:::

For example, `{{ x = 5 }}` is a statement that assigns the value `5` to the variable `x`. On the other hand, `@use('~main')` is a directive and a statement at the same time, as it includes the layout `main` in the current file and doesn't return a value.