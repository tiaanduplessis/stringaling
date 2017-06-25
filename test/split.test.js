import split from '../src/split'

test('should split a string on delimter', () => {
  const str = 'foo bar baz'
  expect(split(str, ' ')).toEqual(['foo', 'bar', 'baz'])
})
