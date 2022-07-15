const esModules = [].join('|');

module.exports = {
    bail: 1,
    clearMocks: false,
    collectCoverage: false,
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    roots: ['projects/lib/src', 'projects/showcase/src'],
    setupFilesAfterEnv: ['./setup-jest.ts'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment'
    ],
    testMatch: ['**/?(*.)+(spec).[tj]s?(x)']
};
