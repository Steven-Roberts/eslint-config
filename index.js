'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 7
    },
    // Enable all rules by default
    extends: 'eslint:all',
    rules: {

        /* Disabled Rules
         * These rules are not important
         */
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
        'object-curly-newline': ['error', {
            multiline: true,
            minProperties: 1
        }],
        'no-magic-numbers': ['error', {
            ignore: [0, 1]
        }],
        'dot-location': ['error', 'property'],
        'quote-props': ['error', 'as-needed'],
        'padded-blocks': ['error', {
            blocks: 'never',
            classes: 'always',
            switches: 'never'
        }],
        quotes: ['error', 'single'],
        'one-var': ['error', 'never'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'always',
            asyncArrow: 'never'
        }],
        'require-jsdoc': ['error', {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true
            }
        }],
        'valid-jsdoc': ['error', {
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
        }]
    }
};
