import util from 'util'
import { exec } from 'child_process'
import spinner from 'ora'
import boxen from 'boxen'
import { logger } from './logger'
import { pathResolve } from './pathResolve'
import { PkgPluginEntryOptions } from './types'
import { generateCommands } from './generateCommands'
import { getVersion } from './version'

const promisifyExec = util.promisify(exec)

export async function installDep({ data, cwd }: PkgPluginEntryOptions): Promise<void> {
  const { appName, language, manager } = data
  const commands = generateCommands({ appName, cwd })

  logger.blueBright(`Pkg CLI v${getVersion()}`)
  logger.white(commands.installDep[language].created)
  const sp = spinner(commands.installDep[language].start)
  sp.start()
  try {
    await promisifyExec(`cd ${pathResolve(cwd, appName)} && ${manager} install`)
  } catch (e) {
    sp.stop()
    logger.$error(e)
    process.exit(0)
  }
  sp.stop()
  logger.white(commands.installDep[language].end)
  try {
    await promisifyExec(
      `cd ${pathResolve(cwd, appName)} && git init && git add . && git commit -m "init"`
    )
  } catch (e) {
    console.log(e)
  }
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
