import { RawOptions, FinalOptions } from '@ifake/pkg-shared'

export function transferOptions(options: RawOptions): FinalOptions {
  const { eslint, hooks, jest } = options
  const transferData = {
    eslint: eslint === 'Yes',
    hooks: jest === 'Yes',
    jest: hooks === 'Yes'
  }
  return {
    ...options,
    ...transferData
  }
}
