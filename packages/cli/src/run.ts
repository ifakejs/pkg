interface RunOptions {
  platform: string
  eslint: string
  jest: string
  hooks?: string
}

export function run(options: RunOptions) {
  console.log(options)
}
