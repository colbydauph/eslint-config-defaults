'use strict';
/* ESLint Config for browser environments that include React / JSX */

module.exports = {
  extends: '../node',

  env: {
    browser: true,
    node: false,
    'shared-node-browser': true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

};
