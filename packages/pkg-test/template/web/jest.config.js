module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  testRegex: '__test__/(.*|(\\.|/)(test|spec))\\.js?$'
}
