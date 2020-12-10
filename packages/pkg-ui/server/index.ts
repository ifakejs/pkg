import * as path from 'path'
import utils from 'util'
import { execSync } from 'child_process'

export function uiServer(cwd: string) {
  process.env.parentCwd = cwd
  // @ts-ignore
  utils.promisify(execSync)(`cd ${path.resolve(__dirname)} && npm run monitor`, {
    stdio: 'inherit'
  })
}
