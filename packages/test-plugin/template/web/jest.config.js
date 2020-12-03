module.exports = {
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  testEnvironment: 'node',
  testRegex: '__test__/(.*|(\\.|/)(test|spec))\\.js?$'
}
