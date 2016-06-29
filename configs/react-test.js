'use strict';
/* ESLint Config for test environments that include React / JSX */

module.exports = {
  extends: './react',

  env: {
    jest: true,
  },

  rules: {
    'no-console': [0],
  },

};
