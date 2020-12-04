import { FinalOptions, fsExtra, pathResolve } from '@ifake/pkg-shared'

export async function pkgTemplate(options: FinalOptions) {
  const { appName, platform } = options
  await fsExtra.copySync(
    pathResolve(__dirname, `../template/${platform}`),
    pathResolve(process.cwd(), appName)
  )
}
