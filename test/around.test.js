import around from '../src/around'

test('should wrap a string', () => {
  expect(around('foo', '<', '>')).toBe('<foo>')
  expect(around('foo', ['<', '>'], ['<', '>'])).toBe('<>foo<>')
})
