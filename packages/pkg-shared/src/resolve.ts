import * as path from 'path'

export function resolve(entry: string, dest: string) {
  return path.resolve(entry, dest)
}
