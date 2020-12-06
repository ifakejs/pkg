module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: ['/cli/__test__/(.*|(\\.|/)(test|spec))\\.tsx?$']
}
