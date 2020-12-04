import inquirer from 'inquirer'
import validatePkgName from 'validate-npm-package-name'
import { TranslateLanguage } from '@ifake/pkg-shared'
import { commands } from './config/commands'
import { validateEntry } from './utils/validate-entry'

export function ask(options: Record<string, any>): Record<string, any> {
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

export async function workFlow(appName: string): Promise<any> {
  const { language } = await languageSelect()
  const key: TranslateLanguage = language === 'English' ? 'en' : 'cn'
  await validateEntry({ appName, language: key })

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

  const thirdStage = await ask([
    {
      name: 'pkgName',
      message: commands.pkgName[key].message,
      // @ts-ignore
      validate: (pkgName?: any) => {
        if (!pkgName) {
          return false
        }
        const { validForNewPackages, validForOldPackages, errors, warnings } = validatePkgName(
          pkgName
        )

        if (validForNewPackages && validForOldPackages) {
          return true
        }

        if (key === 'en') {
          if (errors) return errors[0]
          if (warnings) return warnings[0]
        } else {
          return 'npm包名有误, 请检查.'
        }
      }
    },
    {
      name: 'library',
      message: commands.library[key].message,
      validate: (exposeName: string) => {
        return !!exposeName
      }
    },
    {
      type: 'list',
      name: 'manager',
      message: commands.manager[key].message,
      choices: ['yarn', 'npm']
    }
  ])

  return {
    appName,
    language: key,
    ...firstStage,
    ...secondStage,
    ...thirdStage
  }
}
