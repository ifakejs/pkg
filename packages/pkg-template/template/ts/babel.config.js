module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: { node: 'current' }
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime'],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  }
}
