'use strict';
/* ESLint Config for tests in node environments */

module.exports = {
  extends: './node',

  env: {
    mocha: true,
  },

  rules: {
    'no-console': [0],
  },

};
