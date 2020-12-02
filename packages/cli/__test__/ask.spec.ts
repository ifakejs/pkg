import inquirer from 'inquirer'
import { workFlow } from '../src/ask'

jest.mock('inquirer')

describe('ask', () => {
  it('workFlow', async () => {
    // @ts-ignore
    inquirer.prompt = jest.fn().mockResolvedValue({ platform: 'ts' })
    await expect(workFlow()).resolves.toEqual({ platform: 'ts' })
  })
})
