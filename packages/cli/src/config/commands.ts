import { logger } from '@ifake/pkg-shared'

export const commands = {
  language: {
    en: {
      message: 'Please select the interactive command line language:',
      choices: ['简体中文', 'English']
    }
  },
  platform: {
    en: {
      message: 'Please select the package type:',
      choices: [
        {
          name: 'TS - Based on the rollup. Pure Ts library.',
          value: 'ts'
        },
        {
          name: 'JS - Based on the rollup. Pure Js library.',
          value: 'js'
        },
        {
          name: 'Web-JS - Based on the webpack. Support build JS & CSS library',
          value: 'web'
        },
        {
          name: 'Web-TS - Based on the webpack. Support build TS & CSS library',
          value: 'web-ts'
        }
      ]
    },
    cn: {
      message: '请选择要创建的包类型:',
      choices: [
        {
          name: 'TS - 基于Rollup和Typescript构建npm库(纯Ts库)',
          value: 'ts'
        },
        {
          name: 'JS - 基于Rollup和Javascript构建npm库(纯Js库).',
          value: 'js'
        },
        {
          name: 'Web-JS - 基于Webpack和Javascript(支持创建UI样式的npm库).',
          value: 'web'
        },
        {
          name: 'Web-TS - 基于Webpack和Typescript(支持创建UI样式的npm库).',
          value: 'web-ts'
        }
      ]
    }
  },
  eslint: {
    en: {
      message: 'Do you want to add Eslint to the project?',
      choices: ['Yes', 'No']
    },
    cn: {
      message: '你想要把Eslint加入到项目里吗?',
      choices: ['Yes', 'No']
    }
  },
  jest: {
    en: {
      message: 'Do you want to add Jest(Testing framework) to the project?',
      choices: ['Yes', 'No']
    },
    cn: {
      message: '你想要把Jest(测试框架)加入到项目里吗?',
      choices: ['Yes', 'No']
    }
  },
  hooks: {
    en: {
      message: 'Do you want to add Husky & Lint-staged to the project?',
      choices: ['Yes', 'No']
    },
    cn: {
      message: '你想要把提交代码时自动lint代码命令加入到项目里吗?',
      choices: ['Yes', 'No']
    }
  },
  pkgName: {
    en: {
      message: 'Please enter the name of the npm package to be published:'
    },
    cn: {
      message: '请输入需要发布npm包名:'
    }
  },
  library: {
    en: {
      message: 'Please enter the global name of the npm package in browser. (umd mode):'
    },
    cn: {
      message: '请输入npm包暴露的全局名称(umd模式):'
    }
  },
  checkExist: {
    en: {
      message: 'The directory already exists, are you sure you want to overwrite it?',
      exitMessage: 'Exiting the execution environment.'
    },
    cn: {
      message: '目录已存在, 你确定要覆盖吗?',
      exitMessage: '已退出交互式命令行.'
    }
  },
  validateExist: {
    en: {
      exist: (appName: string) =>
        `The ${logger.greenBright.raw(appName)} folder was deleted successfully. 🗑`,
      newly: (appName: string) =>
        `The ${logger.greenBright.raw(appName)} folder was created successfully. 🎉\n`
    },
    cn: {
      exist: (appName: string) => `旧目录 ${logger.greenBright.raw(appName)} 已经被删除. 🗑`,
      newly: (appName: string) => `新目录 ${logger.greenBright.raw(appName)} 已经被创建. 🎉\n`
    }
  }
}
