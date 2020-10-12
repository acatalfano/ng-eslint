// TODO: for *.ts and *.js, revisit import/no-internal-import, e.g. see projects/showcase/src/app/app.component.spec.ts (issue w/ importing from '@angular/core/testing')

// TODO: go back and test each rule (on some large code base)

// TODO: consider demoting the more "stylistic" (and PURELY sylistic) rules to "warn" (not "error")

// TODO: go over angular style guide and make sure everything feasible is included in eslint config

// TODO: eslint-plugin-eslint-plugin: https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin

// TODO: consider putout: https://github.com/coderaiser/putout/tree/master/packages/eslint-plugin-putout
//    https://github.com/coderaiser/putout

// TODO: awesome-eslint (look through ALL of it!): https://github.com/dustinspecker/awesome-eslint

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
            /*
            TODO:
            .eslintrc.js#overrides[0] » ./eslint-configs/eslintrc-js: 	Configuration for rule "import/no-unused-modules" is invalid: 	Value {"missingExports":false} should NOT be valid.

            also "invalid prettier config detected" <---- this is due to my comment left in the "package.json" file
            */
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
                //jasmine: true
                jest: true
            },
            plugins: ['protractor'],
            extends: ['plugin:protractor/recommended']
        }
    ]
};
