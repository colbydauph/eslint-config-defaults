'use strict';
/* ESLint Config for tests in node environments */

module.exports = {
  extends: './node.js',

  env: {
    mocha: true,
  },

  rules: {
    'no-console': [0],
  },

};
