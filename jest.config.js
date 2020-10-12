const esModules = [].join('|');

module.exports = {
    bail: 1,
    clearMocks: false,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],

    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.spec.json',
            isolatedModules: true,
            stringifyContentPathRegex: '\\.html$',
            astTransformers: ['jest-preset-angular/InlineHtmlStripStylesTransformer.js']
        }
    },
    moduleFileExtensions: ['ts', 'html', 'json', 'js'],
    modulePathIgnorePatterns: ['<rootDir>/node_modules/.*'],
    preset: 'jest-preset-angular',
    roots: ['projects/lib/src', 'projects/test-app/src'],
    setupFilesAfterEnv: ['./setup-jest.ts'],
    snapshotSerializers: [
        'jest-preset-angular/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js'
    ],
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(spec).[tj]s?(x)'],
    testPathIgnorePatterns: ['<rootDir>/node_modules'],
    transform: {
        [`(${esModules}).+\\.ts$`]: 'babel-jest',
        '^.+\\.(ts|html)$': 'ts-jest'
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`]
};
