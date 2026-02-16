Converts to a string with a decimal part by appending a decimal separator and the number of decimal places. Here are some rules:
- When the string is not a number, it will return the string as is
- When the string is already a decimal number, it will return the string as is
- When you use it on a string, it will return the string as is if it's not a number

#### Arguments:
1. `separator` (str) (optional) - The separator to use for the decimal. Default is `"."`
2. `decimals` (int) (optional) - The number of decimal places to add to the number. Default is `2`
