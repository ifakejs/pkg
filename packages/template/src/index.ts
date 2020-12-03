import { CMDOptions, fsExtra, resolve } from '@ifake/pkg-shared'

export async function pkgTemplate(options: CMDOptions) {
  const { appName, platform } = options
  await fsExtra.copySync(
    resolve(__dirname, `../template/${platform}`),
    resolve(process.cwd(), appName)
  )
}
