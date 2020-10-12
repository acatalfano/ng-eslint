'use strict';

module.exports = {
    env: {
        browser: false,
        jest: true
    },
    plugins: ['jest', 'jest-formatting'],
    parserOptions: {
        jest: true,
        'jest/globals': true
    },
    extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-formatting/recommended',
        './eslintrc-shared-ts-and-js'
    ],
    rules: {
        'jest/consistent-test-it': 'error',
        'jest/expect-expect': ['error', { assertFunctionNames: ['expect', '*.expect', 'expect*'] }],
        'jest/lowercase-name': ['error', { ignore: ['describe'] }],
        'jest/no-conditional-expect': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/valid-title': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }
        ],
        'import/no-internal-modules': [
            'error',
            {
                allow: ['@angular/**']
            }
        ]
    }
};
