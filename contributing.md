# Contributing

## Running Tests

```
npm install
npm test
```

## Adding features

1. Create a test fixture with your intended mixin usage. `test/fixtures/_your-feature.scss`
2. Create a test result with the expected output. `test/expected/_your-feature.scss`
3. Run `npm test`. The tests should fail at this point.
4. Create the mixin file and add it to `_red-sass.scss`. `mixins/_your-feature.scss`
5. Make the tests pass.
6. Submit a pull request to the develop branch.
