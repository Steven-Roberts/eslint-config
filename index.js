'use strict';

module.exports = {
    parserOptions: {ecmaVersion: 7},
    extends: 'eslint:all',
    rules: {
        'no-console': 'off',
        'no-constant-condition': 'warn',
        'no-debugger': 'warn',
        'no-empty': 'warn',
        'no-template-curly-in-string': 'warn',
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
        'require-jsdoc': ['warn', {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true
            }
        }],
        'newline-before-return': 'off',
        'id-length': 'off'
    }
};
