import { RawOptions } from '@ifake/pkg-shared'
import { pkgTemplate } from '@ifake/pkg-template'
import { eslintTemplate } from '@ifake/pkg-eslint'
import { packageTemplate } from '@ifake/pkg-package'
import { testTemplate } from '@ifake/pkg-test'
import { transferOptions } from './utils/transfer-options'
import { installDep } from './utils/install-dep'

export async function run(options: RawOptions) {
  const finalOptions = transferOptions(options)
  await pkgTemplate(finalOptions)
  await eslintTemplate(finalOptions)
  await testTemplate(finalOptions)
  await packageTemplate(finalOptions)
  await installDep(finalOptions)
}
