import inquirer from 'inquirer'
import { workFlow } from '../src/ask'
import * as validate from '../src/utils/validate-entry'

jest.mock('inquirer')

describe('ask', () => {
  it('workFlow', async () => {
    // @ts-ignore
    inquirer.prompt = jest.fn().mockResolvedValue({
      language: 'cn',
      platform: 'ts',
      pkgName: '@ifake/pkg'
    })
    // @ts-ignore
    validate.validateEntry = jest.fn().mockResolvedValue({})
    await expect(workFlow('app-test')).resolves.toEqual({
      appName: 'app-test',
      language: 'cn',
      platform: 'ts',
      pkgName: '@ifake/pkg',
      scopePkg: true
    })
  })
})
