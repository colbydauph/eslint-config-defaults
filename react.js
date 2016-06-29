'use strict';
/* ESLint Config for browser environments that include React / JSX */

module.exports = {
  extends: './browser.js',

  plugins: ['react'],

  env: {
    'shared-node-browser': true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

};
