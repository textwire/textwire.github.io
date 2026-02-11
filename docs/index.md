---
layout: home

hero:
    name: Textwire
    text: Templating for Go
    tagline: Prioritizing stability and performance over new features
    actions:
        - theme: brand
          text: Get Started →
          link: /v3/get-started
        - theme: alt
          text: Introduction
          link: /v3/
    image:
        src: /images/logo.png
        alt: Textwire Logo
---

::: code-group

<<< .vitepress/snippets/home.tw{textwire} [Home page]
<<< .vitepress/snippets/base.tw{textwire} [Layout]
<<< .vitepress/snippets/book.tw{textwire} [Component]
<<< .vitepress/snippets/structure.txt [Structure]
<<< .vitepress/snippets/main.go [Go code]

:::

<Teleport defer to=".VPHome">
    <Home />
</Teleport>
