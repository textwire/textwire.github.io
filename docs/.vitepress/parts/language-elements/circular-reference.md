## No circular references

Assigning an array or object into itself, directly or through nested values, is an error. The assignment is rejected and the template fails with an error message.

```textwire
{{ a = [1]; a[0] = a; a }}
```

```textwire
{{ b = {x: 1}; b.y = b; b }}
```
