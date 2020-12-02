export const commands = {
  language: {
    en: {
      message: 'Please select the language',
      choices: ['简体中文', 'English']
    }
  },
  platform: {
    en: {
      message: 'Please select the package type.',
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
      message: '请选择要创建的包类型',
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
  }
}
