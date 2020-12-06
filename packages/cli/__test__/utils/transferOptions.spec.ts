import { transferOptions } from '../../src/utils/transfer-options'
import { FinalOptions, RawOptions } from '@ifake/pkg-shared'

interface ExtraOption {
  eslint?: string
  jest?: string
  hooks?: string
}

describe('transferOptions', () => {
  const rawOptions: RawOptions = {
    platform: 'ts',
    eslint: 'Yes',
    jest: 'Yes',
    hooks: 'Yes',
    pkgName: 'app-test',
    library: 'app',
    appName: 'App',
    language: 'en',
    manager: 'yarn',
    npmMirror: true
  }

  const rawTransferOptions: FinalOptions = {
    platform: 'ts',
    eslint: true,
    jest: true,
    hooks: true,
    pkgName: 'app-test',
    library: 'app',
    appName: 'App',
    language: 'en',
    manager: 'yarn',
    npmMirror: true
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

  describe('Hooks', () => {
    it('without hooks', () => {
      expect(
        transferOptions(
          generateOptions({
            hooks: 'No'
          })
        )
      ).toEqual({
        ...rawTransferOptions,
        hooks: false
      })
    })

    it('with hooks', () => {
      expect(
        transferOptions(
          generateOptions({
            hooks: 'Yes'
          })
        )
      ).toEqual({
        ...rawTransferOptions,
        hooks: true
      })
    })
  })
})
