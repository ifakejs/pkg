const originPlugins = []

if (process.env.NODE_ENV === 'production') {
  originPlugins.push([
    'transform-remove-console',
    {
      exclude: ['error', 'warn']
    }
  ])
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        useBuiltIns: 'usage'
      }
    ]
  ],
  plugins: originPlugins
}
