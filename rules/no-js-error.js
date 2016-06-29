'use strict';

module.exports = (context) => {

  return {
    Identifier(node) {
      if (node.name === 'Error') {
        context.report({
          node,
          message: 'Class: "Error" not allowed.',
          fix(fixer) {
            return fixer.replaceText(node, 'ApiError');
          },
        });
      }
    },
  };

};

module.exports.schema = [
  // JSON Schema for rule options goes here
];
