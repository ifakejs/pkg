import { execSync } from 'child_process'
import { findExistSync, logger } from '@ifake/pkg-shared'
import { ask } from '../ask'

export async function validateEntry(entry: string) {
  if (findExistSync(process.cwd(), entry)) {
    const res = await ask([
      {
        type: 'list',
        name: 'checkExist',
        message: 'The directory already exists, are you sure you want to overwrite it?',
        choices: ['Yes', 'No']
      }
    ])

    if (res.checkExist === 'No') {
      logger.$info('Exiting the execution environment.')
      process.exit(0)
    }
    try {
      execSync(`rm -rf ./${entry}`)
      logger.$info(`The ${entry} folder was successfully deleted`)
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
