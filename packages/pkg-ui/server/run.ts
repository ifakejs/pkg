import { RawOptions, PkgPluginEntryOptions, installDep, transferOptions } from '@ifake/pkg-shared'
import { pkgTemplate } from '@ifake/pkg-template'
import { eslintTemplate } from '@ifake/pkg-eslint'
import { packageTemplate } from '@ifake/pkg-package'
import { testTemplate } from '@ifake/pkg-test'

export async function run(options: RawOptions, runtimeCwd?: string) {
  const data = transferOptions(options)
  const cwd = runtimeCwd || process.cwd()
  const pkgOptions: PkgPluginEntryOptions = {
    data,
    cwd
  }
  await pkgTemplate(pkgOptions)
  await eslintTemplate(pkgOptions)
  await testTemplate(pkgOptions)
  await packageTemplate(pkgOptions)
  await installDep(pkgOptions)
}
