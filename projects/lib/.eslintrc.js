module.exports = {
    extends: '../../.eslintrc.js',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: `${__dirname}/tsconfig.lib.json`
        // TODO: a thing for ./projects/lib/tsconfig.spec.json
    },
    rules: {
        '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'ngx', style: 'camelCase' }],
        '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'ngx', style: 'kebab-case' }]
    },
    overrides: [
        {
            files: ['*.spec.ts'],
            env: {
                browser: false
            },
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: `${__dirname}/tsconfig.spec.json`
            }
        }
    ]
};
