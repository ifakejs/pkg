export default {
  appNameLabel: {
    en: {
      name: 'Project Name:',
      placeholder: 'Please input the project name.'
    },
    cn: {
      name: '项目名称:',
      placeholder: '请输入项目名称.'
    }
  },
  pkgNameLabel: {
    en: {
      name: 'Npm Package Name:',
      placeholder: 'Please input the project package name.'
    },
    cn: {
      name: 'Npm包名:',
      placeholder: '请输入要发布包的名称.'
    }
  },
  libraryLabel: {
    en: {
      name: 'UMD Name:',
      placeholder: 'Please input global name of the npm package in browser'
    },
    cn: {
      name: 'UMD名称:',
      placeholder: '请输入umd模式下暴露的全局名称.'
    }
  },
  npmMirrorLabel: {
    en: {
      name: 'Npm Mirror:',
      placeholder: 'Install Taobao Mirror to speed up the installation of dependencies?'
    },
    cn: {
      name: 'Npm镜像:',
      placeholder: '是否安装淘宝镜像来加速历来安装?'
    }
  },
  managerLabel: {
    en: 'NPM Package Type:',
    cn: 'NPM包类型:'
  },
  packageTypeLabel: {
    en: 'Pick A Package Type:',
    cn: '选择要创建的包类型:'
  },
  eslintLabel: {
    en: 'Pick The Eslint / Prettier:',
    cn: '选择代码风格校验:'
  },
  jestLabel: {
    en: 'Pick The Unit Test:',
    cn: '选择单元测试框架:'
  },
  platform: {
    en: {
      js: 'Based on the rollup. Pure Ts library.',
      ts: 'Based on the rollup. Pure Js library.',
      'web-js': 'Based on the webpack. Support build JS & CSS library',
      'web-ts': 'Based on the webpack. Support build TS & CSS library'
    },
    cn: {
      js: '基于Rollup和Javascript构建npm库(纯Js库)',
      ts: '基于Rollup和Typescript构建npm库(纯Ts库)',
      'web-js': '基于Webpack和Javascript(支持创建UI样式的npm库)',
      'web-ts': '基于Webpack和Typescript(支持创建UI样式的npm库)'
    }
  }
}
