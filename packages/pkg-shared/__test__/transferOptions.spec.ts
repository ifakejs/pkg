import { FinalOptions, RawOptions, transferOptions } from '../src'

interface ExtraOption {
  eslint?: string
  jest?: string
}

describe('transferOptions', () => {
  const rawOptions: RawOptions = {
    platform: 'ts',
    eslint: 'Yes',
    jest: 'Yes',
    pkgName: 'app-test',
    library: 'app',
    appName: 'App',
    language: 'en',
    manager: 'yarn',
    npmMirror: 'Yes',
    scopePkg: false
  }

  const rawTransferOptions: FinalOptions = {
    platform: 'ts',
    eslint: true,
    jest: true,
    pkgName: 'app-test',
    library: 'app',
    appName: 'App',
    language: 'en',
    manager: 'yarn',
    npmMirror: true,
    scopePkg: false
  }

  const generateOptions = (extraOption: ExtraOption) => {
    return {
      ...rawOptions,
      ...extraOption
    }
  }

  describe('Eslint', () => {
    it('without eslint', () => {
      expect(
        transferOptions(
          generateOptions({
            eslint: 'No'
          })
        )
      ).toEqual({
        ...rawTransferOptions,
        eslint: false
      })
    })

    it('with eslint', () => {
      expect(
        transferOptions(
          generateOptions({
            eslint: 'Yes'
          })
        )
      ).toEqual({
        ...rawTransferOptions,
        eslint: true
      })
    })
  })

  describe('Jest', () => {
    it('without jest', () => {
      expect(
        transferOptions(
          generateOptions({
            jest: 'No'
          })
        )
      ).toEqual({
        ...rawTransferOptions,
        jest: false
      })
    })

    it('with jest', () => {
      expect(
        transferOptions(
          generateOptions({
            jest: 'Yes'
          })
        )
      ).toEqual({
        ...rawTransferOptions,
        jest: true
      })
    })
  })
})
