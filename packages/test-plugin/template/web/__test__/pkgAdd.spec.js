import { pkgAdd } from '../src/pkgAdd'

describe('pkgAdd', () => {
  it('should return correct value', () => {
    expect(pkgAdd(1, 2)).toBe(3)
  })
})
