import inquirer from 'inquirer'
import { commands } from './config/commands'

function ask(options: Record<string, any>): Record<string, any> {
  return inquirer.prompt(options)
}

async function languageSelect(): Promise<any> {
  return ask([
    {
      type: 'list',
      name: 'language',
      message: commands.language.en.message,
      choices: commands.language.en.choices
    }
  ])
}

export async function workFlow(): Promise<any> {
  const { language } = await languageSelect()
  const key = language === 'English' ? 'en' : 'cn'

  const firstStage: Record<string, any> = await ask([
    {
      type: 'list',
      name: 'platform',
      message: commands.platform[key].message,
      choices: commands.platform[key].choices
    },
    {
      type: 'list',
      name: 'eslint',
      message: commands.eslint[key].message,
      choices: commands.eslint[key].choices
    },
    {
      type: 'list',
      name: 'jest',
      message: commands.jest[key].message,
      choices: commands.jest[key].choices
    }
  ])

  let secondStage: Record<string, any> | {} = {}

  if (firstStage.eslint === 'Yes') {
    secondStage = await ask([
      {
        type: 'list',
        name: 'hooks',
        message: commands.hooks[key].message,
        choices: commands.hooks[key].choices
      }
    ])
  }

  return {
    ...firstStage,
    ...secondStage
  }
}
