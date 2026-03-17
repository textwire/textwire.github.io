---
layout: home

hero:
    name: Textwire
    text: Zero-dependency
    tagline: Prioritizing runtime performance and long-term stability for Go developers
    actions:
        - theme: brand
          text: Get Started →
          link: /v4/get-started
        - theme: alt
          text: Introduction
          link: /v4/
    image:
        src: /images/logo.png
        alt: Textwire Logo
---

::: code-group

<<< @/.vitepress/snippets/home.tw{textwire} [Home page]
<<< @/.vitepress/snippets/base.tw{textwire} [Layout]
<<< @/.vitepress/snippets/book.tw{textwire} [Component]
<<< @/.vitepress/snippets/structure.txt [Structure]
<<< @/.vitepress/snippets/main.go [Go code]

:::

<Home />
