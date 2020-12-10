import { fsExtra, pathResolve, PkgPluginEntryOptions } from '@ifake/pkg-shared'

export async function pkgTemplate({ data, cwd }: PkgPluginEntryOptions) {
  const { appName, platform } = data
  await fsExtra.copySync(
    pathResolve(__dirname, `../template/${platform}`),
    pathResolve(cwd, appName)
  )
}
