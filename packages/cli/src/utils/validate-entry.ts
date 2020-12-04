import { execSync } from 'child_process'
import { findExistSync, logger, fsExtra, pathResolve, TranslateLanguage } from '@ifake/pkg-shared'
import { ask } from '../ask'
import { commands } from '../config/commands'

export interface ValidateEntry {
  appName: string
  language: TranslateLanguage
}

export async function validateEntry({ appName, language }: ValidateEntry) {
  if (findExistSync(process.cwd(), appName)) {
    const res = await ask([
      {
        type: 'list',
        name: 'checkExist',
        message: commands.checkExist[language].message,
        choices: ['Yes', 'No']
      }
    ])

    if (res.checkExist === 'No') {
      logger.$info(commands.checkExist[language].exitMessage)
      process.exit(0)
    }
    try {
      execSync(`rm -rf ./${appName}`)
      logger.$info(commands.validateExist[language].exist(appName))
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
  await fsExtra.ensureDir(pathResolve(process.cwd(), appName))
  logger.$info(commands.validateExist[language].newly(appName))
}
