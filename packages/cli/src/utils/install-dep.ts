import util from 'util'
import { exec } from 'child_process'
import { FinalOptions, pathResolve, logger, spinner, boxen } from '@ifake/pkg-shared'
import { commands } from '../config/commands'

const promisifyExec = util.promisify(exec)

export async function installDep(options: FinalOptions): Promise<void> {
  const { appName, language, manager } = options

  logger.$info(commands.installDep[language].created)
  const sp = spinner(commands.installDep[language].start)
  sp.start()
  await promisifyExec(`cd ${pathResolve(process.cwd(), appName)} && ${manager} install`)
  sp.stop()
  logger.$info(commands.installDep[language].end)
  console.log(
    boxen(
      [
        `${logger.cyan.raw(`cd /${appName}`)}`,
        `${logger.cyan.raw(`${manager} run start`)} -> start local serve.`,
        `${logger.cyan.raw(`${manager} run build`)} -> build the package`
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
