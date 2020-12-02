type AllowTypes = 'ts' | 'js' | 'web' | 'web-ts'
interface ReturnedValidType {
  type: AllowTypes
  status: boolean
}
const allowTypes: Array<AllowTypes> = ['ts', 'js', 'web', 'web-ts']

export function validType(type: AllowTypes): ReturnedValidType {
  return {
    type,
    status: allowTypes.includes(type)
  }
}
