---
title: Object Functions - v3
description: Explore several object functions available in Textwire
---

# Object Functions

## json

```ts
obj.json(): string
```

Converts object to a JSON string and returns it.

#### Input Example:

```textwire
{{ { name: "Chiori", element: "Geo" }.json() }}
```

#### Output:

```json
{"name":"Chiori","element":"Geo"}
```
