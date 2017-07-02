import trimLeft from '../src/trim-left'

test('should trim whitespace left of string', () => {
  const str = '     foo'
  expect(trimLeft(str)).toBe('foo')
})
