import util from 'util'
import { exec } from 'child_process'
import { FinalOptions, pathResolve, logger, spinner } from '@ifake/pkg-shared'
import { commands } from '../config/commands'

const promisifyExec = util.promisify(exec)

export async function installDep(options: FinalOptions): Promise<void> {
  const { appName, language, manager } = options

  logger.cyan(`cd /${appName}`)
  const sp = spinner(commands.installDep[language].start)
  sp.start()
  logger.$info('\n')
  await promisifyExec(`cd ${pathResolve(process.cwd(), appName)} && ${manager} install`)
  sp.stop()
  logger.$info(`${commands.installDep[language].tips}\n`)
  logger.cyan(`${manager} run start`)
  logger.cyan(`${manager} run build`)
}
