import { RawOptions, FinalOptions } from '@ifake/pkg-shared'

export function transferOptions(options: RawOptions): FinalOptions {
  const { eslint, jest, npmMirror } = options
  const transferData = {
    eslint: eslint === 'Yes',
    jest: jest === 'Yes',
    npmMirror: npmMirror === 'Yes'
  }
  return {
    ...options,
    ...transferData
  }
}
