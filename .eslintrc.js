/* eslint-disable no-magic-numbers */
// TODO: for *.ts and *.js, revisit import/no-internal-import, e.g. see projects/showcase/src/app/app.component.spec.ts (issue w/ importing from '@angular/core/testing')

// TODO: go back and test each rule (on some large code base)

// TODO: consider demoting the more "stylistic" (and PURELY sylistic) rules to "warn" (not "error")

// TODO: go back and remove redundant, unneeded, or useless/obselete rules
module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true
    },
    plugins: [
        // xxxxxxxxxxxxxxxxxxxxx TODO: revisit eslint-comments here https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
        'eslint-comments', // xxx  all about managing the enable/disable comment directives
        'import',
        'prettier',
        'jsdoc',
        'prefer-arrow'
    ],
    overrides: [
        {
            files: ['*.js'],
            parser: 'babel-eslint',
            extends: ['./eslint-configs/shared-ts-and-js-config'],
            rules: {
                'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
                'default-param-last': 'error',
                'dot-notation': ['error', { allowKeywords: false }],
                'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
                'no-invalid-this': 'error',
                'no-loop-func': 'error',
                'no-loss-of-precision': 'error',
                'no-magic-numbers': [
                    'error',
                    { ignore: [0, 1], ignoreArrayIndexes: true, enforceConst: true, detectObjects: true }
                ],
                'no-shadow': ['error', { hoist: 'all', builtinGlobals: true }],
                'no-unused-expressions': [
                    'error',
                    { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }
                ],
                'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrors: 'all' }],
                'no-use-before-define': ['error', { variables: true }],
                'no-useless-constructor': 'error',
                quotes: [
                    'error',
                    'single',
                    {
                        avoidEscape: true,
                        allowTemplateLiterals: false
                    }
                ],
                'require-await': 'error',
                'no-return-await': 'error'
            }
        },
        {
            files: ['*.component.html'],
            extends: ['plugin:@angular-eslint/recommended']
        },
        {
            files: ['*.html'],
            rules: {
                'max-len': 'off'
            }
        },
        {
            files: ['*.ts'],
            plugins: ['@angular-eslint'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 6,
                project: 'tsconfig.json',
                tsconfigRootDir: __dirname,
                sourceType: 'module',
                ecmaFeatures: {
                    modules: true
                }
            },
            extends: [
                './eslint-configs/shared-ts-and-js-config',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:@angular-eslint/recommended',
                'plugin:import/typescript',
                'prettier/@typescript-eslint'
            ],

            rules: {
                // TODO: vvvv this rule is added to conflict with prettier, to test the prettier-eslint integration:
                // 'max-len': ['error', 150],
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                '@typescript-eslint/array-type': ['error', { default: 'array' }],
                '@typescript-eslint/ban-types': [
                    'error',
                    {
                        types: {
                            '{}': {
                                message: 'Avoid using the `{}` type. Use `object` instead',
                                fixWith: 'object'
                            },
                            Object: {
                                message: 'Avoid using the `Object` type. Did you mean `object`?',
                                fixWith: 'object'
                            },
                            Function: {
                                message:
                                    // eslint-disable-next-line max-len
                                    'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
                            },
                            // eslint-disable-next-line id-blacklist
                            Boolean: {
                                message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
                                fixWith: 'boolean'
                            },
                            // eslint-disable-next-line id-blacklist
                            Number: {
                                message: 'Avoid using the `Number` type. Did you mean `number`?',
                                fixWith: 'number'
                            },
                            // eslint-disable-next-line id-blacklist
                            String: {
                                message: 'Avoid using the `String` type. Did you mean `string`?',
                                fixWith: 'string'
                            },
                            Symbol: {
                                message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
                                fixWith: 'symbol'
                            }
                        }
                    }
                ],
                '@typescript-eslint/class-literal-property-style': 'error',
                '@typescript-eslint/consistent-type-definitions': 'error',
                '@typescript-eslint/consistent-type-imports': 'error',
                'default-param-last': 'off',
                '@typescript-eslint/default-param-last': 'error',
                '@typescript-eslint/consistent-type-assertions': [
                    'error',
                    { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }
                ],
                'dot-notation': 'off',
                '@typescript-eslint/dot-notation': 'error',
                '@typescript-eslint/explicit-function-return-type': 'error',
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        accessibility: 'explicit',
                        overrides: {
                            constructors: 'no-public',
                            parameterProperties: 'off'
                        }
                    }
                ],
                '@typescript-eslint/member-ordering': [
                    'error',
                    {
                        default: [
                            'signature',
                            'public-static-field',
                            'public-decorated-field',
                            'public-instance-field',
                            'public-abstract-field',
                            'protected-static-field',
                            'protected-decorated-field',
                            'protected-instance-field',
                            'protected-abstract-field',
                            'private-static-field',
                            'private-decorated-field',
                            'private-instance-field',
                            'private-abstract-field',
                            'constructor',
                            'public-static-method',
                            'public-decorated-method',
                            'public-instance-method',
                            'public-abstract-method',
                            'protected-static-method',
                            'protected-decorated-method',
                            'protected-instance-method',
                            'protected-abstract-method',
                            'private-static-method',
                            'private-decorated-method',
                            'private-instance-method',
                            'private-abstract-method'
                        ]
                    }
                ],
                '@typescript-eslint/naming-convention': 'error',
                '@typescript-eslint/no-base-to-string': 'error',
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
                '@typescript-eslint/no-dynamic-delete': 'error',
                '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
                '@typescript-eslint/no-empty-interface': 'error',
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
                'no-implied-eval': 'off',
                '@typescript-eslint/no-implied-eval': 'error',
                '@typescript-eslint/no-dupe-class-members': 'error',
                'lines-between-class-members': 'off',
                '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
                '@typescript-eslint/method-signature-style': 'error',
                '@typescript-eslint/no-implicit-any-catch': 'error',
                'no-invalid-this': 'off',
                '@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: false }],
                '@typescript-eslint/no-invalid-void-type': 'error',
                'no-loop-func': 'off',
                '@typescript-eslint/no-loop-func': 'error',
                'no-loss-of-precision': 'off',
                '@typescript-eslint/no-loss-of-precision': 'error',
                'no-magic-numbers': 'off',
                '@typescript-eslint/no-magic-numbers': [
                    'error',
                    {
                        ignore: [0, 1],
                        ignoreArrayIndexes: true,
                        enforceConst: true,
                        detectObjects: true,
                        ignoreEnums: true,
                        ignoreReadonlyClassProperties: true
                    }
                ],
                '@typescript-eslint/promise-function-async': 'error',
                '@typescript-eslint/strict-boolean-expressions': [
                    'error',
                    {
                        allowString: false,
                        allowNumber: false,
                        allowNullableObject: false,
                        allowNullableBoolean: false,
                        allowNullableString: false,
                        allowNullableNumber: false,
                        allowAny: false
                    }
                ],
                '@typescript-eslint/no-namespace': 'error',
                '@typescript-eslint/no-non-null-assertion': 'error',
                '@typescript-eslint/no-redeclare': 'error',
                '@typescript-eslint/no-require-imports': 'error',
                '@typescript-eslint/no-shadow': [
                    'error',
                    {
                        hoist: 'all',
                        builtinGlobals: true,
                        ignoreTypeValueShadow: false,
                        ignoreFunctionTypeParameterNameValueShadow: false
                    }
                ],
                'no-throw-literal': 'off',
                '@typescript-eslint/no-throw-literal': 'error',
                '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
                '@typescript-eslint/no-unnecessary-condition': 'error',
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': [
                    'error',
                    { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }
                ],
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrors: 'all' }],
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    {
                        variables: true,
                        typedefs: false,
                        ignoreTypeReferences: false
                    }
                ],
                'no-useless-constructor': 'off',
                '@typescript-eslint/no-useless-constructor': 'error',
                '@typescript-eslint/no-var-requires': 'off',
                quotes: 'off',
                '@typescript-eslint/quotes': [
                    'error',
                    'single',
                    {
                        avoidEscape: true,
                        allowTemplateLiterals: false
                    }
                ],
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/prefer-function-type': 'error',
                '@typescript-eslint/prefer-includes': 'error',
                '@typescript-eslint/prefer-literal-enum-member': 'error',
                '@typescript-eslint/prefer-namespace-keyword': 'error',
                '@typescript-eslint/prefer-nullish-coalescing': 'error',
                '@typescript-eslint/prefer-optional-chain': 'error',
                '@typescript-eslint/prefer-readonly': 'error',
                '@typescript-eslint/prefer-readonly-parameter-types': ['error', { checkParameterProperties: true }],
                '@typescript-eslint/prefer-reduce-type-parameter': 'error',
                '@typescript-eslint/prefer-regexp-exec': 'error',
                '@typescript-eslint/prefer-string-starts-ends-with': 'error',
                '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
                '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
                '@typescript-eslint/restrict-template-expressions': [
                    'error',
                    { allowNumber: true, allowBoolean: true, allowAny: false, allowNullish: false }
                ],
                '@typescript-eslint/return-await': 'error',
                '@typescript-eslint/switch-exhaustiveness-check': 'error',
                '@typescript-eslint/triple-slash-reference': [
                    'error',
                    {
                        path: 'always',
                        types: 'prefer-import',
                        lib: 'always'
                    }
                ],
                '@typescript-eslint/unified-signatures': 'error'
            },
            settings: {
                jsdoc: {
                    mode: 'typescript'
                }
            }
        },
        {
            files: ['*.spec.ts', '*-spec.ts'],
            excludedFiles: ['**/e2e/**/*.spec.ts', '**/e2e/**/*-spec.ts'],
            env: {
                browser: false,
                jest: true
            },
            plugins: ['jest', 'jest-formatting'],
            parserOptions: {
                jest: true,
                'jest/globals': true
            },
            extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:jest-formatting/recommended'],
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
                ]
            }
        },
        {
            files: ['**/e2e/**/*.ts', '**/e2e/**/*.js'],
            env: {
                jasmine: true
            },
            plugins: ['protractor'],
            extends: ['plugin:protractor/recommended']
        }
    ]
};
/* eslint-enable no-magic-numbers */
