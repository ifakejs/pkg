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
        `${logger.bgBlue.raw('INFO')} The old ${logger.greenBright.raw(
          appName
        )} folder was deleted successfully. 🗑`,
      beforeDel: `${logger.bgBlue.raw('INFO')} Ready to delete...`,
      afterDel: 'Delete done.',
      newly: (appName: string) =>
        `${logger.bgBlue.raw('INFO')} The new ${logger.greenBright.raw(
          appName
        )} folder was created successfully. 🎉`
    },
    cn: {
      exist: (appName: string) =>
        `${logger.bgBlue.raw('INFO')} 旧目录 ${logger.greenBright.raw(appName)} 已经被删除. 🗑`,
      beforeDel: `${logger.bgBlue.raw('INFO')} 准备执行删除...`,
      afterDel: '删除完毕.',
      newly: (appName: string) =>
        `${logger.bgBlue.raw('INFO')} 新目录 ${logger.greenBright.raw(appName)} 已经被创建. 🎉`
    }
  },
  installDep: {
    en: {
      created: `${logger.bgGreen.raw('INFO')} ${logger.white.raw(
        'Project has been generated successfully.'
      )}🎉`,
      start: logger.yellow.raw('Starting install the dependencies...'),
      end: `${logger.blue.raw('DONE')} ${logger.yellow.raw('Dependencies has been installed.🎉')}`
    },
    cn: {
      created: `${logger.bgGreen.raw('INFO')} ${logger.white.raw('项目创建成功.')}🎉`,
      start: logger.yellow.raw('正在安装依赖...'),
      end: `${logger.bgBlue.raw('DONE')} ${logger.yellow.raw('项目依赖安装成功.🎉')}`
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
