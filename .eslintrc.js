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
            extends: ['./eslint-configs/eslintrc-js']
        },
        {
            files: ['*.component.html'],
            extends: ['plugin:@angular-eslint/recommended']
        },
        {
            files: ['*.html'],
            rules: {
                'max-len': 'off'

                // TODO: ^^^
            }
        },
        {
            files: ['*.ts'],
            excludedFiles: ['*.spec.ts', '*-spec.ts'],
            extends: ['./eslint-configs/eslintrc-ts']
        },
        {
            files: ['*.spec.ts', '*-spec.ts'],
            excludedFiles: ['**/e2e/**/*.spec.ts', '**/e2e/**/*-spec.ts'],
            extends: ['./eslint-configs/eslintrc-spec-ts']
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
