import util from 'util'
import { exec } from 'child_process'

const promisifyExec = util.promisify(exec)

console.log('Start run npm link command...')
promisifyExec('cd ./packages/cli && npm link').then(() => {
  console.log('done.')
})
