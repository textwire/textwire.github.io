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

## get

```ts
obj.get(): any
```

`get` function retrieves values from the object using a dot notation. It accepts a string as an argument, which represents the path to the desired value within the object. If the specified path does not exist, it returns `undefined`.

#### Input Example:

```textwire
{{ obj = { game: {genshin: {char: {name: "Chiori"}}}} }}
{{ obj.get('game.genshin.char.name') }}
```

#### Output:

```json
Chiori
```

#### Important Notes

- **Deeply nested keys.** The `get` function is particularly useful when you need to access nested keys within an object without having to worry about whether each level of the object exists. It helps prevent errors that can occur when trying to access keys on `nil`. For example, if you try to access `obj.game.genshin.char.name` directly and any of those keys (`game`, `genshin`, `name` or `char`) do not exist, it would throw an error. Using `get` allows you to safely retrieve the value without risking an error, as it will simply return `nil` if the path does not exist.
- **Accessing non-valid keys.** Another use-case is when you need to access a key that is not a valid identifier, like `1st`, `naïve`, `日本`, `na$me` or even an empty string.
- **Keys with dot.** If your key contains a dot (`.`) in its name, you can access it simply by specifying the key name. Example: `{{ {"x.y": "Y"}.get('x.y') }}` will result in `Y`.
