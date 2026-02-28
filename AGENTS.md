# Textwire Documentation

USE PODMAN!!!!

## Project Overview

VitePress documentation site for Textwire templating engine for Go programming language.

## Directory Structure

- Theme files: `docs/.vitepress/theme/`
- Syntax highlighting: `docs/.vitepress/textwire.tmLanguage.json`
- VitePress config: `docs/.vitepress/config.mts`
- Versioned docs: `docs/versions/`
- Blog articles: `docs/.vitepress/blog/`
- Blog registry: `docs/.vitepress/theme/modules/blogPosts.ts`

## Development

- No tests needed
- Build: `podman-compose exec app npm run build` (only if you really need it because it's a slow process)

## Important

If you write inline code examples with `{{` and `}}` braces that Textwire uses, wrap them in <code v-pre></code> HTML tags instead. Intead of `{{ x = 5}}` Textwire example, you should write <code v-pre>{{ x = 5 }}</code>. It's because if you write it with backtics, Vue will execute them since `{{ }}` braces are also used in Vue.js.
