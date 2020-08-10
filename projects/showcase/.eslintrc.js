// const { rules } = require("../../.eslintrc");
// TODO: ^^^ is this needed for anything.....?

module.exports = {
    // TODO: extends is not necessary b/c cascading config hierarchies automatically work like this...
    // extends: '../../.eslintrc.js',
    /* parserOptions: {
        // project: './projects/test-app/tsconfig.app.json'
        tsconfigRootDir: __dirname,
        project: `${__dirname}/tsconfig.app.json`
        // TODO: something with ./projects/test-app/tsconfig.spec.json
    },
    rules: {
        '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
        '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }]
    }, */
    overrides: [
        {
            files: ['*.ts'], // , '*.html'],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: `${__dirname}/tsconfig.app.json`
            },
            rules: {
                '@angular-eslint/directive-selector': [
                    'error',
                    { type: 'attribute', prefix: 'app', style: 'camelCase' }
                ],
                '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }]
            }
        },
        {
            files: ['*.spec.ts'],
            env: {
                browser: false
            }, // TODO: ^^^ maybe bring that back into root .eslintrc instead?
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: `${__dirname}/tsconfig.spec.json`
            }
        } /* ,
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/recommended']
        } */
    ]
};
