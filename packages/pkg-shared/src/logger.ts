import chalk from 'chalk'

const colors: Array<string> = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'blackBright',
  'redBright',
  'greenBright',
  'yellowBright',
  'blueBright',
  'magentaBright',
  'cyanBright',
  'whiteBright'
]

const bgColors: Array<string> = [
  'bgBlack',
  'bgRed',
  'bgGreen',
  'bgYellow',
  'bgBlue',
  'bgMagenta',
  'bgCyan',
  'bgWhite',
  'bgGray',
  'bgRedBright',
  'bgGreenBright',
  'bgYellowBright',
  'bgBlueBright',
  'bgMagentaBright',
  'bgCyanBright',
  'bgWhiteBright'
]

const log = console.log
const logger: any = {}
const mergeColor = [...colors, ...bgColors]

mergeColor.map(item => {
  // @ts-ignore
  logger[item] = (...arg: Array<string>) => log(chalk[item](arg.join(' ')))
  // @ts-ignore
  logger[item].raw = chalk[item]
})

const error = (t: string) => log(chalk.red(t))
const warning = (t: string) => log(chalk.keyword('orange')(t))
const success = (t: string) => log(chalk.greenBright(t))
const info = (t: string) => log(chalk.blackBright(t))

logger.$error = error
logger.$warning = warning
logger.$success = success
logger.$info = info

export { logger }
