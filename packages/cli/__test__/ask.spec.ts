import inquirer from 'inquirer'
import { workFlow } from '../src/ask'
import * as validate from '../src/utils/validate-entry'

jest.mock('inquirer')
jest.mock('child_process')

describe('ask', () => {
  it('workFlow', async () => {
    // @ts-ignore
    inquirer.prompt = jest.fn().mockResolvedValue({
      language: 'cn',
      platform: 'ts'
    })
    // @ts-ignore
    validate.validateEntry = jest.fn().mockResolvedValue({})
    await expect(workFlow('app-test')).resolves.toEqual({
      appName: 'app-test',
      eslint: false,
      hooks: false,
      jest: false,
      language: 'cn',
      npmMirror: false,
      platform: 'ts'
    })
  })
})
