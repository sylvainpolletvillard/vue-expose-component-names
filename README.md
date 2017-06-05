# vue-expose-component-names

This Vue.js plugin expose component names in the DOM by adding a `data-component-name` attribute to the root element of all your Vue components.

This let you use a CSS selector to easily query your components:
 ```javascript
 document.querySelectorAll("[data-component-name='MyComponent']")
 ```

<p align="center">
  <a href="https://circleci.com/gh/sylvainpolletvillard/vue-expose-component-names">
    <img src="https://circleci.com/gh/sylvainpolletvillard/vue-expose-component-names.svg?style=svg" alt="Build Status" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="Software License" />
  </a>
  <a href="https://npmjs.org/package/vue-expose-component-names">
    <img src="https://img.shields.io/npm/v/vue-expose-component-names.svg?style=flat-square" alt="Packagist" />
  </a>
  <a href="https://github.com/sylvainpolletvillard/vue-expose-component-names/releases">
    <img src="https://img.shields.io/github/release/sylvainpolletvillard/vue-expose-component-names.svg?style=flat-square" alt="Latest Version" />
  </a>
</p>

### Installation
```
npm install --save vue-expose-component-names
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.