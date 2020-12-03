const path = require('path')

const sourcePath = path.resolve(__dirname, '..', 'src')
const buildPath = path.resolve(__dirname, '..', 'dist')
const testPath = path.resolve(__dirname, '..', 'test')
const resolve = p => path.resolve(__dirname, '..', p)
const exposeGlobalName = 'IFakeTP'
const entryName = 'ifake-tree-path'
const localServerPort = 7788

module.exports = {
  sourcePath,
  buildPath,
  testPath,
  resolve,
  exposeGlobalName,
  entryName,
  localServerPort
}
