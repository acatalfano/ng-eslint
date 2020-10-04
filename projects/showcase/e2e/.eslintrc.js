module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: `${__dirname}/tsconfig.json`
            }
        }
    ]
};
