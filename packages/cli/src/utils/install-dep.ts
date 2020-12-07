import util from 'util'
import { exec } from 'child_process'
import { FinalOptions, pathResolve, logger, spinner, boxen } from '@ifake/pkg-shared'
import { commands } from '../config/commands'
import { getVersion } from './version'

const promisifyExec = util.promisify(exec)

export async function installDep(options: FinalOptions): Promise<void> {
  const { appName, language, manager } = options
  logger.blueBright(`Pkg CLI v${getVersion()}`)
  logger.white(commands.installDep[language].created(appName))
  const sp = spinner(commands.installDep[language].start)
  sp.start()
  try {
    await promisifyExec(`cd ${pathResolve(process.cwd(), appName)} && ${manager} install`)
  } catch (e) {
    sp.stop()
    logger.$error(e)
    process.exit(0)
  }
  sp.stop()
  logger.white(commands.installDep[language].end(appName))
  logger.white(
    language === 'en'
      ? '👉  Get started with the following commands:'
      : '👉  请执行以下命令运行项目:'
  )
  console.log(
    boxen(
      [
        `$ ${logger.cyan.raw(`cd ${appName}`)}`,
        `$ ${logger.cyan.raw(`${manager} run start`)}`,
        `$ ${logger.cyan.raw(`${manager} run build`)}`
      ].join('\n'),
      {
        padding: 1,
        margin: 1,
        borderColor: 'green',
        // @ts-ignore
        borderStyle: 'double'
      }
    )
  )
}
