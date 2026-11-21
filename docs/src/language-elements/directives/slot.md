---
title: Slot Directive - v6
description: Learn about the @slot directive in Textwire
---

# @slot

The `@slot` directive defines placeholder areas in component files that receive content from `@pass` directives. Think of slots as "mailboxes" that receive content "delivered" by passes.

There are 2 types of slots:

1. **Default slot**: `@slot` - receives content that isn't wrapped in a named pass
2. **Named slot**: `@slot("name")` - receives content from `@pass("name")`

Here's how to define slots in a component:

```textwire
<div class="book">
    @slot

    <h1>{{ book.title }}</h1>
    <p>{{ book.description }}</p>

    @slot('footer')
</div>
```

In this component:
- `@slot` (without name) creates a default slot
- `@slot('footer')` creates a named slot called "footer"

**Flow:** Parent uses `@pass` → Content goes to component's `@slot`

See the [@pass](/language-elements/directives/pass) section for how to send content to these slots.
