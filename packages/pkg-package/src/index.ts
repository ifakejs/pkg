import * as fs from 'fs'
import handlebars from 'handlebars'
import { pathResolve, fsExtra, PkgPluginEntryOptions } from '@ifake/pkg-shared'

export function packageTemplate({ data, cwd }: PkgPluginEntryOptions) {
  const { platform, appName, npmMirror } = data
  const pkgFile = fs
    .readFileSync(pathResolve(__dirname, `../template/${platform}/package.json.hms`))
    .toString('utf-8')
  const result = handlebars.compile(pkgFile)(data)
  fs.writeFileSync(pathResolve(cwd, `./${appName}/package.json`), result)

  if (npmMirror) {
    fsExtra.copySync(
      pathResolve(__dirname, '../template/.npmrc'),
      pathResolve(cwd, `./${appName}/.npmrc`)
    )
  }
}
