import { RawOptions, FinalOptions } from './types'

export function transferOptions(options: RawOptions): FinalOptions {
  const { eslint, jest, npmMirror } = options
  const transferData = {
    eslint: eslint === 'Yes',
    jest: jest === 'Yes',
    npmMirror: npmMirror === 'Yes'
  }
  console.log(options)
  return {
    ...options,
    ...transferData
  }
}
