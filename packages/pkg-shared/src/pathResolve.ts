import * as path from 'path'

export function pathResolve(entry: string, dest: string) {
  return path.resolve(entry, dest)
}
