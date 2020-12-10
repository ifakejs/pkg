import { execSync } from 'child_process'
import {
  findExistSync,
  logger,
  fsExtra,
  pathResolve,
  TranslateLanguage,
  spinner,
  generateCommands
} from '@ifake/pkg-shared'
import { ask } from '../ask'

export interface ValidateEntry {
  appName: string
  language: TranslateLanguage
}

export async function validateEntry({ appName, language }: ValidateEntry) {
  const commands = generateCommands({ appName, cwd: process.cwd() })
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
      logger.white(commands.checkExist[language].exitMessage)
      process.exit(0)
    }
    const sp = spinner(commands.validateExist[language].beforeDel).start()
    try {
      execSync(`rm -rf ./${appName}`)
      sp.stop()
      logger.white(commands.validateExist[language].exist)
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
  await fsExtra.ensureDir(pathResolve(process.cwd(), appName))
  logger.white(commands.validateExist[language].newly)
}
