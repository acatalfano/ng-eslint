'use strict';

module.exports = {
    plugins: ['import'],
    extends: ['plugin:import/recommended'],
    rules: {
        'import/exports-last': 'error',
        'import/extensions': 'error',
        'import/first': 'error',
        'import/max-dependencies': 'error',
        'import/newline-after-import': 'error',
        'import/no-absolute-path': 'error',
        'import/no-cycle': [
            'error',
            {
                // eslint-disable-next-line no-magic-numbers
                maxDepth: 10,
                ignoreExternal: true
            }
        ],
        'import/no-default-export': 'error',
        'import/no-deprecated': 'error',
        'import/no-dynamic-require': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-internal-modules': ['error', { allow: ['zone.js/dist/zone'] }],
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-nodejs-modules': 'error',
        'import/no-relative-parent-imports': 'error',
        'import/no-self-import': 'error',
        'import/no-unassigned-import': ['error', { allow: ['jest-preset-angular', 'zone.js/dist/zone'] }],
        'import/no-unused-modules': [
            'error',
            {
                missingExports: true,
                unusedExports: true,
                ignoreExports: ['**/*eslintrc*', '**/*.js', '**/setup-jest.ts']
            }
        ],
        'import/no-useless-path-segments': [
            'error',
            {
                noUselessIndex: true
            }
        ],
        'import/no-webpack-loader-syntax': 'error',

        // TODO: vvv more options...?
        'import/order': [
            'error',
            {
                // TODO: make prettier leave this alone... (line break the rule option b/c it reflects a semantic meaning...)
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
                pathGroups: [
                    {
                        pattern: '@angular/**',
                        group: 'external',
                        position: 'before'
                    },
                    {
                        pattern: 'rxjs/**',
                        group: 'external',
                        position: 'before'
                    }
                ],
                pathGroupsExcludedImportTypes: [
                    /* TODO: */
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                } // TODO: then do the settings for "import/x"
                // TODO: and next order of business is why is .pnpm/@types/... causing errors
                // TODO: also need to update to NG 10
            }
        ],
        'import/unambiguous': 'error'
    }
};
