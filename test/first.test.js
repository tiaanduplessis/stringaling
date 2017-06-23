import first from '../src/first'

test('should return substring to given length', () => {
  expect(first('foobarbaz', 3)).toBe('foo')
})
