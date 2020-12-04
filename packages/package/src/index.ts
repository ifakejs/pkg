import * as fs from 'fs'
import handlebars from 'handlebars'
import { FinalOptions, resolve } from '@ifake/pkg-shared'

export function packageTemplate(options: FinalOptions) {
  const { platform, appName } = options
  const pkgFile = fs
    .readFileSync(resolve(__dirname, `../template/${platform}/package.json.hms`))
    .toString('utf-8')
  const result = handlebars.compile(pkgFile)(options)
  fs.writeFileSync(resolve(process.cwd(), `./${appName}/package.json`), result)
}
