'use strict';
/* ESLint Config for test environments that include React / JSX */

module.exports = {
  extends: './react.js',

  env: {
    jest: true,
  },

  parserOptions: {
    sourceType: 'module',
  },

  rules: {
    'no-console': [0],
    'max-statements': [1, 50],
  },

};
