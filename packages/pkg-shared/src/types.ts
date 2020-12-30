export type TranslateLanguage = 'en' | 'cn'

type Manager = 'npm' | 'yarn'

export interface RawOptions {
  platform: string
  eslint: string
  jest: string
  pkgName: string
  library: string
  appName: string
  language: TranslateLanguage
  manager: Manager
  npmMirror: string
  scopePkg: boolean
}

export interface FinalOptions {
  platform: string
  eslint: boolean
  jest: boolean
  pkgName: string
  library: string
  appName: string
  language: TranslateLanguage
  manager: Manager
  npmMirror: boolean
  scopePkg: boolean
}

export interface PkgPluginEntryOptions {
  cwd: string
  data: FinalOptions
}
