'use strict';

// TODO: Finish this
module.exports = (context) => {

  return {
    Identifier(node) {
      if (node.name === 'require') {
        context.report({
          node,
          message: '"require" not allowed: Use ES6 import/export syntax instead.',
          // fix(fixer) {
          //   // const something = require('something');
          //   // import something from 'something';
          //   return fixer.replaceText(node, '...');
          // },
        });
      }
    },
  };

};

module.exports.schema = [
  // JSON Schema for rule options goes here
];
