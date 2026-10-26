Ensures a numeric value has at least the requested number of decimal places. It pads shorter values with zeroes and leaves values that already have enough decimal places unchanged. It does not round or remove extra decimal places.

- Integers are padded with zeroes: `123.decimal()` returns string `"123.00"`
- Numeric strings that already have enough decimal places are returned unchanged: `"123.456".decimal()` returns string `"123.456"`
- Numeric strings with fewer decimal places are padded: `"123.4".decimal()` returns string `"123.40"`
- Strings that are not numbers are returned unchanged

`decimals` defaults to `2`. Negative values are treated as `0`.

#### Arguments:
1. `separator` (str) (optional) - The separator to use for the decimal. Default is `"."`
2. `decimals` (int) (optional) - How many decimal places to ensure. Default is `2`. Negative values are treated as `0`
