import { RawOptions, FinalOptions } from '@ifake/pkg-shared'

export function transferOptions(options: RawOptions): FinalOptions {
  const { eslint, jest } = options
  const transferData = {
    eslint: eslint === 'Yes',
    jest: jest === 'Yes'
  }
  return {
    ...options,
    ...transferData
  }
}
