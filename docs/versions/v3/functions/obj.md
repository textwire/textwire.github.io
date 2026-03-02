---
title: Object Functions - v3
description: Explore several object functions available in Textwire
---

# Object Functions

## camel

```ts
obj.camel(): object
```

Converts object keys to camel case and returns it. Useful when you need to pass data to JavaScript and want to convert keys before calling [json](/v3/functions/obj#json) function.

#### Input Example:

```textwire
{{ { First_Name: "Serhii", LastName: "Cho" }.camel() }}
```

#### Output:

```json
{firstName: "Serhii", lastName: "Cho"}
```

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
