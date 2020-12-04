export type TranslateLanguage = 'en' | 'cn'

type Manager = 'npm' | 'yarn'

export interface RawOptions {
  platform: string
  eslint: string
  jest: string
  hooks?: string
  pkgName: string
  library: string
  appName: string
  language: TranslateLanguage
  manager: Manager
  npmMirror: boolean
}

export interface FinalOptions {
  platform: string
  eslint: boolean
  jest: boolean
  hooks?: boolean
  pkgName: string
  library: string
  appName: string
  language: TranslateLanguage
  manager: Manager
  npmMirror: boolean
}
