---
title: Directives - v6
description: Learn about different directives in Textwire, including @if, @each, @for, @insert, @component and more
---

# Directives

Textwire directives provide control over your templates through commands that begin with `@`. These directives enable you to conditionally display content, iterate over data, create reusable layouts, and build modular components. Each directive serves a specific purpose in the template rendering process, allowing you to write dynamic and maintainable templates without mixing complex logic into your presentation layer.

- [@if](/language-elements/directives/if) `@if(x == 1)`
- [@use](/language-elements/directives/use) `@use("layouts/main")`
- [@insert](/language-elements/directives/insert) `@insert("title", "Home")`
- [@reserve](/language-elements/directives/reserve) `@reserve("title")`
- [@for](/language-elements/directives/for) `@for(i = 0; i < 2; i++)`
- [@each](/language-elements/directives/each) `@each(name in names)`
- [@component](/language-elements/directives/component) `@component("components/post-card")@end`
- [@slot](/language-elements/directives/slot) `@slot('footer')`
- [@pass](/language-elements/directives/pass) `@pass('footer')@end`
- [@passif](/language-elements/directives/passif) `@passif(true, 'footer')@end`
- [@dump](/language-elements/directives/dump) `@dump(users, page)`

## Reserved Names

Directive names are reserved keywords. If you need to use one of them as plain text, for example in an email address, escape it with a backslash. Read more about [escaping](/language-elements/syntax#escaping).

For example, `me@username.com` results in the error `syntax error: expected '(' but found 'rname.com'`, because [@use](/language-elements/directives/use) is a reserved directive. Escape it like this: `me\@username.com` to get `me@username.com`.
