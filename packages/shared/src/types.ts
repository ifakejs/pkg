export interface RawOptions {
  platform: string
  eslint: string
  jest: string
  hooks?: string
  pkgName: string
  library: string
  appName: string
}

export interface FinalOptions {
  platform: string
  eslint: boolean
  jest: boolean
  hooks?: boolean
  pkgName: string
  library: string
  appName: string
}
