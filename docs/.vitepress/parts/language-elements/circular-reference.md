## No circular references

Assigning an array or object into itself, directly or through nested values, produces an error. Example:

```textwire
{{ a = [1]; a[0] = a; a }}
```

```textwire
{{ b = {x: 1}; b.y = b; b }}
```
