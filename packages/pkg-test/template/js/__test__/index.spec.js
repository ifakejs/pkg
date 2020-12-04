import { pkgAdd } from '../src'

describe('pkgAdd', () => {
  it('should return correct value', function () {
    expect(pkgAdd(2, 3)).toBe(5)
  })
})
