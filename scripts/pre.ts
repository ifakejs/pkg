import util from 'util'
import { exec } from 'child_process'

const promisifyExec = util.promisify(exec)

const envStr = process.argv[2]
const PreDo = 'prestart'
const Undo = 'restart'

if (!envStr) {
  console.warn('This command need a env variable for execute npm related.')
  console.log(`The valid commands are ${PreDo}, ${Undo}`)
}

if (envStr && envStr === PreDo) {
  console.log('Start run npm link command...')
  promisifyExec('cd ./packages/cli && npm link').then(() => {
    console.log('done.')
  })
}

if (envStr && envStr === Undo) {
  console.log('Start run npm unlink command...')
  promisifyExec('cd ./packages/cli && npm unlink').then(() => {
    console.log('done.')
  })
}
