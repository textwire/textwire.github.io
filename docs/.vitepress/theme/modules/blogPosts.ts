import type { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
    {
        url: '/blog/2026-02-05-textwire-v3',
        title: 'Version 3 Release Notes',
        intro: `Textwire v3 is one of the most important releases, introducing several significant features and improvements. This release includes the introduction of the <code>global</code> variable object, a new <a href="/docs/v3/functions/global#defined">global</a> function <a href="https://github.com/textwire/textwire/issues/56">#56</a>, the ability to register custom functions for the OBJECT type, and improvements to error handling, performance <a href="https://github.com/textwire/textwire/issues/61">#61</a> <a href="https://github.com/textwire/textwire/issues/60">#60</a> <a href="https://github.com/textwire/textwire/issues/59">#59</a>, and usability <a href="https://github.com/textwire/textwire/issues/35">#35</a>.`,
    },
    {
        url: '/blog/2025-01-10-textwire-v2.4.0',
        title: 'v2.4.0 Release Notes',
        intro: `The Textwire version <code>v2.4.0</code> is an important release. The first release in 2025. It adds several convenient features and improvements to the language. This release includes Component Path Alias, introduction of new built-in functions, debugging utilities and more. Read the complete release notes to learn more about the changes.`,
    },
    {
        url: '/blog/2024-10-24-textwire-v2.1.0-release-notes',
        title: 'v2.1.0 Release Notes',
        intro: `The Textwire version <code>v2.0.0</code> brought us an ability to define <a href="/docs/v2/guides/custom-functions">custom functions</a> and had lots of code refactoring and improvements. I'm very happy to introduce Textwire version <code>v2.1.0</code> with new built-in functions, improved error handling, and other improvements.`,
    },
    {
        url: '/blog/2024-10-20-introducing-textwire-a-domain-specific-language-for-go/',
        title: 'Introducing Textwire: A Domain-Specific Language for Go',
        intro: `What was the motivation to create Textwire? How does it work? What are the benefits of using it, and should you use it in your next Go project? In this article, we will answer these questions and more.`,
    },
]
