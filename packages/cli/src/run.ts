import { RawOptions } from '@ifake/pkg-shared'
import { pkgTemplate } from '@ifake/pkg-template'
import { packageTemplate } from '@ifake/pkg-package'
import { transferOptions } from './utils/transfer-options'

export async function run(options: RawOptions) {
  const finalOptions = transferOptions(options)
  await pkgTemplate(finalOptions)
  await packageTemplate(finalOptions)
}
