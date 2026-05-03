---
title: Upgrade Guide - v5
description: Learn how to upgrade your Textwire code from v3 to v5
outline: deep
---

# Upgrade Guide

Upgrading from v4 to v5 is the most easier upgrade yet. The only breaking change that was introduced is "Raw string output" syntax. Previously, in order to get unescaped string output you needed to use [raw](https://textwire.github.io/v4/functions/str#raw) function on strings like this:

```textwire
{{ "<h1>Test</h1>".raw() }}
```

In Textwire v5, [raw](https://textwire.github.io/v4/functions/str#raw) function was removed. In order to print raw output you now need to use this syntax:

```textwire
{!! "<h1>Test</h1>" !!}
```

We did it because `raw` function was causing a lot of issues where a string could be escaped multiple times causing the wrong output.