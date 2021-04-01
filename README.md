# tap-esm-coverage-issue

How to get test coverage reported with tap testing esm?

## CommonJS

```js
module.exports.classify = (n) => {
  if(n >= 2) return 'large'
  return 'small'
}
```

using `const tap = require('tap')` in `test.js` to test, perfectly reports coverage:

```sh
❯ tap test.js

test.js
  test(1)
    ✓ should be equal

  test(2)
    ✓ should be equal


  2 passing (504.939ms)
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.js |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
```

## ES Modules 

```js
export const classify = (n) => {
  if(n >= 2) return 'large'
  return 'small'
}
```

using `import tap from 'tap'` in `test.mjs` to test, reports no coverage at all:

```sh
❯ tap test.mjs

test.mjs
  test(1)
    ✓ should be equal

  test(2)
    ✓ should be equal


  2 passing (254.006ms)
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------
```

## Workaround: use c8 

with [c8](https://www.npmjs.com/package/c8) wrapping tap, coverage metrics get reported natively:

```sh
❯ c8 tap test.mjs --no-coverage

test.mjs
  test(1)
    ✓ should be equal

  test(2)
    ✓ should be equal


  2 passing (187.043ms)
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------|---------|----------|---------|---------|-------------------
All files  |     100 |      100 |     100 |     100 |
 index.mjs |     100 |      100 |     100 |     100 |
-----------|---------|----------|---------|---------|-------------------
``