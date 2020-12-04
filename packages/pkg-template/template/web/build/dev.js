const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./base')
const { buildPath, exposeGlobalName, localServerPort, resolve } = require('./utils')

config
  .mode('development')
  .output.path(buildPath)
  .filename('[name].js')
  .library(exposeGlobalName)
  .libraryTarget('umd')
  .end()
  .devServer.contentBase(buildPath)
  .port(localServerPort)
  .hot(true)
  .open(true)
  .inline(true)
  .noInfo(true)
  .disableHostCheck(true)
  .end()

config
  .plugin('html-plugin')
  .use(HtmlWebpackPlugin, [
    {
      template: resolve('public/index.html'),
      inject: false
    }
  ])
  .end()

module.exports = config.toConfig()
