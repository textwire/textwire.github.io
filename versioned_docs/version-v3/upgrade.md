---
title: Upgrade Guide - v3
sidebar_label: Upgrade Guide
sidebar_position: 7
description: Learn how to upgrade your Textwire code from v2 to v3
---

# Upgrade Guide

## Upgrading To v3 From v2
Going from version 2 to version 3 is a simple process if you are not using Textwire's inner Lexer and Parser. Follow the steps below to upgrade your Textwire code to v3.

### 1. Change the import path
Change all the imports in your code from `github.com/textwire/textwire/v2` to `github.com/textwire/textwire/v3`

```diff
- import "github.com/textwire/textwire/v2"
+ import "github.com/textwire/textwire/v3"
```

### 2. Update the dependencies
Run the command `go mod tidy` to update the dependencies in your `go.mod` file

```bash
go mod tidy
```

### 3. Rename global variable
If you have any defined variables called `global`, rename it to something else because this variable is now reserved.

### 4. 
