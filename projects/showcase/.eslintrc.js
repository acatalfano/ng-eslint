module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: `${__dirname}/tsconfig.app.json`
            },
            rules: {
                // TODO: this rule is supposed to cause an issue to asses the prettier/eslint setup
                // 'max-len': [2, 30],
                '@angular-eslint/directive-selector': [
                    'error',
                    { type: 'attribute', prefix: 'app', style: 'camelCase' }
                ],
                '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }]
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
