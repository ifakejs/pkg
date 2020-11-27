module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'no-unused-vars': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0
  }
}
