'use strict';

module.exports = {
    parserOptions: {ecmaVersion: 7},
    extends: 'eslint:all',
    rules: {
        'no-console': 'off',
        'no-constant-condition': 'warn',
        'no-debugger': 'warn',
        'no-empty': 'warn',
        'no-unused-vars': 'warn',
        'no-unreachable': 'warn',
        'dot-location': ['error', 'property'],
        'no-alert': 'warn',
        'no-warning-comments': 'warn',
        'linebreak-style': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'padded-blocks': ['error', {
            blocks: 'never',
            classes: 'always',
            switches: 'never'
        }],
        'quotes': ['error', 'single'],
        'multiline-ternary': 'off',
        'no-ternary': 'off',
        'one-var': ['error', {
            initialized: 'never',
            uninitialized: 'always'
        }],
        'space-before-function-paren': ['error', 'never'],
        'func-style': 'off',
        'max-params': 'off',
        'no-sync': 'warn',
        'require-jsdoc': ['warn', {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true
            }
        }],
        'valid-jsdoc': ['warn', {
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
        }],
        'newline-before-return': 'off',
        'id-length': 'off'
    }
};
