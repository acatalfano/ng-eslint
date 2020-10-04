// const { rules } = require("../../.eslintrc");
// TODO: ^^^ is this needed for anything.....?

// module.exports = {
//     // TODO: extends is not necessary b/c cascading config hierarchies automatically work like this...
//     // TODO: but now it is b/c of .eslintignore
//     // extends: '../../.eslintrc.js',
//     /* parserOptions: {
//         // project: './projects/test-app/tsconfig.app.json'
//         tsconfigRootDir: __dirname,
//         project: `${__dirname}/tsconfig.app.json`
//         // TODO: something with ./projects/test-app/tsconfig.spec.json
//     },
//     rules: {
//         '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
//         '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }]
//     }, */
//     overrides: [
//         {
//             files: ['*.ts'],
//             // files: ['*.x'],
//             parserOptions: {
//                 tsconfigRootDir: __dirname,
//                 project: `${__dirname}/tsconfig.app.json`
//                 // sourceType: module,
//                 // ecmaVersion: 6,
//                 // ecmaFeatures: {
//                 //     modules: true
//                 // }
//             },
//             rules: {
//                 '@angular-eslint/directive-selector': [
//                     'error',
//                     { type: 'attribute', prefix: 'app', style: 'camelCase' }
//                 ],
//                 '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }]
//             }
//         },
//         {
//             // files: ['*.spec.ts', '*-spec.ts'],
//             files: ['*.x'],
//             env: {
//                 browser: false,
//                 jest: true
//             }, // TODO: ^^^ maybe bring that back into root .eslintrc instead?
//             parserOptions: {
//                 tsconfigRootDir: __dirname,
//                 project: `${__dirname}/tsconfig.spec.json`,
//                 sourceType: module,
//                 ecmaVersion: 6,
//                 ecmaFeatures: {
//                     modules: true
//                 }
//             }
//         } /* ,
//         {
//             files: ['*.html'],
//             extends: ['plugin:@angular-eslint/recommended']
//         } */
//     ]
// };

module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: `${__dirname}/tsconfig.lib.json`
            },
            rules: {
                '@angular-eslint/directive-selector': [
                    'error',
                    { type: 'attribute', prefix: 'lib', style: 'camelCase' }
                ],
                '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'lib', style: 'kebab-case' }]
            }
        },
        {
            files: ['*.spec.ts', '*-spec.ts'],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: `${__dirname}/tsconfig.spec.json`
            }
        }
    ]
};
