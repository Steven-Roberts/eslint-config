'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 8
    },
    // Enable all rules by default
    extends: 'eslint:all',
    rules: {

        /* Disabled Rules
         * These rules are not important
         */
        'array-element-newline': 'off',
        'id-length': 'off',
        'linebreak-style': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'no-ternary': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',

        /* Warnings
         * The rules are for code that probably should be fixed, but is still
         * acceptable in a production setting
         */
        'no-warning-comments': 'warn',

        /* Modified Errors
         * These rules are tweaks of the default ESLint behavior
         */
        'array-bracket-newline': [
            'error',
            {
                multiline: true
            }
        ],
        'dot-location': ['error', 'property'],
        'function-paren-newline': ['error', 'consistent'],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 1,
                    consistent: true
                },
                ObjectPattern: {
                    multiline: true,
                    consistent: true
                }
            }
        ],
        'no-magic-numbers': [
            'error',
            {
                ignore: [0, 1]
            }
        ],
        'quote-props': ['error', 'as-needed'],
        'padded-blocks': [
            'error',
            {
                blocks: 'never',
                classes: 'always',
                switches: 'never'
            }
        ],
        quotes: ['error', 'single'],
        'one-var': ['error', 'never'],
        'space-before-function-paren': ['error', 'always'],
        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true
                }
            }
        ],
        'valid-jsdoc': [
            'error',
            {
                prefer: {
                    arg: 'param',
                    argument: 'param',
                    constructor: 'class',
                    return: 'returns',
                    virtual: 'abstract'
                },
                preferType: {
                    Boolean: 'boolean',
                    Null: 'null',
                    Undefined: 'undefined',
                    Number: 'number',
                    String: 'string',
                    Symbol: 'symbol',
                    Object: 'object'
                },
                requireReturn: false,
                requireReturnType: true,
                requireParamDescription: true,
                requireReturnDescription: true
            }
        ]
    }
};
