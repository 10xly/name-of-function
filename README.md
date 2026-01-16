# name-of-function
Get the name of a function. Returns undefined if functions don't have names.

## Installation
```sh
npm install name-of-function
```

## Usage
```js
const getFunctionName = require("name-of-function")
getFunctionName(getFunctionName) // "getFunctionName"
getFunctionName(function e() {}) // "e"
```

## Tests
There are no tests.