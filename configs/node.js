'use strict';
/* ESLint Config for node environments */

/* CONFIG */
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  /* EXTENDS */
  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: 'eslint:recommended',

  globals: { },

  /* ENVIRONMENTS */
  env: {
    node: true,
    es6: true,
  },

  /* LANGUAGE FEATURES */
  // http://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    // ES6
    ecmaVersion: 6,
    sourceType: 'script',
    ecmaFeatures: { },
  },

  /* RULES */
  // http://eslint.org/docs/rules
  rules: {
    'no-js-error': [2],
    'comma-dangle': [1, 'always-multiline'],
    'no-cond-assign': [2, 'except-parens'],
    'no-console': [1],
    'no-constant-condition': [2],
    'no-control-regex': [2],
    'no-debugger': [2],
    'no-dupe-args': [2],
    'no-dupe-keys': [2],
    'no-duplicate-case': [2],
    'no-empty-character-class': [2],
    'no-empty': [2],
    'no-ex-assign': [2],
    'no-extra-boolean-cast': [2],
    'no-extra-parens': [0],
    'no-extra-semi': [2],
    'no-func-assign': [2],
    'no-inner-declarations': [2],
    'no-invalid-regexp': [2],
    'no-irregular-whitespace': [2],
    'no-negated-in-lhs': [2],
    'no-obj-calls': [2],
    'no-regex-spaces': [2],
    'no-sparse-arrays': [2],
    'no-unreachable': [2],
    'use-isnan': [2],
    'valid-jsdoc': [2],
    'valid-typeof': [2],
    'no-unexpected-multiline': [2],
    'accessor-pairs': [1],
    complexity: [1, 10],
    'consistent-return': [1],
    curly: [2, 'multi-line'],
    'dot-notation': [2],
    'dot-location': [2, 'property'],
    eqeqeq: [2, 'smart'],
    'guard-for-in': [0],
    'no-alert': [2],
    'no-caller': [2],
    'no-div-regex': [2],
    'no-else-return': [2],
    'no-eq-null': [2],
    'no-eval': [2],
    'no-extend-native': [1],
    'no-extra-bind': [2],
    'no-fallthrough': [2],
    'no-floating-decimal': [2],
    'no-implicit-coercion': [0],
    'no-implied-eval': [2],
    'no-invalid-this': [0],
    'no-iterator': [2],
    'no-labels': [2],
    'no-lone-blocks': [2],
    'no-loop-func': [2],
    'no-multi-spaces': [0],
    'no-multi-str': [2],
    'no-native-reassign': [2],
    'no-new-func': [2],
    'no-new-wrappers': [2],
    'no-new': [2],
    'no-octal-escape': [2],
    'no-octal': [2],
    'no-param-reassign': [0],
    'no-process-env': [1],
    'no-proto': [2],
    'no-redeclare': [1],
    'no-return-assign': [1],
    'no-script-url': [1],
    'no-self-compare': [2],
    'no-sequences': [0],
    'no-throw-literal': [2],
    'no-unused-expressions': [2],
    'no-useless-call': [2],
    'no-useless-concat': [2],
    'no-void': [2],
    'no-warning-comments': [0],
    'no-with': [2],
    radix: [1],
    'vars-on-top': [0],
    'wrap-iife': [2, 'inside'],
    yoda: [2, 'never'],
    strict: [2, 'global'],
    'init-declarations': [0],
    'no-catch-shadow': [0],
    'no-delete-var': [2],
    'no-label-var': [2],
    'no-shadow-restricted-names': [2],
    'no-shadow': [0],
    'no-undef-init': [1],
    'no-undef': [2],
    'no-undefined': [1],
    'no-unused-vars': [1, { args: 'none' }],
    'no-use-before-define': [2, 'nofunc'],
    'callback-return': [2, ['callback', 'cb', 'next', 'done']],
    'handle-callback-err': [2, 'err'],
    'no-mixed-requires': [1, true],
    'no-new-require': [2],
    'no-path-concat': [2],
    'no-process-exit': [2],
    'no-restricted-modules': [0],
    'no-sync': [2],
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs'],
    camelcase: [2, { properties: 'always' }],
    'comma-spacing': [2, {
      before: false,
      after: true,
    }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'eol-last': [2],
    'func-names': [1],
    'func-style': [0],
    'id-length': [1, {
      min: 2,
      max: 50,
      properties: 'never',
      exceptions: ['i', 'id', '_', 'cb'],
    }],
    'id-match': [0],
    indent: [2, 2, {
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3,
      },
    }],
    'key-spacing': [0],
    'lines-around-comment': [0, {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: false,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
    }],
    'linebreak-style': [2, 'unix'],
    'max-nested-callbacks': [2, 5],
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: true,
      capIsNewExceptions: [],
    }],
    'new-parens': [2],
    'no-array-constructor': [2],
    'no-continue': [2],
    'no-lonely-if': [2],
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-multiple-empty-lines': [1, { max: 3 }],
    'no-new-object': [2],
    'no-spaced-func': [2],
    'no-ternary': [0],
    'no-trailing-spaces': [1, { skipBlankLines: true }],
    'no-underscore-dangle': [2],
    'no-unneeded-ternary': [2],
    'object-curly-spacing': [1, 'always'],
    'one-var': [0],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2],
    'padded-blocks': [0],
    'quote-props': [2, 'as-needed', {
      keywords: false,
    }],
    quotes: [2, 'single'],
    'semi-spacing': [2, {
      before: false,
      after: true,
    }],
    semi: [2, 'always'],
    'sort-vars': [0],
    'keyword-spacing': [2, {
      before: true,
      after: true,
      overrides: {},
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': [2, { int32Hint: true }],
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
    }],
    'wrap-regex': [0],
    'arrow-parens': [0, 'as-needed'],
    'arrow-spacing': [2, {
      before: true,
      after: true,
    }],
    'constructor-super': [2],
    'generator-star-spacing': [2, {
      before: true,
      after: false,
    }],
    'no-class-assign': [2],
    'no-const-assign': [2],
    'no-dupe-class-members': [2],
    'no-this-before-super': [2],
    'no-var': [2],
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': [2],
    'prefer-const': [0],
    'prefer-spread': [2],
    'prefer-reflect': [0],
    'prefer-template': [2],
    'require-yield': [0],
    'max-depth': [2, 4],
    'max-len': [2, 120, 4, {
      ignoreComments: false,
      ignoreUrls: true,
    }],
    'max-params': [2, 4],
    'max-statements': [1, 10],
    'no-bitwise': [0],
    'no-plusplus': [0],
  },
};