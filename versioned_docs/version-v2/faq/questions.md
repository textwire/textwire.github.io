---
sidebar_position: 2
description: Find answers to frequently asked questions about Textwire, including its purpose, usage, and how it differs from templating engines
---

# Questions

## What exactly is Textwire?

Textwire is a programming language designed to be used with Go programs. Since Go doesn't have a simple and easy to use templating language, Textwire was created to fill that gap. It is a simple and easy to use language that can be used with any text files.


## Is Textwire a templating engine?

Textwire is not exactly a templating engine. It is a separate language written in Go that comes as a package.

## Why it's best to prevent visitors of your site from seeing the result of the function output when an error occurs?
When an error occurs in your function, the output may be incorrect or misleading. Displaying this faulty output to users can result in confusing information, broken layouts, or even unintentionally exposing sensitive data.

For example, a function might return partial or incorrect data due to an error in the logic or wrong inputs. If this faulty output is displayed to your site’s visitors, it could negatively impact the user experience by showing inaccurate information or broken page elements.

Moreover, displaying incorrect output can also pose security risks, as it might reveal unintended details about the internal workings of your system, or expose raw data that wasn’t meant to be shown. By hiding incorrect output when an error occurs, you ensure that visitors only see validated, correct content, maintaining both the integrity of your site’s data and the trustworthiness of your user experience.
