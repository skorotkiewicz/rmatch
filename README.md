# rMatch

A utility function inspired by Rust's match for pattern matching in JavaScript/TypeScript.

## Installation

```bash
npm install rmatch
# or
yarn add rmatch
```

## Usage

```js
// const { match } = require("rmatch");
import { match } from "rmatch";

// Example usage:
let age = 8;
match(age, [
  [(val) => val >= 1 && val <= 18, () => console.log("Important Birthday")],
  [(val) => val === 21 || val === 50, () => console.log("Important Birthday")],
  [
    (val) => val >= 65 && val <= Number.MAX_SAFE_INTEGER,
    () => console.log("Important Birthday"),
  ],
  [() => true, () => console.log("Not an Important Birthday")], // Default
]);
```

## API

`match(value, patterns)`

- `value`: The value to be matched against patterns.
- `patterns`: An array of patterns, where each pattern is a tuple of two elements:
  - The first function checks if the value matches the pattern.
  - The second function executes when a match is found.

## License

This project is licensed under the MIT License.
