import inquirer from 'inquirer'
import validatePkgName from 'validate-npm-package-name'
import { TranslateLanguage, generateCommands } from '@ifake/pkg-shared'
import { validateEntry } from './utils/validate-entry'

export function ask(options: Record<string, any>): Record<string, any> {
  return inquirer.prompt(options)
}

async function languageSelect(commands: any): Promise<any> {
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
  const commands = generateCommands({ appName, cwd: process.cwd() })
  const { language } = await languageSelect(commands)
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

  const secondStage = await ask([
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
    },
    {
      type: 'list',
      name: 'npmMirror',
      message: commands.npmMirror[key].message,
      choices: ['Yes', 'No']
    }
  ])

  return {
    appName,
    scopePkg: secondStage.pkgName.trim().startsWith('@'),
    language: key,
    ...firstStage,
    ...secondStage
  }
}
