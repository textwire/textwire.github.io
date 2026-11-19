---
title: Migrating from Codeberg - v6
description: How to move your Textwire project from codeberg.org/textwire/textwire/v5 to github.com/textwire/textwire/v6
outline: deep
---

# Migrating from Codeberg

Textwire started on GitHub, moved to Codeberg in the middle of v5, and v6 is back on GitHub. So the module path changed from `codeberg.org/textwire/textwire/v5` to `github.com/textwire/textwire/v6`.

This only affects you if you installed Textwire from Codeberg. If you stayed on GitHub, your import already points to the right place and only the `v5` suffix needs to become `v6`.

Update your imports first, then go through the [Upgrade Guide](/upgrade) for the breaking changes between v5 and v6.

## 1. Update Import Paths

Replace the module path in every `.go` file. Because the whole prefix is replaced, subpackages like `.../pkg/evaluator` are updated too:

```bash
grep -rl 'codeberg.org/textwire/textwire/v5' --include='*.go' . \
    | xargs sed -i 's|codeberg.org/textwire/textwire/v5|github.com/textwire/textwire/v6|g'
```

On macOS, BSD `sed` needs an empty argument after `-i`:

```bash
grep -rl 'codeberg.org/textwire/textwire/v5' --include='*.go' . \
    | xargs sed -i '' 's|codeberg.org/textwire/textwire/v5|github.com/textwire/textwire/v6|g'
```

## 2. Update Dependencies

Run `go mod tidy` to fetch v6 and remove the old requirement. Version 6 requires Go `1.25` or higher.

```bash
go mod tidy
```

Verify that no old imports are left:

```bash
grep -rn 'codeberg.org/textwire' --include='*.go' .
```

The command should print nothing.

## 3. Follow the Upgrade Guide

Once your imports point to v6 and the project compiles, complete the [Upgrade Guide](/upgrade). It covers the breaking changes between v5 and v6, such as the `loop` object in nested loops, whitespace handling, `defined()` checks, escaped `@insert` and `@reserve` values, read-only global data, and the `pkg/` API changes.
