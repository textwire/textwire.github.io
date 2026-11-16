---
title: Whitespace Handling - v6
description: Learn how Textwire handles whitespace around standalone directives and comments
outline: deep
---

# Whitespace Handling

Since v6, Textwire follows [Mustache's standalone-tag whitespace rules](https://mustache.github.io/), adapted for Textwire directives and comments. We call it **Standalone directive rules**.

Textwire uses directives (like `@if`, `@each`, `@end`) instead of Mustache tags. Textwire comments (<code v-pre>{{-- ... --}}</code>) follow the same standalone rules as directives. Embedded expressions such as <code v-pre>{{ ... }}</code> and <code v-pre>{!! ... !!}</code> behave like Mustache variable tags and never trigger standalone-line trimming.

The goal of standalone whitespace handling is to let you write clean, indented template code without generating unwanted blank lines in your final output.

## The Core Rule

A directive or Textwire comment is considered **standalone** if it is the **only non-whitespace content on its line**.

When a directive or comment is standalone, Textwire automatically removes:
1. The leading horizontal whitespace (indentation).
2. The directive or comment itself.
3. The trailing horizontal whitespace.
4. The line ending (`\n` or `\r\n`).

The directive still executes normally, and the comment is still ignored, but neither leaves a "footprint" in the output.

### Basic Example

```textwire :line-numbers
| Before
@if(true)
|
@end
| After
```

**Output:**

```text :line-numbers
| Before
|
| After
```

## What Counts as Standalone?

### Indented Directives
Leading spaces or tabs do not prevent a directive from being standalone. The indentation is consumed along with the line ending.

```textwire :line-numbers
<ul>
    @each(item in ["a", "b"])
    <li>{{ item }}</li>
    @end
</ul>
```

**Output:**

```html :line-numbers
<ul>
    <li>a</li>
    <li>b</li>
</ul>
```

### Standalone Comments
A Textwire comment on its own line is removed together with its indentation and line ending. This keeps comments from creating blank lines in the output.

```textwire :line-numbers
| Before
{{-- This line disappears --}}
| After
```

**Output:**

```text :line-numbers
| Before
| After
```

Indented comments follow the same rule:

```textwire :line-numbers
<ul>
    {{-- Render the list --}}
    @each(item in ["a", "b"])
    <li>{{ item }}</li>
    @end
</ul>
```

**Output:**

```html :line-numbers
<ul>
    <li>a</li>
    <li>b</li>
</ul>
```

Multiline comments are trimmed on every line where the comment is the only non-whitespace content:

```textwire :line-numbers
| Before
{{-- This comment
     spans two lines --}}
| After
```

**Output:**

```text :line-numbers
| Before
| After
```

Only Textwire comments participate in standalone trimming. HTML comments such as `<!-- ... -->` are treated as regular text and are always preserved.

### Whitespace Inside Arguments
Spaces inside a directive's parentheses do not affect standalone detection.

```textwire :line-numbers
@if( x == 1 )
Yes
@end
```

**Output:**

```text :line-numbers
Yes
```

### Component Indentation

Unlike Mustache partials, Textwire components do not transfer the indentation of the component call to every line of their rendered content. The component's own indentation is preserved.

For an inline call like the one below, you can think of rendering as replacing everything from `@component` through `@end` with the component's rendered content. The spaces before `@component` remain before the first line; they are not added to subsequent lines.

**Main template:**

```textwire :line-numbers
Before
    @component('components/indent')@end
After
```

**Component (`components/indent.tw`):**

```textwire :line-numbers
<div>
    <span>First</span>
    <span>Second</span>
</div>
```

**Output:**

```html :line-numbers
Before
    <div>
    <span>First</span>
    <span>Second</span>
</div>
After
```

The opening `<div>` has the four spaces from the component call. Each `<span>` keeps its original four spaces, and the closing `</div>` has no indentation. No additional indentation is applied to those lines.

This example places `@component` and `@end` on the same line, so standalone-line trimming does not apply.

## When is a Line NOT Standalone?

If any visible content exists on the same line, the line is **not standalone**, and its whitespace and line endings are preserved.

### 1. Inline Text
A directive is standalone only when there is nothing before it except optional horizontal whitespace, and nothing after it except optional horizontal whitespace up to the line ending.

```textwire :line-numbers
| Prefix @if(true)
Text
@end
```

The first line is not standalone because `| Prefix ` appears before the directive, so its whitespace and line ending are preserved.

**Output:**

```text :line-numbers
| Prefix 
Text
```

### 2. Multiple Directives
If a line contains more than one directive, its whitespace and line ending are preserved.

```textwire :line-numbers
@if(false)@else
| Fallback
@end
```

**Output:**

```text :line-numbers

| Fallback
```

### 3. Embedded Expressions
Lines containing embedded expressions like <code v-pre>{{ ... }}</code> or <code v-pre>{!! ... !!}</code> are **never** trimmed, even when the expression is the only non-whitespace content on the line. They behave like standard text content.

```textwire :line-numbers
<ul>
    @each(item in ["apple", "pear"])
        {{ item }}
    @end
</ul>
```

**Output:**

```html :line-numbers
<ul>
        apple
        pear
</ul>
```

### 4. Inline Comments
Only the comment is removed from a line with other content. The surrounding spaces and the line ending stay in place.

```textwire :line-numbers
| Before {{-- note --}} After
```

**Output:**

```text :line-numbers
| Before  After
```

Both spaces around the comment remain, producing a double space. If a line contains more than one Textwire comment, or a comment and a directive, standalone trimming does not apply.

An escaped comment is treated as plain text and never takes part in standalone trimming:

```textwire :line-numbers
\{{-- This is printed --}}
```

**Output:**

```text :line-numbers
{{-- This is printed --}}
```

## Edge Cases

### Start and End of File
Standalone directives and comments are trimmed at template boundaries too, even without a preceding or final newline.

```textwire :line-numbers
@if(true)
Hello
@end
```

**Output:**

```text :line-numbers
Hello
```

### CRLF Line Endings
Both `\n` (Unix) and `\r\n` (Windows) line endings are correctly removed from standalone directive and comment lines.

### Blank Lines
Empty or whitespace-only lines that do not contain a directive or comment are left exactly as written. They are not collapsed or removed. A line containing only a comment is not a blank line; it is removed along with its line ending.

```textwire :line-numbers
Start

@if(true)
Middle
@end

End
```

**Output:**

```text :line-numbers
Start

Middle

End
```

## Comprehensive Example

Here is a more complex template demonstrating nested standalone directives and embedded expressions.

```textwire :line-numbers
{{ team = ["Escoffier", "Vodyanitsa", "Mona", "Skirk"] }}

<h2>Team Rotation</h2>

<ul>
    @each(char in team)
        @each(action in ["Skill", "Burst"])
            @continueif(char == "Mona" && loop.index == 0)
            <li>{{ char }}: {{ action }}</li>
        @end
    @end
</ul>
```

Since `@each`, `@for`, and the inner `@each` are all standalone, their surrounding whitespace and line endings are removed. The `<li>` lines are not standalone, so they retain their indentation and line endings. 

**Output:**

```html :line-numbers


<h2>Skirk Team Rotation</h2>

<ul>
            <li>Escoffier: Skill</li>
            <li>Escoffier: Burst</li>
            <li>Vodyanitsa: Skill</li>
            <li>Vodyanitsa: Burst</li>
            <li>Mona: Burst</li>
            <li>Skirk: Skill</li>
            <li>Skirk: Burst</li>
</ul>
```

*Note: The first line is an embedded expression, not a directive, so it is not trimmed and leaves a blank line at the start of the output.*
