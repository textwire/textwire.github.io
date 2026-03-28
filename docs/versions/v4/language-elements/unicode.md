---
title: Unicode Support - v4
description: Textwire a good support for Unicode characters, including emojis and non-Latin scripts.
outline: deep
---

# Unicode Support

Textwire fully embraces Unicode, making it ideal for international applications and multilingual content. Whether you're building websites in Chinese, Russian, Arabic, or mixing multiple languages, Textwire handles it seamlessly.

### String Functions

All built-in functions properly handle Unicode characters. They count characters correctly (not bytes) and support any language:

```textwire
{{ "我喜欢中国".len() }} {{-- output: 5 (characters, not bytes) --}}
{{ "привет".at(2) }} {{-- output: и --}}
```

Keep in mind that with emojis it could be tricky, because some emojis are represented by multiple Unicode code points. The example below shows that the string "👋🏽🌍" has a length of 3, because the waving hand emoji with medium skin tone (👋🏽) is represented by two code points, while the globe emoji (🌍) is represented by one code point:

```textwire
{{ "👋🏽🌍".len() }} {{-- output: 3 --}}
```

### File Names

Directives that accept file names—like `@component`, `@use`, `@insert`, `@reserve`, and `@slot`—fully support Unicode paths:

```textwire
@component('书', { name })@end
@use('♥️/главная')
```

> [!WARNING] No Unicode for Identifiers
> Unicode characters cannot be used in variable names, function names, or object fields. Only ASCII letters (a-z, A-Z), digits (0-9), and underscores are allowed. For example, `user_name` is valid, but `用户名` and `имя` are not.

