import { CMDOptions } from '@ifake/pkg-shared'
import { pkgTemplate } from '@ifake/pkg-template'

export async function run(options: CMDOptions) {
  await pkgTemplate(options)
}
