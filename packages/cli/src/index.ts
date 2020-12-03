#!/usr/bin/env node

import commander from 'commander'
import { getVersion } from './utils/version'
import { workFlow } from './ask'
import { run } from './run'

commander.version(getVersion(), '-v')

commander
  .command('init <app-name>')
  .description('create projects based on the interactive command line.')
  .action(async appName => {
    await run(await workFlow(appName))
  })

commander
  .command('upgrade')
  .description('upgrade scaffolding configurations, please proceed with caution!')
  .action(() => {
    console.log('upgrade')
  })

commander
  .command('*')
  .description('Type a wrong command.')
  .action(() => {
    console.log('Unrecognised commands. \nPlease try type `pkg -h` to get the whole command list.')
  })

commander.parse(process.argv)
