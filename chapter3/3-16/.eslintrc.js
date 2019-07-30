module.exports = {
    root: true,
    // parserOptions: {
    //     "ecmaVersion": 6,
    //     "ecmaFeatures": {
    //         "vue": true
    //     },
    //     sourceType: 'module'
    // },
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true,
      }
    },
    // add your custom rules here
    'rules': {
      // allow debugger during development
      "require-jsdoc": ["error", {
          "require": {
              "FunctionDeclaration": true,
              "MethodDefinition": false,
              "ClassDeclaration": false,
              "ArrowFunctionExpression": false
          }
      }]
    }
  }