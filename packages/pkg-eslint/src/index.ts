import { FinalOptions, fsExtra, resolve } from '@ifake/pkg-shared'

export async function eslintTemplate(options: FinalOptions) {
  const { appName, platform } = options
  await fsExtra.copySync(
    resolve(__dirname, `../template/${platform}`),
    resolve(process.cwd(), appName)
  )
}
