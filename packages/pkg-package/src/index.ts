import * as fs from 'fs'
import handlebars from 'handlebars'
import { FinalOptions, pathResolve, fsExtra } from '@ifake/pkg-shared'

export function packageTemplate(options: FinalOptions) {
  const { platform, appName, npmMirror } = options
  const pkgFile = fs
    .readFileSync(pathResolve(__dirname, `../template/${platform}/package.json.hms`))
    .toString('utf-8')
  const result = handlebars.compile(pkgFile)(options)
  fs.writeFileSync(pathResolve(process.cwd(), `./${appName}/package.json`), result)

  if (npmMirror) {
    fsExtra.copySync(
      pathResolve(__dirname, '../template/.npmrc'),
      pathResolve(process.cwd(), `./${appName}/.npmrc`)
    )
  }
}
