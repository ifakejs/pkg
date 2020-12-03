const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const config = require('./base')
const { buildPath, exposeGlobalName } = require('./utils')

config
  .mode('production')
  .output.path(buildPath)
  .filename('[name].min.js')
  // https://webpack.js.org/configuration/output/#outputlibrary
  .library(exposeGlobalName)
  .libraryTarget('umd')
  .end()

/********* Mini Css Building Polyfill Start ********/
config.module.rule('css').uses.delete('style-loader')

config.module
  .rule('css')
  .use(MiniCssExtractPlugin)
  .loader(MiniCssExtractPlugin.loader)
  .before('css-loader')
  .end()
/********* Mini Css Building Polyfill End ********/

config.optimization
  .minimizer('terser')
  .use(TerserPlugin)
  .end()
  .minimizer('css')
  .use(OptimizeCSSAssetsPlugin, [{ cssProcessorOptions: { safe: true } }])
  .end()

config
  .plugin('clean')
  .use(CleanWebpackPlugin)
  .end()
  .plugin('min-css')
  .use(MiniCssExtractPlugin, [
    {
      filename: '[name].min.css'
    }
  ])

module.exports = config.toConfig()
