const Config = require('webpack-chain')
const { testPath, sourcePath, entryName, resolve } = require('./utils')

const config = new Config()

config.entry(entryName).add(resolve('src/index.ts')).end()

config.module
  .rule('compile')
  .test(/\.([tj])s$/)
  .include.add(sourcePath)
  .add(testPath)
  .end()
  .use('babel')
  .loader('babel-loader')
  .options({
    presets: [['@babel/preset-env', { modules: false }]]
  })
  .end()
  .use('ts-loader')
  .loader('ts-loader')
  .end()

config.module
  .rule('css')
  .test(/\.s[ac]ss$/)
  .use('style-loader')
  .loader('style-loader')
  .end()
  .use('css-loader')
  .loader('css-loader')
  .end()
  .use('sass-loader')
  .loader('sass-loader')
  .end()

config.module
  .rule('font')
  .test(/\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/)
  .use('url-loader')
  .loader('url-loader')
  .end()

config.resolve.extensions.add('.ts').add('.js').end()

module.exports = config
