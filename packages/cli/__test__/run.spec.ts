import { run } from '../src/run'
import { RawOptions } from '@ifake/pkg-shared'
import * as pkgTemplate from '@ifake/pkg-template'
import * as eslintTemplate from '@ifake/pkg-eslint'
import * as packageTemplate from '@ifake/pkg-package'
import * as testTemplate from '@ifake/pkg-test'
import * as transferOptions from '../src/utils/transfer-options'
import * as installDep from '../src/utils/install-dep'

describe('Run', () => {
  const rawOptions: RawOptions = {
    platform: 'ts',
    eslint: 'Yes',
    jest: 'Yes',
    pkgName: 'app-test',
    library: 'app',
    appName: 'App',
    language: 'en',
    manager: 'yarn',
    npmMirror: true
  }

  beforeAll(async () => {
    // @ts-ignore
    pkgTemplate.pkgTemplate = jest.fn().mockImplementation(() => {})
    // @ts-ignore
    eslintTemplate.eslintTemplate = jest.fn().mockImplementation(() => {})
    // @ts-ignore
    packageTemplate.packageTemplate = jest.fn().mockImplementation(() => {})
    // @ts-ignore
    testTemplate.testTemplate = jest.fn().mockImplementation(() => {})
    // @ts-ignore
    transferOptions.transferOptions = jest.fn().mockImplementation(() => {})
    // @ts-ignore
    installDep.installDep = jest.fn().mockImplementation(() => {})
    await run(rawOptions)
  })

  it('pkgTemplate should have been called once', () => {
    expect(pkgTemplate.pkgTemplate).toBeCalledTimes(1)
  })

  it('eslintTemplate should have been called once', () => {
    expect(eslintTemplate.eslintTemplate).toBeCalledTimes(1)
  })

  it('packageTemplate should have been called once', () => {
    expect(packageTemplate.packageTemplate).toBeCalledTimes(1)
  })

  it('testTemplate should have been called once', () => {
    expect(testTemplate.testTemplate).toBeCalledTimes(1)
  })

  it('transferOptions should have been called once', () => {
    expect(transferOptions.transferOptions).toBeCalledTimes(1)
  })

  it('installDep should have been called once', () => {
    expect(installDep.installDep).toBeCalledTimes(1)
  })
})
