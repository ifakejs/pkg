import { RawOptions, FinalOptions } from '@ifake/pkg-shared'

export function transferOptions(options: RawOptions): FinalOptions {
  const { eslint, hooks, jest } = options
  const transferData = {
    eslint: eslint === 'Yes',
    hooks: hooks === 'Yes',
    jest: jest === 'Yes'
  }
  return {
    ...options,
    ...transferData
  }
}
