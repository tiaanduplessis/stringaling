import last from '../src/last'

test('should return end of string of given length', () => {
  expect(last('foobar', 3)).toBe('bar')
})
