import { logger, pathResolve } from '@ifake/pkg-shared'

export const commands = {
  language: {
    en: {
      message: 'Please pick the interactive command line language:',
      choices: ['简体中文', 'English']
    }
  },
  platform: {
    en: {
      message: 'Please pick a package type:',
      choices: [
        {
          name: 'TS - Based on the rollup. Pure Ts library.',
          value: 'ts',
          short: 'TS'
        },
        {
          name: 'JS - Based on the rollup. Pure Js library.',
          value: 'js',
          short: 'JS'
        },
        {
          name: 'Web-JS - Based on the webpack. Support build JS & CSS library',
          value: 'web',
          short: 'Web-JS'
        },
        {
          name: 'Web-TS - Based on the webpack. Support build TS & CSS library',
          value: 'web-ts',
          short: 'Web-TS'
        }
      ]
    },
    cn: {
      message: '选择要创建的包类型:',
      choices: [
        {
          name: 'TS - 基于Rollup和Typescript构建npm库(纯Ts库)',
          value: 'ts',
          short: 'TS'
        },
        {
          name: 'JS - 基于Rollup和Javascript构建npm库(纯Js库).',
          value: 'js',
          short: 'JS'
        },
        {
          name: 'Web-JS - 基于Webpack和Javascript(支持创建UI样式的npm库).',
          value: 'web',
          short: 'Web-JS'
        },
        {
          name: 'Web-TS - 基于Webpack和Typescript(支持创建UI样式的npm库).',
          value: 'web-ts',
          short: 'Web-TS'
        }
      ]
    }
  },
  eslint: {
    en: {
      message: 'Do you want to pick the eslint / prettier config?',
      choices: ['Yes', 'No']
    },
    cn: {
      message: '你想要把Eslint加入到项目里吗?',
      choices: ['Yes', 'No']
    }
  },
  jest: {
    en: {
      message: 'Do you want to add unit testing (jest framework) solution?',
      choices: ['Yes', 'No']
    },
    cn: {
      message: '你想要把单元测试(Jest)加入到项目里吗?',
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
      exitMessage: `${logger.bgBlue.raw('INFO')} ${logger.white.raw(
        'Exiting the execution environment.'
      )}`
    },
    cn: {
      message: '目录已存在, 你确定要覆盖吗?',
      exitMessage: `${logger.bgBlue.raw('INFO')} ${logger.white.raw('已退出交互式命令行.')}`
    }
  },
  validateExist: {
    en: {
      exist: (appName: string) =>
        `🗑  The old ${logger.greenBright.raw(appName)} folder was deleted successfully.`,
      beforeDel: `${logger.bgBlue.raw('INFO')} Ready to delete...`,
      afterDel: 'Delete done.',
      newly: (appName: string) =>
        `🎉 The new ${logger.greenBright.raw(appName)} folder was created successfully.\n`
    },
    cn: {
      exist: (appName: string) => `🗑  旧目录 ${logger.greenBright.raw(appName)} 已经被删除.`,
      beforeDel: `${logger.bgBlue.raw('INFO')} 准备执行删除...`,
      afterDel: '删除完毕.',
      newly: (appName: string) => `🎉 新目录 ${logger.greenBright.raw(appName)} 已经被创建.\n`
    }
  },
  installDep: {
    en: {
      created: (appName: string) =>
        `✨  Creating project in ${logger.yellow.raw(pathResolve(process.cwd(), appName))}.`,
      start: 'Installing project dependencies. This might take a while...',
      end: (appName: string) =>
        `🎉  Successfully created project dependencies for ${logger.yellow.raw(appName)}.`
    },
    cn: {
      created: (appName: string) =>
        `✨  项目创建在 ${logger.yellow.raw(pathResolve(process.cwd(), appName))}.`,
      start: '正在安装依赖. 这需要花费一点时间...',
      end: (appName: string) => `🎉  ${logger.yellow.raw(appName)} 项目依赖安装成功.`
    }
  },
  manager: {
    en: {
      message: 'Which package manager do you want to use?'
    },
    cn: {
      message: '你想使用哪个软件包管理器?'
    }
  },
  npmMirror: {
    en: {
      message: 'Do you need to install Taobao Mirror to speed up the installation of dependencies?'
    },
    cn: {
      message: '你需要安装淘宝镜像来加速安装项目依赖吗?'
    }
  }
}
