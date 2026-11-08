---
title: Whitespace Handling - v6
description: Learn how Textwire handles whitespace around standalone directives
outline: deep
---

# Whitespace Handling

Since v6, Textwire follows [Mustache's standalone-tag whitespace rules](https://mustache.github.io/), adapted for Textwire directives. Textwire uses directives instead of Mustache tags. Embedded expressions such as <code v-pre>{{ ... }}</code> and <code v-pre>{!! ... !!}</code> behave like Mustache variable tags and never trigger standalone-line trimming.

## 1. Standalone directive lines are trimmed

When exactly one directive is the only non-whitespace content on a line, Textwire removes the surrounding whitespace and the line ending. The directive still executes normally.

```textwire
| Before
@if(true)
|
@end
| After
```

Output:

```text
| Before
|
| After
```

## 2. Indented standalone lines are trimmed too

Leading spaces or tabs before the directive do not prevent it from being standalone. The indentation is removed along with the line ending.

```textwire
<ul>
    @each(item in ["a", "b"])
    <li>{{ item }}</li>
    @end
</ul>
```

Output:

```html
<ul>
    <li>a</li>
    <li>b</li>
</ul>
```

## 3. Both sides must be clear

A directive is standalone only when there is nothing before it except optional horizontal whitespace back to the line start, and nothing after it except optional horizontal whitespace up to the line ending. Any other visible content on either side means the line is not standalone.

```textwire
| Prefix @if(true)
Text
@end
```

The first line is not standalone because `| Prefix ` appears before the directive, so its whitespace and line ending are preserved.

## 4. Multiple directives are not standalone

If a line contains more than one directive, its whitespace and line ending are preserved.

```textwire
@if(false)@else
| Fallback
@end
```

The first line contains two directives, so its whitespace and line ending are preserved.

## 5. CRLF line endings are supported

Both `\n` and `\r\n` line endings are removed from standalone directive lines.

Template with Windows line endings:

```textwire
@if(true)\r\nHello\r\n@end\r\n
```

Output:

```text
Hello\r\n
```

## 6. No surrounding newline is required

A standalone directive at the beginning or end of a template is still treated as standalone.

```textwire
@if(true)
Hello
@end
```

Output:

```text
Hello
```

## 7. Embedded expressions are never standalone

A line containing <code v-pre>{{ ... }}</code> or <code v-pre>{!! ... !!}</code> is never trimmed, even when the expression is its only non-whitespace content. The whitespace and line ending are preserved, and the expression still produces its normal output.

```textwire
<ul>
    @each(item in ["apple", "pear"])
        {{ item }}
    @end
</ul>
```

Output:

```html
<ul>
        apple
        pear
</ul>
```

## 8. Whitespace inside directive arguments does not matter

Spaces inside a directive's parentheses do not affect standalone detection.

```textwire
@if( x == 1 )
Yes
@end
```

Output:

```text
Yes
```

## 9. Blank lines are unchanged

Empty or whitespace-only lines that do not contain a directive are left as written.

```textwire
Start

@if(true)
Middle
@end

End
```

Output:

```text
Start

Middle

End
```

## Example

```textwire
{{ names = ["Escoffier", "Kokomi", "Skirk"] }}
<ul>
    @each(name in names)
        @for(i = 0; i < 2; i++)
            @each(letter in ["a", "b"])
                <li>{{ loop.parent.iter }}.{{ loop.iter }} {{ loop.parent.parent.index }}: {{ name }}-{{ letter }}{{ i }}</li>
            @end
        @end
    @end
</ul>
```

Since `@each`, `@for`, and the inner `@each` are all standalone, their surrounding whitespace and line endings are removed. The `<li>` lines are not standalone, so they retain their indentation and line endings. Here is the output:

```html

<ul>
                <li>1.1 0: Escoffier-a0</li>
                <li>1.2 0: Escoffier-b0</li>
                <li>2.1 0: Escoffier-a1</li>
                <li>2.2 0: Escoffier-b1</li>
                <li>1.1 1: Kokomi-a0</li>
                <li>1.2 1: Kokomi-b0</li>
                <li>2.1 1: Kokomi-a1</li>
                <li>2.2 1: Kokomi-b1</li>
                <li>1.1 2: Skirk-a0</li>
                <li>1.2 2: Skirk-b0</li>
                <li>2.1 2: Skirk-a1</li>
                <li>2.2 2: Skirk-b1</li>
</ul>
```

The first line is embedded code, not directive, so it is not trimmed.
