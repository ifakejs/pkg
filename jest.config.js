module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: [
    'cli/__test__/(.*|(\\.|/)(test|spec))\\.tsx?$',
    'pkg-eslint/__test__/(.*|(\\.|/)(test|spec))\\.tsx?$',
    'pkg-package/__test__/(.*|(\\.|/)(test|spec))\\.tsx?$',
    'pkg-shared/__test__/(.*|(\\.|/)(test|spec))\\.tsx?$',
    'pkg-template/__test__/(.*|(\\.|/)(test|spec))\\.tsx?$',
    'pkg-test/__test__/(.*|(\\.|/)(test|spec))\\.tsx?$'
  ]
}
